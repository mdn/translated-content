---
title: Web Worker の使用
slug: Web/API/Web_Workers_API/Using_web_workers
tags:
  - Advanced
  - Firefox
  - Guide
  - HTML5
  - JavaScript
  - WebWorkers
  - Workers
translation_of: Web/API/Web_Workers_API/Using_web_workers
---
{{DefaultAPISidebar("Web Workers API")}}

Web Worker は、ウェブコンテンツがスクリプトをバックグラウンドのスレッドで実行するためのシンプルな手段です。ワーカースレッドは、ユーザーインターフェイスを妨げることなくタスクを実行できます。加えて、 [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) (`responseXML` 属性や `channel` 属性は常に null ですが) または [`fetch`](/ja/docs/Web/API/Fetch_API) (そのような制約なし) を使用して入出力を行うこともできます。生成されたワーカーは、オリジンが指定したイベントンドラーへメッセージを送ることにより、ウィンドウ ript コードワーカーその逆も可能です)。本記事では、 Web Worker の使い方を詳しく紹介します。

## Web Worker API

ワーカーはコンストラクター (例えば {{domxref("Worker.Worker", "Worker()")}}) を使用して生成されるオブジェクトであり、名前付きの JavaScript ファイル (このファイルはワーカースレッドで実行するコードを持ちます) を実行します。またワーカーは、現在の {{domxref("window")}} とは異なるグローバルコンテキストで実行されます。従って、 {{domxref("window")}} を ({{domxref("window.self","self")}} の代わりに) 使用して現在のグローバルスコープを取得しようとすると、 {{domxref("Worker")}} の中ではエラーが返されます。

ワーカーのコンテキストは、専用ワーカー (単一のスクリプトで利用される標準的なワーカー) の場合は {{domxref("DedicatedWorkerGlobalScope")}} オブジェクトで表されます (共有ワーカーの場合は {{domxref("SharedWorkerGlobalScope")}} です)。専用ワーカーは、最初にワーカーを起動したスクリプトだけがアクセスできます。一方、共有ワーカーは複数のスクリプトからアクセスできます。

> **Note:** **メモ**: ワーカーのリファレンスドキュメントや追加のガイドについては [Web Workers API のトップページ](/ja/docs/Web/API/Web_Workers_API)をご覧ください。

ワーカースレッドでは、どのようなコードでも実行できますが、いくつかの制限があります。例えば、ワーカー内から直接 DOM を操作することはできません。また {{domxref("window")}} オブジェクトの既定のメソッドやプロパティで、使用できないものがあります。それでも、`window` 配下にある多数のアイテム、たとえば [WebSocket](/ja/docs/Web/API/WebSockets_API)、 [IndexedDB](/ja/docs/Web/API/IndexedDB_API) のようなデータストレージ機構などを使用できます。詳しくは[ワーカーで使用できる関数やクラス](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)をご覧ください。

ワーカーとメインスレッドの間でデータをやり取りするには、メッセージの仕組みが使用されます。どちらも `postMessage()` メソッドを使用してメッセージを送信し、`onmessage` イベントハンドラーによってメッセージに応答します (メッセージは {{event("Message")}} イベントの data 属性に収められます)。データは共有されず、コピーされます。

ワーカーは、親ページと同じオリジン内でホスティングされている場合に限り、さらに新たなワーカーを起動することができます。また、ワーカーは [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) を使用してネットワーク I/O を行うことができますが、例外として `XMLHttpRequest` の `responseXML` および `channel` 属性は常に `null` を返します。

## 専用ワーカー (Dedicated worker)

前述のとおり、専用ワーカーには呼び出し元のスクリプトだけがアクセスできます。この節では[基本的な専用ワーカーのサンプル](https://github.com/mdn/simple-web-worker)にある JavaScript を見ていきます ([専用ワーカーを実行する](https://mdn.github.io/simple-web-worker/))。これは、 2 つの数字を入力して掛け合わせることができるものです。数字は専用のワーカーに送られて掛け合わされ、その結果がページに戻されて表示されます。

これはあまり面白みのないサンプルですが、基本的なワーカーの概念を紹介する間はシンプルに保とうと考えています。より高度な詳細情報は、この記事の後半で扱います。

### ワーカー機能の検出

エラー制御と後方互換性を向上させるため、ワーカーにアクセスするコードを以下のコードの中に包むといいでしょう ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js))。

```js
if (window.Worker) {

  ...

}
```

### 専用ワーカーの起動

