---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operators")}}

`yield` キーワードは、ジェネレーター関数 ({{jsxref("Statements/function*", "function*")}} または[古いジェネレーター関数](/ja/docs/Archive/Web/JavaScript/Legacy_generator_function_statement)) を一時停止したり再開したりするために使用します。

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}

## 構文

```js
[rv] = yield[expression];
```

- `expression` {{optional_inline}}
  - : [イテレータープロトコル](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#イテレータープロトコル)経由でジェネレーター関数が返す値を定義します。省略した場合、代わりに `undefined` が返されます。
- `rv` {{optional_inline}}
  - : ジェネレーターの実行を再開する `next()` メソッドに渡したオプションの値を受け取ります。

## 解説

`yield` キーワードは、ジェネレーター関数の実行を一時停止し、ジェネレーターの呼び出し元に `yield` キーワードに続く値を返します。これは、 `return` キーワードのジェネレーター版と考えることができます。

`yield` はそれを含むジェネレーター関数の中で直接しか呼び出すことしかできません。呼び出し先の関数やコールバックから呼び出すことはできません。

`yield` キーワードはジェネレーターの `next()` メソッドを呼び出させ、 `IteratorResult` オブジェクトを返します。これには `value` と `done` の 2 つのプロパティがあります。 `value` プロパティは `yield` 式の評価結果であり、 `done` は `false`、すなわちジェネレーター関数が完全には完了していないことを示します。

`yield` 式によって実行が停止されると、ジェネレーターの `next()` メソッドが呼び出されるまで、ジェネレーターのコード実行は一時停止します。ジェネレーターの `next()` メソッドが呼ばれるたびに、ジェネレーターの実行が再開され、次のうちのいずれかに達するまで実行されます。

- ジェネレーターを再び停止して、ジェネレーターの新しい値を返す `yield`。再度 `next()` が呼ばれると `yield` の直後から実行が再開されます。
- ジェネレーターから例外を発生させるために使用される {{jsxref("Statements/throw", "throw")}}。完全にジェネレーターの実行を停止し、 (通常の例外が発生した場合のように) 呼び出し元で実行が再開されます。
- ジェネレーター関数の末尾。この場合、ジェネレーターの実行は終了し、 `IteratorResult` オブジェクトの `value` に {{jsxref("undefined")}} が、 `done` に `true` が代入されて呼び出し元に返されます。
- {{jsxref("Statements/return", "return")}} ステートメント。この場合はジェネレーターの実行は終了し、 `IteratorResult` オブジェクトの `value` に `return` ステートメントで指定した値が、 `done` に `true` が代入されて呼び出し元に返されます。

ジェネレーターの `next()` メソッドにオプションの値が渡された場合、その値はジェネレーターの現在の `yield` 操作の返値となります。

ジェネレーターのコードパス、 `yield` 演算子、新しい開始値を {{jsxref("Generator.prototype.next()")}} に渡すことで指定することができる機能により、ジェネレーターは大きな力と制御を提供します。

> **警告:** 残念ながら `next()` は非対称ですが、仕方がありません。常に現在中断している `yield` に値を送りますが、次の `yield` のオペランドを返します。

## 例

### yield の使用

次のコードはジェネレーター関数の定義例です。

```js
function* countAppleSales() {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

ジェネレーター関数が定義されると、ご覧のようにイテレーターを構築するために使用されます。

```js
let appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

next(value) でジェネレーターに値を送ることができます。 'step' はこの \[_rv_] = **yield** \[_expression_] の構文では返値として評価されます。

```js
function* counter(value) {
  let step;

  while (true) {
    step = yield ++value;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
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

- [Iterator プロトコル](/ja/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
