---
title: "XMLHttpRequest: responseText プロパティ"
short-title: responseText
slug: Web/API/XMLHttpRequest/responseText
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("XMLHttpRequest")}} の **`responseText`** プロパティは読み取り専用で、送信されたリクエストに続いてサーバーから受け取ったテキストを返します。

## 値

文字列で、 `XMLHttpRequest` を使用して受信したテキストデータ、またはリクエストが失敗した場合もしくはまだコンテンツが受信されていない場合は `""` です。

非同期リクエストを処理している間、 `responseText` の値は、データが完全に受信できておらず不完全であっても、常にサーバーから受信した現在のコンテンツを持ちます。

{{domxref("XMLHttpRequest.readyState", "readyState")}} の値が `XMLHttpRequest.DONE` (`4`) になり、 {{domxref("XMLHttpRequest.status", "status")}} の値が 200 (`"OK"`) になった場合、コンテンツ全体が受信されたことが分かります。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : {{domxref("XMLHttpRequest.responseType")}} が空文字列または `"text"` のどちらにも設定されていません。 `responseText` プロパティはテキストコンテンツのみで有効なので、他の値はエラーの状態です。

## 例

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// If specified, responseType must be empty string or "text"
xhr.responseType = "text";

xhr.onload = () => {
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
