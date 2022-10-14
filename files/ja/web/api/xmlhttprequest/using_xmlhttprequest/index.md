---
title: XMLHttpRequest の使用
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

このガイドでは、ウェブサイトとサーバーの間でデータ交換をするために、 {{domxref("XMLHttpRequest")}} を使用して [HTTP](/ja/docs/Web/HTTP) リクエストを発行する方法を紹介します。 `XMLHttpRequest` のよくある使用例やもっと分かりにくい使用例も含まれています。

HTTP リクエストを送るには、 `XMLHttpRequest` オブジェクトを作成し、 URL を開いてリクエストを送信します。トランザクションが完了すると、オブジェクトには結果の [HTTP ステータスコード](/ja/docs/Web/HTTP/Status)やレスポンスの本文などの有益な情報が格納されます。

```js
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
```

## リクエストの種類

`XMLHttpRequest` によって作成されたリクエストは、非同期または同期のいずれかの方法でデータを取得することが可能です。リクエストをどちらの方法で行うかは、 {{domxref("XMLHttpRequest.open()")}} メソッドの `async` 引数 (第 3 引数) で指示できます (オプション)。このプロパティを `true` に指定するか指定しなければ `XMLHttpRequest` は非同期で処理され、それ以外だと同期的に扱われます。これら二つの種類のリクエストに関する詳細および使用例は、[同期および非同期リクエスト](/ja/docs/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)のページを参照してください。ウェブワーカー以外では同期リクエストを使用しないでください。

> **メモ:** Gecko 30.0 {{ geckoRelease("30.0") }} から、メインスレッドにおける同期リクエストはユーザーの使い勝手に悪影響を与えるため、非推奨になりました。

> **メモ:** コンストラクター関数 `XMLHttpRequest` は XML 文書に限定されていません。 **"XML"** で始まっているのは、これが作成されたときに非同期データ交換に使用されていた主要な形式が XML であったからです。

## レスポンスの取り扱い

