---
title: AsyncGenerator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/return
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

**`return()`** は {{jsxref("AsyncGenerator")}} インスタンスのメソッドで、あたかも `return` 文がジェネレーター本体の中の停止中の位置に挿入されたかのように動作し、ジェネレーターを終了して、[`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) ブロックと組み合わせた際に、ジェネレーターが任意のクリーンアップタスクを実行できるようにします。

## 構文

```js-nolint
asyncGeneratorObject.return(value)
```

### 引数

- `value`
  - : 返す値です。

### 返値

{{jsxref("Promise")}} で、2 つのプロパティを持つ {{jsxref("Global_Objects/Object", "Object")}} に解決します。

- `done`
  - : 論理値です。
    - `true`: ジェネレーター関数の制御フローが最後に達した場合。
    - `false`: ジェネレーター関数の制御フローが最後に達しておらず、さらに値を生成できる場合。これは `return` が [`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) で捉えられ、さらに `finally` ブロックの中に `yield` 式がある場合のみ起こりえます。
- `value`
  - : 引数として指定された値、または `yield` 式が [`try...finally`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally-block) でラップされている場合、 `finally` ブロックから得られる/返す値を返します。

## 解説

`return()` メソッドは、呼び出されると、ジェネレーター本体の現在の停止位置に `return value;` 文が挿入されたように見ることができます（ここで `value` は `return()` メソッドを渡す値です）。したがって、典型的なフローでは、 `return(value)` を呼び出すと、 `{ done: true, value: value }` が 返されます。しかし、`yield` 式が `try...finally` ブロックでラップされている場合、制御フローは関数本体を抜けず、代わりに `finally` ブロックに進みます。この場合、`finally` ブロックの中にさらに `yield` 式があれば、返す値は異なり、`done` は `false` になる可能性もあります。

## 例

### return() の使用

次の例は、単純な非同期ジェネレーターと `return` メソッドを示しています。

```js
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1);
  yield delayedValue(500, 2);
  yield delayedValue(500, 3);
}

const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.return("foo").then((res) => console.log(res)); // { value: "foo", done: true }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### ジェネレーターが完了した時に return() を一度使用

引数 `value` が `return()` メソッドに渡されない場合、プロミスは [next()](/ja/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next) メソッドを呼び出したかのように解決します。この例では、ジェネレーターは完全に終了しているので、返される値は `undefined` となります。

ジェネレーターが "completed" 状態になった後でも `return()` は呼び出すことができますが、ジェネレーターはこの状態のままとなります。

```js
async function* createAsyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
// value is returned undefined, as no value is passed and generator is 'done'
asyncGen.return().then((res) => console.log(res)); // { value: undefined, done: true }
// we can still return a value once the generator is complete
asyncGen.return(1).then((res) => console.log(res)); // { value: 1, done: true }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function*", "async function*")}}
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
