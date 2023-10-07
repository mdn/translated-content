---
title: WAI-ARIA 角色
slug: Web/Accessibility/ARIA/Roles
---

ARIA 角色为内容提供了语义，允许屏幕阅读器和其他工具与对象类型的用户预期一致的方式进行呈现并支持交互。<abbr>ARIA</abrr> 角色可以用于描述不在 HTML 中原生存在的元素，或者存在但没有完整的浏览器支持的元素。

默认情况下，很多语义的 HTML 元素都有角色，例如，`<input type="radio">` 有“radio”角色。HTML 的非语义的元素没有角色，例如没有添加语义的 `<div>` 和 `<span>` 会返回 `null`。`role` 属性可以添加语义。

将 ARIA 角色添加到 HTML 元素的方法是使用 `role="角色类型"`，其中*角色类型*是角色在 ARIA 规范中的名称。有些角色需要包含相关的状态或属性；其他这些仅在与其他角色关联时有用。

例如，`<ul role="tabpanel">` 会被屏幕阅读器读作“标签面板（tab panel）”。但是，如果标签页面没有嵌套的标签，带有标签页面角色的元素实际上并不是个标签面板，从而对无障碍造成负面影响。

各角色的页面中都包含了相关的 [ARIA 状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)，而每个属性都有一个专门的页面。

## ARIA 角色类型

ARIA 角色共分为 6 类：

### 1. 文档结构角色

文档结构角色用于给内容的段落添加一个结构的描述。这些角色大多数都不应该再使用，因为浏览器现在支持带有相同的含义的语义化 HTML 元素。没有相应 HTML 等价的角色，例如 presentation、toolbar 和 tooltip 角色，为辅助技术（例如屏幕阅读器）提供了文档结构信息，而这些信息没有可用的原生 HTML。

