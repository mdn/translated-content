---
title: border-collapse
slug: Web/CSS/Reference/Properties/border-collapse
original_slug: Web/CSS/border-collapse
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`border-collapse`** は [CSS](/ja/docs/Web/CSS) のプロパティで、表 ({{htmlElement("table")}}) の中のセルが境界を共有するか分離するかを設定します。

{{InteractiveExample("CSS デモ: border-collapse")}}

```css interactive-example-choice
border-collapse: collapse;
```

```css interactive-example-choice
border-collapse: separate;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <tr>
      <td>セル 1.1</td>
      <td>セル 1.2</td>
    </tr>
    <tr>
      <td>セル 2.1</td>
      <td>セル 2.2</td>
    </tr>
    <tr>
      <td>セル 3.1</td>
      <td>セル 3.2</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  width: 15rem;
  table-layout: fixed;
}

td {
  border: 5px solid;
  border-color: crimson dodgerblue orange limegreen;
  padding: 0.75rem;
}
```

セルが折り畳まれている場合 (collapse)、 {{cssxref("border-style")}} の値で `inset` が `ridge` のように動作し、 `outset` が `groove` のように動作します。

セルが分離されている場合 (separate)、セル間の距離は {{cssxref("border-spacing")}} プロパティで定義されます。

## 構文

```css
/* キーワード値 */
border-collapse: collapse;
border-collapse: separate;

/* グローバル値 */
border-collapse: inherit;
border-collapse: initial;
border-collapse: revert;
border-collapse: revert-layer;
border-collapse: unset;
```

`border-collapse` プロパティは、以下のリストから選択された単一のキーワードで指定します。

### 値

- `collapse`
  - : 隣接するセルで境界線を共有します (collapsed-border 表レンダリングモデル)。
- `separate`
  - : 隣接するセルが個別に境界線を持ちます (separated-border 表レンダリングモデル)。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### ブラウザーエンジンのカラフルな表

#### HTML

```html
<table class="separate">
  <caption>
    <code>border-collapse: separate</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">WebKit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
<table class="collapse">
  <caption>
    <code>border-collapse: collapse</code>
  </caption>
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Layout Engine</th>
    </tr>
    <tr>
      <td class="fx">Firefox</td>
      <td class="gk">Gecko</td>
    </tr>
    <tr>
      <td class="ed">Edge</td>
      <td class="tr">EdgeHTML</td>
    </tr>
    <tr>
      <td class="sa">Safari</td>
      <td class="wk">WebKit</td>
    </tr>
    <tr>
      <td class="ch">Chrome</td>
      <td class="bk">Blink</td>
    </tr>
    <tr>
      <td class="op">Opera</td>
      <td class="bk">Blink</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
.collapse {
  border-collapse: collapse;
}

.separate {
  border-collapse: separate;
}

table {
  display: inline-table;
  margin: 1em;
  border: dashed 5px;
}

table th,
table td {
  border: solid 3px;
}

.fx {
  border-color: orange blue;
}
.gk {
  border-color: black red;
}
.ed {
  border-color: blue gold;
}
.tr {
  border-color: aqua;
}
.sa {
  border-color: silver blue;
}
.wk {
  border-color: gold blue;
}
.ch {
  border-color: red yellow green blue;
}
.bk {
  border-color: navy blue teal aqua;
}
.op {
  border-color: red;
}
```

#### 結果

{{ EmbedLiveSample('ブラウザーエンジンのカラフルな表', 400, 300) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}
- `border-collapse` プロパティは HTML の {{htmlelement("table")}} 要素の表示方法を変更します。
- [CSS 表](/ja/docs/Web/CSS/Guides/Table)モジュール
