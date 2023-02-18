---
title: Web Animations API を利用する
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

Web Animations API は JavaScript を使い、アニメーションを構築したりプレイバックを制御することが出来ます。この記事では「ふしぎの国のアリス」を利用した楽しいデモとチュートリアルで正しい利用方法を説明します。

## Web Animations API との出会い

[Web Animations API](/ja/docs/Web/API/Web_Animations_API) はブラウザ内のアニメーションエンジンを開発者にオープンにして JavaScript で制御します。この API は [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations) と [CSS トランジション](/ja/docs/Web/CSS/CSS_Transitions) の両方の実装基盤となるように設計されており、将来のアニメーション効果への扉を開いた状態にしています。これは現在サポートされているアニメーションを実行する中で、ハックや強制や {{domxref("Window.requestAnimationFrame()")}} を利用しない最もパフォーマンスの高い方法の 1 つです。

Web Animations API を利用すると、インタラクティブなアニメーションをスタイルシートから JavaScript に移管し、表現と動作を分離できます。CSS プロパティを記述したり、再生方向を制御するためにエレメントにクラスを追加するなどの DOM を多用する手法に依存する必要がなくなりました。また、純粋な宣言した CSS とは異なり、JavaScript ではプロパティからアニメーション時間を動的に設定することが出来ます。カスタムされたアニメーションライブラリを構築し、インタラクティブなアニメーションを作るために、Web Animations API が最適なツールになることでしょう。では Web Animations API で何が出来るか説明しましょう。

## ブラウザサポート

