---
title: Promise.allSettled()
short-title: allSettled()
slug: Web/JavaScript/Reference/Global_Objects/Promise/allSettled
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

**`Promise.allSettled()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを受け取り、単一の {{jsxref("Promise")}} を返します。この返されたプロミスは、入力のすべてのプロミスが決定したとき（空の反復可能オブジェクトが渡された場合を含む）に履行され、各プロミスの結果を記述するオブジェクトの配列が返されます。

{{InteractiveExample("JavaScript デモ: Promise.allSettled()", "taller")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, "foo"),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// 予想される結果:
// "fulfilled"
// "rejected"
```

## 構文

```js-nolint
Promise.allSettled(iterable)
```

### 引数

- `iterable`
  - : プロミスの[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）です。これらの値は [await](/ja/docs/Web/JavaScript/Reference/Operators/await) されるため、他の [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) も解決されますが、thenable ではないものはそのまま返されます。

### 返値

次のような {{jsxref("Promise")}} です。

- *反復可能*オブジェクトが空であった場合は、**履行済み**になります。
- 渡された*反復可能*オブジェクトのすべてのプロミスが（履行または拒否に）決定したとき、**非同期に履行されます**。履行されたプロミスの値はオブジェクトの配列で、それぞれが反復可能なオブジェクトの中の一つのプロミスの結果を記述しています。それぞれの成果オブジェクトには、以下のようなプロパティがあります。
  - `status`
    - : 文字列で、 `"fulfilled"` （履行）または `"rejected"` （拒否）をとり、そのプロミスの最終的な状態を示します。
  - `value`
    - : `status` が `"fulfilled"` の場合のみ存在します。プロミスが履行された値です。
  - `reason`
    - : `status` が `"rejected"` の場合のみ存在します。プロミスが拒否された理由です。

渡された `iterable` が空でなく、待機中のプロミスを含んでいない場合、返されたプロミスは（同期ではなく）非同期に履行されます。

## 解説

`Promise.allSettled()` メソッドは[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理) メソッドの 1 つです。`Promise.allSettled()` は、通常、正常に完了するために互いに依存しない複数の非同期タスクがある場合、または各プロミスの結果を常に知りたい場合に使用されます。

> [!NOTE]
> 訳注: 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)を参照してください。

それに対して、 {{jsxref("Promise.all()")}} が返すプロミスは、タスクが他にも依存している場合や、どれかが拒否されたらすぐに拒否したい場合により適しているかもしれません。

## 例

### Promise.allSettled の使用

```js
Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```

同時に、結果を構造分解して、それぞれの解決結果を一つずつの変数に格納するようにもできます。

```js
const [status1, status2] = Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
]);

// status1 = { status: 'fulfilled', value: 33 }
// status2 = { status: 'fulfilled', value: 66 }
```

結果を構造分解する場合、結果の変数の順序を入力プロミスの順序と同じにしなければなりません。順序が一致しないと、見落としやすいバグが発生することがあります。{{jsxref("Promise.allSettledKeyed()")}} メソッドは、それぞれの入力と出力をキーに関連付けることで、この問題を避けることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.allSettled` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-promise)
- [es-shims による `Promise.allSettled` のポリフィル](https://www.npmjs.com/package/promise.allsettled)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)ガイド
- [プロミスを使った行儀のよい非同期のプログラミング](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises)
- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettledKeyed()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
