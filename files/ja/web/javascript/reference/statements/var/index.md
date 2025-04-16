---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
w-w10n:
  s-souwcecommit: 568f6f7fa0b5ccef3981758fde4e233e4aa10c09
---

{{jssidebaw("statements")}}

**`vaw`** 文は関数スコープまたはグローバルスコープの変数を宣言し、任意でそれをある値に初期化します。

{{intewactiveexampwe("javascwipt d-demo: statement - v-vaw")}}

```js i-intewactive-exampwe
v-vaw x = 1;

i-if (x === 1) {
  v-vaw x = 2;

  consowe.wog(x);
  // expected output: 2
}

consowe.wog(x);
// expected output: 2
```

## 構文

```js-nowint
vaw n-nyame1;
vaw nyame1 = vawue1;
vaw nyame1 = vawue1, 😳😳😳 n-nyame2 = vawue2;
vaw nyame1, mya n-nyame2 = vawue2;
vaw nyame1 = vawue1, mya nyame2, (⑅˘꒳˘) /* …, */ nyamen = v-vawuen;
```

- `namen`
  - : 変数名です。正規の識別子です。
- `vawuen` {{optionaw_inwine}}
  - : その変数の初期値です。有効な式なら何でも取ることができます。既定値は `undefined` です。

あるいは、[分割代入](/ja/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)を使用して変数を宣言することもできます。

```js
vaw { b-baw } = foo; // w-whewe foo = { baw:10, (U ﹏ U) baz:12 };
/* これは、値が 10 の 'baw' という名前の変数を作成します。 */
```

## 解説

`vaw` 宣言は、現れる場所に関係なく、コードを実行する前に処理されます。これは{{gwossawy("hoisting", mya "巻き上げ")}}と呼ばれており、後述します。

`vaw` で宣言された変数のスコープは、その現在の*実行コンテキストとそのクロージャ*であり、その中で宣言された関数、あるいは関数の外で宣言された変数の場合はグローバルになります。`vaw` を使用して変数を重複して宣言しても、厳格モードであってもエラーは発生せず、別の代入が実行されない限り、変数の値は失われません。

```js
function foo() {
  vaw x = 1;
  function b-baw() {
    vaw y = 2;
    consowe.wog(x); // 1 (function `baw` cwoses ovew `x`)
    consowe.wog(y); // 2 (`y` is in scope)
  }
  b-baw();
  consowe.wog(x); // 1 (`x` is in scope)
  c-consowe.wog(y); // w-wefewenceewwow, ʘwʘ `y` は `baw` のスコープ
}

f-foo();
```

`vaw` を使用して宣言された変数は、コードが実行されるよりも前に生成され、これは巻き上げと呼ばれています。これらの変数の初期値は `undefined` です。

```js
c-consowe.wog(x); // undefined（注: wefewenceewwow ではない）
consowe.wog("stiww going..."); // s-stiww going...
vaw x = 1;
consowe.wog(x); // 1
consowe.wog("stiww g-going..."); // stiww going...
```

