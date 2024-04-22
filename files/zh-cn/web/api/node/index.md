---
title: Node
slug: Web/API/Node
---

{{APIRef("DOM")}}

**`Node`** 是一个接口，各种类型的 DOM API 对象会从这个接口继承。它允许我们使用相似的方式对待这些不同类型的对象；比如，继承同一组方法，或者用同样的方式测试。

以下接口都从 `Node` 继承其方法和属性：

{{DOMxRef("Document")}}, {{DOMxRef("Element")}}, {{DOMxRef("Attr")}}, {{DOMxRef("CharacterData")}} (which {{DOMxRef("Text")}}, {{DOMxRef("Comment")}}, and {{DOMxRef("CDATASection")}} inherit), {{DOMxRef("ProcessingInstruction")}}, {{DOMxRef("DocumentFragment")}}, {{DOMxRef("DocumentType")}}, {{DOMxRef("Notation")}}, {{DOMxRef("Entity")}}, {{DOMxRef("EntityReference")}}

在方法和属性不相关的特定情况下，这些接口可能返回 `null`。它们可能会抛出异常 - 例如，当将子节点添加到不允许子节点存在的节点时。

{{InheritanceDiagram}}

## 属性

从其父类型 _{{DOMxRef("EventTarget")}}_\[1] 继承属性。

- {{DOMxRef("Node.baseURI")}}{{ReadOnlyInline}}
  - : 返回一个表示 base URL 的{{DOMxRef("DOMString")}}。不同语言中的 base URL 的概念都不一样。在 HTML 中，base URL 表示协议和域名，以及一直到最后一个'/'之前的文件目录。
- {{DOMxRef("Node.baseURIObject")}} {{Non-standard_inline}}
  - : (不适用于网页内容) 只读的 `nsIURI` 对象表示元素的 base URI.
- {{DOMxRef("Node.childNodes")}}{{ReadOnlyInline}}
  - : 返回一个包含了该节点所有子节点的实时的{{DOMxRef("NodeList")}}。{{DOMxRef("NodeList")}} 是动态变化的。如果该节点的子节点发生了变化，{{DOMxRef("NodeList")}}对象就会自动更新。
- {{DOMxRef("Node.firstChild")}} {{ReadonlyInline}}
  - : 返回该节点的第一个子节点{{DOMxRef("Node")}}，如果该节点没有子节点则返回`null`。
- {{DOMxRef("Node.isConnected")}}{{ReadOnlyInline}}
  - : 返回一个布尔值用来检测该节点是否已连接 (直接或者间接) 到一个上下文对象上，比如通常 DOM 情况下的{{DOMxRef("Document")}}对象，或者在 shadow DOM 情况下的{{DOMxRef("ShadowRoot")}}对象。
- {{DOMxRef("Node.lastChild")}} {{ReadonlyInline}}
  - : 返回该节点的最后一个子节点{{DOMxRef("Node")}}，如果该节点没有子节点则返回`null`。
- {{DOMxRef("Node.nextSibling")}} {{ReadonlyInline}}
  - : 返回与该节点同级的下一个节点 {{DOMxRef("Node")}}，如果没有返回`null`。
- {{DOMxRef("Node.nodeName")}} {{ReadonlyInline}}
  - : 返回一个包含该节点名字的{{DOMxRef("DOMString")}}。节点的名字的结构和节点类型不同。比如{{DOMxRef("HTMLElement")}}的名字跟它所关联的标签对应，就比如{{DOMxRef("HTMLAudioElement")}}的就是 `'audio'` ，{{DOMxRef("Text")}}节点对应的是 `'#text'` 还有{{DOMxRef("Document")}}节点对应的是 `'#document'`。
- {{DOMxRef("Node.nodeType")}}{{ReadonlyInline}}

  - : 返回一个与该节点类型对应的`无符号短整型`的值，可能的值如下：

    | Name                                          | Value |
    | --------------------------------------------- | ----- |
    | `ELEMENT_NODE`                                | `1`   |
    | `ATTRIBUTE_NODE` {{Deprecated_Inline}}        | `2`   |
    | `TEXT_NODE`                                   | `3`   |
    | `CDATA_SECTION_NODE`                          | `4`   |
    | `ENTITY_REFERENCE_NODE` {{Deprecated_Inline}} | `5`   |
    | `ENTITY_NODE` {{Deprecated_Inline}}           | `6`   |
    | `PROCESSING_INSTRUCTION_NODE`                 | `7`   |
    | `COMMENT_NODE`                                | `8`   |
    | `DOCUMENT_NODE`                               | `9`   |
    | `DOCUMENT_TYPE_NODE`                          | `10`  |
    | `DOCUMENT_FRAGMENT_NODE`                      | `11`  |
    | `NOTATION_NODE` {{Deprecated_Inline}}         | `12`  |

- {{DOMxRef("Node.nodeValue")}}
  - : 返回或设置当前节点的值。
