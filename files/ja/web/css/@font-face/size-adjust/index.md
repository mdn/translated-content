---
title: size-adjust
slug: Web/CSS/@font-face/size-adjust
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - size-adjust
browser-compat: css.at-rules.font-face.size-adjust
translation_of: Web/CSS/@font-face/size-adjust
---
{{CSSRef}}

**`size-adjust`** は CSS の記述子で、記述子は、このフォントに関連する字体のアウトラインとメトリックの乗数を定義します。これにより、同じフォントサイズでレンダリングしたときに、様々なフォントのデザインを調和させることが容易になります。

`size-adjust` 記述子は {{cssxref("font-size-adjust")}} プロパティと似たような振る舞いをします。これは、 ex の高さを一致させることによって、フォントごとに調整を計算します。

## 構文

```css
size-adjust: 90%;
```

### 値

- `<percentage>`
  - : {{cssxref("&lt;percentage&gt;")}} 値で、初期値は 100% です。

このフォントに関連するすべての寸法は、指定されたパーセント値で拡大縮小されます。これには、字形の前進、ベースライン表、および {{cssxref("@font-face")}} 記述子によって提供されるオーバーライドが含まれます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

## 代替フォントの寸法を上書き

`size-adjust` プロパティは、代替フォントの寸法を第一のウェブフォントのものにより一致するように寸法を上書きするのに役立ちます。

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  size-adjust: 90%;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}} 記述子
- {{cssxref("@font-face/font-family", "font-family")}} 記述子
- {{cssxref("@font-face/font-weight", "font-weight")}} 記述子
- {{cssxref("@font-face/font-style", "font-style")}} 記述子
- {{cssxref("@font-face/font-stretch", "font-stretch")}} 記述子
- {{cssxref("@font-face/font-variant", "font-variant")}} 記述子
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}} 記述子
- {{cssxref("@font-face/src", "src")}} 記述子
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子
- {{cssxref('font-size-adjust')}} property
