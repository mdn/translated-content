---
title: <url>
slug: Web/CSS/url_value
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

**`<url>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)是指向资源的指针。资源可以是图像、视频、CSS 文件、字体文件、SVG 特性等。

## 语法

```plain
<url> = <url()> | <src()>
```

### 值

其值可以为以下任意一种：

- [`<url()>`](/zh-CN/docs/Web/CSS/url_function)
  - : `url()` 函数只接受 URL 字面字符串（带引号或不带引号）。
- `<src()>`
  - : 此函数可以接受 URL 字符串或 [CSS 变量](/zh-CN/docs/Web/CSS/var)。

## 规范

{{Specifications}}

## 参见

- {{cssxref("url_function", "url()")}}
