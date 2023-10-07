---
title: XML 简介
slug: Web/XML/XML_introduction
---

{{QuickLinksWithSubpages("/zh-CN/docs/Web/XML")}}

XML（Extensible Markup Language）是一种类似于 {{Glossary("HTML")}}，但是没有使用预定义标记的语言。因此，可以根据自己的设计需求定义专属的标记。这是一种强大将数据存储在一个可以存储、搜索和共享的格式中的方法。最重要的是，因为 XML 的基本格式是标准化的，如果你在本地或互联网上跨系统或平台共享或传输 XML，由于标准化的 XML 语法，接收者仍然可以解析数据。

有许多基于 XML 的语言，包括 [XHTML](/zh-CN/docs/Glossary/XHTML)、[MathML](/zh-CN/docs/Web/MathML)、[SVG](/zh-CN/docs/Web/SVG)、[RSS](/zh-CN/docs/Glossary/RSS) 和 [RDF](/zh-CN/docs/Glossary/RDF)。你也可以创建自己的。

## 构建 XML 文档

XML 和基于 XML 的语言的整个结构是建立在{{Glossary("tag","标签")}}之上的。

### XML 声明

XML——声明并非是一种标签，其用于传输文档的元数据。

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### 属性

- `version`
  - : 当前文档使用的版本。
- `encoding`
  - : 当前文档使用的编码。

### 注释

```html
<!-- Comment -->
```

## “标准的”XML（有效且格式良好）

### 设计规则的标准

判定一个 XML 文档正确的标准是：

- 文档必须是一个格式良好的文档。
- 文档遵循 XML 所有的语法规则并且有效。
- 文档遵循特定语义的规则，这些规则通常规定在 XML 或 DTD 规范中（[**文档类型定义**](/zh-CN/docs/Glossary/Doctype)）。

### 示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

现在让我们看看同一文档的更正版本：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

一个包含未定义标签的文档是无效的。例如，如果我们没有定义 `<warning>` 标签，这个文件将是无效的。

大多数浏览器都提供了可以识别格式不正确的 XML 文档的调试器。

## 实体

像 HTML 一样，XML 为一些特别预留的符号定义了一些方法，称为实体（entities），例如用于标记的大于号。下面是五个你必须知道的符号：

| 实体       | 符号 | 描述       |
| ---------- | ---- | ---------- |
| &amp;lt;   | <    | 小于符号   |
| &amp;gt;   | >    | 大于符号   |
| &amp;amp;  | &    | 和         |
| &amp;quot; | "    | 一个双引号 |
| &amp;apos; | '    | 一个单引号 |

这里只有五个声明的实体，更多的方法可以借助[文档类型定义](/zh-CN/docs/Glossary/DTD)引入。例如，为了创建一个 `&warning;` 实体，你可以这样做：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

你可以用数字和一些符号去表示一些特殊字符；例如，\&#xA9; 代表符号“©”。

## 展示 XML

XML 通常被用作描述，但是还有很多方法去展示 XML 数据。如果你没有定义让 XML 展示的特别方式，那么原始的 XML 会被展现在浏览器上。

一个展示 XML 输出的方法是将 [CSS](/zh-CN/docs/Web/CSS) 应用于文档，用 `xml-stylesheet` 去处理指令。

```plain
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

当然，也有其他更有效的方法去展示 XML，**Extensible Stylesheet Language Transformations**（[XSLT](/zh-CN/docs/Web/XSLT)）可以将 XML 转换为其他语言（例如 HTML）。这使得 XML 非常地有力。

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## 推荐

这篇文章明显是一篇非常简略的 XML 介绍，其中有一些例子和参考来帮助你入门。关于 XML 的更多细节，你可以在 Web 中查找更深入的文章。

学习超文本标记语言（[HTML](/zh-CN/docs/Web/HTML)）将帮助你更好的理解 XML。

## 参见

- [XML.com](https://www.xml.com/)
- [扩展标记语言（XML）@ W3.org](https://www.w3.org/XML/)
- [使用 XML: A List Apart](https://alistapart.com/article/usingxml/)
