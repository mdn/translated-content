---
title: ゲームパッド API を使用したコントロールの実装
slug: Games/Techniques/Controls_Gamepad_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

この記事では、ゲームパッド API を使用してウェブゲーム用の効果的なクロスブラウザー制御システムを実装し、ゲーム機のゲームコントローラーを使用してウェブゲームを制御できるようにします。 [Enclave Games](http://enclavegames.com/) によって作成されたケーススタディゲーム Hungry Fridge を掲載しています。

## ウェブゲームのコントロール

歴史的には、テレビに接続されたゲーム機でゲームをすることと、 PC 上でのゲームとはまったく異なる体験でした。最終的にはドライバーとプラグインにより、ゲーム機のゲームパッドをデスクトップゲーム――ネイティブかブラウザーで実行されるゲーム――で使用できるようになりました。[ゲームパッド API](/ja/docs/Web/API/Gamepad_API) が登場し、プラグインなしでゲームパッドコントローラを使用してブラウザーベースのゲームをプレイできるようになりました。ゲームパッド API は、入力を処理するために JavaScript コード内で使用できるボタンの押下と軸の変更を公開するインターフェイスを提供することで、これを実現します。 これらは、ブラウザーゲームにとって良いことです。

## API ステータスとブラウザーサポート

[ゲームパッド API](http://www.w3.org/TR/gamepad/) は W3C のプロセスではまだ草案の状態であり、まだ実装が変わることがありますが、[ブラウザーの対応](http://caniuse.com/gamepad)はかなり良い状態です。 Firefox 29 以降はそのまま使用できます。 Opera はバージョン 22 以降で API に対応しています（Chrome の Blink エンジンを使用していることを考えると驚くことではありません）。 Microsoft は Edge にて API をサポートしており、ゲームパッド API は 4 つの主要なブラウザーが現在対応しています。

## どのゲームパッドが良いか？

現在最も人気のあるゲームパッドは XBox 360、XBox One、PS3 や PS4 であり、これらは かなりテストが行われており、Windows や Mac OS X のブラウザーでゲームパッド API がうまく動いています。

さまざまなボタンレイアウトを備えたデバイスも多数あり、ブラウザーの実装によって多かれ少なかれ動作します。 この記事で取り上げたコードはいくつかのゲームパッドでテストしましたが、著者の好みはワイヤレス XBox 360 コントローラと Mac OS X 上の Firefox ブラウザーの組み合わせです。

## ケーススタディ: Hungry Fridge

[GitHub Game Off II](https://github.blog/2013-10-30-github-game-off-ii/) のコンペが 2013 年 11 月に実施され、 [Enclave Games](http://enclavegames.com/) が参加することに決めました。コンペのテーマは「変化」で、 Hungry Fridge に健康な食べ物（リンゴ、ニンジン、レタス）をタップして与え、「悪しき」食べ物（ビール、ハンバーガー、ピザ）を避けるゲームを提出しました。カウントダウンで、Fridgeが食べたいものの種類が数秒ごとに変わるので、注意してすばやく行動する必要があります。

2 番目の、隠された「変化」の実装は、静的な Fridge を本格的な移動式射撃食堂に変えることです。 コントローラーを接続すると、ゲームが大きく変わります（Hungry Fridge が Super Turbo Hungry Fridge に変わります）、ゲームパッド API を使用して装甲冷蔵庫を制御できます。 あなたは食べ物を撃たなければなりませんが、もう一度、冷蔵庫が各所で食べたい食べ物の種類を見つけなければなりません。そうしないとエネルギーが失われます。

このゲームは、 2 つの全く異なるタイプの「変化」をカプセル化しています。

## デモ

Hungry Fridge ゲームのフルバージョンが最初に構築され、次にゲームパッド API が実際に表示され、JavaScript のソースコードが表示され、[簡単なデモ](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html)が作成されました。 これは GitHub で利用可能な [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) の一部であり、コードを深く掘り下げてどのように動作するかを正確に調べることができます。

以下に説明するコードは、Hungry Fridge ゲームのフルバージョンからのものですが、デモのものとほぼ同じです。唯一の違いは、フルバージョンでは、スーパーターボモードを使用してゲームを起動するかどうかを決定する`ターボ`変数。 これは独立して機能するので、ゲームパッドが接続されていなくてもオンにすることができます。

> **メモ:** イースターエッグの時間: ゲームパッドを接続せずにデスクトップで Super Turbo Hungry Fridge を起動する隠しオプションがあります。スクリーンの右上にあるゲームパッドアイコンをクリックします。 それはスーパーターボモードでゲームを起動し、あなたはキーボードで冷蔵庫を制御することができます。タレットを左右に回すたには A と D、撃つためには W、移動の多面実は矢印キーを使います。

## 実装

ゲームパッド API で使用する重要なイベントは、`gamepadconnected` と `gamepaddisconnected` の2つです。最初のイベントは、ブラウザが新しいゲームパッドの接続を検出したときに発行され、 2 つ目はゲームパッドが切断されたときに発行されます（ユーザーによる物理的な切断、または操作不能による切断）。このデモでは、`gamepadAPI` オブジェクトを使用して API に関するすべての情報を格納しています。

```js
const gamepadAPI = {
  controller: {},
  turbo: false,
  connect() {},
  disconnect() {},
  update() {},
  buttonPressed() {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: [],
};
```

`buttons` の配列は XBox 360 ボタンレイアウトを格納します。

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

これは、 PS3 コントローラ（または名前のない、一般的なもの）のような他のタイプのゲームパッドでは異なる場合があり、期待しているボタンが実際に得るのと同じボタンになるか注意する必要があり、また仮定してはいけません。

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

セキュリティポリシーのため、イベントが発生するとページが表示されている間にコントローラーと最初にやりとりする必要があります。 API がユーザーとのやりとりなしで動作した場合、 API を認識することなくフィンガープリントに使用できます。

どちらの関数もかなりシンプルです。

```js
connect(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

`connect()` 関数はイベントを引数として受け取り、 `gamepad` オブジェクトを `gamepadAPI.controller` 変数に代入します。このゲームでは 1 つのゲームパッドしか使用しないため、ゲームパッドの配列ではなく単一のオブジェクトです。次に、 `turbo` プロパティを `true` に設定します。（この目的のために `gamepad.connected` という論理値を使用することができましたが、上で説明した理由から、ゲームパッドを接続しなくてもターボモードを有効にするための別の変数が必要でした）。

```js
disconnect(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

`disconnect` 関数は `gamepad.turbo` プロパティを `false` に設定し、gamepad オブジェクトを含む変数を削除します。

### Gamepad オブジェクト

`gamepad` オブジェクトには、ボタンや軸の状態が最も重要な情報がたくさんあります。

- `id`: コントローラーに関する情報を含む文字列。
- `index`: 接続したデバイスを定義するユニークな識別子。
- `connected`: 接続時に `true` になる真偽値の変数。
- `mapping`: ボタンのレイアウトタイプ。 標準は現在利用可能な唯一のオプション。
- `axes`: 各軸の状態。浮動小数点値の配列で表される。
- `buttons` : `pressed` プロパティと `value` のプロパティを含む `GamepadButton` オブジェクトの配列で表される各ボタンの状態。

`index` 変数は、 2 つ以上のコントローラを接続しており、2つのデバイスが接続されている2人のゲームがある場合など、それらを識別する必要がある場合に便利です。

### gamepad オブジェクトのクエリー

`connect()` と `disconnect()` のほかに、`gamepadAPI` オブジェクトには `update()` と `buttonPressed()` の 2 つのメソッドがあります。 `update()`は、ゲームループ内のすべてのフレームで実行され、ゲームパッドオブジェクトの実際のステータスを定期的に更新します：

```js
update() {
  // Clear the buttons cache
  gamepadAPI.buttonsCache = [];

  // Move the buttons status from the previous frame to the cache
  for (let k = 0; k < gamepadAPI.buttonsStatus.length; k++) {
    gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
  }

  // Clear the buttons status
  gamepadAPI.buttonsStatus = [];

  // Get the gamepad object
  const c = gamepadAPI.controller || {};

  // Loop through buttons and push the pressed ones to the array
  const pressed = [];
  if (c.buttons) {
    for (let b = 0; b < c.buttons.length; b++) {
      if (c.buttons[b].pressed) {
        pressed.push(gamepadAPI.buttons[b]);
      }
    }
  }

  // Loop through axes and push their values to the array
  const axes = [];
  if (c.axes) {
    for (let a = 0; a < c.axes.length; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }

  // Assign received values
  gamepadAPI.axesStatus = axes;
  gamepadAPI.buttonsStatus = pressed;

  // Return buttons for debugging purposes
  return pressed;
},
```

すべてのフレームで、 `update()` は前のフレームで押されたボタンを `buttonsCache` 配列に保存し、新しいものを `gamepadAPI.controller` オブジェクトから取得します。 次に、実際の状態と値を取得するためにボタンと軸をループします。

### ボタンプレスの検出

`buttonPressed()` メソッドはメインのゲームループに配置され、ボタンの押下を待機します。 2 つの引数、つまり待ち受けするボタンと、ボタンを押したままにすることをゲームに伝える（オプション）方法があります。 それがなければ、ボタンを放してもう一度押して、希望する効果を持たなければなりません。

```js
buttonPressed(button, hold) {
  let newPress = false;

  // Loop through pressed buttons
  for (let i = 0; i < gamepadAPI.buttonsStatus.length; i++) {
    // If we found the button we're looking for
    if (gamepadAPI.buttonsStatus[i] === button) {
      // Set the boolean variable to true
      newPress = true;

      // If we want to check the single press
      if (!hold) {
        // Loop through the cached states from the previous frame
        for (let j = 0; j < gamepadAPI.buttonsCache.length; j++) {
          // If the button was already pressed, ignore new press
          newPress = (gamepadAPI.buttonsCache[j] !== button);
        }
      }
    }
  }
  return newPress;
},
```

ボタンには、 1 回の押下と長押しの2種類のアクションがあります。論理型の `newPress` 変数は、ボタンの新規押下があるかどうかを示します。 次に、押されたボタンの配列をループします。指定されたボタンが探しているボタンと同じ場合、`newPress` 変数は `true` に設定されます。 プレスが新しいものかどうかを確認するために、プレイヤーがキーを保持していないので、ゲームループの前のフレームからのボタンのキャッシュ状態をループします。 ボタンが見つかった場合、ボタンが押されていることを意味するので、新しいプレスはありません。 最後に、`newPress` 変数が返されます。 `buttonPressed` 関数は、このようなゲームの更新ループで使用されます：

```js
if (gamepadAPI.turbo) {
  if (gamepadAPI.buttonPressed("A", "hold")) {
    this.turbo_fire();
  }
  if (gamepadAPI.buttonPressed("B")) {
    this.managePause();
  }
}
```

`gamepadAPI.turbo` が `true` で、指定されたボタンが押された (または保持されている) 場合、それらに割り当てられた適切な関数を実行します。 この場合、 `A` を押すと、弾丸が発射され、 `B` を押すとゲームが一時停止します。

### 軸のしきい値

ボタンには `0` または `1` の 2 つの状態しかありませんが、アナログスティックは `X` 軸と `Y` 軸の両方に沿って `-1` と `1` の間の浮動小数点範囲を持っています。

ゲームパッドは使用しないまま放置しておくと、ホコリで汚れてしまうことがあり、-1 や 1 の値を正確にチェックすることが難しくなります。このため、軸の値が有効になるための閾値を設定するとよいでしょう。例えば、Fridge のタンクは、 `X` の値が `0.5` より大きいときだけ右に曲がります。

```js
if (gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

たとえ誤って少し動かしても、スティックが元の位置に戻らない場合でも、タンクが予期せず回転することはありません。

## 仕様書の更新

1 年以上の安定の後、 2015 年 4 月に W3C Gamepad API 仕様書が更新されました ([最新の仕様を参照](https://w3c.github.io/gamepad/)) 。あまり変わっていませんが、何が起こっているのかを知ることは良いことです。

### ゲームパッドの取得

{{domxref("Navigator.getGamepads()")}} メソッドが[長い説明とコードの例](https://w3c.github.io/gamepad/#navigator-interface-extension)と共に更新されました。ゲームパッドの配列の長さは `n+1` でなければなりません。ここで `n` は接続されている機器の数です。`[null, [object Gamepad]]` となります。機器が切断されていたり、利用できない場合は、その機器に対応する値が `null` に設定されます。

### マッピング標準

マッピング型は、文字列ではなく列挙型のオブジェクトになりました。

```ts
enum GamepadMappingType {
  "",
  "standard",
}
```

この列挙型は、ゲームパッドの既知のマッピングのセットを定義します。 今のところ `standard` のレイアウトしかありませんが、将来は新しいレイアウトが登場する可能性があります。 レイアウトが不明な場合は、空の文字列に設定されます。

### イベント

仕様書には `gamepadconnected` と `gamepaddisconnected` 以外にも使用できるイベントがあったが、とても特殊なものではないと判断され、仕様書から削除された。それらを戻すべきかどうか、またどのような形で戻すべきかについては、現在も議論が続いています。

## 概要

ゲームパッド API は、とても簡単に開発することができます。プラグインを一切使わずに、ゲーム機のような体験をブラウザで実現することが、これまで以上に簡単にできるようになりました。ブラウザーで直接、 [Hungry Fridge](https://enclavegames.com/games/hungry-fridge/) のフルバージョンをプレイすることができます。 [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) の他のリソースもチェックしてみてください。
