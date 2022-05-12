---
title: マルチタッチ操作
slug: Web/API/Pointer_events/Multi-touch_interaction
tags:
  - ガイド
  - ポインターイベント
  - touch
translation_of: Web/API/Pointer_events/Multi-touch_interaction
---
{{DefaultAPISidebar("Pointer Events")}}

ポインターイベントは DOM 入力イベントを拡張して、マウスだけでなくペン/スタイラスやタッチ画面などのさまざまなポインティング入力デバイスをサポートします。*ポインター*は、特定の画面座標セットをターゲットにできるハードウェアにとらわれないデバイスです。 ポインターに単一のイベントモデルを使用すると、ウェブサイト、ウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れたユーザーエクスペリエンスを提供できます。

ポインターイベントはマウスイベントと多くの類似点がありますが、タッチ画面上の複数の指など、複数同時のポインターをサポートしています。 この追加機能は、より豊富なユーザー操作モデルを提供するために使用できますが、マルチタッチ操作 (multi-touch interaction) の処理がさらに複雑になります。 このドキュメントは、異なるマルチタッチ操作を持つポインターイベントを使用して、コード例を介して説明します。

このアプリのライブ版は [Github](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) で利用できます。 [ソースコードは Github で入手できます](https://github.com/mdn/dom-examples/blob/master/pointerevents/Multi-touch_interaction.html)。 プルリクエストや[バグレポート](https://github.com/mdn/dom-examples/issues)は大歓迎です。

## 例

この例では、さまざまなマルチタッチ操作にポインターイベントのさまざまなイベントタイプ（{{domxref("HTMLElement/pointerdown_event", "pointerdown")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}}, {{domxref("HTMLElement/pointerup_event", "pointerup")}} {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} など）を使用する方法を示します。

### タッチターゲットの定義

アプリは {{HTMLElement("div")}} を使用して 3 つの異なるタッチターゲット領域を定義します。

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
</style>
```

### グローバルな状態

マルチタッチ操作に対応するには、さまざまなイベントフェーズの間にポインターのイベント状態を維持することが必要です。 このアプリは、イベント状態をキャッシュするために、ターゲット要素ごとに 1 つのキャッシュで、 3 つの配列を使用します。

```js
// イベントログフラグ
var logEvents = false;

// タッチターゲットごとに 1 つのイベントキャッシュ
var evCache1 = new Array();
var evCache2 = new Array();
var evCache3 = new Array();
```

### イベントハンドラーの登録

イベントハンドラーは {{domxref("HTMLElement/pointerdown_event", "pointerdown")}}, {{domxref("HTMLElement/pointermove_event", "pointermove")}}, {{domxref("HTMLElement/pointerup_event", "pointerup")}} のポインターイベントに登録します。 {{domxref("HTMLElement/pointerup_event", "pointerup")}} のハンドラーは {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}, {{domxref("HTMLElement/pointerout_event", "pointerout")}}, {{domxref("HTMLElement/pointerleave_event", "pointerleave")}} のイベントにも使用します。これら 4 つのイベントは、このアプリでは同じ意味を持っているからです。

```js
function set_handlers(name) {
 // 指定された要素にイベントハンドラーをインストールする
 var el=document.getElementById(name);
 el.onpointerdown = pointerdown_handler;
 el.onpointermove = pointermove_handler;

 // pointer{up,cancel,out,leave} イベントの意味は - このアプリでは -
 // 同じであるため、これらのイベントに同じハンドラーを使用する。
 el.onpointerup = pointerup_handler;
 el.onpointercancel = pointerup_handler;
 el.onpointerout = pointerup_handler;
 el.onpointerleave = pointerup_handler;
}

function init() {
 set_handlers("target1");
 set_handlers("target2");
 set_handlers("target3");
}
```

### ポインターダウン

{{domxref("HTMLElement/pointerdown_event", "pointerdown")}} イベントは、ポインター（マウス、ペン/スタイラス、タッチ画面上のタッチ点）が<em>接触面</em>に接触したときに発生します。 このダウンイベントがマルチタッチ操作の一部である場合、イベントの状態をキャッシュしなければなりません。

このアプリでは、要素の上にポインターを置いてダウンすると、その要素が持つアクティブなタッチ点の数に応じて、要素の背景色が変わります。 色の変更に関する詳細は [`update_background`](#背景色の更新) 関数を参照してください。

```js
function pointerdown_handler(ev) {
 // pointerdown イベントは、タッチ操作の開始を知らせます。
 // このイベントを後で処理するために保存し（これはマルチタッチ
 // 操作の一部になる可能性があります）、背景色を更新します
 push_event(ev);
 if (logEvents) log("pointerDown: name = " + ev.target.id, ev);
 update_background(ev);
}
```

### ポインター移動

{{domxref("HTMLElement/pointermove_event", "pointermove")}} ハンドラーは、ポインターが移動したときに呼び出されます。 別のイベントタイプが発生する前に（例えば、ユーザーがポインターを移動した場合など）複数回呼び出されることがあります。

このアプリでは、ポインターの移動は、要素がこのイベントを受け取ったことを明確に視覚的に示すために、ターゲットの境界線（`border`）を破線（`dashed`）にすることで表します。

```js
function pointermove_handler(ev) {
 // 注: ユーザーが複数の「同時」タッチを行うと、ほとんどのブラウザーは少なくとも1つの
 // pointermove イベントを発生させ、一部はいくつかの pointermove イベントを発生させます。
 //
 // この関数は、ターゲットが移動イベントを受け取ったことを視覚的に示すために、
 // ターゲット要素の border を "dashed" に設定します。
 if (logEvents) log("pointerMove", ev);
 update_background(ev);
 ev.target.style.border = "dashed";
}
```

### ポインターアップ

{{domxref("HTMLElement/pointerup_event", "pointerup")}} イベントは、ポインターが<em>接触面</em>から上がると発生します。 これが発生すると、そのイベントは関連付けられているイベントキャッシュから削除されます。

このアプリでは、このハンドラーは {{domxref("HTMLElement/pointercancel_event", "pointercancel")}}、{{domxref("HTMLElement/pointerleave_event", "pointerleave")}}、{{domxref("HTMLElement/pointerout_event", "pointerout")}} のイベントにも使用します。

```js
function pointerup_handler(ev) {
  if (logEvents) log(ev.type, ev);
  // このタッチ点をキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  remove_event(ev);
  update_background(ev);
  ev.target.style.border = "1px solid black";
}
```

### アプリの UI

アプリは、タッチ領域に {{HTMLElement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。

ブラウザーの既定のタッチの振る舞いが、このアプリのポインター処理をオーバーライドしないようにするために、{{cssxref("touch-action")}} プロパティを {{HTMLElement("body")}} 要素に適用しています。

```html
<body onload="init();" style="touch-action:none">
 <div id="target1"> Tap, Hold or Swipe me 1</div>
 <div id="target2"> Tap, Hold or Swipe me 2</div>
 <div id="target3"> Tap, Hold or Swipe me 3</div>

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

これらの関数は、グローバルイベントキャッシュの `evCache1`、`evCache2`、`evCache3` を管理します。

```js
function get_cache(ev) {
 // このイベントのターゲット要素のキャッシュを返す
 switch(ev.target.id) {
   case "target1": return evCache1;
   case "target2": return evCache2;
   case "target3": return evCache3;
   default: log("Error with cache handling",ev);
 }
}

function push_event(ev) {
 // このイベントをターゲットのキャッシュに保存する
 var cache = get_cache(ev);
 cache.push(ev);
}

function remove_event(ev) {
 // このイベントをターゲットのキャッシュから削除する
 var cache = get_cache(ev);
 for (var i = 0; i < cache.length; i++) {
   if (cache[i].pointerId == ev.pointerId) {
     cache.splice(i, 1);
     break;
   }
 }
}
```

#### 背景色の更新

タッチ領域の背景色は次のように変わります。 アクティブなタッチがない場合は白（`white`）です。 1つのアクティブなタッチは黄色（`yellow`）です。 2つ同時のタッチはピンク（`pink`）で、3つ以上同時のタッチは水色（`lightblue`）です。

```js
function update_background(ev) {
 // 現在ダウンしている同時タッチ/ポインターの数に基づいて
 // 次のように背景色を変更します
 //   white - ターゲット要素にタッチ点がない。 つまり、ポインターのダウンがない。
 //   yellow - 1つのポインターのダウン
 //   pink - 2つのポインターのダウン
 //   lightblue - 3つ以上のポインターのダウン
 var evCache = get_cache(ev);
 switch (evCache.length) {
   case 0:
     // ターゲット要素にタッチ点がない
     ev.target.style.background = "white";
     break;
   case 1:
     // 単独のタッチ点
     ev.target.style.background = "yellow";
     break;
   case 2:
     // 2 つ同時のタッチ点
     ev.target.style.background = "pink";
     break;
   default:
     // 3 つ以上同時のタッチ
     ev.target.style.background = "lightblue";
 }
}
```

#### イベントログ

これらの関数は、アプリのウィンドウへのイベント活動の送信に使用されます（デバッグとイベントの流れに関する学習をサポートするため）。

```js
// イベントログフラグ
var logEvents = false;

function enableLog(ev) {
  logEvents = logEvents ? false : true;
}

function log(name, ev) {
  var o = document.getElementsByTagName('output')[0];
  var s = name + ": pointerID = " + ev.pointerId +
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
