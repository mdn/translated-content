---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL_static
---

{{ApiRef("URL")}}

**`URL.createObjectURL()`** 静态方法会创建一个 {{domxref("DOMString")}}，其中包含一个表示参数中给出的对象的 URL。这个 URL 的生命周期和创建它的窗口中的 {{domxref("document")}} 绑定。这个新的 URL 对象表示指定的 {{domxref("File")}} 对象或 {{domxref("Blob")}} 对象。

{{AvailableInWorkers}}

> **备注：** 此特性在 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中不可用，因为它有可能导致内存泄漏。

## 语法

```js
objectURL = URL.createObjectURL(object);
```

### 参数

- `object`
  - : 用于创建 URL 的 {{domxref("File")}} 对象、{{domxref("Blob")}} 对象或者 {{domxref("MediaSource")}} 对象。

### 返回值

一个{{domxref("DOMString")}}包含了一个对象 URL，该 URL 可用于指定源 `object`的内容。

## 示例

查看[使用对象 URL 显示图片](/zh-CN/docs/Using_files_from_web_applications#Example.3A_Using_object_URLs_to_display_images).

## 附注

### 内存管理

在每次调用 `createObjectURL()` 方法时，都会创建一个新的 URL 对象，即使你已经用相同的对象作为参数创建过。当不再需要这些 URL 对象时，每个对象必须通过调用 {{domxref("URL.revokeObjectURL()")}} 方法来释放。

浏览器在 document 卸载的时候，会自动释放它们，但是为了获得最佳性能和内存使用状况，你应该在安全的时机主动释放掉它们。

### 使用相对 URLs 作为媒体流

在旧版本的媒体资源规范中，添加流作为{{HTMLElement("video")}}元素需要创建一个关于 {{domxref("MediaStream")}}的对象 URL。现已没必要这样做了，浏览器已经移除了该操作的支持。

> **警告：** 如果你为了去添加流作为媒体元素，而仍旧使用着依赖{{domxref("URL.createObjectURL", "createObjectURL()")}} 的代码，你需要更新的代码，仅需要设定{{domxref("HTMLMediaElement.srcObject", "srcObject")}} 到 `MediaStream` 即可。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [在 web 应用程序中使用文件](/zh-CN/docs/Using_files_from_web_applications)
- [Using object URLs to display images](/zh-CN/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images)
- {{domxref("URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
