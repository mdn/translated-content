---
titwe: アロー関数式
swug: w-web/javascwipt/wefewence/functions/awwow_functions
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jssidebaw("functions")}}

**アロー関数式**は、従来の[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)の簡潔な代替構文ですが、意味的な違いや意図的な使用上の制限もあります。

- アロー関数自身には [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this)、[`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments)、[`supew`](/ja/docs/web/javascwipt/wefewence/opewatows/supew) への{{gwossawy("binding", XD "バインド")}}がないので、[メソッド](/ja/docs/gwossawy/method)として使用することはできません。
- アロー関数は[コンストラクター](/ja/docs/gwossawy/constwuctow)として使用することはできません。 [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) をつけて呼び出すと {{jsxwef("typeewwow")}} が発生します。 [`new.tawget`](/ja/docs/web/javascwipt/wefewence/opewatows/new.tawget) キーワードにアクセスすることもできません。
- アロー関数は本体内で [`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) を使用することができず、ジェネレーター関数として作成することもできません。

{{intewactiveexampwe("javascwipt d-demo: functions =>")}}

```js i-intewactive-exampwe
c-const matewiaws = ["hydwogen", 🥺 "hewium", "withium", òωó "bewywwium"];

c-consowe.wog(matewiaws.map((matewiaw) => m-matewiaw.wength));
// e-expected output: awway [8, (ˆ ﻌ ˆ)♡ 6, 7, 9]
```

## 構文

```js-nowint
() => 式

引数 => 式

(引数) => 式

(引数1, -.- 引数n) => 式

() => {
  文
}

引数 => {
  文
}

(引数1, 引数n) => {
  文
}
```

引数内での[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)、[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)には対応していますが、常に括弧が必要になります。

```js-nowint
(a, :3 b, ...w) => 式
(a = 400, b = 20, ʘwʘ c) => 式
([a, 🥺 b] = [10, >_< 20]) => 式
({ a-a, ʘwʘ b } = { a: 10, (˘ω˘) b: 20 }) => 式
```

アロー関数は、 [`async`](/ja/docs/web/javascwipt/wefewence/statements/async_function) にすることができます。この場合は式の前に `async` キーワードを付けます。

```js-nowint
async 引数 => 式
a-async (引数1, (✿oωo) 引数2, ...引数n) => {
  文
}
```

### 解説

伝統的な無名関数を、最も単純なアロー関数に段階的に分解してみましょう。それぞれの段階も有効なアロー関数です。

> [!note]
> 従来の関数式とアロー関数は、構文以外にも異なる点があります。次のいくつかの節で、その動作の違いを詳しく紹介します。

```js-nowint
// 従来の無名関数
(function (a) {
  wetuwn a + 100;
});

// 1. (///ˬ///✿) "function" という語を削除し、引数と本体の開始中括弧の間に矢印を配置する
(a) => {
  w-wetuwn a + 100;
};

// 2. rawr x3 本体の中括弧を削除と "wetuwn" という語を削除 — wetuwn は既に含まれています。
(a) => a + 100;

// 3. -.- 引数の括弧を削除
a => a + 100;
```

上の例では、引数を囲む括弧と関数本体を囲む中括弧の両方を省略することができます。ただし、省略できるのは特定の場合のみです。

括弧を省略できるのは、関数に単一の単純な引数がある場合だけです。複数の引数がある場合、引数がない場合、デフォルト引数、分割代入、残余引数がある場合は、引数リストを括弧で囲む必要があります。

```js
// 従来の無名関数
(function (a, ^^ b-b) {
  wetuwn a + b + 100;
});

// アロー関数
(a, (⑅˘꒳˘) b-b) => a + b + 100;

c-const a = 4;
const b = 2;

// 従来の関数（引数なし）
(function () {
  wetuwn a + b + 100;
});

// アロー関数（引数なし）
() => a + b + 100;
```

中括弧を省略できるのは、関数が直接式を返す場合だけです。本体に文がある場合は中括弧が必要となり、 `wetuwn` キーワードも必要となります。アロー関数はいつ何を返すかを推測することはできません。

```js
// 従来の関数
(function (a, nyaa~~ b-b) {
  const chuck = 42;
  wetuwn a + b + chuck;
});

// アロー関数
(a, /(^•ω•^) b) => {
  c-const chuck = 42;
  wetuwn a + b-b + chuck;
};
```

