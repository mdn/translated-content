---
title: color-scheme
slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 3dcde591689009d0da8e6d44444150826cb4fe42
---

{{CSSRef}}

**`color-scheme`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がどのような配色で快適に表示されるかを示すことができます。

オペレーティングシステムの配色の一般的な選択肢は、「ライト」と「ダーク」、または「昼モード」と「夜モード」です。ユーザーがこれらの配色のいずれかを選択すると、 OS はユーザーインターフェースを調整します。これには、[フォームコントロール](/ja/docs/Learn/Forms)、[スクロールバー](/ja/docs/Web/CSS/CSS_scrollbars_styling)、および [CSS システムカラー](/ja/docs/Web/CSS/CSS_colors)の使用値が含まれます。

{{EmbedInteractiveExample("pages/css/color-scheme.html")}}

## 構文

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;
color-scheme: only light;

/* グローバル値 */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: revert-layer;
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
- `only`

  - : ユーザーエージェントが要素の配色を上書きすることを禁じます。

    特定の要素または `:root` に `color-scheme: only light;` を適用することで、 Chrome の[自動ダークテーマ](https://developer.chrome.com/blog/auto-dark-theme/#per-element-opt-out)による色上書きを無効にするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 配色設定の宣言

ページ全体をユーザーの配色設定に合わせるには、 `color-scheme` を {{cssxref(":root")}} 要素で設定してください。

```css
:root {
  color-scheme: light dark;
}
```

ユーザーの配色環境設定に固有の要素を組み込むには、それらの要素で `color-scheme` を宣言します。

```css
header {
  color-scheme: only light;
}
main {
  color-scheme: light dark;
}
footer {
  color-scheme: only dark;
}
```

### 配色設定に基づいたスタイル設定

配色の好みに基づいて要素をスタイル設定するには、 [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディアクエリーを用います。下記の例では、`color-scheme` プロパティによってページ全体でオペレーティングシステムの明るい配色と暗い配色の両方を使用することを選択し、 `prefers-color-scheme` を使用して個々の要素にそれらの配色で望ましい前景色と背景色を指定しています。

```css
:root {
  color-scheme: light dark;
}

@media (prefers-color-scheme: light) {
  .element {
    color: black;
    background-color: white;
  }
}

@media (prefers-color-scheme: dark) {
  .element {
    color: white;
    background-color: black;
  }
}
```

また、実験的な [`light-dark()`](/ja/docs/Web/CSS/color_value/light-dark) [`<color>` 関数](/ja/docs/Web/CSS/CSS_Functions#color_functions) を使用して、よりコンパクトなコード構造で異なる配色の前景色と背景色を設定することもできます。

```css
:root {
  color-scheme: light dark;
}

.element {
  color: light-dark(black, white);
  background-color: light-dark(white, black);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`prefers-color-scheme`](/ja/docs/Web/CSS/@media/prefers-color-scheme) メディアクエリーで、配色設定のユーザー設定を検出することができます。
- {{CSSXref("color_value/light-dark", "light-dark()")}} カラー関数で、ライトとダークの配色設定の両方に色を設定することができます。
- [CSS を使った HTML の要素への色の適用](/ja/docs/Web/CSS/CSS_colors/Applying_color)
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
