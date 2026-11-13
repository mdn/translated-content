---
title: FormData オブジェクトの使い方
slug: Web/API/XMLHttpRequest_API/Using_FormData_Objects
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

[`FormData`](/ja/docs/Web/API/FormData) オブジェクトは、[フェッチ](/ja/docs/Web/API/Fetch_API)または [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest) API を使用して送信するためのキーと値のペアの集合をコンパイルできます。本来はフォームデータの送信に使用することを想定していましたが、キーのついたデータを伝送するためにフォームとは独立して使用することもできます。伝送されるデータは、フォームのエンコードタイプが `multipart/form-data` に設定されている場合に、{{domxref("HTMLFormElement.submit","submit()")}} メソッドで送信する際に使用するデータと同じ形式です。

## ゼロから `FormData` オブジェクトを作成する

以下のように `FormData` オブジェクトはあなた自身で作成でき、インスタンス化したら {{domxref("FormData.append","append()")}} メソッドを呼び出すことでフィールドに付加します。

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const formData = new FormData();
  formData.append("username", "Groucho");
  formData.append("accountNum", 123456);

  // file 型の <input> 要素
  const avatar = document.querySelector("#avatar");
  formData.append("avatar", avatar.files[0]);

  // JavaScript のファイル風オブジェクト
  const content = '<q id="a"><span id="b">hey!</span></q>';
  const blob = new Blob([content], { type: "text/xml" });
  formData.append("webmasterFile", blob);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

> [!NOTE]
> `"avatar"` および `"webmasterFile"` フィールドはどちらも、ファイルを含んでいます。フィールド `"accountNum"` に与えた数値は [`FormData.append()`](/ja/docs/Web/API/FormData/append) メソッドにより直ちに文字列へ変換されます（フィールドの値として {{ domxref("Blob") }}、 {{ domxref("File") }}、文字列のいずれかを取ることができます。値が `Blob` でも `File` でもない場合は、文字列に変換されます）。

この例では、 `"username"`, `"accountNum"`, `"avatar"`,
`"webmasterFile"` というフィールドの値を含む `FormData` インスタンスを構築し、 {{domxref("Window/fetch", "fetch()")}} を使用してフォームのデータを送信します。 `"webmasterFile"` フィールドは {{domxref("Blob")}} です。 `Blob` オブジェクトは、不変的な生データのファイルのようなオブジェクトを表します。 Blob は、必ずしも JavaScript に適した形式ではないデータを表します。 {{ domxref("File") }} インターフェイスは `Blob` をベースにしており、 Blob の機能を継承し、ユーザーのシステム上のファイルをサポートするように拡張されています。 `Blob` を作成するには、 [`Blob()` コンストラクター](/ja/docs/Web/API/Blob/Blob)を呼び出します。

## HTML フォームから `FormData` オブジェクトを取り出す

既存の {{ HTMLElement("form") }} のデータを含む `FormData` オブジェクトを構築するには、 `FormData` オブジェクトの作成時にその form 要素を指定します。

> [!NOTE]
> `FormData` は `name` 属性を使用する入力フィールドのみを使用します。

```js
const formData = new FormData(someFormElement);
```

例:

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  // <form> 要素
  const userInfo = document.querySelector("#user-info");
  const formData = new FormData(userInfo);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

以下のように、`FormData` オブジェクトをフォームより取得してから送信するまでの間に、追加のデータを付加することもできます。

```js
const send = document.querySelector("#send");

send.addEventListener("click", async () => {
  const userInfo = document.querySelector("#user-info");
  const formData = new FormData(userInfo);
  formData.append("serialnumber", 12345);

  const response = await fetch("http://example.org/post", {
    method: "POST",
    body: formData,
  });
  console.log(await response.json());
});
```

これにより、必ずしもユーザーが編集可能である必要がない追加情報を含めるために、送信前にフォームデータを拡張することができます。

## FormData オブジェクトを使用したファイルの送信

`FormData` を使用してファイルを送信することもできます。type が "file" である {{HTMLElement("input")}} 要素を、{{htmlelement("form")}} に含めます。

