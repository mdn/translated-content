---
title: Function
slug: Web/JavaScript/Reference/Global_Objects/Function
---

{{JSRef}}

JavaScript の関数は、実際にはすべて `Function` オブジェクトです。これは、 `(function(){}).constructor === Function` というコードが true を返すことで確認することができます。

## コンストラクター

- {{jsxref("Function/Function", "Function()")}}
  - : 新しい `Function` オブジェクトを生成します。コンストラクターを直接呼び出すと関数を動的に生成することができますが、セキュリティや、 {{jsxref("eval")}} と似た性能の (ただし、はるかに重要性の低い) 問題を抱えます。ただし eval とは異なり、 `Function` コンストラクターはグローバルスコープで実行される関数のみを生成します。

## インスタンスプロパティ

- {{jsxref("Function.arguments")}}
  - : 関数に渡した引数に対応する配列です。
    これは {{jsxref("Function")}} オブジェクトのプロパティとしては非推奨です。代わりに関数内に用意されている {{jsxref("Functions/arguments", "arguments")}} オブジェクト (関数内で使用可能) を使用してください。
- {{jsxref("Function.caller")}}
  - : 現在実行している関数を呼び出した関数を返します。
    このプロパティは非推奨であり、一部の厳格モードではない関数でのみ機能します。
- {{jsxref("Function.displayName")}}
  - : 関数の表示名です。
- {{jsxref("Function.length")}}
  - : 関数によって期待される引数の数を指定します。
- {{jsxref("Function.name")}}
  - : 関数の名前です。

## インスタンスメソッド

- {{jsxref("Function.prototype.apply()", "Function.prototype.apply(<var>thisArg</var> [, <var>argsArray</var>])")}}
  - : 関数を呼び出し、 `this` を提供された `thisArg` に設定します。引数は {{jsxref("Array")}} として渡すことができます。
- {{jsxref("Function.prototype.bind()", "Function.prototype.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]]])")}}
  - : 新しい関数を作成し、呼び出されたときに、 `this` を提供された `thisArg` に設定します。任意で、指定された一連の引数が、新しく結びつけられた関数が呼び出されたときに与えられた引数の前に付加されます。
- {{jsxref("Function.prototype.call()", "Function.prototype.call(<var>thisArg</var>[, <var>arg1</var>, <var>arg2</var>, ...<var>argN</var>])")}}
  - : 関数を呼び出して、 `this` に提供した値を設定します。引数は、指定するオブジェクトのものとして渡すことができます。
- {{jsxref("Function.prototype.toString()", "Function.prototype.toString()")}}
  - : 関数のソースコードを表す文字列を返します。
    {{jsxref("Object.prototype.toString")}} メソッドを上書きします。

## 例

### Funciton コンストラクターと関数宣言の違い

`Function` コンストラクターで生成された関数は、生成コンテキストにクロージャを作りません。つまり常にグローバルスコープで生成されます。これを実行すると、 `Function` コンストラクターの呼び出し元のスコープは入らず、自身のローカル変数とグローバル変数だけにアクセスできます。これは関数式のコードに {{jsxref("eval")}} を使うのとは異なります。

```js
var x = 10;

function createFunction1() {
  var x = 20;
  return new Function("return x;"); // この |x| はグローバルの |x| を表す
}

function createFunction2() {
  var x = 20;
  function f() {
    return x; // この |x| は上記のローカルの |x| を表す
  }
  return f;
}

var f1 = createFunction1();
console.log(f1()); // 10
var f2 = createFunction2();
console.log(f2()); // 20
```

このコードはウェブブラウザーでは動作しますが、 Node.js では `f1()` で `ReferenceError` が発生します。 `x` が見つからないためです。これは Node の最上位のスコープがグローバルスコープではなく、 `x` はモジュールのローカルになるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Function")}}

## 関連情報

- {{jsxref("Functions", "関数と関数スコープ", "", 1)}}
- {{jsxref("Statements/function", "function")}} 文
- {{jsxref("Operators/function", "function")}} 式
- {{jsxref("Statements/function*", "function*")}} 文
- {{jsxref("Operators/function*", "function*")}} 式
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
