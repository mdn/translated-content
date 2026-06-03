---
title: XMLHttpRequest における HTML の扱い
slug: Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest
l10n:
  sourceCommit: dbf313c424a43722626f369d5a8fb6bd1a1fafb7
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

W3C の {{domxref("XMLHttpRequest")}} 仕様書では、もともと {{Glossary("XML")}} の解釈しか対応していなかった {{domxref("XMLHttpRequest")}} に [HTML](/ja/docs/Web/HTML) の解釈を追加しています。この機能によって、ウェブアプリは `XMLHttpRequest` を使って HTML を解釈済の {{Glossary("DOM")}} として取得することができます。

一般的な `XMLHttpRequest` の使い方についての概要は、 [XMLHttpRequest の利用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)をお読みください。

## 制限

同期的な `XMLHttpRequest` の利用を避けるために、 HTML 対応は同期モードでは利用できません。また、 HTML 対応は {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティが `"document"` に設定されている時にのみ有効です。この制限によって、古いコードが `XMLHttpRequest` を使って {{domxref("XMLHttpRequest.responseText", "responseText")}} が `text/html` であるリソースを既定のモードで受け取るときに、無用に HTML を解釈する時間を浪費することを防ぎます。また、この制限によって HTTP のエラーページ (ふつうは `text/html` の応答本文を持つ) の際に {{domxref("XMLHttpRequest.responseXML", "responseXML")}} が `null` と想定する古いコードで問題が発生することを防ぐこともできます。

## 使用方法

{{domxref("XMLHttpRequest")}} を使って HTML リソースを DOM として取得することは、 `XMLHttpRequest` を使って XML リソースを DOM として取得するのと似ていますが、同期モードを使用することはできず、 `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.open", "open()")}} を呼び出した後、 {{domxref("XMLHttpRequest.send", "send()")}} を呼び出す前に、 {{domxref("XMLHttpRequest.responseType", "responseType")}} プロパティに文字列 `"document"` 代入して、明示的に文書を要求する必要があるという点が異なります。

```js
const xhr = new XMLHttpRequest();
xhr.onload = () => {
  console.log(xhr.responseXML.title);
};
xhr.open("GET", "file.html");
xhr.responseType = "document";
xhr.send();
```

## 文字エンコーディング

HTTP の {{HTTPHeader("Content-Type")}} ヘッダーで文字エンコーディングが宣言されている場合は、そのエンコーディングが使用されます。そうでない場合、もしバイトオーダーマークがある場合は、そのバイトオーダーマークが示すエンコーディングを使用します。そうでない場合、もしファイルの先頭 1024 バイト以内にエンコーディングを宣言する {{HTMLElement("meta")}} 要素がある場合は、そのエンコーディングが使用されます。それもない場合、ファイルは UTF-8 としてデコードされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHttpRequest")}}
- [XMLHttpRequest の使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
