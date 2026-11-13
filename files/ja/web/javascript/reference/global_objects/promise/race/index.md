---
title: Promise.race()
short-title: race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
l10n:
  sourceCommit: 9bda33365e40b6c609fa5190a0af9b5dc6438cf0
---

**`Promise.race()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを受け取り、単一の {{jsxref("Promise")}} を返します。この返されたプロミスは、最初に決定したプロミスの最終的な状態で決定されます。

{{InteractiveExample("JavaScript デモ: Promise.race()", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // 両方とも解決されるが、promise2 の方が先
});
// 予想される結果: "two"
```

## 構文

```js-nolint
Promise.race(iterable)
```

### 引数

- `iterable`
  - : プロミスの[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）です。これらの値は [await](/ja/docs/Web/JavaScript/Reference/Operators/await) されるため、他の [thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) も解決されますが、thenable ではないものはそのまま返されます。

### 返値

{{jsxref("Promise")}} で、反復可能オブジェクトの最初のプロミスの最終的な状態で**非同期に決定**します。言い換えると、最初に決定されたプロミスが履行されれば履行され、最初に決定されたプロミスが拒否されれば拒否されます．返されるプロミスは、渡された反復可能オブジェクトが空の場合、永久に待機状態になります。渡された反復可能オブジェクトが空ではないが、待機中のプロミスを含んでいなかった場合、返されたプロミスは（同期的ではなく）非同期的に決定されます。

## 解説

`Promise.race()` メソッドは[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)メソッドの 1 つです。これは最初の非同期タスクを完全に完了させたいが、最終的な状態は気にしない（つまり、成功も失敗もあり得る）場合に有用です。

> [!NOTE]
> 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)を参照してください。

反復可能オブジェクトに 1 つ以上の非プロミス値および/または既に確定したプロミスが格納されている場合、 `Promise.race()` は反復可能オブジェクトで最初に見つかった値に確定します。

他のプロミス結合子と同様に、`Promise.race()` は呼び出されると（各プロミスの `.then()` メソッドを呼んで）、すべてのプロミスを直ちに「処理済み」としてマークします。最初の履行後に発生したその後の拒否は無視され、`unhandledrejection` イベントは発生しません。

返されたプロミスが決定されしても、失敗した操作が取り消されたり、それらのプロミスに添付されたハンドラーが解除されたりすることはありません。存続時間の長い待機中のプロミスと存続時間の短いプロミスを繰り返し競合させると、それぞれの競合が解決された後でも、待機中のプロミスにハンドラーが蓄積される可能性があります。

## 例

### Promise.race() の使用

この例では、 `Promise.race()` を使用して、{{domxref("Window.setTimeout", "setTimeout()")}} で実装された複数のタイマーを競わせることができることを示しています。最も時間の短いタイマーが常にレースに勝ち、結果のプロミスの状態となります。

```js
function sleep(time, value, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfill") {
        resolve(value);
      } else {
        reject(new Error(value));
      }
    }, time);
  });
}

const p1 = sleep(500, "one", "fulfill");
const p2 = sleep(100, "two", "fulfill");

Promise.race([p1, p2]).then((value) => {
  console.log(value); // "two"
  // Both fulfill, but p2 is faster
});

const p3 = sleep(100, "three", "fulfill");
const p4 = sleep(500, "four", "reject");

Promise.race([p3, p4]).then(
  (value) => {
    console.log(value); // "three"
    // p3 is faster, so it fulfills
  },
  (error) => {
    // Not called
  },
);

const p5 = sleep(500, "five", "fulfill");
const p6 = sleep(100, "six", "reject");

Promise.race([p5, p6]).then(
  (value) => {
    // Not called
  },
  (error) => {
    console.error(error.message); // "six"
    // p6 is faster, so it rejects
  },
);
```

### Promise.race の非同期性

以下の例では、 `Promise.race` の非同期性を示しています。他のプロミス並行処理メソッドとは異なり、 `Promise.race` は常に非同期です。反復可能オブジェクトが空の場合でも、決して同期的に解決することはありません。

```js
// Promise.race をできるだけ早く起動させるために、
// 解決済みのプロミスの配列を引数として渡しています。
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// 直ちに p の値を出力
console.log(p);

// setTimeout を使用すると、スタックが空になった後でコードが実行される
setTimeout(() => {
  console.log("スタックが空です");
  console.log(p);
});

// ログ（順番に）:
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "fulfilled", <value>: 33 }
```

空の反復可能オブジェクトを渡すと、無限に解決しないプロミスが返されます。

```js
const foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(() => {
  console.log("スタックが空です");
  console.log(foreverPendingPromise);
});

// ログ（順番に）:
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "pending" }
```

反復可能オブジェクトの中に 1 つ以上のプロミス以外の値や、すでに解決したプロミスが含まれていると、 `Promise.race` は配列の中で見つかった最初のこれらの値で解決します。

