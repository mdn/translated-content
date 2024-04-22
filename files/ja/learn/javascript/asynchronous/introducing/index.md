---
title: 非同期 JavaScript 入門
slug: Learn/JavaScript/Asynchronous/Introducing
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

この記事では、非同期プログラミングとは何か、なぜそれが必要なのかを説明し、歴史的に JavaScript で非同期関数が実装されてきたいくつかの方法について簡単に説明します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、関数やイベントハンドラーなど、 JavaScript の基本をそれなりに理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        非同期 JavaScript とは何か、同期 JavaScript とどう異なるのか、なぜ必要なのかを知ること。
      </td>
    </tr>
  </tbody>
</table>

非同期プログラミングは、長く続く可能性のあるタスクを開始しても、そのタスクが完了するまで待つのではなく、そのタスクの実行中も他のイベントに応答できるようにする技術です。タスクが完了すると、プログラムはその結果を表示します。

ブラウザーが指定した多くの機能、特にほとんどの興味深い機能は、長い時間がかかる可能性があるため、非同期で実行されます。例えば、

- HTTP リクエストを {{domxref("fetch", "fetch()")}} を使用して行う。
- ユーザーのカメラやマイクに {{domxref("MediaDevices/getUserMedia", "getUserMedia()") }} を使用してアクセスする。
- ユーザーに {{domxref("window/showOpenFilePicker", "showOpenFilePicker()")}} を使用してファイルを選択するよう依頼する。

したがって、自分自身で非同期関数を _実装する_ ことはあまりなくても、正しく _使用すること_ が必要になる可能性は非常に高いのです。

この記事では、まず、非同期プログラミングを必要とする、長時間実行される同期関数の問題点から見ていきます。

## 同期プログラミング

以下のようなコードを考えてみましょう。

```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
```

このコードは、

1. `name` という文字列を宣言します。
2. `greeting` というもう一つの文字列を、 `name` を使用して宣言します。
3. JavaScript コンソールに挨拶文を出力します。

ここで、ブラウザーはプログラムを一度に一行ずつ、私たちが書いた順番に効率よく進めていくことに留意してください。この点で、ブラウザーは次の行に進む前に、その行の動作が完了するのを待ちます。これは、各行が前の行の処理結果に依存しているため、この手順を踏まなければなりません。

このため、これは**同期プログラム**となります。このように別個の関数を呼び出されたとしても、同期的であることに変わりはありません。

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

ここでは、`makeGreeting()` は**同期関数**です。なぜなら、呼び出し側は、この関数が動作を完了して値を返すまで待たないと、処理を続行できないからです。

### 長時間動作する同期関数

同期関数の処理が長時間かかるときはどうすればよいのでしょうか？

下記のプログラムは、ユーザーが「素数を生成する」ボタンをクリックすると、複数の大きな素数を生成するために、とても非効率的なアルゴリズムを使用しています。ユーザーが指定する素数の数が多ければ多いほど、演算にかかる時間が長くなります。

```html
<label for="quota">素数の個数:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">素数の生成</button>
<button id="reload">再読み込み</button>

<div id="output"></div>
```

```js
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `${quota.value} 個の素数を生成しました。`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("A long-running synchronous function", 600, 120)}}

［素数の生成］をクリックしてみてください。コンピューターの速度にもよりますが、プログラムが 「生成しました」のメッセージを表示するまでに、おそらく数秒はかかるでしょう。

### 長時間実行される同期関数の問題点

次の例は、入力するためのテキストボックスを追加した以外は、前回の例と同じです。今回は、［素数の生成］をクリックし、その直後にテキストボックスに入力してみてください。

`generatePrimes()` 関数が実行されている間、このプログラムは完全に無反応であることが分かると思います。

```html hidden
<label for="quota">素数の個数:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">素数の生成</button>
<button id="reload">再読み込み</button>