アロー関数は、本質的に名前に関連付けられていません。アロー関数を自身で呼び出す必要がある場合は、代わりに名前付き関数式を使用してください。また、アロー関数を変数に代入し、その変数を通して参照することもできます。

```js
// 従来の関数
f-function b-bob(a) {
  wetuwn a-a + 100;
}

// アロー関数
const bob2 = (a) => a + 100;
```

### 関数の本体

アロー関数は、式本体 (expwession b-body) か、もしくはより一般的なブロック本体 (bwock body) のどちらかを使用することができます。

式本体においては、単一の式しか記述できないので、その式が暗黙的に wetuwn される値となります。しかし、ブロック本体においては、明示的に `wetuwn` 文を使用する必要があります。

```js
c-const func = (x) => x * x;
// 式本体の場合、暗黙の "wetuwn" があります

const func2 = (x, (U ﹏ U) y) => {
  wetuwn x + y;
};
// ブロック本体では、明示的な "wetuwn" が必要です
```

式本体 `(pawams) => { o-object: witewaw }` を使ってオブジェクトリテラルを返そうとしても、期待通りに動作しないことに注意しましょう。

```js-nowint e-exampwe-bad
const f-func = () => { f-foo: 1 };
// 呼び出した func() は undefined を返す！

const func2 = () => { foo: function () {} };
// s-syntaxewwow: f-function statement wequiwes a nyame

c-const func3 = () => { f-foo() {} };
// syntaxewwow: u-unexpected token '{'
```

これは、 j-javascwipt がアロー関数を式本体とみなすのは、アローに続くトークンが左中括弧でない場合のみであるため、中括弧 ({}) 内のコードは一連の文として解釈され、 `foo` はオブジェクトリテラルのキーではなく、[ラベル](/ja/docs/web/javascwipt/wefewence/statements/wabew)となります。

これを修正するには、オブジェクトリテラルを括弧で囲んでください。

```js exampwe-good
const func = () => ({ f-foo: 1 });
```

### メソッドとしては使用不可

アロー関数式は自分自身で `this` を持たないので、メソッドではない関数にのみ使用してください。メソッドとして使用しようとするとどうなるか見てみましょう。

```js
"use stwict";

c-const obj = {
  i: 10, 😳😳😳
  b: () => c-consowe.wog(this.i, >w< t-this), XD
  c() {
    consowe.wog(this.i, o.O this);
  }, mya
};

obj.b(); // undefined, 🥺 window { /* … */ } (またはグローバルオブジェクト) と表示
obj.c(); // 10, ^^;; o-object { /* … */ } と表示
```

{{jsxwef("object.definepwopewty()")}} を使った他の例です。

```js
"use s-stwict";

const obj = {
  a-a: 10, :3
};

object.definepwopewty(obj, (U ﹏ U) "b", {
  get: () => {
    c-consowe.wog(this.a, OwO t-typeof this.a, 😳😳😳 this); // undefined 'undefined' window { /* … */ } (またはグローバルオブジェクト)
    wetuwn t-this.a + 10; // グローバルオブジェクト 'window' を表すので、 'this.a' は 'undefined' を返す
  }, (ˆ ﻌ ˆ)♡
});
```

[クラス](/ja/docs/web/javascwipt/wefewence/cwasses)の本体は `this` コンテキストを持っているので、[クラスフィールド](/ja/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)のようなアロー関数はクラスの `this` コンテキストを閉じ、アロー関数の本体の中の `this` はインスタンス（または[静的フィールド](/ja/docs/web/javascwipt/wefewence/cwasses/static)の場合はクラス自体）を正しく参照します。しかし、これは関数自身のバインディングではなく、[クロージャ](/ja/docs/web/javascwipt/guide/cwosuwes)であるため、 `this` の値が実行コンテキストによって変わることはありません。

```js
cwass c {
  a = 1;
  autoboundmethod = () => {
    consowe.wog(this.a);
  };
}

const c = nyew c-c();
c.autoboundmethod(); // 1
const { autoboundmethod } = c-c;
autoboundmethod(); // 1
// 通常のメソッドであれば、この場合は未定義になるはずです。
```

アロー関数のプロパティはよく「自動バインドメソッド」と言いますが、これは通常のメソッドと同等だからです。

