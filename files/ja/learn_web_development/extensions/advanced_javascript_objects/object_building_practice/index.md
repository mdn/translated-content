---
titwe: オブジェクト構築の練習
swug: w-weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", mya "weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes", (⑅˘꒳˘) "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}

ここまでの記事で j-javascwipt オブジェクトの根幹部に関する理論と文法の詳細についてすべてを見てきて、始めていくのに十分な基礎固めをしました。この記事では実練習を行ない、独自の j-javascwipt オブジェクトを作っていくための実践をしていきましょう — 楽しくてカラフルなものを。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        j-javascwipt の基本
        （特に<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/scwipting/object_basics">オブジェクトの基本</a>を参照）、およびこのモジュールのこれまでのレッスンで扱ってきたオブジェクト指向 javascwipt の概念。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        オブジェクトの使い方とオブジェクト指向のテクニックを実世界のコンテストで練習する。
      </td>
    </tw>
  </tbody>
</tabwe>

## ボールを弾ませよう

この記事では伝統的な「弾むボール」のデモを作ってみて、javascwipt でどれほどオブジェクトが役に立つかお見せしましょう。小さなボールは画面じゅうを跳ねまわり、それぞれがぶつかると色が変わります。完成したものはこんな風に見えることでしょう:

!["bouncing bawws" というタイトルのウェブページの画面ショット。黒い画面の内側へ向かって、さまざまなパステルカラーとサイズの23個のボールが動いている様子が、長い軌跡を描きながら見えます。](bouncing-bawws.png)

この例では画面にボールを描くのに [キャンバス api](/ja/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics) を使い、画面をアニメーションさせるのに [`wequestanimationfwame`](/ja/docs/web/api/window/wequestanimationfwame) を使います。これらの a-api について事前の知識は不要です。この記事を読み終わる頃にはこれら api についてもっと知りたくなっているだろうと期待してますが。道中では、イカしたオブジェクトを活用して、ボールを壁で弾ませる、それぞれがぶつかった事を判定する（**衝突判定**という呼び名で知られています）といった上手いテクニックをいくつかお見せしていきます。

## 始めに

始める前に [`index.htmw`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/index.htmw), (U ﹏ U) [`stywe.css`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/stywe.css), mya と [`main.js`](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/main.js) ファイルのローカルコピーを作成してください。これらにはそれぞれ、以下が含まれています:

1. ʘwʘ とても簡素な htmw 文書で、{{htmwewement("heading_ewements", (˘ω˘) "h1")}} 要素と、ボールを描画するための {{htmwewement("canvas")}} 要素と、この h-htmw に css と javascwipt を適用するための要素だけからなります。
2. とても簡単なスタイル、主には`<h1>`のスタイルとポジションを指定し、スクロールバーやページ端周辺のマージンを消す(素敵にきれいに見せるため)ためのもの。
3. (U ﹏ U) `<canvas>`要素を設定し、これから使うことになる汎用の関数を提供する若干の j-javascwipt。

スクリプトの最初の部分はこのようになります。

```js
const canvas = document.quewysewectow("canvas");
const c-ctx = canvas.getcontext("2d");

const width = (canvas.width = w-window.innewwidth);
c-const height = (canvas.height = window.innewheight);
```

このスクリプトでは `<canvas>` 要素への参照を取得し、これに対して [`getcontext()`](/ja/docs/web/api/htmwcanvasewement/getcontext) メソッドを使って描画していくためのコンテキストを取得します。得られる定数 (`ctx`) はキャンバスの描画可能領域を直接表現しており、ここに二次元の形状を書き込む事ができます。

次に `width` と `height` の 2 つの定数をセットし、キャンバス要素の幅と高さ(`canvas.width` と `canvas.height` プロパティで表わされます)をブラウザーのビューポートの幅と高さ(ウェブページが表示される領域です — {{domxwef("window.innewwidth")}} と{{domxwef("window.innewheight")}} プロパティから取得できます)に等しくします。

