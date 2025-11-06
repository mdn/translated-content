---
title: src
slug: Web/CSS/Reference/At-rules/@font-face/src
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

{{cssxref("@font-face")}} @ 规则中的 **`src`** CSS 描述符指定了包含字体数据的资源。它是 `@font-face` 规则有效的必要条件。

## 语法

```css
/* <url> 值 */
src: url(https://somewebsite.com/path/to/font.woff); /* 绝对 URL */
src: url(path/to/font.woff); /* 相对 URL */
src: url("path/to/font.woff"); /* 带引号的 URL */
src: url(path/to/svgFont.svg#example); /* 标识字体的片段 */

/* <font-face-name> 值 */
src: local(font); /* 不带引号的名称 */
src: local(some font); /* 带空格的名称 */
src: local("font"); /* 带引号的名称 */
src: local("some font"); /* 带引号、包含空格的名称 */

/* <tech(<font-tech>)> 值 */
src: url(path/to/fontCOLRv1.otf) tech(color-COLRv1);
src: url(path/to/fontCOLR-svg.otf) tech(color-SVG);

/* <format(<font-format>)> 值 */
src: url(path/to/font.woff) format("woff");
src: url(path/to/font.otf) format("opentype");

/* 多个资源 */
src:
  url(path/to/font.woff) format("woff"),
  url(path/to/font.otf) format("opentype");

/* 多个具有字体格式和技术的资源 */
src:
  url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
  url("trickster-outline.otf") format(opentype);
```

### 值

