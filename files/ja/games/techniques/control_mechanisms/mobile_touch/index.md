---
title: モバイルタッチ制御
slug: Games/Techniques/Control_mechanisms/Mobile_touch
l10n:
  sourceCommit: 0f41789370f1744c3d77efb697991d514a32b6c6
---

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}

モバイルゲームの未来は間違いなくウェブであり、多くの開発者はゲーム開発プロセスで[モバイルファースト](/ja/docs/Glossary/Mobile_First)アプローチを選択しています。現代の世界では、これは一般的にタッチ制御の実装も含まれます。このチュートリアルでは、HTML ゲームにモバイル制御を実装し、モバイルタッチ対応デバイスでプレイを楽しむ方法を説明します。

> [!NOTE]
> ゲーム [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) は Phaser で構築されており、制御の管理は Phaser ベースですが、純粋な JavaScript でも実行できます。Phaser を使用する良い点は、より高速な開発のためのヘルパー変数と関数を提供することですが、どのアプローチを選択するかは完全にあなた次第です。

## 純粋な JavaScript アプローチ

タッチイベントを独自に実装できます。イベントリスナーを設定し、関連する関数を割り当てることは非常に簡単です。

```js
const el = document.querySelector("canvas");
el.addEventListener("touchstart", handleStart);
el.addEventListener("touchmove", handleMove);
el.addEventListener("touchend", handleEnd);
el.addEventListener("touchcancel", handleCancel);
```

このようにして、モバイル画面でゲームの {{htmlelement("canvas")}} にタッチするとイベントが発行され、ゲームを好きなように操作できます（例えば、宇宙船を動かすなど）。イベントは次のとおりです。

- [touchstart](/ja/docs/Web/API/Element/touchstart_event) は、ユーザーが画面に指を置いたときに発行されます。
- [touchmove](/ja/docs/Web/API/Element/touchmove_event) は、画面にタッチしながら指を動かしたときに発行されます。
- [touchend](/ja/docs/Web/API/Element/touchend_event) は、ユーザーが画面へのタッチを停止したときに発行されます。
- [touchcancel](/ja/docs/Web/API/Element/touchcancel_event) は、タッチがキャンセルされたとき、例えばユーザーが指を画面の外に移動したときに発行されます。

> [!NOTE]
> [タッチイベント](/ja/docs/Web/API/Touch_events)のリファレンス記事には、より多くの例と情報が記載されています。

### 純粋な JavaScript デモ

