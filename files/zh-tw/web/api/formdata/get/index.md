---
title: FormData.get()
slug: Web/API/FormData/get
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

{{domxref("FormData")}} 的 **`get()`** 方法會返回 `FormData` 物件中，指定 `key` 值所對應之第一組物件中的 value 值。然而，如果你想要獲得多組以及全部的 value，那應該使用 {{domxref("FormData.getAll()","getAll()")}} 方法。

## 語法

```js
formData.get(name);
```

### 參數

- `name`
  - : 一個字串，代表你想要得到的 value 所對應的 key 值名稱。

### 回傳值

键值与指定的 `name` 匹配的值。否则为 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)。

## 範例

下面一行程式會產生一個空的 `FormData` 物件：

```js
var formData = new FormData();
```

用 {{domxref("FormData.append")}} 方法新增兩組 `username` 值

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

接下來使用 `get()` 方法，將只會返回上一步驟，第一組新增的 `username` 所對應的值

```js
formData.get("username"); // 返回 "Chris"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("XMLHTTPRequest")}}
- [使用 XMLHttpRequest](/zh-TW/docs/DOM/XMLHttpRequest_API/Using_XMLHttpRequest)
- [使用 FormData 物件](/zh-TW/docs/DOM/XMLHttpRequest/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
