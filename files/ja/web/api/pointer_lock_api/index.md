---
title: ポインターロック API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: d4619276d67ca1ee02bd964d884ec52c2aa2ad4b
---

{{DefaultAPISidebar("Pointer Lock API")}}

**ポインターロック API** （以前は _マウスロック API_ と呼ばれていました）は、ビューポート内のマウスカーソルの絶対位置だけでなく、時間の経過に伴うマウスの動き（すなわち、デルタ）に基づく入力方法を提供します。これにより、マウスの生の移動量を知ることができ、マウスイベントのターゲットをひとつの要素にロックでき、マウスが一方向へどれだけ移動できるかの制限を除去でき、視野からカーソルを取り除くことができます。これらは、本人視点の 3D ゲームなどで理想的です。

さらにこの API は、動きのコントロールやオブジェクトの回転、エントリーの変更にかなりのマウス操作が必要になるアプリケーションで役立ちます。例えばなんらかのボタンをクリックすることなく、マウスを動かすだけで視野角を制御できます。ボタンは他の操作のために使用できます。また、地図や衛星画像を見るアプリでも役に立ちます。

ポインターロックでは、カーソルがブラウザーやスクリーンの境界を通り過ぎるときでもマウスイベントにアクセスできます。例えばユーザーは限りなくマウスを動かすことで、3D モデルの回転や操作を続けることができます。ポインターロックがなければ、ポインターがブラウザーまたはスクリーンの端に達したときに回転や操作が止まります。ゲームのプレイヤーはマウスカーソルがゲームのプレイ領域から外れて、別のアプリケーションを意図せずクリックしてゲームからマウスのフォーカスが外れてしまうことを心配せずに、熱中してボタンをクリックしたり、マウスカーソルをあちこちに動かしたりすることができるようになります。

## 基本概念

ポインターロックは [マウスキャプチャ](/ja/docs/Web/API/Element/setCapture) と関係があります。マウスキャプチャはマウスのドラッグ中にターゲットの要素へ継続的にイベントを提供しますが、マウスのボタンを離すとイベントが停止します。ポインターロックとマウスキャプチャの違いは以下のとおりです。

- ポインターロックは永続的です。明示的に API が呼び出されるかユーザーが特定の解放ジェスチャを行うまで、マウスを解放しません。
- ポインターロックはブラウザーまたはスクリーンの境界に制限されません。
- ポインターロックはマウスボタンの状態に関係なく、イベントが発生し続けます。
- ポインターロックはカーソルを隠します。

## メソッド/プロパティの概要

ここでは、ポインターロック仕様に関係するプロパティやメソッドを簡単に説明します。

### requestPointerLock()

ポインターロック API は [全画面 API](/ja/docs/Web/API/Fullscreen_API) と同様に、 DOM 要素に新たなメソッド {{domxref("Element.requestPointerLock","requestPointerLock()")}} を追加することで拡張しています。接頭辞が最近削除されましたので、例えば `canvas` 要素で ポインターロックを要求したい場合は、現在は以下のように宣言します。

```js
canvas.requestPointerLock =
  canvas.requestPointerLock || canvas.mozRequestPointerLock;

canvas.requestPointerLock();
```

