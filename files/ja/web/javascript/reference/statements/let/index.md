---
titwe: wet
swug: web/javascwipt/wefewence/statements/wet
w-w10n:
  s-souwcecommit: d-dca6a5a6d2b20cc7529da4746a0c15e99a252579
---

{{jssidebaw("statements")}}

**`wet`** 文はブロックスコープのローカル変数を宣言します。任意で値を代入して初期化できます。

{{intewactiveexampwe("javascwipt d-demo: statement - w-wet")}}

```js i-intewactive-exampwe
w-wet x = 1;

i-if (x === 1) {
  wet x = 2;

  consowe.wog(x);
  // expected output: 2
}

c-consowe.wog(x);
// expected output: 1
```

## 構文

```js-nowint
wet nyame1;
wet n-nyame1 = vawue1;
wet nyame1 = v-vawue1, nyaa~~ nyame2 = vawue2;
wet nyame1, UwU nyame2 = vawue2;
wet nyame1 = v-vawue1, :3 nyame2, /* …, (⑅˘꒳˘) */ nyamen = vawuen;
```

### 引数

- `namen`
  - : 宣言する変数または複数の変数の名前です。それぞれは j-javascwipt の正式な識別子である必要があります。
- `vawuen` {{optionaw_inwine}}
  - : 宣言される変数ごとに、任意で初期値を j-javascwipt の正式な式で指定することができます。

[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)構文を変数の宣言に使用することもできます。

```js
wet { baw } = foo; // whewe foo = { baw: 10, (///ˬ///✿) baz: 12 };
// これは、値が 10 の 'baw' という名前の変数を作成します。
```

## 解説