```js
const foreverPendingPromise = Promise.race([]);
const alreadyFulfilledProm = Promise.resolve(100);

const arr = [foreverPendingPromise, alreadyFulfilledProm, "non-Promise value"];
const arr2 = [foreverPendingPromise, "non-Promise value", Promise.resolve(100)];
const p = Promise.race(arr);
const p2 = Promise.race(arr2);

console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("スタックが空です");
  console.log(p);
  console.log(p2);
});

// ログ（順番に）
// Promise { <state>: "pending" }
// Promise { <state>: "pending" }
// スタックが空です
// Promise { <state>: "fulfilled", <value>: 100 }
// Promise { <state>: "fulfilled", <value>: "non-Promise value" }
```

### Promise.race() を使用してタイムアウトのリクエストを実装

長くなりそうなリクエストを拒否するタイマーを保有し、制限時間が経過したときに、結果のプロミスが自動的に拒否されるようにレースすることができます。

```js
const data = Promise.race([
  fetch("/api"),
  new Promise((resolve, reject) => {
    // Reject after 5 seconds
    setTimeout(() => reject(new Error("Request timed out")), 5000);
  }),
])
  .then((res) => res.json())
  .catch((err) => displayError(err));
```

`data` のプロミスが履行された場合は、 `/api` から取得されたデータが格納されます。`Promise.race` は、敗北したプロミスの決済結果を捕捉して破棄するため、`"Request timed out"` という拒否が未処理のまま上層へ伝播することはありません。そうでない場合は、 `fetch` が 5 秒間待機していた場合に拒否され、 `setTimeout` タイマーとの競争に負けたことになります。

1 つのプロミスの処理が完了しても、2 つ目プロミスの処理が自動的にキャンセルされるわけではなく、単に 2 つ目のプロミスの結果は無視されるだけです。この小さな例では問題にはなりませんが、ネットワーク接続やタイマーなどのリソースが、必要以上に長く保持されたままになってしまいます。リソースを早期に解放するには、タイムアウトが発生した場合は取得処理を中止し、取得に成功した場合はタイムアウトをクリアしてください。可能な限り（取得処理中も含め）、代わりに {{domxref("AbortController")}} API を使用することを推奨します。

### Promise.race() を使用してプロミスの状態を検出

`Promise.race()` は反復可能オブジェクトの中で最初に待機していないプロミスに解決するため、待機しているかどうかを含めてプロミスの状態を調べることができます。この例は [`promise-status-async`](https://github.com/kudla/promise-status-async/blob/master/lib/promiseState.js) から引用しています。

```js
function promiseState(promise) {
  const pendingState = { status: "pending" };

  return Promise.race([promise, pendingState]).then(
    (value) =>
      value === pendingState ? value : { status: "fulfilled", value },
    (reason) => ({ status: "rejected", reason }),
  );
}
```

この関数では、 `promise` が待機中であれば、 2 つ目の値である `pendingState` が、プロミスではなく、レースの結果になります。それ以外の場合、 `promise` が既に決定されていれば、 `onFulfilled` と `onRejected` ハンドラーによってその状態を知ることができるでしょう。例えば次のようになります。

```js
const p1 = new Promise((res) => setTimeout(() => res(100), 100));
const p2 = new Promise((res) => setTimeout(() => res(200), 200));
const p3 = new Promise((res, rej) =>
  setTimeout(() => rej(new Error("失敗")), 100),
);

async function getStates() {
  console.log(await promiseState(p1));
  console.log(await promiseState(p2));
  console.log(await promiseState(p3));
}

console.log("Immediately after initiation:");
getStates();
setTimeout(() => {
  console.log("After waiting for 100ms:");
  getStates();
}, 100);

// ログ出力:
// Immediately after initiation:
// { status: 'pending' }
// { status: 'pending' }
// { status: 'pending' }
// After waiting for 100ms:
// { status: 'fulfilled', value: 100 }
// { status: 'pending' }
// { status: 'rejected', reason: Error: failed }
```

> [!NOTE]
> `promiseState` 関数は非同期で実行されます。プロミスの値を同期的に取得する方法がないからです（つまり、 `then()` や `await` がない場合）、たとえプロミスが既に決定されていたとしてもです。しかし、`promiseState()` は常に 1 ティック以内に履行され、実際にプロミスの決定を待つことはありません。

### Promise.any() との比較

`Promise.race` は最初に決定された {{jsxref("Promise")}} を取ります。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    // promise1 のみが履行されるが、 promise2 の方が早く決定する
    console.error("failed with reason:", reason);
  });
// failed with reason: two
```

{{jsxref("Promise.any")}} は最初に履行された {{jsxref("Promise")}} を取ります。

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

Promise.any([promise1, promise2])
  .then((value) => {
    // promise1 のみが履行されるが、 promise2 の方が早く決定する
    console.log("succeeded with value:", value);
  })
  .catch((reason) => {
    console.error("failed with reason:", reason);
  });
// succeeded with value: one
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.all()")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
