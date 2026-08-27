---
title: 物理演算
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

これは、[Gamedev Phaser チュートリアル](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)の 16 ステップ中、 **5 ステップ目**になります。ゲームでモノ同士の衝突を正しく処理するためには、物理演算が必要になります。この文書では、Phaser での実装と、典型的な例を紹介します。

## 物理演算の追加

Phaser は Arcade Physics、Impact Physics、Matter.js Physics と、3 つの異なる物理演算エンジンを備えています。また商用プラグインとして第 4 の選択肢である Box2D も利用できます。チュートリアルで作成しているような単純なゲームでは、複雑な幾何計算を必要としません。そのような場合には Arcade Physics を利用すると良いでしょう。

まず、ゲーム内の Arcade Physics エンジンを初期化しましょう。次にに示すように、`config` オブジェクトに `physics` プロパティを追加してください。

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

標準では Phaser オブジェクトは物理演算エンジンを利用しません。そのため、`create()` の末尾に次の行を追加して、ボールから物理演算エンジンを利用できるようにします：

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

次にボールを動かします。次のように、`create()` 末尾で body 属性の持つ `velocity` メソッドを設定します。

```js
this.ball.body.setVelocity(150, 150);
```

## 以前作成した、更新処理の削除

`update()` 関数から `x` と `y` に値を追加する古いメソッドを削除することを忘れないでください。

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

物理エンジンを用いて適切に処理するようになりました。
もう一度 `index.html` を読み込んでみてください。現時点では、物理エンジンに重力や摩擦の設定がないため、ボールは指定された方向に一定の速度で進んでいきます。


## 物理を楽しむ

物理演算を使えば、さらにさまざまなことができます。例えば、`create()` の中に `this.ball.body.gravity.y = 500;` を追加すると、ボールの垂直方向の重力を設定できます。速度を `this.ball.body.setVelocity(150, -150);` に変更してみると、ボールが上方に飛び上がるのがわかりますが、その後、重力の効果で下に落ちていきます。

この種の機能はほんの一例に過ぎません。物理オブジェクトを操作するのに役立つさまざまな関数や変数が用意されています。公式の[物理エンジンに関するドキュメント](https://docs.phaser.io/phaser/concepts/physics/arcade)を確認し、Arcade や Matter.js の物理システムが使用されている[巨大なサンプル集](https://phaser.io/examples/v3.85.0/physics)をご覧ください。

## 自分のコードと比較しよう

ここまでで、実際に実行されるプログラムが完成しているはずです。ソースコードを確認するには、"Play" ボタンをクリックしてください。

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  ball;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
  }
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## 次のステップ

次のステップでは、[壁でボールを跳ね返す](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)を実装します。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
