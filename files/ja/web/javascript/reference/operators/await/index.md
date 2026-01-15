---
title: await 演算子
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

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
async function f2() {
  const thenable = {
    then(resolve) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f2();
```

これは同様に拒否されます。

```js
async function f2() {
  const thenable = {
    then(_, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f2();
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
    const z = await Promise.reject(new Error("rejected!"));
  } catch (e) {
    console.error(e); // Error: rejected!
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

以下は、 [Fetch API](/ja/docs/Web/API/Fetch_API) を使用し、 [`export`](/ja/docs/Web/JavaScript/Reference/Statements/export) 文の中で await を指定したモジュールの例です。これを含むすべてのモジュールは、コードを実行する前に読み取りが解決するのを待ちます。

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### await の制御フローの影響

コード（非同期関数またはモジュール内）で `await` に出会うと、 await の対象となる式が実行され、その式の値に依存するすべてのコードは一時停止されます。制御は関数を終了し、呼び出し側に戻ります。待機中の式の値が解決されると、一時停止したコードを続ける別の [マイクロタスク](/ja/docs/Web/JavaScript/Reference/Execution_model)がスケジュールされます。これは、待機中の値がすでに解決済みのプロミスであったり、プロミスではなかったりする場合でも行われます。実行は、スケジュール済みの他のすべてのマイクロタスクが処理されるまで、現在の関数に戻りません。例えば、次のコードを考えてみましょう。

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

この場合、関数 `foo` は、`await` 式が含まれていないため、効果は同期的です。 3 つの文は同じ刻みで実行されます。したがって、 2 つの関数呼び出しは、すべての文を順番に実行します。プロミスの場合、この関数は次のように表されます。

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

余分な `then()` ハンドラーは、非同期操作を待機しないため、コンストラクターに渡された実行者と統合することができます。ただし、このハンドラーが存在すると、 `foo` が呼び出されるたびにコードが 1 つのマイクロタスクに分割されます。これらのマイクロタスクは、相互に絡み合ってスケジュールされ、実行されます。これにより、コードの速度が低下したり、不要なレースコンディションが発生したりする可能性があります。したがって、 `await` は必要な場合（プロミスをその値にラップ解除する場合）にのみ使用してください。

マイクロタスクは、プロミスの解決だけでなく、それ以外のウェブ API によってもスケジュールされ、同じ優先度で実行されます。この例では、 {{domxref("Window.queueMicrotask()", "queueMicrotask()")}} を使用して、各 `await` 式が検出されたときにマイクロタスクキューがどのように処理されるかを示しています。

```js
let i = 0;

queueMicrotask(function test() {
  i++;
  console.log("マイクロタスク", i);
  if (i < 3) {
    queueMicrotask(test);
  }
});

(async () => {
  console.log("非同期関数開始");
  for (let i = 1; i < 3; i++) {
    await null;
    console.log("非同期関数再開", i);
  }
  await null;
  console.log("非同期関数終了");
})();

queueMicrotask(() => {
  console.log("非同期関数の呼び出し後の queueMicrotask()");
});

console.log("スクリプトの同期部分の終了");

// ログ出力:
// 非同期関数開始
// スクリプトの同期部分の終了
// マイクロタスク 1
// 非同期関数再開 1
// 非同期関数の呼び出し後の queueMicrotask()
// マイクロタスク 2
// 非同期関数再開 2
// マイクロタスク 3
// 非同期関数終了
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

一般的な認識に反して、 `return await promise` は、仕様とエンジンがネイティブプロミスの解決を最適化するため、 `return promise` と同等以上の速度です。 [`return promise` の高速化](https://github.com/tc39/proposal-faster-promise-adoption)の提案があり、[V8 の async 関数の最適化](https://v8.dev/blog/fast-async)についても読むことができます。したがって、コーディングスタイル上の理由がない限り、 `return await` を常に推奨します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}} オブジェクト
- [最上位の await](https://v8.dev/features/top-level-await) (v8.dev, 2019)
- [typescript-eslint rule: `return-await`](https://typescript-eslint.io/rules/return-await/)
