---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
tags:
  - AJAX
  - 非同期 XHR
  - 非同期 XMLHttpRequest
  - プロパティ
  - リファレンス
  - XHR
  - XMLHttpRequest
  - timeout
browser-compat: api.XMLHttpRequest.timeout
translation_of: Web/API/XMLHttpRequest/timeout
---
{{APIRef('XMLHttpRequest')}}

**`XMLHttpRequest.timeout`** は `unsigned long` 型で、リクエストが自動的に終了するまでの時間をミリ秒で示します。既定値は 0 で、タイムアウトが無いことを示します。 timeout は{{Glossary('document environment', '文書環境')}}で利用される同期 XMLHttpRequest や `InvalidAccessError` の例外を投げるものに使用することはできません。タイムアウトとなった場合、 [timeout](/ja/docs/Web/API/XMLHttpRequest/timeout_event) イベントが発行されます。

> **Note:** ウィンドウを持つ同期リクエストでは、タイムアウトを使用することはできません。

[非同期リクエストでのタイムアウトの使用](/ja/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#example_using_a_timeout)

Internet Explorer においては、 timeout プロパティは [open()](/ja/docs/Web/API/XMLHttpRequest/open) メソッドを呼び出してから [send()](/ja/docs/Web/API/XMLHttpRequest/send) メソッドを呼び出すまでの間しか設定することはできません。

## 例

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.timeout = 2000; // ミリ秒単位の時間

xhr.onload = function () {
  // リクエスト完了。ここで処理を行います。
};

xhr.ontimeout = function (e) {
  // XMLHttpRequest がタイムアウト。ここで何かを行います。
};

xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
