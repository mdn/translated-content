---
title: font-family
slug: Web/CSS/@font-face/font-family
---

{{CSSRef}}

**`font-family`** は CSS の記述子で、 {{cssxref("@font-face")}} ルールで指定されたフォントのフォントファミリーを指定することができます。

## 構文

```css
/* <string> 値 */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> 値 */
font-family: examplefont;
```

### 値

- `<family-name>`
  - : フォントファミリーの名前を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントファミリー名の設定

```css
@font-face {
  font-family: examplefont;
  src: url("examplefont.ttf");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
