---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

**`CSSPositionTryDescriptors`** インターフェイスは、 {{cssxref("@position-try")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)の本体で設定可能な CSS 記述子のリストを表すプロパティを定義します。

対応する {{cssxref("@position-try")}} アットルール本体内のそれぞれの記述子は、プロパティ名の[ブラケット記法](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#ブラケット記法)またはプロパティ名のキャメルケース表記 "propertyName" を用いた[ドット記法](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#ドット記法)のどちらかを使用してアクセスできます。
例えば、CSS プロパティ "property-name" には、`style["property-name"]` または `style.propertyName` のようにアクセスできます。ここで `style` は `CSSPositionTryDescriptors` のインスタンスです。
単一の語によるプロパティ、例えば {{cssxref("height")}} は、`style["height"]` と `style.height` のどちらの記法を使用してアクセスすることもできます。

> [!NOTE]
> {{domxref("CSSPositionTryRule")}} インターフェイスは {{cssxref("@position-try")}} アットルールを表し、{{domxref("CSSPositionTryRule.style")}} プロパティはこのオブジェクトのインスタンスになります。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSStyleDeclaration")}} から継承したプロパティもあります。_

以下のプロパティ名は、"snake-case" のようなスネークケース（ブラケット記法でアクセス）および "camelCase" のようなキャメルケース（ドット記法でアクセス）で、それぞれ対応する `@position-try` アットルール内の記述子の値を表します。

- `align-self` または `alignSelf`
  - : 文字列で、{{cssxref("align-self")}} 記述子の値を表します。
- `block-size` または `blockSize`
  - : 文字列で、{{cssxref("block-size")}} 記述子の値を表します。
- `bottom`
  - : 文字列で、{{cssxref("bottom")}} 記述子の値を表します。
- `height`
  - : 文字列で、{{cssxref("height")}} 記述子の値を表します。
- `inline-size` または `inlineSize`
  - : 文字列で、{{cssxref("inline-size")}} 記述子の値を表します。
- `inset`
  - : 文字列で、{{cssxref("inset")}} 記述子の値を表します。
- `position-area` または `positionArea`
  - : 文字列で、{{cssxref("position-area")}} 記述子の値を表します。
- `inset-block` または `insetBlock`
  - : 文字列で、{{cssxref("inset-block")}} 記述子の値を表します。
- `inset-block-end` または `insetBlockEnd`
  - : 文字列で、{{cssxref("inset-block-end")}} 記述子の値を表します。
- `inset-block-start` または `insetBlockStart`
  - : 文字列で、{{cssxref("inset-block-start")}} 記述子の値を表します。
- `inset-inline` または `insetInline`
  - : 文字列で、{{cssxref("inset-inline")}} 記述子の値を表します。
- `inset-inline-end` または `insetInlineEnd`
  - : 文字列で、{{cssxref("inset-inline-end")}} 記述子の値を表します。
- `inset-inline-start` または `insetInlineStart`
  - : 文字列で、{{cssxref("inset-inline-start")}} 記述子の値を表します。
- `justify-self` または `justifySelf`
  - : 文字列で、{{cssxref("justify-self")}} 記述子の値を表します。
- `left`
  - : 文字列で、{{cssxref("left")}} 記述子の値を表します。
- `margin`
  - : 文字列で、{{cssxref("margin")}} 記述子の値を表します。
- `margin-block` または `marginBlock`
  - : 文字列で、{{cssxref("margin-block")}} 記述子の値を表します。
- `margin-block-end` または `marginBlockEnd`
  - : 文字列で、{{cssxref("margin-block-end")}} 記述子の値を表します。
- `margin-block-start` または `marginBlockStart`
  - : 文字列で、{{cssxref("margin-block-start")}} 記述子の値を表します。
- `margin-bottom` または `marginBottom`
  - : 文字列で、{{cssxref("margin-bottom")}} 記述子の値を表します。
- `margin-inline` または `marginInline`
  - : 文字列で、{{cssxref("margin-inline")}} 記述子の値を表します。
- `margin-inline-end` または `marginInlineEnd`
  - : 文字列で、{{cssxref("margin-inline-end")}} 記述子の値を表します。
- `margin-inline-start` または `marginInlineStart`
  - : 文字列で、{{cssxref("margin-inline-start")}} 記述子の値を表します。
- `margin-left` または `marginLeft`
  - : 文字列で、{{cssxref("margin-left")}} 記述子の値を表します。
- `margin-right` または `marginRight`
  - : 文字列で、{{cssxref("margin-right")}} 記述子の値を表します。
- `margin-top` または `marginTop`
  - : 文字列で、{{cssxref("margin-top")}} 記述子の値を表します。
- `max-block-size` または `maxBlockSize`
  - : 文字列で、{{cssxref("max-block-size")}} 記述子の値を表します。
- `max-height` または `maxHeight`
  - : 文字列で、{{cssxref("max-height")}} 記述子の値を表します。
- `max-inline-size` または `maxInlineSize`
  - : 文字列で、{{cssxref("max-inline-size")}} 記述子の値を表します。
- `max-width` または `maxWidth`
  - : 文字列で、{{cssxref("max-width")}} 記述子の値を表します。
- `min-block-size` または `minBlockSize`
  - : 文字列で、{{cssxref("min-block-size")}} 記述子の値を表します。
- `min-height` または `minHeight`
  - : 文字列で、{{cssxref("min-height")}} 記述子の値を表します。
- `min-inline-size` または `minInlineSize`
  - : 文字列で、{{cssxref("min-inline-size")}} 記述子の値を表します。
- `min-width` または `minWidth`
  - : 文字列で、{{cssxref("min-width")}} 記述子の値を表します。
- `place-self` または `placeSelf`
  - : 文字列で、{{cssxref("place-self")}} 記述子の値を表します。
- `position-anchor` または `positionAnchor`
  - : 文字列で、{{cssxref("position-anchor")}} 記述子の値を表します。
- `right`
  - : 文字列で、{{cssxref("right")}} 記述子の値を表します。
- `top`
  - : 文字列で、{{cssxref("top")}} 記述子の値を表します。
- `width`
  - : 文字列で、{{cssxref("width")}} 記述子の値を表します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSStyleDeclaration")}} から継承したメソッドがあります。_

## 例

この CSS には `@position-try` アットルールがあり、`--custom-right` という名前と 3 つの記述子があります。

```css
@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin-left: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // CSSPositionTryRule
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.margin); // "0 0 0 10px"
console.log(tryOption.style["position-area"]); // "right"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("CSSPositionTryRule")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [オーバーフローの処理: 試行オプションと条件付き非表示](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
