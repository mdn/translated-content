---
title: FormData.keys()
slug: Web/API/FormData/keys
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

**`FormData.keys()`** 该方法返回一个迭代器（{{jsxref("Iteration_protocols",'iterator')}}），遍历了该 formData 包含的所有 key，这些 key 是 {{domxref("USVString")}} 对象。

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

```plain
key1
key2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
