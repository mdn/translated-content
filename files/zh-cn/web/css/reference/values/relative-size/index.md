---
title: <relative-size>
slug: Web/CSS/Reference/Values/relative-size
l10n:
  sourceCommit: e97c79b17d685c08bef41ffc0b6c2f9e5ddc42f4
---

**`<relative-size>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)描述了相对尺寸关键字。`<relative-size>` 关键字定义相对于父元素计算尺寸的大小，此数据类型用于 {{cssxref("font")}} 简写属性和 {{cssxref("font-size")}} 属性。

## 语法

```plain
<relative-size> = smaller | larger
```

### 值

`<relative-size>` 数据类型使用以下列表中的关键字值来定义。

- `smaller`
  - : 比继承尺寸小一个单位的相对尺寸。

- `larger`
  - : 比继承尺寸大一个单位的相对尺寸。

## 描述

`<relative-size>` 关键字定义了相对元素当前尺寸的大小。如果继承的尺寸使用 {{cssxref("absolute-size")}} 关键字定义，`<relative-size>` 值等同于 [`<absolute-size>` 表格](/zh-CN/docs/Web/CSS/Reference/Values/absolute-size#描述)中的相邻尺寸。否则，尺寸的相对增减幅度在 120% 到 150% 之间。

## 示例

### 比较关键字值

```html
<ul>
  <li class="smaller">font-size: smaller;</li>
  <li>未指定 font-size</li>
  <li class="larger">font-size: larger;</li>
</ul>
```

```css
li {
  margin-bottom: 0.3em;
}
.smaller {
  font-size: smaller;
}
.larger {
  font-size: larger;
}
```

#### 结果

{{EmbedLiveSample('比较关键字值', '100%', 100)}}

## 规范

{{Specifications}}

## 参见

- CSS {{cssxref("relative-size")}} 数据类型
- CSS {{cssxref("font")}} 和 {{cssxref("font-size")}} 属性
- [CSS 字体](/zh-CN/docs/Web/CSS/Guides/Fonts)模块
