---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{APIRef("XMLHttpRequest")}}

**`FormData.entries()`** メソッドは、 {{jsxref("Iteration_protocols",'iterator')}} を返し、このオブジェクトに含まれる全ての キー/バリュー ペアを通過できるようにします。 各ペアのキーは {{domxref("USVString")}} オブジェクトで、 {{domxref("USVString")}} 、または {{domxref("Blob")}} のいずれかの値。

> **メモ:** このメソッドは [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## 構文

```
formData.entries();
```

### 返り値

{{jsxref("Iteration_protocols","iterator")}} を返します。

## 例

```js
// テストの FormData オブジェクトを作成
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// キー/バリュー ペアの表示
for(var pair of formData.entries()) {
   console.log(pair[0]+ ', '+ pair[1]);
}
```

結果は次のとおりです:

```
key1, value1
key2, value2
```

## 仕様

| 仕様                                                                                                         | ステータス                           | 備考     |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------- |
| {{SpecName('XMLHttpRequest','#dom-formdata','entries() (as iterator&lt;&gt;)')}} | {{Spec2('XMLHttpRequest')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.FormData.entries")}}

## 関連項目

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ja/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
