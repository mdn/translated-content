---
title: ウェブワーカーの使用
slug: Web/API/Web_Workers_API/Using_web_workers
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{DefaultAPISidebar("Web Workers API")}}

ウェブワーカーは、ウェブコンテンツがスクリプトをバックグラウンドのスレッドで実行するためのシンプルな手段です。ワーカースレッドは、ユーザーインターフェイスを妨げることなくタスクを実行できます。さらに、 {{domxref("WorkerGlobalScope/fetch", "fetch()")}} や {{domxref("XMLHttpRequest")}} など API を用いて、ネットワークリクエストを行うことができます。ワーカーが生成されると、それを作成した JavaScript コードが指定するイベントハンドラーにメッセージを投稿することで、そのコードにメッセージを送ることができます（逆も同様）。

この記事では、ウェブワーカーを使用するための詳しい紹介をしています。

## ウェブワーカー API

ワーカーはコンストラクター（{{domxref("Worker.Worker", "Worker()")}} など）を使用して生成されるオブジェクトであり、名前付きの JavaScript ファイル（このファイルはワーカースレッドで実行するコードを持ちます）を実行します。またワーカーは、現在の {{domxref("window")}} とは異なるグローバルコンテキストで実行されます。従って、 {{domxref("window")}} を（{{domxref("window.self","self")}} の代わりに）使用して現在のグローバルスコープを取得しようとすると、 {{domxref("Worker")}} の中ではエラーが返されます。

ワーカーのコンテキストは、専用ワーカー（単一のスクリプトで利用される標準的なワーカー）の場合は {{domxref("DedicatedWorkerGlobalScope")}} オブジェクトで表されます（共有ワーカーの場合は {{domxref("SharedWorkerGlobalScope")}} です）。専用ワーカーは、最初にワーカーを起動したスクリプトだけがアクセスできます。一方、共有ワーカーは複数のスクリプトからアクセスできます。

> [!NOTE]
> ワーカーのリファレンスドキュメントや追加のガイドについては、[ウェブワーカー API のトップページ](/ja/docs/Web/API/Web_Workers_API)をご覧ください。

ワーカースレッドでは、どのようなコードでも実行できますが、いくつかの制限があります。例えば、ワーカー内から直接 DOM を操作することはできません。また {{domxref("window")}} オブジェクトの既定のメソッドやプロパティで、使用できないものがあります。それでも、`window` 配下にある多数の項目、たとえば [WebSocket](/ja/docs/Web/API/WebSockets_API) や、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API) のようなデータストレージ機構などを使用できます。詳しくは[ワーカーで使用できる関数やクラス](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)をご覧ください。

ワーカーとメインスレッドの間でデータをやり取りするには、メッセージの仕組みが使用されます。どちらも `postMessage()` メソッドを使用してメッセージを送信し、`onmessage` イベントハンドラーによってメッセージに応答します（メッセージは {{domxref("Worker/message_event", "message")}} イベントの data 属性に収められます）。データは共有されず、複製されます。

ワーカーは、親ページと同じ{{glossary("origin", "オリジン")}}内でホスティングされている限り、新しいワーカーを生み出すことができます。

また、ワーカーは {{domxref("WorkerGlobalScope/fetch", "fetch()")}} や [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) などの API を用いて、ネットワークリクエストを行うことができます（ただし、`XMLHttpRequest` の {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 属性は常に `null` になることに注意してください）。

## 専用ワーカー

前述のとおり、専用ワーカー (dedicated worker) には呼び出し元のスクリプトだけがアクセスできます。この節では[基本的な専用ワーカーのサンプル](https://github.com/mdn/simple-web-worker)にある JavaScript を見ていきます（[専用ワーカーを実行する](https://mdn.github.io/simple-web-worker/)）。これは、 2 つの数字を入力して掛け合わせることができるものです。数字は専用のワーカーに送られて掛け合わされ、その結果がページに戻されて表示されます。

これはあまり面白みのないサンプルですが、基本的なワーカーの概念を紹介する間はシンプルに保とうと考えています。より高度な詳細情報は、この記事の後半で扱います。

### ワーカーの機能検出

エラー制御と後方互換性を向上させるため、ワーカーにアクセスするコードは以下のコードの中に入れるといいでしょう ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js))。

```js
if (window.Worker) {
  // …
}
```

### 専用ワーカーの起動

新しいワーカーは簡単に生成できます。必要なことは、ワーカースレッドで実行するスクリプトの URI を指定した {{domxref("Worker.Worker", "Worker()")}} コンストラクターを呼び出すことだけです ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js))。

