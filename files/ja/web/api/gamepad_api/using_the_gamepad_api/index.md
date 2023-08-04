---
title: ゲームパッド API の使用
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("Gamepad API")}}

HTML はリッチでインタラクティブなゲームを開発するために必要なコンポーネントを多く搭載しています。 `<canvas>` や WebGL、 `<audio>` に `<video>` などの技術は、今までネイティブコードを書く必要のあった機能に対応できるほどに成長しました。ゲームパッド API は開発者とデザイナーにゲームパッドやコントローラーへのアクセスを提供するものです。

[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) は {{ domxref("Window") }} オブジェクトにゲームパッドとコントローラー（以下、ゲームパッド）の状態を読み取る新しいイベントをいくつか追加します。さらに、 {{ domxref("Gamepad") }} というゲームパッドの接続状態が得られるオブジェクトと {{ domxref("navigator.getGamepads()") }} というゲームパッドの一覧を取得できるメソッドが追加されます。

## ゲームパッドの接続

新しいゲームパッドが接続された時、アクティブなページは {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} イベントを受け取ります。ページ読み込み時にゲームパッドがすでに接続されている場合、ゲームパッドのボタンを押すなどの操作をした時に {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} イベントがアクティブなページに対して発生します。

> **メモ:** Firefox では、ページが見える状態でかつユーザーによるゲームパッドの操作を受け付けたときにのみ、ゲームパッドが利用可能になります。これによって、ユーザーを特定する[フィンガープリンティング](/ja/docs/Glossary/Fingerprinting)に利用されることを防止しています。いったん一つのコントローラーが操作されれば、他のコントローラーも自動で接続され利用可能になります。

以下のようにして {{domxref("Window/gamepadconnected_event", "gamepadconnected")}} を使用します。

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

ゲームパッドはそれぞれ固有の ID をイベントの {{domxref("GamepadEvent.gamepad", "gamepad")}} プロパティの中に持っています。

## ゲームパッドの切断

ゲームパッドが切断されたとき、ページに以前そのゲームパッドのために受信したデータ（例: {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}）があると、 2 番目のイベント、 {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} がフォーカスのあるウィンドウに配信されます。

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

ゲームパッドの {{domxref("Gamepad.index", "index")}} プロパティは、同じ種類の複数のコントローラーが使用されている場合であっても、システムに接続された機器ごとに固有になります。 `index` プロパティもまた {{ domxref("Navigator.getGamepads()") }} から返される {{jsxref("Array")}} のイデックスとして機能します。

```js
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connected) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
  },
  false,
);
```

この前の例ではイベントが完了した後に `gamepad` プロパティがどのように保持できるかを示しています - 後でデバイスの状態照会のために使用する技術となります。

## Gamepad オブジェクトの問い合わせ

ご覧のように、上述の **gamepad** イベントは {{ domxref("Gamepad") }} オブジェクトを返すイベントオブジェクト、上の `gamepad` のプロパティが含まれています。複数のゲームパッド（すなわち、その ID）を一度に接続される可能性があるため、イベントを発生させたのはどのゲームパッドを決定するためにこれらを使用することができます。それへの参照を保持し、それがボタンや軸のいずれかの時点で押されているかを知るために照会するなど、{{ domxref("Gamepad") }} オブジェクトから様々なことを行うことができます。そうすることで、多くの場合、今回と次回のイベント発生とゲームパッドの状態を知っておく必要があり、ゲームやその他のインタラクティブなウェブページであることが望ましいです。

このようなチェックを実行すると、開発者はゲームパッドやゲームパッドの状態に基づいて、現在のフレームのための意思決定を行うために必要なアニメーションループ (例 : {{ domxref("Window.requestAnimationFrame","requestAnimationFrame") }}) と一緒に {{ domxref("Gamepad") }} オブジェクトを使用して関与する傾向があります。

{{domxref("Navigator.getGamepads()")}} メソッドは現在ウェブページから見える {{ domxref("Gamepad") }} オブジェクト (ゲームパッドが繋がっていない時は毎回 null が返される ) のような、すべてのデバイスを配列として戻します。これは、同じ情報を得るために使用することができます。例えば、 以下に示すように上記の最初のコード例を書き換えます。

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

{{ domxref("Gamepad") }} オブジェクトの機能は以下の通りです。

