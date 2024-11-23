---
title: <time>
slug: Web/CSS/time
---

{{CSSRef}}

**`<time>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types) 表达了以秒（s）或毫秒（ms）为单位的时间的值。于{{cssxref("animation")}}、{{cssxref("transition")}}及相关属性中使用。

## 语法

`<time>` 数据类型由 {{cssxref("&lt;number&gt;")}}后加下方列出的单位之一组成。前方也可选择添加一个`+` 或 `-`。单位与数字之间无空格。

> [!NOTE]
> 尽管数字 `0` 不管在何种单位下均相等，但其单位不可去除。换句话说， `0` 是无效的，并不代表 `0s` 或 `0ms`。

### 单位

- **`s`**
  - : 以秒为单位的时间。例： `0s`, `1.5s`, `-60s`。
- **`ms`**
  - : 以毫秒为单位的时间。例： `0ms`, `150.25ms`, `-60000ms`。

> [!NOTE]
> 秒 `s` 与毫秒 `ms` 间的转换为： `1s` = `1000ms`。

## 示例

### 有效时间

```plain example-good
12s         正整数
-456ms      负整数
4.3ms       非整数
14mS        单位大小写不敏感，虽然不推荐大写
+0s         0 以及前置 + 号和单位
-0ms        0 以及前置 - 号和单位
```

### 无效时间

```plain example-bad
0           尽管<length>中允许 0，其在<time>中无效。
12.0        此为<number>而非<time>。其缺乏单位。
7 ms        数字与单位间不允许有空格。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
