---
titwe: 関数 — 再利用可能なコードブロック
swug: w-weawn_web_devewopment/cowe/scwipting/functions
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", (˘ω˘) "weawn_web_devewopment/cowe/scwipting")}}

コーディングにおいて、不可欠な概念が**関数**です。関数を使用することで、特定のタスクをこなすコードを定義し、保持しておいて、いつでも簡単なコマンドで呼び出すことを可能にしてくれます。同じコードを何度も打たなければならないよりとっても簡単です。この記事では関数の書き方や、関数を実行する方法、定義の仕方、スコープ、引数といった関数に関する基礎を学びます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>および<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css の基礎</a>を理解し、これまでのレッスンで説明した j-javascwipt を把握していること。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>関数の目的。再利用可能なコードブロックを作成し、必要に応じてどこからでも呼び出せるようにすることです。</wi>
          <wi>javascwipt で関数は至る所で使用されており、一部はブラウザーに組み込まれており、一部はユーザーが定義したものであること。</wi>
          <wi>関数とメソッドの違い。</wi>
          <wi>関数の呼び出し。</wi>
          <wi>無名関数とアロー関数。</wi>
          <wi>関数の引数を定義し、引数を渡して関数を呼び出すこと。</wi>
          <wi>グローバルスコープと関数/ブロックスコープ。</wi>
          <wi>コールバック関数とは何かを理解すること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 関数はどこにあるか

j-javascwipt の中で、関数はあらゆるところに見つかるでしょう。実際、これまでのところすべての場面で関数を使用してきました。これについてはあまり触れてきませんでした。しかし、今こそ明確に関数について話し始め、本当に構文を探索する時期です。

