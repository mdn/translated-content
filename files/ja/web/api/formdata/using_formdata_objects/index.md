---
title: FormData オブジェクトの使用
slug: Web/API/FormData/Using_FormData_Objects
---

{{APIRef("XMLHttpRequest")}}

[`FormData`](/ja/docs/Web/API/FormData) オブジェクトは、[`XMLHttpRequest`](/ja/docs/Web/API/XMLHttpRequest) を使用して送信するためのキーと値のペアのセットを収集可能にします。本来はフォームデータの送信に使用することを想定していましたが、キーのついたデータを伝送するためにフォームとは独立して使用することもできます。伝送されるデータは、フォームのエンコードタイプが `multipart/form-data` に設定されている場合に、{{domxref("HTMLFormElement.submit","submit()")}} メソッドで送信する際に使用するデータと同じ形式です。

## ゼロから FormData オブジェクトを作成する

以下のように `FormData` オブジェクトはあなた自身で作成でき、インスタンス化したら {{domxref("FormData.append","append()")}} メソッドを呼び出すことでフィールドに付加します:

```js
var formData = new FormData();

formData.append("username", "Groucho");
formData.append("accountnum", 123456); // 数値 123456 は直ちに文字列 "123456" へ変換されます

// HTML の file input でユーザーが選択したファイル
formData.append("userfile", fileInputElement.files[0]);

// ファイルのような JavaScript オブジェクト
var content = '<a id="a"><b id="b">hey!</b></a>'; // 新しいファイルの本体...
var blob = new Blob([content], { type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "http://foo.com/submitform.php");
request.send(formData);
```

