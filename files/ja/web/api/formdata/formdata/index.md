---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

**`FormData()`** コンストラクターは、新しい {{domxref("FormData")}} オブジェクトを生成します。

> **メモ:** このメソッドは [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## 構文

```js
var formData = new FormData(form)
```

### 引数

- `form` {{optional_inline}}
  - : HTML の {{HTMLElement("form")}} 要素です。これが指定されたとき、{{domxref("FormData")}} オブジェクトは、その各要素の name プロパティをキーに、それらの送信される値を値として使い、フォームの現在のキーと値が設定されます。ファイルからの入力内容は、エンコードもされます。

## 例

次の行は、空の `FormData` オブジェクトを生成します:

```js
var formData = new FormData(); // Currently empty
```

{{domxref("FormData.append")}} を使って、これにキーと値の組を追加することができます:

```js
formData.append('username', 'Chris');
```

または、`FormData` オブジェクトを生成するときにオプションの `form` 引数を指定することにより、指定したフォームの値を設定することができます:

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
  <input type="submit" value="Submit!">
</form>
```

> **メモ:** 正しく選択されたフォーム コントロールだけが FormData に含まれます。つまり、name 属性を持ち、disabled ではなく、checked (ラジオボタンやチェックボックス) または selected (選択リストのひとつ以上のオプション) であるものです。

```js
let myForm = document.getElementById('myForm');
let formData = new FormData(myForm);
```

## 仕様書

| Specification                                                                    | Status                               | Comment            |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('XMLHttpRequest','#dom-formdata','FormData()')}} | {{Spec2('XMLHttpRequest')}} | Initial definition |

## ブラウザーの対応

{{Compat("api.FormData.FormData")}}

## 関連情報

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
