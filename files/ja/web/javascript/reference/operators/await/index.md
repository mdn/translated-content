---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{jsSidebar("Operators")}}

**`await`** 演算子はプロミス ({{jsxref("Promise")}}) を待ち、履行値を取得するために使用します。[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)の中、または[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位でのみ使用することができます。

## 構文

```js-nolint
await expression
```

### 引数

- `expression`
  - : 待つ {{jsxref("Promise")}}、[thenable](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)、または何らかの値です。

### 返値

プロミスまたは thenable オブジェクトの履行値、または式が thenable でない場合は、式自身の値。

### 例外

プロミスまたは thenable オブジェクトが拒否された場合、拒否理由の例外が発生します。

## 解説

通常、`await` は {{jsxref("Promise")}} を `expression` として渡して、プロミスをアンラップするために使用します。`await` を用いると、プロミスが決定（つまり、履行または拒否）されるまで、その周囲にある `async` 関数の実行が一時的に停止されます。実行が再開されると、`await`式の値は履行されたプロミスの値になります。

プロミスが拒否された場合、`await` 式は拒否された値で例外を発生します。`await` 式を格納した関数は、[エラーのスタックトレースに表示](#スタックトレースの改善)されます。それ以外の場合、拒否されたプロミスが待機されなかったり、すぐに返されたりすると、呼び出し側の関数はスタックトレースに現れません。

`expression` は {{jsxref("Promise.resolve()")}} と同じように解決されます。常に ネイティブの `Promise` に変換され、待ち受けされます。もし `expression` が以下の場合、

- ネイティブの `Promise`（これは `expression` が `Promise` またはそのサブクラスに属し、かつ `expression.constructor === Promise` であることを意味します）の場合: プロミスは `then()` を呼び出すことなく、直接使用され、ネイティブに待ち受けられます。
- [Thenable オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable)の場合（ネイティブでないプロミス、ポリフィル、プロキシー、子クラス、など）: 新しいプロミスは、ネイティブの [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) コンストラクターで、オブジェクトの `then()` メソッドを呼び出して、`resolve` コールバックを渡すことで生成します。
- Thenable ではない値: 履行済みの `Promise` を構築して使用します。

用いたプロミスが既に履行された場合でも、非同期関数の実行は次のティックまで一時停止します。その間に、非同期関数の呼び出し側が実行を再開します。[下記の例をご覧ください](#await_の制御フローの影響)。

`await` は非同期関数やモジュールの内部でのみ有効であり、それ自体が非同期で、プロミスを返すので、`await` 式はメインスレッドをブロックすることはなく、実際に結果に依存するコード、つまり `await` 式の後に実行を延期するだけです。

## 例

### プロミスの履行を待つ

`Promise` が `await` 式に渡された場合、 `Promise` が履行されて履行値を返すのを待ちます。

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### Thenable オブジェクト

[Thenable オブジェクト](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenable) は同様に履行されます。

```js
async function f() {
  const thenable = {
    then(resolve, _reject) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f();
```

これは同様に拒否されます。

```js
async function f() {
  const thenable = {
    then(resolve, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f();
```

### プロミスへの変換

値が `Promise` でない場合、 `await` は値を解決された `Promise` に変換し、それを待ちます。待ち受ける値に関しては、呼び出し可能な `then` プロパティがない限り、そのアイデンティティは変わりません。

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### 拒否されたプロミスの処理

`Promise` が拒否された場合、拒否された値で例外が発生します。

```js
async function f4() {
  try {
    const z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // 30
  }
}

f4();
```

プロミスを待つ前に [`catch()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) ハンドラーを連結すれば、`try` ブロックなしで拒否されたプロミスを処理することができます。

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response はプロミスが拒否された場合、"default response" になります。
```

これは、`promisedFunction()` が同期的にエラーを発生させることはなく、常に拒否されたプロミスを返すという前提で作られています。これは、適切に設計されたプロミスベースの関数のほとんどがそうであり、通常は次のようになります。

```js
function promisedFunction() {
  // エラーが発生する可能性を最小限にするため、プロミスを即座に返す
  return new Promise((resolve, reject) => {
    // 非同期に何かを行う
  });
}
```

しかし、`promisedFunction()` が同期的にエラーを発生した場合、そのエラーは `catch()` ハンドラーによって捕捉されません。この場合、`try...catch` 文が必要になります。

### 最上位の await

`await` キーワードは、[モジュール](/ja/docs/Web/JavaScript/Guide/Modules)の最上位は単独で（非同期関数の外で）使用することができます。つまり、 `await` を使う子モジュールを持つモジュールは、子モジュールが実行されるのを待ってから、自分自身が実行されるようになります。他の子モジュールの読み込みをブロックすることなく、実行することができます。

以下は、 [Fetch API](/ja/docs/Web/API/Fetch_API) を使用し、 [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文の中で await を指定したシンプルなモジュールの例です。これを含むすべてのモジュールは、コードを実行する前に読み取りが解決するのを待ちます。

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### await の制御フローの影響

コード中（非同期関数でもモジュールでも）で `await` が発生すると、待機中の式が実行され、式の値に依存するすべてのコードは一時停止して[マイクロタスクキュー](/ja/docs/Web/JavaScript/Event_loop)に入れられます。その後、イベントループの次のタスクのためにメインスレッドが解放されます。これは、待ち受ける値がすでに解決されたプロミスであっても、プロミスでなくても起こります。例えば、次のようなコードを考えてみましょう。

```js
async function foo(name) {
  console.log(name, "start");
  console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// First end
// Second start
// Second middle
// Second end
```

この場合、2 つの非同期関数には `await` 式が含まれていないため、実質的には同期的なものです。3 つの文は同じティックで動作します。プロミスを使用した場合、この関数は以下のものに相当します。

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    console.log(name, "middle");
    console.log(name, "end");
    resolve();
  });
}
```

しかし、`await` が 1 つでもあると、その関数は非同期となり、以降の文の実行は次のティックまで延期されます。

```js
async function foo(name) {
  console.log(name, "start");
  await console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// Second start
// Second middle
// First end
// Second end
```

これは次のものに相当します。

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    resolve(console.log(name, "middle"));
  }).then(() => {
    console.log(name, "end");
  });
}
```

余分な `then()` ハンドラーは必要なく、このハンドラーはコンストラクターに渡される実行内容にマージすることができますが、`then()` ハンドラーの存在は、コードが完了するまでに 1 ティック余分にかかるということを意味しています。これは `await` でも同じことが起こります。したがって、`await` は必要なときだけ使用するようにしてください（プロミスをその値にアンラップするため）。

他にも、非同期関数が再開する前にマイクロタスクを実行することができます。この例では、[`queueMicrotask()`](/ja/docs/Web/API/Window/queueMicrotask) を使用して、それぞれの `await` 式が発生したときにマイクロタスクキューを処理する方法を示しています。

```js
let i = 0;

queueMicrotask(function test() {
  i++;
  console.log("microtask", i);
  if (i < 3) {
    queueMicrotask(test);
  }
});

(async () => {
  console.log("async function start");
  for (let i = 1; i < 3; i++) {
    await null;
    console.log("async function resume", i);
  }
  await null;
  console.log("async function end");
})();

queueMicrotask(() => {
  console.log("queueMicrotask() after calling async function");
});

console.log("script sync part end");

// ログ出力:
// async function start
// script sync part end
// microtask 1
// async function resume 1
// queueMicrotask() after calling async function
// microtask 2
// async function resume 2
// microtask 3
// async function end
```

この例では、非同期関数が再開される前に常に `test()` 関数が呼び出されるので、それぞれがスケジュールするマイクロタスクは常に絡み合うように実行されます。一方、`await` と `queueMicrotask()` はどちらもマイクロタスクをスケジュールするので、実行順序は常にスケジューリングの順序に基づきます。このため、"queueMicrotask() after calling async function" のログ出力は、非同期関数が最初の時刻に再開した後に行われます。

### スタックトレースの改善

非同期関数からプロミスを直接返す場合、`await` が省略されることがあります。

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

しかし、`lastAsyncTask` にて非同期にエラーが発生する場合を考えてみましょう。

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function noAwait() {
  return lastAsyncTask();
}

noAwait();

// Error: failed
//    at lastAsyncTask
```

スタックトレースには `lastAsyncTask` だけが現れますが、これはプロミスが `noAwait` から既に返された後に拒否されたためです。ある意味、プロミスは `noAwait` と無関係と言えます。スタックトレースを改善するには、`await` を使用してプロミスをアンラップし、例外が現在の関数に使用されるようにすることができます。例外はすぐに新しい拒否されたプロミスにラップされますが、エラー作成中に呼び出し側がスタックトレースに現れます。

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function withAwait() {
  return await lastAsyncTask();
}

withAwait();

// Error: failed
//    at lastAsyncTask
//    at async withAwait
```

ただし、`return await` を使うと、プロミスのラップを解除して再度ラップする必要があるため、パフォーマンス上のペナルティが少しあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}} オブジェクト
- [最上位の await](https://v8.dev/features/top-level-await) on v8.dev (2019 年 10 月 8 日)
