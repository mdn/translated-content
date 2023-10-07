---
title: JavaScript によるフォームの送信
slug: Learn/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: af71b32dc9d2c057aba5fabd9c3d9a85b0ced9fa
---

{{LearnSidebar}}

HTML フォームは [HTTP](/ja/docs/Web/HTTP) リクエストを宣言的に送信できます。しかし、フォームは 、例えば `XMLHttpRequest` のように JavaScript 経由で送信する HTTP リクエストを準備することもできます。この記事ではその方法を探ります。

## フォームは必ずしもフォームであるとは限らない

プログレッシブウェブアプリや、シングルページアプリ、フレームワークベースのアプリが現れたことで、[HTML フォーム](/ja/docs/Learn/Forms)を、レスポンスデータを受け取ったときに、新しい文書を読み込むことなくデータ送信するのに使用することが次第に一般的になってきました。最初になぜいろいろなアプローチが必要となるのかを話しましょう。

### グローバルインターフェイスの制御を取得

次の記事で述べる標準の HTML フォーム送信では、データが送信された URL がロードされます。つまり、ブラウザーウィンドウは全ページロードで移動します。ページ全体の読み込みを回避すると、ちらつきのような視覚上の問題や、ネットワークの遅延を避けて、よりスムーズな操作を提供できます。

最近の多くの UI は、HTML フォームを使用してユーザーからの入力を収集します。ユーザーがデータを送信しようとすると、アプリケーションはバックグラウンドでデータを非同期的に制御して送信し、変更が必要な UI の部分のみを更新します。

任意のデータを非同期に送信することは、**"Asynchronous JavaScript And XML"** を表す頭字語である [AJAX](/ja/docs/Web/Guide/AJAX) として知られています。

### その違いは?

{{domxref("XMLHttpRequest")}} (XHR) DOM オブジェクトで HTTP リクエストを作成して送信し、結果を取得することができます。歴史的には、{{domxref("XMLHttpRequest")}} は交換フォーマットとして [XML](/ja/docs/Web/XML) を取得して送信するように設計されていました。しかし、[JSON](/ja/docs/Glossary/JSON) は XML に取って代わっています。しかし、XML も JSON もフォームデータリクエストのエンコーディングには適合しません。フォームデータ (`application/x-www-form-urlencoded`) は、キーと値のペアの URL エンコードされたリストで構成されています。バイナリーデータを送信するために、HTTP リクエストは `multipart/form-data` に再形成されます**。**

> **メモ:** [Fetch API](/ja/docs/Web/API/Fetch_API) は最近 XHR の代わりによく使われます — これは XHR のモダンで更新されたバージョンであり、同様に動作しますが利点もあります。この記事で見る大半の XHR コードは Fetch で置き換えられます。

フロントエンド (ブラウザーで実行されるコード) とバックエンド (サーバーで実行されるコード) を制御すれば、JSON/XML を送信して必要に応じて処理することができます。

しかし、サードパーティのサービスを利用したい場合、サービスが要求する書式でデータ送信する必要があります。

ではどのようにしてそのようなデータを送信するのでしょうか?以下に必要となるさまざまなテクニックがあります。

## フォームデータの送信

フォームデータを送信するには 3 つの方法があります。

- 手動で `XMLHttpRequest` を構築する。
- スタンドアロンの `FormData` オブジェクトを使用する。
- `FormData` を `<form>` 要素に結び付けて使用する。

詳しく見てみましょう。

### 手動での XMLHttpRequest の作成

{{domxref("XMLHttpRequest")}} は、HTTP リクエストを作成する最も安全で信頼性の高い方法です。 {{domxref("XMLHttpRequest")}} を使用してフォームデータを送信するには、URL エンコードしたデータを準備し、フォームデータリクエストの詳細に従ってください。

例を見てみましょう。

```html
<button>Click Me!</button>
```

JavaScript はこうです。

```js
const btn = document.querySelector("button");

function sendData(data) {
  console.log("Sending data");

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // data オブジェクトを、URL エンコードしたキーと値のペアの配列に変換します
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
    );
  }

  // キーと値のペアをひとつの文字列に連結して、ウェブブラウザーのフォーム送信方式に
  // 合うよう、エンコードされた空白をプラス記号に置き換えます。
  const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener("load", (event) => {
    alert("Yeah! Data sent and response loaded.");
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.");
  });

  // リクエストをセットアップします
  XHR.open("POST", "https://example.com/cors.php");

  // フォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します
  XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  // 最後に、データを送信します
  XHR.send(urlEncodedData);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

そして、結果は以下のとおりです。

{{EmbedLiveSample("Building_an_XMLHttpRequest_manually", "100%", 50)}}

> **メモ:** この {{domxref("XMLHttpRequest")}} の使用は、第三者のウェブサイトにデータを送信したい場合にも、同一オリジンポリシーの対象となります。オリジン間リクエストの場合は、 [CORS と HTTP のアクセス制御](/ja/docs/Web/HTTP/CORS)が必要です。

### XMLHttpRequest と FormData オブジェクトの使用

HTTP リクエストを手作業で作成するのは大変なことです。幸いなことに、最近の [XMLHttpRequest 仕様書](http://www.w3.org/TR/XMLHttpRequest/)では {{domxref("FormData")}} オブジェクトを使ってフォームデータリクエストを処理する便利で簡単な方法が提供されています。

{{domxref("FormData")}} オブジェクトは、送信用のフォームデータを作成したり、送信方法を管理するフォーム要素内のデータを取得するために使用できます。

このオブジェクトの使い方は [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)で詳述されていますが、2 つの例があります。

#### 独立した FormData オブジェクトを使用する

```html
<button>Click Me!</button>
```

HTML のサンプルはおわかりでしょう。JavaScript はこうです。

```js
const btn = document.querySelector("button");

