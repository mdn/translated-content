---
title: FormData.values()
slug: Web/API/FormData/values
---

{{APIRef("XMLHttpRequest")}}

**`FormData.values()`** 方法返回一个允许遍历该对象中所有值的 {{jsxref("Iteration_protocols",'迭代器')}} 。这些值是 {{domxref("USVString")}} 或是{{domxref("Blob")}} 对象。

> **备注：** 此方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 中可用

## 语法

```js
formData.values();
```

### 返回值

返回一个{{jsxref("Iteration_protocols","迭代器")}}.

## 示例

```js
//创建一个 FormData 测试对象
var formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

//显示值
for (var value of formData.values()) {
  console.log(value);
}
```

结果为：

```
value1
value2
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
