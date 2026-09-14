---
title: ウェブアニメーション API の使用
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

ウェブアニメーション API により、JavaScript でアニメーションを構築したり、再生を制御したりすることができます。この記事では「ふしぎの国のアリス」を利用した楽しいデモとチュートリアルで正しい利用方法を説明します。

## ウェブアニメーション API との出会い

[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) は、ブラウザー内のアニメーションエンジンを開発者に公開し、JavaScript で操作できるようにします。この API は [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)と [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)の両方の実装基盤となるように設計されており、将来のアニメーション効果への扉を開いた状態にしています。これは、ハックや強制、{{domxref("Window.requestAnimationFrame()")}} なしで、ブラウザーに自分自身で内部最適化をさせる、ウェブ上でアニメーションするためのほとんどのパフォーマンスの高い方法の 1 つです。

ウェブアニメーション API を使うと、インタラクティブなアニメーションをスタイルシートから JavaScript に移し、表示と動作を分離することができます。再生方向を制御するために、CSS プロパティを書いたり、要素にクラスをスコープしたりといった、DOM を酷使する技法に頼る必要はなくなりました。また、純粋な宣言型の CSS とは異なり、JavaScript ではプロパティから再生時間まで動的に値を設定することもできます。カスタムアニメーションライブラリーを作成したり、対話するアニメーションを作成したりするのに、ウェブアニメーション API は最適かもしれません。何ができるか見てみましょう！

