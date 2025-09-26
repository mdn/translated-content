---
title: declarativeNetRequest.URLTransform
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/URLTransform
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

描述 URL 转换以执行重定向规则的详细信息。此对象可以在 {{WebExtAPIRef("declarativeNetRequest.RuleAction", "rule.action")}}.redirect.transform 中指定。

## 类型

该类型的值是对象，包含以下属性：

- `fragment` {{optional_inline}}
  - : `string`。请求的新片段。应为空（此情况下现有片段将被清除），或者应以 `#` 开头。
- `host` {{optional_inline}}
  - : `string`。请求的新主机名。
- `password` {{optional_inline}}
  - : `string`。请求的新密码。
- `path` {{optional_inline}}
  - : `string`。请求的新路径。如果为空，现有路径将被清除。
- `port` {{optional_inline}}
  - : `string`。请求的新端口。如果为空，现有端口将被清除。
- `query` {{optional_inline}}
  - : `string`。请求的新查询。应为空（此情况下现有查询将被清除），或者应以 `?` 开头。
- `queryTransform` {{optional_inline}}
  - : 一个描述如何添加、删除或替换查询键值对的对象。如果指定了 `query`，则不能指定此属性。
    - `addOrReplaceParams` {{optional_inline}}
      - : 描述要添加或替换的查询键值对列表的对象数组。
        - `key`
          - : `string`。键。
        - `replaceOnly` {{optional_inline}}
          - : `boolean`。如果为 true，则仅在查询键已存在时进行替换。否则，如果键缺失也会添加。默认为 false。
        - `value`
          - : `string`。值。
    - `removeParams` {{optional_inline}}
      - : `string` 数组。要删除的查询键列表。
- `scheme` {{optional_inline}}
  - : `string`。请求的新方案（scheme）。允许的值有 `"http"`、`"https"`，以及扩展的方案，例如 Firefox 中的“moz-extension”或 Chrome 中的“chrome-extension”。当使用扩展的方案时，必须指定 `host` 以生成有意义的重定向目标。
- `username` {{optional_inline}}
  - : `string`。请求的新用户名。

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
