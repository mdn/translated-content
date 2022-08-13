---
title: Gamepad APIを使用したコントロールの実装
slug: Games/Techniques/Controls_Gamepad_API
translation_of: Games/Techniques/Controls_Gamepad_API
---
{{GamesSidebar}}

この記事では、Gamepad API を使用して Web ゲーム用の効果的なクロスブラウザー制御システムを実装し、コンソールゲームコントローラーを使用して Web ゲームを制御できるようにします。[Enclave Games](http://enclavegames.com/) によって作成されたケーススタディゲーム Hungry Fridge を掲載しています。

## Web ゲームのコントロール

歴史的には、テレビに接続されたコンソールでゲームをすること、PC 上でのゲームとはまったく異なる体験でした。最終的にはドライバとプラグインにより、コンソールゲームパッドをデスクトップゲームーネイティブかブラウザで実行されるゲームーで使用できるようになりました。 HTML5 の時代になり、[Gamepad API](/ja/docs/Web/API/Gamepad_API) が完成し、プラグインなしでゲームパッドコントローラを使用してブラウザベースのゲームをプレイできるようになりました。 Gamepad API は、入力を処理するために JavaScript コード内で使用できるボタンの押下と軸の変更を公開するインターフェイスを提供することで、これを実現します。 これらは、ブラウザゲームにとって良いことです。

![gamepad-controls](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img01.png)

## API ステータスとブラウザサポート

[Gamepad API](http://www.w3.org/TR/gamepad/) は W3C のプロセスではまだドラフトの状態であり、まだ実装が変わることがありますが、[ブラウザサポート](http://caniuse.com/gamepad)はかなり良い状態です。Firefox 29 以降はそのまま使用できます。Opera はバージョン 22 以降で API をサポートしています（Chrome の Blink エンジンを使用していることを考えると驚くことではありません）。Microsoft は Edge にて API をサポートしており、Gamepad API は 4 つの中心的なブラウザーにを現在サポートされています。

## どのゲームパッドが良いか？

![gamepad devices](http://end3r.com/tmp/gamepad/devices.jpg)

現在最も人気のあるゲームパッドは XBox 360、XBox One、PS3 や PS4 であり、これらは かなりテストが行われており、Windows や Mac OS X のブラウザで Gamepad API がうまく動いています。

さまざまなボタンレイアウトを備えたデバイスも多数あり、ブラウザの実装によって多かれ少なかれ動作します。 この記事で取り上げたコードはいくつかのゲームパッドでテストしましたが、著者の好みはワイヤレス XBox 360 コントローラと Mac OS X 上の Firefox ブラウザの組み合わせです。

## ケーススタディ: Hungry Fridge

[GitHub Game Off II](https://github.com/blog/1674-github-game-off-ii) のコンペが 2013 年 11 月に実施され、[Enclave Games](http://enclavegames.com/) が参加することに決めました。 競争のテーマは「変化」だったため、彼らは健康食品（リンゴ、ニンジン、レタス）をタップして飢えた冷蔵庫に食べさせ、「悪い」食べ物（ビール、ハンバーガー、ピザ）を避けなければならないゲームを提出しました。 カウントダウンは、冷蔵庫が数秒ごとに食べたい食べ物のタイプを変えるので、注意して素早く行動する必要があります。 あなたは[ Hungry Fridge](http://enclavegames.com/games/hungry-fridge/) を[ここ](http://enclavegames.com/games/hungry-fridge/)で試すことができます。

![hungryfridge-mainmenu](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img02.png)

2 番目の、隠された「変更」の実装は、静的な冷蔵庫を本格的な移動式射撃食堂に変えることです。 コントローラーを接続すると、ゲームが大きく変わります（Hungry Fridge が Super Turbo Hungry Fridge に変わります）、Gamepad API を使用して装甲冷蔵庫を制御できます。 あなたは食べ物を撃たなければなりませんが、もう一度、冷蔵庫が各所で食べたい食べ物の種類を見つけなければなりません。そうしないとエネルギーが失われます。

![hungryfridge-howtoplay-gamepad](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img03.png)

このゲームは、2 つの全く異なるタイプの「変化」をカプセル化しています。

![hungryfridge-gameplay-gamepad](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img04.png)

## デモ

Hungry Fridge ゲームのフルバージョンが最初に構築され、次に Gamepad API が実際に表示され、JavaScript のソースコードが表示され、[簡単なデモ](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html)が作成されました。 これは GitHub で利用可能な [Gamepad API Content Kit](https://end3r.github.io/Gamepad-API-Content-Kit/) の一部であり、コードを深く掘り下げてどのように動作するかを正確に調べることができます。

![Hungry Fridge demo using Gamepad API](http://end3r.com/tmp/gamepad/super-turbo.png)

以下に説明するコードは、Hungry Fridge ゲームのフルバージョンからのものですが、デモのものとほぼ同じです。唯一の違いは、フルバージョンでは、スーパーターボモードを使用してゲームを起動するかどうかを決定する`ターボ`変数。 これは独立して機能するので、ゲームパッドが接続されていなくてもオンにすることができます。

> **Note:** **注記**: イースターエッグタイム：ゲームパッドを接続せずにデスクトップに Super Turbo Hungry Fridge を起動する隠しオプションがあります。スクリーンの右上にあるゲームパッドアイコンをクリックします。 それはスーパーターボモードでゲームを起動し、あなたはキーボードで冷蔵庫を制御することができます：タレットを左右に回すための A と D、撮影のための W、動きのための矢印キー。

## 実装

Gamepad API には` gamepadconnected` と gamepaddisconnected という 2 つの重要なイベントがあります。 最初のゲームはゲームパッドが切断されたとき（ユーザーが物理的に、または非アクティブのため）ゲームパッドが新しいゲームパッドの接続を検出したときに起動されます。デモでは、`gamepadAPI `オブジェクトは、API に関連するすべてを格納するために使用されます：

```js
var gamepadAPI = {
  controller: {},
  turbo: false,
  connect: function() {},
  disconnect: function() {},
  update: function() {},
  buttonPressed: function() {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: []
};
```

`buttons` の配列は XBox 360 ボタンレイアウトを格納します：

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

これは、PS3 コントローラ（または名前のない、一般的なもの）のような他のタイプのゲームパッドでは異なる場合があり、期待しているボタンが実際に得るのと同じボタンになるか注意する必要があり、また仮定してはいけません：

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

セキュリティポリシーのため、イベントが発生するとページが表示されている間にコントローラーと最初にやりとりする必要があります。 API がユーザーとのやりとりなしで動作した場合、API を認識することなくフィンガープリントに使用できます。

どちらの関数もかなりシンプルです：

```js
connect: function(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

`connect()` 関数はイベントをパラメータとして受け取り、`gamepad `オブジェクトを `gamepadAPI.controller` 変数に割り当てます。このゲームでは 1 つのゲームパッドしか使用しないため、ゲームパッドの配列ではなく単一のオブジェクトです。次に、`turbo `プロパティを `true `に設定します。（この目的のために `gamepad.connected `というブール値を使用することができましたが、上で説明した理由から、ゲームパッドを接続しなくてもターボモードを有効にするための別の変数が必要でした）。

```js
disconnect: function(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

`disconnect` 関数は `gamepad.turbo プロパティを` `false` に設定し、gamepad オブジェクトを含む変数を削除します。

### Gamepad オブジェクト

`gamepad `オブジェクトには、ボタンや軸の状態が最も重要な情報がたくさんあります：

- `id`: コントローラーに関する情報を含む文字列。
- `index`: 接続したデバイスを定義するユニークな識別子。
- `connected`: 接続時に `true` になる真偽値の変数。
- `mapping`: ボタンのレイアウトタイプ。 標準は現在利用可能な唯一のオプション。
- `axes`: 各軸の状態。浮動小数点値の配列で表される。
- `buttons` : `pressed `プロパティと `value` のプロパティを含む `GamepadButton` オブジェクトの配列で表される各ボタンの状態。

`index `変数は、2 つ以上のコントローラを接続しており、2 つのデバイスが接続されている 2 人のゲームがある場合など、それらを識別する必要がある場合に便利です。

### gamepad オブジェクトのクエリ

`connect() `と `disconnect()` のほかに、`gamepadAPI `オブジェクトには` update() `と `buttonPressed()` の 2 つのメソッドがあります。 `update() `は、ゲームループ内のすべてのフレームで実行され、ゲームパッドオブジェクトの実際のステータスを定期的に更新します：

```js
update: function() {
  // clear the buttons cache
  gamepadAPI.buttonsCache = [];
  // move the buttons status from the previous frame to the cache
  for(var k=0; k<gamepadAPI.buttonsStatus.length; k++) {
    gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
  }
  // clear the buttons status
  gamepadAPI.buttonsStatus = [];
  // get the gamepad object
  var c = gamepadAPI.controller || {};

  // loop through buttons and push the pressed ones to the array
  var pressed = [];
  if(c.buttons) {
    for(var b=0,t=c.buttons.length; b<t; b++) {
      if(c.buttons[b].pressed) {
        pressed.push(gamepadAPI.buttons[b]);
      }
    }
  }
  // loop through axes and push their values to the array
  var axes = [];
  if(c.axes) {
    for(var a=0,x=c.axes.length; a<x; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }
  // assign received values
  gamepadAPI.axesStatus = axes;
  gamepadAPI.buttonsStatus = pressed;
  // return buttons for debugging purposes
  return pressed;
},
```

すべてのフレームで、`update() `は前のフレームで押されたボタンを `buttonsCache` 配列に保存し、新しいものを `gamepadAPI.controller` オブジェクトから取得します。 次に、実際の状態と値を取得するためにボタンと軸をループします。

### ボタンプレスの検出

`buttonPressed()` メソッドはメインのゲームループに配置され、ボタンの押下を待機します。 2 つのパラメータ、つまり聴きたいボタンと、ボタンを押したままにすることをゲームに伝える（オプション）方法があります。 それがなければ、ボタンを放してもう一度押して、希望する効果を持たなければなりません。

```js
buttonPressed: function(button, hold) {
  var newPress = false;
  // loop through pressed buttons
  for(var i=0,s=gamepadAPI.buttonsStatus.length; i<s; i++) {
    // if we found the button we're looking for...
    if(gamepadAPI.buttonsStatus[i] == button) {
      // set the boolean variable to true
      newPress = true;
      // if we want to check the single press
      if(!hold) {
        // loop through the cached states from the previous frame
        for(var j=0,p=gamepadAPI.buttonsCache.length; j<p; j++) {
          // if the button was already pressed, ignore new press
          if(gamepadAPI.buttonsCache[j] == button) {
            newPress = false;
          }
        }
      }
    }
  }
  return newPress;
},
```

ボタンには、1 回の押下と長押しの 2 種類のアクションがあります。 `newPress `ブール変数は、ボタンの新規押下があるかどうかを示します。 次に、押されたボタンの配列をループします。指定されたボタンが探しているボタンと同じ場合、`newPress `変数は `true` に設定されます。 プレスが新しいものかどうかを確認するために、プレイヤーがキーを保持していないので、ゲームループの前のフレームからのボタンのキャッシュ状態をループします。 ボタンが見つかった場合、ボタンが押されていることを意味するので、新しいプレスはありません。 最後に、`newPress `変数が返されます。 `buttonPressed` 関数は、このようなゲームの更新ループで使用されます：

```js
if(gamepadAPI.turbo) {
  if(gamepadAPI.buttonPressed('A','hold')) {
    this.turbo_fire();
  }
  if(gamepadAPI.buttonPressed('B')) {
    this.managePause();
  }
}
```

`gamepadAPI.turbo `が `true `で、指定されたボタンが押された (または保持されている) 場合、それらに割り当てられた適切な関数を実行します。 この場合、`A `を押すと、弾丸が発射され、`B `を押すとゲームが一時停止します。

### 軸のしきい値

ボタンには `0 `または `1 `の二つの状態しかありませんが、アナログスティックは `X `軸と `Y `軸の両方に沿って `-1 `と `1 `の間の浮動小数点範囲を持っています。

![axis threshold](http://end3r.com/tmp/gamepad/axis-threshold.png)

ゲームパッドは、ほこりのない場所からのゴミを得ることができます。つまり、正確な -1 または 1 の値をチェックすることが問題になります。 このため、軸の値のしきい値を設定すると効果的です。 例えば、`X `値が `0.5` より大きい場合にのみ、冷蔵庫のタンクが右に回転します：

    if(gamepadAPI.axesStatus[0].x > 0.5) {
      this.player.angle += 3;
      this.turret.angle += 3;
    }

たとえ誤って少し動かしても、スティックが元の位置に戻らない場合でも、タンクが予期せず回転することはありません。

## 仕様の更新

1 年以上の安定性の後、2015 年 4 月に W3C Gamepad API 仕様が更新されました ([最新の仕様を参照](https://w3c.github.io/gamepad/)) 。それはあまり変わっていませんが、何が起こっているのかを知ることは良いことです。

### gamepads の入手

{{domxref("Naviagator.getGamepads()")}} メソッドは、[より長い解説とコード例](https://w3c.github.io/gamepad/#navigator-interface-extension)で更新されました。 ここで、ゲームパッドの配列の長さは `n + 1` でなければなりません。ここで、`n `は接続されたデバイスの数です — 接続されたデバイスが 1 つでインデックスが 1 の場合、配列の長さは 2 で、 \[` null, ``[object Gamepad]`` ]  `をクリックします。 デバイスが接続されていないか使用できない場合、デバイスの値は `null `に設定されます。

### マッピング標準

マッピングタイプは、文字列ではなく列挙可能なオブジェクトになりました：

    enum GamepadMappingType {
        "",
        "standard"
    };

この列挙型は、ゲームパッドの既知のマッピングのセットを定義します。 今のところ`標準`のレイアウトしかありませんが、将来は新しいレイアウトが登場する可能性があります。 レイアウトが不明な場合は、空の文字列に設定されます。

### イベント

スペックには、`gamepaddisconnected `と `gamepaddisconnected` よりも多くのイベントがありましたが、あまり役に立たないと思われていた仕様から削除されました。 議論は、それを取り戻すべきかどうか、そしてどのような形で進行しているかについてはまだ進行中です。

## 概要

Gamepad API は非常に開発が簡単です。 プラグインを必要とせずに、コンソールに似たエクスペリエンスをブラウザに提供することがこれまで以上に簡単になりました。 [Hungry Fridge ](http://enclavegames.com/games/hungry-fridge/)ゲームのフルバージョンをブラウザで直接再生したり、[Firefox Marketplace](https://marketplace.firefox.com/app/hungry-fridge) からインストールしたり、[Gamepad API Content Kit ](https://github.com/EnclaveGames/Hungry-Fridge)のその他のリソースと一緒にデモのソースコードを確認したりすることができます。
