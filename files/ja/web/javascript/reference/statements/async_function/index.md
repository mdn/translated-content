---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

**`async function`** 宣言は、与えられた名前で新しい非同期関数の{{Glossary("binding","バインド")}}を作成します。その関数の本体の中では `await` キーワードを使うことができ、ます。`async` および `await` キーワードを使用することで、プロミスベースの非同期の動作を、プロミスチェーンを明示的に構成する必要なく、よりすっきりとした方法で書くことができます。

非同期関数は [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)を使用して定義することもできます。

{{InteractiveExample("JavaScript デモ: async function 宣言", "taller")}}

```js interactive-example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // 予想される結果: "resolved"
}

asyncCall();
```

## 構文

```js-nolint
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> 改行を `async` と `function` の間に入れてはいけません。そうしないとセミコロンが[自動的に挿入され](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#自動セミコロン挿入)、`async` が識別子となり、残りが `function` 宣言となります。

### 引数

- `name`
  - : 関数の名前です。
- `param` {{optional_inline}}
  - : 関数の正式な引数の名前です。引数の構文については、[関数リファレンス](/ja/docs/Web/JavaScript/Guide/Functions#関数の引数)を参照してください。
- `statements` {{optional_inline}}
  - : 関数の本体を構成する文です。`await` の仕組みを使用することができます。

## 解説

`async function` 宣言は、{{jsxref("AsyncFunction")}} オブジェクトを作成します。非同期関数が呼び出されるたびに、新しいプロミス ({{jsxref("Promise")}}) が返され、非同期関数によって返された値で解決されます。または、非同期関数内で捕捉されなかった例外で拒否されます。

非同期関数には、 {{jsxref("Operators/await", "await")}} 式を置くことができます。 await 式は返されたプロミスが履行されるか拒否されるまで実行を中断することで、プロミスを返す関数をあたかも同期しているかのように動作させます。プロミスの解決済みの値は、await 式の返値として扱われます。`async` と `await` を使用すると、非同期コードに通常の `try` / `catch` ブロックを使用することができます。

> [!NOTE]
> キーワード `await` は、通常の JavaScript コード内の非同期関数内でのみ有効です。非同期関数の外で使用した場合は {{jsxref("SyntaxError")}} が発生します。
>
> `await` は [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)では単独で使用することができます。

> [!NOTE]
> `async`/`await` の目的は、プロミスベースの API を利用するのに必要な構文を簡素化することです。 `async`/`await` の動作は、[ジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_generators)とプロミスの組み合わせに似ています。

非同期関数は常にプロミスを返します。非同期関数の返値が明示的にプロミスでない場合は、暗黙的にプロミスでラップされます。

例えば、以下のコードを考えてください。

```js
async function foo() {
  return 1;
}
```

これは、次のコードに似ています。

```js
function foo() {
  return Promise.resolve(1);
}
```

たとえ非同期関数の返値が `Promise.resolve` でラップされているかのように振る舞うとしても、それらは同等ではないことに注意してください。非同期関数は別の参照を返しますが、`Promise.resolve` は指定された値がプロミスであれば同じ参照を返します。プロミスと非同期関数の返値の等価性を調べようとすると、問題が発生する可能性があります。

```js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
```

非同期関数の本体は、0 個以上の await 式で分割されていると考えることができます。最上位のコードは、最初の await 式（ある場合）まで含めて同期的に実行されます。この方法では、await 式のない非同期関数は同期的に実行されます。しかし、関数本体内に await 式がある場合、非同期関数は常に非同期的に完了します。

例:

```js
async function foo() {
  await 1;
}
```

これは次のものと等価です。

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

それぞれの await 式の後のコードは、`.then` コールバックの中に存在すると考えることができます。このようにして、関数を再帰的に実行するたびに、プロミスチェーンが徐々に構築されていきます。返値はチェーンの最後のリンクになります。

次の例では、 2 つのプロミスを連続して待ち受けます。関数 `foo` の処理は 3 段階に分かれています。

1. 関数 foo の本体の最初の行は、保留中のプロミスで await 式が構成された状態で、同期的に実行されます。その後、`foo` の処理は中断され、`foo` を呼び出した関数に制御が返されます。
2. しばらくして、最初のプロミスが履行されるか拒否されると、制御は `foo` に戻ります。（拒否されなかった場合は）最初のプロミスが履行された結果が await 式から返されます。ここでは `1` が `result1` に代入されます。処理は続き、2 つ目の await 式が評価されます。このときも `foo` の処理が中断され、制御が移譲されます。
3. しばらくして、2 つ目のプロミスが履行されたか拒否されたとき、制御は `foo` に再び入ります。2 つ目のプロミスが解決した結果が 2 番目の await 式から返されます。ここでは `2` が `result2` に代入されます。制御は（もしあれば）return 式に移ります。既定の返値である `undefined` が、現在のプロミスの解決値として返されます。

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

プロミスチェーンが一度に構築されないことに注意してください。プロミスチェーンは、非同期関数に制御を渡したり戻したりしながら、段階的に構築されていきます。そのため、同時並行の非同期処理を行う際には、エラー処理の動作に注意しなければなりません。

例えば、以下のコードでは、プロミスチェーンの先に `.catch` ハンドラーが設定されていたとしても、未処理のプロミス拒否エラーが発生します。これは、`p1` から制御が戻るまで、`p2` がプロミスチェーンに「配線」されないためです。

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("failed")), 500),
  );
  const results = [await p1, await p2]; // こうしないでください。 Promise.all または Promise.allSettled を使用してください。
}
foo().catch(() => {}); // すべてのエラーを浅くしようとする...
```