HTML Living Standard 仕様書で定義されている {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} コンストラクターの [response 属性](https://xhr.spec.whatwg.org/)は何種類かがあります。これらはクライアントに `XMLHttpRequest` にレスポンスのステータスに関する重要な情報を作るように指示します。テキスト以外のレスポンス型を扱う場合は、後の節で概説する操作や解析が入ることがあるかもしれません。

### responseXML プロパティの解析と操作

リモートの XML 文書のコンテンツを得るために `XMLHttpRequest` を使う場合、 `responseXML` プロパティが解析済みの XML 文書を含む DOM オブジェクトとなります。これによって、操作や解析が難しくなる可能性があります。この XML 文書を解析するには主な 4 つの方法があります。

1. 部品を指すために [XPath](/ja/docs/Web/XPath) を使う。
2. 手動で [XML を解析及びシリアライズして](/ja/docs/Web/Guide/Parsing_and_serializing_XML)文字列やオブジェクトにする。
3. {{domxref("XMLSerializer")}} を使って **DOM ツリーを文字列やファイルに**シリアライズする。
4. 事前に XML 文書の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を `RegExp` でスキャンする場合に、改行を除去した方がよく見えることもありますが、 XML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

> **メモ:** `XMLHttpRequest` は {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティを使用することによって、 HTML を解釈できるようになりました。この方法について学ぶには、 [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) についての記事をお読みください。

### HTML 文書を含む responseText プロパティの処理

`XMLHttpRequest` を使ってリモート HTML ウェブページのコンテンツを取得する場合、 {{domxref("XMLHttpRequest.responseText", "responseText")}} プロパティは生の HTML が入った文字列です。これは操作や解析が難しいことを示しています。この生の HTML 文字列を分析し解析するには、主に 3 つの方法があります。

1. [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) の記事で紹介されている `XMLHttpRequest.responseXML` プロパティを使用する。
2. `fragment.body.innerHTML` を通して[文書フラグメント](/ja/docs/Web/API/DocumentFragment)の本文をコンテンツに挿入し、そのフラグメントの DOM を巡る。
3. 事前に HTML の `responseText` の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を RegExp でスキャンする場合に、改行を除去した方がよく見えることもありますが、 HTML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

## バイナリデータの扱い

{{domxref("XMLHttpRequest")}} はテキストデータの送受信に最もよく使われますが、バイナリコンテンツの送受信にも使えます。 `XMLHttpRequest` のレスポンスをバイナリデータ送信に強制するためのテストされたメソッドがいくつかあります。この中には `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} メソッドを活用して使える解決法としているものも入っています。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url);
// バイナリ文字列として未処理のデータを取得する
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

しかし、もっと新しいテクニックも使用でき、 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性がいくつもの追加のコンテンツ型に対応するようになったので、データの送信や受信がずっと簡単になりました。

例えばこのスニペットでは、 `responseType` に "`arraybuffer`" を使用して、生のバイナリデータを格納できる {{jsxref("ArrayBuffer")}} オブジェクトにリモートコンテンツを取得しています。

```js
var oReq = new XMLHttpRequest();

oReq.onload = function(e) {
  var arraybuffer = oReq.response; // responseText ではない
  /* ... */
}
oReq.open("GET", url);
oReq.responseType = "arraybuffer";
oReq.send();
```

その他の例は、[Sending and Receiving Binary Data](/ja/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data) ページを確認してください。

## 進捗の監視

`XMLHttpRequest` は、リクエストが処理されている間に発生する様々なイベントを待受けする機能を提供しています。これには定期的な進捗の通知、エラーの通知、などが含まれます。

`XMLHttpRequest` の転送を監視する DOM 進捗イベントの対応は、 [specification for progress events](https://xhr.spec.whatwg.org/#interface-progressevent) に従います。このイベントは {{domxref("ProgressEvent")}} インターフェイスを実装します。進行中の転送の状態を特定するために監視することができる実際のイベントは、以下の通りです。

- {{event("progress")}}
  - : 受取済みのデータ量が変化したとき。
- {{event("load")}}
  - : 転送が完了したとき。すべてのデータが `response` に入っています。

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open();

// ...

// サーバーからクライアントへの転送の進捗 (ダウンロード)
function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total * 100;
    // ...
  } else {
    // 全体の長さが不明なため、進捗情報を計算できない
  }
}

function transferComplete(evt) {
  console.log("転送が完了しました。");
}

function transferFailed(evt) {
  console.log("ファイルの転送中にエラーが発生しました。");
}

function transferCanceled(evt) {
  console.log("ユーザーが転送をキャンセルしました。");
}
```

3-6 行目で `XMLHttpRequest` を使ってデータ転送を行うときに送られる色々なイベントへのためのイベントリスナーを追加しています。

> **メモ:** イベントリスナーはリクエストの `open()` を呼び出す前に追加する必要があります。そうしないと `progress` イベントは発火しません。

進捗のイベントハンドラーは、この例では `updateProgress()` 関数で指定され、全転送バイト数と、これまで転送されたバイト数をイベントの `total` と `loaded` フィールドで受け取ります。しかし、`lengthComputable` フィールドが false なら、全体の長さは不明で、ゼロになります。

進捗イベントはダウンロード、アップロードの両方で存在します。ダウンロードイベントは、上記サンプルのように、`XMLHttpRequest` オブジェクトそのもので発火されます。アップロードイベントは下記のように、 `XMLHttpRequest.upload` オブジェクトで発火されます:

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress);
oReq.upload.addEventListener("load", transferComplete);
oReq.upload.addEventListener("error", transferFailed);
oReq.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **メモ:** 進捗イベントは `file:` プロトコルでは利用できません。

> **メモ:** {{Gecko("9.0")}} から、進捗イベントは受け取ったデータチャンクごとに起こり、最後のパケットを受け取って進捗イベントが発火する前に接続が閉じた場合のチャンクも含まれます。この場合、進捗イベントはそのパケットのロードイベントが起きた時に自動的に発火します。これで「進捗」イベントをウォッチするだけで安定した進捗を監視できます。

> **メモ:** {{Gecko("12.0")}} 以降、"moz-blob" の `responseType` で進捗イベントが呼ばれた場合、レスポンスの値はこれまで受け取ったデータを含む {{domxref("Blob")}} となります。

ロードを終える 3 つの条件 (`abort`, `load`, か `error`) を `loadend` イベントで検出することもできます:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log("The transfer finished (although we don't know if it succeeded or not).");
}
```

注意点として、`loadend` イベントで受け取った情報から、どの条件で動作が終了したのかを確かめる方法はありません。しかし、これを使ってすべての転送終了シナリオにて行う必要のあるタスクを処理できます。

## フォームの投稿とファイルのアップロード

`XMLHttpRequest` のインスタンスはフォームの投稿をするのにも次の 2 つの方法で利用することができます。

- AJAX だけを使う
- {{domxref("XMLHttpRequest.FormData", "FormData")}} API を使う

`FormData` API を使うのが最もシンプルで速く、しかし集めたデータを[文字列化](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)できない短所があります。
AJAX だけを使うのはもっと複雑ですが、ふつうより柔軟で強力です。

### `XMLHttpRequest` だけを使う

`FormData` API を使用せずにフォームを送信する場合は、多くの場合は他の API が必要ではありません。追加の API が必要な場合は、**１つ以上のファイルをアップロードしたい場合**に {{domxref("FileReader")}} API を使用する場合だけです。

#### submit メソッドの簡単な入門

html {{ HTMLElement("form") }} は、次の４つの方法で送ることができます。

- `POST` メソッドを使い、 `enctype` 属性を `application/x-www-form-urlencoded` (既定値) に設定する
- `POST` メソッドを使い、 `enctype` 属性を `text/plain`にセットする;
- `POST` メソッドを使い、 `enctype` 属性を `multipart/form-data`にセットする;
- `GET` メソッドを使う (この場合 `enctype` 属性は無視される)。

ここで、たった 2 つの`foo` と `baz`の名前のフィールドを持つフォームの投稿を考えます。 `POST` メソッドを使うとサーバーは、使っている encoding type によって次の 3 つのサンプルのうちのどれかの文字列を受け取ります:

- メソッド: `POST`; エンコーディングタイプ: `application/x-www-form-urlencoded` (default):

  ```plain
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
  ```

- メソッド: `POST`; エンコーディングタイプ: `text/plain`:

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- メソッド: `POST`; エンコーディングタイプ: [`multipart/form-data`](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data):

  ```plain
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