```html
<form enctype="multipart/form-data" method="post" name="fileinfo" id="fileinfo">
  <p>
    <label
      >Your email address:
      <input
        type="email"
        autocomplete="on"
        name="userid"
        placeholder="email"
        required
        size="32"
        maxlength="64" />
    </label>
  </p>
  <p>
    <label
      >Custom file label:
      <input type="text" name="file-label" size="12" maxlength="32" />
    </label>
  </p>
  <p>
    <label
      >File to stash:
      <input type="file" name="file" required />
    </label>
  </p>
  <p>
    <input type="submit" value="Stash the file!" />
  </p>
</form>
```

そして、以下のようなコードを使用して送信できます。

```js
const form = document.querySelector("#fileinfo");

form.addEventListener("submit", async (event) => {
  const formData = new FormData(form);

  formData.append("CustomField", "This is some extra data");

  const response = await fetch("stash.php", {
    method: "POST",
    body: formData,
  });
  event.preventDefault();
});
```

> [!NOTE]
> フォームへの参照を渡した場合は、 `open()` の呼び出しで指定した[リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)よりもフォームで指定したメソッドを優先します。

> [!WARNING]
> FormData を使用して、{{ domxref("XMLHttpRequest") }} または[フェッチ API](/ja/docs/Web/API/Fetch_API) を使用して、 `multipart/form-data` の Content-Type で POST リクエストを送信する場合（ファイルや Blob をサーバーにアップロードする場合など）、リクエストの [`Content-Type`](/ja/docs/Web/HTTP/Reference/Headers/Content-Type) ヘッダーを明示的に設定しないでください。そうすると、ブラウザーがリクエスト本文のフォームフィールドの区切りに使用する境界の表現で Content-Type ヘッダーを設定することができなくなります。

以下のように、直接 {{ domxref("File") }} や {{ domxref("Blob") }} を {{ domxref("FormData") }} オブジェクトへ追加することもできます。

```js
data.append("myfile", myBlob, "filename.txt");
```

{{domxref("FormData.append","append()")}} メソッドを使用する際は、オプションの第 3 引数を使用して、`Content-Disposition` ヘッダーに含めるファイル名を渡すことができます。これはサーバーへ送信されます。ファイル名を指定しない（あるいは引数がサポートされない）場合は、 "blob" という名前が使用されます。

## formdata イベントの使用

{{domxref("FormData")}} オブジェクトよりも新しくプラットフォームに追加されたのが [`formdata` イベント](/ja/docs/Web/API/HTMLFormElement/formdata_event)です。これは、フォームのデータを表すエントリーのリストが作成された後に {{domxref("HTMLFormElement")}} オブジェクトで発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターが呼び出されたときにも発行されます。

これにより、 {{domxref("FormData")}} オブジェクトを `formdata` イベントの発行を受けてすばやく取得することができるようになり、自分でまとめる必要がなくなります。

例えば、 JavaScript では次のようにフォームを参照できます。

```js
const formElem = document.querySelector("form");
```

[`submit` イベント](/ja/docs/Web/API/HTMLFormElement/submit_event)のハンドラーでは、 [`preventDefault`](/ja/docs/Web/API/Event/preventDefault) を使用して既定のフォーム送信を停止してから、 {{domxref("FormData")}} コンストラクターを呼び出して `formdata` イベントを発行させます。

```js
formElem.addEventListener("submit", (e) => {
  // フォーム送信時に既定の動作を抑止
  e.preventDefault();

  // FormData オブジェクトを作成し、 formdata イベントを発行
  new FormData(formElem);
});
```

`formdata` イベントが発行されると、 {{domxref("FormData")}} オブジェクトに {{domxref("FormDataEvent.formData")}} を使ってアクセスし、必要な処理を行うことができます（以下では、 {{domxref("XMLHttpRequest")}} を使ってサーバーに送信しています）。

```js
formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // イベントオブジェクトから形式データを取得します。
  const data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // fetch() でデータを送信
  fetch("/formHandler", {
    method: "POST",
    body: data,
  });
});
```

## 分かりましたか

`FormData` オブジェクトは、無効になっているフィールドや無効になっているフィールドセットのデータを含めることはできません。

## 関連情報

- [フェッチ API の使用](/ja/docs/Web/API/Fetch_API/Using_Fetch)
- {{domxref("HTMLFormElement")}}
- {{domxref("Blob")}}
- [型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