- {{DOMxRef("Node.ownerDocument")}} {{readonlyInline}}
  - : 返回这个元素属于的 {{DOMxRef("Document")}}对象。如果没有 Document 对象与之关联，返回 null。
- {{DOMxRef("Node.parentNode")}} {{readonlyInline}}
  - : 返回一个当前节点 {{DOMxRef("Node")}}的父节点。如果没有这样的节点，比如说像这个节点是树结构的顶端或者没有插入一棵树中，这个属性返回 null。
- {{DOMxRef("Node.parentElement")}} {{readonlyInline}}
  - : 返回一个当前节点的父节点 {{DOMxRef("Element")}} 。如果当前节点没有父节点或者说父节点不是一个元素 ({{DOMxRef("Element")}}), 这个属性返回 null。
- {{DOMxRef("Node.previousSibling")}} {{readonlyInline}}
  - : 返回一个当前节点同辈的前一个节点 ( {{DOMxRef("Node")}}) ，或者返回 null（如果不存在这样的一个节点的话）。
- {{DOMxRef("Node.textContent")}}
  - : 返回或设置一个元素内所有子节点及其后代的文本内容。

### 废弃的属性

- {{DOMxRef("Node.localName")}} {{Deprecated_Inline}}{{readonlyInline}}

  - : 返回一个表示元素名称的本土化表示方法的 {{DOMxRef("DOMString")}} 。

    > **备注：** 在 Firefox 3.5 以及更早的版本中，HTML 元素的 localName 属性的返回值都是大写的（XHTML 例外）。在后续版本中，这种情况就不存在了。无论是 HTML 还是 XHTML 中，均返回小写的 localName。

