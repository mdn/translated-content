---
title: descent-override
slug: Web/CSS/@font-face/descent-override
tags:
  - '@font-face'
  - アットルール記述子
  - CSS
  - リファレンス
  - 記述子
  - descent-override
browser-compat: css.at-rules.font-face.descent-override
translation_of: Web/CSS/@font-face/descent-override
---
{{CSSRef}}

**`descent-override`** は CSS の記述子で、フォントのディセンダーの寸法を定義します。ディセンダーの寸法は CSS がインライン整形コンテキストで行ボックスをレイアウトするために使用するベースラインの下の高さです。

## 構文

```css
descent-override: normal;
descent-override: 90%;
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

## 代替フォントの寸法を上書き

`descent-override` プロパティは、代替フォントの寸法を第一のウェブフォントのものにより一致するように寸法を上書きするのに役立ちます。

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  descent-override: 125%;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
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
