---
title: color-scheme
slug: Web/CSS/color-scheme
tags:
  - CSS
  - CSS Colors
  - CSS Property
  - HTML Colors
  - HTML Styles
  - Layout
  - Reference
  - Styling HTML
  - Styling text
  - Web
  - color-adjust
  - recipe:css-property
browser-compat: css.properties.color-scheme
translation_of: Web/CSS/color-scheme
---
{{CSSRef}}

**`color-scheme`** は CSS のプロパティで、要素がどのような配色で快適に表示されるかを示すことができます。

オペレーティングシステムの配色の一般的な選択肢は、「ライト」と「ダーク」、または「中間モード」と「夜モード」です。ユーザーがこれらの配色のいずれかを選択すると、 OS はユーザーインターフェースを調整します。これには、フォームコントロール、スクロールバー、および CSS システムカラーの使用値が含まれます。

## 構文

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* グローバル値 */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: unset;
```

`color-scheme` プロパティの値は以下のキーワードのうちの一つである必要があります。

### 値

- `normal`
  - : この要素がどの配色も認識しないため、ブラウザーの既定の配色でレンダリングするべきであることを示します。
- `light`
  - : オペレーティングシステムのライト配色を使用して要素をレンダリングできることを示します。
- `dark`
  - : オペレーティングシステムのダーク配色を使用して要素をレンダリングできることを示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 配色への適合

ページ全体をユーザーの配色設定に合わせるには、 `color-scheme` を {{cssxref(":root")}} 要素で設定してください。

```css
:root {
  color-scheme: light dark;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("-webkit-print-color-adjust")}}
