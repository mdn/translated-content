---
title: オブジェクト構築の練習
slug: Learn/JavaScript/Objects/Object_building_practice
l10n:
  sourceCommit: 4def230f85756724b59660e3cd9de363db724ef8
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

ここまでの記事で JavaScript オブジェクトの根幹部に関する理論と文法の詳細についてすべてを見てきて、始めていくのに十分な基礎固めをしました。この記事では実練習を行ない、独自の JavaScript オブジェクトを作っていくための実践をしていきましょう — 楽しくてカラフルなものを。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td>
        基礎的なコンピューターの知識、HTML と CSS への基本的な理解、基礎的な JavaScript の理解（<a href="/ja/docs/Learn/JavaScript/First_steps">JavaScript の第一歩</a>と <a href="/ja/docs/Learn/JavaScript/Building_blocks">JavaScript の構成要素</a>を参照）とオブジェクト指向 JavaScript の基本（<a href="/ja/docs/Learn/JavaScript/Objects/Basics">JavaScript オブジェクトの基本</a>を参照）。</td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        オブジェクトの使い方とオブジェクト指向のテクニックを実世界のコンテストで練習する。
      </td>
    </tr>
  </tbody>
</table>

## ボールを弾ませよう

この記事では伝統的な「弾むボール」のデモを作ってみて、JavaScript でどれほどオブジェクトが役に立つかお見せしましょう。小さなボールは画面じゅうを跳ねまわり、それぞれがぶつかると色が変わります。完成したものはこんな風に見えることでしょう:

![Screenshot of a webpage titled "Bouncing balls". 23 balls of various pastel colors and sizes are visible across a black screen with long trails behind them indicating motion.](bouncing-balls.png)

この例では画面にボールを描くのに [キャンバス API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) を使い、画面をアニメーションさせるのに [requestAnimationFrame](/ja/docs/Web/API/window/requestAnimationFrame) を使います — これらの API について事前の知識は不要です。この記事を読み終わる頃にはこれら API についてもっと知りたくなっているだろうと期待してますが。道中では、イカしたオブジェクトを活用して、ボールを壁で弾ませる、それぞれがぶつかった事を判定する(**衝突判定**という呼び名で知られています)といった上手いテクニックをいくつかお見せしていきます。

## 始めに

始める前に [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css), と [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) ファイルのローカルコピーを作成してください。これらにはそれぞれ、以下が含まれています:

1. とても簡素な HTML 文書で、{{HTMLElement("Heading_Elements", "h1")}} 要素と、ボールを描画するための {{HTMLElement("canvas")}} 要素と、この HTML に CSS と JavaScript を適用するための要素だけからなります。
2. とても簡単なスタイル、主には`<h1>`のスタイルとポジションを指定し、スクロールバーやページ端周辺のマージンを消す(素敵にきれいに見せるため)ためのもの。
3. `<canvas>`要素を設定し、これから使うことになる汎用の関数を提供する若干の JavaScript。

スクリプトの最初の部分はこのようになります。

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

このスクリプトでは `<canvas>` 要素への参照を取得し、これに対して [`getContext()`](/ja/docs/Web/API/HTMLCanvasElement/getContext) メソッドを使って描画していくためのコンテキストを取得します。得られる定数 (`ctx`) はキャンバスの描画可能領域を直接表現しており、ここに二次元の形状を書き込む事ができます。

次に `width` と `height` の 2 つの定数をセットし、キャンバス要素の幅と高さ(`canvas.width` と `canvas.height` プロパティで表わされます)をブラウザーのビューポートの幅と高さ(ウェブページが表示される領域です — {{domxref("Window.innerWidth")}} と{{domxref("Window.innerHeight")}} プロパティから取得できます)に等しくします。

変数の値をさっと全部同じにするのに、代入が連鎖していることに注意してください。これで全く問題ありません。