function sendData(data) {
  const XHR = new XMLHttpRequest();
  const FD = new FormData();

  // データを FormData オブジェクトに投入します
  for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  }

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener("load", (event) => {
    alert("Yeah! Data sent and response loaded.");
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener("error", (event) => {
    alert("Oops! Something went wrong.");
  });

  // リクエストをセットアップします
  XHR.open("POST", "https://example.com/cors.php");

  // FormData オブジェクトを送信するだけです。HTTP ヘッダは自動的に設定されます
  XHR.send(FD);
}

btn.addEventListener("click", () => {
  sendData({ test: "ok" });
});
```

そして、結果は以下のとおりです。

{{EmbedLiveSample("Using_a_standalone_FormData_object", "100%", 50)}}

#### form 要素に紐づけた FormData の使用

`FormData` オブジェクトを {{HTMLElement("form")}} 要素に紐づけることもできます。これにより、フォームに含まれるデータを表す `FormData` をすばやく得ることができます。

HTML の部分はかなり典型的です。

```html
<form id="myForm">
  <label for="myName">Send me your name:</label>
  <input id="myName" name="name" value="John" />
  <input type="submit" value="Send Me!" />
</form>
```

しかし、JavaScript がフォームを乗っ取ります。

```js
window.addEventListener("load", () => {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // FormData オブジェクトと form 要素を紐づけます
    const FD = new FormData(form);

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener("load", (event) => {
      alert(event.target.responseText);
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener("error", (event) => {
      alert("Oops! Something went wrong.");
    });

    // リクエストをセットアップします
    XHR.open("POST", "https://example.com/cors.php");

    // 送信したデータは、ユーザーがフォームで提供したものです
    XHR.send(FD);
  }

  // form 要素を取得
  const form = document.getElementById("myForm");

  // 'submit' イベントのハンドラーを追加
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    sendData();
  });
});
```

そして、結果は以下のとおりです:

{{EmbedLiveSample("Using_FormData_bound_to_a_form_element", "100%", 50)}}

フォームの {{domxref("HTMLFormElement.elements", "elements")}} プロパティを使用してフォーム内のすべてのデータ要素のリストを取得し、それらを一度に 1 つずつ手動で管理することで、このプロセスにさらに関わることができます。詳細については、[フォームコントロールへのアクセス](/ja/docs/Web/API/HTMLFormElement/elements#%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%B3%E3%83%B3%E3%83%88%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%B8%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9)の例を参照してください。

## バイナリーデータを扱う

`<input type="file">` ウィジェットを含むフォームで {{domxref("FormData")}} オブジェクトを使用すると、データは自動的に処理されます。しかし、バイナリーデータを手動で送るには、追加でやるべきことがあります。

バイナリーデータのソースが多数あります。たとえば、{{domxref("FileReader")}}、{{domxref("HTMLCanvasElement","Canvas")}}、[WebRTC](/ja/docs/Web/API/Navigator/getUserMedia) などです。残念ながら、一部の従来のブラウザーではバイナリーデータにアクセスできないか、または複雑な回避策が必要です。 `FileReader` API について詳しく知りたい場合は、[ウェブアプリケーションからのファイルの使用](/ja/docs/Web/API/File_API/Using_files_from_web_applications)を読んでください。

{{domxref("FormData")}} をサポートするバイナリーデータを送信するのは簡単です。`append()` メソッドを使用すれば完了です。手動でやらなければならないならば、それはトリッキーです。

以下の例ではバイナリーデータへのアクセスに {{domxref("FileReader")}} API を使用しており、また手作業でマルチパートのフォームデータを作成しています:

```html
<form id="theForm">
  <p>
    <label for="theText">text data:</label>
    <input id="theText" name="myText" value="Some text data" type="text" />
  </p>
  <p>
    <label for="theFile">file data:</label>
    <input id="theFile" name="myFile" type="file" />
  </p>
  <button>Send Me!</button>
