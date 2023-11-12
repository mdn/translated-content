---
title: <url>
slug: Web/CSS/url
---

{{CSSRef}}

## 概述

[CSS](/zh-CN/CSS) 数据类型 `<url>` 指向一个资源。它没有独有的表达形式，只能通过 `url()` 函数定义。

> **备注：** **URI 和 URL?**
>
> [URI](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E6%A0%87%E5%BF%97%E7%AC%A6)（统一资源标识符）与 [URL](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6)（统一资源定位符）不同。URL 描述资源的位置，而 URI 描述资源的 id。URI 可以是一个资源的 URL（地址）、或 [URN](https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%90%8D%E7%A7%B0)（统一资源名称）。
>
> 在 CSS Level 1 中，`url()` 函数被引入并用于描述 URL，即地址（虽然没有明确定义，但指一个 CSS 数据类型 `<url>`）
>
> 在 CSS Level 2 中，`url()` 函数被扩展为可以描述任何一个 URI，即 URL 或 URN。这一定义导致 `url()` 函数被用于创建一个 `<uri>` 数据类型。这一行为使人迷惑，且在 CSS 中几乎从不使用 URN。
>
> 为了解决这一问题，在 CSS Level 3 中恢复了它的初始定义， `url()` 函数被明确定义为指代 `<url>` CSS 数据类型，且 `<uri>` CSS 数据类型不再存在。
>
> 注意，这些语义信息并不会影响 Web 开发者的开发和对此数据类型的具体实现。

许多 [CSS 属性](/zh-CN/CSS_Reference) 将 URL 作为属性值，例如 {{ Cssxref("background-image") }}、{{ Cssxref("cursor") }}、{{ Cssxref("@font-face") }}、{{ cssxref("list-style") }} 等。

## url() 函数

URL 可以使用单引号或双引号包含，也可以直接书写。可以在此函数中使用相对地址。相对地址相对于 CSS 样式表的 URL（而不是网页的 URL）。

## 语法

```
 <CSS 属性>:  url("http://mysite.example.com/mycursor.png")

 <CSS 属性>:  url(http://mysite.example.com/mycursor.png)
```

> **备注：** 从 Firefox 15 开始，不再允许在未用引号包含的 url() 中使用大于 0x7e 的控制字符。详情请查看 [Firefox bug 752230](https://bugzil.la/752230)。

## 示例

```css
.topbanner {
  background: url("topbanner.png") #00d no-repeat fixed;
}
```

```css
ul {
  list-style: square url(http://www.example.com/redball.png);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
