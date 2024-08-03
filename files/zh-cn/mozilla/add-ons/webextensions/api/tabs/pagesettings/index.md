---
title: tabs.PageSettings
slug: Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings
l10n:
  sourceCommit: d6856a051d0ba078ec1d24b80908b1ca174917db
---

{{AddonSidebar}}

**`tabs.PageSettings`** 类型用于控制通过 {{WebExtAPIRef("tabs.saveAsPDF()")}} 方法将标签渲染为 PDF 时的输出格式。

所有属性均为可选。

用于设置页眉和页脚时，可以在提供的字符串中包含特定的特殊字符，这些字符在渲染输出时会被替换：

- “\&P”：当前页码，例如“2”
- “\&PT”：当前页码和总页数，例如“2 of 3”
- “\&D”：当前日期/时间
- “\&T”：页面标题
- “\&U”：页面 URL

## 类型

该类型的值为对象，包含以下属性：

- `edgeBottom` {{optional_inline}}
  - : `number`。页脚底部与纸张底部的间距（英寸）。默认值为 `0`。
- `edgeLeft` {{optional_inline}}
  - : `number`。左侧页眉/页脚与纸张左边缘的间距（英寸）。默认值为 `0`。
- `edgeRight` {{optional_inline}}
  - : `number`。右侧页眉/页脚与纸张左边缘的间距（英寸）。默认值为 `0`。
- `edgeTop` {{optional_inline}}
  - : `number`。页眉顶部与纸张顶部的间距（英寸）。默认值为 `0`。
- `footerCenter` {{optional_inline}}
  - : `string`。页面中心页脚的文本内容。默认值为 `''`。
- `footerLeft` {{optional_inline}}
  - : `string`。页面左侧页脚的文本内容。默认值为 `'\&PT'`。
- `footerRight` {{optional_inline}}
  - : `string`。页面右侧页脚的文本内容。默认值为 `'\&D'`。
- `headerCenter` {{optional_inline}}
  - : `string`。页面中心页眉的文本内容。默认值为 `''`。
- `headerLeft` {{optional_inline}}
  - : `string`。页面左侧页眉的文本内容。默认值为 `'\&T'`。
- `headerRight` {{optional_inline}}
  - : `string`。页面右侧页眉的文本内容。默认值为 `'\&U'`。
- `marginBottom` {{optional_inline}}
  - : `number`。页面内容与纸张底部的边距（英寸）。默认值为 `0.5`。
- `marginLeft` {{optional_inline}}
  - : `number`。页面内容与纸张左边缘的边距（英寸）。默认值为 `0.5`。
- `marginRight` {{optional_inline}}
  - : `number`。页面内容与纸张右边缘的边距（英寸）。默认值为 `0.5`。
- `marginTop` {{optional_inline}}
  - : `number`。页面内容与纸张顶部的边距（英寸）。默认值为 `0.5`。
- `orientation` {{optional_inline}}
  - : `integer`。页面方向：0 表示纵向，1 表示横向。默认值为 `0`。
- `paperHeight` {{optional_inline}}
  - : `number`。纸张高度，以纸张大小单位表示。默认值为 `11.0`。
- `paperSizeUnit` {{optional_inline}}
  - : `integer`。纸张大小单位：0 表示英寸，1 表示毫米。默认值为 `0`。
- `paperWidth` {{optional_inline}}
  - : `number`。纸张宽度，以纸张大小单位表示。默认值为 `8.5`。
- `scaling` {{optional_inline}}
  - : `number`。页面内容的缩放因子。1 表示 100% 或正常大小。默认值为 `1`。
- `showBackgroundColors` {{optional_inline}}
  - : `boolean`。是否显示页面背景颜色。默认值为 `false`。
- `showBackgroundImages` {{optional_inline}}
  - : `boolean`。是否显示页面背景图像。默认值为 `false`。
- `shrinkToFit` {{optional_inline}}
  - : `boolean`。是否将页面内容缩小以适应页面宽度（覆盖缩放设置）。默认值为 `true`。
- `toFileName` {{optional_inline}}
  - : `string`。保存为 PDF 文件时的文件名，可以包含 `.pdf` 扩展名或不包含。

## 浏览器兼容性

{{Compat}}

{{WebExtExamples}}
