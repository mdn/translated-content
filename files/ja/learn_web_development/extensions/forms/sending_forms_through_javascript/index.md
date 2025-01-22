---
title: JavaScript によるフォームの送信
slug: Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

ユーザーが HTML フォームを送信する場合、例えば送信ボタンをクリックすると、ブラウザーは [HTTP](/ja/docs/Web/HTTP) リクエストを送信してフォーム内のデータを送信します。しかし、この宣言的な手法ではなく、ウェブアプリでは、フォーム送信を期待するエンドポイントにプログラムでデータを送信するために、 {{domxref("Window/fetch", "fetch()")}} などの JavaScript API を使用することがあります。この記事では、この手法が重要なユースケースである理由と、その方法について説明します。

## なぜ JavaScript を使用してフォームデータを送信するのか

標準の HTML フォーム送信は、[フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)に関するこの記事で説明されているように、データが送信された URL を読み込みます。つまり、ブラウザーウィンドウが全ページ読み込みでナビゲートされるということです。

しかし、多くのウェブアプリ、特に{{glossary("progressive web apps","プログレッシブウェブアプリ")}}や{{glossary("SPA", "単一ページアプリ")}}は、サーバーからデータをリクエストし、ページの関連部分を更新するために JavaScript API を使用しており、ページ全体を読み込むオーバーヘッドを避けています。

このため、これらのウェブアプリケーションがフォームデータを送信しようとする場合、ユーザーからの入力の収集のみに HTML フォームを使用し、データ送信には使用しません。ユーザーがデータを送信しようとすると、アプリケーションがコントロールを引き継ぎ、 {{domxref("Window/fetch", "fetch()")}} などの JavaScript API を使用してデータを送信します。

## JavaScript フォーム送信の問題

ウェブアプリがフォームデータを送信するサーバーエンドポイントがウェブアプリ開発者の制御下にある場合、開発者はフォームデータを任意の方法で送信できます。例えば、 JSON オブジェクトとして送信できます。

しかし、サーバーエンドポイントがフォームの送信を期待している場合、ウェブアプリはデータを具体的な方法でエンコードする必要があります。例えば、データがテキストのみの場合、 URL エンコード方式でキーと値の組が掲載されているリストを作成し、 {{httpheader("Content-Type")}} を `application/x-www-form-urlencoded` として送信します。フォームにバイナリーデータが含まれている場合、 `multipart/form-data` コンテンツタイプを使用して送信する必要があります。

The {{domxref("FormData")}} interface takes care of the process of encoding data in this way, and in the rest of this article we'll provide a quick introduction to `FormData`. For more details, see our guide to [Using FormData objects](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects).

## `FormData` オブジェクトを手動で構築

`FormData` オブジェクトは、オブジェクトの {{domxref("FormData.append()", "append()")}} メソッドを追加したいすべてのフィールドについて呼び出し、フィールドの名前と値を設定することによって構築できます。値は、テキストフィールドの場合は文字列、バイナリフィールドの場合は {{domxref("Blob")}} （{{domxref("File")}} オブジェクトを含む）となります。

次の例では、ユーザーがボタンをクリックすると、フォーム送信という形でデータを送信します。

```js
async function sendData(data) {
  // Construct a FormData instance
  const formData = new FormData();

  // Add a text field
  formData.append("name", "Pomegranate");

  // Add a file
  const selection = await window.showOpenFilePicker();
  if (selection.length > 0) {
    const file = await selection[0].getFile();
    formData.append("file", file);
  }

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

const send = document.querySelector("#send");
send.addEventListener("click", sendData);
```

1. 最初に新しい、空の `FormData` オブジェクトを構築します。

2. 次に、`append()` を 2 回呼び出し、`FormData` オブジェクトに 2 つのアイテムを追加します。テキストフィールドとファイルです。

3. 最後に、 `fetch()` API を使用して {{httpmethod("POST")}} リクエストを行い、リクエスト本体として `FormData` オブジェクトを設定します。

{{httpheader("Content-Type")}} ヘッダーを設定する必要がないことに注意してください。 `FormData` オブジェクトを `fetch()` に渡すと、正しいヘッダーが自動的に設定されます。

## `FormData` オブジェクトと `<form>` の関連付け

送信するデータが現実の {{htmlelement("form")}} から来る場合は、フォームを `FormData` コンストラクターに渡すことで、 `FormData` インスタンスを生成することができます。

HTML で `<form>` 要素を宣言しているとします。

```html
<form id="userinfo">
  <p>
    <label for="username">Enter your name:</label>
    <input type="text" id="username" name="username" value="Dominic" />
  </p>
  <p>
    <label for="avatar">Select an avatar</label>
    <input type="file" id="avatar" name="avatar" required />
  </p>
  <input type="submit" value="Submit" />
</form>
```

フォームには、テキスト入力、ファイル入力、送信ボタンが含まれます。

JavaScript は次のとおりです。

```js
const form = document.querySelector("#userinfo");

async function sendData() {
  // Associate the FormData object with the form element
  const formData = new FormData(form);

  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      // Set the FormData instance as the request body
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});
```

フォーム要素に送信イベントハンドラーを追加します。最初の呼び出しでは、ブラウザーの組み込みフォーム送信を防ぐために {{domxref("Event.preventDefault()", "preventDefault()")}} が呼び出され、その後、フォーム要素を取得してそれを `FormData` コンストラクターに渡す `sendData()` が呼び出されます。

その後、`fetch()` を使用して、 HTTP の `POST` リクエストとして `FormData` インスタンスを送信します。

## 関連情報

### 学習コース

- [初めてのフォーム](/ja/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [フォームの構築方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [基本的なネイティブフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5 の入力型](/ja/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [その他のフォームコントロール](/ja/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [フォームへのスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [クライアントサイドのフォーム検証](/ja/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [フォームデータの送信](/ja/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### 上級トピック

- **JavaScript によるフォームの送信**
- [カスタムフォームコントロールの作成方法](/ja/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- [古いブラウザーでの HTML フォーム](/ja/docs/Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers)
- [フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