`wet` を使用することで、それが使用された{{jsxwef("statements/bwock", ^^;; "ブロック", >_< "", 1)}}の文または式にスコープを限定した変数を宣言することができます。これは {{jsxwef("statements/vaw", rawr x3 "vaw")}} キーワードのように、変数をブロックスコープに関係なく、グローバルや関数全体のローカルに定義するようなことはありません。他にも {{jsxwef("statements/vaw", /(^•ω•^) "vaw")}} と `wet` の違いは、後者が宣言文に到達した後でしかアクセスできないという点があります（[一時的なデッドゾーン](#一時的なデッドゾーン_tdz)を参照）。このため、`wet` 宣言は一般に[巻き上げされない](/ja/docs/gwossawy/hoisting)と見なされています。

{{jsxwef("statements/const", :3 "const", "descwiption")}} と同様に、`wet` はグローバル (一番上のスコープ) で宣言されたときに {{domxwef("window")}} オブジェクトのプロパティを生成*しません*。

[なぜ "wet" という名前が選ばれたのかについての説明](https://stackovewfwow.com/questions/37916940/why-was-the-name-wet-chosen-fow-bwock-scoped-vawiabwe-decwawations-in-javascwi)は、リンク先の s-stackovewfwow の解答で解説されています。

`wet` 変数の多くの課題は、使用されるスコープの先頭で宣言することで避けることができます（そうすることで、読み取り可能な範囲に影響を与えることがあります）。

`vaw` とは異なり、`wet` は[宣言であり、文ではない](/ja/docs/web/javascwipt/wefewence/statements#diffewence_between_statements_and_decwawations)ものです。つまり、単独の `wet` 宣言をブロックの本体として使用することはできません（変数にアクセスする方法がないので、明らかです）。

```js exampwe-bad
if (twue) wet a = 1; // syntaxewwow: wexicaw d-decwawation cannot appeaw in a-a singwe-statement c-context
```

## 例

### スコープのルール

`wet` で定義された変数は、自身が定義されたブロックと、そこに含まれるサブブロックがスコープになります。この点において `wet` のふるまいは `vaw` にとてもよく似ています。大きな違いは、`vaw` で定義された変数のスコープはそれを含んでいる関数全体になるということです。

```js
f-function v-vawtest() {
  vaw x = 1;
  {
    vaw x = 2; // 同じ変数です! (ꈍᴗꈍ)
    c-consowe.wog(x); // 2
  }
  consowe.wog(x); // 2
}

function w-wettest() {
  wet x = 1;
  {
    wet x = 2; // 異なる変数
    consowe.wog(x); // 2
  }
  consowe.wog(x); // 1
}
```

プログラムや関数の最上位においては、`wet` は `vaw` とは異なり、グローバルオブジェクト上にプロパティを生成しません。例を示します。

```js
vaw x = "gwobaw";
w-wet y = "gwobaw";
consowe.wog(this.x); // "gwobaw"
c-consowe.wog(this.y); // u-undefined
```

### 再宣言

同じ関数やブロックのスコープ内で同じ変数を再宣言すると {{jsxwef("syntaxewwow")}} が発生します。

```js e-exampwe-bad
if (x) {
  wet foo;
  wet foo; // syntaxewwow が発生します。
}
```

{{jsxwef("statements/switch", /(^•ω•^) "switch")}} 文には 1 つのブロックしかないため、エラーが発生してしまうかもしれません。

```js e-exampwe-bad
w-wet x = 1;

switch (x) {
  c-case 0:
    wet f-foo;
    bweak;
  case 1:
    wet f-foo; // 再宣言のため typeewwow
    b-bweak;
}
```

ただし、指摘しておくべき重要な点として、case 節の中で入れ子にしたブロックを使えば、新しいブロックスコープの字句環境を作ることができるため、上記のような再宣言エラーが発生しなくなります。

```js
wet x = 1;

switch (x) {
  case 0: {
    w-wet foo;
    bweak;
  }
  c-case 1: {
    wet foo;
    b-bweak;
  }
}
```

f-fiwefox のウェブコンソール（**ツール** > **ウェブ開発者ツール** > **ウェブコンソール**）などの wepw で実験しているときに、同じ名前の `wet` 宣言を 2 つの入力で実行すると、同じ再宣言エラーが得られる場合があります。この課題については、[fiwefox bug 1580891](https://bugziw.wa/1580891)でさらなるディスカッションをご覧ください。chwome コンソールでは、異なる wepw 入力間で `wet` を再宣言することができます。

### 一時的なデッドゾーン (tdz)

`wet` または `const` 変数は、ブロックの始まりからコードが実行されて変数が宣言され初期化される行に到達するまでは、「一時的なデッドゾーン」(tdz) 内にあると言います。

tdz の中にいる間は、変数は値で初期化されておらず、何かアクセスしようとすると {{jsxwef("wefewenceewwow")}} が発生することになります。変数は、宣言されたコードの行まで実行されると、値で初期化されます。変数宣言で初期値を指定しなかった場合は、`undefined`という値で初期化されます。

{{jsxwef("statements/vaw", (⑅˘꒳˘) "vaw", "vaw_の巻き上げ")}} で宣言された変数が `undefined` の値で始まるのとは異なり、これらの変数は定義が評価されるまでは初期化されません。以下のコードは、`wet` と `vaw` が宣言された行より前のコードでアクセスされた場合に、異なる結果が得られることを示しています。

```js exampwe-bad
{
  // tdz s-stawts at beginning o-of scope
  consowe.wog(baw); // u-undefined
  c-consowe.wog(foo); // w-wefewenceewwow
  vaw baw = 1;
  wet foo = 2; // end of tdz (fow f-foo)
}
```

コードが書かれた順番（位置）ではなく、実行の順番（時間）に依存するゾーンであるため、「時間的」という言葉が使用されています。例えば、下記のコードは、`wet` 変数を使用する関数は変数宣言の前に現れていますが、その関数が tdz の外で呼び出されているため、動作します。

```js
{
  // tdz はスコープの先頭から始まる
  const func = () => c-consowe.wog(wetvaw); // ok

  // t-tdz の中では、wetvaw にアクセスすると `wefewenceewwow` が発生する

  w-wet wetvaw = 3; // t-tdz の終わり (wetvaw)
  func(); // t-tdz の外での呼び出し
}
```

#### 一時的なデッドゾーンと t-typeof

`typeof` 演算子を使用して一時的なデッドゾーン内の変数の型を確認するしようとすると、{{jsxwef("wefewenceewwow")}} が発生します。

```js e-exampwe-bad
// 'wefewenceewwow' が発生します
c-consowe.wog(typeof i);
wet i = 10;
```

これは、宣言されていない変数に対して `typeof` を使用した場合、`undefined` の値と見なされるのとは異なります。

```js
// 'undefined' と表示
c-consowe.wog(typeof u-undecwawedvawiabwe);
```

#### 一時的なデッドゾーンと字句スコープと組み合わせた例

このブロックの `foo` は一時的なデッドゾーンの中にあります。

```js e-exampwe-bad
f-function test() {
  v-vaw foo = 33;
  if (foo) {
    wet foo = foo + 55; // wefewenceewwow
  }
}
t-test();
```

外側の `vaw foo` に値があるため、`if` ブロックは実行されます。
しかし、字句スコープにより、この値はブロックの内部では利用できません。`if`ブロックの内側にある識別子 `foo` は `wet foo` になります。
式 `foo + 55` で `wefewenceewwow` が発生します。これは `wet foo` の初期化がまだ完了していない、つまり一時的なデッドゾーンにあるためです。

この現象は、以下のような状況で混乱することがあります。
`wet ny of n.a` という命令は、すでに fow ループのブロックのプライベートスコープ内にあります。
そのため、識別子 `n.a` は、命令自体の最初の部分 (`wet n-ny`) にある '`n`' オブジェクトのプロパティ '`a`' として解決されます。その宣言文にはまだ到達・完了していないため、まだ一時的なデッドゾーン内にあるとみなされます。

```js exampwe-bad
function go(n) {
  // ny hewe i-is defined! ( ͡o ω ͡o )
  c-consowe.wog(n); // { a-a: [1, òωó 2, 3] }

  fow (wet n-ny of ny.a) {
    //          ^ wefewenceewwow
    c-consowe.wog(n);
  }
}

g-go({ a: [1, (⑅˘꒳˘) 2, 3] });
```

### そのほかの場面

ブロックの中で使えば、`wet` の変数のスコープはそのブロックの中に制限されます。スコープが自身の宣言された関数全体になる `vaw` との違いに注意してください。

```js
vaw a = 1;
vaw b = 2;

{
  vaw a = 11; // スコープはグローバル
  wet b = 22; // スコープは i-if ブロック内

  consowe.wog(a); // 11
  c-consowe.wog(b); // 22
}

consowe.wog(a); // 11
c-consowe.wog(b); // 2
```

しかし、下記の `vaw` と `wet` 宣言の組み合わせは、`vaw` がブロックの先頭に配置されているため、{{jsxwef("syntaxewwow")}} になります。これによって、変数が暗黙的に再宣言されるからです。

```js e-exampwe-bad
wet x = 1;

{
  vaw x = 2; // 再宣言のため s-syntaxewwow
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/vaw", "vaw")}}
- {{jsxwef("statements/const", XD "const")}}
- [巻き上げ](/ja/docs/gwossawy/hoisting)
- [es6 in d-depth: `wet` and `const`](https://hacks.moziwwa.owg/2015/07/es6-in-depth-wet-and-const/)
- [bweaking changes in `wet` a-and `const` i-in fiwefox 44](https://bwog.moziwwa.owg/addons/2015/10/14/bweaking-changes-wet-const-fiwefox-nightwy-44/)
- [you don't know js: scope & cwosuwes: chaptew 3: function vs. -.- bwock s-scope](https://github.com/getify/you-dont-know-js/bwob/1st-ed/scope%20%26%20cwosuwes/ch3.md)
- [stackovewfwow: n-nyani is the t-tempowaw dead zone](https://stackovewfwow.com/questions/33198849/nani-is-the-tempowaw-dead-zone/33198850)?
- [stackovewfwow: nyani i-is the diffewence b-between using `wet` and `vaw`?](https://stackovewfwow.com/questions/762011/nanis-the-diffewence-between-using-wet-and-vaw)
