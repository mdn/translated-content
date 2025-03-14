---
title: AsyncGenerator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
l10n:
  sourceCommit: 6bd17cb9cbc2d11163617b9f71706e93fdd743c8
---

{{JSRef}}

**`throw()`** は {{jsxref("AsyncGenerator")}} インスタンスのメソッドで、あたかも `throw` 文がジェネレーター本体の中の停止中の位置に挿入されたかのように動作し、エラー状態をジェネレーターに通知して、エラーを処理するか、クリーンアップを実行してそれ自身を閉じることができます。

## 構文

```js-nolint
asyncGeneratorObject.throw(exception)
```

### 引数

- `exception`
  - : 発生される例外。デバッグの用途では、`instanceof` {{jsxref("Error")}} にすると便利です。

### 返値

発生したエラーを捕捉できない場合は、渡された例外で拒否する {{jsxref("Promise")}} を返します。

例外が [`try...catch`](/ja/docs/Web/JavaScript/Reference/Statements/try...catch) で捉えられ、再開してジェネレーターが次の値を生成すると、次の 2 つのプロパティを持つ {{jsxref("Global_Objects/Object", "Object")}} で解決する {{jsxref("Promise")}} を返します。

- `done`
  - : 論理値です。
    - `true`: このジェネレーター関数の制御フローが最後まで達した場合。
    - `false`: このジェネレーターが次の値を生成することができる場合。
- `value`
  - : 次の `yield` 式で生成される値。

## 例

### throw() の使用

次の例では、単純なジェネレーターと、`throw` メソッドを使用して発生したエラーについて示します。エラーは、通常通り {{jsxref("Statements/try...catch", "try...catch")}} ブロックで捕らえることができます。

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
    try {
      await sleep(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = createAsyncGenerator();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("Something went wrong")) // Error: Something went wrong
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function*", "async function*")}}
- [イテレーターとジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)
