---
title: "`<url>` CSS 类型"
short-title: <url>
slug: Web/CSS/Reference/Values/url_value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

**`<url>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)是指向资源的指针。

## 语法

```plain
<url> = url()
```

### 值

该值可以是绝对 URL 或相对 URL。

- [`<url()>`](/zh-CN/docs/Web/CSS/Reference/Values/url_function)
  - : `url()` 函数接受一个 URL，可以写成带引号的字符串，也可以写成不带引号的 URL 标记。

> [!NOTE]
> [CSS 值和单位模块](/zh-CN/docs/Web/CSS/Guides/Values_and_units)还将 `src()` 函数引入为 `<url>` 值。目前尚无浏览器支持此特性。

## 描述

`<url>` 数据类型通过 [`url()`](/zh-CN/docs/Web/CSS/Reference/Values/url_function) 函数书写，表示一个 `URL`，即指向内部或外部资源的指针。该资源可以是图像、视频、CSS 文件、字体文件、SVG 特性等。URL 可以是绝对的或相对的。

```css
/* 相对 URL */
url("styles.css")
url("assets/icon.svg")
url("../assets/image.png")

/* 绝对 URL */
url("http://example.com/fonts/myFont.ttf")
url("https://example.com/images/background.jpg")

/* 数据 URL */
url("data:image/svg+xml,%3Csvg'%3E%3Cpath d='M10 10h60' stroke='%2300F' stroke-width='5'/%3E%3Cpath d='M10 20h60' stroke='%230F0' stroke-width='5'/%3E%3C/svg%3E")
url("data:image/png;base64,iVBORw0KGgoAAA...")
```

### 外部资源与 CORS

通过 `<url>` 值导入外部资源的能力由实现定义，且常因安全原因而受到限制。

根据应用了引用外部资源的 `<url>` 的 CSS 属性不同，该资源可能受到[跨源资源共享（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)限制。

某些 CSS 属性——包括 {{cssxref("mask-image")}}、{{cssxref("filter")}}，以及在引用 {{SVGElement("svg")}} 图像元素时的 {{cssxref("clip-path")}} 等——在以 CORS 模式获取外部跨源资源时，可能要求通过 CORS 校验。若 CORS 校验失败，该资源可能被阻止，因而不会用于渲染。

请注意，`<url>` 值类型本身并不强制进行 CORS 校验，而是由各个 CSS 属性分别执行。

当直接用 `file://` 打开 HTML 文件时，资源可能因本地也会应用 CORS 规则而加载失败。现代浏览器将 `file://` 视为唯一源，这意味着跨文件资源可能被阻止。在这种情况下，可以托管一个 [HTTP 服务器](/zh-CN/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server)以避免 CORS 错误。`file://` URL 的安全行为也会因浏览器和操作系统的文件权限而有所不同。

## 示例

相对 URL

```css
body {
  background-image: url("images/background.jpg");
}
```

绝对 URL

```css
body {
  background-image: url("https://example.com/images/background.jpg");
}
```

## 规范

{{Specifications}}

## 参见

- {{cssxref("url_function", "url()")}}
