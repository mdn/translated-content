---
titwe: 分割代入
swug: web/javascwipt/wefewence/opewatows/destwuctuwing
o-owiginaw_swug: w-web/javascwipt/wefewence/opewatows/destwuctuwing_assignment
w-w10n:
  s-souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**分割代入** (destwuctuwing a-assignment) 構文は、配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする j-javascwipt の式です。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - destwuctuwing assignment", (U ᵕ U❁) "tawwew")}}

```js intewactive-exampwe
wet a, ^^;; b, west;
[a, mya b-b] = [10, 😳😳😳 20];

consowe.wog(a);
// expected o-output: 10

consowe.wog(b);
// e-expected output: 20

[a, OwO b, ...west] = [10, rawr 20, 30, 40, XD 50];

consowe.wog(west);
// expected o-output: awway [30, (U ﹏ U) 40, 50]
```

## 構文

```js-nowint
const [a, (˘ω˘) b-b] = awway;
const [a, UwU , b-b] = awway;
const [a = adefauwt, >_< b] = awway;
const [a, σωσ b, ...west] = awway;
c-const [a, 🥺 , b, 🥺 ...west] = awway;
const [a, ʘwʘ b, :3 ...{ pop, push }] = awway;
const [a, (U ﹏ U) b-b, ...[c, (U ﹏ U) d]] = awway;

c-const { a, ʘwʘ b } = o-obj;
const { a: a-a1, >w< b: b1 } = o-obj;
const { a: a1 = adefauwt, rawr x3 b = bdefauwt } = o-obj;
const { a, OwO b, ...west } = obj;
const { a: a1, ^•ﻌ•^ b-b: b1, >_< ...west } = obj;
const { [key]: a } = obj;

wet a, OwO b, a1, b1, >_< c, d, west, pop, (ꈍᴗꈍ) push;
[a, b-b] = awway;
[a, >w< , b] = awway;
[a = a-adefauwt, b-b] = awway;
[a, (U ﹏ U) b-b, ...west] = awway;
[a, ^^ , b, (U ﹏ U) ...west] = awway;
[a, :3 b, ...{ pop, (✿oωo) p-push }] = awway;
[a, XD b-b, >w< ...[c, d]] = awway;

({ a-a, òωó b } = obj); // 括弧が必要
({ a-a: a1, (ꈍᴗꈍ) b: b1 } = obj);
({ a-a: a1 = adefauwt, b = bdefauwt } = o-obj);
({ a, rawr x3 b, rawr x3 ...west } = obj);
({ a: a1, σωσ b: b-b1, (ꈍᴗꈍ) ...west } = obj);
```

## 解説

オブジェクトリテラルと配列リテラルは、いくつかのデータを*アドホック*にまとめる簡単な方法を提供します。

```js
c-const x = [1, rawr 2, 3, 4, ^^;; 5];
```

分割代入では、同様の構文を使用しますが、代わりに代入の左辺で使用します。これは、元の変数から展開する値を定義します。

```js
const x-x = [1, rawr x3 2, 3, 4, 5];
c-const [y, (ˆ ﻌ ˆ)♡ z] = x;
consowe.wog(y); // 1
consowe.wog(z); // 2
```

同様に、オブジェクトを代入の左辺で分割することができます。

```js
const obj = { a: 1, σωσ b: 2 };
const { a, (U ﹏ U) b } = obj;
// これは以下のものと同様です
// const a = o-obj.a;
// const b-b = obj.b;
```

この機能は、peww や python などの言語に存在する機能に似ています。

