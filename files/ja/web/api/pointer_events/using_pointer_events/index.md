---
title: ポインターイベントの使用
slug: Web/API/Pointer_events/Using_Pointer_Events
tags:
  - ガイド
  - Input
  - ポインターイベント
  - PointerEvent
  - イベント
  - タッチ
translation_of: Web/API/Pointer_events/Using_Pointer_Events
---
{{DefaultAPISidebar("Pointer Events")}}

このガイドでは、[ポインターイベント](/ja/docs/Web/API/Pointer_events)と HTML の {{HTMLElement("canvas")}} 要素を使用してマルチタッチ対応の描画アプリを作成する方法について説明します。この例は、{{domxref("PointerEvent","ポインターイベント", "", 1)}}の入力イベントモデルを使用する点を除いて、[タッチイベントの概要](/ja/docs/Web/API/Touch_events)の例に基づいています。 もう 1 つの違いは、ポインターイベントはポインターデバイスに依存しないため、アプリは同じコードを使用してマウス、ペン、または指先からの座標ベースの入力を受け入れることです。

このアプリは、ポインターイベントに対応しているブラウザーでのみ動作します。

このアプリのライブ版は [GitHub](https://mdn.github.io/dom-examples/pointerevents/Using_Pointer_Events.html) で利用できます。 [ソースコードは Github で入手でき](https://github.com/mdn/dom-examples/blob/master/pointerevents/Using_Pointer_Events.html)、プルリクエストやバグレポートは大歓迎です。

## 定義

- 表面
  - : タッチを感知できる表面。 これは、トラックパッド、タッチ画面、あるいは物理的な画面とユーザーの机の表面（またはマウスパッド）の仮想的なマッピングかもしれません。
- タッチ点
  - : 表面との接点。 これは、指（または肘、耳、鼻など何でも、しかし通常は指）、スタイラス、マウス、または表面上の単一の点を指定するための他の任意の方法かもしれません。

## 例

> **Note:** 以下のテキストでは、表面との接触を説明するときに「指」という用語を使用していますが、もちろんスタイラス、マウス、その他の場所を指す方法でもかまいません。

### キャンバスの作成

ブラウザーが既定のタッチの振る舞いをアプリに適用しないようにするには、{{cssxref("touch-action")}} プロパティを `none` に設定します。

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px; touch-action:none">
  お使いのブラウザーは canvas 要素に対応していません。
</canvas>
<br>
<button onclick="startup()">Initialize</button>
<br>
Log: <pre id="log" style="border: 1px solid #ccc;"></pre>
```

### イベントハンドラーの設定

ページが読み込まれると、以下に示す `startup()` 関数が {{HTMLElement("body")}} 要素の `onload` 属性によって呼び出されます（ただし、MDN ライブサンプルシステムの制限により、この例ではボタンを使用して起動します）。

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("pointerdown", handleStart, false);
  el.addEventListener("pointerup", handleEnd, false);
  el.addEventListener("pointercancel", handleCancel, false);
  el.addEventListener("pointermove", handleMove, false);
  log("初期化されました。");
}
```

これは単に {{HTMLElement("canvas")}} 要素のすべてのイベントリスナーを設定するので、タッチイベントが発生したときに処理できます。

### 新しいタッチの追跡

進行中のタッチを追跡します。

```js
var ongoingTouches = new Array();
```

{{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントが発生すると、表面上で新しいタッチが発生したことを示し、次の `handleStart()` 関数が呼び出されます。

```js
function handleStart(evt) {
  log("pointerdown.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");

  log("pointerdown: id = " + evt.pointerId);
  ongoingTouches.push(copyTouch(evt));
  var color = colorForTouch(evt);
  ctx.beginPath();
  ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
  ctx.arc(evt.clientX, evt.clientY, 4, 0, 2 * Math.PI, false);  // a circle at the start
  ctx.fillStyle = color;
  ctx.fill();
}
```

イベントの処理の一部を後で処理するために `ongoingTouches` に格納した後、開始点を小さな円として描画します。 4 ピクセル幅の線を使用しているので、 4 ピクセルの半径の円が見栄えよく表示されます。

#### ポインターの動きに合わせて描画

1つ以上のポインターが移動するたびに、 {{domxref("HTMLElement/pointermove_event", "pointermove")}} イベントが配信され、その結果、次の `handleMove()` 関数が呼び出されます。 この例におけるその役割は、キャッシュされたタッチ情報を更新し、各タッチの前の位置から現在の位置まで線を引くことです。

```js
function handleMove(evt) {
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var color = colorForTouch(evt);
  var idx = ongoingTouchIndexById(evt.pointerId);

  log("continuing touch: idx =  " + idx);
  if (idx >= 0) {
    ctx.beginPath();
    log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    log("ctx.lineTo(" + evt.clientX + ", " + evt.clientY + ");");
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();

    ongoingTouches.splice(idx, 1, copyTouch(evt));  // swap in the new touch record
    log(".");
  } else {
    log("can't figure out which touch to continue: idx = " + idx);
  }
}
```

この関数はキャッシュされたタッチ情報配列で各タッチに関する以前の情報を探して、描画する各タッチの新しい線分の開始点を決定します。 これは各タッチの {{domxref("PointerEvent.pointerId")}} プロパティを見ることによって行われます。 このプロパティは、各ポインターイベントに対して一意の整数であり、各指が表面と接触している間、各イベントに対して一貫性を保ちます。

これにより、各タッチの前の位置の座標を取得し、適切なコンテキストメソッドを使用して 2 つの位置を結ぶ線分を描画できます。

線を描画した後、[`Array.splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) を呼び出して、`ongoingTouches` 配列内のタッチ点に関する以前の情報を現在の情報に置き換えます。

### タッチの終わりの処理

ユーザーが表面から指を離すと、 {{domxref("HTMLElement/pointerup_event", "pointerup")}} イベントが送信されます。 次の `handleEnd()` 関数を呼び出すことによってこのイベントを処理します。 その仕事は終わったタッチのための最後の線分を引き、進行中のタッチリストからタッチ点を取り除くことです。

```js
function handleEnd(evt) {
  log("pointerup");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var color = colorForTouch(evt);
  var idx = ongoingTouchIndexById(evt.pointerId);

  if (idx >= 0) {
    ctx.lineWidth = 4;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.fillRect(evt.clientX - 4, evt.clientY - 4, 8, 8);  // and a square at the end
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  } else {
    log("can't figure out which touch to end");
  }
}
```

これは前の関数と非常によく似ています。 唯一の大きな違いは、終わりを示すために小さな正方形を描くことと、[`Array.splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) を呼び出すときに、更新された情報を追加せずに、進行中のタッチリストから古い項目を削除することです。 その結果、そのタッチ点の追跡をやめます。

#### キャンセルされたタッチの処理

ユーザーの指がブラウザーの UI にぶつかったり、あるいはタッチをキャンセルする必要がある場合は、 {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントが送信され、次の `handleCancel()` 関数を呼び出します。

```js
function handleCancel(evt) {
  log("pointercancel: id = " + evt.pointerId);
  var idx = ongoingTouchIndexById(evt.pointerId);
  ongoingTouches.splice(idx, 1);  // remove it; we're done
}
```

タッチを即座に中止するため、最後の線分を描かずに進行中のタッチリストから削除しています。

### 便利な関数

この例では、コードの残りの部分をより明確にするために簡単に説明する必要がある、いくつかの便利な関数を使用しています。

#### タッチごとの色の選択

各タッチの描画を異なるように見せるために、 `colorForTouch()` 関数を使用して、タッチの一意の識別子に基づいて色を選びます。 この識別子は不透明な数字ですが、少なくとも現在アクティブなタッチ間で異なることを頼れます。

```js
function colorForTouch(touch) {
  var r = touch.pointerId % 16;
  var g = Math.floor(touch.pointerId / 3) % 16;
  var b = Math.floor(touch.pointerId / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.pointerId + " = " + color);
  return color;
}
```

この関数の結果は、描画色を設定するために {{HTMLElement("canvas")}} の関数を呼び出すときに使用できる文字列です。 例えば、{{domxref("PointerEvent.pointerId")}} の値が `10` の場合、結果の文字列は `"#aaa"` です。

#### タッチオブジェクトのコピー

ブラウザーによっては、イベント間でタッチオブジェクトを再利用することがあるので、オブジェクト全体を参照するのではなく、気になる部分をコピーするのが最善です。

```js
function copyTouch(touch) {
  return { identifier: touch.pointerId, pageX: touch.clientX, pageY: touch.clientY };
}
```

#### 進行中のタッチの検索

次の `ongoingTouchIndexById()` 関数は、`ongoingTouches` 配列をスキャンして、指定された識別子と一致するタッチを見つけ、そのタッチの配列におけるインデックスを返します。

```js
function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}
```

#### 何が起こっているのかを示す

```js
function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

## 仕様書

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
    <tr>
      <td>
        {{SpecName('Pointer Events 2','#pointerevent-interface', 'PointerEvent')}}
      </td>
      <td>{{Spec2('Pointer Events 2')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName('Pointer Events', '#pointerevent-interface', 'PointerEvent')}}
      </td>
      <td>{{Spec2('Pointer Events')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

## `PointerEvent` インターフェイス

{{Compat("api.PointerEvent", 0)}}

## 関連情報

- [ポインターイベント](/ja/docs/Web/API/Pointer_events)
- [タッチイベント](/ja/docs/Web/API/Touch_events)
