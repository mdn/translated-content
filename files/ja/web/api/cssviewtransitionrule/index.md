---
title: CSSViewTransitionRule
slug: Web/API/CSSViewTransitionRule
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

{{APIRef("CSSOM")}}

**`CSSViewTransitionRule`** インターフェイスは、CSS の {{cssxref("@view-transition")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSViewTransitionRule.navigation", "navigation")}} {{readonlyinline}}
  - : `@view-transition` アットルールの `navigation` 記述子の値を返します。
- {{domxref("CSSViewTransitionRule.types", "types")}} {{readonlyinline}}
  - : `@view-transition` アットルールの `types` 記述子の値を格納した配列を返します。

## インスタンスメソッド

_祖先である {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

### 基本的な使い方

このスタイルシートは　{{cssxref("@view-transition")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を含んでおり、`navigation` および `types` 記述子が設定されています。

```css
@view-transition {
  navigation: auto;
  types: slide, rotate;
}
```

スクリプト内では、`document.styleSheets[0].cssRules` を使用して `@view-transition` アットルールへの参照を取得し、対応する `CSSViewTransitionRule` オブジェクトとその `navigation` および `types` プロパティをコンソールに出力します。`types` プロパティは、`types` 記述子に設定された値を含む配列を返します。

```js
let myRule = document.styleSheets[0].cssRules;
console.log(myRule[0]); // CSSViewTransitionRule で、@view-transition アットルールを表す
console.log(myRule[0].navigation); // "auto"
console.log(myRule[0].types); // ["slide", "rotate"]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@view-transition")}}
- [ビュー遷移 API](/ja/docs/Web/API/View_Transition_API)
