---
title: ':optional'
slug: Web/CSS/:optional
---

{{ CSSRef() }}

## 摘要

`:optional` CSS [伪类](/zh-CN/CSS/Pseudo-classes) 表示任意没有{{ htmlattrxref("required","input") }}属性的 {{ HTMLElement("input") }}，{{HTMLElement("select")}} 或 {{ HTMLElement("textarea") }} 元素使用它。

```
/* Selects any optional <input> */
input:optional {
  border: 1px dashed black;
}
```

它允许表单容易的展示可选字段并且渲染其外观。

> **备注：** 为必填字段设置外观，请使用 {{ cssxref(":required") }}伪类。

## 语法

{{csssyntax}}

## 例子

查看{{ cssxref(":invalid") }} 示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ cssxref(":required") }}
- {{ cssxref(":invalid") }}
- {{ cssxref(":valid") }}
- [Form data validation](/zh-CN/docs/Learn/HTML/Forms/Form_validation)
