---
title: Promise.withResolvers()
slug: Web/JavaScript/Reference/Global_Objects/Promise/withResolvers
l10n:
  sourceCommit: 6af0c0d0b640e756765976ad854f4cc64c2f911c
---

{{JSRef}}

**`Promise.withResolvers()`** 静的メソッドは、新しい {{jsxref("Promise")}} オブジェクトと、{{jsxref("Promise/Promise", "Promise()")}} コンストラクターの実行子に渡す 2 つの引数に対応する、解決または拒否の 2 つの関数を含むオブジェクトを返します。

## 構文

```js-nolint
Promise.withResolvers()
```

### 引数

なし。

### 返値

以下のプロパティを格納するプレーンオブジェクトです。

- `promise`
  - : {{jsxref("Promise")}} オブジェクトです。
- `resolve`
  - : プロミスが解決されたときの関数です。意味付けについては {{jsxref("Promise/Promise", "Promise()")}} コンストラクターのリファレンスを参照してください。
- `reject`
  - : プロミスが拒否されたときの関数です。意味付けについては {{jsxref("Promise/Promise", "Promise()")}} コンストラクターのリファレンスを参照してください。

## 解説

`Promise.withResolvers()` は以下のコードと全く同じです。

```js
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});
```

ただし、より簡潔であり、{{jsxref("Statements/let", "let")}} を使用する必要はありません。

`Promise.withResolvers()` を使用する場合の主な違いは、解決関数や拒否関数を実行環境で一度ずつ作成して使用するのではなく、プロミス自身と同じスコープで使用することです。これにより、特にストリームやキューで繰り返し発生するイベントに使用する場合など、より高度な用途が可能になります。また、これは一般的に、実行環境内で多くのロジックをラップするよりも入れ子が少なくなります。

`Promise.withResolvers()` は汎用的であり、サブクラスに対応しています。つまり、`Promise` のサブクラスで呼び出すことができ、その結果にはサブクラスの型のプロミスが格納されます。そのためには、サブクラスのコンストラクターは [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターと同じシグネチャを実装する必要があります。`resolve` と `reject` コールバックを引数として呼び出される単一の実行関数を受け入れます。

## 例

### ストリームを非同期反復可能オブジェクトに変換

`Promise.withResolvers()` の使用する用途は、プロミスの実行環境内にラップできないイベントリスナーによって解決または拒否されたプロミスがある場合です。次の例は、Node.js の[読み取り可能なストリーム](https://nodejs.org/api/stream.html#class-streamreadable)を[非同期反復可能オブジェクト](/ja/docs/Web/JavaScript/Reference/Statements/async_function*)に変換します。ここでの各プロミスは利用できるデータの単一のバッチを表し、現在のバッチが読み込まれるたびに、次のバッチのために新しいプロミスが作成されます。イベントリスナーは一度しかアタッチされませんが、実際には毎回、`resolve` 関数と `reject` 関数の異なるバージョンを呼び出していることに注意してください。

```js
async function* readableToAsyncIterable(stream) {
  let { promise, resolve, reject } = Promise.withResolvers();
  stream.on("error", (error) => reject(error));
  stream.on("end", () => resolve());
  stream.on("readable", () => resolve());

  while (stream.readable) {
    await promise;
    let chunk;
    while ((chunk = stream.read())) {
      yield chunk;
    }
    ({ promise, resolve, reject } = Promise.withResolvers());
  }
}
```

### Promise 以外のコンストラクターに対する withResolvers() の呼び出し

`Promise.withResolvers()` は汎用メソッドです。これは `Promise()` コンストラクターと同じシグネチャを実装した任意のコンストラクターで呼び出すことができます。例えば、 `console.log` を `resolve` と `reject` 関数として `executor` に渡すコンストラクターに対して呼び出すことができます。

```js
class NotPromise {
  constructor(executor) {
    // "resolve" 関数と "reject" 関数はネイティブのプロミスと同じような
    // 振る舞いはしませんが、Promise.withResolvers() はそれらをそのまま返します。
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

const { promise, resolve, reject } = Promise.withResolvers.call(NotPromise);
resolve("hello");
// Logs: Resolved hello
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Promise.withResolvers` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#promisewithresolvers)
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)ガイド
- {{jsxref("Promise")}}
- [`Promise()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
