---
title: ボックスの高度な効果
slug: Learn/CSS/Building_blocks/Advanced_styling_effects
l10n:
  sourceCommit: 289d6314f3368aa3e28524e7d090f6e9c704e3b1
---

{{LearnSidebar}}

この記事はトリックの箱として機能し、ボックスの影、ブレンドモード、フィルターのようなボックスの装飾に使用できる高度な機能のいくつかを紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        HTML の基礎（<a href="/ja/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 入門</a
        >で学習）、および CSS の機能の考え方（<a href="/ja/docs/Learn/CSS/First_steps"
          >CSS 第一歩</a
        >で学習）。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>
        現行ブラウザーで利用できる高度なスタイル設定の考え方を身につけること。
      </td>
    </tr>
  </tbody>
</table>

## ボックスの影

{{cssxref("box-shadow")}} を使用すると、実際の要素ボックスに 1 つ以上のドロップシャドウを適用できます。 テキストの影と同様に、ボックスの影は、IE9 以降や Edge を含め、ブラウザー間の対応が良く進んでいます。古いバージョンの IE を使用しているユーザーは、影なしで対処するしかないかもしれないので、コンテンツがそれらなしで判読可能であることを確かめるためにデザインをテストするだけです。

この節の例は [box-shadow.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/box-shadow.html) にあります（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/box-shadow.html)も参照）。

### 簡単なボックスの影

手始めに、簡単な例を見てみましょう。 まず、いくらかの HTML です。

```html
<article class="simple">
  <p>
    <strong>警告</strong>:
    宇宙のトランスセンダーのサーモスタットは臨界レベルに達しています。
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
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.simple {
  box-shadow: 5px 5px 5px rgb(0 0 0 / 70%);
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('A_simple_box_shadow', '100%', 100) }}

`box-shadow` プロパティ値に次の 4 つの項目があることがわかります。

1. 最初の長さの値は**水平オフセット** (horizontal offset) です。影を元のボックスから右へずらす距離です（値が負の場合は左）。
2. 2 番目の長さの値は**垂直オフセット** (vertical offset) です。影を元のボックスから下へずらす距離です（値が負の場合は上）。
3. 3 番目の長さの値は、**ぼかし半径** (blur radius) です。影に適用されるぼかしの量です。
4. 色の値は、影の**基本色**（base color）です。

これらの値を定義するために必要な長さと色の単位を使用できます。

### 複数のボックスの影

次のように、1 つの `box-shadow` の宣言で、複数のボックスの影をカンマで区切って指定することもできます。

```html hidden
<article class="multiple">
  <p>
    <strong>警告</strong>:
    宇宙のトランスセンダーのサーモスタットは臨界レベルに達しています。
  </p>
</article>
```

```css-nolint
p {
  margin: 0;
}

article {
  max-width: 500px;
  padding: 10px;
  background-color: red;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 25%)
  );
}

.multiple {
  box-shadow: 1px 1px 1px black,
              2px 2px 1px black,
              3px 3px 1px red,
              4px 4px 1px red,
              5px 5px 1px black,
              6px 6px 1px black;
}
```

そして、この結果が得られます。

{{ EmbedLiveSample('Multiple_box_shadows', '100%', 100) }}

ここでは、複数の色レイヤーで盛り上がったボックスを作成することで楽しみを演出しましたが、例えば、複数の光源に基づく影でよりリアルな見てくれを作成するなど、好きな方法で使用することができます。

### その他のボックスの影の機能

{{cssxref("text-shadow")}} とは異なり、{{cssxref("box-shadow")}} には `inset` キーワードがあります。これを影の宣言の最初に置くと、外側の影ではなく内側の影になります。 見て理解してもらいましょう。

まず、この例では一部異なる HTML を使用します。

```html
<button>押してください！</button>
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
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}

