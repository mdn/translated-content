---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - クラス
  - ECMAScript 2015
  - JavaScript
  - Promise
  - リファレンス
  - promise.all
  - ポリフィル
browser-compat: javascript.builtins.Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
---
{{JSRef}}

**`Promise`** オブジェクトは、非同期処理の完了 (もしくは失敗) の結果およびその結果の値を表します。

{{AvailableInWorkers}}

プロミスの挙動と使用法について学ぶには、最初に[プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)をお読みください。

## 解説

プロミス (**`Promise`**) は、作成された時点では分からなくてもよい値へのプロキシーです。非同期のアクションの成功値または失敗理由にハンドラーを結びつけることができます。これにより、非同期メソッドは結果の値を返す代わりに、未来のある時点で値を提供する*プロミス*を返すことで、同期メソッドと同じように値を返すことができるようになります。

`Promise` の状態は以下のいずれかとなります。

- 待機 (_pending_): 初期状態。成功も失敗もしていません。
- 履行 (_fulfilled_): 処理が成功して完了したことを意味します。
- 拒否 (_rejected_): 処理が失敗したことを意味します。

待機状態のプロミスは、何らかの値を持つ履行 (_fulfilled_) 状態、もしくは何らかの理由 (エラー) を持つ拒否 (_rejected_) 状態のいずれかに変わります。そのどちらとなっても、`then` メソッドによって関連付けられたハンドラーが呼び出されます。対応するハンドラーが割り当てられたとき、既にプロミスが履行または拒否状態になっていても、そのハンドラーは呼び出されます。よって、非同期処理とその関連付けられたハンドラーとの競合は発生しません。

`{{JSxRef("Promise.then", "Promise.prototype.then()")}}` メソッドと `{{JSxRef("Promise.catch", "Promise.prototype.catch()")}}` メソッドもまたプロミスを返すので、これらを連鎖 (chain) させることができます。

![](promises.png)

> **Note:** Scheme に代表される一部の言語では、遅延評価や計算を延期する機構を持っており、これらも「プロミス」と呼ばれます。 JavaScript におけるプロミスは、すでに起きつつある処理を表し、この処理はコールバック関数を使うことで連鎖させることができます。式を遅延評価する方法を探しているのであれば、引数なしの関数を使用するを検討してください。 `f = () => expression` で遅延評価される式が作成でき、 `f()` でその式を直ちに評価することができます。

> **Note:** プロミスは履行状態または拒否状態になった場合は、待機ではなく決定 (_settled_) と呼ばれます。また解決 (_resolved_) という用語も見かけるでしょう。これはプロミスが決定したか、他のプロミスの状態に一致させるために「ロックイン」したことを表します。 [States and fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) には、プロミスの用語についての詳細な説明があります。

### 複数のプロミスの連鎖

`promise.then()`, `promise.catch()`, `promise.finally()` の各メソッドは、決定したプロミスにさらなるアクションを結びつけるために使用します。

`.then()` メソッドは、最大で 2 つの引数を取ります。1 番目の引数は、プロミスが解決した場合のコールバック関数で、 2 番目の引数は、拒否された場合のコールバック関数です。それぞれの `.then()` は新たに生成されたプロミスオブジェクトを返します。このオブジェクトは、オプションで連鎖に使用することができます。例えば、このようになります。

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

`.then()` に Promise オブジェクトを返すコールバック関数がない場合でも、連鎖の次のリンクへと処理が進みます。したがって、連鎖では最後の `.catch()` まで、すべての*拒否*のコールバック関数を省略しても安全です。

それぞれの `.then()` で拒否されたプロミスを扱うと、プロミスの連鎖のさらに先に影響を及ぼします。エラーを直ちに処理しなければならないため、選択の余地がない場合もあります。このような場合には、連鎖的にエラー状態を維持するために、何らかの種類のエラーを発生させる必要があります。一方で、緊急の必要性がない場合は、最後の `.catch()` ステートメントまでエラー処理を行わない方がシンプルです。 `.catch()` は、実際には、単なる `.then()` からプロミスが解決されたときのためのコールバック関数のスロットを抜いたものです。

