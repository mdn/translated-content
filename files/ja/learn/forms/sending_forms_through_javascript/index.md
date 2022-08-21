---
title: JavaScript によるフォームの送信
slug: Learn/Forms/Sending_forms_through_JavaScript
tags:
  - Advanced
  - Example
  - Forms
  - Forms Guide
  - Guide
  - HTML
  - HTML forms
  - JavaScript
  - Learn
  - Security
  - Web
  - Web Forms
translation_of: Learn/Forms/Sending_forms_through_JavaScript
---
{{LearnSidebar}}

HTML フォームは [HTTP](/ja/docs/Web/HTTP) リクエストを宣言的に送信できます。しかし、フォームは 、例えば `XMLHttpRequest` のように JavaScript 経由で送信する HTTP リクエストを準備することもできます。この記事ではその方法を探ります。

## フォームは必ずしもフォームであるとは限らない

PWA や SPA やフレームワークベースのアプリが現れたことで、[HTML フォーム](/ja/docs/HTML/Forms "HTML/Forms")を、応答データを受け取ったときに、新しい文書を読み込むことなくデータ送信するのに使用することが次第に一般的になってきました。最初になぜいろいろなアプローチが必要となるのかを話しましょう。

### グローバルインターフェイスの制御を取得

次の記事で述べる標準の HTML フォーム送信では、データが送信された URL がロードされます。つまり、ブラウザーウィンドウは全ページロードで移動します。ページ全体の読み込みを回避すると、ちらつきのような視覚上の問題や、ネットワークの遅延を避けて、よりスムーズな操作を提供できます。

最近の多くの UI は、HTML フォームを使用してユーザーからの入力を収集します。ユーザーがデータを送信しようとすると、アプリケーションはバックグラウンドでデータを非同期的に制御して送信し、変更が必要な UI の部分のみを更新します。

任意のデータを非同期に送信することは、**"Asynchronous JavaScript And XML"** を表す頭字語である [AJAX](/ja/docs/AJAX "AJAX") として知られています。

### その違いは?

{{domxref("XMLHttpRequest")}} (XHR) DOM オブジェクトで HTTP リクエストを作成して送信し、結果を取得することができます。歴史的には、{{domxref("XMLHttpRequest")}} は交換フォーマットとして [XML](/ja/docs/XML_Introduction) を取得して送信するように設計されていました。しかし、[JSON](/ja/docs/Glossary/JSON) は XML に取って代わっています。しかし、XML も JSON もフォームデータリクエストのエンコーディングには適合しません。フォームデータ (`application/x-www-form-urlencoded`) は、キーと値のペアの URL エンコードされたリストで構成されています。バイナリーデータを送信するために、HTTP リクエストは `multipart/form-data` に再形成されます**。**

> **Note:** [Fetch API](/ja/docs/Web/API/Fetch_API) は最近 XHR の代わりによく使われます — これは XHR のモダンで更新されたバージョンであり、同様に動作しますが利点もあります。この記事で見る大半の XHR コードは Fetch で置き換えられます。

フロントエンド (ブラウザーで実行されるコード) とバックエンド (サーバーで実行されるコード) を制御すれば、JSON/XML を送信して必要に応じて処理することができます。

しかし、サードパーティのサービスを利用したい場合、サービスが要求する零式でデータ送信する必要があります。

ではどのようにしてそのようなデータを送信するのでしょうか?以下に必要となるさまざまなテクニックがあります。

## フォームデータの送信

フォームデータを送信するには、従来の方法から新しい {{domxref("FormData")}} オブジェクトまで 3 つの方法があります。それらを詳しく見てみましょう。

### 手作業での XMLHttpRequest の作成

{{domxref("XMLHttpRequest")}} は、HTTP リクエストを作成する最も安全で信頼性の高い方法です。{{domxref("XMLHttpRequest")}} を使用してフォームデータを送信するには、URL エンコードしたデータを準備し、フォームデータリクエストの詳細に従ってください。

例を見てみましょう:

```html
<button>Click Me!</button>
```

JavaScript はこうです:

```js
const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // data オブジェクトを、URL エンコードしたキーと値のペアの配列に変換します
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

 // キーと値のペアをひとつの文字列に連結して、Web ブラウザーのフォーム送信方式に
 // 合うよう、エンコードされた空白をプラス記号に置き換えます。
  urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // リクエストをセットアップします
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // フォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // 最後に、データを送信します
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )
```

そして、結果は以下のとおりです:

{{EmbedLiveSample("Building_an_XMLHttpRequest_manually", "100%", 50)}}

> **Note:** この {{domxref("XMLHttpRequest")}} の使用は、第三者の Web サイトにデータを送信したい場合にも、同一生成元ポリシーの対象となります。クロスオリジンリクエストの場合は、[CORS と HTTP のアクセス制御](/ja/docs/Web/HTTP/CORS)が必要です。

