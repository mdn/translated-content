---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

有关捕获图片格式、质量、区域和比例的详细信息。

## 类型

该类型的取值是对象，包含下列属性：

- `format` {{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}。结果图片的格式，默认为 `"png"`。
- `quality` {{optional_inline}}
  - : `integer`。当格式是 `"jpeg"` 时，这将决定结果图片的质量。这应是 0—100 之间的数字，并将被转换为 0—1 之间的取值作为 [`HTMLCanvasElement.toDataURL()`](/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL) 方法的 `encoderOptions` 参数传递给函数。在属性被忽略时将采用 92 作为默认取值。随着质量的降低，结果图片将有更多视觉伪影，存储所需的字节数也将减少。当图片格式设置为 PNG 时，该值将被忽略。
- `rect` {{optional_inline}}
  - : `object`，指定要捕获的文档区域，单位为 CSS 像素，相对于页面。所有属性默认为 `0`。这些属性是：
    - `x`：矩形左侧的坐标。
    - `y`：矩形顶部的坐标。
    - `width`：矩形的宽度。
    - `height`：矩形的高度。

    该选项在 Firefox 82 中引入。若省略该属性，则将捕获当前可视视口。

- `scale` {{optional_inline}}
  - : `number`，渲染的比例，默认为 [`devicePixelRatio`](/zh-CN/docs/Web/API/Window/devicePixelRatio)。该选项在 Firefox 82 中引入。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.extensionTypes`](https://developer.chrome.google.cn/docs/extensions/reference/api/extensionTypes/#type-ImageDetails) API。该文档衍生自 Chromium 代码中的 [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json)。

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
