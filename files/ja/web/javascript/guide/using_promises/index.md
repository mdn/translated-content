---
title: プロミスの使用
slug: Web/JavaScript/Guide/Using_promises
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}

プロミス ({{jsxref("Promise")}}) は、非同期処理の最終的な完了もしくは失敗を表すオブジェクトです。多くの人々は既存の用意されたプロミスを使うことになるため、このガイドでは、プロミスの作成方法の前に、関数が返すプロミスの使い方から説明します。

基本的に、プロミスはコールバックを関数に渡すかわりに、関数が返したオブジェクトに対してコールバックを登録するようにするというものです。

例えば、`createAudioFileAsync()` という非同期に音声ファイルを生成する関数を考えてみましょう。この関数は構成オブジェクトと 2 つのコールバック関数を受け取り、片方のコールバックは音声ファイルが無事作成されたときに呼び出され、もう一つはエラーが発生したときに呼び出されるとします。

以下のコードは `createAudioFileAsync()` を使用したものです。

```js
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

`createAudioFileAsync()` をプロミスを返すように書き換えると、コールバックを次のように割り当てることができます。

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

この記述方法にはいくつか利点があるので、順に説明します。

## 保証

旧来のコールバック*渡し*とは異なり、プロミスでは以下のことが保証されています。

- [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) によって追加されたコールバックは、現在の JavaScript イベントループの[現在の処理の完了](/ja/docs/Web/JavaScript/EventLoop#run-to-completion)より前には決して呼び出されません。
- これらのコールバックは、プロミスが表す非同期操作が成功または失敗した*後*に追加したとしても呼び出されます。
- [`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) を複数回呼び出すことで、複数のコールバックを追加することができます。それぞれのコールバックは追加した順番に実行されます。

プロミスを使用する最大の利点の一つは**連鎖**でしょう。

## 連鎖

よくあるニーズはとして、 2 つ以上の非同期操作を連続して実行し、前の操作が成功したときに、前のステップの結果を使って後続の各操作を開始するというものがあります。プロミス連鎖を作成することで、これを実現することができます。

さあ魔法の時間です。`then()` 関数は元のプロミスとは別の**新しいプロミス**を返します。

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

もしくは、以下のように書いても構いません。

```js
const promise2 = doSomething().then(successCallback, failureCallback);
```

2 つ目のプロミス (`promise2`) は `doSomething()` の完了を表すだけではなく、渡した `successCallback` もしくは `failureCallback` の完了も表し、これらのコールバックはプロミスを返すまた別の非同期関数であっても構いません。その場合、`promise2` に追加されたコールバックはいずれもプロミスのキューにおいて、`successCallback` または `failureCallback` が返すプロミスの後ろに追加されます。

基本的に、それぞれのプロミスは連鎖上にある個々の非同期の段階の完了を表します。

昔は、複数の非同期処理を順番に実行するには、従来の恐ろしいコールバック地獄を作ることになりました。

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log("Got the final result: " + finalResult);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);
```

現在の機能を使えば、その代わりに返却されたプロミスにコールバックを付加してプロミス連鎖として記述できます。

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log("Got the final result: " + finalResult);
  })
  .catch(failureCallback);
```

`then` 関数の引数は任意であり、また、 `catch(failureCallback)` は `then(null, failureCallback)` の短縮形です。記述には[アロー関数](/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions)を使っても構いません。

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

**重要:** コールバック関数から処理結果を返すのを忘れないでください。さもないと後続のコールバック関数からその処理結果を利用することができなくなります (アロー関数を使った `() => x` は `() => { return x; }` の短縮形です)。

### catch の後の連鎖

失敗、つまり `catch` の後に連鎖することも可能で、これは連鎖内の動作が失敗した後でも新しい動作を行うのに便利です。次の例を読んでください。

```js
new Promise((resolve, reject) => {
  console.log("Initial");

  resolve();
})
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
```

これは下記のテキストを出力します。

```plain
Initial
Do that
Do this, no matter what happened before
```

