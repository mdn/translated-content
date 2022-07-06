---
title: '-moz-outline-radius-topright'
slug: Web/CSS/-moz-outline-radius-topright
tags:
  - CSS
  - CSS プロパティ
  - NeedsCompatTable
  - NeedsContent
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-topright
translation_of: Web/CSS/-moz-outline-radius-topright
---
{{CSSRef}}{{deprecated_header}}

Mozilla アプリケーションにおいて、 **`-moz-outline-radius-topright`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線 ({{cssxref("outline")}}) の 上の角を丸くするために使用することができます。

## 構文

`-moz-outline-radius-topright` の値は、[`<length>`](/ja/docs/Web/CSS/length) または境界ボックスの対応する大きさに対する[パーセント値](/ja/docs/Web/CSS/percentage)のどちらかです。 [`calc()`](</ja/docs/Web/CSS/calc()>) 関数も同様に使用することができます。

### 値

- `<length>`
  - : 要素の上端と右端の曲率を定義する円の半径を CSS の {{cssxref("length", "&lt;length&gt;")}} で指定します。
- `<percentage>`
  - : 要素の右上隅の丸めを定義する円の半径で、境界ボックスの上辺と右辺の[パーセント値](/ja/docs/Web/CSS/percentage)で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>Look at this paragraph's top-right corner.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-topright: 2em;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

> **Note:** 上記の例は Firefox 以外のブラウザーで見ている場合は、求められる効果が表示されません。

## 仕様書

標準の一部ではありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 詳しくは {{cssxref("-moz-outline-radius")}} プロパティを参照してください。
