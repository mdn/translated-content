---
title: Document：fonts 属性
short-title: fonts
slug: Web/API/Document/fonts
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`fonts`** 属性返回该文档的 {{domxref("FontFaceSet")}} 接口。

此特性是 [CSS 字体加载 API](/zh-CN/docs/Web/API/CSS_Font_Loading_API) 的一部分。

## 值

返回值是该文档的 {{domxref("FontFaceSet")}} 接口。`FontFaceSet` 接口可用于加载新字体、检查先前已加载字体的状态等。

## 示例

### 在字体加载完成后执行操作

```js
document.fonts.ready.then((fontFaceSet) => {
  // 任何需要在所有已用字体加载完成后才执行的操作
  // 都可以放在这里。
  const fontFaces = [...fontFaceSet];
  console.log(fontFaces);
  // 若站点未使用某些字体，它们可能仍处于未加载状态
  console.log(fontFaces.map((f) => f.status));
});
```

当所有已用字体的加载和布局操作完成后，该 Promise 会兑现。已用字体集合可能与*已声明*字体集合不同，例如可选字体（即通过 `font-display: optional` 声明的字体）未能及时加载时。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("FontFaceSet")}} 接口
- {{domxref("FontFace")}}
