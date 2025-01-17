---
title: mastercomfig
description: A game optimization project and mod focused on Team Fortress 2.
image: ~/assets/images/portfolio/mastercomfig.png
---

## About

mastercomfig is a suite of various modifications and patches to the popular multiplayer game, Team Fortress 2. It's
mainly centered around a configuration file which changes various quality, optimization and gameplay settings both to
the user's preferences and desired performance/quality characteristics. The project has grown to include a web app for
generating a wide variety of customizations and patches chosen for inclusion by Valve into the live game!

## Background

Team Fortress 2 is one of my favorite games. It was one of my first multiplayer games I played on PC, joining after it
became free to play. It was quite popular in my friend group at the time, and everyone was overjoyed to teach me more
about the game. Eventually, I got into learning about what are called "performance configs", modifications to the game
to set certain internal settings through console scripting, something that goes back to the Quake professional days. I
first used "Chris' config" one of the older but still popular configs at the time, before moving on to "Comanglia's
config", which was the newest, most popular standard. Over time, curiosity got the best of me and I started looking into
various things that were in the config.

I started to find more and more discrepancies and incorrect settings, further encouraged by comments Valve had made that
I found in my research, including in a [2015 patch note](https://www.teamfortress.com/post.php?id=19733): “Fixed two
most common forms of framerate stuttering / hitching when using popular FPS configs”. Why were these FPS configs causing
stuttering and worse performance? It comes down to discrepancies between how setting variables are named and what they
actually do. Some things may _sound_ great, they might sound like they fix load stutters, or simplify map geometry, but
when you actually look into the internal functions of these variables, they do the exact opposite.

So, I started to make my own, definitive, highly researched FPS config, according to Valve comments and my experience
with programming, which I named TF2CFG. I shared it with my friends, who enjoyed the greater FPS boosts it gave, without
needing to sacrifice quality as much as the traditional ones did. I was much too shy to really release it to the public,
but after much pushing by my friends, and a much too clever suggestion on a new name by one of them, in 2017 I released
"mastercomfig", a play on words with my username and the word "config". I never really wanted to associate the config
with myself, like what had been done by other config makers, because I wanted this to be a central repository for the
whole community's knowledge. However, mastercomfig was too cute and clever of a name to resist.

Eventually, mastercomfig went from a basic list of settings to a full config scripting framework. This eventually made
way for the [mastercomfig web app](https://mastercomfig.com/app/), which allows users to easily customize quality
settings and other preferences, as well as expanding into other aspects of the game like advanced keyboard and mouse
binds, weapon preferences for crosshairs and effects. The core of the config also improved over time, gaining new
functionality and optimizations much beyond any other config by clever use of internal functionality and undocumented
behavior of the game and its engine. And even more, mastercomfig became a project to optimize and improve the game
itself. To date, there have been dozens of changes from mastercomfig included by Valve into the live game, going back to
2020 and some of them as recent as 2023. These updates touch into various exploit patches, fixes for the automated
cheater bots that have plagued TF2 for a few years, and performance improvements! And an even a greater set of patches
submitted at Valve's request is on the way! There's large engine optimizations and huge gameplay fixes being reviewed.

Today, the mastercomfig web app experience continues to expand, with new functionality being introduced every year,
including comfig huds and comfig quickplay. comfig huds was my first endeavour outside of the basic graphics/performance
space, and into deeper customization of the game. It was made in response to huds.tf, the most popular HUD customization
site at the time, shutting down. I made an initial version in great haste, pulling a couple all-nighters to launch it on
time so players wouldn't have any disruption to finding and downloading HUDs. Over time, it has received new features and
improvements, mostly to help creators showcase their HUDs better. This includes general UX improvements, but also a trending
algorithm which has been an area of great excitement in the HUD community. It captures data from a variety of signals to
determine how healthy the traffic for a HUD is, taking into consideration direct searches, word of mouth, downloads, and more.
It seems to generate results that users and authors expect, and is used to keep tabs on for new HUD launches as well as
finding the most popular HUDs.

As for comfig quickplay, this was a tool I decided to ship in response to requests in the community complaining about
the lack of community server variety, as well as the barrier to entry to playing a proper community pub game of Team Fortress 2.
It was not easy to make a server finding algorithm which factored in server status and player ping entirely in the browser,
but after some days of fine tuning, I was really happy with it. The absolutely magical feeling of queuing into a server with
comfig quickplay, and finding many others who had done the same to create a full and fun match, was something unlike anything
I had experienced in TF2 in quite some time. Although it has now fell into disuse due to updates and improvements to the game's
official matchmaking, I still think it serves a great purpose for people who are looking for a more community based experienced
while casually playing TF2.

## Experience

To say I learned a lot from this project would be selling it short. Having an opportunity to be this close to Valve
technology like the Source Engine has taught me a lot not only at a technical level, but also from a game design and
shipping perspective. I've learned the gospel of the playtest, of de facto intent through bugs that turn into features,
and how things don't have to be perfect to be perfect for the user. That being said, I did also learn _a lot_ of
technical stuff:

- C++
- Protobufs
- Threading algorithms: work stealing, thread scheduling, lockless algorithms
- Instruction optimization: SSE2 instrinsics, compiler assembly output optimization, prediction optimization
- Low level threading: pthreads, Windows synchronization events/objects and critical
- Networking: loss/latency compensation, buffer management
- Profiling: contention, distribution, lock convoys, I/O optimization, graphics driver and graphics interface
  optimization
- Graphics programming: HLSL, DirectX

And on the mastercomfig web app side, I certainly learned a lot of new tricks:

- Web frameworks: Astro, React, Vite
- Global web services: serverless functions with sub-millisecond process time, CDN and routing optimization, preloading
- Modern web app features: flexbox, lazy loading, hydration
- PWAs: filesystem APIs, notifications, offline support

Finally, mastercomfig is a community as much as it is a technical project. I learned from an open-source maintainership
perspective, as well as a more casual aspect with moderating its Discord server. I both focused on efforts to keep the
community safe and friendly through bot configuration and diligent moderation, and also making it a fun place for people
to interact about not just mastercomfig or even just TF2. Now, it feels like a big community which chats about really
anything, with quality conversations, lots of fun hang out sessions and game nights, as well as neat events we do
throughout the year. It's really the first time I managed a public community like this, and I have much to thank gdude
for his work on the Glowstone community, which I learned from, as well as the patient communities who tolerated the many
mistakes I made managing other, more specialized communities, like my MMORPG Minecraft server.
