---
title: FormData.append()
slug: Web/API/FormData/append
---

{{APIRef("XMLHttpRequest")}}

インターフェイスの **`append()`** メソッドは、FormData オブジェクト内の既存のキーに新しい値を追加するか、キーがまだ存在しない場合は追加します。

{{domxref("FormData.set")}}との違いは、指定されたキーが既に存在する場合、{{domxref("FormData.set")}}はすべての既存の値を新しい値で上書きすることです。 一方、`append()`は、既存の値のセットの最後に新しい値を追加します。

> **メモ:** **このメソッドは Web Workers で使用できます。**

## Syntax

There are two versions of this method: a two and a three parameter version:

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### Parameters

- `name`
  - : The name of the field whose data is contained in `value`.
- `value`
  - : The field's value. This can be a {{domxref("USVString")}} or {{domxref("Blob")}} (including subclasses such as {{domxref("File")}}). If none of these are specified the value is converted to a string.
- `filename` {{optional_inline}}
  - : The filename reported to the server (a {{domxref("USVString")}}), when a {{domxref("Blob")}} or {{domxref("File")}} is passed as the second parameter. The default filename for {{domxref("Blob")}} objects is "blob". The default filename for {{domxref("File")}} objects is the file's filename.

> **メモ:** If you specify a {{domxref("Blob")}} as the data to append to the `FormData` object, the filename that will be reported to the server in the "Content-Disposition" header used to vary from browser to browser.

### Returns

Void.

## Example

The following line creates an empty `FormData` object:

```js
var formData = new FormData(); // Currently empty
```

You can add key/value pairs to this using {{domxref("FormData.append")}}:

```js
formData.append('username', 'Chris');
formData.append('userpic', myFileInput.files[0], 'chris.jpg');
```

As with regular form data, you can append multiple values with the same name. For example (and being compatible with PHP's naming conventions by adding \[] to the name):

```js
formData.append('userpic[]', myFileInput.files[0], 'chris1.jpg');
formData.append('userpic[]', myFileInput.files[1], 'chris2.jpg');
```

This technique makes it simpler to process multi-file uploads because the resultant data structure is more conducive to looping.

If the sent value is different than String or Blob it will be automatically converted to String:

```js
formData.append('name', true);
formData.append('name', 74);
formData.append('name', 'John');

formData.getAll('name'); // ["true", "74", "John"]
```

## Specifications

| Specification                                                                        | Status                               | Comment            |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------ |
| {{SpecName('XMLHttpRequest','#dom-formdata-append','append()')}} | {{Spec2('XMLHttpRequest')}} | Initial definition |

## ブラウザの互換性

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
