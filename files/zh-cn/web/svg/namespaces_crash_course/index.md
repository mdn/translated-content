---
title: SVG中的命名空间
slug: Web/SVG/Namespaces_Crash_Course
---

{{SVGRef}}

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

<!-- @note The Following Content Was Translated by Yes-Noob -->

#### 声明命名空间前缀

XML的“方言”不仅仅是定义它们自己的标签，而且还要定义它们的属性。默认情况下，属性根本**没有命名空间**，只有当它们出现在本身具有唯一名称的元素上时，我们才知道它们是唯一的。然而，有时我们还需要定义属性，以便它们可以在许多不同的元素上重复使用，并且仍然被视为同一属性，而与使用它们的元素无关。XLink规范定义的“href”属性就是一个很好的例子。该属性通常被其他XML方言用作链接到外部资源的手段。但是如何告诉用户代理（如Firefox）属性属于哪种“方言”（如XLink）？请看以下示例：

```plain
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/ecmascript"/>
</svg>
```

这个例子有一个特殊的属性 `xmlns:xlink`。你或许可以从`xmlns`中推断出意思：这是另一种命名空间声明。除了作为设置默认命名空间的一个替代方案，这种命名空间声明使用了添加“前缀”的方式。这个例子里，我们选择了使用前缀`xlink`，这个前缀将告诉用户代理（浏览器）关于属于XLink的属性。

顾名思义，命名空间前缀用于给属性名和标签名加前缀。我们给标签或者属性前面加上在代码上面展示前缀和冒号`:`来完成这件事，就像上面例子中的`<script>`标记所示。这告诉浏览器，一个属于这个命名空间的特殊属性分配在了这个命名空间前缀中（即XLink）中，而且与其他标签有相同的意义。

值得注意的是，使用没有绑定命名空间的前缀在XML里是一个错误。如果`xlink:href`属性不会导致错误，那么上面示例中由`xmlns:xlink`属性创建的绑定是必需的。XLink属性也是经常在SVG中的`<a>`，`<use`，`<image>`等等标签里使用。因此，最好始终在文档中包含XLink声明。

题外话，知道名称空间前缀可以用于标记名是非常有用的。这告诉用户代理该特定标记（**但这次不是它的子标记**）属于分配给前缀的名称空间。如果您在以下示例中遇到这样的标记，了解这一点将为你省去一些困惑：

```html
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

因为有了名称空间前缀用于`<svg:svg>`标记及其子标记`<svg:circle>`，我们无需重新声明默认名称空间。不过，通常情况下，重新声明默认名称空间比以这种方式为许多标记加前缀要好一些。

### 使用带有命名空间的XML

命名空间不仅对标记有影响，还可以影响代码。如果你编写诸如SVG这样的带有命名空间的代码，请看。

[一级DOM](http://www.w3.org/TR/REC-DOM-Level-1/) 正式提议被创建于[original Namespaces in XML](http://www.w3.org/TR/REC-xml-names/) 提议被发布之前。因此，DOM1不是一个实际的命名空间。这导致了有SVG之类的有命名空间的XML。为了解决这些问题，[核心二级DOM](http://www.w3.org/TR/DOM-Level-2-Core/)增加了所有适用的DOM Level 1方法的命名空间等价物。当敲SVG代码的时候，[使用实际的命名空间方法是很重要的](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)。不说那么多，下表列出了不应在SVG中使用的DOM1方法，以及应使用的等效DOM2方法。

> 译者注：原文有点难翻，English: The [DOM Level 1](http://www.w3.org/TR/REC-DOM-Level-1/) recommendation was created before the [original Namespaces in XML](http://www.w3.org/TR/REC-xml-names/) recommendation was released; therefore, DOM1 isn't namespace aware. This causes problems for namespaced XML such as SVG. To resolve these problems, [DOM Level 2 Core](http://www.w3.org/TR/DOM-Level-2-Core/) added namespace aware equivalents of all the applicable DOM Level 1 methods. When scripting SVG, [it is important to use the namespace aware methods](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations). The table below lists the DOM1 methods that shouldn't be used in SVG, along with their equivalent DOM2 counterparts that should be used instead.

| DOM1 (不要用这些)                                                                                             | DOM2 (用这些)                                                                                                                                                      |
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

所有DOM2命名空间内方法第一个参数必须是这个元素的命名空间名称（又称命名空间URI）或者问题里的属性。对于SVG **元素**这始终是`http://www.w3.org/2000/svg`。然而请注意，[XML 1.1的命名空间](http://www.w3.org/TR/xml-names11/#defaulting)正式标准规定没有前缀的属性命名空间名就没有意义。换句话说，尽管属性属于标记的名称空间，但不使用标记的名称名称空间名称。相反，**必须使用null作为不合格（无前缀）属性的命名空间名称**。所以，为了使用 `document.createElementNS()`方法创建一个SVG `rect` 元素，你必须写：

```javascript
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

不过为了在SVG `rect`元素里得到 **属性** x的值，必须这样写：

```javascript
rect.getAttributeNS(null, 'x');
```

请注意，对于带有名称空间前缀的属性（与标记不属于同一XML方言的属性），情况并非如此。诸如`xlink:href`属性之类的属性需要分配给该前缀的命名空间名称。因此，要获得SVG中`<a>`元素的`xlink:href`属性的值，你需要这样写：

```javascript
elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
```

为了设置一个带有命名空间的属性，推荐（但不是必须）你仍然在第二个参数中包含它们的前缀，DOM之后可以更轻松地转换回xml（如果你想把实例发回服务器），比如（注意第二个参数）：

```javascript
elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');
```

再提供一个例子，讲述一下应该如何用js动态创建一个`<image>`元素。

```javascript
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
```

### 最后

请确保你总是在XML文件中声明一个命名空间，不然的话，像Firefox这类的用户代理无法辨认你的XML文件内容，然后直接展示纯XML文本或者提醒用户XML里有一个错误。当创建SVG时，使用一个包含所有普遍使用的的命名空间声明的模版字符串。如果你没有的话，就写一个像这样开头的XML代码吧：

```xml
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events">
</svg>
```

即使你在某些特别的文档里不用全部的这些命名空间，包含命名空间声明也没什么坏处。如果你在以后添加未使用的名称空间中的内容，它甚至可能帮你避免令人讨厌的bug。

### 参见

查看所有例子参见： [SVG: Namespaces Crash Course: Example](/zh-CN/docs/Web/SVG/Namespaces_Crash_Course/Example).
