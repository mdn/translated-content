---
title: Document：createNSResolver() 方法
slug: Web/API/Document/createNSResolver
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ ApiRef("DOM") }}

根据指定节点范围内的定义来创建 `XPathNSResolver` 并解析命名空间。

## 语法

```js-nolint
createNSResolver(node)
```

### 参数

- `node` 是用作命名空间解析上下文的节点。

### 返回值

- `nsResolver` 是 XPathNSResolver 对象。

## 备注

该适配器能使任何 DOM 节点解决命名空间问题，以便可以根据节点出现在文档中的上下文相对方便求值 [XPath](/zh-CN/docs/Web/XML/XPath) 表达式。此适配器的工作方式类似于 DOM 第 3 版中的 `lookupNamespaceURI` 方法，根据调用 `lookupNamespaceURI` 时节点层级结构中当前可用信息，从给定的前缀解析 `namespaceURI`。还能正确解析隐含 `xml` 前缀。

请注意，XPath 定义的 QName 不带前缀，只匹配 null 命名空间中的元素。在 XPath 中没有办法获取应用于常规元素引用的默认命名空间（例如 `xmlns='http://www.w3.org/1999/xhtml'` 的 `p[@id='_myid']`）。为了匹配非空命名空间中的默认元素，你必须使用诸如 `*namespace-uri()=http://www.w3.org/1999/xhtml` 和 `name()=p[@id='_myid']` 这样的形式来引用特定元素（[此方法](/zh-CN/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript#使用_xpath_函数引用具有默认命名空间的元素)在动态 XPath 表达式中非常有效，那时可能不知道命名空间），或者使用带有前缀的名称测试，并创建一个将前缀映射到命名空间的命名空间解析器。如果希望采用后一种方法，请阅读[如何创建用户定义的命名空间解析器](/zh-CN/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript#实现用户定义的命名空间解析器)。

`createNSResolver` 在 DOM 第 3 版中引入。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [document.evaluate](/zh-CN/docs/Web/API/Document/evaluate)
- [在 JavaScript 中使用 XPath 的简介](/zh-CN/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
