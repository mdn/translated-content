---
title: ボックスの高度なエフェクト
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_boxes/Styling tables", "Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}

この記事はトリックの箱として機能し、ボックスの影、ブレンドモード、フィルタのようなボックスの装飾に使用できる高度な機能のいくつかを紹介します。

| 前提知識: | HTML の基礎（[HTML 入門](/ja/docs/Learn/HTML/Introduction_to_HTML)を学ぶ）、および CSS の機能の考え方（[CSS 入門](/ja/docs/Learn/CSS/Introduction_to_CSS)を学ぶ）。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 学習目標: | ボックスの高度なエフェクトの使用方法についてのアイデアを得ることと、CSS 言語に登場しているいくつかの新生のスタイル設定ツールについて知ること。                      |

## ボックスの影

[テキストの装飾](/ja/docs/Learn/CSS/Styling_text)のモジュールに戻って、{{cssxref("text-shadow")}} プロパティを見てみましょう。 これにより、要素のテキストに 1 つ以上のドロップシャドウを適用できます。 ボックスにも同等のプロパティがあります — {{cssxref("box-shadow")}} を使用すると、実際の要素ボックスに 1 つ以上のドロップシャドウを適用できます。 テキストの影と同様に、ボックスの影はブラウザー間で非常によくサポートされていますが、IE9 以降のみです。 古いバージョンの IE を使用しているユーザーは、影なしで対処するしかないかもしれないので、コンテンツがそれらなしで判読可能であることを確かめるためにデザインをテストするだけです。

このセクションの例は [box-shadow.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) にあります（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/box-shadow.html)も参照）。

### 簡単なボックスの影

物事を始めるための簡単な例を見てみましょう。 まず、いくつかの HTML です。

```html
<article class="simple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

そして、CSS です。

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('A_simple_box_shadow', '100%', 100) }}

`box-shadow` プロパティ値に次の 4 つの項目があることがわかります。

1. 最初の長さの値は**水平オフセット**（horizontal offset）です — 影が元のボックスから右へオフセットした距離です（値が負の場合は左）。
2. 2 番目の長さの値は**垂直オフセット**（vertical offset）です — 影が元のボックスから下方向へオフセットした距離です（値が負の場合は上方向）。
3. 3 番目の長さの値は、**ぼかし半径**（blur radius）です — 影に適用されるぼかしの量です。
4. 色の値は、影の**基本色**（base color）です。

これらの値を定義するために必要な長さと色の単位を使用できます。

### 複数のボックスの影

次のように、1 つの `box-shadow` の宣言で、複数のボックスの影をコンマで区切って指定することもできます。

```html hidden
<article class="multiple">
  <p>
    <strong>Warning</strong>: The thermostat on the cosmic transcender has
    reached a critical level.
  </p>
</article>
```

```css
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.25)
  );
}

