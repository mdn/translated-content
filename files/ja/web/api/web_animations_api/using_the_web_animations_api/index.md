---
title: ウェブアニメーション API の使用
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{DefaultAPISidebar("Web Animations")}}

ウェブアニメーション API により、JavaScript でアニメーションを構築したり、再生を制御したりすることができます。この記事では「ふしぎの国のアリス」を利用した楽しいデモとチュートリアルで正しい利用方法を説明します。

## ウェブアニメーション API との出会い

[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) は、ブラウザー内のアニメーションエンジンを開発者に効果しい、JavaScript で操作します。この API は [CSS アニメーション](/ja/docs/Web/CSS/CSS_animations)と [CSS トランジション](/ja/docs/Web/CSS/CSS_transitions)の両方の実装基盤となるように設計されており、将来のアニメーション効果への扉を開いた状態にしています。これは、ハックや強制、{{domxref("Window.requestAnimationFrame()")}} なしで、ブラウザーに自分自身で内部最適化をさせる、ウェブ上でアニメーションするためのほとんどのパフォーマンスの高い方法の 1 つです。

ウェブアニメーション API を使うと、インタラクティブなアニメーションをスタイルシートから JavaScript に移し、表示と動作を分離することができます。再生方向を制御するために、CSS プロパティを書いたり、要素にクラスをスコープしたりといった、DOM を酷使する技法に頼る必要はなくなりました。また、純粋な宣言型の CSS とは異なり、JavaScript ではプロパティから継続時間まで動的に値を設定することもできます。カスタムアニメーションライブラリーを作成したり、対話するアニメーションを作成したりするのに、ウェブアニメーション API は最適かもしれません。何ができるか見てみましょう！

## ウェブアニメーション API を利用して CSS アニメーションを構築する

ウェブアニメーション API を学習するためのより身近な手法は、多くのウェブ開発者が以前に使用したことのある CSS アニメーションから始めることです。CSS アニメーションには馴染みのある構文があり、そのためデモ用にうまく分解することができます。

### CSS バージョン