```js
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

{{JSxRef("Functions/Arrow_functions", "アロー関数式", "", 1)}}をコールバック関数に使用すると、プロミス連鎖の実装は次のようになるでしょう。

```js
promise1
.then(value => { return value + ' and bar'; })
.then(value => { return value + ' and bar again'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });
```

プロミスの終了条件は、その連鎖内の次のプロミスの「決定」状態を決定します。解決」状態はプロミスの完了が成功したことを示し、「拒否」状態は成功しなかったことを示します。連鎖内で解決されたそれぞれのプロミスの返値は、次の `.then()` に渡され、拒否された理由は連鎖内の次の拒否ハンドラー関数に渡されます。

連鎖のプロミスは、ロシア人形のように入れ子になっていますが、スタックの一番上のように取り出されます。連鎖の最初のプロミスは最も深くネストされており、最初に取り出されます。

```plain
(promise D, (promise C, (promise B, (promise A) ) ) )
```

`nextValue` がプロミスである場合、その効果は動的な置換です。 `return` によってプロミスが取り出されますが、 `nextValue` のプロミスはその場所に押し込まれます。上に示した入れ子では、"promise B" に関連付けられた `.then()` が "promise X" の `nextValue` を返すとします。 結果としての入れ子は以下のようになります。

```plain
(promise D, (promise C, (promise X) ) )
```

プロミスは複数の入れ子に参加することができます。以下のコードでは、 `promiseA` が「決定」状態に移行すると、 `.then()` の両方のインスタンスが呼び出されます。

```js
const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);
```

既に「決定」状態のプロミスにアクションを割り当てることができます。その場合、アクションは (適切であれば) 最初の非同期の機会に実行されます。プロミスは非同期であることが保証されていることに注意してください。したがって、既に「解決」状態のプロミスに対するアクションは、スタックがクリアされ、クロックティックが経過した後にのみ実行されます。この効果は `setTimeout(action,10)` とよく似ています

```js
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// この時点で、 "promiseA" はすでに解決されています。
promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
console.log("immediate logging");

// 以下の順序で出力が行われます。
// immediate logging
// asynchronous logging has val: 777
```

### 現行の設定オブジェクトの追跡

設定オブジェクト (settings object) とは、 JavaScript コードの実行時に追加情報を提供する[環境](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object)のことです。これには、領域やモジュールマップのほか、オリジンなどの HTML 固有の情報も含まれます。現行の設定オブジェクトが追跡されるのは、特定のユーザーコードに対してどの設定オブジェクトを使用すべきかをブラウザーが確実に把握するためです。

これをより良く理解するために、領域がどのように問題になるかを詳しく見てみましょう。領域 (**realm**) とは、大まかに言うとグローバルオブジェクトのことです。領域の特徴は、JavaScript のコードを実行するために必要な情報をすべて保持していることです。これには [`Array`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array) や [`Error`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Error) などのオブジェクトが含まれます。それぞれの設定オブジェクトはこれらの「コピー」を持っており、共有されていません。そのため、プロミスとの関係で予期しない動作をすることがあります。これを回避するために、**現行の設定オブジェクト** (incumbent settings object) と呼ばれるものを追跡します。これは、ある関数呼び出しを担当するユーザーコードのコンテキストに固有の情報を表します。

これをもう少し詳しく説明するために、文書に埋め込まれた [`<iframe>`](/ja/docs/Web/HTML/Element/iframe) がホストとどのように通信するかを見てみましょう。すべての Web API は現行の設定オブジェクトを認識しているため、以下のようにすればすべてのブラウザーで動作します。

```html
<!DOCTYPE html>
<iframe></iframe> <!-- ここが領域です -->
<script> // ここも同様に領域です
  const bound = frames[0].postMessage.bind(
    frames[0], "some data", "*");
    // bound は組み込み関数です -- スタック上にはユーザー
    // コードがありません -- が、どの領域を使うのでしょうか？
  window.setTimeout(bound);
  // これでも動作します。スタック上の最も若い（現行の）
  // 領域を使用するからです。
</script>
```

同じ概念をプロミスに適用します。上の例を少し変えてみると、こうなります。

```html
<!DOCTYPE html>
<iframe></iframe> <!-- ここが領域です -->
<script> // ここも同様に領域です
  const bound = frames[0].postMessage.bind(
    frames[0], "some data", "*");
    // bound は組み込み関数です -- スタック上にはユーザー
    // コードがありません -- が、どの領域を使うのでしょうか？
  Promise.resolve(undefined).then(bound);
  // これでも動作します。スタック上の最も若い（現行の）
  // 領域を使用するからです。
</script>
```

これを変更して、文書内の `<iframe>` が post メッセージを待ち受けするようにすると、現行の設定オブジェクトの効果を観察することができます。

```html
<!-- y.html -->
<!DOCTYPE html>
<iframe src="x.html"></iframe>
<script>
  const bound = frames[0].postMessage.bind(frames[0], "some data", "*");
  Promise.resolve(undefined).then(bound);
