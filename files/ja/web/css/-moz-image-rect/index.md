---
title: "-moz-image-rect"
slug: Web/CSS/-moz-image-rect
---

{{CSSRef}}{{Non-standard_Header}}

**`-moz-image-rect`** は [CSS](/ja/docs/Web/CSS) の {{CSSxRef("background-image")}} に対する値で、大きな画像の一部を背景として使用することができます。

## 構文

```css
-moz-image-rect({{CSSxRef("url()")}}, top, right, bottom, left);
```

### 値

- {{CSSxRef("url()")}}
  - : 部分画像を取得する画像の URI です。
- `top`
  - : 指定された画像内の部分画像の上端の辺を、 {{CSSxRef("&lt;integer&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} で指定します。
- `right`
  - : 指定された画像内の部分画像の右端の辺を、 {{CSSxRef("&lt;integer&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} で指定します。
- `bottom`
  - : 指定された画像内の部分画像の下端の辺を、 {{CSSxRef("&lt;integer&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} で指定します。
- `left`
  - : 指定された画像内の部分画像の左端の辺を、 {{CSSxRef("&lt;integer&gt;")}} または {{CSSxRef("&lt;percentage&gt;")}} で指定します。

## 解説

このプロパティを使用すると、例えば、1 つの大きな画像の異なる部分を、コンテンツの異なる部分の背景として使用することができます。

これは、{{CSSxRef("-moz-image-region")}} プロパティとよく似た働きをします。このプロパティは、{{CSSxRef("list-style-image")}} プロパティと一緒に使用され、画像の一部をリストの箇条書きとして使用します。ただし、これはどのような CSS 背景にも使用できます。

長方形の構文は、{{CSSxRef("&lt;shape&gt;")}} を生成する [`rect()`](/ja/docs/Web/CSS/shape#syntax) 関数に似ています。CSS タイプを生成する関数です。4 つの値はすべて、画像の左上隅に対する相対値です。

<h2 id="Examples">例</h2>

この例では、画像をロードし、それを 4 分割して 4 つの {{HTMLElement("div")}} ブロックに Firefox ロゴを描画しています。コンテナーをクリックすると、4 つの {{CSSxRef("background-image")}} プロパティの値が 4 つの {{HTMLElement("div")}} ブロック間で入れ替わることで、4 つの区域が回転します。

### CSS

CSS では、1 つのコンテナーのスタイルを定義した後、画像全体を構成する 4 つのボックスのスタイルを定義しています。

コンテナーは次のようになります。

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

次に、画像の区域を定義する 4 つのボックスを定義します。1 つずつ見ていきましょう。

```css
#box1 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

これは画像の左上隅です。ファイル `firefox.jpg` に含まれる画像の左上 1/4 を含む長方形を定義します。

```css
#box2 {
  background-image: -moz-image-rect(url(firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

これは、画像の右上隅を定義します。

他の隅も同様のパターンです。

```css
#box3 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
#box4 {
  background-image: -moz-image-rect(url(firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### HTML

HTML はとてもシンプルです。

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Top left</div>
  <div id="box2" style="left:133px;top:0px;">Top right</div>
  <div id="box3" style="left:0px;top:136px;">Bottom left</div>
  <div id="box4" style="left:133px;top:136px;">Bottom right</div>
</div>
```

これにより、画像の 4 つの区域が 2 × 2 のボックスグリッドに配置されます。これらの 4 つの区域は、大きな {{HTMLElement("div")}} ブロックの中に含まれており、クリックイベントを受信して JavaScript コードに配信することを主な目的としています。

### JavaScript コード

このコードは、コンテナーがマウスでクリックされたときのクリックイベントを処理します。

```js
function rotate() {
  var prevStyle = window
    .getComputedStyle(document.getElementById("box4"), null)
    .getPropertyValue("background-image");

  // 最後の 1 枚を保存したところで、回転を開始します。

  for (var i = 1; i <= 4; i++) {
    var curId = "box" + i;

    // 背景画像のをずらす

    var curStyle = window
      .getComputedStyle(document.getElementById(curId), null)
      .getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}
```

これは {{DOMxRef("window.getComputedStyle()")}} を使って各要素のスタイルを取得し、それを次の要素にシフトしています。この処理を開始する前に、最後のボックスのスタイルのコピーを保存していることに注目してください。3 つ目の要素のスタイルによって上書きされるからです。{{CSSxRef("background-image")}} プロパティの値を、マウスをクリックするたびに 1 つの要素から次の要素にコピーすることで、目的の効果を得ることができます。

### どのように見えるか

{{EmbedLiveSample("Examples","400","400")}}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Mozilla_Extensions)
- [CSS 背景と境界モジュール](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders)
