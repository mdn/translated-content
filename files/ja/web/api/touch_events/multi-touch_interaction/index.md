---
title: マルチタッチ操作
slug: Web/API/Touch_events/Multi-touch_interaction
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Touch Events")}}

タッチイベントのインターフェイスは、アプリケーション固有のシングルタッチやマルチタッチ操作に対応しています。しかし、タッチイベントは{{domxref("MouseEvent", "マウスイベント")}}のような他の DOM 入力イベントとは大きく異なるため、プログラマーにとってインターフェイスを使用するのは少し難しいかもしれません。このガイドで説明するアプリケーションは、アプリケーション固有のジェスチャーを作成するために必要な基本である、単純なシングルおよびマルチタッチ操作にタッチイベントを使用する方法を示しています。

このアプリケーションのライブ版は、 [GitHub](https://mdn.github.io/dom-examples/touchevents/Multi-touch_interaction.html) で利用できます。[ソースコードは GitHub で利用でき](https://github.com/mdn/dom-examples/tree/main/touchevents)、プルリクエストや[バグ報告](https://github.com/mdn/dom-examples/issues)は歓迎されます。

## 例

この例では、{{domxref("Element/touchstart_event", "touchstart")}}、{{domxref("Element/touchmove_event", "touchmove")}}、{{domxref("Element/touchcancel_event", "touchcancel")}}、{{domxref("Element/touchend_event", "touchend")}} のタッチイベントを、シングルタッチ、 2 回（同時）タッチ、 2 回以上同時タッチ、 1 本指スワイプ、 2 本指移動/ピンチ/スワイプのジェスチャーに使用する例を示します。

### タッチターゲットの定義

このアプリケーションでは、 {{HTMLElement("div")}} 要素を使って 4 つのタッチ領域を表現しています。

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target1 {
    background: white;
    border: 1px solid black;
  }
  #target2 {
    background: white;
    border: 1px solid black;
  }
  #target3 {
    background: white;
    border: 1px solid black;
  }
  #target4 {
    background: white;
    border: 1px solid black;
  }
</style>
```

### グローバルステート

`tpCache` は、タッチポイントが発生したイベントの外部で処理するためにタッチポイントをキャッシュするために使用されます。

```js
// ログイベントフラグ
const logEvents = false;

// タッチポイントキャッシュ
const tpCache = [];
```

### イベントハンドラーの登録

イベントハンドラーは 4 種類のタッチイベントすべてに登録されています。 {{domxref("Element/touchend_event", "touchend")}} と {{domxref("Element/touchcancel_event", "touchcancel")}} のイベント種別は同じハンドラーを使用します。

```js
function set_handlers(name) {
  // 指定された要素のイベントハンドラーをインストール
  const el = document.getElementById(name);
  el.ontouchstart = start_handler;
  el.ontouchmove = move_handler;
  // touchcancel と touchend に同じハンドラーを使用
  el.ontouchcancel = end_handler;
  el.ontouchend = end_handler;
}

