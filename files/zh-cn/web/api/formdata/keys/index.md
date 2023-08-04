---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{APIRef("XMLHttpRequest")}}

**`FormData.keys()`** 该方法返回一个迭代器（{{jsxref("Iteration_protocols",'iterator')}}），遍历了该 formData 包含的所有 key，这些 key 是 {{domxref("USVString")}} 对象。

> **备注：** 该方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 可用。

## 语法

```js
formData.keys();
```

### 返回值

返回一个迭代器（ {{jsxref("Iteration_protocols","iterator")}}）。

## 示例

```js
// 先创建一个 FormData 对象
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// 输出所有的 key
for (var key of formData.keys()) {
  console.log(key);
}
```

结果如下：

```
key1
key2
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
