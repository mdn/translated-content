---
title: FormData.set()
slug: Web/API/FormData/set
---

{{APIRef("XMLHttpRequest")}}

**`set()`** 方法会对 `FormData` 对象里的某个 `key` 设置一个新的值，如果该 `key` 不存在，则添加。

`set()` 和 {{domxref("FormData.append")}} 不同之处在于：如果某个 key 已经存在，`set()` 会直接覆盖所有该 key 对应的值，而 {{domxref("FormData.append")}} 则是在该 key 的最后位置再追加一个值。

> **备注：** 该方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API) 可用。

## 语法

该方法有两种使用方式，一个是传入两个参数，一个是传入三个参数。

```js
formData.set(name, value);
formData.set(name, value, filename);
```

#### 参数

- `name`
  - : 字段名称。
- `value`
  - : 字段的值，该值可以是一个 {{domxref("USVString")}} 或 {{domxref("Blob")}}（包括其子类，例如 {{domxref("File")}}），如果不是这两个指定的类型，其将被转成一个字符串。
- `filename` {{optional_inline}}
  - : 当第二个参数传递的是一个 blob 对象（{{domxref("Blob")}}）或者 file 对象（{{domxref("File")}}），filename 参数就代表传给服务端的文件名（一个 {{domxref("USVString")}}）。
    {{domxref("Blob")}} 对象的默认文件名是 "blob"，{{domxref("File")}} 对象的默认文件名则为其“name”属性

> **备注：** 如果对 FormData 对象插入一个 blob 对象（ {{domxref("Blob")}}），那么发送给服务器的请求头部（header）里的“Content-Disposition”里的文件名称将会根据浏览器的不同而不同。

## 示例

先创建一个空的 `FormData` 对象：

```js
var formData = new FormData(); // Currently empty
```

使用 {{domxref("FormData.set")}} 设置键/值：

```js
formData.set("username", "Chris");
formData.set("userpic", myFileInput.files[0], "chris.jpg");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/zh-CN/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