新しいワーカーは簡単に生成できます。必要なことは、ワーカースレッドで実行するスクリプトの URI を指定した {{domxref("Worker.Worker", "Worker()")}} コンストラクターを呼び出すことだけです ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js))。

```js
var myWorker = new Worker('worker.js');
```

### 専用ワーカーとメッセージをやりとりする

ワーカーのマジックは、{{domxref("Worker.postMessage", "postMessage()")}} メソッドと {{domxref("Worker.onmessage", "onmessage")}} イベントハンドラーによって実現します。ワーカーにメッセージを送りたいときは、以下のようにしてメッセージを投稿します ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js))。

```js
first.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.postMessage([first.value, second.value]);
  console.log('Message posted to worker');
}
```

2 つの {{htmlelement("input")}} 要素があり、それぞれ変数 `first` と `second` で表されています。どちらかの値が変化すると、 `myWorker.postMessage([first.value,second.value])` を使用して、双方の値を配列としてワーカーに送信します。メッセージでは、おおむねどのようなものでも送信できます。

ワーカー内では、以下のようにイベントハンドラーのブロックにコードを記述すると、メッセージを受け取ったときに応答できます ([worker.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js))。

```js
onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}
```

`onmessage` ハンドラーにより、メッセージを受け取ったときになんらかののコードを実行できます。メッセージ自体は、`message` イベントの `data` 属性で手に入ります。ここでは 2 つの数値で乗算を行った後、再び `postMessage()` を使用して計算結果をメインスレッドに返しています。

メインスレッドに戻ると、再び `onmessage` を使用して、ワーカーから返されたメッセージに応答します。

```js
myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}
```

ここではメッセージイベントからデータを取り出して、結果の段落の `textContent` へ格納しています。よって、ユーザーは計算結果を見ることができます。

> **Note:** **注**: メインのスクリプトスレッドで `onmessage` および `postMessage()` を使用するときは `Worker` オブジェクトにぶら下げなければなりませんが、ワーカー内ではそのようにする必要はありません。これは、ワーカー内ではそれ自身が実質的にグローバルスコープであるためです。

