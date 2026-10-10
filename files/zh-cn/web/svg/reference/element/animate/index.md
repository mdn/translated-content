---
title: <animate>
slug: Web/SVG/Reference/Element/animate
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

**`<animate>`** [SVG](/zh-CN/docs/Web/SVG) 元素用于随时间对元素的某个属性做动画。

## 使用上下文

{{svginfo}}

## 属性

此元素仅包含全局属性。

## DOM 接口

该元素实现了 {{domxref("SVGAnimateElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 无障碍考虑

眨眼和闪烁的动画对存在认知问题（例如注意缺陷多动障碍（ADHD））的人可能造成困扰。此外，某些运动可能诱发前庭障碍、癫痫、偏头痛和暗点敏感性。

考虑提供一种暂停或禁用动画的机制，并使用[减少动画媒体查询](/zh-CN/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)或等效的[用户代理客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#用户代理客户端提示) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}，为已表明希望没有动画体验的用户提供互补体验。

- [为运动敏感设计更安全的网页动画 · A List Apart 文章](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [减少动画媒体查询简介 | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [面向运动的响应式设计 | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN 对 WCAG 的理解：对指南 2.2 的解读](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#指南_2.2_—_足够的时间_为用户提供足够的时间来阅读和使用内容)
- [理解成功标准 2.2.2 | W3C 对 WCAG 2.0 的解读](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
