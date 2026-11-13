---
title: アンカー付きコンテナークエリーの使用
short-title: アンカー付きコンテナークエリー
slug: Web/CSS/Guides/Anchor_positioning/Anchored_container_queries
l10n:
  sourceCommit: a8b7faffbd3fdeae5c0be97793d963d8a31cd1cf
---

[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)には、[代替指定](/ja/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)を提供する仕組みが記載されています。これらは、位置指定要素がビューポートからはみ出し始めた場合に、その要素を再び画面内に収めるために、ブラウザーがアンカーを基準として要素を配置しようとする代替の位置です。

**アンカー付きコンテナークエリー**は、アンカー位置指定の代替指定の有用性をさらに高め、要素がどの代替位置に配置されるかによって、その要素のスタイルを異なるものに設定できるようにします。このガイドでは、アンカー付きコンテナークエリーの使用方法を解説し、いくつかの例を紹介します。

> [!NOTE]
> CSS のアンカー位置指定の基本情報については、[CSS アンカー位置指定の使用](/ja/docs/Web/CSS/Guides/Anchor_positioning/Using)を参照してください。

## 機能概要

アンカー位置指定を使用してツールチップをUIの要素に対して配置する場合、{{cssxref("position-try-fallbacks")}} プロパティを介して `position-try` の代替指定を指定しておくと便利です。これらを使用することで、ツールチップを可能な限り長く画面上に表示させることができます。

例えば、ツールチップがデフォルトでアンカー設定されたUIの要素の上に配置されている場合、ユーザーが上にスクロールした際、ツールチップが画面外に出る直前に、代替指定を使ってツールチップをその要素の下に移動させることができます。

これだけでは解決できない問題の一つは、さまざまな代替指定に合わせて、アンカー位置指定された要素のスタイル設定を更新することです。例えば、ツールチップに、関連付けられたアンカー要素を指す小さな矢印を記載することは一般的であり、視覚的な関連性を明確にすることで UX を向上させます。ツールチップが別の位置に移動した際には、矢印の位置や方向も変更する必要があります。そうしないと、見栄えが悪くなってしまいます。

この問題を解決するには、アンカー付きコンテナークエリーを使用することができます。これは、[CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)の機能を拡張したもので、アンカー位置指定要素に特定の代替指定が適用されたことを検出し、その結果としてその子要素に CSS を適用できるようにするものです。具体的には、アンカー付きコンテナークエリーは次の 2 つの機能を利用しています。

