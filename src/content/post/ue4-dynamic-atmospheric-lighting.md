---
publishDate: 2023-01-08T00:00:00Z
title: Wrangling with UE4 Dynamic Atmospheric Lighting
draft: true
description: How to take your dynamic lighting to the next level in Unreal Engine 4
excerpt: Custom UE4 dynamic lighting
category: Unreal Engine
tags:
  - rendering
  - tutorial
  - hlsl
  - cpp
---

Our story begins, as always in engineering, with a problem. It had been a few years since we decided on a statically
built lighting scheme for Project Borealis, after using an IBL-based technique with dynamic lighting (which we showed
off in Updated 5). The IBL technique was great when it worked, but it had a lot of issues with artist control and it was
not intuitive. The artists were requesting we be able to do incredibly complex scenes with many different moving parts
that was basically impossible to do with static lighting, and they were also not satisfied with the functionality or
speed of the recent GPU lightmass feature in UE4, which was not fast enough to do real-time iteration yet.

Luckily, NVIDIA recently released DDGI, which was a raytracing framework for dynamic lighting in UE4, and there was our
answer. It supported baking the raytracing results, and of course you could see them in real-time in editor too. It was
perfect. But of course, we still needed to take it a step further, due to our fairly unique scene.