**注意:** "Do this" のテキストは "Something failed" エラーが拒否をを引き起こしたため出力されないことに注意してください。

## エラーの伝播

以前のコールバック地獄形式の記述方法では `failureCallback` を 3 回書く必要がありましたが、プロミス連鎖では 1 回で済みます。

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

例外が発生すると、ブラウザーは連鎖をたどって `.catch()` ハンドラーか `onRejected` を探します。この動作は同期的なコードの動作ととてもよく似ています。

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

ECMAScript 2017 の糖衣構文 [`async`/`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) を使えば、非同期コードとそっくりになります。

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```

async/await はプロミスの上に成り立っています。例えば上記の `doSomething()` は以前と同じ関数です。の書き方の詳細については[こちら](https://web.dev/javascript-async-functions/)をご覧ください。

プロミスは例外やプログラミングエラーを含むすべてのエラーをとらえることで、コールバック地獄の根本的な問題を解決します。これは非同期処理を合成するのに不可欠です。

## プロミスの拒否イベント

プロミスが拒否されるたびに、グローバルスコープ (通常は [`window`](/ja/docs/Web/API/Window) か、ウェブワーカー内ならば [`Worker`](/ja/docs/Web/API/Worker) かワーカーベースのインターフェイスをもつオブジェクト) に以下の 2 つのイベントのどちらかが送られます。

- [`rejectionhandled`](/ja/docs/Web/API/Window/rejectionhandled_event)
  - : プロミスが拒否されたとき、実行者の `reject` 関数によって拒否が処理された後に送られます。
- [`unhandledrejection`](/ja/docs/Web/API/Window/unhandledrejection_event)
  - : プロミスが拒否されたものの、拒否ハンドラーが利用できない場合に送られます。

いずれの場合でも、この ([`PromiseRejectionEvent`](/ja/docs/Web/API/PromiseRejectionEvent) 型のイベントは、拒否されたプロミスを示す [`promise`](/ja/docs/Web/API/PromiseRejectionEvent/promise) プロパティと、そのプロミスが失敗した理由を表す [`reason`](/ja/docs/Web/API/PromiseRejectionEvent/reason) プロパティを持ちます。

これらのイベントを使えば、プロミスのエラー処理のフォールバックを指定することができ、またプロミスを管理する際の問題をデバッグするのにも役立ちます。これらのハンドラーはコンテキストごとにグローバルであり、発生元に関わらず、すべてのエラーが同じイベントハンドラーによって処理されます。

特に便利なケースとして、 [Node.js](/ja/docs/Glossary/Node.js) 用のコードを書いているときに、プロジェクト内のモジュールでプロミスが拒否され処理されないことがよくあります。これらは Node.js の実行環境ではコンソールに出力されます。次のようにして Node.js に `unhandledRejection` イベントのハンドラーを追加することで、これを捕えて分析したり、自分のコードで処理したり—または、出力が埋め尽くされないようにしたいだけの場合も—することができます。

```js
process.on("unhandledRejection", (reason, promise) => {
  /* ここにコードを追加することで、 "promise" および "reason" の値を
   * 検査することができます。 */
});
```

Node.js では、エラーがコンソールに記録されること (そうしないと発生する既定のアクション) を防ぐには、 `process.on()` リスナーを追加するだけで十分です。ブラウザーの実行環境の [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) のようなことを行う必要はありません。

しかし、 `process.on` リスナーを追加しても、その中に拒否されたプロミスを処理するコードがなければ、プロミスは床に落ちて暗黙に無視されてしまいます。そのため、できればリスナー内にコードを追加して、拒否されたプロミスをそれぞれ検証し、実際のコードのバグが原因ではないことを確認してください。

## 古いコールバック API をラップする Promise の作成

{{jsxref("Promise")}} はコンストラクターを使って 1 から生成すこともできます。これが必要になるのは古い API をラップする場合のみでしょう。

理想的には、すべての非同期関数はプロミスを返すはずですが、残念ながら API の中にはいまだに古いやり方で成功/失敗用のコールバックを渡しているものがあります。顕著な例としては [`setTimeout()`](/ja/docs/Web/API/setTimeout) 関数があります。

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

古い様式であるコールバックとプロミスの混在は問題を引き起こします。というのは、`saySomething()` が失敗したりプログラミングエラーを含んでいた場合に、そのエラーをとらえられないからです。`setTimeout` にその責任があります。

幸いにも `setTimeout` をプロミスの中にラップすることができます。良いやり方は、問題のある関数をできる限り低い水準でラップした上で、直接呼び出さないようにすることです。

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

基本的に、プロミスのコンストラクターには、手動でプロミスを解決または拒否できるようにする実行関数を渡します。実際には `setTimeout()` は失敗することがないので、この場合は拒否を省略しました。

## 合成

{{jsxref("Promise.resolve()")}} と {{jsxref("Promise.reject()")}} は、それぞれ既に解決または拒否されたプロミスを手動で生成するショートカットです。たまに役立つことがあります。

{{jsxref("Promise.all()")}} と {{jsxref("Promise.race()")}} は並行して実行されている非同期処理を合成するためのツールです。

以下のように複数の処理を並行に開始し、すべてが終了するのを待つことができます。

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* result1, result2, result3 を使用 */
});
```

注意すべきは，配列の中の 1 つのプロミスが拒否されると， `Promise.all()` がそのエラーを発生させ，他の処理を中断することです．これにより、予期せぬ状態や振る舞いが発生する可能性があります。 {{jsxref("Promise.allSettled()")}} は、解決する前にすべての操作が完了することを保証する別の合成ツールです。

以下のように工夫すれば、逐次実行をする直列的な合成も記述することができます。

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* result3 を使用 */
  });
```

基本的には、非同期関数の配列をプロミス連鎖に落とし込みます。上のコードは、以下のものと同等です。

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

ECMAScript 2017 では、直列的な合成は async/await でもっと単純に書くことができます。

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* 最終的な結果 (すなわち result3) を使用 */
```

## タイミング

想定外の事態とならないよう、たとえすでに解決されたプロミスであっても、[`then()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) に渡された関数が同期的に呼び出されることはありません。

