---
title: alarms.create()
slug: Mozilla/Add-ons/WebExtensions/API/alarms/create
---

{{AddonSidebar()}}

新しいアラームを生成します。

## 構文

```js
browser.alarms.create(
  name, // 文字列
  alarmInfo, // オブジェクト
);
```

### 引数

- `name`{{optional_inline}}
  - : `string`. アラームの名前を指定します。デフォルト値は空の文字列です。
    この値は {{WebExtAPIRef('alarms.get()')}} や {{WebExtAPIRef('alarms.clear()')}} で特定のアラームを参照する際に用います。また、{{WebExtAPIRef('alarms.onAlarm')}} のリスナ関数に渡すオブジェクト {{WebExtAPIRef('alarms.Alarm')}} のプロパティ `name` からも参照されます。
    アラームの名前は常に固有です（スコープはアドオンごとに区切られます）。以前そのアドオンが作成したアラーム名に一致する文字列を `name` に与えた場合、既存のアラームは削除されて発火しなくなります。
- `alarmInfo`{{optional_inline}}

  - : `object`. アラームが最初に発火する時刻を指定する引数です。時刻の指定には絶対値（`when` プロパティ）か、アラーム設定時を基準とした時間（`delayInMinutes` プロパティ）のどちらかで指定します。アラームを周期的に発火させるには `periodInMinutes` プロパティも指定します。

    Chrome の場合、パッケージ化された状態でアドオンが読み込まれると、アラームを 1 分に 1 回以上の頻度で呼び出すことはできません。ここでアドオンが `delayInMinutes` や `when` に 1 未満の値を指定しようとすると、アラームは 1 分後に発火します。アドオンが `periodInMinutes` に 1 未満の値を指定した場合、アラームは 1 分おきに発火します。

    `alarmInfo` オブジェクトで指定できるプロパティは以下の通りです。

    - `when`{{optional_inline}}
      - : `double`. アラームが最初に発火する時刻を [1970 年 1 月 1 日からの経過ミリ秒](https://ja.wikipedia.org/wiki/UNIX%E6%99%82%E9%96%93) で指定します。現在までの経過ミリ秒は [`Date.now()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/now) で取得できます。`when` を指定した場合`は delayInMinutes` を指定しないでください。
    - `delayInMinutes`{{optional_inline}}
      - : `double`. アラームが最初に発火する時刻を、アラーム設定時から何分後かで指定します。 `delayInMinutes` を指定した場合は `when` を指定しないでください。
    - `periodInMinutes`{{optional_inline}}
      - : `double`. この値が指定された場合、アラームは最初の発火時刻から `periodInMinutes` の周期で繰り返し発火します。この値を指定したうえで`when` と `delayInMinutes` の両方を省略した場合、最初にアラームが発火するのは `periodInMinutes` の時間が経過した後になります。`periodInMinutes` が指定されなければ、アラームは一度だけ発火します。

## ブラウザーの互換性

{{Compat("webextensions.api.alarms.create")}}

## 例

現在から相対的な時刻で一度限り発火するアラームを "" という名前で作成する例：

```js
const delayInMinutes = 5;

chrome.alarms.create({
  delayInMinutes,
});
```

現在からの相対的な時刻から繰り返すアラームを "my-periodic-alarm" の名前で作成する例：

```js
const delayInMinutes = 5;
const periodInMinutes = 2;

chrome.alarms.create("my-periodic-alarm", {
  delayInMinutes,
  periodInMinutes,
});
```

絶対的な時刻から繰り返すアラームを "my-periodic-alarm" の名前で作成する例：

```js
const when = 1545696000;
const periodInMinutes = 2;

chrome.alarms.create("my-periodic-alarm", {
  when,
  periodInMinutes,
});
```

> **メモ:** この API は Chromium の [`chrome.alarms`](https://developer.chrome.com/extensions/alarms) API に基づいています。Microsoft Edge での実装状況は Microsoft Corporation から提供されたものであり、ここでは Creative Commons Attribution 3.0 United States License に従っています。

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
