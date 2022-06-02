---
title: ピンチズームのジェスチャー
slug: Web/API/Pointer_events/Pinch_zoom_gestures
tags:
  - ガイド
  - PointerEvent
  - タッチ
translation_of: Web/API/Pointer_events/Pinch_zoom_gestures
---
{{DefaultAPISidebar("Pointer Events")}}

アプリに*ジェスチャー*を追加すると、使い勝手が大幅に向上します。単純なシングルタッチの*スワイプ*ジェスチャーから、タッチポイント（別名*ポインター*）が異なる方向に移動する、より複雑なマルチタッチの*ツイスト*ジェスチャーまで、さまざまな種類のジェスチャーがあります。

この例では、*ピンチ/ズーム*ジェスチャーを検出する方法を示します。 これは、{{domxref("Pointer_events","ポインターイベント", "", 1)}}を使用して、ユーザーが 2 つのポインターを互いに近づけるか遠ざけるかを検出します。

このアプリの*ライブ*版は [GitHub](https://mdn.github.io/dom-examples/pointerevents/Pinch_zoom_gestures.html) で利用できます。 [ソースコードは GitHub で入手できます](https://github.com/mdn/dom-examples/blob/master/pointerevents/Pinch_zoom_gestures.html)。 プルリクエストや[バグレポート](https://github.com/mdn/dom-examples/issues)は大歓迎です。

## 例

この例では、{{domxref("Pointer_events","ポインターイベント", "", 1)}}を使用して、指、マウス、ペンなど、あらゆる種類の 2 つのポインティングデバイスを同時に検出します。 2 つのポインターを互いに近づけるピンチイン（ズームアウト、縮小）ジェスチャーでは、ターゲット要素の背景色が水色 (`lightblue`) に変わります。 2つのポインターを互いに遠ざけるピンチアウト（ズームイン、拡大）ジェスチャーでは、ターゲット要素の背景色がピンク (`pink`) に変わります。

### タッチターゲットの定義

アプリは {{HTMLElement("div")}} を使用してポインターのターゲット領域を定義します。

```html
<style>
  div {
    margin: 0em;
    padding: 2em;
  }
  #target {
    background: white;
    border: 1px solid black;
  }
</style>
```

### グローバルな状態

2 つのポインターのジェスチャーをサポートするには、さまざまなイベントフェーズでポインターのイベント状態を保存する必要があります。このアプリは、イベント状態をキャッシュするために 2 つのグローバル変数を使用します。

```js
// イベント状態をキャッシュするグローバル変数
var evCache = new Array();
var prevDiff = -1;
```

### イベントハンドラーの登録

イベントハンドラーは {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}} and {{domxref("HTMLElement/pointerup_event", "pointerup")}} のポインターイベントに登録します。 {{domxref("HTMLElement/pointerup_event", "pointerup")}} ハンドラーは {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} のイベントにも使用します。 これら 4 つのイベントは、このアプリでは同じ意味を持っているからです。

```js
function init() {
 // ポインターターゲット用のイベントハンドラーをインストールする
 var el=document.getElementById("target");
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // pointer{up,cancel,out,leave} イベントの意味は - このアプリでは -
 // 同じであるため、これらのイベントに同じハンドラーを使用する。
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}
```

### ポインターダウン

