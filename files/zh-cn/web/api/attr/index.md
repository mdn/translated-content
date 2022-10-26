---
title: Attr
slug: Web/API/Attr
---

{{APIRef("DOM")}}

该类型使用对象来表示一个 DOM 元素的属性。在大多数 DOM 方法中，你可能会直接通过字符串的方式获取属性值（例如{{domxref("Element.getAttribute()")}}），但是一些函数（例如{{domxref("Element.getAttributeNode()")}}）或通过迭代器访问时则返回`Attr`类型。

{{InheritanceDiagram}}

> **警告：** 从 Gecko 7.0 开始{{geckoRelease("7.0")}}，控制台会输出这些方法和属性将会被移除的警告信息。你应该对代码进行相应的修正。点击[废弃的属性和方法](#废弃的属性和方法)查看完整的列表。

> **警告：** 在 [DOM4\[REC\]](https://www.w3.org/standards/history/dom) 中，为了规范化 Attr 的实现，它不再继承自{{domxref("Node")}}。在目前 [DOM4.1\[WD\]](https://www.w3.org/standards/history/dom41) 中又有变动，因此不建议使用 Attr 对象上有关{{domxref("Node")}}的属性和方法。

## 属性

- {{domxref("Attr.name", "name")}} {{readOnlyInline}}
  - : 该属性的名称
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{readOnlyInline}}
  - : 表示该属性的命名空间 URI{{domxref("DOMString")}}，如果该元素不在命名空间中，则返回 null。
- {{domxref("Attr.localName", "localName")}} {{readOnlyInline}}
  - : 表示该属性的命名空间限定的本地名称{{domxref("DOMString")}}。
- {{domxref("Attr.prefix", "prefix")}} {{readOnlyInline}}
  - : 表示该属性的命名空间前缀{{domxref("DOMString")}}，如果没有前缀指定则返回 null。
- {{domxref("Attr.ownerElement", "ownerElement")}} {{readOnlyInline}}

  - : 该属性所附属的元素节点。

    > **备注：** **注意：** DOM Level 4 移除了这个方法。由于当你从{{domxref("Element")}}中获得`Attr`对象时，你应已知相关的元素。
    > 在某些场景下并一定能够得到相关的元素，比如通过{{domxref("Document.evaluate")}}返回的 Attr 对象，最新的 DOM 草案再次引入该属性。
    >
    > Gecko 从 Gecko 7.0 {{geckoRelease("7.0")}}开始会输出一个废弃的提示信息。该提示信息在 Gecko 49.0 {{geckoRelease("49.0")}}再次被删除。

- {{domxref("Attr.specified", "specified")}} {{readOnlyInline}}
  - : 该属性将返回`真`。如果这个属性你在源代码或者在脚本中明确指定的话，它总是返回真。否则它是由文档的 DTD 默认定义的，将总是返回`假`。
- {{domxref("Attr.value", "value")}}
  - : 属性的值

> **备注：** **注意：** DOM Level 3 定义`namespaceURI`, `localName`和`prefix`为{{domxref("Node")}}接口。在 DOM4 中被移至`Attr`。
>
> Chrome 46.0 版本以上、Firefox 48.0 版本以上实现了该改动。

## 废弃的属性和方法

这些属性已经被废弃，可以使用合适的属性替代。

- `attributes`
  - : 当前该属性总是返回 `NULL`
- `childNodes` {{Deprecated_Inline}}
  - : 当前该属性总是返回一个空的 {{domxref("NodeList")}}.
- `firstChild` {{Deprecated_Inline}}
  - : `当前该属性总是返回 NULL`
- `isId` {{readOnlyInline}}
  - : 表明该属性是否一个“ID 属性”。“ID 属性”的值在整个 DOM 文档中应当是唯一。在 HTML DOM 文档中属性“id”是一个 ID 属性，也是唯一一个 ID 属性；但是在 XML 文档中可以定义其他 ID 属性。一个属性是否是唯一的，通常由{{Glossary("DTD")}}或其他文档模式描述文件决定。
- `lastChild`
  - : `当前该属性总是返回 NULL`
- `nextSibling`
  - : `当前该属性总是返回 NULL`
- `nodeName`
  - : 使用{{domxref("Attr.name")}}来代替
- `nodeType`
  - : `当前该属性总是返回`2，表示`ATTRIBUTE_NODE`
- `nodeValue`
  - : 使用{{domxref("Attr.value")}}来代替
- `ownerDocument`
  - : 这个属性本不应当在这里被使用，所以应该无须担心其演变
- `parentNode`
  - : `当前该属性总是返回 NULL`
- `previousSibling`
  - : `当前该属性总是返回 NULL`
- `schemaTypeInfo` {{Deprecated_Inline}} {{readOnlyInline}}
  - : 当前属性的类型信息。然而当加载完文档完或调用{{domxref("Document.normalizeDocument")}}后，这个被认定为绝对正确的包含在节点内的类型信息，会因为节点的移动而变得不可信。
- `specified`
  - : `当前该属性总是返回 true`
- `textContent`
  - : 使用{{domxref("Attr.value")}}来代替

这些方法已经被废弃：

- `appendChild()` {{Deprecated_Inline}}
  - : 通过编辑{{domxref("Attr.value")}}属性来实现相同的效果
- `cloneNode()`
  - : 这个方法本不应当在这里被使用，所以无须担心其演变
- `createAttribute()`
  - : 使用{{domxref("Element.setAttribute()")}}来代替
- `createAttributeNS()`
  - : 使用{{domxref("Element.setAttributeNS()")}}来代替
- `getAttributeNode()`
  - : 使用{{domxref("Element.getAttribute()")}}来代替
- `getAttributeNodeNS()`
  - : 使用{{domxref("Element.getAttributeNS()")}}来代替
- `hasAttributes()` {{Deprecated_Inline}}
  - : `当前该方法总是返回`false.
- `hasChildNodes()`
  - : `当前该方法总是返回`false.
- `insertBefore()`
  - : 通过编辑{{domxref("Attr.value")}}来实现相同效果
- `isSupported()`
  - : 这个方法本不应当被在这里使用，所以无须担心其演变
- `isEqualNode()`
  - : 这个方法本不应当被在这里使用，所以无须担心其演变
- `normalize()`
  - : 这个方法本不应当被在这里使用，所以无须担心其演变
- `removeAttributeNode()`
  - : 使用{{domxref("Element.removeAttribute()")}}来代替
- `removeChild()` {{Deprecated_Inline}}
  - : 通过编辑{{domxref("Attr.value")}}来实现相同效果
- `replaceChild()` {{Deprecated_Inline}}
  - : 通过编辑{{domxref("Attr.value")}}来实现相同效果
- `setAttributeNode()`
  - : 使用{{domxref("Element.setAttribute()")}}来代替
- `setAttributeNodeNS()`
  - : 使用{{domxref("Element.setAttributeNS()")}}来代替

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Document Object Model Core level 3: Interface Attr](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-637646024)
- [Document Object Model 4: Interface Attr](http://www.w3.org/TR/dom/#interface-attr)
