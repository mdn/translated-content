---
title: 残余引数
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

**残余引数**構文により、関数が不定数の引数を配列として受け入れることができ、[可変長引数関数](https://ja.wikipedia.org/wiki/可変長引数)を JavaScript で表すことができます。

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## 構文

```js
function f(a, b, ...theArgs) {
  // ...
}
```

## 解説

関数定義の最後の引数に "`...`" （3 つの U+002E FULL STOP 文字）の接頭辞を付けると、（ユーザーが提供した）その位置にある残りの引数を[標準の JavaScript の配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)の中に入れることができます。
最後の引数のみが「残余引数」になることができます。

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// コンソール出力:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]
```

### クイックリファレンス

関数定義には、 `...`_restParam_ を 1 つだけ入れることができます。

```js example-bad
foo(...one, ...wrong, ...wrong);
```

残余引数は、関数定義の最後の引数でなければなりません。

```js example-bad
foo(...wrong, arg2, arg3);
```

```js example-good
foo(arg1, arg2, ...correct);
```

### 残余引数と `arguments` オブジェクトとの違い

残余引数と {{jsxref("Functions/arguments", "arguments")}} オブジェクトの間には、主に 3 つの違いがあります。

- `arguments` オブジェクトは**実際の配列ではありません**。一方、残余引数は {{jsxref("Array")}} インスタンスです。つまり、{{jsxref("Array.sort", "sort")}}, {{jsxref("Array.map", "map")}}, {{jsxref("Array.forEach", "forEach")}}, {{jsxref("Array/pop", "pop")}} などのメソッドを直接適用できます。
- `arguments` オブジェクトは、（`callee` プロパティのように）自身への固有の追加機能を持っています。
- `...restParam` はすべての追加引数を一つの配列に束ねたもので、 `...restParam` の前に定義された名前付き引数は含まれません。一方、 `arguments` オブジェクトは、 `...restParam` 配列の引数を含むすべての引数を、 1 つの配列風オブジェクトに束ねたものを含んでいます。

### arguments から配列へ

残余引数は、引数により引き起こされる定型コードを減らすために導入されました。

```js
// 残余引数の登場以前は、"arguments" を普通の配列に変換するには以下のようにしていました。

function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments);
  // -- or --
  let normalArray = [].slice.call(arguments);
  // -- or --
  let normalArray = Array.from(arguments);

  let first = normalArray.shift(); // OK、最初の引数が得られる
  let first = arguments.shift(); // エラー (arguments は通常の配列ではない)
}

// 残余引数を使ってふつうの配列へのアクセスが得られるようになりました

function f(...args) {
  let normalArray = args;
  let first = normalArray.shift(); // OK、最初の引数が得られる
}
```

## 例

### 残余引数の使用

この例では、最初の引数が `a` に、 2 番目の引数が `b` に割り当てられますので、これらの名前付き引数はふつう通り使われます。

しかし、 3 番目の引数、`manyMoreArgs` は、 3 番目、 4 番目、 5 番目、 6 番目、～ n 番目 — ユーザーが入れただけの数の引数を持つ配列になります。

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- 配列であることに注意
```

以下、値が1つしかなくても、最後の引数は配列に入れられる。

```js
// 上記の例と同じ関数定義を使用

myFun("one", "two", "three");

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- 値が 1 つだけでも配列であることに注意
```

以下の例では、 3 番目の引数が提供されていませんが、 `manyMoreArgs` は配列のままです（ただし空のものです）。

```js
// 上記の例と同じ関数定義を使用

myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- やはりこれも配列
```

### 引数の長さ

`theArgs` は配列なので、 {{jsxref("Array.length", "length")}} プロパティを使用して要素数を取得することができます。

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### 通常の引数と残余引数

次の例では、残余引数を使用して 2 番目の引数から最後の引数までを配列に集めています。それからそれぞれを最初の引数と乗算し、その配列を返します。

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => {
    return multiplier * element;
  });
}

let arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### 残余引数は実際の配列、 arguments オブジェクトはそうではない

{{jsxref("Array")}} のメソッドを残余引数で利用することができますが、 `arguments` オブジェクトでは利用できません。

```js
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort();
  return sortedArgs; // これは実行されない
}

console.log(sortArguments(5, 3, 7, 1));
// TypeError が発生 (arguments.sort は関数ではない)
```

`Array` のメソッドを `arguments` オブジェクトで使用するには、まずオブジェクトを実際の配列に変換する必要があります。

```js
function sortArguments() {
  let args = Array.from(arguments);
  let sortedArgs = args.sort();
  return sortedArgs;
}
console.log(sortArguments(5, 3, 7, 1)); // 1, 3, 5, 7
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (こちらも '`...`')
- [分割代入](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [`arguments` オブジェクト](/ja/docs/Web/JavaScript/Reference/Functions/arguments)
- {{jsxref("Array")}}
