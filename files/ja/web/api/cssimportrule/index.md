---
title: CSSImportRule
slug: Web/API/CSSImportRule
l10n:
  sourceCommit: 17900b2a94c20c410dd0df2e8a48ce17f9a69672
---

{{APIRef("CSSOM")}}

**`CSSImportRule`** は {{cssxref("@import")}} [アットルール](/ja/docs/Web/CSS/At-rule)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSImportRule.href")}} {{ReadOnlyInline}}
  - : {{cssxref("@import")}} ルールで指定された URL を返します。
- {{domxref("CSSImportRule.layerName")}} {{ReadOnlyInline}}
  - : {{cssxref("@import")}} ルールで宣言された[カスケードレイヤー](/ja/docs/Web/CSS/@layer)の名前を返します。レイヤーが無名の場合は空文字列、ルールが何も宣言していない場合は `null` を返します。
- {{domxref("CSSImportRule.media")}}
  - : 関連づけられたスタイルシートの `media` 属性の値を返します。
- {{domxref("CSSImportRule.styleSheet")}} {{ReadOnlyInline}}
  - : 関連づけられたスタイルシートを返します。
- {{domxref("CSSImportRule.supportsText")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : {{cssxref("@import")}} ルールで指定した supports の条件を返します。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

この文書には単一のスタイルシートが記述されており、そのスタイルシートには単一の {{cssxref("@import")}} ルールだけが含まれています。したがって、 CSS ルールのリストの最初の項目は `CSSImportRule` になります。

```css
@import url("style.css") screen;
```

```js
const myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // CSSImportRule インスタンスオブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
