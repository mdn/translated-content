---
title: XMLHttpRequest の使用
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
l10n:
  sourceCommit: a03b4b0e9aaac7409ff1ce974ab1bf2f40c81e03
---

{{APIRef("XMLHttpRequest")}}

このガイドでは、ウェブサイトとサーバーの間でデータ交換をするために、 {{domxref("XMLHttpRequest")}} を使用して [HTTP](/ja/docs/Web/HTTP) リクエストを発行する方法を紹介します。

`XMLHttpRequest` のよくある使用例やもっと分かりにくい使用例も含まれています。

HTTP リクエストを送るには、 `XMLHttpRequest` オブジェクトを作成し、 URL を開いてリクエストを送信します。トランザクションが完了すると、オブジェクトには結果の [HTTP ステータスコード](/ja/docs/Web/HTTP/Status)やレスポンスの本文などの有益な情報が格納されます。

```js
function reqListener() {
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();
```

## リクエストの種類

`XMLHttpRequest` によって作成されたリクエストは、非同期または同期のいずれかの方法でデータを取得することが可能です。リクエストをどちらの方法で行うかは、 {{domxref("XMLHttpRequest.open()")}} メソッドのオプションの `async` 引数 (第 3 引数) で指示することができます。この引数を `true` にするか、指定しなければ `XMLHttpRequest` は非同期で処理され、それ以外だと同期的に扱われます。これら二つの種類のリクエストに関する詳細および使用例は、[同期および非同期リクエスト](/ja/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)のページを参照してください。ウェブワーカー以外では同期リクエストを使用しないでください。

> **メモ:** コンストラクター関数 `XMLHttpRequest` は XML 文書に限定されていません。 **"XML"** で始まっているのは、これが作成されたときに非同期データ交換に使用されていた主要な形式が XML であったからです。

## レスポンスの取り扱い

