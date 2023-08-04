---
title: FormData.has()
slug: Web/API/FormData/has
---

{{APIRef("XMLHttpRequest")}}

**`has()`**方法会返回一个布尔值，表示该{{domxref("FormData")}}对象是否含有某个 key。

> **备注：** 该方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 可用。

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

## 相关链接

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
