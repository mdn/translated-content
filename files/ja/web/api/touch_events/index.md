---
title: タッチイベント
slug: Web/API/Touch_events
---

{{DefaultAPISidebar("Touch Events")}}

タッチベースのユーザーインターフェイスを高度にサポートするため、端末やトラックパッドでの指 (あるいはスタイラス) の動きを解釈する機能を、タッチイベントが提供します。

タッチイベントのインターフェイスは、2 本の指によるジェスチャーなどアプリケーション固有のマルチタッチ操作に対応するために使用できる、比較的低レベルの API です。マルチタッチ操作は、1 本の指 (またはスタイラス) が始めにタッチ面へタッチしたときから始まります。その後に他の指をタッチすることができ、さらに任意でサーフェス上で動かします。指をサーフェスから離すと、操作が終了します。操作している間、アプリケーションは開始・移動・終了の各段階中にタッチイベントを受け取ります。

タッチイベントはマウスイベントに似ていますが、タッチサーフェス上の異なる場所で同時に発生するタッチに対応することが異なります。{{domxref("TouchEvent")}} インターフェイスは、現在アクティブなすべてのタッチ箇所を包含します。{{domxref("Touch")}} インターフェイスはひとつのタッチ箇所を表し、ブラウザのビューポートを基準にしたタッチ個所の位置などの情報を含みます。

## 定義

- タッチ面
  - : タッチに反応する面。画面であったりトラックパッドであったりする可能性があります。

<!---->

- タッチ箇所
  - : タッチ面に接触した点。これは指 (あるいはひじ、耳、鼻などでもよいのですが、たいてい指でしょう) またはスタイラスでしょう。

## インターフェイス

- {{domxref("TouchEvent")}}
  - : タッチ面でタッチ状態が変化したときに発生するイベントを表します。
- {{domxref("Touch")}}
  - : ユーザーとタッチタッチ面が接した点 1 個を表します。
- {{domxref("TouchList")}}
  - : タッチのグループを表します。例えば、ユーザーが複数の指を同時にタッチ面上に置いた場合に使用します。

## 例

ここでは一度に複数のタッチ箇所を取得しており、ユーザーが一度に複数の指で {{HTMLElement("canvas")}} に描くことができるようになっています。このサンプルはタッチイベントに対応するブラウザーのみで動作します。

> **メモ:** ここからはタッチ面への接触を表すときに "指" という表現を使用しますが、当然ながらスタイラスなど他の接触法も使用できます。

### canvas を生成する

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Your browser does not support canvas element.
</canvas>
<br>
Log: <pre id="log" style="border: 1px solid #ccc;"></pre>
```

### イベントハンドラーの設定

ページを読み込むとき、以下の `startup()` 関数が呼び出されます。

```js
function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}

document.addEventListener("DOMContentLoaded", startup);
```

これは単に {{HTMLElement("canvas")}} 要素へすべてのイベントリスナーを設定している関数であり、タッチイベントの発生に応じて扱うことができるようになります。

#### 新たなタッチの追跡

進行中のタッチを追跡し続けます。

```js
var ongoingTouches = [];
```

タッチ面上で新たなタッチが発生したことを示す {{Event("touchstart")}} イベントが発生すると、`handleStart()` 関数を呼び出します。

```js
function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
  }
}
```

ここでは、ブラウザーがタッチイベントの処理を続けないようにするため {{domxref("event.preventDefault()")}} を呼び出します (また、マウスイベントの伝達も抑止します)。そしてコンテキストを取得して、イベントの {{domxref("TouchEvent.changedTouches")}} プロパティから変化したタッチ箇所のリストを取り込みます。

その後に、リスト内のすべての {{domxref("Touch")}} オブジェクトを走査してアクティブなタッチ箇所の配列に送り込み、描画を開始する位置に小さな丸印を描画します。この例では 4 ピクセル幅の線を使用しますので、半径 4 ピクセルの円がきれいに見えます。

#### タッチの移動に合わせた描画

1 本以上の指が移動するたびに {{domxref("Element/touchmove_event", "touchmove")}} イベントが発生しますので、その結果 `handleMove()` 関数が呼び出されます。これはキャッシュしたタッチ情報を更新して、タッチごとに以前の位置から現在の位置まで線を描画する役割を担っています。

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      console.log("continuing touch "+idx);
      ctx.beginPath();
      console.log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
      console.log(".");
    } else {
      console.log("can't figure out which touch to continue");
    }
  }
}
```