このページには、[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)を活用した一連の例として、[不思議の国のアリス](https://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland)に着想を得たデモが掲載されています。これらの例は、[Rachel Nabors](https://nearestnabors.com/) によって作成され、ご厚意により提供されています。[一連の例](https://codepen.io/collection/nqNJvD)は CodePen で利用できるのですが、ここでは当ドキュメントに関連するものを紹介します。

## ウェブアニメーション API を利用して CSS アニメーションを構築する

ウェブアニメーション API を学習するためのより身近な手法は、多くのウェブ開発者が以前に使用したことのある CSS アニメーションから始めることです。CSS アニメーションには馴染みのある構文があり、そのためデモ用にうまく分解することができます。

### CSS バージョン

アリスがうさぎの穴から落ちてワンダーランドに導かれる様子を示した CSS で書かれている転がり落ちるアニメーションです。

{{EmbedLiveSample("animations_css_version", "", 300)}}

```html hidden live-sample___animations_css_version live-sample___animations_api_version
<div class="wrapper">
  <div id="tunnel"></div>
  <div id="alice">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <path
        d="M110.1 2.7h8.9c3.4.4 6.7.8 10.1 1.3 9.8 1.5 17.8 6.4 24.5 13.7.4.5 1.9.6 2.5.3 6.8-4.4 13.9-8.2 21.9-9.9 1.3-.3 3.4-1.2 3.7 1.5.6 4.9 1.4 9.9 1.7 14.8.3 4.4.1 8.7.1 12.2 2.1 1.5 4.6 2.3 5.5 4 4.2 8.4 3.2 17.6 3.1 26.6 0 1.2-.4 3.3.1 3.6 10.3 4.9 20.7 9.6 31.1 14.4 2.5-4.9-2.3-16-15.8-14.4.6-.5 1.4-1.1 2.2-1.1 2.5.1 4.9.4 7.4.7 6 .8 10.9 3.7 14.6 8.4 1.2 1.5 1.6 4.2 1.1 6.1-.7 3.2-3.7 4-7.1 4.1 4.5 3.5 6.5 8.1 6.8 13.3.6 9.4-1.1 18.6-4.8 27.1-3.9 8.8-5.2 17.5-3.3 26.8.6 3.2 1.2 7 .2 9.9-2 6.2-7.8 8.6-13.4 10.9-3 1.2-7.4 1.2-6.3 6.3.8 3.7-.4 4 .2 4.5 5.8 5.8 11.8 11.5 17.6 17.3 1.7 1.7 3 3.8 4.3 5.5-1.1.4-1.8.7-2.4 1 7.5 5.8 14.9 11.6 22.4 17.4 4.3-4.3 8.6-9 13.3-13.2 8.1-7.3 16.7-14 24.5-21.7 3.3-3.3 4.9-8.2 7.4-12.3.3-.4 1.3-.9 1.6-.7 4.6 2.7 6.8 7.2 7.9 12.1 1.3 5.7 1.6 11.6 2.3 17.1 4.2-.2 8.8-.8 13.4-.4 2 .1 4.6 1.8 5.5 3.5 2.2 4.3 3.8 8.9 5.3 13.5 3.7 11.5 6.9 23.2 10.7 34.7 1.7 5.1 3.4 10.4 8.6 13.4.5.3.5 2.7 0 3.1-3.3 2.5-6.9 4.6-10.5 7 2 5.8 4.3 12.6 6.7 19.6.7-.8 1.4-1.6 2.1-2.3 1.9-1.9 3.5-1.6 4.2 1.2.7 3 1.3 6.2 1.5 9.3.3 7.3.4 14.6.6 21.9 0 .4.2.8.5 1.2 3.6 4.7 7.1 9.3 10.7 14 1.7 2.3 3 5.4 5.3 6.6 5.5 2.7 11.5 4.4 17.3 6.6v.7c-.4.3-.7.8-1.2 1-5.8 2.1-11.6 4.3-17.5 6.2-4.2 1.3-8.4 2-12.4-1.2-1.8-1.5-3.9-2.6-5.8-3.8 0 2.3.1 4.4-.1 6.4-.1.8-.7 2.2-1.2 2.2-2.6.2-5.3.1-7.9.1-1.1 0-2.7.3-3.2-.3-1-1.2-2.1-2.9-2.1-4.4-.1-5.2.1-10.4.3-15.6.1-1.8 1.5-3.9.9-5.4-1.7-4.3-4-8.4-6.1-12.5-2.4-4.6-6.4-9.1-1.2-14.3.3-.3.3-1.3 0-1.7-4.7-6.5-9.5-13.1-14.4-19.5-1.2-1.5-2.9-3.7-4.4-3.7-6.7.1-13.4.8-20.1 1.3-.7.1-1.6.2-1.9.6-7.1 9.1-14 18.3-21.1 27.4-1.3 1.7-2.9 3.4-4.3 5 1.7.6 3.3 1.1 4.8 1.7.6.2 1.3.5 1.6 1 .2.3-.1 1.1-.4 1.5-2 2.6-4.1 5.2-6.1 7.8-4.3 5.3-8.7 10.5-13 15.9-.8 1-1.5 2.4-1.6 3.6-.2 5.4-.1 10.7-.1 16.1 0 1.5-.7 3.6.1 4.5 2.4 3 5.3 5.5 7.9 8.2 1.6 1.7 3 3.5 4.6 5.5-2.6.2-4.5.3-6.4.4h-3.7c-4.8-1.4-9.8-2.5-14.5-4.3-3.5-1.4-7.8-2.5-8-7.7-.1-2.1-.2-4.3-.4-6.7-1 1.1-1.7 2.1-2.6 2.9-.3.3-1 .4-1.3.2-1.9-1.1-3.7-2.2-5.5-3.4-1.7-1.1-4.5-1.6-3.5-4.5 2.3-6.5 6.4-11.6 12.7-14.9.6-.3 1.3-.9 1.6-1.5 3.9-8.2 7.8-16.4 11.8-24.6.7-1.5.4-4.5 3.8-3.8.2.1 1.2-3.1 1.8-4.9-2.8 1.5-5 2.9-7.4 3.9-7.4 3-14.7 6.4-23.1 5.6-8.5-.7-16.2-3.4-23.2-8-9.9-6.7-14.2-17-17.5-27.9-.5-1.7-.5-5.1-3.5-1.6-.1.2-.4.2-.6.3-2.5 1.7-5.4 3-6 6.5-.4 2.3-1 4.6-1.5 7-2.9 13.2-4.2 26.4-2.5 39.9 1.7 13.1 9.2 21.3 21 26.3 2.4 1 4.9 1.9 7.5 2.9-2.1.9-3.9 1.9-5.8 2.3-10.2 2.5-20.5 4.9-30.8 7.1-1.9.4-4.9.7-5.9-.3-6.4-6.5-8.9-14.8-8.3-23.7.7-9.6 2.1-19.2 3.9-28.6 2.2-11.5 6.1-22.5 11.7-32.9.7-1.3 2-3.1 1.6-4.1-1.8-4.6-4.5-8.9-6.2-13.6-2-5.7-4.2-11.6-1.2-17.8.1-.1-.3-.5-.5-.8 7.6.7 12.8 5.3 17.7 10.2-1.3-8.5-2.6-17.2-3.9-25.8 0-.3-.2-.7-.4-.9-6.7-5.5-13.3-11.2-17-19.2-2.6-5.7-4.3-11.8-6.3-17.7-.6-1.6.2-3.4-2.2-4.8-5.9-3.5-10.3-8.6-10.3-16 0-1.8 1.2-5 2.2-5.1 8.3-1.2 16.4-.1 23.8 4.2 2.4 1.4 4.9 2.7 8.1 4.4-.4-8.8-.8-16.2-1.2-23.6-4.2.9-8.6.9-11.5-2-3.3-3.3-5.4-7.8-7.9-11.8-1.1-1.7-2-3.6-3.5-6.4-3.8 10.3-7.4 19.9-10.8 29.1-.3-.6-1.1-1.7-1.5-2.9-3.5-10-2.8-20.2-1.1-30.3 1.2-7.4 4.3-14.6 3.1-22.4-.2-1.1.2-2.3.3-3.4-22.1 17.6-38.8 38.4-42.9 67.4-4 28-2.8 54.8 13.5 79.1-36.3-13.8-53-48.6-58.3-84.1-3 8-15 16.3-22.4 16.6v-.2c2.1-2.9 11.1-10.6 7-30.2-1.3-10.7-4.1-21.2-5.1-31.9-1-10.9-1-21.9-.5-32.9.3-11.6 3.8-22.7 8.6-33.2 5.7-12.5 13.5-23.8 23-33.6 5.6-5.8 11.9-11 18.2-16.1 8.6-6.8 17.7-12.9 28.2-16.5 5.1-1.9 10.4-3 15.7-4.5zm96.4 221.9c-.4.9-1.2 2-1.1 3 .5 7.6 1.2 15.2 2 22.7.2 2.1 0 4.8 3.3 5.5 3.3.7 6.6 1.8 9.9 2.6.3.1.9-.1 1.1-.4 3.8-4.8 7.5-9.6 10.9-14-8.4-6.1-17.1-12.6-26.1-19.4zm-23.1-42.5v6.3c1.9-2 3.6-3.9 5.3-5.7-1.7-.2-3.5-.4-5.3-.6z" />
    </svg>
  </div>
</div>
```

背景が移動しながら、アリスが回転し、回転のオフセットで色が変化することに注目してください。このチュートリアルでは、アリスのみに焦点を当てます。コードブロック内の "Play" をクリックすると、ソースコード全体を見ることができます。アリスのアニメーションを制御する簡単な CSS は次のとおりです。

```css live-sample___animations_css_version
#alice {
  animation: alice-tumbling infinite 3s linear;
}

@keyframes alice-tumbling {
  0% {
    color: black;
    transform: rotate(0) translate3d(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: black;
    transform: rotate(360deg) translate3d(-50%, -50%, 0);
  }
}
```

```css hidden live-sample___animations_css_version
#tunnel {
  animation: tunnel-fly 1s linear infinite;
}

@keyframes tunnel-fly {
  100% {
    transform: translate3d(0, -300px, 0);
  }
}
```

```css hidden live-sample___animations_css_version live-sample___animations_api_version
#alice {
  color: #431236;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: rotate(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  will-change: transform, color;
}

path {
  fill: currentColor;
}

#tunnel {
  background:
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-left.svg")
      repeat-y,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-right.svg")
      repeat-y 100% 100%,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-specks.png"),
    #6c373f;
  margin: 0 auto;
  height: calc(100% + 300px);
  width: 60%;
  min-width: 400px;
  backface-visibility: hidden;
  will-change: transform;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: black;
}

html,
body {
  height: 100%;
}
```

これによって、アリスの色とトランスフォーム回転が 3 秒間にわたって一定に（線形で）変化し、それを無限にループします。{{cssxref("@keyframes")}} ブロックで、各ループの 30%（約 0.9 秒）でアリスの色が黒から濃いワイン色に変わり、ループが終わるときにもとに戻ることが分かります。

### JavaScript への移行

次にウェブアニメーション API を利用して同じアニメーションを作成してみましょう。

#### キーフレームの表現

最初に必要なことは、[Keyframe オブジェクト](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats) を作成することです。これは CSS の {{cssxref("@keyframes")}} ブロックに相当します。

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

ここでは、複数のオブジェクトを含む配列を使用しています。それぞれのオブジェクトは元の CSS のキーを表します。しかし、CSS とは異なり、ウェブアニメーション API は各キーがアニメーションに沿って現れるパーセント値を明示的に指示する必要はありません。与えたキーの数に応じて、アニメーションが自動的に等分割されます。つまり、3 つのキーを持つ Keyframe オブジェクトは、特に指定がない限り、アニメーションの各ループの 50% で中央のキーを再生するということです。

キーのオフセットを他のキーから明示的に設定する場合は、カンマで CSS キーの宣言と区切ったオフセットを直接オブジェクトに指定できます。上記の例では、色の変化に対してアリスの色が 30%（50% ではない）で変化するために `offset: 0.3` を指定しています。

少なくとも 2 つのキーフレーム（アニメーションシーケンスの開始状態・終了状態の 2 つを示す）を指定する必要があります。ブラウザーによっては、キーフレームリストの項目が 1 つしかない場合、更新されるまで {{domxref("Element.animate()")}} で `NotSupportedError` {{domxref("DOMException")}} が発生することがあります。

という具合に、キーにオフセットを指定しない限り、キーはデフォルトで等間隔に配置されます。便利でしょう？

#### タイミングプロパティの表現

アリスのアニメーションの値に対応するタイミングプロパティのオブジェクトも作成する必要があります。

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

ここで、CSS での数値の表現方法とはいくらかの違いがあることにお気づきでしょう。

- 1 つ目は間隔時間はミリ秒単位で表現されています。3 秒という指定ではなく、3000 ミリ秒です。{{domxref("Window.setTimeout", "setTimeout()")}} や {{domxref("Window.requestAnimationFrame()")}} と同じように、ウェブアニメーション API はミリ秒でしか値を取りません。
- もう 1 つは `iteration-count` ではなく `iterations` ということです。

> [!NOTE]
> CSS アニメーションで使用される用語とウェブアニメーションで利用される用語とではいくつか小さな違いがあります。例えば、ウェブアニメーションは `"infinite"` という文字列を利用しない代わりに JavaScript の予約語である `Infinity` を利用します。そして、 `timing-function` の代わりに `easing` を利用します。ここでは `easing` の値を挙げていません。デフォルトの {{cssxref("animation-timing-function")}} が簡単な `ease` である CSS アニメーションとは異なり、ウェブアニメーション API ではデフォルトのイージングは `linear` （線形）であるためです。

#### パーツをまとめる

次は {{domxref("Element.animate()")}} メソッドを利用して今までの 2 つの要素をまとめます。

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

アニメーションが開始されます。

```js hidden live-sample___animations_api_version
document
  .getElementById("tunnel")
  .animate(
    [
      { transform: "translate3d(0, 0, 0)" },
      { transform: "translate3d(0, -300px, 0)" },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    },
  );
```

{{EmbedLiveSample("animations_api_version", "", 300)}}

`animate()` メソッドは、CSS でアニメーションできる DOM 要素に対して呼び出すことができます。そして、それはいくつかの方法で書くことが出来ます。キーフレームとタイミングプロパティを作成する代わりに、次のように直接渡すことが出来ます。

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

さらに、アニメーションの間隔時間のみを指定し、繰り返さないアニメーションを指定する場合、ミリ秒だけを指定することができます（デフォルトではアニメーションを 1 回だけ実行します）。

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  3000,
);
```

## play(), pause(), reverse(), updatePlaybackRate() を用いた再生制御

ウェブアニメーション API を使用して CSS アニメーションを作成することが可能ですが、API が本当に役立つ時はアニメーションの再生を制御するときです。ウェブアニメーション API は、再生を制御するための便利ないくつかのメソッドを提供しています。Follow the White Rabbit のサンプルで、アニメーションの一時停止と再生について見ていきましょう。

この例では、白いウサギには、ウサギの穴の中へ降りていくアニメーションが設定されています。このアニメーションは、ユーザーがウサギをクリックしたときにのみ発生します。

```html hidden live-sample___follow_the_white_rabbit
<div class="wrapper">
  <div class="page">
    <div class="background"></div>
    <div id="rabbit">ウサギの耳をクリックしてください！</div>
    <div class="foreground"></div>
    <p>
      ちょうどそのとき、彼女は彼が巨大な木の根の間の穴に飛び込んでいくのを見ました。
    </p>
  </div>
