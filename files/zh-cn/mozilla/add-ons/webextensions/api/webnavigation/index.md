---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
l10n:
  sourceCommit: e92bec809ea0bef618f7e604d7a7457f50aa0127
---

为导航的各个阶段添加事件监听器。导航是指浏览器中的某个框架从一个 URL 跳转到另一个 URL，通常是（但不总是）用户操作（如点击链接或在地址栏输入 URL）引起的。

与 {{WebExtAPIRef("webRequest")}} API 相比：导航通常会导致浏览器发起 Web 请求，但 webRequest API 关注的是 HTTP 层的底层视角，而 webNavigation API 更侧重于浏览器 UI 本身的视角。

每个事件对应导航中的其中一个特定阶段。事件顺序如下：

![主流程和下文描述的附加流程的可视化。](we-flow.png)

- 主流程为：
  - {{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}
  - {{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}
  - {{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}
  - {{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}

- 此外：
  - 如果浏览器需要为导航创建新标签页或新窗口（例如，用户在新标签页中打开链接），则 {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}} 会在 `onBeforeNavigate` 之前触发。
  - 如果页面使用 [history API](/zh-CN/docs/Web/API/History_API) 更新了浏览器地址栏中的 URL，则会触发 {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}}。
  - 如果页面的[片段标识符](/zh-CN/docs/Web/URI/Reference/Fragment)发生变化，则会触发 {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}}。
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} 可以在任何阶段触发。

每次导航都是特定浏览器框架中的 URL 过渡。浏览器框架由标签页 ID 和框架 ID 标识。框架可以是标签页中的顶级浏览上下文，也可以是作为 [iframe](/zh-CN/docs/Web/HTML/Reference/Elements/iframe) 实现的嵌套浏览上下文。

每个事件的 `addListener()` 调用接受一个可选的过滤器参数。过滤器将指定一个或多个 URL 模式，然后仅当目标 URL 匹配其中一个模式时才会触发事件。

`onCommitted` 事件监听器额外接受两个属性：指示导航的原因（例如，因为用户点击了链接，或者因为用户选择了书签）的 {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}}，以及提供有关导航的更多信息的 {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}}。

要使用此 API，你需要取得“webNavigation”[权限](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)。

## 类型

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : 导航的原因：例如，用户点击了链接，输入了地址，或点击了书签。
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : 有关过渡的额外信息。

## 函数

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : 检索有关特定框架的信息。框架可以是标签页中的顶级框架，也可以是嵌套的 [iframe](/zh-CN/docs/Web/HTML/Reference/Elements/iframe)，并由标签页 ID 和框架 ID 唯一标识。
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : 给定一个标签页 ID，检索其包含的所有框架的信息。

## 事件

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : 当浏览器即将开始导航事件时触发。
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : 当导航被提交时触发。此时至少已经从服务器接收了部分的新文档，浏览器已决定切换到新文档。
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : 当页面触发 [DOMContentLoaded](/zh-CN/docs/Web/API/Document/DOMContentLoaded_event) 事件时触发。
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : 当文档及其引用的资源完全加载并初始化时触发。这相当于 DOM 的 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件。
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : 当发生错误并且导航被中止时触发。这可能是由于网络错误或用户中止导航导致的。
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : 当创建一个新窗口或现有窗口中的新标签页以承载导航时触发：例如，如果用户在新标签页中打开链接。
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : 当页面的[片段标识符](https://zh.wikipedia.org/wiki/URI片段)发生更改时触发。
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : 当标签页的内容被另一个（通常是之前预渲染的）标签页替换时触发。
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : 当页面使用 [history API](/zh-CN/docs/Web/API/History_API) 更新浏览器地址栏中显示的 URL 时触发。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.webNavigation`](https://developer.chrome.google.cn/docs/extensions/reference/api/webNavigation) API。该文档衍生自 Chromium 代码中的 [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json)。

<!--
// Copyright 2015 The Chromium Authors. All rights reserved。
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer。
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution。
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission。
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
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE。
-->
