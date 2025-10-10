---
title: HTML
slug: Glossary/HTML
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**HTML**（HyperText Markup Language，超文本标记语言）是一种用于定义网页结构的描述语言。

## 发展史

1990 年，由于对 {{glossary("World Wide Web","Web")}} 未来发展的远见，Tim Berners-Lee 提出了{{glossary("hypertext", "超文本")}}的概念，并在第二年在 {{glossary("SGML")}} 的基础上将其正式定义为一个标记语言。{{glossary("IETF")}} 于 1993 年正式开始制定 HTML 规范，并在经历了几个版本的草案后于 1995 年发布了 HTML 2.0 版本。1994 年，Berners-Lee 为了 Web 发展而成立了 {{glossary("W3C")}}。1996 年，W3C 接管了 HTML 的标准化工作，并在 1 年后发布了 HTML 3.2 推荐标准。1999 年，HTML 4.0 发布，并在 2000 年成为 {{glossary("ISO")}} 标准。

自那以后，W3C 几乎放弃了 HTML 而转向 {{glossary("XHTML")}}，并于 2004 年成立了另一个独立的小组 {{glossary("WHATWG")}}。幸运的是，WHATWG 后来又转回来参与了 HTML 标准的制定，这两个组织在 2008 年发布了 {{Glossary("HTML5")}} 的第一份草案，并在 2014 年发布了官方标准。HTML5 这个术语只是一个指代 [HTML 动态标准](https://html.spec.whatwg.org)中一组现代 Web 技术的流行用语。

## 概念和语法

HTML 文档是包含多个{{glossary("element","元素")}}的文本文档。每个元素都用一对开始和结束{{Glossary("tag","标签")}}包裹。每个标签以尖括号（`<>`）开始和结束。也有一部分标签中不需要包含文本，这些标签称为*空*标签，如 {{htmlelement("img")}}。

你可以使用{{Glossary("attribute","属性")}}来扩展 HTML 标签。属性用来提供一些附加信息，这些信息可能会影响浏览器对元素的解析：

![一个 HTML 元素的详细结构](anatomy-of-an-html-element.png)

HTML 文件通常会以 `.htm` 或 `.html` 为扩展名。用户可以从 {{Glossary("Server","Web 服务器")}}中下载，并使用任一 {{Glossary("Browser","Web 浏览器")}}来解析和显示这些文件。

## 参见

- 维基百科上的 [HTML](https://zh.wikipedia.org/wiki/HTML)
- [HTML 教程](/zh-CN/docs/Learn_web_development/Core/Structuring_content)
- [codecademy.com 上的在线教程](https://www.codecademy.com/en/tracks/web)
- [MDN HTML 文档](/zh-CN/docs/Web/HTML)
- [HTML 规范](https://www.w3.org/TR/html5/)
