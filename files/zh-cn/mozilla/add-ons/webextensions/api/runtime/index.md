---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
---

{{AddonSidebar}}

该模块提供关于附加组件以及运行环境的信息。

它提供一组消息通信 API，允许你：

- 在附加组件的不同模块间通信。
- 和其他的附加组件通信。
- 和 native 应用通信。

## Types

- {{WebExtAPIRef("runtime.Port")}}
  - : 表示两个特定上下文之间的连接的一端，可用于交换消息。
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : 包含有关消息或连接请求的发件人的信息。
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : 标识浏览器的操作系统。
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : 标识浏览器的处理器架构。
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : 包含有关浏览器正在运行的平台的信息。
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : {{WebExtAPIRef("runtime.requestUpdateCheck()")}} 的返回结果。
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : {{WebExtAPIRef("runtime.onInstalled")}} 事件被触发的原因。
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : {{WebExtAPIRef("runtime.onRestartRequired")}} 事件被触发的原因。

## Properties

- {{WebExtAPIRef("runtime.lastError")}}
  - : 当异步方法执行时发生了错误，它需要向其调用方报告时，该值会被设置。
- {{WebExtAPIRef("runtime.id")}}
  - : 当前扩展的 ID。

## Functions

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : 取得当前扩展的后台页的 [Window](/zh-CN/docs/Web/API/Window) 对象。
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : 打开你的扩展的 [选项页面](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#options_pages)。
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : 获得完整的 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 声明文件的序列化对象。
- {{WebExtAPIRef("runtime.getURL()")}}
  - : 给定某个打包在扩展中的资源的基于 [manifest.json](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json) 相对路径，返回一个完整有效的 URL。
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : 指定一个此扩展被卸载后打开的 URL。
- {{WebExtAPIRef("runtime.reload()")}}
  - : 重新加载此扩展。
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : 检查此扩展的更新。
- {{WebExtAPIRef("runtime.connect()")}}
  - : 建立一个页面脚本到扩展主进程，或扩展主进程到页面脚本之间的通信连接。
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : 建立一个浏览器扩展与用户电脑上的原生应用的通信连接。
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : 发送一条消息到此扩展或其他扩展的事件监听器，类似于 {{WebExtAPIRef('runtime.connect')}} 但只能发送一条消息，以及可选的响应处理函数。
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : 从扩展发送一条消息到原生应用。
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : 返回当前所在平台的信息。
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : 返回此扩展所在的浏览器的信息。
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : 返回此扩展所在目录的 DirectoryEntry。

## Events

- {{WebExtAPIRef("runtime.onStartup")}}
  - : 当一个拥有此扩展的账户第一次启动时触发，注意若处于隐私模式中则不会触发。
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : 当扩展第一次安装，扩展更新，浏览器更新后触发。
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : 当扩展将被停止前触发，使得扩展可以执行一些清理工作。
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : 在此事件 {{WebExtAPIRef("runtime.onSuspend")}} 后触发，表明扩展最终没有被停止。
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : 当扩展更新可用时触发，注意若扩展运行中，更新不会马上被安装。
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}}
  - : 当浏览器更新可用时触发，注意浏览器需要重启才能安装更新。
- {{WebExtAPIRef("runtime.onConnect")}}
  - : 与扩展进程或页面脚本（content script）建立通信连接时触发。
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : 与其他扩展建立通信连接时触发。
- {{WebExtAPIRef("runtime.onMessage")}}
  - : 当收到扩展进程或页面脚本（content script）的消息时触发。
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : 当收到其他扩展的消息时触发，不能在页面脚本（content script）中使用。
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : 当设备要重启时触发。

## Browser compatibility

{{Compat}} {{WebExtExamples("h2")}}

> [!NOTE]
> This API is based on Chromium's [`chrome.runtime`](https://developer.chrome.google.cn/docs/extensions/reference/api/runtime) API. This documentation is derived from [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) in the Chromium code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
