---
title: column-rule
slug: Web/CSS/column-rule
---

{{CSSRef("CSS Multi-columns")}}{{EmbedInteractiveExample("pages/css/column-rule.html")}}

## 概述

在多列布局中，`column-rule` 属性规定了列与列之间的直线，也称“规则”。该简写可以避免单独设置各个 `column-rule-*` 属性：{{Cssxref("column-rule-width")}}，{{Cssxref("column-rule-style")}} 和 {{Cssxref("column-rule-color")}}。

{{cssinfo}}

## 语法

```
Formal syntax: {{csssyntax("column-rule")}}
```

```
column-rule: dotted;
column-rule: solid blue;
column-rule: solid 8px;
column-rule: thick inset blue;
```

### 取值

`column-rule` 属性可以按任何顺序指定为下面列出的一个，两个或三个值。

- `<'column-rule-width'>`
  - : 定义为 {{cssxref("&lt;length&gt;")}} 或是 `thin`，`medium`，`thick` 关键字的其中一个。请参阅 {{cssxref("border-width")}} 。
- `<'column-rule-style'>`
  - : 请参阅 {{cssxref("border-style")}}。
- `<'column-rule-color'>`
  - : 一个 {{cssxref("&lt;color&gt;")}} 值。

## 示例

```
p.foo { column-rule: dotted; }          /* 与 "medium dotted currentColor" 相同 */
p.bar { column-rule: solid blue; }      /* 与 "medium solid blue" 相同 */
p.baz { column-rule: solid 8px; }       /* 与 "8px solid currentColor" 相同 */
p.abc { column-rule: thick inset blue; }
```

### 运行实例

padding:0.3em; background:gold; border:groove 2px gold; **column-rule: inset 2px gold;** **column-width:17em;**

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
