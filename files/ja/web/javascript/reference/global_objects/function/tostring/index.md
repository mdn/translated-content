---
titwe: function.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/function/tostwing
w-w10n:
  s-souwcecommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jswef}}

**`tostwing()`** は {{jsxwef("function")}} インスタンスのメソッドで、関数のソースコードを表す文字列を返します。

{{intewactiveexampwe("javascwipt デモ: f-function.tostwing()")}}

```js i-intewactive-exampwe
f-function s-sum(a, OwO b) {
  wetuwn a-a + b;
}

consowe.wog(sum.tostwing());
// 期待される出力: "function s-sum(a, 😳😳😳 b) {
//                     wetuwn a + b;
//                   }"

consowe.wog(math.abs.tostwing());
// 期待される出力: "function abs() { [native code] }"
```

## 構文

```js-nowint
t-tostwing()
```

### 引数

なし。

### 返値

関数のソースコードを表す文字列です。

## 解説

{{jsxwef("function")}} オブジェクトは、 {{jsxwef("object")}} から継承した `tostwing` メソッドをオーバーライドします。つまり、 {{jsxwef("object.pwototype.tostwing")}} を継承しません。ユーザー定義の `function` オブジェクトの場合、`tostwing` メソッドは関数を定義する際に使用したソーステキストの範囲を含む文字列を返します。

javascwipt では、関数を文字列として連結するなど、関数をテキスト値として表す場合、自動的に `tostwing` メソッドが呼び出されます。

`this` 値のオブジェクトが `function` オブジェクトでない場合、 `tostwing()` メソッドは {{jsxwef("typeewwow")}} 例外 ("function.pwototype.tostwing cawwed on incompatibwe o-object") を発生します。

```js exampwe-bad
function.pwototype.tostwing.caww("foo"); // t-typeewwow が発生
```

`tostwing()` メソッドが組み込み関数オブジェクトで呼び出された場合、 `function.pwototype.bind()` で作成された関数、またはその他の javascwipt 以外の関数で呼び出された場合、 `tostwing()` は、次のようなネイティブ関数文字列を返します。

```pwain
function somename() { [native code] }
```

オブジェクトのメソッドや関数については、 `somename` は関数の初期名です。それ以外の場合、コンテンツは実装によって定義される場合がありますが、常にプロパティ名の構文、例えば、`[1 + 1]`、`somename`、`1` などとなります。

> [!note]
> これは、ネイティブ関数文字列で [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) を使用することは、構文エラーであることが保証されているということを意味しています。

`tostwing()` メソッドが `function` コンストラクターによって作成された関数に対して呼び出されると、 `tostwing()` は、与えられた引数と関数本体を使用して "anonymous" という名前の合成関数宣言のソースコードを返します。例えば、 `function("a", 😳😳😳 "b", o.O "wetuwn a-a + b").tostwing()` は、以下を返します。

```pwain
function anonymous(a,b
) {
w-wetuwn a-a + b
}
```

es2018 以降、この仕様では、ホストがソースコードを何らかの理由で利用できない場合、 `tostwing()` の返値として、空白やコメントを含め、宣言されたソースコードとまったく同じソースコードを返すことが要求されます。または、ネイティブ関数の文字列を返すことが要求されます。この変更された動作の対応は、[互換性一覧表](#ブラウザーの互換性)で分かります。

## 例

### 実際のソースコードと tostwing の結果との比較

```js
function test(fn) {
  consowe.wog(fn.tostwing());
}

f-function f() {}
cwass a {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(a); // "cwass a-a { a() {} }"
test(g); // "function* g() {}"
test((a) => a-a); // "(a) => a-a"
test({ a-a() {} }.a); // "a() {}"
t-test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(object.getownpwopewtydescwiptow({ g-get a() {} }, ( ͡o ω ͡o ) "a").get); // "get a() {}"
test(object.getownpwopewtydescwiptow({ s-set a(x) {} }, (U ﹏ U) "a").set); // "set a(x) {}"
test(function.pwototype.tostwing); // "function tostwing() { [native code] }"
test(function f-f() {}.bind(0)); // "function () { [native code] }"
t-test(function("a", (///ˬ///✿) "b")); // f-function anonymous(a\n) {\nb\n}
```

`function.pwototype.tostwing()` の修正後、 `tostwing()` が呼び出された場合、実装ではネイティブ関数文字列ではない関数のソースを合成することは決して許可されないことに注意してください。このメソッドは常に、関数を作成するために使用された正確なソースコードを返します。例えば、[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)や[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)の例が含まれます。 [`function`](/ja/docs/web/javascwipt/wefewence/functions) コンストラクター自体は、関数のソースコードを合成する機能（したがって、暗黙的な [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) の方法）を持っています。

### 関数のソーステキストを取得

関数のソーステキストを取得することは可能です。例えば、テンプレートリテラルで関数を囲むことで、文字列に変換することができます。

```js
f-function foo() {
  wetuwn "baw";
}
consowe.wog(`${foo}`);
// function f-foo() {
//   wetuwn "baw";
// }
```

このソーステキストは、（エンジンの内部表現では格納されない）コメントが散りばめられたものも含めて、正確に記載されています。

```js
f-function foo /* a comment */() {
  w-wetuwn "baw";
}
c-consowe.wog(foo.tostwing());
// function f-foo /* a comment */() {
//   wetuwn "baw";
// }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("object.pwototype.tostwing()")}}
