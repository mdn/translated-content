---
title: 始めましょう
slug: Web/Guide/AJAX/Getting_Started
---

この記事は AJAX の基礎の概観と、入門のための二つの実践的なサンプルを示します。

### AJAX とは?

AJAX は **A**synchronous **J**avaScript **A**nd **X**ML の頭文字を取ったものです。これは一言で言えば、 [`XMLHttpRequest`](/ja/docs/XMLHttpRequest) オブジェクトを使ってサーバーと通信することです。 AJAX は JSON, XML, HTML, テキストファイルなど、様々な形式の情報で送受信することができます。 AJAX の最も魅力的な特徴は「非同期」であること、つまり、サーバーとの通信、データの交換、ページの更新を、ページの再読み込みなしに行うことができる点です。

AJAX でできることには、二つの重要な特徴があります。

- ページを再読み込みすることなくサーバーに要求を送る
- サーバーからデータを受け取って処理する

### Step 1 – HTTP リクエストの送り方

JavaScript からサーバーに [HTTP](/ja/HTTP) リクエストを送るためには、この機能を提供するオブジェクトのインスタンスが必要になります。これが `XMLHttpRequest` の登場する場所です。このクラスは、もともとは Internet Explorer で `XMLHTTP` と呼ばれる ActiveX オブジェクトとして導入されたものです。その後、 Mozilla や Safari やその他のブラウザがこれに追随し、 Microsoft 独自の ActiveX オブジェクトのメソッドやプロパティに対応する `XMLHttpRequest` オブジェクトを実装しました。いっぽう、 Microsoft も同様に XMLHttpRequest を実装しました。

```js
// 古い互換コードで、もう必要ありません。
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 6 以前
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **メモ:** 説明のために、このコードは実際に XMLHttp インスタンスを作成するのに使用するコードよりも多少簡単にしています。より実際に近いサンプルは、この記事の step 3 を見てください。

リクエストを送ったら、応答を受け取った後に何をするかを決めなければなりません。この段階で行う必要があるのは、どの JavaScript 関数に応答を処理させるかを XMLHttp リクエストオブジェクトに教えることだけです。これは、オブジェクトの `onreadystatechange` プロパティに、使おうとしている JavaScript 関数の名前をこのように設定することで行えます。

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

このとき、関数名の後に括弧や引数がないことに注意してください。それは、実際にそれを呼ぶのではなく単純に関数の参照を渡しているからです。また、関数名を設定するのではなく、以下のように関数や応答を処理する動作をその場で定義するという JavaScript の機能 (「無名関数」と呼ばれる) を利用することもできます。

```js
httpRequest.onreadystatechange = function(){
    // ここでサーバーからの応答を処理します。
};
```

次に、応答を受け取った後に何をするかを宣言したら、以下のように HTTP 要求オブジェクトの `open()` と `send()` 呼び出して、要求を作成する必要があります。

```js
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send();
```

- `open()` の最初の引数は、サーバーが対応している HTTP リクエストメソッド、つまり、GET、POST、HEAD やその他のメソッドになります。 HTTP 標準に準拠するためにメソッド名はすべて大文字にしてください。そうでなければ、いくつかのブラウザ (Firefox など) ではリクエストを送信しません。利用可能な HTTP リクエストメソッドに関しての詳細情報については [W3C の仕様書](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)を参照してください。
- 第二引数は、リクエストを送信するページの URL です。セキュリティ上の問題から、他のドメインのページを読むことはできません。つまり、すべてのページに対して同一のドメイン名を利用しないと、 `open()` を呼び出したときに「権限エラー」を受け取ることになるということです。よくある落とし穴は、サイトに `domain.tld` でアクセスしながら、`www.domain.tld` でページを読み込もうとすることです。本当に他のドメインにリクエストを送信する必要がある場合は、 [HTTP アクセス制御](/ja/docs/Web/HTTP/HTTP_access_control)を参照してください。
- 第三引数は、リクエストを非同期に送るかどうかを示します。 `true` (既定値) であれば、 JavaScript の実行が継続され、サーバーの応答が届くまでの間もユーザーがページを操作することができます。これが、 AJAX の最初の A です。

`send()` メソッドの引数は、要求を `POST` するときにサーバーに送信したい任意のデータです。フォームデータはサーバーが解釈できる形式、例えばクエリ文字列のような形式、

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

又は、 `multipart/form-data`, JSON, XML など形式にしてください。

なお、データを `POST` する場合、要求の MIME タイプを設定する必要がある場合があります。例えば、フォームデータをクエリ文字列として `send()` を呼び出して送る前に、次の文を使用してください。

```js
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

