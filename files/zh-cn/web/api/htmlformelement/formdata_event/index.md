---
title: GlobalEventHandlers.onformdata
slug: Web/API/HTMLFormElement/formdata_event
---

{{ApiRef("HTML DOM")}}

{{domxref("GlobalEventHandlers")}} 混入对象的属性 **`onformdata`** 是用于处理 `formdata` 事件的，它在整个列表展示所构建的表单数据之后被触发。触发会发生在表单发送时，但也可能由对某个{{domxref("FormData.FormData", "FormData()")}} 结构体的调用所触发。`onformdata` 在 {{domxref("HTMLFormElement")}}上有效。

## 语法

```plain
target.onformdata = functionRef;
```

### Value

`functionRef` 是一个函数名或者称为 [function expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/function). 此函数接受一个{{domxref("FormDataEvent")}}对象作为其唯一表达式参数。

## 示例

```js
// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

// formdata handler to retrieve data

formElem.onformdata = (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  let data = e.formData;
  for (var value of data.values()) {
    console.log(value);
  }

  // submit the data via XHR
  var request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [`formdata` event](/zh-CN/docs/Web/API/HTMLFormElement/formdata_event)
- {{domxref("FormDataEvent")}}
- [Using FormData Objects](/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
