---
title: 非同期関数
slug: Web/JavaScript/Reference/Statements/async_function
tags:
  - Example
  - 関数
  - JavaScript
  - 言語機能
  - 文
browser-compat: javascript.statements.async_function
translation_of: Web/JavaScript/Reference/Statements/async_function
---
{{jsSidebar("Statements")}}

非同期関数は `async` キーワードで宣言され、その中で `await` キーワードを使うことができます。 `async` および `await` キーワードを使用することで、プロミスベースの非同期の動作を、プロミスチェーンを明示的に構成する必要なく、よりすっきりとした方法で書くことができます。

非同期関数は{{jsxref("Operators/async_function", "式として", "", 1)}}も定義することができます。

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## 構文

```js
async function name([param[, param[, ...param]]]) {
   statements
}
```

### 引数

- `name`
  - : 関数の名前。
- `param`
  - : 関数に渡す引数名。
- `statements`
  - : 関数の本体を構成する文。

### 返値

{{jsxref("Promise")}} で、非同期関数から返される値で解決するか、または非同期関数内で捕捉されなかった例外で拒否されます。

## 解説

非同期関数には、 {{jsxref("Operators/await", "await")}} 式を置くことができます。 await 式は返されたプロミスが履行されるか拒否されるまで実行を中断することで、プロミスを返す関数をあたかも同期しているかのように動作させます。プロミスの解決済みの値は、await 式の返値として扱われます。`async` と `await` を使用すると、非同期コードに通常の `try` / `catch` ブロックを使用することができます。

> **Note:** キーワード `await` は、通常の JavaScript コード内の非同期関数内でのみ有効です。非同期関数の外で使用した場合は {{jsxref("SyntaxError")}} が発生します。
>
> `await` は [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)では単独で使用することができます。

> **Note:** `async`/`await` の目的は、プロミスベースの API を利用するのに必要な構文を簡素化することです。 `async`/`await` の動作は、[ジェネレーター](/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators)とプロミスの組み合わせに似ています。

非同期関数は常にプロミスを返します。非同期関数の返値が明示的にプロミスでない場合は、暗黙的にプロミスでラップされます。

例:

```js
async function foo() {
   return 1
}
```

これは、次のコードに似ています。

```js
function foo() {
   return Promise.resolve(1)
}
```

> **Note:**
>
> 非同期関数の返値が `Promise.resolve` にラップされているかのように動作するとしても、両者は同等ではありません。
>
> 与えられた値がプロミスであった場合、 `Promise.resolve` は同じ参照を返すのに対し、非同期関数は異なる*参照*を返します。
>
> これは、あるプロミスと非同期関数の返値が等しいかどうかをチェックする場合に問題になることがあります。
>
> ```js
> const p = new Promise((res, rej) => {
>   res(1);
> })
>
> async function asyncReturn() {
>   return p;
> }
>
> function basicReturn() {
>   return Promise.resolve(p);
> }
>
> console.log(p === basicReturn()); // true
> console.log(p === asyncReturn()); // false
> ```

非同期関数の本体は、 await 式で分割されていると考えることができます。最上位のコードは、 (ある場合) 最初の await 式まで、それを含めて同期的に実行されます。したがって、await 式のない非同期関数は同期的に実行されます。しかし、関数本体の中に await 式がある場合、非同期関数は常に非同期に完了します。

例:

```js
async function foo() {
   await 1
}
```

これは次のものと等価です。

```js
function foo() {
   return Promise.resolve(1).then(() => undefined)
}
```

それぞれの await 式の後のコードは、`.then` コールバックの中に存在すると考えることができます。このようにして、関数を再帰的に実行するたびに、プロミスチェーンが徐々に構築されていきます。返値はチェーンの最後のリンクになります。

次の例では、 2 つのプロミスを連続して待ち受けます。関数 `foo` の処理は 3 段階に分かれています。

1.  関数 foo の本体の最初の行は、保留中のプロミスで await 式が構成された状態で、同期的に実行されます。その後、`foo` の処理は中断され、`foo` を呼び出した関数に制御が返されます。
2.  しばらくして、最初のプロミスが履行されるか拒否されると、制御は `foo` に戻ります。 (拒否されなかった場合は) 最初のプロミスが履行された結果が await 式から返されます。ここでは `1` が `result1` に代入されます。処理は続き、2 つ目の await 式が評価されます。このときも `foo` の処理が中断され、制御が移譲されます。
3.  しばらくして、2 つ目のプロミスが履行されたか拒否されたとき、制御は `foo` に再び入ります。2 つ目のプロミスが解決した結果が 2 番目の await 式から返されます。ここでは `2` が `result2` に代入されます。制御は (もしあれば) return 式に移ります。既定の返値である `undefined` が、現在のプロミスの解決値として返されます。

```js
async function foo() {
   const result1 = await new Promise((resolve) => setTimeout(() => resolve('1')))
   const result2 = await new Promise((resolve) => setTimeout(() => resolve('2')))
}
foo()
```

 プロミスチェーンが一度に構築されないことに注意してください。プロミスチェーンは、非同期関数に制御を渡したり戻したりしながら、段階的に構築されていきます。そのため、同時並行の非同期処理を行う際には、エラー処理の動作に注意しなければなりません。

