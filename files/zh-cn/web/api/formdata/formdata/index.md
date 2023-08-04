---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

**`FormData()`** 构造函数用于创建一个新的{{domxref("FormData")}}对象。

> **备注：** 该功能在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 中可用。

## 语法

```js-nolint
new FormData(form)
```

### 参数

- `form` {{optional_inline}}
  - : 一个 HTML 上的{{HTMLElement("form")}}表单元素——当指定了，这种方式创建的{{domxref("FormData")}}对象会自动将 form 中的表单值也包含进去，包括文件内容也会被编码之后包含进去。

## 例子

下面的代码将创建一个空的 FormData 对象：

```js
var formData = new FormData(); // 当前为空
```

你可以使用{{domxref("FormData.append")}}来添加键/值对到表单里面；

```js
formData.append("username", "Chris");
```

或者你可以使用可选的 `form` 参数来创建一个带预置数据的 FormData 对象：

```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username" />
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc" />
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile" />
  </div>
  <input type="submit" value="Submit!" />
</form>
```

> **备注：** 所有的输入元素都需要有 **name** 属性，否则无法访问到值。

```js
var myForm = document.getElementById("myForm");
formData = new FormData(myForm);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 附注

在 Gecko 7.0 之前，如果你将{{domxref("Blob")}}作为数据添加到 form 对象中，文件名就是空的，这可能导致服务器在 HTTP 头的 Content-Disposition 中设置的文件名为空而引起错误。从 Gecko 7.0 开始，将会使用"blob"作为 Blob 数据的文件名。

## 相关链接

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