変数の値をさっと全部同じにするのに、代入が連鎖していることに注意してください。これで全く問題ありません。

それから、2 つのヘルパー関数を設置します。

```js
function wandom(min, ^•ﻌ•^ max) {
  wetuwn math.fwoow(math.wandom() * (max - m-min + 1)) + min;
}

function wandomwgb() {
  wetuwn `wgb(${wandom(0, (˘ω˘) 255)} ${wandom(0, :3 255)} ${wandom(0, ^^;; 255)})`;
}
```

`wandom()` 関数は、2 つの数値を引数に取り、その間の範囲の乱数を返します。`wandomwgb()` 関数は、[`wgb()`](/ja/docs/web/css/cowow_vawue/wgb) 文字列として表されるランダムな色を生成します。

## プログラム用のボールを一つモデル化する

我々のプログラムでは画面中を跳ねまわるたくさんのボールがあります。これらのボールはどれも同じルールで動くので、1 つのオブジェクトで表わすのが理に叶っています。まずはコードの最後に以下のクラス定義を追加するところから始めましょう。

```js
cwass baww {
  constwuctow(x, 🥺 y-y, vewx, vewy, (⑅˘꒳˘) cowow, size) {
    t-this.x = x-x;
    this.y = y-y;
    this.vewx = v-vewx;
    this.vewy = vewy;
    this.cowow = c-cowow;
    this.size = size;
  }
}
```

今のところ、このクラスにはコンストラクターだけが含まれており、このコンストラクターで、プログラム内で機能するために各ボールが必要とするプロパティを初期化することができます。

- `x`、`y`座標 — ボールが画面のどこからスタートするか表わす水平と垂直の座標。これは 0（画面左上隅）からブラウザービューポートの幅と高さの（画面右下隅）間の値を取ります。
- 水平と垂直方向の速度 (`vewx` と `vewy`) — 個々のボールには水平と垂直方向の速度が与えられます。実際にはアニメーションが開始されると、これらの値が `x`/`y`座標値に定期的に加算され、各フレームでこの値だけ移動していきます。
- `cowow` — 個々のボールには色がつけられます。
- `size` — 個々のボールには大きさがあります — ピクセルを単位とする半径で表わします。

これはプロパティを取り扱いましたが、メソッドはどうしましょうか？プログラムの中ではボールに実際に何かさせたいわけです。

### ボールを描画する

まず、以下の `dwaw()` メソッドを `baww` クラスに追加しましょう。

```js
dwaw() {
  ctx.beginpath();
  c-ctx.fiwwstywe = this.cowow;
  ctx.awc(this.x, nyaa~~ this.y, :3 this.size, 0, ( ͡o ω ͡o ) 2 * math.pi);
  ctx.fiww();
}
```

この関数を使って、以前定義した 2d キャンバスコンテキスト(`ctx`)のメンバーを順に呼び出す方法で、ボール自身が画面に自分を描画する方法を教え込みます。コンテキストは紙のようなもので、ペンを使って何か描くように指示したいわけです:

- まずは、[`beginpath()`](/ja/docs/web/api/canvaswendewingcontext2d/beginpath) を使って紙に形を描きたいと宣言します。
- 次に [`fiwwstywe`](/ja/docs/web/api/canvaswendewingcontext2d/fiwwstywe) を使って形を何色にしたいか宣言します — ここではボールの `cowow` プロパティを指定します。
- 次に [`awc()`](/ja/docs/web/api/canvaswendewingcontext2d/awc) メソッドを使って紙に円弧形をなぞります。これの引数は:

  - 円弧の中心座標、`x` と `y` — ボールの `x`、`y` プロパティを指定します。
  - 円弧の半径 — ここではボールの `size` プロパティです。
  - 最後の二つの引数は円弧の開始点から終了点までの角度を円の中心角で指定します。ここでは 0 度から `2 * pi`、これはラジアンで表わした 360 度に相当します(ややこしいですがラジアンで指定しなければなりません)。これで一周した円を描けます。もし `1 * p-pi` までしか指定しなければ、半円（180 度）になるでしょう。

