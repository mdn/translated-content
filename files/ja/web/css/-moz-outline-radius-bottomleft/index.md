---
title: '-moz-outline-radius-bottomleft'
slug: Web/CSS/-moz-outline-radius-bottomleft
tags:
  - CSS
  - CSS プロパティ
  - NeedsCompatTable
  - NeedsContent
  - 標準外
  - リファレンス
  - recipe:css-property
browser-compat: css.properties.-moz-outline-radius-bottomleft
translation_of: Web/CSS/-moz-outline-radius-bottomleft
---
{{CSSRef}}{{deprecated_header}}

Mozilla アプリケーションにおいて、 **`-moz-outline-radius-bottomleft`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線 ({{cssxref("outline")}}) の左下の角を丸くするために使用することができます。

## 構文

`-moz-outline-radius-bottomleft` の値は、 {{cssxref("length", "&lt;length&gt;")}} または境界ボックスの対応する大きさに対する[パーセント値](/ja/docs/Web/CSS/percentage)のどちらかです。 {{cssxref("calc()", "calc()")}} 関数も同様に使用することができます。

### 値

- `<length>`
  - : 要素の下端と左端の曲率を定義する円の半径を CSS の {{cssxref("length", "&lt;length&gt;")}} で指定します。
- `<percentage>`
  - : 要素の左下隅の丸めを定義する円の半径で、境界ボックスの下辺と左辺の[パーセント値](/ja/docs/Web/CSS/percentage)で指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Rounding_a_outline">輪郭線を丸める</h3>

これは Firefox 専用のプロパティなので、この例では Firefox 以外のブラウザーで表示している場合は、期待した効果が表示されません。

#### HTML

```html
<p>Look at this paragraph's bottom-left corner.</p>
```

#### CSS

```css
p {
  margin: 10px;
  border: solid cyan;
  outline: dotted green;
  -moz-outline-radius-bottomleft: 2em;
}
```

#### 結果

{{EmbedLiveSample("Rounding_a_outline")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 詳しくは {{cssxref("-moz-outline-radius")}} プロパティを参照してください。
