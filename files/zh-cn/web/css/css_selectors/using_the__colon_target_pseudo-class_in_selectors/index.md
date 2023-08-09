---
title: 在选择器中使用 :target 伪类
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
---

{{CSSRef}}

为了辅助标识那些指向文档特定部分链接的目标，[CSS3 选择器](http://www.w3.org/TR/css3-selectors/#target-pseudo) 引入了 {{cssxref(":target")}} [伪类](/zh-CN/CSS/Pseudo-classes). Netscape 7.1 已经在 Netscape 系列中加入了这个伪类的支持，这一新的举措让页面作者能够辅助用户在较大的页面中定位。

### 选择一个目标

{{cssxref(":target")}} 伪类用来指定那些包含片段标识符的 URI 的目标元素样式。例如 `https://developer.mozilla.org/zh-CN/docs/Web/CSS#参考` 这个 URI 包含了 `#参考` 片段标识符 在 HTML 中，标识符是元素的 `id` 或者 `name` 属性。由于这两者位于相同的命名空间，因此，这个示例 URI 指向的是文档顶层的“参考”。

假设你想修改 URI 指向的任何 h2 元素，但是又不想把样式应用到任何其他同类型的元素，那么以下示例足够简单有用：

```
h2:target {font-weight: bold;}
```

同样的，将样式应用于特定的文档片段也是可行的。这是通过使用 URI 中相同的标识符实现的。例如，要在 #Example 文档片段中加入边框，我们可以通过如下代码实现：

```
#Example:target {border: 1px solid black;}
```

### 定位所有元素

如果想要创建应用于所有目标元素的样式，那么可以使用通用选择器：

```
:target {color: red;}
```

### 示例

在以下示例中，5 个链接指向了同一文档中的元素。例如，选择 "First" 链接会导致 `<h1 id="one">` 成为目标元素。注意，由于目标元素有可能会被放置到浏览器窗口的顶层，因此文档可能会跳到新的滚动位置。

```
<h4 id="one">...</h4> <p id="two">...</p>
<div id="three">...</div> <a id="four">...</a> <em id="five">...</em>

<a href="#one">First</a>
<a href="#two">Second</a>
<a href="#three">Third</a>
<a href="#four">Fourth</a>
<a href="#five">Fifth</a>
```

### 结论

在片段标识符指向部分文档的情况下，读者可能会对到底应该阅读文档的哪一部分感到疑惑。通过对不同的目标元素的样式进行修饰，读者的相关疑惑会减少或者消除。

### 相关链接

- [CSS3 Selectors #target-pseudo](http://www.w3.org/TR/css3-selectors/#target-pseudo)
- [CSS Reference :target](/En/CSS/:target)

### Original Document Information

- Author(s): Eric Meyer, Standards Evangelist, Netscape Communications
- Last Updated Date: Published 30 Jun 2003
- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.
