---
title: "CSSPositionTryRule: style プロパティ"
short-title: style
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

**`style`** は {{domxref("CSSPositionTryRule")}} インターフェイスの読み取り専用プロパティで、{{domxref("CSSPositionTryDescriptors")}} オブジェクトが入ります。これは {{cssxref("@position-try")}} ルールの本体で利用可能な記述子を表します。

## 値

{{domxref("CSSPositionTryDescriptors")}} オブジェクトです。

`style` プロパティ自体は、`CSSPositionTryDescriptors` オブジェクトを置き換えることができないという意味で読み取り専用ですが、`style` プロパティに直接代入することは可能です。これは、その {{domxref("CSSStyleDeclaration/cssText", "cssText")}} プロパティへの代入と同等です。同時に、その `CSSPositionTryDescriptors` オブジェクトを {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} や {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}} メソッドを用いて変更することもできます。

## 例

この CSS には、`@position-try` アットルールがあり、これには `--custom-left` という名前がついており、3 つの記述子があります。

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin-top: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.positionArea); // ""。 position-area は指定されていない
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