これは同様に変更されたタッチに対して走査していますが、各タッチで新たに描画する線分の開始点を検出するために、各タッチの以前の情報についてキャッシュしたタッチ情報の配列を参照しています。これは、各タッチの {{domxref("Touch.identifier")}} プロパティを確認して行います。このプロパティは各タッチで一意の識別子であり、指とタッチ面との接触が続いている間、値が固定されます。

これにより各タッチの前の位置の座標を取得して、2 つの点を結ぶ線分を描画するために適切なコンテキストメソッドを使用できます。

線分を描画した後、前のタッチ箇所の情報を `ongoingTouches` 配列内にある現在の情報に置き換えるため、[`Array.splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) を呼び出します。

#### タッチの終了を制御する

ユーザーがタッチ面から指を離すと {{domxref("Element/touchend_event", "touchend")}} イベントが発生します。私たちはこれらの両方を、以下の `handleEnd()` 関数を呼び出すというひとつの方法で扱います。この関数の役割は、終了したタッチについて最後の線分を描画することと、継続中のタッチのリストからタッチ箇所を削除することです。

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
```

これは前の関数にとても似ていますが、終端を表す小さな四角形を描画することと、[`Array.splice()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) を呼び出して、更新後の情報を追加せずに継続中のタッチリストから古い項目を削除することが異なります。この結果、タッチ箇所の追跡を停止します。

#### 取り消されたタッチを制御する

ユーザーの指がブラウザーの UI に入り込んだり、その他にタッチをキャンセルしなければならないときには {{domxref("Element/touchcancel_event", "touchcancel")}} イベントが発生して、以下の `handleCancel()` 関数が実行されます。

```js
function handleCancel(evt) {
  evt.preventDefault();
  console.log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}
```

即座にタッチを取り消すという考え方から最終の線分を描画せずに、継続中のタッチリストから単純にタッチを削除します。

### 便利な関数

この例ではコードの残りの部分をより明確にすることを助ける、簡単に見ておくべきである 2 つの便利な関数を使用しています。

#### それぞれのタッチの色を選択する

それぞれのタッチの外見を区別して描画するために、タッチの一意な識別子を元に色を選択する `colorForTouch()` 関数を使用します。この識別子は不明瞭な数値ですが、少なくとも現在アクティブなタッチを区別することはできます。

```js
function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  console.log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
```

この関数の返値は、描画色を設定するために {{HTMLElement("canvas")}} 関数を呼び出すときに使用できる文字列です。例えば {{domxref("Touch.identifier")}} の値が 10 であれば、戻り値は文字列 "#aaa" になります。

#### touch オブジェクトのコピー

一部のブラウザー (例えばモバイル版 Safari) はイベント間で touch オブジェクトを再使用するため、オブジェクト全体を参照するよりも、関心がある部分をコピーするほうが最善です。

```js
function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}
```

#### 継続中のタッチを発見する

以下の `ongoingTouchIndexById()` 関数は、指定した識別にマッチするタッチを見つけるために配列 `ongoingTouches` を探索して、そのタッチの配列内における添字を返します。

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

#### 何を行っているか表示する

```js
function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

ブラウザーが対応していれば、{{LiveSampleLink('Example', '実際に試す')}} ことができます。

[jsFiddle example](http://jsfiddle.net/Darbicus/z3Xdx/10/)

## 追加の豆知識

この章ではウェブアプリケーションでタッチイベントを扱う方法について、追加の豆知識を紹介します。

### クリックを制御する

{{event("touchstart")}} あるいは一連の中で最初の {{domxref("Element/touchmove_event", "touchmove")}} で `preventDefault()` を呼び出すと対応するマウスイベントの発生を抑制できるため、 `touchstart` よりも `touchmove` で `preventDefault()` を呼び出すことが一般的です。この方法では従来どおりマウスイベントが発生して、リンクなどが引き続き動作します。代わりに一部のフレームワークでは同様の目的で、タッチイベントをマウスイベントとして再発生させています。(この例は過度に単純化しており、奇妙な動作になるかもしれません。ガイドとして掲載しているに過ぎません。)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### 2 番目のタッチのみで preventDefault() を呼び出す

ページ上で `pinchZoom` と言った操作を防ぐテクニックのひとつとして、一連のタッチの 2 番目で `preventDefault()` を呼び出す方法があります。この動作はタッチイベントの仕様書で明示されておらず、ブラウザーによって結果が異なります (iOS ではズームを防ぎますが、パンは可能です。Android はズームが可能ですが、パンはできません。Opera および Firefox は現状、パンもズームも防ぎます)。現在、このケースで特定の動作に依存することは推奨されず、メタビューポートのズームを防ぐと考えてください。

## 仕様書

| 仕様書                                                                           | 状態                                 | 備考                                                              |
| -------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| {{SpecName('Touch Events 2', '#touch-interface', 'Touch')}} | {{Spec2('Touch Events 2')}} | `radiusX`, `radiusY`, `rotationAngle`, `force` プロパティを追加。 |
| {{SpecName('Touch Events', '#touch-interface', 'Touch')}}     | {{Spec2('Touch Events')}}     | 初回定義                                                          |

## ブラウザーの互換性

### Touch

タッチイベントは通常、タッチ画面を備えた端末で使用できますが、多くのブラウザーは、タッチ画面を備えたものであっても、すべてのデスクトップ端末でタッチイベント API をできないようにしています。

これは、一部のウェブサイトで、タッチイベント API の一部が利用できることが、ブラウザーがモバイル端末で実行されていることを示す指標として使用されているためです。タッチイベント API が利用可能な場合、これらのウェブサイトはモバイル端末を想定し、モバイルに最適化されたコンテンツを配信します。その結果、タッチ画面を搭載したデスクトップ端末のユーザーにとっては、使い勝手が悪くなる可能性があります。

すべての種類の端末でタッチとマウスの両方に対応するには、代わりに[ポインターイベント](/ja/docs/Web/API/Pointer_events)を使用してください。

{{Compat("api.Touch")}}

### Firefox のタッチイベントとマルチプロセス (e10s)

Firefox では、 e10s (electrolysis; [multiprocess Firefox](/ja/docs/Mozilla/Firefox/Multiprocess_Firefox)) が無効になっていると、タッチイベントは無効になります。 Firefox では e10s が既定ででオンになっていますが、 e10s が機能しないようにする必要がある特定のアクセシビリティツールや Firefox アドオンがインストールされている場合など、特定の状況で無効になることがあります。つまり、タッチ画面対応のデスクトップ/ノートパソコンでも、タッチイベントは有効になりません。

e10s が無効になっているかどうかをテストするには、 `about:support` に移動し、 "Application Basics" セクションの "Multiprocess Windows" エントリを調べます。 1/1 は有効、 0/1 は無効を意味します。

タッチイベントの対応を明示的に再度有効にするために e10s を強制的にオンにしたい場合は、 `about:config` に移動して新しいブール設定 `browser.tabs.remote.force-enable` を作成する必要があります。 `true` に設定してブラウザーを再起動すると、他の設定に関係なく e10s が有効になります。
