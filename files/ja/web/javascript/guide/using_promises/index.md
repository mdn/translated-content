---
title: プロミスの使用
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

プロミス ({{jsxref("Promise")}}) は、非同期処理の最終的な完了もしくは失敗を表すオブジェクトです。多くの人々は既存の用意されたプロミスを使うことになるため、このガイドでは、プロミスの作成方法の前に、関数が返すプロミスの使い方から説明します。

基本的に、プロミスはコールバックを関数に渡すかわりに、関数が返したオブジェクトに対してコールバックを登録するようにするというものです。 `createAudioFileAsync()` という非同期に音声ファイルを生成する関数を考えてみましょう。この関数は構成オブジェクトと 2 つのコールバック関数を受け取り、片方のコールバックは音声ファイルが無事作成されたときに呼び出され、もう一つはエラーが発生したときに呼び出されるとします。

以下のコードは `createAudioFileAsync()` を使用したものです。

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

`createAudioFileAsync()` をプロミスを返すように書き換えると、コールバックを次のように割り当てることができます。

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

この記述方法にはいくつか利点があるので、順に説明します。

## 連鎖

よくあるニーズは、 2 つ以上の非同期処理を連続して実行することで、前回の処理が成功したときに、その結果をもとに後続の処理を始めることです。昔は、複数の非同期処理を連続して実行すると、古典的な[コールバック地獄](http://callbackhell.com/)に陥っていました。

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`最終結果: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

プロミスでは、プロミス連鎖を作成することでこれを実現します。プロミスの API 設計では、コールバックは関数に渡されるのではなく、返されたプロミスオブジェクトに取り付けられるため、これは素晴らしいことです。

ここからがマジックです。 `then()` 関数は元とは異なる**新しいプロミス**を返します。

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

2 つ目のプロミス (`promise2`) は `doSomething()` の完了を表すだけではなく、渡した `successCallback` もしくは `failureCallback` の完了も表し、これらのコールバックはプロミスを返すまた別の非同期関数であっても構いません。その場合、`promise2` に追加されたコールバックはいずれもプロミスのキューにおいて、`successCallback` または `failureCallback` が返すプロミスの後ろに追加されます。

> [!NOTE]
> この例を実際に試してみたい場合は、次のテンプレートを使用することで、プロミスを返す任意の関数を作成することができます。
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // プロミスの完了前にやるべき他のこと
>       console.log("何かを行いました");
>       // プロミスの履行値
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> 実装については、下記「[古いコールバック API をラップする Promise の作成](#古いコールバック_api_をラップする_promise_の作成)」の章で詳しく説明します。

このパターンを使うと、より長い処理の連鎖を作成することができ、それぞれのプロミスは連鎖の中の非同期ステップの完了を表します。さらに、 `then` の引数はオプションで、`catch(failureCallback)` は `then(null, failureCallback)` の省略形です。エラー処理するコードがすべての手順で同じであれば、それをチェーンの終わりに付けることができます。

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`最終結果: ${finalResult}`);
  })
  .catch(failureCallback);
```

代わりにこれを[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)で表現しているのを見るかもしれません。

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`最終結果: ${finalResult}`);
  })
  .catch(failureCallback);
```

> [!NOTE]
> アロー関数式は[暗黙の返値](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions#関数の本体)を持つことができます。したがって、 `() => x` は `() => { return x; }` の短縮形です。

`doSomethingElse` と `doThirdThing` は、どのような値でも返すことができます。プロミスを返す場合は、まずそのプロミスが確定するまで待機され、次のコールバックにはプロミス自体ではなく履行値が返されます。 プロミスが常に `undefined` に解決される場合でも、`then` コールバックから常にプロミスを返すことが重要です。前回ハンドラーがプロミスを始めたが、それを返さなかった場合、その決定を追跡する方法はもうなく、プロミスは「浮いている」 (floating) と言います。

```js example-bad
doSomething()
  .then((url) => {
    // fetch(url) の前に return キーワードを忘れている
    fetch(url);
  })
  .then((result) => {
    // 結果は未定義です。直前のハンドラーからは何も返されないからです。 fetch() 呼び出しの返値を知る方法はもうありませんし、成功したかどうかもまったくわかりません。
  });
```

`fetch`の呼び出し結果（プロミス）を返すことで、どちらもその完了を追跡し、完了時にその値を受け取ることができます。

```js example-good
doSomething()
  .then((url) => {
    // `return` キーワードを追加
    return fetch(url);
  })
  .then((result) => {
    // 結果は Response オブジェクト
  });
```

浮いているプロミスは、競合する条件が存在する場合に、さらに悪い結果を招く可能性があります。もし最後のハンドラーのプロミスが返されなければ、次の `then` ハンドラーが早く呼び出され、そのハンドラーが読み取る値が不完全になる可能性があります。

```js example-bad
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // fetch(url) の前に return キーワードを忘れている
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients は常に [] となります。フェッチリクエストはまだ完了していないからです。
  });
