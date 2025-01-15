---
title: MathML 元素参考
slug: Web/MathML/Element
l10n:
  sourceCommit: 3558f9be9acfcfd4b625229962b6f1b38f1b85af
---

{{MathMLRef}}

这是一份按字母排序的 MathML 元素列表。所有这些元素都实现了 {{domxref("MathMLElement")}} 类。

> [!NOTE]
> 如主 [MathML](/zh-CN/docs/Web/MathML) 页面所述，MDN 使用 [MathML Core](https://w3c.github.io/mathml-core/) 作为参考规范。但是，文档也记录了一些浏览器仍然实现的旧版特性。你可以在 [MathML 4](https://w3c.github.io/mathml/) 中找到这些和其他特性的更多详细信息。

## MathML 元素（字母排序）

### math

- {{MathMLElement("math")}}（顶层元素）

### A

- {{MathMLElement("maction")}}（将动作绑定到子表达式）
- {{MathMLElement("annotation")}}（数据注释）
- {{MathMLElement("annotation-xml")}}（XML 注释）

### E

- {{MathMLElement("menclose")}} {{non-standard_inline}}（被包裹的内容）
- {{MathMLElement("merror")}}（被包裹的语法错误消息）

### F

- {{MathMLElement("mfenced")}} {{non-standard_inline}}{{deprecated_inline}}（圆括号）
- {{MathMLElement("mfrac")}}（分数）

### I

- {{MathMLElement("mi")}}（标识符）

### M

- {{MathMLElement("mmultiscripts")}}（前置角标和张量索引）

### N

- {{MathMLElement("mn")}}（数字）

### O

- {{MathMLElement("mo")}}（运算符）
- {{MathMLElement("mover")}}（上标）

### P

- {{MathMLElement("mpadded")}}（在内容周围增设空白）
- {{MathMLElement("mphantom")}}（保留空白占位的不可见内容）
- {{MathMLElement("mprescripts")}}（前置角标的分隔符）

### R

- {{MathMLElement("mroot")}}（带指定根指数的根号）
- {{MathMLElement("mrow")}}（分组子表达式）

### S

- {{MathMLElement("ms")}}（字符串字面量）
- {{MathMLElement("semantics")}}（语义注释的容器）
- {{MathMLElement("mspace")}}（空白）
- {{MathMLElement("msqrt")}}（平方根，不带根指数）
- {{MathMLElement("mstyle")}}（改变样式）
- {{MathMLElement("msub")}}（下角标）
- {{MathMLElement("msup")}}（上角标）
- {{MathMLElement("msubsup")}}（上下角标对）

### T

- {{MathMLElement("mtable")}}（表格或矩阵）
- {{MathMLElement("mtd")}}（表格或矩阵中的单元格）
- {{MathMLElement("mtext")}}（文本）
- {{MathMLElement("mtr")}}（表格或矩阵中的行）

### U

- {{MathMLElement("munder")}}（下标）
- {{MathMLElement("munderover")}}（上标下标对）

## MathML 元素（类别分类）

### 顶层元素

- {{MathMLElement("math")}}（顶层元素）

### 标记元素

- {{MathMLElement("mi")}}（标识符）
- {{MathMLElement("mn")}}（数字）
- {{MathMLElement("mo")}}（运算符）
- {{MathMLElement("ms")}}（字符串文字）
- {{MathMLElement("mspace")}}（空格）
- {{MathMLElement("mtext")}}（文本）

### 通用布局

- {{MathMLElement("menclose")}} {{non-standard_inline}}（封闭内容）
- {{MathMLElement("merror")}}（封闭语法错误消息）
- {{MathMLElement("mfenced")}} {{non-standard_inline}} {{deprecated_inline}}（括号）
- {{MathMLElement("mfrac")}}（分数）
- {{MathMLElement("mpadded")}}（内容周围的空格）
- {{MathMLElement("mphantom")}}（具有保留空间的不可见内容）
- {{MathMLElement("mroot")}}（具有指定指数的根式）
- {{MathMLElement("mrow")}}（分组的子表达式）
- {{MathMLElement("msqrt")}}（没有指数的平方根）
- {{MathMLElement("mstyle")}}（样式更改）

### 附加符号和极限元素

- {{MathMLElement("mmultiscripts")}}（前置角标和张量索引）
- {{MathMLElement("mover")}}（上标）
- {{MathMLElement("mprescripts")}}（前置角标的分隔符）
- {{MathMLElement("msub")}}（下标）
- {{MathMLElement("msubsup")}}（上下脚标对）
- {{MathMLElement("msup")}}（上标）
- {{MathMLElement("munder")}}（下标）
- {{MathMLElement("munderover")}}（上标下标对）

### 表格数学

- {{MathMLElement("mtable")}}（表格或矩阵）
- {{MathMLElement("mtd")}}（表格或矩阵中的单元格）
- {{MathMLElement("mtr")}}（表格或矩阵中的行）

### 未分类元素

- {{MathMLElement("maction")}} {{deprecated_inline}}（绑定到子表达式的操作）

## 语义注释

- {{MathMLElement("annotation")}}（数据注释）
- {{MathMLElement("annotation-xml")}}（XML 注释）
- {{MathMLElement("semantics")}}（语义注释的容器）

## 参见

- [MathML](/zh-CN/docs/Web/MathML)
- [MathML 属性参考](/zh-CN/docs/Web/MathML/Attribute)
