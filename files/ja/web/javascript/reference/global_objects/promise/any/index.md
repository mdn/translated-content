---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
l10n:
  sourceCommit: 3f0cd840cd9575701c65b8c6a1e172a2b0c3bd62
---

{{JSRef}}

**`Promise.any()`** は静的メソッドで、入力としてプロミスの反復可能オブジェクトを取り、単一の {{jsxref("Promise")}} を返します。この返されたプロミスは、入力のプロミスのいずれかが履行されたときに、この最初の履行値で履行されます。入力のプロミスがすべて拒否された場合（空の反復可能オブジェクトが渡された場合を含む）、拒否理由の配列を格納した {{jsxref("AggregateError")}} で、拒否されます。

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## 構文

```js-nolint
Promise.any(iterable)
```

### 引数

- `iterable`
  - : プロミスの[反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Iteration_protocols#反復可能プロトコル)（{{jsxref("Array")}} など）です。

### 返値

次のような {{jsxref("Promise")}} です。

- 渡された反復可能オブジェクトが空の場合は、**拒否済み**になります。
- 渡された*反復可能*オブジェクトのいずれかのプロミスが履行された場合、**非同期に履行**されます。履行値は、最初に履行されたプロミスの履行値になります。
- 指定された反復可能オブジェクトにあるすべてのプロミスが拒否された場合、**非同期に拒否**されます。拒否理由は {{jsxref("AggregateError")}} で、その `errors` プロパティに拒否理由の配列が格納されています。エラーは、完了順に関係なく、通過したプロミスの順番になります。渡された反復可能オブジェクトが空でなく、待機中のプロミスを含んでいない場合、返されたプロミスは（同期的ではなく）非同期に拒否されたままです。

## 解説

`Promise.any()` メソッドは[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)メソッドの 1 つです。このメソッドは、最初に履行されたプロミスを返すのに有益なものです。最初のプロミスが履行された後は短絡的に処理するので、一つを見つけると、他のプロミスが完了するのを待つことはありません。

> **メモ:** 日本語の技術文書では、このメソッドが複数のプロミスを並列に処理すると説明されることがありますが、実際には複数のスレッドでプロミスが処理されるわけではないことに注意してください。詳細は[プロミスの並行処理](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#プロミスの並行処理)を参照してください。

{{JSxRef("Promise.all()")}} が履行された値の _配列_ を返すのとは異なり、 1 つの履行値だけを取得します（少なくとも 1 つのプロミスが履行されることを想定しています）。これは、履行されるプロミスが 1 つだけ必要で、どれが履行されるかは気にしない場合、有益なことがあります。もう一つの異なる形に注意してください。このメソッドは、_空の反復可能オブジェクト_ を受け取ると拒否します。なぜなら、正直に言うと、反復処理オブジェクトには、履行されるアイテムが格納されていないからです。`Promise.any()` と `Promise.all()` を {{jsxref("Array.prototype.some()")}} と {{jsxref("Array.prototype.every()")}} で比較することができます。

また、 {{JSxRef("Promise.race()")}} が最初の _決定された_ 値（履行されたか拒否されたか）を返すのとは異なり、このメソッドは最初の _履行された_ 値を返します。このメソッドは、最初に履行されたプロミスまでのすべての拒否されたプロミスを無視します。

## 例

### 最初に履行されるもの

`Promise.any()` は、先に拒否されたプロミスがあったとしても、最初に履行されたプロミスで解決されます。これは {{jsxref("Promise.race()")}} が、最初に決定されたプロミスで解決または拒否されるのとは対照的です。

```js
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast が最初に履行される
});
// ログ出力:
// Done quick
```

### AggregateError での拒否

`Promise.any()` は履行されたプロミスがないと {{jsxref("AggregateError")}} で拒否されます。

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

### 最初に読み込まれた画像の表示

この例では、画像を読み込んで blob を返す関数があります。 `Promise.any()` を使用して二つの画像を読み込み、先に利用可能になった方 (つまり、プロミスが解決された方) を表示します。

```js
async function fetchAndDecode(url, description) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.blob();
  return [data, description];
}

const coffee = fetchAndDecode("coffee.jpg", "Coffee");
const tea = fetchAndDecode("tea.jpg", "Tea");

Promise.any([coffee, tea])
  .then(([blob, description]) => {
    const objectURL = URL.createObjectURL(blob);
    const image = document.createElement("img");
    image.src = objectURL;
    image.alt = description;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.error(e);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.any` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-promise)
- {{JSxRef("Promise")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.race()")}}
