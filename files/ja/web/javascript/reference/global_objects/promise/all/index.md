---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: 850c667d5df58af4f13085d82ecfff17b24187a7
---

{{JSRef}}

**`Promise.all()`** は静的メソッドで、入力としてプロミスの集合の反復可能オブジェクトを取り、単一の {{jsxref("Promise")}} を返します。この返却されたプロミスは、入力されたプロミスがすべて履行されたとき（空のイテレーターが渡されたときを含む）、その履行された値の配列で、履行されます。入力されたプロミスのいずれかが拒否されると、その最初の拒否理由とともに拒否されます。

{{EmbedInteractiveExample("pages/js/promise-all.html")}}

## 構文

```js-nolint
Promise.all(iterable)
```

### 引数

- `iterable`
  - : [反復可能](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)オブジェクト（プロミスの配列 ({{jsxref("Array")}}) など）。

### 返値

次のような {{jsxref("Promise")}} です。

- *反復可能*オブジェクトが空であった場合は、**履行済み**になります。
- 渡された*反復可能*オブジェクトのすべてのプロミスが履行されたとき、**非同期に履行されます**。履行された値は、完了順に関係なく、渡されたプロミスの順番で、履行された値の配列となります。渡された*反復可能*オブジェクトが空ではないが、待機中のプロミスがなかった場合、返されたプロミスは（同期的ではなく）非同期的に履行されることに変わりはありません。
- 渡された*反復可能*オブジェクトのいずれかが拒否された場合は、**非同期に拒否されます**。拒否理由は、最初に拒否されたプロミスの拒否理由になります。

## 解説

`Promise.all()` メソッドは、[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)メソッドのうちの一つです。このメソッドは、複数のプロミスの結果を集約するのに便利です。このメソッドは、コード全体が正常に動作するために依存している複数の関連する非同期タスクがあり、コードの実行を続ける前にそれらすべてを履行させたい場合によく使われます。

> **メモ:** 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)を参照してください。

`Promise.all()` は、入力されたプロミスの**いずれか**が拒否されると直ちに拒否されます。それに対して、{{jsxref("Promise.allSettled()")}} が返すプロミスは、入力されたプロミスのいずれかが拒否されたかどうかに関わらず、すべての入力されたプロミスが完了するのを待ちます。入力された反復可能オブジェクトに含まれるプロミスのすべての最終結果が必要な場合は、`allSettled()` を使用してください。

## 例

### Promise.all() の使用

`Promise.all` はすべての履行（または最初の拒否）を待ちます。

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
```

*反復可能*オブジェクトにプロミスではない値が含まれる場合は無視されますが、（プロミスが履行された場合）返されるプロミスの配列の値にはカウントされます。

```js
// すべての値がプロミスでないため、返されたプロミスは履行される
const p = Promise.all([1, 2, 3]);
// 唯一の入力プロミスはすでに履行されているたので、
// 返されたプロミスは履行される
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// 1 つの（そして唯一の）入力プロミスが拒否される。
// したがって、返されたプロミスも拒否される。
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

// setTimeout を使うことで、キューが空になってからコードを実行することができる
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// ログ出力
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
```

### Promise.all の非同期性・同期性

以下の例では `Promise.all` の非同期性（または渡された*反復可能*オブジェクトが空の場合、同期性）を実演します。

```js
// Promise.all をできるだけ早く使用するために、
// すでに解決されたプロミスの配列を渡す
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(resolvedPromisesArray);
// p の値を直接ログ出力
console.log(p);

// setTimeout を使用してスタックが空になった後にコードを実行することができる
setTimeout(() => {
  console.log("キューが空になりました");
  console.log(p);
});

// Logs, in order:
// Promise { <state>: "pending" }
// キューが空になりました
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

`Promise.all` が拒否されたときも同じことが起きます。

```js
const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
const p = Promise.all(mixedPromisesArray);
console.log(p);
setTimeout(() => {
  console.log("キューが空になりました");
  console.log(p);
});

// ログ出力
// Promise { <state>: "pending" }
// キューが空になりました
// Promise { <state>: "rejected", <reason>: 44 }
```

しかし、`Promise.all` は渡された*反復可能*オブジェクトが空の場合だけ同期的に解決します。

```js
const p = Promise.all([]); // 直ちに解決される
const p2 = Promise.all([1337, "hi"]); // プロミスではない値は無視されるが、評価は非同期に行われる
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("キューが空になりました");
  console.log(p2);
});

// ログ出力:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// キューが空になりました
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Promise.all() と非同期関数の使用

[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)内では、コードを「過剰に待つ」ことはとてもよくあることです。例えば、以下のような関数が指定されたとします。

```js
function promptForDishChoice() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>What would you like to eat?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pasta">Pasta</option>
    <option value="salad">Salad</option>
  </select>
  <menu>
    <li><button value="cancel">Cancel</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("User cancelled dialog"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

async function fetchPrices() {
  const response = await fetch("/prices");
  return await response.json();
}
```

次のように関数を書くかもしれません。

```js example-bad
async function getPrice() {
  const choice = await promptForDishChoice();
  const prices = await fetchPrices();
  return prices[choice];
}
```

ただし、`promptForChoice` と `fetchPrices` の実行は、互いの結果には依存しないことに注意してください。ユーザーが料理を選んでいる間、バックグラウンドで価格が取得されても問題ありませんが、上記のコードでは [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) 演算子によって選択が行われるまで非同期関数が一時停止し、その後価格が取得されるまで再度一時停止します。`Promise.all` を使用すれば、結果が指定される前にユーザーが価格の取得を待たずに、これらを並行して実行することができます。

```js example-good
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice(),
    fetchPrices(),
  ]);
  return prices[choice];
}
```

`Promise.all` はエラー処理が直感的であるため、ここでの[並行処理メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)には最適な選択です。もしいずれかのプロミスが拒否されたら、結果がもう利用できなくなり、 await 式全体が例外を発生します。

`Promise.all` はプロミスの反復可能オブジェクトを受け入れるので、いくつかの非同期関数の実行を並列化するために使用するには、非同期関数を呼び出して返されたプロミスを使用する必要があります。関数はプロミスではないので、 `Promise.all` に直接渡しても動作しません。

```js example-bad
async function getPrice() {
  const [choice, prices] = await Promise.all([
    promptForDishChoice,
    fetchPrices,
  ]);
  // `choice` および `prices` は元と同じ非同期関数です。
  // Promise.all() はプロミスでないものには何もしません。
}
```

### Promise.all のフェイルファストの挙動

`Promise.all` は要素のひとつでも拒否されると拒否します。例えば、タイムアウト後に 4 つのプロミスが解決しても、 1 つのプロミスが直ちに拒否された場合、 `Promise.all` は直ちに拒否されます。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("one"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("two"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("three"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("four"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("reject"));
});

// .catch の使用
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// ログ出力:
// "reject"
```

この動作は失敗する可能性を制御することで変更することができます。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Promise.allSettled()")}}
- {{jsxref("Promise.any()")}}
- {{jsxref("Promise.race()")}}
