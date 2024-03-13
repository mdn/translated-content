---
title: XPathEvaluator
slug: Web/API/XPathEvaluator
---

{{APIRef("DOM XPath")}}

`XPathEvaluator` 接口能够对 {{Glossary("XPath")}} 表达式进行编译和求值。

该接口实现自{{domxref("Document")}}的接口。

## 方法

- {{DOMxRef("XPathEvaluator.createExpression()")}}
  - : 创建一个解析过的 XPath 和解析后的 namespaces
- {{DOMxRef("XPathEvaluator.createNSResolver()")}}
  - : 任意 DOM 节点能够通过该方法来解析 namespaces，允许通过节点出现在文档中的相对上下文对 XPath 表达式进行求值。
- {{DOMxRef("XPathEvaluator.evaluate()")}}
  - : 对 XPath 字符串求值，返回可能的确切类型的匹配结果。

## 示例

下面的实例展示了如何使用`XPathEvaluator`接口。

### HTML

```html
<div>XPath example</div>
<div>Number of &lt;div&gt;s: <output></output></div>
```

### JavaScript

```js
var xpath = "//div";
var evaluator = new XPathEvaluator();
var expression = evaluator.createExpression("//div");
var result = expression.evaluate(
  document,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
);
document.querySelector("output").textContent = result.snapshotLength;
```

### 结果

{{EmbedLiveSample('示例', 400, 70)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.createExpression()")}}
- {{domxref("XPathExpression")}}
