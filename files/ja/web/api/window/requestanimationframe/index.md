---
title: "Window: requestAnimationFrame() メソッド"
short-title: requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
l10n:
  sourceCommit: 90c1d8efd51c2f82d26e6b79e442f9dbcfafd048
---

{{APIRef}}

**`window.requestAnimationFrame()`** メソッドは、アニメーションを実行したいことをブラウザーに指示します。
このメソッドは、次回の再描画の前に、ユーザーが指定したコールバック関数を呼び出すようブラウザーに要求します。

コールバック関数への呼び出し頻度は、通常、ディスプレイのリフレッシュレートと一致します。
最も一般的なリフレッシュレートは 60Hz（60 サイクル／フレーム毎秒）ですが、75Hz、120Hz、144Hz も広く使用されています。
パフォーマンスとバッテリー駆動時間の向上のため、ほとんどのブラウザーでは、バックグラウンドのタブや非表示の {{ HTMLElement("iframe") }} 内で実行されている場合、`requestAnimationFrame()` の呼び出しは一時停止されます。

> [!NOTE]
> 次の再描画時に別のフレームをアニメーションさせたいときは、コールバックルーチン自身で `requestAnimationFrame()` を呼び出さなければなりません。
> `requestAnimationFrame()` は 1 ショットです。

> [!WARNING]
> アニメーションが 1 フレームでどれだけ進んだかを計算する場合、常に第 1 引数（または現在時刻を取得する他の方法）を使用するようにしてください、
> **そうしないと、アニメーションはリフレッシュレートの高い画面では速く実行されます**。
> これを行う方法については、以下の例を参照してください。

## 構文

```js-nolint
requestAnimationFrame(callback)
```

### 引数

- `callback`
  - : 次の再描画でアニメーションを更新する時に呼び出す関数を指定します。このコールバック関数には、1 つの引数が渡されます。
    - `timestamp`
      - : 前回フレームのレンダリング終了時刻を示す {{domxref("DOMHighResTimeStamp")}} です（[時刻オリジン](/ja/docs/Web/API/Performance/timeOrigin)からの経過ミリ秒数に基づきます）。このタイムスタンプはミリ秒単位の実数ですが、最小精度は 1 ミリ秒です。`Window` オブジェクト（`Workers` を除く）の場合、これは {{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}} と等しくなります。このタイムスタンプは、同じエージェント上で動作するすべてのウィンドウ（すべての同一オリジンウィンドウ、そしてより重要な点として、同一オリジンの iframe）間で共有されます。これにより、複数の `requestAnimationFrame` コールバック間でアニメーションを同期させることができるのです。また、このタイムスタンプの値は、コールバック関数の開始時に {{domxref('performance.now()')}} を呼び出した場合と似ていますが、決して同じ値になることはありません。

        `requestAnimationFrame()` によってキューに入れられた複数のコールバックが、単一のフレーム内で発生し始めた場合、たとえ前回各コールバックの作業量計算中に時間が経過していたとしても、それぞれのコールバックには同じタイムスタンプが割り当てられます。

## 返値

`long` の整数値で、リクエスト ID、コールバックリスト内の項目を一意に識別するためのリクエスト ID を返します。
この値はゼロ以外の値ですが、値そのものを推定することはできないでしょう。
この値を {{domxref("window.cancelAnimationFrame()")}} に渡すことで、コールバック関数の更新を中止できます。

> [!WARNING]
> リクエスト ID は通常、ウィンドウごとに増加するカウンターとして実装されます。そのため、1 からカウントが始まる場合でも、オーバーフローして最終的に 0 に達することがあります。
> 短時間しか使用されないアプリケーションでは課題が発生する可能性は低いですが、不正なリクエスト識別子 ID の先頭値として `0` を使用することは避け、代わりに `null` などの取得不可能な値を使用することを推奨します。
> 仕様書ではオーバーフロー時の挙動が指定されていないため、ブラウザーによって挙動が異なります。オーバーフローが発生した場合、値は 0 に戻ったり、負の値になったり、あるいはエラーが発生して処理が中断されたりします。
> オーバーフローが発生しない限り、リクエスト ID も真に一意とは言えません。なぜなら、無限に存在する可能性のあるコールバックに対して、32 ビット整数の数は有限だからです。
> ただし、1 フレームごとに `requestAnimationFrame()` を単一の呼び出しで 60Hz でレンダリングする場合、この課題に達するまでに約 800 日かかることにご留意ください。