function init() {
  set_handlers("target1");
  set_handlers("target2");
  set_handlers("target3");
  set_handlers("target4");
}
```

### 移動/ピンチ/ズームハンドラー

この関数は、とても基本的な2タッチ水平移動/ピンチ/ズーム処理に対応します。このコードにはエラー処理や垂直方向の移動は含まれていません。ピンチとズームの動きを検出するための _しきい値_ は、アプリケーション固有（および端末依存）であることに注意してください。

```js
// これは非常に基本的な2タッチ操作用の移動/ピンチ/ズームハンドラーで、
// エラー処理は含まれておらず、水平方向の移動などを処理するだけです。
function handle_pinch_zoom(ev) {
  if (ev.targetTouches.length === 2 && ev.changedTouches.length === 2) {
    // 2 つのタッチが、 2 タッチを開始したのと同じタッチかどうかを確認
    const point1 = tpCache.findLastIndex(
      (tp) => tp.identifier === ev.targetTouches[0].identifier,
    );
    const point2 = tpCache.findLastIndex(
      (tp) => tp.identifier === ev.targetTouches[1].identifier,
    );

    if (point1 >= 0 && point2 >= 0) {
      // 開始座標と移動座標の差を計算
      const diff1 = Math.abs(
        tpCache[point1].clientX - ev.targetTouches[0].clientX,
      );
      const diff2 = Math.abs(
        tpCache[point2].clientX - ev.targetTouches[1].clientX,
      );

      // この閾値は、デバイスに依存し、アプリケーションにも依存する
      const PINCH_THRESHOLD = ev.target.clientWidth / 10;
      if (diff1 >= PINCH_THRESHOLD && diff2 >= PINCH_THRESHOLD)
        ev.target.style.background = "green";
    } else {
      // empty tpCache
      tpCache = [];
    }
  }
}
```

### タッチ開始ハンドラー

{{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーは、 2 タッチジェスチャに対応するためにタッチ点をキャッシュします。また、 {{domxref("Event.preventDefault","preventDefault()")}} を呼び出して、ブラウザーがさらなるイベント処理（例えば、マウスイベントのエミュレーション）を適用しないようにします。

```js
function start_handler(ev) {
  // ユーザーが同時にタッチした場合、ブラウザーは各タッチポイントに
  // 対して別々の touchstart イベントを発生させます。したがって、3 つの
  // 同時タッチがあった場合、最初の touchstart イベントの targetTouches の
  // 長さは 1、2 番目のイベントの長さは 2 となります。
  ev.preventDefault();
  // 2タッチピンチ/ズームを後で処理するためにタッチ点をキャッシュする
  if (ev.targetTouches.length === 2) {
    for (let i = 0; i < ev.targetTouches.length; i++) {
      tpCache.push(ev.targetTouches[i]);
    }
  }
  if (logEvents) log("touchStart", ev, true);
  update_background(ev);
}
```

### タッチ移動ハンドラー

{{domxref("Element/touchmove_event", "touchmove")}} ハンドラーは、上記と同じ理由で {{domxref("Event.preventDefault", "preventDefault()")}} を呼び出し、ピンチ/ズームハンドラーを呼び出します。

```js
function move_handler(ev) {
  // メモ: ユーザーが複数の「同時」タッチをした場合、ほとんどのブラウザーは 1 つ
  // 以上の touchmove イベントを発生させ、複数を発生させるものもあります。
  // その結果、アプリケーションはいくつかのタッチ移動を「無視」したくなるかもしれません。
  //
  // この関数は、ターゲット要素の境界線を「破線」に設定し、ターゲットが移動
  // イベントを受け取ったことを視覚的に示します。
  //
  ev.preventDefault();
  if (logEvents) log("touchMove", ev, false);
  // タッチ移動イベントが開始されたときに色が点滅しすぎるのを防ぐため、
  // 2 つのタッチポイントがアクティブな場合は背景を更新しないようにします。
  if (!(ev.touches.length === 2 && ev.targetTouches.length === 2))
    update_background(ev);

  // ターゲット要素の境界線を破線に設定し、要素が移動イベントを受け取ったことを
  // 視覚的に明確に示します。
  ev.target.style.border = "dashed";

  // 2 タッチの移動/ピンチ/ズームジェスチャーでは、このイベントをチェックする
  handle_pinch_zoom(ev);
}
```

### タッチ終了ハンドラー

{{domxref("Element/touchend_event", "touchend")}} ハンドラーは、イベントターゲットの背景色を元の色に戻します。

```js
function end_handler(ev) {
  ev.preventDefault();
  if (logEvents) log(ev.type, ev, false);
  if (ev.targetTouches.length === 0) {
    // Restore background and border to original values
    ev.target.style.background = "white";
    ev.target.style.border = "1px solid black";
  }
}
```

### アプリケーションの UI

このアプリケーションは、{{HTMLElement("div")}}要素をタッチ領域に使用し、ログを有効にするボタンとログをクリアするボタンを提供します。

```html
<div id="target1">Tap, Hold or Swipe me 1</div>
<div id="target2">Tap, Hold or Swipe me 2</div>
<div id="target3">Tap, Hold or Swipe me 3</div>
<div id="target4">Tap, Hold or Swipe me 4</div>

<!-- UI for logging/debugging -->
<button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
<button id="clearlog" onclick="clearLog(event);">Clear the log</button>
<p></p>
<output></output>
```

### その他の機能

これらの昨日はアプリケーションをサポートしますが、イベントフローには直接関与しません。

#### 背景色の更新

タッチ領域の背景色は、タッチなしは`白`、 1 回タッチは`黄`、 2 回同時タッチは`ピンク`、 3 回以上同時タッチは`水色`に変化します。 2 本指の移動/ピンチ/ズームが検出されたときの背景色の変化については[タッチ移動](#タッチ移動)を参照してください。

```js
function update_background(ev) {
  // Change background color based on the number simultaneous touches
  // in the event's targetTouches list:
  //   yellow - one tap (or hold)
  //   pink - two taps
  //   lightblue - more than two taps
  switch (ev.targetTouches.length) {
    case 1:
      // Single tap`
      ev.target.style.background = "yellow";
      break;
    case 2:
      // Two simultaneous touches
      ev.target.style.background = "pink";
      break;
    default:
      // More than two simultaneous touches
      ev.target.style.background = "lightblue";
  }
}
```

#### イベントのログ出力

この関数は、アプリケーションウィンドウにイベントアクティビティを記録し、デバッグやイベントフローの学習の助けにするために使用されます。

```js
function enableLog(ev) {
  logEvents = !logEvents;
}

function log(name, ev, printTargetIds) {
  const o = document.getElementsByTagName("output")[0];
  let s =
    `${name}: touches = ${ev.touches.length} ; ` +
    `targetTouches = ${ev.targetTouches.length} ; ` +
    `changedTouches = ${ev.changedTouches.length}`;
  o.innerHTML += `${s}<br>`;

  if (printTargetIds) {
    s = "";
    for (let i = 0; i < ev.targetTouches.length; i++) {
      s += `... id = ${ev.targetTouches[i].identifier}<br>`;
    }
    o.innerHTML += s;
  }
}

function clearLog(event) {
  const o = document.getElementsByTagName("output")[0];
  o.innerHTML = "";
}
```

## 関連トピックとリソース

- {{domxref("Pointer_events","ポインターイベント", "", 1)}}
