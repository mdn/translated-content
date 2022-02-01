---
title: border-color
slug: Web/CSS/border-color
tags:
  - CSS
  - CSS 境界
  - CSS プロパティ
  - CSS スタイル
  - HTML 色
  - リファレンス
  - Styling HTML
  - border-color
  - 境界
  - 色
  - recipe:css-shorthand-property
browser-compat: css.properties.border-color
translation_of: Web/CSS/border-color
---
{{CSSRef}}

**`border-color`** は[一括指定](/ja/docs/Web/CSS/Shorthand_properties)を行う [CSS](/ja/docs/Web/CSS) のプロパティで、要素の境界の色を設定します。

{{EmbedInteractiveExample("pages/css/border-color.html")}}

各辺を個々に設定する場合は、 {{CSSxRef("border-top-color")}}、 {{CSSxRef("border-right-color")}}、 {{CSSxRef("border-bottom-color")}}、 {{CSSxRef("border-left-color")}}、 または書字方向を意識した{{CSSxRef("border-block-start-color")}}、 {{CSSxRef("border-block-end-color")}}、 {{CSSxRef("border-inline-start-color")}}、 {{CSSxRef("border-inline-end-color")}} を使用します。

境界線の色についての詳細な情報は、 {{SectionOnPage("/ja/docs/Web/HTML/Applying_color", "Borders")}} にあります。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`border-bottom-color`](/ja/docs/Web/CSS/border-bottom-color)
- [`border-left-color`](/ja/docs/Web/CSS/border-left-color)
- [`border-right-color`](/ja/docs/Web/CSS/border-right-color)
- [`border-top-color`](/ja/docs/Web/CSS/border-top-color)

## 構文

```css
/* <color> 値 */
border-color: red;

/* 水平線 | 垂直線 */
border-color: red #f015ca;

/* 上辺 | 垂直線 | 下辺 */
border-color: red rgb(240,30,50,.7) green;

/* 上辺 | 右辺 | 下辺 | 左辺 */
border-color: red yellow green blue;

/* グローバル値 */
border-color: inherit;
border-color: initial;
border-color: revert;
border-color: unset;
```

`border-color` プロパティは 1 ～ 4 つの値を使って指定することができます。

 - 値が **1 つ**指定された場合、**全 4 辺**に同じ色が適用される。
 - 値が **2 つ**指定された場合、1 つ目の色は**上下**、2 つ目は**左右**の辺に適用される。
 - 値が **3 つ**指定された場合、1 つ目の色**上**、2 つ目は**左右**、3 つ目は**下**の辺に適用される。
 - 値が **4 つ**指定された場合、それぞれ**上**、**右**、**下**、**左**の順（時計回り）に適用される。

### 値

- {{CSSxRef("&lt;color&gt;")}}
  - : 境界線の色を定義します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Complete_border-color_usage">完全な border-color の使用法</h3>

#### HTML

```html
<div id="justone">
  <p><code>border-color: red;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: red;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="horzvert">
  <p><code>border-color: gold red;</code> is equivalent to</p>
  <ul><li><code>border-top-color: gold;</code></li>
    <li><code>border-right-color: red;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: red;</code></li>
  </ul>
</div>
<div id="topvertbott">
  <p><code>border-color: red cyan gold;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: gold;</code></li>
    <li><code>border-left-color: cyan;</code></li>
  </ul>
</div>
<div id="trbl">
  <p><code>border-color: red cyan black gold;</code> is equivalent to</p>
  <ul><li><code>border-top-color: red;</code></li>
    <li><code>border-right-color: cyan;</code></li>
    <li><code>border-bottom-color: black;</code></li>
    <li><code>border-left-color: gold;</code></li>
  </ul>
</div>
```

#### CSS

```css
#justone {
  border-color: red;
}

#horzvert {
  border-color: gold red;
}

#topvertbott {
  border-color: red cyan gold;
}

#trbl {
  border-color: red cyan black gold;
}

/* すべての div に幅とスタイルを設定 */
div {
  border: solid 0.3em;
  width: auto;
  margin: 0.5em;
  padding: 0.5em;
}

ul {
  margin: 0;
  list-style: none;
}
```

#### 結果

{{EmbedLiveSample("Complete_border-color_usage", 600, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

 - 境界線の色関係の CSS プロパティ: {{CSSxRef("border")}}, {{CSSxRef("border-top-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}},
 - その他の境界線に関する CSS プロパティ: {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}}
 - {{CSSxRef("&lt;color&gt;")}} データ型
 - その他の色に関するプロパティ: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, and {{CSSxRef("column-rule-color")}}
 - [CSS を使用した HTML の要素への色の適用](/ja/docs/Web/HTML/Applying_color)
