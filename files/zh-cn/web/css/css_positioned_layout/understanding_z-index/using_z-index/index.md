---
title: Adding z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
---

{{CSSRef}}

### 使用 {{ cssxref("z-index") }}

在第一个例子 [Stacking without z-index](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index)中，我们描述了默认的摆放顺序。当你需要指定不同的排列顺序时，只要给元素指定一个 z-index 的数值就可以了。

该属性必须是整数 (正负均可)，它体现了元素在 z 轴的位置。如果你对 z 轴体系不了解，你也可以把它理解成“层叠”，每个层都有一个顺序数，顺序数大的层在上面，小的在下面。

**注意！z-index 只对指定了** [positioned](/zh-CN/CSS/position)**属性的元素有效。**

- _底层：距离观察者最远_
- ...
- \-3 层
- \-2 层
- \-1 层
- 0 层 _默认层_
- 1 层
- 2 层
- 3 层
- ...
- _顶部：最接近观察者_

> **备注：**
>
> - 当没有指定 z-index 的时候，所有元素都在会被渲染在默认层 (0 层)
> - 当多个元素的 z-index 属性相同的时候 (在同一个层里面)，那么将按照 [Stacking without z-index](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index) 中描述的规则进行布局。

在下一个例子中，所有的层都是用 z-index 进行排序的。元素 div#5 的 z-index 无效，因为他没有被指定 position 属性。

### Example source code

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        opacity: 0.7;
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      #normdiv {
        z-index: 8;
        height: 70px;
        border: 1px dashed #999966;
        background-color: #ffffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv1 {
        z-index: 3;
        height: 100px;
        position: relative;
        top: 30px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv2 {
        z-index: 2;
        height: 100px;
        position: relative;
        top: 15px;
        left: 20px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #absdiv1 {
        z-index: 5;
        position: absolute;
        width: 150px;
        height: 350px;
        top: 10px;
        left: 10px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }

      #absdiv2 {
        z-index: 1;
        position: absolute;
        width: 150px;
        height: 350px;
        top: 10px;
        right: 10px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <br /><br />

    <div id="absdiv1">
      <br /><span class="bold">DIV #1</span> <br />position: absolute;
      <br />z-index: 5;
    </div>

    <div id="reldiv1">
      <br /><span class="bold">DIV #2</span> <br />position: relative;
      <br />z-index: 3;
    </div>

    <div id="reldiv2">
      <br /><span class="bold">DIV #3</span> <br />position: relative;
      <br />z-index: 2;
    </div>

    <div id="absdiv2">
      <br /><span class="bold">DIV #4</span> <br />position: absolute;
      <br />z-index: 1;
    </div>

    <div id="normdiv">
      <br /><span class="bold">DIV #5</span> <br />no positioning <br />z-index:
      8;
    </div>
  </body>
</html>
```

### See also

- [Stacking without z-index](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/zh-CN/CSS/Understanding_z-index/Stacking_floating_elements) : How floating elements are handled
- [The stacking context](/zh-CN/CSS/Understanding_z-index/Stacking_context) : Notes on the stacking context
- [Stacking context example 1](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
- [Stacking context example 2](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
