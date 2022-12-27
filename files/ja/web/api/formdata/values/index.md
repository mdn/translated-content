---
title: FormData.values()
slug: Web/API/FormData/values
---

{{APIRef("XMLHttpRequest")}}

**`FormData.values()`** メソッドは {{jsxref("Iteration_protocols",'iterator')}} を返し、このオブジェクトに含まれる全ての値を通過できるようにします。値は {{domxref("USVString")}} または {{domxref("Blob")}} オブジェクトです。

> **メモ:** このメソッドは [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## 構文

```
formData.values();
```

### 返り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テストの FormData オブジェクトを作成
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// 値を表示
for (var value of formData.values()) {
   console.log(value);
}
```

結果は次のとおりです:

```
value1
value2
```

## 仕様

| 仕様                                                                                                     | ステータス                           | 備考     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('XMLHttpRequest','#dom-formdata','values() (as iterator&lt;&gt;)')}} | {{Spec2('XMLHttpRequest')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.FormData.values")}}

## 関連項目

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
