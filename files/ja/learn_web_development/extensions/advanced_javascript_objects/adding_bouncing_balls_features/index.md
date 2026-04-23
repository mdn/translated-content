---
title: "練習: バウンスボールのデモに機能を追加する"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

この評価では、前の記事のバウンスボールのデモを出発点として用い、いくつかの面白い機能を新たに追加してもらいます。

## 出発点

この評価をスタートするためには、ローカル PC の新しいディレクトリーに最新記事から [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html)、[style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css)、[main-finshed.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) をコピーします。

または、評価のために、 [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/), [Glitch](https://glitch.com/) を使うことができます。これらのオンラインエディターに HTML、CSS や JavaScript を貼り付けることができます。もしあなたが使用しているオンラインエディターが、別々の JavaScript/CSS のパネルを持っていない場合は、HTML内の `<script>`/`<style>` 要素を使って、インラインで書くことができます。

> [!NOTE]
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## ヒントと tips

始める前にいくつかの助言です。

- この評価はかなり難しいです。コーディングを始める前に評価全体を読み、各ステップをゆっくりと注意深く行ってください。
- それぞれのステージを作業した後のデモを、別々のコピーとして保管しておけば、後で困ったときに参照することができます。

## プロジェクト概要

このバウンスボールのデモは面白いですが、ここではもう少しインタラクティブにするため、バウンスボールを捕まえたら食べてしまう、ユーザー制御された邪悪な円を追加します。また、バウンスボールや邪悪な円が継承できる一般的な `Shape()` オブジェクトを作ることで、あなたのオブジェクト構築スキルも試してみましょう。最後に、残ったボールが数えられるスコアカウンターも追加してみましょう。

次のスクリーンショットでは、完成したプログラムがどのように見えるかのイメージを掴めるでしょう。

![バウンシングボールのデモページのスクリーンショット。色のついたボールの他に白抜きの円が見え、見出しの下に "Ball count:23" と表示されている。](bouncing-evil-circle.png)

もっとアイディアを得たい場合は、[完成デモ](https://mdn.github.io/learning-area/javascript/oojs/assessment/)を見てみましょう。（ソースコードをチラ見しないように！）

## 完成までの手順

次の節では、必要な操作について説明します。

### 新しいオブジェクトを作る

まず最初に、新しい `Shape` クラスを作成します。これはコンストラクターしかありません。 `Shape` コンストラクターは `Ball()` コンストラクターと同じように `x`, `y`, `velX`, `velY` プロパティを定義しますが、 `color` と `size` プロパティは定義しないでください。

`Ball` クラスは `extends` を使用して `Shape` から派生させる必要があります。 `Ball` のコンストラクターは以下のようになります。

- 引数として、 `x`, `y`, `velX`, `velY`, `size`, `color` を受け取ります。
- `super()` を使用して `Shape` コンストラクターを呼び出し、 `x`、`y`、`velX`、`velY` の各引数を渡します。
- 与えられた引数から `color` と `size` のプロパティを初期化します。

> [!NOTE]
> 必ず既存の `Ball` クラスより上位に `Shape` クラスを作成してください。そうしないと、 "Uncaught ReferenceError: Cannot access 'Shape' before initialization" などのエラーが来ることになります。

`Ball` コンストラクターは `exists` という新しいプロパティを定義する必要があります。これは、ボールがプログラム内に存在するかどうか（悪のサークルに食べられていないかどうか）を追跡するために使用されます。これは論理値 (`true`/`false`) で、コンストラクターの中で `true` に初期化する必要があります。

`Ball` クラスの `collisionDetect()` メソッドは小さな更新が必要です。ボールは `exists` プロパティが `true` のときだけ衝突判定を行う必要があります。そこで、既存の `collisionDetect()` コードを以下のコードに置き換えてください。

```js
collisionDetect() {
  for (const ball of balls) {
    if (!(this === ball) && ball.exists) {
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

上述したように、ボールが存在するかどうかをチェックするために、 `if` 条件で `ball.exists` を使用することが追加されただけです。

ボールの `draw()` と `update()` メソッドの定義は、以前と全く同じであるべきです。

この時点で、コードを再読み込みしてみましょう。再設計されたオブジェクトを使用して、以前と同じように動作するはずです。

### EvilCircle の定義

さあ、悪者 `EvilCircle()` の登場です。私たちのゲームに邪悪な円は 1 つしか登場しませんが、練習のためにあえて、`Shape()` から継承するコンストラクターを使用して定義します。後で、他のプレイヤーによって制御される円、あるいは、コンピューター制御の別の邪悪な円をいくつか加えたいと思うかもしれません。おそらく、あなたは単一の邪悪な円の世界を引き継いでいくつもりはないでしょうが、今回の評価のためにはこれで十分です。

`EvilCircle` クラスの定義を作成します。これは `Shape` を `extends` を使って継承する必要があります。

#### EvilCircle コンストラクター

`EvilCircle` のコンストラクターは以下のようなものです。

- 引数として `x`, `y` だけが渡されます。
- 引数 `x`, `y` を、スーパークラス `Shape` にハードコードした `velX`, `velY` 共に渡します。これを行うには、 `super(x, y, 20, 20);` のようなコードで行います。
- `color` を `white` に、 `size` を `10` に設定します。

最後に、コンストラクターは、ユーザーが画面上で悪の円を動かせるようにコードを設定する必要があります。

```js
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
});
```

これは `keydown` イベントリスナーを `window` オブジェクトに追加し、キーが押されたときにイベントオブジェクトの [`key`](/ja/docs/Web/API/KeyboardEvent/key) プロパティを参照し、どのキーが押されたかを確認するようにしたものです。もし、指定された 4 つのキーのうちの 1 つであれば、邪悪な円は左/右/上/下へと移動します。

### EvilCircle のメソッドの定義

`EvilCircle` には、以下に示す 3 つのメソッドがあります。

#### draw()

このメソッドは、`Ball()` の `draw()` メソッドと同じく、キャンバス上にオブジェクトインスタンスを描画するという目的を持ちます。とても良く似た動作をするので、`Ball` の `draw()` メソッドの定義をコピーすることから始めます。次に、以下の変更を行います。

- 邪悪な円は塗りつぶしせず、枠線（ストローク）だけを持たせたいと思います。そのために、[`fillStyle`](/ja/docs/Web/API/CanvasRenderingContext2D/fillStyle) と [`fill()`](/ja/docs/Web/API/CanvasRenderingContext2D/fill) を [`strokeStyle`](/ja/docs/Web/API/CanvasRenderingContext2D/strokeStyle) と [`stroke()`](/ja/docs/Web/API/CanvasRenderingContext2D/stroke) にそれぞれ変更します。
- また、線を少し太くすれば、邪悪な円が少し分かりやすくなります。これは、 [`lineWidth`](/ja/docs/Web/API/CanvasRenderingContext2D/lineWidth) の値（3 で十分でしょう）を [`beginPath()`](/ja/docs/Web/API/CanvasRenderingContext2D/beginPath) 呼び出しの後のどこかで設定することで実現できます 。

#### checkBounds()

このメソッドは、 `Ball` の `update()` メソッドの最初の部分と同じ機能、すなわち、邪悪な円が画面の端から出そうになったら出ないようにする機能を持ちます。先ほどと同様に、`Ball` の `update()` の定義をほぼコピーするだけでできますが、いくつか変更する必要があります。

- 最後の 2 行を削除します。後で見られるように、別の方法で邪悪な円を動かすので、フレーム毎に邪悪な円の位置を自動的に更新する必要はありません。
- `if ()` 文の内部でそのテストが true を返す場合、`velX`/`velY` を更新したくありません。代わりに `x`/`y` の値を変更して、邪悪な円が画面内に少し跳ね返ってくるようにしたいのです。邪悪な円の `size` プロパティを（適切に）加えたり減じたりすることは理にかなっています。

#### collisionDetect()

このメソッドは `Ball` の `collisionDetect()`メソッドと非常によく似た方法で動作するので、そのコピーをこの新しいメソッドの基礎として使用することができます。しかし、いくつかの違いがあります。

- 外側の `if` 文では、反復処理中のボールが、チェックを行っているボールと同じであるかをチェックする必要はなくなりました。なぜなら、それは邪悪な円であって、ボールではないからです！ その代わりに、チェックされているボールが存在するかどうかを確認（どのプロパティでこれを行うことができるでしょうか？）するテストを行う必要があります。存在しなければ、それはすでに邪悪な円によって食べられているので、再度チェックする必要はありません。
- 内部の `if` 文では、衝突が検出されたときにオブジェクトの色を変更する必要がなくなりました。その代わりに、邪悪な円と衝突するボールをもう存在しないように設定します（どうやって実行すると思いますか？）。

### プログラムに邪悪な円を持ち込む

さて、邪悪な円を定義したので、実際にそれをシーンに表示させる必要があります。そのためには、 `loop()` 関数をいくつか変更する必要があります。

- まず、（必要な引数を指定して）新しい邪悪な円オブジェクトインスタンスを作成します。これは一度だけ実行すればよく、ループの繰り返し毎に行う必要はありません。
- すべてのボールをループして、ボールが存在する場合にのみ、それぞれの `draw()`、`update()`、`collisionDetect()` が呼び出されるようにします。
- ループの各繰り返しで、邪悪なボールのインスタンスの `draw()`、`checkBounds()`、および `collisionDetect()`メソッドを呼び出します。

### スコアカウンターの実装

スコアカウンターを実装するには、次の手順に従います。

1. HTML ファイルの {{HTMLElement("Heading_Elements", "h1")}} 要素の直下に、"Ball count:" というテキストを含む {{HTMLElement( "p")}} 要素を追加します。
2. CSS ファイルに、次のスタイルを追加します。

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. JavaScript では、次の更新を行います。
   - 段落への参照を格納する変数を作成します。
   - 何らかの方法で画面上のボールの数をカウントしてください。
   - ボールをシーンに追加するたびにカウントを増加させ、更新されたボールの数を表示します。
   - 邪悪な円がボールを食べる（存在を消す）たびにカウントを減らし、更新されたボールの数を表示します。

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