しかし、 `GET` メソッドを使っている場合、次のような文字列が URL に追加されます。

```plain
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### 小さな vanilla フレームワーク

こうしたすべての効果は {{HTMLElement("form")}} を投稿するたびにウェブブラウザーで自動的に行われます。 JavaScript を使って同じ効果を実行したい場合、*すべて*をインタープリターに教えなければなりません。ゆえに、_純粋な_ AJAX でフォームを送る方法をここで詳しく説明するには複雑すぎます。このため、**完全な (しかし教訓的な) フレームワーク**を置いて、この 4 つの*送信*の方法すべてを使い、**ファイルをアップロードします**。

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with pure AJAX &ndash; MDN</title>
<script type="text/javascript">

"use strict";

/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/ja/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function(sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}

/*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

var AJAXSubmit = (function () {

  function ajaxSuccess () {
    /* console.log("AJAXSubmit - Success!"); */
    console.log(this.responseText);
    /* you can get the serialized data through the "submittedData" custom property: */
    /* console.log(JSON.stringify(this.submittedData)); */
  }

  function submitData (oData) {
    /* the AJAX request... */
    var oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;
    oAjaxReq.onload = ajaxSuccess;
    if (oData.technique === 0) {
      /* method is GET */
      oAjaxReq.open("get", oData.receiver.replace(/(?:\?.*)?$/,
          oData.segments.length > 0 ? "?" + oData.segments.join("&") : ""), true);
      oAjaxReq.send(null);
    } else {
      /* method is POST */
      oAjaxReq.open("post", oData.receiver, true);
      if (oData.technique === 3) {
        /* enctype is multipart/form-data */
        var sBoundary = "---------------------------" + Date.now().toString(16);
        oAjaxReq.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary);
        oAjaxReq.sendAsBinary("--" + sBoundary + "\r\n" +
            oData.segments.join("--" + sBoundary + "\r\n") + "--" + sBoundary + "--\r\n");
      } else {
        /* enctype is application/x-www-form-urlencoded or text/plain */
        oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
        oAjaxReq.send(oData.segments.join(oData.technique === 2 ? "\r\n" : "&"));
      }
    }
  }

  function processStatus (oData) {
    if (oData.status > 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    /* doSomething(oData); */
    /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData (oData);
  }

  function pushSegment (oFREvt) {
    this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
    this.owner.status--;
    processStatus(this.owner);
  }

  function plainEscape (sText) {
    /* How should I treat a text/plain form encoding?
       What characters are not allowed? this is what I suppose...: */
    /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
    return sText.replace(/[\s\=\\]/g, "\\$&");
  }

  function SubmitRequest (oTarget) {
    var nFile, sFieldType, oField, oSegmReq, oFile, bIsPost = oTarget.method.toLowerCase() === "post";
    /* console.log("AJAXSubmit - Serializing form..."); */
    this.contentType = bIsPost && oTarget.enctype ? oTarget.enctype : "application\/x-www-form-urlencoded";
    this.technique = bIsPost ?
        this.contentType === "multipart\/form-data" ? 3 : this.contentType === "text\/plain" ? 2 : 1 : 0;
    this.receiver = oTarget.action;
    this.status = 0;
    this.segments = [];
    var fFilter = this.technique === 2 ? plainEscape : escape;
    for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
      oField = oTarget.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE" && oField.files.length > 0) {
        if (this.technique === 3) {
          /* enctype is multipart/form-data */
          for (nFile = 0; nFile < oField.files.length; nFile++) {
            oFile = oField.files[nFile];
            oSegmReq = new FileReader();
            /* (custom properties:) */
            oSegmReq.segmentIdx = this.segments.length;
            oSegmReq.owner = this;
            /* (end of custom properties) */
            oSegmReq.onload = pushSegment;
            this.segments.push("Content-Disposition: form-data; name=\"" +
                oField.name + "\"; filename=\"" + oFile.name +
                "\"\r\nContent-Type: " + oFile.type + "\r\n\r\n");
            this.status++;
            oSegmReq.readAsBinaryString(oFile);
          }
        } else {
          /* enctype is application/x-www-form-urlencoded or text/plain or
             method is GET: files will not be sent! */
          for (nFile = 0; nFile < oField.files.length;
              this.segments.push(fFilter(oField.name) + "=" + fFilter(oField.files[nFile++].name)));
        }
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        /* NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial. */
        /* field type is not FILE or is FILE but is empty */
        this.segments.push(
          this.technique === 3 ? /* enctype is multipart/form-data */
            "Content-Disposition: form-data; name=\"" + oField.name + "\"\r\n\r\n" + oField.value + "\r\n"
          : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
            fFilter(oField.name) + "=" + fFilter(oField.value)
        );
      }
    }
    processStatus(this);
  }

  return function (oFormElement) {
    if (!oFormElement.action) { return; }
    new SubmitRequest(oFormElement);
  };

})();

</script>
</head>
<body>

<h1>Sending forms with pure AJAX</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<form action="register.php" method="post" enctype="text/plain"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      Your name: <input type="text" name="user" />
    </p>
    <p>
      Your message:<br />
      <textarea name="message" cols="40" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" />
      <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" />
      <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" />
      <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" />
      <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```