> **Note:** **注**: メッセージをメインスレッドとワーカーの間でやりとりするとき、共有されるのではなく、コピーまたは「転送」 (移動) されます。詳しい解説は、[ワーカーとの間のデータ転送の詳細](#transferring_data_to_and_from_workers_further_details)をご覧ください。

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

Worker スレッドはグローバル関数や、スクリプトをインポートするための `importScripts()` にアクセスできます。これはインポートするリソースの URI を 0 個以上、引数として受け入れます。以下の例はすべて有効です。

```js
importScripts();                         /* 何もインポートしない */
importScripts('foo.js');                 /* "foo.js" をインポート */
importScripts('foo.js', 'bar.js');       /* 2 つのスクリプトをインポート */
importScripts('//example.com/hello.js'); /* 他のオリジンのスクリプトをインポートすることができる */
```

ブラウザーはそれぞれのスクリプトを読み込み、実行します。ワーカーは各スクリプトのグローバルオブジェクトを使用できます。スクリプトを読み込むことができない場合は `NETWORK_ERROR` を発生させて、それ以降のコードを実行しません。それでも、すでに実行されたコード ({{domxref("WindowOrWorkerGlobalScope.setTimeout")}} で繰り延べされているコードを含みます) は動作します。`importScripts()` メソッドより**後方**にある関数の宣言は、常にコードの残りの部分より先に評価されることから、同様に保持されます。

> **Note:** **注**: スクリプトは順不同にダウンロードされることがありますが、実行は `importScripts()` に渡したファイル名の順に行います。これは同期的に行われます。すべてのスクリプトの読み込みと実行が行われるまで `importScripts()` から戻りません。

## 共有ワーカー

共有ワーカーは、オリジンが同一であれば (異なるウィンドウ、iframe、ワーカーからであっても) 複数のスクリプトからアクセスできます。本章では[基本的な共有ワーカーの例](https://github.com/mdn/simple-shared-worker) の JavaScript を見ていきます ([共有ワーカーを実行する](https://mdn.github.io/simple-shared-worker/))。こちらは専用ワーカーのサンプルと似ていますが、*2 つの数値で乗算を行う*スクリプトと*数値を 2 乗する*スクリプトという、別々のスクリプトファイルが扱う 2 つの関数を使用できる点が異なります。どちらのスクリプトも同じワーカーを使用して、実際に必要な計算を行います。

ここでは、 専用ワーカーと共有ワーカーの違いについて注目します。この例では 2 つの HTML ページがあり、それぞれの JavaScript は同じ単一のワーカーファイルを使用するようになっています。

> **Note:** **注**: 共有ワーカーが複数の閲覧コンテキストからアクセスできる場合、すべての閲覧コンテキストはまったく同じオリジン (プロトコル、ホスト、ポート番号が同じ) になります。

> **Note:** **メモ**: Firefox では、共有ワーカーはプライベートウィンドウとそれ以外に読み込まれた文書間で共有することができません ({{bug(1177621)}})。

### 共有ワーカーの生成

新しい共有ワーカーの生成方法は 専用ワーカー の場合とほとんど同じですが、コンストラクター名が異なります ([index.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index.html) および [index2.html](https://github.com/mdn/simple-shared-worker/blob/gh-pages/index2.html) をご覧ください)。それぞれのページで、以下のようなコードを使用してワーカーを立ち上げます。

```js
var myWorker = new SharedWorker('worker.js');
```

共有ワーカーの大きな違いのひとつが、 `port` オブジェクトを通して通信しなければならないことです。スクリプトがワーカーと通信するために使用できる、明示的なポートが開きます (これは、 専用ワーカーでも暗黙的に開いています)。

ポートへの接続は、メッセージを送信する前に `onmessage` イベントハンドラーを使用して暗黙的に行うか、あるいは `start()` メソッドを使用して明示的に開始するかしなければなりません。 `start()` の呼び出しは、`addEventListener()` メソッドで `message` イベントを拾い上げる場合にのみ必要です。

> **Note:** ポート接続を開始するために `start()` メソッドを使用するとき、双方向の通信が必要である場合は親スレッドとワーカーの両方で呼び出さなければなりません。

### 共有ワーカーとのメッセージのやりとり

前述のとおりワーカーにメッセージを送信できるようになりましたが、`postMessage()` メソッドは port オブジェクトを通して呼び出さなければなりません (繰り返しますが、同様の構造が [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) および [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js) に存在します)。

```js
squareNumber.onchange = function() {
  myWorker.port.postMessage([squareNumber.value,squareNumber.value]);
  console.log('Message posted to worker');
}
```

Worker に移ります。こちらは若干複雑さが増しています ([worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)):

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }
}
```

始めに、ポートへの接続が発生したとき (すなわち、親スレッドで `onmessage` イベントをセットアップしたときや親スレッドで `start()` メソッドを明示的に呼び出したとき) にコードを実行するため `onconnect` ハンドラーを使用します。

イベントオブジェクトの `ports` 属性を使用してポートを取り出し、変数に格納します。

次に、計算を実行して結果をメインスレッドに返すため、ポートの `message` のハンドラーを使用します。ワーカースレッドで `message` のハンドラーをセットアップすると、親スレッドに戻すポート接続を暗黙的に開きます。従って、実際は前述のとおり `port.start()` を呼び出す必要はありません。

最後に、メインスレッドに戻ってメッセージを扱います (繰り返しますが、同様の構造が [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) および [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js) に存在します)。

```js
myWorker.port.onmessage = function(e) {
  result2.textContent = e.data;
  console.log('Message received from worker');
}
```

ポートを通してワーカーからメッセージが戻ったときは、結果のデータ型を確認してから適切な段落に計算結果を挿入します。

## スレッドセーフについて

{{domxref("Worker")}} インターフェイスでは、OS レベルの実際のスレッドが生成されるため、注意深いプログラマーは、注意しないと同時実行によってコードに「面白い」効果が生じるのではないかと懸念するかもしれません。

しかし、 Web Worker は他のスレッドとの通信ポイントが慎重に制御されているため、同時実行の問題を引き起こすことは実際には非常に困難です。スレッドセーフでないコンポーネントや DOM にはアクセスできません。また、シリアル化されたオブジェクトを通して特定のデータをスレッドに出し入れしなければなりません。ですから、コードで問題を起こすためには、かなり難しいのです。

## コンテンツセキュリティポリシー

ワーカーは、自分を生成した文書から区別された独自の実行コンテキストを持っているとみなされます。このため、一般に、自分を生成した文書 (または親ワーカー) の[コンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)では管理されません。そのため例えば、文書が次のヘッダー付きで読み込まれたと仮定します。

```plain
Content-Security-Policy: script-src 'self'
```

特に、これは [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) を使用したスクリプトを防ぎます。しかし、スクリプトがワーカーを構築した場合、ワーカーのコンテキストで実行中のコードは `eval()` を使用することができます。

ワーカーのコンテンツセキュリティポリシーを指定するには、ワーカースクリプト自身が配信されたリクエストの [Content-Security-Policy](/ja/docs/Web/HTTP/Headers/Content-Security-Policy) レスポンスヘッダーで設定してください。

ワーカースクリプトのオリジンがグローバルに一意な識別子である場合 (例えば、 URL のスキームが data や blob であった場合) は例外です。この場合、ワーカーは文書の CSP またはそれを作成したワーカーを継承します。

## ワーカーとのデータ転送の詳細

メインページとワーカーの間で渡されるデータは、共有ではなく**コピー**されます。オブジェクトは、ワーカーに渡されるときにシリアライズされ、その後、反対側でシリアライズが解除されます。ページとワーカーは**同じインスタンスを共有しない**ため、最終的には両側に**複製**が作成されます。ほとんどのブラウザーはこの機能を[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)として実装しています。

これを説明するため、教育的な用途の関数 `emulateMessage()` を作成し、 `worker` からメインページおよびその逆の移動において*共有されず複製される*値の動作をシミュレーションしてみましょう。

```js
function emulateMessage(vVal) {
    return eval('(' + JSON.stringify(vVal) + ')');
}

// テスト

// テスト #1
var example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// テスト #2
var example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// テスト #3
var example3 = new String('Hello World');
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// テスト #4
var example4 = {
    'name': 'John Smith',
    "age": 43
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// テスト #5
function Animal(sType, nAge) {
    this.type = sType;
    this.age = nAge;
}
var example5 = new Animal('Cat', 3);
alert(example5.constructor); // Animal
alert(emulateMessage(example5).constructor); // Object
```

複製され、共有されない値を*メッセージ*と呼びます。もうお分かりだと思いますが、*メッセージ*は `postMessage()` を使ってメインスレッドとの間で送受信することができ、 `message` イベントの {{domxref("MessageEvent.data", "data")}} 属性には、ワーカーから返されたデータが含まれています。

**example.html** (メインページ)

```js
var myWorker = new Worker('my_task.js');

myWorker.onmessage = function(oEvent) {
  console.log('Worker said : ' + oEvent.data);
};

myWorker.postMessage('ali');
```

**my_task.js** (ワーカー)

```js
postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function(oEvent) {
  postMessage('Hi ' + oEvent.data);
};
```

[構造化複製](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)アルゴリズムは JSON を受け入れることができ、循環参照など JSON ではできないものもいくつか受け入れることができます。

### データ引き渡しの例

#### 例 #1: 高度な JSON データ渡しと切り替えシステムの作成

もしいくつかの複雑なデータを渡さなければならず、メインページとワーカーの両方で多くの異なる関数を呼び出さなければならない場合、すべてをまとめてグループにするシステムを作ることができます。

はじめに、ワーカーの URL、既定のリスナー、エラーハンドラーを持つ `QueryableWorker` クラスを作ります。このクラスはリスナーのリストを記録し、ワーカーとのコミュニケーションに役立てます。

```js
function QueryableWorker(url, defaultListener, onError) {
    var instance = this,
        worker = new Worker(url),
        listeners = {};

    this.defaultListener = defaultListener || function() {};

    if (onError) {worker.onerror = onError;}

    this.postMessage = function(message) {
        worker.postMessage(message);
    }

    this.terminate = function() {
        worker.terminate();
    }
}
```

そして、リスナーを追加/削除する方法を追加します。

```js
this.addListeners = function(name, listener) {
    listeners[name] = listener;
}

this.removeListeners = function(name) {
    delete listeners[name];
}
```

ここでは、説明のためにワーカーに 2 つの簡単な操作をさせてみましょう。 2 つの数値の差を取得することと、 3 秒後にアラートを出すことです。これを実現するために、まず最初に `sendQuery` メソッドを実装します。これは、ワーカーが実際に対応するメソッドを持っているかどうかを問い合わせるものです。

```js
/*
  This functions takes at least one argument, the method name we want to query.
  Then we can pass in the arguments that the method needs.
 */
this.sendQuery = function() {
    if (arguments.length < 1) {
         throw new TypeError('QueryableWorker.sendQuery takes at least one argument');
         return;
    }
    worker.postMessage({
        'queryMethod': arguments[0],
        'queryArguments': Array.prototype.slice.call(arguments, 1)
    });
}
```

`QueryableWorker` を `onmessage` メソッドで終了させます。問い合わせたメソッドに対応するワーカーがあれば、対応するリスナーの名前と必要な引数を返してくれるはずなので、あとは `listeners` の中を探すだけです。

```js
worker.onmessage = function(event) {
    if (event.data instanceof Object &&
        event.data.hasOwnProperty('queryMethodListener') &&
        event.data.hasOwnProperty('queryMethodArguments')) {
        listeners[event.data.queryMethodListener].apply(instance, event.data.queryMethodArguments);
    } else {
        this.defaultListener.call(instance, event.data);
    }
}
```

次にワーカーです。まず、 2 つの簡単な操作を行うためのメソッドが必要です。

```js
var queryableFunctions = {
    getDifference: function(a, b) {
        reply('printStuff', a - b);
    },
    waitSomeTime: function() {
        setTimeout(function() {
            reply('doAlert', 3, 'seconds');
        }, 3000);
    }
}

function reply() {
    if (arguments.length < 1) {
        throw new TypeError('reply - takes at least one argument');
        return;
    }
    postMessage({
        queryMethodListener: arguments[0],
        queryMethodArguments: Array.prototype.slice.call(arguments, 1)
    });
}

/* This method is called when main page calls QueryWorker's postMessage method directly*/
function defaultReply(message) {
    // do something
}
```

そして、`onmessage`メソッドは簡単になりました。

```js
onmessage = function(event) {
    if (event.data instanceof Object &&
        event.data.hasOwnProperty('queryMethod') &&
        event.data.hasOwnProperty('queryMethodArguments')) {
        queryableFunctions[event.data.queryMethod]
            .apply(self, event.data.queryMethodArguments);
    } else {
        defaultReply(event.data);
    }
}
```

ここでは、完全な実装を紹介します。

**example.html** (メインページ)

```html
<!doctype html>
  <html>
    <head>
      <meta charset="UTF-8"  />
      <title>MDN Example - Queryable worker</title>
    <script type="text/javascript">
    /*
      QueryableWorker instances methods:
        * sendQuery(queryable function name, argument to pass 1, argument to pass 2, etc. etc): calls a Worker's queryable function
        * postMessage(string or JSON Data): see Worker.prototype.postMessage()
        * terminate(): terminates the Worker
        * addListener(name, function): adds a listener
        * removeListener(name): removes a listener
      QueryableWorker instances properties:
        * defaultListener: the default listener executed only when the Worker calls the postMessage() function directly
     */
    function QueryableWorker(url, defaultListener, onError) {
      var instance = this,
      worker = new Worker(url),
      listeners = {};

      this.defaultListener = defaultListener || function() {};

      if (onError) {worker.onerror = onError;}

      this.postMessage = function(message) {
        worker.postMessage(message);
      }

      this.terminate = function() {
        worker.terminate();
      }

      this.addListener = function(name, listener) {
        listeners[name] = listener;
      }

      this.removeListener = function(name) {
        delete listeners[name];
      }

      /*
        This functions takes at least one argument, the method name we want to query.
        Then we can pass in the arguments that the method needs.
      */
      this.sendQuery = function() {
        if (arguments.length < 1) {
          throw new TypeError('QueryableWorker.sendQuery takes at least one argument');
          return;
        }
        worker.postMessage({
          'queryMethod': arguments[0],
          'queryMethodArguments': Array.prototype.slice.call(arguments, 1)
        });
      }

      worker.onmessage = function(event) {
        if (event.data instanceof Object &&
          event.data.hasOwnProperty('queryMethodListener') &&
          event.data.hasOwnProperty('queryMethodArguments')) {
          listeners[event.data.queryMethodListener].apply(instance, event.data.queryMethodArguments);
        } else {
          this.defaultListener.call(instance, event.data);
        }
      }
    }

    // 独自の「照会可能な」 worker
    var myTask = new QueryableWorker('my_task.js');

    // 独自の「リスナー」
    myTask.addListener('printStuff', function (result) {
      document.getElementById('firstLink').parentNode.appendChild(document.createTextNode('The difference is ' + result + '!'));
    });

    myTask.addListener('doAlert', function (time, unit) {
      alert('Worker waited for ' + time + ' ' + unit + ' :-)');
    });
</script>
</head>
<body>
  <ul>
    <li><a id="firstLink" href="javascript:myTask.sendQuery('getDifference', 5, 3);">What is the difference between 5 and 3?</a></li>
    <li><a href="javascript:myTask.sendQuery('waitSomeTime');">Wait 3 seconds</a></li>
    <li><a href="javascript:myTask.terminate();">terminate() the Worker</a></li>
  </ul>
</body>
</html>
```

**my_task.js** (ワーカー)

```js
var queryableFunctions = {
  // 例 #1: 2 つの値の差を得る
  getDifference: function(nMinuend, nSubtrahend) {
      reply('printStuff', nMinuend - nSubtrahend);
  },
  // 例 #2: 3 秒待つ
  waitSomeTime: function() {
      setTimeout(function() { reply('doAlert', 3, 'seconds'); }, 3000);
  }
};

// システム関数

function defaultReply(message) {
  // メインページが queryableWorker.postMessage() メソッドを直接呼び出したときに限り実行される、デフォルトの PUBLIC 関数
  // 何らかの処理
}

function reply() {
  if (arguments.length < 1) { throw new TypeError('reply - not enough arguments'); return; }
  postMessage({ 'queryMethodListener': arguments[0], 'queryMethodArguments': Array.prototype.slice.call(arguments, 1) });
}

onmessage = function(oEvent) {
  if (oEvent.data instanceof Object && oEvent.data.hasOwnProperty('queryMethod') && oEvent.data.hasOwnProperty('queryMethodArguments')) {
    queryableFunctions[oEvent.data.queryMethod].apply(self, oEvent.data.queryMethodArguments);
  } else {
    defaultReply(oEvent.data);
  }
};
```

各メインページ → ワーカー、ワーカー → メインページとメッセージの内容を切り替えることができます。そして、 "queryMethod", "queryMethodListeners", "queryMethodArguments" の各プロパティ名は、 `QueryableWorker` とワーカーで一致していれば何でも構いません。

### 所有権の譲渡によるデータの引き渡し (transferable オブジェクト)

Google Chrome 17 以降および Firefox 18 以降には、特定の種類のオブジェクト (transferable オブジェクト、つまり {{domxref("Transferable")}} インターフェイスを実装したオブジェクト) をワーカーとの間で高いパフォーマンスで受け渡すための別な方法があります。 Transferable オブジェクトは、あるコンテキストから別のコンテキストへコピー操作なしで転送されるため、大規模なデータセットを送信する際のパフォーマンスが大幅に向上します。 C/C++ の世界から来た人は、参照渡しと考えてください。ただし、参照渡しとは異なり、呼び出し元のコンテキストの「バージョン」は転送されると利用できなくなります。その所有権は新しいコンテキストに移されます。例えば、 {{jsxref("ArrayBuffer")}} をメインアプリからワーカースクリプトに転送した場合、元の {{jsxref("ArrayBuffer")}} はクリアされ、使用できなくなります。その内容は (文字通り) ワーカーコンテキストに転送 (transfer) されます。

```js
// 32MB の "file" を作成して埋めます。
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **Note:** **注**: Transferable オブジェクト、パフォーマンス、メソッドの機能検出について詳しくは、HTML5 Rocks の [Transferable Objects: Lightning Fast!](https://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast) をご覧ください。

## 埋め込みワーカー

ワーカーのコードをウェブページに埋め込むための、通常のスクリプトを {{HTMLElement("script")}} 要素で埋め込むような「公式な｝方法はありません。しかし、 {{HTMLElement("script")}} 要素が `src` 属性を持たず、また `type` 属性が実行可能な MIME タイプを示していない場合は、 JavaScript が使用できるデータブロック要素であると判断されます。「データブロック」はほとんどのテキストデータを持つことができる、 HTML5 の一般的な機能です。よって、以下の方法でワーカーを埋め込むことができます。

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>MDN Example - Embedded worker</title>
<script type="text/js-worker">
  // MIME タイプが text/js-worker であるため、このスクリプトは JS エンジンに解釈されません。
  var myVar = 'Hello World!';
  // ワーカーの残りのコードをここに置きます。
</script>
<script type="text/javascript">
  // MIME タイプが text/javascript であるため、このスクリプトは JS エンジンに解釈されます。
  function pageLog(sMsg) {
    // ブラウザーがレンダリングや再フローを行うのを 1 回だけにするために fragment を使用します。
    var oFragm = document.createDocumentFragment();
    oFragm.appendChild(document.createTextNode(sMsg));
    oFragm.appendChild(document.createElement('br'));
    document.querySelector('#logDisplay').appendChild(oFragm);
  }
</script>
<script type="text/js-worker">
  // MIME タイプが text/js-worker であるため、このスクリプトは JS エンジンに解釈されません。
  onmessage = function(oEvent) {
    postMessage(myVar);
  };
  // ワーカーの残りのコードをここに置きます。
</script>
<script type="text/javascript">
  // MIME タイプが text/javascript であるため、このスクリプトは JS エンジンに解釈されます。

  //
  // 以前は blob を構築していましたが、
  // 現在は Blob を使用します。
  var blob = new Blob(Array.prototype.map.call(document.querySelectorAll('script[type=\'text\/js-worker\']'), function (oScript) { return oScript.textContent; }),{type: 'text/javascript'});

  // すべての "text/js-worker" スクリプトを含む、新たな document.worker プロパティを生成します。
  document.worker = new Worker(window.URL.createObjectURL(blob));

  document.worker.onmessage = function(oEvent) {
    pageLog('Received: ' + oEvent.data);
  };

  // ワーカーを起動します。
  window.onload = function() { document.worker.postMessage(''); };
</script>
</head>
<body><div id="logDisplay"></div></body>
</html>
```

埋め込みワーカーは、新たな `document.worker` カスタムプロパティの中に入りました。

言うまでもなく、次の例のように、関数を Blob に変換して、その blob からオブジェクトの URL を生成することができます。

```js
function fn2workerURL(fn) {
  var blob = new Blob(['('+fn.toString()+')()'], {type: 'text/javascript'})
  return URL.createObjectURL(blob)
}
```

## 追加の例

ここでは Web Worker の使用方法について、さらに例を示します。

### バックグラウンドで演算を行う

ワーカーは主に、ユーザーインターフェイスのスレッドを妨げずに CPU 負荷が大きい演算を実行するために役立ちます。このサンプルでは、ワーカーをフィボナッチ数の計算に使用します。

#### JavaScript コード

以下の JavaScript コードをファイル "fibonacci.js" に保存し、次節の HTML から参照します。

```js
var results = [];

function resultReceiver(event) {
  results.push(parseInt(event.data));
  if (results.length == 2) {
    postMessage(results[0] + results[1]);
  }
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function(event) {
  var n = parseInt(event.data);

  if (n == 0 || n == 1) {
    postMessage(n);
    return;
  }

  for (var i = 1; i <= 2; i++) {
    var worker = new Worker('fibonacci.js');
    worker.onmessage = resultReceiver;
    worker.onerror = errorReceiver;
    worker.postMessage(n - i);
  }
 };
```

ワーカーは `onmessage` プロパティを、ワーカーのオブジェクトの `postMessage()` が呼び出されたときにメッセージを受け取る関数に設定します (これはその名前の*変数*や*関数*を定義することとは違いますので注意してください。 `var onmessage` と `function onmessage` は、これらの名前のグローバルグローバルプロパティを定義しますが、ワーカーを作成したウェブページから送信されたメッセージを受信するように関数を登録するわけではありません)。これは最適に開始して、それぞれの計算の反復処理を扱うために自分自身のコピーを起動します。

#### HTML コード

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"  />
    <title>Test threads fibonacci</title>
  </head>
  <body>

  <div id="result"></div>

  <script language="javascript">

    var worker = new Worker('fibonacci.js');

    worker.onmessage = function(event) {
      document.getElementById('result').textContent = event.data;
      dump('Got: ' + event.data + '\n');
    };

    worker.onerror = function(error) {
      dump('Worker error: ' + error.message + '\n');
      throw error;
    };

    worker.postMessage('5');

  </script>
  </body>
</html>
```

ウェブページは `result` という ID を持つ `div` 要素を作成して、結果を表示するために使用します。そして、ワーカーを起動します。ワーカーを起動した後は、`onmessage` ハンドラーを `div` 要素の内容を指定することで結果を表示するように構成し、また `onerror` ハンドラーはエラーメッセージを[ダンプ](</ja/docs/Debugging_JavaScript#dump()>)するように設定します。

最後に、ワーカーを開始するためにメッセージを送信します。

[この例のデモを試してください](https://mdn.github.io/fibonacci-worker/)。

### バックグラウンドでのウェブ入出力の実行

この例は、 [Using workers in extensions](/ja/docs/Using_workers_in_extensions) の記事に掲載しています。

### 複数のワーカーにタスクを分割する

マルチコアのコンピューターが一般的になってきたことで複数のワーカーに複雑な計算処理を分割することが有用になり、それらのタスクを複数の CPU コアで実行することが可能になります。

## その他のワーカー

専用ワーカーや共有ワーカーに加えて、利用できる他の種類のワーカーがあります。

- [ServiceWorker](/ja/docs/Web/API/Service_Worker_API) は、基本的に、ウェブアプリケーションと、ブラウザーおよびネットワーク (利用可能な場合) との間に位置するプロキシーサーバーとして機能します。これは、効果的なオフライン操作の構築ができるようにすること目的としています。ネットワークリクエストを傍受し、ネットワークが利用可能かどうかや、サーバー上の更新された資産に基づいて、適切なアクションをとります。また、プッシュ通知やバックグラウンド同期の API にもアクセスできるようになります。
- Chrome Worker は Firefox 独自の種類のワーカーであり、アドオンを開発していて、拡張機能でワーカーを使用したい場合、ワーカーから [js-ctypes](/ja/js-ctypes) にアクセスしたい場合に使用することができます。詳しくは {{domxref("ChromeWorker")}} をご覧ください。
- [Audio Worklet](/ja/docs/Web/API/Web_Audio_API#audio_processing_in_javascript) は、ワークレット (ワーカーの軽量版) のコンテキスト内でスクリプトによるオーディオ処理を直接実行する機能を提供します。

## ワーカースレッドのデバッグ

ほとんどのブラウザーは、 JavaScript デバッガーでワーカースレッドのデバッグを、メインスレッドのデバッグとまったく同じ方法で対応しています。たとえば、 Firefox と Chrome の両方で、メインスレッドとアクティブなワーカースレッドの両方の JavaScript ソースファイルを一覧表示し、これらのファイルをすべて開いてブレークポイントやログポイントを設定することができます。

下の画面ショットは、 Firefox での例です。*ソースリスト*には、別のワーカースレッドで実行されている `worker.js` が表示されています。このファイルを選択すると、メイン スレッドで実行されているコードと同様に、[ソースペイン](/ja/docs/Tools/Debugger/UI_Tour#source_pane)で開かれます。

![](worker-source.png)

> **Note:** **注**: ワーカーのスクリプトは必要になったときに読み込まれるため、ページが読み込まれたての時にはソースリストに現れていないかもしれません。

ソースパネルの中では通常の方法でワーカースレッドに[ブレークポイント](< /ja/docs/Tools/Debugger/How_to/Set_a_breakpoint>)または[ログポイント](< /ja/docs/Tools/Debugger/Set_a_logpoint>)) を設定することができます。実行が一時停止されると、デバッガーのコンテキストが更新され、正しい[ブレークポイント](< /ja/docs/Tools/Debugger/How_to/Set_a_breakpoint>)、[インラインの変数のプレビュー](< /ja/docs/Tools/Debugger/How_to/Set_a_breakpoint#inline_variable_preview>)、[コールスタック](< /ja/docs/Tools/Debugger/UI_Tour#call_stack>)などが期待通りに表示されます。

![](worker-breakpoints-callstack.png)

> **Note:** **注**: 詳しくは [Firefox JavaScript Debugger](< /ja/docs/Tools/Debugger>) を参照してください。

## ワーカーで使用できる関数とインターフェイス

標準的な JavaScript 機能のほとんどが Web Worker 内で使用できます。以下のものを含みます。

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Global_Objects/Array", "Array")}}、{{jsxref("Global_Objects/Date", "Date")}}、{{jsxref("Global_Objects/Math", "Math")}}、{{jsxref("Global_Objects/String", "String")}}
- {{domxref("WindowOrWorkerGlobalScope.setTimeout")}} および {{domxref("WindowOrWorkerGlobalScope.setInterval")}}

ワーカーで*実行できない*ことは主に、親ページに直接影響を与えるものです。これは、 DOM の操作やページのオブジェクトを使用することを含みます。{{domxref("DedicatedWorkerGlobalScope.postMessage")}} を使用してメインスクリプトにメッセージを戻してから変更操作を行う形で、間接的に実行しなければなりません。

> **Note:** あるメソッドがワーカーで利用できるかどうかは、サイト <https://worker-playground.glitch.me/> を使ってテストできます。例えば、Firefox 84 でサイトに [EventSource](/ja/docs/Web/API/EventSource) と入力すると、サービスワーカーではサポートされていないが、専用ワーカーや共有ワーカーではサポートされていることがわかります。

> **Note:** **メモ**: ワーカーで使用できる関数の完全なリストは、[ワーカーで使用できる関数とインターフェイス](< /ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers>)でご覧ください。

## 仕様書

| 仕様書                                                                   | 状態                             | 備考 |
| ------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#workers', 'Web workers')}} | {{Spec2('HTML WHATWG')}} |      |

## 関連情報

- [`Worker`](/ja/docs/Web/API/Worker) インターフェイス
- [`SharedWorker`](/ja/docs/Web/API/SharedWorker) インターフェイス
- [ワーカーで使用できる関数](/ja/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