</div>
```

```css hidden live-sample___follow_the_white_rabbit
#rabbit {
  background: url("/shared-assets/images/examples/web-animations/park5_rabbit.png")
    0 0 / 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 15%;
  left: 60%;
  width: 14.64844%;
  padding-top: 31.00586%;
}

body {
  background: black;
}
.wrapper {
  max-width: 133.33vh;
  margin: 0 auto;
}
.page {
  background: #431236;
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  position: relative;
  text-indent: 100%;
  white-space: nowrap;
}

.foreground {
  height: 100%;
  background: url("/shared-assets/images/examples/web-animations/bg_park5_2.png")
    no-repeat 100% 100% / 100% auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.background {
  background: url("/shared-assets/images/examples/web-animations/bg_park5_1.png")
    no-repeat 0 0 / 100% auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
```

### アニメーションの一時停止と再生

`animate()` メソッドを使用すれば、いつものようにウサギにアニメーションを適用できます。

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

{{domxref("Element.animate()")}} メソッドは、呼び出されると直ちに実行されます。ユーザーがクリックする前にケーキが自分自身を食べてしまわないようにするため、定義後に同様に {{domxref("Animation.pause()")}} を呼び出します。
<!-- この段落は英文の誤りをそのまま翻訳しています。 -->

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> あるいは、{{domxref("Animation/Animation", "Animation()")}} コンストラクターを使用して `rabbitDownAnimation` を定義することもできます。その場合、`play()` を呼び出すまで再生は開始されません。

これで、準備が整ったらいつでも {{domxref("Animation.play()")}} メソッドを使用して実行できるようになりました。具体的には、これをクリック操作とリンクさせたいと思います。これを実現するには、次のようにします。

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

ユーザーがウサギをクリックするか、指でタップすると、`downHeGoes` を呼び出して、すべてのアニメーションを再生することが可能になりました。

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### その他の便利なメソッド

一時停止と再生に加えて、次のアニメーションメソッドを利用することが出来ます。

- {{domxref("Animation.finish()")}} はアニメーションの最後までスキップします。
- {{domxref("Animation.cancel()")}} はアニメーションを中止し、その効果を削除します。
- {{domxref("Animation.reverse()")}} を実行すると ({{domxref("Animation.playbackRate")}} に負数を設定し、アニメーションの再生方向を逆方向にします。

まず `playbackRate` を見てみましょう。playbackRate を府にするとはアニメーションを逆に実行させます。
『鏡の国のアリス』の [Through the Looking-Glass](https://en.wikipedia.org/wiki/Through_the_Looking-Glass) では、アリスは、その場所に留まるためには走り続けなければならない世界へと旅立ちます。「赤の女王のレース」の例では、アリスと赤の女王はその場所に留まるために走っています。

```html hidden live-sample___red_queen_race
<div class="wrapper">
  <div class="sky"></div>
  <div class="earth">
    <div id="red-queen-and-alice">
      <img
        id="red-queen-and-alice-sprite"
        src="/shared-assets/images/examples/web-animations/sprite_running-alice-queen_small.png"
        srcset="
          /shared-assets/images/examples/web-animations/sprite_running-alice-queen.png 2x
        "
        alt="Alice and the Red Queen running to stay in place." />
    </div>
  </div>
  <div class="scenery" id="foreground1">
    <img
      id="palm3"
      src="/shared-assets/images/examples/web-animations/palm3_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm3.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="foreground2">
    <img
      id="bush"
      src="/shared-assets/images/examples/web-animations/bush_small.png"
      srcset="/shared-assets/images/examples/web-animations/bush.png 2x"
      alt="" />
    <img
      id="w_rook_upright"
      src="/shared-assets/images/examples/web-animations/w_rook_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/w_rook_upright.png 2x
      "
      alt="" />
  </div>
  <div class="scenery" id="background1">
    <img
      id="r_pawn_upright"
      src="/shared-assets/images/examples/web-animations/r_pawn_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/r_pawn_upright.png 2x
      "
      alt="" />
    <img
      id="w_rook"
      src="/shared-assets/images/examples/web-animations/w_rook_small.png"
      srcset="/shared-assets/images/examples/web-animations/w_rook.png 2x"
      alt="" />
    <img
      id="palm1"
      src="/shared-assets/images/examples/web-animations/palm1_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm1.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="background2">
    <img
      id="r_pawn"
      src="/shared-assets/images/examples/web-animations/r_pawn_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_pawn.png 2x"
      alt="" />

    <img
      id="r_knight"
      src="/shared-assets/images/examples/web-animations/r_knight_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_knight.png 2x"
      alt="" />
    <img
      id="palm2"
      src="/shared-assets/images/examples/web-animations/palm2_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm2.png 2x"
      alt="" />
  </div>
</div>
```

```css hidden live-sample___red_queen_race
* {
  user-select: none;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scenery {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
}

#foreground1,
#foreground2 {
  z-index: 1;
}

#foreground2,
#background2 {
  transform: translateX(100%);
}

#palm3 {
  top: 0;
  left: 10%;
}

