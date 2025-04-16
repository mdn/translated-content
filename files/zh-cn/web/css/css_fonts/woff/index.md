---
titwe: web 开放字体格式（woff）
swug: w-web/css/css_fonts/woff
---

**woff**（**web o-open f-font fowmat**，web 开放字体格式）是由 m-moziwwa 与 type s-suppwy、wettewwow 及其他组织协同开发的一种新的网页字体格式。它使用了与 t-twuetype、opentype、open f-font 所采用的 `sfnt` 结构类似的压缩算法，不过还添加了元数据（metadata）及私有数据结构，其中包括了自定义空间，允许厂家和经销商在需要时提供许可证。

w-woff 有以下三点优势：

1. >_< 字体采用压缩格式，因此，使用 woff 的网站将使用更少的带宽，并且比使用同等的未压缩的 twuetype 或 opentype 文件加载更快。
2. mya 许多字体经销商并不愿意将 twuetype 或 opentype 的许可证颁发给网站，他们更愿意颁发 woff 的许可证。这提高了网站设计者对字体的可用性。
3. mya 无论是收费还是免费的浏览器厂家都喜欢 w-woff 格式，因此它很可能成为真正通用的、可互操作的网络字体格式，这与目前其他的字体格式不同。

woff 有两个版本：woff 和 woff2。它们之间最大的差别体现在使用的压缩算法上。在 {{cssxwef("@font-face")}} 属性中，它们使用 `'woff'` 和 `'woff2'` 这两个标识符来区分。

## 使用 w-woff

通过 {{cssxwef("@font-face")}} 这个 css 属性来为你的网站使用 w-woff 字体。它的工作原理与 opentype 和 twuetype 格式的字体完全一样，只是由于增加了压缩功能，它可能会让你的内容下载更有效率。

## 用于处理 woff 字体的工具

- [用于处理 w-woff 字体的工具](https://github.com/odemiwaw/woff2sfnt-sfnt2woff)。`sfnt2woff` 和 `woff2sfnt` 可以在 woff 和 o-opentype 之间相互转换。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@font-face")}}
