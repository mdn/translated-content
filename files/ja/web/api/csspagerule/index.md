---
title: CSSPageRule
slug: Web/API/CSSPageRule
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("CSSOM")}}

**`CSSPageRule`** は単一の CSS {{cssxref("@page")}} ルールを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSPageRule.selectorText")}}
  - : このアットルールに関連付けられたページセレクターのテキストを表します。
- {{domxref("CSSPageRule.style")}} {{ReadOnlyInline}}
  - : このアットルールに関連付けられた[宣言ブロック](/ja/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)を返します。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

このスタイルシートには単一の {{cssxref("@page")}} ルールがあるので、最初の（そして唯一の）返されるルールは `CSSPageRule` になります。

```css
@page {
  margin: 1cm;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // CSSPageRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
