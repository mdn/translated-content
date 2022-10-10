---
title: 字体平滑
slug: Web/CSS/font-smooth
---

{{ CSSRef }} {{ Non-standard_header }}

**`font-smooth`** [CSS](/zh-CN/CSS) 属性用来控制字体渲染时的平滑效果。

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{ Xref_cssinitial() }}</strong></td>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <td><strong>适用元素</strong></td>
      <td>所有元素与生成的内容</td>
    </tr>
    <tr>
      <td><strong>{{ Xref_cssinherited() }}</strong></td>
      <td>是</td>
    </tr>
    <tr>
      <td><strong>Percentages</strong></td>
      <td>relative to parent element's font size</td>
    </tr>
    <tr>
      <td><strong>Media</strong></td>
      <td>{{ Xref_cssvisual() }}</td>
    </tr>
    <tr>
      <td><strong>{{ Xref_csscomputed() }}</strong></td>
      <td>as specified</td>
    </tr>
  </tbody>
</table>

## 语法

```css
/* Keyword values */
font-smooth: auto;
font-smooth: never;
font-smooth: always;

/* <length> value */
font-smooth: 2em;
```

> **备注：** **Webkit** 实现了名为`-webkit-font-smoothing`的相似属性。这个属性仅在 Mac OS X/macOS 下生效。- `none` - 关闭字体平滑；展示有锯齿边缘的文字。
>
> - `antialiased` - 平滑像素级别的字体，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。
> - `subpixel-antialiased` - 在大多数非视网膜显示器上，这将会提供最清晰的文字。

> **备注：** **Firefox** 实现了名为 -moz-osx-font-smoothing 的相似属性。这个属性仅在 Mac OS X / macOS 下生效。- `auto` - 允许浏览器选择字体平滑的优化方式，通常为`grayscale`。
>
> - `grayscale` - 用灰度抗锯齿渲染文本，而不是子像素。从亚像素渲染切换到黑暗背景上的浅色文本的抗锯齿使其看起来更轻。
> - {{cssxref("inherit")}}
> - {{cssxref("unset")}}

## 规范

尽管在早期（2002）的 [CSS3 Fonts](http://www.w3.org/TR/WD-font/#font-smooth) 草稿中就出现了 `font-smooth` ，但是这个属性已经在规范中被移除，而且已经不在标准跟踪之中。

## 浏览器兼容性

{{Compat}}

## 参见

- [Please Stop "Fixing" Font Smoothing – UsabilityPost](http://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/)
