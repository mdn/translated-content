---
title: Stacking context example 3
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3
---

{{CSSRef}}

### 层叠上下文示例 3

最后一个例子展示了，在多层级的 HTML 结构中混合了多个定位元素且使用类选择器设置 z-index 属性时出现的问题。

我们来看一个用多个定位的 div 实现的三级菜单的例子，二级菜单和三级菜单在鼠标悬停或点击其父元素时才出现，通常这样的菜单在客户端和服务端都是由脚本生成的，所以样式规则不是通过 ID 选择器设置而是通过类选择器设置。

如果这个三级菜单有部分区域重叠，管理层叠顺序就会成为一个问题。

{{ EmbedLiveSample('示例源码', '320', '330') }}

一级菜单仅仅是相对定位，所以没有创建层叠上下文。

二级菜单相对其父元素（一级菜单）绝对定位，要使二级菜单在所有一级菜单的上方，则需要使用 z-index。此时每个二级菜单都创建了一个层叠上下文，而三级菜单也处于其父元素（二级菜单）创建的上下文中。

这样一来，在 HTML 结构中处于三级菜单后面的二级菜单，则会显示在三级菜单的上方，因为所有的二级菜单都使用了同样的 z-index 值，所以处于同一个层叠上下文中。

为了能更好地理解这种情况，这里列出了层叠上下文的层次结构：

- root stacking context

  - LEVEL #1

    - LEVEL #2 (z-index: 1)

      - LEVEL #3
      - ...
      - LEVEL #3

    - LEVEL #2 (z-index: 1)
    - ...
    - LEVEL #2 (z-index: 1)

  - LEVEL #1
  - ...
  - LEVEL #1

可以通过移除不同级别的菜单之间的重叠，或者使用 ID 选择器指定独立的（不同的）z-index 值，或者减少 HTML 的层级来解决这个问题。

> **备注：** 在源码中你会看到三级菜单和二级菜单是由一个绝对定位元素包含很多 div 来实现的，这种方式在需要同时定位一组元素时很有用。

### 示例源码

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      div.lev1 {
        width: 250px;
        height: 70px;
        position: relative;
        border: 2px outset #669966;
        background-color: #ccffcc;
        padding-left: 5px;
      }

      #container1 {
        z-index: 1;
        position: absolute;
        top: 30px;
        left: 75px;
      }

      div.lev2 {
        opacity: 0.9;
        width: 200px;
        height: 60px;
        position: relative;
        border: 2px outset #990000;
        background-color: #ffdddd;
        padding-left: 5px;
      }

      #container2 {
        z-index: 1;
        position: absolute;
        top: 20px;
        left: 110px;
      }

      div.lev3 {
        z-index: 10;
        width: 100px;
        position: relative;
        border: 2px outset #000099;
        background-color: #ddddff;
        padding-left: 5px;
      }
    </style>
  </head>

  <body>
    <br />

    <div class="lev1">
      <span class="bold">LEVEL #1</span>

      <div id="container1">
        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;

          <div id="container2">
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
            <div class="lev3"><span class="bold">LEVEL #3</span></div>
          </div>
        </div>

        <div class="lev2">
          <br /><span class="bold">LEVEL #2</span> <br />z-index: 1;
        </div>
      </div>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>

    <div class="lev1">
      <span class="bold">LEVEL #1</span>
    </div>
  </body>
</html>
```

### 相关文章

- [Stacking without z-index](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/zh-CN/CSS/Understanding_z-index/Stacking_floating_elements) : How floating elements are handled
- [Adding z-index](/zh-CN/CSS/Understanding_z-index/Using_z-index) : Using z-index to change default stacking
- [The stacking context](/zh-CN/CSS/Understanding_z-index/Stacking_context) : Notes on the stacking context
- [Stacking context example 1](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels

### 原文信息

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005

**Note**: the reason the sample image looks wrong - with the second level 2 overlapping the level 3 menus - is because level 2 has opacity, which creates a new stacking context. Basically, this whole sample page is incorrect and misleading.
