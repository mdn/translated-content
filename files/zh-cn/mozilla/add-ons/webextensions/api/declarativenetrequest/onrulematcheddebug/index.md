---
title: declarativeNetRequest.onRuleMatchedDebug
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/onRuleMatchedDebug
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

当规则与请求匹配时触发。此功能仅对具有 `"declarativeNetRequestFeedback"` 权限的扩展可用，因为这仅用于调试目的。有关在每个浏览器中启用测试的详细信息，请参阅[测试](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#测试)。

## 语法

```js-nolint
browser.declarativeNetRequest.onRuleMatchedDebug.addListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.removeListener(listener)
browser.declarativeNetRequest.onRuleMatchedDebug.hasListener(listener)
```

事件有三个函数：

- `addListener(listener)`
  - : 添加一个监听器到此事件。
- `removeListener(listener)`
  - : 停止监听此事件。`listener` 参数是要移除的监听器。
- `hasListener(listener)`
  - : 检查 `listener` 是否已注册此事件。如果正在监听，则返回 `true`，否则返回 `false`。

## addListener 语法

### 参数

- `listener`
  - : 此事件发生时调用的函数。函数传递以下参数：
    - `request`
      - : 一个包含匹配规则的请求信息的对象。
        - `documentId` {{optional_inline}}
          - : `string`。如果此请求是针对框架的，则为框架文档的唯一标识符。
        - `documentLifecycle` {{optional_inline}}
          - : `string`。如果此请求是针对框架的，则为框架文档的生命周期。可能的值为：`"prerender"`、`"active"`、`"cached"` 或 `"pending_deletion"`。
        - `frameId`
          - : `number`。值为 `0` 时表示请求发生在主框架中。正值表示发生请求的子框架的 ID。如果加载的是（子）框架的文档（类型为 `main_frame` 或 `sub_frame`），`frameId` 表示该框架的 ID，而不是外层框架的 ID。框架 ID 在标签页内是唯一的。
        - `frameType` {{optional_inline}}
          - : `string`。如果此请求是针对框架的，则为框架的类型。可能的值为：`"outermost_frame"`、`"fenced_frame"` 或 `"sub_frame"`。
        - `initiator` {{optional_inline}}
          - : `string`。请求发起的来源。在重定向过程中不会改变。如果这是一个不透明的来源，则使用字符串 `'null'`。
        - `method`
          - : `string`。一个标准的 HTTP 方法。
        - `parentDocumentId` {{optional_inline}}
          - : `string`。如果此请求是针对框架的并且有父框架，则为框架父文档的唯一标识符。
        - `parentFrameId`
          - : `number`。包装发送请求的框架的父框架的 ID。如果没有父框架，则设置为 `-1`。
        - `requestId`
          - : `string`。请求的 ID。请求 ID 在浏览器会话中是唯一的。
        - `tabId`
          - : `number`。请求发生的标签页的 ID。如果请求与标签页无关，则设置为 `-1`。
        - `type`
          - : {{WebExtAPIRef("declarativeNetRequest.ResourceType", "ResourceType")}}。请求的资源类型。
        - `url`
          - : `string`。请求的 URL。

    - `rule`
      - : {{WebExtAPIRef("declarativeNetRequest.MatchedRule", "MatchedRule")}}。匹配规则的详细信息。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

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
