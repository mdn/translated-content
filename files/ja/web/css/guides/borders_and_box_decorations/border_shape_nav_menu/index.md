---
title: border-shape による不規則なナビゲーションメニューの作成
short-title: border-shape nav メニュー
slug: Web/CSS/Guides/Borders_and_box_decorations/Border_shape_nav_menu
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

CSS の {{cssxref("border-shape")}} プロパティを要素に適用することで、吹き出しや抽象的なツールチップのデザインなど、精密な形状のコンテナーを生成できます。これにより、回避策やハックに頼ることなく、多くの新しいアイディアを実際に実装することが可能になります。このプロパティに関する詳細や、基本的な動作例については、プロパティリファレンスページでご確認いただけます。

このガイドでは、`border-shape` を使用して、それぞれのナビゲーションアイテムがジグソーパズルのピースのような形をした、不規則なアニメーション付きナビゲーションメニューを作成する方法をご紹介します。

## ナビゲーションメニューのマークアップの定義

この HTML は、ナビゲーションメニューとしてはごく一般的なもので、リンクのリストとなっています。

```html live-sample___jigsaw-example
<ul>
  <li><a href="#">One</a></li>
  <li><a href="#">Two</a></li>
  <li><a href="#">Three</a></li>
  <li><a href="#">Four</a></li>
</ul>
```

## 基本的なページスタイルの設定

基本的なページ設定のスタイルは以下の通りです。基本的なフォントスタイルを適用し、{{cssxref("height")}} を使用して {{htmlelement("body")}} がビューポートいっぱいに表示されるようにし、[フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)を使ってナビゲーションメニューを画面の中央に配置します。

```css live-sample___jigsaw-example
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: "Helvetica", "Arial";
  font-size: 1.2rem;
}

body {
  margin: 0;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 一般的なナビゲーションスタイルの設定

まず、{{htmlelement("ul")}} のスタイルを設定します。デフォルトの {{cssxref("list-style-type")}} と {{cssxref("padding")}} を除去し、{{cssxref("display")}} の値を `flex` に設定して、内部の {{htmlelement("li")}} 要素を一列に配置します。次に、{{cssxref("gap")}} の値を `0` に設定し、{{cssxref("transition")}} を適用します。これにより、`<ul>` の状態が変化した際、`gap` の値の変化が滑らかにアニメーション表示されるようになります。

```css live-sample___jigsaw-example
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0;
  transition: gap 0.6s;
}
```

次に、`<li>` 要素にスタイルを設定します。それぞれのナビゲーションアイテムを正方形にしたいので、{{cssxref("width")}} と {{cssxref("height")}} を同じ値に設定します。

```css live-sample___jigsaw-example
li {
  width: 160px;
  height: 160px;
}
```

次に、リストアイテム内の {{htmlelement("a")}} 要素にスタイルを適用します。まず、デフォルトの {{cssxref("text-decoration")}} を除去し、{{cssxref("color")}} が `black` に設定されます。次に、`<a>` 要素が `<li>` 要素の領域全体を埋め尽くすように、`width` と `height` を `100%` に設定し、[フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)を使用して、テキストを水平方向および垂直方向に中央揃えにします。

さらに、リンクに {{cssxref("box-shadow")}} および {{cssxref("text-shadow")}} プロパティを設定し、要素の状態が変化した際にプロパティ値の変更が滑らかにアニメーションされるよう `transition` を追加します。

```css live-sample___jigsaw-example
a {
  text-decoration: none;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow:
    2px 0px 2px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
  text-shadow: 1px 1px 1px rgb(0 0 0 / 0.5);
  transition: all 0.6s;
}
```

次に、ジグソーパズルの各ピースにそれぞれ異なる色を割り当てます。

```css live-sample___jigsaw-example
li:nth-child(1) a {
  background-color: #2de1fc;
}

li:nth-child(2) a {
  background-color: #2afc98;
}

li:nth-child(3) a {
  background-color: #09e85e;
}

li:nth-child(4) a {
  background-color: #16c172;
}
```

## 境界線の図形の処理

それでは、目指しているジグソーパズルのピースのような外観を実現するために、それぞれのナビゲーションアイテムの `border-shape` を設定しましょう。変化をつけるため、奇数番目の `<a>` 要素は下向きのジグソーパズルのピースのような形に、偶数番目の `<a>` 要素は上向きのジグソーパズルのピースのような形に設定しました。

```css live-sample___jigsaw-example
li:nth-child(even) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small cw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small ccw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}

