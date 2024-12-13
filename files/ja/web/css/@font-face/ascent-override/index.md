---
title: ascent-override
slug: Web/CSS/@font-face/ascent-override
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

**`ascent-override`** は CSS の {{cssxref("@font-face")}} アットルールの記述子で、フォントのアセンダーの寸法を定義します。アセンダーの寸法は CSS がインライン整形コンテキストで行ボックスをレイアウトするために使用するベースラインの上の高さです。

## 構文

```css
ascent-override: normal;
ascent-override: 90%;
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

`ascent-override` プロパティは、代替フォントの寸法を第一のウェブフォントのものにより一致するように寸法を上書きするのに役立ちます。

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  ascent-override: 125%;
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
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}} 記述子
