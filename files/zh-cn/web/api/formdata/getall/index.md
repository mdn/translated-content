---
title: FormData.getAll()
slug: Web/API/FormData/getAll
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`getAll()`** 方法会返回该 {{domxref("FormData")}} 对象指定 key 的所有值。

## 语法

```js
formData.getAll(name);
```

### 参数

- `name`
  - : 一个 {{domxref("USVString")}} 表示要检索的 key 名称。

### 返回

一个 {{domxref("FormDataEntryValue")}} 数组。

## 示例

下列代码会先创建一个空的 `FormData` 对象：

```js
var formData = new FormData();
```

使用 {{domxref("FormData.append")}} 添加两个 `username 的值：`

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

下列 `getAll()` 方法会返回一个数组，包含了所有 `username` 的值：

```js
formData.getAll("username"); // Returns ["Chris", "Bob"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
