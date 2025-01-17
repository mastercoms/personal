---
publishDate: 2025-01-17T00:00:00Z
title: Securing a VPS
draft: true
description: A guide on how to secure a standard Linux VPS
excerpt: In this post, I will be going over some practical steps you can take towards securing a casual VPS server, as well as some tips here and there about more robust options to make you more aware of what's available.
category: Linux
tags:
  - linux
  - tutorial
---

In this post, I will be going over some practical steps you can take towards securing a casual VPS server, as well as some tips here and there about more robust options to make you more aware of what's available.

# Login

## Username

If you think about it, a username is essentially a second password.

If people don't have your username, they can't log in. This is why it's typically advised to disable root login, not because it's inherently vulnerable or insecure, but because its concept of access is flawed. It is both a known username AND has automatic root access. Most desktop Linux distros already do away the concept root login (through `passwd -dl root`), rather preferring elevation through something like `sudo`/`doas`, and it makes sense to apply that concept to SSH access as well.

Therefore in your SSH config, it's recommended to add:

```
PermitRootLogin no
```

So if you can't use root, what _should_ you use? Good usernames are traceable, in that you can tell from a username in the logs who/what did a certain action, but great usernames are both traceable AND private, in that ONLY you could tell who/what did something from the logs. Usernames, ideally, don't contain private information within themselves. You don't want to allow someone to guess your username based on some other information they might have about you, and you also don't want someone to discern personal information about you from your username.

It's convenient to use a generator like [LastPass's username generator](https://www.lastpass.com/features/username-generator), or ideally, you'd use something offline (like `gpw 1 9` or `openssl rand -hex 5` or `tr -dc A-Za-z0-9 </dev/urandom | head -c 9; echo`), because **NEVER GENERATE ANYTHING ONLINE**. You don't know how secure or private the website you're using is. You don't know their generation algorithm, whether they're storing information about you and what you generated, etc.

## Passwords?

Typically you don't want to use a password. Use

## Public Key Auth

## Multi Factor Auth

# SSH

https://infosec.mozilla.org/guidelines/openssh

https://www.ssh-audit.com/hardening_guides.html

`ssh-audit` command

```
LoginGraceTime 30s
PermitRootLogin no
#StrictModes yes
MaxAuthTries 3
MaxSessions 2
```

# fail2ban
