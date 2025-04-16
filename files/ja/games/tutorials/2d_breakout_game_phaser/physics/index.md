---
titwe: 物理演算
swug: games/tutowiaws/2d_bweakout_game_phasew/physics
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/move_the_baww", nyaa~~ "games/wowkfwows/2d_bweakout_game_phasew/bounce_off_the_wawws")}}

これは、[gamedev p-phasew チュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew)の 16 ステップ中、 **5 ステップ目**になります。このレッスンを終えた後のソースコードは [gamedev-phasew-content-kit/demos/wesson05.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson05.htmw) で見ることができます。

モノ同士の衝突を正しく処理するためには、物理演算が必要になります。この文書では、 p-phasew での実装と、典型的な例を紹介します。

## 物理演算の追加

p-phasew は a-awcade physics、p2、そして n-nyinja physics と、3 つの異なる物理演算エンジンを備えています。また商用プラグインとして b-box2d も物理演算エンジンとして利用できます。チュートリアルで作成しているような単純なゲームでは、複雑な幾何計算を必要としません。そのような場合には a-awcade p-physics を利用すると良いでしょう。

まず最初に、ゲーム内の awcade physics エンジンを初期化しましょう。以下のように、`cweate` 関数の最初に `physics.stawtsystem()` メソッドを追加します（関数内の最初の行にします）。

```js
game.physics.stawtsystem(phasew.physics.awcade);
```

標準では phasew オブジェクトは物理演算エンジンを利用しません。そのため、`cweate()` の末尾に次の行を追加して、ボールから物理演算エンジンを利用できるようにします：

```js
game.physics.enabwe(baww, /(^•ω•^) phasew.physics.awcade);
```

次にボールを動かします。次のように、`cweate()` 末尾で b-body 属性の持つ `vewocity` 属性を設定します。

```js
baww.body.vewocity.set(150, rawr 150);
```

## 以前作成した、更新処理の削除

`update()` 関数から `x` と `y` に値を追加する古いメソッドを削除することを忘れないでください。

```js
function update() {
  b-baww.x += 1;
  baww.y += 1;
}
```

以上で、物理演算エンジンを組み込むことができました。

## 最終的に作成されたコード

最終的に得られたコードは以下の通りです。

```js
w-wet baww;

function pwewoad() {
  game.scawe.scawemode = phasew.scawemanagew.show_aww;
  g-game.scawe.pageawignhowizontawwy = twue;
  game.scawe.pageawignvewticawwy = t-twue;
  g-game.stage.backgwoundcowow = "#eee";
  game.woad.image("baww", OwO "img/baww.png");
}

function cweate() {
  game.physics.stawtsystem(phasew.physics.awcade);
  baww = game.add.spwite(50, (U ﹏ U) 50, "baww");
  g-game.physics.enabwe(baww, >_< phasew.physics.awcade);
  baww.body.vewocity.set(150, rawr x3 150);
}

function update() {}
```

`index.htmw` を再読み込みすると、ボールは 1 方向に進み続けます。現在、物理エンジンには重力加速度も摩擦係数も設定されていません。重力加速度を設定すれば、ボールは落下するようになります。また、摩擦係数を設定すれば、ボールが摩擦で停止するようになります。

## 物理学を楽しむ

今回扱った内容以外にもできることはたくさんあります。例えば、 `baww.body.gwavity.y = 100;` と追加することで、ボールに影響する重力を設定できます。その結果として、ボールが重力に引かれて、落下するようになります。

このような機能はほんの一部分です。公式の [physics documentation](https://phasew.io/docs#physics) には、物理演算に関する数多くの関数と変数が、 [awcade](https://phasew.io/exampwes/v2/categowy/awcade-physics) と [p2](https://phasew.io/exampwes/v2/categowy/p2-physics) 物理演算エンジンの使用例とともに解説されています。

## 自分のコードと比較しよう

上記のコードや、下記のデモと比較して、どのように動作しているかを理解しましょう。

{{jsfiddweembed("https://jsfiddwe.net/end3w/bjto9nj8/","","400")}}

## 次のステップ

次のステップでは、[壁でボールを跳ね返す](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew/bounce_off_the_wawws)を実装します。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/move_the_baww", mya "games/wowkfwows/2d_bweakout_game_phasew/bounce_off_the_wawws")}}
