---
title: FormData：get() 方法
slug: Web/API/FormData/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

`FormData` 介面的 **`get()`** 方法會回傳 `FormData` 物件中與給定鍵相關聯的第一個值。如果你預期有多個值且想要取得全部的值，請改用 {{domxref("FormData.getAll()","getAll()")}} 方法。

## 語法

```js-nolint
get(name)
```

### 參數

- `name`
  - : 一個代表你想要檢索的鍵名的字串。

### 回傳值

一個鍵符合指定 `name` 的值。否則回傳 [`null`](/zh-TW/docs/Web/JavaScript/Reference/Operators/null)。

## 範例

如果我們使用 {{domxref("FormData.append", "append()")}} 將兩個 `username` 值新增到一個 {{domxref("FormData")}} 中：

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

下方的 `get()` 方法將只會回傳第一個 `username` 值：

```js
formData.get("username"); // 回傳「Chris」
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [使用 FormData 物件](/zh-TW/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
