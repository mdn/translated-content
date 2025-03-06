---
title: <set>
slug: Web/SVG/Element/set
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

**`<set>`** [SVG](/zh-CN/docs/Web/SVG) 元素提供了一种在指定时间内设置属性值的方法。

它支持所有属性类型，包括那些无法合理插值的类型，例如字符串和布尔值。对于可以合理插值的属性，通常更推荐使用 {{SVGElement('animate')}}。

> **备注：** `<set>` 元素是非累加性的。{{SVGAttr('additive')}} 和 {{SVGAttr('accumulate')}} 属性不被允许，如果指定了这些属性，将会被忽略。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      cursor: pointer;
    }
    .round {
      rx: 5px;
      fill: green;
    }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

{{EmbedLiveSample('示例', 150, '100%')}}

## 属性

- {{SVGAttr("to")}}
  - : 此属性定义了在动画持续时间内应用于目标属性的值。该值必须符合目标属性的要求。_值类型_：[**\<anything>**](/zh-CN/docs/Web/SVG/Content_type#anything)；_默认值_：无；_动画性_：**否**

## 使用上下文

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGAttr("attributeName")}} 属性
- [动画时间属性](/zh-CN/docs/Web/SVG/Attribute#动画时间属性)，包括 {{SVGAttr("begin")}}、{{SVGAttr("dur")}}、{{SVGAttr("end")}}、{{SVGAttr("min")}}、{{SVGAttr("max")}}、{{SVGAttr("restart")}}、{{SVGAttr("repeatCount")}}、{{SVGAttr("repeatDur")}} 和 {{SVGAttr("fill")}}。
- {{SVGElement("animate")}}
