---
title: "XMLHttpRequest: send() メソッド"
short-title: send()
slug: Web/API/XMLHttpRequest/send
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} の **`send()`** メソッドは、リクエストをサーバーに送信します。

リクエストが非同期の場合（これが既定）、このメソッドはリクエストが送信されるとすぐに戻り、結果はイベントを用いて配信されます。リクエストが同期の場合、このメソッドはレスポンスが到着するまで戻りません。

`send()` はリクエストの本文を示す引数を一つ受け取ることができます。これは主に {{HTTPMethod("PUT")}} のようなリクエストに使用されます。リクエストメソッドが {{HTTPMethod("GET")}} または {{HTTPMethod("HEAD")}} であれば、 `body` 引数は無視され、リクエストの本文は `null` に設定されます。

{{HTTPHeader("Accept")}} ヘッダーを {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}} を使用して設定しなかった場合、 `Accept` ヘッダーは `"*/*"` 型 (任意の型) が送信されます。

## 構文

```js-nolint
send()
send(body)
```

### 引数

- `body` {{optional_inline}}
  - : XHR のリクエストの中で送られる本文データです。次のものが使用できます。
    - {{domxref("Document")}}: 送信前にシリアライズされている場合。
    - `XMLHttpRequestBodyInit`: [Fetch の仕様書](https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit)によれば、{{domxref("Blob")}}、{{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("FormData")}}、{{domxref("URLSearchParams")}}、文字列が利用できます。
    - `null`

    body に値が設定されていない場合、既定値の `null` が使用されます。

バイナリーコンテンツの送信（例えばファイルのアップロード）の最適な方法は、{{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}} の何れかのオブジェクトと `send()` メソッドを組み合わせることです。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : このリクエストに対してすでに `send()` が呼び出されているか、リクエストが完了している。
- `NetworkError` {{domxref("DOMException")}}
  - : 読み込むリソースの型が Blob であり、メソッドが `GET` ではない。

## GET の例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.onload = () => {
  // リクエストの終了。ここの処理を実行します。
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## POST の例

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);

//リクエストに従って正しいヘッダー情報を送信してください
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = () => {
  // 状態が変化すると関数が呼び出されます。
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // リクエストの終了。ここの処理を実行します。
  }
};
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
