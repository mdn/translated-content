---
title: Introduction to using XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
---

该篇文档描述了如何在扩展和网站内部通过 JavaScript 调用 [XPath](/zh-CN/XPath) 接口。Mozilla 实现了相当多的 [DOM 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html)，意味着 Xpath 表达式已经可以在 HTML 和 XML 文档中使用。

使用 XPath 的主要接口是 [document](/zh-CN/DOM/document) 对象的 [evaluate](/zh-CN/DOM/document.evaluate) 方法。

## document.evaluate

此方法针对基于 [XML](/zh-CN/docs/Glossary/XML) 的文档（包括 HTML 文档）评估 XPath 表达式，并返回 [XPathResult](/zh-CN/docs/XPathResult) 对象，该对象可以是单个节点或一组节点。这个方法的现有文档位于 [document.evaluate](/zh-CN/docs/Web/API/Document.evaluate)，但是对于我们现在的需求来说它相当稀疏；下面将给出更全面的研究。

```js
var xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### 参数

[evaluate](/zh-CN/docs/Web/API/Document.evaluate) 函数共有五个参数：

- `xpathExpression`：包含要评估的 XPath 表达式的字符串。
- `contextNode`：应评估 `xpathExpression` 的文档中的节点，包括其任何和所有子节点。document 节点是最常用的。
- `namespaceResolver`：将传递包含在 `xpathExpression` 中的任何命名空间前缀的函数，它返回一个表示与该前缀关联的命名空间 URI 的字符串。这使得能够在 XPath 表达式中使用的前缀和文档中使用的可能不同的前缀之间进行转换。该转换函数可以是：

  - 使用 [`XPathEvaluator`](/zh-CN/docs/Using_XPath#Node-specific_evaluator_function) 对象的 [`createNSResolver`](/zh-CN/docs/Web/API/Document.createNSResolver) 方法[创建](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Implementing_a_Default_Namespace_Resolver)。
  - `null`。其可以用于 HTML 文档或者当不使用命名空间前缀时。注意，如果 `xpathExpression` 包含命名空间前缀，这将导致一个带有 `NAMESPACE_ERR` 的 `DOMException` 抛出。
  - 用户定义的函数。有关详细信息，请参阅附录中的 [使用一个用户定义的命名空间解析器](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Implementing_a_User_Defined_Namespace_Resolver) 部分。

- `resultType`：指定作为评估结果返回的所需结果类型的[常数](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#XPathResult_Defined_Constants)。最常传递的常量是 `XPathResult.ANY_TYPE`，它将返回 XPath 表达式的结果作为最自然的类型。附录中有一个部分，其中包含[可用常数](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#XPathResult_Defined_Constants)的完整列表。它们在下面“[指定返回类型](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Specifying_the_Return_Type)”部分中进行解释。
- `result`：如果指定了现有的 `XPathResult` 对象，它将被重用以返回结果。指定 `null` 将创建一个新的 `XPathResult` 对象。

### 返回值

返回 `xpathResult`，它是 `resultType` 参数中[指定的](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Specifying_the_Return_Type)类型的 `XPathResult` 对象。`XPathResult` 在[这里](http://mxr.mozilla.org/mozilla-central/source/dom/interfaces/xpath/nsIDOMXPathResult.idl)定义。

### 实现默认的命名空间解析器

我们使用 document 对象的 `createNSResolver` 方法创建一个命名空间解析器。

```js
var nsResolver = document.createNSResolver(
  contextNode.ownerDocument == null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement,
);
```

或者，也可以使用 `XPathEvaluator` 对象的 `createNSResolver` 方法。

```js
var xpEvaluator = new XPathEvaluator();
var nsResolver = xpEvaluator.createNSResolver(
  contextNode.ownerDocument == null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement,
);
```

然后传递 `document.evaluate`，将 `nsResolver` 变量作为 `namespaceResolver` 参数。

注意：XPath 定义不带前缀的 QNames，以仅匹配 null 命名空间中的元素。XPath 没有办法选择应用于常规元素引用的默认命名空间（例如，`p[@id='_myid']` 对应于 `xmlns='http://www.w3.org/1999/xhtml'`）。要匹配非命名空间中的默认元素，您必须使用如 `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_id']`（[这种方法](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Using_XPath_functions_to_reference_elements_with_a_default_namespace)适用于命名空间未知的动态 XPath），或者使用前缀名测试，并创建一个命名空间解析器将前缀映射到命名空间。如果你想采取后一种方法，阅读更多关于[如何创建一个用户定义的命名空间解析器](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Implementing_a_User_Defined_Namespace_Resolver)。

### 注意

