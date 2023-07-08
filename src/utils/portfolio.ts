import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from '~/types';
import { cleanSlug, trimSlash, POST_PERMALINK_PATTERN } from './permalinks';

const generatePermalink = async ({ id, slug }) => {

  const permalink = POST_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedProject = async (project: CollectionEntry<'portfolio'>): Promise<Project> => {
  const { id, slug: rawSlug = '', data } = project;
  const { Content } = await project.render();

  const slug = cleanSlug(rawSlug.split('/').pop());

  return {
    id: id,
    slug: slug,

    ...data,

    Content: Content,

    permalink: await generatePermalink({ id, slug }),
  };
};

const load = async function (): Promise<Array<Project>> {
  const projects = await getCollection('portfolio');
  const normalizedProjects = projects.map(async (project) => await getNormalizedProject(project));

  const results = await Promise.all(normalizedProjects);

  return results;
};

let _projects: Array<Project>;

/** */
export const fetchProjects = async (): Promise<Array<Project>> => {
  if (!_projects) {
    _projects = await load();
  }

  return _projects;
};
