---
title: 物理演算
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

これは、[Gamedev Phaser チュートリアル](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)の 16 ステップ中、 **5 ステップ目**になります。このレッスンを終えた後のソースコードは [Gamedev-Phaser-Content-Kit/demos/lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html) で見ることができます。

モノ同士の衝突を正しく処理するためには、物理演算が必要になります。この文書では、 Phaser での実装と、典型的な例を紹介します。

## 物理演算の追加

Phaser は Arcade Physics、P2、そして Ninja Physics と、3 つの異なる物理演算エンジンを備えています。また商用プラグインとして Box2D も物理演算エンジンとして利用できます。チュートリアルで作成しているような単純なゲームでは、複雑な幾何計算を必要としません。そのような場合には Arcade Physics を利用すると良いでしょう。

まず最初に、ゲーム内の Arcade Physics エンジンを初期化しましょう。以下のように、`create` 関数の最初に `physics.startSystem()` メソッドを追加します（関数内の最初の行にします）。

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

標準では Phaser オブジェクトは物理演算エンジンを利用しません。そのため、`create()` の末尾に次の行を追加して、ボールから物理演算エンジンを利用できるようにします：

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

次にボールを動かします。次のように、`create()` 末尾で body 属性の持つ `velocity` 属性を設定します。

```js
ball.body.velocity.set(150, 150);
```

## 以前作成した、更新処理の削除

`update()` 関数から `x` と `y` に値を追加する古いメソッドを削除することを忘れないでください。

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

以上で、物理演算エンジンを組み込むことができました。

## 最終的に作成されたコード

最終的に得られたコードは以下の通りです。

```js
let ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
}

function update() {}
```

`index.html` を再読み込みすると、ボールは 1 方向に進み続けます。現在、物理エンジンには重力加速度も摩擦係数も設定されていません。重力加速度を設定すれば、ボールは落下するようになります。また、摩擦係数を設定すれば、ボールが摩擦で停止するようになります。

## 物理学を楽しむ

今回扱った内容以外にもできることはたくさんあります。例えば、 `ball.body.gravity.y = 100;` と追加することで、ボールに影響する重力を設定できます。その結果として、ボールが重力に引かれて、落下するようになります。

このような機能はほんの一部分です。公式の [physics documentation](https://phaser.io/docs#physics) には、物理演算に関する数多くの関数と変数が、 [Arcade](https://phaser.io/examples/v2/category/arcade-physics) と [P2](https://phaser.io/examples/v2/category/p2-physics) 物理演算エンジンの使用例とともに解説されています。

## 自分のコードと比較しよう

上記のコードや、下記のデモと比較して、どのように動作しているかを理解しましょう。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## 次のステップ

次のステップでは、[壁でボールを跳ね返す](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)を実装します。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
