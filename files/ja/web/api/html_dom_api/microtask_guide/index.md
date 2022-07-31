---
title: JavaScript で queueMicrotask() によるマイクロタスクの使用
slug: Web/API/HTML_DOM_API/Microtask_guide
tags:
  - API
  - バッチ
  - ガイド
  - HTML DOM
  - JavaScript
  - マイクロタスク
  - キュー
  - リファレンス
  - ServiceWorker
  - SharedWorker
  - Window
  - ワーカー
  - 非同期
  - queueMicrotask
translation_of: Web/API/HTML_DOM_API/Microtask_guide
---
{{APIRef("HTML DOM")}}

**マイクロタスク**は、それを作成した関数やプログラムが終了した後、 [JavaScript 実行スタック](/ja/docs/Web/JavaScript/EventLoop#stack)が空の場合にのみ実行され、{{Glossary("user agent", "ユーザーエージェント")}}がスクリプトの実行環境を動かすために使用しているイベントループにコントロールを返す前に実行される短い関数です。

このイベントループは、ブラウザーのメインイベントループか、[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)を駆動するイベントループのどちらかです。これにより、他のスクリプトの実行を妨げるリスクなしに与えられた関数を実行することができ、同時に、ユーザーエージェントがマイクロタスクによって行われるアクションに反応する機会を得る前に、マイクロタスクが確実に実行されるようにします。

JavaScript の[プロミス](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)と[変更監視 API](/ja/docs/Web/API/MutationObserver) は、どちらもコールバック実行にマイクロタスクキューを使用しますが、現在のイベントループパスがラップされるまで作業を遅延する能力がある他の場合があります。サードパーティのライブラリー、フレームワーク、ポリフィルによってマイクロタスクが使用できるようにするために、 {{domxref("queueMicrotask()")}} メソッドが {{domxref("Window")}} と {{domxref("Worker")}} インターフェイスで公開されています。

## タスクとマイクロタスク

マイクロタスクについて正しく議論するためには、まず JavaScript のタスクとは何か、マイクロタスクはタスクとどう違うのかを知っておくと便利です。これは簡単で単純な説明ですが、より詳細を知りたい場合は、記事 [徹底解説: マイクロタスクと JavaScript ランタイム環境](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth) の情報を読んでみてください。

### タスク

**タスク**とは、プログラムの初期実行、イベントコールバックの実行、インターバルやタイムアウトの発生など、標準的なメカニズムによって実行がスケジュールされる JavaScript コードのことです。これらはすべて**タスクキュー**にスケジューリングされます。

タスクは、以下の場合にタスクキューに追加されます。

- 新しい JavaScript プログラムやサブプログラムが（コンソールから、あるいは {{HTMLElement("script")}} 要素内のコードを実行して）直接実行されたとき。
- イベントが発生し、イベントのコールバック関数がタスクキューに追加された場合。
- {{domxref("setTimeout()")}} または {{domxref("setInterval()")}} で作成したタイムアウトまたはインターバルに達すると、対応するコールバックがタスクキューに追加されます。

コードを駆動するイベントループは、これらのタスクがキューに入れられた順番に次々と処理します。タスクキューで最も古い実行可能なタスクは、イベントループの 1 回の反復の間に実行されます。その後、マイクロタスクはマイクロタスクキューが空になるまで実行され、ブラウザーはレンダリングの更新を選択できます。その後、ブラウザーはイベントループの次の反復処理に移行します。

### マイクロタスク

最初、マイクロタスクとタスクの違いは小さいように見えます。どちらもキューに入れられ、適切なタイミングで実行される JavaScript のコードで構成されています。しかし、イベントループは反復が始まったときにキューに存在したタスクだけを次々と実行するのに対し、マイクロタスクのキューはとても異なる方法で処理されます。

主な違いは 2 つあります。

まず、タスクが終了するたびに、イベントループは、タスクが他の JavaScript コードに制御を返しているかどうかをチェックします。もしそうでなければ、マイクロタスクキューにあるすべてのマイクロタスクを実行します。マイクロタスクキューは、イベントや他のコールバックを処理した後を含め、イベントループの反復ごとに複数回処理されます。

次に、マイクロタスクが {{domxref("queueMicrotask()")}} を呼び出してキューにさらにマイクロタスクを追加すると、それらの新しく追加されたマイクロタスクは次のタスクが実行される前に*実行*されます。これは、イベントループが、たとえ追加され続けても、キューに何も残らなくなるまでマイクロタスクを呼び続けるからです。

> **Warning:** マイクロタスクはそれ自身がさらにマイクロタスクをキューに入れることができ、イベントループはキューが空になるまでマイクロタスクを処理し続けるので、イベントループがマイクロタスクを延々と処理し続けるという現実的なリスクが存在します。再帰的にマイクロタスクを追加する方法には注意が必要です。

## マイクロタスクの使用

この話を進める前に、ほとんどの開発者はマイクロタスクをあまり使わないであろうということを、もう一度書いておきます。マイクロタスクは、最近のブラウザーベースの JavaScript 開発における非常に特殊な機能で、ユーザーのコンピューターで発生することを待つ長い一連の作業の中で、他の作業の前にジャンプするコードをスケジュールすることを可能にします。この機能を乱用すると、パフォーマンスの問題につながります。

### マイクロタスクのキュー挿入

そのため、通常、マイクロタスクは他に解決策がない場合、または実装している機能を作るためにマイクロタスクを使う必要があるフレームワークやライブラリーを作る場合にのみ、使用すべきです。これまでもマイクロタスクをキューに挿入するためのトリックはありましたが（すぐに解決するプロミスを作るなど）、{{domxref("queueMicrotask()")}} メソッドの追加により、トリックなしで安全にマイクロタスクを導入するための標準的な方法が追加されました。

`queueMicrotask()` を導入することで、マイクロタスクを作成するためにプロミスを使用してこっそり行うときに発生する癖を回避することができます。例えば、マイクロタスクを作成するためにプロミスを使用する場合、コールバックによって投げられた例外は標準的な例外として報告されるのではなく、プロミスが拒否されたものとして報告されます。また、プロミスの作成と破棄は、マイクロタスクを適切にキューに挿入する関数が回避する、時間とメモリの両方において追加のオーバーヘッドを取ります。

コンテキストがマイクロタスクを処理している間に呼び出す JavaScript 関数 ({{jsxref("Function")}}) を `queueMicrotask()` メソッドに渡します。このメソッドは、現在の実行コンテキストに応じて {{domxref("Window")}} または {{domxref("Worker")}} インターフェイスによって定義されたグローバルコンテキストで公開されます。

```js
queueMicrotask(() => {
  /* ここにマイクロタスク内で実行されるコードを置く */
});
```

マイクロタスク関数自体は、引数を取らず、値も返しません。

### マイクロタスクを使用すべき時

この節では、マイクロタスクが特に有用であるシナリオを紹介します。一般的には、 JavaScript の実行コンテキストの本体が終了した後、イベントハンドラー、タイムアウトやインターバル、その他のコールバックが処理される前に、結果をキャプチャしたりチェックしたり、クリーンアップを実行したりすることを指します。

それはいつ役に立つのでしょうか？

マイクロタスクを使用する主な理由は次のとおりです。結果やデータが同期的に利用できる場合でも、タスクの一貫した順序付けを保証すると同時に、ユーザーが識別できる操作の遅れのリスクを低減するためです。

#### プロミスの条件付き使用に関する並べ替えの確保

マイクロタスクが実行順序が常に一貫していることを保証するために使われる 1 つの状況は、プロミスが `if...else` 文（または他の条件文）の 1 つの節で使われ、他の節では使われないときです。次のようなコードを考えてみてください。

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    this.data = this.cache[url];
    this.dispatchEvent(new Event("load"));
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

ここで紹介する問題は、 `if...else` 文の 1 つのブランチでタスクを使い（画像がキャッシュにある場合）、 `else` 節でプロミスを使用することにより、例えば以下のように、処理の順序が異なる状況が発生することです。

```js
element.addEventListener("load", () => console.log("Loaded data"));
console.log("Fetching data...");
element.getData();
console.log("Data fetched");
```

このコードを 2 回連続で実行すると、以下のような結果になります。

データをキャッシュしていない場合

```
Fetching data
Data fetched
Loaded data
```

データをキャッシュしている場合

```
Fetching data
Loaded data
Data fetched
```

さらに悪いことに、このコードの実行が終了するまでに、要素の `data` プロパティが設定されることもあれば、設定されないこともあります。

この 2 つの節のバランスをとるために、 `if` 節でマイクロタスクを使用することで、これらの操作の一貫した順序を保証することができます。

```js
customElement.prototype.getData = url => {
  if (this.cache[url]) {
    queueMicrotask(() => {
      this.data = this.cache[url];
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(result => result.arrayBuffer()).then(data => {
      this.cache[url] = data;
      this.data = data;
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

これは、マイクロタスク内で `data` の設定と `load` イベントの発行の両方を処理させることで、節のバランスを取っています（`if` 節では `queueMicrotask()` を使い、 `else` 節では {{domxref("fetch()")}} が使うプロミスを使用する）。

#### 操作のバッチ化

また、マイクロタスクを使用して、様々なソースからの複数のリクエストを単一のバッチに収集し、同じ種類の作業を処理するために複数の呼び出しに伴う可能性のあるオーバーヘッドを回避することができます。

以下のスニペットは、複数のメッセージを配列にバッチする関数を作成し、コンテキストが終了したときにそれらを単一のオブジェクトとして送信するためにマイクロタスクを使用します。

```js
const messageQueue = [];

let sendMessage = message => {
  messageQueue.push(message);

  if (messageQueue.length === 1) {
    queueMicrotask(() => {
      const json = JSON.stringify(messageQueue);
      messageQueue.length = 0;
      fetch("url-of-receiver", json);
    });
  }
};
```

`sendMessage()` が呼び出されると、まず指定されたメッセージがメッセージキューの配列にプッシュされます。それからが面白いのです。

配列に追加したメッセージが最初のものであれば、バッチを送信するマイクロタスクをキューに入れます。マイクロタスクは、いつものように、 JavaScript の実行パスが最上位に達したとき、コールバックを実行する直前に実行されます。つまり、その間に行われる `sendMessage()` のさらなる呼び出しは、メッセージをメッセージキューにプッシュしますが、マイクロタスクを追加する前に配列の長さをチェックするため、新しいマイクロタスクはキューに入れません。

マイクロタスクが実行されるとき、それは潜在的に多くのメッセージが待っている配列を持っています。それは、 {{jsxref("JSON.stringify()")}} メソッドを使用して JSON としてそれをエンコードすることから始まります。その後、配列の内容が不要になったので、 `messageQueue` 配列を空にします。最後に、{{domxref("fetch()")}} メソッドを用いて、 JSON 文字列をサーバーに送信します。

これにより、イベントループの同じイテレーションの中で行われる `sendMessage()` のすべての呼び出しが、タイムアウトなどの他のタスクによって送信が遅れる可能性を排除して、同じ `fetch()` 操作にメッセージを追加することができます。

サーバーは JSON 文字列を受信し、おそらくそれをデコードして、結果の配列の中で見つけたメッセージを処理します。

## 例

### 単純なマイクロタスクの例

この単純な例では、マイクロタスクをキューに入れるすることで、この最上位スクリプトの本体が実行され終わった後に、マイクロタスクのコールバックが実行されることがわかります。

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

次のコードでは、マイクロタスクの実行をスケジュールするために {{domxref("queueMicrotask()")}} を呼び出しています。この呼び出しは、画面にテキストを出力するカスタム関数である `log()` への呼び出しで括られています。

```js
log("Before enqueueing the microtask");
queueMicrotask(() => {
  log("The microtask has run.")
});
log("After enqueueing the microtask");
```

#### 結果

{{EmbedLiveSample("Simple_microtask_example", 640, 80)}}

### タイムアウトとマイクロタスクの例

この例では、タイムアウトは 0 ミリ秒後に（または「できるだけ早く」）発生するようにスケジュールされています。これは、新しいタスクをスケジューリングするとき（例えば `setTimeout()`）とマイクロタスクを使うときの「できるだけ早く」が何を意味するかの違いを示しています。

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

次のコードでは、マイクロタスクの実行をスケジュールするために {{domxref("queueMicrotask()")}} を呼び出しています。この呼び出しは、画面にテキストを出力するカスタム関数である `log()` への呼び出しで括られています。

以下のコードでは、 0 ミリ秒後にタイムアウトが発生するようにスケジュールし、マイクロタスクをキューに入れています。これは、追加のメッセージを出力するために `log()` を呼び出すことで括られています。

```js
let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");
```

#### 結果

{{EmbedLiveSample("Timeout_and_microtask_example", 640, 100)}}

メインプログラム本体から記録された出力が最初に表示され、次にマイクロタスクからの出力、そしてタイムアウトのコールバックの順に表示されることに注意してください。これは、メインプログラムの実行を処理しているタスクが終了するとき、タイムアウトのコールバックがあるタスクキューよりもマイクロタスクキューの方が先に処理されるからです。タスクとマイクロタスクは別々のキューに保存され、マイクロタスクが最初に実行されることを覚えておくと、この点を整理するのに役立ちます。

### 関数からマイクロタスク

この例では、いくつかの作業を行う関数を追加することで、前の例を少し拡張しています。この関数は `queueMicrotask()` を使ってマイクロタスクのスケジューリングを行っています。この例で重要なことは、マイクロタスクは関数が終了するときに処理されるのではなく、メインプログラムが終了するときに処理されるということです。

```html hidden
<pre id="log">
</pre>
```

#### JavaScript

```js hidden
let logElem = document.getElementById("log");
let log = s => logElem.innerHTML += s + "<br>";
```

メインプログラムのコードは以下の通りです。ここで `doWork()` 関数は `queueMicrotask()` を呼び出しますが、それでもマイクロタスクはプログラム全体が終了するまで起動しません。なぜなら、タスクが終了して実行スタック上に何もなくなったときがそうだからです。

```js
let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

let doWork = () => {
  let result = 1;

  queueMicrotask(urgentCallback);

  for (let i=2; i<=10; i++) {
    result *= i;
  }
  return result;
};

log("Main program started");
setTimeout(callback, 0);
log(`10! equals ${doWork()}`);
log("Main program exiting");
log("Regular timeout callback has run");
```

#### 結果

{{EmbedLiveSample("Microtask_from_a_function", 640, 100)}}

## 関連情報

- [徹底解説: マイクロタスクと JavaScript ランタイム環境](/ja/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- {{domxref("queueMicrotask()")}}
- [非同期 JavaScript](/ja/docs/Learn/JavaScript/Asynchronous)

  - [非同期プログラミングの一般的概念](/ja/docs/Learn/JavaScript/Asynchronous/Concepts)
  - [非同期 JavaScript 入門](/ja/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [強調的非同期 JavaScript: タイムアウトとインターバル](/ja/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
  - [プロミスによる礼儀正しい非同期プログラミング](/ja/docs/Learn/JavaScript/Asynchronous/Promises)
  - [正しいアプローチの選択](/ja/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