适应任何 DOM 节点以解析命名空间，以便可以相对于文档中出现的节点的上下文轻松地评估 XPath 表达式。此适配器的工作方式类似于 DOM 级别 3 方法 `lookupNamespaceURI` 在解析 `namespaceuRI` 时节点的层次结构中的可用的当前信息的节点。也正确解析了隐式 `xml` 前缀。

### 指定返回类型

`document.evaluate` 返回的变量 `xpathResult` 可以由单个节点（[简单类型](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Simple_Types)）或节点集合（[节点集类型](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Node-Set_Types)）组成。

#### 简单类型

当 `resultType` 中的所需结果类型指定为：

- `NUMBER_TYPE` - a double
- `STRING_TYPE` - a string
- `BOOLEAN_TYPE` - a boolean

我们通过分别访问 `XPathResult` 对象的以下属性来获取表达式的返回值。

- `numberValue`
- `stringValue`
- `booleanValue`

##### 示例

以下使用 XPath 表达式 [`count(//p)`](/zh-CN/docs/XPath/Functions/count) 来获取 HTML 文档中的 `<p>` 元素数：

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

alert(
  "This document contains " +
    paragraphCount.numberValue +
    " paragraph elements",
);
```

虽然 JavaScript 允许我们将数字转换为一个字符串进行显示，但 XPath 接口不会自动转换数字结果，如果 `stringValue` 属性被请求，所以下面的代码将**不**工作：

```js
var paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

