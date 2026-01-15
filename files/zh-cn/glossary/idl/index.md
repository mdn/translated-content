---
title: 接口描述语言（IDL）
slug: Glossary/IDL
l10n:
  sourceCommit: d7828f5d7479c27cc7eaeed6cce0c02a9142555c
---

**接口描述语言**（**IDL**）是一种用于指定独立于任何特定编程语言的对象接口的通用语言。

## 内容属性与接口描述语言属性

在 HTML 中，大多数属性有两个方面：**内容属性**和**接口描述语言属性**。

内容属性是从内容（HTML 代码）中设置的属性，你可以通过 {{domxref("element.setAttribute()")}} 或 {{domxref("element.getAttribute()")}} 来设置或获取它。内容属性总是一个字符串，即使期望的值应该是整数。例如，要使用内容属性将 {{HTMLElement("input")}} 元素的 `maxlength` 设置为 42，你需要在该元素上调用 `setAttribute("maxlength", "42")`。

接口描述语言属性也称为 JavaScript 属性。这些是你可以使用 JavaScript 属性（如 `element.foo`）读取或设置的属性。接口描述语言属性总是使用（但可能转换）底层的内容属性在你获取时返回一个值，并在你设置时保存一些内容属性。换句话说，接口描述语言属性本质上反映了内容属性。

大多数情况下，接口描述语言属性将按实际使用的方式返回其值。例如，{{HTMLElement("input")}} 元素的默认 `type` 是“text”，所以如果你设置 `input.type="foobar"`，`<input>` 元素的类型将是文本（在外观和行为上），但“type”内容属性的值将是“foobar”。然而，`type` 接口描述语言属性将返回字符串“text”。

接口描述语言属性并不总是字符串；例如，`input.maxlength` 是一个数字（有符号长整型）。使用接口描述语言属性时，你读取或设置所需类型的值，所以 `input.maxlength` 总是返回一个数字，并且当你设置 `input.maxlength` 时，它需要一个数字。如果你传递其他类型，它会根据标准 JavaScript 规则自动转换为数字。

接口描述语言属性可以[反射其他类型](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes)，例如无符号长整型、URL、布尔值等。不幸的是，没有明确的规则，接口描述语言属性与其对应的内容属性的行为取决于具体属性。大多数时候，它将遵循[规范中规定的规则](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes)，但有时不会。HTML 规范尝试让这对开发人员尽可能友好，但由于各种原因（主要是历史原因），某些属性的行为可能很奇怪（例如 `select.size`），你应该阅读规范以了解它们的具体行为。

## 参见

- 维基百科上的[接口描述语言](https://zh.wikipedia.org/wiki/接口描述语言)
- [HTML 属性参考](/zh-CN/docs/Web/HTML/Reference/Attributes)
- [接口定义语言](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
