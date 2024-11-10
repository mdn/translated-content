---
title: 装飾的なボックスの作成
slug: Learn/CSS/Howto/Create_fancy_boxes
l10n:
  sourceCommit: 289d6314f3368aa3e28524e7d090f6e9c704e3b1
---

{{LearnSidebar}}

CSS ボックスは、CSS で装飾されたウェブページの構成要素です。 見栄えを良くすることは、楽しさとやりがいの両方です。 デザインのアイデアを実用的なコードに変えることがすべてだからです。 面倒な制約と CSS の使用における狂気の自由のために、それは挑戦的です。 いくつかの装飾的なボックスをやりましょう。

実用的な側面に取り掛かる前に、[CSS ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model)に慣れていることを確認してください。 いくつかの [CSS レイアウトの基本](/ja/docs/Learn/CSS/CSS_layout/Introduction)を熟知していることも賢明ですが、前提条件ではありません。

技術面では、装飾的なボックスの作成は、CSS の境界線と背景のプロパティの習得と、それらを特定のボックスに適用する方法についてのものです。 しかし、テクニックを超えてそれはまたあなたの創造性を解き放つことに関するすべてです。 それは 1 日で終わらないでしょうし、何人かのウェブ開発者はそれを楽しんで一生を過ごします。

私たちは多くの例を見ようとしていますが、可能な限り最も単純な HTML の部分、次の単純な要素に取り組むつもりです。

```html
<div class="fancy">Hi! I want to be fancy.</div>
```

はい、HTML のごく一部ですが、その要素について何を調整できるのでしょうか？ 次のすべてです。

