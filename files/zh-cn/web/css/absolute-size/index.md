---
title: <absolute-size>
slug: Web/CSS/absolute-size
l10n:
  sourceCommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{CSSRef}}

**`<absolute-size>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)描述了绝对大小关键字。此数据类型用于 {{cssxref("font")}} 简写属性和 {{cssxref("font-size")}} 属性。

字体大小关键字映射到已弃用的 HTML `size` 属性，请参阅下面的 [HTML size 属性](#html_size_属性)部分。

## 语法

```plain
<absolute-size> = xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large
```

### 值

`<absolute-size>` 数据类型使用以下列表中的关键字值进行定义：

- `xx-small`
  - : 绝对大小：等于 `medium` 字体的 60%，对应已弃用的属性 `size="1"`。
- `x-small`
  - : 绝对大小：等于 `medium` 字体的 75%。
- `small`
  - : 绝对大小：等于 `medium` 字体的 89%，对应已弃用的属性 `size="2"`。
- `medium`
  - : 绝对大小：用户首选的字体大小，此值用作参考中等值。对应到属性 `size="3"`。
- `large`
  - : 绝对大小：比 `medium` 字体大 20%，对应已弃用的属性 `size="4"`。
- `x-large`
  - : 绝对大小：比 `medium` 字体大 50%，对应已弃用的属性 `size="5"`。
- `xx-large`
  - : 绝对大小：等于 `medium` 字体的两倍，对应已弃用的属性 `size="6"`。
- `xxx-large`
  - : 绝对大小：等于 `medium` 字体的三倍，对应已弃用的属性 `size="7"`。

## 描述

每个 `<absolute-size>` 关键字值大小是相对于 `medium` 大小和个别设备的特征（例如设备分辨率）而定的。用户代理为每个字体维护一个字体大小表，其中 `<absolute-size>` 关键字是索引。

在 CSS1（1996）中，相邻关键字值索引之间的缩放比例为 1.5，这太大了。在 CSS2（1998）中，相邻关键字值索引之间的缩放比例为 1.2，这对细小的值造成了问题。由于发现相邻绝对大小关键字之间的单一固定比例存在问题，因此不再推荐使用固定比例，为了保持可读性，唯一的建议是最小字体大小不应小于 `9px`。

下表列出了每个 `<absolute-size>` 关键字值的缩放比例、映射到 [`<h1>` 至 `<h6>`](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 标题以及映射到已弃用的 [HTML `size` 属性](#html_size_属性)。

| `<absolute-size>` | xx-small | x-small | small | medium | large | x-large | xx-large | xxx-large |
| ----------------- | -------- | ------- | ----- | ------ | ----- | ------- | -------- | --------- |
| 缩放比例          | 3/5      | 3/4     | 8/9   | 1      | 6/5   | 3/2     | 2/1      | 3/1       |
| 对应 HTML 标题    | h6       |         | h5    | h4     | h3    | h2      | h1       |           |
| HTML `size` 属性  | 1        |         | 2     | 3      | 4     | 5       | 6        | 7         |

### HTML size 属性

HTML 中用于设置字体大小的 `size` 属性已弃用。该属性值可以是介于 `1` and `7` 之间的整数，也可以是相对值。相对值是带符号的整数，符号 `+` 表示增加字体大小，符号 `-` 表示减小字体大小。值 `+1` 表示将 `size` 增加 1，值 `-2` 表示将 `size` 减小 2，计算后的值将被限制在最小值 `1` 和最大值 `7` 之间。

## 示例

### 比较关键字值

```html
<ul>
  <li class="xx-small">font-size: xx-small;</li>
  <li class="x-small">font-size: x-small;</li>
  <li class="small">font-size: small;</li>
  <li class="medium">font-size: medium;</li>
  <li class="large">font-size: large;</li>
  <li class="x-large">font-size: x-large;</li>
  <li class="xx-large">font-size: xx-large;</li>
  <li class="xxx-large">font-size: xxx-large;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.xx-small {
  font-size: xx-small;
}
.x-small {
  font-size: x-small;
}
.small {
  font-size: small;
}
.medium {
  font-size: medium;
}
.large {
  font-size: large;
}
.x-large {
  font-size: x-large;
}
.xx-large {
  font-size: xx-large;
}
.xxx-large {
  font-size: xxx-large;
}
```

#### 结果

{{EmbedLiveSample('比较关键字值', '100%', 400)}}

## 规范

{{Specifications}}

## 参见

- CSS {{cssxref("relative-size")}} 数据类型
- CSS {{cssxref("font")}} 和 {{cssxref("font-size")}} 属性
- [CSS 字体](/zh-CN/docs/Web/CSS/CSS_fonts)模块