例えば、以下のコードでは、プロミスチェーンの先に `.catch` ハンドラーが設定されていたとしても、未処理のプロミス拒否エラーが発生します。これは、`p1` から制御が戻るまで、`p2` がプロミスチェーンに「配線」されないためです。

```js
async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))
   const results = [await p1, await p2] // こうしないでください。 Promise.all または Promise.allSettled を使用してください。
}
foo().catch(() => {}) // すべてのエラーを浅くしようとする...
```

## 例

### 非同期関数と実行順

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("slow")
      console.log("slow promise is done")
    }, 2000)
  })
}

function resolveAfter1Second() {
  console.log("starting fast promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast")
      console.log("fast promise is done")
    }, 1000)
  })
}

async function sequentialStart() {
  console.log('==SEQUENTIAL START==')

  // 1. これは即時実行される
  const slow = await resolveAfter2Seconds()
  console.log(slow) // 2. これは 1. の 2 秒後に実行される

  const fast = await resolveAfter1Second()
  console.log(fast) // 3. これは 1. の 3 秒後に実行される
}

async function concurrentStart() {
  console.log('==CONCURRENT START with await==');
  const slow = resolveAfter2Seconds() // ただちにタイマーを起動
  const fast = resolveAfter1Second() // ただちにタイマーを起動

  // 1. これは即時実行される
  console.log(await slow) // 2. これは 1. の 2 秒後に実行される
  console.log(await fast) // 3. fast はすでに解決しているので、これは 1. の 2 秒後 (2.の直後) に実行される
}

function concurrentPromise() {
  console.log('==CONCURRENT START with Promise.all==')
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
    console.log(messages[0]) // slow
    console.log(messages[1]) // fast
  })
}

async function parallel() {
  console.log('==PARALLEL with await Promise.all==')

  // 2 つの jobs を並列に実行し両方が完了するのを待つ
  await Promise.all([
      (async()=>console.log(await resolveAfter2Seconds()))(),
      (async()=>console.log(await resolveAfter1Second()))()
  ])
}

sequentialStart() // 2 秒後に "slow" をログ出力し、その 1 秒後に "fast" をログ出力する

// 直前の処理を待つ
setTimeout(concurrentStart, 4000) // 2 秒後に "slow" と "fast" をログ出力する

// 直前の処理を待つ
setTimeout(concurrentPromise, 7000) // concurrentStart と同様

// 直前の処理を待つ
setTimeout(parallel, 10000) // 本当に並列処理となるため 1 秒後に "fast" とログ出力し、その 1 秒後に "slow" とログ出力する
```

### await と並列性

`sequentialStart` では、最初の `await` のために実行が 2 秒間待機し、 2 つ目の `await` のためにさらに 1 秒間待機します。 2 つ目のタイマーは最初のタイマーが起動している間は作成されません。コードは 3 秒後に終了します。

`concurrentStart` では、両方のタイマーが作成され、両方とも `await` される、すなわち待機させられます。タイマーは同時に実行されているため、 3 秒後ではなく 2 秒後に、すなわち最も遅いタイマーにあわせて終了します。
 しかし、 `await` の呼び出しは依然として逐次処理であり、これは 2 つ目の `await` が 1 つ目の終了まで待つことを意味します。このケースでは、最も速いタイマーが最も遅いタイマーのあとに処理されることになります。

複数の処理を安全に並列に実行したい場合は、 [`Promise.all`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) または
[`Promise.allSettled`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) の呼び出しで待つ必要があります。

> **Warning:** 関数 `concurrentStart` と `concurrentPromise` は機能的に同等ではありません。
>
> `concurrentStart` では、プロミス `fast` がプロミス `slow` の履行よりも前に拒否された場合、呼び出し元が catch 節を構成しているかどうかにかかわらず、プロミスの拒否が処理されないというエラーが発生します。
>
> `concurrentPromise` では、`Promise.all` がプロミスチェーンを一括して配線します。つまり、操作はプロミスの拒否の順番に関係なくすばやく失敗し、エラーは構成されたプロミスチェーン内で常に発生するため、通常の方法で捕捉することができます。

### promise チェーンを非同期関数で書き換える

{{jsxref("Promise")}} を返す API はプロミスチェーンを返し、関数を複数の部品に分割できます。次のコードを想定してください。

```js
function getProcessedData(url) {
  return downloadData(url) // プロミスを返す
    .catch(e => {
      return downloadFallbackData(url)  // プロミスを返す
    })
    .then(v => {
      return processDataInWorker(v)  // プロミスを返す
    })
}
```

次のように 1 つの非同期関数に書き換えることができます。

```js
async function getProcessedData(url) {
  let v
  try {
    v = await downloadData(url)
  } catch(e) {
    v = await downloadFallbackData(url)
  }
  return processDataInWorker(v)
}
```

二番目の例では、有効であるにもかかわらず、 `await` 文が `return` キーワードの後にないことに注意してください。非同期関数の返値は、 (この例のように) 既にプロミスでない限り、暗黙的に {{jsxref("Promise.resolve")}} でラップされるからです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Operators/async_function", "非同期関数式", "", 1)}}
- {{jsxref("AsyncFunction")}} オブジェクト
- {{jsxref("Operators/await", "await")}}
- ["Decorating
  Async Javascript Functions" on "innolitics.com"](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)