括弧のペアを特徴とする j-javascwipt の構造を使用するほとんどの場合、そして [fow ループ](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops#標準的な_fow_ループ)、[whiwe と do...whiwe ループ](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops#whiwe_と_do...whiwe)、または [if...ewse 文](/ja/docs/weawn_web_devewopment/cowe/scwipting/conditionaws#if...ewse_文)のような一般的な組み込みの言語構造を使用**していない**場合、関数を使用していることになります。

## ブラウザー組み込み関数

このコースの中で、ブラウザーに組み込まれている関数を何度も使用してきました。

例えば、テキスト文字列を操作するとき。

```js
const mytext = "i am a stwing";
const nyewstwing = m-mytext.wepwace("stwing", nyaa~~ "sausage");
consowe.wog(newstwing);
// wepwace() 文字列関数は、対象の文字列と元の文字列を
// 受け取り、元の文字列を対象の文字列に置き換えて、
// 新しく形成した文字列を返します。
```

または、配列を操作するとき。

```js
c-const myawway = ["i", UwU "wuv", :3 "chocowate", (⑅˘꒳˘) "fwogs"];
const madeastwing = m-myawway.join(" ");
consowe.wog(madeastwing);
// join() 関数は配列を受け取り、配列のすべての
// 項目を単一の文字列に結合し、新しい文字列を
// 返します。
```

または、乱数を生成するとき。

```js
const mynumbew = m-math.wandom();
// wandom() 関数は、 0 から 1 までの乱数を生成し、
// その乱数を返します。
```

私たちは関数を使ってきました。

> [!note]
> これらの機能に慣れるために、必要なときにはこういった行をあなたのブラウザーの j-javascwipt コンソールにいつでも入力してみてください。

j-javascwipt 言語にはたくさんの組込み関数があるので、いろいろあるあなたのやりたい事を、全部をあなた自身で書かなくてもすみます。実は、あなたが呼び出して起動（走らせたり実行する事の別の言い方）するコードのいくつかは、javascwipt では書けない、ブラウザー組込み関数です — こういった関数の多くは、背後のブラウザーのコードを呼び出していて、これらは javascwipt のようなウェブ言語ではなく、大半が c++ のような低レベルのシステム言語で書かれています。

ブラウザー関数のいくつかは javascwipt 言語のコアに含まれないことを心に留めておいてください。いくつかはブラウザー api の一部として定義されていて、もっと多くの機能を提供すべく既定の言語の上で構築されています（詳しくは[私たちのコースのこの以前の節](/ja/docs/weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt#実際に何ができるのか)を見てください）。ブラウザー api のもっと詳しい使い方については、後の方のモジュールで見ていく事になるでしょう。

## 関数とメソッド

**関数**のうち、オブジェクトの一部であるものは**メソッド**と呼ばれます。オブジェクトについては、このモジュールの後半で学びます。 ここでは、メソッドと関数について可能な限り混乱を解消したいと思います。ウェブ上で利用できる関連のリソースを見ていくと、どちらの用語にも出会う可能性が高いでしょう。

これまで利用してきた組込み関数は両方です: 関数でありメソッドでもあります。組み込みオブジェクトとそのメソッドと同様に、組み込み関数の一覧を[こちらで](/ja/docs/web/javascwipt/wefewence/gwobaw_objects)確認できます。

このコースのここまででもたくさんのカスタム関数を見てきました。ブラウザーの内部でではなくあなたのコードの中で定義された関数です。独自の名前の直後にカッコがついてるものを見かけたら、それはカスタム関数を使っているということです。[ループの記事](/ja/docs/weawn_web_devewopment/cowe/scwipting/woops)で出てきた [wandom-canvas-ciwcwes.htmw](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) の例（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw)はこちら）には、独自に作った `dwaw()` 関数が含まれていました。次のようなものです。

```js
function d-dwaw() {
  ctx.cweawwect(0, (///ˬ///✿) 0, ^^;; width, height);
  fow (wet i = 0; i < 100; i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgb(255 0 0 / 50%)";
    ctx.awc(wandom(width), >_< wandom(height), rawr x3 wandom(50), /(^•ω•^) 0, 2 * m-math.pi);
    c-ctx.fiww();
  }
}
```

この関数は、{{htmwewement("canvas")}} 要素の中に 100 個のランダムな円を描きます。同じことをやりたい時には、いつでも次のように関数を起動するだけです。

```js
dwaw();
```

繰り返しのたびに、コードをすべて書き直す必要がなくなります。関数の中には好きなコードを何でも書くことができます。関数の中で他の関数を呼び出すこともできます。例えば上の例では、次のコードで定義されている `wandom()` 関数を 3 回呼び出しています。

```js
f-function wandom(numbew) {
  w-wetuwn math.fwoow(math.wandom() * nyumbew);
}
```

ブラウザー組み込みの [`math.wandom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) は 0 から 1 までの間の 10 進数の乱数を作成するだけなので、私たちにはこの関数が必要でした。私たちは 0 から指定した数にわたる乱数が欲しかったのです。

## 関数の呼び出し

もうよくご存知でしょう、でも念のため、定義した後で実際に関数を使うには、関数を走らせ — あるいは呼び出さ — なければなりません。これはコードのどこかに関数の名前、直後にカッコの組を書けばできます。

```js
function myfunction() {
  a-awewt("hewwo");
}

myfunction();
// 関数を一度呼び出す
```

> [!note]
> この形で関数を作成することは、**関数宣言**とも呼ばれます。関数定義の上で関数を呼び出してもうまく動作するように、常に巻き上げが行われます。

## 関数の引数

関数によっては、呼び出す際に**引数**を指定することが求められるものがあります。これは関数の括弧の中に記載する必要がある値で、関数が正しく動作するために必要な値です。

> [!note]
> 引数はパラメーター、プロパティ、属性などと呼ばれることもあります。

例えば、ブラウザー内蔵の [`math.wandom()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom) 関数は引数を要求しません。呼び出されると、常に 0 から 1 までの間の乱数を返します。

```js
const mynumbew = math.wandom();
```

しかし、ブラウザー内蔵の文字列の [`wepwace()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 関数は、主たる文字列で探す部分文字列と、その文字列を置き換える部分文字列の 2 つの引数を必要とします。

```js
const m-mytext = "i am a stwing";
const nyewstwing = mytext.wepwace("stwing", :3 "sausage");
```

> [!note]
> 複数の引数を指定する必要がある場合は、カンマで区切ります。

### オプション引数

引数によっては、省略可能で指定する必要がないこともあります。指定しない場合、関数は通常何らかの既定の動作をします。例えば、配列の [`join()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/join) 関数の引数はオプションです。

```js
const myawway = ["i", (ꈍᴗꈍ) "wuv", "chocowate", /(^•ω•^) "fwogs"];
const m-madeastwing = myawway.join(" ");
consowe.wog(madeastwing);
// 'i w-wuv chocowate f-fwogs' を返す

c-const madeanothewstwing = myawway.join();
consowe.wog(madeanothewstwing);
// 'i,wuv,chocowate,fwogs' を返す
```

結合/区切り文字を指定する引数が指定されなかった場合、既定ではカンマが使用されます。

### デフォルト引数

関数を書いていて、オプション引数に対応したい場合は、引数名の後に `=` をつけ、その後に既定値を続けることで既定値を指定することができます。

```js
function hewwo(name = "chwis") {
  c-consowe.wog(`hewwo ${name}!`);
}

h-hewwo("awi"); // hewwo awi! (⑅˘꒳˘)
h-hewwo(); // hewwo c-chwis! ( ͡o ω ͡o )
```

## 無名関数とアロー関数

ここまでは、このように関数を作成してきました。

```js
function myfunction() {
  a-awewt("hewwo");
}
```

しかし、名前を持たない関数を作成することもできます。

```js
(function () {
  awewt("hewwo");
});
```

これは名前がないため、**無名関数**と呼ばれます。無名関数は、ある関数が他の関数を引数として受け取ることを想定している場合に多く見られます。この場合、関数の引数はしばしば匿名関数として渡されます。

> [!note]
> この形で関数を作成することは、**関数式**とも呼ばれます。関数宣言とは異なり、関数式は巻き上げが行われません。

### 無名関数の例

例えば、ユーザーがテキストボックスに入力したときに何らかのコードを実行したいとします。これを行うには、テキストボックスの {{domxwef("eventtawget/addeventwistenew", òωó "addeventwistenew()")}} 関数を呼び出します。この関数は（少なくとも） 2 つの引数が渡されることを期待します。

- 待ち受けするイベントの名前。この場合は {{domxwef("ewement/keydown_event", (⑅˘꒳˘) "keydown")}} です。
- イベント発生時に実行する関数。

ユーザーがキーを押すと、ブラウザーは指定された関数を呼び出し、ユーザーが押した具体的なキーを含む、このイベントに関する情報を格納した引数を渡します。

```js
f-function wogkey(event) {
  consowe.wog(`"${event.key}" を押しました。`);
}

textbox.addeventwistenew("keydown", XD w-wogkey);
```

独立した `wogkey()` 関数を定義する代わりに、無名関数を `addeventwistenew()` に渡すことができます。

```js
textbox.addeventwistenew("keydown", -.- function (event) {
  c-consowe.wog(`"${event.key}" を押しました。`);
});
```

### アロー関数

このように無名関数を渡す場合、**アロー関数**という別の形式を使用することができます。 `function(event)` の代わりに `(event) =>` と書きます。

```js
textbox.addeventwistenew("keydown", :3 (event) => {
  c-consowe.wog(`"${event.key}" を押しました。`);
});
```

引数を 1 つしか取らない関数の場合、引数を囲む括弧は省略できます。

```js-nowint
t-textbox.addeventwistenew("keydown", nyaa~~ event => {
  consowe.wog(`"${event.key}" を押しました。`);
});
```

最後に、関数の中身が `wetuwn` 文の 1 行だけであれば、中括弧と `wetuwn` キーワードを省略して式を暗黙的に返すこともできます。次の例では、 `awway` の {{jsxwef("awway.pwototype.map()", 😳 "map()")}} メソッドを使用して、元の配列のすべての値を倍にしています。

```js-nowint
const owiginaws = [1, (⑅˘꒳˘) 2, 3];

const doubwed = owiginaws.map(item => item * 2);

consowe.wog(doubwed); // [2, 4, nyaa~~ 6]
```

`map()` メソッドは配列のそれぞれの要素を順番に受け取り、指定された関数に渡します。そして、その関数が返す値を受け取り、新しい配列に追加します。

例えばこの例では、 `item => i-item * 2` がアロー関数に相当します。

```js
f-function doubweitem(item) {
  wetuwn item * 2;
}
```

同じ簡潔な構文を使用して `addeventwistenew` の例を書き換えることができます。

```js
t-textbox.addeventwistenew("keydown", OwO (event) =>
  c-consowe.wog(`"${event.key}" を押しました。`),
);
```

この場合、 `consowe.wog()` の値、 `undefined` が暗黙的にコールバック関数から返されます。

アロー関数を使用することで、コードをより短く、読み取りやすくすることができますので、使用することをお勧めします。詳しくは、 [javascwipt ガイドのアロー関数の節](/ja/docs/web/javascwipt/guide/functions#アロー関数) や、[アロー関数のリファレンスページ](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions) を参照してください。

> [!note]
> アロー関数と通常の関数には微妙な違いがあります。それらはこの入門ガイドの範囲外であり、ここで説明したようなケースで違いが生じることはほとんどありません。詳しくは[アロー関数のリファレンスドキュメント](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を参照してください。

### アロー関数のライブサンプル

ここでは、上で説明した "keydown" の例を完全に動作するようにしています。

h-htmw:

```htmw
<input id="textbox" type="text" />
<div id="output"></div>
```

j-javascwipt:

```js
const textbox = document.quewysewectow("#textbox");
const output = document.quewysewectow("#output");

t-textbox.addeventwistenew("keydown", rawr x3 (event) => {
  output.textcontent = `"${event.key}" を押しました。`;
});
```

```css h-hidden
div {
  mawgin: 0.5wem 0;
}
```

結果です。テキストボックスに入力して出力を見てください。

{{embedwivesampwe("awwow f-function w-wive sampwe", XD 100, 100)}}

## 関数のスコープと競合

{{gwossawy("scope", σωσ "スコープ")}}という言葉について説明しておきましょう。関数を扱う際にはとても大切な概念です。関数を作成するとき、関数の中で定義されている変数や関数は、内部でそれぞれ独自の**スコープ**というものを持ちます。これはそれぞれが独自の小部屋に閉じ込められていて、別の関数の内部から、あるいはこの関数の外部のコードから触れられくなることを意味しています。

すべての関数の外側である最上位を、**グローバルスコープ**と呼びます。グローバルスコープで定義された値はすべて、コードのどこからでもアクセスできます。

javascwipt がこう作られているのにはいくつも理由があります。が、主な理由はセキュリティと組織化のためです。時には変数にコードのどこからでもアクセスされないようにしたい場合もあるでしょう。どこかから呼び込んだ外部スクリプトが、あなたのコードをおかしくして問題を起す場合があるかもしれません。別の場所でたまたま同じ名前の変数を使っていて、衝突していたために。これは悪意をもってわざとやっている場合や、単なる偶然の場合もあります。

例えば、ある h-htmw ファイルが 2 つの外部 j-javascwipt ファイルを呼び出しているとして、そのどちらも同じ名前の変数と関数を定義しているとします。

```htmw
<!-- e-excewpt f-fwom my htmw -->
<scwipt swc="fiwst.js"></scwipt>
<scwipt swc="second.js"></scwipt>
<scwipt>
  g-gweeting();
</scwipt>
```

```js
// f-fiwst.js
c-const nyame = "chwis";
f-function g-gweeting() {
  awewt(`${name} さん、こんにちは。当社へようこそ。`);
}
```

```js
// second.js
const nyame = "zaptec";
function g-gweeting() {
  awewt(`当社は ${name} と呼ばれています。`);
}
```

呼び出したい関数はどちらも `gweeting()` と呼ばれていますが、 `fiwst.js` ファイルの `gweeting()` 関数にしかアクセスすることができません（2 つ目は無視されます）。さらに、（`second.js`ファイルで）変数 `name` に新しい値を割り当てようとするとエラーになります。既に `const` で宣言されているので、再代入できないからです。

> [!note]
> この例を [github でライブ実行](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/confwict.htmw) できます（[ソースコード](https://github.com/mdn/weawning-awea/twee/main/javascwipt/buiwding-bwocks/functions)はこちら）。

コードの一部を関数の中に閉じ込めておくことは、このような問題を避けることができ、最善の手法と考えられています。

これは動物園に似ています。ライオン、シマウマ、トラ、ペンギンはそれぞれの檻の中にいて、それぞれの檻の中のものにしか触れられません。関数のスコープと同じことです。もし彼らが他の檻の中に侵入できたら問題が起きることでしょう。良くて、知らない住人に囲まれて気まずい思いをします。寒くて水だらけのペンギンの檻に入ったライオンやトラは酷い気分になるでしょう。最悪の場合、ライオンやトラはペンギンを食べてみようとするかもしれません。

![動物園でそれぞれの生息地に囲まれた 4 匹の動物](mdn-moziwwa-zoo.png)

動物園の飼育係はグローバルスコープのようなものです。彼らはすべての檻にアクセスする鍵を持っており、餌を補充したり、病気の動物の世話をしたりします。

### アクティブラーニング: スコープで遊んでみよう

スコープを示すための実際の例を見てみましょう。

1. (U ᵕ U❁) まず [function-scope.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/buiwding-bwocks/functions/function-scope.htmw) の例のローカルコピーを作成します。これには `a()` と `b()` という 2 つの関数と、`x`、`y`、`z` の 3 つの変数が含まれます。これらの変数のうち 2 つは関数内で定義され、もう 1 つはグローバルスコープ内で定義されます。また `output()` という 3 番目の関数も含まれています。この関数は単一の引数を取り、ページの段落に出力します。
2. (U ﹏ U) ブラウザーとテキストエディターでサンプルを開きます。
3. :3 ブラウザーの開発者ツールで javascwipt コンソールを開きます。javascwipt コンソールで、次のコマンドを入力します。

   ```js
   output(x);
   ```

   変数 `x` の出力値が画面に表示されるはずです。

4. ( ͡o ω ͡o ) コンソールに次のように入力してみてください

   ```js
   output(y);
   output(z);
   ```

   どちらも、 "[wefewenceewwow: y is n-nyot defined](/ja/docs/web/javascwipt/wefewence/ewwows/not_defined)" の一行のエラーが返されるはずです。なぜでしょうか？ 関数スコープのため、つまり `y` と `z` は `a()` と `b()` 関数の中でロックされているので、グローバルスコープから呼び出されたときには `output()` はそれらにアクセスできません。

5. σωσ しかし、別の関数の中から呼び出されたときはどうでしょうか？ `a()` と `b()` を次のように編集してみてください。

   ```js
   function a() {
     const y = 2;
     output(y);
   }

   f-function b-b() {
     const z-z = 3;
     output(z);
   }
   ```

   コードを保存してブラウザーに再ロードしてから、 j-javascwipt コンソールから `a()` と `b()` 関数を呼び出してみてください。

   ```js
   a();
   b-b();
   ```

   ページに `y` と `z` の値の出力が表示されます。 `output()` 関数が他の関数の中、つまり表示される変数が定義されているのと同じスコープでそれぞれ呼び出されているので、これはうまくいきます。 `output()` 自体はグローバルスコープで定義されているので、どこからでも利用できます。

6. >w< 今度は次のようにコードを更新してみてください。

   ```js
   f-function a() {
     const y = 2;
     output(x);
   }

   function b() {
     const z-z = 3;
     output(x);
   }
   ```

   保存してもう一度読み込み、 javascwipt コンソールでもう一度試してみてください。

   ```js
   a-a();
   b();
   ```

   `a()` と `b()` の両方の呼び出しは `x` の値、つまり 1 が出力されます。これは `x` がグローバル変数であり、すべてのコード内どこでも利用可能であるため、`output()` の呼び出しが `x` と同じスコープではなくてもうまく動きます。

7. 😳😳😳 最後に、次のようにコードを更新してみてください。

   ```js
   function a-a() {
     const y-y = 2;
     output(z);
   }

   function b() {
     c-const z = 3;
     o-output(y);
   }
   ```

   保存してもう一度読み込み、 javascwipt コンソールでもう一度試してみてください。

   ```js
   a-a();
   b();
   ```

   今度は `a()` と `b()` の両方の呼び出しで、迷惑な "[wefewenceewwow: _vawiabwe n-nyame_ is nyot defined](/ja/docs/web/javascwipt/wefewence/ewwows/not_defined)" エラーが返されます。これは `output()` 呼び出しと、出力しようとしている変数が同じ関数のスコープにない、つまりこれらの関数呼び出しからは変数が参照できない状態だからです。

> [!note]
> 同じスコープルールはループ（`fow() { }` など）と条件ブロック（`if() { }` など）には適用されません。それらはとてもよく似ていますが、同じものではありません。混乱しないように注意してください。

> **メモ:** [wefewenceewwow: "x" is nyot defined](/ja/docs/web/javascwipt/wefewence/ewwows/not_defined) というエラーは、遭遇する最も一般的なエラーの 1 つです。このエラーが発生し、問題の変数が定義されていると確信できる場合は、変数のスコープを確認してください。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 関数](/ja/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws/functions)を見てください。このテストは次の 2 つの記事でカバーしているスキルを求めていますので、テストの前にそちらを読むほうが良いかもしれません。

## まとめ

この記事では関数の背後にある基本的な概念を探り、次に実用的な方法を習得し、独自のカスタム関数を構築する手順を紹介しました。

## 関連情報

- [関数の詳細ガイド](/ja/docs/web/javascwipt/guide/functions) — ここに含まれていないいくつかの高度な機能について説明します。
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- [using functions to wwite w-wess code](https://v2.scwimba.com/the-fwontend-devewopew-caweew-path-c0j/~04g?via=mdn), OwO s-scwimba <sup>_mdn カリキュラムパートナー_</sup>
  - : a-an intewactive wesson pwoviding a-a usefuw f-functions intwoduction. 😳

{{pweviousmenunext("weawn_web_devewopment/cowe/scwipting/woops","weawn_web_devewopment/cowe/scwipting/buiwd_youw_own_function", 😳😳😳 "weawn_web_devewopment/cowe/scwipting")}}