button:focus,
button:hover {
  background-image: linear-gradient(to bottom right, #888, #eee);
}

button:active {
  box-shadow:
    inset 2px 2px 1px black,
    inset 2px 3px 5px rgb(0 0 0 / 30%),
    inset -2px -3px 5px rgb(255 255 255 / 50%);
}
```

これにより、次のような結果が得られます。

{{ EmbedLiveSample('Other_box_shadow_features', '100%', 70) }}

ここでは、フォーカス/ホバー/アクティブ状態と共にボタンの装飾を設定しました。 このボタンには、デフォルトで単純な黒いボックスの影が設定されています。 さらに、1 つは明るく、もう 1 つは暗い、2 つの内側の影を、ボタンに素晴らしい陰影エフェクトを与えるためにボタンの反対側の角に置きます。

ボタンが押されたとき、アクティブ状態は最初のボックスの影を非常に暗い内側の影と交換し、押されているボタンの外観を与えます。

> **メモ:** `box-shadow` 値に設定できる別の項目があります — 色の値の直前に別の長さの値をオプションで設定できるのが、**広がり半径** (spread radius) です。 設定すると、影が元のボックスよりも大きくなります。 あまり一般的ではありませんが、言及する価値があります。

## フィルター

CSS を使って画像の構図を変えることはできませんが、工夫できることはいくつかあります。あなたのデザインに関心を持たせるのに役立つとても素晴らしいプロパティのひとつに、{{cssxref("filter")}} プロパティがあります。このプロパティは、CSS で Photoshop のようなフィルターを実現します。

下記の例では、フィルターに 2 つの異なる値を使用しています。最初のものは `blur()` で、この関数には画像をどの程度不鮮明にするかを示す値を渡します。

2 つ目は `grayscale()` で、パーセント値を用いてどれだけ色を除去するかを設定します。

{{EmbedGHLiveSample("css-examples/learn/images/filter.html", '100%', 900)}}

**ライブサンプルのパーセント値とピクセルパラメーターを変更して、画像がどのように変化するかを確認してください。他にも値を入れ替えることができます。上のライブ例で、`contrast(200%)`、`invert(100%)`、`hue-rotate(20deg)` を試してみてください。他にもいろいろなオプションがあるので、[`filter`](/ja/docs/Web/CSS/filter)の MDN ページを見ていってください。**

フィルターは画像だけでなく、あらゆる要素に適用することができます。利用できるフィルターオプションの中には、他の CSS 機能ととてもよく似たことをするものもあります。例えば `drop-shadow()` はとてもよく似た方法で動作し、[`box-shadow`](/ja/docs/Web/CSS/box-shadow) や [`text-shadow`](/ja/docs/Web/CSS/text-shadow) と似た効果を与えます。しかし、フィルターの実にいいところは、ボックスそのものを一つの大きな塊としてではなく、ボックス内のコンテンツの正確な図形に対して動作することです。

この例では、 ボックスにフィルターを適用してボックスシャドウと比較しています。ご覧のように、 ドロップシャドウフィルターは、 テキストと枠線のダッシュの正確な図形に沿って現れます。ボックスシャドウはボックスの四角形沿いにだけ現れます。

{{EmbedGHLiveSample("css-examples/learn/images/filter-text.html", '100%', 700)}}

## ブレンドモード

CSS ブレンドモードでは、要素にブレンドモードを追加することで、2 つの要素が重なったときのブレンド効果を指定することができます。各ピクセルの最終的な表示色は、元のピクセルの色と、その下のレイヤーのピクセルの色を組み合わせたものになります。ブレンドモードは、Photoshop のようなグラフィックアプリケーションのユーザーにはとてもおなじみのものです。

CSS でブレンドモードを使用するプロパティは、次の 2 つがあります。

- {{cssxref("background-blend-mode")}} は、単一の要素に設定された複数の背景画像と色をブレンドします。
- {{cssxref("mix-blend-mode")}} は、設定されている要素と、それが重なっている要素の背景とコンテンツの両方をブレンドします。

こちらの [blend-modes.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/blend-modes.html) サンプルページ（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/blend-modes.html)を参照）、および {{cssxref("&lt;blend-mode&gt;")}} リファレンスページには、ここに掲載されている以外にもたくさんの例があります。

> [!NOTE]
> ブレンドモードもまたとても新しいもので、フィルターよりも対応が進んでいません。Edge はまだ対応していませんし、Safari はブレンドモードオプションのいくつかだけに対応しています。

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

The result we get is this — you can see the original on the left, and the multiply blend mode on the right:

{{ EmbedLiveSample('background-blend-mode', '100%', 300) }}

### mix-blend-mode

それでは、{{cssxref("mix-blend-mode")}} を見てみましょう。 ここでは上と同様の 2 つの `<div>` を提示しますが、要素がどのようにブレンドされるかを示すために、それぞれが紫色の背景を持つ単純な `<div>` の上に乗っています。

```html
<article>
  混合ブレンドモードなし
  <div></div>
  <div></div>
</article>

<article>
  乗算混合
  <div class="multiply-mix"></div>
  <div></div>
</article>
```

次がこれをスタイル設定する CSS です。

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

{{ EmbedLiveSample('mix-blend-mode', '100%', 300) }}

ここでは、乗算ブレンドが 2 つの背景画像をブレンドするだけでなく、その下の `<div>` からの色もブレンドしていることがわかります。

> **メモ:** {{cssxref("position")}}、{{cssxref("top")}}、{{cssxref("bottom")}}、{{cssxref("z-index")}} など、上記のレイアウトプロパティの一部を理解していなくても心配しないでください。 これらについては、[CSS レイアウト](/ja/docs/Learn/CSS/CSS_layout)のモジュールで詳しく説明します。

## CSS シェイプ

CSSではすべてが長方形のボックスであり、画像は物理的に長方形のボックスであることは事実ですが、[CSS シェイプ](/ja/docs/Web/CSS/CSS_shapes)を使用することで、コンテンツが長方形でないものの周りを流れるように見せることができます。

CSS シェイプ仕様により、長方形以外の図形にテキストを回り込ませることができます。特に、テキストを回り込ませることができる余白のある画像で作業するときに有益です。

下記画像には、まん丸のバルーンがあります。実際のファイルは長方形ですが、画像を浮動させ（シェイプは浮動要素にのみ適用されます）、{{cssxref("shape-outside")}} プロパティの値を `circle(50%)` として使用することにより、テキストがバルーンの線に沿って流れる効果を与えることができます。

{{EmbedGHLiveSample("css-examples/learn/images/shapes.html", '100%', 1000)}}

この例のシェイプは画像ファイルのコンテンツに反応しているわけではありません。代わりに、 circle 関数が画像ファイルの中央を中心点として取り、あたかもファイルの中央にコンパスを置いて、ファイルの中に収まる円を描画したかのようになります。その円の周りをテキストが流れるのです。

> [!NOTE]
> Firefox では、開発者ツールの[シェイプインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html)を使用してシェイプを検査することができます。

`circle()` 関数はいくつか定義されている基本的なシェイプの一つに過ぎませんが、シェイプを作成する方法はいくつもあります。CSS シェイプの詳細情報とサンプルコードについては、MDN の [CSS シェイプガイド](/ja/docs/Web/CSS/CSS_shapes/Overview_of_shapes)を参照してください。

## -webkit-background-clip: text

先に進む前に、簡単に言及しておきたいと思うもう 1 つの機能は、{{cssxref("background-clip")}} の `text` 値です（現在 Chrome、Safari、Opera が対応しており、Firefox で実装されています）。 独自の `-webkit-text-fill-color: transparent;` 機能とともに使用すると、背景画像を要素のテキストの形に切り取ることができ、いくつかの素晴らしい効果をもたらします。 これは公式の標準ではありませんが、普及しており、開発者によってかなり広く使用されているため、複数のブラウザーにわたって実装されています。 このコンテキストで使用すると、Webkit / Chrome ベース以外のブラウザーでも、両方のプロパティに `-webkit-` ベンダー接頭辞が必要になります。

```css
.text-clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

では、なぜ他のブラウザーが `-webkit-` 接頭辞を実装したのでしょうか？ 主にブラウザーの互換性のためにです。とても多くのウェブ開発者が `-webkit-` 接頭辞を使用してウェブサイトを実装し始めているため、実際には標準に従っているのに、他のブラウザーでは壊れているように見え始めました。 そこで彼らはそのような機能をいくつか実装することを余儀なくされました。 これは標準的でない接頭辞の付いた CSS 機能を使用する危険性が浮き彫りになります。ブラウザーの互換性の問題を引き起こすだけでなく、変更される可能性もあるため、コードはいつでも壊れる可能性があります。 標準に固執するほうがはるかに良いことです。

本番環境でこのような機能を使用したい場合は、ブラウザー間で徹底的なテストを行い、機能が機能しない場合でもサイトが引き続き使用可能であることを確認してください。

> [!NOTE]
> 完全な `-webkit-background-clip: text` のコードの例については、[background-clip-text.html](https://mdn.github.io/learning-area/css/styling-boxes/advanced_box_effects/background-clip-text.html) を参照してください（[ソースコード](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/advanced_box_effects/background-clip-text.html)も参照）。

## まとめ

この記事が楽しいものであったことを願います。光り輝くおもちゃで遊ぶことは一般的にそうですし、現行のブラウザーで利用できるようになった高度なスタイル設定ツールの種類を見ることは常に興味深いものです。