これをテストするには、 **register.php** というページ (サンプルフォームの `action` 属性の内容) を作って下記の*最小の*コンテンツを置きます。

```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

このスクリプトを有効化する文法は単純です。

```
AJAXSubmit(myForm);
```

> **メモ:** このフレームワークはファイルのアップロード送信に {{domxref("FileReader")}} API を使っています。これは最近の API であり、 IE9 以下では実装されていません。このため、 AJAX のみのアップロードは**実験的なテクニック**と考えられています。バイナリーファイルをアップロードする必要がなければ、このフレームワークはたいていのブラウザーでうまく動作します。

> **メモ:** バイナリコンテンツを送信する場合、 {{jsxref("ArrayBuffer", "ArrayBuffers")}} 又は {{domxref("Blob", "Blobs")}} を使用して {{domxref("XMLHttpRequest.send()", "send()")}} メソッド及び、できれば `FileReader` API の {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} メソッドと組み合わせて送信するのが最良の方法です。しかし、このスクリプトのねらいは[文字列化可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)な生データを扱うことであり、 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} メソッドに、`FileReader` API の {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} メソッドを組み合わせて使用しました。このように、上記のスクリプトは小さいファイルを扱うときのみ意味を持ちます。バイナリコンテンツをアップロードするのでなければ、代わりに `FormData` API を使用することを検討してください。

> **メモ:** 標準外の `sendAsBinary` メソッドは Gecko 31 {{geckoRelease(31)}} から非推奨と扱われるようになり、まもなく削除されます。その代わりに標準の `send(Blob data)` メソッドを使用できます。

### FormData オブジェクトの使用

{{domxref("XMLHttpRequest.FormData", "FormData")}} コンストラクターでは `XMLHttpRequest` を使用して送信するためのキー/値の組のセットをコンパイルできます。この主な使い方はフォームの送信ですが、フォームとは独立してキー付きのユーザーデータを転送するときにも使用することができます。フォームのエンコーディングタイプが "multipart/form-data" に設定された場合、送信されたデータは、データ送信に使うフォームの `submit()` メソッドと同じ書式です。 FormData オブジェクトは色々な方法で `XMLHttpRequest` と一緒に使うことができます。例や FormData と XMLHttpRequests を使用方法についての説明は、 [FormData オブジェクトの使用](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)のページをご覧ください。ここでは説明目的で、**[前の例](#A_little_vanilla_framework)の*翻訳*を `FormData` API を使用するよう変換**してみます。コードの簡潔さに注目してください。

```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" charset="UTF-8" />
<title>Sending forms with FormData &ndash; MDN</title>
<script>
"use strict";