- {{cssxref("container-type")}} プロパティの `anchored` 値: これをアンカー位置指定要素に適用すると、その要素にさまざまな代替指定が適用されたことを検知できるようになります。
- {{cssxref("@container")}} アットルールの `anchored()` 関数: この関数には、引数として [`fallback` 記述子](/ja/docs/Web/CSS/Reference/At-rules/@container#fallback) が指定されます。この記述子の値は、`position-try-fallbacks` の値となります。

例えば、{{cssxref("position-area")}} の値が `top` であるため、デフォルトでアンカーの上方に配置されるツールチップ要素があり、かつ {{cssxref("position-try-fallbacks")}} の値が `flip-block` と指定されているとします。これにより、ツールチップがビューポートの上端からあふれてきた際に、ブロック方向に沿ってアンカー要素の下端へと反転表示されます。ツールチップにこの代替指定が適用されたタイミングを検知したい場合は、まずツールチップに `container-type: anchored` を設定し、アンカー付きコンテナークエリーにする必要があります。

```css
.tooltip {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: flip-block;
  container-type: anchored;
}
```

これで準備が整ったので、次のようにコンテナークエリーを記述することが可能になりました。

```css
@container anchored(fallback: flip-block) {
  /* ここで子要素のスタイル設定を行う */
}
```

クエリーテスト — `anchored(fallback: flip-block)` — は、ツールチップに `flip-block` 代替指定が適用された場合に true を返します。この場合、`@container` ブロック内で指定されたスタイルが適用されます。例えば、矢印の位置や方向を変更して下向きではなく上向きにしたり、グラデーションの方向を変更したりする場合などに利用できます。

> [!NOTE]
> すべてのコンテナークエリーと同様に、適用されたスタイルはコンテナー自体ではなく、その子要素にのみ影響を与えることに留意してください。そのため、[複数の代替指定の例](#複数の代替指定の例)で示されているように、位置指定要素のスタイルの一部を、その要素自体ではなく、内部にあるラッパー要素に適用する必要がある場合があります。

## 基本的な使用例

この例には、アンカー要素と、それに相対的に配置された情報ボックスが含まれています。
最初は、情報ボックスがアンカー要素の上に配置され、アンカー要素に向かって下向きに伸びる矢印が表示されます。コンテンツが上にスクロールして情報ボックスがビューポートの上端からはみ出しそうになった際に、情報ボックスがアンカー要素の下に移動するように、position try の代替指定を実装しています。さらに、代替指定が有効になった時点でスタイルを変更し、矢印を上に指すように移動させるために、アンカー付きコンテナークエリーを使用しています。

アンカーと情報ボックスは、下記に示すように、2 つの {{htmlelement("div")}} 要素で表されています。最終的な表示では、ページをスクロールさせるためにこれらの要素がテキストコンテンツで囲まれていますが、簡潔にするためにここでは非表示にしています。

```html
<div class="anchor">⚓︎</div>

<div class="infobox">情報ボックス</div>
```

```html hidden live-sample___basic-example
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">情報ボックス</div>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

CSS では、まず `anchor` `<div>` に {{cssxref("anchor-name")}} として `--my-anchor` を指定して、アンカー要素として定義します。

```css hidden live-sample___basic-example
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.anchor {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

.infobox {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1rem;
  border-radius: 10px;
}

.infobox::before {
  color: black;
  font-size: 1rem;
  margin: 0;
  line-height: 0.5;
  left: 0;
  width: 100%;
  text-align: center;
}

@supports not (container-type: anchored) {
  body::before {
    content: "このブラウザーは、アンカー付きコンテナークエリーに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___basic-example
.anchor {
  anchor-name: --my-anchor;
}
```

次に、`infobox` の `<div>` に {{cssxref("position")}} の値として `fixed`、{{cssxref("position-anchor")}} の値として `--my-anchor` を指定し、アンカー要素に関連付けます。さらに、情報ボックスに {{cssxref("position-area")}} の値を `top` に設定してアンカー要素の上に配置し、{{cssxref("position-try-fallbacks")}} の値を `bottom` に設定することで、コンテンツが上にスクロールされて情報ボックスがビューポートの上端からオーバーフローし始めた際に、情報ボックスがアンカー要素の下に移動するようにします。

最後に、情報ボックスに {{cssxref("container-type")}} の値として `anchored` を設定し、これをアンカー付きクエリコンテナとして指定しました。これで、{{cssxref("@container")}} アットルールを通じて、情報ボックス上で異なる `position-try-fallbacks` が有効になっているかどうかを検知できるようになり、その結果に応じてその子要素のスタイルを更新できるようになりました。

```css live-sample___basic-example
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  position-area: top;
  position-try-fallbacks: bottom;
  container-type: anchored;
}
```

これで、{{cssxref("::before")}} 擬似要素の生成コンテンツを使用して、情報ボックスに矢印を追加します。この擬似要素の {{cssxref("content")}} プロパティに適切な下向き矢印アイコンを設定し、絶対位置指定を行い、{{cssxref("top")}} プロパティを `105%` に設定して情報ボックスの下部に配置します（対応する上向き矢印の位置と視覚的に一致させるため、`100%` より大きい値に設定しています）。

```css live-sample___basic-example
.infobox::before {
  content: "▼";
  position: absolute;
  top: 105%;
}
```

次に、アンカー付きコンテナークエリーを追加します。`@container` アットルールを記載し、そのテスト条件を `anchored(fallback: bottom)` と定義します。これは、情報ボックスに `bottom` 位置指定の代替指定が適用された際に、このアットルール内の CSS が文書に適用されるということです。その内部では、情報ボックスの `::before` 擬似要素に対して、下向き矢印アイコンを上向き矢印に置き換え、情報ボックスの上部に配置する代替スタイル設定を定義します。

```css live-sample___basic-example
@container anchored(fallback: bottom) {
  .infobox::before {
    content: "▲";
    bottom: 100%;
    top: auto;
  }
}
```

> [!NOTE]
> この例では、すべての要素の基本的なスタイル設定を行うための CSS がさらに記載されていますが、ここではアンカー付きコンテナークエリーに関連する部分のみを紹介しています。完全なコードを確認するには、コードブロックまたはライブレンダリングのいずれかの "Play" ボタンを押して、MDN Playground でこの例を開いてください。

この例は同様に表示されます。

{{ EmbedLiveSample("basic-example", "100%", "350") }}

デモをスクロールして、アンカーがビューポートの上部付近に移動するようにしてみてください。すると、情報ボックスが画面上に表示され続けるようアンカーの下に移動するだけでなく、新しい情報ボックスの位置に合わせて矢印アイコンが引き続き動作するようにスタイル設定も更新されることに気づくでしょう。

アンカーをビューポートの下方に向かってスクロールすると、情報ボックスは再びその上に戻ります。`position-area: top` が情報ボックスのデフォルトの位置であるため、これを実現するために `position-try-fallbacks` の値を `top` と追加で指定する必要はありません。指定された代替指定でもアンカー位置指定要素のオーバーフローが防げない場合、ブラウザーはその要素をデフォルトの位置に戻します。

## 複数の代替指定の例

この例では、複数の position-try 代替指定とアンカー付きコンテナークエリーの実用例を紹介するとともに、アンカー付きコンテナークエリーを使用して、子要素ではなくアンカー位置指定要素自体にスタイルを設定したい場合、追加のラッパー要素を使用せずにどう対処すべきかという問題についても解説しています。また、この例には、マウスやキーボードを使ってアンカー要素を画面上で移動させ、さまざまな代替指定を確認できる JavaScript も含んでいます。

この例の HTML には、アンカーと情報ボックスを表す 2 つの {{htmlelement("div")}} 要素が含まれています。`anchor` `<div>` には、キーボードでフォーカスを合わせられるようにするための [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性が含まれています。一方、`情報ボックス` `<div>` には、情報ボックスのスタイルを適用するための追加のラッパー `<div>` が含まれており、これにより `@container` アットルールを使用してスタイルを設定できるようになっています。

```html live-sample___multiple-fallbacks
<div class="anchor" tabindex="0">⚓︎</div>

<div class="infobox">
  <div>情報ボックス</div>
</div>
```

スタイルの設定は、`anchor` `<div>` をアンカー要素として指定することから始めます。ここでも、`anchor-name` に `--my-anchor` を指定します。また、JavaScript で {{glossary("inset properties", "inset property")}} の値を変化させることで位置を自由に移動できるように、この要素を絶対位置指定にします。

```css hidden live-sample___multiple-fallbacks
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
}

p {
  font-size: 1.4em;
  line-height: 1.5;
}

.anchor {
  font-size: 2em;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: blue;
  width: fit-content;
  padding: 5px 10px;
}

@supports not (container-type: anchored) {
  body::before {
    content: "Your browser does not support anchored container queries.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```css live-sample___multiple-fallbacks
.anchor {
  anchor-name: --my-anchor;
  position: absolute;
}
```

次に、情報ボックスを相対位置指定し、`position-anchor` の値を `--my-anchor` に設定することで、アンカーを基準に配置します。今回は、`position-area` の値を `top left` に設定し、アンカーの左上に配置します。次に、3 つの `position-try-fallbacks`（`flip-block`、`flip-inline`、`flip-block flip-inline`）を設定します。これにより、アンカーがビューポートのさまざまな端に近づいた際、情報ボックスはブロック軸、インライン軸、あるいはその両方に沿って位置を反転させ、画面上に留まるようになります。

最後に、`container-type: anchored` を設定することで、情報ボックスをアンカー付きコンテナークエリーに変換します。

```css live-sample___multiple-fallbacks
.infobox {
  position: absolute;
  position-anchor: --my-anchor;
  position-area: top left;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  container-type: anchored;
}
```

ここでは、情報ボックスに設定されている基本的な視覚スタイルを表示させます。これは、この場合では、情報ボックス自体ではなく、情報ボックス内のラッパー `<div>` にこれらのスタイルを設定していることを示すためです。前述したように、これはアンカー付きコンテナークエリーを介してこれらのスタイルを操作できるようにするためです。情報ボックス自体がアンカー付きコンテナークエリーであるため、スタイルを情報ボックスに直接設定していた場合、このような操作はできません。

特に注目すべきは、ここで {{cssxref("border-radius")}} の値を設定し、情報ボックスの右下隅を除くすべての角を丸くしている点です。情報ボックスはアンカーの左上に位置指定されているため、この角はアンカーを指し示す矢印の役割を果たしています。

```css live-sample___multiple-fallbacks
.infobox div {
  color: white;
  background-color: black;
  font-size: 1.4em;
  padding: 10px;
  margin: 1px;

  border-radius: 10px 10px 0 10px;
}
```

最後に、`@container` アットルールを使用して情報ボックスに適用される可能性のある各 position-try 代替指定について、アンカー付きコンテナークエリーを定義します。それぞれの場合において、情報ボックスのラッパー `<div>` に適用される角の丸みを調整し、アンカーに最も近い角が常に丸くならないようにします。

```css live-sample___multiple-fallbacks
@container anchored(fallback: flip-block) {
  .infobox div {
    border-radius: 10px 0 10px 10px;
  }
}

@container anchored(fallback: flip-inline) {
  .infobox div {
    border-radius: 10px 10px 10px 0;
  }
}

@container anchored(fallback: flip-block flip-inline) {
  .infobox div {
    border-radius: 0 10px 10px 10px;
  }
}
```

> [!NOTE]
> 繰り返しになりますが、簡潔さを期すため、基本的なスタイル設定の大部分と、移動制御を行う JavaScript は非表示にしています（これらは、ここで実演しようとしている内容とは関係がないためです）。完全なコードを確認するには、コードブロックまたはライブレンダリング上の "Play" ボタンを押して、MDN Playground でこのサンプルを開いてください。

```js hidden live-sample___multiple-fallbacks
const anchorDiv = document.querySelector(".anchor");

let xPos = 250;
let yPos = 120;

function setPos() {
  const maxX = document.body.clientWidth - anchorDiv.clientWidth - 25;
  const maxY = document.body.clientHeight - anchorDiv.clientHeight - 25;

  if (xPos < 25) {
    xPos = 25;
  }

  if (xPos > maxX) {
    xPos = maxX;
  }

  if (yPos < 25) {
    yPos = 25;
  }

  if (yPos > maxY) {
    yPos = maxY;
  }

  anchorDiv.style.left = `${xPos}px`;
  anchorDiv.style.top = `${yPos}px`;
}

setPos();

document.body.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    yPos -= 25;
  } else if (e.key === "d") {
    xPos += 25;
  } else if (e.key === "s") {
    yPos += 25;
  } else if (e.key === "a") {
    xPos -= 25;
  }

  setPos();
});

document.body.addEventListener("click", (e) => {
  xPos = e.clientX;
  yPos = e.clientY;

  setPos();
});
```

この例は次のように表示されます。

{{ EmbedLiveSample("multiple-fallbacks", "100%", "350") }}

次の手順で、アンカー要素がビューポート内で動くようにしてみてください。

- アンカーを移動させたい位置でマウスをクリックします（タッチスクリーン端末の場合は画面をタップします）。
- <kbd>W</kbd>、<kbd>A</kbd>、<kbd>S</kbd>、<kbd>D</kbd> キーを使用して、それぞれアンカーを上に、左に、下に、右に移動させます。

アンカー要素を画面の端の近くまで移動させてみると、情報ボックスが画面内に収まるよう周囲のさまざまな位置に移動すること、また、角が丸くない部分が常にアンカーを指すように、情報ボックスに設定された `border-radius` が変化することに注目してください。アンカーを画面のさまざまな隅に移動させると、それぞれ異なる効果が確実に確認できます。

## 関連情報

- [CSS コンテナークエリー](/ja/docs/Web/CSS/Guides/Containment/Container_queries)
- [コンテナーのサイズおよびスタイルクエリーの使用](/ja/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [コンテナースクロール状態クエリーの使用](/ja/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- [CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュール
- [学習: CSS 位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
