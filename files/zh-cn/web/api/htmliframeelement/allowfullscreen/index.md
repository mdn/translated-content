---
title: HTMLIFrameElement：allowFullscreen 属性
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: 17abe1c7a64248b77998643433cb3285ae937c6e
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLIFrameElement")}} 接口的 **`allowFullscreen`** 属性是一个反映了 {{HTMLElement("iframe")}} 元素的 `allowfullscreen` 属性的布尔值，它表示 iframe 的内容是否允许使用 {{domxref("Element.requestFullscreen", "requestFullscreen()")}}。

> [!NOTE]
> 此属性被视为遗留属性。请改用 `allow="fullscreen"` 和 {{domxref("HTMLIFrameElement.allow")}}。

## 值

一个布尔值。

## 示例

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // 输出：true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- {{domxref("Element.requestFullscreen()")}}
- [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}} 权限策略指令
