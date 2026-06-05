---
title: rel="noopener"
slug: Web/HTML/Reference/Attributes/rel/noopener
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

{{HTMLElement("a")}}、{{HTMLElement("area")}} 和 {{HTMLElement("form")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Reference/Attributes/rel) 属性的 **`noopener`** 关键字指示浏览器导航到目标资源时，不允许新的浏览上下文访问打开它的文档——这是通过不在打开的窗口上设置 {{DOMxRef("Window.opener")}} 属性实现的（该属性返回 `null`）。

这在打开不受信任的链接时特别有用，可确保它们无法通过 {{DOMxRef("Window.opener")}} 属性篡改来源文档（更多详情请参阅 [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)），同时仍会提供 `Referer` HTTP 标头（除非同时使用了 `noreferrer`）。

请注意，使用 `noopener` 时，除 `_top`、`_self` 和 `_parent` 之外的非空目标名称，在决定是否打开新窗口或标签页时都会被视为 `_blank`。

> [!NOTE]
> 在 `<a>`、`<area>` 和 `<form>` 元素上设置 `target="_blank"` 会隐式提供与设置 `rel="noopener"` 相同的 `rel` 行为，即不会设置 `window.opener`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
