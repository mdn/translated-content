---
title: Namespaces Crash Course
slug: Web/SVG/Namespaces_Crash_Course
---

作为 [XML](/zh-CN/docs/Glossary/XML) 的一个方言，[SVG](/zh-CN/docs/Web/SVG) 需要在一个命名空间内（is namespaced）。理解命名空间的概念，以及在你打算编辑 SVG 内容时，命名空间如何使用，是很重要的。SVG 查看器的版本早于 Firefox 1.5 的发布的，都几乎没有注意命名空间的问题，but they are essential to multi-XML dialect supporting user agents such as [Gecko](/zh-CN/docs/Mozilla/Gecko)-based browsers which must be very strict. 现在，花一点时间来理解命名空间，这会让你以后避免各种麻烦。

### 背景

W3C 的长期目标是使不同类型的 XML 基本内容可以混合在同一个 XML 文件中。例如，SVG 和 [MathML](/zh-CN/docs/Web/MathML) 可以直接并入基于 XHTML 的科学文档中。能够混合这样的内容类型有很多优点，但也需要解决一个非常实际的问题。

合理来说，每个 XML 语言定义其规范中描述的标记标签名称的含义。在单个 XML 文档中混合来自不同 XML 方言的内容的问题是，由一个方言定义的标签可能与另一个方言定义的标签具有相同的名称。例如，XHTML 和 SVG 都有一个\<title>标签。专业使用者如何区分两者？其实当 XML 内容是它所知道的，而不仅仅是一个没有意义的包含任意标签名的 XML 文件时，专业使用者如何告诉它？

与大众想法相反，这个问题的答案不是“可以从 DOCTYPE 声明中得知”。DTDs 的设计不考虑混合内容，而过去尝试创建混合内容的 DTDs 现在被认为是失败的。XML 和一些 XML 方言 (包括 SVG), 不要求`DOCTYPE` 声明，SVG 1.2 更不会有。DOCTYPE 声明（通常）与单个内容类型文件中的内容匹配的事实只是巧合的。DTDs 仅用于验证，而不是内容的识别。使用其 DOCTYPE 声明欺骗和标识 XML 内容的使用者会造成危害（User agents that cheat and identify XML content using its DOCTYPE declaration cause harm）。

问题的真正答案是，XML 内容通过给明确的标签显示“命名空间声明”来告诉使用者哪个方言标签名称属于哪个。

### 声明命名空间

所以这些命名空间声明是什么样的呢，并且在什么地方用他们，如下的例子所示：

```plain
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- more tags here -->
</svg>
```

命名空间声明是通过 xmlns attribute 提供的。xmlns 属性意味着这个 \<svg> 标签和它的子节点都属于 `http://www\.w3.org/2000/svg` 这个 SVG 命名空间。注意，这个命名空间声明只需要在根节点上声明一次。这个声明定义了默认的命名空间，所以用户代理知道所有的 \<svg> 标签的子标签也属于相同的命名空间。用户代理如果能识别这个命名空间就决定他们如何处理这个标记。

请注意，命名空间仅仅只是一些字符串，所以 SVG 上那些看起来像 URI 的命名空间并不重要。因为 URIs 的唯一性从而被广泛使用，它的本意并不是要“链接”到某个地址。（实际上 URIs 被如此频繁地使用是“命名空间 URI"普遍使用而不是”命名空间的名字“被使用。）

#### 重新定义默认命名空间

如果根节点的所有子节点也被定义为默认命名空间，那么你如何混合使用另一种命名空间呢？很简单，你仅仅只需重新定义默认命名空间即可。这里是一个简单的例子。

```plain
<html xmlns="http://www.w3.org/1999/xhtml">
  <body>
    <!-- 在这里放置一些 XHTML 标签 -->
    <svg xmlns="http://www.w3.org/2000/svg" width="300px" height="200px">
      <!-- 在这里放置一些 SVG 标签 -->
    </svg>
    <!-- 在这里放置一些 XHTML 标签 -->
  </body>
</html>
```

在这个例子中根节点`<html>` 的 `xmlns` 属性定义了 XHTML 为默认命名空间。结果就是它和它所有的子节标签，除了 `<svg>` 标签，都被用户代理解释为属于 XHTML 命名空间。 `<svg>` 标签拥有它自己的`xmlns`属性，通过重新定义默认的命名空间，告诉用户代理 `<svg>` 标签以及他所包含的标签（除非他们也重新定义了默认名称空间）属于 SVG.

看到没，命名空间其实没有那么难以理解。

#### Declaring namespace prefixes

XML dialects not only define their own tags, but also their own attributes. By default, attributes don't have a namespace at all, and are only known to be unique because they appear on an element that itself has a unique name. However, sometimes it is necessary to define attributes so that they can be reused on many different elements and still be considered to be the same attribute, independently of the element with which they are used. A very good example of this is the `href` attribute defined by the XLink specification. This attribute is commonly used by other XML dialects as a means to link to external resources. But how do you tell the user agent which dialect the attribute belongs to, in this case XLink? Consider the following example.

```plain
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/ecmascript"/>
</svg>
```

