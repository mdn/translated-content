---
title: 命名空间速成
slug: Web/SVG/Guides/Namespaces_crash_course
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

作为 [XML](/zh-CN/docs/Glossary/XML) 的一个方言，[SVG](/zh-CN/docs/Web/SVG) 具有命名空间。当你打算制作 SVG 内容时，理解命名空间的概念，以及命名空间如何使用，是很重要的。命名空间对于支持多种 XML 方言来说是必要的；浏览器必须非常严格。现在花一点时间来理解命名空间，这会让你避免以后的各种麻烦。

### 背景

各种 W3C 规范的长期目标是使不同类型的基于 XML 的内容能够混合在同一个 XML 或 HTML 文件中。例如，SVG 和 [MathML](/zh-CN/docs/Web/MathML) 可以直接合并到基于 HTML 的科学文档中。能够像这样混合内容类型有很多优势，但它也需要解决一个非常现实的问题。

自然，每种 XML 方言都定义了其规范中描述的标记元素名称的含义。在单个文档中混合来自不同 XML 方言的内容的问题是，由一种方言定义的元素可能与由另一种方言定义的元素具有相同的名称。例如，HTML 和 SVG 都有一个 `<title>` 元素。用户代理如何区分这两者？CSS 样式如何区分这两者？实际上，用户代理如何判断内容是它知道的东西，而不是无意义的未定义 HTML 自定义元素或包含它不知道的任意元素名称的 XML 文件？

与流行的观点相反，这个问题的答案不是“它可以从 `DOCTYPE` 声明中分辨出来”。在设计 DTD 时从未考虑过混合内容，过去创建混合内容 DTD 的尝试现在被认为是失败的。XML 和一些 XML 方言（包括 SVG 和 HTML）不需要 `DOCTYPE` 声明。SVG 1.2 甚至都没有 DTD。`DOCTYPE` 声明（通常）匹配单个内容类型文件中的内容，这只是巧合。DTD 仅用于验证，而不是标识内容。任何使用 `DOCTYPE` 声明标识 XML 内容的用户代理都是不可靠的。

这个问题的真正答案是，XML 内容通过给元素名称显式的“名称空间声明”来告诉用户代理元素名称属于哪种方言。

### 声明命名空间

所以这些命名空间声明是什么样的呢，并且在什么地方用他们？如下的例子所示：

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <!-- 这里有其他标签 -->
</svg>
```

命名空间声明是通过 `xmlns` 属性提供的。意味着这个 `<svg>` 元素和它的子元素都属于具有 `http://www.w3.org/2000/svg` 这个命名空间的 XML 方言（即，SVG）。注意，命名空间声明只需要在根元素上提供一次（如果省略则会隐含声明）。这个声明定义了*默认*命名空间，所以用户代理知道所有的 `<svg>` 元素的子元素也属于相同的命名空间。用户代理检查是否能识别这个命名空间，以确定如何处理标记。

请注意，命名空间仅仅只是一些字符串，所以 SVG 上那些看起来像 URI 的命名空间并不重要。URI 因其唯一性从而被广泛使用，它的本意并不是要“链接”到某个地址。（实际上 URI 被如此频繁地使用是因为“命名空间 URI”的普遍使用而不是“命名空间的名字”的普遍使用。）

#### 重新定义默认命名空间

如果根元素的所有子元素也被定义为默认命名空间，那么你如何混合使用另一种命名空间呢？要在 HTML 中引入 SVG 命名空间，你应当引入 `<svg>`。在 XML 中，你应当声明一个命名空间。这里有一个简单的例子。

```xml
<report xmlns="https://www.acme.org/reports">
  <title>一些统计数据</title>
  <summary>……</summary>
  <statTable xmlns="https://www.acme.org/tables">
    <content>……</content>
    <!-- 重新声明根节点的命名空间 -->
    <summary xmlns="https://www.acme.org/reports">……</summary>
  </statTable>
</report>
```

在这个例子中根元素 `<report>` 的 `xmlns` 属性定义了 `https://www.acme.org/reports` 或者 `reports` 为默认命名空间。结果就是它和它所有的子元素都被用户代理解释为属于 `reports` 命名空间，除了 `<content>` 元素属于 `https://www.acme.org/tables` 或者 `tables`。`<summary>` 元素拥有它自己的 `xmlns` 属性，通过重新定义 `reports` 命名空间，告诉用户代理 `<summary>` 元素及其子元素（除非它们也重新定义了替代的命名空间）属于 `reports`。

