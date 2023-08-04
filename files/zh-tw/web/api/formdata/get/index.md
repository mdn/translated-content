---
title: FormData.get()
slug: Web/API/FormData/get
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 的 **`get()`** 方法會返回 `FormData 物件中，`指定 key 值所對應之第一組物件中的 value 值 。然而，如果您想要獲得多組以及全部的 value ，那應該使用 {{domxref("FormData.getAll()","getAll()")}} 方法。

**注意**: 這個方法已可以在 [Web Workers](/zh-TW/docs/Web/API/Web_Workers_API) 中使用。

## 語法

```plain
formData.get(name);
```

### 參數

- `name`
  - : 一個 {{domxref("USVString")}} ，代表您想要得到的 value 所對應的 key 值名稱。

### 回傳值

A {{domxref("FormDataEntryValue")}} containing the value.

## 範例

下面一行程式會產生一個空的 `FormData 物件：`

```plain
var formData = new FormData();
```

用 {{domxref("FormData.append")}} 方法新增兩組 `username 值`

```plain
formData.append('username', 'Chris');
formData.append('username', 'Bob');
```

接下來使用 `get() 方法，將只會返回上一步驟，第一組新增的 username 所對應的值`

```plain
formData.get('username'); // Returns "Chris"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-TW/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-TW/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
