---
title: 链接宏
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: abc914f085fb9913c41c4cd4453da432e9d4e761
---

MDN 提供了大量宏，用于创建始终保持最新的 MDN 内容链接。在本指南中，你将了解 MDN 交叉引用宏，可利用这些宏插入指向另一页面的单个链接，或插入指向文档所有子页面的链接列表。

## 链接列表

MDN 提供了用于生成链接列表的宏：

- [`\{{SubpagesWithSummaries}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - ：插入一个定义列表（{{HTMLElement("dl")}}），列出当前页面的子页面，其中每个页面的标题作为 {{HTMLElement("dt")}} 项，其首段内容作为 {{HTMLElement("dd")}} 项。

- [`\{{ListSubpagesForSidebar()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : 若不带参数调用，则插入指向当前页面子页面的有序链接列表。第一个参数是链接树父页面的别名。链接文本将以代码形式显示。将第二个参数设置为 `true` 或 `1` 会将链接转换为纯文本。将第三个参数设置为 `true` 或 `1` 会在列表顶部添加一个指向别名（父）页面的链接，链接文本为“概述”。

- [`\{{QuickLinksWithSubpages()}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : 使用当前页面（或指定页面）的子页面作为目标，生成一组快速链接。这将创建最多两层深的层次化列表。页面的标题用作链接文本，摘要用作工具提示。
例如，若要插入一个包含本页面及其同级页面的有序链接列表，请按以下方式编写：

```md
\{{ListSubpagesForSidebar("/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## 交叉引用链接

某些宏会生成一个单一链接，用于交叉引用 CSS、JavaScript、SVG 或 HTML 中的某个特性，包括属性、元素、属性值、数据类型和 API。生成单一链接的宏至少需要一个参数：即被引用的特性。

这些宏包括：

- [`\{{CSSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{glossary("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

### 基本使用

对于第一个必填参数，需要从要链接的文档的 slug 的最后一部分中提取特性名称。例如，要链接到 slug 为 `Web/HTML/Reference/Elements/select` 的 `<select>` 元素页面，应将宏写为 `\{{HTMLElement("select")}}`。这将生成链接“{{HTMLElement("select")}}”，该链接既经过代码格式化，又包含尖括号。这是因为宏会在链接文本中添加特定的功能格式化。因此，在使用宏时，你只需关注功能名称本身，无需担心其他任何问题。这就是为什么使用宏添加链接既快捷又简单。

### 自定义显示文本

默认情况下，链接的显示文本是传递给宏的第一个参数。若要显示其他文本，请使用第二个参数。例如，`\{{JSxRef("Array")}}` 会生成 {{JSxRef("Array|)}}。若要显示该文本的变体，请使用 `\{{JSxRef("Array", "JavaScript 数组")}}`，其输出结果为 {{JSxRef("Array", "JavaScript 数组")}}。你会注意到，由于宏的默认行为，生成的链接会被进行代码格式化。请参阅[禁用代码格式化](#禁用代码格式化)部分，了解如何跳过代码样式设置。

### 链接到嵌套页面

某些参考特性包含针对相关功能的嵌套页面。例如，HTML `<input>` 元素针对不同的输入类型拥有多个嵌套页面，例如 `Web/HTML/Reference/Elements/input/range` 对应范围输入类型。

如果像 `\{{HTMLElement("input/range")}}` 这样将路径信息作为第一个参数传递给宏，生成的链接将是“{{HTMLElement("input/range")}}”，这并非你想要的结果。请使用第二个参数来显示不同的链接文本。因此，若要生成指向“range”输入类型的链接，应将宏写为 `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}`，以生成“{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt; </code>")}}”。（请注意，如果第二个参数包含空格——例如此处 `input` 和 `type` 之间的空格——该宏会移除代码格式；因此我们已显式添加了 {{HTMLElement("code")}} 标签。）

### 在 CSS 参考中使用 `CSSxRef`

每个宏都有些不同。

`CSSxRef` 宏会根据作为宏第一个参数提供的特性名称，自动确定正确的路径。该宏会检测该特性是属性、选择器、@ 规则、函数还是数据类型，并链接到 `Web/CSS/Reference/` 下的相应文档。

例如：

- `\{{CSSxRef("cursor")}}` 链接到属性页 `Web/CSS/Reference/Properties/cursor`。
- `\{{CSSxRef(":hover")}}` 链接到伪类页 `Web/CSS/Reference/Selectors/:hover`。
- `\{{CSSxRef("@media")}}` 链接到 @ 规则页 `Web/CSS/Reference/At-rules/@media`。
- `\{{CSSxRef("pow")}}` 链接到函数页 `Web/CSS/Reference/Values/pow`。
- `\{{CSSxRef("<color>")}}` 链接到数据类型页 `Web/CSS/Reference/Values/color_value`。

与 `HTMLElement` 宏一样，`CSSxRef` 宏会根据功能的类型为链接文本添加相应的样式。因此，`\{{CSSxRef("acos")}}` 会在生成的链接文本中添加尖括号，效果如 {{CSSxRef("acos")}} 所示。

`CSSxRef` 宏还有其他一些值得注意的行为，包括：

- 嵌套页面会自动处理。例如：
  - `\{{CSSxRef("basic-shape/circle")}}` 会链接到位于 `Web/CSS/Reference/Values/basic-shape/circle` 的文档，链接形式为 {{CSSxRef("basic-shape/circle")}}。
  - `\{{CSSxRef("animation-timeline/scroll")}}` 会链接到位于 `Web/CSS/Reference/Properties/animation-timeline/scroll` 的文档，链接形式为 {{CSSxRef("animation-timeline/scroll")}}。
- 某些 CSS 特性名称相同。除了目录位置外，其 slug 还包含后缀以反映其类型。例如，`position` 属性的别名为 `Web/CSS/Reference/Properties/position`，而 `<position>` 数据类型的别名为 `Web/CSS/Reference/Values/position_value`。

  `CSSxRef` 宏会自动处理这些同名特性。因此，`\{{CSSxRef("position")}}` 会通过链接 {{CSSxRef("position")}} 跳转至属性页面，而 `\{{CSSxRef("<position>")}}` 会通过链接 {{CSSxRef("&lt;position&gt;")}} 跳转至数据类型页面。

  其他名称相同的特性包括：
  - `color` 属性（`Web/CSS/Reference/Properties/color`）与 `<color>` 数据类型（`Web/CSS/Reference/Values/color_value`）

    **宏**：`\{{CSSxRef("color")}}` 与 `\{{CSSxRef("<color>")}}`

  - `fit-content()` 函数（`Web/CSS/Reference/Values/fit-content_function`）与 `fit-content` 关键字（`Web/CSS/Reference/Values/fit-content`）

    **宏**：`\{{CSSxRef("fit-content()")}}` 与 `\{{CSSxRef("fit-content")}}`

  - `flex` 属性（`Web/CSS/Reference/Properties/flex`）与 `<flex>` 数据类型（`Web/CSS/Reference/Values/flex_value`）

    **宏**：`\{{CSSxRef("flex")}}` 与 `\{{CSSxRef("<flex>")}}`

  - `:host` 伪类（`Web/CSS/Reference/Selectors/:host`）与 `:host()` 伪类函数（`Web/CSS/Reference/Values/:host_function`）

    **宏**：`\{{CSSxRef(":host")}}` 与 `\{{CSSxRef(":host()")}}`

  - `overflow` 属性（`Web/CSS/Reference/Properties/overflow`）与 `<overflow>` 数据类型（`Web/CSS/Reference/Values/overflow_value`）

    **宏**：`\{{CSSxRef("overflow")}}` 与 `\{{CSSxRef("<overflow>")}}`

  - `url()` 函数（`Web/CSS/Reference/Values/url_function`）与 `<url>` 数据类型（`Web/CSS/Reference/Values/url_value`）

    **宏**：`\{{CSSxRef("url()")}}` 与 `\{{CSSxRef("<url>")}}`

### 禁用代码格式化

交叉引用宏默认会对链接文本应用代码格式化。若要避免宏应用的 HTML 代码语义和 CSS 代码样式，请使用 `"nocode"` 参数。

例如，`\{{CSSxRef("background-color")}}` 会生成一个带有代码样式的“{{CSSxRef("background-color")}}”链接，而 `\{{domxref("CSS.supports_static", "检查支持情况", "", "nocode")}}` 则会生成纯文本链接“{{domxref("CSS.supports_static", "检查支持情况", "", "nocode")}}”。同样地，若要创建不带代码格式的 JavaScript 数组链接，我们可以编写 `\{{JSxRef("Array", "JavaScript 数组", "", "nocode")}}`，从而生成“{{JSxRef("Array", "JavaScript 数组", "", "nocode")}}”。

## 参见

- [使用宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [经常使用的宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Commonly_used_macros)，包括 BCD 宏（`\{{Compat}}`）和规范宏（`\{{Specifications}}`）。
- [横幅和通知指南](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)，包括 `\{{SeeCompatTable}}` 和 `\{{SecureContext_Header}}` 宏。
