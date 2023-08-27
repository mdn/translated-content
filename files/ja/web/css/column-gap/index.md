---
title: column-gap (grid-column-gap)
slug: Web/CSS/column-gap
---

{{CSSRef}}

**`column-gap`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の段または列の間の隙間 ({{glossary("Gutters","溝")}}) の寸法を設定します。

{{EmbedInteractiveExample("pages/css/column-gap.html")}}

当初は[段組みレイアウト](/ja/docs/Web/CSS/CSS_Columns)の一部でしたが、`column-gap` の定義は複数のレイアウト方式を含めるように拡張されました。現在は[ボックス配置](/ja/docs/Web/CSS/CSS_Box_Alignment)の中で定義され、段組みレイアウト、フレキシブルボックス、グリッドレイアウトで使用されることがあります。

## 構文

```css
/* キーワード値 */
column-gap: normal;

/* <length> 値 */
column-gap: 3px;
column-gap: 2.5em;

/* <percentage> 値 */
column-gap: 3%;

/* グローバル値 */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: unset;
```

`column-gap` プロパティは以下に挙げた値の一つで指定します。

### 値

- `normal`
  - : 列間 (段間) にはブラウザー既定の幅が使われます。段組みレイアウトでは `1em` と指定され、他の種類のレイアウトでは 0 になります。
- {{CSSxRef("&lt;length&gt;")}}
  - : 列間 (段間) の寸法を {{CSSxRef("&lt;length&gt;")}} として定義します。 {{CSSxRef("&lt;length&gt;")}} のプロパティ値は負の数であってはいけません。
- {{CSSxRef("&lt;percentage&gt;")}}
  - : 列間 (段間) の寸法を {{CSSxRef("&lt;percentage&gt;")}} として定義します。 {{CSSxRef("&lt;percentage&gt;")}} のプロパティ値は負の数であってはいけません。

## 公式定義

{{cssinfo}}

## 関連情報

{{csssyntax}}

## 例

### フレックスレイアウト

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  height: 100px;
  column-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: auto;
}
```

#### 結果

{{EmbedLiveSample("Flex_layout", "auto", "120px")}}

### グリッドレイアウト

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample("Grid_layout", "auto", "120px")}}

### 段組みレイアウト

#### HTML

```html
<p class="content-box">
  This is some multi-column text with a 40px column gap created with the CSS
  `column-gap` property. Don't you think that's fun and exciting? I sure do!
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### 結果

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## 仕様書

{{Specifications("css.properties.column-gap.grid_context")}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{CSSxRef("row-gap")}}, {{CSSxRef("gap")}}
- グリッドレイアウトのガイド: [グリッドレイアウトの基本概念 - 溝](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#gutters)
- 段組みレイアウトのガイド: [段組みのスタイル付け](/ja/docs/Web/CSS/CSS_Columns/Styling_Columns)
