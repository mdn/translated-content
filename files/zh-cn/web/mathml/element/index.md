---
title: MathML 元素参考
slug: Web/MathML/Element
---

{{MathMLRef}}

这是一份按字母排序的 MathML **呈现型**元素列表。

**呈现型标记**（**presentation markup**）相关条目被用来描述数学记号的布局结构，而**内容型标记**（**content markup**）则用于提供潜在的数学含义，MathML 解析器不支持渲染内容型标记（见 [Firefox bug 276028](https://bugzil.la/276028)）。若想了解更多关于内容型标记的信息，可以考虑阅读 [MathML 3 规范](http://www.w3.org/TR/MathML3/)的[第四章](http://www.w3.org/TR/MathML3/chapter4.html)。

MathML 元素实现了 {{domxref("MathMLElement")}} 类。

## MathML 呈现型元素（字母排序）

### math

- {{MathMLElement("math")}}（顶层元素）

### A

- {{MathMLElement("maction")}}（将动作绑定到子表达式）
- {{MathMLElement("maligngroup")}}（对齐分组）
- {{MathMLElement("malignmark")}}（对齐点）

### E

- {{MathMLElement("menclose")}}（被包裹的内容）
- {{MathMLElement("merror")}}（被包裹的语法错误消息）

### F

- {{MathMLElement("mfenced")}}（圆括号）{{deprecated_inline}}
- {{MathMLElement("mfrac")}}（因子 Fraction）

### G

- {{MathMLElement("mglyph")}}（显示非标准符号）

### I

- {{MathMLElement("mi")}}（标识符 Identifier）

### L

- {{MathMLElement("mlabeledtr")}}（表格或矩阵中，带标记的行）
- {{MathMLElement("mlongdiv")}}（长除法记号）

### M

- {{MathMLElement("mmultiscripts")}}（Prescript 和张量指标 tensor indice）

### N

- {{MathMLElement("mn")}}（数字）

### O

- {{MathMLElement("mo")}}（运算符 Operator）
- {{MathMLElement("mover")}}（上标）

### P

- {{MathMLElement("mpadded")}}（在内容周围增设空白）
- {{MathMLElement("mphantom")}}（保留空白占位的不可见内容）

### R

- {{MathMLElement("mroot")}}（带指定根数的根号）
- {{MathMLElement("mrow")}}（分组后的子表达式）

### S

- {{MathMLElement("ms")}}（字符串字面量）
- {{MathMLElement("mscarries")}}（附注 Annotation，比如进位）
- {{MathMLElement("mscarry")}}（单进位， {{MathMLElement("mscarries")}} 的子元素）
- {{MathMLElement("msgroup")}}（{{MathMLElement("mstack")}} 和 {{MathMLElement("mlongdiv")}} 元素内的行组）
- {{MathMLElement("msline")}}（在 {{MathMLElement("mstack")}} 元素内的水平行）
- {{MathMLElement("mspace")}}（空白）
- {{MathMLElement("msqrt")}}（不带根数的平方根）
- {{MathMLElement("msrow")}}（在 {{MathMLElement("mstack")}} 元素中的行）
- {{MathMLElement("mstack")}}（堆叠式对齐）
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
- {{MathMLElement("munderover")}}（上标 - 下标对）

### 其他元素

- {{MathMLElement("semantics")}}（语义附注的容器）
- [`<annotation>`](/zh-CN/docs/Web/MathML/Element/semantics#annotation)（数据附注）
- [`<annotation-xml>`](/zh-CN/docs/Web/MathML/Element/semantics#annotation-xml)（XML 附注）

## MathML 呈现型元素（类别分类）

### 顶层元素

- {{MathMLElement("math")}}

### 字符/符号元素

- {{MathMLElement("mglyph")}}
- {{MathMLElement("mi")}}
- {{MathMLElement("mn")}}
- {{MathMLElement("mo")}}
- {{MathMLElement("ms")}}
- {{MathMLElement("mspace")}}
- {{MathMLElement("mtext")}}

### 通用布局元素

- {{MathMLElement("menclose")}}
- {{MathMLElement("merror")}}
- {{MathMLElement("mfenced")}} {{deprecated_inline}}
- {{MathMLElement("mfrac")}}
- {{MathMLElement("mpadded")}}
- {{MathMLElement("mphantom")}}
- {{MathMLElement("mroot")}}
- {{MathMLElement("mrow")}}
- {{MathMLElement("msqrt")}}
- {{MathMLElement("mstyle")}}

### 边标和角标元素

- {{MathMLElement("mmultiscripts")}}
- {{MathMLElement("mover")}}
- {{MathMLElement("mprescripts")}}
- {{MathMLElement("msub")}}
- {{MathMLElement("msubsup")}}
- {{MathMLElement("msup")}}
- {{MathMLElement("munder")}}
- {{MathMLElement("munderover")}}
- {{MathMLElement("none")}}

### 表格数学

- {{MathMLElement("maligngroup")}}
- {{MathMLElement("malignmark")}}
- {{MathMLElement("mlabeledtr")}}
- {{MathMLElement("mtable")}}
- {{MathMLElement("mtd")}}
- {{MathMLElement("mtr")}}

### 初等数学

- {{MathMLElement("mlongdiv")}}
- {{MathMLElement("mscarries")}}
- {{MathMLElement("mscarry")}}
- {{MathMLElement("msgroup")}}
- {{MathMLElement("msline")}}
- {{MathMLElement("msrow")}}
- {{MathMLElement("mstack")}}

### 尚无分类的元素

- {{MathMLElement("maction")}}

## 语义附注元素

- [`<annotation>`](/zh-CN/docs/Web/MathML/Element/semantics#annotation)
- [`<annotation-xml>`](/zh-CN/docs/Web/MathML/Element/semantics#annotation-xml)
- {{MathMLElement("semantics")}}

## 请参阅

- [MathML](/zh-CN/docs/Web/MathML)
- [MathML 属性参考](/zh-CN/docs/Web/MathML/Attribute)