```

したがって、経験則として、処理がプロミスに遭遇したときはいつでもそれを返し、その処理を次の `then` ハンドラーに委ねるようにしてください。

```js example-good
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // fetch 呼び出しの前に `return` キーワードを入れるようにした
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients には fetch 呼び出しから取得されたデータが入るようになる
  });
```

さらに、入れ子になったチェーンを単一のチェーンにフラット化することで、よりシンプルになり、エラー処理も容易になります。詳細は、下記の[入れ子](#入れ子)の節で説明します。

```js
doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });
```

[`async`/`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) を使用すると、より直感的なコードを書くことができ、同期コードに似たコードを書くことができます。次の例は、 `async`/`await` を使用しておなじことをしています。

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

コードはプロミスの前に `await` キーワードがあることを除いて、同期的なコードとまったく同じに見えることに注目してください。トレードオフの1つは、[`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) キーワードを簡単に忘れてしまう可能性があることです。これは、型不一致（例えば、プロミスを値として使用しようとするなど）がある場合にのみ修正することができます。

`async`/`await` はプロミスを基に構築されています。例えば、`doSomething()` は以前と同じ関数であるため、プロミスから `async`/`await` に変更するために必要なリファクタリングは最小限で済みます。 `async`/`await` の構文については、[非同期関数](/ja/docs/Web/JavaScript/Reference/Statements/async_function)および [`await`](/ja/docs/Web/JavaScript/Reference/Operators/await) のリファレンスで詳しく説明されています。

> **メモ:** `async`/`await` は通常のプロミス連鎖と同じ並列処理の意味論をもちます。 1 つの非同期関数内で `await` を使用しても、プログラム全体が停止するわけではなく、その値に依存する部分のみが停止します。そのため、 `await` が待機中の間にも、他にも非同期のジョブが実行される可能性があります。

## エラー処理

先ほどの死のピラミッドでは `failureCallback` を 3 回見たことを思い出すかもしれません。一方、プロミス連鎖の最後の 1 回だけです。

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`最終結果: ${finalResult}`))
  .catch(failureCallback);
```

例外が発生すると、ブラウザーは連鎖をたどって `.catch()` ハンドラーか `onRejected` を探します。この動作は同期的なコードの動作ととてもよく似ています。

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`最終結果: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

これに対応するものを `async`/`await` の構文で非同期コードに集約したものです。

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`最終結果: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```

プロミスは、コールバックの死のピラミッドの根本的な欠陥を解決します。例外やプログラミングエラーなど、すべてのエラーを捕捉します。これは非同期操作の機能合成に不可欠です。これで、エラーはすべてチェーンの終わりにある [`catch()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) メソッドで処理されることになり、 `async`/`await` を使用せずに `try`/`catch` を使用する必要はほとんどなくなります。

### 入れ子

上の `listOfIngredients` に関する例では、最初のプロミス連鎖は別の `then()` ハンドラーの返値に入れ子になっていますが、 2 つ目は完全にフラットな連鎖を使用しています。単純なプロミス連鎖は、入れ子をせずにフラットに保つのがベストです。入れ子にすると、不注意な合成の結果になってしまう可能性があるからです。

入れ子は、 `catch` 文の範囲を制限するための制御構造です。具体的には、入れ子になった `catch` は、そのスコープ以下のエラーのみを捕捉し、入れ子になったスコープの外側にある連鎖の上位のエラーは捕捉しません。正しく使用すれば、エラー回復の精度が高まります。

```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // オプションの処理が失敗すれば無視して進める
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
```

インデントではなく外側の `(` および `)` によってオプションの処理が入れ子になっていることに注意してください。

内側の `catch` 文は `doSomethingOptional()` と `doSomethingExtraNice()` からの失敗だけを捕捉し、捕捉したあと `moreCriticalStuff()` へと処理が続きます。重要なのは、もし `doSomethingCritical()` が失敗したらそのエラーは最後 (外側) の `catch` によってだけ捕捉されるということです。

`async`/`await` の場合、このコードは次のようになります。

```js
async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
      // オプション段階での失敗は無視して、次に進む
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
```

> [!NOTE]
> 高度なエラー処理が存在しないのであれば、入れ子になった `then` ハンドラーが必要になることはまずありません。 その代わりに、フラットチェーンを使用し、エラー処理ロジックを文末に配置してください。

### catch の後の連鎖

失敗、つまり `catch` の後に連鎖することも可能で、これは連鎖内の動作が失敗した後でも新しい動作を行うのに便利です。次の例を読んでください。

