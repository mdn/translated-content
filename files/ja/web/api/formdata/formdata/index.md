---
title: "FormData: FormData() コンストラクター"
short-title: FormData()
slug: Web/API/FormData/FormData
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`FormData()`** コンストラクターは、新しい {{domxref("FormData")}} オブジェクトを生成します。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
new FormData()
new FormData(form)
new FormData(form, submitter)
```

### 引数

- `form` {{optional_inline}}
  - : HTML の {{HTMLElement("form")}} 要素です。指定された場合、{{domxref("FormData")}} オブジェクトは、その各要素の name プロパティをキーに、それらの送信される値を値として使い、フォームの現在のキーと値が設定されます。ファイルからの入力内容は、エンコードもされます。
- `submitter` {{optional_inline}}
  - : `form` のメンバーである{{Glossary("submit button", "送信ボタン")}}です。もし `submitter` に `name` 属性があるか、`{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` であった場合、このデータは {{domxref("FormData")}} オブジェクトに[含まれます](/ja/docs/Glossary/Submit_button#form_data_entries)（例えば `btnName=btnValue`）。

### 例外

- {{jsxref("TypeError")}}
  - : 指定した `submitter` が{{Glossary("submit button", "送信ボタン")}}でない場合に発生します。
- `NotFoundError` {{domxref("DOMException")}}
  - : 指定した `submitter` が `form` のメンバーでない場合に発生します。`submitter` はフォーム要素の子孫であるか、フォームを参照する [`form`](/ja/docs/Web/HTML/Element/input#form) 属性がなければなりません。

## 例

### 空の FormData の作成

次の行は、空の `FormData` オブジェクトを生成します。

```js
const formData = new FormData();
```

{{domxref("FormData.append", "append()")}} を使って、これにキーと値のペアを追加することができます。

```js
formData.append("username", "Chris");
```

### HTML フォーム要素からの事前入力

オプションで `form` と `submitter` を指定すると、`FormData` オブジェクトを作成する際に、指定したフォームの値を事前入力することができます。

> [!NOTE]
> FormData オブジェクトに含まれるのは、正常なフォームコントロールのみです。つまり、名前を持ち、無効状態でないものです。

#### HTML

```html
<form id="form">
  <input type="text" name="text1" value="foo" />
  <input type="text" name="text2" value="bar" />
  <input type="text" name="text2" value="baz" />
  <input type="checkbox" name="check" checked disabled />
  <button name="intent" value="save">Save</button>
  <button name="intent" value="saveAsCopy">Save As Copy</button>
</form>

<output id="output"></output>
```

```css hidden
form {
  display: none;
}

output {
  display: block;
  white-space: pre-wrap;
}
```

#### JavaScript

```js
const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

for (const [key, value] of formData) {
  output.textContent += `${key}: ${value}\n`;
}
```

#### 結果

簡潔にするため、`<form>` 要素は非表示にしています。

{{EmbedLiveSample("prepopulating_from_a_html_form_element", "", 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
