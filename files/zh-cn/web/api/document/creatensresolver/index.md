---
title: Document.createNSResolver()
slug: Web/API/Document/createNSResolver
---

{{ ApiRef("DOM") }}

创建一个 `XPathNSResolver` which resolves namespaces with respect to the definitions in scope for 指定节点

## 语法

```plain
nsResolver = document.createNSResolver(node);
```

### 参数

- `node` is the node to be used as a context for namespace resolution.

### 返回值

- `nsResolver` is an XPathNSResolver object.

## 注意

Adapts any DOM node to resolve namespaces so that an [XPath](/zh-CN/XPath) expression can be easily evaluated relative to the context of the node where it appeared within the document. This adapter works like the DOM Level 3 method `lookupNamespaceURI` on nodes in resolving the `namespaceURI` from a given prefix using the current information available in the node's hierarchy at the time `lookupNamespaceURI` is called. Also correctly resolves the implicit `xml` prefix.

Note, XPath defines QNames without prefix to match only elements in the null namespace. There is no way in XPath to pick up the default namespace as applied to a regular element reference (e.g., `p[@id='_myid'`] for `xmlns='http://www.w3.org/1999/xhtml'`). To match default elements in a non-null namespace, you either have to refer to a particular element using a form such as `*namespace-uri()=http://www.w3.org/1999/xhtml and name()=p[@id='_myid']` ([this approach](/zh-CN/Introduction_to_using_XPath_in_JavaScript#Using_XPath_functions_to_reference_elements_with_its_default_namespace) works well for dynamic XPath expressions where the namespaces might not be known) or use prefixed name tests, and create a namespace resolver mapping the prefix to the namespace. Read more on [how to create a user defined namespace resolver](/zh-CN/Introduction_to_using_XPath_in_JavaScript#Implementing_a_User_Defined_Namespace_Resolver) if you wish to take the latter approach.

`createNSResolver` was introduced in DOM Level 3.

## 参见

- [document.evaluate](/zh-CN/DOM/document.evaluate)
- [Introduction to using XPath in JavaScript](/zh-CN/Introduction_to_using_XPath_in_JavaScript)

## 规范

[DOM Level 3 XPath Specification: createNSResolver](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html#XPathEvaluator-createNSResolver)
