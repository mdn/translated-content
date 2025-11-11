---
title: "XMLHttpRequest: readystatechange イベント"
short-title: readystatechange
slug: Web/API/XMLHttpRequest/readystatechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`readystatechange` イベントは、 {{domxref("XMLHttpRequest")}} の {{domxref("XMLHttpRequest.readyState", "readyState")}} プロパティが変化するたびに発生します。

> [!WARNING]
> これは同期リクエストで使用してはいけません。また、ネイティブコードから使用してはいけません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("readystatechange", (event) => { })

onreadystatechange = (event) => { }
```

## イベント型

一般的な {{DOMxRef("Event")}} であり、追加のプロパティはありません。

## 例

```js
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  // ローカルファイルでは、 Mozilla Firefox で成功するとステータスは0になります
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
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
