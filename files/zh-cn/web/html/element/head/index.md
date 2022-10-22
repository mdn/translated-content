---
title: <head>
slug: Web/HTML/Element/head
---

## 概述

**HTML head 元素** 规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等。

- _[内容类别](/zh-CN/docs/HTML/Content_categories)_ 无
- *允许内容*至少包含一个{{HTMLElement("title")}} 元素来指定文档的标题信息，除非标题已经从更高等级协议中指定（{{HTMLElement("iframe")}} ）。
- _允许父元素_{{HTMLElement("html")}} 元素
- _DOM 接口_ {{domxref("HTMLHeadElement")}}

## 属性

该元素包含[全局属性](/zh-CN/docs/HTML/Global_attributes)。

- {{htmlattrdef("profile")}} {{Deprecated_Inline}}
  - : 一个由空格分隔的 URL 列表，这些 URL 包含着有关页面的配置信息。

## 示例

```html
<html>
  <head>
    <title>文档标题</title>
  </head>
</html>
```

## 附注

如果在文档中忽略了 `<head>` 标签，则大部分浏览器会自动创建一个 `<head>` 元素。[当然，有一些不会](http://www.stevesouders.com/blog/2010/05/12/autohead-my-first-browserscope-user-test/)。
下面这些浏览器经测试不会自动创建一个 head 元素：Android <=1.6, iPhone <=3.1.3, Nokia 90, Opera <=9.27, and Safari <=3.2.1。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- 可用于\<head>元素内的元素有：{{HTMLElement("title")}}, {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("style")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("noscript")}}, {{HTMLElement("command")}}

{{HTMLRef}}