.multiple {
  box-shadow:
    1px 1px 1px black,
    2px 2px 1px black,
    3px 3px 1px red,
    4px 4px 1px red,
    5px 5px 1px black,
    6px 6px 1px black;
}
```

そして、この結果を得ます。

{{ EmbedLiveSample('Multiple_box_shadows', '100%', 100) }}

ここでは、複数の色付きレイヤーを持つ凸型のボックスを作成することで楽しいことができましたが、例えば複数の光源に基づいて影を付けてよりリアルな外観を作成するなど、好きな方法で使用できます。

### その他のボックスの影の機能

{{cssxref("text-shadow")}} とは異なり、{{cssxref("box-shadow")}} には `inset` キーワードがあります — これを影の宣言の最初に置くと、外側の影ではなく内側の影になります。 見て理解してもらいましょう。

まず、この例では一部異なる HTML を使用します。

```html
<button>Press me!</button>
```

```css
button {
  width: 150px;
  font-size: 1.1rem;
  line-height: 2;
  border-radius: 10px;
  border: none;
  background-image: linear-gradient(to bottom right, #777, #ddd);
  box-shadow:
    1px 1px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(255, 255, 255, 0.5);
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Other_box_shadow_features', '100%', 70) }}

ここでは、フォーカス/ホバー/アクティブ状態と共にボタンの装飾を設定しました。 このボタンには、デフォルトで単純な黒いボックスの影が設定されています。 さらに、1 つは明るく、もう 1 つは暗い、2 つの内側の影を、ボタンに素晴らしい陰影エフェクトを与えるためにボタンの反対側の角に置きます。

ボタンが押されたとき、アクティブ状態は最初のボックスの影を非常に暗い内側の影と交換し、押されているボタンの外観を与えます。

> **メモ:** `box-shadow` 値に設定できる別の項目があります — 色の値の直前に別の長さの値をオプションで設定できるのが、**広がり半径**（spread radius）です。 設定すると、影が元のボックスよりも大きくなります。 あまり一般的ではありませんが、言及する価値があります。

## フィルタ

CSS フィルタは、Photoshop のようなグラフィックパッケージのレイヤーにフィルタを適用するのと同じ方法で、要素にフィルタを適用する方法を提供します。 利用可能ないくつかの異なるオプションがあり、{{cssxref("filter")}} のリファレンスページでそれらすべてについて詳しく読むことができます。 このセクションでは、構文について説明し、結果がどれほど楽しいものになるかを説明します。

基本的に、フィルタは任意の要素、ブロック、インラインに適用することができます — あなたは単に `filter` プロパティを使い、それに特定のフィルタ関数の値を与えるだけです。 利用可能なフィルタオプションの中には他の CSS 機能と非常によく似た機能を持つものがあります。 例えば、`drop-shadow()` は非常によく似た方法で機能し、{{cssxref("box-shadow")}} や {{cssxref("text-shadow")}} と同じエフェクトをもたらします。 しかし、フィルタに関して本当に素晴らしいことは、ボックス自体を 1 つの大きな塊としてではなく、ボックス内のコンテンツの正確な形状に作用することです。 それは常に望んだものではないかもしれませんが、もっときれいに見えます。 簡単な例を使用して、意味を説明しましょう。

まず、いくつかの簡単な HTML です。

```html
<p class="filter">Filter</p>

<p class="box-shadow">Box shadow</p>
```

そして今、いくつかの CSS はドロップシャドウをそれぞれに適用します。

```css
p {
  margin: 1rem auto;
  padding: 20px;
  width: 100px;
  border: 5px dashed red;
}

.filter {
  -webkit-filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.7));
}

.box-shadow {
  box-shadow: 5px 5px 1px rgba(0, 0, 0, 0.7);
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Filters', '100%', 200) }}

ご覧のとおり、フィルタのドロップシャドウは、テキストの正確な形と境界線の破線に従います。 ボックスの影はボックスの四角形にちょうど従っています。

その他注意すべきこと。

- フィルタは非常に新しく、Microsoft Edge を含む最近のほとんどのブラウザーでサポートされていますが、Internet Explorer ではまったくサポートされていません。 デザインにフィルタを使用する場合は、コンテンツがフィルタなしで使用可能であることを確認する必要があります。
- `-webkit-` 接頭辞が付いたバージョンの `filter` プロパティが含まれていることがわかります。 これは{{glossary("Vendor Prefix","ベンダー接頭辞")}}と呼ばれ、新しい機能の実装を完了する前にブラウザーによって使用され、その機能をサポートし、接頭辞の付かないバージョンと衝突せずにその機能を試すことができます。 ベンダー接頭辞はウェブ開発者によって使われることを意図していませんが、実験的な機能が本当に望まれるならば本番ページで使われることもあります。 この場合、現在のところ Chrome / Safari / Opera のサポートには `-webkit-` バージョンのプロパティが必要ですが、Edge と Firefox は最後の接頭辞の付かないバージョンを使用します。

> **メモ:** コードで接頭辞を使用する場合は、接頭辞が必要なバージョンと接頭辞の付かないバージョンを必ずすべて含めてください。 そうすれば、可能な限り最大数のブラウザーでこの機能を使用できるようになり、後でブラウザーが接頭辞をなくすときに接頭辞の付かないバージョンも使用できます。 また、これらの実験的な機能は変更される可能性があるため、コードが壊れる可能性があります。 接頭辞が削除されるまで、これらの機能を試してみることが本当に最善です。

その他のフィルタの例が [filters.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/filters.html) にあります（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/filters.html)も参照）。

## ブレンドモード

CSS ブレンドモードでは、2 つの要素が重なるときにブレンドエフェクトを指定する要素にブレンドモードを追加できます — 各ピクセルに表示される最終的な色は、元のピクセル色とその下のレイヤーにあるピクセル色を組み合わせた結果になります。 ブレンドモードは、Photoshop のようなグラフィックアプリケーションのユーザーにとっては非常によく知られています。

CSS でブレンドモードを使用する次の 2 つのプロパティがあります。

- {{cssxref("background-blend-mode")}} は、単一の要素に設定された複数の背景画像と色をブレンドします。
- {{cssxref("mix-blend-mode")}} は、設定されている要素と、それが重なっている要素をブレンドします — 背景とコンテンツの両方です。

こちらの [blend-modes.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) サンプルページ（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/blend-modes.html)を参照）、および {{cssxref("&lt;blend-mode&gt;")}} リファレンスページには、ここに掲載されている以外にもたくさんの例があります。

> **メモ:** ブレンドモードもまた非常に新しいもので、フィルタよりもサポートが多少劣ります。 Edge にはまだサポートがありませんし、Safari はブレンドモードオプションのいくつかをサポートするだけです。

### background-blend-mode

ここでも、これをよりよく理解できるように、いくつかの例を見てみましょう。 まず、{{cssxref("background-blend-mode")}} です — ここでは次のいくつかの簡単な {{htmlelement("div")}} を示すことで、オリジナルとブレンドバージョンを比較できます。

```html
<div></div>
<div class="multiply"></div>
```

次にいくつかの CSS です — `<div>` に 1 つの背景画像と緑色の背景色を追加しています。

```css
div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

.multiply {
  background-blend-mode: multiply;
}
```

結果はこれです — 左側にオリジナル、右側に乗算ブレンドモードがあります。

{{ EmbedLiveSample('background-blend-mode', '100%', 200) }}

### mix-blend-mode

それでは、{{cssxref("mix-blend-mode")}} を見てみましょう。 ここでは上と同様の 2 つの `<div>` を提示しますが、要素がどのようにブレンドされるかを示すために、それぞれが紫色の背景を持つ単純な `<div>` の上に乗っています。

```html
<article>
  No mix blend mode
  <div></div>
  <div></div>
</article>

<article>
  Multiply mix
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

次がこれをスタイルする CSS です。

```css
article {
  width: 280px;
  height: 180px;
  margin: 10px;
  position: relative;
  display: inline-block;
}

div {
  width: 250px;
  height: 130px;
  padding: 10px;
  margin: 10px;
}

article div:first-child {
  position: absolute;
  top: 10px;
  left: 0;
  background: url(colorful-heart.png) no-repeat center 20px;
  background-color: green;
}

article div:last-child {
  background-color: purple;
  position: absolute;
  bottom: -10px;
  right: 0;
  z-index: -1;
}

.multiply-mix {
  mix-blend-mode: multiply;
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('mix-blend-mode', '100%', 200) }}

ここでは、乗算混合（multiply mix）ブレンドが 2 つの背景画像だけでなく、その下の `<div>` からの色もブレンドしていることがわかります。

> **メモ:** {{cssxref("position")}}、{{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("z-index")}} など、上記のレイアウトプロパティの一部を理解していなくても心配しないでください。 これらについては、[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)のモジュールで詳しく説明します。

## -webkit-background-clip: text

先に進む前に、簡単に言及しておきたいと思うもう 1 つの新生機能は、{{cssxref("background-clip")}} の `text` 値です（現在 Chrome、Safari、Opera でサポートされており、Firefox で実装されています）。 独自の `-webkit-text-fill-color: transparent;` 機能とともに使用すると、背景画像を要素のテキストの形に切り取ることができ、いくつかの素晴らしいエフェクトをもたらします。 これは公式の標準ではありませんが、普及しており、開発者によってかなり広く使用されているため、複数のブラウザーにわたって実装されています。 このコンテキストで使用すると、Webkit / Chrome 以外のブラウザーでも、両方のプロパティに `-webkit-` ベンダー接頭辞が必要になります。

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

では、なぜ他のブラウザーが `-webkit-` 接頭辞を実装したのでしょうか？ 主にブラウザーの互換性のためにです — 非常に多くのウェブ開発者が `-webkit-` 接頭辞を使用してウェブサイトを実装し始めているため、実際には標準に従っているのに、他のブラウザーでは壊れているように見え始めました。 そこで彼らはそのような機能をいくつか実装することを余儀なくされました。 これはあなたの仕事で標準的でなく接頭辞の付いた CSS 機能を使用する危険性を浮き彫りにします — それらはブラウザーの互換性の問題を引き起こすだけでなく、変更される可能性もあるため、コードはいつでも壊れる可能性があります。 標準に固執するほうがはるかに良いです。

本番環境でこのような機能を使用したい場合は、ブラウザー間で徹底的なテストを行い、機能が機能しない場合でもサイトが引き続き使用可能であることを確認してください。

> **メモ:** 完全な `-webkit-background-clip: text` のコードの例については、[background-clip-text.html](http://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) を参照してください（[ソースコード](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/advanced_box_effects/background-clip-text.html)も参照）。

## 能動的学習: いくつかのエフェクトを用いた実験

今度は、あなたの番です。 この能動的学習のために、下に提供されているコードを使用して、上で読んだエフェクトのいくつかを試してみてください。

間違えた場合は、_Reset_ ボタンを使用して例をいつでもリセットできます。

```html hidden
<div
  class="body-wrapper"
  style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>HTML Input</h2>
  <textarea
    id="code"
    class="html-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
<div class="style-me">
</div></textarea
  >

  <h2>CSS Input</h2>
  <textarea
    id="code"
    class="css-input"
    style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">
.style-me {
  width: 280px;
  height: 130px;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  background-color: red;
  background: url(colorful-heart.png) no-repeat center 20px,
              linear-gradient(to bottom right, #f33, #a33);
} </textarea
  >

  <h2>Output</h2>
  <div
    class="output"
    style="width: 90%;height: 15em;padding: 10px;border: 1px solid #0095dd;overflow:hidden;"></div>
  <div class="controls">
    <input
      id="reset"
      type="button"
      value="Reset"
      style="margin: 10px 10px 0 0;" />
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");

var styleElem = document.createElement("style");
var headElem = document.querySelector("head");
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function () {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 820) }}

## まとめ

この記事が楽しかったことを願っています — ぴかぴかのおもちゃで遊ぶのは概してそうで、最先端のブラウザーで、どのような種類のツールが使用可能になりつつあるのかを見るのはいつも面白いです。 [ボックスの装飾](/ja/docs/Learn/CSS/Styling_boxes)の記事の終わりに到達したので、次に私たちの評価であなたのボックスの装飾のスキルをテストします。

{{PreviousMenuNext("Learn/CSS/Styling_boxes/Styling tables", "Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}
