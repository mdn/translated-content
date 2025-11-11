---
title: URL：createObjectURL() 静态方法
slug: Web/API/URL/createObjectURL_static
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("URL")}} 接口的 **`createObjectURL()`** 静态方法创建一个用于表示参数中给出的对象的 URL 的字符串。

URL 的生命周期与其创建时所在窗口的 {{domxref("document")}} 绑定在一起。新对象 URL 代表指定的 {{domxref("File")}} 对象或 {{domxref("Blob")}} 对象。

要释放对象 URL，请调用 {{domxref("URL.revokeObjectURL_static", "revokeObjectURL()")}}。

> [!NOTE]
> 此特性在 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中*不*可用，因为它有可能导致内存泄漏。

## 语法

```js-nolint
URL.createObjectURL(object)
```

### 参数

- `object`
  - : 用于创建 URL 的 {{domxref("File")}}、{{domxref("Blob")}} 或 {{domxref("MediaSource")}} 对象。

### 返回值

一个包含对象 URL 的字符串，可用于引用指定源 `object` 的内容。

## 示例

参见[使用对象 URL 来显示图片](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications#示例：使用对象_url_来显示图片)。

## 使用说明

### 内存管理

每次调用 `createObjectURL()` 时，都会创建一个新的对象 URL，即使已经为同一个对象创建了一个 URL。当不再需要这些对象时，必须通过调用 {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} 来释放它们。

浏览器会在卸载文档时自动释放对象 URL；然而，为了优化性能和内存使用，如果在安全时间内可以明确卸载，就应该卸载。

### 使用对象 URL 进行媒体流处理

在较早版本的媒体源规范中，需要为 {{domxref("MediaStream")}} 创建一个对象 URL 才能将流附加到 {{HTMLElement("video")}} 元素。这已不再必要，浏览器正在逐步取消对此的支持。

> [!WARNING]
> 如果你还有依赖于 `createObjectURL()` 将流附加到媒体元素的代码，你需要更新代码并将 {{domxref("HTMLMediaElement.srcObject", "srcObject")}} 设置为 `MediaStream`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
- [使用对象 URL 来显示图片](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications#示例：使用对象_url_来显示图片)
- {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}}
- {{domxref("HTMLMediaElement.srcObject")}}
- {{domxref("FileReader.readAsDataURL()")}}
