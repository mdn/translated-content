---
title: FormData.get()
slug: Web/API/FormData/get
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers}}

{{domxref("FormData")}} 的 `get()` 方法用于返回 FormData 对象中和指定的键关联的第一个值，如果你想要返回和指定键关联的全部值，那么可以使用 {{domxref("FormData.getAll()","getAll()")}} 方法。

## 语法

```js-nolint
get(name)
```

### 参数

- `name`
  - : 将要获取值的键名。

### 返回值

包含值的{{domxref("FormDataEntryValue")}}。

## 例子

下面的代码创建一个 FormData 对象：

```js
var formData = new FormData();
```

使用{{domxref("FormData.append")}}方法添加两个数据：

```js
formData.append("username", "Chris");
formData.append("username", "Bob");
```

接下来使用 `get()` 来返回第一个和 `"username"` 关联的值：

```js
formData.get("username"); // Returns "Chris"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
