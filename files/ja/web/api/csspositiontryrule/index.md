---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

**`CSSPositionTryRule`** インターフェイスは、{{cssxref("@position-try")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表すオブジェクトを示します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} から継承したプロパティがあります。_

- {{domxref("CSSPositionTryRule.name")}} {{ReadOnlyInline}}
  - : `@position-try` アットルールの {{cssxref("dashed-ident")}} で指定された位置試行オプションの名前を表します。
- {{domxref("CSSPositionTryRule.style")}} {{ReadOnlyInline}}
  - : {{domxref("CSSPositionTryDescriptors")}} オブジェクトで、この `@position-try` アットルールの本体で設定された宣言を表します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である ancestor {{domxref("CSSRule")}} から継承したメソッドがあります。_

## 例

この CSS には、`@position-try` アットルールがあり、これには `--custom-left` という名前がついており、3 つの記述子があります。

```css
@position-try --custom-left {
  position-area: left;
  width: 20%;
  max-width: 200px;
  margin-right: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // CSSPositionTryRule
console.log(tryOption); // "[object CSSPositionTryRule]"
console.log(tryOption.name); // "--custom-left"
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.maxWidth); // "200px"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [オーバーフローの処理: 試行オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
