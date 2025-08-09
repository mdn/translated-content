---
title: 使用 XSLT 转换 XML
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
---

内容和表示分离是 [XML](/zh-CN/docs/Web/XML) 的一个关键设计特性。XML 文档的结构被设计成反映和阐明内容本身的各方面之间的重要关系，而不受需要提供有关此数据最终应该如何呈现的任何指示的障碍。这种智能的结构尤为重要，特别是在越来越多的数据在通过网络连接的高度异构的机器之间自动化传输的趋势下。

然而，最终存储在 XML 文档中的大部分内容都需要呈现给人类。因为浏览器提供了一个熟悉且高度灵活的界面，所以它是传递此类呈现给人类的 XML 内容的理想机制。Firefox 利用各类 XML 技术从头开始构建，将处理原始 XML 文档和用于为显示的 HTML 设置样式和布局的专用样式表所需的机制合并到一起，从而通过客户端处理来减少服务器的负载。

目前，Gecko（Firefox 的排版引擎）支持两种形式的 XML 样式表。对于外观的基本控制（字体、颜色、位置等），Gecko 使用 [CSS](/zh-CN/docs/Web/CSS)。

我们这里的重点是 Gecko 支持的第二种样式表：XSLT 样式表。XSLT 代表可扩展样式表转换语言（eXtensible Stylesheet Language/Transform），这个名字很贴切。XSLT 允许样式表的作者以两种重要的方式转换主 XML 文档：对文档进行操作和排序，包括在需要的情况下进行整体重排序，以及将内容转换为不同的格式（以 Firefox 为例，则重点是将其即时转换为后续可用浏览器显示的 HTML）。

## XSLT/XPath 参考

### 元素

[元素](/zh-CN/docs/Web/XML/XSLT/Reference/Element)