`async function` 宣言は、{{jsxref("Statements/function", "function")}} 宣言と似た挙動をします。つまり、[巻き上げ](/ja/docs/Glossary/Hoisting)によりスコープの先頭に移動し、スコープ内のどこからでも呼び出すことができます。また、特定のコンテキストでのみ再宣言することができます。

## 例

### 非同期関数と実行順

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart 開始 ==");

  // 1. タイマーの起動、完了後にログ出力
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. 前回のタイマーを待った後で次のタイマーを開始
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart 終了 ==");
}

async function sequentialWait() {
  console.log("== sequentialWait 開始 ==");

  // 1. 2 つのタイマーを同時に開始するには、お互いを待つ必要はない
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. slow タイマーが完全に終了するまで待ち、その後、結果をログ出力する
  console.log(await slow);
  // 3. fast タイマーが完全に終了するまで待ち、その後、結果をログ出力する
  console.log(await fast);

  console.log("== sequentialWait 終了 ==");
}

async function concurrent1() {
  console.log("== concurrent1 開始 ==");

  // 1. 2 つのタイマーを同時に開始し、どちらも完了するのを待つ
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. それぞれログ出力する
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 終了 ==");
}

async function concurrent2() {
  console.log("== concurrent2 開始 ==");

  // 2 つの jobs を並列に実行し両方が完了するのを待つ
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 終了 ==");
}

sequentialStart(); // 2 秒後に "slow" をログ出力し、その 1 秒後に "fast" をログ出力する

// 直前の処理を待つ
setTimeout(sequentialWait, 4000); // 2 秒後に "slow" と "fast" をログ出力する

// 直前の処理を待つ
setTimeout(concurrent1, 7000); // concurrentStart と同様

// 直前の処理を待つ
setTimeout(concurrent2, 10000); // 本当に並列処理となるため 1 秒後に "fast" とログ出力し、その 1 秒後に "slow" とログ出力する
```

#### await と並行性

`sequentialStart` では、最初の `await` のために実行が 2 秒間待機し、 2 つ目の `await` のためにさらに 1 秒間待機します。 2 つ目のタイマーは最初のタイマーが起動している間は作成されません。コードは 3 秒後に終了します。

`sequentialWait` では、両方のタイマーが作成され、両方とも `await` される、すなわち待機させられます。タイマーは同時に実行されているため、 3 秒後ではなく 2 秒後に、すなわち最も遅いタイマーにあわせて終了します。
しかし、 `await` の呼び出しは依然として逐次処理であり、これは 2 つ目の `await` が 1 つ目の終了まで待つことを意味します。このケースでは、最も速いタイマーが最も遅いタイマーのあとに処理されることになります。

複数の処理を安全に並行に実行したい場合は、{{jsxref("Promise.all()")}} または {{jsxref("Promise.allSettled()")}} の呼び出しで待つ必要があります。

> [!WARNING]
> 関数 `sequentialWait` と `concurrent1` は機能的に同等ではありません。
>
> `sequentialWait` では、プロミス `fast` がプロミス `slow` の履行よりも前に拒否された場合、呼び出し元が catch 節を構成しているかどうかにかかわらず、プロミスの拒否が処理されないというエラーが発生します。
>
> `concurrent1` では、`Promise.all` がプロミスチェーンを一括して配線します。つまり、操作はプロミスの拒否の順番に関係なくすばやく失敗し、エラーは構成されたプロミスチェーン内で常に発生するため、通常の方法で捕捉することができます。

### プロミスチェーンを非同期関数で書き換える

{{jsxref("Promise")}} を返す API はプロミスチェーンを返し、関数を複数の部品に分割できます。次のコードを想定してください。

```js
function getProcessedData(url) {
  return downloadData(url) // プロミスを返す
    .catch((e) => downloadFallbackData(url)) // プロミスを返す
    .then((v) => processDataInWorker(v)); // プロミスを返す
}
```

次のように 1 つの非同期関数に書き換えることができます。

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

他にも、 `catch()` によってプロミスを連鎖させることができます。

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

2 番目の例では、有効であるにもかかわらず、`await` 文が `return` キーワードの後にないことに注意してください。非同期関数の返値は、（この例のように）既にプロミスになっていない場合、暗黙的に {{jsxref("Promise.resolve")}} でラップされるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)ガイド
- [関数](/ja/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` 式](/ja/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Decorating async JavaScript functions](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) (innolitics.com, 2016)