</form>
```

ご覧のとおり、 HTML は標準の `<form>` です。不思議なところは何もありません。「魔法」は JavaScript にあります。

```js
// DOM ノードにアクセスしたいため、
// ページをロードしたときにスクリプトを初期化します。
window.addEventListener("load", () => {
  // この変数は、フォームデータを格納するために使用します。
  const text = document.getElementById("theText");
  const file = {
    dom: document.getElementById("theFile"),
    binary: null,
  };

  // ファイルコンテンツへのアクセスに FileReader API を使用します。
  const reader = new FileReader();

  // FileReader API は非同期であるため、ファイルの読み取りが完了したときに
  // その結果を保存しなければなりません。
  reader.addEventListener("load", () => {
    file.binary = reader.result;
  });

  // ページを読み込んだとき、すでに選択されているファイルがあればそれを読み取ります。
  if (file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 一方、ユーザーがファイルを選択したらそれを読み取ります。
  file.dom.addEventListener("change", () => {
    if (reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData 関数がメインの関数です。
  function sendData() {
    // 始めに、ファイルが選択されている場合はファイルの読み取りを待たなければなりません。
    // そうでない場合は、関数の実行を遅延させます。
    if (!file.binary && file.dom.files.length > 0) {
      setTimeout(sendData, 10);
      return;
    }

    // マルチパートのフォームデータリクエストを構築するため、
    // XMLHttpRequest のインスタンスが必要です。
    const XHR = new XMLHttpRequest();

    // リクエストの各パートを定義するためのセパレータが必要です。
    const boundary = "blob";

    // 文字列としてリクエストの本体を格納します。
    let data = "";

    // そして、ユーザーがファイルを選択したときに
    if (file.dom.files[0]) {
      // リクエストの本体に新たなパートを作ります
      data += `--${boundary}\r\n`;

      // フォームデータを記述します
      data +=
        "content-disposition: form-data; " +
        // フォームデータの名前を定義します
        `name="${file.dom.name}"; ` +
        // 実際のファイル名を与えます
        `filename="${file.dom.files[0].name}"\r\n`;
      // ファイルの MIME タイプを与えます
      data += `Content-Type: ${file.dom.files[0].type}\r\n`;

      // メタデータとデータの間に空行を置きます
      data += "\r\n";

      // リクエストの本体にバイナリーデータを置きます
      data += file.binary + "\r\n";
    }

    // テキストデータの場合はシンプルです。
    // リクエストの本体に新たなパートを作ります
    data += `--${boundary}\r\n`;

    // フォームデータであることと、データの名前を示します。
    data += `content-disposition: form-data; name="${text.name}"\r\n`;
    // メタデータとデータの間に空行を置きます
    data += "\r\n";

    // リクエストの本体にテキストデータを置きます。
    data += text.value + "\r\n";

    // 完了したら、リクエストの本体を "閉じます"。
    data += `--${boundary}--`;

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener("load", (event) => {
      alert("Yeah! Data sent and response loaded.");
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener("error", (event) => {
      alert("Oops! Something went wrong.");
    });

    // リクエストをセットアップします
    XHR.open("POST", "https://example.com/cors.php");

    // マルチパートのフォームデータの POST リクエストを扱うために必要な HTTP ヘッダーを追加します。
    XHR.setRequestHeader(
      "Content-Type",
      `multipart/form-data; boundary=${boundary}`,
    );

    // データの送信
    XHR.send(data);
  }

  // フォーム要素を取得
  const form = document.getElementById("theForm");

  // 'submit' イベントのハンドラーを追加
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendData();
  });
});
```

そして、結果は以下のとおりです。

{{EmbedLiveSample("Dealing_with_binary_data", "100%", 150)}}

## まとめ

ブラウザーや扱うデータタイプによっては、JavaScript を介してフォームデータを送信するのが簡単な場合と難しい場合があります。{{domxref("FormData")}} オブジェクトが一般的な答えであり、レガシーブラウザーで[ポリフィル](https://github.com/jimmywarting/FormData)を使用することをためらってはいけません。

## 関連情報

### 学習コース

- [初めてのフォーム](/ja/docs/Learn/Forms/Your_first_form)
- [フォームの構築方法](/ja/docs/Learn/Forms/How_to_structure_a_web_form)
- [基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 の入力型](/ja/docs/Learn/Forms/HTML5_input_types)
- [その他のフォームコントロール](/ja/docs/Learn/Forms/Other_form_controls)
- [UI 擬似クラス](/ja/docs/Learn/Forms/UI_pseudo-classes)
- [フォームへのスタイル設定](/ja/docs/Learn/Forms/Styling_web_forms)
- [クライアントサイドのフォーム検証](/ja/docs/Learn/Forms/Form_validation)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)

### 上級トピック

- [JavaScript によるフォームの送信](/ja/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [カスタムフォームコントロールの作成方法](/ja/docs/Learn/Forms/How_to_build_custom_form_controls)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
- [フォームコントロール向けの CSS プロパティの互換性一覧表](/ja/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