{{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントは、ポインター (マウス、ペン/スタイラス、タッチ画面上のタッチポイント) が*接触面*に接触したときに発生します。 このアプリでは、このダウンイベントが 2 つのポインターのピンチ/ズームジェスチャーの一部である場合に備えて、イベントの状態をキャッシュする必要があります。

```js
function pointerdown_handler(ev) {
 // pointerdown イベントは、タッチ操作の開始を知らせます。
 // このイベントは2本指ジェスチャーをサポートするためにキャッシュされます
 evCache.push(ev);
 log("pointerDown", ev);
}
```

### ポインター移動

{{domxref("HTMLElement/pointermove_event", "pointermove")}} イベントハンドラーは、ユーザーが2ポインターのピンチ/ズームジェスチャーを呼び出しているかどうかを検出します。 2つのポインターが下がっていてポインター間の距離が増加している場合（ピンチアウトまたはズームイン）、要素の背景色がピンク (`pink`) に変わり、ポインター間の距離が減少している場合（ピンチインまたはズームアウト） 背景色が水色 (`lightblue`) に変わります。 より洗練されたアプリでは、ピンチインまたはピンチアウトの決定を使用してアプリ固有の意味論を適用できます。

このイベントが処理されると、ターゲットの境界線が破線 (`dashed`) に設定され、要素が移動イベントを受け取ったことを明確に視覚的に示します。

```js
function pointermove_handler(ev) {
 // この関数は、 2 つのポインターの水平ピンチ/ズームジェスチャーを実装しています。
 //
 // 2つのポインター間の距離が広がると（ズームイン）、
 // ターゲット要素の背景色は "pink" に変わり、
 // 縮まると（ズームアウト）、色は "lightblue" に変わります。
 //
 // この関数は、ポインターのターゲットが移動イベントを受け取ったことを
 // 視覚的に示すために、ターゲット要素の境界線を "dashed" に設定します。
 log("pointerMove", ev);
 ev.target.style.border = "dashed";

 // キャッシュ内でこのイベントを見つけ、このイベントの記録を更新します
 for (var i = 0; i < evCache.length; i++) {
   if (ev.pointerId == evCache[i].pointerId) {
      evCache[i] = ev;
   break;
   }
 }

 // ポインターが 2 つダウンしている場合は、ピンチジェスチャーを確認します
 if (evCache.length == 2) {
   // 2 つのポインター間の距離を計算
   var curDiff = Math.abs(evCache[0].clientX - evCache[1].clientX);

   if (prevDiff > 0) {
     if (curDiff > prevDiff) {
       // 2 つのポインター間の距離が増えた
       log("Pinch moving OUT -> Zoom in", ev);
       ev.target.style.background = "pink";
     }
     if (curDiff < prevDiff) {
       // 2 つのポインター間の距離が減った
       log("Pinch moving IN -&gt; Zoom out",ev);
       ev.target.style.background = "lightblue";
     }
   }

   // 次の移動イベントのために距離をキャッシュします
   prevDiff = curDiff;
 }
}
```

### ポインターアップ

{{domxref("HTMLElement/pointerup_event", "pointerup")}} イベントは、ポインターが*接触面*から上がると発生します。 これが発生すると、イベントはイベントキャッシュから削除され、ターゲット要素の背景色と境界線は元の値に戻ります。

このアプリでは、このハンドラーは {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}} のイベントにも使用します。

```js
function pointerup_handler(ev) {
  log(ev.type, ev);
  // このポインターをキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  remove_event(ev);
  ev.target.style.background = "white";
  ev.target.style.border = "1px solid black";

  // ポインター数が2未満の場合は、以前の距離をリセットします
  if (evCache.length < 2) {
    prevDiff = -1;
  }
}
```

### アプリの UI

アプリは、タッチ領域に {{HTMLElement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。

ブラウザーの既定のタッチ動作が、このアプリのポインター処理をオーバーライドしないようにするために、 {{cssxref("touch-action")}} プロパティを {{HTMLElement("body")}} 要素に適用しています。

```html
<body onload="init();" style="touch-action:none">
 <div id="target">2 つの点に触れたままにして、ピンチインまたはピンチアウトしてください。<br/>
    ピンチが開いている場合（ズームイン）は背景色がピンクに変わり、
    ピンチが閉じている場合（ズームアウト）は背景色が水色に変わります。</div>
 <!-- UI for logging/debugging -->
 <button id="log" onclick="enableLog(event);">Start/Stop event logging</button>
 <button id="clearlog" onclick="clearLog(event);">Clear the log</button>
 <p></p>
 <output></output>
</body>
```

### その他の関数

これらの関数はアプリをサポートしますが、イベントの流れに直接は関係しません。

#### キャッシュ管理

この関数はグローバルイベントキャッシュの `evCache` の管理に役立ちます。

```js
function remove_event(ev) {
 // このイベントをターゲットのキャッシュから削除する
 for (var i = 0; i < evCache.length; i++) {
   if (evCache[i].pointerId == ev.pointerId) {
     evCache.splice(i, 1);
     break;
   }
 }
}
```

#### イベントログ

これらの関数は、イベント活動をアプリのウィンドウに送信するために使用します（デバッグとイベントの流れに関する学習をサポートするため）。

```js
// イベントをログ出力するフラグ
var logEvents = false;

// ログ/デバッグ関数
function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(prefix, ev) {
  if (!logEvents) return;
  var o = document.getElementsByTagName('output')[0];
  var s = prefix + ": pointerID = " + ev.pointerId +
                " ; pointerType = " + ev.pointerType +
                " ; isPrimary = " + ev.isPrimary;
  o.innerHTML += s + "
";
}

function clearLog(event) {
 var o = document.getElementsByTagName('output')[0];
 o.innerHTML = "";
}
```

## 関連情報

- [Firefox Nightly にポインターイベントが追加されました](https://hacks.mozilla.org/2015/08/pointer-events-now-in-firefox-nightly/)。 Mozilla Hacks より、Matt Brubeck とJason Weathersby 著、 2015 年 8 月 4 日（英語）
- [jQuery によるポインターイベントのポリフィル](https://github.com/jquery-archive/PEP)（英語）
- [ジェスチャー](https://material.io/design/interaction/gestures.html) マテリアルデザイン（英語）