- {{DOMxRef("Node.namespaceURI")}} {{Deprecated_Inline}}{{readonlyInline}}

  - : 该节点命名空间的`URL`，如果没有命名空间则为`null`。

    > **备注：** 在 Firefox 3.5 以及更早的版本中，HTML 的元素都没有命名空间。而在最新的版本中，无论是 HTML 还是 XML 文档树，所有元素的命名空间统一为 [`http://www.w3.org/1999/xhtml/`](https://www.w3.org/1999/xhtml/)。

- {{DOMxRef("Node.nodePrincipal")}} {{Non-standard_inline}}{{Deprecated_Inline}}
  - : 返回节点优先级 `nsIPrincipal` 。
- {{DOMxRef("Node.prefix")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : 返回一个节点命名空间的前缀 {{DOMxRef("DOMString")}} , 当前缀不存在时返回 `null` 。
- {{DOMxRef("Node.rootNode")}} {{Deprecated_Inline}}{{ReadOnlyInline}}
  - : 返回一个 DOM 树中顶层节点的 {{DOMxRef("Node")}} 对象，如果顶层节点不 DOM 树中，则返回当前节点。该属性已被 {{DOMxRef("Node.getRootNode()")}} 方法所代替。

## 方法

从其父类型 _{{DOMxRef("EventTarget")}}_\[1] 继承方法。

- {{DOMxRef("Node.appendChild()")}}
  - : 将指定的 childNode 参数作为最后一个子节点添加到当前节点。
    如果参数引用了 DOM 树上的现有节点，则节点将从当前位置分离，并附加到新位置。
- {{DOMxRef("Node.cloneNode()")}}
  - : 克隆一个 {{DOMxRef("Node")}}，并且可以选择是否克隆这个节点下的所有内容。默认情况下，节点下的内容会被克隆。
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : 比较当前节点与文档中的另一节点的位置。
- {{DOMxRef("Node.contains()")}}
  - : 返回一个 {{jsxref("Boolean")}} 布尔值，来表示传入的节点是否为该节点的后代节点。
- {{DOMxRef("Node.getRootNode()")}}
  - : 返回上下文对象的根节点。如果 shadow root 节点存在的话，也可以在返回的节点中包含它。
- {{DOMxRef("Node.hasChildNodes()")}}
  - : 返回一个{{jsxref("Boolean")}} 布尔值，来表示该元素是否包含有子节点。
- {{DOMxRef("Node.insertBefore()")}}
  - : 在当前节点下增加一个子节点 {{DOMxRef("Node")}}，并使该子节点位于参考节点的前面。
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : 返回一个 {{jsxref("Boolean")}} 类型值。接受一个命名空间 URI 作为参数，当参数所指代的命名空间是默认命名空间时返回 true，否则返回 false。
- {{DOMxRef("Node.isEqualNode()")}}
  - : 返回一个 {{jsxref("Boolean")}} 类型值。当两个 node 节点为相同类型的节点且定义的数据点匹配时（即属性和属性值相同，节点值相同）返回 true，否则返回 false。
- {{DOMxRef("Node.isSameNode()")}}
  - : 返回一个 {{jsxref("Boolean")}} 类型值。返回这两个节点的引用比较结果。
- {{DOMxRef("Node.lookupPrefix()")}}
  - : 返回包含参数 URI 所对应的命名空间前缀的 {{DOMxRef("DOMString")}}，若不存在则返回 null。如果存在多个可匹配的前缀，则返回结果和浏览器具体实现有关。
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : 接受一个前缀，并返回前缀所对应节点命名空间 URI。如果 URI 不存在则返回 null。传入 null 作为 prefix 参数将返回默认命名空间。
- {{DOMxRef("Node.normalize()")}}
  - : 对该元素下的所有文本子节点进行整理，合并相邻的文本节点并清除空文本节点。
- {{DOMxRef("Node.removeChild()")}}
  - : 移除当前节点的一个子节点。这个子节点必须存在于当前节点中。
- {{DOMxRef("Node.replaceChild()")}}
  - : 对选定的节点，替换一个子节点 {{DOMxRef("Node")}} 为另外一个节点。

### 废弃的方法

- {{DOMxRef("Node.getFeature()")}} {{Deprecated_Inline}}

  {{DOMxRef("Node.getUserData()")}} {{Deprecated_Inline}}

  - : 允许用户从节点的 {{DOMxRef("DOMUserData")}} 获得数据。

- {{DOMxRef("Node.hasAttributes()")}} {{Deprecated_Inline}}
  - : 返回一个 {{jsxref("Boolean")}} 指定该元素是否存在某一属性。
- {{DOMxRef("Node.setUserData()")}} {{Deprecated_Inline}}
  - : 允许用户在一个节点上设置或移除 {{DOMxRef("DOMUserData")}} 。

## 示例

### 移除某个节点的所有子节点

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

#### 使用示例

```js
/* ... an alternative to document.body.innerHTML = "" ... */
removeAllChildren(document.body);
```

### 遍历所有子节点

下面这个函数使用递归的方式遍历一个节点的所有子节点（包括这个根节点自身）。

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    var nodes = [];
    eachNode(rootNode, function (node) {
      nodes.push(node);
    });
    return nodes;
  }

  if (false === callback(rootNode)) return false;

  if (rootNode.hasChildNodes()) {
    var nodes = rootNode.childNodes;
    for (var i = 0, l = nodes.length; i < l; ++i)
      if (false === eachNode(nodes[i], callback)) return;
  }
}
```

#### 语法

```
eachNode(rootNode, callback);
```

#### 描述

使用递归的方式对 `rootNode` 的所有后代节点执行回调函数（包括 `rootNode` 自身）

如果没有设定 `callback`，这函数会返回一个{{jsxref("Array")}}，包含 `rootNode` 和它的所有后代节点。

如果设定了 `callback`（回调函数），如果回调函数在调用中返回 {{jsxref("Boolean")}} `false`，则当前层级的遍历会中止，同时恢复上一层级的遍历。这个可以用来在找到需要的节点之后中断循环（比如用来查找包含指定文本的文本节点）

#### 参数

- `rootNode`
  - : 需要进行后代节点遍历的 `Node` 对象。
- `callback`
  - : 一个可选的回调[函数](/zh-CN/docs/JavaScript/Reference/Global_Objects/Function)，接受一个节点作为唯一参数。如果没有设定， `eachNode` 返回一个包含了 `rootNode` 所有后代节点以及 `rootNode` 自身的{{jsxref("Array")}}

#### 使用示例

下述例子会打印出 ID 为 `"box"` 的 `<div>` 标签内的所有 `<span>` 标签的 [`textContent`](/zh-CN/docs/Web/API/Node/textContent) 属性：

```html
<div id="box">
  <span>Foo</span>
  <span>Bar</span>
  <span>Baz</span>
</div>
```

```js
var box = document.getElementById("box");
eachNode(box, function (node) {
  if (null != node.textContent) {
    console.log(node.textContent);
  }
});
```

用户终端上会显示如下字符：

```js
"\n\t", "Foo", "\n\t", "Bar", "\n\t", "Baz";
```

> **备注：** 空格是构成 {{DOMxRef("Text")}}节点的一部分，意味着缩进和换行在 `Element` 节点之间形成单独的 `Text` 。

#### 真实案例

下述例子反应了 `eachNode` 函数是如何在真实场景中使用的：搜索网页中的文本。我们使用一个包装函数 `grep` 去执行搜索：

```js
function grep(parentNode, pattern) {
  var matches = [];
  var endScan = false;

  eachNode(parentNode, function (node) {
    if (endScan) return false;

    // Ignore anything which isn't a text node
    if (node.nodeType !== Node.TEXT_NODE) return;

    if ("string" === typeof pattern) {
      if (-1 !== node.textContent.indexOf(pattern)) matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else matches.push(node);
    }
  });

  return matches;
}
```

例如：找到所有包含错别字的 {{DOMxRef("Text")}}：

```js
var typos = ["teh", "adn", "btu", "adress", "youre", "msitakes"];
var pattern = new RegExp("\\b(" + typos.join("|") + ")\\b", "gi");
var mistakes = grep(document.body, pattern);
console.log(mistakes);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