HTML Living Standard 仕様書で定義されている {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}} コンストラクターの [response 属性](https://xhr.spec.whatwg.org/)は何種類かがあります。これらはクライアントに `XMLHttpRequest` にレスポンスのステータスに関する重要な情報を作るように指示します。テキスト以外のレスポンス型を扱う場合は、後の節で概説する操作や解析が入ることがあるかもしれません。

### responseXML プロパティの解析と操作

リモートの XML 文書のコンテンツを得るために `XMLHttpRequest` を使う場合、 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティが解析済みの XML 文書を含む DOM オブジェクトとなります。これによって、操作や解析が難しくなる可能性があります。この XML 文書を解析するには主な 4 つの方法があります。

1. 部品を指すために [XPath](/ja/docs/Web/XPath) を使う。
2. 手動で [XML を解析およびシリアライズして](/ja/docs/Web/Guide/Parsing_and_serializing_XML)文字列やオブジェクトにする。
3. {{domxref("XMLSerializer")}} を使って **DOM ツリーを文字列やファイルに**シリアライズする。
4. 事前に XML 文書の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を `RegExp` でスキャンする場合に、改行を除去した方がよく見えることもありますが、 XML コードが少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

> **メモ:** `XMLHttpRequest` は {{domxref("XMLHttpRequest.responseXML", "responseXML")}} プロパティを使用することによって、 HTML を解釈できるようになりました。この方法について学ぶには、 [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) についての記事をお読みください。

### HTML 文書を含む responseText プロパティの処理

`XMLHttpRequest` を使ってリモート HTML ウェブページのコンテンツを取得する場合、 {{domxref("XMLHttpRequest.responseText", "responseText")}} プロパティは生の HTML が入った文字列です。これは操作や解析が難しいことを示しています。この生の HTML 文字列を分析し解析するには、主に 3 つの方法があります。

1. [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest) の記事で紹介されている `XMLHttpRequest.responseXML` プロパティを使用する。
2. [文書フラグメント](/ja/docs/Web/API/DocumentFragment)の本体を `fragment.body.innerHTML` を通してコンテンツに挿入し、そのフラグメントの DOM を走査する。
3. 事前に HTML の `responseText` の中身が常に分かっている場合は {{jsxref("RegExp")}} を使うこともできます。改行を RegExp でスキャンする場合に、改行を除去した方がよく見えることもありますが、 HTML 文書が少しでも変更されると、メソッドは失敗しがちなため、このメソッドは「最後の手段」です。

## バイナリーデータの扱い

{{domxref("XMLHttpRequest")}} はテキストデータの送受信に最もよく使われますが、バイナリーコンテンツの送受信にも使えます。 `XMLHttpRequest` のレスポンスをバイナリーデータ送信に強制するためのテストされたメソッドがいくつかあります。この中には `XMLHttpRequest` オブジェクトの {{domxref("XMLHttpRequest.overrideMimeType", "overrideMimeType()")}} メソッドを活用して使える解決法としているものも入っています。

```js
const req = new XMLHttpRequest();
req.open("GET", url);
// バイナリー文字列として未処理のデータを取得する
req.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

しかし、もっと新しいテクニックも使用できます。 {{domxref("XMLHttpRequest.responseType", "responseType")}} 属性がいくつもの追加のコンテンツ型に対応するようになったので、バイナリーデータの送信や受信がずっと簡単になりました。

例えばこのスニペットでは、 `responseType` に "`arraybuffer`" を使用して、生のバイナリーデータを格納できる {{jsxref("ArrayBuffer")}} オブジェクトにリモートコンテンツを取得しています。

```js
const req = new XMLHttpRequest();

req.onload = (e) => {
  const arraybuffer = req.response; // responseText ではない
  /* ... */
};
req.open("GET", url);
req.responseType = "arraybuffer";
req.send();
```

その他の例は、[バイナリーデータの送信と受信](/ja/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data) ページを確認してください。

## 進捗の監視

`XMLHttpRequest` は、リクエストが処理されている間に発生する様々なイベントを待受けする機能を提供しています。これには定期的な進捗の通知、エラーの通知、などが含まれます。

`XMLHttpRequest` の転送を監視する DOM {{domxref("XMLHttpRequest/progress_event", "progress")}} イベントの対応は、 [progress events 仕様](https://xhr.spec.whatwg.org/#interface-progressevent)に従います。このイベントは {{domxref("ProgressEvent")}} インターフェイスを実装しています。進行中の転送の状態を特定するために監視することができる実際のイベントは、以下の通りです。

- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : 受取済みのデータ量が変化したとき。
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : 転送が完了したとき。すべてのデータが `response` に入っています。

```js
const req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress);
req.addEventListener("load", transferComplete);
req.addEventListener("error", transferFailed);
req.addEventListener("abort", transferCanceled);

req.open();

// ...

