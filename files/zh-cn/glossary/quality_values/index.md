---
title: Quality values
slug: Glossary/Quality_values
---

**质量价值**（Quality values）亦称作 q 值，其与 q 因子以逗号分隔的方式来描述值的优先级顺序，是 HTTP 消息头以及 HTML 中的特殊语法。值的重要性以一种后缀表示：`';q='`。该后缀紧接`0`到`1`间的值 (值可达小数点后三位)，最高值表明最高优先级。无此后缀时，默认值为`1`。

## 示例

以下语法

```
text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
```

表明优先级先后顺序：

| Value 值                                | Priority 优先级 |
| --------------------------------------- | --------------- |
| `text/html` and `application/xhtml+xml` | `1.0`           |
| `application/xml`                       | `0.9`           |
| `*/*`                                   | `0.8`           |

如果前面这两个值未定义优先级，值的顺序并不重要。然而，q 值相同时，值越具体，其优先级越高。

```
text/html;q=0.8,text/*;q=0.8,*/*;q=0.8
```

| Value 值    | Priority 优先级               |
| ----------- | ----------------------------- |
| `text/html` | `0.8` (but totally specified) |
| `text/*`    | `0.8` (partially specified)   |
| `*/*`       | `0.8` (not specified)         |

像 Accept 消息头的语法可以有额外的标记，比如`text/html;level=1`。这使值更具体，不过该用法不常见。

## 浏览器信息

### 火狐

从 Firefox 18 开始，质量因子的值可达小数点后二位（之前的版本只能达小数点后一位）。（[Firefox bug 672448](https://bugzil.la/672448)）

## 更多

- 使用 q 值的 HTTP 消息头：{{HTTPHeader("Accept")}}、{{HTTPHeader("Accept-Charset")}}、{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept-Encoding")}}和{{HTTPHeader("TE")}}。
