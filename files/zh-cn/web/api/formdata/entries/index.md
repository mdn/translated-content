---
title: FormData.entries()
slug: Web/API/FormData/entries
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`FormData.entries()`** 方法返回一个 {{jsxref("Iteration_protocols",'iterator')}}对象，此对象可以遍历访问 {{domxref("FormData")}} 中的键值对。其中键值对的键是一个字符串对象；值是一个字符串或者 {{domxref("Blob")}} 对象。

## 语法

```js-nolint
entries()
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

```plain
key1, value1
key2, value2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
