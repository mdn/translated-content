---
title: <xsl:apply-imports>
slug: Web/XML/XSLT/Reference/Element/apply-imports
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

**`<xsl:apply-imports>`** 元素比较冷僻，主要用于复杂样式表。导入优先级要求主样式表中的模板规则优先于被导入样式表中的模板规则。不过有时需要强制处理器使用被导入样式表（优先级较低）中的模板规则，而不是主样式表中的等价规则。

## 语法

```xml
<xsl:apply-imports/>
```

### 必需属性

无。

### 可选属性

无。

### 类型

指令，出现在模板中。

## 规范

XSLT，第 5.6 节。

## Gecko 支持

支持。
