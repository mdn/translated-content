---
title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types) **`<url>`** 是指向资源的指针。资源可以是图像、视频、CSS 文件、字体文件、SVG 特性等。

## 语法

```plain
<url> = <url()>
```

### 值

其值可以为以下任意一种：

- [`<url()>`](/zh-CN/docs/Web/CSS/Reference/Values/url_function)
  - : `url()` 函数只接受 URL 字面字符串（带引号或不带引号）。

> [!NOTE]
> 规范中定义了一个名为 `src()` 的替代函数，它接受一个 URL 字符串或一个 [CSS 变量](/zh-CN/docs/Web/CSS/Reference/Values/var)。但目前尚无任何浏览器实现该函数。

## 规范

{{Specifications}}

## 参见

- {{cssxref("url_function", "url()")}}