- [toolbar](/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [tooltip](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [feed](/zh-CN/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [math](/zh-CN/docs/Web/Accessibility/ARIA/Roles/math_role)
- [presentation](/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [none](/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role)
- [note](/zh-CN/docs/Web/Accessibility/ARIA/Roles/note_role)

对于大多数结构角色，都有可用、受支持且等价的语义化 HTML 元素。请避免使用：

- [application](/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role)
- [article](/zh-CN/docs/Web/Accessibility/ARIA/Roles/article_role)（请使用 {{HTMLElement('article')}}）
- [cell](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role)（请使用 {{HTMLElement('td')}}）
- [columnheader](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role)（请使用 `{{HTMLElement('th', '&lt;th scope="col">')}}`）
- [definition](/zh-CN/docs/Web/Accessibility/ARIA/Roles/definition_role)（请使用 {{HTMLElement('dfn')}}）
- [directory](/zh-CN/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [document](/zh-CN/docs/Web/Accessibility/ARIA/Roles/document_role)
- [figure](/zh-CN/docs/Web/Accessibility/ARIA/Roles/figure_role)（请使用 {{HTMLElement('figure')}}）
- [group](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
- [heading](/zh-CN/docs/Web/Accessibility/ARIA/Roles/heading_role)（请使用 {{HTMLElement("Heading_Elements", "h1")}} 到 {{HTMLElement("Heading_Elements", "h6")}}）
- [img](/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role)（请使用 {{HTMLElement('img')}} 或 {{HTMLElement('picture')}}）
- [list](/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role)（请使用 {{HTMLElement('ul')}} 或 {{HTMLElement('ol')}}）
- [listitem](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listitem_role)（请使用 {{HTMLElement('li')}}）
- [meter](/zh-CN/docs/Web/Accessibility/ARIA/Roles/meter_role)（请使用 {{HTMLElement('meter')}}）
- [row](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role)（请使用 {{HTMLElement('tr')}} 和 {{HTMLElement('table')}}）
- [rowgroup](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)（请使用 {{HTMLElement('thead')}}、{{HTMLElement('tfoot')}} 和 {{HTMLElement('tbody')}}）
- [rowheader](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowheader_role)（请使用 `{{HTMLElement('th','&lt;th scope="row">')}}`）
- [separator](/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role)（如果不可以聚焦，请使用 {{HTMLElement('hr')}}）
- [table](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)（请使用 {{HTMLElement('table')}}）
- [term](/zh-CN/docs/Web/Accessibility/ARIA/Roles/term_role)（请使用 {{HTMLElement('dfn')}}）

这些内容是为保持完整而包含的，但至今很少使用或有用：

- [`associationlist`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemkey`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`associationlistitemvalue`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`blockquote`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`code`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`insertion`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`paragraph`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`strong`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`time`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structural_roles)

### 2. 小部件角色

各种小部件角色用于定义常见的交互模式。类似于文档结构角色，有些这些角色与同样受支持的原生 HTML 的语义是重复的，因此不应该使用。这两个列表的区别在于，通常来说，小部件角色需要 JavaScript 交互，而文档结构角色不需要。

- [scrollbar](/zh-CN/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [searchbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [separator](/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role)（如果可以聚焦）
- [slider](/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [spinbutton](/zh-CN/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [switch](/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [tab](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [tabpanel](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [treeitem](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

避免使用 [button](/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role)、[checkbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role)、[gridcell](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)、[link](/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role)、[menuitem](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role)、[menuitemcheckbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)、[menuitemradio](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)、[option](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)、[progressbar](/zh-CN/docs/Web/Accessibility/ARIA/Roles/progressbar_role)、[radio](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role)和 [textbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/textbox_role)，这些仅为完整性而包含。大多数情况下，带有无障碍的交互性的语义等价也是可用且受支持的。更多信息，请参见其各个角色的文档。

#### 复合小部件角色

- [combobox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [menu](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [menubar](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [tablist](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role)
- [tree](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [treegrid](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

避免使用 [grid](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role)、[listbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role) 和 [radiogroup](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role)，这些仅为完整性而包含。更多信息，请参见其各个角色的文档。

注意还有个 widget 角色（`role="widget"`），这是个抽象的角色，不在小部件角色类别中。

### 3. 地标角色

地标（landmark）角色提供了一种识别网页的组织和结构的方法。对页面的各个部分进行分类并添加标签，可以用编程方式呈现出通过布局直观传达的结构信息。屏幕阅读器使用地标角色为页面的重要部分提供键盘导航。谨慎使用这些。太多的地标角色会在屏幕阅读器中产生“噪音”，导致难以理解页面的整体布局。

- [banner](/zh-CN/docs/Web/Accessibility/ARIA/Roles/banner_role) （文档 {{HTMLElement('header')}}）
- [complementary](/zh-CN/docs/Web/Accessibility/ARIA/Roles/complementary_role)（{{HTMLElement('aside')}}）
- [contentinfo](/zh-CN/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)（{{HTMLElement('footer')}}）
- [form](/zh-CN/docs/Web/Accessibility/ARIA/Roles/form_role)（{{HTMLElement('form')}}）
- [main](/zh-CN/docs/Web/Accessibility/ARIA/Roles/main_role)（{{HTMLElement('main')}}）
- [navigation](/zh-CN/docs/Web/Accessibility/ARIA/Roles/navigation_role)（{{HTMLElement('nav')}}）
- [region](/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role)（{{HTMLElement('section')}}）
- [search](/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role)

### 4. 实时区域角色

实时区域（Live Region）角色用于定义带有动态更改的内容的元素。动态变化在视觉上明显时，具有视力的的用户可以看到。这些角色可帮助低视力和盲人用户了解内容是否更新。辅助技术，例如屏幕阅读器，可以告知动态内容变更：

- [alert](/zh-CN/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [log](/zh-CN/docs/Web/Accessibility/ARIA/Roles/log_role)
- [marquee](/zh-CN/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [status](/zh-CN/docs/Web/Accessibility/ARIA/Roles/status_role)
- [timer](/zh-CN/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 5. 窗口角色

窗口角色为同一文档内的主文档窗口定义了子窗口，例如弹出模态框：

- [alertdialog](/zh-CN/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [dialog](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### 6. 抽象角色

抽象角色仅由浏览器使用，以帮助组织和简化文档。编写 HTML 标记的开发者不应使用这些抽象角色。这样做不会向辅助技术或用户传达任何有意义的信息。

避免使用[command](/zh-CN/docs/Web/Accessibility/ARIA/Roles/command_role)、[composite](/zh-CN/docs/Web/Accessibility/ARIA/Roles/composite_role)、[input](/zh-CN/docs/Web/Accessibility/ARIA/Roles/input_role)、[landmark](/zh-CN/docs/Web/Accessibility/ARIA/Roles/landmark_role)、[range](/zh-CN/docs/Web/Accessibility/ARIA/Roles/range_role)、[roletype](/zh-CN/docs/Web/Accessibility/ARIA/Roles/roletype_role)、[section](/zh-CN/docs/Web/Accessibility/ARIA/Roles/section_role)、[sectionhead](/zh-CN/docs/Web/Accessibility/ARIA/Roles/sectionhead_role)、[select](/zh-CN/docs/Web/Accessibility/ARIA/Roles/select_role)、[structure](/zh-CN/docs/Web/Accessibility/ARIA/Roles/structure_role)、[widget](/zh-CN/docs/Web/Accessibility/ARIA/Roles/widget_role) 和 [window](/zh-CN/docs/Web/Accessibility/ARIA/Roles/window_role)。

> **备注：** 不要在你的网站和应用中使用抽象角色。抽象角色是由浏览器使用的，这里列出来仅用于参考。

> **警告：**“抽象角色用于本体。作者**不得**在内容中使用抽象角色。” ——<abbr>WAI-ARIA</abbr> 规范

## MDN 中定义的角色

以下是包含 <abbr>MDN</abbr> 中讨论的 WAI-ARIA 角色的参考页面。

{{SubpagesWithSummaries}}

## 参见

- [使用 ARIA：角色、状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques)
- [ARIA 状态和属性](/zh-CN/docs/Web/Accessibility/ARIA/Attributes)

<section id="Quick_links">

1. [**WAI-ARIA 角色**](/zh-CN/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/zh-CN/docs/Web/Accessibility/ARIA/Roles")}}

</section>