对于 HTML，`http://www.w3.org/1999/xhtml` 是隐含的命名空间。对于 SVG 而言是 `http://www.w3.org/2000/svg`。MathML 是 `http://www.w3.org/1998/Math/MathML`。

#### 声明命名空间前缀

XML 方言不仅定义了自己的元素，而且还定义了自己的属性。

默认情况下，属性根本没有命名空间。属性只有出现在本身就有唯一名称的元素上，才知道是唯一的。然而，有时有必要定义属性，以便它们可以在许多不同的元素上重用，并且仍然被认为是相同的属性，与使用它们的元素无关。{{glossary("XLink")}} 规范定义的 `href` 属性就是一个很好的例子。这个属性通常被其他 XML 方言用作链接外部资源的手段。但是如何告诉用户代理该属性属于哪种方言，在本例中是 `XLink`？考虑下面的例子。

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <script xlink:href="cool-script.js" type="text/javascript" />
</svg>
```

这个例子有一个看起来相当不寻常的属性 `xmlns:xlink`。看到第一部分 `xmlns` 你可能已经猜到了，这是另一个命名空间声明。然而，这个命名空间声明并没有设置默认命名空间，而是为所谓的“[命名空间前缀](/zh-CN/docs/Web/API/CSSNamespaceRule/prefix)”设置了命名空间。在本例中，我们选择使用前缀 `xlink`（第二部分），因为该前缀将用于告诉用户代理属于 `XLink` 的属性。

顾名思义，命名空间前缀用于为属性名称和元素名称添加前缀。这是通过将命名空间前缀和冒号放在属性名称之前来实现的，如上面示例中的 `<script>` 元素所示。这告诉用户代理该特定属性属于分配给名称空间前缀（`XLink`）的名称空间，并且该属性可以在其他元素上以相同的含义使用。

注意，在 XML 中，使用没有绑定到命名空间名称的前缀是一种 XML 错误。如果要避免 `xlink:href` 属性导致错误，上面示例中的 `xmlns:xlink` 属性创建的绑定是绝对必要的。这个 XLink 属性也经常在 SVG 中的 `<a>`、`<use>` 和 `<image>` 等元素上使用，因此在文档中始终包含 XLink 声明是个好主意。

顺便说一句，知道命名空间前缀也可以用于元素名称是很有用的。这告诉用户代理，这个特定的元素（但这次不是它的子元素！）属于分配给前缀的命名空间。如果你在下面的例子中遇到这样的标记，知道这一点将为你减少一些困惑：

```xml
<html
  lang="zh"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:svg="http://www.w3.org/2000/svg">
  <body>
    <h1>内联嵌入到 XHTML 中的 SVG</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000" />
    </svg:svg>
  </body>
