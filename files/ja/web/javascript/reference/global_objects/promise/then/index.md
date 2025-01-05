---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 5c55770dc681e7855fe960cf6a725d4c7be4e95f
---

{{JSRef}}

**`then()`** は {{jsxref("Promise")}} インスタンスのメソッドであり、最大 2 つの引数として、この `Promise` が成功した場合と失敗した場合のコールバック関数を取ります。コールバックは、それが呼び出されたプロミス内に格納され、すぐに別の {{jsxref("Promise")}} オブジェクトを返値において返し、他のプロミスのメソッドに対する[連鎖](/ja/docs/Web/JavaScript/Guide/Using_promises#連鎖)呼び出しを行うことができます。

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## 構文

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### 引数

- `onFulfilled`

  - : このプロミスが履行されたときに非同期に呼び出される関数です。この返値は、`then()` から返されるプロミスの履行値になります。この関数は以下の引数と共に呼び出されます。

    - `value`
      - : このプロミスが履行されたときの値。

    これが関数ではない場合は、内部的に、履行された値を送るための _恒等_ 関数 (`(x) => x`) に置き換えられます。

- `onRejected` {{optional_inline}}

  - : このプロミスが拒否されたときに非同期に呼び出される関数です。この返値は、`then()` から返されるプロミスの履行値になります。この関数は以下の引数と共に呼び出されます。

    - `reason`
      - : こプロミスが拒否されたときの値。

    これが関数ではない場合は、内部的に引数として受け取ったエラーを投げる _スロワー_ 関数 (`(x) => { throw x; }`) に置き換えられます。

### 返値

新しい {{jsxref("Promise")}} をすぐに返します。この新しいプロミスは、現在のプロミスの状態に関係なく、返すときには常に待機状態です。

`onFulfilled` と `onRejected` ハンドラーのいずれかが実行され、現在のプロミスの履行されたか拒否されたかが処理されます。この呼び出しは、現在のプロミスが既に決定されている場合でも、常に非同期で行われます。返されたプロミス（`p` と呼ぶ）の振る舞いは、ハンドラーの実行結果に依存し、一連の特定のルールに従います。もしハンドラー関数が、

- 値を返した場合、 `p` は返値をその値として履行されます。
- 何も返さなかった場合、 `p` は `undefined` をその値として履行されます。
- エラーを投げた場合、 `p` はその値としてエラーを投げて拒否されます。
- すでに履行されたプロミスを返した場合、 `p` は、そのプロミスの値をその値として履行されます。
- すでに拒否されたプロミスを返した場合、 `p` は、そのプロミスの値をその値として拒否されます。
- 他の待機状態のプロミスオブジェクトを返した場合、 `p` は待機中となり、そのプロミスが履行/拒否された直後にそのプロミスの値として履行/拒否されたプロミスとなります。

## 解説

`then()` メソッドは、プロミスの最終的な完了（履行されるか拒否されるか）のためにコールバック関数をスケジュールします。これはプロミスの基本メソッドです。[Thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) プロトコルはすべてのプロミス型オブジェクトが `then()` メソッドを公開することを想定しており、{{jsxref("Promise/catch", "catch()")}} と {{jsxref("Promise/finally", "finally()")}} メソッドは、どちらもオブジェクトの `then()` メソッドを呼び出すことで動作するようになっています。

`onRejected` ハンドラーの詳細については、 {{jsxref("Promise/catch", "catch()")}} のリファレンスを参照してください。

`then()` は新しいプロミスオブジェクトを返しますが、呼び出されたプロミスオブジェクトを変更し、ハンドラーを内部リストに追加します。 したがって、ハンドラーは元のプロミスによって保持され、その寿命は少なくとも元のプロミスの寿命と同じ長さになります。 例えば、次の例では、返されたプロミスが保持されないにもかかわらず、最終的にはメモリーを使い果たします。

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

`then()` は、新しいプロミスオブジェクトを返すことです。
同じプロミスオブジェクトで `then()` メソッドを 2 回呼び出すと（連鎖するのではなく）、このプロミスオブジェクトは 2 組の決定ハンドラーを保有することになります。同じプロミスオブジェクトに付けられたすべてのハンドラーは、常に追加された順番に呼び出されます。さらに、 `then()` の各呼び出しによって返される 2 つのプロミスは、別個の連鎖を始め、お互いの決定を待つことはありません。

`then()` チェーンに沿って発生する [Thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) オブジェクトは常に[解決](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#resolver_function)されます。`onFulfilled` ハンドラーは thenable オブジェクトを決して受け取らず、いずれかのハンドラーによって返される thenable は常に次のハンドラーに渡される前に解決されます。これは、新しいプロミスを構築するときに、 `executor` から渡された `resolve` 関数と `reject` 関数が保存され、現在のプロミスが決定したときに、それぞれの関数が履行された値または拒絶の理由とともに呼び出されるからです。解決ロジックは、 {{jsxref("Promise/Promise", "Promise()")}} コンストラクターから渡されるリゾルバー関数から決まります。

`then()` はサブクラス化に対応しており、`Promise` のサブクラスのインスタンスに対して呼び出すことができ、その結果はサブクラスの型のプロミスになります。返す値の種類は [`[Symbol.species]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) プロパティでカスタマイズすることができます。

## 例

### then() メソッドの使用

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.error(reason); // Error!
  },
);
```

### どちらかの引数に関数以外を指定

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### 連鎖

`then` メソッドは `Promise` を返すので、メソッド連鎖ができます。

関数が `then` にハンドラーとして渡されると `Promise` を返します。同じ `Promise` がメソッド連鎖の次の `then` に現れます。次のスニペットは、非同期実行をシミュレートする、 `setTimeout` 関数付きのコードです。

```js
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

`then()` から返される値は、{{jsxref("Promise.resolve()")}} と同じ方法で解決されます。つまり、[Thenable オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)が対応していて、返値がプロミスでない場合は、暗黙のうちに `Promise` でラップされ、その後解決されます。

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, "- A synchronous value works"); // 2 - A synchronous value works
});

p2.then((value) => {
  console.log(value); // 1
});
```

`then` の引数として渡した関数が拒否されたプロミスを返した場合や、例外（エラー）が発生した場合は、拒否されたプロミスを返します。

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("Not called.");
    },
    (error) => {
      console.error(`onRejected function called: ${error.message}`);
    },
  );
```

現実的には、[`catch()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) を使って拒否されたプロミスを捕捉する方が、 `then()` の 2 つの引数の構文を使って処理するよりも現実的です。下記の例を見てください。

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .catch((error) => {
    console.error(`onRejected function called: ${error.message}`);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

他にもすべての場合において、返されたプロミスは最終的に履行されます。以下の例では、最初の `then()` は、チェーン内の前のプロミスが拒否されたにもかかわらず、履行されたプロミスに包まれた `42` を返します。

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected は履行されたプロミスにラップされた 42 を返す
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

もし `onFulfilled` がプロミスを返した場合、 `then` の返値はそのプロミスの最終的な状態に基づいて履行される/拒否されることになります。

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("resolved", v); // "resolved", 10
  },
  (e) => {
    // not called
    console.error("rejected", e);
  },
);

