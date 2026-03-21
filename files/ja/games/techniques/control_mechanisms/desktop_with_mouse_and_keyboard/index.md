---
title: デスクトップマウスとキーボード制御
slug: Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard
l10n:
  sourceCommit: 0f41789370f1744c3d77efb697991d514a32b6c6
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

モバイル制御が配置され、ゲームがタッチ対応デバイスでプレイ可能になったので、マウスとキーボードのサポートを追加して、ゲームをデスクトップでもプレイできるようにすることをお勧めします。そうすれば、サポートされているプラットフォームのリストを広げることができます。以下でこれを見ていきます。

デスクトップで開発する場合、ゲームプレイなどの制御に依存しない機能をテストする方が簡単なので、ソースコードを変更するたびにファイルをモバイルデバイスにプッシュする必要はありません。

> [!NOTE]
> [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) は Phaser で構築されており、制御の管理は Phaser ベースですが、純粋な JavaScript でも実行できます。Phaser を使用する良い点は、より高速な開発のためのヘルパー変数と関数を提供することですが、どのアプローチを選択するかは完全にあなた次第です。

## 純粋な JavaScript アプローチ

まず、ゲームで純粋な JavaScript キーボード/マウス制御を実装することを考えて、どのように機能するかを見てみましょう。まず、押されたキーをリッスンするイベントリスナーが必要です。

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

キーが押されるたびに `keyDownHandler` 関数を実行し、押下が終了すると `keyUpHandler` 関数を実行するため、押されなくなったことがわかります。そのためには、関心のあるキーが押されているかどうかに関する情報を保持します。

```js
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
```

次に、`keydown` と `keyup` イベントをリッスンし、両方のハンドラー関数で適切に動作します。それらの内部で、イベントオブジェクトの [`code`](/ja/docs/Web/API/KeyboardEvent/code) プロパティから押されたキーのコードを取得し、どのキーであるかを確認して、適切な変数を設定できます。コードはすべて読みやすい文字列名ですが、確認するために[調べる](/ja/docs/Web/API/UI_Events/Keyboard_event_code_values)ことができます。`"ArrowLeft"` は左矢印です。

```js
function keyDownHandler(event) {
  if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowLeft") {
    leftPressed = true;
  }
  if (event.code === "ArrowDown") {
    downPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  }
}
```

`keyUpHandler` は上記の `keyDownHandler` とほぼ同じに見えますが、押された変数を `true` に設定する代わりに、`false` に設定します。左矢印が押されている場合（<kbd>⬅︎</kbd>; `"ArrowLeft"`）、`leftPressed` 変数を `true` に設定し、`draw` 関数でそれに割り当てられたアクション（船を左に移動）を実行できます。

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (rightPressed) {
    playerX += 5;
  } else if (leftPressed) {
    playerX -= 5;
  }

  if (downPressed) {
    playerY += 5;
  } else if (upPressed) {
    playerY -= 5;
  }

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

`draw` 関数は最初に Canvas 全体をクリアします。すべてのフレームでゼロからすべてを描画します。次に、押されたキー変数がチェックされ、船の位置を保持する `playerX` と `playerY` 変数（`leftPressed` などの後に早期に定義します）が、例えば 5 ピクセルなどの指定された量だけ調整されます。次に、プレイヤーの船が画面に描画され、[requestAnimationFrame](/ja/docs/Web/API/Window/requestAnimationFrame) 内から次の描画が呼び出されます。

![キーボードとマウスで制御できるプレイヤーの船（背景に星）を含む純粋な JavaScript デモ。](controls-purejsgame.png)