This example has the rather unusual looking attribute `xmlns:xlink`. As you may guess from the first 'xmlns' part, this is another namespace declaration. However, instead of setting the default namespace, this namespace declaration sets the namespace for something called a "namespace prefix". In this case, we have chosen to use the prefix `xlink` (the second part) since the prefix will be used to tell the user agent about attributes that belong to XLink.

As their name suggests, namespace prefixes are used to prefix attribute names and tag names. This is done by putting the namespace prefix and a colon before the attribute name as shown on the `<script>` tag in the example above. This tells the user agent that that particular attribute belongs to the namespace assigned to the namespace prefix (XLink), and is an attribute that can be used with the same meaning on other tags.

Note that it is an XML error to use a prefix that hasn't been bound to a namespace name. The binding created by the `xmlns:xlink` attribute in the example above is absolutely essential if the `xlink:href` attribute isn't to cause an error. This XLink attribute is also frequently used in SVG on the `<a>`, `<use>` and `<image>` tags among others, so it's a good idea to always include the XLink declaration in your documents.

As an aside, it's useful to know that namespace prefixes can also be used for tag names. This tells the user agent that that particular tag (but not its children this time!) belongs to the namespace assigned to the prefix. Knowing this will save you some confusion if you come across markup like that in the following example:

```plain
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>SVG embedded inline in XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000"/>
    </svg:svg>
  </body>
</html>
```

Note that because a namespace prefix is used for the `<svg:svg>` tag and its child `<svg:circle>`, it wasn't necessary to redeclare the default namespace. In general though it is better to redeclare the default namespace rather than prefix lots of tags in this way.

### Scripting in namespaced XML

Namespaces affect not only markup, but also scripting. If you write scripts for namespaced XML such as SVG, read on.

The [DOM Level 1](http://www.w3.org/TR/REC-DOM-Level-1/) recommendation was created before the [original Namespaces in XML](http://www.w3.org/TR/REC-xml-names/) recommendation was released; therefore, DOM1 isn't namespace aware. This causes problems for namespaced XML such as SVG. To resolve these problems, [DOM Level 2 Core](http://www.w3.org/TR/DOM-Level-2-Core/) added namespace aware equivalents of all the applicable DOM Level 1 methods. When scripting SVG, [it is important to use the namespace aware methods](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations). The table below lists the DOM1 methods that shouldn't be used in SVG, along with their equivalent DOM2 counterparts that should be used instead.

| DOM1 (don't use)                                                                                             | DOM2 (use these instead!)                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [createAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute)           | [createAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS)                                                                                            |
| [createElement](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement)               | [createElementNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)                                                                                                |
| [getAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode)         | [getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)                                                                                         |
| [getAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute)                 | [getAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)                                                                                               |
| [getElementsByTagName](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName) | [getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS) (also [added to Element](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)) |
| [getNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem)                 | [getNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS)                                                                                            |
| [hasAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#)                                    | [hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)                                                                                               |
| [removeAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute)           | [removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)                                                                                              |
| [removeNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem)           | [removeNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS)                                                                                      |
| [setAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute)                 | [setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)                                                                                               |
| [setAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)         | [setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)                                                                                         |
| [setNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem)                 | [setNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS)                                                                                            |

The first argument for all the DOM2 namespace aware methods must be the namespace name (also known as the namespace URI) of the element or attribute in question. For SVG **elements** this is `http://www.w3.org/2000/svg`. However, note carefully: the [Namespaces in XML 1.1](http://www.w3.org/TR/xml-names11/#defaulting) recommendation states that the namespace name for attributes without a prefix does not have a value. In other words, although the attributes belong to the namespace of the tag, you do not use the tag's namespace name. Instead, **you must use null as the namespace name for unqualified (prefixless) attributes**. So, to create an SVG `rect` _element_ using `document.createElementNS()`, you must write:

```plain
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

But to retrieve the value of the `x` _attribute_ on an SVG `rect` element, you must write:

```plain
rect.getAttributeNS(null, 'x');
```

Note that this isn't the case for attributes _with_ a namespace prefix (attributes that don't belong to the same XML dialect as the tag). Attributes such as the `xlink:href` attribute require the namespace name that was assigned to that prefix (`http://www.w3.org/1999/xlink` for XLink). Hence to get the value of the `xlink:href` attribute of an `<a>` element in SVG you would write:

```plain
elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
```

For setting attributes that have a namespace, it is recommended (but not required) that you also include their prefix in the second argument so that the DOM can later be more easily converted back to XML (if for instance you want to send it back to the server). For example:

```plain
elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');
```

As a final example, here's a demonstration of how you should dynamically create an `<image>` element using script:

```plain
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
```

### Conclusion

Make sure you always declare the namespaces you use in your XML files. If you don't, user agents such as Firefox won't recognize your content and will simply show the XML markup or inform the user that there's an error in the XML. It's a good idea to use a template that includes all the commonly used namespace declarations when creating new SVG files. If you don't already have one, make one up starting with the following code:

```plain
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events">
</svg>
```

Even if you don't use all those namespaces in a particular document, there's no harm in including the namespace declarations. It may save you from some annoying errors if you end up adding content from one of the unused namespaces at a later date.

### A full example

For a full example see [SVG: Namespaces Crash Course: Example](/zh-CN/docs/Web/SVG/Namespaces_Crash_Course/Example).
