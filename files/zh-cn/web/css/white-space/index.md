---
title: white-space
slug: Web/CSS/white-space
---

{{CSSRef}}

**`white-space`** CSS 属性是用来设置如何处理元素中的 {{Glossary("whitespace", "空白")}}。

{{EmbedInteractiveExample("pages/css/white-space.html")}}

## 语法

```
/* Keyword values */
white-space: normal;
white-space: nowrap;
white-space: pre;
white-space: pre-wrap;
white-space: pre-line;

/* https://github.com/w3c/csswg-drafts/pull/2841 */
white-space: break-spaces;

/* Global values */
white-space: inherit;
white-space: initial;
white-space: unset;
```

`white-space`属性被指定为从下面的值列表中选择的单个关键字。

### 值

- `normal`
  - : 连续的空白符会被合并，换行符会被当作空白符来处理。换行在填充「行框盒子 ([line boxes](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting))」时是必要。
- `nowrap`
  - : 和 normal 一样，连续的空白符会被合并。但文本内的换行无效。
- `pre`
  - : 连续的空白符会被保留。在遇到换行符或者{{HTMLElement("br")}}元素时才会换行。
- `pre-wrap`
  - : 连续的空白符会被保留。在遇到换行符或者{{HTMLElement("br")}}元素，或者需要为了填充「行框盒子 ([line boxes](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting))」时才会换行。
- `pre-line`
  - : 连续的空白符会被合并。在遇到换行符或者{{HTMLElement("br")}}元素，或者需要为了填充「行框盒子 ([line boxes](https://www.w3.org/TR/CSS2/visuren.html#inline-formatting))」时会换行。

**`break-spaces`**
与 `pre-wrap`的行为相同，除了：

- 任何保留的空白序列总是占用空间，包括在行尾。
- 每个保留的空格字符后都存在换行机会，包括空格字符之间。
- 这样保留的空间占用空间而不会挂起，从而影响盒子的固有尺寸（最小内容大小和最大内容大小）。

下面的表格总结了各种 white-space 值的行为：

|                | 换行符 | 空格和制表符 | 文字换行 | 行尾空格 |
| -------------- | ------ | ------------ | -------- | -------- |
| `normal`       | 合并   | 合并         | 换行     | 删除     |
| `nowrap`       | 合并   | 合并         | 不换行   | 删除     |
| `pre`          | 保留   | 保留         | 不换行   | 保留     |
| `pre-wrap`     | 保留   | 保留         | 换行     | 挂起     |
| `pre-line`     | 保留   | 合并         | 换行     | 删除     |
| `break-spaces` | 保留   | 保留         | 换行     | 换行     |

## 示例

### 基础示例

```css
code {
  white-space: pre;
}
```

### 下面的代码允许在 {{HTMLElement("pre")}} 中换行

```css
pre {
  word-wrap: break-word;      /* IE 5.5-7 */
  white-space: pre-wrap;      /* current browsers */
}
```

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}
