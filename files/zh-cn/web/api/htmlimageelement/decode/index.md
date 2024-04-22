---
title: HTMLImageElement.decode()
slug: Web/API/HTMLImageElement/decode
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} 接口的 **`decode()`** 方法返回一个当图片解码后可安全用于附加到 DOM 上时 resolves 的 {{jsxref("Promise")}} 对象。这可用于在将图片附加到一个 DOM 中的元素（或作为一个新元素加入 DOM 中）之前启动加载，所以在将图像添加到 DOM 时可以立即渲染图像。这反过来，防止了将图像加入 DOM 后图像的加载造成下一帧渲染的延迟。

## 语法

```plain
var promise = HTMLImageElement.decode();
```

### 参数

无。

### 返回

一个一旦数据准备好可供使用时 resolve 的 promise 对象。

### 异常

{{domxref('DOMException')}} 表示解码图像时出错。

## 使用提示

一个 `decode()` 的潜在用例：当在加载一个非常大的图片时（例如，一个在线相册），你可以在加载初期提供一个低分辨率的缩略图，之后通过实例化一个 {{domxref("HTMLImageElement")}} 将该图像替换为一个全分辨率图像，设置其 source 为全分辨率图像 URL，使用 `decode()` 获取一旦全分辨率图像准备好被使用时 resolved 的 promise 对象。这时你可以使用当前可用的全分辨率图像替换之前的低分辨率图像。

## 例子

以下例子展示了如何使用 `decode()` 方法来控制一个图像插入 DOM 的时机。若不使用 {{domxref('Promise')}} 返回方法，你将在图像的 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件处理函数中将图像加入 DOM 中，通过 [`error`](/zh-CN/docs/Web/API/Element/error_event) 事件处理函数处理错误。

```js
const img = new Image();
img.src = "nebula.jpg";
img
  .decode()
  .then(() => {
    document.body.appendChild(img);
  })
  .catch((encodingError) => {
    // Do something with the error.
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
