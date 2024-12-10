---
title: HTMLFencedFrameElement：allow 属性
slug: Web/API/HTMLFencedFrameElement/allow
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

{{domxref("HTMLFencedFrameElement")}} 的 **`allow`** 属性用于获取并设置对应 {{htmlelement("fencedframe")}} 元素的 `allow` 属性的值，该属性表示内容首次嵌入时应用的[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)。

并非所有权限策略都允许在围栏框架中使用。允许的权限列在[围栏框架可用的权限策略](/zh-CN/docs/Web/HTML/Element/fencedframe#permissions_policies_available_to_fenced_frames)中——这些权限是加载来自指定 API 的围栏框架内容所必需的。如果不设置 `allow` 属性，那么默认情况下将允许这些权限。如果想要缩小权限集，需要确保正在使用的 API 所需的所有权限都已在 `allow` 属性中设置。

## 值

表示[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)的字符串。

## 示例

```js
const frame = document.createElement("fencedframe");
console.log(frame.allow);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- developers.google.cn 上的[围栏框架](https://developers.google.cn/privacy-sandbox/private-advertising/fenced-frame)
- developers.google.cn 上的[隐私沙盒](https://developers.google.cn/privacy-sandbox)
