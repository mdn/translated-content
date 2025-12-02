---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
original_slug: Web/CSS/@font-face/font-family
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-family`** は CSS の記述子で、 {{cssxref("@font-face")}} アットルールで指定されたフォントのフォントファミリーを指定することができます。

この値は、 [`font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family) プロパティを用いて要素をスタイル設定する際に、特定の `@font-face` に対して名前を照合するために用いられます。
任意の名前を使用することができ、これは基盤のフォントデータで指定された名前を上書きします。

## 構文

```css
/* <string> 値 */
font-family: "font family";
font-family: "another font family";

/* <custom-ident> 値 */
font-family: example-font;
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
  font-family: "Some font family";
  src: url("some_font_name.ttf");
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
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
