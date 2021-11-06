---
title: border-collapse
slug: Web/CSS/border-collapse
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - CSS 表
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.border-collapse
translation_of: Web/CSS/border-collapse
---
{{CSSRef}}

**`border-collapse`** は [CSS](/ja/docs/Web/CSS) のプロパティで、表 ({{htmlElement("table")}}) の中のセルが境界を共有するか分離するかを設定します。

{{EmbedInteractiveExample("pages/css/border-collapse.html")}}

セルが折り畳まれている場合 (collapse)、 {{cssxref("border-style")}} の値で `inset` が `groove` のように動作し、 `outset` が `ridge` のように動作します。

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

<h3 id="A_colorful_table_of_browser_engines">ブラウザーエンジンのカラフルな表</h3>

#### HTML

```html
<table class="separate">
  <caption><code>border-collapse: separate</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
  </tbody>
</table>
<table class="collapse">
  <caption><code>border-collapse: collapse</code></caption>
  <tbody>
    <tr><th>Browser</th> <th>Layout Engine</th></tr>
    <tr><td class="fx">Firefox</td> <td class="gk">Gecko</td></tr>
    <tr><td class="ed">Edge</td> <td class="tr">EdgeHTML</td></tr>
    <tr><td class="sa">Safari</td> <td class="wk">Webkit</td></tr>
    <tr><td class="ch">Chrome</td> <td class="bk">Blink</td></tr>
    <tr><td class="op">Opera</td> <td class="bk">Blink</td></tr>
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

.fx { border-color: orange blue; }
.gk { border-color: black red; }
.ed { border-color: blue gold; }
.tr { border-color: aqua; }
.sa { border-color: silver blue; }
.wk { border-color: gold blue; }
.ch { border-color: red yellow green blue; }
.bk { border-color: navy blue teal aqua; }
.op { border-color: red; }
```

#### 結果

{{ EmbedLiveSample('A_colorful_table_of_browser_engines', 400, 300) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("border-spacing")}}, {{cssxref("border-style")}}
- `border-collapse` プロパティは HTML の {{htmlelement("table")}} 要素の表示方法を変更します。
