---
title: HTML5 游戏开发简介
slug: Games/Introduction_to_HTML5_Game_Development
---

{{GamesSidebar}}

## 优点

1. 使用 HTML5 构建的游戏可以在智能手机，平板电脑，个人电脑和智能电视上工作。
2. 通过网络以及其他媒体广告宣传你的游戏。
3. 付款。收取你想要的，并使用任何你喜欢的付款处理服务。
4. 随时更新游戏。
5. 收集你自己的分析！
6. 更密切地与客户联系。
7. 玩家可随时随地玩游戏。

## 网络技术

| **Function**   | **Technology**                                                                                                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**      | [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)                                                                                                                                                                                                                                                |
| **Graphics**   | [WebGL](/zh-CN/docs/Web/API/WebGL_API) ([OpenGL ES](https://www.khronos.org/opengles/) 2.0)                                                                                                                                                                                                       |
| **Input**      | [Touch events](/zh-CN/docs/Web/API/Touch_events), [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API), device sensors, [WebRTC](/zh-CN/docs/Web/API/WebRTC_API), [Full Screen API](/zh-CN/docs/Web/API/Fullscreen_API), [Pointer Lock API](/zh-CN/docs/Web/API/Pointer_Lock_API) |
| **Language**   | [JavaScript](/zh-CN/docs/Web/JavaScript) (or C/C++ using [Emscripten](https://github.com/kripken/emscripten/wiki) to compile to JavaScript)                                                                                                                                                       |
| **Networking** | [WebRTC](/zh-CN/docs/Web/API/WebRTC_API) and/or [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)                                                                                                                                                                                                  |
| **Storage**    | [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API) or the "cloud"                                                                                                                                                                                                                                     |
| **Web**        | [HTML](/zh-CN/docs/Web/HTML), [CSS](/zh-CN/docs/Web/CSS), [SVG](/zh-CN/docs/Web/SVG), [Social API](/zh-CN/docs/Social_API) (and much more!)                                                                                                                                                       |

- [Full Screen API](/zh-CN/docs/Web/API/Fullscreen_API)
  - : 全屏游戏。
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : 使用游戏手柄或其他游戏控制器。
- [HTML](/zh-CN/docs/Web/HTML) and [CSS](/zh-CN/docs/Web/CSS)
  - : 构建，样式和布局游戏的用户界面。
- [HTML audio](/zh-CN/docs/Web/HTML/Element/audio)
  - : 轻松播放简单的音效和音乐。
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
  - : 将用户数据存储在他们自己的计算机或设备上。
- [JavaScript](/zh-CN/docs/Web/JavaScript)
  - : 快速的网页编程语言为你的游戏编写代码。轻松移植你现有的游戏 [Emscripten](https://github.com/kripken/emscripten/wiki) 或 [Asm.js](http://asmjs.org/spec/latest/)。
- [Pointer Lock API](/zh-CN/docs/Web/API/Pointer_Lock_API)
  - : 在游戏界面中锁定鼠标或其他指针设备。
- [SVG](/zh-CN/docs/Web/SVG) (Scalable Vector Graphics)
  - : 构建能够顺利扩展的矢量图形，无论用户显示器的大小或分辨率如何。
- [Typed Arrays](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)

  - : 从 JavaScript 中访问原始二进制数据; 操纵 GL 纹理，游戏数据或其他任何东西。

- [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)
  - : 实时控制音频的播放，合成和操纵。
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
  - : 创建高性能，硬件加速的 3D（和 2D）图形。[OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
  - : 实时通讯控制音频和视频数据，包括电话会议，并在两个用户之间来回传送其他应用数据，如聊天。
- [WebSockets](/zh-CN/docs/Web/API/WebSockets_API)
  - : 将你的应用程序或站点连接到一个服务器以实时传输数据。适合多人游戏动作，聊天服务等。
- [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : 生成后台线程为多核处理器运行自己的 JavaScript 代码。
- [XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest) and [File API](/zh-CN/docs/DOM/File_API)
  - : 从一个 Web 服务器发送和接收任何你想要的数据，如下载新的游戏级别和艺术品，以便来回传送非实时游戏状态信息。