```js
Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
```

渡された関数はすぐに実行されるのではなく、マイクロタスクのキューに入れられます。後で (生成した関数が終了し、 JavaScript の実行スタックが空になってから)、イベントループに制御が戻される直前、つまりかなり早い段階で実行されます。

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

#### タスクキューとマイクロタスク

プロミスのコールバックは[マイクロタスク](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)として処理され、 [`setTimeout()`](/ja/docs/Web/API/setTimeout) コールバックはタスクキューとして扱われます。

```js
const promise = new Promise(function (resolve, reject) {
  console.log("Promise callback");
  resolve();
}).then(function (result) {
  console.log("Promise callback (.then)");
});

setTimeout(function () {
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

詳しくは、[タスクとマイクロタスク](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs_microtasks)を参照してください。

## 入れ子

単純なプロミス連鎖は、不注意な構成の結果として入れ子が発生することがあるので、入れ子にせずに平らに保つのがベストです。[よくある間違い](#common_mistakes)を参照してください。

入れ子は、`catch` 文の範囲を制限するための制御構造です。具体的には、入れ子になった `catch` は、そのスコープ以下のエラーのみを捕捉し、入れ子になったスコープの外側にある連鎖の上位のエラーは捕捉しません。正しく使用すれば、エラー回復の精度が高まります。

```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // オプションの処理が失敗すれば無視して進める
  .then(() => moreCriticalStuff())
  .catch((e) => console.error("Critical failure: " + e.message));
