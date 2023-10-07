---
title: 使用数据属性
slug: Learn/HTML/Howto/Use_data_attributes
---

{{LearnSidebar}}

HTML 是具有扩展性的设计，它初衷是数据应与特定的元素相关联，但不需要任何定义。[data-\* 属性](/zh-CN/docs/Web/HTML/Global_attributes/data-*)允许我们在标准、语义化的 HTML 元素中存储额外的信息，而不需要使用类似于非标准属性或者 DOM 额外属性之类的技巧。

## HTML 语法

语法非常简单。所有在元素上以`data-`开头的属性为数据属性。比如说你有一篇文章，而你又想要存储一些不需要显示在浏览器上的额外信息。请使用 data 属性：

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## JavaScript 访问

在外部使用[JavaScript](/zh-CN/docs/Web/JavaScript)去访问这些属性的值同样非常简单。你可以使用{{domxref("Element.getAttribute", "getAttribute()")}}配合它们完整的 HTML 名称去读取它们，但标准定义了一个更简单的方法：{{domxref("DOMStringMap")}}你可以使用{{domxref("HTMLElement.dataset", "dataset")}}读取到数据。

为了使用`dataset`对象去获取到数据属性，需要获取属性名中`data-`之后的部分 (要注意的是破折号连接的名称需要改写为骆驼拼写法 (如"index-number"转换为"indexNumber"))。

```js
var article = document.querySelector("#electriccars");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

每一个属性都是一个可读写的字符串。在上面的例子中，`article.dataset.columns = 5`.将会调整属性的值为 5。

## CSS 访问

注意，data 设定为 HTML 属性，他们同样能被[CSS](/zh-CN/docs/Web/CSS)访问。比如你可以通过[generated content](/zh-CN/docs/Web/CSS/content)使用函数{{cssxref("attr")}}来显示 data-parent 的内容：

```css
article::before {
  content: attr(data-parent);
}
```

你也同样可以在 CSS 中使用[属性选择器](/zh-CN/docs/Web/CSS/Attribute_selectors)根据 data 来改变样式：

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

你可以在这个[JSBin](http://jsbin.com/ujiday/2/edit) 里看到全部演示。

Data 属性同样可以存储不断变化的信息，比如游戏的得分。使用 CSS 选择器与 JavaScript 去访问可以让你得到花俏的效果，这里你并不需要用常规的编写方案来编写代码。有关使用生成内容和 CSS 转换（[JSBin 示例](https://jsbin.com/atawaz/3/edit)）的示例，请参阅此[视频](https://www.youtube.com/watch?v=On_WyUB1gOk)。

数据值是字符串。必须在选择器中引用数值才能使样式生效。

## Issues

不要在 data attribute 里储存需要显示及访问的内容，因为一些其他的技术可能访问不到它们。另外爬虫不能将 data attribute 的值编入索引中。

IE 的支持度及显示效果是最主要讨论的问题。IE11+支持这个标准，但所有更早期的版本都不支持[dataset](http://caniuse.com/#feat=dataset)。为了支持 IE10 及以下的版本，你必须使用{{domxref("Element.getAttribute", "getAttribute()")}} 来访问。另外，[读取 data-attributes 的行为](http://jsperf.com/data-dataset)相比 JS 存储数据会慢。使用 dataset 会比使用 getAttribute() 读取数据来得慢。

尽管如此，对于那些与元素相关的数据，这依然是一个很好的解决方案。

在 FireFox 49.0.2(其他版本也有可能) 中，javascript 将无法读出包含 1022 个及以上字符的 data 属性 (EcmaScript 4).

## 参见

- 该文章源自 [Using data attributes in JavaScript and CSS on hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- 在 SVG 2 中也同样支持自定义 data 属性; 请参看{{domxref("SVGElement.dataset")}} 和{{SVGAttr("data-*")}}.
- [How to use HTML5 data attributes](http://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
