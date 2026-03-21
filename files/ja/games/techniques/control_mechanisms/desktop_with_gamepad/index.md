---
title: デスクトップゲームパッド制御
slug: Games/Techniques/Control_mechanisms/Desktop_with_gamepad
l10n:
  sourceCommit: 0f41789370f1744c3d77efb697991d514a32b6c6
---

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}

次に、何か追加のものを見ていきます。Gamepad API を介したゲームパッド制御のサポートです。これにより、ウェブゲームにコンソールのような体験がもたらされます。

Gamepad API は、ゲームパッドをコンピューターに接続し、ブラウザーがそのような機能を実装しているおかげで、JavaScript コードから直接押されたボタンを検出する機能を提供します。API は、ゲームのロジックをフックし、ユーザーインターフェイスとゲームプレイを正常に制御するために必要なすべての情報を公開します。

## API のステータス、ブラウザーとハードウェアのサポート

[Gamepad API](/ja/docs/Web/API/Gamepad_API) はまだ Working Draft ステータスですが、ブラウザーのサポートはすでに非常に良好です。[caniuse.com](https://caniuse.com/#search=gamepad) によると、グローバルカバレッジは約 63% です。サポートされているデバイスのリストも非常に広範です。最も人気のあるゲームパッド（例えば、XBox 360 または PS3）は、ウェブ実装に適しているはずです。

## 純粋な JavaScript アプローチ

まず、[小さな制御デモ](https://github.com/end3r/JavaScript-Game-Controls/)で純粋な JavaScript ゲームパッド制御を実装することを考えて、どのように機能するかを見てみましょう。まず、新しいデバイスの接続をリッスンするイベントリスナーが必要です。

```js
window.addEventListener("gamepadconnected", gamepadHandler);
```

これは一度実行されるため、後で必要になるコントローラー情報と押されたボタンを格納するためのいくつかの変数を作成できます。

```js
let controller = {};
let buttonsPressed = [];
function gamepadHandler(e) {
  controller = e.gamepad;
  output.textContent = `Gamepad: ${controller.id}`;
}
```

`gamepadHandler` 関数の 2 行目は、デバイスが接続されたときに画面に表示されます。

![Captain Rogers ゲームの下にゲームパッド接続メッセージ - ワイヤレス XBox 360 コントローラー。](controls-gamepadtext.png)

デバイスの `id` も表示できます。上記の場合、XBox 360 ワイヤレスコントローラーを使用しています。

ゲームパッドの現在押されているボタンの状態を更新するには、すべてのフレームでまさにそれを行う関数が必要です。

```js
function gamepadUpdateHandler() {
  buttonsPressed = [];
  if (controller.buttons) {
    for (const [i, button] of controller.buttons.entries()) {
      if (button.pressed) {
        buttonsPressed.push(i);
      }
    }
  }
}
```

まず、`buttonsPressed` 配列をリセットして、現在のフレームから書き込む最新の情報を受け取る準備をします。次に、ボタンが利用可能な場合はループします。`pressed` プロパティが `true` に設定されている場合は、後で処理するために `buttonsPressed` 配列に追加します。次に、`gamepadButtonPressedHandler()` 関数を検討します。

```js
function gamepadButtonPressedHandler(button) {
  return buttonsPressed.includes(button);
}
```

この関数は、ボタンインデックスをパラメーターとして受け取ります。`buttonsPressed` に探しているボタンが含まれているかどうかをチェックし、含まれている場合は `true` を返します。これにより、ボタンが押されているかどうかがチェックされます。

次に、`draw()` 関数で 2 つのことを行います。`gamepadUpdateHandler()` 関数を実行して、すべてのフレームで押されたボタンの現在の状態を取得し、`gamepadButtonPressedHandler()` 関数を使用して、関心のあるボタンをチェックして、押されているかどうかを確認し、押されている場合は何かを実行します。

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // …

  gamepadUpdateHandler();
  if (gamepadButtonPressedHandler(0)) {
    playerY -= 5;
  } else if (gamepadButtonPressedHandler(1)) {
    playerY += 5;
  }
  if (gamepadButtonPressedHandler(2)) {
    playerX -= 5;
  } else if (gamepadButtonPressedHandler(3)) {
    playerX += 5;
  }
  if (gamepadButtonPressedHandler(11)) {
    alert("BOOM!");
  }

  // …

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

この場合、4 つの D-Pad ボタン（0-3）と A ボタン（11）をチェックしています。

> [!NOTE]
> 異なるデバイスは異なるキーマッピングを持つ可能性があることを覚えておいてください。つまり、D-Pad Right ボタンはワイヤレス XBox 360 でインデックス 3 を持っていますが、別のデバイスでは異なる可能性があります。

リストされたボタンに適切な名前を割り当てるヘルパー関数を作成することもできます。例えば、`gamepadButtonPressedHandler(3)` が押されているかどうかをチェックする代わりに、より説明的なチェック `gamepadButtonPressedHandler('DPad-Right')` を実行できます。

[ライブデモ](https://end3r.github.io/JavaScript-Game-Controls/)を実際に見ることができます。ゲームパッドを接続してボタンを押してみてください。

## Phaser アプローチ

Phaser で作成した [Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) ゲームでの最終的な Gamepad API 実装に移りましょう。これも純粋な JavaScript コードですが、使用されたフレームワークに関係なく、他のプロジェクトで使用できます。

まず、入力を処理するための小さなライブラリを作成します。有用な変数と関数を含む `GamepadAPI` オブジェクトは次のとおりです。

```js
const GamepadAPI = {
  active: false,
  controller: {},
  connect(event) {},
  disconnect(event) {},
  update() {},
  buttons: {
    layout: [],
    cache: [],
    status: [],
    pressed(button, state) {},
  },
  axes: {
    status: [],
  },
};
```

`controller` 変数は接続されたゲームパッドに関する情報を格納し、コントローラーが接続されているかどうかを知るために使用できる `active` ブール変数があります。`connect()` と `disconnect()` 関数は次のイベントにバインドされています。

```js
window.addEventListener("gamepadconnected", GamepadAPI.connect);
window.addEventListener("gamepaddisconnected", GamepadAPI.disconnect);
```

これらは、ゲームパッドが接続および切断されたときにそれぞれ発行されます。次の関数は `update()` で、押されたボタンと軸に関する情報を更新します。

`buttons` 変数には、特定のコントローラーの `layout`（例えば、ボタンがどこにあるか、XBox 360 レイアウトは一般的なものとは異なる場合があります）、前のフレームからのボタンに関する情報を含む `cache`、現在のフレームからの情報を含む `status` が含まれています。

`pressed()` 関数は入力データを取得し、オブジェクトに関する情報を設定します。`axes` プロパティは、`x` と `y` 方向で軸が押されている量を表す値を含む配列を格納し、`(-1, 1)` 範囲の浮動小数点数で表されます。

ゲームパッドが接続されると、コントローラーに関する情報がオブジェクトに格納されます。

```js
const GamepadAPI = {
  // …
  connect(event) {
    GamepadAPI.controller = event.gamepad;
    GamepadAPI.active = true;
  },
  // …
};
```

`disconnect` 関数はオブジェクトから情報を削除します。

```js
const GamepadAPI = {
  // …
  disconnect(event) {
    delete GamepadAPI.controller;
    GamepadAPI.active = false;
  },
};
```

`update()` 関数は、ゲームの更新ループですべてのフレームで実行されるため、押されたボタンに関する最新の情報が含まれています。

```js
const GamepadAPI = {
  // …
  update() {
    GamepadAPI.buttons.cache = [];
    for (let k = 0; k < GamepadAPI.buttons.status.length; k++) {
      GamepadAPI.buttons.cache[k] = GamepadAPI.buttons.status[k];
    }
    GamepadAPI.buttons.status = [];
    const c = GamepadAPI.controller || {};
    const pressed = [];
    if (c.buttons) {
      for (let b = 0; b < c.buttons.length; b++) {
        if (c.buttons[b].pressed) {
          pressed.push(GamepadAPI.buttons.layout[b]);
        }
      }
    }
    const axes = [];
    if (c.axes) {
      for (const ax of c.axes) {
        axes.push(ax.toFixed(2));
      }
    }
    GamepadAPI.axes.status = axes;
    GamepadAPI.buttons.status = pressed;
    return pressed;
  },
  // …
};
```

上記の関数は、ボタンキャッシュをクリアし、前のフレームからのステータスをキャッシュにコピーします。次に、ボタンステータスがクリアされ、新しい情報が追加されます。軸の情報についても同じことが行われます。ループして軸に値を追加します。受信した値は適切なオブジェクトに割り当てられ、デバッグ目的で押された情報を返します。

`button.pressed()` 関数は実際のボタン押下を検出します。

```js
const GamepadAPI = {
  // …
  buttons: {
    // …
    pressed(button, hold) {
      let newPress = false;
      if (GamepadAPI.buttons.status.includes(button)) {
        newPress = true;
      }
      if (!hold && GamepadAPI.buttons.cache.includes(button)) {
        newPress = false;
      }
      return newPress;
    },
    // …
  },
  // …
};
```

探しているボタンが押されているかどうかをチェックし、そうであれば、対応するブール変数が `true` に設定されます。ボタンがすでに保持されていないかどうかをチェックしたい場合（つまり、新しい押下である場合）、前のフレームからキャッシュされた状態をチェックすることで実行できます。ボタンがすでに押されていた場合、新しい押下を無視し、`false` に設定します。

## 実装

`GamepadAPI` オブジェクトがどのように見えるか、どの変数と関数が含まれているかがわかったので、これがすべてゲームで実際にどのように使用されるかを学びましょう。ゲームパッドコントローラーがアクティブであることを示すために、ゲームのメインメニュー画面でユーザーにカスタムテキストを表示できます。

`textGamepad` オブジェクトは、ゲームパッドが接続されたことを示すテキストを保持し、デフォルトでは非表示になっています。新しい状態が作成されたときに一度実行される `create()` 関数で準備したコードは次のとおりです。

```js
function create() {
  // …
  const message = "Gamepad connected! Press Y for controls";
  const textGamepad = this.add.text(0, 0, message);
  textGamepad.visible = false;
}
```

すべてのフレームで実行される `update()` 関数では、コントローラーが実際に接続されるまで待つことができるため、適切なテキストを表示できます。次に、`Gamepad.update()` メソッドを使用して押されたボタンに関する情報を追跡し、指定された情報に反応できます。

```js
function update() {
  // …
  if (GamepadAPI.active) {
    this.textGamepad.visible = true;

    GamepadAPI.update();
    if (GamepadAPI.buttons.pressed("Start")) {
      // ゲームを開始
    }
    if (GamepadAPI.buttons.pressed("X")) {
      // サウンドをオン/オフ
    }

    this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
  }
}
```

`Start` ボタンが押されると、関連する関数が呼び出されてゲームが開始され、オーディオのオン/オフにも同じアプローチが使用されます。すべてのボタン制御が説明された画像を保持する `screenGamepadHelp` を表示するオプションが接続されています。`Y` ボタンが押されて保持されている場合、ヘルプが表示されます。リリースされると、ヘルプが消えます。

![利用可能なすべてのキーが説明されたゲームパッド情報。](controls-gamepadinfo.png)

## 画面上の指示

ゲームが開始されると、利用可能な制御を示す紹介テキストが表示されます。ゲームがデスクトップまたはモバイルで起動されているかどうかをすでに検出しているため、デバイスに関連するメッセージを表示していますが、さらに進んで、ゲームパッドの存在を許可できます。

```js
function create() {
  // …
  if (this.game.device.desktop) {
    if (GamepadAPI.active) {
      moveText = "DPad or left Stick\nto move";
      shootText = "A to shoot,\nY for controls";
    } else {
      moveText = "Arrow keys\nor WASD to move";
      shootText = "X or Space\nto shoot";
    }
  } else {
    moveText = "Tap and hold to move";
    shootText = "Tap to shoot";
  }
}
```

デスクトップの場合、コントローラーがアクティブかどうかをチェックし、ゲームパッド制御を表示できます。そうでない場合は、キーボード制御が表示されます。

## ゲームプレイ制御

プレイヤーにメインと代替のゲームパッド移動制御を提供することで、さらに柔軟性を提供できます。

```js
if (GamepadAPI.buttons.pressed("DPad-Up", "hold")) {
  // プレイヤーを上に移動
} else if (GamepadAPI.buttons.pressed("DPad-Down", "hold")) {
  // プレイヤーを下に移動
}

if (GamepadAPI.buttons.pressed("DPad-Left", "hold")) {
  // プレイヤーを左に移動
}

if (GamepadAPI.buttons.pressed("DPad-Right", "hold")) {
  // プレイヤーを右に移動
}

if (GamepadAPI.axes.status) {
  if (GamepadAPI.axes.status[0] > 0.5) {
    // プレイヤーを上に移動
  } else if (GamepadAPI.axes.status[0] < -0.5) {
    // プレイヤーを下に移動
  }

  if (GamepadAPI.axes.status[1] > 0.5) {
    // プレイヤーを左に移動
  } else if (GamepadAPI.axes.status[1] < -0.5) {
    // プレイヤーを右に移動
  }
}
```

これで、`DPad` ボタンまたは左スティックの軸を使用して画面上の船を移動できるようになりました。

軸の現在の値が `0.5` に対して評価されていることに気づきましたか？これは、軸が浮動小数点値を持つのに対し、ボタンはブール値を持つためです。特定のしきい値に達すると、入力がユーザーによって意図的に行われたと想定でき、それに応じて動作できます。

射撃制御には、`A` ボタンを使用しました。押されたままにすると、新しい弾丸が生成され、残りはすべてゲームによって処理されます。

```js
if (GamepadAPI.buttons.pressed("A", "hold")) {
  this.spawnBullet();
}
```

すべての制御を含む画面の表示は、メインメニューとまったく同じです。

```js
this.screenGamepadHelp.visible = GamepadAPI.buttons.pressed("Y", "hold");
```

`B` ボタンが押されると、ゲームが一時停止されます。

```js
if (gamepadAPI.buttonPressed("B")) {
  this.managePause();
}
```

## 一時停止とゲームオーバー状態

ゲームのライフサイクル全体を制御する方法をすでに学びました。ゲームプレイを一時停止したり、再起動したり、メインメニューに戻ったりします。モバイルとデスクトップでスムーズに動作し、ゲームパッド制御の追加も同様に簡単です。`update()` 関数で、現在の状態ステータスが「一時停止」であるかどうかをチェックします。そうであれば、関連するアクションが有効になります。

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.managePause();
}

if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

同様に、「ゲームオーバー」状態ステータスがアクティブな場合、ユーザーはゲームを続行する代わりに再起動できます。

```js
if (GamepadAPI.buttons.pressed("Start")) {
  this.stateRestart();
}
if (GamepadAPI.buttons.pressed("Back")) {
  this.stateBack();
}
```

ゲームオーバー画面が表示されているとき、`Start` ボタンはゲームを再起動し、`Back` ボタンはメインメニューに戻ります。ゲームが一時停止されている場合も同じです。`Start` ボタンはゲームの一時停止を解除し、`Back` ボタンは前と同じように戻ります。

## まとめ

以上です！ゲームにゲームパッド制御を正常に実装しました。XBox 360 などの人気のあるコントローラーを接続して、ゲームパッドで小惑星を避けてエイリアンを撃つのがどれほど楽しいかを自分で確かめてください。

これで、ラップトップの前で手を振ったり、マイクに向かって叫んだりするなど、さらに型破りな方法で HTML ゲームを制御する新しい方法を探求できます。

{{PreviousMenuNext("Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard", "Games/Techniques/Control_mechanisms/Other", "Games/Techniques/Control_mechanisms")}}
