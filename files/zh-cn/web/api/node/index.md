---
title: Node
slug: Web/API/Node
l10n:
  sourceCommit: 5cfd038b0d37452042461cfe169c0c9ab87be94d
---

{{APIRef("DOM")}}

{{Glossary("DOM", "文档对象模型")}}的 **`Node`** 接口是许多其他 DOM API 对象所基于的抽象基类，因此这些对象类型可以以类似的方式使用，并且常常可以互换。作为抽象类，不存在纯粹的 `Node` 对象。所有实现 `Node` 功能的对象都基于它的某个子类。最主要的是 {{domxref("Document")}}、{{domxref("Element")}} 和 {{domxref("DocumentFragment")}}。

此外，每一种 DOM 节点都由基于 `Node` 的接口表示。其中包括 {{DOMxRef("Attr")}}、{{DOMxRef("CharacterData")}}（{{DOMxRef("Text")}}、{{DOMxRef("Comment")}}、{{DOMxRef("CDATASection")}} 和 {{DOMxRef("ProcessingInstruction")}} 都基于它）以及 {{DOMxRef("DocumentType")}}。

在某些情况下，基类 `Node` 接口的某一特性可能不适用于某个子接口；此时，继承的节点可能返回 `null` 或抛出异常，具体取决于情形。例如，尝试向不能拥有子节点的节点类型添加子节点会抛出异常。

{{InheritanceDiagram}}

## 实例属性

_除了下列属性外，`Node` 还从其父接口 {{DOMxRef("EventTarget")}} 继承属性。_

- {{DOMxRef("Node.baseURI")}} {{ReadOnlyInline}}
  - : 返回表示包含该 `Node` 的文档的基础 URL 的字符串。
- {{DOMxRef("Node.childNodes")}} {{ReadOnlyInline}}
  - : 返回包含此节点所有子节点（包括元素、文本和注释）的实时 {{DOMxRef("NodeList")}}。{{DOMxRef("NodeList")}} 是实时的，意味着如果 `Node` 的子节点发生变化，{{DOMxRef("NodeList")}} 对象会自动更新。
- {{DOMxRef("Node.firstChild")}} {{ReadOnlyInline}}
  - : 返回表示该节点第一个直接子节点的 `Node`，若没有子节点则为 `null`。
- {{DOMxRef("Node.isConnected")}} {{ReadOnlyInline}}
  - : 布尔值，表示该 Node 是否（直接或间接）连接到上下文对象，例如常规 DOM 中的 {{DOMxRef("Document")}} 对象，或影子 DOM 中的 {{DOMxRef("ShadowRoot")}}。
- {{DOMxRef("Node.lastChild")}} {{ReadOnlyInline}}
  - : 返回表示该节点最后一个直接子节点的 `Node`，若没有子节点则为 `null`。
- {{DOMxRef("Node.nextSibling")}} {{ReadOnlyInline}}
  - : 返回表示树中下一个节点的 `Node`，若不存在则为 `null`。
- {{DOMxRef("Node.nodeName")}} {{ReadOnlyInline}}
  - : 返回包含该 `Node` 名称的字符串。名称结构因节点类型而异。例如，{{DOMxRef("HTMLElement")}} 会包含对应标签的名称，如 {{DOMxRef("HTMLAudioElement")}} 为 `'AUDIO'`；{{DOMxRef("Text")}} 节点为 `'#text'`；{{DOMxRef("Document")}} 节点为 `'#document'`。
- {{DOMxRef("Node.nodeType")}} {{ReadOnlyInline}}
  - : 返回表示节点类型的 `unsigned short`。可能的值有：

    | 名称                          | 值   |
    | ----------------------------- | ---- |
    | `ELEMENT_NODE`                | `1`  |
    | `ATTRIBUTE_NODE`              | `2`  |
    | `TEXT_NODE`                   | `3`  |
    | `CDATA_SECTION_NODE`          | `4`  |
    | `PROCESSING_INSTRUCTION_NODE` | `7`  |
    | `COMMENT_NODE`                | `8`  |
    | `DOCUMENT_NODE`               | `9`  |
    | `DOCUMENT_TYPE_NODE`          | `10` |
    | `DOCUMENT_FRAGMENT_NODE`      | `11` |

- {{DOMxRef("Node.nodeValue")}}
  - : 获取或设置当前节点的值。
- {{DOMxRef("Node.ownerDocument")}} {{ReadOnlyInline}}
  - : 返回此节点所属的 {{DOMxRef("Document")}}。如果节点本身就是文档，则返回 `null`。
- {{DOMxRef("Node.parentNode")}} {{ReadOnlyInline}}
  - : 返回此节点的父 `Node`。如果不存在这样的节点——例如，此节点位于树的顶端，或不属于任何树——则此属性返回 `null`。
- {{DOMxRef("Node.parentElement")}} {{ReadOnlyInline}}
  - : 返回此节点的父 {{DOMxRef("Element")}}。如果节点没有父节点，或父节点不是 {{DOMxRef("Element")}}，则此属性返回 `null`。
- {{DOMxRef("Node.previousSibling")}} {{ReadOnlyInline}}
  - : 返回表示树中上一个节点的 `Node`，若不存在则为 `null`。
