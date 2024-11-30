---
title: 命名空间速成
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

#### 声明命名空间前缀

XML 方言不仅定义了自己的标记，而且还定义了自己的属性。默认情况下，属性根本没有命名空间，属性只有出现在本身就有唯一名称的元素上，才知道是唯一的。然而，有时有必要定义属性，以便它们可以在许多不同的元素上重用，并且仍然被认为是相同的属性，与使用它们的元素无关。XLink 规范定义的 `href` 属性就是一个很好的例子。这个属性通常被其他 XML 方言用作链接外部资源的手段。但是如何告诉用户代理该属性属于哪种方言，在本例中是 XLink？考虑下面的例子。

```plain
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/ecmascript"/>
</svg>
```

这个例子有一个看起来相当不寻常的属性 `xmlns:xlink`。看到第一部分 `xmlns` 你可能已经猜到了，这是另一个命名空间声明。然而，这个命名空间声明并没有设置默认命名空间，而是为所谓的“命名空间前缀”设置了命名空间。在本例中，我们选择使用前缀 `xlink` （第二部分），因为该前缀将用于告诉用户代理属于 XLink 的属性。

顾名思义，命名空间前缀用于为属性名称和标签名称添加前缀。这是通过将命名空间前缀和冒号放在属性名称之前来实现的，如上面示例中的 `<script>` 标签所示。这告诉用户代理该特定属性属于分配给名称空间前缀（XLink）的名称空间，并且该属性可以在其他标记上以相同的含义使用。

注意，使用没有绑定到命名空间名称的前缀是一个 XML 错误。如果要避免 `xlink:href` 属性导致错误，上面示例中的 `xmlns:xlink` 属性创建的绑定是绝对必要的。这个 XLink 属性也经常在 SVG 中的 `<a>`、`<use>` 和 `<image>` 等标签上使用，因此在文档中始终包含 XLink 声明是个好主意。

顺便说一句，知道命名空间前缀也可以用于标签名称是很有用的。这告诉用户代理，这个特定的标记（但这次不是它的子标记！）属于分配给前缀的命名空间。如果你在下面的例子中遇到这样的标记，知道这一点将为你减少一些困惑：

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

注意，因为 `<svg:svg>` 标签和它的子标签 `<svg:circle>` 使用了命名空间前缀，所以没有必要重新声明默认命名空间。一般来说，重新声明默认命名空间要比以这种方式为大量标签添加前缀要好。

### 有命名空间的 XML 中的脚本

名称空间不仅影响标记，还影响脚本。如果你为有命名空间的 XML（如 SVG）编写脚本，请继续阅读。

[DOM  Level  1](http://www.w3.org/TR/REC-DOM-Level-1/) 推荐标准是在 [原始 XML 命名空间](http://www.w3.org/TR/REC-xml-names/) 推荐标准发布之前创建的；因此，DOM1 不感知命名空间。这给有命名空间的 XML（如 SVG）带来了问题。为了解决这些问题，[DOM Level 2 Core](http://www.w3.org/TR/DOM-Level-2-Core/) 为所有适用的 DOM Level 1 方法添加了感知命名空间的等效方法。在编写 SVG 脚本时 ，[重要的是使用感知名称空间的方法](http://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)。下表列出了不应该在 SVG 中使用的 DOM1 方法，以及应该使用的等价 DOM2 方法。

| DOM1 (请勿使用)                                                                                              | DOM2 (使用这些替代！)                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [createAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute)           | [createAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS)                                                                                            |
| [createElement](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement)               | [createElementNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)                                                                                                |
| [getAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode)         | [getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)                                                                                         |
| [getAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute)                 | [getAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)                                                                                               |
| [getElementsByTagName](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName) | [getElementsByTagNameNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS) (同样 [added to Element](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)) |
| [getNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem)                 | [getNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS)                                                                                            |
| [hasAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#)                                    | [hasAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)                                                                                               |
| [removeAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute)           | [removeAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)                                                                                              |
| [removeNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem)           | [removeNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS)                                                                                      |
| [setAttribute](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute)                 | [setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)                                                                                               |
| [setAttributeNode](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)         | [setAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)                                                                                         |
| [setNamedItem](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem)                 | [setNamedItemNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS)                                                                                            |

所有 DOM2 命名空间感知方法的第一个参数必须是所述元素或属性的命名空间名称（也称为命名空间 URI）。对于 SVG **元素** ，应是 `http://www.w3.org/2000/svg`。但是，请注意：[XML 1.1 中的命名空间](http://www.w3.org/TR/xml-names11/#defaulting) 建议规范指出，没有前缀的属性的命名空间名称没有值。换句话说，虽然属性属于标签的命名空间，但你不使用标签的命名空间名称。相反，**你必须使用 null 作为非限定（无前缀）属性的命名空间名称**。因此，要使用 `document.createElementNS()` 创建一个 SVG `rect` _element_ ，你必须这样写：

```plain
document.createElementNS('http://www.w3.org/2000/svg', 'rect');
```

但是要检索 SVG `rect` 元素上的 `x` _attribute_ 的值，你必须写成：

```plain
rect.getAttributeNS(null, 'x');
```

注意，对于 _with_ 命名空间前缀的属性（与标签不属于同一种 XML 方言的属性），情况并非如此。 像 `xlink:href` 这样的属性需要指定给该前缀的命名空间名称（xlink 为 `http://www.w3.org/1999/xlink`）。因此，要在 SVG 中获取 `<a>` 元素的 `xlink:href` 属性的值， 你可以这样写：

```plain
elt.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
```

对于设置有命名空间的属性，建议（但不是必需的）在第二个参数中也包括它们的前缀，以便将来可以更容易地将 DOM 转换成 XML（例如你想将其发送回服务器）。例如:

```plain
elt.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'otherdoc.svg');
```

作为最后一个例子，下面是一个使用脚本动态创建 `<image>` 元素的示范：

```plain
var SVG_NS = 'http://www.w3.org/2000/svg';
var XLink_NS = 'http://www.w3.org/1999/xlink';
var image = document.createElementNS(SVG_NS, 'image');
image.setAttributeNS(null, 'width', '100');
image.setAttributeNS(null, 'height', '100');
image.setAttributeNS(XLink_NS, 'xlink:href', 'flower.png');
```

### 结论

确保你总是声明你在 XML 文件中使用的命名空间。如果你不这样做，像 Firefox 这样的用户代理将无法识别你的内容，并将简单地显示 XML 标记或通知用户 XML 中有错误。在创建新的 SVG 文件时，使用一个包含所有常用命名空间声明的模板是一个好主意。如果你还没有，可以用下面的代码创建一个：

```plain
<svg version="1.1"
     baseProfile="full"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     xmlns:ev="http://www.w3.org/2001/xml-events">
</svg>
```

即使在特定文档中不使用所有的这些命名空间，包含命名空间声明也没有什么坏处。如果你以后添加未使用的命名空间中的内容，它可能会让你避免一些烦人的错误。

### 完整的示例

完整的示例参见 [SVG：名称空间速成：示例](/zh-CN/docs/Web/SVG/Namespaces_Crash_Course/Example)。
