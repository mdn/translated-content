---
title: Techniques for game development
slug: Games/Techniques
---

{{GamesSidebar}}

这个页面为想要使用开放的网页技术来开发游戏的人列举出了必要的核心技术。

- [使用 asm.js 中的异步脚本](/zh-CN/docs/Games/Techniques/Async_scripts)
  - : 尤其在制作中大型游戏时，异步脚本是一项必备技术，你游戏中的 JavaScript 因此可以在主进程之外被编译，并被缓存以之后游戏的运行，这会带来显著的性能提升。这篇文章解释了如何做到。
- [Optimizing startup performance](/zh-CN/docs/Apps/Developing/Optimizing_startup_performance)
  - : How to make sure your game starts up quickly, smoothly, and without appearing to lock up the user's browser or device.
- [Using WebRTC peer-to-peer data channels](/zh-CN/docs/Games/WebRTC_data_channels)
  - : In addition to providing support for audio and video communication, WebRTC lets you set up peer-to-peer data channels to exchange text or binary data actively between your players. This article explains what this can do for you, and shows how to use libraries that make this easy.
- [Efficient animation for web games](/zh-CN/docs/Games/Techniques/Efficient_animation_for_web_games)
  - : This article covers techniques and advice for creating efficient animation for web games, with a slant towards supporting lower end devices such as mobile phones. We touch on CSS transitions and CSS animations, and JavaScript loops involving {{ domxref("window.requestAnimationFrame") }}.
- [Audio for Web Games](/zh-CN/docs/Games/Techniques/Audio_for_Web_Games)
  - : Audio is an important part of any game — it adds feedback and atmosphere. Web-based audio is maturing fast, but there are still many browser differences to negotiate. This article provides a detailed guide to implementing audio for web games, looking at what works currently across as wide a range of platforms as possible.
- [2D collision detection](/zh-CN/docs/Games/Techniques/2D_collision_detection)
  - : A concise introduction to collision detection in 2D games.
- [Tilemaps](/zh-CN/docs/Games/Techniques/Tilemaps)
  - : Tiles are a very popular technique in 2D games for building the game world. These articles provide an introduction to tilemaps and how to implement them with the Canvas API.