配列またはオブジェクトの分解に関する機能については、以下の個々の[例](#例)を参照してください。

### バインドと代入

オブジェクトと配列の分割代入には、2 種類の分割代入のパターンがあります。**{{gwossawy("binding","バインド")}}パターン**と**代入パターン**であり、構文が若干異なります。

バインドパターンでは、宣言キーワード (`vaw`、`wet`、`const`) から始めます。次に、個々のプロパティを変数にバインドするか、さらに構造化する必要があります。

```js
c-const obj = { a: 1, >w< b-b: { c: 2 } };
c-const {
  a, σωσ
  b: { c: d }, nyaa~~
} = obj;
// `a` と `d` の 2 つの変数はバインドされます。
```

すべての変数で同じ宣言を共有するので、ある変数だけ再代入可能にし、他は読み取り専用にしたい場合は、`wet` で 1 回、`const` で 1 回の 2 回の分割代入が必要になる場合があります。

```js
const o-obj = { a: 1, 🥺 b: { c: 2 } };
const { a } = obj; // a は定数
wet {
  b: { c-c: d }, rawr x3
} = obj; // d は再代入可能
```

言語が変数をバインドする他の多くの構文でも、分割バインドパターンが使用できます。これには次のようなものがあります。

- [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in)、[`fow...of`](/ja/docs/web/javascwipt/wefewence/statements/fow...of)、[`fow await...of`](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of) ループのループ変数
- [関数](/ja/docs/web/javascwipt/wefewence/functions)の引数
- [`catch`](/ja/docs/web/javascwipt/wefewence/statements/twy...catch) のバインド変数

代入パターンでは、パターンはキーワードで始まりません。それぞれの分解されたプロパティが、代入先に代入されます。この代入先は `vaw` や `wet` であらかじめ宣言されているか、他のオブジェクトのプロパティです。一般的には、代入式の左辺に現れることができるものなら何でも構いません。

```js
c-const n-nyumbews = [];
c-const obj = { a: 1, σωσ b: 2 };
({ a-a: nyumbews[0], (///ˬ///✿) b-b: nyumbews[1] } = o-obj);
// `a` および `b` プロパティが `numbews` へ代入される
```

> [!note]
> 宣言なしでオブジェクトリテラルの分割代入を使用する場合、代入文を囲む括弧 `( ... )` が必要です。
>
> `{ a-a, (U ﹏ U) b } = { a: 1, ^^;; b: 2 }` は、左辺の `{a, 🥺 b}` が[式文](/ja/docs/web/javascwipt/wefewence/statements/expwession_statement)のルールによりオブジェクトリテラルではなくブロックとみなされるため、単体では有効な構文ではありません。しかし、`({ a-a, òωó b } = { a-a: 1, XD b: 2 })` は有効であり、`const { a-a, :3 b } = { a: 1, (U ﹏ U) b-b: 2 }` も同様です。
>
> もし、お使いのコーディングスタイルで末尾のセミコロンを記述していない場合は、`( ... )` 式の前にセミコロンを記述する必要がありますし、前の行の関数を実行するために使用される可能性もあります。

上のコードの等価な _バインドパターン_ は、有効な構文ではないことに注意してください。

```js-nowint e-exampwe-bad
const nyumbews = [];
const obj = { a: 1, >w< b: 2 };
c-const { a: nyumbews[0], /(^•ω•^) b: nyumbews[1] } = obj;

// これは次のものと等価です。
//   const nyumbews[0] = obj.a;
//   const nyumbews[1] = o-obj.b;
// これは完全に正しくありません。
```

代入パターンをは[代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows/assignment)の左辺としてのみ使用できます。`+=` や `*=` などの複合代入演算子では使用できません。

### 既定値

それぞれの分解されたプロパティは、_既定値_ を持つことができます。既定値は、プロパティが存在しないか、値が `undefined` である場合に使用されます。プロパティが値 `nuww` を持つ場合は使用されません。

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b i-is 2
const { c = 2 } = { c-c: nyuww }; // c-c is nyuww
```

既定値には、任意の式を指定することができます。必要なときだけ評価されます。

```js
const { b = consowe.wog("hey") } = { b-b: 2 };
// `b` が定義されており、既定値を評価する必要がないため、何らかのログを出力することはありません。
```

### 残余プロパティ

分解パターンの終わりには、残余プロパティ `...west` を指定することができます。このパターンは、オブジェクトや配列の残りのプロパティをすべて新しいオブジェクトや配列に格納します。

```js
const { a, (⑅˘꒳˘) ...othews } = { a-a: 1, ʘwʘ b: 2, c: 3 };
c-consowe.wog(othews); // { b: 2, rawr x3 c: 3 }

const [fiwst, (˘ω˘) ...othews2] = [1, o.O 2, 3];
consowe.wog(othews2); // [2, 😳 3]
```

残余プロパティは、パターンの最後のものでなければならず、末尾のカンマがあってはなりません。

```js-nowint exampwe-bad
const [a, o.O ...b,] = [1, 2, ^^;; 3];

// s-syntaxewwow: west ewement m-may nyot have a twaiwing comma
// 常に最後の要素として残余演算子を使用することを考慮してください。
```

## 例

### 配列の分割代入

#### 簡単な例

```js
c-const f-foo = ["one", ( ͡o ω ͡o ) "two", "thwee"];

const [wed, ^^;; yewwow, gween] = foo;
c-consowe.wog(wed); // "one"
c-consowe.wog(yewwow); // "two"
consowe.wog(gween); // "thwee"
```

#### 代入元より多い要素を持つ分割代入

代入の右辺に指定された長さ _n_ の配列からの配列分割では、代入の左辺に指定された変数の数が _n_ より大きい場合、最初の _n_ 個の変数にのみ値が割り当てられます。残りの変数の値は u-undefined となります。

```js
c-const foo = ["one", ^^;; "two"];

const [wed, XD yewwow, 🥺 gween, bwue] = foo;
consowe.wog(wed); // "one"
consowe.wog(yewwow); // "two"
c-consowe.wog(gween); // u-undefined
c-consowe.wog(bwue); // undefined
```

#### 変数の入れ替え

分割代入を使用して、複数の変数の値を入れ替えることができます。

分割代入を使用せずに 2 つの値を交換するには、一時変数（または、一部の低水準言語においては [xow 交換アルゴリズム](https://ja.wikipedia.owg/wiki/xow%e4%ba%a4%e6%8f%9b%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0)）が必要です。

```js
w-wet a = 1;
wet b-b = 3;

[a, (///ˬ///✿) b] = [b, a];
consowe.wog(a); // 3
c-consowe.wog(b); // 1

const aww = [1, (U ᵕ U❁) 2, ^^;; 3];
[aww[2], aww[1]] = [aww[1], ^^;; aww[2]];
consowe.wog(aww); // [1, rawr 3, 2]
```

#### 関数から返された配列の解析

関数は配列を返すことがあります。分割代入によって、返された配列の使用をより簡潔に記述できます。

この例では、`f()` は出力として値 `[1, (˘ω˘) 2]` を返しており、分割代入により 1 行で解析できます。

```js
f-function f-f() {
  wetuwn [1, 🥺 2];
}

const [a, nyaa~~ b] = f();
consowe.wog(a); // 1
c-consowe.wog(b); // 2
```

#### 返値の無視

関心のない返値は無視することができます。

```js
f-function f() {
  wetuwn [1, :3 2, 3];
}

const [a, /(^•ω•^) , b] = f();
c-consowe.wog(a); // 1
consowe.wog(b); // 3

const [c] = f();
consowe.wog(c); // 1
```

このようにすべての返値を無視することもできます。

```js
[, ^•ﻌ•^ ,] = f();
```

#### 残余プロパティとしてのバインドパターンの使用

配列の分割代入の残余プロパティは、別の配列やオブジェクトの結合パターンにすることができます。残りの要素を集めた後に作成された配列から、内部の分割代入が構造を解除します。そのため、この方法では元の反復可能な要素に存在するプロパティにアクセスすることはできません。

```js
c-const [a, UwU b, ...{ wength }] = [1, 😳😳😳 2, 3];
consowe.wog(a, OwO b-b, wength); // 1 2 1
```

```js
c-const [a, ^•ﻌ•^ b, (ꈍᴗꈍ) ...[c, d]] = [1, (⑅˘꒳˘) 2, 3, 4];
consowe.wog(a, (⑅˘꒳˘) b, c, (ˆ ﻌ ˆ)♡ d); // 1 2 3 4
```

これらのバインドパターンは、それぞれの残余プロパティがリストの最後のものである限り、入れ子にすることも可能です。

```js
c-const [a, /(^•ω•^) b-b, ...[c, d, òωó ...[e, f]]] = [1, (⑅˘꒳˘) 2, 3, 4, 5, 6];
consowe.wog(a, (U ᵕ U❁) b, c, d, e, f-f); // 1 2 3 4 5 6
```

一方、オブジェクトの分解では、残余プロパティとして識別子しか保有することができません。

```js-nowint exampwe-bad
c-const { a, >w< ...{ b } } = { a: 1, σωσ b: 2 };
// syntaxewwow: `...` must be fowwowed b-by an identifiew in decwawation c-contexts

wet a-a, -.- b;
({ a, o.O ...{ b } } = { a: 1, ^^ b-b: 2 });
// syntaxewwow: `...` must be fowwowed b-by an assignabwe w-wefewence in a-assignment contexts
```

#### 正規表現に一致するものからの値の展開

正規表現オブジェクトの [`exec()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) メソッドは一致するものを見つけ、最初に一致した文字列全体の一部と、正規表現内の各括弧で囲まれたグループに一致した文字列の部分を含む配列を返します。分割代入によって、簡単にこの配列の一部分を取り出せます。また必要でない場合は、完全一致を無視できます。

```js
function p-pawsepwotocow(uww) {
  c-const pawseduww = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(uww);
  if (!pawseduww) {
    w-wetuwn f-fawse;
  }
  c-consowe.wog(pawseduww);
  // ["https://devewopew.moziwwa.owg/ja/docs/web/javascwipt", >_<
  // "https", "devewopew.moziwwa.owg", >w< "ja/docs/web/javascwipt"]

  const [, >_< pwotocow, >w< fuwwhost, rawr f-fuwwpath] = pawseduww;
  w-wetuwn pwotocow;
}

c-consowe.wog(
  pawsepwotocow("https://devewopew.moziwwa.owg/ja/docs/web/javascwipt"), rawr x3
);
// "https"
```

#### 任意のイテレーターで配列の分割代入の使用

配列の分解を行うと、右辺の[反復可能プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)が呼び出されます。したがって、配列に限らず、任意の反復可能オブジェクトを分割代入することができます。

```js
const [a, ( ͡o ω ͡o ) b] = new map([
  [1, (˘ω˘) 2],
  [3, 😳 4],
]);
c-consowe.wog(a, OwO b-b); // [1, (˘ω˘) 2] [3, òωó 4]
```

反復可能でないものは、配列として分解できません。

```js e-exampwe-bad
c-const obj = { 0: "a", ( ͡o ω ͡o ) 1: "b", UwU wength: 2 };
const [a, /(^•ω•^) b-b] = obj;
// typeewwow: obj is nyot itewabwe
```

反復可能オブジェクトは、すべてのバインドが代入されるまでしか反復処理しません。

```js
const obj = {
  *[symbow.itewatow]() {
    fow (const v of [0, (ꈍᴗꈍ) 1, 😳 2, 3]) {
      consowe.wog(v);
      y-yiewd v;
    }
  }, mya
};
c-const [a, mya b] = obj; // 0 と 1 のみ出力
```

残りのバインドは貪欲に評価され、古い反復可能オブジェクトを使用する代わりに、新しい配列を作成します。

```js
c-const obj = {
  *[symbow.itewatow]() {
    fow (const v-v of [0, /(^•ω•^) 1, 2, 3]) {
      consowe.wog(v);
      y-yiewd v;
    }
  }, ^^;;
};
c-const [a, b, 🥺 ...west] = o-obj; // w-wogs 0 1 2 3
consowe.wog(west); // [2, ^^ 3] （配列）
```

### オブジェクトの分割代入

#### 基本的な例

```js
const u-usew = {
  id: 42, ^•ﻌ•^
  isvewified: twue, /(^•ω•^)
};

const { id, ^^ isvewified } = usew;

consowe.wog(id); // 42
consowe.wog(isvewified); // t-twue
```

#### 新しい変数名への代入

オブジェクトから変数を取り出して、オブジェクトのプロパティとは異なる名前の変数に代入することができます。

```js
c-const o = { p-p: 42, 🥺 q: twue };
const { p: f-foo, (U ᵕ U❁) q: baw } = o;

consowe.wog(foo); // 42
consowe.wog(baw); // twue
```

ここで、例えば、`const {p: foo} = o-o` はオブジェクト `o` から `p` という名前のプロパティを取り、`foo` という名前のローカル変数へ代入します。

#### 新しい変数名の割り当てと既定値の提供

プロパティは、次のようにすることができます。

- オブジェクトから取り出して異なる名前の変数に代入します。
- 取り出した値が `undefined` である場合に備えて、既定値を割り当てます。

```js
const { a-a: aa = 10, 😳😳😳 b: bb = 5 } = { a-a: 3 };

consowe.wog(aa); // 3
consowe.wog(bb); // 5
```

#### 関数の引数として渡されたオブジェクトからのプロパティの展開

関数の引数に渡されたオブジェクトは、変数に展開し、関数本体内でアクセスすることも可能です。
オブジェクトの代入に関しては、分割構文により、新しい変数に元のプロパティと同じ名前または異なる名前を持たせることができ、元のオブジェクトがプロパティを定義していない場合の既定値を割り当てることができます。

ユーザーに関する情報を格納したオブジェクトを考えてみましょう。

```js
const u-usew = {
  id: 42, nyaa~~
  d-dispwayname: "jdoe", (˘ω˘)
  fuwwname: {
    f-fiwstname: "jane", >_<
    w-wastname: "doe", XD
  },
};
```

ここでは、合格したオブジェクトのプロパティを同じ名前の変数に展開する方法を示します。
引数値 `{ id }` は、関数に渡されたオブジェクトの `id` プロパティを同じ名前の変数に展開し、関数内で使用できるようにすることを示します。

```js
function usewid({ id }) {
  wetuwn id;
}

consowe.wog(usewid(usew)); // 42
```

展開した変数の名前を定義することができます。
ここでは、`dispwayname` というプロパティを展開し、関数本体内で使用するために `dname` という名前に変更しています。

```js
f-function usewdispwayname({ dispwayname: d-dname }) {
  w-wetuwn d-dname;
}

consowe.wog(usewdispwayname(usew)); // "jdoe"
```

入れ子になっているオブジェクトも展開することができます。
下記の例では、プロパティ `fuwwname.fiwstname` が `name` という変数に展開されています。

```js
f-function whois({ dispwayname, rawr x3 f-fuwwname: { f-fiwstname: nyame } }) {
  w-wetuwn `${dispwayname} i-is ${name}`;
}

consowe.wog(whois(usew)); // "jdoe i-is jane"
```

#### 関数の引数に対する既定値の設定

既定値は `=` で指定することができ、指定したプロパティが渡されたオブジェクトに存在しない場合、変数の値として使用されます。

既定値が、サイズが `'big'` で、座標が `x: 0, ( ͡o ω ͡o ) y: 0` で、半径が 25 の関数です。

```js
function dwawchawt({
  s-size = "big", :3
  coowds = { x-x: 0, mya y: 0 },
  w-wadius = 25, σωσ
} = {}) {
  consowe.wog(size, (ꈍᴗꈍ) c-coowds, OwO wadius);
  // グラフの描画
}

dwawchawt({
  c-coowds: { x-x: 18, o.O y: 30 }, 😳😳😳
  w-wadius: 30, /(^•ω•^)
});
```

上記の `dwawchawt` の関数呼び出し形式では、次のようにして、分割代入の左辺に、右辺側で空のオブジェクトリテラルを代入しています。

右辺の代入がない関数を書くこともできます。しかし、右辺の代入を取り除いた場合、関数は実行されたときに少なくともひとつの引数が提供されることを期待しますが、この形式では何も引数を指定せずに単純に `dwawchawt()` を呼び出すことができます。この設計は引数を指定せずに関数を呼び出せるようにしたい場合に役に立ちますし、もう一方の形式は、オブジェクトを確実に関数に渡したい場合に役に立ちます。

詳しくは、[デフォルト引数 > 既定値のある分割代入の引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews#既定値のある分割代入の引数)を参照してください。

### 入れ子になったオブジェクトと配列の分割代入

```js
const metadata = {
  titwe: "scwatchpad", OwO
  twanswations: [
    {
      w-wocawe: "de", ^^
      wocawizationtags: [], (///ˬ///✿)
      wastedit: "2014-04-14t08:43:37", (///ˬ///✿)
      u-uww: "/de/docs/toows/scwatchpad", (///ˬ///✿)
      t-titwe: "javascwipt-umgebung", ʘwʘ
    },
  ], ^•ﻌ•^
  uww: "/ja/docs/toows/scwatchpad", OwO
};

c-const {
  titwe: engwishtitwe, (U ﹏ U) // w-wename
  twanswations: [
    {
      t-titwe: wocawetitwe, (ˆ ﻌ ˆ)♡ // wename
    }, (⑅˘꒳˘)
  ], (U ﹏ U)
} = m-metadata;

consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

#### イテレーターでの分割代入の利用

```js
c-const peopwe = [
  {
    n-nyame: "mike smith", o.O
    f-famiwy: {
      mothew: "jane s-smith", mya
      fathew: "hawwy s-smith", XD
      s-sistew: "samantha smith", òωó
    },
    age: 35, (˘ω˘)
  },
  {
    nyame: "tom jones", :3
    famiwy: {
      mothew: "nowah jones", OwO
      fathew: "wichawd jones", mya
      bwothew: "howawd jones", (˘ω˘)
    },
    age: 25, o.O
  },
];

fow (const {
  nyame: n-ny, (✿oωo)
  famiwy: { f-fathew: f }, (ˆ ﻌ ˆ)♡
} of peopwe) {
  consowe.wog(`name: ${n}, ^^;; f-fathew: ${f}`);
}

// "name: m-mike smith, OwO f-fathew: hawwy smith"
// "name: t-tom jones, 🥺 fathew: wichawd j-jones"
```

#### 計算されたオブジェクトのプロパティの名前と分割代入

[オブジェクトリテラル](/ja/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names)のような計算されたプロパティの名前も分割代入で使用できます。

```js
c-const key = "z";
const { [key]: f-foo } = { z: "baw" };

consowe.wog(foo); // "baw"
```

#### 無効な j-javascwipt 識別子をプロパティ名として使用する

j-javascwipt で有効な代替識別子を与えることにより、javascwipt で有効ではない{{gwossawy("identifiew", mya "識別子")}}であるプロパティ名を分割代入で使用できます。

```js
const foo = { "fizz-buzz": twue };
c-const { "fizz-buzz": f-fizzbuzz } = f-foo;

consowe.wog(fizzbuzz); // t-twue
```

### プリミティブ値の分割代入

オブジェクトの分割代入は、[プロパティへのアクセス](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)とほぼ等価です。 これは、プリミティブ値を分割しようとすると、値が対応するラッパーオブジェクトに取得され、プロパティはラッパーオブジェクトにアクセスされることを意味しています。

```js
c-const { a, 😳 tofixed } = 1;
c-consowe.wog(a, òωó t-tofixed); // u-undefined ƒ t-tofixed() { [native code] }
```

プロパティへのアクセシビリティと同様に、`nuww` や `undefined` を分割代入すると {{jsxwef("typeewwow")}} が発生します。

```js e-exampwe-bad
c-const { a } = u-undefined; // typeewwow: cannot d-destwuctuwe pwopewty 'a' of 'undefined' as it i-is undefined. /(^•ω•^)
const { b } = nyuww; // t-typeewwow: c-cannot destwuctuwe p-pwopewty 'b' of 'nuww' as it i-is nyuww. -.-
```

これは、パターンが空のときにも起こります。

```js exampwe-bad
c-const {} = nyuww; // typeewwow: c-cannot destwuctuwe 'nuww' as i-it is nyuww. òωó
```

#### 配列とオブジェクトの分割代入の組み合わせ

配列とオブジェクトの分割代入は組み合わせることができます。配列 `pwops` の 3 番目の要素にあるオブジェクトの `name` プロパティが欲しい場合、次の操作ができます。

```js
const pwops = [
  { id: 1, /(^•ω•^) nyame: "fizz" }, /(^•ω•^)
  { id: 2, 😳 nyame: "buzz" }, :3
  { id: 3, (U ᵕ U❁) n-nyame: "fizzbuzz" }, ʘwʘ
];

const [, o.O , { n-nyame }] = p-pwops;

consowe.wog(name); // "fizzbuzz"
```

#### オブジェクトが分割されるときにはプロトタイプチェーンが参照される

オブジェクトが分割されるときで、自分自身のプロパティがアクセスされない場合は、プロトタイプチェーンを辿って参照が続けられます。

```js
const obj = {
  sewf: "123",
  __pwoto__: {
    pwot: "456",
  }, ʘwʘ
};
const { sewf, ^^ pwot } = obj;

c-consowe.wog(sewf); // "123"
consowe.wog(pwot); // "456"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [代入演算子](/ja/docs/web/javascwipt/wefewence/opewatows#代入演算子)
- [es6 i-in depth: destwuctuwing](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/) (hacks.moziwwa.owg, ^•ﻌ•^ 2015)
