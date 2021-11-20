---
title: '-moz-outline-radius-bottomright'
slug: Web/CSS/-moz-outline-radius-bottomright
tags:
  - CSS
  - CSS プロパティ
  - NeedsCompatTable
  - NeedsContent
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-bottomright
translation_of: Web/CSS/-moz-outline-radius-bottomright
---
{{CSSRef}}{{deprecated_header}}

Mozilla アプリケーションにおいて、 **`-moz-outline-radius-bottomright`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線 ({{cssxref("outline")}}) の右下の角を丸くするために使用することができます。

## 構文

`-moz-outline-radius-bottomright` の値は、 {{cssxref("length", "&lt;length&gt;")}} または境界ボックスの対応する大きさに対する[パーセント値](/ja/docs/Web/CSS/percentage)のどちらかです。 {{cssxref("calc()", "calc()")}} 関数も同様に使用することができます。

### 値

- `<length>`
  - : 要素の下端と右端の曲率を定義する円の半径を CSS の {{cssxref("length", "&lt;length&gt;")}} で指定します。
- `<percentage>`
  - : 要素の右下隅の丸めを定義する円の半径で、境界ボックスの下辺と右辺の[パーセント値](/ja/docs/Web/CSS/percentage)で指定します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>Look at this paragraph's bottom-right corner.</p>
```

### CSS

```css
p {
  margin: 5px;
  border: solid cyan;
  outline: dotted red;
  -moz-outline-radius-bottomright: 2em;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

注: この例は Firefox 以外のブラウザーで閲覧したときに、期待される効果が表示されません。

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 詳しくは {{cssxref("-moz-outline-radius")}} プロパティを参照してください。
