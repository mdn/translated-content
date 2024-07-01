---
title: "@import"
slug: Web/CSS/@import
---

{{CSSRef}}

## 概述

**`@import`** [CSS](/zh-CN/docs/Web/CSS)[@规则](/zh-CN/docs/Web/CSS/At-rule)，用于从其他样式表导入样式规则。这些规则必须先于所有其他类型的规则，{{cssxref("@charset")}} 规则除外; 因为它不是一个[嵌套语句](/zh-CN/docs/Web/CSS/Syntax#nested_statements)，@import 不能在[条件组的规则](/zh-CN/docs/Web/CSS/At-rule#Conditional_Group_Rules)中使用。

因此，用户代理可以避免为不支持的媒体类型检索资源，作者可以指定依赖媒体的 @import 规则。这些条件导入在 URI 之后指定逗号分隔的[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)。在没有任何媒体查询的情况下，导入是无条件的。指定所有的媒体具有相同的效果。

## 语法

```plain
@import url;
@import url list-of-media-queries;
```

其中：

- _url_
  - : 是一个表示要引入资源位置的 {{cssxref("&lt;string&gt;")}} 或者 {{cssxref("&lt;uri&gt;")}} 。这个 URL 可以是绝对路径或者相对路径。要注意的是这个 URL 不需要指明一个文件；可以只指明包名，然后合适的文件会被自动选择 (e.g. **chrome://communicator/skin/**). [See here](/zh-CN/docs/Mozilla/Tech/XUL/Tutorial/The_Chrome_URL) 了解更多。
- _list-of-media-queries_
  - : 是一个逗号分隔的 [媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries) 条件列表，决定通过 URL 引入的 CSS 规则 在什么条件下应用。如果浏览器不支持列表中的任何一条媒体查询条件，就不会引入 URL 指明的 CSS 文件。

## 正规语法

{{csssyntax}}

## 示例

```css
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import "custom.css";
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url("landscape.css") screen and (orientation: landscape);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
