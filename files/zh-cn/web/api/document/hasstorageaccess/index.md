---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
---

{{APIRef}}{{seecompattable}}{{domxref("Document")}}的**`hasStorageAccess()`** 方法返回了一个{{jsxref("Promise")}}来判断该文档是否有访问第一方储存的权限。

通过 [Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API) 获取更多信息。

## 语法

```plain
var promise = document.hasStorageAccess();
```

### 参数

None.

### 返回值

一个用来判断文档是否有权利访问其第一方存储的{{jsxref("Promise")}} 。

If the promise gets resolved and a user gesture event was being processed when the function was originally called, the resolve handler will run as if a user gesture was being processed, so it will be able to call APIs that require user activation.

## Examples

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // storage access has been granted already.
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
  }
});
```

## Specifications

The API is currently only at the proposal stage — the standardization process has yet to begin. You can currently find specification details of the API at Apple's [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) blog post, and [WHATWG HTML issue 3338 — Proposal: Storage Access API](https://github.com/whatwg/html/issues/3338).

## Browser compatibility

{{Compat}}

## See also

[Storage Access API](/zh-CN/docs/Web/API/Storage_Access_API)
