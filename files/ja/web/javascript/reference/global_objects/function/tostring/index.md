---
title: Function.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`toString()`** は {{jsxref("Function")}} インスタンスのメソッドで、関数のソースコードを表す文字列を返します。

{{InteractiveExample("JavaScript デモ: Function.toString()")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// 期待される出力: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// 期待される出力: "function abs() { [native code] }"
```

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

関数のソースコードを表す文字列です。

## 解説

{{jsxref("Function")}} オブジェクトは、 {{jsxref("Object")}} から継承した `toString` メソッドをオーバーライドします。つまり、 {{jsxref("Object.prototype.toString")}} を継承しません。ユーザー定義の `Function` オブジェクトの場合、`toString` メソッドは関数を定義する際に使用したソーステキストの範囲を含む文字列を返します。

JavaScript では、関数を文字列として連結するなど、関数をテキスト値として表す場合、自動的に `toString` メソッドが呼び出されます。

`this` 値のオブジェクトが `Function` オブジェクトでない場合、 `toString()` メソッドは {{jsxref("TypeError")}} 例外 ("Function.prototype.toString called on incompatible object") を発生します。

```js example-bad
Function.prototype.toString.call("foo"); // TypeError が発生
```

`toString()` メソッドが組み込み関数オブジェクトで呼び出された場合、 `Function.prototype.bind()` で作成された関数、またはその他の JavaScript 以外の関数で呼び出された場合、 `toString()` は、次のようなネイティブ関数文字列を返します。

```plain
function someName() { [native code] }
```

オブジェクトのメソッドや関数については、 `someName` は関数の初期名です。それ以外の場合、コンテンツは実装によって定義される場合がありますが、常にプロパティ名の構文、例えば、`[1 + 1]`、`someName`、`1` などとなります。

> [!NOTE]
> これは、ネイティブ関数文字列で [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) を使用することは、構文エラーであることが保証されているということを意味しています。

`toString()` メソッドが `Function` コンストラクターによって作成された関数に対して呼び出されると、 `toString()` は、与えられた引数と関数本体を使用して "anonymous" という名前の合成関数宣言のソースコードを返します。例えば、 `Function("a", "b", "return a + b").toString()` は、以下を返します。

```plain
function anonymous(a,b
) {
return a + b
}
```

ES2018 以降、この仕様では、ホストがソースコードを何らかの理由で利用できない場合、 `toString()` の返値として、空白やコメントを含め、宣言されたソースコードとまったく同じソースコードを返すことが要求されます。または、ネイティブ関数の文字列を返すことが要求されます。この変更された動作の対応は、[互換性一覧表](#ブラウザーの互換性)で分かります。

## 例

### 実際のソースコードと toString の結果との比較

```js
function test(fn) {
  console.log(fn.toString());
}

function f() {}
class A {
  a() {}
}
function* g() {}

test(f); // "function f() {}"
test(A); // "class A { a() {} }"
test(g); // "function* g() {}"
test((a) => a); // "(a) => a"
test({ a() {} }.a); // "a() {}"
test({ *a() {} }.a); // "*a() {}"
test({ [0]() {} }[0]); // "[0]() {}"
test(Object.getOwnPropertyDescriptor({ get a() {} }, "a").get); // "get a() {}"
test(Object.getOwnPropertyDescriptor({ set a(x) {} }, "a").set); // "set a(x) {}"
test(Function.prototype.toString); // "function toString() { [native code] }"
test(function f() {}.bind(0)); // "function () { [native code] }"
test(Function("a", "b")); // function anonymous(a\n) {\nb\n}
```

`Function.prototype.toString()` の修正後、 `toString()` が呼び出された場合、実装ではネイティブ関数文字列ではない関数のソースを合成することは決して許可されないことに注意してください。このメソッドは常に、関数を作成するために使用された正確なソースコードを返します。例えば、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)や[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)の例が含まれます。 [`Function`](/ja/docs/Web/JavaScript/Reference/Functions) コンストラクター自体は、関数のソースコードを合成する機能（したがって、暗黙的な [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) の方法）を持っています。

### 関数のソーステキストを取得

関数のソーステキストを取得することは可能です。例えば、テンプレートリテラルで関数を囲むことで、文字列に変換することができます。

```js
function foo() {
  return "bar";
}
console.log(`${foo}`);
// function foo() {
//   return "bar";
// }
```

このソーステキストは、（エンジンの内部表現では格納されない）コメントが散りばめられたものも含めて、正確に記載されています。

```js
function foo /* a comment */() {
  return "bar";
}
console.log(foo.toString());
// function foo /* a comment */() {
//   return "bar";
// }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Object.prototype.toString()")}}
