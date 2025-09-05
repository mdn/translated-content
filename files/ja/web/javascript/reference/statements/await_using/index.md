---
title: await using
slug: Web/JavaScript/Reference/Statements/await_using
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

**`await using`** 宣言は、非同期的に破棄されるブロックスコープのローカル変数を宣言します。 {{jsxref("Statements/const", "const")}} と同様に、 `await using` で宣言された変数は初期化が必要であり、再代入できません。変数の値は `null`、`undefined`、または [`[Symbol.asyncDispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) か [`[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) メソッドを持つオブジェクトのいずれかでなければなりません。変数がスコープ外になると、リソースを解放するために、オブジェクトの `[Symbol.asyncDispose]()` または `[Symbol.dispose]()` メソッドが呼び出され待機されます。

## 構文

```js-nolint
await using name1 = value1;
await using name1 = value1, name2 = value2;
await using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : 宣言する変数の名前。各変数名は、 JavaScript で有効な[識別子](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)でなければならず、[構造分解バインドパターン](/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)であってはなりません。
- `valueN`
  - : 変数の初期値。有効な式であれば何でも指定可能ですが、その値は `null`、`undefined`、または `[Symbol.dispose]()` か [`[Symbol.dispose]()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) メソッドを持つオブジェクトのいずれかでなければなりません。

## 解説

この宣言は、{{jsxref("Operators/await", "await")}} と {{jsxref("Statements/using", "using")}} の両方が使用可能な場所でのみ使用できます。これには以下のものがあります。

