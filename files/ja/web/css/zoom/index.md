---
title: zoom
slug: Web/CSS/zoom
---

{{CSSRef}}{{Non-standard_header}}

**`zoom`** は [CSS](/ja/docs/Web/CSS) の標準外のプロパティで、要素の拡大率を制御するために使用することができます。できれば、このプロパティの代わりに {{cssxref("transform-function/scale", "transform: scale()")}} を使用してください。ただし、 CSS 座標変換とは異なり、 `zoom` は要素のレイアウト時の大きさに影響します。

```css
/* キーワード値 */
zoom: normal;
zoom: reset;

/* <percentage> 値 */
zoom: 50%;
zoom: 200%;

/* <number> 値 */
zoom: 1.1;
zoom: 0.7;

/* グローバル値 */
zoom: inherit;
zoom: initial;
zoom: unset;
```

## 構文

### 値

- `normal`
  - : 要素を通常のサイズでレンダリングします。
- `reset` {{non-standard_inline}}

  - : ユーザーが非ピンチベースのズームを利用したときは (たとえばキーボードで <kbd>Ctrl</kbd>-<kbd>-</kbd> または <kbd>Ctrl</kbd>+<kbd>+</kbd> のショートカット) 要素を拡大しない。 WebKit (とおそらく Blink) のみ対応しています。

- {{cssxref("&lt;percentage&gt;")}}
  - : ズーム率です。 `100%` と `normal` は等価です。 `100%` よりも大きな値はズームイン、 `100%`よりも小さな値はズームアウトします。
- {{cssxref("&lt;number&gt;")}}
  - : ズーム率です。対応するパーセンテージ (`1.0` = `100%` = `normal`) に相当します。 `1.0` よりも大きな値はズームイン、 `1.0` よりも小さな値はズームアウトします。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 最初の例

#### HTML

```html
<p class="small">Small</p>
<p class="normal">Normal</p>
<p class="big">Big</p>
```

#### CSS

```css
p.small {
  zoom: 75%;
}
p.normal {
  zoom: normal;
}
p.big {
  zoom: 2.5;
}
p {
  display: inline-block;
}
p:hover {
  zoom: reset;
}
```

#### 結果

{{EmbedLiveSample('First_example')}}

### 2 番目の例

#### HTML

```html
<div id="a" class="circle"></div>
<div id="b" class="circle"></div>
<div id="c" class="circle"></div>
```

#### CSS

```css
div.circle {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  zoom: 1.5;
}
div#a {
  background-color: gold;
  zoom: normal;
}
div#b {
  background-color: green;
  zoom: 200%;
}
div#c {
  background-color: blue;
  zoom: 2.9;
}
```

#### 結果

{{EmbedLiveSample('Second_example')}}

## 仕様書

標準には含まれていません。このプロパティは Internet Explorer を起源としています。 Apple は [Safari CSS Referenceで説明しています](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW15)。マイクロソフトの Rossen Atanassov は [GitHub に非公式の仕様案を公開しています](https://cdn.rawgit.com/atanassov/css-zoom/master/Overview.html)。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS-Tricks' CSS Almanac の [`zoom` の記事](https://css-tricks.com/almanac/properties/z/zoom/)
- [Bug 390936: Implement Internet Explorer `zoom` property for CSS](https://bugzilla.mozilla.org/show_bug.cgi?id=390936) on the Firefox issue tracker Bugzilla