- `url()`
  - : 指定由 {{cssxref("&lt;url&gt;")}} 组成的外部引用，之后是使用 `format()` 和 `tech()` 组件值的可选提示，这些提示指定了 URL 引用资源的格式和字体技术。`format()` 和 `tech()` 组件是以逗号分隔的已知[字体格式](#字体格式)和技术字符串列表。如果用户代理不支持字体技术或格式，就会跳过下载字体资源。如果不提供格式或技术提示，则始终下载字体资源。

- `format()`
  - : 紧跟 `url()` 值的可选声明，为用户代理提供有关字体格式的提示。如果该值不被支持或无效，浏览器可能不会下载该资源，从而可能节省带宽。如果省略，浏览器将下载资源，然后检测格式。如果为了向后兼容而包含了[已定义关键字](#形式语法)列表中没有的字体源，请将格式字符串用引号括起来。下面的[字体格式](#字体格式)部分介绍了可能的值。
- `tech()`
  - : 在 `url()` 值之后的一个可选声明，为用户代理提供有关字体技术的提示。`tech()`的值可以是[字体技术](#字体技术)中描述的关键字之一。
- `local(<font-face-name>)`
  - : 如果用户设备上有字体，则指定字体名称。字体名称可以不加引号。

    > [!NOTE]
    > 对于 OpenType 和 TrueType 字体，`<font-face-name>` 用于匹配 Postscript 名称或本地可用字体名称表中的完整字体名称。使用哪种类型的名称因平台和字体而异，因此应同时包含这两种名称，以确保跨平台的正确匹配。不得使用指定字体名称的平台替换。

    > [!NOTE]
    > 本地可用字体可能已经预装在用户的设备上，也可能是用户主动安装的。
    >
    > 对于特定设备的所有用户来说，预装字体集可能是相同的，但用户安装的字体集却不尽相同。因此，通过发现用户安装的字体集，网站可以为设备建立{{glossary("fingerprinting", "指纹")}}，帮助网站在整个网络中跟踪用户。
    >
    > 为防止出现这种情况，用户代理在使用 `local()` 时可以忽略用户安装的字体。

- `<font-face-name>`
  - : 使用 `local()` 组件值指定本地安装的字体的全名或 postscript 名称，该名称可在较大的字体系列中唯一标识单个字体。该名称可以选择用引号括起来。字体名称[不区分大小写](https://drafts.csswg.org/css-fonts-3/#font-family-casing)。

> [!NOTE]
> {{domxref("Local Font Access API", "本地字体访问 API","", "nocode")}} 可用于访问用户本地安装的字体数据，其中包括名称、样式和家族等高级细节，以及底层字体文件的原始字节。

## 描述

该描述符的值是一个以逗号分隔的外部引用或本地安装的字体名称优先级列表，其中每个资源都使用 `url()` 或 `local()` 指定。需要使用字体时，{{glossary("user agent", "用户代理")}}会遍历列出的引用集，并使用第一个能成功激活的引用。包含无效数据的字体或未找到的本地字体将被忽略，用户代理将加载列表中的下一个字体。

如果设置了多个 `src` 描述符，则只应用最后声明的能够加载资源的规则。如果最后一个 `src` 描述符可以加载资源，但不包括 `local()` 字体，即使设备上有可用的字体，浏览器也可能会下载外部字体文件，而忽略本地版本。

> [!NOTE]
> 浏览器认为无效的描述符中的值将被忽略。某些浏览器会在任何一项无效时忽略整个描述符，即使只有一项无效。这可能会影响回退的设计。更多信息，请参见[浏览器兼容性](#浏览器兼容性)。

与 CSS 中的其他 URL 一样，URL 也可以是相对的，在这种情况下，URL 会相对于包含 `@font-face` 规则的样式表的位置进行解析。对于 SVG 字体，URL 指向的是包含 SVG 字体定义的文档中的一个元素。如果省略了元素引用，则隐含了对第一个定义字体的引用。同样，可包含多种字体的字体容器格式只加载给定 `@font-face` 规则中的一种字体。片段标识符用于指示加载哪种字体。如果容器格式缺乏已定义的片段标识符方案，则使用简单的从 1 开始的索引方案（例如，“font-collection#1”表示第一种字体，“font-collection#2”表示第二种字体，等等）。

如果字体文件是多个字体的容器，则会包含一个片段标识符，用于指示应使用的子字体，如下所示：

```css
/* WhichFont 是字体文件中字体的 PostScript 名称 */
src: url(collection.otc#WhichFont);
/* WhichFont 是 SVG 字体文件中字体的元素 ID */
src: url(fonts.svg#WhichFont);
```

### 字体格式

下表列出了有效的字体关键字及其对应的字体格式。要检查 CSS 中的字体格式是否受浏览器支持，请使用 {{cssxref("@supports", "@supports")}} 规则。

| 关键字              | 字体格式            | 常见扩展名  |
| ------------------- | ------------------- | ----------- |
| `collection`        | OpenType Collection | .otc、.ttc  |
| `embedded-opentype` | Embedded OpenType   | .eot        |
| `opentype`          | OpenType            | .otf、.ttf  |
| `svg`               | SVG Font（已弃用）  | .svg、.svgz |
| `truetype`          | TrueType            | .ttf        |
| `woff`              | WOFF 1.0            | .woff       |
| `woff2`             | WOFF 2.0            | .woff2      |

> [!NOTE]
>
> - `format(svg)` 表示 [SVG 字体](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Using_fonts)，而 `tech(color-SVG)` 表示[带有 SVG 表的 OpenType 字体](https://learn.microsoft.com/en-us/typography/opentype/spec/svg)（也称为 OpenType-SVG 彩色字体），两者完全不同。
> - 无论字体文件使用的是三次菱形曲线（在 CFF/CFF2 表中）还是二次菱形曲线（在字形表中），`opentype` 和 `truetype` 值都是相同的。

旧的非规范化 `format()` 值有以下等效语法；出于向后兼容的考虑，以带引号的字符串形式提供：

| 旧语法                          | 等效语法                            |
| ------------------------------- | ----------------------------------- |
| `format("woff2-variations")`    | `format(woff2) tech(variations)`    |
| `format("woff-variations")`     | `format(woff) tech(variations)`     |
| `format("opentype-variations")` | `format(opentype) tech(variations)` |
| `format("truetype-variations")` | `format(truetype) tech(variations)` |

### 字体技术

下表列出了 `tech()` 描述符的有效值及其对应的字体技术。要在 CSS 中检查浏览器是否支持某种字体技术，请使用 {{cssxref("@supports", "@supports")}} @ 规则。

| 关键字              | 描述                                                                  |
| :------------------ | :-------------------------------------------------------------------- |
| `color-cbdt`        | 彩色位图数据表                                                        |
| `color-colrv0`      | 通过 COLR 第 0 版表格显示多色字形                                     |
| `color-colrv1`      | 通过 COLR 第 1 版表格显示多色字形                                     |
| `color-sbix`        | 标准位图图形表                                                        |
| `color-svg`         | SVG 多色表                                                            |
| `features-aat`      | TrueType `morx` 和 `kerx` 表                                          |
| `features-graphite` | 石墨特征，即 `Silf`、`Glat`、`Gloc`、`Feat` 和 `Sill` 表              |
| `features-opentype` | OpenType `GSUB` 和 `GPOS` 表                                          |
| `incremental`       | 增量式字体加载                                                        |
| `palettes`          | 字体调色板通过 `font-palette` 从字体的多种调色板中选择一种            |
| `variations`        | TrueType 和 OpenType 字体中的字体变化，用于控制字体轴、字重、字形等。 |

## 形式定义

{{cssinfo}}

## 形式语法

```plain
<url> [ format( <font-format> ) ]? [ tech( <font-tech># ) ]?  |
local( <family-name> )

<font-format> = [ <string> | collection | embedded-opentype | opentype | svg | truetype | woff | woff2 ]

<font-tech> = [ <font-features-tech> | <color-font-tech> | variations | palettes | incremental-patch | incremental-range | incremental-auto ]

<font-features-tech> = [ features-opentype | features-aat | features-graphite ]

<color-font-tech> = [ color-COLRv0 | color-COLRv1 | color-SVG | color-sbix | color-CBDT ]
```

## 示例

### 使用 url() 和 local() 指定字体资源

下面的示例展示了如何定义两个具有相同字体家族的 font face。字体家族命名为 `MainText`。第一个 font face 是普通字体，第二个 font face 是同一字体系列的粗体。

```css
/* 定义常规 font face */
@font-face {
  font-family: MainText;
  src: local(Futura-Medium),
    url('FuturaMedium.woff') format("woff"),
    url('FuturaMedium.otf') format("opentype");
    format("opentype");
}

/* 为同一家族定义不同的粗体 font face */
@font-face {
  font-family: MainText;
  src: local(Gill Sans Bold), /* 字体全名 */
    local(GillSans-Bold), /* postscript 名称 */
    url('GillSansBold.woff') format("woff"),
    url('GillSansBold.otf') format("opentype"),
    url("GillSansBold.svg#MyFontBold"); /* 通过 id 引用 SVG 字体片段 */
  font-weight: bold;
}

/* 使用常规 font face */
p {
  font-family: MainText;
}

/* 继承了字体家族，但使用了粗体字 */
p.bold {
  font-weight: bold;
}
```

### 使用 tech() 和 format() 值指定字体资源

下面的示例展示了如何使用 `tech()` 和 `format()` 值指定字体资源。使用 `tech()` 和 `format()` 值指定了使用 `color-colrv1` 技术和 `opentype` 格式的字体。如果用户代理支持彩色字体，则将激活彩色字体，并提供非彩色的 `opentype` 字体作为回退。

```css
@font-face {
  font-family: "Trickster";
  src:
    url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1),
    url("trickster-outline.otf") format(opentype);
}

/* 使用 font face */
p {
  font-family: "Trickster";
}
```

### 为旧式浏览器指定回退

浏览器应使用带有单个 `src` 描述符的 `@font-face`，该描述符列出了字体的可能来源。由于浏览器将使用其能够加载的第一个资源，因此应按照偏好的使用顺序指定项目。

一般来说，这意味着本地文件应出现在远程文件之前，而带有 `format()` 或 `tech()` 约束的资源应出现在不带这些约束的资源之前（否则总是会选择约束较少的版本）。例如：

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

不支持上述 `tech()` 的浏览器应忽略第一项，并尝试加载第二项资源。

有些浏览器尚不能够[忽略无效项](#浏览器兼容性)，如果任何值无效，整个 `src` 描述符都会失效。如果使用这些浏览器，可以指定多个 `src` 描述符作为后备。请注意，多个 `src` 描述符会以相反的顺序进行尝试，因此最后我们会得到包含所有项目的正常描述符。

```css
@font-face {
  font-family: "MgOpenModernaBold";
  src: url("MgOpenModernaBold.otf") format(opentype);
  src: url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental);
  src:
    url("MgOpenModernaBoldIncr.otf") format("opentype") tech(incremental),
    url("MgOpenModernaBold.otf") format(opentype);
}
```

### 检查用户代理是否支持某些字体

下面的示例展示了如何使用 {{cssxref("@supports")}} 规则检查用户代理是否支持某种字体技术。如果用户代理支持 `color-COLRv1` 技术，就会应用 `@supports` 中的 CSS 块。

```css
@supports font-tech(color-COLRv1) {
  @font-face {
    font-family: "Trickster";
    src: url("trickster-COLRv1.otf") format(opentype) tech(color-COLRv1);
  }

  .colored_text {
    font-family: "Trickster";
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@font-face", "@font-face")}}
- {{cssxref("@supports", "@supports")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
