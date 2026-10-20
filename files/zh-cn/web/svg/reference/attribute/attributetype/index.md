---
title: attributeType
slug: Web/SVG/Reference/Attribute/attributeType
l10n:
  sourceCommit: 8f0171397993605739530a8d32f24a804d06f882
---

**`attributeType`** 属性指定目标属性及其关联值所定义的命名空间。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("示例", "400", "250")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>CSS</code> | <code>XML</code> | <code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

- `CSS`
  - : 此值指定 {{SVGAttr("attributeName")}} 的值是一个定义为可动画的 CSS 属性的名称。
- `XML`
  - : 此值指定 {{SVGAttr("attributeName")}} 的值是目标元素默认 XML 命名空间中定义为可动画的 XML 属性的名称。
- `auto`
  - : 此值指定实现应将 {{SVGAttr("attributeName")}} 匹配到目标元素的某个属性。用户代理会先在 CSS 属性列表中查找匹配的属性名，如果没有找到，再在该元素的默认 XML 命名空间中查找。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 SMIL 的 SVG 动画](/zh-CN/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
