---
title: 调整列表缩进
slug: Web/CSS/CSS_lists/Consistent_list_indentation
---

{{CSSRef}}

对列表最常见的样式修改之一是改变缩进距离，即列表项向右侧移动的距离。令人沮丧的是，缩进在一个浏览器中的表现常常与其他浏览器中的效果不尽相同。例如，如果声明列表的左边距为 0，在 IE 浏览器中生效，但是在基于 Gecko 引擎的浏览器中却不起作用。本文将帮助你理解这些可能发生的问题，以及如何避免这些问题的产生。

为了弄明白这是为什么，以及如何避免这些问题发生，有必要研究一下列表结构的具体细节。

### 创建一个列表

首先，来看一个简单，单独的列表项目。该列表项目没有标记符号（或称之为“着重号”），并且没有被列表包裹起来。如下图图 1 所示，单独的列表项是无效的，简单且没有任何装饰。

![Figure 1](consistent-list-indentation-figure1.gif)

红色的虚线边框代表列表项目内容区域的外边界。记住，从这一点上看，这个列表项目没有内边距和边框。如果我们再添加两个列表项目，我们得到下面的结果，如图 2 所示。

![Figure 2](consistent-list-indentation-figure2.gif)

现在我们在外面加上父元素；这个例子中，我们使用一个无序列表 (i.e., `<ul>`)。根据 CSS 盒子模型，列表项目的盒子必须显示在其父元素的内容区域里。因为这里的父元素既没有 padding 也没有 margin，所以我们得到下面的结果，如图 3 所示。

![Figure 3](consistent-list-indentation-figure3.gif)

这里，蓝色的虚线边框表示 \<ul> 元素内容区域的边缘。因为我们没有给 \<ul> 元素添加内边距，所以它的内容的包裹层紧贴在三个列表项外。

现在我们来添加列表项目标记，由于这是一个无序列表，我们添加传统的实心圆“着重标记”，如下图图 4 所示。

![Figure 4](consistent-list-indentation-figure4.gif)

可以看到，这些标记符号在\<ul>内容区域的外面，但这无关紧要。重要的是，这些标记被放到主要的\<li>元素盒子外面了。它们有点像列表项目的附件，在\<li>的内容区域外游荡，但依然依附于\<li>。

这就是为什么在除了 IE 浏览器以外的所有浏览器上，标记符号都被放在\<li>元素的边框外，假设列表项位置的值为外部"outside"。如果该值被改为内部"inside"，则标记符号会被放到\<li>的内容区域里面，像是放在\<li>最开头的内联盒子一样。

### 二次缩进

So how will all this appear in a document? At the moment, we have a situation analogous to these styles:

```
ul, li {margin-left: 0; padding-left: 0;}
```

If we dropped this list into a document as-is, there would be no apparent indentation and the markers would be in danger of falling off the left edge of the browser window.

In order to avoid this and get some indentation, there are really only three options available to browser implementors.

1. Give each `<li>` element a left margin.
2. Give the `<ul>` element a left margin.
3. Give the `<ul>` element some left padding.

As it turns out, nobody seems to have used the first option. The second option was taken by Internet Explorer for Windows and Macintosh, and Opera. The third was adopted by Gecko, and by extension all the browsers that embed it.

Let's look at the two approaches for a moment. In Internet Explorer and Opera, the lists are indented by setting a left margin of 40 pixels on the `<ul>` element. If we apply a background color to the `<ul>` element and leave the list item and `<ul>` borders in place, we get the result shown in Figure 5.

![Figure 5](consistent-list-indentation-figure5.gif)

Gecko, on the other hand, sets a left _padding_ of 40 pixels for the `<ul>` element, so given the exact same styles as were used to produce Figure 5, loading the example into a Gecko-based browser gives us Figure 6.

![Figure 6](consistent-list-indentation-figure6.gif)

As we can see, the markers remain attached to the `<li>` elements, no matter where they are. The difference is entirely in how the `<ul>` is styled. We can only see the difference if we try to set a background or border on the `<ul>` element.

### Finding Consistency

Boil it all down, and what we're left with is this: if you want consistent rendering of lists between Gecko, Internet Explorer, and Opera, you need to set **both** the left margin and left padding of the `<ul>` element. We can ignore `<li>` altogether for these purposes. If you want to reproduce the default display in Netscape 6.x, you write:

```
ul {margin-left: 0; padding-left: 40px;}
```

If you're more interested in following the Internet Explorer/Opera model, then:

```
ul {margin-left: 40px; padding-left: 0;}
```

Of course, you can fill in your own preferred values. Set both to `1.25em`, if you like — there's no reason why you have to stick with pixel-based indentation. If you want to reset lists to have no indentation, then you still have to zero out both padding and margin:

```
ul {margin-left: 0; padding-left: 0;}
```

Remember, though, that in so doing, you'll have the bullets hanging outside the list and its parent element. If the parent is the `body`, there's a strong chance your bullets will be completely outside the browser window, and thus will not be visible.

### 结论

In the end, we can see that none of the browsers mentioned in this article is right or wrong about how they lay out lists. They use different default styles, and that's where the problems creep in. By making sure you style both the left padding and left margin of lists, you can find much greater cross-browser consistency in your list indentation.

### 建议

- 在你调整列表的缩进的时候，务必确认同时设置了 padding 和 margin.

### 原始文档信息

- Author(s): Eric A. Meyer, Netscape Communications
- Last Updated Date: Published 30 Aug 2002
- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
