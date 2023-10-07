---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
---

{{AddonSidebar()}}

创建一个新的 alarm.

## 使用语法

```js
browser.alarms.create(
  name, // 可选的字符串 (string) 类型
  alarmInfo, // 可选的对象 (object) 类型
);
```

### 参数介绍

- `name`{{optional_inline}}
  - : 字符串类型。alarm 的名称。默认为空的字符串。alarm 的名称可以在{{WebExtAPIRef('alarms.get()')}}方法和{{WebExtAPIRef('alarms.clear()')}}方法中引用。同时它也可以通过{{WebExtAPIRef('alarms.onAlarm')}}监听方法传入的参数对象{{WebExtAPIRef('alarms.Alarm')}}的 name 属性访问到。Alarm 的名称是唯一的 (在单个附件范围内). 如果传入了已经在这个附件存在的名称，原来的同名 alarm 会被移除并且没有警告。
- `alarmInfo`{{optional_inline}}

  - : `object`（对象）类型。你可以对过它来指定什么时间 alarm 会开始触发，其值可以是一个具体的时间值或者是一个延时（从 alarm 设置开始）。为了让 alarm 能复现，需要指定 `periodInMinutes`。

    在 Chrome 浏览器上，除非附件以非打包 (unpackaged) 方式加载，alarm 的创建每分钟不允许超过一次。如果附件尝试设置 `delayInMinutes` 为小于 1 的值，alarm 只能在到达 1 分钟之后才会触发，并且会变成每分钟触发一次。

    `alarmInfo` 对象可以设置以下属性：

    - `when`{{optional_inline}}
      - : `double` 类型。alarm 第一次触发的时间，值为自 1970-01-01 00:00:00 UTC 过去的毫秒数。请使用 [`Date.now()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now) 来获取 `1970-01-01 00:00:00 UTC` 到当前时间过去的毫秒数。如果你设置了 when 属性，请不要设置 delayInMinutes 属性。
    - `delayInMinutes`{{optional_inline}}
      - : `double` 类型。alarm 设置好到第一次触发之间的分钟数。如果你设置了 `delayInMinutes` 属性，请不要设置 when 属性。
    - `periodInMinutes`{{optional_inline}}
      - : `double` 类型。如果设置此属性，alarm 会从第一次触发开始每隔 `periodInMinutes` 分钟再次触发。如果你没有设置 when 及 delayInMinutes 属性，alarm 会在 alarm 设置好之后 periodInMinutes 分钟第一次触发。如果 periodInMinutes 属性没有设置，则 alarm 只会触发一次。

## 浏览器兼容性

{{Compat}}

## 示例

Create a one-time delay-based alarm with "" for the name:

```js
const delayInMinutes = 5;

browser.alarms.create({
  delayInMinutes,
});
```

Create a periodic delay-based alarm named "my-periodic-alarm":

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

Create a periodic absolute alarm named "my-periodic-alarm":

```js
const when = 1545696000;
const periodInMinutes = 2;

browser.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes,
});
```

> **备注：** This API is based on Chromium's [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
