---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
l10n:
  sourceCommit: b4fd56711aebae6dcd86ad6c5bf1ce25f52347d4
---

{{AddonSidebar}}

监听用户执行你已使用 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)注册的命令。

## 类型

- {{WebExtAPIRef("commands.Command")}}
  - : 表示命令的对象。此对象包含在 [`commands` manifest.json 键](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands)中为命令指定的信息。

## 函数

- {{WebExtAPIRef("commands.getAll")}}
  - : 获取此扩展程序的所有已注册命令。
- {{WebExtAPIRef("commands.reset")}}
  - : 重置给定命令的描述和快捷键为清单（manifest）键中给定的值。
- {{WebExtAPIRef("commands.update")}}
  - : 更改给定命令的描述或快捷键。

## 事件

- {{WebExtAPIRef("commands.onChanged")}}
  - : 当命令的快捷键发生更改时触发。
- {{WebExtAPIRef("commands.onCommand")}}
  - : 当使用关联的快捷键执行命令时触发。

{{WebExtExamples("h2")}}

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.commands`](https://developer.chrome.google.cn/docs/extensions/reference/api/commands) API。

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
