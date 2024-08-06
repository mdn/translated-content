---
title: 同期と非同期のリクエスト
slug: Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests
l10n:
  sourceCommit: c215109b90da51435eaa2c94a8f6764909f628e0
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

{{domxref('XMLHttpRequest')}} は同期と非同期通信の両方に対応しています。しかし、一般的には性能上の理由により、同期リクエストより非同期リクエストを選択すべきです。

同期リクエストはプログラムの実行をブロックし、画面を「フリーズ」させたりユーザー操作が反応しない状態にしたりすることがあります。

## 非同期リクエスト

非同期 {{domxref('XMLHttpRequest')}} を使用すると、データが到着したときにコールバックを受け取ります。これにより、リクエストが処理されている間、ブラウザーは通常通りに動作することができます。

### 例: コンソールログへファイルを送信する

最も簡単な非同期 {{domxref('XMLHttpRequest')}} の使用法を示します。

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = (e) => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = (e) => {
  console.error(xhr.statusText);
};
xhr.send(null);
```

2 行目で第 3 引数を `true` にすることで、リクエストを非同期に処理することを指定しています。

3 行目はイベントハンドラー関数オブジェクトを生成し、リクエストの `onload` 属性に割り当てています。このハンドラーは、4 行目でリクエストの `readyState` を見てトランザクションが完了したかどうかを確認し、もしそうであり、かつ HTTP ステータスが 200 であれば、受信した内容をコンソールにダンプします。エラー発生時には、エラーメッセージが表示されます。

15 行目では実際にリクエストを開始します。コールバック処理は状態が変化するたびに呼び出されます。

### 例: 外部ファイルを読込む標準的な関数を書く

たくさんの外部ファイルを読み込まなければならないことがあります。これは {{domxref('XMLHttpRequest')}} オブジェクトを非同期で使用して、読み込まれたファイルの内容を指定されたリスナに切り替える標準的な関数です。

```js
function xhrSuccess() {
  this.callback.apply(this, this.arguments);
}

function xhrError() {
  console.error(this.statusText);
}

function loadFile(url, callback, ...args) {
  const xhr = new XMLHttpRequest();
  xhr.callback = callback;
  xhr.arguments = args;
  xhr.onload = xhrSuccess;
  xhr.onerror = xhrError;
  xhr.open("GET", url, true);
  xhr.send(null);
}
```

使用法は次の通りです。

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", showMessage, "New message!\n\n");
```

ユーティリティ関数 **_loadFile_** の引数は、 (i) (HTTP の GET リクエストを介して) 読み込む対象の URL、 (ii) XHR 操作の正常終了時に実行する関数、 (iii) 任意で XHR オブジェクトから成功時のコールバック関数に (`arguments` プロパティで) そのまま渡される追加の引数のリストです。

1 行目では、 XHR 操作の正常終了時に呼び出される関数を宣言しています。これは、 loadFile 関数の呼び出しの中で XHR オブジェクトのプロパティに (11 行目で) 割り当てられたコールバック関数 (この場合は `showMessage` 関数) を呼び出します。 `loadFile` 関数の呼び出しに提供される追加の引数は (もしあれば)、コールバック関数の実行時に「適用」されます。

5 行目では、 XHR 操作の完了に失敗した時に呼び出される関数を宣言しています。

11 行目では、 `loadFile` の第 2 引数で渡された成功時のコールバック関数を XHR オブジェクトの `callback` プロパティに格納します。

12 行目では、 `loadFile` の呼び出しで与えられた引数の配列を分割します。第 3 引数以降、残りのすべての引数が集められ、変数 `xhr` の arguments プロパティに割り当てられ、成功時のコールバック関数 `xhrSuccess` に渡され、最終的には `xhrSuccess` 関数から呼び出されるコールバック関数 (この場合は `showMessage` 関数) に渡されます。

15 行目では、リクエストを非同期に処理することを指示するため、第 3 引数に `true` を指定しています．

16 行目で実際にリクエストを実行しています。

### 例: タイムアウトの利用

読み込みが行われるのを待つ間、プログラムが永遠に待つことを防ぐためにタイムアウトを利用することができます。これは次のように、 {{domxref('XMLHttpRequest')}} オブジェクト上の `timeout` プロパティの値を設定することで行うことができます。

```js
function loadFile(url, timeout, callback, ...args) {
  const xhr = new XMLHttpRequest();
  xhr.ontimeout = () => {
    console.error(`The request for ${url} timed out.`);
  };
  xhr.onload = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
```

