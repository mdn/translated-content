---
title: "Document: customElementRegistry プロパティ"
short-title: customElementRegistry
slug: Web/API/Document/customElementRegistry
l10n:
  sourceCommit: 9c4d4cb78a55340b46855e47aba76729a59e11ce
---

{{APIRef("Web Components")}}

**`customElementRegistry`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、この文書に関連付けられた {{domxref("CustomElementRegistry")}} オブジェクトを、設定されていない場合は `null` を返します。

{{domxref("Window")}} に関連付けられた文書（ページのメイン文書など）の場合、これはグローバルな `CustomElementRegistry` であり、{{domxref("window.customElements")}} プロパティからもアクセス可能です。プログラムによって作成された文書（例えば {{domxref("DOMImplementation.createHTMLDocument()")}} を使用した場合など）では、デフォルトでカスタム要素レジストリーは `null` になります。

このプロパティは、{{domxref("ShadowRoot")}} オブジェクト上でも、同時に {{domxref("ShadowRoot/customElementRegistry","customElementRegistry")}} というプロパティ名を通じて利用可能です。

## 値

{{domxref("CustomElementRegistry")}} オブジェクト、または `null` です。

## 例

### 文書のカスタム要素レジストリーへアクセス

この例は、メイン文書の `customElementRegistry` が {{domxref("window.customElements")}} で利用できるグローバルレジストリーと同じものである一方、{{domxref("DOMImplementation.createHTMLDocument()")}} を用いてプログラムで作成された文書では、デフォルトでレジストリーが `null` になることを示しています。

```js
// メイン文書のレジストリーはグローバルなもの
console.log(document.customElementRegistry === window.customElements); // true （ウィンドウに関連付けられた文書）

// プログラムによって作成された文書では、レジストリーが null になります。
const newDoc = document.implementation.createHTMLDocument("New document");
console.log(newDoc.customElementRegistry); // null
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ShadowRoot.customElementRegistry")}}
- {{domxref("Element.customElementRegistry")}}
- {{domxref("CustomElementRegistry")}}
- {{domxref("window.customElements")}}
- [カスタム要素の使用](/ja/docs/Web/API/Web_components/Using_custom_elements)
