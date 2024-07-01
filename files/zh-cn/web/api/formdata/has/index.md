---
title: FormData.has()
slug: Web/API/FormData/has
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`has()`**方法会返回一个布尔值，表示该{{domxref("FormData")}}对象是否含有某个 key。

## 语法

```js
formData.has(name);
```

### 参数

- `name`
  - : 一个 {{domxref("USVString")}} ，要查询的 key 名称。

### 返回

一个 {{domxref("Boolean")}}。

## 示例

下列代码会先创建一个空的 formData 对象：

```js
var formData = new FormData();
```

下列代码用来检测 `FormData` 对象是否存在 `username` 这个 key。默认检测一次，使用 {{domxref("FormData.append")}} 插入`username` 之后再检测一次：

```js
formData.has("username"); // Returns false
formData.append("username", "Chris");
formData.has("username"); // Returns true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
