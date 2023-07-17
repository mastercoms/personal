---
title: Glowstone
description: Open-source Minecraft server software.
image: ~/assets/images/portfolio/glowstone.png
---

## About

Glowstone is an open-source, clean-room reimplementation of the Minecraft and CraftBukkit server software. It
reimplements Minecraft's game server functionality from scratch through documentation and experimentation, as well as
reimplementing CraftBukkit's API support for Bukkit plugins, which are small server-side mods that hook into various
game functionality.

## Background

I first started working on Glowstone in 2014 as my first foray into an open-source community. I had been interested in
Bukkit servers as I had been hosting a custom MMORPG through CraftBukkit software for nearly 3 years (one of the most
popular at the time, mind you!). Glowstone presented an amazing opportunity for new levels of creativity with the
experience for our players. Unfortunately, despite all the fun with learning how to communicate in an open-source
project and getting familiar with the development flow (as well the brief turmoil caused by Bukkit's implosion), not
even a year into my adventure with Glowstone, development was halted in 2015 due to lack of interest and time.

Thankfully, a fork was started called Glowstone++, with a lot of radical changes to standardize the project with the
rest of the Bukkit community, and a new development philosophy where changes would be accepted more liberally to
accelerate the project's growth, as it was still early alpha-level software (clean room reimplementation is hard!!).
Shortly after its inception, I joined the team and began contributing at that pace. We made a lot of awesome progress
together and the community grew rapidly in turn. Eventually, we merged back into Glowstone proper, I became maintainer
and spearheaded focused improvement projects to keep up the pace, which you can see on
[the blog](https://glowstone.net/news/). Unfortunately, this didn't last forever.

When Minecraft 1.13 hit, it was the biggest technical update to Minecraft, bigger than we could even anticipate with
prior warning. It completely destroyed nearly all of our assumptions about the game, and advanced numerous components of
the game with complicated rewrites. It hit us like a brick wall. And, with that, Glowstone's progress reduced to a
snail's pace, something we still have not recovered from to this day! Even with a $1000 bounty and documentation on how
to implement various aspects, it just requires too many refactors to really be quickly picked up by an open-source team.
Despite this, the team today is still working on reworks, 5 years later. We're closer than ever, but it's required a
good look into project health, maintainership strategies, and not to understate, lots and lots of technical discussions
and work.

## Experience

It would be an understatement to say that there was a wealth of knowledge on this journey. I think my most valuable
experience on Glowstone was the open-source and social aspect of it. It taught me valuable things about code review,
planning, leadership and community.

As for the technical experience, I certainly learned a lot about Java. Here's a neat list of things:

- Build systems: making Maven & Gradle projects from scratch
- Reflection and byte-code modification
- Interface and class design
- Functional programming
- Lombok helper annotations
- Basic Kotlin
- Mixins
- Streams
- Testing frameworks: JUnit 4/5, Mockito
- Networking: Netty, protocols, channels
- I/O: file, console input with JLine 1/2, logging
- Optimization: Yourkit profiling, Java alloc optimizations, JVM flags, collection optimization and tuning
- Concurrency: threads, concurrent classes, executors, thread pools, fork-join

And through implementation, I learned a lot of general game development concepts:

- A\* pathfinding
- Taxicab search
- Basic physics (movement, gravity, friction, impulses)
- Perlin noise
- Procedural world generation
- Loot tables
- API contracts and guarantees
- Serialization
- Modding
