---
title: 网页开放字体格式 (WOFF)
slug: Web/Guide/WOFF
tags:
  - NeedsMobileBrowserCompatibility
  - WOFF
  - WOFF2
  - 字体
translation_of: Web/Guide/WOFF
original_slug: WOFF
---
**WOFF**（**Web Open Font Format**，网页开放字体格式）是由 Mozilla 与 Type Supply、LettError 及其他组织协同开发的一种新的网页字体格式。它使用了与 TrueType、OpenType、Open Font 所采用的 `sfnt` 结构类似的压缩算法，不过还添加了元数据（metadata）及用户私有数据结构，其中包括了自定义空间，允许厂家和经销商在需要时提供许可证。

WOFF 有以下三点优势：

1. 字体采用压缩格式，相对于使用不压缩的 TrueType, OpenType 的网站，将占用更少的带宽，获得更快的加载速度。
2. 许多字体经销商并不愿意将 TrueType 或 OpenType 的许可证颁发给网站，他们更愿意颁发 WOFF 的许可证。这对于网站开发者来说将是一个福音。
3. 无论是收费还是免费的浏览器厂家都喜欢 WOFF 格式，因此它很可能成为未来的主流与跨平台字体格式。

WOFF 有两个版本：WOFF 和 WOFF2。它们之间最大的差别体现在使用的压缩算法上。在 {{cssxref("@font-face")}} 属性中，它们使用 `woff` 和 `woff2` 这两个标识符来区分。

## 使用 WOFF

通过 {{cssxref("@font-face")}} 这个 CSS 属性来为你的网站使用 WOFF 字体。它的工作方式与 OpenType 和 TrueType 十分相似，除了因使用压缩技术而使你的内容更快地加载。

## 相关工具

- 可以使用 [用于处理 WOFF 字体的工具](https://github.com/odemiral/woff2sfnt-sfnt2woff)。`sfnt2woff` 和 `woff2sfnt` 将转换为 WOFF 或 OpenType。

## 规范

| 规范                             | 状态                 | 注释      |
| ------------------------------- | -------------------- | --------- |
| {{SpecName('WOFF2.0', '', '')}} | {{Spec2('WOFF2.0')}} | 新压缩算法 |
| {{SpecName('WOFF1.0', '', '')}} | {{Spec2('WOFF1.0')}} | 原始规格   |

## 浏览器兼容性

{{Compat("css.at-rules.font-face")}}

## 参见

- {{cssxref("@font-face")}}
