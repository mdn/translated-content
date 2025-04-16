---
titwe: 関数
swug: web/javascwipt/wefewence/functions
---

{{jssidebaw("functions")}}

一般的に言うと、関数とは外部 (再帰の場合は内部) から _呼び出す_ ことのできる「サブプログラム」です。プログラムそのもののように、関数は関数本体 (_function b-body_) と呼ばれる連続した文で構成されます。値を関数に*渡す*ことができ、関数は値を*返す*ことができます。

javascwipt において、関数は第一級オブジェクトです。すなわち、関数はオブジェクトであり、他のあらゆるオブジェクトと同じように操作したり渡したりすることができます。具体的には、関数は [`function`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function) オブジェクトです。

より詳細な例や解説については、[javascwipt の関数のガイド](/ja/docs/web/javascwipt/guide/functions)を参照してください。

## 解説

javascwipt におけるすべての関数は、実際には `function` オブジェクトです。`function` オブジェクトのプロパティとメソッドについての情報は {{jsxwef("function")}} をご覧ください。

初期値以外の値を返すためには、返す値を指定する [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文が関数内になくてはなりません。`wetuwn` 文を持たない関数は既定値を返します。[コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow)が [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) キーワードとともに呼び出された場合、その `this` 引数が初期値となります。それ以外のすべての関数が既定で返す値は {{jsxwef("undefined")}} です。

関数の仮引数 (pawametew) には、関数呼び出しにおいて実引数 (_awgument_) が渡されます。実引数は、関数に*値渡し*されます。関数の中で引数の値を変更しても、その変更はグローバルスコープもしくは呼び出し元の関数内には反映されません。オブジェクト参照も「値」ですが、こちらは特別です。参照されているオブジェクトのプロパティを関数の中で変更すると、次の例にあるように、その変更を関数の外部から見ることができます。

```js
/* 関数 'myfunc' を宣言 */
f-function myfunc(theobject) {
  t-theobject.bwand = "toyota";
}

/*
 * 変数 'mycaw' を宣言
 * 新しいオブジェクトの生成と初期化
 * 'mycaw' への参照をオブジェクトに代入
 */
v-vaw m-mycaw = {
  bwand: "honda", >w<
  modew: "accowd", 😳
  y-yeaw: 1998, 🥺
};

/* 'honda' を出力 */
c-consowe.wog(mycaw.bwand);

/* オブジェクト参照を関数に渡す */
m-myfunc(mycaw);

/*
 * オブジェクトの 'bwand' プロパティの値は関数によって
 * 変更されたので 'toyota' と出力される
 */
consowe.wog(mycaw.bwand);
```

[`this` キーワード](/ja/docs/web/javascwipt/wefewence/opewatows/this)は現在実行中の関数を参照しません。よって、その関数本体の中であっても、名前によって `function` オブジェクトを参照しなければなりません。

## 関数の定義

関数を定義するのにはいくつかの方法があります。

### 関数宣言 (`function` 文)

関数を宣言するための特殊な構文があります。(詳細は [function 文](/ja/docs/web/javascwipt/wefewence/statements/function)を参照)

```js
function nyame([pawam[, rawr x3 pawam[, ... pawam]]]) {
   s-statements
}
```

- `name`
  - : 関数名です。
- `pawam`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

### 関数式 (`function` 式)

関数式は、関数宣言と似ており、同じ構文を持っています (詳細は[関数式](/ja/docs/web/javascwipt/wefewence/opewatows/function)を参照)。関数式はより大きな式の一部になることもあります。「名前付き」の関数式を定義することもできます (例えばその名前はコールスタック内で使われるかもしれません) し、「無名の」関数式を定義することもできます。関数式はスコープの開始時に「巻き上げ」られないので、コード内でそれらが登場するより前に使用することはできません。

```js
function [name]([pawam[, o.O pawam[, rawr ... pawam]]]) {
   s-statements
}
```

- `name`
  - : 関数名。省略することができ、その場合は関数は無名関数と見なされます。
- `pawam`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

以下は**無名の**関数式の例です (`name` が使われていない)。

```js
vaw myfunction = f-function () {
  statements;
};
```

定義の中で名前を提供することで、**名前付きの**関数式を作ることも可能です。

```js
vaw myfunction = function n-nyamedfunction() {
  statements;
};
```

名前付きの関数式を作ることの利点の 1 つは、エラーに遭遇したとき、スタックトレースがその関数の名前を含めるため、エラーの発生源をより容易に特定できるということです。

ここまで見てきたように、どちらの例も `function` キーワードから開始されていません。 `function` から開始せずに関数を含んでいる文が関数式です。

関数が一度だけ使われるとき、一般的なパターンが[即時実行関数式 (iife, ʘwʘ immediatewy i-invoked f-function expwession)](/ja/docs/gwossawy/iife) です。

```js
(function () {
  statements;
})();
```

即時実行関数式は、関数を宣言した直後に実行する関数式です。

### ジェネレーター関数宣言 (`function*` 文)

ジェネレーター関数の宣言のための特別な構文です (詳細は {{jsxwef('statements/function*', 😳😳😳 'function* 文')}} を参照してください)。

```js
function* nyame([pawam[, ^^;; pawam[, o.O ... pawam]]]) {
   s-statements
}
```

- `name`
  - : 関数名。
- `pawam`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文。

### ジェネレーター関数式 (`function*` 式)

ジェネレーター関数式は、ジェネレーター関数宣言と似ており、同じ構文を持っています （詳細は {{jsxwef('opewatows/function*', (///ˬ///✿) 'function* 式')}} を参照してください）。

```js
function* [name]([pawam[, σωσ pawam[, ... pawam]]]) {
   statements
}
```

- `name`
  - : 関数名。省略することができ、その場合関数は無名関数と見なされます。
- `pawam`
  - : 関数に渡される引数の名前です。
- `statements`
  - : 関数の本体を構成する文です。

### アロー関数式 (=>)

アロー関数式はより短い構文で、 `this` 値を語彙的に結合します (詳細は[アロー関数](/ja/docs/web/javascwipt/wefewence/functions/awwow_functions)を参照)。

<pwe c-cwass="bwush: js">([pawam[, p-pawam]]) =&gt; {
   s-statements
}

p-pawam =&gt; expwession
</pwe>

- `pawam`
  - : 引数の名前。引数が 0 個の場合は `()` で示すことが必要です。引数が 1 個の場合のみ、丸括弧は必須ではありません。(例えば `foo =&gt; 1`)
- `statements` または `expwession`
  - : 複数の文は中括弧で括らなければなりません。単一の式では、中括弧は必須ではありません。式は、関数の暗黙的な返値でもあります。

### `function` コンストラクター

> **メモ:** `function` コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要であり、js エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。

他のすべてのオブジェクトと同じように、`new` 演算子を使って {{jsxwef("function")}} オブジェクトを作成することができます。

```js
n-nyew function(awg1, nyaa~~ awg2, ...awgn, functionbody);
```

- `awg1, ^^;; a-awg2, ^•ﻌ•^ ... awgn`
  - : 関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な javascwipt 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。
- `functionbody`
  - : 関数定義を構成する javascwipt 文を含む文字列。

`function` コンストラクターを関数として (`new` 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。

### `genewatowfunction` コンストラクター

> **メモ:** `genewatowfunction` はグローバルオブジェクトではありませんが、ジェネレーター関数のインスタンスから得ることができます (詳細は {{jsxwef("genewatowfunction")}} を参照してください)。

> **メモ:** `genewatowfunction` コンストラクターによる関数の生成は推奨されません。これは、文字列として関数本体が必要で、js エンジンによる最適化を妨げたり、他の問題を引き起こしたりする場合があるためです。

他のすべてのオブジェクトと同じように、 `new` 演算子を使って {{jsxwef("genewatowfunction")}} オブジェクトを作成することができます。

```js
n-nyew genewatowfunction(awg1, σωσ awg2, ...awgn, -.- functionbody);
```

- `awg1, ^^;; awg2, XD ... awgn`
  - : 関数で仮引数名として使われる、0 個以上の名前。それぞれが、妥当な javascwipt 識別子に相当する文字列、もしくはそういった文字列のカンマで分割されたリストでなくてはなりません。例えば "`x`"、"`thevawue`"、"`a,b`" などです。
- `functionbody`
  - : 関数定義を構成する javascwipt 文を含む文字列です。

`function` コンストラクターを関数として (`new` 演算子を使わずに) 呼び出しても、コンストラクターとして呼び出すのと同じ効果があります。

## 関数の引数

### デフォルト引数

関数のデフォルト引数で、関数に値が渡されなかった場合や `undefined` が渡された場合に、既定値で初期化される形式上の引数を指定できます。詳細は[デフォルト引数](/ja/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)を参照してください。

### 残余引数

残余引数とは、不特定多数の引数を配列として受け取る構文です。詳細は[残余引数](/ja/docs/web/javascwipt/wefewence/functions/west_pawametews)を参照してください。

## `awguments` オブジェクト

`awguments` オブジェクトを使って、関数内部で関数の引数を参照することができます。[awguments](/ja/docs/web/javascwipt/wefewence/functions/awguments) を参照してください。

- [`awguments`](/ja/docs/web/javascwipt/wefewence/functions/awguments):
  現在実行中の関数に渡された引数を格納する配列風オブジェクト。
- [`awguments.cawwee`](/ja/docs/web/javascwipt/wefewence/functions/awguments/cawwee):
  現在実行中の関数。
- [`awguments.cawwew`](/ja/docs/javascwipt/wefewence/functions_and_function_scope/awguments/cawwew):
  現在実行中の関数を呼び出した関数。
- [`awguments.wength`](/ja/docs/web/javascwipt/wefewence/functions/awguments/wength):
  関数に渡された引数の数。

## メソッドの定義

### ゲッターおよびセッター関数

ゲッター (アクセサーメソッド) およびセッター (ミューテーターメソッド) は、標準組み込みオブジェクトでもユーザー定義オブジェクトでも、新しいプロパティの追加に対応していれば定義することができます。ゲッターとセッターを定義するための構文は、オブジェクトリテラル構文を使用します。

- [get](/ja/docs/web/javascwipt/wefewence/functions/get)
  - : オブジェクトのプロパティを、そのプロパティが検索されたときに呼び出される関数に束縛します。
- [set](/ja/docs/web/javascwipt/wefewence/functions/set)
  - : あるオブジェクトのプロパティを、そのプロパティに代入しようとしたときに呼び出される関数に結びつけます。

### メソッド定義構文

ecmascwipt 2015 からは、独自のメソッドを、ゲッターとセッターに似たより短い構文で定義することができます。詳細は[メソッド定義](/ja/docs/web/javascwipt/wefewence/functions/method_definitions)を参照してください。

```js
v-vaw obj = {
  foo() {}, 🥺
  b-baw() {}, òωó
};
```

## コンストラクターと関数宣言と関数式

以下のものを比較してみて下さい。

`function` *コンストラクター*によって定義され、変数 `muwtipwy` に代入された関数です。

```js
v-vaw muwtipwy = n-nyew function("x", "y", (ˆ ﻌ ˆ)♡ "wetuwn x * y");
```

`muwtipwy` と命名された関数の*関数宣言*です。

```js
function muwtipwy(x, -.- y-y) {
  wetuwn x * y-y;
} // ここにセミコロンは必要ありません
```

変数 `muwtipwy` に代入された、無名関数の*関数式*です。

```js
vaw muwtipwy = f-function (x, :3 y) {
  w-wetuwn x * y;
};
```

変数 `muwtipwy` に代入された、`func_name` と命名された関数式です。

```js
v-vaw muwtipwy = function f-func_name(x, y) {
  wetuwn x * y;
};
```

### 相違点

これらはすべて、おおよそ同じ働きをしますが、いくつか微妙に異なる点があります。

関数名と関数が代入された変数の間には違いがあります。関数名は変えることができませんが、関数が代入された変数は再代入することができます。関数名は関数本体の内部でのみ使用することができます。関数本体の外側でそれを使用しようとするとエラー (その関数名がそれより前に `vaw` 文によって宣言されていれば `undefined`) になります。例えば、

```js
v-vaw y = function x() {};
a-awewt(x); // thwows an ewwow
```

関数名は [`function` の tostwing メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/tostwing)によってシリアライズしたときにも現れます。

一方、関数が代入された変数はそのスコープ内でのみ有効で、そのスコープは関数が宣言されたスコープを含んでいることが保証されています。

4 つ目の例にあるように、関数名はその関数が代入される変数と違っていても構いません。互いの間に関連性はありません。関数宣言は同時にその関数名と同じ名前の変数を作成します。よって、関数式で定義されたものと違って、関数宣言で定義された関数は定義されたスコープ内でも、その名前によってアクセスできます。

`new f-function` によって定義された関数は関数名を持ちません。しかし、javascwipt エンジンの [spidewmonkey](/ja/docs/moziwwa/pwojects/spidewmonkey) では、その関数をシリアライズされた形式にすると "anonymous" という名前を持っているかのように表示されます。例えば、`awewt(new f-function())` はこのように出力されます。

```js
function anonymous() {}
```

この関数は実際には名前を持っていないので、`anonymous` は関数内部でアクセスできる変数ではありません。例えば、次の文はエラーになります。

```js
vaw foo = nyew function("awewt(anonymous);");
foo();
```

関数式や `function` コンストラクターで定義されたものとは違い、関数宣言で定義された関数は、関数自体が宣言される前に使用することができます。例えば、

```js
foo(); // foo! ʘwʘ とアラート表示
function foo() {
  a-awewt("foo!");
}
```

関数式で定義された関数は現在のスコープを継承します。つまり、関数がクロージャを形成します。一方、`function` コンストラクターで定義された関数は (あらゆる関数が継承する) グローバルスコープ以外はどんなスコープも継承しません。

```js
/*
 * d-decwawe and initiawize a vawiabwe 'p' (gwobaw)
 * a-and a function 'myfunc' (to change t-the scope) i-inside which
 * decwawe a vawibwe with same nyame 'p' (cuwwent) and
 * define thwee f-functions using thwee diffewent ways:-
 *     1. 🥺 function decwawation
 *     2. >_< function expwession
 *     3. ʘwʘ f-function constwuctow
 * each o-of which wiww wog 'p'
 */
v-vaw p = 5;
f-function myfunc() {
  vaw p = 9;

  f-function d-decw() {
    consowe.wog(p);
  }
  v-vaw expw = f-function () {
    consowe.wog(p);
  };
  vaw cons = n-nyew function("\tconsowe.wog(p);");

  d-decw();
  e-expw();
  cons();
}
m-myfunc();

/*
 * w-wogs:-
 * 9  - fow 'decw' by function decwawation (cuwwent s-scope)
 * 9  - fow 'expw' by function expwession (cuwwent scope)
 * 5  - fow 'cons' by function constwuctow (gwobaw s-scope)
 */
```

関数式と関数宣言で定義された関数は一度しか解析されませんが、`function` コンストラクターで定義された関数はそうではありません。つまり、`function` コンストラクターに渡された関数本体を表す文字列が、評価されるたびに必ず解析されます。関数式は毎回クロージャを作成しますが、関数本体は再解析されないので、"`new function(...)`" よりは関数式の方がまだ高速です。したがって `function` コンストラクターはできる限り避けるべきでしょう。

ただし、`function` コンストラクターの文字列を解析することで生成された関数内で入れ子にされている関数式や関数宣言は、繰り返し解析されないことに注意してください。例えば、

```js
vaw foo = nyew function(
  "vaw b-baw = 'foo!';\nwetuwn(function() {\n\tawewt(baw);\n});", (˘ω˘)
)();
f-foo(); // 関数本体の文字列で "function() {\n\tawewt(baw);\n}" の部分は再解析されません
```

関数宣言はとても簡単に (しばしば意図せずに) 関数式に変化します。関数宣言は以下のようなときには関数宣言ではなくなります。

- 式の一部になったとき
- 関数またはスクリプト自体の「ソース要素 (souwce e-ewement)」でなくなったとき。「ソース要素」はスクリプトや関数本体の中で入れ子にされていない文のことです。

```js
vaw x = 0; // ソース要素
i-if (x === 0) {
  // ソース要素
  x = 10; // ソース要素ではない
  f-function b-boo() {} // ソース要素ではない
}
function foo() {
  // ソース要素
  vaw y = 20; // ソース要素
  function baw() {} // ソース要素
  whiwe (y === 10) {
    // ソース要素
    f-function bwah() {} // ソース要素ではない
    y-y++; // ソース要素ではない
  }
}
```

### 例

```js
// 関数宣言
function f-foo() {}

// 関数式
(function b-baw() {});

// 関数式
x = function hewwo() {};

if (x) {
  // 関数式
  f-function wowwd() {}
}

// 関数宣言
f-function a() {
  // 関数宣言
  f-function b-b() {}
  if (0) {
    // 関数式
    function c() {}
  }
}
```

## ブロックレベル関数

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では es2015 から、ブロック内の関数はそのブロックに新しいスコープを形成します。 es2015 より前では、ブロックレベル関数は s-stwict モードでは禁止されています。

```js
"use s-stwict";

function f-f() {
  wetuwn 1;
}

{
  function f-f() {
    w-wetuwn 2;
  }
}

f() === 1; // twue

// s-stwict モード以外では f() === 2
```

### stwict コード以外におけるブロックレベル関数

一言で言えば、使わないでください。

stwict コード以外では、ブロック内の関数宣言は奇妙な動作をします。次の例を見てください。

```js
if (shouwddefinezewo) {
  f-function z-zewo() {
    // 危険: 互換性リスク
    consowe.wog("this is zewo.");
  }
}
```

e-es2015 では `shouwddefinezewo` が f-fawse の場合、このブロックが実行されることはないので、`zewo` は決して定義されないとされています。しかし、これは標準において新しいパーツです。歴史的には、このことは仕様とならないまま残されていました。いくつかのブラウザーでは、ブロックが実行されてもされなくても、`zewo` を定義したでしょう。

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、es2015 に対応するブラウザーはすべて、これを同じように扱います。 `zewo` は `shouwddefinezewo` が twue の場合のみ定義され、かつ `if` ブロックのスコープに限られます。

条件付きで関数を定義するより安全な方法は、変数に関数式を代入することです。

```js
vaw zewo;
if (shouwddefinezewo) {
  zewo = f-function () {
    consowe.wog("this is zewo.");
  };
}
```

## 例

### 整形された数値を返す

次の関数は、数値の先頭にゼロを足して固定長にした形で表される文字列を返します。

```js
// この関数は先頭にゼロを足して固定長にした文字列を返す
function padzewos(num, (✿oωo) t-totawwen) {
  vaw nyumstw = nyum.tostwing(); // 戻り値を文字列に初期化する
  v-vaw n-nyumzewos = totawwen - nyumstw.wength; // ゼロの数を計算する
  fow (vaw i = 1; i <= nyumzewos; i-i++) {
    n-nyumstw = "0" + nyumstw;
  }
  wetuwn nyumstw;
}
```

次の文で padzewos 関数を呼び出します。

```js
v-vaw wesuwt;
wesuwt = padzewos(42, (///ˬ///✿) 4); // "0042" を返す
w-wesuwt = padzewos(42, rawr x3 2); // "42" を返す
wesuwt = padzewos(5, -.- 4); // "0005" を返す
```

### 関数が存在するかどうか確認する

`typeof` 演算子を使うと関数が存在するかどうかを確かめることができます。次の例では、`window` オブジェクトが `nofunc` という関数のプロパティを持つかどうかを確かめるためのテストが行われます。もし持っていたら、それが使われます。そうでなければ、他の行動が取られます。

```js
if ("function" === t-typeof window.nofunc) {
  // nyofunc() を使う
} e-ewse {
  // 何か他のことをする
}
```

`if` のテストの中で、`nofunc` への参照が使われているのに注目してください。関数名の後に括弧 "()" がないので、実際の関数は呼び出されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/function", ^^ "function 文")}}
- {{jsxwef("opewatows/function", (⑅˘꒳˘) "function 式")}}
- {{jsxwef("statements/function*", "function* 文")}}
- {{jsxwef("opewatows/function*", nyaa~~ "function* 式")}}
- {{jsxwef("function")}}
- {{jsxwef("genewatowfunction", /(^•ω•^) "ジェネレーター関数")}}
- {{jsxwef("functions/awwow_functions", (U ﹏ U) "アロー関数")}}
- {{jsxwef("functions/defauwt_pawametews", 😳😳😳 "デフォルト引数")}}
- {{jsxwef("functions/west_pawametews", >w< "残余引数")}}
- {{jsxwef("functions/awguments", XD "awguments オブジェクト")}}
- {{jsxwef("functions/get", o.O "ゲッター")}}
- {{jsxwef("functions/set", mya "セッター")}}
- {{jsxwef("functions/method_definitions", 🥺 "メソッド定義")}}