```js
const myWorker = new Worker("worker.js");
```

> [!NOTE]
> [webpack](https://webpack.js.org/guides/web-workers/)、[Vite](https://vite.dev/guide/features.html#web-workers)、[Parcel](https://parceljs.org/languages/javascript/#web-workers) などのバンドラーでは、 [`import.meta.url`](/ja/docs/Web/JavaScript/Reference/Operators/import.meta#url) に対して相対的に解決される URL を `Worker()` コンストラクターに渡すことを推奨しています。例えば、次のようにします。
>
> ```js
> const myWorker = new Worker(new URL("worker.js", import.meta.url));
> ```
>
> こうすることで、パスは現在の HTML ページではなく現在のスクリプトを基準とするため、バンドラーは、名前変更などの最適化を安全に行うことができます（そうしないと、`worker.js` の URL がバンドラーが管理していないファイルを指す可能性があり、バンドラーは仮定を立てることができなくなるためです）。

### 専用ワーカーとのメッセージのやりとり

ワーカーのマジックは、{{domxref("Worker.postMessage", "postMessage()")}} メソッドと {{domxref("Worker.message_event", "onmessage")}} イベントハンドラーによって実現します。ワーカーにメッセージを送りたいときは、以下のようにしてメッセージを送信します ([main.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/main.js))。

```js
[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.postMessage([first.value, second.value]);
    console.log("メッセージがワーカーに渡されました");
  };
});
```

2 つの {{htmlelement("input")}} 要素があり、それぞれ変数 `first` と `second` で表されています。どちらかの値が変化すると、 `myWorker.postMessage([first.value,second.value])` を使用して、双方の値を配列としてワーカーに送信します。メッセージでは、おおむねどのようなものでも送信できます。

ワーカー内では、以下のようにイベントハンドラーのブロックにコードを記述すると、メッセージを受け取ったときに応答できます ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-web-worker/worker.js))。

```js
onmessage = (e) => {
  console.log("Message received from main script");
  const workerResult = `Result: ${e.data[0] * e.data[1]}`;
  console.log("Posting message back to main script");
  postMessage(workerResult);
};
```

`onmessage` ハンドラーにより、メッセージを受け取ったときになんらかのコードを実行できます。メッセージ自体は、`message` イベントの `data` 属性で手に入ります。ここでは 2 つの数値で乗算を行った後、再び `postMessage()` を使用して計算結果をメインスレッドに返しています。