### Step 2 – サーバー応答の扱い

要求を送った時に、応答を扱う JavaScript 関数の名前を設定しました。

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

この関数では何を行うべきでしょうか。最初に、この関数ではリクエストの状態を調べる必要があります。ステータス値が `XMLHttpRequest.DONE` (4 に対応) であるなら、サーバーからの応答が完了しており、処理を進められることを意味します。

```js
if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // 全てが問題ない状態で、応答も返ってきています
} else {
    // まだ準備ができていません
}
```

`readyState` の値のリストは [XMLHTTPRequest.readyState](/ja/docs/Web/API/XMLHttpRequest/readyState) で文書化されていて、以下のようになっています。

- 0 (初期化前) 又は (**要求が初期化されていません**)
- 1 (読み込み中) 又は (**サーバーへの接続が確立されました**)
- 2 (読み込み完了) 又は (**要求を受信しました**)
- 3 (対話中) 又は (**要求を処理中です**)
- 4 (完了) 又は (**要求が完了して応答の準備ができました**)

次に、 HTTP 応答の [応答コード](/ja/docs/Web/HTTP/#HTTP_Response_Codes)を調べます。返ってくる可能性があるコードは [W3C](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) でリスト化されています。以下の例では、 AJAX 呼び出しが成功したか失敗したかを {{HTTPStatus("200", "200 OK")}} 応答コードをチェックすることで判別します。

```js
if (httpRequest.status === 200) {
    // 完璧です！
} else {
    // 何らかの問題が発生しています。
    // たとえば、応答に 404 (Not Found) や
    // 500 (Internal Server Error) 応答コードが返っているなど。
}
```

要求の状態と応答の HTTP 状態コードをチェックした後、サーバーが送信したデータを使って好きなことが何でもできます。データにアクセスするには二つの選択肢があります。

- `httpRequest.responseText` – サーバーの応答をテキスト文字列として返します
- `httpRequest.responseXML` – サーバーの応答を JavaScript DOM 関数で扱える `XMLDocument` オブジェクトとして返します

なお、上記の段階は非同期要求を使用した場合 (`open()` の第三引数が未指定か `true` に設定されていた場合) のみ有効です。**同期**要求を使用した場合は関数を指定する必要はありませんが、これはユーザーの使い勝手をひどく損なうので、避けるべきです。

### Step 3 – 簡単な例

さて、ここまでに紹介した方法を使って簡単な HTTP リクエストを実行してみましょう。われわれの JavaScript では `test.html` という名前の、 "これはテストです" と書かれた HTML 文書を要求し、その内容を `alert()` で表示します。注意として、この例では vanilla JavaScript を使っています — jQuery は入っていません。また HTML, XML, PHP ファイルは同一ディレクトリに置かれています。

```html
<button id="ajaxButton" type="button">要求を実行</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('中断 :( XMLHTTP インスタンスを生成できませんでした');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
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

- ユーザーがブラウザーで「要求を実行」をクリックする。
- イベントハンドラーから `makeRequest()` 関数が呼び出される。
- 要求が作成され、(`onreadystatechange`) により `alertContents()` への処理引継ぎが設定される。
- `alertContents()` では、応答が返ってきていて問題無いかを確認した後、`test.html` ファイルの中身を `alert()` で表示する。

> **メモ:** 要求を送信する先が静的な HTML ファイルではなく、 XML を返すコードである場合、 Internet Explorer に応答ヘッダーを設定しなければなりません。`Content-Type: application/xml` というヘッダーを設定しなければ、XML 要素にアクセスしようとしている行で IE が "Object Expected" という Javascript エラーを投げるでしょう。

> **メモ:** `Cache-Control: no-cache` というヘッダーを設定しなければ、ブラウザーが応答をキャッシュして要求を再送信しなくなるため、デバッグが難しくなるでしょう。 GET 引数に、タイムスタンプやランダムな数字のような、常に異なるものを追加する方法もあります ([キャッシュをバイパスする](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache)をご覧ください)

> **メモ:** `httpRequest` 変数をグローバルに使用すると、関数の呼び出しが競合して `makeRequest()` が互いに上書きし合うため、競合状態が発生します。 `httpRequest` 変数を、 AJAX 関数を含んでいる[クロージャ](/ja/docs/Web/JavaScript/Closures)のローカルで宣言することでこれを防ぐことができます。

通信エラーのイベント (サーバーがダウンしたなど) では、応答状態にアクセスする時に `onreadystatechange` メソッドの中で例外が発生します。この問題を防ぐため、 `if...then` 文は必ず `try...catch` で囲むようにしてください。

```js
function alertContents() {
  try {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('リクエストに問題が発生しました');
      }
    }
  }
  catch( e ) {
    alert('例外を捕捉: ' + e.description);
  }
}
```

### Step 4 – 「X-ファイル」 もしくは XML レスポンスの扱い方

前の例では、 HTTP リクエストへの応答を受け取った後、要求オブジェクトの `responseText` プロパティを用いて、それに含まれている test.html の中身を取得しました。では、次に `responseXML` プロパティのほうを試してみましょう。

はじめに、あとでサーバーに要求する妥当な XML 文書を作成します。 test.xml ファイルの中身は以下のようなものです。

```html
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

