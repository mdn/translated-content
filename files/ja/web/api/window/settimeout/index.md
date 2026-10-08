---
title: "Window: setTimeout() メソッド"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> `code` 引数が使用された場合、このメソッドはその値を JavaScript として動的に実行します。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを代入し、[信頼型の強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うようにしてください。
> 情報については、[セキュリティ上の注意事項](#セキュリティ上の注意事項)を参照してください。

**`setTimeout()`** は {{domxref("Window")}} インターフェイスのメソッドで、時間切れになると、関数または指定されたコードの断片を実行するタイマーを設定します。

## 構文

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(func)
setTimeout(func, delay)
setTimeout(func, delay, param1)
setTimeout(func, delay, param1, param2)
setTimeout(func, delay, param1, param2, /* …, */ paramN)
```

### 引数

- `func`
  - : タイマーが満了した後に実行する{{jsxref("Function", "関数")}}。
- `code`
  - : {{domxref("TrustedScript")}} または、コンパイルされ、`delay` ミリ秒後に実行される任意のコードの文字列。
    これは関数を渡す代わりに使用できますが、{{jsxref("Global_Objects/eval", "eval()")}} の使用がセキュリティリスクとなるのと同じ理由から、推奨されません。
- `delay` {{optional_inline}}
  - : 非負の整数で、指定された関数またはコードが実行されるまでの待ち時間をミリ秒単位で表します。
    指定しなかった場合は、デフォルトで 0 になります。

    メモ:
    - 待ち時間の最大値は 2147483647 ミリ秒です。これより大きな値を指定すると、オーバーフローが発生したり、0 が使用されたりする場合があります。
      詳細については、下記[最大待ち時間](#最大待ち時間)を参照してください。
    - 実際の待ち時間は、設定値よりも長くなる場合があります。
      例えば、`delay` を 0 に設定すると、「即座に」ではなく、次のイベントサイクルで実行されます。
      詳細については、[待ち時間が指定値より長い理由](#待ち時間が指定値より長い理由)をご覧ください。
    - 値が数値でなかった場合、その値に対して暗黙の[型強制](/ja/docs/Glossary/Type_coercion)が暗黙のうちに実行され、数値に変換されます。
      これにより、予期せぬ驚くべき結果が生じる可能性があります。例については、[delay の値が数値でない場合は暗黙に数値に強制される](#delay_の値が数値でない場合は暗黙に数値に強制される)を参照してください。
    - 負の値は 0 と同じように扱われます。

- `param1`, …, `paramN` {{optional_inline}}
  - : `func` で指定された関数に渡される追加の引数です。

### 返値

この呼び出しによって作成されたタイマーを一意に識別する正の整数（通常は 1 から 2,147,483,647 の範囲内）。
この識別子は、よく「タイムアウト ID」と呼ばれ、 {{domxref("Window.clearTimeout","clearTimeout()")}} に渡すことで、タイマーを停止することができます。

同じグローバル環境（特定のウィンドウやワーカーなど）内では、元々のタイマーがアクティブな状態である限り、そのタイムアウト ID が新しいタイマーで再利用されることはありません。
ただし、別個のグローバル環境では、それぞれ独自のタイマー ID プールが管理されています。

### 例外

- {{jsxref("SyntaxError")}}
  - : `code` がスクリプトとして解釈できません。
- {{jsxref("TypeError")}}
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていないときに、`code` 引数が文字列に設定されていると、この例外が発生します。
    また、第一引数が対応している型（関数、文字列、`TrustedScript`）のいずれでもない場合にも、この例外が発生します。

## 解説

`setTimeout()` 関数は、よく待ち時間の後で 1 回だけ実行される関数を呼び出すために使用されます。
タイムアウトは、{{domxref("Window.clearTimeout()")}} を使用して取り消すことができます。

関数を繰り返して（例えば _N_ ミリ秒ごとに）呼び出すには、 {{domxref("Window.setInterval", "setInterval()")}} を使用することを検討してください。

### 非同期関数の動作

`setTimeout()` は非同期関数です。これは、タイマー関数は関数スタック内の他の関数の実行を停止させないということです。
言い換えると、 `setTimeout()` を使って、関数スタックの次の関数が起動するまでの「間」を作ることはできません。

以下の例をご覧ください。

```js
setTimeout(() => {
  console.log("これは最初のメッセージです");
}, 5000);
setTimeout(() => {
  console.log("これは 2 番目のメッセージです");
}, 3000);
setTimeout(() => {
  console.log("これは 3 番目のメッセージです");
}, 1000);

// 出力:

// これは 3 番目のメッセージです
// これは 2 番目のメッセージです
// これは最初のメッセージです
```

`setTimeout()` メソッドは 3 回呼び出され、`setTimeout()` が呼び出された順序をログ出力するコールバック関数が渡されます。
先に行われたメソッドの呼び出しの方が遅延時間が長いため、コールバックメソッドはスケジュールされた順序とは逆の順序で実行されます。
もし `setTimeout()` がコールバックが完了するまでブロックしていた場合、出力にはメッセージが順序通りに表示されるでしょう。

非同期メソッドは、実行順序が重要でない場合にタスクを並列に実行することができるため、有益です。

非同期メソッドの完了順序が重要な場合は、[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)（プロミス連鎖）を使用して、タスクの完了を待つことができます。

### 関数はグローバルの `this` と共に呼び出される

`setTimeout()` に渡された関数は、[`this`](/ja/docs/Web/JavaScript/Reference/Operators/this) の参照を決定する際に、通常の関数呼び出しの意味論に従って実行されます。
この問題については、[JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference/Operators/this#callbacks) で詳しく説明されています。

アロー関数の場合、`this` のコンテキストは [`globalThis`](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis) オブジェクト（ブラウザーでは [`window`](/ja/docs/Web/API/Window/window) の別名）に設定されます。

次の例は、これが予期せぬ動作を引き起こす可能性があることを示しています。ここでは、メソッド `counter.count` を `setTimeout()` に直接渡すと、`this` のコンテキストが失われ、`Counter` インスタンスではなくグローバルオブジェクトに対してメソッドが呼び出されてしまいます。その結果、`count` メソッドが `this` にアクセスしようとした際に `TypeError` が発生します。

```js
class Counter {
  constructor() {
    this.data = new Map();
  }

  count(item) {
    this.data.set(item, (this.data.get(item) || 0) + 1);
  }
}

const counter = new Counter();

counter.count("foo"); // "foo" をマップに正常に追加しました
setTimeout(counter.count, 1000, "bar");
// TypeError: Cannot read properties of undefined (reading 'set')
```

この問題を回避するには、`setTimeout` に渡される関数が正しい `this` コンテキストを持つようにする必要があります。これを行う主な方法は 3 つあります。

1. `this` コンテキストを明示的に指定したい場合は、メソッドを直接渡すのではなく、正しいコンテキストでメソッドを明示的に呼び出す別の無名関数でメソッド呼び出しをラップします。

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. `setTimeout()` を呼び出すコードの `this` コンテキストを使用したい場合は、常にアロー関数を使用します。アロー関数は、外側のスコープの `this` コンテキストを継承します。

   ```js example-bad
   class Counter {
     // …
     delayedCount(item) {
       // 誤: コールバック内では `this` のコンテキストが失われる
       setTimeout(function () {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Counter {
     // …
     delayedCount(item) {
       // 正: アロー関数は、`delayedCount()` の `this` コンテキストを継承する
       setTimeout(() => {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. 余分な関数ラッパー（メモリー使用量を増加させる）を避けることができ、かつ `this` コンテキストを明示的に指定したい場合は、[`Function.prototype.bind()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) メソッドを使用することで、正しい `this` コンテキストを持つ新しい関数を生成することができます。

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### delay の値が数値でない場合は暗黙に数値に強制される

もし `setTimeout()` が呼び出されたときの [_delay_](#delay) 値が数値でなかった場合、暗黙のうちに[型変換](/ja/docs/Glossary/Type_coercion)が行われ、その値を数値に変換します。
例えば、次のコードは _delay_ の値として、数値 `1000` ではなく文字列 `"1000"` を使用しています。しかし、コードが実行されると文字列が数値 `1000` に強制されるため、どのみち動作し、1 秒後にコードが実行されます。

```js example-bad
setTimeout(() => {
  console.log("1 秒待ちました。");
}, "1000");
```

しかし、多くの場合、暗黙の型強制は予期しない、驚くべき結果をもたらす可能性があります。
例えば、以下のコードを実行すると、文字列 `"1 second"` は最終的に数字 `0` に変換され、その結果、コードは待ち時間ゼロで直ちに実行されます。

```js example-bad
setTimeout(() => {
  console.log("1 秒待ちました。");
}, "1 second");
```

したがって、 _delay_ の値には文字列を使用せず、常に数値を使用してください。

```js example-good
setTimeout(() => {
  console.log("1 秒待ちました。");
}, 1000);
```

### 最大待ち時間

ブラウザーは待ち時間を内部的に 32 ビット符号付き整数として格納するため、上限は 2,147,483,647 ミリ秒（約 24.8 日）となります。
これを超える待ち時間を使用すると、整数オーバーフローが発生します。
例えば、次のコードでは、

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…タイムアウトが即座に実行される結果となります（`2**32 - 5000` が負の数にオーバーフローするため）。一方、次のコードのようにすると、

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…タイムアウトは約 5 秒後に実行されます。

> [!NOTE]
> Node.js では、2,147,483,647 ミリ秒を超えるタイムアウトを設定すると、即座に実行されます。

### 待ち時間が指定値より長い理由

タイムアウトが満了するまでに予想より長い時間がかかる理由は複数あります。
この節では、もっとも一般的な理由を説明します。

#### 入れ子のタイムアウト

[HTML 標準](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)で指定されているとおり、ブラウザーは `setTimeout` の入れ子になった呼び出しが 5 回スケジュールされると、最小 4 ミリ秒のタイムアウトを強制します。

この例では、 `setTimeout` の呼び出しを `0` ミリ秒の待ち時間でネストし、ハンドラーが呼び出されるたびに待ち時間を記録しています。
最初の 4 回は待ち時間が約 0 ミリ秒、その後は約 4 ミリ秒になります。

```html
<button id="run">実行</button>
<table>
  <thead>
    <tr>
      <th>前回</th>
      <th>今回</th>
      <th>実際の待ち時間</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // この呼び出しの時刻をログ出力
  log(new Date().getMilliseconds());
  // まだ終わっていない場合は、次の呼び出しをスケジュール
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // ログをクリア
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // 反復処理の回数と開始タイムスタンプを初期化
  iterations = 10;
  last = new Date().getMilliseconds();
  // タイマーを開始
  setTimeout(timeout, 0);
}

function log(now) {
  // 最後のタイムスタンプ、新しいタイムスタンプ、および差分をログ出力
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("Nested_timeouts", 100, 250)}}

#### アクティブでないタブのタイムアウト

バックグラウンドのタブによる負荷（および関連するバッテリーの使用量）を軽減するために、ブラウザーはアクティブでないタブの最小タイムアウト時間を強制します。
また、ページがウェブオーディオ API の {{domxref("AudioContext")}} を使用して音声を再生している場合、このタイムアウトが免除されることもあります。

この仕様はブラウザーに依存します。

- Firefox のデスクトップ版と Chrome では、アクティブでないタブの最小タイムアウトは 1 秒です。
- Android 版 Firefox では、アクティブでないタブのタイムアウトは最低 15 分で、タブを完全にアンロードする可能性もあります。
- Firefox は、タブに {{domxref("AudioContext")}} が含まれている場合、アクティブでないタブをスロットルで処理しません。
- Chrome は、タブのアクティブ状況に応じて、さまざまなレベルのスロットル処理を使用します。
  - **最小スロットル処理**: ページが表示されている、最近音を発した、または Chrome によってアクティブとみなされたタイマーに適用されます。タイマーは、リクエストされた間隔に近いタイミングで実行されます。

  - **スロットル処理**: 最小スロットル条件が満たされておらず、以下の条件のいずれかが真の場合にタイマーに適用されます。
    - 入れ子数 (つまり、連鎖したタイマーの呼び出しの数) が 5 未満である。
    - ページが表示されなくなってから 5 分以内。
    - WebRTC がアクティブである。

  この状態のタイマーは 1 秒ごとに 1 回チェックされます。このチェックは、同様のタイムアウトを持つ他のタイマーとまとめてバッチ処理される場合があります。
  - **集中的なスロットル処理**: Chrome 88（2021 年 1 月）で導入されました。最小スロットル処理もスロットル処理の条件も満たされておらず、次の条件がすべて満たされている場合に、タイマーに適用されます。
    - 入れ子数が 5 以上。
    - ページが表示されなくなってから 5 分以上経過している。
    - ページが 30 秒以上無操作である。
    - WebRTC がアクティブではない。

  この状態のタイマーは 1 分に 1 回チェックされ、同様のタイムアウトを持つ他のタイマーとまとめて処理される場合があります。

#### トラッキングスクリプトのタイムアウトを制限する

Firefox は、トラッキングスクリプトとして認識されたスクリプトに対して追加のスロットルを適用します。
フォアグラウンドで実行されている場合、最小待ち時間は 4ms のままです。しかし、バックグラウンドのタブでは、最小待ち時間は 10,000ms （10 秒）で、文書が最初に読み込まれてから 30 秒後に有効になります。

詳しくは、[トラッキング保護](https://wiki.mozilla.org/Security/Tracking_protection)を参照してください。

#### タイムアウトの待ち時間

ページ（または OS やブラウザー）が他のタスクでビジー状態場合、タイムアウトが予想より遅れて発生することがあります。
注意すべき重要なケースとして、 `setTimeout()` を呼び出したスレッドが終了するまで、関数やコードスニペットを実行することができないことがあります。例えば、

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

このコードは、コンソールへ以下のように出力します。

```plain
After setTimeout
foo has been called
```

これは `setTimeout` を待ち時間 0 で呼び出したとしても、直ちに実行するのではなくキューに載せて、次の機会に実行するようスケジューリングされるためです。
現在実行中のコードはキューにある関数を実行する前に完了しなければならず、このために実行結果の順序が想定どおりにならない場合があります。

#### ページロード中のタイムアウトの待ち時間

Firefox は現在のタブがロードされている間、 `setTimeout()` タイマーの発行を延期します。メインスレッドがアイドルと判断されるまで（{{domxref("Window.requestIdleCallback()")}} と同様）、または load イベントが発生するまで起動が延期されます。

### WebExtension のバックグラウンドページとタイマー

[WebExtension](/ja/docs/Mozilla/Add-ons/WebExtensions) では、 `setTimeout()` は信頼できる動作をしません。拡張機能の作者は、代わりに [`alarms`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API を使用してください。

### セキュリティ上の注意事項

このメソッドを使用すると、`code` 引数で渡された任意の入力を実行することができます。
この入力がユーザーから指定された、安全性が保証されていない文字列である場合、これは [クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。

例えば、次のコードは、`setTimeout()` がユーザーから指定された `untrustedCode` を実行してしまう可能性があることを示しています。

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) で [`script-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) または [`default-src`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) を指定しているウェブサイトでは、デフォルトでそのようなコードの実行が阻止されます。
CSP で [`unsafe-eval`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) を指定することで `setTimeout()` の実行をすることができるのですが、これは CSP の主要な保護機能の 1 つを無効にするため、安全ではありません。
CSP ガイドの[インライン JavaScript](/ja/docs/Web/HTTP/Guides/CSP#インライン_javascript) を参照してください。

どうしても `setTimeout()` を通じてスクリプトを実行しなければならない場合は、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを代入することで、これらの問題を軽減できます。また、[信頼型の強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行い、[`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) を CSP ディレクティブとして使用することで、これらの問題を軽減できます。
これにより、入力が確実に変換関数を通過するようになります。

`setTimeout()` を実行することができるようにするには、CSP の `script-src` ディレクティブに [`trusted-types-eval` キーワード](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) を追加で指定します。
これは `unsafe-eval` と同様に機能しますが、信頼型が有効になっている場合にのみメソッドの評価を許可します（`unsafe-eval` を使用した場合、信頼型に対応していないブラウザーでも実行が許可されてしまいます）。

例えば、サイトに必要な CSP は次のような形になるでしょう。

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

変換関数の動作は、ユーザーが提供するスクリプトが要求される特定の用途によって異なります。
可能であれば、実行を許可するスクリプトを、実行しても安全だと判断したコードに厳密に限定すべきです。
それが不可能な場合は、指定された文字列内の特定の関数の使用を許可またはブロックすることもあります。

## 例

これらの例では簡潔さを重視し、信頼型の使用は省略していることに注意してください。
期待される手法を示すコードについては、`eval()` における [`TrustedScript` の使用](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) を参照してください。

### タイムアウトの設定と取り消し

以下の例はウェブページに 2 つのシンプルなボタンを置いており、`setTimeout()` および `clearTimeout()` のルーチンを実行します。1 番目のボタンを押下すると 2 秒後にアラートダイアログを呼び出すタイムアウトを設定して、`clearTimeout()` で使用するタイムアウト ID を保存します。2 番目のボタンを押下すると、このタイムアウトをキャンセルできます。

#### HTML

```html
<button id="show">2 秒後にアラートボックスを表示</button>
<button id="cancel">アラート発生前に取り消し</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "本当に遅い！");
}

function clearMessage() {
  clearTimeout(timeoutID);
}

document.getElementById("show").addEventListener("click", delayedMessage);
document.getElementById("cancel").addEventListener("click", clearMessage);
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### 結果

{{EmbedLiveSample('Setting_and_clearing_timeouts')}}

{{domxref("Window.clearTimeout", "clearTimeout()")}} の例も参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`setTimeout` のポリフィルで、コールバックに引数を渡すことができるもの (`core-js`)](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("Window.clearTimeout()")}}
- {{domxref("WorkerGlobalScope.setTimeout()")}}
- {{domxref("Window.setInterval()")}}
- {{domxref("Window.requestAnimationFrame()")}}
- {{domxref("Window.queueMicrotask()")}}
