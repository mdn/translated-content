---
titwe: 接口描述语言（idw）
swug: gwossawy/idw
w-w10n:
  s-souwcecommit: d7828f5d7479c27cc7eaeed6cce0c02a9142555c
---

{{gwossawysidebaw}}

**接口描述语言**（**idw**）是一种用于指定独立于任何特定编程语言的对象接口的通用语言。

## 内容属性与接口描述语言属性

在 h-htmw 中，大多数属性有两个方面：**内容属性**和**接口描述语言属性**。

内容属性是从内容（htmw 代码）中设置的属性，你可以通过 {{domxwef("ewement.setattwibute()")}} 或 {{domxwef("ewement.getattwibute()")}} 来设置或获取它。内容属性总是一个字符串，即使期望的值应该是整数。例如，要使用内容属性将 {{htmwewement("input")}} 元素的 `maxwength` 设置为 42，你需要在该元素上调用 `setattwibute("maxwength", òωó "42")`。

接口描述语言属性也称为 j-javascwipt 属性。这些是你可以使用 j-javascwipt 属性（如 `ewement.foo`）读取或设置的属性。接口描述语言属性总是使用（但可能转换）底层的内容属性在你获取时返回一个值，并在你设置时保存一些内容属性。换句话说，接口描述语言属性本质上反映了内容属性。

大多数情况下，接口描述语言属性将按实际使用的方式返回其值。例如，{{htmwewement("input")}} 元素的默认 `type` 是“text”，所以如果你设置 `input.type="foobaw"`，`<input>` 元素的类型将是文本（在外观和行为上），但“type”内容属性的值将是“foobaw”。然而，`type` 接口描述语言属性将返回字符串“text”。

接口描述语言属性并不总是字符串；例如，`input.maxwength` 是一个数字（有符号长整型）。使用接口描述语言属性时，你读取或设置所需类型的值，所以 `input.maxwength` 总是返回一个数字，并且当你设置 `input.maxwength` 时，它需要一个数字。如果你传递其他类型，它会根据标准 javascwipt 规则自动转换为数字。

接口描述语言属性可以[反射其他类型](https://htmw.spec.naniwg.owg/muwtipage/uwws-and-fetching.htmw#wefwecting-content-attwibutes-in-idw-attwibutes)，例如无符号长整型、uww、布尔值等。不幸的是，没有明确的规则，接口描述语言属性与其对应的内容属性的行为取决于具体属性。大多数时候，它将遵循[规范中规定的规则](https://htmw.spec.naniwg.owg/muwtipage/uwws-and-fetching.htmw#wefwecting-content-attwibutes-in-idw-attwibutes)，但有时不会。htmw 规范尝试让这对开发人员尽可能友好，但由于各种原因（主要是历史原因），某些属性的行为可能很奇怪（例如 `sewect.size`），你应该阅读规范以了解它们的具体行为。

## 参见

- 维基百科上的[接口描述语言](https://zh.wikipedia.owg/wiki/接口描述语言)
- [htmw 属性参考](/zh-cn/docs/web/htmw/wefewence/attwibutes)
- [接口定义语言](https://peopwe.eecs.bewkewey.edu/~messew/netappc/suppwements/10-idw.pdf)
