---
title: 更新 Firefox 3.6 的主题
slug: Mozilla/Firefox/Releases/3.6/Updating_themes
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

本文旨在帮助主题作者将与 Firefox 3.5 兼容的主题更新为与 Firefox 3.6 兼容的主题。

## Chrome 注册变更

[`contents.rdf` 已不再支持](https://www.oxymoronical.com/blog/2009/06/Farewell-contentsrdf/)，你需要改用 `chrome.manifest`。

## 空文本样式

XUL 文本框已不再具有 `empty` 属性，而是使用 `isempty`。因此，你需要将 `textbox[empty="true"]` 替换为 `textbox[isempty="true"]`。

## 从右到左界面支持

`[chromedir="rtl"]` 和 `[chromedir="ltr"]` 选择器已被废弃，大多数元素将不再适用。相反，你需要使用新的 {{ cssxref(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)") }} 和 {{ cssxref(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)") }} 选择器。参见[确保你的主题适用于从右到左的语言环境](/zh-CN/docs/Making_Sure_Your_Theme_Works_with_RTL_Locales)。

## 跨平台的标签式浏览器样式

标签式浏览器实现不再有 Mac 特定的 `tabs-closebutton-box`；相反，所有平台都使用相同的名称来标识标签栏的组件。

## 全屏工具栏按钮

从自定义工具栏对话框中可以找到一个新的[全屏工具栏按钮](https://bugzil.la/206544)。

## 参见

- [MozillaZine 论坛：Mozilla 1.9.2 / Firefox 3.6 主题更改](https://forums.mozillazine.org/viewtopic.php?f=18&t=975065)
- [主题](/zh-CN/docs/Themes)
- [构建主题](/zh-CN/docs/Building_a_Theme)
