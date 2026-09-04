---
title: "CSSPositionTryRule: name プロパティ"
short-title: name
slug: Web/API/CSSPositionTryRule/name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM") }}

**`name`** は {{domxref("CSSPositionTryRule")}} インターフェイスの読み取り専用プロパティで、`@position-try` アットルールの {{cssxref("dashed-ident")}} で定義された位置試行代替オプションの名前を表します。

## 値

文字列です。

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
console.log(tryOption.name); // "--custom-bottom"
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