[GitHub で利用可能な小さなデモ](https://github.com/end3r/JavaScript-Game-Controls/)にモバイルサポートを実装して、モバイルデバイスで画面にタッチしてプレイヤーの船を動かせるようにしましょう。

2 つのイベント `touchstart` と `touchmove` を使用し、両方とも 1 つの関数で処理します。なぜでしょうか？`touchHandler` 関数は船の位置に適切な変数を割り当てるため、プレイヤーが画面にタッチしても動かさない場合（`touchstart`）と、画面上で指を動かす場合（`touchmove`）の両方のケースで使用できます。

```js
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
```

`touchHandler` 関数は次のようになります。

```js
function touchHandler(e) {
  if (e.touches) {
    playerX = e.touches[0].pageX - canvas.offsetLeft - playerWidth / 2;
    playerY = e.touches[0].pageY - canvas.offsetTop - playerHeight / 2;
    output.textContent = `Touch:\nx: ${playerX}, y: ${playerY}`;
    e.preventDefault();
  }
}
```

タッチが発生した場合（`touches` オブジェクトが空でない場合）、そのオブジェクトに必要なすべての情報があります。最初のタッチ（`e.touches[0]`、この例はマルチタッチ対応ではありません）を取得し、`pageX` と `pageY` 変数を抽出し、Canvas のオフセット（Canvas と画面の端との距離）とプレイヤーの幅と高さの半分を引いて、画面上のプレイヤーの船の位置を設定できます。

![プレイヤーの船のタッチ制御、x と y の位置の出力が表示されています。](controls-touch.png)

正しく動作しているかどうかを確認するために、`output` 要素を使用して `x` と `y` の位置を出力できます。`preventDefault()` 関数は、ブラウザーの移動を防ぐために必要です。これがないと、デフォルトの動作が発生し、Canvas がページの周りにドラッグされ、ブラウザーのスクロールバーが表示されて乱雑に見えます。

## Phaser でのタッチイベント

独自に実行する必要はありません。Phaser のようなフレームワークは、タッチイベントを管理するシステムを提供します。[タッチイベントの管理](https://phaser.io/docs/2.6.1/Phaser.Touch.html)を参照してください。

### ポインターの理論

[ポインター](https://phaser.io/docs/2.6.1/Phaser.Pointer.html)は、タッチスクリーン上の単一の指を表します。Phaser はデフォルトで 2 つのポインターを開始するため、2 本の指が同時にアクションを実行できます。Captain Rogers はシンプルなゲームです。2 本の指で制御でき、左の指が船を動かし、右の指が船の銃を制御します。マルチタッチやジェスチャーはありません。すべてが単一のポインター入力で処理されます。

`this.game.input.addPointer` を使用してゲームにポインターを追加できます。最大 10 個のポインターを同時に管理できます。最近使用されたポインターは `this.game.input.activePointer` オブジェクトで利用できます。画面上で最近アクティブな指です。

特定のポインターにアクセスする必要がある場合は、`this.game.input.pointer1`、`this.game.input.pointer2` などですべて利用できます。これらは動的に割り当てられるため、画面に 3 本の指を置くと、`pointer1`、`pointer2`、`pointer3` がアクティブになります。例えば 2 番目の指を削除しても、他の 2 つには影響せず、再度設定すると、最初に利用可能なプロパティが使用されるため、`pointer2` が再度使用されます。

最近アクティブなポインターの座標は、`this.game.input.x` と `this.game.input.y` 変数を介して素早く取得できます。

### 入力イベント

ポインターを直接使用する代わりに、`this.game.input` イベント（`onDown`、`onUp`、`onTap`、`onHold` など）をリッスンすることもできます。

```js
this.game.input.onDown.add(itemTouched, this);

function itemTouched(pointer) {
  // 何かを実行
}
```

`itemTouched()` 関数は、画面にタッチして `onDown` イベントがディスパッチされたときに実行されます。`pointer` 変数には、イベントをアクティブにしたポインターに関する情報が含まれます。

このアプローチは、一般的に利用可能な `this.game.input` オブジェクトを使用しますが、スプライトやボタンなどのゲームオブジェクトで `onInputOver`、`onInputOut`、`onInputDown`、`onInputUp`、`onDragStart`、`onDragStop` を使用してアクションを検出することもできます。

```js
this.button.events.onInputOver.add(itemTouched, this);

function itemTouched(button, pointer) {
  // 何かを実行
}
```

このようにして、プレイヤーの船など、ゲーム内の任意のオブジェクトにイベントをアタッチし、ユーザーが実行するアクションに反応できます。

Phaser を使用するもう 1 つの利点は、作成するボタンがモバイルでのタッチでもデスクトップでのクリックでも、あらゆる種類の入力を受け取ることです。フレームワークがバックグラウンドでこれを処理します。

### 実装

ユーザー入力をリッスンするインタラクティブなオブジェクトを追加する最も簡単な方法は、ボタンを作成することです。

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

これは `MainMenu` 状態で形成されます。画面の左上隅から 10 ピクセルの位置に配置され、`logo-enclave` 画像を使用し、タッチされると `clickEnclave()` 関数を実行します。これはモバイルとデスクトップの両方で箱から出してすぐに機能します。メインメニューにはいくつかのボタンがあり、ゲームを開始するボタンも含まれています。

実際のゲームプレイでは、より多くのボタンを作成して小さなモバイル画面をそれらで覆う代わりに、少し異なるものを使用できます。特定のアクションに応答する見えない領域を作成します。デザインの観点から、画面の半分をボタン画像で覆うことなく、アクティビティのフィールドを大きくする方が良いです。例えば、画面の右側をタップすると武器が発射されます。

```js
this.buttonShoot = this.add.button(
  this.world.width * 0.5,
  0,
  "button-alpha",
  null,
  this,
);
this.buttonShoot.onInputDown.add(this.goShootPressed, this);
this.buttonShoot.onInputUp.add(this.goShootReleased, this);
```

上記のコードは、画面の右半分をカバーする透明な画像を使用して新しいボタンを作成します。より複雑なアクションを実行したい場合は、入力ダウンと入力アップで個別に関数を割り当てることができますが、このゲームでは画面の右側にタッチすると右に弾丸が発射されます。これがこのケースで必要なすべてです。

プレイヤーの移動は、4 つの方向ボタンを作成することで管理できますが、タッチスクリーンの利点を活用して、プレイヤーの船をドラッグすることもできます。

```js
const player = this.game.add.sprite(30, 30, "ship");
player.inputEnabled = true;
player.input.enableDrag();
player.events.onDragStart.add(onDragStart, this);
player.events.onDragStop.add(onDragStop, this);

function onDragStart(sprite, pointer) {
  // ドラッグ中に何かを実行
}
```

船を引っ張って、その間に何かを実行し、ドラッグが停止したときに反応できます。Phaser でのドラッグは、有効にすると箱から出してすぐに機能します。スプライトの位置を手動で設定する必要はないため、`onDragStart()` 関数を空のままにするか、デバッグ出力を配置して正しく動作しているかどうかを確認できます。`pointer` 要素には、ドラッグされた要素の現在の位置を格納する `x` と `y` 変数が含まれています。

### 専用プラグイン

仮想ゲームパッドやジョイスティックなど、さまざまな方法でタッチイベントを処理し、UI コントロールをレンダリングする専用プラグインを使用できます。
仮想ゲームパッドとジョイスティックを使用するプラグインの例を次に示します。

- [phaser-plugin-virtual-gamepad](https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad) (Phaser 2)
- [Virtual joystick](https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/) (Phaser 3)

仮想ゲームパッドのような基本的なプラグインの場合、スクリプトをダウンロードしてページで利用できるようにすることができます。

```html
<script src="js/phaser.min.js"></script>
<!-- https://github.com/ShawnHymel/phaser-plugin-virtual-gamepad -->
<script src="js/phaser-plugin-virtual-gamepad.js"></script>
```

次に、スクリプトに含めて、次のスニペットと同様に使用できます。

```js
// Phaser 2 ゲームに VirtualGamepad プラグインを追加
this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
// ゲームにジョイスティックを追加
this.joystick = this.gamepad.addJoystick(100, 420, 1.2, "gamepad");
// ゲームにボタンを追加
this.button = this.gamepad.addButton(400, 420, 1.0, "gamepad");
```

詳細については、[Phaser プラグインの非公式カタログ](https://phaserplugins.com/)を参照して、ニーズに合うものがあるかどうかを確認してください。

## まとめ

これでモバイル用のタッチ制御の追加について説明しました。次の記事では、キーボードとマウスのサポートを追加する方法を見ていきます。

{{NextMenu("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms")}}