メインスレッドに戻ると、再び `onmessage` を使用して、ワーカーから返されたメッセージに応答します。

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("メッセージをワーカーから受信しました");
};
```

ここではメッセージイベントからデータを取り出して、結果の段落の `textContent` へ格納しています。それで、ユーザーは計算結果を見ることができます。

> [!NOTE]
> メインのスクリプトスレッドで `onmessage` および `postMessage()` を使用するときは `Worker` オブジェクトにぶら下げなければなりませんが、ワーカー内ではそのようにする必要はありません。これは、ワーカー内ではそれ自身が実質的なグローバルスコープになるためです。

> [!NOTE]
> メッセージをメインスレッドとワーカーの間でやりとりするとき、共有されるのではなく、複製または「移譲」（移動）されます。詳しい解説は、[ワーカーとのデータ転送の詳細](#ワーカーとのデータ転送の詳細)をご覧ください。

### ワーカーの終了

メインスレッドから実行しているワーカーを直ちに終了させる必要がある場合は、ワーカーの {{domxref("Worker", "terminate")}} メソッドを呼び出してください。

```js
myWorker.terminate();
```

ワーカースレッドは直ちに終了します。

### エラー処理

ワーカー内で実行時エラーが発生すると、 `onerror` イベントハンドラーが呼び出されます。これは `error` という名前のイベントを受け取りますが、これは `ErrorEvent` インターフェイスを実装しています。

イベントはバブリングせず、またキャンセルすることができます。ワーカーはエラーイベントの [`preventDefault()`](/ja/docs/Web/API/Event/preventDefault) メソッドを呼び出すことで、発生元の既定のアクションを抑制することができます。

エラーイベントには、以下の重要な 3 つのフィールドがあります。

- `message`
  - : 人間が読み取れるエラーメッセージです。
- `filename`
  - : エラーが発生したスクリプトのファイル名です。
- `lineno`
  - : スクリプトファイル内でエラーが発生した場所の行番号です。

### サブワーカーの起動

ワーカーは、必要に応じてさらに多くのワーカーを生み出すことができます。いわゆるサブワーカーは、親ページと同じオリジン内でホストされていなければなりません。また、サブワーカーの URI は、親ページのものではなく、親ワーカーの位置を基準に解決されます。これにより、ワーカーは自分の依存関係がどこにあるかを簡単に把握することができます。

### スクリプトやライブラリーのインポート

ワーカースレッドはグローバル関数や、スクリプトをインポートするための `importScripts()` にアクセスできます。これはインポートするリソースの URI を 0 個以上、引数として受け入れます。以下の例はすべて有効です。

```js
importScripts(); /* 何もインポートしない */
importScripts("foo.js"); /* "foo.js" をインポート */
importScripts("foo.js", "bar.js"); /* 2 つのスクリプトをインポート */
importScripts(
  "//example.com/hello.js",
); /* 他のオリジンのスクリプトをインポートすることができる */
```

ブラウザーはそれぞれのスクリプトを読み込み、実行します。ワーカーは各スクリプトのグローバルオブジェクトを使用できます。スクリプトを読み込むことができない場合は `NETWORK_ERROR` を発生させて、それ以降のコードを実行しません。それでも、すでに実行されたコード（{{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} で繰り延べされているコードを含みます）は動作します。`importScripts()` メソッドより**後方**にある関数の宣言は、常にコードの残りの部分より先に評価されることから、同様に保持されます。

> [!NOTE]
> スクリプトは順不同にダウンロードされることがありますが、実行は `importScripts()` に渡したファイル名の順に行います。これは同期的に行われます。すべてのスクリプトの読み込みと実行が行われるまで `importScripts()` から戻りません。

## 共有ワーカー

共有ワーカーは、オリジンが同一であれば（異なるウィンドウ、iframe、ワーカーからであっても）複数のスクリプトからアクセスできます。本章では[基本的な共有ワーカーの例](https://github.com/mdn/simple-shared-worker) の JavaScript を見ていきます ([共有ワーカーを実行する](https://mdn.github.io/simple-shared-worker/))。こちらは専用ワーカーのサンプルと似ていますが、*2 つの数値で乗算を行う*スクリプトと*数値を 2 乗する*スクリプトという、別々のスクリプトファイルが扱う 2 つの関数を使用できる点が異なります。どちらのスクリプトも同じワーカーを使用して、実際に必要な計算を行います。

ここでは、 専用ワーカーと共有ワーカーの違いについて注目します。この例では 2 つの HTML ページがあり、それぞれの JavaScript は同じ単一のワーカーファイルを使用するようになっています。

> [!NOTE]
> 共有ワーカーが複数の閲覧コンテキストからアクセスできる場合、すべての閲覧コンテキストはまったく同じオリジン (プロトコル、ホスト、ポート番号が同じ) になります。

> [!NOTE]
> Firefox では、共有ワーカーはプライベートウィンドウとそれ以外に読み込まれた文書間で共有することができません ([Firefox バグ 1177621](https://bugzil.la/1177621))。

### 共有ワーカーの生成

新しい共有ワーカーの生成方法は 専用ワーカー の場合とほとんど同じですが、コンストラクター名が異なります（[index.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index.html) および [index2.html](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/index2.html) をご覧ください）。それぞれのページで、以下のようなコードを使用してワーカーを立ち上げます。

```js
const myWorker = new SharedWorker("worker.js");
```

共有ワーカーの大きな違いのひとつが、 `port` オブジェクトを通して通信しなければならないことです。スクリプトがワーカーと通信するために使用できる、明示的なポートが開きます (これは、 専用ワーカーでも暗黙的に開いています)。

ポートへの接続は、メッセージを送信する前に `onmessage` イベントハンドラーを使用して暗黙的に行うか、あるいは `start()` メソッドを使用して明示的に開始するかしなければなりません。 `start()` の呼び出しは、`addEventListener()` メソッドで `message` イベントを拾い上げる場合にのみ必要です。

> [!NOTE]
> ポート接続を開始するために `start()` メソッドを使用するとき、双方向の通信が必要である場合は親スレッドとワーカーの両方で呼び出さなければなりません。

### 共有ワーカーとのメッセージのやりとり

前述のとおりワーカーにメッセージを送信できるようになりましたが、`postMessage()` メソッドは port オブジェクトを通して呼び出さなければなりません（繰り返しますが、同様の構造が [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) および [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) に存在します）。

```js
squareNumber.onchange = () => {
  myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
  console.log("メッセージがワーカーに渡されました。");
};
```

ワーカーに移ります。こちらは若干複雑さが増しています ([worker.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/worker.js)):

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  };
};
```

