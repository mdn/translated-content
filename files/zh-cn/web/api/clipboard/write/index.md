---
title: Clipboard：write() 方法
slug: Web/API/Clipboard/write
---

{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} 的方法 **`write()`** 写入图片等任意的数据到剪贴板。这个方法可以用于实现剪切和复制的功能。

当页面位于活动选项卡中时，[权限 API](/zh-CN/docs/Web/API/Permissions_API) 中的 `"clipboard-write"` 权限会自动授予该页面。

> [!NOTE]
> 浏览器对这个异步剪贴板的 API 仍然在讨论中。所以在使用它之前请检查[浏览器兼容性](#浏览器兼容性)和[剪贴板可用性](/zh-CN/docs/Web/API/Clipboard#剪贴板可用性)以获得更多的兼容性信息。

> [!NOTE]
> 为了与 Google Chrome 浏览器保持一致，Firefox 只允许此函数处理文本、HTML 和 PNG 数据。

## 语法

```js-nolint
write(data)
```

### 参数

- `data`
  - : 包含要写入剪贴板的数据的 {{domxref("ClipboardItem")}} 对象数组。

### 返回值

当数据被写入到剪贴板的时候，{{jsxref("Promise")}} resolve 回调被执行。如果剪贴板不能完成剪贴操作，{{jsxref("Promise")}} reject 回调被执行。

## 示例

以下示例代码将展示如何将剪贴板的内容替换为指定的字符串。

```js
function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
    },
    () => {
      /* failure */
    },
  );
}
```

代码首先创建了一个新的 {{domxref("Blob")}} 对象，需要使用该对象来构造 {{domxref("ClipboardItem")}} 对象，并将其发送到剪贴板。{{domxref("Blob")}} 构造函数接收我们要复制的内容及类型，一个 {{domxref("Blob")}} 对象可以有不同的来源，例如 [canvas](/zh-CN/docs/Web/API/HTMLCanvasElement)。

接下来，我们创建一个新的 {{domxref("ClipboardItem")}} 对象，并在其中放置 blob，以写入到剪贴板。传递给 {{domxref("ClipboardItem")}} 构造函数的对象的键名表示内容类型，值表示内容。然后调用 `write()`，并指定复制成功和失败的回调函数。

### 复制 canvas 内容至剪贴板的示例

```js
function copyCanvasContentsToClipboard(canvas, onDone, onError) {
  canvas.toBlob((blob) => {
    let data = [new ClipboardItem({ [blob.type]: blob })];

    navigator.clipboard.write(data).then(
      () => {
        onDone();
      },
      (err) => {
        onError(err);
      },
    );
  });
}
```

> [!NOTE]
> 一次只能传入一个剪贴板项目。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
