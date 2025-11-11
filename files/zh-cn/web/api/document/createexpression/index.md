---
title: document.createExpression
slug: Web/API/Document/createExpression
---

{{APIRef("DOM")}}

该方法将编译生成一个 {{DOMxRef("XPathExpression")}}，可以于来多次执行。

你必须在将要运行表达式的同一文档上调用此方法。

### 语法

```js-nolint
createExpression(xpathText, namespaceURLMapper)
```

### 参数

- `xpathText`
  - : 一个将被编译的 XPath 字符串表达式。
- `namespaceURLMapper`
  - : 将命名空间前缀映射到命名空间 URL 的函数（若不需要，则为 `null`）。

### 返回值

{{DOMxRef("XPathExpression")}}

## 示例

```js
const xpathExpr = document.createExpression("//div");
const xpathResult = xpathExpr.evaluate(document); // 返回一个 XPathResult 对象
const nodeContext = document.querySelector("nav");
// 重复使用 XPathExpression "xpathExpr"
const otherResult = xpathExpr.evaluate(nodeContext); // 返回一个 XPathResult 对象
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Document.evaluate()")}}
- {{DOMxRef("XPathExpression")}}
