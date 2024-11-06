---
title: 质量价值
slug: Glossary/Quality_values
l10n:
  sourceCommit: 5090082ff453369e1b9c44bf2bc975a00614114a
---

{{GlossarySidebar}}

**质量价值**（Quality value），也称作 _q 值_、_q 因子_，用于描述逗号分隔列表中值的优先级顺序。它是一种特殊的语法，允许在一些 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers) 和 HTML 中使用。

值的重要性由后缀 `';q='` 标记，后面紧跟一个介于 `0` 和 `1` 之间的值，包括最多三位小数，最高的值表示最高优先级。当未指定时，默认值为 `1`。

## 示例

以下语法

```http
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

表明优先级先后顺序：

| 值                                   | 优先级 |
| ------------------------------------ | ------ |
| `text/html`、`application/xhtml+xml` | `1.0`  |
| `application/xml`                    | `0.9`  |
| `*/*`                                | `0.8`  |

如果前面这两个值未定义优先级，值的顺序并不重要。然而，取值相同时，值越具体，其优先级越高。

```http
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| 值          | 优先级                  |
| ----------- | ----------------------- |
| `text/html` | `0.8`（但是完全指定了） |
| `text/*`    | `0.8`（部分指定）       |
| `*/*`       | `0.8`（完全没指定）     |

一些语法，例如 {{HTTPHeader("Accept")}}，允许使用额外的指定符号，例如 `text/html;level=1`。这些符号增加了值的特异性。它们的使用非常罕见。

## 参见

- 使用 q 值语法的 [HTTP 标头](/zh-CN/docs/Web/HTTP/Headers)：{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Encoding")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("TE")}}、{{HTTPHeader("Want-Digest")}}。
- [标头字段定义](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html)