```js
doSomething()
  .then(() => {
    throw new Error("何か失敗した");

    console.log("これを実行");
  })
  .catch(() => {
    console.error("あれを実行");
  })
  .then(() => {
    console.log("以前に何が起こったとしても、これを行う");
  });
```

これは下記のテキストを出力します。

```plain
Initial
あれを実行
以前に何が起こったとしても、これを行う
```

> [!NOTE]
> 「これを実行」のテキストは「何か失敗した」エラーが拒否をを引き起こしたため、出力されないことに注意してください。

`async`/`await` では、このコードは次のようになります。

```js
async function main() {
  try {
    await doSomething();
    throw new Error("何か失敗した");
    console.log("これを実行");
  } catch (e) {
    console.error("あれを実行");
  }
  console.log("以前に何が起こったとしても、これを行う");
}
```

### プロミスの拒否イベント

プロミス拒否イベントがどのハンドラーによっても処理されなかった場合、そのイベントは呼び出しスタックの先頭にバブリングし、ホストはそれを表面化させる必要があります。ウェブでは、プロミスが拒否されるたびに、 2 種類のイベントのどちらかがグローバルスコープに送られます（一般的には、 [`window`](/ja/docs/Web/API/Window) か、ウェブワーカーで使用する場合は、 [`Worker`](/ja/docs/Web/API/Worker)、または他のワーカーベースのインターフェイスです）。この 2 つのイベントは次の通りです。

- [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event)
  - : プロミスが拒否されたものの、拒否ハンドラーが利用できない場合に送られます。
- [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)
  - : プロミスが拒否されたとき、実行者の `reject` 関数によって拒否が処理された後に送られます。

いずれの場合でも、この（[`PromiseRejectionEvent`](/ja/docs/Web/API/PromiseRejectionEvent) 型の）イベントは、拒否されたプロミスを示す [`promise`](/ja/docs/Web/API/PromiseRejectionEvent/promise) プロパティと、そのプロミスが失敗した理由を表す [`reason`](/ja/docs/Web/API/PromiseRejectionEvent/reason) プロパティを持ちます。

これらのイベントを使えば、プロミスのエラー処理のフォールバックを指定することができ、またプロミスを管理する際の問題をデバッグするのにも役立ちます。これらのハンドラーはコンテキストごとにグローバルであり、発生元に関わらず、すべてのエラーが同じイベントハンドラーによって処理されます。

[Node.js](/ja/docs/Glossary/Node.js) では、プロミスの拒否の扱いは多少異なります。次のようにして Node.js に `unhandledRejection` イベント（名前の大文字小文字の違いに注意）のハンドラーを追加することで、未処理の拒否を捕捉することができます。

```js
process.on("unhandledRejection", (reason, promise) => {
  // "promise" および "reason" の値を検査するコードをここに追加
});
```

Node.js では、エラーがコンソールに記録されること (そうしないと発生する既定のアクション) を防ぐには、 `process.on()` リスナーを追加するだけで十分です。ブラウザーの実行環境の [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) のようなことを行う必要はありません。

しかし、 `process.on` リスナーを追加しても、その中に拒否されたプロミスを処理するコードがなければ、プロミスは床に落ちて暗黙に無視されてしまいます。そのため、できればリスナー内にコードを追加して、拒否されたプロミスをそれぞれ検証し、実際のコードのバグが原因ではないことを確認してください。

## 合成

非同期処理を同時に実行するための 4 つの[合成ツール](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency)があります。 {{jsxref("Promise.all()")}}、{{jsxref("Promise.allSettled()")}}、{{jsxref("Promise.any()")}}、{{jsxref("Promise.race()")}} です。

以下のように複数の処理を並行に開始し、すべてが終了するのを待つことができます。

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // result1, result2, result3 を使用
});
```

注意すべきは、配列の中の 1 つのプロミスが拒否されると、 `Promise.all()` がそのエラーを発生させ、他の処理を中断することです。これにより、予期せぬ状態や振る舞いが発生する可能性があります。 {{jsxref("Promise.allSettled()")}} は、解決する前にすべての操作が完了することを保証する別の合成ツールです。

これらのメソッドはすべてプロミスを並列処理します。一連のプロミスは同時に開始され、他にも待つことはありません。いくつかの賢い JavaScript を使用することで、逐次合成が可能です。

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    // result3 を使用
  });
```

この例では、非同期関数の配列をプロミス連鎖に[縮小](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)しています。上のコードは次のコードと同じです。

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* result3 を使用 */
  });
```

これは、関数型プログラミングでよく見られる、再利用可能な合成関数にすることができます。

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

`composeAsync()` 関数は、任意の数の関数を引数として受け取り、合成パイプラインに渡される初期値を受け取る新しい関数を返します。

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

直列的な合成は async/await でもっと簡単に書くことができます。

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* 最終的な結果 (すなわち result3) を使用 */
```

