---
title: Stacking without z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
---

{{CSSRef}}

### 不含 z-index 的堆叠

当没有元素包含 z-index 属性时，元素按照如下顺序堆叠（从底到顶顺序）：

1. 根元素的背景和边界
2. 普通流 (无定位) 里的块元素 (没有 position 或者 position:static;) 按 HTML 中的出现顺序堆叠
3. 定位元素按 HTML 中的出现顺序堆叠

在接下来的例子中，相对和绝对定位的块元素的大小和位置刚好说明上述堆叠规则。

> **备注：**
>
> - 在一组由不含有任何 z-index 属性的同类元素，如例子中的定位块元素（DIV #1 至 #4），这些元素按照它们在 HTML 结构中出现的顺序堆叠，而不管它们的定位属性如何。
> - 普通流中不含有定位属性的标准块元素（DIV #5）始终先于定位元素渲染并出现在定位元素的下层，即便它们在 HTML 结构中出现的位置晚于定位元素也是如此。

### 示例

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

      #normdiv {
        height: 70px;
        border: 1px dashed #999966;
        background-color: #ffffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv1 {
        opacity: 0.7;
        height: 100px;
        position: relative;
        top: 30px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv2 {
        opacity: 0.7;
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
        opacity: 0.7;
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
        opacity: 0.7;
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
    </div>

    <div id="reldiv1">
      <br /><span class="bold">DIV #2</span> <br />position: relative;
    </div>

    <div id="reldiv2">
      <br /><span class="bold">DIV #3</span> <br />position: relative;
    </div>

    <div id="absdiv2">
      <br /><span class="bold">DIV #4</span> <br />position: absolute;
    </div>

    <div id="normdiv">
      <br /><span class="bold">DIV #5</span> <br />no positioning
    </div>
  </body>
</html>
```

### See also

- [堆叠与浮动](/zh-CN/CSS/Understanding_z-index/Stacking_floating_elements) : 浮动元素的处理方式
- [增加 z-index](/zh-CN/CSS/Understanding_z-index/Using_z-index) : 使用 z-index 来改变堆放顺序
- [堆叠上下文](/zh-CN/CSS/Understanding_z-index/Stacking_context) : 堆叠上下文的注意事项
- [堆叠上下文示例 1](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_1) : 在两层元素的第二层上使用 z-index
- [堆叠上下文示例 2](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_2) : 在两层元素的所有层上使用 z-index
- [堆叠上下文示例 3](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_3) : 在三层元素的第二层上使用 z-index

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