<textarea id="user-input" rows="5" cols="62">
［素数の生成］を押した直後にここに入力してみてください。
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `${quota.value} 個の素数を生成しました。`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
```

{{EmbedLiveSample("The trouble with long-running synchronous functions", 600, 200)}}

これが長時間実行される同期関数の基本的な問題です。次のことをプログラムする方法が必要になります。

1. 関数を呼んで長時間実行する処理を開始する。
2. その関数が処理を開始してすぐに値を返すようにすることで、プログラムが他のイベントにも応答できるようにします。
3. 最終的に処理が完了したら、その結果を通知する。

これこそまさに非同期関数ができることです。このモジュールの残りの部分では、それらが JavaScript でどのように実装されるかを説明します。

## イベントハンドラー

先ほど見た非同期関数の説明で、イベントハンドラーを思い出したかもしれません。イベントハンドラーは、実に非同期プログラミングの一形態です。イベントが発生したときに、すぐにではなくても呼び出される関数（イベントハンドラー）を提供します。「イベント」が「非同期処理が完了した」というものであれば、そのイベントを使用して、非同期関数呼び出しの結果を呼び出し元に通知することができます。

初期の非同期 API の中には、まさにこのような方法でイベントを使用するものがありました。 {{domxref("XMLHttpRequest")}} は、JavaScript を使ってリモートサーバーに HTTP リクエストを送信する API です。API を使用すると、JavaScript でリモートサーバーに HTTP リクエストを行うことができます。これは長い時間を要するので、非同期 API となっており、 `XMLHttpRequest` オブジェクトにイベントリスナーを装着することで、リクエストの進捗と最終的に完了したことの通知を受けることができます。

以下の例では、これを実践しています。［クリックしてリクエストを開始］を押して、リクエストを送信してみましょう。新しい {{domxref("XMLHttpRequest")}} を作成し、その {{domxref("XMLHttpRequest/loadend_event", "loadend")}} イベントを待ち受けます。ハンドラーは、ステータスコードとともに「完了！」メッセージをログに記録します。

イベントリスナーを追加した後、リクエストを送信します。この後、「XHR リクエストを開始しました」というログが記録されることに注意してください。つまり、リクエストが進行している間、プログラムは実行し続けることができ、リクエストが完了したときにイベントハンドラーが呼び出されます。

```html
<button id="xhr">クリックしてリクエストを開始</button>
<button id="reload">再読み込み</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}ステータス ${xhr.status} で完了しました`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}XHR リクエストを開始しました\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
```

{{EmbedLiveSample("Event handlers", 600, 120)}}

これは、以前のモジュールで出会った[イベントハンドラー](/ja/docs/Learn/JavaScript/Building_blocks/Events)と同じですが、イベントがユーザーの行動、例えば、ユーザーがボタンをクリックすることである代わりに、イベントが何らかのオブジェクトの状態変化であることが異なっています。

## コールバック

イベントハンドラーは、コールバックの一種です。コールバックは単なる関数で、他の関数に渡され、適切なタイミングで呼び出されることを期待するものです。先ほど見たように、コールバックは JavaScript で非同期関数を実装するための主な方法として使用されていました。

しかし、コールバックベースのコードは、コールバック自身がコールバックを受け入れる関数を呼び出さなければならないときに、理解しづらくなることがあります。これは、一連の非同期関数に分解される何らかの処理を実行する必要がある場合によくある状況です。例えば、以下のようなことを考えてみてください。

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```

ここでは、単一の処理を 3 つのステップに分割し、各ステップを最後のステップに依存させることで、1 つの処理としています。この例では、最初のステップで入力に 1 を追加し、2 つ目で 2 を追加し、3 つ目で 3 を追加しています。入力 0 から開始すると、最終結果は 6 (0 + 1 + 2 + 3) となります。同期プログラムとして、これはとてもわかりやすいでしょう。しかし、コールバックを使用してこれらのステップを実装した場合はどうでしょうか？

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
```

コールバックの中でコールバックを呼び出さなければならないので、`doOperation()`関数が深く入れ子になってしまい、読むのもデバッグするのも大変になってしまいます。これは「コールバック地獄」とか「運命のピラミッド」（インデントがピラミッドを横に並べたように見えるから）と呼ばれることもあります。

このようにコールバックを入れ子にすると、エラー処理もとても難しくなります。最上位のレベルで一度だけエラー処理をするのではなく、「ピラミッド」の各レベルでエラー処理をしなければならないことがよくあります。

このような理由から、現代の非同期 API のほとんどはコールバックを使用しません。その代わり、 JavaScript で非同期プログラミングの基礎となるのはプロミス ({{jsxref("Promise")}}) であり、これが次の記事の主題となります。

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}