しかし、プロミスを逐次的に構成する前に、それが実に必要かどうかを検討してください。あるプロミスの実行が他のプロミスの結果に依存していない限り、それらが不必要にブロックし合わないように、常にプロミス並列処理を実行する方がよいのです。

## キャンセル

`Promise` 自体には取り消し用の第一級プロトコルは存在しませんが、通常は [`AbortController`](/ja/docs/Web/API/AbortController) を使用して、基盤となる非同期操作を直接取り消すことができる場合があります。

## 古いコールバック API をラップする Promise の作成

{{jsxref("Promise")}} は[コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)を使って 1 から生成すこともできます。これが必要になるのは古い API をラップする場合のみでしょう。

理想的には、すべての非同期関数はプロミスを返すはずですが、残念ながら API の中にはいまだに古いやり方で成功/失敗用のコールバックを渡しているものがあります。顕著な例としては {{domxref("Window.setTimeout", "setTimeout()")}} 関数があります。

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

古い様式であるコールバックとプロミスの混在は問題を引き起こします。というのは、`saySomething()` が失敗したりプログラミングエラーを含んでいた場合に、そのエラーをとらえられないからです。`setTimeout()` にその責任があります。

幸いにも `setTimeout()` をプロミスの中にラップすることができます。良いやり方は、問題のある関数をできる限り低い水準でラップした上で、直接呼び出さないようにすることです。

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

プロミスのコンストラクターは、プロミスを手動で解決したり拒否したりするための実行関数を受け取ります。 `setTimeout()` は実に失敗しないので、今回は拒否を省きました。これがどのように動作するのかについては、 [`Promise()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) を参照してください。

## タイミング

最後に、登録されたコールバックがいつ呼び出されるかについて、より技術的な詳細を見ていきます。

### 保証

コールバックベースの API では、いつ、どのようにコールバックが呼び出されるかは、 API の実装者に依存します。例えば、コールバックは同期的に呼び出されることもあれば、非同期的に呼び出されることもあります。

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

上記の設計は、いわゆる「ザルゴの状態」という状態になるため、強く避けるべきです。非同期 API の設計の文脈では、これはコールバックがある場合には同期的に呼び出されますが、他の場合には非同期的に呼び出され、呼び出し側に曖昧さを作成することを意味しています。さらに詳しい背景については、この用語が最初に正式に表示された記事 [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/) を参照してください。この API 設計により、副作用を分析することが難しくなります。

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

一方で、プロミスは[制御の反転](https://ja.wikipedia.org/wiki/制御の反転)という形です。コールバックが呼び出されるタイミングを API 実装者が制御することはありません。その代わりに、コールバックキューを維持し、いつコールバックを呼び出すかを決定する仕事はプロミスの実装に委ねられ、 API ユーザーと API 開発者の両方は、自動的に以下のような強力な意味づけ保証を得ることができます。

- [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) で追加されたコールバックは、 JavaScript のイベントループの[現在の実行の完了](/ja/docs/Web/JavaScript/Event_loop#run-to-completion)より前に呼び出されることはありません。
- これらのコールバックは、プロミスが表す非同期処理の成功や失敗の後に追加されても呼び出されます。
- [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) を複数回呼び出すことで、複数のコールバックを追加することができます。これらは挿入された順に次々と呼び出されます。

想定外の事態とならないよう、たとえすでに解決されたプロミスであっても、 [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) に渡された関数が同期的に呼び出されることはありません。

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

渡された関数はすぐに実行されるのではなく、マイクロタスクのキューに入れられます。後で（生成した関数が終了し、 JavaScript の実行スタックが空になってから）、イベントループに制御が戻される直前、つまりかなり早い段階で実行されます。

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### タスクキューとマイクロタスク

プロミスのコールバックは[マイクロタスク](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)として処理され、 {{domxref("Window.setTimeout", "setTimeout()")}} コールバックはタスクキューとして扱われます。

```js
const promise = new Promise((resolve, reject) => {
  console.log("Promise callback");
  resolve();
}).then((result) => {
  console.log("Promise callback (.then)");
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);
```

上記のコードの出力は次の通りです。

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

詳しくは、[タスクとマイクロタスク](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#タスクとマイクロタスク)を参照してください。

### プロミスとタスクが衝突するとき

プロミスとタスク（イベントやコールバックなど）が予測不可能な順序で発行されている状況に遭遇した場合、マイクロタスクを使用して状態をチェックしたり、プロミスが条件付きで作成されている場合にプロミスのバランスを取ったりすることが有益である可能性があります。

マイクロタスクがこの問題の解決に役立つと思われる場合は、[マイクロタスクガイド](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)で {{domxref("Window.queueMicrotask()", "queueMicrotask()")}} を使用して関数をマイクロタスクとしてキューに入れる方法について詳しく説明しています。

## 関連情報

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) (pouchdb.com, 2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