#w_rook_upright {
  top: 30%;
  left: 75%;
}

#r_pawn {
  top: 10%;
  left: 15%;
}

#w_rook {
  top: 10%;
  left: 80%;
}

#r_pawn_upright {
  top: 5%;
  left: 30%;
}

#r_knight {
  top: 0;
  left: 70%;
}

#palm2 {
  top: -15%;
  left: 90%;
}

#palm1 {
  top: -15%;
  left: 40%;
}

#bush {
  top: 55%;
  left: 20%;
}

#red-queen-and-alice {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 80%;
  max-width: 450px;
  z-index: 1;
}

#red-queen-and-alice::before {
  content: " ";
  display: block;
  padding-top: 87%;
}

#red-queen-and-alice img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.sky,
.earth {
  position: absolute;
  left: 0;
  height: 50vh;
  width: 100%;
}

.earth {
  background: #eb125d
    url("/shared-assets/images/examples/web-animations/bg_earth.jpg") repeat-x 0
    0 / 100% auto;
  bottom: 0;
}

.sky {
  background: #246e89
    url("/shared-assets/images/examples/web-animations/bg_sky.jpg") repeat-x
    100% 100% / auto 100%;
  top: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
```

```js hidden live-sample___red_queen_race
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");

const redQueenAliceSprite = document.getElementById(
  "red-queen-and-alice-sprite",
);

/* Background animations */
const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

const background1Movement = background1.animate(
  sceneryFrames,
  sceneryTimingBackground,
);
background1Movement.currentTime =
  background1Movement.effect.getComputedTiming().duration / 2;

const background2Movement = background2.animate(
  sceneryFrames,
  sceneryTimingBackground,
);

const foreground1Movement = foreground1.animate(
  sceneryFrames,
  sceneryTimingForeground,
);
foreground1Movement.currentTime =
  foreground1Movement.effect.getComputedTiming().duration / 2;

const foreground2Movement = foreground2.animate(
  sceneryFrames,
  sceneryTimingForeground,
);

const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];

