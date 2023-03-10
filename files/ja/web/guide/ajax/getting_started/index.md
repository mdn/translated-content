---
title: 始めましょう
slug: Web/Guide/AJAX/Getting_Started
l10n:
  sourceCommit: 20bbabd48da81dda9d79d123cb1c880c43925719
---

{{QuickLinksWithSubpages("/ja/docs/Web/Guide/AJAX")}}

この記事は AJAX の基礎の概観と、入門のための 2 つの実践的なサンプルを示します。

### AJAX とは?

AJAX は **A**synchronous **J**avaScript **A**nd **X**ML の頭文字を取ったものです。これは一言で言えば、 [`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) オブジェクトを使ってサーバーと通信することです。 AJAX は JSON, XML, HTML, テキストファイルなど、様々な形式の情報で送受信することができます。 AJAX の最も魅力的な特徴は「非同期」であること、つまり、サーバーとの通信、データの交換、ページの更新を、ページの再読み込みなしに行うことができる点です。

AJAX でできることには、2 つの重要な特徴があります。

- ページを再読み込みすることなくサーバーに要求を送る
- サーバーからデータを受け取って処理する

## Step 1 – HTTP リクエストの送り方

JavaScript からサーバーに [HTTP](/ja/docs/Web/HTTP) リクエストを送るためには、この機能を提供するオブジェクトのインスタンスが必要になります。これが `XMLHttpRequest` の登場する場所です。

```js
const httpRequest = new XMLHttpRequest();
```

リクエストを行った後、レスポンスが返ってきます。この段階で `XMLHttpRequest` オブジェクトに、どの JavaScript 関数がレスポンスを処理するかを指示する必要があります。オブジェクトの `onreadystatechange` プロパティを、以下のようにリクエストの状態が変化したときに呼び出される関数に設定します。

```js
function handler() {
  // ここでサーバーのレスポンスを処理します。
}

httpRequest.onreadystatechange = handler;
```

このとき、関数名の後に括弧や引数がないことに注意してください。実際にその関数を呼び出すのではなく、関数への参照を代入しているからです。また、関数名を設定するのではなく、以下のように関数やレスポンスを処理する動作をその場で定義するという JavaScript の機能（「無名関数」と呼ばれる）を利用することもできます。

```js
httpRequest.onreadystatechange = () => {
  // ここでサーバーからのレスポンスを処理します。
};
```

次に、レスポンスを受け取った後に何をするかを宣言した後で、以下のように HTTP リクエストオブジェクトの `open()` と `send()` 呼び出して、リクエストを作成する必要があります。

```js
httpRequest.open("GET", "http://www.example.org/some.file", true);
httpRequest.send();
```

- `open()` の最初の引数は HTTP リクエストメソッド、つまり、GET、POST、HEAD などのサーバーが対応しているメソッドです。HTTP 標準に準拠するために、メソッド名はすべて大文字にしてください。そうでなければ、ブラウザーによっては（Firefox などでは）リクエストを送信しません。利用可能な HTTP リクエストメソッドに関しての詳細情報については、[仕様書](https://www.rfc-editor.org/rfc/rfc9110.html#name-methods)を確認してください。
- 第二引数は、リクエストを送信するページの URL です。セキュリティ上の問題から、既定では第三者のドメインの URL を呼び出すことはできません。すべてのページで正確なドメイン名を使用するようにしてください。さもないと、`open()` を呼び出したときに "permission denied" エラーを受け取ることになります。よくある落とし穴は、自分のサイトに `domain.tld` でアクセスしているのに、`www.domain.tld` でページを呼び出そうとすることです。実際に別のドメインにリクエストを送る必要がある場合は、 [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS) を参照してください。
- 第三引数は、リクエストを非同期 (asynchronous) に送るかどうかを示します。 `true` （既定値）であれば、 JavaScript の実行が継続され、サーバーのレスポンスが届くまでの間もユーザーがページを操作することができます。これが、 AJAX の最初の A です。

`send()` メソッドの引数は、要求を `POST` するときにサーバーに送信したい任意のデータです。フォームデータはサーバーが解釈できる形式、例えばクエリー文字列のような形式の文字列です。

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

または、 `multipart/form-data`, JSON, XML など形式にしてください。

なお、データを `POST` する場合、リクエストの MIME タイプを設定する必要がある場合があります。例えば、フォームデータをクエリー文字列として `send()` を呼び出して送る前に、次の文を使用してください。

```js
httpRequest.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded"
);
```

## Step 2 – サーバーレスポンスの取り扱い

リクエストを送った時に、レスポンスを取り扱う JavaScript 関数の名前を設定しました。

```js
httpRequest.onreadystatechange = 関数名;
```

この関数では何を行うべきでしょうか。最初に、この関数ではリクエストの状態を調べる必要があります。状態が `XMLHttpRequest.DONE` （4 に対応）であるなら、サーバーからのレスポンスが完了しており、処理を進められることを意味します。

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
  // すべてが問題ない状態で、レスポンスも返ってきています
} else {
  // まだ準備ができていません
}
```