function ajaxSuccess () {
  console.log(this.responseText);
}

function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) { return; }
  var oReq = new XMLHttpRequest();
  oReq.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    oReq.open("post", oFormElement.action);
    oReq.send(new FormData(oFormElement));
  } else {
    var oField, sFieldType, nFile, sSearch = "";
    for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
      oField = oFormElement.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ?
          oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE") {
        for (nFile = 0; nFile < oField.files.length;
            sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
      }
    }
    oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), true);
    oReq.send(null);
  }
}
</script>
</head>
<body>

<h1>Sending forms with FormData</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<p>The text/plain encoding is not supported by the FormData API.</p>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" />
      <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" />
      <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" />
      <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" />
      <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>
</body>
</html>
```

> **メモ:** 前述のように、 **{{domxref("FormData")}} オブジェクトは[文字列化できる](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) オブジェクトではありません**。送信データを文字列化したい場合、[前の*純粋な* AJAX の例](#A_little_vanilla_framework)を使ってください。また、この例では `file` {{ HTMLElement("input") }} フィールドがいくつかあり、 **`FormData` API を使ってフォームを送信するときに {{domxref("FileReader")}} API を使う必要もありません**。ファイルは自動的に読み込まれてアップロードされます。

## 最終更新日を取得する

```js
function getHeaderTime () {
  console.log(this.getResponseHeader("Last-Modified"));  /* A valid GMTString date or null */
}