// サーバーからクライアントへの転送の進捗 (ダウンロード)
function updateProgress(event) {
  if (event.lengthComputable) {
    const percentComplete = (event.loaded / event.total) * 100;
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

> **メモ:** イベントリスナーはリクエストの `open()` を呼び出す前に追加する必要があります。そうしないと `progress` イベントは発生しません。

この例では `updateProgress()` 関数で指定される進捗イベントハンドラーは、イベントの `total` および `loaded` フィールドで、転送すべき総バイト数とこれまでに転送したバイト数を受け取ります。ただし、`lengthComputable` フィールドが false の場合、合計の長さは分からないので 0 になります。

進捗イベントはダウンロード、アップロードの両方に存在します。ダウンロードのイベントは、上記サンプルのように、`XMLHttpRequest` オブジェクトそのもので発生します。アップロードのイベントは下記のように、 `XMLHttpRequest.upload` オブジェクトで発生します。

```js
const req = new XMLHttpRequest();

req.upload.addEventListener("progress", updateProgress);
req.upload.addEventListener("load", transferComplete);
req.upload.addEventListener("error", transferFailed);
req.upload.addEventListener("abort", transferCanceled);

oReq.open();
```

> **メモ:** 進捗イベントは `file:` プロトコルでは利用できません。

progress イベントは、受信したデータの塊ごとに発生します。 progress イベントが発行される前に最後のパケットを受信して接続が閉じられた場合には、最後の塊でも発生します。この場合、 progress イベントは、そのパケットに対して load イベントが発生したときに自動的に発行されます。これで、 "progress" イベントを見るだけで、確実に進捗を監視できるようになりました。

ロードを終える 3 つの条件 (`abort`, `load`, か `error`) を `loadend` イベントで検出することもできます:

```js
req.addEventListener("loadend", loadEnd);

function loadEnd(e) {
  console.log(
    "The transfer finished (although we don't know if it succeeded or not)."
  );
}
```

注意点として、 `loadend` イベントで受け取った情報から、どの条件で動作が終了したのかを確かめる方法はありません。しかし、これを使ってすべての転送終了シナリオにて行う必要のあるタスクを処理できます。

## フォームの送信とファイルのアップロード

`XMLHttpRequest` のインスタンスは、次の 2 つの方法でフォームを送信するのに使うことができます。

- 単体で、他の API を使用せずに使用する
- {{domxref("FormData")}} API を使用する

FormData API を使うのが最もシンプルで速く、しかし集めたデータを[文字列化](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)できない短所があります。
XHR だけで使うのはもっと複雑ですが、ふつうより柔軟で強力です。

### `XMLHttpRequest` 単体での使用

FormData API を使用せずにフォームを送信する場合、多くの場合は他の API は必要ありません。追加の API が必要な場合は、**１つ以上のファイルをアップロードしたい場合**に {{domxref("FileReader")}} API を使用する場合だけです。

#### submit メソッドの簡単な入門

html {{ HTMLElement("form") }} は、次の４つの方法で送ることができます。

- `POST` メソッドを使い、 `enctype` 属性を `application/x-www-form-urlencoded` に設定する（既定値）
- `POST` メソッドを使い、 `enctype` 属性を `text/plain` に設定する
- `POST` メソッドを使い、 `enctype` 属性を `multipart/form-data` に設定する
- `GET` メソッドを使う (この場合 `enctype` 属性は無視される)。

ここで、たった 2 つの`foo` と `baz`の名前のフィールドを持つフォームの投稿を考えます。 `POST` メソッドを使うとサーバーは、使っているエンコーディング型によって次の 3 つのサンプルのうちのどれかの文字列を受け取ります。

- メソッド: `POST`、エンコーディング型: `application/x-www-form-urlencoded` (既定値):

  ```plain
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
  ```

- メソッド: `POST`、エンコーディング型: `text/plain`:

  ```plain
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- メソッド: `POST`、エンコーディング型: [`multipart/form-data`](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types#multipartform-data):

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
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Sending forms with pure AJAX &ndash; MDN</title>
    <script>
      "use strict";

      // :: XHR Form Submit Framework ::
      //
      // https://developer.mozilla.org/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
      //
      // This framework is released under the GNU Public License, version 3 or later.
      // https://www.gnu.org/licenses/gpl-3.0-standalone.html
      //
      // Syntax:
      //
      // XHRSubmit(HTMLFormElement);
      const XHRSubmit = (function () {
        function xhrSuccess() {
          console.log(this.responseText);
          // you can get the serialized data through the "submittedData" custom property:
          // console.log(JSON.stringify(this.submittedData));
        }

        function submitData(data) {
          const req = new XMLHttpRequest();
          req.submittedData = data;
          req.onload = xhrSuccess;
          if (data.technique === 0) {
            // method is GET
            req.open(
              "get",
              data.receiver.replace(
                /(?:\?.*)?$/,
                data.segments.length > 0 ? `?${data.segments.join("&")}` : ""
              ),
              true
            );
            req.send(null);
          } else {
            // method is POST
            req.open("post", data.receiver, true);
            if (data.technique === 3) {
              // enctype is multipart/form-data
              const boundary =
                "---------------------------" + Date.now().toString(16);
              req.setRequestHeader(
                "Content-Type",
                `multipart\/form-data; boundary=${boundary}`
              );
              req.sendAsBinary(
                `--${boundary}\r\n` +
                  data.segments.join(`--${boundary}\r\n`) +
                  `--${boundary}--\r\n`
              );
            } else {
              // enctype is application/x-www-form-urlencoded or text/plain
              req.setRequestHeader("Content-Type", data.contentType);
              req.send(data.segments.join(data.technique === 2 ? "\r\n" : "&"));
            }
          }
        }

        function processStatus(data) {
          if (data.status > 0) {
            return;
          }
          // the form is now totally serialized! do something before sending it to the server…
          // doSomething(data);
          // console.log("XHRSubmit - The form is now serialized. Submitting...");
          submitData(data);
        }

        function pushSegment(segment) {
          this.owner.segments[this.segmentIdx] +=
            segment.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(text) {
          // How should I treat a text/plain form encoding?
          // What characters are not allowed? this is what I suppose…:
          // "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2"
          return text.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(target) {
          const isPost = target.method.toLowerCase() === "post";
          this.contentType =
            isPost && target.enctype
              ? target.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = isPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = target.action;
          this.status = 0;
          this.segments = [];
          const filter = this.technique === 2 ? plainEscape : escape;
          for (const field of target.elements) {
            if (!field.hasAttribute("name")) {
              continue;
            }
            const fieldType =
              field.nodeName.toUpperCase() === "INPUT" &&
              field.hasAttribute("type")
                ? field.getAttribute("type").toUpperCase()
                : "TEXT";
            if (fieldType === "FILE" && field.files.length > 0) {
              if (this.technique === 3) {
                // enctype is multipart/form-data
                for (const file of field.files) {
                  const segmReq = new FileReader();

                  // Custom properties:
                  segmReq.segmentIdx = this.segments.length;
                  segmReq.owner = this;

                  segmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      field.name +
                      '"; filename="' +
                      file.name +
                      '"\r\nContent-Type: ' +
                      file.type +
                      "\r\n\r\n"
                  );
                  this.status++;
                  segmReq.readAsBinaryString(file);
                }
              } else {
                // enctype is application/x-www-form-urlencoded or text/plain or
                // method is GET: files will not be sent!
                for (const file of field.files) {
                  this.segments.push(
                    `${filter(field.name)}=${filter(file.name)}`
                  );
                }
              }
            } else if (
              (fieldType !== "RADIO" && fieldType !== "CHECKBOX") ||
              field.checked
            ) {
              // NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial.
              // field type is not FILE or is FILE but is empty.
              if (this.technique === 3) {
                // enctype is multipart/form-data
                this.segments.push(
                  `Content-Disposition: form-data; name="${field.name}"\r\n\r\n${field.value}\r\n`
                );
              } else {
                // enctype is application/x-www-form-urlencoded or text/plain or method is GET
                this.segments.push(
                  `${filter(field.name)}=${filter(field.value)}`
                );
              }
            }
          }
          processStatus(this);
        }

        return (formElement) => {
          if (!formeElement.action) {
            return;
          }
          new SubmitRequest(formElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Sending forms with XHR</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label>First name: <input type="text" name="firstname" /></label><br />
          <label>Last name: <input type="text" name="lastname" /></label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label>First name:
            <input type="text" name="firstname" />
          </label><br />
          <label>Last name:
            <input type="text" name="lastname" />
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          <label>Your name:
            <input type="text" name="user" />
          </label>
        </p>
        <p>
          <label>Your message:<br />
            <textarea name="message" cols="40" rows="8"></textarea>
          </label>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          <label>First name: <input type="text" name="firstname" /></label><br />
          <label>Last name: <input type="text" name="lastname" /></label><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          <label>What do you prefer:
            <select name="image_type">
              <option>Books</option>
              <option>Cinema</option>
              <option>TV</option>
            </select>
          </label>
        </p>
        <p>
          <label>Post your photos:
            <input type="file" multiple name="photos[]" />
          </label>
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          <label>Describe yourself:<br />
            <textarea name="description" cols="50" rows="8"></textarea>
          </label>
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
>
```

このスクリプトを有効化する文法は単純です。

```js
XHRSubmit(myForm);
```

> **メモ:** このフレームワークはファイルのアップロード送信に {{domxref("FileReader")}} API を使っています。これは最近の API であり、 IE9 以下では実装されていません。このため、 AJAX のみのアップロードは**実験的なテクニック**と考えられています。バイナリーファイルをアップロードする必要がなければ、このフレームワークはたいていのブラウザーでうまく動作します。

> **メモ:** バイナリーコンテンツを送信する場合、 {{jsxref("ArrayBuffer", "ArrayBuffers")}} または {{domxref("Blob", "Blobs")}} を使用して {{domxref("XMLHttpRequest.send()", "send()")}} メソッドおよび、できれば `FileReader` API の {{domxref("FileReader.readAsArrayBuffer()", "readAsArrayBuffer()")}} メソッドと組み合わせて送信するのが最良の方法です。しかし、このスクリプトのねらいは[文字列化可能](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)な生データを扱うことであり、 {{domxref("XMLHttpRequest.sendAsBinary()", "sendAsBinary()")}} メソッドに、`FileReader` API の {{domxref("FileReader.readAsBinaryString()", "readAsBinaryString()")}} メソッドを組み合わせて使用しました。このように、上記のスクリプトは小さいファイルを扱うときのみ意味を持ちます。バイナリーコンテンツをアップロードするのでなければ、代わりに `FormData` API を使用することを検討してください。

### FormData オブジェクトの使用

{{domxref("XMLHttpRequest.FormData", "FormData")}} コンストラクターでは `XMLHttpRequest` を使用して送信するためのキー/値の組のセットをコンパイルできます。この主な使い方はフォームの送信ですが、フォームとは独立してキー付きのユーザーデータを転送するときにも使用することができます。フォームのエンコーディング型が "multipart/form-data" に設定された場合、送信されたデータは、データ送信に使うフォームの `submit()` メソッドと同じ書式です。 FormData オブジェクトは色々な方法で `XMLHttpRequest` と一緒に使うことができます。例や FormData と XMLHttpRequests を使用方法についての説明は、 [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)のページをご覧ください。ここでは説明目的で、**[前の例](#小さな_vanilla_フレームワーク)を*翻訳*して、 `FormData` API を使用するよう変換**してみます。コードの簡潔さに注目してください。

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Sending forms with FormData &ndash; MDN</title>
    <script>
      "use strict";

      function xhrSuccess () {
        console.log(this.responseText);
      }

      function XHRSubmit (formElement) {
        if (!formElement.action) { return; }
        const req = new XMLHttpRequest();
        req.onload = xhrSuccess;
        if (fFormElement.method.toLowerCase() === "post") {
          req.open("post", formElement.action);
          req.send(new FormData(formElement));
        } else {
          let search = "";
          for (const field of formElement.elements) {
            if (!field.hasAttribute("name")) { continue; }
            const fieldType = field.nodeName.toUpperCase() === "INPUT" && oField.hasAttribute("type")
              ? field.getAttribute("type").toUpperCase()
              : "TEXT";
            if (fieldType === "FILE") {
              for (const file of field.files) {
                search += `&${escape(field.name)}=${escape(file.name)}`;
            } else if ((fieldType !== "RADIO" && fieldType !== "CHECKBOX") || field.checked) {
              search += `&${escape(field.name)}=${escape(field.value)}`;
            }
          }
          req.open("get", formElement.action.replace(/(?:\?.*)?$/, search.replace(/^&/, "?")), true);
          req.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Sending forms with FormData</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
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

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
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

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
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
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
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

> **メモ:** 前述のように、 **{{domxref("FormData")}} オブジェクトは[文字列化可能な](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) オブジェクトではありません**。送信データを文字列化したい場合は、[前の*純粋な* AJAX の例](#小さな_vanilla_フレームワーク)を使ってください。また、この例では `file` {{ HTMLElement("input") }} フィールドがいくつかあり、 **`FormData` API を使ってフォームを送信するときに {{domxref("FileReader")}} API を使う必要もありません**。ファイルは自動的に読み込まれてアップロードされます。

## 最終更新日の取得

```js
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified")); // A valid GMTString date or null
}

const req = new XMLHttpRequest();
req.open(
  "HEAD", // use HEAD when you only need the headers
  "yourpage.html"
);
req.onload = getHeaderTime;
req.send();
```

### 最終更新日付が変わった時に何かする

２つの関数を作ってみましょう。

```js
function getHeaderTime() {
  const lastVisit = parseFloat(
    window.localStorage.getItem(`lm_${this.filepath}`)
  );
  const lastModified = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(lastVisit) || lastModified > lastVisit) {
    window.localStorage.setItem(`lm_${this.filepath}`, Date.now());
    isFinite(lastVisit) && this.callback(lastModified, lastVisit);
  }
}

function ifHasChanged(URL, callback) {
  const req = new XMLHttpRequest();
  req.open("HEAD" /* use HEAD - we only need the headers! */, URL);
  req.callback = callback;
  req.filepath = URL;
  req.onload = getHeaderTime;
  req.send();
}
```

そしてテストします。

```js
// Let's test the file "yourpage.html"
ifHasChanged("yourpage.html", function (modified, visit) {
  console.log(
    `The page '${this.filepath}' has been changed on ${new Date(
      nModified
    ).toLocaleString()}!`
  );
});
```

***現在のページ*が変更された*かどうか***を知りたい場合は、 {{domxref("document.lastModified")}} についての記事をお読みください。

## サイトをまたがる XMLHttpRequest

現在のブラウザーは、[オリジン間リソース共有](/ja/docs/Web/HTTP/CORS) (Cross-Origin Resource Sharing, CORS) を実装することでサイト間リクエストに対応しています。サーバーがウェブアプリケーションのオリジンからのリクエストを許可するように構成されている場合のみ、 `XMLHttpRequest` は動作します。それ以外の場合は、 `INVALID_ACCESS_ERR` 例外が投げられます。

## キャッシュをバイパスする

ブラウザー間で互換性のある、キャッシュをバイパスするアプローチは、 URL にタイムスタンプを追加することで、適切に "?" 又は "&" を付け加えます。例えば以下のようにします。

```plain
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

ローカルのキャッシュは URL によって索引づけられるため、これですべてのリクエストが固有のものとなり、それによってキャッシュをバイパスします。

以下のコードを使用すると、自動的に URL を調整することができます。

```js
const req = new XMLHttpRequest();

req.open("GET", url + (/\?/.test(url) ? "&" : "?") + new Date().getTime());
req.send(null);
```

## セキュリティ

サイト間スクリプトを有効にするための推奨される方法は、 XMLHttpRequest へのレスポンスの中で HTTP の `Access-Control-Allow-Origin` ヘッダーを使用することです。

### XMLHttpRequests の停止

XMLHttpRequest が `status=0` および `statusText=null` を受信して終了すると、リクエストを実行することが許可されていないことを意味します。これは未送信 ([`UNSENT`](https://xhr.spec.whatwg.org/#dom-xmlhttprequest-unsent)) 状態です。この原因の多くは、 XMLHttpRequest が `open()` の時に [`XMLHttpRequest` のオリジン](https://www.w3.org/TR/2010/CR-XMLHttpRequest-20100803/#xmlhttprequest-origin) (XMLHttpRequest が作成された場所) が変更されたことによるものです。これは例えば、 XMLHttpRequest を持ったページで onunload イベントが発生し、ウィンドウが閉じようとしている時に XMLHttpRequest が作成され、ウィンドウがフォーカスを失って他のウィンドウがフォーカスを得たときにリクエストの送信（言い換えれば `open()`）が行なわれた場合に発生することがあります。この問題を防ぐ最も効果的な方法は、新しいウィンドウの {{domxref("Element/DOMActivate_event", "DOMActivate")}} イベントのリスナーを、 {{domxref("Window/unload_event", "unload")}} イベントが発生したときに設定することです。

## ワーカー

overrideMimeType を設定すると、 {{domxref("Worker")}} では動作しません。詳しくは [Firefox バグ 678057](https://bugzil.la/678057) を参照してください。他のブラウザーは扱いが異なるかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [MDN の AJAX 入門](/ja/docs/Web/Guide/AJAX/Getting_Started)
- [XMLHttpRequest での HTML](/ja/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
- [HTTP アクセス制御](/ja/docs/Web/HTTP/CORS)
- [XMLHttpRequest - REST and the Rich User Experience](https://www.peej.co.uk/articles/rich-user-experience.html)
- ["Using the XMLHttpRequest Object" (jibbering.com)](https://jibbering.com/2002/4/httprequest.html)
- [The `XMLHttpRequest` object: WHATWG specification](https://xhr.spec.whatwg.org/)
