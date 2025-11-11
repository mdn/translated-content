---
title: CSSNamespaceRule
slug: Web/API/CSSNamespaceRule
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}

**`CSSNamespaceRule`** インターフェイスは単一の CSS {{ cssxref("@namespace") }} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を記述します。

{{InheritanceDiagram}}

## プロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSNamespaceRule.namespaceURI")}}
  - : 指定された名前空間の URI のテキストを含む文字列を返します。
- {{domxref("CSSNamespaceRule.prefix")}}
  - : この名前空間に関連付けられた接頭辞の名前を文字列で返します。そのような接頭辞がない場合は、空文字列を返します。

## メソッド

_祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

このスタイルシートは、唯一のルールとして名前空間を記載しています。したがって、最初に返される {{domxref("CSSRule")}} は `CSSNamespaceRule` となります。

```css
@namespace url(http://www.w3.org/1999/xhtml);
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSNamespaceRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
