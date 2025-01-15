---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

为当前浏览器会话创建一个新的闹钟。一个闹钟可以触发一次或多次。闹钟在最后一次触发后会被清除。

## 语法

```js-nolint
browser.alarms.create(
  name, // 可选的字符串（string）类型
  alarmInfo, // 可选的对象（object）类型
);
```

### 参数

- `name`{{optional_inline}}

  - : 字符串类型。闹钟的名称。默认为空的字符串。

    闹钟的名称可用于 {{WebExtAPIRef('alarms.get()')}} 方法和 {{WebExtAPIRef('alarms.clear()')}} 方法来引用特定闹钟。同时也可以通过 {{WebExtAPIRef('alarms.onAlarm')}} 监听函数传入的 {{WebExtAPIRef('alarms.Alarm')}} 对象的 `name` 属性访问到它。

    闹钟的名称是唯一的（在单个扩展的作用域内）。如果传入了已经在这个扩展中存在的名称，原来的同名闹钟会被移除并使用正在创建的闹钟替换。

- `alarmInfo`{{optional_inline}}

  - : `object`（对象）类型。你可以使用它来指定闹钟开始触发的时间，其值可以是一个绝对值（`when`），或相对于闹钟设置时间的相对值（`delayInMinutes`）。要让闹钟能够重复，需要指定 `periodInMinutes`。

    在 Chrome 浏览器上，除非附件以非打包（unpackaged）方式加载，创建的闹钟的触发频率不能超过每分钟一次。如果扩展尝试将 `delayInMinutes` 设置为小于 1 的值，或 `when` 设置为在未来的 1 分钟之内的值，则闹钟只能在到达 1 分钟之后才会触发。如果扩展尝试将 `periodInMinutes` 设置为小于 1 的之，则闹钟会变成每分钟触发一次。

    `alarmInfo` 对象可以设置以下属性：

    - `when`{{optional_inline}}
      - : `double` 类型。闹钟首次触发的时间，以[自纪元以来的毫秒数表示](https://zh.wikipedia.org/wiki/UNIX时间)。要获取从纪元到当前时间的毫秒数，请使用 [`Date.now()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now)。如果指定了 `when`，则不要指定 `delayInMinutes`。
    - `delayInMinutes`{{optional_inline}}
      - : `double` 类型。闹钟设置好到第一次触发之间的分钟数。如果你设置了 `delayInMinutes` 属性，请不要设置 `when` 属性。
    - `periodInMinutes`{{optional_inline}}
      - : `double` 类型。如果设置此属性，闹钟会从第一次触发开始每隔 `periodInMinutes` 分钟再次触发。如果你没有设置 `when` 及 `delayInMinutes` 属性，闹钟会在其被设置好之后的 `periodInMinutes` 分钟第一次触发。如果没有设置 `periodInMinutes` 属性，则闹钟只会触发一次。

## 示例

创建一个名称为 `""` 的基于延迟的一次性闹钟：

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes,
});
```

创建一个名为“my-periodic-alarm”的基于延迟的周期性闹钟：

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

创建一个名为“my-periodic-alarm”的基于绝对时间的周期性闹钟：

```js
const when = 1545696000;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes,
});
```

## 浏览器兼容性

{{Compat}}

> [!NOTE]
> 此 API 基于 Chromium 的 [`chrome.alarms`](https://developer.chrome.google.cn/docs/extensions/reference/api/alarms) API。

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
