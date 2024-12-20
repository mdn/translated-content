---
title: "Document: implementation プロパティ"
short-title: implementation
slug: Web/API/Document/implementation
l10n:
  sourceCommit: f24f8634cb73e3a608f0fb49202d52a4a9dc7ce3
---

{{ ApiRef("DOM") }}

**`Document.implementation`** プロパティは、現在の文書に関連付けられた {{domxref("DOMImplementation")}} オブジェクトを返します。

## 値

{{domxref("DOMImplementation")}} オブジェクトです。

## 例

```js
const modName = "HTML";
const modVer = "2.0";
const conformTest = document.implementation.hasFeature(modName, modVer);

console.log(`DOM ${modName} ${modVer} supported?: ${conformTest}`);

// ログ: "DOM HTML 2.0 supported?: true" （hasFeature は常に true を返す）
```

> [!WARNING]
> これを昨日検出に使用しないでください。 `hasFeature()` メソッドは常に true を返します。

## メモ

W3C's DOM Level 1 勧告では `hasFeature` メソッドのみが定義されているので、ブラウザーが DOM モジュールに対応しているかどうかを判断する方法の一つです。 (上記の例と [What does your user agent claim to support?](https://www.w3.org/2003/02/06-dom-support.html) を参照してください)。利用できるのであれば、 `DOMImplementation` の他のメソッドが、単一文書の外のものを制御するサービスを提供します。例えば、 `DOMImplementation` インターフェイスは `createDocumentType` メソッドを含んでおり、実装によって管理された 1 つ以上の文書に DTD が作成されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
