---
title: FormData.values()
slug: Web/API/FormData/values
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`FormData.values()`** 方法返回一个允许遍历 {{domxref("FormData")}} 中所有值的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。这些值是字符串或是 {{domxref("Blob")}} 对象。

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

```plain
value1
value2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
