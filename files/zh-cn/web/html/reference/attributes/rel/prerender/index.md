---
title: rel=prerender
slug: Web/HTML/Reference/Attributes/rel/prerender
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{Deprecated_Header}}{{Non-standard_header}}

**`prerender`** 关键字（{{HTMLElement("link")}} 元素的 [`rel`](/zh-CN/docs/Web/HTML/Reference/Elements/link#rel) 属性的一个关键字）用于提示浏览器用户可能在下一次导航中需要该目标资源，从而可以提前获取并处理该资源，例如预取其子资源或在后台进行离屏渲染，以提升用户体验。

该特性已被[推测规则 API](/zh-CN/docs/Web/API/Speculation_Rules_API) 取代。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [推测性加载](/zh-CN/docs/Web/Performance/Guides/Speculative_loading)，以比较 `<link rel="prerender">` 和其他类似的性能改进特性。
