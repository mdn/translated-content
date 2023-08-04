---
title: Clipboard.write()
slug: Web/API/Clipboard/write
---

{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} 的方法 **`write()`** 写入图片等任意的数据到剪贴板。这个方法可以用于实现剪切和复制的功能。

但是你要提前获取 "[Permissions API](/zh-CN/docs/Web/API/Permissions_API)" 的 `"clipboard-write"` 权限才能将数据写入到剪贴板。

> **备注：** 浏览器对这个异步剪贴板的 API 仍然在讨论中。所以在使用它之前请检查[浏览器兼容性](#浏览器兼容性)和[剪切板可用性](/zh-CN/docs/Web/API/Clipboard#剪贴板可用性)以获得更多的兼容性信息。

## 语法

```
var promise = navigator.clipboard.write(dataTransfer)
```

### 参数

- `dataTransfer`
  - : {{domxref("DataTransfer")}} 对象包含了要写入剪贴板的数据。

### 返回值

当数据被写入到剪贴板的时候，{{jsxref("Promise")}} resolve 回调被执行。如果剪贴板不能完成剪贴操作，{{jsxref("Promise")}} reject 回调被执行。

## 示例

这个例子展示了如何将当前剪贴板的内容替换为给定的内容。

```js
function setClipboard(text) {
  let data = new DataTransfer();

  data.items.add("text/plain", text);
  navigator.clipboard.write(data).then(
    function () {
      /* success */
    },
    function () {
      /* failure */
    },
  );
}
```

代码创建了一个 {{domxref("DataTransfer")}} 对象，要替换的内容存储在这里。执行 {{domxref("DataTransferItemList.add()")}} 将数据写入进去，然后执行 `write()` 方法，指定执行成功或错误的结果。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
