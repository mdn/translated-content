---
title: ウェブオーディオの空間化の基本
slug: Web/API/Web_Audio_API/Web_audio_spatialization_basics
l10n:
  sourceCommit: 10b342385644e822d123694ad3bc8c2ca9abb2dc
---

{{DefaultAPISidebar("Web Audio API")}}

ウェブオーディオ API には、豊富なサウンド処理（他にも）オプションがありますが、例えば、 3D ゲーム内で音源の周りを移動する際のパンニングのように、リスナーが音源の周りを移動する際の音の違いをエミュレートする機能も含まれています。
これを公式には**空間化**と呼び、この記事ではそのようなシステムの実装方法の基本に応じた説明をします。

## 空間化の基本

ウェブオーディオでは、複雑な 3D 空間化は {{domxref("PannerNode")}} を使って作成されます。平たく言えば、音声を 3D 空間に現れるようにするための、たくさんのクールな数学です。
音はあなたの上を飛んだり、あなたの後ろに忍び寄ったり、あなたの前を移動したりします。
そういうことです。

WebXR やゲームには実に有益です。
3D 空間では、リアルな音声を実現する唯一の方法です。 [three.js](https://threejs.org/) や [A-frame](https://aframe.io/) のようなライブラリーは、音を扱うときにその可能性を利用します。
完全な 3D 空間内で音を移動させる必要はなく、 2D 平面だけに限定することもできるので、もし 2D ゲームを計画していたとしても、このノードは探していたノードになるでしょう。

> [!NOTE]
> 単純な左右のステレオパンニング効果を作成する、一般的な用途に対処するために設計された {{domxref("StereoPannerNode")}} もあります。
> これは使用するのがはるかに簡単ですが、明らかに汎用性には遠く及びません。
> 単純なステレオパンニング効果が欲しいだけなら、 [StereoPannerNode の例](https://mdn.github.io/webaudio-examples/stereo-panner-node/) （[ソースコードを参照](https://github.com/mdn/webaudio-examples/tree/main/stereo-panner-node)）で必要なものはすべて得られるでしょう。

## 3D のラジカセのデモ

3D 空間化のデモを行うために、基本的な[ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)ガイドで作成したラジカセデモを変更したものを作成しました。
[3D 空間化デモライブ版](https://mdn.github.io/webaudio-examples/spatialization/)をご覧ください（[ソースコード](https://github.com/mdn/webaudio-examples/tree/main/spatialization)もご覧ください）。

![回転するラジカセと、それを左右や内外に移動させたり回転させたりするコントローラーを備えた単純な UI。](web-audio-spatialization.png)

このデモでは、指定されたコントローラーでラジカセを移動したり回転させたりすることができます。
ラジカセを移動させると、それに応じて音が変化し、部屋の左右に移されるとパンしたり、ユーザーから遠ざかると小さくなったり、スピーカーがユーザーから離れるように回転したりします。
これは `PannerNode` オブジェクトインスタンスの様々なプロパティをその動きに関連して設定することで、空間化をエミュレートしています。

> [!NOTE]
> ヘッドフォンを使用するか、コンピューターに接続するサラウンドサウンドシステムがあれば、はるかに良い経験ができます。

## 音声リスナーの作成

それでは始めましょう！ {{domxref("BaseAudioContext")}}（{{domxref("AudioContext")}} が拡張されたインターフェイス）は [`listener`](/ja/docs/Web/API/BaseAudioContext/listener) プロパティを持っており、これが {{domxref("AudioListener")}} オブジェクトを返します。
これはシーンのリスナー（通常はユーザー）を表します。
空間のどこにいて、どの方向を向いているかを定義します。
それらは静的なままです。 `pannerNode` はリスナーの位置との相対的な音の位置を計算することができます。

コンテキストとリスナーを作成し、リスナーの位置を、部屋を覗き込んでいる人を想定して設定しましょう。

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const listener = audioCtx.listener;

const posX = window.innerWidth / 2;
const posY = window.innerHeight / 2;
const posZ = 300;

listener.positionX.value = posX;
listener.positionY.value = posY;
listener.positionZ.value = posZ - 5;
```

`positionX` を使用してリスナーを左右に、 `positionY` を使用して上下に、 `positionZ` を使用して部屋の内外に移動させることができます。ここでは、ビューポートの中央、ラジカセの少し前にリスナーを設定しています。また、リスナーが向いている方向を設定することもできます。これが既定値ですが、うまく動作します。

```js
listener.forwardX.value = 0;
listener.forwardY.value = 0;
listener.forwardZ.value = -1;
listener.upX.value = 0;
listener.upY.value = 1;
listener.upZ.value = 0;
```

forward プロパティは、リスナーの前方（例えば、彼らが向いている方向）の 3D 座標位置を表し、 up プロパティは、リスナーの頭のてっぺんの 3D 座標位置を表します。
この 2 つを組み合わせることで、うまく方向を設定することができます。

## パナーノードの作成

{{domxref("PannerNode")}} を作成しましょう。これにはたくさんのプロパティがあります。それぞれを見ていきましょう。

始めに、 [`panningModel`](/ja/docs/Web/API/PannerNode/panningModel) を設定します。
これは 3D 空間で音声を位置指定するために使用する空間指定アルゴリズムです。これを設定するには次のようにします。

`equalpower` — 既定で一般的なパンニングの方法

`HRTF` — これは 'Head-related transfer function' の略で、音の位置を把握する際に人間の頭を考慮しているようです。

なかなか賢い。 `HRTF` モデルを使用してみましょう。

```js
const panningModel = "HRTF";
```

[`coneInnerAngle`](/ja/docs/Web/API/PannerNode/coneInnerAngle) と [`coneOuterAngle`](/ja/docs/Web/API/PannerNode/coneOuterAngle) プロパティを指定します。
既定ではどちらも 360 度です。
私たちのラジカセのスピーカーは、より小さな円錐を持つことになり、それを定義することができます。
内側のコーンはゲイン（音量）が常に最大でエミュレートされる場所で、外側のコーンはゲイン（音量）が下がり始める場所です。
ゲインは [`coneOuterGain`](/ja/docs/Web/API/PannerNode/coneOuterGain) の値で縮小します。
後でこれらの引数に使用する値を格納する定数を作成しましょう。

```js
const innerCone = 60;
const outerCone = 90;
const outerGain = 0.3;
```

次の引数は [`distanceModel`](/ja/docs/Web/API/PannerNode/distanceModel) - これは `linear`、`inverse`、`exponential` のいずれかにのみ設定することができます。これらは異なるアルゴリズムで、音声ソースがリスナーから遠ざかるにつれて音量を縮小するために使用します。単純なので `linear` を使用します。

```js
const distanceModel = "linear";
```

ソースとリスナーの間に最大距離 ([`maxDistance`](/ja/docs/Web/API/PannerNode/maxDistance)) を設定することができます。ソースがこの点からさらに移動されても音量は縮小しません。
これは有益なことができます。距離をエミュレートしたいが、音量が落ちてしまうことがあり、それは実際には望むことではないからです。
既定では 10,000 （単位なしの相対値）です。このままでも構いません。

```js
const maxDistance = 10000;
```

参照距離 ([`refDistance`](/ja/docs/Web/API/PannerNode/refDistance)) もあり、これは距離モデルで使用します。
これも既定値 `1` のままでよいでしょう。

```js
const refDistance = 1;
```

次にロールオフ係数　([`rolloffFactor`](/ja/docs/Web/API/PannerNode/rolloffFactor))　があります。パナーがリスナーから離れるにつれて音量がどのくらいすばやく縮小するかです。
既定値は 1 です。動きを誇張するために、もう少し大きくしてみましょう。

```js
const rollOff = 10;
```

これで、ラジカセの位置と方向を設定し始めることができます。
これは、リスナーで行った方法とよく似ています。
これらはインターフェイスのコントロールを使用するときに変更する引数でもあります。

```js
const positionX = posX;
const positionY = posY;
const positionZ = posZ;

const orientationX = 0.0;
const orientationY = 0.0;
const orientationZ = -1.0;
```

Z 方向がマイナス値であることに注意してください。これでラジカセがこちらを向くように設定します。
正の値を設定すると、音はこちら側を向いて設定されます。

パナーノードを作成するために、関連するコンストラクターを使用し、上で設定した引数をすべて渡してみましょう。

```js
const panner = new PannerNode(audioCtx, {
  panningModel,
  distanceModel,
  positionX,
  positionY,
  positionZ,
  orientationX,
  orientationY,
  orientationZ,
  refDistance,
  maxDistance,
  rolloffFactor: rollOff,
  coneInnerAngle: innerCone,
  coneOuterAngle: outerCone,
  coneOuterGain: outerGain,
});
```

## ラジカセの移動

これで、ラジカセを「部屋」の中で移動させることができます。そのために一連のコントロールを設定しました。
左右、上下、前後に移動させたり、回転させたりすることができます。
音の方向は正面のラジカセのスピーカーから決まりますので、ラジカセを回転させると、音の方向を変えることができます。

インターフェイスのためにいくつかのことを設定する必要があります。
最初に、移動させたい要素の参照を取得し、次に実際に移動させるために [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)を設定するときに変更する値の参照を格納します。
最後に、ラジカセがどの方向にも移動しすぎないように、境界を設定します。

```js
const moveControls = document
  .querySelector("#move-controls")
  .querySelectorAll("button");
const boombox = document.querySelector(".boombox-body");

// CSS 座標変換の値
const transform = {
  xAxis: 0,
  yAxis: 0,
  zAxis: 0.8,
  rotateX: 0,
  rotateY: 0,
};

// 境界を設定
const topBound = -posY;
const bottomBound = posY;
const rightBound = posX;
const leftBound = -posX;
const innerBound = 0.1;
const outerBound = 1.5;
```

移動したい方向を引数として受け取り、 CSS 座標変換を変更し、パナーノードプロパティの位置と方向の値を更新し、音を適切に変更する関数を作成してみましょう。

始めるには、左、右、上、下の値を見てみましょう。
これらの軸に沿ってラジカセを移動させ、適切な位置を更新します。

```js
function moveBoombox(direction) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
  }
}
```

移動される値も同じようなものです。

```js
case 'back':
  if (transform.zAxis > innerBound) {
    transform.zAxis -= 0.01;
    panner.positionZ.value += 40;
  }
  break;
case 'forward':
  if (transform.zAxis < outerBound) {
    transform.zAxis += 0.01;
    panner.positionZ.value -= 40;
  }
  break;
```

しかし、回転値は、音を「回転」移動させる必要があるため、少し複雑です。
2　つの軸の値を更新する必要があるだけでなく（例えば、オブジェクトを x 軸の周りに回転させる場合、そのオブジェクトの y 座標と z 座標を更新します）、このためにさらにいくつかの計算をする必要があります。
回転は円であり、その円を描画するために [`Math.sin`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/sin) と [`Math.cos`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/cos) が必要です。

回転率を設定しましょう。これは後で `Math.sin` と `Math.cos` で使用するラジアン範囲の値に変換して、ラジカセを回転させるときの新しい座標を求めるときに使用します。

```js
// 回転定数の設定
const rotationRate = 60; // 数字が大きいほど音の回転が遅い

const q = Math.PI / rotationRate; // 回転の増加（ラジアン単位）
```

これを使用して回転度を計算することもできます。これは CSS 座標変換を作成する際に役立ちます（CSS 座標変換には x 軸と y 軸の両方が必要であることに注意してください）。

```js
// CSS の角度を取得
const degreesX = (q * 180) / Math.PI;
const degreesY = (q * 180) / Math.PI;
```

例えば、左回転を見てみましょう。左回転のために、パンナーの座標の x 方向と z 方向を変えて、 y 軸の周りを移動する必要があります。

```js
case 'rotate-left':
  transform.rotateY -= degreesY;

  // 'left' は y 軸を中心とした回転で、負の角度を加える
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationX.value*Math.sin(q);
  x = panner.orientationZ.value*Math.sin(q) + panner.orientationX.value*Math.cos(q);
  y = panner.orientationY.value;

  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

これは少しわかりにくいですが、 sin と cos を使用して、ラジカセの回転に必要な座標の円運動を作業しているのです。

これはすべての軸に対してできます。更新する正しい位置指定と、正の値か負の値かを選ぶだけです。

```js
case 'rotate-right':
  transform.rotateY += degreesY;
  // 'right' は y 軸を中心とした回転で、正の角度を加える
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationX.value*Math.sin(-q);
  x = panner.orientationZ.value*Math.sin(-q) + panner.orientationX.value*Math.cos(-q);
  y = panner.orientationY.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-up':
  transform.rotateX += degreesX;
  // 'up' は x 軸を中心とした回転で、負の角度を加える
  z = panner.orientationZ.value*Math.cos(-q) - panner.orientationY.value*Math.sin(-q);
  y = panner.orientationZ.value*Math.sin(-q) + panner.orientationY.value*Math.cos(-q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
case 'rotate-down':
  transform.rotateX -= degreesX;
  // 'down' は x 軸を中心とした回転で、正の角度を加える
  z = panner.orientationZ.value*Math.cos(q) - panner.orientationY.value*Math.sin(q);
  y = panner.orientationZ.value*Math.sin(q) + panner.orientationY.value*Math.cos(q);
  x = panner.orientationX.value;
  panner.orientationX.value = x;
  panner.orientationY.value = y;
  panner.orientationZ.value = z;
  break;
```

最後にもうひとつ、 CSS を更新し、マウスイベント用に最後に移動されたときの参照を保持する必要があります。
これが最後の `moveBoombox` 関数です。

```js
function moveBoombox(direction, prevMove) {
  switch (direction) {
    case "left":
      if (transform.xAxis > leftBound) {
        transform.xAxis -= 5;
        panner.positionX.value -= 0.1;
      }
      break;
    case "up":
      if (transform.yAxis > topBound) {
        transform.yAxis -= 5;
        panner.positionY.value -= 0.3;
      }
      break;
    case "right":
      if (transform.xAxis < rightBound) {
        transform.xAxis += 5;
        panner.positionX.value += 0.1;
      }
      break;
    case "down":
      if (transform.yAxis < bottomBound) {
        transform.yAxis += 5;
        panner.positionY.value += 0.3;
      }
      break;
    case "back":
      if (transform.zAxis > innerBound) {
        transform.zAxis -= 0.01;
        panner.positionZ.value += 40;
      }
      break;
    case "forward":
      if (transform.zAxis < outerBound) {
        transform.zAxis += 0.01;
        panner.positionZ.value -= 40;
      }
      break;
    case "rotate-left":
      transform.rotateY -= degreesY;

      // 'left' は y 軸を中心とした回転で、負の角度を加える
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationX.value * Math.sin(q);
      x =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationX.value * Math.cos(q);
      y = panner.orientationY.value;

      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-right":
      transform.rotateY += degreesY;
      // 'right' は y 軸を中心とした回転で、正の角度を加える
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationX.value * Math.sin(-q);
      x =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationX.value * Math.cos(-q);
      y = panner.orientationY.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-up":
      transform.rotateX += degreesX;
      // 'up' は x 軸を中心とした回転で、負の角度を加える
      z =
        panner.orientationZ.value * Math.cos(-q) -
        panner.orientationY.value * Math.sin(-q);
      y =
        panner.orientationZ.value * Math.sin(-q) +
        panner.orientationY.value * Math.cos(-q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
    case "rotate-down":
      transform.rotateX -= degreesX;
      // 'down' は x 軸を中心とした回転で、正の角度を加える
      z =
        panner.orientationZ.value * Math.cos(q) -
        panner.orientationY.value * Math.sin(q);
      y =
        panner.orientationZ.value * Math.sin(q) +
        panner.orientationY.value * Math.cos(q);
      x = panner.orientationX.value;
      panner.orientationX.value = x;
      panner.orientationY.value = y;
      panner.orientationZ.value = z;
      break;
  }

  boombox.style.transform =
    `translateX(${transform.xAxis}px) ` +
    `translateY(${transform.yAxis}px) ` +
    `scale(${transform.zAxis}) ` +
    `rotateY(${transform.rotateY}deg) ` +
    `rotateX(${transform.rotateX}deg)`;

  const move = prevMove || {};
  move.frameId = requestAnimationFrame(() => moveBoombox(direction, move));
  return move;
}
```

## コントロールを接続

制御するボタンの接続は比較的単純です。これで、コントロールのマウスイベントを待ち受けてこの関数を実行し、マウスを離したときにこの関数を停止させることができます。

```js
// 各コントロールについて、ラジカセを移動させ、位置値を変更します。
moveControls.forEach((el) => {
  let moving;
  el.addEventListener(
    "mousedown",
    () => {
      const direction = this.dataset.control;
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
      moving = moveBoombox(direction);
    },
    false,
  );

  window.addEventListener(
    "mouseup",
    () => {
      if (moving && moving.frameId) {
        cancelAnimationFrame(moving.frameId);
      }
    },
    false,
  );
});
```

## グラフを接続

HTML には、パンナーノードを影響させたい audio 要素を格納します。

```html
<audio src="myCoolTrack.mp3"></audio>
```

その要素からソースを取得し、 {{domxref('AudioContext.createMediaElementSource')}} を使用してウェブオーディオ API にパイプする必要があります。

```js
// audio 要素を取得
const audioElement = document.querySelector("audio");

// 音声コンテキストに渡す
const track = audioContext.createMediaElementSource(audioElement);
```

次に、音声グラフを接続させなければなりません。入力（トラック）、変更ノード（パンナー）、出力先（この場合はスピーカー）を接続します。

```js
track.connect(panner).connect(audioCtx.destination);
```

現在の状態に応じて、クリックすると音声を再生または一時停止する再生ボタンを作成しましょう。

```html
<button data-playing="false" role="switch">再生/停止</button>
```

```js
// 再生ボタンを選択
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
    // コンテキストが停止状態（autoplay ポリシーによる）かどうかをチェック
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // 状態によってトラックを再生または停止させる
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false,
);
```

音声や音声グラフの再生・制御についてより詳しく見ていくには、[ウェブオーディオ API の使用](/ja/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)をご覧ください。

## まとめ

この記事で、ウェブオーディオの空間設定がどのように動作するのか、また {{domxref("PannerNode")}} プロパティがそれぞれ何をするのか（かなりいくつかあります）について、ご理解いただけたかと思います。
値の操作が難しい場合もあり、使用する用途によっては正しい値を取得するのに時間がかかることもあります。

> [!NOTE]
> さまざまなブラウザー間で、音声の空間化には若干の違いがあります。
> パナーノードは、ボンネットの中でとても複雑な計算をします。
> ここには[たくさんのテスト](https://wpt.fyi/results/webaudio/the-audio-api/the-pannernode-interface?label=stable&aligned=true)があるので、異なるプラットフォーム間でこのノードの内部動作の状態を追跡することができます。

また、[最終的なデモはここで確認](https://mdn.github.io/webaudio-examples/spatialization/)でき、[最終的なソースコードはここ](https://github.com/mdn/webaudio-examples/tree/main/spatialization)で確認できます。
[Codepen のデモ](https://codepen.io/Rumyra/pen/MqayoK?editors=0100)もあります。

もしあなたが 3D ゲームや WebXR で作業しているのであれば、このような機能を作成するために 3D ライブラリーを利用するのはよい考えです。
私たちは、これがどのように動作するのかの考え方を提供するために、この記事で自分自身で展開しましたが、他の人が先に行った成果を利用することで多くの時間を節約することができます。