var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* use HEAD if you only need the headers! */, "yourpage.html");
oReq.onload = getHeaderTime;
oReq.send();
```

### 最終更新日付が変わった時に何かする

２つの関数を作ってみましょう。

```js
function getHeaderTime () {
  var nLastVisit = parseFloat(window.localStorage.getItem('lm_' + this.filepath));
  var nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem('lm_' + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* use HEAD - we only need the headers! */, sURL);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```

そしてテストします。

```js
/* Let's test the file "yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});
```

***現在のページ*が変更された*かどうか***を知りたい場合は、 {{domxref("document.lastModified")}} についての記事をお読みください。

## サイト間の XMLHttpRequest

現在のブラウザーは、[オリジン間リソース共有](/ja/docs/Web/HTTP/CORS) (Cross-Origin Resource Sharing, CORS) を実装することでサイト間リクエストに対応しています。サーバーがウェブアプリケーションのオリジンからのリクエストを許可するように構成されている場合のみ、 `XMLHttpRequest` は動作します。それ以外の場合は、 `INVALID_ACCESS_ERR` 例外が投げられます。

## キャッシュをバイパスする

キャッシュをバイパスするブラウザー間で互換性のあるアプローチは、 URL にタイムスタンプを追加することで、適切に "?" 又は "&" を付け加えます。例えば以下のようにします。

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

ローカルのキャッシュは URL によって索引づけられるため、これですべてのリクエストが固有のものとなり、それによってキャッシュをバイパスします。

以下のコードを使用すると、自動的に URL を調整することができます。

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
oReq.send(null);
```

## セキュリティ

{{fx_minversion_note(3, "Firefox 3 以前のバージョンの Firefox は、設定の <code>capability.policy.&lt;policyname&gt;.XMLHttpRequest.open&lt;/policyname&gt;</code> を <code>allAccess</code> に設定することで、特定のサイトのサイト間アクセスを許可することができます。これはもう対応されていません。")}}

{{fx_minversion_note(5, "Firefox 5 以前のバージョンの Firefox は、 <code>netscape.security.PrivilegeManager.enablePrivilege(\"UniversalBrowserRead\");</code> を使用してサイト間アクセスをリクエストすることができます。これはもう対応されていませんが、警告は表示されず、アクセス権のダイアログは現在も表示されます。")}}

サイト間スクリプトを有効にするための推奨される方法は、 XMLHttpRequest へのレスポンスの中で HTTP の `Access-Control-Allow-Origin` ヘッダーを使用することです。

### XMLHttpRequests の停止

XMLHttpRequest が `status=0` 及び `statusText=null` を受信して終了すると、リクエストを実行することが許可されていないことを意味します。これは未送信 ([`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent)) 状態です。この原因の多くは、 XMLHttpRequest が `open()` の時に [`XMLHttpRequest` のオリジン](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (XMLHttpRequest が作成された場所) が変更されたことによるものです。これは例えば、 XMLHttpRequest を持ったページで onunload イベントが発生し、ウィンドウが閉じようとしている時に XMLHttpRequest が作成され、ウィンドウがフォーカスを失って他のウィンドウがフォーカスを得たときにリクエストの送信 (言い換えれば `open()`) が行なわれた場合に発生することがあります。この問題を防ぐ最も効果的な方法は、 {{event("unload")}} イベントが発生したときに、新しいウィンドウの {{event("activate")}} イベントのリスナーを設定することです。

## ワーカー

overrideMimeType を設定すると、 {{domxref("Worker")}} では動作しません。詳しくは {{bug(678057)}} を参照してください。他のブラウザーは扱いが異なるかもしれません。

## 仕様書

| 仕様書                                   | 状態                                 | 備考                       |
| ---------------------------------------- | ------------------------------------ | -------------------------- |
| {{SpecName('XMLHttpRequest')}} | {{Spec2('XMLHttpRequest')}} | ライブスタンダードの最新版 |

## ブラウザーの互換性

{{Compat("api.XMLHttpRequest")}}

## 関連情報

1. [MDN の AJAX 入門](/ja/docs/AJAX/Getting_Started)
2. [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
3. [HTTP アクセス制御](/ja/docs/Web/HTTP/Access_control_CORS)
4. [SSL 経由の XMLHTTPRequest のセキュリティ状態をチェックする方法](/ja/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL)
5. [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
6. [Microsoft documentation](https://msdn.microsoft.com/library/ms535874)
7. ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
8. [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