</html>
```

> [!NOTE]
> 这是一个 {{Glossary("XHTML")}} 文件，而不是 HTML 文件。在 HTML 中 XML 命名空间是非法的。为了尝试这个例子，你应该把文件保存为 `.xhtml`。

注意，因为 `<svg:svg>` 元素和它的子元素 `<svg:circle>` 使用了命名空间前缀，所以没有必要重新声明默认命名空间。一般来说，重新声明默认命名空间要比以这种方式为大量标签添加前缀要好。

### 有命名空间的 XML 中的脚本

名称空间不仅影响标记，还影响脚本（[甚至 CSS](/zh-CN/docs/Web/CSS/Guides/Namespaces)）。如果你为有命名空间的 XML（如 SVG）编写脚本，请继续阅读。

[DOM 第 1 版](https://www.w3.org/TR/REC-DOM-Level-1/)推荐标准是在[原始 XML 命名空间](https://www.w3.org/TR/REC-xml-names/)推荐标准发布之前创建的；因此，DOM1 不感知命名空间。这给有命名空间的 XML（如 SVG）带来了问题。为了解决这些问题，[DOM 第 2 版 Core](https://www.w3.org/TR/DOM-Level-2-Core/) 为所有适用的 DOM 第 1 版方法添加了感知命名空间的等效方法。在编写 SVG 脚本时，重要的是使用[感知命名空间的方法](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)。下表列出了不应该在 SVG 中使用的 DOM1 方法，以及应该使用的等价 DOM2 方法。

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>DOM1（请勿使用）</th>
      <th>DOM2（使用这些替代！）</th>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Document/createAttribute"
          ><code>createAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Document/createAttributeNS"><code>createAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Document/createElement"
          ><code>createElement()</code></a
        >
      </td>
      <td>
        <a href="/zh-CN/docs/Web/API/Document/createElementNS"><code>createElementNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/getAttributeNode"
          ><code>getAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/getAttributeNodeNS"><code>getAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/getAttribute"
          ><code>getAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/getAttributeNS"><code>getAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Document/getElementsByTagName"
          ><code>getElementsByTagName()</code></a
        >
      </td>
      <td>
        <a href="/zh-CN/docs/Web/API/Document/getElementsByTagNameNS"><code>getElementsByTagNameNS()</code></a
        >（同样<a
          href="/zh-CN/docs/Web/API/Element/getElementsByTagNameNS"
          >添加到元素</a
        >）
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/getNamedItem"
          ><code>getNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/getNamedItemNS"><code>getNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a href="/zh-CN/docs/Web/API/Element/hasAttribute"><code>hasAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/hasAttributeNS"><code>hasAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/removeAttribute"
          ><code>removeAttribute()</code></a
        >
      </td>
      <td>
        <a href="/zh-CN/docs/Web/API/Element/removeAttributeNS"><code>removeAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/removeNamedItem"
          ><code>removeNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/removeNamedItemNS"><code>removeNamedItemNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/setAttribute"
          ><code>setAttribute()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/setAttributeNS"><code>setAttributeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/setAttributeNode"
          ><code>setAttributeNode()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/Element/setAttributeNodeNS"><code>setAttributeNodeNS()</code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/setNamedItem"
          ><code>setNamedItem()</code></a
        >
      </td>
      <td>
        <a
          href="/zh-CN/docs/Web/API/NamedNodeMap/setNamedItemNS"><code>setNamedItemNS()</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

所有 DOM2 命名空间感知方法的第一个参数必须是所述元素或属性的命名空间名称（也称为命名空间 URI）。对于 SVG **元素**，应是 `http://www.w3.org/2000/svg`。但是，请注意：[XML 1.1 中的命名空间](https://www.w3.org/TR/xml-names11/#defaulting)推荐标准指出，没有前缀的属性的命名空间名称没有值。换句话说，虽然属性属于元素的命名空间，但你不使用标签的命名空间名称。相反，**你必须使用 null 作为非限定（无前缀）属性的命名空间名称**。因此，要使用 `document.createElementNS()` 创建一个 SVG `rect` _元素_，你必须这样写：

```js
document.createElementNS("http://www.w3.org/2000/svg", "rect");
```

但是要检索 SVG `rect` 元素上的 `x` *属性*的值，你必须写成：

```js
rect.getAttributeNS(null, "x");
```

注意，对于*有*命名空间前缀的属性（与元素不属于同一种 XML 方言的属性），情况并非如此。像 `xlink:href` 这样的属性需要指定给该前缀的命名空间名称（XLink 为 `http://www.w3.org/1999/xlink`）。因此，要在 SVG 中获取 `<a>` 元素的 `xlink:href` 属性的值，你可以这样写：

```js
elt.getAttributeNS("http://www.w3.org/1999/xlink", "href");
```

对于设置有命名空间的属性，建议（但不是必需的）在第二个参数中也包括它们的前缀，以便将来可以更容易地将 DOM 转换成 XML（例如你想将其发送回服务器）。例如：

```js
elt.setAttributeNS(
  "http://www.w3.org/1999/xlink",
  "xlink:href",
  "other-doc.svg",
);
```

作为最后一个例子，下面是一个使用 JavaScript 动态创建 `<image>` 元素的示范：

```js
const SVG_NS = "http://www.w3.org/2000/svg";
const XLink_NS = "http://www.w3.org/1999/xlink";
const image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### 总结

对于 SVG、HTML 和 MathML，命名空间是隐含的，因此是可选的。对于 XML 文件，命名空间这是需要声明的。如果不这样做，用户代理将无法识别内容，并将显示 XML 标记或通知用户 XML 中有错误。

编写 SVG 时，在创建新文件时使用包含所有常用名称空间声明的模板是很有帮助的。如果你还没有一个，用下面的代码创建一个：

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

即使在特定文档中不使用所有的这些命名空间，包含命名空间声明也没有什么坏处。如果你以后添加未使用的命名空间中的内容，它可能会让你避免一些烦人的错误。

### 完整的示例

完整的示例参见 [SVG：名称空间速成：示例](/zh-CN/docs/Web/SVG/Guides/Namespaces_crash_course/Example)。