`readyState` の値の一覧は [XMLHTTPRequest.readyState](/ja/docs/Web/API/XMLHttpRequest/readyState) で文書化されていて、以下のようになっています。

- 0 （初期化前）または（**リクエストが初期化されていません**）
- 1 （読み込み中）または（**サーバーへの接続が確立されました**）
- 2 （読み込み完了）または（**リクエストを受信しました**）
- 3 （対話中）または（**リクエストを処理中です**）
- 4 （完了）または（**リクエストが完了してレスポンスの準備ができました**）

次に、 HTTP レスポンスの [レスポンスコード](/ja/docs/Web/HTTP#http_response_codes)を調べます。返ってくる可能性があるコードは [W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) でリスト化されています。以下の例では、 AJAX 呼び出しが成功したか失敗したかを {{HTTPStatus("200", "200 OK")}} レスポンスコードをチェックすることで判別します。

```js
if (httpRequest.status === 200) {
  // 完璧です！
} else {
  // 何らかの問題が発生しています。
  // たとえば、レスポンスに 404 (Not Found) や
  // 500 (Internal Server Error) レスポンスコードが返っているなど。
}
```

リクエストの状態とレスポンスの HTTP 状態コードをチェックした後、サーバーが送信したデータを使って好きなことが何でもできます。データにアクセスするには 2 つの選択肢があります。

- `httpRequest.responseText` – サーバーのレスポンスをテキスト文字列として返します
- `httpRequest.responseXML` – サーバーのレスポンスを JavaScript DOM 関数で扱える `XMLDocument` オブジェクトとして返します

なお、上記の段階は非同期リクエストを使用した場合（`open()` の第三引数が未指定か `true` に設定されていた場合）のみ有効です。**同期**リクエストを使用した場合は関数を指定する必要はありませんが、これはユーザーの使い勝手をひどく損なうので、避けるべきです。

## Step 3 – 簡単な例

さて、ここまでに紹介した方法を使って簡単な HTTP リクエストを実行してみましょう。われわれの JavaScript では `test.html` という名前の、「これはテストです」と書かれた HTML 文書をリクエストし、その内容を `alert()` で表示します。注意として、この例では vanilla JavaScript を使っています — jQuery は入っていません。また HTML, XML, PHP ファイルは同一ディレクトリに置かれています。

```html
<button id="ajaxButton" type="button">リクエストを実行</button>

<script>
  (() => {
    let httpRequest;
    document
      .getElementById("ajaxButton")
      .addEventListener("click", makeRequest);

    function makeRequest() {
      httpRequest = new XMLHttpRequest();

      if (!httpRequest) {
        alert('中断 :( XMLHTTP インスタンスを生成できませんでした');
        return false;
      }
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open("GET", "test.html");
      httpRequest.send();
    }

    function alertContents() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          alert(httpRequest.responseText);
        } else {
          alert('リクエストに問題が発生しました');
        }
      }
    }
  })();
</script>
```

このサンプルでは以下のことを行います。

- ユーザーがブラウザーで「リクエストを実行」をクリックする。
- イベントハンドラーから `makeRequest()` 関数が呼び出される。
- リクエストが行われ、(`onreadystatechange`) により `alertContents()` へ処理が渡される。
- `alertContents()` では、レスポンスを受信していて問題無いかを確認した後、 `alert()` で `test.html` ファイルの中身を表示する。

> **メモ:** リクエストを送信する先が静的な HTML ファイルではなく、 XML を返すコードである場合、 Internet Explorer にレスポンスヘッダーを設定しなければなりません。`Content-Type: application/xml` というヘッダーを設定しなければ、XML 要素にアクセスしようとしている行で IE が "Object Expected" という Javascript エラーを投げるでしょう。

> **メモ:** `Cache-Control: no-cache` ヘッダーを設定しなければ、ブラウザーがレスポンスをキャッシュしてレスポンスを再送信しなくなるため、デバッグが難しくなるでしょう。 GET 引数に、タイムスタンプやランダムな数字のような、常に異なるものを追加する方法もあります ([キャッシュをバイパスする](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#キャッシュをバイパスする)をご覧ください)

> **メモ:** `httpRequest` 変数をグローバルに使用すると、関数の呼び出しが競合して `makeRequest()` が互いに上書きし合うため、競合状態が発生します。 `httpRequest` 変数を、 AJAX 関数を含んでいる[クロージャ](/ja/docs/Web/JavaScript/Closures)のローカルで宣言することでこれを防ぐことができます。

通信エラーのイベント（サーバーがダウンしたなど）では、レスポンスステータスにアクセスすると `onreadystatechange` メソッドの中で例外が発生します。この問題を防ぐため、 `if...then` 文は必ず `try...catch` で囲むようにしてください。

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert("リクエストに問題が発生しました");
      }
    }
  } catch (e) {
    alert(`例外を捕捉: ${e.description}`);
  }
}
```

### Step 4 – XML レスポンスの扱い

前の例では、 HTTP リクエストへのレスポンスを受け取った後、そのリクエストオブジェクトの `responseText` プロパティを用いて、それに含まれている `test.html` の中身を取得しました。では、次に `responseXML` プロパティのほうを試してみましょう。

はじめに、あとでサーバーにリクエストするための妥当な XML 文書を作成します。 文書 (`test.xml`) ファイルの中身は以下のようなものです。

```html
<?xml version="1.0" ?>
<root> I'm a test. </root>
```

次に、`makeRequest()` の中で、 `test.html` を作成した XML ファイルに置き換える必要があります。

```js
httpRequest.open("GET", "test.xml");
```

そして、`alertContents()` では、 `alert(httpRequest.responseText);` としている行を以下のように変更します。

```js
const xmldoc = httpRequest.responseXML;
const root_node = xmldoc.querySelector("root");
alert(root_node.firstChild.data);
```

このコードでは、`XMLDocument` オブジェクトを `responseXML` から取得し、 DOM メソッドを利用して XML 文書に含まれるデータにアクセスしています。

### Step 5 – データの処理

最後に、データをサーバーに送ってレスポンスを受け取りましょう。JavaScript はここで動的なページ `test.php` をリクエストし、このページは送ったデータを受けて「計算した」文字 - "Hello, \[user data]!" - を返し、これを `alert()` で表示します。

まずは HTML にテキストボックスを追加し、ユーザーが名前を入れられるようにします。

```html
<label>
  Your name:
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