const p3 = p1.then(() => {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // not called
    console.log("resolved", v);
  },
  (e) => {
    console.error("rejected", e); // "rejected", 'Error'
  },
);
```

プロミスベースの API を使用する関数を別の関数の上に実装するために、チェーニングを使用することができます。

```js
function fetchCurrentData() {
  // fetch() API はプロミスを返します。この関数は
  // 同様のAPIを公開していますが、この関数の
  // プロミスの履行された値には、より多くの作業が
  // 施されていることが特徴です。
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // おそらく j で何かをする

    // fulfillment value given to user of
    // fetchCurrentData().then()
    return j;
  });
}
```

### then() の非同期性

以下は `then` メソッドの非同期性を示す例である。

```js
// 例として解決済みのプロミス 'resolvedProm' を使用すると、
// 関数呼び出し 'resolvedProm.then(...)' は直ちに新しいプロミスを返しますが、
// そのハンドラー '(value) => {...}' は console.log で示されるように非同期に呼ばれることになります。
// 新しいプロミスは 'thenProm' に代入され、
// thenProm はハンドラーが返す値で解決されます。
const resolvedProm = Promise.resolve(33);
console.log(resolvedProm);

const thenProm = resolvedProm.then((value) => {
  console.log(
    `this gets called after the end of the main stack. the value received is: ${value}, the value returned is: ${
      value + 1
    }`,
  );
  return value + 1;
});
console.log(thenProm);

// setTimeout を使用すると、スタックが空になった瞬間まで関数の実行を延期することができる
setTimeout(() => {
  console.log(thenProm);
});

// Logs, in order:
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received is: 33, the value returned is: 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
