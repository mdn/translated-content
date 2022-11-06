---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{APIRef("XMLHttpRequest")}}

**`FormData.keys()`** メソッドは、 {{jsxref("Iteration_protocols",'iterator')}} を返し、このオブジェクトに含まれる全てのキーを通過できるようにします。キーは {{domxref("USVString")}} オブジェクトです。

> **メモ:** このメソッドは [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## 構文

```
formData.keys();
```

### 返り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テストの FormData オブジェクトを作成
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// キーを表示
for (var key of formData.keys()) {
   console.log(key);
}
```

結果は次のとおりです:

```
key1
key2
```

## 仕様

| 仕様                                                                                                     | ステータス                           | 備考     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('XMLHttpRequest','#dom-formdata','keys() (as iterator&lt;&gt;)')}} | {{Spec2('XMLHttpRequest')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.FormData.keys")}}

## 関連項目

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
