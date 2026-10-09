---
title: <animateMotion>
slug: Web/SVG/Reference/Element/animateMotion
l10n:
  sourceCommit: 603d83f1e1cdfd634e2f0b7b939466c7660822d3
---

**`<animateMotion>`** [SVG](/zh-CN/docs/Web/SVG) 元素用于定义元素如何沿运动路径移动。

> [!NOTE]
> 要复用已有路径，必须在 `<animateMotion>` 元素内使用 {{SVGElement("mpath")}} 元素，而不是 {{SVGAttr("path")}} 属性。

## 使用上下文

{{svginfo}}

## 属性

- {{SVGAttr("keyPoints")}}
  - : 此属性以 \[0,1] 区间表示，对于 {{SVGAttr("keyTimes")}} 中每个关联值，对象沿路径行进了多远。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#数字)*；_默认值_：_无_；_动画性_：**否**
- {{SVGAttr("path")}}
  - : 此属性使用与 {{SVGAttr('d')}} 属性相同的语法定义运动路径。_值类型_：**\<string>**；_默认值_：_无_；_动画性_：**否**
- {{SVGAttr("rotate")}}
  - : 此属性定义沿路径做动画的元素所应用的旋转，通常用于使元素朝向动画方向。_值类型_：[**\<number>**](/zh-CN/docs/Web/SVG/Guides/Content_type#数字) | `auto` | `auto-reverse`；_默认值_：`0`；_动画性_：**否**

> [!NOTE]
> 对于 `<animateMotion>`，{{SVGAttr("calcMode")}} 属性的默认值为 `paced`。

### 动画属性

- [动画时间属性](/zh-CN/docs/Web/SVG/Reference/Attribute#动画时间属性)
  - : {{SVGAttr("begin")}}、{{SVGAttr("dur")}}、{{SVGAttr("end")}}、{{SVGAttr("min")}}、{{SVGAttr("max")}}、{{SVGAttr("restart")}}、{{SVGAttr("repeatCount")}}、{{SVGAttr("repeatDur")}}、{{SVGAttr("fill")}}
- [动画取值属性](/zh-CN/docs/Web/SVG/Reference/Attribute#动画取值属性)
  - : {{SVGAttr("calcMode")}}、{{SVGAttr("values")}}、{{SVGAttr("keyTimes")}}、{{SVGAttr("keySplines")}}、{{SVGAttr("from")}}、{{SVGAttr("to")}}、{{SVGAttr("by")}}
- [其他动画属性](/zh-CN/docs/Web/SVG/Reference/Attribute#动画属性)
  - : 最主要的有：{{SVGAttr("attributeName")}}、{{SVGAttr("additive")}}、{{SVGAttr("accumulate")}}
- [动画事件属性](/zh-CN/docs/Web/SVG/Reference/Attribute#事件属性)
  - : 最主要的有：`onbegin`、`onend`、`onrepeat`

## DOM 接口

该元素实现了 {{domxref("SVGAnimateMotionElement")}} 接口。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGElement("mpath")}}