この例は [end3r.github.io/JavaScript-Game-Controls](https://end3r.github.io/JavaScript-Game-Controls/) でオンラインで動作しているのを見ることができ、完全なソースコードは [github.com/end3r/JavaScript-Game-Controls](https://github.com/end3r/JavaScript-Game-Controls/) で入手できます。

## Phaser アプローチ

前述したように、すべてを独自に記述することもできますが、Phaser のようなフレームワークの組み込み関数を利用することもできます。これにより、開発がはるかに高速になります。ブラウザーの実装の違いなど、すべてのエッジケースはフレームワークによって処理されるため、実行したい実際のタスクに集中できます。

### マウス

ゲームでのマウスのインタラクションは、ボタンのクリックに焦点を当てています。Phaser では、作成するボタンは、モバイルでのタッチでもデスクトップでのクリックでも、あらゆる種類の入力を受け取ります。そのため、[モバイルタッチ制御](/ja/docs/Games/Techniques/Control_mechanisms/Mobile_touch)の記事で示されているようにボタンをすでに実装している場合、デスクトップでも箱から出してすぐに機能します。

```js
const buttonEnclave = this.add.button(
  10,
  10,
  "logo-enclave",
  this.clickEnclave,
  this,
);
```

ボタンは画面の左上隅から 10 ピクセルの位置に配置され、`logo-enclave` 画像を使用し、クリックされると `clickEnclave()` 関数を実行します。ボタンに直接アクションを割り当てることができます。

```js
this.buttonShoot = this.add.button(
  this.world.width * 0.5,
  0,
  "button-alpha",
  null,
  this,
);
this.buttonShoot.onInputDown.add(this.shootingPressed, this);
this.buttonShoot.onInputUp.add(this.shootingReleased, this);
```

射撃に使用されるボタンは、モバイルとデスクトップの両方のアプローチで完璧に機能します。

マウスのカーソルの位置を画面上で使用したい場合は、`this.game.input.mousePointer` を使用して実行できます。画面の右半分がマウスでクリックされたときに弾丸を撃ちたいとしましょう。次のようになります。

```js
if (this.game.input.mousePointer.isDown) {
  if (this.game.input.mousePointer.x > this.world.width * 0.5) {
    // 撃つ
  }
}
```

押されているマウスボタンを区別したい場合は、選択できるデフォルトが 3 つあります。

```js
this.game.input.mousePointer.leftButton.isDown;
this.game.input.mousePointer.middleButton.isDown;
this.game.input.mousePointer.rightButton.isDown;
```

モバイルタッチインタラクションのサポートを維持したい場合は、`mousePointer` の代わりに `activePointer` を使用する方が、プラットフォームに依存しない入力に適しています。

### キーボード

ゲーム全体をキーボードだけで制御でき、他には何も必要ありません。組み込みの `this.game.input.keyboard` オブジェクトはキーボードからの入力を管理し、`addKey()` や `isDown()` などの[いくつかの便利なメソッド](https://phaser.io/docs/2.6.1/Phaser.Keyboard.html#methods)があります。また、利用可能なすべてのキーボードキーを含む [Phaser.KeyCode](https://phaser.io/docs/2.6.1/Phaser.KeyCode.html#members) オブジェクトもあります。

![ゲーム内で利用可能な Phaser キーコードの完全なリスト。](controls-keycodes.png)

ゲームのメインメニューでは、プレイを開始する追加の方法を追加できます。スタートボタンをクリックして実行できますが、<kbd>Enter</kbd> キーを使用して同じことを実行できます。

```js
const keyEnter = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
keyEnter.onDown.add(this.clickStart, this);
```

`addKey()` を使用して、`Phaser.KeyCode` オブジェクトが提供する任意のキーを追加できます。`onDown()` 関数は、<kbd>Enter</kbd> キーが押されるたびに実行されます。新しいゲームを開始する `clickStart()` メソッドを起動します。

マウスを使用せずにデスクトップでゲームをプレイするオプションを提供すると便利です。そうすれば、キーボードから手を離す必要がありません。

### ゲームの制御

Phaser で構築されたゲームでキーボード入力をサポートするには、`create()` 関数で `createCursorKeys()` 関数を使用して基本的なカーソルキーを有効にします。

```js
this.cursors = this.input.keyboard.createCursorKeys();
```

これにより、4 つの方向矢印キーが作成されます。

```js
this.cursors.left;
this.cursors.right;
this.cursors.up;
this.cursors.down;
```

独自にキーを定義し、代替の <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> 制御メカニズムを提供することもできます。例えば：

```js
this.keyLeft = this.input.keyboard.addKey(Phaser.KeyCode.A);
this.keyRight = this.input.keyboard.addKey(Phaser.KeyCode.D);
this.keyUp = this.input.keyboard.addKey(Phaser.KeyCode.W);
this.keyDown = this.input.keyboard.addKey(Phaser.KeyCode.S);
```

カーソルと <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> キーの両方をサポートするには、次のようにする必要があります。

```js
if (this.cursors.left.isDown || this.keyLeft.isDown) {
  // 左に移動
} else if (this.cursors.right.isDown || this.keyRight.isDown) {
  // 右に移動
}

if (this.cursors.up.isDown || this.keyUp.isDown) {
  // 上に移動
} else if (this.cursors.down.isDown || this.keyDown.isDown) {
  // 下に移動
}
```

`update()` 関数で、2 つの移動キーオプションのいずれかを使用して、プレイヤーの船を任意の方向に移動できるようになりました。

射撃制御の代替も提供できます。カーソルキーの場合、自然な射撃ボタンはキーボードの反対側にあるため、プレイヤーは他の手を使用できます。例えば <kbd>X</kbd> キーです。<kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> キーの場合、スペースバーにすることができます。

```js
this.keyFire1 = this.input.keyboard.addKey(Phaser.KeyCode.X);
this.keyFire2 = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
```

`update()` 関数で、各フレームでこれら 2 つのいずれかが押されたかどうかを簡単に確認できます。

```js
if (this.keyFire1.isDown || this.keyFire2.isDown) {
  // 武器を発射
}
```

はいの場合、弾丸を撃つ時間です！

秘密のチートボタンを定義することもできます。

```js
this.keyCheat = this.input.keyboard.addKey(Phaser.KeyCode.C);
```

次に、`update()` 関数で、<kbd>C</kbd> が押されるたびに次のようにします。

```js
if (this.keyCheat.isDown) {
  this.player.health = this.player.maxHealth;
}
```

プレイヤーの体力を最大に設定できます。覚えておいてください：これは秘密なので、_誰にも言わないでください_！

### プレイ方法

制御を実装したので、プレイヤーにゲームを制御するオプションについて通知する必要があります。そうでなければ、彼らはそれらについて知らないでしょう！ゲームで船を制御するさまざまな方法が表示されるプレイ方法画面を表示する場合、すべてをすべての人に表示する代わりに、ゲームがデスクトップまたはモバイルで起動されているかどうかを検出し、デバイスに適した制御のみを表示できます。

```js
if (this.game.device.desktop) {
  moveText = "Arrow keys or WASD to move";
  shootText = "X or Space to shoot";
} else {
  moveText = "Tap and hold to move";
  shootText = "Tap to shoot";
}
```

ゲームがデスクトップで実行されている場合、カーソルと <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> キーのメッセージが表示されます。そうでない場合は、モバイルタッチ制御メッセージが表示されます。

![キーボードとマウスで制御できるプレイヤーの船（背景に星）のプレイ方法画面、表示されているメッセージ：「矢印キーまたは WASD で移動」および「X またはスペースで射撃」。](controls-howtoplay.png)

プレイ方法画面をスキップするには、任意のキーが押されるのをリッスンして先に進むことができます。

```js
this.input.keyboard.onDownCallback = function () {
  if (this.stateStatus === "intro") {
    this.hideIntro();
  }
};
```

これにより、イントロが非表示になり、これだけのために別の新しいキー制御を設定することなく、実際のゲームが開始されます。

### 一時停止とゲームオーバー画面

ゲームをキーボードで完全にプレイできるようにするには、一時停止とゲームオーバー画面からメインメニューに戻る、プレイを続ける、またはゲームを再開できる必要があります。以前とまったく同じように、キーコードをキャプチャしてアクションを実行することで実行できます。例えば、`Phaser.KeyCode.Backspace` または `Phaser.KeyCode.Delete` を指定することで、`Delete/Backspace` ボタンが押されたときに発火するアクションをフックできます。

## まとめ

タッチ、キーボード、マウスの制御を扱いました。次に、[Gamepad API](/ja/docs/Web/API/Gamepad_API) を使用してコンソールゲームパッドで制御されるようにゲームを設定する方法を見ていきましょう。

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Mobile_touch", "Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
