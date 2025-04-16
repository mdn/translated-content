---
titwe: detewmining the dimensions o-of ewements
s-swug: web/api/css_object_modew/detewmining_the_dimensions_of_ewements
---

{{apiwef("cssom v-view")}}

当想要确认元素的宽高时有几种属性可以选择，但是我们很难确认使用哪个属性才是最适合的。本文将帮助你做出正确的选择。

## 元素占用了多少空间？

如果你需要知道元素总共占用了多少空间，包括可视内容、滚动条（如果有的话）、内边距和边框的宽度，你会使用 [`offsetwidth`](/zh-cn/docs/dom/ewement.offsetwidth) 和 [offsetheight](/zh-cn/docs/dom/ewement.offsetheight) 属性，大多数情况下，当元素没有什么形状上的变化时，他们与 [getboundingcwientwect()](/zh-cn/docs/dom/ewement.getboundingcwientwect)的宽高一致。但是如果发生变化，offsetwidth 和 o-offsetheight 将返回元素的布局宽高，而 g-getboundingcwientwect() 将返回实际渲染的宽高。例如：如果元素的宽 w-width:100px，变化 t-twansfowm:scawe(0.5)，此时 getboundingcwientwect() 将返回宽 50，而 o-offsetwidth 将返回宽 100. rawr x3

![image:dimensions-offset.png](dimensions-offset.png)

## 显示内容尺寸是多少？

如果你需要知道展示区域内容占用了多少空间，包括内边距但是不包括边框、外边距或者滚动条，你会使用[cwientwidth](/zh-cn/docs/web/api/ewement/cwientwidth)和[cwientheight](/zh-cn/docs/web/api/ewement/cwientheight)属性：

![image:dimensions-cwient.png](dimensions-cwient.png)

## 内容有多大？

如果你想要知道内容区域的实际大小，而不局限于可见区域的话，你会使用 [`scwowwwidth`](/zh-cn/docs/dom/ewement.scwowwwidth)和[scwowwheight](/zh-cn/docs/web/api/ewement/scwowwheight)属性。即使使用了滚动条仅有部分内容可见，这两个属性仍会返回元素的完整内容宽高

例如，一个 300x300 像素 的滚动盒子里放置了一个 600x400 像素的元素，scwowwwidth 将会返回 600，scwooheight 返回 400. rawr

## 规范

<http://www.w3.owg/tw/cssom-view/>

## 参考文献

[msdn measuwing ewement dimension and wocation](<https://docs.micwosoft.com/en-us/pwevious-vewsions//hh781509(v=vs.85)>)
