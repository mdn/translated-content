---
title: FormData.append()
slug: Web/API/FormData/append
---

{{APIRef("XMLHttpRequest")}}

{{domxref("FormData")}} 接口的 **`append()`** 方法会添加一个新值到 `FormData` 对象内的一个已存在的键中，如果键不存在则会添加该键。

{{domxref("FormData.set")}} 和 `append()` 的区别在于，如果指定的键已经存在， {{domxref("FormData.set")}} 会使用新值覆盖已有的值，而 `append()` 会把新值添加到已有值集合的后面。

> **备注：** 这个方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 中可用。

## 语法

这个方法有两个版本：一个有两个参数的版本和一个有三个参数的版本。

```js
formData.append(name, value);
formData.append(name, value, filename);
```

### 参数

- `name`
  - : `value` 中包含的数据对应的表单名称。
- `value`
  - : `表单的值。`可以是{{domxref("USVString")}} 或 {{domxref("Blob")}} (包括子类型，如 {{domxref("File")}})。
- `filename` {{optional_inline}}
  - : 传给服务器的文件名称 (一个 {{domxref("USVString")}}), 当一个 {{domxref("Blob")}} 或 {{domxref("File")}} 被作为第二个参数的时候， {{domxref("Blob")}} 对象的默认文件名是 "blob"。 {{domxref("File")}} 对象的默认文件名是该文件的名称。

> **备注：** 如果你指定一个 {{domxref("Blob")}} 作为数据添加到 `FormData` 对象中，文件名会被放在 "Content-Disposition" 头部（常常会根据浏览器变化而变化）传给服务器。

### 返回值

空

## 示例

下面的代码创建了一个空的 `FormData` 对象：

```js
var formData = new FormData(); // Currently empty
```

你可以通过 {{domxref("FormData.append")}} 往对象里加入键值对：

```js
formData.append("username", "Chris");
formData.append("userpic", myFileInput.files[0], "chris.jpg");
```

跟常规`表单数据一样，你可以使用同一个名称添加多个值` 。例如 (为了与 PHP 命名习惯一致在名称中添加了 \[])：

```js
formData.append("userpic[]", myFileInput1.files[0], "chris1.jpg");
formData.append("userpic[]", myFileInput2.files[0], "chris2.jpg");
```

这项技术使得多文件上传的处理更加简单，因为所得数据结构更有利于循环。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-CN/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-CN/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
