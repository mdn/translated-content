---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - line-gap-override
browser-compat: css.at-rules.font-face.line-gap-override
translation_of: Web/CSS/@font-face/line-gap-override
---
{{CSSRef}}

**`line-gap-override`** は CSS の記述子で、そのフォントの line-gap の寸法を定義します。 line-gap の寸法は、フォントが推奨する line-gap または external leading です。

## 構文

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### 値

- `normal`
  - : 既定値です。使用すると、寸法をフォントファイルから取得します。
- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} の値です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 代替フォントの寸法を上書き

`line-gap-override` プロパティは、代替フォントの寸法を第一のウェブフォントのものにより一致するように寸法を上書きするのに役立ちます。

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  line-gap-override: 125%;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
