---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: 2eb202adbe3d83292500ed46344d63fbbae410b5
---

{{JSRef}}

**`catch()`** は {{jsxref("Promise")}} オブジェクトのメソッドで、プロミスが拒否されたときに呼び出される関数をスケジュールします。これは即座に同等の {{jsxref("Promise")}} オブジェクトを返すので、他のプロミスのメソッドを[連鎖](/ja/docs/Web/JavaScript/Guide/Using_promises#chaining) して呼び出すことができます。これは {{jsxref("Promise/then", "Promise.prototype.then(undefined, onRejected)")}} の省略形です。

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## 構文

```js-nolint
catch(onRejected)

catch((reason) => {
  // 拒否ハンドラー
})
```

### 引数

- `onRejected`
  - : `Promise` が拒否された時に呼び出される {{jsxref("Function")}} です。この関数は 1 つの引数、 _拒否された理由_ を取ります。

### 返値

新しい {{jsxref("Promise")}} を返します。この新しいプロミスは、現在のプロミスの状態に関係なく、返すときには常に待機状態です。`onRejected` がエラーを発生させるか、それ自身が拒否されたプロミスを返す場合、最終的に拒否されます。そうでなければ、最終的に履行されます。

## 解説

`catch` メソッドは複合したプロミスの複合のエラー処理に使用されます。これは {{jsxref("Promise")}} を返すので、姉妹メソッドである {{jsxref("Promise/then", "then()")}} と同様の方法で[連鎖が可能](/ja/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch)です。

もしプロミスが拒否され、呼び出すべき拒否ハンドラーがない場合（ハンドラーは {{jsxref("Promise/then", "then()")}}, {{jsxref("Promise/catch", "catch()")}}, {{jsxref("Promise/finally", "finally()")}} のいずれかを通して装着されます）、拒否イベントはホストから表面化されます。ブラウザーでは、これは [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event) イベントとして発生します。もし、拒否されたプロミスにハンドラーが装着され、その拒否がすでに `unhandledrejection` イベントを発生していた場合、別の [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event) イベントが発行されます。

`catch()` は内部的に、呼び出されたオブジェクトに対して `then()` を呼び出し、引数として `undefined` と `onRejected` を渡します。その呼び出された値がそのまま返されます。これは、メソッドをラップすればオブザーバーで監視することができます。

```js
// 元の Promise.prototype.then/catch をログを追加するだけ上書きする。
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// 解決済みのプロミスに対する catch の呼び出し
Promise.resolve().catch(function XXX() {});

// ログ出力:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

つまり、`undefined` を渡しても、返されたプロミスは拒否されるため、最終的にプロミスが拒否されないようにするための関数を渡さなければなりません。

`catch()` は `then()` を呼び出すだけなので、サブクラス化に対応しています。

> [!NOTE]
> 下記の例では、[`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) のインスタンスを例外として発生させています。同期 [`throw`](/ja/docs/Web/JavaScript/Reference/Statements/throw) 文と同様、これは良い習慣と考えられています。さもなければ、捕捉を行う部分は引数が文字列かエラーかを調べる必要があり、スタックトレースのような貴重な情報を失う可能性があります。

## 例

### catch メソッドの使用とチェーン化

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"),
    () => console.log("Not fired due to the catch"),
  );

// 以下は、上記と同様に動作します
p1.then((value) => {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch((e) => {
    console.error(e); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"),
    () => console.log("Not fired due to the catch"),
  );
```

### エラーが発生したことを知る

エラーが発生すると、たいていの場合 `catch()` メソッドが呼び出されます。

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

非同期関数内で発生したエラーは、捕捉されないエラーとして扱われます。

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // これは呼び出されない
});
```

`resolve` が呼び出された後に発生したエラーは無視されます。

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // これは呼び出されない
});
```

### プロミスが履行されたときは catch() は呼び出されない

```js
// onReject を呼び出さないプロミスを作る
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // これは呼び出されない
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // 次を呼び出し
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
