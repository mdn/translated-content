---
title: URL.revokeObjectURL()
slug: Web/API/URL/revokeObjectURL_static
---

{{ApiRef("URL")}}

**`URL.revokeObjectURL()`** 静态方法用来释放一个之前已经存在的、通过调用 {{domxref("URL.createObjectURL()")}} 创建的 URL 对象。当你结束使用某个 URL 对象之后，应该通过调用这个方法来让浏览器知道不用在内存中继续保留对这个文件的引用了。

你可以在 `sourceopen` 被处理之后的任何时候调用 `revokeObjectURL()`。这是因为 `createObjectURL()` 仅仅意味着将一个媒体元素的 `src` 属性关联到一个 {{domxref("MediaSource")}} 对象上去。调用`revokeObjectURL()` 使这个潜在的对象回到原来的地方，允许平台在合适的时机进行垃圾收集。

{{AvailableInWorkers}}

## 语法

```plain
window.URL.revokeObjectURL(objectURL);
```

### 参数

- `objectURL`
  - : 一个 {{domxref("DOMString")}}，表示通过调用 {{domxref("URL.createObjectURL()") }} 方法产生的 URL 对象。

### Return value

undefined

## 示例

查看[使用对象 URL 显示图片](/zh-CN/docs/Using_files_from_web_applications#Example.3a_Using_object_URLs_to_display_images)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 Web 应用程序中使用文件](/zh-CN/docs/Using_files_from_web_applications)
- [使用对象 URL 显示图像](/zh-CN/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images)
- {{domxref("URL.createObjectURL()") }}