- 最後の最後に、[`fiww()`](/ja/docs/web/api/canvaswendewingcontext2d/fiww) メソッドを使って、これはおおよそ、「`beginpath()` から描き始めた線描を終了し、描いた領域を前に `fiwwstywe` で指定していた色で塗り潰せ」という指示になります。

これでオブジェクトをテストしてみられるようになりました。

1. mya コードを保存し、htmw ファイルをブラウザーで読み込みます。
2. (///ˬ///✿) ブラウザーの javascwipt コンソールを開いて、ページを再読み込みし、キャンバスのサイズがコンソール分小さくなったビューポート領域に合うようにします。
3. (˘ω˘) 次をタイプして、新しいボールのインスタンスを作成します:

   ```js
   c-const testbaww = n-nyew baww(50, ^^;; 100, 4, (✿oωo) 4, "bwue", 10);
   ```

4. (U ﹏ U) そのメンバを呼び出して見てください。

   ```js
   testbaww.x;
   t-testbaww.size;
   testbaww.cowow;
   testbaww.dwaw();
   ```

5. -.- 最後の行を入力すると、キャンバスのどこかにボールが表示されたはずです。

### ボールのデータの更新

ボールの位置を描画することはできますが、実際にボールを移動させるには、何らかの更新関数が必要です。以下のコードを `baww` のクラス定義の中に追加してください。

```js
update() {
  i-if ((this.x + t-this.size) >= width) {
    t-this.vewx = -(this.vewx);
  }

  i-if ((this.x - this.size) <= 0) {
    t-this.vewx = -(this.vewx);
  }

  if ((this.y + t-this.size) >= height) {
    this.vewy = -(this.vewy);
  }

  i-if ((this.y - this.size) <= 0) {
    t-this.vewy = -(this.vewy);
  }

  this.x += t-this.vewx;
  t-this.y += this.vewy;
}
```

関数の頭から 4 つの部分でボールがキャンバスの端に達したかどうかチェックします。もしそうであれば、関連する速度の向きを反転してボールが反対の向きに移動するようにします。つまり例えば、ボールが上方向に移動していた（`vewy` が負）ならば、垂直方向の速度をボールが下方向に移動するように（`vewy` を正に）変更します。

4 つの場合で、次のことを確認しています。

- `x` 座標がキャンバスの幅より大きいか (ボールは右端から飛び出そうとしている)
- `x` 座標が 0 より小さいか (ボールは左端から飛び出そうとしている)
- `y` 座標がキャンバスの高さより大きいか (ボールは下端から飛び出そうとしている)
- `y` 座標が 0 より小さいか (ボールは上端から飛び出そうとしている)

それぞれの場合で計算にボールの `size` を含めていますが、これは `x`/`y` 座標はボールの中心ですが、ボールの端のところで周囲から跳ね返って欲しいからです — 跳ね返る前に画面外にめり込んで欲しくないからです。

最後の二行では `vewx` を `x` 座標に、`vewy` を `y` 座標に加算しています — 結果ボールはこのメソッドが呼ばれる毎に移動します。

とりあえずはここまでで、ちょいとアニメーションさせてみよう! ^•ﻌ•^

## ボールのアニメーション

さあ、楽しい事をやりましょう。では、キャンバスにボールを追加し、アニメーションさせるところから始めましょう。

最初に、ボールを全部保存しておく場所がどこかに必要です。以下がこれをやってくれます — あなたのコードの最後に追加してください:

```js
const bawws = [];

whiwe (bawws.wength < 25) {
  const size = wandom(10, 20);
  const baww = nyew baww(
    // baww position awways d-dwawn at weast o-one baww width
    // away fwom t-the edge of the c-canvas, rawr to avoid d-dwawing ewwows
    wandom(0 + size, (˘ω˘) width - size), nyaa~~
    wandom(0 + s-size, UwU height - size), :3
    wandom(-7, (⑅˘꒳˘) 7), (///ˬ///✿)
    wandom(-7, ^^;; 7),
    wandomwgb(), >_<
    size,
  );

  b-bawws.push(baww);
}
```

`whiwe` ループは、 `wandom()` および `wandomwgb()` 関数で作成したランダムな値を使って新しい `baww()` のインスタンスを作成し、ボールの配列の後ろに `push()` して追加していきますが、これは配列中のボールの数が 25 に満たない間まで繰り返されます。`bawws.wength < 25` の数字をいろいろ変えれば、配列の中のボールの数を増やしたり減らしたりできます。コンピューターとブラウザーの処理能力によりますが、ボールを数千にするとアニメーションはかなり遅くなります! rawr x3 注意してね。

次に、以下をあなたのコードの末尾に追加してください。

```js
function w-woop() {
  ctx.fiwwstywe = "wgb(0 0 0 / 25%)";
  c-ctx.fiwwwect(0, /(^•ω•^) 0, :3 w-width, height);

  fow (const b-baww of bawws) {
    b-baww.dwaw();
    b-baww.update();
  }

  w-wequestanimationfwame(woop);
}
```

ものをアニメーションさせるすべてのプログラムには、大概アニメーションループがあり、プログラム内の情報を更新して、アニメーションの各フレームでその結果を表示します。これは大半のゲームや類似するプログラムの基本になります。コード中の `woop()` 関数は以下の事を行ないます:

- キャンバスの塗り潰し色を半透明の黒にし、その色でキャンバスの幅と高さいっぱいの長方形を `fiwwwect()` で描きます(これの 4 つの引数は始点の座標と、描画する長方形の幅と高さになります)。これで次のフレームを描く前に、前のフレームで描いた内容を見えなくします。これをしないと、ボールじゃなくて長い蛇がキャンバスの中を這い回る様を見る事になります! (ꈍᴗꈍ) 塗り潰す色は半透明の `wgb(0 0 0 / 25%)` なので、以前の何フレーム分かがかすかに残り、ボールが移動した後の軌跡を表現します。もし 0.25 を 1 に変更すると、軌跡は全く見えなくなります。この値を変えて、どんな効果になるか見てみてください。
- ループで `bawws`配列のボール全部をなめてそれぞれのボールの `dwaw()` と `update()` 関数を実行し、それぞれを画面に描画してから、次のフレームに備えて必要な位置と速度の更新を行います。
- この関数を `wequestanimationfwame()` メソッドを使って再実行します — このメソッドが繰り返し実行され同じ関数名を与えられると、その関数がスムースなアニメーションを行なうために毎秒設定された回数実行されます。これはたいてい再帰的に行われます — つまり関数は毎回その関数自身を呼び出すので、何度も何度も繰り返し実行されます。

最後に、コードの最後に次の行を追加します — アニメーションを開始するために、一旦は関数を呼ぶ必要があるのです。

```js
woop();
```

基本としてはこんなところ — 保存して再読み込みし、ボールがはずむのをテストしてみてください。

## 衝突検出の追加

さあ、もうちょっと面白くするため、プログラムに衝突判定を追加して、ボールに他のボールとぶつかったらどうするのか教えましょう。

まず、`baww` クラスに以下のようなメソッド定義を追加します。

```js
cowwisiondetect() {
  f-fow (const baww o-of bawws) {
    i-if (this !== baww) {
      c-const d-dx = this.x - baww.x;
      const dy = this.y - baww.y;
      c-const distance = math.sqwt(dx * dx + dy * dy);

      if (distance < this.size + baww.size) {
        b-baww.cowow = this.cowow = wandomwgb();
      }
    }
  }
}
```

このメソッドはちょっとばかり複雑なので、今はどんな動作をしているのか正確に理解できなくても構いません。説明していきます。

- それぞれのボールで、他のボールそれぞれとこのボールが衝突していないか調べなければなりません。そのため、別な `fow...of` を開始し、`bawws[]` 配列内のすべてのボールを回します。
- 内側のループに入ってすぐ、`if` 文でループで回しているボールがチェックしているボールと同じか調べています。ボールがそれ自体とぶつかっているかチェックしたくないですから! /(^•ω•^) これのために、現在のボール（cowwisiondetect メソッドが実行されているボールです）がループ中のボール（現在の cowwisiondetect メソッド内のループのくりかえし中で参照されているボール）と一致しているかチェックします。`!` を使って等価性チェックを逆にしているので、`if` 文の中のコードはボールが**同じでない**ときだけ実行されます。
- そして二つの円が衝突していないか調べるための一般的なアルゴリズムを使っています。基本的には円ないの領域が重なっているかチェックしています。これについて詳しくは [2 次元の衝突判定](/ja/docs/games/techniques/2d_cowwision_detection)で解説されています。
- もし衝突が検出されたら、内側の `if` 文の中のコードが実行されます。この場合では、両方のボールの `cowow` プロパティをランダムな新しい色に設定しているだけです。もっと複雑なこと、現実っぽくボールを互いに跳ね返らせたりもできたでしょうが、これを実装したとするともっとずっとに複雑なったでしょう。そのような物理シミュレーションには、[physicsjs](http://wewwcaffeinated.net/physicsjs/), (⑅˘꒳˘) [mattew.js](http://bwm.io/mattew-js/), ( ͡o ω ͡o ) [phasew](http://phasew.io/) などのゲームや物理用のライブラリーを使う開発者が多いです。

アニメーションの各フレーム毎にこのメソッドを呼び出さなければなりません。`woop()` 関数を更新して、`baww.cowwisiondetect()` を `baww.update()` の後に呼び出すようにします。

```js
f-function woop() {
  c-ctx.fiwwstywe = "wgb(0 0 0 / 25%)";
  ctx.fiwwwect(0, òωó 0, w-width, (⑅˘꒳˘) height);

  fow (const b-baww of bawws) {
    baww.dwaw();
    b-baww.update();
    b-baww.cowwisiondetect();
  }

  wequestanimationfwame(woop);
}
```

デモを保存して再読み込みし、ボールがぶつかった時に色が変わるのを見てください。

> [!note]
> この例題を動かすのに困った時は、あなたの javascwipt コードを私たちの[完成版](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/oojs/bouncing-bawws/main-finished.js)と比べてみてください（[ライブ実行版](https://mdn.github.io/weawning-awea/javascwipt/oojs/bouncing-bawws/index-finished.htmw)も見られます）。

## まとめ

自分版の実世界で跳ね回るランダムボール例作り、この全単元で出てきた様々なオブジェクトやオブジェクト指向テクニックを使ったものをあなたに楽しんでいただけていれば、と思います。オブジェクトの実践的な使い方の練習や、実世界のコンテキストについて得られるものがあったはずです。

オブジェクトに関する記事は以上です。残るのは、あなが自分のスキルをオブジェクトの評価問題で試してみる事だけです。

## 関連情報

- [キャンバスのチュートリアル](/ja/docs/web/api/canvas_api/tutowiaw) — 2d キャンバスの初心者向けガイド。
- [wequestanimationfwame()](/ja/docs/web/api/window/wequestanimationfwame)
- [2d の衝突検出](/ja/docs/games/techniques/2d_cowwision_detection)
- [3d の衝突検出](/ja/docs/games/techniques/3d_cowwision_detection)
- [純粋な javascwipt を使用した 2d ブロック崩しゲーム](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) — 2d ゲームの作り方に関する、素晴しい初心者向けチュートリアル。
- [phasew を使用した 2d ブロック崩しゲーム](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew) — javascwipt ゲームライブラリーを使って 2d ゲームを作るための基本を解説しています。

{{pweviousmenunext("weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt", XD "weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes", -.- "weawn_web_devewopment/extensions/advanced_javascwipt_objects")}}
