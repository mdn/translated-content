---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{APIRef("XMLHttpRequest")}}

The **`FormData.entries()`** 方法返回一个 {{jsxref("Iteration_protocols",'iterator')}}对象，此对象可以遍历访问 FormData 中的键值对。其中键值对的 key 是一个 {{domxref("USVString")}} 对象；value 是一个 {{domxref("USVString")}} , 或者 {{domxref("Blob")}}对象。

> **备注：** 此方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 可用。

## 语法

```
formData.entries();
```

### 返回值

返回 {{jsxref("Iteration_protocols","iterator")}}。

## 示例

```js
// Create a test FormData object
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// Display the key/value pairs
for (var pair of formData.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

执行结果为：

```
key1, value1
key2, value2
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
