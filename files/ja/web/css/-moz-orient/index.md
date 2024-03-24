---
title: "-moz-orient"
slug: Web/CSS/-moz-orient
---

{{CSSRef}}{{Non-standard_header}}

**`-moz-orient`** は [CSS](/ja/docs/Web/CSS) のプロパティで、適用される要素の向きを指定します。

## 構文

`-moz-orient` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `inline`
  - : 要素をテキストの軸と同じ方向に描画します。横書きモードでは水平方向に、縦書きモードでは垂直方向に描画します。
- `block`
  - : 要素をテキストの軸と直交するように描画します。横書きモードでは垂直方向に、縦書きモードでは水平方向に描画します。
- `horizontal`
  - : 要素が水平方向に描画される
- `vertical`
  - : 要素が垂直方向に描画される

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### HTML

```html
<p>The following progress meter is horizontal (the default):</p>
<progress max="100" value="75"></progress>

<p>The following progress meter is vertical:</p>
<progress class="vert" max="100" value="75"></progress>
```

### CSS

```css
.vert {
  -moz-orient: vertical;
  width: 16px;
  height: 150px;
}
```

### 結果

{{EmbedLiveSample("Examples","200","360")}}

## 仕様書

W3C に[提出](https://lists.w3.org/Archives/Public/www-style/2014Jun/0396.html)され、最初の反応は肯定的でしたが、このプロパティはまだ仕様書には含まれていません。今のところ、 Mozilla 独自の拡張 (つまり、 `-moz-orient`) です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("box-orient")}}