- [xsl:apply-imports](/zh-CN/docs/Web/XML/XSLT/Reference/Element/apply-imports)（_支持_）
- [xsl:apply-templates](/zh-CN/docs/Web/XML/XSLT/Reference/Element/apply-templates)（_支持_）
- [xsl:attribute](/zh-CN/docs/Web/XML/XSLT/Reference/Element/attribute)（_支持_）
- [xsl:attribute-set](/zh-CN/docs/Web/XML/XSLT/Reference/Element/attribute-set)（_支持_）
- [xsl:call-template](/zh-CN/docs/Web/XML/XSLT/Reference/Element/call-template)（_支持_）
- [xsl:choose](/zh-CN/docs/Web/XML/XSLT/Reference/Element/choose)（_支持_）
- [xsl:comment](/zh-CN/docs/Web/XML/XSLT/Reference/Element/comment)（_支持_）
- [xsl:copy](/zh-CN/docs/Web/XML/XSLT/Reference/Element/copy)（_支持_）
- [xsl:copy-of](/zh-CN/docs/Web/XML/XSLT/Reference/Element/copy-of)（_支持_）
- [xsl:decimal-format](/zh-CN/docs/Web/XML/XSLT/Reference/Element/decimal-format)（_支持_）
- [xsl:element](/zh-CN/docs/Web/XML/XSLT/Reference/Element/element)（_支持_）
- [xsl:fallback](/zh-CN/docs/Web/XML/XSLT/Reference/Element/fallback)（_不支持_）
- [xsl:for-each](/zh-CN/docs/Web/XML/XSLT/Reference/Element/for-each)（_支持_）
- [xsl:if](/zh-CN/docs/Web/XML/XSLT/Reference/Element/if)（_支持_）
- [xsl:import](/zh-CN/docs/Web/XML/XSLT/Reference/Element/import) _(mostly supported)_
- [xsl:include](/zh-CN/docs/Web/XML/XSLT/Reference/Element/include)（_支持_）
- [xsl:key](/zh-CN/docs/Web/XML/XSLT/Reference/Element/key)（_支持_）
- [xsl:message](/zh-CN/docs/Web/XML/XSLT/Reference/Element/message)（_支持_）
- [xsl:namespace-alias](/zh-CN/docs/Web/XML/XSLT/Reference/Element/namespace-alias)（_不支持_）
- [xsl:number](/zh-CN/docs/Web/XML/XSLT/Reference/Element/number)（_部分支持_）
- [xsl:otherwise](/zh-CN/docs/Web/XML/XSLT/Reference/Element/otherwise)（_支持_）
- [xsl:output](/zh-CN/docs/Web/XML/XSLT/Reference/Element/output)（_部分支持_）
- [xsl:param](/zh-CN/docs/Web/XML/XSLT/Reference/Element/param)（_支持_）
- [xsl:preserve-space](/zh-CN/docs/Web/XML/XSLT/Reference/Element/preserve-space)（_支持_）
- [xsl:processing-instruction](/zh-CN/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [xsl:sort](/zh-CN/docs/Web/XML/XSLT/Reference/Element/sort)（_支持_）
- [xsl:strip-space](/zh-CN/docs/Web/XML/XSLT/Reference/Element/strip-space)（_支持_）
- [xsl:stylesheet](/zh-CN/docs/Web/XML/XSLT/Reference/Element/stylesheet)（_部分支持_）
- [xsl:template](/zh-CN/docs/Web/XML/XSLT/Reference/Element/template)（_支持_）
- [xsl:text](/zh-CN/docs/Web/XML/XSLT/Reference/Element/text)（_部分支持_）
- [xsl:transform](/zh-CN/docs/Web/XML/XSLT/Reference/Element/transform)（_支持_）
- [xsl:value-of](/zh-CN/docs/Web/XML/XSLT/Reference/Element/value-of)（_部分支持_）
- [xsl:variable](/zh-CN/docs/Web/XML/XSLT/Reference/Element/variable)（_支持_）
- [xsl:when](/zh-CN/docs/Web/XML/XSLT/Reference/Element/when)（_支持_）
- [xsl:with-param](/zh-CN/docs/Web/XML/XSLT/Reference/Element/with-param)（_支持_）

### 轴

[轴](/zh-CN/docs/Web/XML/XPath/Reference/Axes)

- [ancestor](/zh-CN/docs/Web/XML/XPath/Reference/Axes#ancestor)
- [ancestor-or-self](/zh-CN/docs/Web/XML/XPath/Reference/Axes#ancestor-or-self)
- [attribute](/zh-CN/docs/Web/XML/XPath/Reference/Axes#attribute)
- [child](/zh-CN/docs/Web/XML/XPath/Reference/Axes#child)
- [descendant](/zh-CN/docs/Web/XML/XPath/Reference/Axes#descendant)
- [descendant-or-self](/zh-CN/docs/Web/XML/XPath/Reference/Axes#descendant-or-self)
- [following](/zh-CN/docs/Web/XML/XPath/Reference/Axes#following)
- [following-sibling](/zh-CN/docs/Web/XML/XPath/Reference/Axes#following-sibling)
- [namespace](/zh-CN/docs/Web/XML/XPath/Reference/Axes#namespace)（_不支持_）
- [parent](/zh-CN/docs/Web/XML/XPath/Reference/Axes#parent)
- [preceding](/zh-CN/docs/Web/XML/XPath/Reference/Axes#preceding)
- [preceding-sibling](/zh-CN/docs/Web/XML/XPath/Reference/Axes#preceding-sibling)
- [self](/zh-CN/docs/Web/XML/XPath/Reference/Axes#self)

### 函数

[函数](/zh-CN/docs/Web/XML/XPath/Reference/Functions)

- [boolean()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/boolean)（_支持_）
- [ceiling()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/ceiling)（_支持_）
- [concat()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/concat)（_支持_）
- [contains()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/contains)（_支持_）
- [count()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/count)（_支持_）
- [current()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/current)（_支持_）
- [document()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/document)（_支持_）
- [element-available()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/element-available)（_支持_）
- [false()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/false)（_支持_）
- [floor()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/floor)（_支持_）
- [format-number()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/format-number)（_支持_）
- [function-available()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/function-available)（_支持_）
- [generate-id()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/generate-id)（_支持_）
- [id()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/id)（_部分支持_）
- [key()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/key)（_支持_）
- [lang()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/lang)（_支持_）
- [last()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/last)（_支持_）
- [local-name()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/local-name)（_支持_）
- [name()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/name)（_支持_）
- [namespace-uri()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/namespace-uri)（_支持_）
- [normalize-space()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/normalize-space)（_支持_）
- [not()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/not)（_支持_）
- [number()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/number)（_支持_）
- [position()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/position)（_支持_）
- [round()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/round)（_支持_）
- [starts-with()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/starts-with)（_支持_）
- [string()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/string)（_支持_）
- [string-length()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/string-length)（_支持_）
- [substring()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/substring)（_支持_）
- [substring-after()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/substring-after)（_支持_）
- [substring-before()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/substring-before)（_支持_）
- [sum()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/sum)（_支持_）
- [system-property()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/system-property)（_支持_）
- [translate()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/translate)（_支持_）
- [true()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/true)（_支持_）
- [unparsed-entity-url()](/zh-CN/docs/Web/XML/XPath/Reference/Functions/unparsed-entity-url)（_不支持_）

## 扩展阅读

[扩展阅读](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading)

- [图书](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#图书)
- [数字内容](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#数字内容)
  - [网站](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#网站)
  - [文章](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#文章)
  - [教程/示例](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#教程示例)
  - [其他](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading#其他)

## 原始文档信息

- 版权信息：Copyright © 2001-2003 Netscape. All rights reserved.
- 注意：这篇转载文章最初是 DevEdge 的一部分。
