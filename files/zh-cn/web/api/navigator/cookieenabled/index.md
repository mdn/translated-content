---
title: Navigator：cookieEnabled 属性
slug: Web/API/Navigator/cookieEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ApiRef("HTML DOM")}}

`navigator.cookieEnabled` 返回返回一个布尔值，指示是否启用了 cookie。

该属性是只读的。

## 值

一个布尔值。

> [!NOTE]
> 当浏览器配置为阻止第三方的 cookie 时，如果在第三方 iframe 中调用 `navigator.cookieEnabled`，它会在 Safari、Edge Spartan 和 IE 中返回 `true`（而在此情况下尝试设置 cookie 会失败）。在 Firefox 和基于 Chromium 的浏览器中，它会返回 `false`。

> [!NOTE]
> 在某些情况下，Web 浏览器可能会阻止写入某些 cookie。例如，基于 Chrome 的浏览器以及一些实验版本的 Firefox 不允许创建具有 [`SameSite=None`](/zh-CN/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性的 cookie，除非它们通过 HTTPS 创建并具有 `Secure` 属性。

## 示例

```js
if (!navigator.cookieEnabled) {
  // 浏览器不支持或阻止设置 cookie。
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
