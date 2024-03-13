---
title: "HTMLFormElement: requestSubmit() メソッド"
short-title: requestSubmit()
slug: Web/API/HTMLFormElement/requestSubmit
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLFormElement")}} の **`requestSubmit()`** メソッドは、特定の送信ボタンでフォームを送信することをリクエストします。

## 構文

```js-nolint
requestSubmit()
requestSubmit(submitter)
```

### 引数

- `submitter` {{optional_inline}}

  - : このフォームのメンバーである{{Glossary("submit button", "送信ボタン")}}です。

    `submitter` が `form*` 属性を指定している場合、このフォームの送信動作を[上書きします](/ja/docs/Glossary/Submit_button#フォームの動作の上書き)（`formmethod="POST"` など）。

    `submitter` に `name` 属性があるか`{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` であった場合、フォームの送信時にそのデータが[含まれます](/ja/docs/Glossary/Submit_button#フォームデータ項目)（`btnName=btnValue` など）。

    `submitter` 引数を省略した場合、このフォーム要素自身が送信者として使用されます。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- {{jsxref("TypeError")}}
  - : 指定された `submitter` が{{Glossary("submit button", "送信ボタン")}}でなかった場合に発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定された `submitter` が、 `requestSubmit()` が呼び出されたフォームのメンバーでない場合に発生します。submitter は form 要素の子孫であるか、フォームを参照する [`form`](/ja/docs/Web/HTML/Element/input#form) 属性を持たなければなりません。

## 使用上の注意

明らかな疑問は、なぜこのメソッドが存在するのかということです。
{{domxref("HTMLFormElement.submit", "submit()")}} メソッドがあったのに、なぜこのメソッドが存在するのでしょうか？

答えは簡単です。`submit()` はフォームを送信しますが、それだけです。一方、`requestSubmit()` は、あたかも送信ボタンがクリックされたかのように動作します。フォームのコンテンツが検証され、検証が成功した場合にのみフォームが送信されます。フォームが送信されると、{{domxref("HTMLFormElement.submit_event", "submit")}} イベントがフォームオブジェクトに返送されます。

## 例

以下の例では、`requestSubmit()` が利用できる場合はそれを使用してリクエストの送信を試みることで、フォームを送信しています。 `main-submit` という ID の送信ボタンが得られた場合は、そのボタンを使用してフォームを送信します。そうでない場合は、 `submitter` 引数を指定せずに、フォーム自身から直接送信されます。

一方で、 `requestSubmit()` が利用できない場合、このコードは代わりにフォームの {{domxref("HTMLFormElement.submit", "submit()")}} メソッドを呼び出すことで送信を行います。

```js
let myForm = document.querySelector("form");
let submitButton = myForm.querySelector("#main-submit");

if (myForm.requestSubmit) {
  if (submitButton) {
    myForm.requestSubmit(submitButton);
  } else {
    myForm.requestSubmit();
  }
} else {
  myForm.submit();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
