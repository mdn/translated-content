---
title: Web 游戏开发简介
slug: Games/Introduction
---

{{GamesSidebar}}

现代的 web 已经高速发展成为一个可行可靠的平台，它不仅能够用来创建高质量的酷炫游戏，同时也能够用来发布和传播这些游戏。

采用现代网页技术和较新的浏览器，完全有可能做出令人印象深刻的顶级页面游戏。它能够制作的游戏种类可以和桌面端以及原生系统相当。我们这里所说的，并不是很久之前就采用 Flash® 制作出的简单卡牌游戏或者多人社交游戏。而是牛逼的 3D 动作射击游戏，RPG 游戏等等。得益于 [JavaScript](/zh-CN/docs/JavaScript) 实时编译技术性能的大幅提升，以及新开放的 API。在制作运行在浏览器（或者是基于类似 [Firefox OS](/zh-CN/docs/Mozilla/Firefox_OS) 的 [HTML5](/zh-CN/docs/HTML/HTML5)技术支持的设备）上的游戏时，我们不用妥协。

## HTML5 游戏平台

你可以真正地为你的游戏考虑下 Web 来作为更好的目标平台。我们总是喜欢说，"the Web is the platform." 让我们浏览下 Web 平台的核心部分：

| 功能     | 技术                                                                                                                                                                                                                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **音频** | [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                        |
| **图形** | [WebGL](/zh-CN/docs/WebGL) ([OpenGL ES](http://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                            |
| **输入** | [Touch events](/zh-CN/docs/DOM/Touch_events), [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API), 设备传感器，[WebRTC](/zh-CN/docs/WebRTC), [Full Screen API](/zh-CN/docs/Web/API/Fullscreen_API), [Pointer Lock API](/zh-CN/docs/API/Pointer_Lock_API) |
| **语言** | [JavaScript](/zh-CN/docs/JavaScript) (或是 C/C++ 使用 [Emscripten](https://github.com/kripken/emscripten/wiki) 来编译成 JavaScript)                                                                                                                                       |
| **网络** | [WebRTC](/zh-CN/docs/WebRTC) 和/或 [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)                                                                                                                                                                                       |
| **存储** | [IndexedDB](/zh-CN/docs/IndexedDB) 或是 "云 (存储)"                                                                                                                                                                                                                       |
| **Web**  | [HTML](/zh-CN/docs/HTML), [CSS](/zh-CN/docs/CSS), [SVG](/zh-CN/docs/SVG), [Social API](/zh-CN/docs/Mozilla/Projects/Social_API) (还有其他很多很多东西！)                                                                                                                  |

## 商业案例

作为一名游戏开发者，无论你是独立的个人还是大型游戏工作室，你想知道你的下一个游戏项目瞄准 Web 是有意义的。让我们看看 Web 是如何帮到你的。

1. Web 触手可及；它无处不在。如今可以看到，用 HTML5 构建的游戏运行在智能手机，平板，个人电脑和智能电视。
2. 提高营销和曝光度。你不限于在某商店推广你的游戏。相反，你可以像其他媒体一样在 Web 宣传和推广你的游戏，利用网络的固有性和共享性接触新客户。
3. 你可以掌握最重要的事项：支付。你不必交付超过收入的 30% 给他人，仅仅就因为你的游戏在他们的生态系统。相反，你可以管理任何你想要的和使用任何你喜欢的付款处理服务。
4. 拥有更多控制权的是，只要你愿意，你可以随时更新游戏。不必着急等待审核通过，仅当其他公司的某某人决定你的关键 bug 修复是否会在今天或明天交付。
5. 掌握你的数据分析！不必依靠别人作出所有决定，你需要什么分析，你可以收集自己的——或选择你最喜欢的第三方平台，来收集有关你的销售和游戏产生的信息。
6. 你可以用你的方式更密切地管理你的客户关系。再也不用苦苦等待只能通过应用商店有限的机制来过滤客户的反馈。用你想要的方式与客户交流，没有中间人。
7. 你的玩家可以随时随地玩你的游戏。因为 Web 是无处不在的，你的顾客可以在手机，平板，家庭手提，个人电脑或其他设备上关注游戏动态。

## 针对游戏开发者的 Web 技术

技术同行们，让我们发掘出所有关于 Web 的 APIs，将它们呈现给所有的游戏开发者们。下面是一个比较完整的列表，可以一窥 Web 究竟能够做些什么：

- [Full Screen API](/zh-CN/docs/Web/API/Fullscreen_API)
  - : 这个简单的 API 能够让你的游戏占据整个屏幕，从而使玩家沉浸在动作中
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : 如果你想你的用户能够使用游戏手柄或其他游戏控制器来控制游戏，你需要这个 API
- [HTML](/zh-CN/docs/HTML) and [CSS](/zh-CN/docs/CSS)
  - : 二者合璧，可以构建，设计并对你的游戏界面布局，HTML 有一个提供 2D 图形的元素，即{{HTMLElement("canvas")}}
- [HTML audio](/zh-CN/docs/HTML/Element/audio)
  - : {{HTMLElement("audio")}} 元素可以用来播放一些简单的音效和音乐。如果你想要更多的参与，可以学习[Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API) 来深入了解音频处理的力量！
- [IndexedDB](/zh-CN/docs/IndexedDB)
  - : 一个强大的数据存储 API，用来在电脑或者设备上保存用户自己的数据。一个很好的方法用来保存游戏的状态和其他最近的信息，这样在需要的时候不用每次重新下载。也可以用来让你的游戏即使用户没有链接到网络也能继续玩（例如在飞机上的数小时）。
- [JavaScript](/zh-CN/docs/JavaScript)
  - : JavaScript 是网络上使用的编程语言，在现代浏览器中正在快速发展，而且一直在快速发展。使用它的力量为您的游戏编写代码，或者使用[Emscripten](https://github.com/kripken/emscripten/wiki)或[Asm.js](http://asmjs.org/spec/latest/)等技术轻松移植您现有的游戏。
- [Pointer Lock API](/zh-CN/docs/API/Pointer_Lock_API)
  - : 指针锁定 API 允许您在游戏界面中锁定鼠标或其他指针设备，以便您不用绝对定位光标就可以获得坐标变化值，从而准确地判断用户正在做什么，并且还可以防止用户意外地进入另一块屏幕或别的什么地方，从而导致误操作。
- [SVG](/zh-CN/docs/SVG) (可缩放矢量图形)
  - : 无论用户显示器的大小或分辨率如何，都可以构建平滑缩放的矢量图形。
- [Typed Arrays](/zh-CN/docs/JavaScript/Typed_arrays)
  - : JavaScript 中的类型数组可以让您访问原始二进制数据；这使您可以操纵 GL 纹理，游戏数据或其他任何东西，即使它不是原生 JavaScript 数据格式。
- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
  - : 这个 API 用于控制 JavaScript 代码中的音频的回放，合成和处理，使您可以创建出色的音效，以及实时播放和操作音乐。
- [WebGL](/zh-CN/docs/WebGL)
  - : 允许您从 Web 内容创建高性能，硬件加速的 3D（和 2D）图形。这是一个 Web 支持的[OpenGL ES](https://www.khronos.org/opengles/) 2.0 实现。
- [WebRTC](/zh-CN/docs/WebRTC)
  - : WebRTC（实时通信）API 使您能够控制音频和视频数据，包括远程会议以及两个用户之间来回传输其他应用程序数据。希望你的玩家能够在殴打怪物的同时互相交流？这是你的 API，快使用它吧。
- [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)
  - : WebSocket API 使您可以将您的应用程序或站点连接到服务器，实时传输数据。构建完美的多人游戏动作，聊天服务等必备。
- [Web Workers](/zh-CN/docs/DOM/Using_web_workers)
  - : Workers API 能够让您生成运行 JavaScript 代码的后台线程，以充分利用现代的多核 CPU。
- [XMLHttpRequest](/zh-CN/docs/DOM/XMLHttpRequest) 和 [File API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
  - : XMLHttpRequest 和 File API 的组合使您可以从 Web 服务器发送和接收任何类型的数据。比如下载新的游戏关卡，文件，以及传递非实时游戏状态信息等。