const redQueenAlice = redQueenAliceSprite.animate(spriteFrames, {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity,
});
```

{{EmbedLiveSample("red_queen_race", "", 400)}}

小さな子どもは疲れやすいので、おもちゃのチェスの駒と違って、アリスは常に減速しています。これはアニメーションの `playbackRate` を減少させることで実現します。`updatePlaybackRate()` を使用することと、`playbackRate` を直接設定することなく、スムーズに更新することができます。

```js live-sample___red_queen_race
setInterval(() => {
  // 再生レートが 0.4 を下回らないようにする
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

しかし、クリックまたはタップして彼女らを励ますと、`playbackRate` を乗算しているのでスピードアップします。

```js live-sample___red_queen_race
function goFaster() {
  // ただし、画面をクリックまたはタップすれば、処理を早めることが可能
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

また、背景要素にはクリックまたはタップしたときに影響を受ける `playbackRate` を設定しています。それらの再生レートは、下記に示すアリスの再生レートに基づいて算出されています。アリスとレッドクイーンを 2 倍早く走らせたらどうなると思いますか？速度を落とすとどうなると思いますか？

```js live-sample___red_queen_race
/* アリスはすぐに疲れてしまう！ 
  数秒ごとに、再生速度を少し縮小して、動きを少し遅くするようにする
*/
const sceneries = [
  foreground1Movement,
  foreground2Movement,
  background1Movement,
  background2Movement,
];

function adjustBackgroundPlayback() {
  // アリスと赤の女王が 0.8 ～ 1.2 の速度で走っている場合、
  // 背景は移動しない。
  // しかし、0.8 を下回ると、背景が後ろにずれていく。
  if (redQueenAlice.playbackRate < 0.8) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(-redQueenAlice.playbackRate / 2);
    });
  } else if (redQueenAlice.playbackRate > 1.2) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(redQueenAlice.playbackRate / 2);
    });
  } else {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(0);
    });
  }
}
adjustBackgroundPlayback();
```

## アニメーションのスタイル維持

要素をアニメーションさせるとき、アニメーションが完了した後に、最終的な状態を維持したいことがよくあります。このために、アニメーションの [fill モード](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill)を `forwards` に設定するという方法がときどき使われます。しかし、2 つの理由から、アニメーションの効果を無期限に維持するために fill モードを使用することは推奨されません。

- アニメーションがアクティブなままであり、ブラウザーがその状態を維持しなければならないため、アニメーションが終了してもアニメーションがリソースを消費し続けます。なお、これは[満了したアニメーションの自動削除](#満了したアニメーションの自動削除)をすることでいくらか緩和されます。
- アニメーションで適用されたスタイルは、指定されたスタイルより[カスケードにおいて高い優先度](/ja/docs/Web/CSS/Guides/Cascade/Introduction#カスケード順)を持つため、必要に応じて上書きすることが困難になる場合があります。

より良い方法は、{{domxref("Animation.commitStyles()")}} メソッドを使うことです。これはこのアニメーションの現在のスタイルを、対象要素の [`style`](/ja/docs/Web/HTML/Reference/Global_attributes/style) 属性に書き込むので、その後は通常にスタイル設定しなおすことができます。

## 満了したアニメーションの自動削除

同じ要素に多数のアニメーションを発生させることが可能です。それらが不定である場合（つまり前方満了）、アニメーションリストが巨大になり、メモリーリークが発生する可能性があります。このためブラウザーは、新しいアニメーションに置き換わった後、開発者が明示的にアニメーションを残すように指定しない限り、満了したアニメーションを自動的に削除します。

アニメーションは、以下がすべて真の場合に削除されます。

- アニメーションが満了している（`fill` は前方再生であれば `forwards`、逆再生の場合は `backwards`、両方の場合は `both` です）。
- アニメーションが完了している。（`fill` のため、まだ有効であることに注意してください。）
- アニメーションのタイムラインが単調に増加している。（これは {{domxref("DocumentTimeline")}} では常に真です。{{cssxref("scroll-timeline")}} のようなタイムラインは逆方向に動作することがあります。）
- アニメーションが CSS のような宣言的なマークアップによって制御されていない。
- アニメーションの {{domxref("AnimationEffect")}} のスタイル設定がすべて、上記の条件をすべて満たす別のアニメーションによって上書きされている。（通常、2 種類のアニメーションが同じ要素の同じスタイルプロパティを設定した場合、最後に作成されたアニメーションが他のアニメーションを上書きします。）

最初の 4 つの条件は、JavaScript コードによる介入なしに、アニメーションの効果が変化したり終わったりしないことを保証します。最後の条件は、アニメーションが実際に何かの要素のスタイル設定に影響しないことを保証します。

アニメーションが自動的に解除されると、そのアニメーションに {{domxref("animation/remove_event", "remove")}} イベントが発行されます。

ブラウザーがアニメーションを自動的に削除することを防ぐには、そのアニメーションの {{domxref("Animation.persist", "persist()")}} メソッドを呼び出してください。

アニメーションの {{domxref("Animation.replaceState", "replaceState")}} プロパティは、アニメーションが削除された場合は `removed`、アニメーションに {{domxref("Animation.persist", "persist()")}} が呼び出された場合は `persisted`、そうでない場合は `active` になります。

## アニメーションからの情報の取得

前庭障害のあるユーザーのアクセシビリティを改善するなど、サイト全体のアニメーションを遅くすることを、playbackRate 以外の方法で行うことを想像してみてください。すべての CSS ルールで期間を再計算することなく CSS で全てを行うことは不可能ですが、ウェブアニメーション API では、次の {{domxref("Document.getAnimations")}} メソッドを使用して、次のようにページ上の各アニメーションをループして `playbackRate` を半分にすることができます。

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

ウェブアニメーション API を利用すると、変更する必要があるのは 1 つの小さなプロパティだけです！

CSS アニメーションだけでは難しいのは、他のアニメーションが提供する値に依存するときです。例えばアリスの拡大/縮小ゲームの例では、ケーキの時間について奇妙なことに気づいたかもしれません。

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

ここで何がおこっているか理解するために、アリスのアニメーションを見てみましょう。

```js
const aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

