---
title: 层叠与浮动
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
---

{{CSSRef}}

### 层叠与浮动

对于浮动的块元素来说，层叠顺序变得有些不同。浮动块元素被放置于非定位块元素与定位块元素之间：

1. 根元素的背景与边框
2. 位于普通流中的后代块元素按照它们在 HTML 中出现的顺序层叠
3. 浮动块元素
4. 后代中的定位元素按照它们在 HTML 中出现的顺序层叠

实际上，在接下来的例子中你会看到，非定位块元素 (DIV #4) 的背景与边框丝毫不会受到浮动块元素的影响，但内容却恰恰相反。出现这种情况是由于 CSS 的标准浮动行为引起的。

这种行为可以通过前一章列表的改进版本来解释：

1. 根元素的背景与边框
2. 位于普通流中的后代块元素按照它们在 HTML 中出现的顺序层叠
3. 浮动块元素
4. 常规流中的后代行内元素
5. 后代中的定位元素按照它们在 HTML 中出现的顺序层叠

> **备注：** 在下面的例子中，除了非定位的那个块元素外，所有的块元素都是半透明的，以便来显示层叠顺序。如果减少非定位元素 (DIV #4) 的透明度，会发生很诡异的事情：该元素的背景和边框会出现在浮动块元素上方，但是仍然处于定位元素的下方。我不能确定这是规范的 bug 或是怪异的解析。(设置透明度会隐式的创建一个层叠上下文。)

{{ EmbedLiveSample('该示例的源码', '563', '255') }}

### 该示例的源码

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Stacking and float</title>
    <style type="text/css">
      div {
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      #absdiv1 {
        position: absolute;
        width: 150px;
        height: 200px;
        top: 10px;
        right: 140px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }

      #normdiv {
        /* opacity: 0.7; */
        height: 100px;
        border: 1px dashed #999966;
        background-color: #ffffcc;
        margin: 0px 10px 0px 10px;
        text-align: left;
      }

      #flodiv1 {
        margin: 0px 10px 0px 20px;
        float: left;
        width: 150px;
        height: 200px;
        border: 1px dashed #009900;
        background-color: #ccffcc;
        text-align: center;
      }

      #flodiv2 {
        margin: 0px 20px 0px 10px;
        float: right;
        width: 150px;
        height: 200px;
        border: 1px dashed #009900;
        background-color: #ccffcc;
        text-align: center;
      }

      #absdiv2 {
        position: absolute;
        width: 150px;
        height: 100px;
        top: 130px;
        left: 100px;
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

    <div id="flodiv1">
      <br /><span class="bold">DIV #2</span> <br />float: left;
    </div>

    <div id="flodiv2">
      <br /><span class="bold">DIV #3</span> <br />float: right;
    </div>

    <br />

    <div id="normdiv">
      <br /><span class="bold">DIV #4</span> <br />no positioning
    </div>

    <div id="absdiv2">
      <br /><span class="bold">DIV #5</span> <br />position: absolute;
    </div>
  </body>
</html>
```

### 相关链接

- [未使用 z-index 的层叠](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index)：默认层叠规则
- [使用 z-index 的层叠](/zh-CN/CSS/Understanding_z-index/Using_z-index)：使用 z-index 来改变默认层叠顺序
- [层叠上下文](/zh-CN/CSS/Understanding_z-index/Stacking_context)：关于层叠上下文的注意事项
- [层叠上下文示例 1](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1)：两层嵌套标签的 HTML 中，z-index 作用在内层标签上
- [层叠上下文示例 2](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2)：两层嵌套标签的 HTML 中，z-index 作用在内外层标签上
- [层叠上下文示例 3](/zh-CN/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_3)：三层嵌套标签的 HTML 中，z-index 作用在中间层标签上

### 原始文档信息

- 作者：Paolo Lombardi
- 该文档的英文原始版本是从我为 [YappY](http://www.yappy.it) 写的意大利文章翻译而来的，该文章版权为 [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- 上次更新于：2014 年 11 月 3 日