- [ブロック](/ja/docs/Web/JavaScript/Reference/Statements/block)の中（ブロックが非同期コンテキストの中にある場合）
- 任意の[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)または非同期ジェネレーター関数の本体の中
- [モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位
- [`for`](/ja/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/ja/docs/Web/JavaScript/Reference/Statements/for...of)（`for` ループが非同期コンテキストにある場合）、[`for await...of`](/ja/docs/Web/JavaScript/Reference/Statements/for-await...of) ループの初期化子

`await using` は、変数のスコープ（ブロック、関数、モジュールなど）の存続期間に紐づく非同期破棄可能リソースを宣言します。スコープが終了すると、リソースは非同期的に破棄されます。その構文はやや分かりにくいかもしれません。 というのも、変数が最初に宣言された時点では `await` は待機効果を持たず、変数がスコープ外に出た時にのみ効果を発揮するからです。

変数が最初に宣言され、その値がヌル値でない場合、オブジェクトからディスポーザーが取得されます。まず `[Symbol.asyncDispose]` プロパティが試行され、`[Symbol.asyncDispose]` が `undefined` の場合は `[Symbol.dispose]` が試行されます。いずれのプロパティにも関数が含まれていない場合、`TypeError` が発生します。特筆すべきは、`[Symbol.dispose]()`メソッドが`async () => { object[Symbol.dispose](); }`のような関数にラップされる点です。これは、返値がプロミスであっても、そのプロミスが待機されないことを意味します。このディスポーザーはスコープに保存されます。

変数がスコープ外になると、ディスポーザーが呼び出され待機状態になります。スコープ内に複数の {{jsxref("Statements/using", "using")}} または `await using` 宣言が含まれる場合、宣言の種類に関わらず、すべてのディスポーザーは宣言の逆順で順次実行されます。すべてのディスポーザーの実行は保証されます（{{jsxref("Statements/try...catch", "try...catch...finally")}} 内の `finally` ブロックと同様です）。破棄処理中に発生したエラーはすべて（該当する場合、スコープ終了の原因となった初期エラーを含む）、 1 つの {{jsxref("SuppressedError")}} 内に集約されます。それぞれの先行する例外は `suppressed` プロパティとして、後続の例外は `error` プロパティとして保持されます。破棄処理完了後にこの `SuppressedError` が発生します。

この変数は `null` または `undefined` の値を取ることが許されるため、リソースはオプションとすることができます。このスコープ内で少なくとも 1 つの `await using` 変数が宣言されていれば、変数が実際に `null` または `undefined` の値を持っていたとしても、スコープ終了時に少なくとも 1 つの `await` が実行されることが保証されます。これにより、破棄処理が同期的に発生してタイミングの問題を引き起こすのを防ぎます（`await` の制御フローへの影響については [`await` の制御フローへの影響](/ja/docs/Web/JavaScript/Reference/Operators/await#await_の制御フローの影響)を参照してください）。

`await using` はリソース管理を字句スコープに結び付けます。これは便利であると同時に、時に混乱を招くこともあります。期待通りに動作しない可能性がある例を以下に示します。エラー処理の保証を維持しつつリソースの破棄を手動で管理したい場合は、代わりに {{jsxref("AsyncDisposableStack")}} を使用することができます。

## 例

より多くの例については、特にスコープベースのリソース管理に関する一般的な注意点について、{{jsxref("Statements/using", "using")}} も確認してください。

### 基本的な使い方

通常、`await using` は、既に非同期破棄可能プロトコルを実装しているライブラリー提供のリソースに対して使用します。例えば、Node.js の [`FileHandle`](https://nodejs.org/api/fs.html#filehandlesymbolasyncdispose) は非同期破棄可能です。

```js
import fs from "node:fs/promises";

async function example() {
  await using file = await fs.open("example.txt", "r");
  console.log(await file.read());
  // `file` がスコープ外になる前に、 `file[Symbol.asyncDispose]()` を
  // 呼び出して破棄され、待機される。
}
```

`file` の宣言には 2 つの `await` 操作が含まれており、それぞれ異なる役割を果たし、両方とも必要です。 `await fs.open()` は取得時に待機を行います。ファイルが開かれるのを待機し、返されたプロミスを `FileHandle` オブジェクトに展開します。 `await using file` は破棄時に待機を行います。変数がスコープ外に出た際に `file` を非同期的に破棄します。

### `await using` を `for await...of` で使用

以下の 3 つの構文はとても混乱しやすいです。

- `for await (using x of y) { ... }`
- `for (await using x of y) { ... }`
- `for (using x of await y) { ... }`

それらが一緒に使えることを知ると、さらに混乱するかもしれません。

```js
for await (await using x of await y) {
  // ...
}
```

まず、`await y` は期待どおりに動作します。プロミス `y` を {{jsxref("Operators/await", "await")}} します。このプロミスは解決時にオブジェクトを返すと予想され、そのオブジェクトを反復処理します。このバリエーションはひとまず脇に置いておきましょう。

{{jsxref("Statements/for-await...of", "for await...of")}} ループでは、 `y` オブジェクトが非同期反復可能オブジェクトである必要があります。これは、オブジェクトが `[Symbol.asyncIterator]` メソッドを持ち、そのメソッドが非同期イテレーターを返し、その `next()` メソッドが結果を表すプロミスを返すということです。これは、反復可能オブジェクトが次の値が何であるか、あるいは非同期操作が完了するまで処理が終了したかどうかさえも、その操作が完了するまで知らない場合に備えたものです。

一方、 `await using x` 構文では、反復可能オブジェクトから yield される `x` オブジェクトが非同期ディスポーザーである必要があります。これは、オブジェクトが破棄操作を表すプロミスを返す `[Symbol.asyncDispose]` メソッドを持つ必要があるということです。これは反復処理自体とは別の問題であり、変数 `x` がスコープ外に出たときにのみ呼び出されます。

言い換えれば、以下の 4 つの組み合わせはすべて有効であり、それぞれ異なる動作をします。

- `for (using x of y)`: `y` は同期的に反復処理され、一度に 1 つの結果を返します。この結果は同期的に破棄できます。
- `for await (using x of y)`: `y` は非同期に反復処理され、待機後に一度に 1 つの結果を返しますが、結果の値は同期的に破棄できます。
- `for (await using x of y)`: `y` は同期的に反復処理され、一度に 1 つの結果を返しますが、結果の値は非同期的にのみ破棄されます。
- `for await (await using x of y)`: `y` は非同期に反復処理され、待機後に一度に 1 つの結果を返します。結果の値は非同期にのみ破棄されます。

以下では、 `y` の架空の値をいくつか作成し、その使用可能な場合を示します。非同期 API については、 Node.js の [`fs/promises`](https://nodejs.org/api/fs.html#promises-api) モジュールを基にコードを実装します。

```js
const syncIterableOfSyncDisposables = [
  stream1.getReader(),
  stream2.getReader(),
];
for (using reader of syncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
async function* requestMany(urls) {
  for (const url of urls) {
    const res = await fetch(url);
    yield res.body.getReader();
  }
}
const asyncIterableOfSyncDisposables = requestMany([
  "https://example.com",
  "https://example.org",
]);
for await (using reader of asyncIterableOfSyncDisposables) {
  console.log(reader.read());
}
```

```js
const syncIterableOfAsyncDisposables = fs
  .globSync("*.txt")
  .map((path) => fs.open(path, "r"));
for (await using file of syncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

```js
async function* globHandles(pattern) {
  for await (const path of fs.glob(pattern)) {
    yield await fs.open(path, "r");
  }
}
const asyncIterableOfAsyncDisposables = globHandles("*.txt");
for await (await using file of asyncIterableOfAsyncDisposables) {
  console.log(await file.read());
}
```

### スコープ終了時の暗黙の待機

スコープ内で `await using` が宣言されると、変数が `null` または `undefined` であっても、そのスコープは終了時に常に `await` を実行します。これにより安定した実行順序とエラー処理が保証されます。詳細については、 [await の制御フローへの影響](/ja/docs/Web/JavaScript/Reference/Operators/await#await_の制御フローの影響)の例を参照してください。

以下の例では、関数が返る際に暗黙の `await` が発生するため、`example()` の呼び出しは次のティックまで解決されません。

```js
async function example() {
  await using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// 出力:
// Example call
// Microtask done
// Example done
```

同じコードを、代わりに同期的な {{jsxref("Statements/using", "using")}} を使用した場合を考えてみましょう。今回は `example()` の呼び出しが即座に解決されるため、2つの `then()` ハンドラーは同じティック内で呼び出されます。

```js
async function example() {
  using nothing = null;
  console.log("Example call");
}

example().then(() => console.log("Example done"));
Promise.resolve().then(() => console.log("Microtask done"));
// 出力結果:
// Example call
// Example done
// Microtask done
```

より現実的な例として、関数への 2 つの同時呼び出しを考えてみましょう。

```js
class Resource {
  #name;
  constructor(name) {
    this.#name = name;
  }
  async [Symbol.asyncDispose]() {
    console.log(`Disposing resource ${this.#name}`);
  }
}

async function example(id, createOptionalResource) {
  await using required = new Resource(`required ${id}`);
  await using optional = createOptionalResource
    ? new Resource("optional")
    : null;
  await using another = new Resource(`another ${id}`);
}

example(1, true);
example(2, false);
// 出力結果:
// Disposing resource another 1
// Disposing resource another 2
// Disposing resource optional
// Disposing resource required 1
// Disposing resource required 2
```

ご覧の通り、 `required 2` リソースは `required 1` と同じティックで破棄されます。もし `optional` リソースが冗長な `await` を行わなければ、 `required 2` はより早く破棄され、 `optional` と同時に破棄されていたでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript のリソース管理](/ja/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/let", "let")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("Symbol.asyncDispose")}}
- {{jsxref("AsyncDisposableStack")}}