始めに、ポートへの接続が発生したとき（すなわち、親スレッドで `onmessage` イベントをセットアップしたときや親スレッドで `start()` メソッドを明示的に呼び出したとき）にコードを実行するため `onconnect` ハンドラーを使用します。

イベントオブジェクトの `ports` 属性を使用してポートを取り出し、変数に格納します。

次に、計算を実行して結果をメインスレッドに返すため、ポートの `onmessage` のハンドラーを使用します。ワーカースレッドで `onmessage` のハンドラーをセットアップすると、親スレッドに戻すポート接続を暗黙的に開きます。従って、実際は前述のとおり `port.start()` を呼び出す必要はありません。

最後に、メインスレッドに戻ってメッセージを扱います（繰り返しますが、同様の構造が [multiply.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/multiply.js) および [square.js](https://github.com/mdn/dom-examples/blob/main/web-workers/simple-shared-worker/square.js) に存在します）。

```js
myWorker.port.onmessage = (e) => {
  result2.textContent = e.data;
  console.log("メッセージをワーカーから受信しました");
};
```

ポートを通してワーカーからメッセージが戻ったときは、結果のデータ型を確認してから適切な段落に計算結果を挿入します。

## スレッドセーフについて

{{domxref("Worker")}} インターフェイスでは、OS レベルの実際のスレッドが生成されるため、注意深いプログラマーは、注意しないと同時実行によってコードに「面白い」効果が生じるのではないかと懸念するかもしれません。

しかし、ウェブワーカーは他のスレッドとの通信ポイントが慎重に制御されているため、同時実行の問題を引き起こすことは実際には非常に困難です。スレッドセーフでないコンポーネントや DOM にはアクセスできません。また、シリアル化されたオブジェクトを通して特定のデータをスレッドに出し入れしなければなりません。ですから、コードで問題を起こすためには、かなり難しいのです。

## コンテンツセキュリティポリシー

ワーカーは、自分を生成した文書から区別された独自の実行コンテキストを持っているとみなされます。このため、一般に、自分を生成した文書（または親ワーカー）の[コンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)では管理されません。そのため例えば、文書が次のヘッダー付きで読み込まれたと仮定します。

```http
Content-Security-Policy: script-src 'self'
```

特に、これは [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) を使用したスクリプトを防ぎます。しかし、スクリプトがワーカーを構築した場合、ワーカーのコンテキストで実行中のコードは `eval()` を使用することができます。

ワーカーのコンテンツセキュリティポリシーを指定するには、ワーカースクリプト自身が配信されたリクエストの [Content-Security-Policy](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) レスポンスヘッダーで設定してください。

ワーカースクリプトのオリジンがグローバルに一意な識別子である場合（例えば、 URL のスキームが data や blob であった場合）は例外です。この場合、ワーカーは文書の CSP またはそれを作成したワーカーを継承します。

## ワーカーとのデータ転送の詳細

メインページとワーカーの間で渡されるデータは、共有ではなく**コピー**されます。オブジェクトは、ワーカーに渡されるときにシリアライズされ、その後、反対側でシリアライズが解除されます。ページとワーカーは**同じインスタンスを共有しない**ため、最終的には両側に**複製**が作成されます。ほとんどのブラウザーはこの機能を[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)として実装しています。

これを説明するため、教育的な用途の関数 `emulateMessage()` を作成し、 `worker` からメインページおよびその逆の移動において*共有されず複製される*値の動作をシミュレーションしてみましょう。

```js
function emulateMessage(vVal) {
  return eval(`(${JSON.stringify(vVal)})`);
}

// テスト

// テスト #1
const example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// テスト #2
const example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// テスト #3
const example3 = new String("Hello World");
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// テスト #4
const example4 = {
  name: "Carina Anand",
  age: 43,
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// テスト #5
function Animal(type, age) {
  this.type = type;
  this.age = age;
}
const example5 = new Animal("Cat", 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

複製され、共有されない値を*メッセージ*と呼びます。もうお分かりだと思いますが、*メッセージ*は `postMessage()` を使ってメインスレッドとの間で送受信することができ、 `message` イベントの {{domxref("MessageEvent.data", "data")}} 属性には、ワーカーから返されたデータが含まれています。

**example.html** （メインページ）

```js
const myWorker = new Worker("my_task.js");

myWorker.onmessage = (event) => {
  console.log(`Worker said : ${event.data}`);
};

myWorker.postMessage("ali");
```

**my_task.js** （ワーカー）

```js
postMessage("I'm working before postMessage('ali').");

onmessage = (event) => {
  postMessage(`Hi, ${event.data}`);
};
```

[構造化複製アルゴリズム](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)は JSON を受け入れることができ、循環参照など JSON ではできないものもいくつか受け入れることができます。

### データ引き渡しの例

#### 例 1: 高度な JSON データ渡しと切り替えシステムの作成

もしいくつかの複雑なデータを渡さなければならず、メインページとワーカーの両方で多くの異なる関数を呼び出さなければならない場合、すべてをまとめてグループにするシステムを作ることができます。

はじめに、ワーカーの URL、既定のリスナー、エラーハンドラーを持つ `QueryableWorker` クラスを作ります。このクラスはリスナーのリストを記録し、ワーカーとのコミュニケーションに役立てます。

```js
function QueryableWorker(url, defaultListener, onError) {
  const worker = new Worker(url);
  const listeners = {};

  this.defaultListener = defaultListener ?? (() => {});

  if (onError) {
    worker.onerror = onError;
  }

  this.postMessage = (message) => {
    worker.postMessage(message);
  };

  this.terminate = () => {
    worker.terminate();
  };
}
```

そして、リスナーを追加/削除するメソッドを追加します。

```js
this.addListeners = (name, listener) => {
  listeners[name] = listener;
};

this.removeListeners = (name) => {
  delete listeners[name];
};
```

ここでは、説明のためにワーカーに 2 つの簡単な操作をさせてみましょう。 2 つの数値の差を取得することと、 3 秒後にアラートを出すことです。これを実現するために、まず最初に `sendQuery` メソッドを実装します。これは、ワーカーが実際に対応するメソッドを持っているかどうかを問い合わせるものです。

```js
// This functions takes at least one argument, the method name we want to query.
// Then we can pass in the arguments that the method needs.
this.sendQuery = (queryMethod, ...queryMethodArguments) => {
  if (!queryMethod) {
    throw new TypeError(
      "QueryableWorker.sendQuery は 1 つ以上の引数が必要です",
    );
  }
  worker.postMessage({
    queryMethod,
    queryMethodArguments,
  });
};
```

QueryableWorker を `onmessage` メソッドで終了させます。問い合わせたメソッドに対応するワーカーがあれば、対応するリスナーの名前と必要な引数を返してくれるはずなので、あとは `listeners` の中を探すだけです。

```js
worker.onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethodListener") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    listeners[event.data.queryMethodListener].apply(
      instance,
      event.data.queryMethodArguments,
    );
  } else {
    this.defaultListener.call(instance, event.data);
  }
};
```

次にワーカーです。まず、 2 つの簡単な操作を行うためのメソッドが必要です。

```js
const queryableFunctions = {
  getDifference(a, b) {
    reply("printStuff", a - b);
  },
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - takes at least one argument");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

// This method is called when main page calls QueryWorker's postMessage
// method directly
function defaultReply(message) {
  // do something
}
```

そして、`onmessage`メソッドは簡単になりました。

```js
onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

ここでは、完全な実装を紹介します。

**example.html** （メインページ）

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Queryable worker</title>
    <script>
      // QueryableWorker instances methods:
      //   * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc.): calls a Worker's queryable function
      //   * postMessage(string or JSON Data): see Worker.prototype.postMessage()
      //   * terminate(): terminates the Worker
      //   * addListener(name, function): adds a listener
      //   * removeListener(name): removes a listener
      // QueryableWorker instances properties:
      //   * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
      function QueryableWorker(url, defaultListener, onError) {
        const instance = this;
        const worker = new Worker(url);
        const listeners = {};

        this.defaultListener = defaultListener ?? (() => {});

        if (onError) {
          worker.onerror = onError;
        }

        this.postMessage = (message) => {
          worker.postMessage(message);
        };

        this.terminate = () => {
          worker.terminate();
        };

        this.addListener = (name, listener) => {
          listeners[name] = listener;
        };

        this.removeListener = (name) => {
          delete listeners[name];
        };

        // This functions takes at least one argument, the method name we want to query.
        // Then we can pass in the arguments that the method needs.
        this.sendQuery = (queryMethod, ...queryMethodArguments) => {
          if (!queryMethod) {
            throw new TypeError(
              "QueryableWorker.sendQuery takes at least one argument",
            );
          }
          worker.postMessage({
            queryMethod,
            queryMethodArguments,
          });
        };

        worker.onmessage = (event) => {
          if (
            event.data instanceof Object &&
            Object.hasOwn(event.data, "queryMethodListener") &&
            Object.hasOwn(event.data, "queryMethodArguments")
          ) {
            listeners[event.data.queryMethodListener].apply(
              instance,
              event.data.queryMethodArguments,
            );
          } else {
            this.defaultListener.call(instance, event.data);
          }
        };
      }

      // 独自の「照会可能な」ワーカー
      const myTask = new QueryableWorker("my_task.js");

      // 独自の「リスナー」
      myTask.addListener("printStuff", (result) => {
        document
          .getElementById("firstLink")
          .parentNode.appendChild(
            document.createTextNode(`The difference is ${result}!`),
          );
      });

      myTask.addListener("doAlert", (time, unit) => {
        alert(`Worker waited for ${time} ${unit} :-)`);
      });
    </script>
  </head>
  <body>
    <ul>
      <li>
        <a
          id="firstLink"
          href="javascript:myTask.sendQuery('getDifference', 5, 3);"
          >What is the difference between 5 and 3?</a
        >
      </li>
      <li>
        <a href="javascript:myTask.sendQuery('waitSomeTime');"
          >Wait 3 seconds</a
        >
      </li>
      <li>
        <a href="javascript:myTask.terminate();">terminate() the Worker</a>
      </li>
    </ul>
  </body>
</html>
```

**my_task.js** （ワーカー）

```js
const queryableFunctions = {
  // 例 #1: 2 つの値の差を得る
  getDifference(minuend, subtrahend) {
    reply("printStuff", minuend - subtrahend);
  },

  // 例 #2: 3 秒待つ
  waitSomeTime() {
    setTimeout(() => {
      reply("doAlert", 3, "seconds");
    }, 3000);
  },
};

// システム関数

function defaultReply(message) {
  // メインページが queryableWorker.postMessage() メソッドを直接呼び出したときに限り実行される、デフォルトの PUBLIC 関数
  // 何らかの処理
}

function reply(queryMethodListener, ...queryMethodArguments) {
  if (!queryMethodListener) {
    throw new TypeError("reply - not enough arguments");
  }
  postMessage({
    queryMethodListener,
    queryMethodArguments,
  });
}

onmessage = (event) => {
  if (
    event.data instanceof Object &&
    Object.hasOwn(event.data, "queryMethod") &&
    Object.hasOwn(event.data, "queryMethodArguments")
  ) {
    queryableFunctions[event.data.queryMethod].apply(
      self,
      event.data.queryMethodArguments,
    );
  } else {
    defaultReply(event.data);
  }
};
```

各メインページ → ワーカー、ワーカー → メインページとメッセージの内容を切り替えることができます。そして、 "queryMethod", "queryMethodListeners", "queryMethodArguments" の各プロパティ名は、 `QueryableWorker` とワーカーで一致していれば何でも構いません。

### 所有権の移譲によるデータの引き渡し（移譲可能オブジェクト）

現代のブラウザーには、ある種のオブジェクトをワーカーに、またはワーカーから高いパフォーマンスで渡すための別の方法があります。[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)は、あるコンテキストから別のコンテキストへゼロコピー演算を運営して転送されるので、大きなデータセットを送信するときにパフォーマンスが大幅に改善されます。

例えば、メインアプリからワーカースクリプトに {{jsxref("ArrayBuffer")}} を移譲する場合、元の {{jsxref("ArrayBuffer")}} はクリアされてもう使えなくなります。その内容は、（文字どおり）ワーカーのコンテキストに移譲されます。

```js
// 32MB の「ファイル」を作成し、 0 から 255 までの連続した値で埋めます。 – 32MB = 1024 * 1024 * 32
const uInt8Array = new Uint8Array(1024 * 1024 * 32).map((v, i) => i);
worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

## 埋め込みワーカー

ワーカーのコードをウェブページに埋め込むための、通常のスクリプトを {{HTMLElement("script")}} 要素で埋め込むような「公式な」方法はありません。しかし、{{HTMLElement("script")}} 要素が `src` 属性を持たず、また `type` 属性が実行可能な MIME タイプを示していない場合は、 JavaScript が使用できるデータブロック要素であると判断されます。「データブロック」はほとんどのテキストデータを持つことができる、 HTML の一般的な機能です。よって、以下の方法でワーカーを埋め込むことができます。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example - Embedded worker</title>
    <script type="text/js-worker">
      // MIME タイプが text/js-worker であるため、このスクリプトは JS エンジンに解釈されません。
      const myVar = 'Hello World!';
      // ワーカーの残りのコードをここに置きます。
    </script>
    <script>
      // MIME タイプが text/javascript であるため、このスクリプトは JS エンジンに解釈されます。
      function pageLog(sMsg) {
        // フラグメントを使用します。ブラウザーのレンダリングや再フローを 1 回だけにします。
        const frag = document.createDocumentFragment();
        frag.appendChild(document.createTextNode(sMsg));
        frag.appendChild(document.createElement("br"));
        document.querySelector("#logDisplay").appendChild(frag);
      }
    </script>
    <script type="text/js-worker">
      // MIME タイプが text/js-worker であるため、このスクリプトは JS エンジンに解釈されません。
      onmessage = (event) => {
        postMessage(myVar);
      };
      // ワーカーの残りのコードをここに置きます。
    </script>
    <script>
      // MIME タイプが text/javascript であるため、このスクリプトは JS エンジンに解釈されます。

      // 以前は blob を構築していましたが、現在は Blob を使用します。
      const blob = new Blob(
        Array.prototype.map.call(
          document.querySelectorAll("script[type='text/js-worker']"),
          (script) => script.textContent,
        ),
        { type: "text/javascript" },
      );

      // すべての "text/js-worker" スクリプトを含む、新たな document.worker プロパティを生成します。
      document.worker = new Worker(window.URL.createObjectURL(blob));

      document.worker.onmessage = (event) => {
        pageLog(`Received: ${event.data}`);
      };

      // ワーカーを起動します。
      window.onload = () => {
        document.worker.postMessage("");
      };
    </script>
  </head>
  <body>
    <div id="logDisplay"></div>
  </body>
</html>
```

埋め込みワーカーは、新たな `document.worker` カスタムプロパティの中に入りました。

言うまでもなく、次の例のように、関数を Blob に変換して、その blob からオブジェクトの URL を生成することができます。

```js
function fn2workerURL(fn) {
  const blob = new Blob([`(${fn.toString()})()`], { type: "text/javascript" });
  return URL.createObjectURL(blob);
}
```

## 追加の例

ここではウェブワーカーの使用方法について、さらに例を示します。

### バックグラウンドで演算を行う

ワーカーは主に、ユーザーインターフェイスのスレッドを妨げずに CPU 負荷が大きい演算を実行するために役立ちます。このサンプルでは、ワーカーをフィボナッチ数の計算に使用します。

#### JavaScript コード

以下の JavaScript コードをファイル "fibonacci.js" に保存し、次節の HTML から参照します。

```js
self.onmessage = (event) => {
  const userNum = Number(event.data);
  self.postMessage(fibonacci(userNum));
};

function fibonacci(num) {
  let a = 1;
  let b = 0;
  while (num > 0) {
    [a, b] = [a + b, a];
    num--;
  }

  return b;
}
```

ワーカーは `onmessage` プロパティを、ワーカーのオブジェクトの `postMessage()` が呼び出されたときにメッセージを受け取る関数に設定します。これは計算を実行し、最終的に結果をメインスレッドに返します。

#### HTML コード

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Fibonacci number generator</title>
    <style>
      body {
        width: 500px;
      }

      div,
      p {
        margin-bottom: 20px;
      }
    </style>
  </head>
  <body>
    <form>
      <div>
        <label for="number"
          >Enter a number that is a zero-based index position in the fibonacci
          sequence to see what number is in that position. For example, enter 6
          and you'll get a result of 8 — the fibonacci number at index position
          6 is 8.</label
        >
        <input type="number" id="number" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>

    <p id="result"></p>

    <script>
      const form = document.querySelector("form");
      const input = document.querySelector('input[type="number"]');
      const result = document.querySelector("p#result");
      const worker = new Worker("fibonacci.js");

      worker.onmessage = (event) => {
        result.textContent = event.data;
        console.log(`Got: ${event.data}`);
      };

      worker.onerror = (error) => {
        console.log(`Worker error: ${error.message}`);
        throw error;
      };

      form.onsubmit = (e) => {
        e.preventDefault();
        worker.postMessage(input.value);
        input.value = "";
      };
    </script>
  </body>
</html>
```

ウェブページは `result` という ID を持つ `<p>` 要素を作成して、結果を表示するために使用します。そして、ワーカーを起動します。ワーカーを起動した後は、`onmessage` ハンドラーを `<p>` 要素の内容を設定することで結果を表示するように構成し、また `onerror` ハンドラーはエラーメッセージを開発者ツールのコンソールへ記録するために設定します。

最後に、ワーカーを開始するためにメッセージを送信します。

[この例のデモを試してください](https://mdn.github.io/dom-examples/web-workers/fibonacci-worker/)。

### 複数のワーカーにタスクを分割する

マルチコアのコンピューターが一般的になってきたことで複数のワーカーに複雑な計算処理を分割することが有用になり、それらのタスクを複数の CPU コアで実行することが可能になります。

## その他のワーカー

専用ワーカーや共有ワーカーに加えて、利用できる他の種類のワーカーがあります。

- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API) は、基本的に、ウェブアプリケーションと、ブラウザーおよびネットワーク（利用可能な場合）との間に位置するプロキシーサーバーとして機能します。これは、効果的なオフライン操作の構築ができるようにすること目的としています。ネットワークリクエストを傍受し、ネットワークが利用可能かどうかや、サーバー上の更新された資産に基づいて、適切なアクションをとります。また、プッシュ通知やバックグラウンド同期の API にもアクセスできるようになります。
- [オーディオワークレット](/ja/docs/Web/API/Web_Audio_API#audio_processing_in_javascript)は、ワークレット（ワーカーの軽量版）のコンテキスト内でスクリプトによる音声処理を直接実行する機能を提供します。

## ワーカースレッドのデバッグ

ほとんどのブラウザーは、 JavaScript デバッガーでワーカースレッドのデバッグを、メインスレッドのデバッグとまったく同じ方法で対応しています。たとえば、 Firefox と Chrome の両方で、メインスレッドとアクティブなワーカースレッドの両方の JavaScript ソースファイルを一覧表示し、これらのファイルをすべて開いてブレークポイントやログポイントを設定することができます。

ウェブワーカーをデバッグする方法については、各ブラウザーの JavaScript デバッガーのドキュメントを参照してください。

- [Chrome のソースパネル](https://developer.chrome.com/docs/devtools/sources)
- [Firefox の JavaScript デバッガー](https://firefox-source-docs.mozilla.org/devtools-user/debugger/)

ウェブワーカー用の開発者ツールを開くには、次の URL が使用できます。

- Edge: `edge://inspect/`
- Chrome: `chrome://inspect/`
- Firefox: `about:debugging#/runtime/this-firefox`

これらのページには、すべてのサービスワーカーの概要が表示されます。URL から該当するワーカーを見つけ、\[inspect\] をクリックすると、そのワーカーのコンソールやデバッガーなどの開発者ツールにアクセスできます。

## ワーカーで使用できる関数とインターフェイス

標準的な JavaScript 機能のほとんどがウェブワーカー内で使用できます。以下のものを含みます。

- {{domxref("Navigator")}}
- {{domxref("WorkerGlobalScope.fetch", "fetch()")}}
- {{jsxref("Global_Objects/Array", "Array")}}、{{jsxref("Global_Objects/Date", "Date")}}、{{jsxref("Global_Objects/Math", "Math")}}、{{jsxref("Global_Objects/String", "String")}}
- {{domxref("WorkerGlobalScope.setTimeout", "setTimeout()")}} および {{domxref("WorkerGlobalScope.setInterval", "setInterval()")}}

ワーカーでできないことは、主に親ページに直接影響を与えることです。例えば、DOM を操作したり、そのページのオブジェクトを使用したりすることなどです。このような操作は、{{domxref("DedicatedWorkerGlobalScope.postMessage()")}} を介してメインスクリプトにメッセージを送信し、イベントハンドラーで変更を行うといった間接的な方法で行う必要があります。

> [!NOTE]
> あるメソッドがワーカーで利用できるかどうかは、サイト <https://worker-playground.glitch.me/> を使ってテストできます。例えば、Firefox 84 でサイトに {{domxref("EventSource")}} と入力すると、サービスワーカーではサポートされていないが、専用ワーカーや共有ワーカーではサポートされていることがわかります。

> [!NOTE]
> ワーカーで使用できる関数の完全なリストは、[ワーカーで使用できる関数とインターフェイス](< /ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers>)でご覧ください。

## 仕様書

{{Specifications}}

## 関連情報

- {{domxref("Worker")}} インターフェイス
- {{domxref("SharedWorker")}} インターフェイス
- [ワーカーで使用できる関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
- {{domxref("OffscreenCanvas")}} インターフェイス
