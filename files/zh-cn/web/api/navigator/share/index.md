---
title: Navigator.share
slug: Web/API/Navigator/share
---

{{APIRef("Web Share API")}}{{securecontext_header}}

**`Navigator.share()`** 方法通过调用本机的共享机制作为 Web Share API 的一部分。如果不支持 Web Share API，则此方法为 `undefined`。

## 语法

```plain
const sharePromise = window.navigator.share(data);
```

### 参数

- _data_

  - : 包含要共享的数据的对象。必须至少指定以下字段之一。可用选项包括：

    - `url`: 要共享的 URL（ {{domxref("USVString")}} ）
    - `text`: 要共享的文本（ {{domxref("USVString")}} ）
    - `title`: 要共享的标题（ {{domxref("USVString")}}）
    - `files`: 要共享的文件（“FrozenArray”）

### 返回值

该方法将会返回一个{{jsxref("Promise")}}。一旦用户完成分享，这个 promise 将会接受。如果指定的共享数据格式不正确，promise 将会立即拒绝；如果用户取消了分享，promise 也会拒绝。

例如，在 Android 的 Chrome 上，将在用户选择要共享的应用程序后将会解析共享的内容。

## 示例

```js
navigator.share({
  title: document.title,
  text: "Hello World",
  url: "https://developer.mozilla.org",
}); // 分享 MDN 的 URL
```

### 分享文件

分享文件之前，先使用 `navigator.canShare()` 判断这个文件能否被分享，Then include an array of files in the call to `navigator.share()`:

Notice: That the sample handles feature detection by testing for `navigator.canShare()` rather than for `navigator.share()`. The data object passed to `canShare()` only supports the `files` property. Image, video, audio, and text files can be shared.

```js
if (navigator.canShare && navigator.canShare({ files: filesArray })) {
  navigator
    .share({
      files: filesArray,
      title: "Pictures",
      text: "Our Pictures.",
    })
    .then(() => console.log("Share was successful."))
    .catch((error) => console.log("Sharing failed", error));
} else {
  console.log(`Your system doesn't support sharing files.`);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("navigator.canShare()")}}