## 例

この例では、ある要素を 2 秒間（2000 ミリ秒）動作させています。
要素は 0.1px/ms の速度で右に移動するので、その相対位置（CSS ピクセル単位）はアニメーションの開始からの経過時間（ミリ秒）の関数として `0.1 * elapsed` で計算することができます。
要素の最終的な位置は、初期位置から右へ 200px （`0.1 * 2000`）となります。

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  // ここで Math.min() を使用して、要素がちょうど 200px で止まるようにします。
  const shift = Math.min(0.1 * elapsed, 200);
  element.style.transform = `translateX(${shift}px)`;
  if (shift < 200) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);
```

以下の 3 つの例は、それぞれのフレームにおけるアニメーションの進行状況を計算するための基準となる、時間軸上のゼロ点を設定するさまざまな手法を示しています。
{{domxref("BaseAudioContext.currentTime")}} などの外部クロックに同期させたい場合、利用できる最高精度は 1 フレームの再生時間、つまり 60Hz で 16.67ms となります。
コールバックの timestamp 引数は前回フレームの終了時点を表すため、新たに計算された値がレンダリングされるのは、早くても次のフレームになります。

この例では、最初のコールバックが実行されて `zero` が設定されるまで待機します。
アニメーションの開始時に新しい値にジャンプさせる場合は、このように構成する必要があります。
音声などの外部要素との同期が必要ない場合は、この手法をお勧めします。
なぜなら、一部のブラウザーでは、`requestAnimationFrame()` の最初の呼び出しとコールバック関数の最初の呼び出しの間に、数フレームの遅延が生じるためです。

```js
let zero;
requestAnimationFrame(firstFrame);
function firstFrame(timestamp) {
  zero = timestamp;
  animate(timestamp);
}
function animate(timestamp) {
  const value = (timestamp - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

この例では、`requestAnimationFrame` を最初に呼び出す前に、{{domxref("AnimationTimeline/currentTime", "document.timeline.currentTime")}} を使用して値を 0 に設定しています。
`document.timeline.currentTime` は `timestamp` 引数と一致するため、この 0 の値は 0 フレーム目のタイムスタンプに相当します。

```js
const zero = document.timeline.currentTime;
requestAnimationFrame(animate);
function animate(timestamp) {
  const value = (timestamp - zero) / duration; // animation-timing-function: linear
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame((t) => animate(t));
  } else element.style.opacity = 1;
}
```

この例では、コールバックのタイムスタンプ値の代わりに {{domxref("performance.now()")}} を使用してアニメーションを実行しています。
これにより、同期の精度をわずかに高めることができますが、その精度は状況によって異なり、大幅な向上にはつながりません。

> [!NOTE]
> この例では、アニメーションのコールバックを確実に同期させることはできません。

```js
const zero = performance.now();
requestAnimationFrame(animate);
function animate() {
  const value = (performance.now() - zero) / duration;
  if (value < 1) {
    element.style.opacity = value;
    requestAnimationFrame(animate);
  } else element.style.opacity = 1;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.cancelAnimationFrame()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()")}}
- [Animating with JavaScript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - ブログ投稿
- [TestUFO: Test your web browser for requestAnimationFrame() Timing Deviations](https://testufo.com/#test=animation-time-graph)
- [Firefox switching to uint32_t for the requestAnimationFrame request ID](https://phabricator.services.mozilla.com/rMOZILLACENTRAL149722297f033d5c3ad126d0c72edcb1cb96d72e)