`ontimeout` ハンドラーを設定することで、 "timeout" イベントを処理するコードを追加していることに注意してください。

使用方法は次の通りです。

```js
function showMessage(message) {
  console.log(`${message} ${this.responseText}`);
}

loadFile("message.txt", 2000, showMessage, "New message!\n");
```

ここではタイムアウトを 2000 ミリ秒に設定しています．

## 同期リクエスト

> [!WARNING]
> 同期 XHR リクエストは、特にネットワークの状態が悪かったり、リモートサーバの応答が遅かったりしたときに、しばしばウェブ上でハングアップの原因となります。同期 XHR は非推奨であり、使用しないようにして、代わりに非同期リクエストを使用してください。

`timeout` や `abort` 等の XHR の新機能は同期 XHR では許可されていません。実行すると `InvalidAccessError` が発生するでしょう。

### 例: HTTP 同期リクエスト

この例は単純な同期リクエストの作成方法を示しています。

```js
const request = new XMLHttpRequest();
request.open("GET", "/bar/foo.txt", false); // `false` で同期リクエストになる
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```

3 行目でリクエストを送信しています。引数が `null` であることは、 `GET` リクエストに本文が必要ないことを示しています。

5 行目ではトランザクション完了後，ステータスコードをチェックしています。結果のコードが 200 — HTTP の "OK" の結果 — ならば、文書のテキストコンテンツがコンソールに出力されます。

### 例: ワーカーからの同期 HTTP リクエスト

同期リクエストが通常、実行をブロックしない稀な例として、 [`Worker`](/ja/docs/Web/API/Worker) 内での {{domxref('XMLHttpRequest')}} の利用があります。

**`example.html`** (主ページ):

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>MDN Example</title>
    <script>
      const worker = new Worker("myTask.js");
      worker.onmessage = (event) => {
        alert(`Worker said: ${event.data}`);
      };

      worker.postMessage("Hello");
    </script>
  </head>
  <body>
    …
  </body>
</html>
```

**`myFile.txt`** ({{domxref('XMLHttpRequest')}} 同期呼出しの対象):

```plain
Hello World!!
```

**`myTask.js`** ([`Worker`](/ja/docs/Web/API/Worker)):

```js
self.onmessage = (event) => {
  if (event.data === "Hello") {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "myFile.txt", false); // 同期リクエスト
    xhr.send(null);
    self.postMessage(xhr.responseText);
  }
};
```

> **メモ:** `Worker` を使っているため、結果的には非同期になります。

これは、バックグラウンドでサーバーとやり取りしたり、一部のコンテンツを先読みしたりするために便利です。例と詳細については [ウェブワーカーの利用](/ja/docs/Web/API/Web_Workers_API/Using_web_workers)を参照して下さい。

### 同期 XHR を使用する場面をビーコン API で対応する

{{domxref('XMLHttpRequest')}} の同期的な使用が置き換えられない場面がいくつかあります。例えば {{domxref("Window.unload_event", "unload")}}, {{domxref("Window.beforeunload_event", "beforeunload")}}, {{domxref("Window.pagehide_event", "pagehide")}} などのイベントの処理中などです。 `fetch()` API を `keepalive` フラグ付きで使用することを検討してください。 `fetch` API を `keepalive` フラグ付きで使用できないのであれば、ふつうは快適なユーザー操作を提供するために {{domxref("navigator.sendBeacon()")}} API でこれらの場合に対応することができます。

次の例は、 unload ハンドラー内で同期 {{domxref('XMLHttpRequest')}} を使用してサーバーにデータを送信することを試みる、実験的な分析コードを示しています。この結果、ページのアンロードに遅延が発生します。

```js
window.addEventListener("unload", logData, false);

function logData() {
  const client = new XMLHttpRequest();
  client.open("POST", "/log", false); // 第 3 引数で同期 XHR を指定しています。 :(
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(analyticsData);
}
```

**`sendBeacon()`** メソッドを使用すると、ユーザーエージェントに機会があるとき、**アンロードを遅延させたり次の操作の性能に影響を与えたりすることなく**データがウェブサーバーに非同期で送信されます。

次の例は、 **`sendBeacon()`** メソッドを使用してサーバーにデータを送信する実験的な分析コードパターンを示しています。

```js
window.addEventListener("unload", logData, false);

function logData() {
  navigator.sendBeacon("/log", analyticsData);
}
```

## 関連情報

- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [`navigator.sendBeacon`](/ja/docs/Web/API/Navigator/sendBeacon)