それから、2 つのヘルパー関数を設置します。

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
```

`random()` 関数は、2 つの数値を引数に取り、その間の範囲の乱数を返します。`randomRGB()` 関数は、[`rgb()`](/ja/docs/Web/CSS/color_value/rgb) 文字列として表されるランダムな色を生成します。

## プログラム用のボールを一つモデル化する

我々のプログラムでは画面中を跳ねまわるたくさんのボールがあります。これらのボールはどれも同じルールで動くので、1 つのオブジェクトで表わすのが理に叶っています。まずはコードの最後に以下のクラス定義を追加するところから始めましょう。

```js
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
}
```

今のところ、このクラスにはコンストラクターだけが含まれており、このコンストラクターで、プログラム内で機能するために各ボールが必要とするプロパティを初期化することができます。

- `x`、`y`座標 — ボールが画面のどこからスタートするか表わす水平と垂直の座標。これは 0（画面左上隅）からブラウザービューポートの幅と高さの（画面右下隅）間の値を取ります。
- 水平と垂直方向の速度 (`velX` と `velY`) — 個々のボールには水平と垂直方向の速度が与えられます。実際にはアニメーションが開始されると、これらの値が `x`/`y`座標値に定期的に加算され、各フレームでこの値だけ移動していきます。
- `color` — 個々のボールには色がつけられます。
- `size` — 個々のボールには大きさがあります — ピクセルを単位とする半径で表わします。

これはプロパティを取り扱いましたが、メソッドはどうしましょうか？プログラムの中ではボールに実際に何かさせたいわけです。

### ボールを描画する

まず、以下の `draw()` メソッドを `Ball` クラスに追加しましょう。

```js
draw() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
```

この関数を使って、以前定義した 2D キャンバスコンテキスト(`ctx`)のメンバーを順に呼び出す方法で、ボール自身が画面に自分を描画する方法を教え込みます。コンテキストは紙のようなもので、ペンを使って何か描くように指示したいわけです:

- まずは、[`beginPath()`](/ja/docs/Web/API/CanvasRenderingContext2D/beginPath) を使って紙に形を描きたいと宣言します。
- 次に [`fillStyle`](/ja/docs/Web/API/CanvasRenderingContext2D/fillStyle) を使って形を何色にしたいか宣言します — ここではボールの `color` プロパティを指定します。
- 次に [`arc()`](/ja/docs/Web/API/CanvasRenderingContext2D/arc) メソッドを使って紙に円弧形をなぞります。これの引数は:

  - 円弧の中心座標、`x` と `y` — ボールの `x`、`y` プロパティを指定します。
  - 円弧の半径 — ここではボールの `size` プロパティです。
  - 最後の二つの引数は円弧の開始点から終了点までの角度を円の中心角で指定します。ここでは 0 度から `2 * PI`、これはラジアンで表わした 360 度に相当します(ややこしいですがラジアンで指定しなければなりません)。これで一周した円を描けます。もし `1 * PI` までしか指定しなければ、半円(180 度)になるでしょう。

- 最後の最後に、[`fill()`](/ja/docs/Web/API/CanvasRenderingContext2D/fill) メソッドを使って、これはおおよそ、「`beginPath()` から描き始めた線描を終了し、描いた領域を前に `fillStyle` で指定していた色で塗り潰せ」という指示になります。

これでオブジェクトをテストしてみられるようになりました。

1. コードを保存し、HTML ファイルをブラウザーで読み込みます。
2. ブラウザーの JavaScript コンソールを開いて、ページを再読み込みし、キャンバスのサイズがコンソール分小さくなったビューポート領域に合うようにします。
3. 次をタイプして、新しいボールのインスタンスを作成します:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. そのメンバを呼び出して見てください。

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. 最後の行を入力すると、キャンバスのどこかにボールが表示されたはずです。

### ボールのデータの更新

ボールの位置を描画することはできますが、実際にボールを移動させるには、何らかの更新関数が必要です。以下のコードを `Ball` のクラス定義の中に追加してください。

```js
update() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
```

関数の頭から 4 つの部分でボールがキャンバスの端に達したかどうかチェックします。もしそうであれば、関連する速度の向きを反転してボールが反対の向きに移動するようにします。つまり例えば、ボールが上方向に移動していた（`velY` が負）ならば、垂直方向の速度をボールが下方向に移動するように（`velY` を正に）変更します。

4 つの場合で、次のことを確認しています。

- `x` 座標がキャンバスの幅より大きいか (ボールは右端から飛び出そうとしている)
- `x` 座標が 0 より小さいか (ボールは左端から飛び出そうとしている)
- `y` 座標がキャンバスの高さより大きいか (ボールは下端から飛び出そうとしている)
- `y` 座標が 0 より小さいか (ボールは上端から飛び出そうとしている)

それぞれの場合で計算にボールの `size` を含めていますが、これは `x`/`y` 座標はボールの中心ですが、ボールの端のところで周囲から跳ね返って欲しいからです — 跳ね返る前に画面外にめり込んで欲しくないからです。

最後の二行では `velX` を `x` 座標に、`velY` を `y` 座標に加算しています — 結果ボールはこのメソッドが呼ばれる毎に移動します。

とりあえずはここまでで、ちょいとアニメーションさせてみよう!

## ボールのアニメーション

さあ、楽しい事をやりましょう。では、キャンバスにボールを追加し、アニメーションさせるところから始めましょう。

最初に、ボールを全部保存しておく場所がどこかに必要です。以下がこれをやってくれます — あなたのコードの最後に追加してください:

```js
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
```

`while` ループは、 `random()` および `randomRGB()` 関数で作成したランダムな値を使って新しい `Ball()` のインスタンスを作成し、ボールの配列の後ろに `push()` して追加していきますが、これは配列中のボールの数が 25 に満たない間まで繰り返されます。`balls.length < 25` の数字をいろいろ変えれば、配列の中のボールの数を増やしたり減らしたりできます。コンピューターとブラウザーの処理能力によりますが、ボールを数千にするとアニメーションはかなり遅くなります! 注意してね。

次に、以下をあなたのコードの末尾に追加してください。

```js
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}
```

ものをアニメーションさせるすべてのプログラムには、大概アニメーションループがあり、プログラム内の情報を更新して、アニメーションの各フレームでその結果を表示します。これは大半のゲームや類似するプログラムの基本になります。コード中の `loop()` 関数は以下の事を行ないます:

- キャンバスの塗り潰し色を半透明の黒にし、その色でキャンバスの幅と高さいっぱいの長方形を `fillRect()` で描きます(これの 4 つの引数は始点の座標と、描画する長方形の幅と高さになります)。これで次のフレームを描く前に、前のフレームで描いた内容を見えなくします。これをしないと、ボールじゃなくて長い蛇がキャンバスの中を這い回る様を見る事になります! 塗り潰す色は半透明の `rgba(0,0,0,0.25)` なので、以前の何フレーム分かがかすかに残り、ボールが移動した後の軌跡を表現します。もし 0.25 を 1 に変更すると、軌跡は全く見えなくなります。この値を変えて、どんな効果になるか見てみてください。
- ループで `balls`配列のボール全部をなめてそれぞれのボールの `draw()` と `update()` 関数を実行し、それぞれを画面に描画してから、次のフレームに備えて必要な位置と速度の更新を行います。
- この関数を `requestAnimationFrame()` メソッドを使って再実行します — このメソッドが繰り返し実行され同じ関数名を与えられると、その関数がスムースなアニメーションを行なうために毎秒設定された回数実行されます。これはたいてい再帰的に行われます — つまり関数は毎回その関数自身を呼び出すので、何度も何度も繰り返し実行されます。

最後に、コードの最後に次の行を追加します — アニメーションを開始するために、一旦は関数を呼ぶ必要があるのです。

```js
loop();
```

基本としてはこんなところ — 保存して再読み込みし、ボールがはずむのをテストしてみてください。

## 衝突検出の追加

さあ、もうちょっと面白くするため、プログラムに衝突判定を追加して、ボールに他のボールとぶつかったらどうするのか教えましょう。

まず、`Ball` クラスに以下のようなメソッド定義を追加します。

```js
collisionDetect() {
  for (const ball of balls) {
    if (this !== ball) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}
```

このメソッドはちょっとばかり複雑なので、今はどんな動作をしているのか正確に理解できなくても構いません。説明していきます。

- それぞれのボールで、他のボールそれぞれとこのボールが衝突していないか調べなければなりません。そのため、別な `for...of` を開始し、`balls[]` 配列内のすべてのボールを回します。
- 内側のループに入ってすぐ、`if` 文でループで回しているボールがチェックしているボールと同じか調べています。ボールがそれ自体とぶつかっているかチェックしたくないですから! これのために、現在のボール（collisionDetect メソッドが実行されているボールです）がループ中のボール（現在の collisionDetect メソッド内のループのくりかえし中で参照されているボール）と一致しているかチェックします。`!` を使って等価性チェックを逆にしているので、`if` 文の中のコードはボールが**同じでない**ときだけ実行されます。
- そして二つの円が衝突していないか調べるための一般的なアルゴリズムを使っています。基本的には円ないの領域が重なっているかチェックしています。これについて詳しくは [2 次元の衝突判定](/ja/docs/Games/Techniques/2D_collision_detection)で解説されています。
- もし衝突が検出されたら、内側の `if` 文の中のコードが実行されます。この場合では、両方のボールの `color` プロパティをランダムな新しい色に設定しているだけです。もっと複雑なこと、現実っぽくボールを互いに跳ね返らせたりもできたでしょうが、これを実装したとするともっとずっとに複雑なったでしょう。そのような物理シミュレーションには、[PhysicsJS](http://wellcaffeinated.net/PhysicsJS/), [matter.js](http://brm.io/matter-js/), [Phaser](http://phaser.io/) などのゲームや物理用のライブラリーを使う開発者が多いです。

アニメーションの各フレーム毎にこのメソッドを呼び出さなければなりません。`loop()` 関数を更新して、`ball.collisionDetect()` を `ball.update()` の後に呼び出すようにします。

```js
function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}
```

デモを保存して再読み込みし、ボールがぶつかった時に色が変わるのを見てください。

> **メモ:** この例題を動かすのに困った時は、あなたの JavaScript コードを私たちの[完成版](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js)と比べてみてください（[ライブ実行版](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html)も見られます）。

## まとめ

自分版の実世界で跳ね回るランダムボール例作り、この全単元で出てきた様々なオブジェクトやオブジェクト指向テクニックを使ったものをあなたに楽しんでいただけていれば、と思います。オブジェクトの実践的な使い方の練習や、実世界のコンテキストについて得られるものがあったはずです。

オブジェクトに関する記事は以上です — 残るのは、あなが自分のスキルをオブジェクトの評価問題で試してみる事だけです。

## 関連情報

- [キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial) — 2D キャンバスの初心者向けガイド。
- [requestAnimationFrame()](/ja/docs/Web/API/window/requestAnimationFrame)
- [二次元の衝突検出](/ja/docs/Games/Techniques/2D_collision_detection)
- [三次元の衝突検出](/ja/docs/Games/Techniques/3D_collision_detection)
- [純粋な JavaScript を使用した 2D ブロック崩しゲーム](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — 2D ゲームの作り方に関する、素晴しい初心者向けチュートリアル。
- [Phaser を使用した 2D ブロック崩しゲーム](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser) — JavaScript ゲームライブラリーを使って 2D ゲームを作るための基本を解説しています。

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