- そのボックスモデルのプロパティ: {{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("padding")}}、{{cssxref("border")}} など
- その背景のプロパティ: {{cssxref("background")}}、{{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-position")}}、{{cssxref("background-size")}} など
- その擬似要素: {{cssxref("::before")}} および {{cssxref("::after")}}
- そして、いくつかの脇のプロパティ: {{cssxref("box-shadow")}}、{{cssxref("rotate")}}、{{cssxref("outline")}} など

とても広い遊び場があります。 楽しく始めましょう。

## ボックスモデルの調整

ボックスモデルだけで、単純な境界線の追加、四角形の作成など、基本的なことを行うことができます。 負の `padding` や負の `margin`、あるいはその両方を使用して、`border-radius` をボックスの実際のサイズよりも大きくすることによって、プロパティを限界にプッシュすると、面白くなり始めます。

### 円を作る

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

これはとてもシンプルでとても楽しいものです。 {{cssxref("border-radius")}} プロパティは、ボックスに適用される丸い角を作成するように作られていますが、半径のサイズがボックスの実際の幅と等しいかそれより大きい場合はどうなるでしょうか？

```css
.fancy {
  /* 円の中では、中央揃えのテキストは見栄えがよくなります。 */
  text-align: center;

  /* テキストが境界線に触れないようにしましょう。
     テキストはまだ四角形の中を流れているので、
     そのようにするときれいに見えて、
     それが「本当の」円であるという感覚を与えます。 */
  padding: 1em;

  /* 境界線は円に見えるようになります。
     背景は境界線の半径で切り取られるので、
     背景を使用することもできます。 */
  border: 0.5em solid black;

  /* 正方形であることを確認しましょう。
     正方形でない場合は、円ではなく楕円です。 ;) */
  width: 4em;
  height: 4em;

  /* そして正方形を円に変えましょう。 */
  border-radius: 100%;
}
```

はい、円ができます。

{{ EmbedLiveSample('Making_circles', '100%', '120') }}

## 背景

装飾的なボックスについて話すとき、それを扱うための中心的なプロパティは [background-\* プロパティ](/ja/docs/Web/CSS/CSS_backgrounds_and_borders)です。 背景をいじり始めると、CSS ボックスはあなたが満たすための空白のキャンバスになります。

いくつかの実用的な例に進む前に、背景について知っておくべきことが 2 つあるので、少し後退しましょう。

- 一つのボックスに[複数の背景](/ja/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)を設定することが可能です。 それらは層のように互いの上に積み重ねられています。
- 背景は単色や画像のどちらでもかまいません。 単色は常に表面全体を塗りつぶしますが、画像は拡大縮小して配置することができます。

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

さて、背景を楽しんでみましょう。

```css-nolint
.fancy {
  padding: 1em;
  width: 100%;
  height: 200px;
  box-sizing: border-box;

  /* 背景の積み重ねの一番下を、
     霧のかかった灰色の単色にしましょう。 */
  background-color: #e4e4d9;

  /* カラーストリップエフェクトを作成するために、
     線形グラデーションを重ね合わせます。
     お気づきのとおり、
     色のグラデーションは画像と見なされ、
     そのように操作することができます。 */
  background-image: linear-gradient(175deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 95%, #8da389 95%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 90%, #b4b07f 90%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 92%, #b4b07f 92%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 85%, #c5a68e 85%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 89%, #c5a68e 89%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 80%, #ba9499 80%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 86%, #ba9499 86%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 75%, #9f8fa4 75%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 83%, #9f8fa4 83%),
                    linear-gradient(175deg, rgb(0 0 0 / 0%) 70%, #74a6ae 70%),
                    linear-gradient( 85deg, rgb(0 0 0 / 0%) 80%, #74a6ae 80%);
}
```

{{ EmbedLiveSample('Backgrounds', '100%', '200') }}

> [!NOTE]
> グラデーションは、非常に独創的な方法で使用できます。 あなたがクレイジーな例を見たいのなら、[Lea Verou の CSS パターン](https://projects.verou.me/css3patterns/)（英語）を見てください。グラデーションについてもっと知りたい場合は、気軽に[専用の記事](/ja/docs/Web/CSS/CSS_images/Using_CSS_gradients)を見てください。

## 擬似要素

1 つのボックスを装飾するときに、自分自身が制限されていることに気付き、さらに素晴らしい装飾を作成するためにもっとボックスを追加したいと思うかもしれません。 ほとんどの場合、これは独自の装飾の目的で HTML 要素を追加することによって DOM を汚染することにつながります。 たとえそれが必要であっても、それはやや悪い習慣と考えられています。 そのような落とし穴を回避するための 1 つの解決策は、[CSS 擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を使用することです。

### 雲

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

ボックスを雲に変える例を見てみましょう。

```css
.fancy {
  text-align: center;

  /* 以前に円を作るために使用したのと同じトリックです。 */
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  padding: 80px 1em 0 1em;

  /* 雲の「耳」のための場所を空けます。 */
  margin: 0 100px;

  position: relative;

  background-color: #a4c9cf;

  /* それで、私たちは雲の底を平らにしたいので、
     実際に一周していません。
     この例を気軽に微調整して、
     底が平らでない雲にしてください。 ;) */
  border-radius: 100% 100% 0 0;
}

/* これらは、::before 擬似要素と ::after 擬似要素
   の両方に適用される共通のスタイルです。 */
.fancy::before,
.fancy::after {
  /* これは、たとえ値が空の文字列であっても、
     擬似要素の表示を許可するために必要です。 */
  content: "";

  /* 擬似要素をボックスの左右に配置しますが、
     常に一番下に配置します。 */
  position: absolute;
  bottom: 0;

  /* これにより、擬似要素は、何が起こっても
     ボックスのコンテンツの下になります。 */
  z-index: -1;

  background-color: #a4c9cf;
  border-radius: 100%;
}

.fancy::before {
  /* これは雲の左耳の大きさです。 */
  width: 125px;
  height: 125px;

  /* 少し左に動かします。 */
  left: -80px;

  /* 雲の底が平らに保たれるようにするには、
     左耳の正方形の右下角を作る必要があります。 */
  border-bottom-right-radius: 0;
}

.fancy::after {
  /* これは右耳の雲の大きさです。 */
  width: 100px;
  height: 100px;

  /* 少し右に動かします。 */
  right: -60px;

  /* 雲の底が平らに保たれるようにするには、
     右耳の正方形の左下角を作る必要があります。 */
  border-bottom-left-radius: 0;
}
```

{{ EmbedLiveSample('A_cloud', '100%', '160') }}

### ブロック引用

擬似要素を使用するより実用的な例は、HTML の {{HTMLElement('blockquote')}} 要素のための素晴らしいフォーマットを構築することです。 それでは、少し異なる HTML スニペットを使った例を見てみましょう（デザインのローカライゼーションもどのように処理するかを見る機会を提供してくれます）。

```html
<blockquote>
  People who think they know everything are a great annoyance to those of us who
  do. <i>Isaac Asimov</i>
</blockquote>
<blockquote lang="fr">
  L'intelligence, c'est comme les parachutes, quand on n'en a pas, on s'écrase.
  <i>Pierre Desproges</i>
</blockquote>
```

それで、これが装飾です。

```css
blockquote {
  min-height: 5em;
  padding: 1em 4em;
  font: 1em/150% sans-serif;
  position: relative;
  background-color: lightgoldenrodyellow;
}

blockquote::before,
blockquote::after {
  position: absolute;
  height: 3rem;
  font:
    6rem/100% Georgia,
    "Times New Roman",
    Times,
    serif;
}

blockquote::before {
  content: "“";
  top: 0.3rem;
  left: 0.9rem;
}

blockquote::after {
  content: "”";
  bottom: 0.3rem;
  right: 0.8rem;
}

blockquote:lang(fr)::before {
  content: "«";
  top: -1.5rem;
  left: 0.5rem;
}

blockquote:lang(fr)::after {
  content: "»";
  bottom: 2.6rem;
  right: 0.5rem;
}

blockquote i {
  display: block;
  font-size: 0.8em;
  margin-top: 1rem;
  text-align: right;
}
```

{{ EmbedLiveSample('Blockquote', '100%', '300') }}

## すべて一緒に、その他

ですから、これらすべてを混ぜ合わせると素晴らしいエフェクトを生み出すことができます。 ある時点で、そのようなボックス装飾を達成することは、CSS プロパティの設計と技術的使用の両方において、創造性の問題です。 このようにすることで、この例のようにボックスを生き生きとさせることができる錯視を作成することが可能です。

```html hidden
<div class="fancy">Hi! I want to be fancy.</div>
```

部分的なドロップシャドウ効果を作成してみましょう。{{cssxref("box-shadow")}} プロパティでは、内照や 平面的なドロップシャドウ効果を作成することができますが、少し作業を加えることで、擬似要素や {{cssxref("transform")}} の 3 つの個別プロパティのひとつである {{cssxref("rotate")}} プロパティを使用してより自然に近い形状を作ることが可能です。

```css
.fancy {
  position: relative;
  background-color: #ffc;
  padding: 2rem;
  text-align: center;
  max-width: 200px;
}

.fancy::before {
  content: "";

  position: absolute;
  z-index: -1;
  bottom: 15px;
  right: 5px;
  width: 50%;
  top: 80%;
  max-width: 200px;

  box-shadow: 0px 13px 10px black;
  rotate: 4deg;
}
```

{{ EmbedLiveSample('All_together_and_more', '100%', '120') }}