- `id`: コントローラーに関する情報を含んだ文字列です。これは厳密には指定されていなく、Firefox では、コントローラーの USB ベンダと製品 ID を含んでいる 2 つの 4 桁 16 進数字列、およびドライバーから提供されるようなコントローラーの名前といった 3 つの情報が、ダッシュ (`-`) により分離され含まれています。この情報はユーザーへの有益なフィードバックを表示するとともに、デバイスのコントロールのマッピングを見つけることができるようにします。
- `index`: 現在システムに接続されているゲームパッドごとに固有の整数。この値は複数のコントローラーを区別するために使用できます。デバイスを切断してから新しいデバイスを接続すると、以前のインデックスが再利用されることに注意してください。
- `mapping`: ブラウザがデバイス上のコントロールを既知のレイアウトに再マップしたかどうかを示す文字列。現在、サポートされている既知のレイアウト - [標準のゲームパッド](https://w3c.github.io/gamepad/gamepad.html#remapping)は 1 つしかありません。ブラウザがデバイス上のコントロールをそのレイアウトにマッピングできる場合、 `mapping` プロパティは文字列 `standard` に設定されます。
- `connected`:ゲームパッドがシステムに接続されているかどうかを示すブール値。もし接続されている場合は `True`。接続されていない場合は `False` が設定されます。
- `buttons`: デバイス上に存在するボタンを表す {{ domxref("GamepadButton") }} オブジェクトの配列。各 {{ domxref("GamepadButton") }} には、`pressed` プロパティと `value` のプロパティがあります。

  - `pressed` プロパティは、ボタンが現在押されている (`true`) か押されていない (`false`) かを示すブール値です。>
  - `value` プロパティは、現代の多くのゲームパッドのトリガなど、アナログボタンの表示を有効にするために使用される浮動小数点値です。値は 0.0..1.0 の範囲に正規化され、 0.0 は押されていないボタンを表し、 1.0 は完全に押されたボタンを表します。

- `axes`: デバイス上に軸があるコントロールを表す配列 (例：アナログサムスティック)。 配列の各エントリは-1.0〜1.0 の範囲の浮動小数点値で、最小値 (-1.0) から最大値 (1.0) までの軸の位置を表します。
- `timestamp`: このゲームパッドのデータが最後に更新された時刻を表す {{ domxref("DOMHighResTimeStamp") }} を返します。この値により、開発者は `axes` と `button` のデータがハードウェアから更新されたかどうかを判断できます。 値は、 {{ domxref("PerformanceTiming") }} インターフェイスの `navigationStart` 属性との相対値でなければなりません。 値は単調に増加します。つまり、更新の順序を決定するために比較することができます。新しい値は常に古い値よりも大きいか等しいためです。このプロパティは現在 Firefox ではサポートされていません。

> **メモ:** Gamepad オブジェクトは、セキュリティ上の理由から {{ domxref("Window") }} オブジェクトではなく {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} イベントで使用できます。一度参照を取得すると、そのプロパティでゲームパッドの現在の状態に関する情報を照会できます。 このオブジェクトは、ゲームパッドの状態が変わるたびに更新されます。

### ボタン情報の使用

1 つのゲームパッドの接続情報を表示する簡単な例を見てみましょう (後続のゲームパッド接続を無視します)。ゲームパッドの右側にある 4 つのゲームパッドボタンを使用してボールを画面の周りに移動できます。[デモをライブで見ることができ](http://chrisdavidmills.github.io/gamepad-buttons/)ことができ、Github で[ソースコードを見つけることができます](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)。

まず、いくつかの変数を宣言します。接続情報が書き込まれる `gamepadInfo` のパラグラフ、移動する `ball`、`requestAnimation Frame` の ID として機能する `start` 変数、ボールを移動するための位置変更子として機能する a および b 変数、および短縮形変数 これは、 {{ domxref("Window.requestAnimationFrame", "requestAnimationFrame()") }} および {{ domxref("Window.cancelAnimationFrame", "cancelAnimationFrame()") }} クロスブラウザフォークで使用されます。

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

次に {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} イベントを使用して、接続されているゲームパッドを確認します。接続されると {{ domxref("Navigator.getGamepads()") }}`[0]` を使用してゲームパッドを取得し、ゲームパッドに関する情報をゲームパッドの情報 `div` に出力し、全体のボールの動きが始まる `gameLoop()` 関数が呼び出されます。

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

これで {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}} イベントを使用して、ゲームパッドが再び切断されたかどうかを確認します。 もしそうならば、 {{DOMxRef("Window.requestAnimationFrame", "requestAnimationFrame()")}} ループ (下記参照) を停止し、ゲームパッドの情報を元の状態に戻します。

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Chrome では異なる挙動になります。変数にゲームパッドの最新の状態を常に保存するのではなく、スナップショットを保存するだけなので、 Chrome で同じことを行うにはポーリングしてから {{ domxref("Gamepad") }} オブジェクトをコードで使用する必要があり、それは利用可能です。私たちはこれを {{ domxref("setInterval()") }} オブジェクトが利用可能になると、ゲームパッド情報が出力され、ゲームループが開始され、 {{ domxref("clearInterval()") }} を使用して間隔がクリアされます。

```js
let interval;

if (!("ongamepadconnected" in window)) {
  // No gamepad events available, poll instead.
  interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  const gamepads = navigator.getGamepads();
  for (const gp of gamepads) {
    gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;
    gameLoop();
    clearInterval(interval);
  }
}
```

今度はメインのゲームループです。ループが実行されるたびに、4 つのボタンの 1 つが押されているかどうかがチェックされます。そうすると、`a` と `b` の移動変数の値を適切に更新し、 {{ cssxref("left") }} と {{ cssxref("top") }} のプロパティを更新し、その値を `a` および `b` とする。これはボールを画面の周りに動かす効果があります。

この作業がすべて完了したら、 `requestAnimationFrame()` を使用して `gameLoop()` を再び実行して次のアニメーションフレームを要求します。

```js
function buttonPressed(b) {
  if (typeof b === "object") {
    return b.pressed;
  }
  return b === 1.0;
}

function gameLoop() {
  const gamepads = navigator.getGamepads();
  if (!gamepads) {
    return;
  }

  const gp = gamepads[0];
  if (buttonPressed(gp.buttons[0])) {
    b--;
  } else if (buttonPressed(gp.buttons[2])) {
    b++;
  }
  if (buttonPressed(gp.buttons[1])) {
    a++;
  } else if (buttonPressed(gp.buttons[3])) {
    a--;
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  start = requestAnimationFrame(gameLoop);
}
```

## 完全な例: ゲームパッドの状態の表示

この例では、 {{ domxref("Gamepad") }} オブジェクト、{{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} イベント、 {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}} イベントを使用してシステムに接続されているすべてのゲームパッドの状態を表示します。[デモを見て](https://luser.github.io/gamepadtest/)、Github の[完全なソースコード](https://github.com/luser/gamepadtest)を見ることができます。

```js
const haveEvents = "ongamepadconnected" in window;
const controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  const d = document.createElement("div");
  d.setAttribute("id", `controller${gamepad.index}`);

  const t = document.createElement("h1");
  t.textContent = `gamepad: ${gamepad.id}`;
  d.appendChild(t);

  const b = document.createElement("ul");
  b.className = "buttons";
  gamepad.buttons.forEach((button, i) => {
    const e = document.createElement("li");
    e.className = "button";
    e.textContent = `Button ${i}`;
    b.appendChild(e);
  });

  d.appendChild(b);

  const a = document.createElement("div");
  a.className = "axes";

  gamepad.axes.forEach((axis, i) => {
    const p = document.createElement("progress");
    p.className = "axis";
    p.setAttribute("max", "2");
    p.setAttribute("value", "1");
    p.textContent = i;
    a.appendChild(p);
  });

  d.appendChild(a);

  // See https://github.com/luser/gamepadtest/blob/master/index.html
  const start = document.getElementById("start");
  if (start) {
    start.style.display = "none";
  }

  document.body.appendChild(d);
  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  const d = document.getElementById(`controller${gamepad.index}`);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  Object.entries(controllers).forEach(([i, controller]) => {
    const d = document.getElementById(`controller${i}`);
    const buttons = d.getElementsByClassName("button");

    controller.buttons.forEach((button, i) => {
      const b = buttons[i];
      let pressed = button === 1.0;
      let val = button;

      if (typeof button === "object") {
        pressed = val.pressed;
        val = val.value;
      }

      const pct = `${Math.round(val * 100)}%`;
      b.style.backgroundSize = `${pct} ${pct}`;
      b.textContent = pressed ? `Button ${i} [PRESSED]` : `Button ${i}`;
      b.style.color = pressed ? "#42f593" : "#2e2d33";
      b.className = pressed ? "button pressed" : "button";
    });

    const axes = d.getElementsByClassName("axis");
    controller.axes.forEach((axis, i) => {
      const a = axes[i];
      a.textContent = `${i}: ${axis.toFixed(4)}`;
      a.setAttribute("value", axis + 1);
    });
  });

  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  const gamepads = navigator.getGamepads();
  document.querySelector("#noDevices").style.display = gamepads.filter(Boolean)
    .length
    ? "none"
    : "block";
  for (const gamepad of gamepads) {
    if (gamepad) {
      // Can be null if disconnected during the session
      if (gamepad.index in controllers) {
        controllers[gamepad.index] = gamepad;
      } else {
        addgamepad(gamepad);
      }
    }
  }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
