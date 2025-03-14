---
title: caption-side
slug: Web/CSS/caption-side
---

{{CSSRef}}

**`caption-side`** は [CSS](/ja/docs/Web/CSS) のプロパティで、表 ({{htmlelement("table")}}) の {{HTMLElement("caption")}} の中身を指定された側に配置します。この値は表の {{cssxref('writing-mode')}} に対する相対値です。

{{InteractiveExample("CSS Demo: caption-side")}}

```css interactive-example-choice
caption-side: top;
```

```css interactive-example-choice
caption-side: bottom;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <caption>
      Famous animals
    </caption>
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    <tr>
      <td>Giraffe</td>
      <td>Africa</td>
    </tr>
    <tr>
      <td>Penguin</td>
      <td>Antarctica</td>
    </tr>
    <tr>
      <td>Sloth</td>
      <td>South America</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>Asia</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: #000;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #fc3;
  padding: 0.5rem 1rem;
}

tr {
  background: #eee;
}

tr:nth-child(even) {
  background: #ccc;
}
```

## 構文

```css
/* 方向を示す値 */
caption-side: top;
caption-side: bottom;

/* 倫理値 */
caption-side: inline-start;
caption-side: inline-end;

/* グローバル値 */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: unset;
```

`caption-side` プロパティは、以下のキーワード値のうちの一つで指定します。

### 値

- `top`
  - : キャプションボックスを表のブロック方向の先頭に配置します。
- `bottom`
  - : キャプションボックスを表のブロック方向の末尾に配置します。
- `inline-start`
  - : キャプションボックスを表のインライン方向の先頭に配置します。
- `inline-end`
  - : キャプションボックスを表のインライン方向の末尾に配置します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_captions_above_and_below">キャプションを上や下に設定</h3>

#### HTML

```html
<table class="top">
  <caption>
    Caption ABOVE the table
  </caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br />

<table class="bottom">
  <caption>
    Caption BELOW the table
  </caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### 結果

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