> **メモ:** フィールド "userfile" および "webmasterfile" はどちらも、ファイルを含んでいます。フィールド "accountnum" に与えた数値は [`FormData.append()`](</ja/docs/Web/API/FormData#append()>) メソッドにより直ちに文字列へ変換されます (フィールドの値として {{ domxref("Blob") }}、 {{ domxref("File") }}、または文字列をとることができます。**値が Blob でもファイルでもない場合は、文字列に変換されます**)。

この例では、 "username", "accountnum", "userfile", "webmasterfile" というフィールドの値を含む `FormData` インスタンスを構築し、 `XMLHttpRequest` のメソッド [`send()`](</ja/docs/Web/API/XMLHttpRequest#send()>) を使用してフォームのデータを送信します。 "webmasterfile" というフィールドは {{domxref("Blob")}} です。 `Blob` オブジェクトは、不変的な生データのファイルのようなオブジェクトを表します。 Blob は、必ずしも JavaScript に適した形式ではないデータを表します。 {{ domxref("File") }} インターフェースは `Blob` をベースにしており、 Blob の機能を継承し、ユーザーのシステム上のファイルをサポートするように拡張されています。 `Blob` を作成するには、 {{domxref("Blob.Blob","Blob() constructor")}} コンストラクターを呼び出します。

## HTML フォームから FormData オブジェクトを取り出す

既存の {{ HTMLElement("form") }} のデータを含む `FormData` オブジェクトを構築するには、 `FormData` オブジェクトの作成時にその form 要素を指定します。

> **メモ:** FormData は name 属性を使用する入力フィールドのみを使用します。

```js
var formData = new FormData(someFormElement);
```

例:

```js
var formElement = document.querySelector("form");
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
request.send(new FormData(formElement));
```

以下のように、`FormData` オブジェクトをフォームより取得してから送信するまでの間に、追加のデータを付加することもできます。

```js
var formElement = document.querySelector("form");
var formData = new FormData(formElement);
var request = new XMLHttpRequest();
request.open("POST", "submitform.php");
formData.append("serialnumber", serialNumber++);
request.send(formData);
```

これにより、必ずしもユーザーが編集可能である必要がない追加情報を含めるために、送信前にフォームデータを拡張することができます。

## FormData オブジェクトを使用したファイルの送信

`FormData` を使用してファイルを送信することもできます。type が "file" である {{HTMLElement("input")}} 要素を、{{htmlelement("form")}} に含めます。

```html
<form enctype="multipart/form-data" method="post" name="fileinfo">
  <label>Your email address:</label>
  <input type="email" autocomplete="on" autofocus name="userid" placeholder="email" required size="32" maxlength="64" /><br />
  <label>Custom file label:</label>
  <input type="text" name="filelabel" size="12" maxlength="32" /><br />
  <label>File to stash:</label>
  <input type="file" name="file" required />
  <input type="submit" value="Stash the file!" />
</form>
<div></div>
```

そして、以下のようなコードを使用して送信できます。

```js
var form = document.forms.namedItem("fileinfo");
form.addEventListener('submit', function(ev) {

  var oOutput = document.querySelector("div"),
      oData = new FormData(form);

  oData.append("CustomField", "This is some extra data");

  var oReq = new XMLHttpRequest();
  oReq.open("POST", "stash.php", true);
  oReq.onload = function(oEvent) {
    if (oReq.status == 200) {
      oOutput.innerHTML = "Uploaded!";
    } else {
      oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
    }
  };

  oReq.send(oData);
  ev.preventDefault();
}, false);
```

> **メモ:** フォームへの参照を渡した場合は、 open() の呼び出しで指定した[リクエストメソッド](/ja/docs/Web/HTTP/Methods)よりもフォームで指定したメソッドを優先します。

> **警告:** FormData を使用して、{{ domxref("XMLHttpRequest") }} または {{ domxref("Fetch_API") }} を使用して、 `multipart/form-data` の Content-Type で POST リクエストを送信する場合 (Files や Blob をサーバーにアップロードする場合など)、リクエストの [`Content-Type`](/ja/docs/Web/HTTP/Headers/Content-Type) ヘッダーを明示的に設定しないでください。そうすると、ブラウザーがリクエスト本文のフォームフィールドの区切りに使用する境界の表現で Content-Type ヘッダーを設定することができなくなります。

以下のように、直接 {{ domxref("File") }} や {{ domxref("Blob") }} を{{ domxref("FormData") }} オブジェクトへ追加することもできます。

```js
data.append("myfile", myBlob, "filename.txt");
```

{{domxref("FormData.append","append()")}} メソッドを使用する際は、オプションの第 3 引数を使用して、`Content-Disposition` ヘッダーに含めるファイル名を渡すことができます。これはサーバーへ送信されます。ファイル名を指定しない (あるいは引数がサポートされない) 場合は、 "blob" という名前が使用されます。

## formdata イベントの使用

{{domxref("FormData")}} オブジェクトよりも新しくプラットフォームに追加されたのが [`formdata` イベント](/ja/docs/Web/API/HTMLFormElement/formdata_event)です。これは、フォームのデータを表すエントリーのリストが作成された後に {{domxref("HTMLFormElement")}} オブジェクトで発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターが呼び出されたときにも発行されます。

これにより、 {{domxref("FormData")}} オブジェクトを `formdata` イベントの発行を受けてすばやく取得することができるようになり、自分でまとめる必要がなくなります。

一般的には、[シンプルな formdata イベントのデモ](https://long-impatiens.glitch.me/)のように、 JavaScript でフォームを参照して使用します。

```js
const formElem = document.querySelector('form');
```

[`submit` イベント](/ja/docs/Web/API/HTMLFormElement/submit_event)のハンドラーでは、 [`preventDefault`](/ja/docs/Web/API/Event/preventDefault) を使用して既定のフォーム送信を停止してから、 {{domxref("FormData")}} コンストラクターを呼び出して `formdata` イベントを発行させます。

```js
formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});
```

`formdata` イベントが発行されると、 {{domxref("FormDataEvent.formData")}} を使って {{domxref("FormData")}} オブジェクトにアクセスし、必要な処理を行うことができます (以下では、 {{domxref("XMLHttpRequest")}} を使ってサーバーに送信しています)。

```js
formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  let request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

> **メモ:** `formdata` イベントと {{domxref("FormDataEvent")}} オブジェクトは、 Chrome ではバージョン 77 (および同等の Chromium) から、 Firefox ではバージョン 72 から利用可能です (Firefox 71 で `dom.formdata.event.enabled` を設定することで初めて利用可能になりました)。

## `FormData` オブジェクトを*使用せずに* AJAX でフォームやファイルを送信する

FormData オブジェクトを*使用せず*に、[AJAX](/ja/docs/Web/Guide/AJAX) でシリアライズしたり送信したりする方法を知りたい場合は、 [こちらの節](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#submitting_forms_and_uploading_files)を参照してください。

## 関連情報

- [Using XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