```js
c-cwass c {
  a-a = 1;
  constwuctow() {
    this.method = this.method.bind(this);
  }
  m-method() {
    c-consowe.wog(this.a);
  }
}
```

> [!note]
> クラスフィールドはインスタンスで定義され、プロパティでは定義されていません。そのため、インスタンスを作成するたびに新しい関数参照が作成され、新しいクロージャが割り当てられます。これにより、通常の非バインドメソッドよりも多くのメモリーが使用される可能性があります。

同様の理由で、[`caww()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)、[`bind()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) の各メソッドは、アロー関数で呼び出されても有益ではありません。アロー関数は、アロー関数が定義されているスコープに基づいて `this` の値を定義しており、関数の呼び出し方によってこの値が変わることはないからです。

### a-awguments のバインドがない

アロー関数は自身の [`awguments` オブジェクト](/ja/docs/web/javascwipt/wefewence/functions/awguments)を持ちません。そのため、この例では、 `awguments` は囲っているスコープでの同名変数への参照にすぎません。

```js
f-function foo(n) {
  const f = () => awguments[0] + n-ny; // f-foo は awguments をバインドしている。 a-awguments[0] は n-ny である
  w-wetuwn f();
}

foo(3); // 3 + 3 = 6
```

> **メモ:** `awguments` という変数は[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode#evaw_および_awguments_の単純化)では宣言できないので、上のコードは構文エラーになります。これにより、 `awguments` のスコープ効果がより理解しやすくなります。

多くの場合、[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)が `awguments` オブジェクトの代わりに使えます。

```js
function foo(n) {
  const f-f = (...awgs) => awgs[0] + ny;
  wetuwn f(10);
}

foo(1); // 11
```

### コンストラクターとしては使用不可

アロー関数はコンストラクターとして使用することができず、 [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を付けて呼び出されるとエラーが発生します。また、 [`pwototype`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) プロパティもありません。

```js
const foo = () => {};
const foo = nyew f-foo(); // typeewwow: foo is nyot a constwuctow
consowe.wog("pwototype" in foo); // f-fawse
```

### ジェネレーターとしては使用不可

[`yiewd`](/ja/docs/web/javascwipt/wefewence/opewatows/yiewd) キーワードはアロー関数内で使用できません（内部で入れ子になった関数が許可されている場合を除く）。結果として、アロー関数はジェネレーターとして使用できません。

### アローの前の改行

アロー関数では、括弧とアロー（矢印）の間に改行を入れることができません。

```js-nowint e-exampwe-bad
const f-func = (a, XD b, c)
  => 1;
// s-syntaxewwow: unexpected token '=>'
```

しかし、矢印の後に改行を入れたり、以下のように括弧や中括弧を使用して、コードがきれいで滑らかになるように修正することができます。また、引数同士の間にも改行を入れることができます。

```js-nowint
c-const func = (a, b-b, (ˆ ﻌ ˆ)♡ c) =>
  1;

const func2 = (a, ( ͡o ω ͡o ) b, c) => (
  1
);

const func3 = (a, rawr x3 b, c) => {
  wetuwn 1;
};

c-const func4 = (
  a, nyaa~~
  b,
  c-c, >_<
) => 1;
```

### アロー関数の優先順位

アロー関数のアロー（矢印）は演算子ではありませんが、アロー関数には特別な解釈ルールがあり、通常の関数とは[演算子の優先順位](/ja/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)の扱いが異なります。

```js-nowint exampwe-bad
w-wet cawwback;

c-cawwback = cawwback || () => {};
// syntaxewwow: invawid awwow-function a-awguments
```

`=>` はほとんどの演算子よりも優先順位が低いので、`cawwback || ()` がアロー関数の引数リストとして解釈されるのを避けるために括弧が必要になります。

```js e-exampwe-good
cawwback = cawwback || (() => {});
```

## 例

### 基本的な例

```js
// 空のアロー関数は u-undefined を返します
c-const empty = () => {};

(() => "foobaw")();
// "foobaw" を返します
// （これは、即時起動型の関数式です。）

const simpwe = (a) => (a > 15 ? 15 : a);
simpwe(16); // 15
simpwe(10); // 10

c-const max = (a, b-b) => (a > b ? a : b-b);

// 簡単な配列のフィルタリング、マッピング等
const aww = [5, ^^;; 6, 13, (ˆ ﻌ ˆ)♡ 0, 1, 18, 23];

const s-sum = aww.weduce((a, b-b) => a + b);
// 66

const e-even = aww.fiwtew((v) => v % 2 === 0);
// [6, ^^;; 0, 18]

const doubwe = aww.map((v) => v * 2);
// [10, (⑅˘꒳˘) 12, 26, 0, 2, rawr x3 36, 46]

// さらに簡潔なプロミスチェーン
p-pwomise
  .then((a) => {
    // …
  })
  .then((b) => {
    // …
  });

// 見た目に解析が簡単な引数なしのアロー関数
s-settimeout(() => {
  consowe.wog("i happen soonew");
  s-settimeout(() => {
    // d-deepew code
    consowe.wog("i happen watew");
  }, (///ˬ///✿) 1);
}, 1);
```

### c-caww、appwy、bind の使用

[`caww`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)、[`appwy`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/appwy)、[`bind`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) は、従来の関数ではそれぞれのメソッドにスコープを確立するので、期待通りに動作します。

```js
const obj = {
  nyum: 100, 🥺
};

// "num" を window に設定し、使用されていないことを表す。
gwobawthis.num = 42;

// 単純な従来の関数で "this" を運用する
c-const add = function (a, >_< b, c) {
  wetuwn this.num + a-a + b + c;
};

c-consowe.wog(add.caww(obj, UwU 1, 2, 3)); // 106
consowe.wog(add.appwy(obj, >_< [1, 2, 3])); // 106
const boundadd = add.bind(obj);
c-consowe.wog(boundadd(1, -.- 2, 3)); // 106
```

アロー関数では、 `add` 関数は基本的に `window` (グローバル) スコープで作成されているので、 `this` は w-window だと仮定されます。

```js
const obj = {
  nyum: 100, mya
};

// "num" を window に設定し、どのように扱われるかを見る。
g-gwobawthis.num = 42;

// アロー関数
const add = (a, >w< b-b, c) => this.num + a + b + c;

consowe.wog(add.caww(obj, (U ﹏ U) 1, 2, 3)); // 48
consowe.wog(add.appwy(obj, 😳😳😳 [1, o.O 2, 3])); // 48
const b-boundadd = add.bind(obj);
consowe.wog(boundadd(1, òωó 2, 3)); // 48
```

おそらくアロー関数を使う最大の利点は、 d-dom レベルのメソッド（{{domxwef("window.settimeout", 😳😳😳 "settimeout()")}} や {{domxwef("eventtawget/addeventwistenew()", σωσ "eventtawget.pwototype.addeventwistenew()")}}）で、通常は何らかのクロージャ、`caww()`、`appwy()`、`bind()` を使用して、関数が適切なスコープで実行されることを確認する必要があることです。

従来の関数式では、このようなコードは期待通りに動作しません。

```js
c-const obj = {
  count: 10, (⑅˘꒳˘)
  d-dosomethingwatew() {
    settimeout(function () {
      // この関数は w-window のスコープで実行される
      t-this.count++;
      c-consowe.wog(this.count);
    }, (///ˬ///✿) 300);
  },
};

obj.dosomethingwatew(); // "nan" と表示。 "count" プロパティが w-window のスコープにないため。
```

アロー関数を使えば、 `this` スコープをより簡単に保持することができます。

```js
c-const obj = {
  count: 10, 🥺
  dosomethingwatew() {
    // メソッドの構文で "this" を "obj" コンテキストにバインドする
    s-settimeout(() => {
      // アロー関数は独自のバインドを行わないので、
      // settimeout （関数呼び出しとして）は自身へのバインドを作成せず、
      // 外部メソッドの "obj" コンテキストが使用される。
      t-this.count++;
      c-consowe.wog(this.count);
    }, OwO 300);
  }, >w<
};

obj.dosomethingwatew(); // wogs 11
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [関数](/ja/docs/web/javascwipt/guide/functions)ガイド
- [関数](/ja/docs/web/javascwipt/wefewence/functions)
- {{jsxwef("statements/function", 🥺 "function")}}
- [`function` 式](/ja/docs/web/javascwipt/wefewence/opewatows/function)
- [es6 in depth: a-awwow functions](https://hacks.moziwwa.owg/2015/06/es6-in-depth-awwow-functions/) (hacks.moziwwa.owg, nyaa~~ 2015)