スクリプトでは、リクエスト送出を以下のように変更します。

```html
...
onclick="makeRequest('test.xml')">
...
```

そして、 `alertContents()` では、 `alert(httpRequest.responseText);` としている行を以下のように変更します。

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
```

このコードでは、 `responseXML` から `XMLDocument` オブジェクトを取得し、 DOM メソッドを利用して XML 文書に含まれるデータにアクセスしています。 この`test.xml` ファイルは[ここ](http://www.w3clubs.com/mozdev/test.xml)で、変更されたスクリプトは[ここ](http://www.w3clubs.com/mozdev/httprequest_test_xml.html)で見ることができます。

### Step 5 – データを処理する

最後に、データをサーバーに送って応答を受けましょう。 JavaScript はここで動的なページ `test.php` に要求し、このページは送ったデータを受けて「計算した」文字 - "Hello, \[user data]!" - を返し、これを `alert()` します。

まずは HTML にテキストボックスを追加してユーザーが名前を入れられるようにします:

```html
<label>Your name:
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

イベントハンドラーに、テキストボックスからユーザーデータを取得してサーバーサイドスクリプトの URL と一緒に `makeRequest()` に送るような行も追加します。

```js
  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php',userName);
  };
```

`makeRequest()` を編集してユーザーデータを受け取ってサーバーに渡すようにします。リクエストメソッドは `GET` から `POST` に変更し、データを `httpRequest.send()` 呼び出しのパラメーターとして入れます:

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

`alertContents()` 関数はステップ 3 と同じように書かれて、サーバーが計算された文字列を返していたら、 alert するようにします。しかし、サーバーが計算された文字列とオリジナルのユーザーデータの両方を返していたらどうでしょう？ユーザーがテキストボックスに "Jane" とタイプしていたら、サーバーの応答はこのようになります:

`{"userData":"Jane","computedString":"Hi, Jane!"}`

このデータを `alertContents()`,内で使うには、単に `responseText` を alert することはできず、これを parse して、求めるプロパティの `computedString` を alert します:

```js
function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = JSON.parse(httpRequest.responseText);
      alert(response.computedString);
    } else {
      alert('There was a problem with the request.');
    }
  }
}
```

`test.php` には以下のようなものが入ります。

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name;
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

DOM メソッドについてより詳しくは、[Mozilla での DOM の実装](/ja/docs/dom/)の文書を参照してください。
