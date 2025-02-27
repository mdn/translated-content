---
title: "XMLHttpRequest: response プロパティ"
short-title: response
slug: Web/API/XMLHttpRequest/response
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

{{domxref("XMLHttpRequest")}} の **`response`** プロパティは、そのリクエストの本体の内容を、 {{jsxref("ArrayBuffer")}}、{{domxref("Blob")}}、{{domxref("Document")}}、JavaScript の {{jsxref("Object")}}、文字列など、リクエストの {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティの値に応じた形で返します。

## 値

{{domxref("XMLHttpRequest.responseType", "responseType")}} の値に基づく適切なオブジェクト。 {{domxref("XMLHttpRequest.open", "open()")}} を呼び出してリクエストを初期化した後や、 {{domxref("XMLHttpRequest.send", "send()")}} を呼び出してリクエストをサーバーに送信する前に、 `responseType` の値を設定することで、特定の形式でデータを提供するようにリクエストができます。

リクエストが未完了または失敗する場合、値は `null` です。ただし、 `"text"` や空の文字列 (`""`) を使用してテキストデータを読み込む場合は除きます。リクエストがまだ `LOADING` {{domxref("XMLHttpRequest.readyState", "readyState")}} (3) にある間、レスポンスはこれまでのレスポンスを含むことがあります。

## 例

この例で紹介している `load()` 関数は、サーバーからページを読み込み処理するものです。これは、 {{domxref("XMLHttpRequest")}} オブジェクトを作成し、 {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}} イベントのリスナーを生成して、その中で `readyState` イベントが `DONE` (4) に変わると `response` が取得し、 `load()` に渡されたコールバック関数に渡しています。

コンテンツは生のテキストデータとして扱われます（ここでは、既定の
{{domxref("XMLHttpRequest.responseType", "responseType")}} を上書きするものがないため）。

```js
const url = "somePage.html"; //A local page

function load(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  };

  xhr.open("GET", url, true);
  xhr.send("");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- テキストと HTML/XML データの取得: {{domxref("XMLHttpRequest.responseText")}} および {{domxref("XMLHttpRequest.responseXML")}}
