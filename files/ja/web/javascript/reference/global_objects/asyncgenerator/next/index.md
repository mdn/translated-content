---
title: AsyncGenerator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

**`next()`** メソッドは、シーケンス内の次の値を返します。

## 構文

```js-nolint
asyncGeneratorObject.next()
asyncGeneratorObject.next(value)
```

### 引数

- `value` {{optional_inline}}
  - : ジェネレーターの内部状態を変更するために使用するオプションの値。`next()` メソッドに渡された値は、`yield` で受け取ります。

### 返値

{{jsxref("Promise")}} で、2 つのプロパティを持つ {{jsxref("Global_Objects/Object", "Object")}} に解決します。

- `done`
  - : 論理値です。
    - `true`: ジェネレーターが制御フローの終端を過ぎている場合。この場合、`value` はジェネレーターの返値を指定します（値が undefined である可能性があります）。
    - `false`: ジェネレーターがもっと多くの値を生成することができる場合。
- `value`
  - : ジェネレーターによってもたらされる、または返される任意の JavaScript 値。

## 例

### next() の使用

次の例は、単純なジェネレーターと `next` メソッドが返すオブジェクトを示しています。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
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
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### ジェネレーターに値を送信

この例では、`next` が値付きで呼び出されます。

> [!NOTE]
> 最初の呼び出しは、ジェネレーターが最初は何も出力しなかったため、何もログ出力しません。

```js
// 非同期タスクです。実際にはもっと有益なことを使用していることを
// 想定してください。
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    await sleep(500);
    const value = yield;
    console.log(value);
  }
}

async function main() {
  const asyncGen = createAsyncGenerator();
  // No log at this step: the first value sent through `next` is lost
  console.log(await asyncGen.next(1)); // { value: undefined, done: false }
  // Logs 2: the value sent through `next`
  console.log(await asyncGen.next(2)); // { value: undefined, done: false }
}

main();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function*", "async function*")}}
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
