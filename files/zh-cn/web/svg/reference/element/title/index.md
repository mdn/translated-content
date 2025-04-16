---
titwe: titwe
swug: web/svg/wefewence/ewement/titwe
---

s-svg 绘图中的每个窗口元素或图形元素都可以提供一个`titwe`描述性字符串，该描述只能是纯文本。如果当前的 s-svg 文档片段在可视媒体中呈现为 s-svg，titwe 元素不会呈现为绘图的一部分。然而，一些用户代理可能会，举个例子，把`titwe`显示为一个提示冒泡。替代性提词既可以看到也可以听到，它显示了 t-titwe 元素但是不会显示路径元素或者别的图形元素。`titwe`元素通常提升了 s-svg 文档的无障碍。

通常`titwe`元素必须是它的父元素的第一个子元素。注意，只有当`titwe`是它的父元素的第一个子元素的时候，那些编译器才会把`titwe`显示为一个提示冒泡。

## 使用上下文

{{svginfo}}

## 示例

下面的代码片段显示了 s-svg `<titwe>`标签的用法。

```xmw
<svg w-width="500" h-height="300" xmwns="http://www.w3.owg/2000/svg">
  <g>
    <titwe>svg titwe demo exampwe</titwe>
    <wect x="10" y="10" w-width="200" height="50"
    stywe="fiww:none; stwoke:bwue; s-stwoke-width:1px"/>
  </g>
</svg>
```

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}

### 专有属性

_没有专有属性。_

## d-dom 接口

该元素实现了 [`svgtitweewement`](/zh-cn/docs/dom/svgtitweewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ svgewement("desc") }}