```

インデントではなく外側の `(` および `)` によってオプションの処理が入れ子になっていることに注意してください。

内側の `catch` 文は `doSomethingOptional()` と `doSomethingExtraNice()` からの失敗だけを捕捉し、捕捉したあと `moreCriticalStuff()` へと処理が続きます。重要なのは、もし `doSomethingCritical()` が失敗したらそのエラーは最後 (外側) の `catch` によってだけ捕捉されるということです。

## よくある間違い

プロミス連鎖を合成するときは以下のようなよくある間違いに気をつける必要があります。以下の例にいくつかの間違いが含まれています。

```js example-bad
// 悪い例。間違いを 3 つ見つけてください。

doSomething()
  .then(function (result) {
    // 内側の連鎖でプロミスを返していない + 不必要な入れ子
    doSomethingElse(result).then((newResult) => doThirdThing(newResult));
  })
  .then(() => doFourthThing());
// 連鎖の最後で catch を忘れている
```

最初の間違いは適切に連鎖を構成できていないことです。これは、新しいプロミスを作成したものの、それを返すのを忘れているときに起きます。結果として連鎖は壊れ、2 つの連鎖が独立して実行されることになります。これはつまり `doFourthThing()` は `doSomethingElse()` や `doThirdThing()` の終了を待たないことになり、おそらく意図せず並行して実行されることになります。別々の連鎖では別々のエラーハンドリングが行われるため、捕捉されないエラーが発生することになります。

2 つ目の間違いは不必要に入れ子にしていることであり、1 つ目の間違いを発生させているものでもあります。入れ子にするということは内側のエラーハンドラーがのスコープが制限されるということであり、もしこれが意図していないものであれば、エラーが捕捉されない場合があります。これの変化形で[プロミスのコンストラクターアンチパターン](https://stackoverflow.com/questions/23803743/what-is-the-explicit-promise-construction-antipattern-and-how-do-i-avoid-it)というものがあり、ネストに加えて、プロミスを既に使用しているコードを不必要なプロミスのコンストラクターでラップするというものです。

3 つ目の間違いは連鎖を `catch` で終わらせていないことです。プロミス連鎖が終わっていないと、多くのブラウザーでは、プロミスの拒否が捕捉されないことになります。

常識的には、常にプロミス連鎖を返すか終了させるかのどちらかで、新しいプロミスを受け取ったらすぐに返すようにして、物事をフラットにするのが良いでしょう。

```js example-good
doSomething()
  .then(function (result) {
    // 完全な関数式を使用する場合は、プロミスを返します
    return doSomethingElse(result);
  })
  // アロー関数を使用する場合は、中括弧を省略し、暗黙のうちに結果を返す
  .then((newResult) => doThirdThing(newResult))
  // 前の連鎖したプロミスが結果を返しても、次のプロミスは必ずしも
  // それを使う必要はない。結果を消費しないハンドラーを渡すことが
  // できる
  .then((/* 結果は無視されます */) => doFourthThing())
  // プロミスの連鎖は必ず catch ハンドラーで終わらせ、拒否が処理
  // されなくなることを避けるようにしましょう
  .catch((error) => console.error(error));
```

`() => x` は `() => { return x; }` の短縮形であることに注意してください。

これで適切なエラー処理が行われる 1 本の連鎖ができました。

[`async`/`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) を使えば、すべてではないにしてもほとんどの問題は解決します。それと引き換えに、この構文で最もよくある間違いが [`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function) キーワードを忘れることです。

## プロミスとタスクが衝突するとき

プロミスとタスク (イベントやコールバックなど) が予測不可能な順序で発行されている状況に遭遇した場合、マイクロタスクを使用して状態をチェックしたり、プロミスが条件付きで作成されている場合にプロミスのバランスを取ったりすることが有益である可能性があります。

マイクロタスクがこの問題の解決に役立つと思われる場合は、[マイクロタスクガイド](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)で [`queueMicrotask()`](/ja/docs/Web/API/queueMicrotask) を使用して関数をマイクロタスクとしてキューに入れる方法について詳しく説明しています。

## 関連情報

- {{jsxref("Promise.then()")}}
- [`async`/`await`](/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [Promises/A+ specification](https://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)
- [Nolan Lawson: We have a problem with promises — Common mistakes with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Iterators_and_Generators")}}
