---
title: ポインターロック API
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{DefaultAPISidebar("Pointer Lock API")}}

**ポインターロック API** （以前は _マウスロック API_ と呼ばれていました）は、ビューポート内のマウスカーソルの絶対位置だけでなく、時間の経過に伴うマウスの動き（すなわち、デルタ）に基づく入力方法を提供します。これにより、マウスの生の移動量を知ることができ、マウスイベントのターゲットを1つの要素にロックでき、マウスが一方向へどれだけ移動できるかの制限を除去でき、視野からカーソルを取り除くことができます。これらは、一人称視点の三次元ゲームなどで理想的です。

さらにこの API は、動きのコントロールやオブジェクトの回転、エントリーの変更にかなりのマウス操作が必要になるアプリケーションで役立ちます。例えばなんらかのボタンをクリックすることなく、マウスを動かすだけで視野角を制御できます。ボタンは他の操作のために使用できます。また、地図や衛星画像を見るアプリでも役に立ちます。

ポインターロックでは、カーソルがブラウザーやスクリーンの境界を通り過ぎるときでもマウスイベントにアクセスできます。例えばユーザーは限りなくマウスを動かすことで、三次元モデルの回転や操作を続けることができます。ポインターロックがなければ、ポインターがブラウザーまたはスクリーンの端に達したときに回転や操作が止まります。ゲームのプレイヤーはマウスカーソルがゲームのプレイ領域から外れて、別のアプリケーションを意図せずクリックしてゲームからマウスのフォーカスが外れてしまうことを心配せずに、熱中してボタンをクリックしたり、マウスカーソルをあちこちに動かしたりすることができるようになります。

## 基本概念