### XMLHttpRequest と FormData オブジェクトの使用

HTTP リクエストを手作業で作成するのは大変なことです。幸いなことに、最近の [XMLHttpRequest 仕様](http://www.w3.org/TR/XMLHttpRequest/)では {{domxref("FormData")}} オブジェクトを使ってフォームデータリクエストを処理する便利で簡単な方法が提供されています。

{{domxref("FormData")}} オブジェクトは、送信用のフォームデータを作成したり、送信方法を管理するフォーム要素内のデータを取得するために使用できます。{{domxref("FormData")}} オブジェクトは "書き込み専用" であることに注意してください。つまり、変更することはできますが、内容を取得することはできません。

このオブジェクトの使い方は [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)で詳述されていますが、2 つの例があります。

#### 独立した FormData オブジェクトを使用する

```html
<button type="button" onclick="sendData({test:'ok'})">Click Me!</button>
```

HTML のサンプルはおわかりでしょう。JavaScript はこうです。

```js
const btn = document.querySelector('button');

function sendData(data) {
  const XHR = new XMLHttpRequest(),
        FD  = new FormData();

  // データを FormData オブジェクトに投入します
  for(name in data) {
    FD.append(name, data[name]);
  }

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something goes wrong.');
  });

  // リクエストをセットアップします
  XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.php');

  // FormData オブジェクトを送信するだけです。HTTP ヘッダは自動的に設定されます
  XHR.send(FD);
}
```

そして、結果は以下のとおりです:

{{EmbedLiveSample("Using_a_standalone_FormData_object", "100%", 50)}}

#### form 要素に紐づけた FormData を使用する

`FormData` オブジェクトを {{HTMLElement("form")}} 要素に紐づけることもできます。これにより、フォームに含まれるデータを表す `FormData` をすばやく得ることができます。

HTML の部分はかなり典型的です:

```html
<form id="myForm">
  <label for="myName">Send me your name:</label>
  <input id="myName" name="name" value="John">
  <input type="submit" value="Send Me!">
</form>
```

しかし、JavaScript がフォームを乗っ取ります。

```js
window.addEventListener("load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // FormData オブジェクトと form 要素を紐づけます
    const FD  = new FormData(form);

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });

    // リクエストをセットアップします
    XHR.open("POST", "http://ucommbieber.unl.edu/CORS/cors.php");

    // 送信したデータは、ユーザーがフォームで提供したものです
    XHR.send(FD);
  }

  // form 要素にアクセスしなければなりません
  const form = document.getElementById("myForm");

  // フォームの submit イベントを乗っ取ります
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});
```

そして、結果は以下のとおりです:

{{EmbedLiveSample("Using_FormData_bound_to_a_form_element", "100%", 50)}}

フォームの {{domxref("HTMLFormElement.elements", "elements")}} プロパティを使用してフォーム内のすべてのデータ要素のリストを取得し、それらを一度に 1 つずつ手動で管理することで、このプロセスにさらに関わることができます。詳細については、{{SectionOnPage("/ja/docs/Web/API/HTMLFormElement.elements", "要素リストの内容にアクセスする")}}の例を参照してください。

## バイナリーデータを扱う

`<input type="file">` ウィジェットを含むフォームで {{domxref("FormData")}} オブジェクトを使用すると、データは自動的に処理されます。しかし、バイナリーデータを手動で送るには、追加でやるべきことがあります。

現代の Web には、バイナリーデータのソースが多数あります。たとえば、{{domxref("FileReader")}}、{{domxref("HTMLCanvasElement","Canvas")}}、[WebRTC](/ja/docs/Web/API/Navigator/getUserMedia) などです。残念ながら、一部の従来のブラウザーではバイナリーデータにアクセスできないか、または複雑な回避策が必要です。これらのレガシーケースはこの記事の範囲外です。`FileReader` API について詳しく知りたい場合は、[Web アプリケーションからファイルを扱う](/ja/docs/Web/API/File/Using_files_from_web_applications)を読んでください。

{{domxref("FormData")}} をサポートするバイナリーデータを送信するのは簡単です。`append()` メソッドを使用すれば完了です。手動でやらなければならないならば、それはトリッキーです。

以下の例ではバイナリーデータへのアクセスに {{domxref("FileReader")}} API を使用しており、また手作業でマルチパートのフォームデータを作成しています:

```html
<form id="myForm">
  <p>
    <label for="i1">text data:</label>
    <input id="i1" name="myText" value="Some text data">
  </p>
  <p>
    <label for="i2">file data:</label>
    <input id="i2" name="myFile" type="file">
  </p>
  <button>Send Me!</button>
</form>
```

ご覧のとおり、HTML は標準の `<form>` です。不思議なところは何もありません。「魔法」は JavaScript にあります。

```js
// DOM ノードにアクセスしたいため、
// ページをロードしたときにスクリプトを初期化します。
window.addEventListener('load', function () {

  // この変数は、フォームデータを格納するために使用します。
  const text = document.getElementById("i1");;
  const file = {
        dom    : document.getElementById("i2"),
        binary : null
      };

  // ファイルコンテンツへのアクセスに FileReader API を使用します。
  const reader = new FileReader();

  // FileReader API は非同期であるため、ファイルの読み取りが完了したときに
  // その結果を保存しなければなりません。
  reader.addEventListener("load", function () {
    file.binary = reader.result;
  });

  // ページを読み込んだとき、すでに選択されているファイルがあればそれを読み取ります。
  if(file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 一方、ユーザーがファイルを選択したらそれを読み取ります。
  file.dom.addEventListener("change", function () {
    if(reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData 関数がメインの関数です。
  function sendData() {
    // 始めに、ファイルが選択されている場合はファイルの読み取りを待たなければなりません。
    // そうでない場合は、関数の実行を遅延させます。
    if(!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // マルチパートのフォームデータリクエストを構築するため、
    // XMLHttpRequest のインスタンスが必要です。
    const XHR      = new XMLHttpRequest();

    // リクエストの各パートを定義するためのセパレータが必要です。
    const boundary = "blob";

    // 文字列としてリクエストのボディを格納します。
    let data     = "";

    // そして、ユーザーがファイルを選択したときに
    if (file.dom.files[0]) {
      // リクエストのボディに新たなパートを作ります
      data += "--" + boundary + "\r\n";

      // フォームデータであることを示します (他のものになる場合もあります)
      data += 'content-disposition: form-data; '
      // フォームデータの名前を定義します
            + 'name="'         + file.dom.name          + '"; '
      // 実際のファイル名を与えます
            + 'filename="'     + file.dom.files[0].name + '"\r\n';
      // ファイルの MIME タイプを与えます
      data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';

      // メタデータとデータの間に空行を置きます
      data += '\r\n';

      // リクエストのボディにバイナリーデータを置きます
      data += file.binary + '\r\n';
    }

    // テキストデータの場合はシンプルです。
    // リクエストのボディに新たなパートを作ります
    data += "--" + boundary + "\r\n";

    // フォームデータであることと、データの名前を示します。
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // メタデータとデータの間に空行を置きます
    data += '\r\n';

    // リクエストのボディにテキストデータを置きます。
    data += text.value + "\r\n";

    // 完了したら、リクエストのボディを "閉じます"。
    data += "--" + boundary + "--";

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener('error', function(event) {
      alert('Oups! Something goes wrong.');
    });

    // リクエストをセットアップします
    XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.php');

    // マルチパートのフォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します。
    XHR.setRequestHeader('Content-Type','multipart/form-data; boundary=' + boundary);
    XHR.setRequestHeader('Content-Length', data.length);

    // 最後に、データを送信します
    // Firefox のバグ 416178 により、send() の代わりに sendAsBinary() を使用することが必要です。
    XHR.sendAsBinary(data);
  }

  // 少なくとも、フォームにアクセスしなければなりません。
  const form   = document.getElementById("myForm");

  // submit イベントを乗っ取ります。
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
  });
});
```

そして、結果は以下のとおりです:

{{EmbedLiveSample("Dealing_with_binary_data", "100%", 150)}}

## まとめ

ブラウザーや扱うデータタイプによっては、JavaScript を介してフォームデータを送信するのが簡単な場合と難しい場合があります。{{domxref("FormData")}} オブジェクトが一般的な答えであり、レガシーブラウザーで [polyfill](https://github.com/jimmywarting/FormData) を使用することをためらってはいけません。

## このモジュール

### 学習コース

- [初めての HTML フォーム](/ja/docs/Learn/HTML/Forms/Your_first_HTML_form)
- [HTML フォームの構築方法](/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)
- [ネイティブフォームウィジェット](/ja/docs/Learn/HTML/Forms/The_native_form_widgets)
- [フォームデータの送信](/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
- [フォームデータの検証](/ja/docs/Learn/HTML/Forms/Data_form_validation)
- [カスタムフォームウィジェットの作成方法](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [JavaScript によるフォームの送信](/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [HTML フォームへのスタイル設定](/ja/docs/Learn/HTML/Forms/Styling_HTML_forms)
- [HTML フォームへの高度なスタイル設定](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [フォームウィジェット向けプロパティ実装状況一覧](/ja/docs/Property_compatibility_table_for_form_widgets)

### 上級トピック

- [Sending forms through JavaScript](/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
- [HTML forms in legacy browsers](/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
- [Property compatibility table for form widgets](/ja/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets)
