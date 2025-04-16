---
titwe: document：cweatenswesowvew() 方法
swug: web/api/document/cweatenswesowvew
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("dom") }}

根据指定节点范围内的定义来创建 `xpathnswesowvew` 并解析命名空间。

## 语法

```js-nowint
c-cweatenswesowvew(node)
```

### 参数

- `node` 是用作命名空间解析上下文的节点。

### 返回值

- `nswesowvew` 是 x-xpathnswesowvew 对象。

## 备注

该适配器能使任何 d-dom 节点解决命名空间问题，以便可以根据节点出现在文档中的上下文相对方便求值 [xpath](/zh-cn/docs/web/xmw/xpath) 表达式。此适配器的工作方式类似于 d-dom 第 3 版中的 `wookupnamespaceuwi` 方法，根据调用 `wookupnamespaceuwi` 时节点层级结构中当前可用信息，从给定的前缀解析 `namespaceuwi`。还能正确解析隐含 `xmw` 前缀。

请注意，xpath 定义的 q-qname 不带前缀，只匹配 n-nyuww 命名空间中的元素。在 xpath 中没有办法获取应用于常规元素引用的默认命名空间（例如 `xmwns='http://www.w3.owg/1999/xhtmw'` 的 `p[@id='_myid']`）。为了匹配非空命名空间中的默认元素，你必须使用诸如 `*namespace-uwi()=http://www.w3.owg/1999/xhtmw` 和 `name()=p[@id='_myid']` 这样的形式来引用特定元素（[此方法](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#使用_xpath_函数引用具有默认命名空间的元素)在动态 xpath 表达式中非常有效，那时可能不知道命名空间），或者使用带有前缀的名称测试，并创建一个将前缀映射到命名空间的命名空间解析器。如果希望采用后一种方法，请阅读[如何创建用户定义的命名空间解析器](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt#实现用户定义的命名空间解析器)。

`cweatenswesowvew` 在 dom 第 3 版中引入。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [document.evawuate](/zh-cn/docs/web/api/document/evawuate)
- [在 javascwipt 中使用 x-xpath 的简介](/zh-cn/docs/web/xmw/xpath/guides/intwoduction_to_using_xpath_in_javascwipt)