li:nth-child(odd) a {
  border-shape: shape(
      from 0% 0%,
      hline to 33%,
      arc by 33% 0% of 16% 20% small ccw,
      hline to 100%,
      line to 100% 33%,
      arc by 0% 33% of 20% 16% small cw,
      line to 100% 100%,
      hline to 66%,
      arc by -33% 0% of 16% 20% small cw,
      hline to 0%,
      line to 0% 66%,
      arc by 0% -33% of 20% 16% small ccw,
      close
    )
    content-box;
}
```

これにより、すぐに課題が発生します。元の `<a>` 領域からはみ出しているジグソーパズルのピースの切り欠き部分が、`<a>` 要素の背景色で塗りつぶされないのです。

この課題には解決策があります。前の 2 つのルールでは、意図的に `content-box` `<geometry-box>` の値をそれぞれの `shape()` 関数の後に記載しています。このことによって、図形は要素のコンテンツボックスを基準に描画され、適用された `padding` は図形の内部には設定されません。代わりに、パディングは図形の外側に配置されるため、図形が小さくなり、背景色が切り欠き部分を埋めるようになります。

必要な `padding` は同様に設定します。

```css live-sample___jigsaw-example
a {
  padding: 24px;
}
```

> [!NOTE]
> ブラウザーの開発者ツールで[ライブサンプル](#結果)を確認し、`<a>` 要素に適用されている `padding` を無効にすることで、この問題の背景がどのようなものかを確認できます。

`padding` を設定するとジグソーパズルのピースが小さくなり、ピース間に隙間が発生してしまいます。最初はピース同士がくっついている状態にしたいので、それぞれのリストアイテムに大きな負の {{cssxref("margin-right")}} 値を設定して、ピース同士を寄せ合わせます。

```css live-sample___jigsaw-example
li {
  margin-right: -47px;
}
```

この `margin-right` の設定による副作用として、すべての `<li>` 要素が右側に移動してしまうため、ナビゲーションメニューが水平方向に中央揃えできなくなることです。これを修正するために、[相対位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning#相対位置指定)を使用して、`<ul>` を左側に戻します。

```css live-sample___jigsaw-example
ul {
  position: relative;
  right: 23.5px;
}
```

最後に、`:hover` および `:focus` に対してスタイルの更新を適用します。これにより、先ほど設定した `transition` プロパティと相まって、ナビゲーションアイテムとの操作時にアニメーション効果が生まれます。`<ul>` のフレックスボックスレイアウトに設定されている `gap` を、ホバー時やフォーカス時に拡大します。フォーカス状態を処理するために、{{cssxref(":has")}} 擬似クラスを使用し、内部の `<a>` のいずれかがフォーカスされた際に `<ul>` 全体を選択します。

```css live-sample___jigsaw-example
ul:hover,
ul:has(a:focus) {
  gap: 30px;
}
```

次に、`<a>` 要素自体に対して、ホバー時やフォーカス時に `brightness` {{cssxref("filter")}} や {{cssxref("scale")}} の値を大きくし、外側の `box-shadow` を適用することで、操作時に要素がより明るく現れ、浮き上がったような効果を出しています。

```css live-sample___jigsaw-example
a:hover,
a:focus {
  filter: brightness(1.2);
  scale: 1.1;
  box-shadow:
    5px 0px 10px rgb(0 0 0 / 0.5),
    inset 3px 3px 3px rgb(255 255 255 / 0.5);
}
```

## 結果

{{EmbedLiveSample("jigsaw-example", "100%", "240")}}

ナビゲーションアイテムにカーソルを合わせたり、フォーカスを当てたりすると、アニメーション効果が表示されます。適用されたさまざまな効果が、`border-shape` の値と自然に調和してい様子に注目してください。

```css hidden live-sample___jigsaw-example
@supports not (border-shape: circle(50%)) {
  body::before {
    content: "このブラウザーは 'border-shape' プロパティに対応していません。";
    font-family: sans-serif;
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## 関連情報

- {{cssxref("border-shape")}}
- [CSS 境界とボックス装飾](/ja/docs/Web/CSS/Guides/Borders_and_box_decorations)モジュール
- [CSS 背景と境界](/ja/docs/Web/CSS/Guides/Backgrounds_and_borders)モジュール
- [border-shape: the future of the non-rectangular web](https://una.im/border-shape) - Una Kravets (2026)
- [Get Ready For the Powerful CSS border-shape Property!](https://css-tricks.com/get-ready-for-the-powerful-css-border-shape-property/) - CSS Tricks (2026)