ポインターロックは[ポインターキャプチャ](/ja/docs/Web/API/Pointer_events#ポインターキャプチャ)と関係があります。ポインターキャプチャはマウスのドラッグ中にターゲットの要素へ継続的にイベントを提供しますが、マウスのボタンを離すとイベントが停止します。ポインターロックとポインターキャプチャの違いは以下のとおりです。

- ポインターロックは永続的です。明示的に API が呼び出されるかユーザーが特定の解放ジェスチャを行うまで、マウスを解放しません。
- ポインターロックはブラウザーまたはスクリーンの境界に制限されません。
- ポインターロックはマウスボタンの状態に関係なく、イベントが発生し続けます。
- ポインターロックはカーソルを隠します。

## メソッド/プロパティの概要

ここでは、ポインターロック仕様に関係するプロパティやメソッドを簡単に説明します。

### requestPointerLock()

ポインターロック API は[全画面 API](/ja/docs/Web/API/Fullscreen_API)と同様に、DOM 要素に新しいメソッド {{domxref("Element.requestPointerLock","requestPointerLock()")}} を追加することで拡張しています。次の例では {{htmlelement("canvas")}} 要素にポインターロックをリクエストします。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> [!NOTE]
> ユーザーが[既定のロック解除ジェスチャ](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture)<sup>(英語)</sup>でポインターロックを解除した場合、またはこの文書に対して以前にポインターロックが入力されていない場合、[エンゲージメントジェスチャ](https://w3c.github.io/pointerlock/#dfn-engagement-gesture)<sup>(英語)</sup>の結果として生成されるイベントを [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock)<sup>(英語)</sup> が成功する前に、文書内で受信する必要があります。（<https://w3c.github.io/pointerlock/#extensions-to-the-element-interface><sup>(英語)</sup> より）

オペレーティングシステムは既定でマウス加速機能を有効にしています。これは、ゆっくり正確な動きが必要な場合（グラフィックパッケージの使用を考えてみてください）にも便利ですが、高速のマウス操作で長い距離を移動したい場合（スクロールや複数のファイルの選択を考えてみてください）にも便利です。しかし、一人称視点の一部のゲームでは、カメラの回転を制御するために生のマウス入力データが好まれます。高速でも低速でも同じ距離の移動に対して同じ回転が得られます。プロゲーマーによれば、これによりゲーム操作の品質と精度が向上します。

OS レベルのマウス加速機能を無効にして生のマウス入力を利用するには、`unadjustedMovement` を `true` に設定します。

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Promise と Promise 以外の requestPointerLock() バージョンの扱い

上記のコードスニペットは、プロミスベースの `requestPointerLock()` または `unadjustedMovement` オプションを対応していないブラウザーでも動作します。[`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子は Promise を返さない関数の前でも使用でき、options オブジェクトは対応していないブラウザーでは無視されます。

ただし、混乱を招く可能性や、ほかの潜在的な副作用（例えば、対応していないブラウザーで `requestPointerLock().then()` を使用するとエラーが発生します）があるため、次のようなコードを使用して明示的に扱うことができます。

```js
function requestPointerLockWithUnadjustedMovement() {
  const promise = myTargetElement.requestPointerLock({
    unadjustedMovement: true,
  });

  if (!promise) {
    console.log("マウス加速機能の無効化には対応していません");
    return;
  }

  return promise
    .then(() => console.log("ポインターがロックされました"))
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        // 一部のプラットフォームは調整なしの移動に対応していない場合があります。
        // 通常のポインターロックを再度リクエストできます。
        return myTargetElement.requestPointerLock();
      }
    });
}
```

### pointerLockElement と exitPointerLock()

ポインターロック API は {{domxref("Document")}} インターフェイスも拡張し、新しいプロパティとメソッドを追加しています。

- {{domxref("Document.pointerLockElement","pointerLockElement")}} は、現在ロックされている要素がある場合に、その要素へアクセスするために使用します。
- {{domxref("Document.exitPointerLock","exitPointerLock()")}} は、ポインターロックを終了するために使用します。

{{domxref("Document.pointerLockElement","pointerLockElement")}} プロパティは要素が現在ポインターがロック状態であるかを判断する（例えば論理型でチェックを行う）ため、またはロックされた要素があればその要素への参照を得るために有用です。

`pointerLockElement` の使用例を示します。

```js
if (document.pointerLockElement === canvas) {
  console.log("ポインターはロックされました");
} else {
  console.log("ポインターはロック解除されました");
}
```

{{domxref("Document.exitPointerLock()")}} メソッドはポインターロックを終えるために使用され、{{domxref("Element.requestPointerLock","requestPointerLock()")}} と同様に {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} イベントや {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントを用いて非同期的に動作します。使用例は以下のとおりです。

```js
document.exitPointerLock();
```

## pointerlockchange イベント

ポインターロックの状態が変化したとき、例えば {{domxref("Element.requestPointerLock","requestPointerLock()")}} や {{domxref("Document.exitPointerLock","exitPointerLock()")}} を呼び出したときや、ユーザーが ESC キーを押下したときなどに、{{domxref("Document/pointerlockchange_event", "pointerlockchange")}} イベントが `document` に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。

```js
document.addEventListener("pointerlockchange", lockChangeAlert);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("ポインターはロックされました");
    // 応答として役に立つ処理
  } else {
    console.log("ポインターはロック解除されました");
    // 応答として役に立つ処理
  }
}
```

## pointerlockerror イベント

{{domxref("Element.requestPointerLock","requestPointerLock()")}} または {{domxref("Document.exitPointerLock","exitPointerLock()")}} の呼び出しによりエラーが発生したときは、{{domxref("Document/pointerlockerror_event", "pointerlockerror")}} イベントが `document` に発生します。これはシンプルなイベントであり、付加的なデータは含まれません。

```js
document.addEventListener("pointerlockerror", lockError);

