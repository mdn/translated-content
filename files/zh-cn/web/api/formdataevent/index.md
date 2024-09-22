---
title: FormDataEvent
slug: Web/API/FormDataEvent
l10n:
  sourceCommit: 56dbf87640f2c91ec0ca3b95a8291fe7e362b9a8
---

{{APIRef("DOM")}}

**`FormDataEvent`** 接口表示 [`formdata` 事件](/zh-CN/docs/Web/API/HTMLFormElement/formdata_event)——此事件在表示表单数据的条目列表构造之后，在 {{domxref("HTMLFormElement")}} 对象上触发。提交表单时会发生这种情况，但也可以通过调用 {{domxref("FormData.FormData", "FormData()")}} 构造函数来触发。

这允许 {{domxref("FormData")}} 对象被快速获取以响应 `formdata` 事件的触发，而不需要在你希望通过 {{domxref("fetch()")}}（参见 [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)）等方法提交表单数据时自己将其组合在一起。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : 创建一个新的 `FormDataEvent` 对象实例。

## 实例属性

_从其父接口 {{domxref("Event")}} 继承属性。_

- {{domxref("FormDataEvent.formData")}}
  - : 包含 {{domxref("FormData")}} 对象，该对象表示在事件触发时，表单中包含的数据。

## 实例方法

_从其父接口 {{domxref("Event")}} 继承方法。_

## 示例

```js
// 获取对表单的引用
const formElem = document.querySelector("form");

// submit 处理器

formElem.addEventListener("submit", (e) => {
  // 在表单提交时，阻止默认行为
  e.preventDefault();

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

  // 构造 FormData 对象，用于触发 formdata 事件
  const formData = new FormData(formElem);
  // 通过 formdata 事件修改 formdata 数据
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// 用于获取数据的 formdata 处理器

formElem.addEventListener("formdata", (e) => {
  console.log("formdata 触发");

  // 修改表单数据
  const formData = e.formData;
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("fetch()")}}
- {{domxref("FormData")}}
- [使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