- {{DOMxRef("Node.textContent")}}
  - : 获取或设置元素及其所有后代的文本内容。

## 实例方法

_除了下列方法外，`Node` 还从其父接口 {{DOMxRef("EventTarget")}} 继承方法。_

- {{DOMxRef("Node.appendChild()")}}
  - : 将指定的 `childNode` 参数添加为当前节点的最后一个子节点。如果该参数引用了 DOM 树中已存在的节点，该节点会从其当前位置分离，并附加到新位置。
- {{DOMxRef("Node.cloneNode()")}}
  - : 克隆一个 `Node`，并可选择是否克隆其全部内容。默认会克隆该节点的内容。
- {{DOMxRef("Node.compareDocumentPosition()")}}
  - : 将当前节点的位置与任意其他文档中的另一个节点进行比较。
- {{DOMxRef("Node.contains()")}}
  - : 返回 `true` 或 `false`，表示某个节点是否为调用节点的后代。
- {{DOMxRef("Node.getRootNode()")}}
  - : 返回上下文对象的根，可选地在可用时包含影子根。
- {{DOMxRef("Node.hasChildNodes()")}}
  - : 返回布尔值，表示该元素是否有任何子节点。
- {{DOMxRef("Node.insertBefore()")}}
  - : 在指定父节点下，将一个 `Node` 插入为参考节点之前的子节点。
- {{DOMxRef("Node.isDefaultNamespace()")}}
  - : 接受命名空间 URI 作为参数，若该命名空间是给定节点上的默认命名空间则返回 `true`，否则返回 `false`。
- {{DOMxRef("Node.isEqualNode()")}}
  - : 返回布尔值，表示两个节点是否类型相同且所有定义性数据点都匹配。
- {{DOMxRef("Node.isSameNode()")}}
  - : 返回布尔值，表示两个节点是否为同一个节点（即引用同一对象）。
- {{DOMxRef("Node.lookupPrefix()")}}
  - : 返回包含给定命名空间 URI 的前缀的字符串（若存在），否则返回 `null`。当可能有多个前缀时，结果取决于实现。
- {{DOMxRef("Node.lookupNamespaceURI()")}}
  - : 接受前缀并返回给定节点上与之关联的命名空间 URI（若找到），否则返回 `null`。为前缀传入 `null` 将返回默认命名空间。
- {{DOMxRef("Node.normalize()")}}
  - : 清理此元素下的所有文本节点（合并相邻节点，移除空节点）。
- {{DOMxRef("Node.removeChild()")}}
  - : 从当前元素移除一个子节点，该节点必须是当前节点的子节点。
- {{DOMxRef("Node.replaceChild()")}}
  - : 用参数中给出的第二个节点替换当前节点的一个子 `Node`。

## 事件

- {{domxref("Node/selectstart_event", "selectstart")}}
  - : 当用户在此节点中开始新的选区时触发。

## 示例

### 移除节点内嵌套的所有子节点

此函数会反复移除元素的第一个子节点，直到没有子节点为止。

```js
function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

使用此函数只需一次调用。下面我们清空文档的 body：

```js
removeAllChildren(document.body);
```

另一种做法是将 textContent 设为空字符串：`document.body.textContent = ""`。

### 递归遍历子节点

以下函数会为根节点所包含的每个节点（包括根节点自身）递归调用回调函数：

```js
function eachNode(rootNode, callback) {
  if (!callback) {
    const nodes = [];
    eachNode(rootNode, (node) => {
      nodes.push(node);
    });
    return nodes;
  }

  if (callback(rootNode) === false) {
    return false;
  }

  if (rootNode.hasChildNodes()) {
    for (const node of rootNode.childNodes) {
      if (eachNode(node, callback) === false) {
        return;
      }
    }
  }
}
```

该函数会为 `rootNode` 的每个后代节点（包括根节点自身）递归调用一个函数。

如果省略 `callback`，函数会改为返回一个 {{jsxref("Array")}}，其中包含 `rootNode` 及其内部的所有节点。

如果提供了 `callback`，并且调用时返回 `false`，则中止当前递归层级，函数在上一层父节点处恢复执行。这可用于在找到某个节点后中止循环（例如搜索包含特定字符串的文本节点）。

该函数有两个参数：

- `rootNode`
  - : 将递归遍历其后代的 `Node` 对象。
- `callback` {{optional_inline}}
  - : 可选的回调[函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)，只接收一个 `Node` 参数。如果省略，`eachNode` 会返回 `rootNode` 内每个节点（包括根节点自身）组成的 {{jsxref("Array")}}。

下面展示 `eachNode()` 函数的实际用法：在网页上搜索文本。

我们使用名为 `grep` 的包装函数来执行搜索：

```js
function grep(parentNode, pattern) {
  let matches = [];
  let endScan = false;

  eachNode(parentNode, (node) => {
    if (endScan) {
      return false;
    }

    // 忽略非文本节点
    if (node.nodeType !== Node.TEXT_NODE) {
      return;
    }

    if (typeof pattern === "string" && node.textContent.includes(pattern)) {
      matches.push(node);
    } else if (pattern.test(node.textContent)) {
      if (!pattern.global) {
        endScan = true;
        matches = node;
      } else {
        matches.push(node);
      }
    }
  });

  return matches;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
