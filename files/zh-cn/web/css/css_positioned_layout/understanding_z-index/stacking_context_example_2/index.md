---
title: Stacking context example 2
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2
---

{{CSSRef}}

### 层叠上下文示例 2

这是一个非常简单的例子，但它是理解层叠上下文这个概念的关键。还是和之前的例子中一样的四个 DIV，不过现在 z-index 属性被分配在两个水平的层次结构中。

{{ EmbedLiveSample('示例源码', '352', '270') }}

可以看到现在 DIV #2 (z-index: 2) 在 DIV #3 (z-index: 1) 的上面，因为他们都属于同一个层叠上下文（根元素创建的层叠上下文），所以 z-index 的值决定了元素如何叠放。

奇怪的是 DIV #2 (z-index: 2) 在 DIV #4 (z-index: 10) 的上面，尽管 DIV #2 的 z-index 值小于 DIV #4。原因在于它们不属于同一个层叠上下文。DIV #4 处于 DIV #3 所创建的层叠上下文中，而整个 DIV #3（包含其后代元素）是在 DIV #2 下面的。

为了更好的理解这种情况，这里列出了层叠上下文的层次结构：

- 根上下文（root stacking context）

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **备注：** 值得记住的是，通常 HTML 的层次结构和层叠上下文的层次结构是不同的。在层叠上下文的层次结构中，没有创建层叠上下文的元素同其父级处于一个层叠上下文。

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

      #div2 {
        z-index: 2;
      }
      #div3 {
        z-index: 1;
      }
      #div4 {
        z-index: 10;
      }

      #div1,
      #div3 {
        height: 80px;
        position: relative;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        padding-left: 5px;
      }

      #div2 {
        opacity: 0.8;
        position: absolute;
        width: 150px;
        height: 200px;
        top: 20px;
        left: 170px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }

      #div4 {
        opacity: 0.8;
        position: absolute;
        width: 200px;
        height: 70px;
        top: 65px;
        left: 50px;
        border: 1px dashed #000099;
        background-color: #ddddff;
        text-align: left;
        padding-left: 10px;
      }
    </style>
  </head>

  <body>
    <br />

    <div id="div1">
      <br />
      <span class="bold">DIV #1</span><br />
      position: relative;
      <div id="div2">
        <br />
        <span class="bold">DIV #2</span><br />
        position: absolute;<br />
        z-index: 2;
      </div>
    </div>

    <br />

    <div id="div3">
      <br />
      <span class="bold">DIV #3</span><br />
      position: relative;<br />
      z-index: 1;
      <div id="div4">
        <br />
        <span class="bold">DIV #4</span><br />
        position: absolute;<br />
        z-index: 10;
      </div>
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
- [Stacking context example 3](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### 原文信息

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
