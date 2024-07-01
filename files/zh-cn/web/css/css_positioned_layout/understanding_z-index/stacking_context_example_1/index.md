---
title: Stacking context example 1
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
---

{{CSSRef}}

### Stacking context 层叠上下文 例子 1

先看一个基础的例子。在根元素的层叠上下文中，有两个都是相对定位且没有设置 `z-index` 属性的 DIV（DIV #1 和 DIV #3）。在 DIV #1 中有一个绝对定位的 DIV #2，而在 DIV #3 中有一个绝对定位的 DIV #4，DIV #2 和 DIV #4 也都没有设置 `z-index` 属性。

现在唯一的层叠上下文就是根元素的上下文。因为没有 `z-index` 值，所有的元素按照出现（在 HTML 中）的顺序层叠。

![Stacking context example 1](understanding_zindex_05a.png)

如果给 DIV #2 设置一个正的 `z-index` 值 (不能是 `0` 或 `auto`) ，那么 DIV #2 会渲染在其他所有 DIV 之上。

![Stacking context example 1](understanding_zindex_05b.png)

然后如果给 DIV #4 也设置一个正的 `z-index` 值，且这个值比给的 DIV #2 设置的值要大，则 DIV #4 会渲染在其他所有 DIV（包括 DIV #2）之上。

![Stacking context example 1](understanding_zindex_05c.png)

在这个列子中，DIV #2 和 DIV #4 不是兄弟关系（因为它们的父元素不同）。即便如此，我们也可以通过 `z-index` 来控制 DIV #4 和 DIV #2 的层叠关系。这是因为，DIV #1 和 DIV #3 没有设置 `z-index` 的值，所以它们不会创建层叠上下文。这就意味着 DIV #1 和 DIV #3 的所有内容（包括 DIV #2 和 DIV #4）都属于同一个层叠上下文（即根元素的层叠上下文）。

就层叠上下文而言，DIV #1 和 DIV #3 隶属于根元素，因此层次结构如下所示：

- 根层叠上下文（root stacking context）

  - DIV #2 (z-index 1)
  - DIV #4 (z-index 2)

> **备注：** DIV #1 和 DIV #3 不是透明的。记住所有设置了 opacity 小于 1 的定位元素都会隐式地生成一个层叠上下文（和给元素增加一个 z-index 值的效果相同）。上述的例子是为了说明，当父元素没有生成一个层叠上下文环境的时候，各元素是怎么层叠的。

## 示例

### HTML

```html
<div id="div1">
<br /><span class="bold">DIV #1</span>
<br />position: relative;
   <div id="div2">
   <br /><span class="bold">DIV #2</span>
   <br />position: absolute;
   <br />z-index: 1;
   </div>
</div>

<br />

<div id="div3">
<br /><span class="bold">DIV #3</span>
<br />position: relative;
   <div id="div4">
   <br /><span class="bold">DIV #4</span>
   <br />position: absolute;
   <br />z-index: 2;
   </div>
</div>

</body></html>
```

### CSS

```css
.bold {
  font-weight: bold;
  font: 12px Arial;
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
  z-index: 1;
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
  z-index: 2;
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
```

### Result

{{ EmbedLiveSample('示例') }}

### See also

- [Stacking without z-index](/zh-CN/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
- [Stacking and float](/zh-CN/CSS/Understanding_z-index/Stacking_floating_elements) : How floating elements are handled
- [Adding z-index](/zh-CN/CSS/Understanding_z-index/Using_z-index) : Using z-index to change default stacking
- [The stacking context](/zh-CN/CSS/Understanding_z-index/Stacking_context) : Notes on the stacking context
- [Stacking context example 2](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
- [Stacking context example 3](/zh-CN/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

### Original Document Information

- Author(s): Paolo Lombardi
- This article is the english translation of an article I wrote in italian for [YappY](http://www.yappy.it). I grant the right to share all the content under [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
