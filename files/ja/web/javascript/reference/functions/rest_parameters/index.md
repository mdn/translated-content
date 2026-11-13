---
title: 残余引数
slug: Web/JavaScript/Reference/Functions/rest_parameters
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**残余引数**構文により、関数が不定数の引数を配列として受け入れることができ、[可変長引数関数](https://ja.wikipedia.org/wiki/可変長引数)を JavaScript で表すことができます。

{{InteractiveExample("JavaScript デモ: 残余引数")}}

```js interactive-example
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// 予想される結果: 6

console.log(sum(1, 2, 3, 4));
// 予想される結果: 10
```

## 構文

```js-nolint
function f(a, b, ...theArgs) {
  // …
}
```

いくつかの追加の構文上の制限があります。

- 関数定義は、残余引数を 1 つしか持つことができません。
- 残余引数は関数定義において最後の引数であるなければなりません。
- 残余引数の後に[末尾カンマ](/ja/docs/Web/JavaScript/Reference/Trailing_commas)は許可されません。
- 残余引数は[既定値](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)を持つことができません。

## 解説

関数定義の最後の引数に `...` （3 つの U+002E FULL STOP 文字）の接頭辞を付けると、（ユーザーが提供した）その位置にある残りの引数を[標準の JavaScript の配列](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)の中に入れることができます。
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

残余引数は[構造分解](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)することができます。これにより、特定の引数の位置を無視することが可能です。

```js
function ignoreFirst(...[, b, c]) {
  return b + c;
}
```

ただし、次のものはすべて構文エラーになります。

```js-nolint example-bad
function wrong1(...one, ...wrong) {}
function wrong2(...wrong, arg2, arg3) {}
function wrong3(...wrong,) {}
function wrong4(...wrong = []) {}
```

残余引数は関数の [`length`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/length) プロパティにはカウントされません。

### 残余引数と arguments オブジェクトとの違い

残余引数と {{jsxref("Functions/arguments", "arguments")}} オブジェクトの間には、主に 4 つの違いがあります。

- `arguments` オブジェクトは**実際は配列ではありません**。一方、残余引数は {{jsxref("Array")}} インスタンスです。つまり、{{jsxref("Array/sort", "sort()")}}、{{jsxref("Array/map", "map()")}}、{{jsxref("Array/forEach", "forEach()")}}、{{jsxref("Array/pop", "pop()")}} などのメソッドを直接適用できます。
- `arguments` オブジェクトには、非推奨の [`callee`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/callee) プロパティなど、追加のプロパティがあります。
- 単純な引数を持つ厳格でない関数では、 `arguments` オブジェクトは[引数の値とインデックスを同期します](/ja/docs/Web/JavaScript/Reference/Functions/arguments#assigning_to_indices)。名前付き引数が再割り当てされても、残余引数配列の値は更新されません。
- 残余引数はすべての追加引数を一つの配列に束ねたもので、 `...restParam` の前に定義された名前付き引数は含まれません。一方、 `arguments` オブジェクトは、 `...restParam` 配列の引数を含むすべての引数を、 1 つの配列風オブジェクトに束ねたものを含んでいます。

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

以下、値が 1 つしかなくても、最後の引数は配列に入れられます。

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

下記では、引数が 1 つしか提供されていないため、 `b` は既定値の `undefined` となりますが、 `manyMoreArgs` 空の配列のままになります。

```js
// 上記の例と同じ関数定義を使用

myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array
```

### 引数の長さ

`theArgs` は配列なので、 {{jsxref("Array/length", "length")}} プロパティを使用して要素数を取得することができます。関数の唯一の引数が残余引数である場合、`restParams.length` は [`arguments.length`](/ja/docs/Web/JavaScript/Reference/Functions/arguments/length) と等しくなります。

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
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]
```

### arguments から配列へ

{{jsxref("Array")}} のメソッドは残余引数に対して使用することができますが、 `arguments` オブジェクトに対しては使用できません。

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs; // 何も起こらない
}

console.log(sortArguments(5, 3, 7, 1));
// TypeError が発生（arguments.sort は関数ではない）
```

残余引数は、引数の集合を配列に変換するために一般的に使用することができる定型コードを削減するために導入されました。

残余引数の登場以前、 `arguments` は配列メソッドを呼び出す前に通常の配列に変換する必要があります。

```js
function fn(a, b) {
  const normalArray = Array.prototype.slice.call(arguments);
  // — or —
  const normalArray2 = [].slice.call(arguments);
  // — or —
  const normalArrayFrom = Array.from(arguments);

  const first = normalArray.shift(); // OK, gives the first argument
  const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
}
```

残余引数を使用して、通常の配列に簡単にアクセスできるようになりました。

```js
function fn(...args) {
  const normalArray = args;
  const first = normalArray.shift(); // OK, gives the first argument
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- [スプレッド構文 (`...`)](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [デフォルト引数](/ja/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Array")}}
