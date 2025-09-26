---
title: yield 演算子
slug: Web/JavaScript/Reference/Operators/yield
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`yield`** 演算子は、[ジェネレーター関数](/ja/docs/Web/JavaScript/Reference/Statements/function*)を一時停止したり再開したりするために使用します。

{{InteractiveExample("JavaScript デモ: yield 演算子", "taller")}}

```js interactive-example
function* foo(index) {
  while (index < 2) {
    yield index;
    index++;
  }
}

const iterator = foo(0);

console.log(iterator.next().value);
// 予想される結果: 0

console.log(iterator.next().value);
// 予想される結果: 1
```

## 構文

```js-nolint
yield
yield expression
```

### 引数

- `expression` {{optional_inline}}
  - : [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)経由でジェネレーター関数が生成する値を定義します。省略した場合、代わりに `undefined` が生成されます。

### 返値

ジェネレーターの `next()` メソッドに渡されたオプションの値を返し、その実行を再開します。

> [!NOTE]
> つまり、`next()` は非対称です。常に値を現在中断されている `yield` に送信しますが、次の `yield` のオペランドを返します。最初の `next()` 呼び出しに渡された引数は、現在中断されている `yield` が存在しないため取得できません。

## 解説

`yield` キーワードは、ジェネレーター関数の実行を一時停止し、ジェネレーターの呼び出し元に `yield` キーワードに続く値を返します。これは、 `return` キーワードのジェネレーター版と考えることができます。

`yield` はそれを含むジェネレーター関数の中で直接呼び出すことしかできません。呼び出し先の関数から呼び出すことはできません。

ジェネレーター関数を呼び出すと、{{jsxref("Generator")}} オブジェクトが構築されます。このジェネレーターの {{jsxref("Generator/next", "next()")}} メソッドが呼び出されるたびに、ジェネレーターは実行を再開し、次のいずれかに達するまで実行を続けます。

- `yield` 式。この場合、ジェネレーターは一時停止し、 `next()` メソッドは、[イテレーター結果](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)オブジェクトを返します。このオブジェクトには、 `value` と `done` の 2 つのプロパティがあります。 `value` プロパティは `yield` 演算子の後にある式の値であり、 `done` は `false` で、ジェネレーター関数が完全に終了していないことを示します。
- ジェネレーター関数の終了。この場合、ジェネレーターの処理が終了し、 `next()` メソッドはイテレーター結果オブジェクトを返します。このオブジェクトでは `value` が {{jsxref("undefined")}}、 `done` が `true` となります。
- {{jsxref("Statements/return", "return")}} 文。この場合、ジェネレーターの処理は終了し、 `next()` メソッドはイテレーター結果オブジェクトを返します。このオブジェクトでは、 `value` が指定された返値となり、 `done` は `true` となります。
- {{jsxref("Statements/throw", "throw")}} 文。これは、ジェネレーターの実行が完全に停止し、 `next()` メソッドは指定された例外を発生します。

`yield` 式で一時停止すると、ジェネレーターのコード実行は、ジェネレーターの `next()` メソッドが再度呼び出されるまで停止したままになります。ジェネレーターの `next()` メソッドにオプションの値が渡された場合、その値はジェネレーターの現在の `yield` 操作によって返される値となります。最初の `next()` 呼び出しには、対応する中断された `yield` 操作が持たないため、最初の `next()` 呼び出しで渡された引数を取得する方法はありません。

ジェネレーターの {{jsxref("Generator/return", "return()")}} または {{jsxref("Generator/throw", "throw()")}} メソッドが呼び出された場合、 {{jsxref("Statements/return", "return")}} 文または {{jsxref("Statements/throw", "throw")}} 文が一時停止した `yield` 式で実行されたかのように動作します。ジェネレーター関数本体内で {{jsxref("Statements/try...catch", "try...catch...finally")}} を使用することができます。 `return()` または `throw()` メソッドが呼び出された場合、保留中の `yield` 式が存在しない場合（`next()` がまだ呼び出されていないか、ジェネレーターが既に完了しているため）、早期完了は処理できず、ジェネレーターは常に終了します。

## 例

### yield の使用

次のコードはジェネレーター関数の定義例です。

```js
function* countAppleSales() {
  const saleList = [3, 7, 5];
  for (const sale of saleList) {
    yield sale;
  }
}
```

ジェネレーター関数が定義されると、ご覧のようにイテレーターを構築するために使用されます。

```js
const appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

ジェネレーターには `next(value)` で値を渡すこともできます。`step` は `yield` 式の返値として評価します。ただし、`next()` が最初の時点で呼び出された際にジェネレーターの `next()` メソッドに渡された値は無視されます。

```js
function* counter(value) {
  while (true) {
    const step = yield value++;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 0
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [反復処理プロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- [`function*` 式](/ja/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("Operators/yield*", "yield*")}}