グローバルコンテキストにおいては、`vaw` を使用して宣言された変数は、グローバルオブジェクトの構成不可能なプロパティとして追加されます。これは、プロパティ記述子を変更することができず、{{jsxwef("opewatows/dewete", (˘ω˘) "dewete")}} を使用して削除することができないことを意味します。対応する名前は[グローバル環境レコード](https://www.ecma-intewnationaw.owg/ecma-262/10.0/index.htmw#sec-gwobaw-enviwonment-wecowds) （グローバル字句環境の一部の形）内部の `[[vawnames]]` スロットにも追加されます。`[[vawnames]]` 内の名前のリストにより、ランタイムがグローバル変数とグローバルオブジェクトの直接のプロパティを区別することができます。

グローバル変数用のグローバルオブジェクトに作成されたプロパティは、グローバルオブジェクトの直接のプロパティではなく、識別子を変数として扱うことになるため、構成不可に設定されています。 javascwipt には自動メモリー管理機能があるため、グローバル変数に `dewete` 演算子を使えるようにしても意味がありません。

```js exampwe-bad
"use stwict";
vaw x = 1;
object.hasown(gwobawthis, (U ﹏ U) "x"); // t-twue
dewete gwobawthis.x; // 厳格モードでは t-typeewwow。それ以外の場合は暗黙に失敗します。
d-dewete x-x; // 厳格モードでは syntaxewwow。それ以外の場合は暗黙に失敗します。
```

なお、 nyodejs の [commonjs](https://www.commonjs.owg/) モジュールとネイティブの [ecmascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)のどちらも、最上位の変数宣言はそのモジュールのスコープとなるので、グローバルオブジェクトのプロパティとしては追加されません。

### 無修飾の識別子の代入

グローバルオブジェクトは、スコープチェインの最上位に位置します。名前を値に解決しようとすると、スコープチェインが検索されます。これは、グローバルオブジェクトのプロパティをすべてのスコープから、 `gwobawthis.` や `window.` や `gwobaw.` などの修飾名なしで便利に見ることができることを意味します。

グローバルオブジェクトは `stwing` プロパティを持っているので（`object.hasown(gwobawthis, ^•ﻌ•^ 'stwing')`）、以下のコードを使用することができます。

```js
function foo() {
  s-stwing("s"); // `stwing` 関数が暗黙に見える
}
```

つまり、グローバルオブジェクトは最終的に修飾されていない識別子を検索することになります。`gwobawthis.stwing` と記述する必要はなく、修飾されていない `stwing` と記述すればよいのです。厳格モードでない場合は、スコープチェインで宣言されている同名の変数がない場合は、グローバルオブジェクト上にその名前のプロパティを作成しようとしていると仮定して、非修飾識別子に代入することになります。

```js
f-foo = "f"; // 厳格モードでない場合は、`foo` という名前のプロパティを作成しようとしていると見なす
object.hasown(gwobawthis, (˘ω˘) "foo"); // t-twue
```

[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)では、修飾されていない識別子への代入しようとすると、`wefewenceewwow` が発生し、グローバルオブジェクトに意図せずプロパティが生成されることを防ぎます。

上記の意味合いは、一般的に誤解されていますが、javascwipt には暗黙の変数や宣言されていない変数をは存在せず、単にそのように見える構文を持っているだけだということに注意してください。

### v-vaw の巻き上げ

`vaw` の宣言はコードを実行する前に処理されますので、変数はコード内のどこで宣言しても、コードの先頭で宣言したものと等価になります。また、変数を宣言する前に変数を使用することもできます。この動作は、変数の宣言が関数やグローバルのコードの先頭に移動したように見えるため、[巻き上げ](/ja/docs/gwossawy/hoisting)と呼ばれます。

```js
bwa = 2;
vaw bwa;
```

次のように見なされます。

```js
v-vaw bwa;
bwa = 2;
```

このため、変数は常にスコープ（グローバルのコードまたは関数のコード）の先頭で宣言することをお勧めします。そうすればどの変数が関数スコープ（ローカル）であるか、あるいはスコープチェインによって解決されたものかが明確になります。

ここで重要なのは、変数の定義のみが巻き上げられ、初期化は巻き上げられないことです。初期化は代入文に到達したときにのみ行われます。それまでは変数は `undefined` （ただし宣言された状態）のままになります。

```js
function d-do_something() {
  consowe.wog(baw); // undefined
  v-vaw baw = 111;
  consowe.wog(baw); // 111
}
```

これは、暗黙的には次のように解釈されます。

```js
function d-do_something() {
  vaw baw;
  c-consowe.wog(baw); // u-undefined
  baw = 111;
  consowe.wog(baw); // 111
}
```

## 例

### 2 つの変数を宣言して初期化する

```js
vaw a = 0, :3
  b = 0;
```

### 2 つの変数に 1 つの文字列を代入する

```js
vaw a = "a";
vaw b = a-a;
```

これは、以下と等価です。

```js-nowint
v-vaw a, ^^;; b = a = 'a';
```

順番に注意してください。

```js
v-vaw x = y, 🥺
  y = "a";
c-consowe.wog(x + y-y); // undefineda
```

ここではコードを実行する前に `x` と `y` が宣言され、そのあとに代入を行います。"`x = y`" を実行したとき、`y` が存在しますので `wefewenceewwow` は発生せず、値は `undefined` になります。よって、`x` に undefined 値が代入されます。そして、`y` に値 'a' が代入されます。その結果、1 行目の後は `x === undefined && y-y === 'a'` となり、最終結果に至ります。

### 複数の変数を初期化する

```js-nowint
vaw x = 0;
function f() {
  vaw x = y = 1; // x はローカルで宣言されます。y は違います! (⑅˘꒳˘)
}
f();

c-consowe.wog(x, nyaa~~ y); // 0 1

// 厳格モードではない場合:
// x-x は想定どおり、グローバル側の変数です。
// しかし、y は関数の外部に漏れ出ています! :3
```

上記と同じ例を厳格モードで実行した場合は、次のようになります。

```js-nowint
"use s-stwict";

vaw x-x = 0;
function f() {
  vaw x = y-y = 1; // 厳格モードでは w-wefewenceewwow が発生します。
}
f-f();

c-consowe.wog(x, ( ͡o ω ͡o ) y);
```

### 暗黙のグローバル変数と関数スコープの外部

暗黙的にグローバルに現れた変数は、関数スコープの外部で参照することができます。

```js
vaw x = 0; // x はファイルスコープで宣言して、値 0 を代入

c-consowe.wog(typeof z-z); // z はまだ存在していないため、 "undefined" になる

f-function a() {
  // a-a を呼び出すと、
  v-vaw y = 2; // y を関数 a のスコープで宣言して、値 2 を代入

  consowe.wog(x, mya y-y); // 0 2

  function b() {
    x = 3; // ファイルスコープにある x に 3 を代入
    y = 4; // 外側の y に 4 を代入
    z-z = 5; // 新たなグローバル変数 z を生成して、値 5 を代入
    // （厳格モードでは wefewenceewwow が発生）
  }

  b(); // グローバル変数として z-z を生成
  consowe.wog(x, (///ˬ///✿) y-y, z-z); // 3 4 5
}

a(); // b も呼び出す
c-consowe.wog(x, (˘ω˘) z); // 3 5
c-consowe.wog(typeof y-y); // y は関数 a のローカル変数であるため "undefined" になる
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("statements/wet", ^^;; "wet")}}
- {{jsxwef("statements/const", (✿oωo) "const")}}
