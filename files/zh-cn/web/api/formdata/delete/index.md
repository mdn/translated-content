---
title: FormData.delete()
slug: Web/API/FormData/delete
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 接口的 **`delete()`** 方法会从 `FormData` 对象中删除指定键，即 key，和它对应的值，即 value。

> **备注：** 此方法可用于 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)。

## 语法

```js
formData.delete(name);
```

### 参数

- `name`
  - : 要删除的键（Key）的名字。

### 返回

空。

## 例子

以下代码将会创建一个空的 `FormData` 对象，并且从指定的表单中获取键值对：

```js
var formData = new FormData(myForm);
```

你可以通过 `delete()` 方法来删除键值对：

```js
formData.delete("username");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
