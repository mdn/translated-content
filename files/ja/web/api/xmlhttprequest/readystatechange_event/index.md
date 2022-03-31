---
title: XMLHttpRequest.onreadystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
tags:
  - API
  - Event
  - ハンドラー
  - プロパティ
  - リファレンス
  - XHR
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/onreadystatechange
original_slug: Web/API/XMLHttpRequest/onreadystatechange
browser-compat: api.XMLHttpRequest.onreadystatechange
---
{{APIRef}}

[イベントハンドラー](/ja/docs/Web/Events/Event_handlers) で、 `readyState` 属性が変化するたびに呼び出されます。コールバックはユーザーインターフェイスのスレッドから呼び出されます。 **`XMLHttpRequest.onreadystatechange`** プロパティは、 {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} イベントが発行されるたびに、つまり {{domxref("XMLHttpRequest")}} の {{domxref("XMLHttpRequest.readyState", "readyState")}} が変化するたびに呼び出されるイベントハンドラーを保持します。

> **Warning:** これは同期リクエストで使用してはいけません。また、ネイティブコードから使用してはいけません。

## 構文

```js
XMLHttpRequest.onreadystatechange = callback;
```

### 値

- `callback` は `readyState` が変化したときに実行される関数です。

## 例

```js
const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // ローカルファイルでは、 Mozilla Firefox で成功するとステータスは0になります
  if(xhr.readyState === XMLHttpRequest.DONE) {
    var status = xhr.status;
    if (status === 0 || (status &gt;= 200 &amp;&amp; status &lt; 400)) {
      // リクエストが正常に終了した
      console.log(xhr.responseText);
    } else {
      // あらら! リクエストでエラーが発生しました!
    }
  }
};
xhr.send();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
