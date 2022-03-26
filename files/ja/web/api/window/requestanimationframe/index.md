---
title: Window.requestAnimationFrame()
slug: Web/API/Window/requestAnimationFrame
tags:
  - API
  - アニメーション
  - Drawing
  - Games
  - Graphics
  - HTML DOM
  - 中級者
  - JavaScript タイマー
  - メソッド
  - Performance
  - リファレンス
  - スケジュール
  - Window
  - requestAnimationFrame
  - Polyfill
browser-compat: api.Window.requestAnimationFrame
translation_of: Web/API/window/requestAnimationFrame
---
{{APIRef}}

**`window.requestAnimationFrame()`** メソッドは、ブラウザーにアニメーションを行いたいことを知らせ、指定した関数を呼び出して次の再描画の前にアニメーションを更新することを要求します。このメソッドは、再描画の前に呼び出されるコールバック 1 個を引数として取ります。

> **Note:** 次の再描画時に別のフレームをアニメーションさせたいときは、コールバックルーチン自身で `requestAnimationFrame()` を呼び出さなければなりません。 `requestAnimationFrame()` は 1 ショットです。

このメソッドは、いつでも画面上でアニメーションの更新準備が整った時に呼び出してください。これにより、ブラウザーの次の再描画が実行される前にアニメーション関数が呼び出されることを要求します。このコールバックの回数は、たいてい毎秒 60 回ですが、一般的に多くのブラウザーでは W3C の勧告に従って、ディスプレイのリフレッシュレートに合わせて行われます。ただし、コールバックの確率は、バックグラウンドのタブや隠れた {{ HTMLElement("iframe") }} では、パフォーマンス向上やバッテリー消費を減らすために低くなるでしょう。

コールバックメソッドには、1 個の引数 {{domxref("DOMHighResTimeStamp")}} が渡されます。これは現在の時刻を（[time origin](/ja/docs/Web/API/DOMHighResTimeStamp#the_time_origin)からの経過ミリ秒数で）示します。
`requestAnimationFrame()` によってキューに入れられた複数のコールバックが 1 つのフレームで起動し始めると、以前のすべてのコールバックのワークロードの計算中に時間が経過しても、それぞれが同じタイムスタンプを受け取ります（以下のコード例では、タイムスタンプが変化したとき、つまり最初のコールバックでフレームを動作させています）。このタイムスタンプは、ミリ秒単位の小数ですが、最小精度は 1ms（1000μs）です。

> **Warning:** アニメーションが 1 フレームでどれだけ進んだかを計算する場合、常に第 1 引数（または現在時刻を取得する他の方法）を使用するようにしてください、**そうしないと、アニメーションはリフレッシュレートの高い画面では速く実行されます**。これを行う方法については、以下の例を参照してください。

## 構文

```js
window.requestAnimationFrame(callback);
```

### 引数

- `callback`
  - : 次の再描画でアニメーションを更新する時に呼び出す関数を指定します。コールバック関数は 1 個の引数 {{domxref("DOMHighResTimeStamp")}} を受け取ります。この引数は、`requestAnimationFrame` がコールバックの呼び出しを開始した時点の時刻、すなわち {{domxref('performance.now()')}} から返された時刻を示します。

## 返値

`long` 整数値で、リクエスト ID、コールバックリスト内のエントリーを一意に識別するための、` long` 整数値の `requestID` を返します。この値は非ゼロ値ですが、値そのものを推定することはできないでしょう。この値を {{domxref("window.cancelAnimationFrame()")}} に渡すことで、コールバック関数の更新を中止できます。

## 例

この例では、ある要素を 2 秒間（2000 ミリ秒）動作させています。要素は 0.1px/ms の速度で右に移動するので、その相対位置（CSS ピクセル単位）はアニメーションの開始からの経過時間（ミリ秒）の関数として `0.1 * elapsed` で計算することができます。要素の最終的な位置は、初期位置から右へ 200px （`0.1 * 2000`）となります。

```js
const element = document.getElementById('some-element-you-want-to-animate');
let start, previousTimeStamp;
let done = false

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
    }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // ここで Math.min() を使用して、要素がちょうど 200px で止まるようにします。
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = 'translateX(' + count + 'px)';
    if (count === 200) done = true;
  }

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    previousTimeStamp = timestamp
    !done && window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

## メモ

Edge のバージョン 17 以前と Internet Explorer は、描画サイクルの前に `requestAnimationFrame` を確実に発行するとは限りません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.cancelAnimationFrame()")}}
- [mozRequestAnimationFrame](http://weblogs.mozillazine.org/roc/archives/2010/08/mozrequestanima.html)
  \- ブログ投稿
- [requestAnimationFrame
  for smart animating](https://paulirish.com/2011/requestanimationframe-for-smart-animating/) - ブログ投稿
- [Animating
  with javascript: from setInterval to requestAnimationFrame](https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/) - ブログ投稿
- [TestUFO: Test your web
  browser for requestAnimationFrame() Timing Deviations](https://www.testufo.com/#test=animation-time-graph)
- Paul Irish: [requestAnimationFrame
  API: now with sub-millisecond precision](http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision)
- [ポリフィル](https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js)
