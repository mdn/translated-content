---
title: box-orient
slug: Web/CSS/box-orient
---

{{CSSRef}}{{Non-standard_header}}

> **警告:** これはもともと CSS Flexible Box Layout Module の草稿のプロパティでしたが、より新しい標準に置き換えられました。現在の標準についての情報は[フレックスボックス](/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)を参照してください。

**`box-orient`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素がその中身をレイアウトする方向が、水平か垂直かを指定します。

```css
/* キーワード値 */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* グローバル値 */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
```

## 構文

`box-orient` プロパティは以下の列挙されたキーワード値のうちの一つで指定します。

### 値

- `horizontal`
  - : ボックスは、その内容を水平にレイアウトします。
- `vertical`
  - : ボックスは、その内容を垂直にレイアウトします。
- `inline-axis` (HTML)
  - : ボックスは、子をインライン軸に沿って表示します。
- `block-axis` (HTML)
  - : ボックスは、子をブロック軸に沿って表示します。

`inline-axis` と `block-axis` は書字方向に依存するキーワードであり、英語では、それぞれ `horizontal` と `vertical` に対応付けられます。

## 解説

HTML DOM 要素は既定で中身をインライン軸に沿ってレイアウトします。この CSS プロパティは HTML 要素のうち CSS の {{CSSxRef("display")}} が `box` または `inline-box` の値であるものに対してのみ適用されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ボックスを水平方向に設定

ここでは、`box-orient`プロパティにより、例題の 2 つの {{HTMLElement("p")}} セクションが同じ行に表示されます。

#### HTML

```html
<div class="example">
  <p>I will be to the left of my sibling.</p>
  <p>I will be to the right of my sibling.</p>
</div>
```

#### CSS

```css
div.example {
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */
  display: box; /* 仕様書通り */

  /* 子は垂直に向けられる */
  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* 仕様書通り */
}
```

### 結果

{{ EmbedLiveSample('Setting horizontal box orientation', '', 100) }}

## 仕様書

標準仕様には含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
