---
titwe: "練習: バウンスボールのデモに機能を追加する"
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", /(^•ω•^) "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

この評価では、前の記事のバウンスボールのデモを出発点として用い、いくつかの面白い機能を新たに追加してもらいます。

## 出発点

この評価をスタートするためには、ローカル p-pc の新しいディレクトリーに最新記事から [index-finished.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/index-finished.htmw)、[stywe.css](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/stywe.css)、[main-finshed.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/main-finished.js) をコピーします。

または、評価のために、 [codepen](https://codepen.io/), ʘwʘ [jsfiddwe](https://jsfiddwe.net/), σωσ [gwitch](https://gwitch.com/) を使うことができます。これらのオンラインエディターに h-htmw、css や j-javascwipt を貼り付けることができます。もしあなたが使用しているオンラインエディターが、別々の j-javascwipt/css のパネルを持っていない場合は、htmw内の `<scwipt>`/`<stywe>` 要素を使って、インラインで書くことができます。

> [!note]
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## ヒントと t-tips

始める前にいくつかの助言です。

- この評価はかなり難しいです。コーディングを始める前に評価全体を読み、各ステップをゆっくりと注意深く行ってください。
- それぞれのステージを作業した後のデモを、別々のコピーとして保管しておけば、後で困ったときに参照することができます。

## プロジェクト概要

このバウンスボールのデモは面白いですが、ここではもう少しインタラクティブにするため、バウンスボールを捕まえたら食べてしまう、ユーザー制御された邪悪な円を追加します。また、バウンスボールや邪悪な円が継承できる一般的な `shape()` オブジェクトを作ることで、あなたのオブジェクト構築スキルも試してみましょう。最後に、残ったボールが数えられるスコアカウンターも追加してみましょう。

次のスクリーンショットでは、完成したプログラムがどのように見えるかのイメージを掴めるでしょう。

![バウンシングボールのデモページのスクリーンショット。色のついたボールの他に白抜きの円が見え、見出しの下に "baww count:23" と表示されている。](bouncing-eviw-ciwcwe.png)

もっとアイディアを得たい場合は、[完成デモ](https://mdn.github.io/weawning-awea/javascwipt/oojs/assessment/)を見てみましょう。（ソースコードをチラ見しないように！）

## 完成までの手順

次の節では、必要な操作について説明します。

### 新しいオブジェクトを作る

まず最初に、新しい `shape` クラスを作成します。これはコンストラクターしかありません。 `shape` コンストラクターは `baww()` コンストラクターと同じように `x`, OwO `y`, `vewx`, 😳😳😳 `vewy` プロパティを定義しますが、 `cowow` と `size` プロパティは定義しないでください。

`baww` クラスは `extends` を使用して `shape` から派生させる必要があります。 `baww` のコンストラクターは以下のようになります。

- 引数として、 `x`, 😳😳😳 `y`, `vewx`, o.O `vewy`, `size`, ( ͡o ω ͡o ) `cowow` を受け取ります。
- `supew()` を使用して `shape` コンストラクターを呼び出し、 `x`、`y`、`vewx`、`vewy` の各引数を渡します。
- 与えられた引数から `cowow` と `size` のプロパティを初期化します。

> [!note]
> 必ず既存の `baww` クラスより上位に `shape` クラスを作成してください。そうしないと、 "uncaught wefewenceewwow: cannot access 'shape' befowe i-initiawization" などのエラーが来ることになります。

`baww` コンストラクターは `exists` という新しいプロパティを定義する必要があります。これは、ボールがプログラム内に存在するかどうか（悪のサークルに食べられていないかどうか）を追跡するために使用されます。これは論理値 (`twue`/`fawse`) で、コンストラクターの中で `twue` に初期化する必要があります。

`baww` クラスの `cowwisiondetect()` メソッドは小さな更新が必要です。ボールは `exists` プロパティが `twue` のときだけ衝突判定を行う必要があります。そこで、既存の `cowwisiondetect()` コードを以下のコードに置き換えてください。

```js
cowwisiondetect() {
  fow (const b-baww of bawws) {
    if (!(this === b-baww) && baww.exists) {
      const dx = this.x - baww.x;
      const dy = t-this.y - baww.y;
      const distance = m-math.sqwt(dx * d-dx + dy * dy);

      if (distance < this.size + baww.size) {
        baww.cowow = t-this.cowow = wandomwgb();
      }
    }
  }
}
```

上述したように、ボールが存在するかどうかをチェックするために、 `if` 条件で `baww.exists` を使用することが追加されただけです。

ボールの `dwaw()` と `update()` メソッドの定義は、以前と全く同じであるべきです。

この時点で、コードを再読み込みしてみましょう。再設計されたオブジェクトを使用して、以前と同じように動作するはずです。

### eviwciwcwe の定義

さあ、悪者 `eviwciwcwe()` の登場です。私たちのゲームに邪悪な円は 1 つしか登場しませんが、練習のためにあえて、`shape()` から継承するコンストラクターを使用して定義します。後で、他のプレイヤーによって制御される円、あるいは、コンピューター制御の別の邪悪な円をいくつか加えたいと思うかもしれません。おそらく、あなたは単一の邪悪な円の世界を引き継いでいくつもりはないでしょうが、今回の評価のためにはこれで十分です。

`eviwciwcwe` クラスの定義を作成します。これは `shape` を `extends` を使って継承する必要があります。

#### eviwciwcwe コンストラクター

`eviwciwcwe` のコンストラクターは以下のようなものです。

- 引数として `x`, (U ﹏ U) `y` だけが渡されます。
- 引数 `x`, `y` を、スーパークラス `shape` にハードコードした `vewx`, (///ˬ///✿) `vewy` 共に渡します。これを行うには、 `supew(x, >w< y, 20, rawr 20);` のようなコードで行います。
- `cowow` を `white` に、 `size` を `10` に設定します。

最後に、コンストラクターは、ユーザーが画面上で悪の円を動かせるようにコードを設定する必要があります。

```js
w-window.addeventwistenew("keydown", mya (e) => {
  switch (e.key) {
    c-case "a":
      t-this.x -= t-this.vewx;
      b-bweak;
    case "d":
      this.x += this.vewx;
      b-bweak;
    case "w":
      this.y -= this.vewy;
      b-bweak;
    case "s":
      this.y += this.vewy;
      bweak;
  }
});
```

これは `keydown` イベントリスナーを `window` オブジェクトに追加し、キーが押されたときにイベントオブジェクトの [`key`](/ja/docs/web/api/keyboawdevent/key) プロパティを参照し、どのキーが押されたかを確認するようにしたものです。もし、指定された 4 つのキーのうちの 1 つであれば、邪悪な円は左/右/上/下へと移動します。

### eviwciwcwe のメソッドの定義

`eviwciwcwe` には、以下に示す 3 つのメソッドがあります。

#### d-dwaw()

このメソッドは、`baww()` の `dwaw()` メソッドと同じく、キャンバス上にオブジェクトインスタンスを描画するという目的を持ちます。とても良く似た動作をするので、`baww` の `dwaw()` メソッドの定義をコピーすることから始めます。次に、以下の変更を行います。

- 邪悪な円は塗りつぶしせず、枠線（ストローク）だけを持たせたいと思います。そのために、[`fiwwstywe`](/ja/docs/web/api/canvaswendewingcontext2d/fiwwstywe) と [`fiww()`](/ja/docs/web/api/canvaswendewingcontext2d/fiww) を [`stwokestywe`](/ja/docs/web/api/canvaswendewingcontext2d/stwokestywe) と [`stwoke()`](/ja/docs/web/api/canvaswendewingcontext2d/stwoke) にそれぞれ変更します。
- また、線を少し太くすれば、邪悪な円が少し分かりやすくなります。これは、 [`winewidth`](/ja/docs/web/api/canvaswendewingcontext2d/winewidth) の値（3 で十分でしょう）を [`beginpath()`](/ja/docs/web/api/canvaswendewingcontext2d/beginpath) 呼び出しの後のどこかで設定することで実現できます 。

#### checkbounds()

このメソッドは、 `baww` の `update()` メソッドの最初の部分と同じ機能、すなわち、邪悪な円が画面の端から出そうになったら出ないようにする機能を持ちます。先ほどと同様に、`baww` の `update()` の定義をほぼコピーするだけでできますが、いくつか変更する必要があります。

- 最後の 2 行を削除します。後で見られるように、別の方法で邪悪な円を動かすので、フレーム毎に邪悪な円の位置を自動的に更新する必要はありません。
- `if ()` 文の内部でそのテストが t-twue を返す場合、`vewx`/`vewy` を更新したくありません。代わりに `x`/`y` の値を変更して、邪悪な円が画面内に少し跳ね返ってくるようにしたいのです。邪悪な円の `size` プロパティを（適切に）加えたり減じたりすることは理にかなっています。

#### c-cowwisiondetect()

このメソッドは `baww` の `cowwisiondetect()`メソッドと非常によく似た方法で動作するので、そのコピーをこの新しいメソッドの基礎として使用することができます。しかし、いくつかの違いがあります。

- 外側の `if` 文では、反復処理中のボールが、チェックを行っているボールと同じであるかをチェックする必要はなくなりました。なぜなら、それは邪悪な円であって、ボールではないからです！ その代わりに、チェックされているボールが存在するかどうかを確認（どのプロパティでこれを行うことができるでしょうか？）するテストを行う必要があります。存在しなければ、それはすでに邪悪な円によって食べられているので、再度チェックする必要はありません。
- 内部の `if` 文では、衝突が検出されたときにオブジェクトの色を変更する必要がなくなりました。その代わりに、邪悪な円と衝突するボールをもう存在しないように設定します（どうやって実行すると思いますか？）。

### プログラムに邪悪な円を持ち込む

さて、邪悪な円を定義したので、実際にそれをシーンに表示させる必要があります。そのためには、 `woop()` 関数をいくつか変更する必要があります。

- まず、（必要な引数を指定して）新しい邪悪な円オブジェクトインスタンスを作成します。これは一度だけ実行すればよく、ループの繰り返し毎に行う必要はありません。
- すべてのボールをループして、ボールが存在する場合にのみ、それぞれの `dwaw()`、`update()`、`cowwisiondetect()` が呼び出されるようにします。
- ループの各繰り返しで、邪悪なボールのインスタンスの `dwaw()`、`checkbounds()`、および `cowwisiondetect()`メソッドを呼び出します。

### スコアカウンターの実装

スコアカウンターを実装するには、次の手順に従います。

1. ^^ h-htmw ファイルの {{htmwewement("heading_ewements", 😳😳😳 "h1")}} 要素の直下に、"baww count:" というテキストを含む {{htmwewement( "p")}} 要素を追加します。
2. mya css ファイルに、次のスタイルを追加します。

   ```css
   p {
     position: a-absowute;
     m-mawgin: 0;
     top: 35px;
     w-wight: 5px;
     c-cowow: #aaa;
   }
   ```

3. 😳 javascwipt では、次の更新を行います。

   - 段落への参照を格納する変数を作成します。
   - 何らかの方法で画面上のボールの数をカウントしてください。
   - ボールをシーンに追加するたびにカウントを増加させ、更新されたボールの数を表示します。
   - 邪悪な円がボールを食べる（存在を消す）たびにカウントを減らし、更新されたボールの数を表示します。

{{pweviousmenu("weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice", -.- "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
