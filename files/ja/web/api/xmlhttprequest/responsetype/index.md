---
title: "XMLHttpRequest: responseType プロパティ"
short-title: responseType
slug: Web/API/XMLHttpRequest/responseType
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

{{domxref("XMLHttpRequest")}} (XHR) の **`responseType`** プロパティは列挙型の文字列値で、レスポンスに含まれているデータの型を示します。

作者がレスポンスの型を変更することもできます。 `responseType` の値として空文字列が設定された場合は、既定値である `text` が使用されます。

### 値

文字列で、レスポンスに含まれているデータの型を指定します。以下の値を取ることができます。

- `""`
  - : `responseType` が空の文字列の場合は `"text"` と同じで、既定の型です。
- `"arraybuffer"`
  - : {{domxref("XMLHttpRequest.response", "response")}} はバイナリーデータを含む JavaScript の {{jsxref("ArrayBuffer")}} です。
- `"blob"`
  - : `response` はバイナリーデータを含む {{domxref("Blob")}} オブジェクトです。
- `"document"`
  - : `response` は {{Glossary("HTML")}} の {{domxref("Document")}} または {{Glossary("XML")}} の {{domxref("XMLDocument")}} で、受信したデータの MIME タイプに基づいて適切な方になります。 [XMLHttpRequest における HTML の扱い](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)で、 XHR を使用して HTML コンテンツを読み取ることについて詳しく確認することができます。
- `"json"`
  - : `response` は {{Glossary("JSON")}} として受信したデータの内容を解釈して生成された JavaScript オブジェクトです。
- `"text"`
  - : `response` は文字列に入ったテキストです。

> **メモ:** `responseType` を特定の値に設定する場合は、サーバーが実際にその形式と互換性のあるレスポンスを送信していることを確認してください。サーバーが `responseType` に設定された値と互換性のないデータを返した場合、{{domxref("XMLHttpRequest.response", "response")}} の値は `null` になります。

### 例外

- `InvalidAccessError` {{domxref("DOMException")}}
  - : `responseType` の値の変更が同期モードの `XMLHttpRequest` 上で試みられたものの、ワーカー ({{domxref("Worker")}}) の中ではなかった場合。詳細については、下記の[同期 XHR の制限](#同期_xhr_の制限)を参照してください。

## 使用上の注意

### 同期 XHR の制限

`responseType` の値を同期 `XMLHttpRequest` で変更することは、リクエストがワーカー ({{domxref("Worker")}}) に属している場合を除いてできません。この制限は、ブラウザーのメインスレッドをブロックしてユーザーの使い勝手を妨害する巨大なトランザクションが、同期操作で使用されないことを保証する対策の一環として設けられています。

XHR のリクエストは既定では非同期です。同期モードは、 `false` の値をオプションの `async` 引数に渡して {{domxref("XMLHttpRequest.open", "open()")}} を呼び出した場合のみ設定されます。

### ワーカーでの制限

`responseType` の値を `document` に指定しようとすると、ワーカー ({{domxref("Worker")}}) の中では失敗します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [XMLHttpRequest 内の HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- レスポンスデータ: {{domxref("XMLHttpRequest.response", "response")}}, {{domxref("XMLHttpRequest.responseText", "responseText")}}, {{domxref("XMLHttpRequest.responseXML", "responseXML")}}
