---
title: script
slug: Web/SVG/Element/script
---

一个 SVG 脚本元素等同于 HTML 中的 `script` 元素，因此这个位置是面向脚本的（例如，ECMAScript）。

任何定义在`script`元素中的函数拥有一个跨当前文档的全局范围。

## 用法

{{svginfo}}

## 示例

下面的代码片段演示了 SVG `script`标签的作用。在代码中，我们使用 JavaScript 改变 SVG {{SVGElement("circle")}} 元素的半径。

```html
<svg
  width="100%"
  height="100%"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg">
  <script type="text/javascript">
    // <![CDATA[
    function change(evt) {
      var target = evt.target;
      var radius = target.getAttribute("r");

      if (radius == 15) {
        radius = 45;
      } else {
        radius = 15;
      }

      target.setAttribute("r", radius);
    }
    // ]]>
  </script>

  <circle cx="50" cy="50" r="45" fill="green" onclick="change(evt)" />
</svg>
```

示例输出：

{{EmbedLiveSample("示例",150,165)}}

## 属性

### 全局属性

- [核心属性](/zh-CN/SVG/Attribute#Core) »
- [Xlink 属性](/zh-CN/SVG/Attribute#XLink) »
- {{SVGAttr("externalResourcesRequired")}}

### 专有属性

- {{SVGAttr("type")}}
- {{SVGAttr("xlink:href")}}

## DOM 接口

该元素实现了[`SVGScriptElement`](/zh-CN/DOM/SVGScriptElement)接口。

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML 中的`script`元素](/zh-CN/HTML/Element/Script)

{{SVGRef}}
