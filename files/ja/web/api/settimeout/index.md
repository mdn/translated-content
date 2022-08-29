---
title: setTimeout()
slug: Web/API/setTimeout
tags:
  - API
  - HTML DOM
  - Intervals
  - JavaScript タイマー
  - MakeBrowserAgnostic
  - メソッド
  - NeedsMarkupWork
  - リファレンス
  - Timers
  - setTimeout
  - ポリフィル
browser-compat: api.setTimeout
translation_of: Web/API/WindowOrWorkerGlobalScope/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---
{{APIRef("HTML DOM")}}

グローバルの **`setTimeout()`** メソッドは、時間切れになると関数または指定されたコードの断片を実行するタイマーを設定します。

## 構文

```js
var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(function[, delay]);
var timeoutID = setTimeout(code[, delay]);
```

### 引数

- `function`
  - : タイマーが満了した後に実行する{{jsxref("function", "関数")}}。
- `code`
  - : 関数の代わりに文字列を含める代替構文も許容されており、タイマーが満了したときに文字列をコンパイルして実行します。 {{jsxref("Global_Objects/eval", "eval()")}} の使用にリスクがあるのと同じ理由で、この構文は**推奨しません**。
- `delay` {{optional_inline}}
  - : 指定した関数やコードを実行する前に待つタイマーの時間をミリ秒 (1/1000 秒) 単位で指定します。この引数を省略すると値 0 を使用しますので "直ちに" 実行する、より正確に言えばできるだけ早く実行することを意味します。どちらの場合も、実際の遅延が想定より長くなることがあります。後述する[遅延が指定値より長い理由](#遅延が指定値より長い理由)をご覧ください。
- `arg1, ..., argN` {{optional_inline}}
  - : タイマーが満了したときに、 `function` で指定された関数に渡す追加の引数です。

## 返値

返される `timeoutID` は正の整数値で、 `setTimeout()` を呼び出して作成したタイマーを識別します。この値を {{domxref("clearTimeout","clearTimeout()")}} へ渡すことで、タイムアウトを取り消すことができます。

`timeoutID` の値は、同じオブジェクト (ウィンドウやワーカー) において、後に `setTimeout()` や `setInterval()` を呼び出しても再使用されないことが保証されています。ただし、別なオブジェクトでは別の ID プールを使用します。

## 解説

タイムアウトは、 {{domxref("clearTimeout()")}} を使用して取り消すことができます。

関数を繰り返して（例えば _N_ ミリ秒ごとに）呼び出すには、 {{domxref("setInterval()")}} を使用することを検討してください。

### 非同期関数の動作

`setTimeout()` は非同期関数です。これは、タイマー関数は関数スタック内の他の関数の実行を停止させないということです。
言い換えると、 `setTimeout()` を使って、関数スタックの次の関数が起動するまでの「間」を作ることはできません。

以下の例をご覧ください。

```js
  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);

  // 出力:

  // this is the third message
  // this is the second message
  // this is the first message
```

最初の関数は、 2 番目の関数を呼び出す前に 5 秒間の「間」を作らないことに注意してください。その代わり、 1 番目の関数が呼び出されますが、実行されるまで 5 秒間待機します。 1 番目の関数が実行を待っている間に 2 番目の関数が呼び出され、 2 番目の関数が実行される前に 3 秒の待ち時間が適用されます。 1 番目の関数も 2 番目の関数もタイマーが終了していないので、 3 番目の関数が呼び出され、先に実行を完了します。その後、 2 番目の関数が続きます。そして、最後に 1 番目の関数のタイマーが終了した後、 1 番目の関数が実行されます。

ある関数が実行された後に別の関数が実行されるような処理を行うには、[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)のドキュメントを参照してください。

### "this" の問題

`setTimeout()` にメソッドを渡すと、 `this` が期待とは異なる値で起動されることがあります。一般的な問題は [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Operators/this#オブジェクトのメソッドとして)で詳細に説明されています。

`setTimeout()` によって実行されるコードは、 `setTimeout` が呼び出された関数とは別の実行コンテキスト内から呼び出されます。呼び出された関数に `this` キーワードを設定する通常の規則を適用して、呼び出しあるいは `bind` で `this` を設定しなければ、厳格モードでなければ `global` (または `window`)、厳格モードでは undefined になります。これは、 `setTimeout` が呼び出された関数の `this` 値と同じにはなりません。

以下の例をご覧ください。

```js
const myArray = ['zero', 'one', 'two'];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // "zero,one,two" と表示
myArray.myMethod(1); // "one" と表示
```

`myMethod` を呼び出したときに、呼び出しによって `this` が `myArray` に設定されますので、関数内で `this[sProperty]` は `myArray[sProperty]` と等価です。しかし、以下のコードでは動作が異なります。

```js
setTimeout(myArray.myMethod, 1.0*1000); // "[object Window]" と 1 秒後に表示
setTimeout(myArray.myMethod, 1.5*1000, '1'); // "undefined" と 1.5 秒後に表示
```

`myArray.myMethod` 関数を `setTimeout` に渡しており、関数が呼び出されると `this` が前のように設定されず、既定の `window` オブジェクトになります。

Array の {{jsxref("Array.forEach()", "forEach()")}} や {{jsxref("Array.reduce()", "reduce()")}} などのメソッドにあるような、`thisArg` を `setTimeout` に渡すオプションもありません。また以下のように、`this` を設定するために `call` を使用する方法も動作しません。

```js
setTimeout.call(myArray, myArray.myMethod, 2.0*1000); // エラー
setTimeout.call(myArray, myArray.myMethod, 2.5*1000, 2); // 同じエラー
```

#### 解決策

##### ラッパー関数の使用

この問題の一般的な解決策は、`this` に必要な値を設定するラッパー関数を使用することです。

```js
setTimeout(function(){myArray.myMethod()}, 2.0*1000); // "zero,one,two" と 2 秒後に表示
setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // "one" と 2.5 秒後に表示
```

代わりにアロー関数も使用することができます。

```js
setTimeout(() => {myArray.myMethod()}, 2.0*1000); // "zero,one,two" と 2 秒後に表示
setTimeout(() => {myArray.myMethod('1')}, 2.5*1000); // "one" と 2.5 秒後に表示
```

##### bind() の使用

他に、 {{jsxref("Function.bind()", "bind()")}} を使用して `this` の値をその関数のすべての呼び出しに設定することができます。

```js
const myArray = ['zero', 'one', 'two'];
const myBoundMethod = (function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
}).bind(myArray);

myBoundMethod(); // "zero,one,two" と表示。関数内で 'this' が myArray に結び付けられているため。
myBoundMethod(1); // "one" と表示
setTimeout(myBoundMethod, 1.0*1000); // こちらも結びつけがあるため "zero,one,two" と 1 秒後に表示
setTimeout(myBoundMethod, 1.5*1000, "1"); // "one" と 1.5 秒後に表示
```

### 文字列リテラルの使用

関数の代わりに文字列を `setTimeout()` に渡すと、[`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) を使うのと同様の問題が発生します。

```js example-bad
// こうやってはいけない
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// こうすればよい
setTimeout(function() {
  console.log('Hello World!');
}, 500);
```

`{{domxref("setTimeout()")}}` に渡した文字列はグローバルコンテキストで評価されます。そのため、`{{domxref("setTimeout()")}}` が呼び出されたコンテキストのローカルシンボルは、文字列を評価したコードからは利用できません。

### 遅延が指定値より長い理由

タイムアウトが満了するまでに予想より長い時間がかかる理由は複数あります。この節では、もっとも一般的な理由を説明します。

#### 入れ子のタイムアウト

[HTML 標準](https://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers)で指定されているとおり、ブラウザーは `setTimeout` の入れ子になった呼び出しが5回スケジュールされると、最小 4 ミリ秒のタイムアウトを強制します。

この例では、 `setTimeout` の呼び出しを `0` ミリ秒の遅延でネストし、ハンドラーが呼び出されるたびに遅延時間を記録しています。最初の 4 回は遅延が約 0 ミリ秒、その後は約 4 ミリ秒になります。

```html
<button id="run">Run</button>
<pre>previous    this    actual delay</pre>
<div id="log"></div>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  logline(new Date().getMilliseconds());

  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // clear the log
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // initialize iteration count and the starting timestamp
  iterations = 10;
  last = new Date().getMilliseconds();

  // start timer
  setTimeout(timeout, 0);
}

function pad(number) {
  return number.toString().padStart(3, "0");
}

function logline(now) {
  // log the last timestamp, the new timestamp, and the difference
  const newLine = document.createElement("pre");
  newLine.textContent = `${pad(last)}         ${pad(now)}          ${now - last}`;
  document.getElementById("log").appendChild(newLine);
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

{{EmbedLiveSample("Nested_timeouts", 100, 420)}}

#### アクティブでないタブのタイムアウト

バックグラウンドのタブによる負荷（および関連するバッテリーの使用量）を軽減するために、ブラウザはアクティブでないタブの最小タイムアウト時間を強制します。また、ページがウェブ音声 API の {{domxref("AudioContext")}} を使用して音声を再生している場合、このタイムアウトが免除されることもあります。

この仕様はブラウザーに依存します。

- Firefox のデスクトップ版と Chrome では、アクティブでないタブの最小タイムアウトは 1 秒です。
- Android 版 Firefox では、非アクティブなタブのタイムアウトは最低 15 分で、タブを完全にアンロードすることもできます。
- Firefox は、タブに {{domxref("AudioContext")}} が含まれている場合、アクティブでないタブをスロットルで処理しません。

#### トラッキングスクリプトのタイムアウトを制限する

Firefox は、トラッキングスクリプトとして認識されたスクリプトに対して追加のスロットルを適用します。
フォアグラウンドで実行されている場合、最小遅延は 4ms のままです。しかし、バックグラウンドのタブでは、最小遅延時間は 10,000ms （10 秒）で、文書が最初に読み込まれてから 30 秒後に有効になります。

詳しくは、[トラッキング保護](https://wiki.mozilla.org/Security/Tracking_protection)を参照してください。

#### タイムアウトの遅延

ページ（または OS やブラウザー）が他のタスクでビジー状態場合、タイムアウトが予想より遅れて発生することがあります。注意すべき重要なケースとして、 `setTimeout()` を呼び出したスレッドが終了するまで、関数やコードスニペットを実行することができないことがあります。例えば、

```js
function foo() {
  console.log('foo has been called');
}
setTimeout(foo, 0);
console.log('After setTimeout');
```

このコードは、コンソールへ以下のように出力します。

```
After setTimeout
foo has been called
```

これは `setTimeout` を遅延 0 で呼び出したとしても、直ちに実行するのではなくキューに載せて、次の機会に実行するようスケジューリングされるためです。現在実行中のコードはキューにある関数を実行する前に完了しなければならず、このために実行結果の順序が想定どおりにならない場合があります。

#### ページロード中のタイムアウトの遅延

Firefox は現在のタブがロードされている間、 `setTimeout()` タイマーの発行を延期します。メインスレッドがアイドルと判断されるまで（[window.requestIdleCallback()](/ja/docs/Web/API/Window/requestIdleCallback) と同様）、または load イベントが発生するまで起動が延期されます。

### WebExtension のバックグラウンドページとタイマー

[WebExtension](/ja/docs/Mozilla/Add-ons/WebExtensions) では、 `setTimeout()` は信頼できる動作をしません。拡張機能の作者は、代わりに [`alarms`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API を使用してください。

### 最大の遅延時間

Internet Explorer、Chrome、Safari、Firefox を含むブラウザーは、内部で遅延時間を 32 ビット符号付き整数値で保存します。このため 2,147,483,647 ms (約 24.8 日) より大きな遅延時間を使用すると整数値がオーバーフローして、その結果直ちに実行されるタイムアウトになります。

## 例

### タイムアウトの設定と取り消し

以下の例はウェブページに 2 つのシンプルなボタンを置いており、`setTimeout()` および `clearTimeout()` のルーチンを実行します。1 番目のボタンを押下すると 2 秒後にアラートダイアログを呼び出すタイムアウトを設定して、`clearTimeout()` で使用するタイムアウト ID を保存します。2 番目のボタンを押下すると、このタイムアウトをキャンセルできます。

#### HTML

```html
<button onclick="delayedMessage();">2 秒後にアラートボックスを表示</button>
<button onclick="clearMessage();">アラート発生前に取り消し</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, '本当に遅い！');
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: .5rem 0;
}
```

#### 結果

{{EmbedLiveSample('Setting_and_clearing_timeouts')}}

[`clearTimeout()` の例](/ja/docs/Web/API/clearTimeout#example)も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`core-js` にある `setTimeout` のポリフィルで、コールバックに引数を渡すことができるもの](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("clearTimeout")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
- {{domxref("queueMicrotask()")}}
