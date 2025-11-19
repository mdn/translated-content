---
title: color-scheme
slug: Web/CSS/Reference/Properties/color-scheme
original_slug: Web/CSS/color-scheme
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`color-scheme`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がどのような配色で快適に表示されるかを示すことができます。ユーザーエージェントは、使用されている配色に合わせて、 UI クロームの次の側面を変更します。

- キャンバス表面の色。
- スクロールバーやその他の操作 UI の既定の色。
- フォームコントロールの既定の色。
- その他のブラウザーで指定された UI の既定の色（たとえば、「スペルチェック」のアンダーラインなど）。

要素の作成者は、[`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディア特性を使用して、残りの要素の色構成に対応する必要があります。

オペレーティングシステムの配色の一般的な選択肢は、「ライト」と「ダーク」、または「昼モード」と「夜モード」です。ユーザーがこれらの配色のいずれかを選択すると、 OS はユーザーインターフェイスを調整します。これには、[フォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms)、[スクロールバー](/ja/docs/Web/CSS/Guides/Scrollbars_styling)、および [CSS システムカラー](/ja/docs/Web/CSS/Reference/Values/system-color)の使用値が含まれます。

{{InteractiveExample("CSS デモ: color-scheme")}}

```css interactive-example-choice
color-scheme: normal;
```

```css interactive-example-choice
color-scheme: dark;
```

```css interactive-example-choice
color-scheme: light;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <textarea id="example-element">Text Area</textarea>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 50%;
}
```

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
  - : 要素が、ページの[配色](/ja/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)を使用して描画できることを示します。ページに配色が設定されていない場合、要素はページの既定の配色を使用して描画されます。
- `light`
  - : オペレーティングシステムのライト配色を使用して要素を描画できることを示します。
- `dark`
  - : オペレーティングシステムのダーク配色を使用して要素を描画できることを示します。
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

上記の CSS とともに、 HTML の [`<meta name="color-scheme">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) {{HTMLElement("meta")}} タグを、 {{htmlelement("head")}} 内のすべての CSS スタイル情報の前に記載し、ユーザーエージェントに好みの配色を知らせて、ページ読み込み時に画面が不要に点滅するのを防いでください。

### 配色設定に基づいたスタイル設定

配色の好みに基づいて要素をスタイル設定するには、 [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリーを用います。下記の例では、`color-scheme` プロパティによってページ全体でオペレーティングシステムの明るい配色と暗い配色の両方を使用することを選択し、 `prefers-color-scheme` を使用して個々の要素にそれらの配色で望ましい前景色と背景色を指定しています。

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

また、 [`light-dark()`](/ja/docs/Web/CSS/Reference/Values/color_value/light-dark) [`<color>` 関数](/ja/docs/Web/CSS/Reference/Values/Functions#color_functions) を使用して、よりコンパクトなコード構造で異なる配色の前景色と背景色を設定することもできます。

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

- [`prefers-color-scheme`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) メディアクエリーで、配色設定のユーザー設定を検出することができます。
- {{CSSXref("color_value/light-dark", "light-dark()")}} カラー関数で、ライトとダークの配色設定の両方に色を設定することができます。
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("accent-color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("print-color-adjust")}}
- [相対色の使用](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors)
