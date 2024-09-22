---
title: FormDataEvent：formData 属性
slug: Web/API/FormDataEvent/formData
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("DOM")}}

{{domxref("FormDataEvent")}} 接口的只读属性 `formData` 包含 {{domxref("FormData")}} 对象，该对象表示在事件触发时，表单中包含的数据。

## 值

一个 {{domxref("FormData")}} 对象。

## 示例

```js
// 获取对表单的引用
const formElem = document.querySelector("form");

// submit 处理器

formElem.addEventListener("submit", (e) => {
  // 在表单提交时，阻止默认行为
  e.preventDefault();

  // 构造 FormData 对象，用于触发 formdata 事件
  new FormData(formElem);
});

// 获得数据的 formdata 处理器

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // 从事件对象中获取表单数据
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // 通过 XHR 提交数据
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("XMLHTTPRequest")}}
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