この記事で説明する基本的な Web Animations API の機能は、Firefox 48 以降および Chrome 36 以降で標準機能として利用可能です。WebKit と Edge はこの API をそれぞれ TODO リストに移行しましたが、全てのブラウザでサポートされるまで、機能サポートをテストするために追加する [polyfill](https://github.com/web-animations/web-animations-js) があるので必要に応じて追加します。

## Web Animation API を利用して CSS アニメーションを構築する

Web Animations API を学習するためのより身近な手法は、多くの Web 開発者が以前に使用したことのある CSS アニメーションから始めることです。CSS アニメーションには、デモ目的でうまくブレイクダウンする使い慣れた構文を持っています。

### CSS バージョン

アリスがうさぎの穴から落ちてワンダーランドに導かれる様子を示した CSS で書かれている転がり落ちるアニメーションです。(完全な [Codepen のコード](http://codepen.io/rachelnabors/pen/QyOqqW) を参照してください)

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](http://codepen.io/rachelnabors/pen/rxpmJL)

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

これによって、アリスの色とトランスフォーム回転が 3 秒間にわたって一定(線形)で変化し、それを無限にループします。[@keyframes](/ja/docs/Web/CSS/@keyframes) ブロックで、各ループの 30% (約 0.9 秒) でアリスの色が黒から濃いワイン色に変わり、ループが終わるときにもとに戻ることが分かります。

### JavaScript に移行する

次に Web Animations API を利用して同じアニメーションを作成してみましょう。

#### キーフレームを表現する

最初に必要なことは、CSS の [@keyframes](/ja/docs/Web/CSS/@keyframes) ブロックに対応する [Keyframe オブジェクト](/ja/docs/Web/API/Web_Animations_API/Keyframe_Formats) を作成することです。

```js
var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
  { color: '#431236', offset: 0.3},
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];
```

ここでは、複数のオブジェクトを含む配列を使用しています。各オブジェクトは、オリジナルの CSS のキーを表現しています。ただし、CSS とは異なって Web Animations API には、表示される各キーのアニメーションに沿ったパーセンテージを明示的に伝える必要がありません。指定したキーの数に基き、アニメーションが自動的に均等な部分に分割します。つまり、3 つのキーを持つ Keyframe オブジェクトは、特に指定がない限り、アニメーションの各ループの途中で中間キーを 50 %として再生します。

キーのオフセットを他のキーから明示的に設定する場合は、カンマで CSS キーの宣言と区切ったオフセットを直接オブジェクトに指定できます。上記の例では、色の変化に対してアリスの色が 30% (50% ではない) で変化するために `offset: 0.3` を指定しています。

少なくとも 2 つのキーフレームを指定する必要があります。 (アニメーションシーケンスの開始状態・終了状態の 2 つを示す)キーフレームに 1 つのエントリーしか無い場合、{{domxref("Element.animate()")}} は `NotSupportedError` 例外をスローします。

予約すると、キーのオフセットを指定しない限り、デフォルトでキーは等間隔になります。便利でしょうか？

#### タイミング プロパティ の表現

また、アリスのアニメーションの値に対応するタイミングプロパティのオブジェクト ({{domxref("AnimationEffectTimingProperties")}}) を作成する必要があります。

```js
var aliceTiming = {
  duration: 3000,
  iterations: Infinity
}
```

CSS で同等の値の表現方法との違いに気がつくでしょう。

- 1 つ目は間隔時間はミリ秒単位で表現されています。3 秒という指定ではなく、3000 ミリ秒です。{{domxref("WindowTimers.setTimeout()")}} や {{domxref("Window.requestAnimationFrame()")}} と同じように Web Animations API はミリ秒しか値を取りません。
- もう 1 つは `iteration-count` ではなく `iterations` ということです。

> **メモ:** CSS アニメーションで使用される用語と Web Animations で利用される用語とではいくつか小さな違いがあります。例えば、Web Animations は `"infinite"` という文字列を利用しない代わりに JavaScript の予約語である `Infinity` を利用します。そして、 `timing-function` の代わりに `easing` を利用します。デフォルトの [animation-timing-function](/ja/docs/Web/CSS/animation-timing-function) が簡単な `ease` である CSS アニメーションとは異なり、Web Animation API ではデフォルトのイージングは `linear` (線形)であるため、ここではイージング値をリストにしていません。

#### パーツをまとめる

次は {{domxref("Element.animate()")}} メソッドを利用して今までの 2 つの要素をまとめます。

```js
document.getElementById("alice").animate(
  aliceTumbling,
  aliceTiming
)
```

アニメーションの再生が開始されます！([Codepen の完成バージョン](http://codepen.io/rachelnabors/pen/rxpmJL)を参照してください。)

`animate()` メソッドは、CSS でアニメーション化出来る DOM 要素を用いて呼び出し可能です。そして、それはいくつかの方法で書くことが出来ます。キーフレームとタイミングプロパティを作成する代わりに、次のように直接渡すことが出来ます。

```js
document.getElementById("alice").animate(
  [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
    { color: '#431236', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ], {
    duration: 3000,
    iterations: Infinity
  }
);
```

さらに、アニメーションの間隔時間のみを指定し、繰り返さないアニメーションを指定する場合、ミリ秒だけを指定することが出来ます(デフォルトではアニメーションを 1 回だけ繰り返します)

```js
document.getElementById("alice").animate(
  [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' },
    { color: '#431236', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ], 3000);
```

## Play() / pause() / reverse() / playbackRate を使って再生制御する

Web Animation API を使用して CSS アニメーションを作成することが可能ですが、API が本当に役立つ時はアニメーションの再生を制御するときです。Web Animation API は、再生を制御するための便利ないくつかのメソッドを提供しています。アリスが拡大/縮小するゲームでのアニメーションの一時停止と再生を見てみましょう( [Codepen の完全なコード](http://codepen.io/rachelnabors/pen/PNYGZQ)をご覧ください。)
[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

このゲームでは、アリスは小さなボトルから大きなボトルに移動するアニメーションを使用しており、ボトルとカップケーキを使い制御します。どちらにも独自のアニメーションがあります。

### アニメーションの一時停止と再生

アリスのアニメーションについては後で詳しく説明します。まずはカップケーキのアニメーションを見てみましょう。

```js
var nommingCake = document.getElementById('eat-me_sprite').animate(
[
  { transform: 'translateY(0)' },
  { transform: 'translateY(-80%)' }
], {
  fill: 'forwards',
  easing: 'steps(4, end)',
  duration: aliceChange.effect.timing.duration / 2
});
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
var growAlice = function() {

  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();

}
```

ユーザーがマウスを押したままにするか、タッチスクリーン上のケーキを指で押すと、`growAlice` を呼び出してアニメーションを再生できるようにしました。

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### その他の便利なメソッド

一時停止と再生に加えて、次のアニメーションメソッドを利用することが出来ます。

- {{domxref("Animation.finish()")}} はアニメーションの最後までスキップします。
- {{domxref("Animation.cancel()")}} はアニメーションを中止し、そのエフェクトを削除します。
- {{domxref("Animation.reverse()")}} を実行すると ({{domxref("Animation.playbackRate")}} に負数を設定し、アニメーションの再生方向を逆方向にします。

最初に `playbackRate` を見てみましょう。負数の playbackRate はアニメーションを逆に実行させます。アリスがボトルから飲むと彼女は小さくうなります。これは、ボトルが彼女のアニメーションの playbackRate を 1 から -1 に変更するためです。

```js
var shrinkAlice = function() {
  aliceChange.playbackRate = -1;
  aliceChange.play();
}

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

[鏡の国のアリス](https://ja.wikipedia.org/wiki/%E9%8F%A1%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9)では、アリスは走り続けなければならない世界に移動します。レッドクイーンのレースの例では、アリスとレッドクイーンが所定の位置にとどまっています。([Codepen の](http://codepen.io/rachelnabors/pen/PNGGaV) 完全なコードを参照してください。)

[![Alice and the Red Queen race to get to the next square in this game.](red-queen-race_optimized.gif)](http://codepen.io/rachelnabors/pen/PNGGaV)

小さな子どもたちは、オートマトンのチェスのコマとは異なり、疲れやすいのでアリスは常に速度を落としています。彼女のアニメーションの `playbackRate` に衰えを設定することでコードでこれを表現しました。

```js
setInterval( function() {

  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > .4) {
    redQueen_alice.playbackRate *= .9;
  }

}, 3000);
```

しかし、クリックまたはタップして彼らを励ますと、playbackRate を乗算しているのでスピードアップします。

```js
var goFaster = function() {

  redQueen_alice.playbackRate *= 1.1;

}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

また、背景要素にはクリックまたはタップしたときに影響を受ける`playbackRate` を設定しています。アリスとレッドクイーンを 2 倍早く走らせたらどうなると思いますか？速度を落とすとどうなると思いますか？

## アニメーションから情報を取得する

サイト全体のアニメーションを遅くすることで前庭障害のあるユーザーのアクセシビリティを改善するなど、playbackRate を使用する他の方法を想像してみてください。すべての CSS ルールで期間を再計算することなく CSS で全てを行うことは不可能ですが、Web Animations API では次の {{domxref("document.getAnimations()")}} メソッド(まだブラウザーでの完全なサポートではないですが) を使用して次のようにページ上の各アニメーションをループして `playbackRate` を半分にします。

```js
document.getAnimations().forEach(
  function (animation) {
    animation.playbackRate *= .5;
  }
);
```

Web Animations API を利用すると、変更する必要があるのは 1 つの小さなプロパティだけです！

CSS アニメーションだけでは難しいのは、他のアニメーションが提供する値に依存するときです。例えばアリスの拡大/縮小ゲームの例では、ケーキの間隔時間について奇妙な事に気づいたかもしれません。

```js
duration: aliceChange.effect.timing.duration / 2
```

ここで何がおこっているか理解するために、アリスのアニメーションを見てみましょう。

```js
var aliceChange = document.getElementById('alice').animate(
  [
    { transform: 'translate(-50%, -50%) scale(.5)' },
    { transform: 'translate(-50%, -50%) scale(2)' }
  ], {
    duration: 8000,
    easing: 'ease-in-out',
    fill: 'both'
  });
```

アリスのアニメーションでは、8 秒かけてサイズが半分から 2 倍になります。その後、彼女のエフェクトを停止します。

```js
aliceChange.pause();
```

アニメーションの最初に一時停止したままにすると、ボトル全体を既に飲んでいるかのようにフルサイズの半分から始めてしまいます。彼女のアニメーションの "playhead" を中央に設定したいので、彼女は既に半分終わっています。次のようにアリスの {{domxref("Animation.currentTime")}} を 4 秒に設定することでこれを設定することが出来ます。

```js
aliceChange.currentTime = 4000;
```

しかし、アニメーションの作業中にアリスの間隔時間を大幅に変更する可能性があります。アリスの `currentTime` を動的に設定するとよいのではないでしょうか。従って、一度に 2 つの更新を行う必要はありません。実際のところ、aliceChange の {{domxref("Animation.effect")}} プロパティを参照することでこれを実行できます。プロパティはアクティブなエフェクトの全ての詳細を含むオブジェクトを返します。

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

`effect` を利用すると、アニメーションの `keyframe` と `timing` オブジェクトにアクセスできます。`aliceChange.effect.timing` はアリスのタイミングオブジェクト({{domxref("AnimationEffectTimingReadOnly")}}) 型) を示します。これには、{{domxref("AnimationEffectTimingReadOnly.duration")}} も含まれます。
アニメーションのタイムラインの中間点を取得するために、アリスの長さを半分に分割し、通常の身長に設定できます。アリスのアニメーションを逆再生して、どちらの方向にも再生したり、小さくしたり、大きくしたり出来ます！

また、ボトルとケーキの再生時間を設定するときにも同じことが出来ます。

```js
var drinking = document.getElementById('liquid').animate(
[
  { height: '100%' },
  { height: '0' }
], {
  fill: 'forwards',
  duration: aliceChange.effect.timing.duration / 2
});
drinking.pause();
```

これで、3 つのアニメーションすべてが 1 つの間隔時間に繋がり、1 つの場所から簡単に変更することが出来ます。

Web Animation API を利用して、アニメーションの現在の時刻を把握することも出来ます。ケーキを食べてなくなったり、ボトルが空になるとゲームが終了します。アリスが大きすぎてドアを通らなかったり、小さすぎてドアノブに届かなかったかはアリスのアニメーションによって表現されプレイヤーの操作に依存します。アリスのアニメーションの[`currentTime`](/ja-JP/docs/Web/API/Animation/currentTime) を取得して、彼女の `activeDuration` で割ることで彼女の大きさを把握できます。

```js
var endGame = function() {

  // get Alice's timeline's playhead location
  var alicePlayhead = aliceChange.currentTime;
  var aliceTimeline = aliceChange.effect.activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  var aliceHeight = alicePlayhead/aliceTimeline;

  if (aliceHeight <= .333){
    // Alice got smaller!
    ...

  } else if (aliceHeight >= .666) {
    // Alice got bigger!
    ...

  } else {
    // Alice didn't change significantly
    ...

  }
}
```

> **メモ:** `getAnimations()` と `effect` はこの記事執筆時点では完全にサポートされていませんが polyfill は今現在サポートしています。

## コールバックと Promise

CSS アニメーションとトランジションには独自のイベントリスナーがあり、これらは Web Animations API でも利用可能です。

- [`onfinish`](/ja-JP/docs/Web/API/Animation/onfinish) は終了イベントハンドラーであり、[`finish()`](/ja-JP/docs/Web/API/Animation/finish) メソッドを使用して手動でトリガー出来ます。
- [`oncancel`](/ja-JP/docs/Web/API/Animation/oncancel) は `cancel` のイベントハンドラーであり、[`cancel()`](/ja-JP/docs/Web/API/Animation/cancel) メソッドを使用してトリガーできます。

ここでは、ケーキ・ボトル・アリスのコールバックを設定して、`endGame` 関数を起動します。

```js
// When the cake or runs out...
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// ...or Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

さらに良いことに、Web Animations API ではアニメーション終了時に解決されるか、またはキャンセル時に拒否される [`finished`](/ja/docs/Web/API/Animation/finished) プロミスを提供しています。

## まとめ

これらの機能は Web Animations API の基本機能であって、その殆どは Firefox と Chrome の最新バージョンで既にサポートされています。これで、ブラウザ上で「うさぎの穴を飛び降りる」アニメーション化の準備は整い、独自のアニメーション実験を作成する準備が出来ました。API を使用して共有したい場合は、#WAAPI ハッシュタグを使ってみてください。サポートのつながりによっては、さらなる機能をカバーするチュートリアルを書いていくのでチェックしてください！

## 参考

- [Codepen の不思議の国のアリス](http://codepen.io/collection/bpEza/) を使い、フォーク・シェアしてください。
- [Element.animate を気にしないようにアニメーションする方法](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/)：Web Animations API の作られた背景・他のアニメーション手法よりパフォーマンスが優れている理由を説明した秀逸な記事です。
- [web-animations-js](https://github.com/web-animations/web-animations-js) ： Web Animations API の polyfill です。
