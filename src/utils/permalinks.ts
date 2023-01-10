import slugify from 'limax';

import { SITE, BLOG } from '~/config.mjs';
import { trim } from '~/utils/utils';

const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

export const cleanSlug = (text: string) =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

export const BLOG_BASE = cleanSlug(BLOG?.list?.pathname);
export const POST_BASE = cleanSlug(BLOG?.post?.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname);

/** */
export const getCanonical = (path = ''): string | URL => new URL(path, SITE.origin);

/** */
export const getPermalink = (slug = '', type = 'page'): string => {
  let permalink: string;

  switch (type) {
    case 'category':
      permalink = createPath(CATEGORY_BASE, cleanSlug(slug));
      break;

    case 'tag':
      permalink = createPath(TAG_BASE, cleanSlug(slug));
      break;

    case 'post':
      permalink = createPath(POST_BASE, cleanSlug(slug));
      break;

    case 'page':
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