</script>
```

```html
<!-- x.html -->
<!DOCTYPE html>
<script>
window.addEventListener("message", (event) => {
  document.querySelector("#text").textContent = "hello";
  // このコードは現行の設定オブジェクトを追跡するブラウザーでしか動作しません
  console.log(event);
}, false);
</script>
```

上記の例では、現行の設定オブジェクトが追跡されたときのみ `<iframe>` の内部のテキストが更新されます。これは、現行のものを追跡しないと、メッセージを送る環境を間違えてしまう可能性があるからです。

> **Note:** 現在のところ、現行の領域の追跡は Firefox では完全に実装されており、 Chrome と Safari では部分的に実装されています。

## コンストラクター

- {{jsxref("Promise/Promise", "Promise()")}}
  - : 新しい `Promise` オブジェクトを生成します。このコンストラクターは主に、まだプロミスに対応していない関数をラップするために使われます。

## 静的メソッド

- {{JSxRef("Promise.all", "Promise.all(iterable)")}}

  - : すべてのプロミスが解決されるか、拒否されるかするまで待ちます。

    返却されたプロミスが解決された場合、解決されたプロミスが、複数のプロミスが含まれる反復可能オブジェクトで定義された順番で入った集合配列の値によって解決されます。

    拒否された場合は、反復可能オブジェクトの中で拒否された最初のプロミスの理由によって拒否されます。

- {{JSxRef("Promise.allSettled", "Promise.allSettled(iterable)")}}

  - : すべてのプロミスが完了する (それぞれが解決されるか、拒否される) まで待ちます。

    これはすべての与えられたプロミスが解決または拒否された後で、それぞれのプロミスの結果を記述したオブジェクトの配列で解決される Promise を返します。

- {{JSxRef("Promise.any", "Promise.any(iterable)")}}
  - : Promise オブジェクトの反復可能オブジェクトを取り、反復可能オブジェクトの中のプロミスのうちの一つが履行され次第、そのプロミスから受け取った値で解決する単一のプロミスを返します。
- {{JSxRef("Promise.race", "Promise.race(iterable)")}}

  - : プロミスのうちの 1 つが解決または拒否されるまで待ちます。

    返されたプロミスが解決された場合、反復可能オブジェクトの中で最初に解決されたプロミスの値によって解決されます。

    拒否された場合、最初に拒否されたプロミスの理由によって拒否されます。

- {{JSxRef("Promise.reject", "Promise.reject(reason)")}}
  - : 与えられた理由で拒否された新しい `Promise` オブジェクトを返します。
- {{JSxRef("Promise.resolve", "Promise.resolve(value)")}}

  - : 与えられた値で解決された新しい `Promise` オブジェクトを返します。もし値が thenable (つまり `then` メソッドを持っているオブジェクト) ならば、返されるプロミスはその thenable をたどり、その結果を採用します。そうでなければ、返されるプロミスは与えられた値で解決されます。

    一般に、ある値がプロミスであるかどうかがわからない場合は、代わりに {{JSxRef("Promise.resolve", "Promise.resolve(value)")}} を使用し、返値をプロミスとして扱います。

## インスタンスメソッド

マイクロタスクのキューやサービスを使用する方法については、[マイクロタスクのガイド](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)を参照してください。

- {{jsxref("Promise.prototype.catch()")}}
  - : プロミスに拒否ハンドラーコールバックを追加し、コールバックが呼び出されたときの返値で解決する、または、プロミスが履行された場合は、元の履行結果で解決する
	新しいプロミスを返します。
- {{jsxref("Promise.prototype.then()")}}
  - : プロミスに履行ハンドラーと拒否ハンドラーを追加し、呼び出されたハンドラーの返値で解決する新しいプロミスを返します。プロミスが処理されなかった場合 (すなわち、関連するハンドラー `onFulfilled` または `onRejected` が関数ではない場合) は、元の解決値を返します。
- {{jsxref("Promise.prototype.finally()")}}
  - : プロミスにハンドラーを追加し、元のプロミスが解決されたときに解決される新しいプロミスを返します。このハンドラーは、成功か失敗かに関わらず、元のプロミスが完了したときに呼び出されます。

## 例

### 基本的な例

```js
let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code.
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout( function() {
    resolve("Success!")  // Yay! Everything went well!
  }, 250)
})

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage)
});
```

### 多様な状況に対応した例

この例では、プロミス機能を使用するための多様なテクニックと、発生する可能性のある多様な状況を示しています。これを理解するには、まずコードブロックの一番下までスクロールして、プロミス連鎖を調べてください。最初のプロミスが提供されてから、プロミスの連鎖が続きます。この連鎖は `.then()` の呼び出しで構成され、通常は (必ずしもそうとは限りませんが) 最後に単一の `.catch()` があり、任意で `.finally()` が続きます。この例では、プロミス連鎖は独自に書かれた `new Promise()` コンストラクターによって開始されますが、実際には、プロミス連鎖は通常、プロミスを返す API 関数 (他の誰かが書いたもの) から開始されます。

関数 `tetheredGetNumber()` の例では、非同期呼び出しを設定している間、またはコールバック内で、またはその両方で `reject()` を使用してプロミスを生成することを示しています。 関数 `promiseGetWord()` は、API 関数がどのように自己完結型の方法でプロミスを生成して返すかを示しています。

関数 `troubleWithGetNumber()` は `throw()` で終わることに注意してください。これは、 ES6 のプロミス連鎖では、エラーが発生した後で、 "throw()" がなく、エラーが "fixed" であるようにみえても、すべての `.then()` のプロミスを通過するため、強制的に行われています。これは面倒なので、 `.then()` プロミスの連鎖全体で `rejectionFunc` を省略して、最終的な `catch()` で単一の `rejectionFunc` を使用するのが一般的です。 別の方法としては、特別な値を投げるという方法があります (この場合は "-999" ですが、カスタムのエラー種別の方が適切です)。

このコードは NodeJS で実行できます。実際にエラーが発生しているのを見ることで理解度が高まります。より多くのエラーを強制的に発生させるには、 `threshold` の値を変更します。

```js
"use strict";

// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(
      function() {
        const randomInt = Date.now();
        const value = randomInt % 10;
        try {
          if(value >= THRESHOLD_A) {
            throw new Error(`Too large: ${value}`);
          }
        } catch(msg) {
            reject(`Error in callback ${msg}`);
        }
      resolve(value);
      return;
    }, 500);
    // To experiment with error at set-up, uncomment the following 'throw'.
    // throw new Error("Bad setup");
  } catch(err) {
    reject(`Error during setup: ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Trouble getting number: ${reason}`);
  throw -999; // must "throw" something, to maintain error state down the chain
}

function promiseGetWord(parityInfo) {
  // The "tetheredGetWord()" function gets "parityInfo" as closure variable.
  const tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const threshold_B = THRESHOLD_A - 1;
    if(theNumber >= threshold_B) {
      reject(`Still too large: ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'odd' : 'even';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))
  .then(determineParity,troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("Got: ",info.theNumber," , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if(reason === -999) {
      console.error("Had previously handled error");
    }
    else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
   })
  .finally((info) => console.log("All done"));
```

### 高度な例

以下の例は `Promise` の仕組みを示したものです。 `testPromise()` メソッドは {{HTMLElement("button")}} をクリックする度に呼び出されます。`testPromise()` メソッドは、 {{domxref("setTimeout()")}} を用いて、 1 秒から 3 秒のランダムな時間の後、メソッドがこれまでに呼ばれた回数で履行されるプロミスを作成します。 `Promise()` コンストラクターを使用してプロミスを生成します。

プロミスが履行されたことは、 {{JSxRef("Promise.prototype.then()","p1.then()")}} で設定されたコールバックによって記録されます。この記録から、メソッドの同期処理部分が、プロミスによる非同期処理からどのように分離されているかがわかります。

短時間に何度もボタンをクリックすると、さまざまなプロミスが次々と履行されていく様子を見ることもできます。

#### HTML

```html
<button id="make-promise">プロミスを作成</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";
let promiseCount = 0;

function testPromise() {
  let thisPromiseCount = ++promiseCount;
  let log = document.getElementById('log');
  // 開始
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 開始<br>');
  // 新しいプロミスを作成します。このプロミスで 1 から始まる数値のカウントを (3 秒の待ち時間の後に) 約束します
  let p1 = new Promise((resolve, reject) => {
    // プロミスを解決または拒否する機能を持つ実行関数が呼び出されます
    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise コンストラクター<br>');
    // これは単に非同期にするための例に過ぎません
    window.setTimeout(function() {
        // プロミスを履行させます
        resolve(thisPromiseCount);
    }, Math.random() * 2000 + 1000);
  });

  // プロミスが解決されたときの処理を then() の呼び出しで定義します。
	// プロミスが拒否されたときの処理を catch() の呼び出しで定義しています。
  p1.then(function(val) {
    // Log the fulfillment value
    log.insertAdjacentHTML('beforeend', val + ') Promise 履行<br>');
  }).catch((reason) => {
    // Log the rejection reason
    console.log(`ここでは拒否されたプロミス (${reason}) を処理します。`);
  });
  // 終了
  log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise 生成<br>');
}

if ("Promise" in window) {
  let btn = document.getElementById("make-promise");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.textContent = "ブラウザーが <code>Promise<code> インターフェイスに対応していないので、実行例が利用できません。";
}
```

### 結果

{{EmbedLiveSample("Advanced_Example", "500", "200")}}

### XHR による画像の読み込み

`Promise` と {{domxref("XMLHttpRequest")}} で画像を読み込む別の例は、 MDN GitHub の [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test) リポジトリーにあり、[動作を確認する](https://mdn.github.io/js-examples/promises-test/)ことができます。それぞれの行のコメントで Promise と XHR の構造がよくわかるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Promise` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-promise) で利用できます
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](https://promisesaplus.com/)
- [JavaScript Promises: an introduction](https://web.dev/promises/)
- [Domenic Denicola: Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript](https://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript)