alert(
  "This document contains " +
    paragraphCount.stringValue +
    " paragraph elements",
);
```

相反，它将返回一个带有 `NS_DOM_TYPE_ERROR` 的异常。

#### 节点集类型

`XPathResult` 对象允许以 3 种主要不同类型返回节点集：

- [Iterators](#Iterators)
- [Snapshots](#Snapshots)
- [First Nodes](#First_Node)

##### Iterators

当 `resultType` 参数中的指定结果类型为：

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

返回的 `XPathResult` 对象是一个匹配节点的节点集，它将作为迭代器，允许我们使用 `XPathResult` 的 `iterateNext()` 方法访问包含的各个节点。

一旦迭代完成所有的匹配节点，`iterateNext()` 将返回 `null`。

但请注意，如果在迭代过程中，文档发生突变（文档树被修改），将使迭代无效，并且 `XPathResult` 的 `invalidIteratorState` 属性设置为 `true`，抛出 `NS_ERROR_DOM_INVALID_STATE_ERR` 异常。

```js
var iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    alert(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  dump("Error: Document tree modified during iteration " + e);
}
```

##### Snapshots

当 `resultType` 参数中的指定结果类型为：

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

返回的 `XPathResult` 对象是一个匹配节点的静态节点集，这允许我们通过 `XPathResult` 对象的 `snapshotItem(itemNumber)` 方法访问每个节点，其中 `itemNumber` 是要检索的节点的索引。包含的节点总数可以通过 `snapshotLength` 属性访问。

快照不随文档突变而改变，因此与迭代器不同，快照不会变得无效，但是它可能不对应于当前文档，例如节点可能已被移动，它可能包含不再存在的节点，或新节点可能已添加。

```js
var nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
  dump(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### First Node

当 `resultType` 参数中的指定结果类型为：

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

返回的 `XPathResult` 对象只是匹配 XPath 表达式的第一个找到的节点。这可以通过 `XPathResult` 对象的 `singleNodeValue` 属性访问。如果节点集为空，这将为 `null`。

请注意，对于无序子类型，返回的单个节点可能不是文档顺序中的第一个，但是对于有序子类型，保证以文档顺序获取第一个匹配的节点。

```js
var firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

dump(
  "The first phone number found is " +
    firstPhoneNumber.singleNodeValue.textContent,
);
```

#### ANY_TYPE 常量

当 `resultType` 参数中的结果类型指定为 `ANY_TYPE` 时，返回的 `XPathResult` 对象将是由表达式求值自然产生的任何类型。

它可以是任何简单类型（`NUMBER_TYPE`，`STRING_TYPE`，`BOOLEAN_TYPE` ），**但**如果返回的结果类型是节点集，那么它将**只**是一个 `UNORDERED_NODE_ITERATOR_TYPE`。

要在评估后确定类型，我们使用 `XPathResult` 对象的 `resultType` 属性。此属性的[常量](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#XPathResult_Defined_Constants)值在附录中定义。None Yet =====Any_Type Example===== \<pre> \</pre>

## 示例

### 在 HTML 文档中

以下代码旨在放置在要针对其评估 XPath 表达式的 HTML 文档中内嵌或外链的任何 JavaScript 片段中。

要使用 XPath 提取 HTML 文档中的所有 `<h2>` 标题元素，`xpathExpression` 只是 `//h2`。其中，`//` 是递归下降运算符，在文档树中的任何位置将元素与 nodeName `h2` 相匹配。这个的完整代码是：link to introductory xpath doc

```js
var headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

请注意，由于 HTML 没有命名空间，因此我们为 `namespaceResolver` 参数传递了 `null`。

因为希望在整个文档中搜索标题，所以我们使用 document 对象本身作为 `contextNode`。

此表达式的结果是 `XPathResult` 对象。如果想知道返回的结果的类型，我们可以评估返回的对象的 `resultType` 属性。在这种情况下，这将评估为 `4`，即 `UNORDERED_NODE_ITERATOR_TYPE`。这是 XPath 表达式的结果是节点集时的默认返回类型。它一次提供对单个节点的访问，并且可能不以特定顺序返回节点。要访问返回的节点，我们使用返回对象的 `iterateNext()` 方法：

```js
var thisHeading = headings.iterateNext();

var alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
```

一旦迭代到一个节点，我们就可以访问该节点上的所有标准 DOM 接口。在遍历从表达式返回的所有 `h2` 元素之后，对 `iterateNext()` 的任何进一步调用都将返回 `null` 。

### 针对扩展中的 XML 文档进行评估

以下使用位于 [chrome://yourextension/content/peopleDB.xml]() 的 XML 文档作为示例。

```xml
<?xml version="1.0"?>
<people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" >
  <person>
  <name first="george" last="bush" />
  <address street="1600 pennsylvania avenue" city="washington" country="usa"/>
  <phoneNumber>202-456-1111</phoneNumber>
  </person>
  <person>
  <name first="tony" last="blair" />
  <address street="10 downing street" city="london" country="uk"/>
  <phoneNumber>020 7925 0918</phoneNumber>
  </person>
</people>
```

为了使 XML 文档的内容在扩展中可用，我们创建一个 [`XMLHttpRequest`](/zh-CN/docs/Web/API/XMLHttpRequest) 对象以同步加载文档，变量 `xmlDoc` 将包含该文档作为 [`XMLDocument`](/zh-CN/docs/Web/API/XMLDocument) 对象，我们可以使用 `evaluate` 方法。

JavaScript 用于扩展 xul/js 文档。

```js
var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver(
  xmlDoc.ownerDocument == null
    ? xmlDoc.documentElement
    : xmlDoc.ownerDocument.documentElement,
);

var personIterator = xmlDoc.evaluate(
  "//person",
  xmlDoc,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### 注意

当未定义 XPathResult 对象时，可以使用 `Components.interfaces.nsIDOMXPathResult.ANY_TYPE` (`CI.nsIDOMXPathResult`) 在特权代码中检索常量。类似地，可以使用以下创建 XPathEvaluator：

```js
Components.classes["@mozilla.org/dom/xpath-evaluator;1"].createInstance(
  Components.interfaces.nsIDOMXPathEvaluator,
);
```

## 附录

#### 实现用户定义的命名空间解析器

这只是一个例子。此函数将需要从 `xpathExpression` 获取命名空间前缀，并返回与该前缀对应的 URI。例如，表达式：

```
'//xhtml:td/mathml:math'
```

将选择作为 (X)HTML 表数据单元元素的子项的所有 [MathML](/zh-CN/docs/Web/API/MathML) 表达式。

为了将使用命名空间 URI `http://www.w3.org/1998/Math/MathML` 的 `mathml:` 前缀和使用 URI `http://www.w3.org/1999/xhtml` 的 `xhtml:` 关联，我们提供了一个函数：

```js
function nsResolver(prefix) {
  var ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

我们对 `document.evaluate` 的调用将如下所示：

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

#### 为 XML 文档实现默认命名空间

如前面[实现默认命名空间解析器](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript#Implementing_a_Default_Namespace_Resolver)中所述，默认解析器不处理 XML 文档的默认命名空间。例如使用本文档：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` 将返回一个空集，其中 `nsResolver` 是 `createNSResolver` 返回的解析器。传递一个 `null` 解析器再好不过了。

一种可能的解决方法是创建一个自定义解析器，返回正确的默认命名空间（本例中为 Atom 命名空间）。请注意，您仍然必须在 XPath 表达式中使用一些命名空间前缀，以便解析器函数能够将其更改为所需的命名空间。例如：

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

请注意，如果文档使用多个命名空间，则需要更复杂的解析器。

下一节将介绍一种可能更好的方法（并允许不提前知道命名空间）。

#### 使用 XPath 函数引用具有默认命名空间的元素

另一种匹配非空命名空间中的默认的元素的方法（以及对于动态 XPath 表达式很有效，其中命名空间可能未知），涉及使用如 `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']`。这避免了 XPath 查询无法检测到定期标记的元素上的默认命名空间的问题。

#### 获取特定的命名空间元素和属性，而不考虑前缀

如果希望在命名空间（像预期的那样）中提供灵活性，当发现命名空间元素或属性时不一定需要使用特定的前缀，必须使用特殊技术。

虽然可以修改上述部分中的方法来测试命名空间元素，而不管选择的前缀（使用 [`local-name()`](/zh-CN/docs/XPath/Functions/local-name) 结合 [`namespace-uri()`](/zh-CN/docs/XPath/Functions/namespace-uri) 而不是 [`name()`](/zh-CN/docs/XPath/Functions/name)），但是会发生更具挑战性的情况，如果希望在谓词中获取具有特定命名空间属性的元素（假设在 XPath 1.0 中没有与实现无关的变量）。

例如，可能尝试（不正确地）使用 namespaced 属性获取元素，如下所示： `var xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

这可能会无意中抓取一些元素，如果它的一个属性存在，本地名称为 `href`，但它是一个不同的属性，有目标（XLink）命名空间（而不是 `@href`）。

为了使用 XLink `@href` 属性（而不仅限于命名空间解析器中的预定义前缀）精确地抓取元素，可以按如下方式获取它们：

```js
var xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
var thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
var thisitemEl = thislevel.iterateNext();
```

#### XPathResult 定义的常量

<table class="standard-table">
  <thead>
    <tr>
      <td class="header">结果类型定义的常数</td>
      <td class="header">值</td>
      <td class="header">描述</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ANY_TYPE</td>
      <td>0</td>
      <td>
        包含任何类型的结果集，从表达式的评估中自然地产生。注意，如果结果是节点集，则
        UNORDERED_NODE_ITERATOR_TYPE 始终是结果类型。
      </td>
    </tr>
    <tr>
      <td>NUMBER_TYPE</td>
      <td>1</td>
      <td>
        包含单个数字的结果。这非常有用，例如，在 XPath 表达式中使用
        <code>count()</code> 函数。
      </td>
    </tr>
    <tr>
      <td>STRING_TYPE</td>
      <td>2</td>
      <td>包含单个字符串的结果。</td>
    </tr>
    <tr>
      <td>BOOLEAN_TYPE</td>
      <td>3</td>
      <td>
        包含单个布尔值的结果。这非常有用，例如，在 XPath 表达式中使用
        <code>not()</code> 函数。
      </td>
    </tr>
    <tr>
      <td>UNORDERED_NODE_ITERATOR_TYPE</td>
      <td>4</td>
      <td>
        包含与表达式匹配的所有节点的结果节点集。节点可能不一定与它们在文档中出现的顺序相同。
      </td>
    </tr>
    <tr>
      <td>ORDERED_NODE_ITERATOR_TYPE</td>
      <td>5</td>
      <td>
        包含与表达式匹配的所有节点的结果节点集。结果集中的节点与文档中显示的节点顺序相同。
      </td>
    </tr>
    <tr>
      <td>UNORDERED_NODE_SNAPSHOT_TYPE</td>
      <td>6</td>
      <td>
        包含与表达式匹配的所有节点的快照的结果节点集。节点可能不一定与它们在文档中出现的顺序相同。
      </td>
    </tr>
    <tr>
      <td>ORDERED_NODE_SNAPSHOT_TYPE</td>
      <td>7</td>
      <td>
        包含与表达式匹配的所有节点的快照的结果节点集。结果集中的节点与文档中显示的节点顺序相同。
      </td>
    </tr>
    <tr>
      <td>ANY_UNORDERED_NODE_TYPE</td>
      <td>8</td>
      <td>
        包含与表达式匹配的任何单个节点的结果节点集。该节点不一定是文档中与表达式匹配的第一个节点。
      </td>
    </tr>
    <tr>
      <td>FIRST_ORDERED_NODE_TYPE</td>
      <td>9</td>
      <td>包含文档中与表达式匹配的第一个节点的结果节点集。</td>
    </tr>
  </tbody>
</table>

## 参见

- [Using XPath](/zh-CN/Using_XPath)

## Original Document Information

- Based Upon Original Document [Mozilla XPath Tutorial](http://www-xray.ast.cam.ac.uk/~jgraham/mozilla/xpath-tutorial.html)
- Original Source Author: James Graham.
- Other Contributors: James Thompson.
- Last Updated Date: 2006-3-25.
