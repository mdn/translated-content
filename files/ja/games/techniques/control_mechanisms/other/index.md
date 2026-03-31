---
title: 型破りな制御
slug: Games/Techniques/Control_mechanisms/Other
l10n:
  sourceCommit: 0f41789370f1744c3d77efb697991d514a32b6c6
---

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}

ゲームにさまざまな制御メカニズムを持つことは、より幅広いオーディエンスにリーチするのに役立ちます。モバイルとデスクトップの制御を実装することは必須であり、ゲームパッド制御はその追加の体験を提供します。しかし、さらに進むことを想像してみてください。この記事では、ウェブゲームを制御するさまざまな型破りな方法を探求します。いくつかは他のものよりも型破りです。

## TV リモコン

TV 画面でゲームをプレイすることは、必ずしもコンソールを通じて行う必要はありません。デスクトップコンピューターではすでに Gamepad API が動作しているため、体験を模倣できますが、さらに進むことができます。最新のスマート TV は HTML ゲームを処理できます。なぜなら、ゲームプラットフォームとして使用できる組み込みブラウザーがあるためです。スマート TV にはリモコンが付属しており、使い方を知っていればゲームの制御に使用できます。

[Captain Rogers: Battle at Andromeda](https://rogers2.enclavegames.com/demo/) の最初のデモは、巨大な TV で動作するように調整されました。興味深いことに、最初の Captain Rogers ゲーム（Asteroid Belt of Sirius）は、Firefox OS を実行するローエンド、小画面、安価なスマートフォン向けに最適化されていたため、3 年間でどれだけの違いがあるかがわかります。[Building games for Firefox OS TV](https://hacks.mozilla.org/2016/01/building-games-for-firefox-os-tv/) Hacks の投稿で全体のストーリーを読むことができます。

![ゲーム Captain Rogers: Battle at Andromeda 用の Panasonic TV リモコン。](controls-tvremote.png)

TV リモコンを使用してゲームを制御することは、驚くほど簡単でした。コントローラーによって発行されるイベントは従来のキーボードキーをエミュレートしているためです。Captain Rogers にはすでにキーボード制御が実装されていました。

```js
this.cursors = this.input.keyboard.createCursorKeys();
// …
if (this.cursors.right.isDown) {
  // プレイヤーを右に移動
}
```

これはそのまま動作します。カーソルはキーボードの 4 つの方向矢印キーであり、これらはリモコンの矢印キーとまったく同じキーコードを持っています。他のリモコンキーのコードをどのように知るのでしょうか？コンソールに応答を出力することで確認できます。

```js
window.addEventListener("keydown", (event) => {
  console.log(event.keyCode);
});
```

リモコンで押されたすべてのキーは、コンソールにキーコードを表示します。Firefox OS を実行している Panasonic TV で作業している場合は、以下に示す便利なチートシートを確認することもできます。

![Panasonic TV のリモコンキーコード。](controls-tvkeys.png)

状態間の移動、新しいゲームの開始、船の制御と爆破、ゲームの一時停止と再起動を追加できます。必要なのは、キー押下をチェックすることだけです。

```js
window.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 8: {
      // ゲームを一時停止
      break;
    }
    case 588: {
      // 爆弾を爆発させる
      break;
    }
    // …
  }
});
```

[このビデオ](https://www.youtube.com/watch?v=Bh11sP0bcTY)を見ることで、実際の動作を確認できます。

## Leap Motion

手だけでゲームを制御することを考えたことはありますか？[Leap Motion](https://www.ultraleap.com/) を使用すれば可能です。これは、ゲームやアプリ用のイマーシブコントローラーです。

Leap Motion は、VR ヘッドセットとの非常に優れた統合により、ますます人気が高まっています。Leap Motion を取り付けた Oculus Rift で [Rainbow Membrane](https://mozilla.github.io/rainbow/) をデモすることは、世界中の会議でデモブースを訪れた JavaScript 開発者によって、最高の WebVR 体験の 1 つに選ばれました。

仮想インターフェイスに最適であるだけでなく、カジュアルな 2D ゲーム体験にも使用できます。手だけですべてを行うのは非常に難しいですが、シンプルな Captain Roger のゲームプレイ（船の操縦と弾丸の発射）には完全に実行可能です。

コンピューターで Leap Motion を動作させるには、まず [docs.ultraleap.com](https://docs.ultraleap.com/hand-tracking/getting-started.html#installation-guides) の手順に従ってインストールする必要があります。すべてがインストールされ、コントローラーがコンピューターに接続されたら、[小さなデモ](https://github.com/end3r/JavaScript-Game-Controls/)でのサポートの実装に進むことができます。まず、`https://js.leapmotion.com/leap-0.6.4.min.js` を指す `url` を持つ `<script>` タグを追加し、診断情報を出力するために閉じる `</body>` タグの直前に `<div id="output"></div>` を追加します。

コードが動作するためには、いくつかのヘルパー変数が必要です。ラジアンから度を計算する目的のもの、コントローラーの上で手が傾いている水平および垂直の度数を保持する 2 つ、その傾きのしきい値のもの、手のグラブステータスの状態のものです。次に、キーボードとマウスのすべてのイベントリスナーの後、`draw` メソッドの前にこれらの行を追加します。

```js
const toDegrees = 1 / (Math.PI / 180);
let horizontalDegree = 0;
let verticalDegree = 0;
const degreeThreshold = 30;
let grabStrength = 0;
```

その直後に、Leap の `loop` メソッドを使用して、すべてのフレームで `hand` 変数に保持されている情報を取得します。

```js
Leap.loop({
  hand(hand) {
    horizontalDegree = Math.round(hand.roll() * toDegrees);
    verticalDegree = Math.round(hand.pitch() * toDegrees);
    grabStrength = hand.grabStrength;
    output.innerText = `Leap Motion:
  roll: ${horizontalDegree}°
  pitch: ${verticalDegree}°
  strength: ${grabStrength}
`;
  },
});
```

上記のコードは、後で使用する `horizontalDegree`、`verticalDegree`、`grabStrength` の値を計算して割り当て、HTML に出力して実際の値を確認できるようにします。これらの変数が最新の状態になったら、`draw()` 関数で使用して船を移動できます。

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // …

  if (horizontalDegree > degreeThreshold) {
    playerX -= 5;
  } else if (horizontalDegree < -degreeThreshold) {
    playerX += 5;
  }
  if (verticalDegree > degreeThreshold) {
    playerY += 5;
  } else if (verticalDegree < -degreeThreshold) {
    playerY -= 5;
  }
  if (grabStrength === 1) {
    alert("BOOM!");
  }

  ctx.drawImage(img, playerX, playerY);
  requestAnimationFrame(draw);
}
```

`horizontalDegree` 値が `degreeThreshold`（この場合は 30）より大きい場合、船はすべてのフレームで左に 5 ピクセル移動します。その値がしきい値の負の値よりも低い場合、船は右に移動します。上下の移動も同じように機能します。最後の値は `grabStrength` で、0 から 1 の間の浮動小数点数です。1 に達すると（拳が完全に握られると）、今のところアラートが表示されます（完全なゲームでは、これを射撃ロジックに置き換えることができます）。

![ゲームでの Leap Motion コントローラーのサポート。roll、pitch、strength の可視出力付き。](controls-leapmotion.png)

以上です。JavaScript での動作する Leap Motion の例に必要なものはすべてここにあります。`hand` のプロパティを探索し、ゲーム内で好きな動作を実装できます。

## ドップラー効果

[ドップラー効果を使用したモーション検出](https://danielrapp.github.io/doppler/)に関する非常に興味深い記事があります。これは、手を振ることとマイクを使用することを組み合わせたものです。今回は、音波が物体に跳ね返ってマイクに戻ることを検出することです。

![ハンドジェスチャーを使用してラップトップ上の記事のスクロールを制御する方法としてのドップラー効果。](controls-doppler.png)

跳ね返った音の周波数が元の周波数からシフトしている場合、その物体の動きが発生したことを検出できます。そうすれば、組み込みマイクだけを使用して手の動きを検出できます！

これは、Daniel Rapp によって作成された[小さなライブラリ](https://github.com/DanielRapp/doppler)を使用して実現できます。2 つの周波数の差を計算するのと同じくらい簡単です。

```js
doppler.init((bandwidth) => {
  const diff = bandwidth.left - bandwidth.right;
});
```

`diff` は、手の初期位置と最終位置の差になります。

このアプローチでは、ゲームパッドや Leap Motion を使用するほどの完全な柔軟性は得られませんが、確かに興味深い型破りな代替手段です。ハンズフリーでページをスクロールしたり、テルミンを演奏したりするために使用できますが、正しく実装されていれば、画面上で船を上下に移動するのにも十分なはずです。

## Makey Makey

完全にクレイジーになりたい場合は、[Makey Makey](https://makeymakey.com/) を使用できます。これは、何でもコントローラーに変えることができるボードです。現実世界の導電性オブジェクトをコンピューターに接続し、タッチインターフェイスとして使用することがすべてです。

![Makey Makey を使用してバナナピアノを制御。](controls-banana.png)

[バナナピアノのビデオ](https://www.youtube.com/watch?v=_DWQ6ce2Ags)をチェックし、必要なすべての情報については[クイックスタートガイド](https://learn.sparkfun.com/tutorials/makey-makey-quickstart-guide)を必ず訪問してください。

Makey Makey ボードに触発された Makey Button 機能をサポートする Cylon.js さえあるため、Arduino または Raspberry Pi での実験に人気のある Cylon ロボティクスフレームワークを使用できます。ボードを接続して使用すると、次のようになります。

```js
const Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/ttyACM0" },
  },
  devices: {
    makey: { driver: "makey-button", pin: 2 },
  },
  work(my) {
    my.makey.on("push", () => {
      console.log("Button pushed!");
    });
  },
}).start();
```

説明にあるように、この GPIO ドライバーを使用すると、Arduino または Raspberry Pi のデジタルピンに 10 MOhm 抵抗を接続して、バナナ、粘土、または描画可能な回路でロボットを制御できます。

## まとめ

実験を楽しんでいただけたことを願っています。他の人が興味を持つと思われる他のものがある場合は、ここに詳細を追加してください。

そして、ゲーム作りを楽しむことを忘れないでください！

{{PreviousMenu("Games/Techniques/Control_mechanisms/Desktop_with_gamepad", "Games/Techniques/Control_mechanisms")}}