function lockError(e) {
  alert("ポインターロックに失敗しました");
}
```

## Mouse イベントの拡張

ポインターロック API は通常の {{domxref("MouseEvent")}} インターフェイスを、movement 属性で拡張します。マウスイベントに新たに追加された 2 つの属性 {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} が、マウスポインターの位置の変化を提供します。引数の値は {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.screenX","screenX")}} および {{domxref("MouseEvent.screenY","screenY")}} の値同士の差と同じであり、それらのプロパティは 2 つ連続して発生する {{domxref("Element/mousemove_event", "mousemove")}} イベント `eNow` および `ePrevious` に格納されます。言い換えると、ポインターロックの引数 `movementX` は、`eNow.screenX - ePrevious.screenX` になります。

### ロックされた状態

ポインターロックが有効であるとき、標準 {{domxref("MouseEvent")}} のプロパティである {{domxref("MouseEvent.clientX","clientX")}}、{{domxref("MouseEvent.clientY","clientY")}}、{{domxref("MouseEvent.screenX","screenX")}}、{{domxref("MouseEvent.screenY","screenY")}} は、マウスが動いていないかのように値が固定されます。{{domxref("MouseEvent.movementX","movementX")}} プロパティおよび {{domxref("MouseEvent.movementY","movementY")}} プロパティが、マウスの位置の変化を提供し続けます。マウスが一方向へ連続的に移動するとしても、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} の値に制限はありません。マウスカーソルは存在せず、ウィンドウから外れたりスクリーンの端で止まったりしないという考え方です。

### ロックが解除された状態

引数 {{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} はマウスのロック状態にかかわらず有効であり、ロックされていない状態でも利便性のために使用できます。

マウスのロックが解除されると、システムカーソルが存在するようになり、ブラウザーがウィンドウ表示に戻ります。このとき、{{domxref("MouseEvent.movementX","movementX")}} および {{domxref("MouseEvent.movementY","movementY")}} は 0 に設定されるかもしれません。

## シンプルな例の解説

ポインターロックの使用方法やシンプルな制御システムの設定方法を示すため、[ポインターロックのデモ](https://mdn.github.io/dom-examples/pointer-lock/)<sup>(英語)</sup>を作成しました ([ソースコードを確認する](https://github.com/mdn/dom-examples/tree/main/pointer-lock)<sup>(英語)</sup>)。このデモでは、JavaScript を使用して {{htmlelement("canvas")}} 要素上にボールを描画します。キャンバスをクリックすると、ポインターロックがマウスポインターを取り除き、マウスを使用してボールを直接動かせるようになります。このデモの仕組みを見ていきましょう。

キャンバス内の、x および y の初期位置を設定します。

```js
let x = 50;
let y = 50;
```

キャンバスがクリックされたときに、そのキャンバスで `requestPointerLock()` メソッドを実行するイベントリスナーを設定します。これによりポインターロックが開始します。`document.pointerLockElement` の確認は、すでに有効なポインターロックがあるかどうかを確認するためです。キャンバス内で既にポインターロックを保持している場合に、キャンバス内をクリックするたびに `requestPointerLock()` を呼び続ける必要はありません。

```js
canvas.addEventListener("click", async () => {
  if (!document.pointerLockElement) {
    await canvas.requestPointerLock({
      unadjustedMovement: true,
    });
  }
});
```

> [!NOTE]
> 上記のスニペットは、Promise バージョンの `requestPointerLock()` に対応していないブラウザーでも動作します。説明については、[Promise と Promise 以外の requestPointerLock() バージョンの扱い](#promise_と_promise_以外の_requestpointerlock_バージョンの扱い)を参照してください。

ポインターロックイベント `pointerlockchange` のイベントリスナーを設定します。イベントが発生したら、ポインターロックの変更を制御するために `lockChangeAlert()` という名前の関数を実行します。

```js
document.addEventListener("pointerlockchange", lockChangeAlert);
```

この関数は、`pointerLockElement` プロパティがキャンバスを示しているかを確認します。示している場合は、マウスの移動を扱うために、イベントリスナーを `updatePosition()` に設定します。示していない場合は、イベントリスナーを再び削除します。

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("ポインターはロックされました");
    document.addEventListener("mousemove", updatePosition);
  } else {
    console.log("ポインターはロック解除されました");
    document.removeEventListener("mousemove", updatePosition);
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
  tracker.textContent = `X 座標: ${x}, Y 座標: ${y}`;

  animation ??= requestAnimationFrame(() => {
    animation = null;
    canvasDraw();
  });
}
```

`canvasDraw()` 関数は、現在の `x` および `y` の位置にボールを描画します。

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## IFrame の制限

ポインターロックが一度にロックできる {{htmlelement("iframe")}} は1つだけです。`<iframe>`をロックすると、別の`<iframe>`をロックしてターゲットを切り替えることはできません。ポインターロックはエラーになります。この制限を避けるため、始めにロックされた`<iframe>`のロックを解除してから、別の`<iframe>`をロックしてください。

`<iframe>`は既定では動作しますが、「サンドボックス化された」`<iframe>`はポインターロックをブロックします。この制限を回避するには、`<iframe sandbox="allow-pointer-lock">`を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MouseEvent")}}
- {{domxref("Element.requestPointerLock()")}}
