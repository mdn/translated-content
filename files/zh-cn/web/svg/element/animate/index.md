---
title: <animate>
slug: Web/SVG/Element/animate
---

{{SVGRef}}

动画元素放在形状元素的内部，用来定义一个元素的某个属性如何踩着时点改变。在指定持续时间里，属性从开始值变成结束值。

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

<p>{{EmbedLiveSample('示例', 150, '100%')}}</p>

## 属性

### 动画属性

- [动画时间属性](/zh-CN/docs/Web/SVG/Attribute#动画时间属性)
  - : {{SVGAttr("begin")}}、{{SVGAttr("dur")}}、{{SVGAttr("end")}}、{{SVGAttr("min")}}、{{SVGAttr("max")}}、{{SVGAttr("restart")}}、{{SVGAttr("repeatCount")}}、{{SVGAttr("repeatDur")}}、{{SVGAttr("fill")}}
- [动画取值属性](/zh-CN/docs/Web/SVG/Attribute#动画取值属性)
  - : {{SVGAttr("calcMode")}}、{{SVGAttr("values")}}、{{SVGAttr("keyTimes")}}、{{SVGAttr("keySplines")}}、{{SVGAttr("from")}}、{{SVGAttr("to")}}、{{SVGAttr("by")}}
- [其他动画属性](/zh-CN/docs/Web/SVG/Attribute#动画额外属性)
  - : 最主要的有：{{SVGAttr("attributeName")}}、{{SVGAttr("additive")}}、{{SVGAttr("accumulate")}}
- [动画事件属性](/zh-CN/docs/Web/SVG/Attribute#动画事件属性)
  - : 最主要的有：{{SVGAttr("onbegin")}}、{{SVGAttr("onend")}}、{{SVGAttr("onrepeat")}}

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Attribute/Core)
  - : 最主要的有：{{SVGAttr('id')}}
- [样式属性](/zh-CN/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}、{{SVGAttr('style')}}
- 事件属性
  - : [全局事件属性](/zh-CN/docs/Web/SVG/Attribute/Events#global_event_attributes)、[文档元素事件属性](/zh-CN/docs/Web/SVG/Attribute/Events#document_element_event_attributes)

## 用法

该元素实现了 {{domxref("SVGAnimateElement")}} 接口。

## 无障碍说明

对于存在认知问题（如，患有注意缺陷多动障碍 (ADHD)）的人来说，闪烁动画可能会引发一些问题。此外，某些动画可能会引起前庭相关疾病、癫痫、偏头痛和光敏综合征（Scotopic sensitivity）。

考虑提供一种暂停或禁用动画的机制，并配合使用[偏好减少动画的媒体查询](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)来为不喜欢动画的用户提供更舒适的体验。

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
