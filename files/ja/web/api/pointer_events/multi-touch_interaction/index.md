---
title: マルチタッチ操作
slug: Web/API/Pointer_events/Multi-touch_interaction
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{DefaultAPISidebar("Pointer Events")}}

ポインターイベントは DOM 入力イベントを拡張して、マウスだけでなくペン/スタイラスやタッチ画面などのさまざまなポインティング入力デバイスをサポートします。*ポインター*は、特定の画面座標セットをターゲットにできるハードウェアにとらわれないデバイスです。 ポインターに単一のイベントモデルを使用すると、ウェブサイト、ウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れたユーザーエクスペリエンスを提供できます。

ポインターイベントはマウスイベントと多くの類似点がありますが、タッチ画面上の複数の指など、複数同時のポインターをサポートしています。 この追加機能は、より豊富なユーザー操作モデルを提供するために使用できますが、マルチタッチ操作 (multi-touch interaction) の処理がさらに複雑になります。 このドキュメントは、異なるマルチタッチ操作を持つポインターイベントを使用して、コード例を介して説明します。

このアプリのライブ版は [Github](https://mdn.github.io/dom-examples/pointerevents/Multi-touch_interaction.html) で利用できます。 [ソースコードは Github で入手できます](https://github.com/mdn/dom-examples/blob/main/pointerevents/Multi-touch_interaction.html)。 プルリクエストや[バグレポート](https://github.com/mdn/dom-examples/issues)は大歓迎です。

## 例

この例では、さまざまなマルチタッチ操作にポインターイベントのさまざまなイベントタイプ（{{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}}, {{domxref("Element/pointerup_event", "pointerup")}} {{domxref("Element/pointercancel_event", "pointercancel")}} など）を使用する方法を示します。

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
const logEvents = false;

// タッチターゲットごとに 1 つのイベントキャッシュ
const evCache1 = [];
const evCache2 = [];
const evCache3 = [];
```

### イベントハンドラーの登録

イベントハンドラーは {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointermove_event", "pointermove")}}, {{domxref("Element/pointerup_event", "pointerup")}} のポインターイベントに登録します。 {{domxref("Element/pointerup_event", "pointerup")}} のハンドラーは {{domxref("Element/pointercancel_event", "pointercancel")}}, {{domxref("Element/pointerout_event", "pointerout")}}, {{domxref("Element/pointerleave_event", "pointerleave")}} のイベントにも使用します。これら 4 つのイベントは、このアプリでは同じ意味を持っているからです。

```js
function setHandlers(name) {
  // 指定された要素にイベントハンドラーをインストールする
  const el = document.getElementById(name);
  el.onpointerdown = pointerdownHandler;
  el.onpointermove = pointermoveHandler;

  // pointer{up,cancel,out,leave} イベントの意味は - このアプリでは -
  // 同じであるため、これらのイベントに同じハンドラーを使用する。
  el.onpointerup = pointerupHandler;
  el.onpointercancel = pointerupHandler;
  el.onpointerout = pointerupHandler;
  el.onpointerleave = pointerupHandler;
}

function init() {
  setHandlers("target1");
  setHandlers("target2");
  setHandlers("target3");
}
```

### ポインターダウン

{{domxref("Element/pointerdown_event", "pointerdown")}} イベントは、ポインター（マウス、ペン/スタイラス、タッチ画面上のタッチ点）が<em>接触面</em>に接触したときに発生します。 このダウンイベントがマルチタッチ操作の一部である場合、イベントの状態をキャッシュしなければなりません。

このアプリでは、要素の上にポインターを置いてダウンすると、その要素が持つアクティブなタッチ点の数に応じて、要素の背景色が変わります。 色の変更に関する詳細は [`update_background`](#背景色の更新) 関数を参照してください。

```js
function pointerdownHandler(ev) {
  // pointerdown イベントは、タッチ操作の開始を知らせます。
  // このイベントを後で処理するために保存し（これはマルチタッチ
  // 操作の一部になる可能性があります）、背景色を更新します
  pushEvent(ev);
  if (logEvents) {
    log(`pointerDown: name = ${ev.target.id}`, ev);
  }
  updateBackground(ev);
}
```

### ポインター移動

{{domxref("Element/pointermove_event", "pointermove")}} ハンドラーは、ポインターが移動したときに呼び出されます。 別のイベントタイプが発生する前に（例えば、ユーザーがポインターを移動した場合など）複数回呼び出されることがあります。

このアプリでは、ポインターの移動は、要素がこのイベントを受け取ったことを明確に視覚的に示すために、ターゲットの境界線 (`border`) を破線 (`dashed`) にすることで表します。

```js
function pointermoveHandler(ev) {
  // 注: ユーザーが複数の「同時」タッチを行うと、ほとんどのブラウザーは少なくとも1つの
  // pointermove イベントを発生させ、一部はいくつかの pointermove イベントを発生させます。
  //
  // この関数は、ターゲットが移動イベントを受け取ったことを視覚的に示すために、
  // ターゲット要素の border を "dashed" に設定します。
  if (logEvents) {
    log("pointerMove", ev);
  }
  updateBackground(ev);
  ev.target.style.border = "dashed";
}
```

### ポインターアップ

{{domxref("Element/pointerup_event", "pointerup")}} イベントは、ポインターが<em>接触面</em>から上がると発生します。 これが発生すると、そのイベントは関連付けられているイベントキャッシュから削除されます。

このアプリでは、このハンドラーは {{domxref("Element/pointercancel_event", "pointercancel")}}、{{domxref("Element/pointerleave_event", "pointerleave")}}、{{domxref("Element/pointerout_event", "pointerout")}} のイベントにも使用します。

```js
function pointerupHandler(ev) {
  if (logEvents) {
    log(ev.type, ev);
  }
  // このタッチ点をキャッシュから削除し、
  // ターゲットの背景色と境界線をリセットします
  removeEvent(ev);
  updateBackground(ev);
  ev.target.style.border = "1px solid black";
}
```

### アプリの UI

アプリは、タッチ領域に {{HTMLElement("div")}} 要素を使用し、ログ記録を有効にするボタンとログを消去するためのボタンを提供します。

ブラウザーの既定のタッチの振る舞いが、このアプリのポインター処理をオーバーライドしないようにするために、{{cssxref("touch-action")}} プロパティを {{HTMLElement("body")}} 要素に適用しています。

```html
<body onload="init();" style="touch-action:none">
  <div id="target1">Tap, Hold or Swipe me 1</div>
  <div id="target2">Tap, Hold or Swipe me 2</div>
  <div id="target3">Tap, Hold or Swipe me 3</div>

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
function getCache(ev) {
  // このイベントのターゲット要素のキャッシュを返す
  switch (ev.target.id) {
    case "target1":
      return evCache1;
    case "target2":
      return evCache2;
    case "target3":
      return evCache3;
    default:
      log("Error with cache handling", ev);
  }
}

function pushEvent(ev) {
  // このイベントをターゲットのキャッシュに保存する
  const evCache = getCache(ev);
  evCache.push(ev);
}

function removeEvent(ev) {
  // このイベントをターゲットのキャッシュから削除する
  const evCache = getCache(ev);
  const index = evCache.findIndex(
    (cachedEv) => cachedEv.pointerId === ev.pointerId,
  );
  evCache.splice(index, 1);
}
```

#### 背景色の更新

タッチ領域の背景色は次のように変わります。 アクティブなタッチがない場合は白 (`white`) です。 1 つのアクティブなタッチは黄色 (`yellow`) です。 2 つ同時のタッチはピンク (`pink`) で、 3 つ以上同時のタッチは水色 (`lightblue`) です。

```js
function updateBackground(ev) {
  // 現在ダウンしている同時タッチ/ポインターの数に基づいて
  // 次のように背景色を変更します
  //   white - ターゲット要素にタッチ点がない。 つまり、ポインターのダウンがない。
  //   yellow - 1つのポインターのダウン
  //   pink - 2つのポインターのダウン
  //   lightblue - 3つ以上のポインターのダウン
  const evCache = getCache(ev);
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

#### イベントの記録

これらの関数は、アプリのウィンドウへのイベント活動の送信に使用されます（デバッグとイベントの流れに関する学習をサポートするため）。

```js
// イベントログフラグ
let logEvents = false;

function enableLog(ev) {
  logEvents = !logEvents;
}

function log(name, ev) {
  const o = document.getElementsByTagName("output")[0];
  const s =
    `${name}:<br>` +
    `  pointerID   = ${ev.pointerId}<br>` +
    `  pointerType = ${ev.pointerType}<br>` +
    `  isPrimary   = ${ev.isPrimary}`;
  o.innerHTML += `${s}<br>`;
}

function clearLog(event) {
  const o = document.getElementsByTagName("output")[0];
  o.innerHTML = "";
}
```
