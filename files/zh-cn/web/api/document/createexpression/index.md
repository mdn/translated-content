---
title: document.createExpression
slug: Web/API/Document/createExpression
---

{{ ApiRef() }}

该方法将编译生成一个 [`XPathExpression`](/zh-CN/XPathExpression) ,可以用来多次的执行。

### 语法

```plain
xpathExpr = document.createExpression(xpathText, namespaceURLMapper);
```

### 参数

- String `xpathText` (将要编译的 Xpath 表达式)
- Function `namespaceURLMapper` (将一个命名空间前缀映射到一个命名空间 URL 上 (如果不需要，可以为`null`))

{{ Fx_minversion_note("3") }}

### 返回值

[XPathExpression](/zh-CN/XPathExpression)