アリスのアニメーションでは、8 秒かけてサイズが半分から 2 倍になります。その後、彼女の効果を停止します。

```js
aliceChange.pause();
```

もしアニメーションの始めに一時停止させたままにしておくと、ボトル全部を飲み干したかのように、半分の大きさから始まることになります。アニメーションの "playhead" を中央に設定し、アニメーションがすでに半分終わっている状態にしたいと思います。{{domxref("Animation.currentTime")}} を 4 秒に設定したいので、次のようにします。

```js
aliceChange.currentTime = 4000;
```

しかし、このアニメーションで作業している間、アリスの再生時間を何度も変更するかもしれません。彼女の `currentTime` を動的に設定すれば、時刻を 2 回更新する必要はないでしょう？実際、aliceChange の {{domxref("Animation.effect")}} プロパティを参照することで、アリスに有効なエフェクトの詳細をすべて格納したオブジェクトを返すことができます。

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` を利用すると、アニメーションのキーフレームとタイミングのプロパティにアクセスできます。`aliceChange.effect.getComputedTiming()` はアリスのタイミングオブジェクトを示します。これには {{domxref("KeyframeEffect.KeyframeEffect", "duration")}} が含まれています。
アニメーションのタイムラインの中間点を取得するには、アリスの再生時間を半分に分割し、通常の身長に設定します。これで、アリスのアニメーションをそれぞれの方向に巻き戻したり再生したりすると、小さくしたり、大きくしたりすることができます。

また、ボトルとケーキの再生時間を設定するときにも同じことが出来ます。

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

これで、3 つのアニメーションがすべて 1 つの再生時間上に繋がり、1 つの場所から簡単に変更することが出来ます。

ウェブアニメーション API を利用して、アニメーションの現在の時刻を把握することも出来ます。ケーキを食べてなくなったり、ボトルが空になったりするとゲームが終了します。アリスが大きすぎてドアを通らなくなるか、小さすぎてドアノブに届かなくなるかはアリスのアニメーションによって表現されプレイヤーの操作に依存します。アリスのアニメーションの {{domxref("Animation.currentTime", "currentTime")}} を取得して、彼女の `activeDuration` で割ることで彼女の大きさを把握できます。

```js
const endGame = () => {
  // アリスのタイムラインの再生位置を取得
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // アリスやその他のアニメーションを停止
  stopPlayingAlice();

  // 3 つのどれに入るかを判断
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // アリスが小さくなる
    // …
  } else if (aliceHeight >= 0.666) {
    // アリスが大きくなる
    // …
  } else {
    // アリスの大きさはあまり変わらない
    // …
  }
};
```

## コールバックとプロミス

CSS アニメーションとトランジションには独自のイベントリスナーがあり、これらはウェブアニメーション API でも利用可能です。

- {{domxref("Animation/finish_event", "onfinish")}} は `finish` イベントハンドラーであり、{{domxref("Animation/finish", "finish()")}} メソッドを使用すると手動で起動することができます。
- {{domxref("Animation/cancel_event", "oncancel")}} は `cancel` イベントハンドラーであり、{{domxref("Animation.cancel", "cancel()")}} メソッドを使用すると起動することができます。

ここでは、ケーキ、ボトル、アリスのコールバックを設定して、`endGame` 関数を起動します。

```js
// ケーキやボトルがなくなった時
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// アリスのアニメーションが終わりに達した時
aliceChange.onfinish = endGame;
```

さらに良いことに、ウェブアニメーション API ではアニメーション終了時に解決されるか、またはキャンセル時に拒否される {{domxref("Animation.finished", "finished")}} プロミスを提供しています。

## まとめ

以上がウェブアニメーション API の基本的な機能です。これで、ブラウザーでのアニメーションという「ウサギの穴に飛び込む」準備ができ、自分自身でアニメーションの実験を書く準備ができたはずです。

## 関連情報

- [不思議の国のアリスの全体](https://codepen.io/collection/nqNJvD) (CodePen) を動作させたり、 フォークやシェアを行うことができます。
- [Element.animate を気にせずにアニメーションする方法](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016): ウェブアニメーション API の背景と、なぜ API が複数のウェブアニメーションメソッドよりもパフォーマンスが高いのかについて説明します。
