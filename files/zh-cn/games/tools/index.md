---
title: 游戏开发工具
slug: Games/Tools
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

在本页面中，你可以找到我们关于游戏开发工具的文章链接，这些文章旨在最终涵盖各类框架、编译器和调试工具。

- [asm.js](/zh-CN/docs/Games/Tools/asm.js)
  - : asm.js 是 JavaScript 语言的一个严格子集，它可以被高度优化，并在一个预编译（AOT）引擎中运行，从而获得比典型 JavaScript 快得多的性能。这对于游戏开发而言无疑是极好的。
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : 一款能将 LLVM 编译为 JavaScript 的编译器。借助 Emscripten，你可以将 C++ 以及其他可编译为 LLVM 字节码的语言，编译成高性能的 JavaScript。这是将应用程序移植到 Web 平台的绝佳工具！其 Wiki 上有一份[实用的 Emscripten 教程](https://github.com/emscripten-core/emscripten/wiki/Tutorial)。
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : Firefox Profiler 可以让你对代码进行性能分析，以帮助你找出性能瓶颈，从而让你的游戏全速运行。
- 用于开发和调试游戏的工具链
  - : 这与常规的 Web 应用调试有何不同？有哪些专用工具可用？其中大部分内容将由 Will 在[工具](https://firefox-source-docs.mozilla.org/devtools-user/index.html)部分介绍，但在这里我们应该提供一个实用的游戏调试工具链教程，并附上 Will 的文章链接：
    - 基础工具概览
    - [着色器编辑器](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - 性能工具（仍在开发中，预计 2014 年初发布）

## Web 技术

<table class="no-markdown standard-table">
  <caption>游戏开发中的 Web 技术和他们的功能</caption>
  <thead>
    <tr>
      <th scope="col"><strong>功能</strong></th>
      <th scope="col"><strong>技术</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>音频</strong></td>
      <td><a href="/zh-CN/docs/Web/API/Web_Audio_API">Web 音频 API</a></td>
    </tr>
    <tr>
      <td><strong>图形</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/API/WebGL_API">WebGL</a>（<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0）
      </td>
    </tr>
    <tr>
      <td><strong>输入</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/API/Touch_events">触摸事件</a>、<a
          href="/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >、设备传感器、<a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a>、<a
          href="/zh-CN/docs/Web/API/Fullscreen_API"
          >全屏 API</a
        >、<a href="/zh-CN/docs/Web/API/Pointer_Lock_API">指针锁定 API</a>
      </td>
    </tr>
    <tr>
      <td><strong>语言</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a>（或使用
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> 将 C/C++ 编译为 JavaScript）
      </td>
    </tr>
    <tr>
      <td><strong>网络</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/API/WebRTC_API">WebRTC</a> 和/或
        <a href="/zh-CN/docs/Web/API/WebSockets_API">WebSocket</a>
      </td>
    </tr>
    <tr>
      <td><strong>存储</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/API/IndexedDB_API">IndexedDB</a> 或“云存储”
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/zh-CN/docs/Web/HTML">HTML</a>、<a
          href="/zh-CN/docs/Web/CSS">CSS</a>、<a
          href="/zh-CN/docs/Web/SVG">SVG</a>（以及更多！）
      </td>
    </tr>
  </tbody>
</table>

- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
  - : 可以从 Web 服务器收发任意类型的数据，例如下载新的游戏关卡和美术资源，或来回传输非实时的游戏状态信息。
- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
  - : 实现全屏游戏体验。
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : 使用游戏手柄或其他游戏控制器。
- [HTML](/zh-CN/docs/Web/HTML) 和 [CSS](/zh-CN/docs/Web/CSS)
  - : 构建、设计并布局你游戏的用户界面。
- [HTML audio](/zh-CN/docs/Web/HTML/Reference/Elements/audio)
  - : 轻松播放简单的音效和音乐。
- [IndexedDB](/zh-CN/docs/Web/API/IndexedDB_API)
  - : 在用户的计算机或设备上存储数据。
- [JavaScript](/zh-CN/docs/Web/JavaScript)
  - : 用于编写游戏代码的高性能 Web 编程语言。
    要轻松移植现有游戏，可使用 [Emscripten](https://github.com/emscripten-core/emscripten/wiki) 或 [Asm.js](http://asmjs.org/spec/latest/)。
- [指针锁定 API](/zh-CN/docs/Web/API/Pointer_Lock_API)
  - : 将鼠标或其他指针设备锁定在游戏界面内。
- [SVG](/zh-CN/docs/Web/SVG)（可缩放矢量图形）
  - : 构建能够平滑缩放的矢量图形，不受用户显示器尺寸或分辨率的影响。
- [类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)
  - : 在 JavaScript 内部访问原始二进制数据；可用于操作 GL 纹理、游戏数据或其他任何数据。
- [Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API)
  - : 实时控制音频的回放、合成与处理。
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
  - : 创建高性能、硬件加速的 3D（和 2D）图形。基于 [OpenGL ES](https://www.khronos.org/opengles/) 2.0。
- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
  - : 通过实时通信来控制音视频数据，包括电话会议以及在两个用户之间来回传输聊天等应用数据。
- [WebSocket](/zh-CN/docs/Web/API/WebSockets_API)
  - : 将你的应用或网站连接到服务器，以实时地来回传输数据。非常适合多人在线游戏、聊天服务等。
- [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : 为多核处理器生成运行自己 JavaScript 代码的后台线程。

## 将原生游戏移植到 Web

如果你是一名原生开发者（例如使用 C++ 编写游戏），并有兴趣了解如何将游戏移植到 Web 平台，你应该进一步了解我们的 [Emscripten](https://emscripten.org/index.html) 工具——这是一款能将 LLVM 编译为 JavaScript 的编译器，它接收 LLVM 字节码（例如，使用 Clang 从 C/C++ 生成，或从其他语言生成）并将其编译为 [asm.js](/zh-CN/docs/Games/Tools/asm.js)，从而可以在 Web 上运行。

可以从以下资源开始：

- [关于 Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html)：可查看包含概要信息的介绍。
- [下载和安装](https://emscripten.org/docs/getting_started/downloads.html)：安装工具链。
- [Emscripten 教程](https://emscripten.org/docs/getting_started/Tutorial.html)：一份指导你如何上手的教程。