イベントハンドラーに、テキストボックスからユーザーデータを取得してサーバーサイドスクリプトの URL と一緒に `makeRequest()` に送るような行も追加します。

```js
document.getElementById("ajaxButton").onclick = () => {
  const userName = document.getElementById("ajaxTextbox").value;
  makeRequest("test.php", userName);
};
```

`makeRequest()` を編集してユーザーデータを受け取ってサーバーに渡すようにします。リクエストメソッドは `GET` から `POST` に変更し、データを `httpRequest.send()` 呼び出しのパラメーターとして入れます:

```js
function makeRequest(url, userName) {
  // …

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open("POST", url);
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.send(`userName=${encodeURIComponent(userName)}`);
}
```

`alertContents()` 関数はステップ 3 と同じように書かれて、サーバーが計算された文字列を返していたら、 alert で表示するようにします。しかし、サーバーが計算された文字列と元のユーザーデータの両方を返すとしましょう。つまり、ユーザーがテキストボックスに「Jane」と入力した場合、サーバーのレスポンスは次のようになります。

```json
{ "userData": "Jane", "computedString": "Hi, Jane!" }
```

このデータを `alertContents()` 内で使うには、単に `responseText` を alert で表示することはできず、これを解釈して、求めるプロパティの `computedString` を alert で表示します。

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      const response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert("There was a problem with the request.");
    }
  }
}
```

`test.php` には以下のようなものが入ります。

```php
$name = $_POST['userName'] ?? 'no name';
$computedString = "Hi, " . $name . "!";
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

DOM メソッドについてより詳しくは、[ドキュメントオブジェクトモデル (DOM)](/ja/docs/Web/API/Document_Object_Model) の文書を参照してください。

## シンプルな制限時間付きの XHR の例

もう一つの単純な例を以下に示します。ここでは、XHR を介して次のような構造のテキストファイルを読み込むとします。

```
TIME: 312.05
TIME: 312.07
TIME: 312.10
TIME: 312.12
TIME: 312.14
TIME: 312.15
```

テキストファイルが読み込まれると、それぞれの改行文字（`\n` - 基本的にはテキストファイルの各改行位置）で項目を配列に `split()` してから、タイムスタンプの完全なリストと最後のタイムスタンプをページに表示しています。

これは `setInterval()` 呼び出しを使って、5 秒ごとに繰り返されます。つまり、ある種のサーバー側のスクリプトが継続的に、新しいタイムスタンプでテキストファイルを更新し、クライアント側で XHR コードが最新のタイムスタンプを報告するために使用するという想定です。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>XHR log time</title>
    <style></style>
  </head>
  <body>
    <p id="writeData" class="data">Off-Line</p>
    <p id="lastStamp">No Data yet</p>

    <script>
      const fullData = document.getElementById("writeData");
      const lastData = document.getElementById("lastStamp");

      function fetchData() {
        console.log("Fetching updated data.");
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "time-log.txt", true);
        xhr.onload = () => {
          updateDisplay(xhr.response);
        };
        xhr.send();
      }

      function updateDisplay(text) {
        fullData.textContent = text;

        const timeArray = text.split("\n");

        // ファイルシステムによっては、テキストファイルの終わりに常に空行を出力するために下記の処理を行う。
        if (timeArray[timeArray.length - 1] === "") {
          timeArray.pop();
        }

        lastData.textContent = timeArray[timeArray.length - 1];
      }

      setInterval(fetchData, 5000);
    </script>
  </body>
</html>
```