> [!NOTE]
> ユーザーが[既定のロック解除ジェスチャ](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture)でポインターロックを解除した場合、またはこの文書に対して以前にポインターロックが入力されていない場合、[エンゲージメントジェスチャ](https://w3c.github.io/pointerlock/#dfn-engagement-gesture)の結果として生成されるイベントを [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) が成功する前に、文書内で受信する必要があります。（<https://w3c.github.io/pointerlock/#extensions-to-the-element-interface> より）

### pointerLockElement と exitPointerLock()

ポインターロック API は {{domxref("Document")}} インターフェイスも拡張しており、新たなプロパティやメソッドを追加しています。新たなプロパティ {{domxref("Document.pointerLockElement","pointerLockElement")}} は、現在ロックしている要素がある場合に、その要素へアクセスするために使用します。また、 {{domxref("Document")}} 新たなメソッドである {{domxref("Document.exitPointerLock","exitPointerLock()")}} は、名前が示唆するとおりポインターロックを終えるために使用します。

{{domxref("Document.pointerLockElement","pointerLockElement")}} プロパティは要素が現在ポインターがロック状態であるかを判断する（例えば論理型でチェックを行う）ため、またはロックされた要素があればその要素への参照を得るために有用です。

`pointerLockElement` の使用例を示します。

```js
if (
  document.pointerLockElement === canvas ||
  document.mozPointerLockElement === canvas
) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

{{domxref("Document.exitPointerLock()")}} メソッドはポインターロックを終えるために使用され、{{domxref("Element.requestPointerLock","requestPointerLock()")}} と同様に {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} イベントや {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを用いて非同期的に動作します。使用例は以下のとおりです。

```js
document.exitPointerLock =
  document.exitPointerLock || document.mozExitPointerLock;

// ロック解除を試みる
document.exitPointerLock();
```

## pointerlockchange イベント

ポインターロックの状態が変化したとき、例えば {{domxref("Element.requestPointerLock","requestPointerLock()")}} や {{domxref("Document.exitPointerLock","exitPointerLock()")}} を呼び出したときや、ユーザーが ESC キーを押下したときなどに、{{domxref("Document/pointerlockchange_event", "pointerlockchange")}} イベントが `document` に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。

```js
if ("onpointerlockchange" in document) {
  document.addEventListener("pointerlockchange", lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
  document.addEventListener("mozpointerlockchange", lockChangeAlert, false);
}

function lockChangeAlert() {
  if (
    document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas
  ) {
    console.log("The pointer lock status is now locked");
    // 応答として役に立つ処理
  } else {
    console.log("The pointer lock status is now unlocked");
    // 応答として役に立つ処理
  }
}
```

## pointerlockerror イベント

{{domxref("Element.requestPointerLock","requestPointerLock()")}} または {{domxref("Document.exitPointerLock","exitPointerLock()")}} の呼び出しによりエラーが発生したときは、{{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントが `document` に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。

```js
document.addEventListener("pointerlockerror", lockError, false);
document.addEventListener("mozpointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

> [!NOTE]
> Firefox 50 まで、上記のイベントは `moz` 接頭辞を付加していました。

## Mouse イベントの拡張

ポインターロック API は通常の {{domxref("MouseEvent")}} インターフェイスを、movement 属性で拡張します。新たな 2 つの属性 {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} が、マウスポインターの位置の変化を提供します。引数の値は {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.screenX","screenX")}} および {{domxref("MouseEvent.screenY","screenY")}} の値同士の差と同じであり、それらのプロパティは 2 つ続いて発生する {{domxref("Element/mousemove_event", "mousemove")}} イベント `eNow` および `ePrevious` に保存されます。言い換えると、ポインターロックのパラメーター `movementX` は、`eNow.screenX - ePrevious.screenX` になります。

### ロックされた状態

ポインターロックが有効であるとき、標準 {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.clientX","clientX")}}、{{domxref("MouseEvent.clientY","clientY")}}、{{domxref("MouseEvent.screenX","screenX")}}、{{domxref("MouseEvent.screenY","screenY")}} は、マウスが動いていないかのように値が固定されます。{{domxref("MouseEvent.movementX","movementX")}} プロパティおよび {{domxref("MouseEvent.movementY","movementY")}} プロパティが、マウスの位置の変化を提供し続けます。マウスが一方向へ連続的に移動するとしても、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} の値に制限はありません。マウスカーソルは存在せず、ウィンドウから外れたりスクリーンの端で止まったりしないという考え方です。

### ロックが解除された状態

引数 {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} はマウスのロック状態にかかわらず有効であり、ロックされていない状態でも利便性のために使用できます。

マウスのロックが解除されると、システムカーソルが存在するようになり、ブラウザーがウィンドウ表示に戻ります。このとき、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} は 0 に設定されるかもしれません。

## シンプルな例のウォークスルー

ポインターロックの使用方法やシンプルな制御システムの設定方法を示すため、[シンプルな ポインターロックのデモ](https://mdn.github.io/dom-examples/pointer-lock/) を作成しました ([ソースコードを確認する](https://github.com/mdn/dom-examples/tree/master/pointer-lock))。このデモでは、JavaScript を使用して {{htmlelement("canvas")}} 要素上にボールを描画します。canvas をクリックすると ポインターロックがマウスポインターを取り除いて、マウスを使用してボールを直接動かすことができます。このデモの仕組みを見ていきましょう。

canvas 内の、x および y の初期位置を設定します。

```js
const x = 50;
const y = 50;
```

現在は ポインターロックのメソッドに接頭辞がついていますので、ブラウザー実装ごとに処理を分けています。

```js
canvas.requestPointerLock =
  canvas.requestPointerLock || canvas.mozRequestPointerLock;

document.exitPointerLock =
  document.exitPointerLock || document.mozExitPointerLock;
```

キャンバスがクリックされたときに、キャンバスで `requestPointerLock()` メソッドを実行するイベントリスナーを設定します。これは、ポインターロックを開始します。

```js
canvas.onclick = () => {
  canvas.requestPointerLock();
};
```

ポインターロックイベント `pointerlockchange` のイベントリスナーを設定します。イベントが発生したら、ポインターロックの変更を制御するために `lockChangeAlert()` という名前の関数を実行します。

```js
// ポインターロックのイベントリスナー

// さまざまなブラウザー向けに、ポインターロックの状態変化イベントをフックする
document.addEventListener("pointerlockchange", lockChangeAlert, false);
document.addEventListener("mozpointerlockchange", lockChangeAlert, false);
```

この関数は、 pointLockElement プロパティがキャンバスを示しているかを確認します。示している場合は、マウスの移動を扱うために、イベントリスナーを `updatePosition()` に設定します。示していない場合は、イベントリスナーを再び削除します。

```js
function lockChangeAlert() {
  if (
    document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas
  ) {
    console.log("The pointer lock status is now locked");
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log("The pointer lock status is now unlocked");
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

updatePosition() 関数が、キャンバス内のボールの位置 (`x` および `y`) を更新します。また、ボールがキャンバスの端からはみ出すかをチェックする `if()` 文が含まれています。ボールがはみ出す場合は、反対側の端にボールを描画します。また、[`requestAnimationFrame()`](/ja/docs/Web/API/Window/requestAnimationFrame) がすでに呼び出されたかを確認しており、呼び出された場合は必要に応じて再び呼び出して、キャンバスのシーンを更新するために `canvasDraw()` 関数を呼び出します。さらに、参照用に X および Y の位置を表示するための tracker も設定します。

```js
const tracker = document.getElementById("tracker");

let animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = `X position: ${x}, Y position: ${y}`;

  if (!animation) {
    animation = requestAnimationFrame(() => {
      animation = null;
      canvasDraw();
    });
  }
}
```

`canvasDraw()` 関数は、現在の `x` および `y` の位置にボールを描画します。

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## iframe の制限

ポインターロックが一度にロックできる iframe は 1 つだけです。 iframe をひとつロックすると、別の iframe をロックしてターゲットを切り替えようとすることはできません。ポインターロックはエラーになります。この制限を避けるため、始めにロックされた iframe のロックを解除してから別の iframe をロックしてください。

iframe の既定の動作では、「サンドボックス化された」 iframe が ポインターロックをブロックします。この制限を回避するには、 `<iframe sandbox="allow-pointer-lock">` を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
