---
title: fonts
slug: Web/API/Document/fonts
---

{{domxref("Document")}}的 **`fonts`** 属性接口返回文档的 {{domxref("FontFaceSet")}} 接口。

## 语法

```plain
let fontFaceSet = document.fonts;
```

### 值

返回值是文档的 {{domxref("FontFaceSet")}} 接口。`FontFaceSet` 接口对 加载新字体、检查已加载字体的加载状态 来说非常有用。

## 例子

### 在所有字体加载完成后进行操作

```js
document.fonts.ready.then(function () {
  // 字体加载完成后的逻辑
});
```

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考资料

- {{domxref("FontFaceSet")}} interface
- {{domxref("FontFace")}}

{{APIRef("DOM")}}
