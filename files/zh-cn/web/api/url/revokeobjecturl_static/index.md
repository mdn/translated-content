---
title: URL：revokeObjectURL() 静态方法
slug: Web/API/URL/revokeObjectURL_static
l10n:
  sourceCommit: 216794e76611c18e53222bb8efa570e898e990de
---

{{APIRef("File API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

{{domxref("URL")}} 接口的 **`revokeObjectURL()`** 静态方法用于释放之前通过调用 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 创建的现有对象 URL。

当你完成对对象 URL 的使用后，请调用此方法，让浏览器知道无需再保持对文件的引用。

> [!NOTE]
> 由于 {{domxref("Blob")}} 接口的生命周期问题及潜在的内存泄漏风险，此方法在 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API) 中*不*可用。

## 语法

```js-nolint
URL.revokeObjectURL(objectURL)
```

### 参数

- `objectURL`
  - : 表示之前通过调用 {{domxref("URL.createObjectURL_static", "createObjectURL()")}} 方法创建的对象 URL 的字符串。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

参见[使用对象 URL 来显示图片](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications#示例：使用对象_url_来显示图片)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
- [使用对象 URL 来显示图片](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications#示例：使用对象_url_来显示图片)
- {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}}