アリスがうさぎの穴から落ちてワンダーランドに導かれる様子を示した CSS で書かれている転がり落ちるアニメーションです（完全な [Codepen のコード](https://codepen.io/rachelnabors/pen/QyOqqW)を参照してください）。

[![ウサギの穴に転がり落ちるアリス。](tumbling-alice_optimized.gif)](https://codepen.io/rachelnabors/pen/rxpmJL)

背景が移動しながら、アリスが回転し、回転からのオフセットで色が変化することに注目してください。このチュートリアルでは、アリスのみに焦点を当てます。アリスのアニメーションを制御する簡単な CSS は次のとおりです。

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

これによって、アリスの色とトランスフォーム回転が 3 秒間にわたって一定に（線形で）変化し、それを無限にループします。[@keyframes](/ja/docs/Web/CSS/@keyframes) ブロックで、各ループの 30%（約 0.9 秒）でアリスの色が黒から濃いワイン色に変わり、ループが終わるときにもとに戻ることが分かります。

### JavaScript への移行

次にウェブアニメーション API を利用して同じアニメーションを作成してみましょう。

#### キーフレームの表現

最初に必要なことは、CSS の [@keyframes](/ja/docs/Web/CSS/@keyframes) ブロックに対応する [Keyframe オブジェクト](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats) を作成することです。

```js
const aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

ここでは、複数のオブジェクトを含む配列を使用しています。それぞれのオブジェクトは元の CSS のキーを表します。しかし、CSS とは異なり、ウェブアニメーション API は各キーがアニメーションに沿って現れるパーセント値を明示的に指示する必要はありません。与えたキーの数に応じて、アニメーションが自動的に等分割されます。つまり、3 つのキーを持つ Keyframe オブジェクトは、特に指定がない限り、アニメーションの各ループの 50% で中央のキーを再生するということです。

キーのオフセットを他のキーから明示的に設定する場合は、カンマで CSS キーの宣言と区切ったオフセットを直接オブジェクトに指定できます。上記の例では、色の変化に対してアリスの色が 30%（50% ではない）で変化するために `offset: 0.3` を指定しています。

少なくとも 2 つのキーフレーム（アニメーションシーケンスの開始状態・終了状態の 2 つを示す）を指定する必要があります。ブラウザーによっては、キーフレームリストの項目が 1 つしかない場合、更新されるまで {{domxref("Element.animate()")}} で `NotSupportedError` {{domxref("DOMException")}} が発生することがあります。

という具合に、キーにオフセットを指定しない限り、キーは既定で等間隔に配置されます。便利でしょう？

#### タイミングプロパティの表現

アリスのアニメーションの値に対応するタイミングプロパティのオブジェクトも作成する必要があります。

```js
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

CSS にこける同等の値の表し方とは異なる形で表現されていることにお気づきでしょう。

- 1 つ目は間隔時間はミリ秒単位で表現されています。3 秒という指定ではなく、3000 ミリ秒です。{{domxref("setTimeout()")}} や {{domxref("Window.requestAnimationFrame()")}} と同じように、ウェブアニメーション API はミリ秒でしか値を取りません。
- もう 1 つは `iteration-count` ではなく `iterations` ということです。

> **メモ:** CSS アニメーションで使用される用語とウェブアニメーションで利用される用語とではいくつか小さな違いがあります。例えば、ウェブアニメーションは `"infinite"` という文字列を利用しない代わりに JavaScript の予約語である `Infinity` を利用します。そして、 `timing-function` の代わりに `easing` を利用します。既定の [animation-timing-function](/ja/docs/Web/CSS/animation-timing-function) が簡単な `ease` である CSS アニメーションとは異なり、Web Animation API ではデフォルトのイージングは `linear` (線形)であるため、ここではイージング値をリストにしていません。

#### パーツをまとめる

次は {{domxref("Element.animate()")}} メソッドを利用して今までの 2 つの要素をまとめます。

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

アニメーションの再生が開始されます（[Codepen の完成バージョン](https://codepen.io/rachelnabors/pen/rxpmJL)を参照してください）。

`animate()` メソッドは、CSS でアニメーションできる DOM 要素に対して呼び出すことができます。そして、それはいくつかの方法で書くことが出来ます。キーフレームとタイミングプロパティを作成する代わりに、次のように直接渡すことが出来ます。

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  }
);
```

さらに、アニメーションの間隔時間のみを指定し、繰り返さないアニメーションを指定する場合、ミリ秒だけを指定することができます（既定ではアニメーションを 1 回だけ実行します）。

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000
);
```

## play(), pause(), reverse(), updatePlaybackRate() を用いた再生制御

ウェブアニメーション API を使用して CSS アニメーションを作成することが可能ですが、API が本当に役立つ時はアニメーションの再生を制御するときです。ウェブアニメーション API は、再生を制御するための便利ないくつかのメソッドを提供しています。アリスが拡大/縮小するゲームで、アニメーションの一時停止と再生を見てみましょう（[Codepen の完全なコード](https://codepen.io/rachelnabors/pen/PNYGZQ)をご覧ください）。

[![アリスと大きくなったり小さくなったりするゲーム](growing-shrinking_article_optimized.gif)](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

このゲームでは、アリスは小さくなったり大きくなったりするアニメーションがあり、ボトルとカップケーキで制御します。どちらにも独自のアニメーションがあります。

### アニメーションの一時停止と再生

アリスのアニメーションについては後で詳しく説明します。まずはカップケーキのアニメーションを見てみましょう。

```js
const nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.getComputedTiming().duration / 2,
    }
  );
```

{{domxref("Element.animate()")}} メソッドは、呼び出された直後に実行されます。ユーザーがクリックする前にケーキが食べられないように、次のように定義された {{domxref("Animation.pause()")}} をすぐに呼び出します。

```js
nommingCake.pause();
```

{{domxref("Animation.play()")}} メソッドを用いて準備出来たらいつでもアニメーションを実行できます。

```js
nommingCake.play();
```

具体的には、カップケーキが食べられるにつれて、アリスのアニメーションにリンクしてアリスが大きくなるようにします。

```js
const growAlice = () => {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

ユーザーがマウスを押したままにするか、指でタッチ画面上のケーキを押すと、`growAlice` を呼び出してアニメーションを再生できるようにしました。

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### その他の便利なメソッド

一時停止と再生に加えて、次のアニメーションメソッドを利用することが出来ます。

- {{domxref("Animation.finish()")}} はアニメーションの最後までスキップします。
- {{domxref("Animation.cancel()")}} はアニメーションを中止し、その効果を削除します。
- {{domxref("Animation.reverse()")}} を実行すると ({{domxref("Animation.playbackRate")}} に負数を設定し、アニメーションの再生方向を逆方向にします。

最初に `playbackRate` を見てみましょう。playbackRate を府にするとはアニメーションを逆に実行させます。アリスがボトルから飲むと彼女は小さくなります。これは、ボトルが彼女のアニメーションの playbackRate を 1 から -1 に変更するためです。

```js
const shrinkAlice = () => {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

[鏡の国のアリス](https://ja.wikipedia.org/wiki/%E9%8F%A1%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9)では、アリスは走り続けなければならない世界に移動します。レッドクイーンのレースの例では、アリスとレッドクイーンが所定の位置にとどまっています（[Codepen の](https://codepen.io/rachelnabors/pen/PNGGaV) 完全なコードを参照してください）。

[![アリスと赤の女王が次のマスを取得するために競争します。](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

小さな子どもは疲れやすいので、おもちゃのチェスの駒と違って、アリスは常に減速しています。これはアニメーションの `playbackRate` を減少させることで実現します。`updatePlaybackRate()` を使用することと、playbackRate を直接設定することなく、スムーズに更新することができます。

```js
setInterval(() => {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 0.9);
  }
}, 3000);
```

しかし、クリックまたはタップして彼女らを励ますと、playbackRate を乗算しているのでスピードアップします。

```js
const goFaster = () => {
  redQueen_alice.updatePlaybackRate(redQueen_alice.playbackRate * 1.1);
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

また、背景要素にはクリックまたはタップしたときに影響を受ける `playbackRate` を設定しています。アリスとレッドクイーンを 2 倍早く走らせたらどうなると思いますか？速度を落とすとどうなると思いますか？

## アニメーションのスタイル維持

要素をアニメーションさせるとき、アニメーションが完了した後に、最終的な状態を維持したいことがよくあります。このために、アニメーションの [fill モード](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect#fill)を `forwards` に設定するという方法がときどき使われます。しかし、2 つの理由から、アニメーションの効果を無期限に維持するために fill モードを使用することは推奨されません。

- アニメーションがアクティブなままであり、ブラウザーがその状態を維持しなければならないため、アニメーションが終了してもアニメーションがリソースを消費し続けます。なお、これは[満了したアニメーションの自動削除](#満了したアニメーションの自動削除)をすることでいくらか緩和されます。
- アニメーションで適用されたスタイルは、指定されたスタイルより[カスケードにおいて高い優先度](/ja/docs/Web/CSS/Cascade#カスケード順)を持つため、必要に応じて上書きすることが困難になる場合があります。

より良い方法は、{{domxref("Animation.commitStyles()")}} メソッドを使うことです。これはこのアニメーションの現在のスタイルを、対象要素の [`style`](/ja/docs/Web/HTML/Global_attributes#style) 属性に書き込むので、その後は通常にスタイル設定しなおすことができます。

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

アニメーションの {{domxref("animation.replaceState")}} プロパティは、アニメーションが削除された場合は `removed`、アニメーションに {{domxref("Animation.persist", "persist()")}} が呼び出された場合は `persisted`、そうでない場合は `active` になります。

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
document.getElementById("eat-me_sprite").animate([], {
  duration: aliceChange.effect.timing.duration / 2,
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
    }
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

`effect` を利用すると、アニメーションのキーフレームとタイミングのプロパティにアクセスできます。`aliceChange.effect.getComputedTiming()` はアリスのタイミングオブジェクトを示します。これには [`duration`](/ja/docs/Web/API/KeyframeEffect/KeyframeEffect) が含まれています。
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

ウェブアニメーション API を利用して、アニメーションの現在の時刻を把握することも出来ます。ケーキを食べてなくなったり、ボトルが空になったりするとゲームが終了します。アリスが大きすぎてドアを通らなくなるか、小さすぎてドアノブに届かなくなるかはアリスのアニメーションによって表現されプレイヤーの操作に依存します。アリスのアニメーションの [`currentTime`](/ja/docs/Web/API/Animation/currentTime) を取得して、彼女の `activeDuration` で割ることで彼女の大きさを把握できます。

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

> **メモ:** `getAnimations()` と `effect` は、この記事を書いている時点ではすべてのブラウザーで対応しているわけではありませんが、ポリフィルでは対応しています。

## コールバックとプロミス

CSS アニメーションとトランジションには独自のイベントリスナーがあり、これらはウェブアニメーション API でも利用可能です。

- [`onfinish`](/ja/docs/Web/API/Animation/finish_event) は終了イベントハンドラーであり、[`finish()`](/ja/docs/Web/API/Animation/finish) メソッドを使用すると手動で起動することができます。
- [`oncancel`](/ja/docs/Web/API/Animation/cancel_event) は `cancel` のイベントハンドラーであり、[`cancel()`](/ja/docs/Web/API/Animation/cancel) メソッドを使用すると起動することができます。

ここでは、ケーキ、ボトル、アリスのコールバックを設定して、`endGame` 関数を起動します。

```js
// ケーキやボトルがなくなった時
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// アリスのアニメーションが終わりに達した時
aliceChange.onfinish = endGame;
```

さらに良いことに、ウェブアニメーション API ではアニメーション終了時に解決されるか、またはキャンセル時に拒否される [`finished`](/ja/docs/Web/API/Animation/finished) プロミスを提供しています。

## まとめ

以上がウェブアニメーション API の基本的な機能です。これで、ブラウザーでのアニメーションという「ウサギの穴に飛び込む」準備ができ、自分自身でアニメーションの実験を書く準備ができたはずです。

## 関連情報

- [不思議の国のアリスの全体](https://codepen.io/collection/nqNJvD) (CodePen) を動作させたり、 フォークやシェアを行うことができます。
- [Element.animate を気にせずにアニメーションする方法](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016): ウェブアニメーション API の背景と、なぜ API が複数のウェブアニメーションメソッドよりもパフォーマンスが高いのかについて説明します。
