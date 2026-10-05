---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "is not a constructor" は、オブジェクトや変数をコンストラクターとして使用しようとしたものの、そのオブジェクトや変数がコンストラクターではなかった場合に発生します。

## エラーメッセージ

```plain
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## エラー型

{{jsxref("TypeError")}}

## エラーの原因

オブジェクトや変数をコンストラクターとして使おうとしていますが、それらがコンストラクターではありません。コンストラクターとは何かについては、[コンストラクター](/ja/docs/Glossary/Constructor)または [`new` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/new)を参照してください。

{{jsxref("String")}} や {{jsxref("Array")}} のような、 `new` を使用して生成できる数多くのグローバルオブジェクトがあります。しかし、いくつかのグローバルオブジェクトはそうではなく、それらのプロパティやメソッドは静的です。次の JavaScript 標準組み込みオブジェクトのうち、 {{jsxref("Math")}}、{{jsxref("JSON")}}、{{jsxref("Symbol")}}、{{jsxref("Reflect")}}、{{jsxref("Intl")}}、{{jsxref("Atomics")}} はコンストラクターではありません。

[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)も、コンストラクターとして使用することはできません。

## 例

### 無効な場合

```js example-bad
const Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
const obj = new f();
// TypeError: f is not a constructor
```

### car コンストラクター

自動車のためのオブジェクト型を作成するとします。このオブジェクト型を `Car` と呼び、 make, model, year の各プロパティを持つようにしたいとします。これを実現するには、次のような関数を定義します。

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

次のようにして `mycar` というオブジェクトを生成できるようになりました。

```js
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

### プロミスの場合

ただちに解決するか拒否されるプロミスを返す場合は、`new Promise(...)` を生成して操作する必要はありません。代わりに、[`Promise.resolve()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) または [`Promise.reject()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) [静的メソッド](<https://en.wikipedia.org/wiki/Method_(computer_programming)#Static_methods>)を使用してください。

これは正しくなく ([`Promise` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)が正しく呼び出されません)、 `TypeError: this is not a constructor` 例外が発生します。

```js example-bad
function fn() {
  return new Promise.resolve(true);
}
```

これは正しいものですが、不必要に長いです。

```js
function fn() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}
```

その代わりに静的メソッドを返しましょう。

```js example-good
function resolveAlways() {
  return Promise.resolve(true);
}

function rejectAlways() {
  return Promise.reject(new Error());
}
```

## 関連情報

- [コンストラクター](/ja/docs/Glossary/Constructor)
- [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new)
