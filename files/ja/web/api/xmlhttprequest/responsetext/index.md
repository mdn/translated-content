---
title: XMLHttpRequest.responseText
slug: Web/API/XMLHttpRequest/responseText
tags:
  - API
  - テキストの読み取り
  - テキストのロード
  - プロパティ
  - 読み取り専用
  - リファレンス
  - XMLHttpRequest
  - responseText
browser-compat: api.XMLHttpRequest.responseText
translation_of: Web/API/XMLHttpRequest/responseText
---
{{draft}}{{APIRef('XMLHttpRequest')}}

{{domxref("XMLHttpRequest")}} の **`responseText`** プロパティは読み取り専用で、送信されたリクエストに続いてサーバーから受け取ったテキストを返します。

## 構文

```js
var resultText = XMLHttpRequest.responseText;
```

### 値

{{domxref("DOMString")}} で、 `XMLHttpRequest` を使用して受信したテキストデータ、またはリクエストが失敗したときは `null`、またはリクエストがまだ {{domxref("XMLHttpRequest.send", "send()")}} の呼び出しによって送信されていない場合は `""` です。。

非同期リクエストを処理している間、 `responseText` の値は、データが完全に受信できておらず不完全であっても、常にサーバーから受信した現在のコンテンツを持ちます。

{{domxref("XMLHttpRequest.readyState", "readyState")}} の値が {{domxref("XMLHttpRequest.DONE", "XMLHttpRequest.DONE")}} (`4`) になり、 {{domxref("XMLHttpRequest.status", "status")}} の値が 200 (`"OK"`) になった場合、コンテンツ全体が受信されたことが分かります。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("XMLHttpRequest.responseType")}} が空文字列または `"text"` のどちらにも設定されていません。 `responseText` プロパティはテキストコンテンツのみで有効なので、他の値はエラーの状態です。

## 例

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};

xhr.send(null);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
