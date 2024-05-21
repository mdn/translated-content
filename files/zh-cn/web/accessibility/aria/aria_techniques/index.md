---
title: 使用 ARIA：角色、状态和属性
slug: Web/Accessibility/ARIA/ARIA_Techniques
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{AccessibilitySidebar}}

ARIA 定义了可以应用于元素的语义，这些语义分为**角色**（定义一种用户界面元素）和由角色支持的**状态**和**属性**。作者必须在元素的生命周期中为其分配一个 ARIA 角色和适当的状态和属性，除非该元素已经具有适当的 ARIA 语义（通过使用适当的 HTML 元素）。添加 ARIA 语义只会向浏览器的无障碍 API 公开额外信息，而不会影响页面的 DOM。

## 角色

### 微件角色

- [`button`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role)（可聚焦时）
- [`slider`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

### 复合角色

下面的技术描述了每个复合角色及其必需和可选的子角色。

- [`combobox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/grid_role)（包括 [`row`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role)、[`gridcell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/gridcell_role)、[`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowheader_role)、[`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role) 角色）
- [`listbox`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role)（包括 [`option`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/option_role) 角色）
- [`menu`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radiogroup_role)（参见 [`radio role`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/radio_role)）
- [`tablist`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tablist_role)（包括 [`tab`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tab_role) 和 [`tabpanel`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) 角色）
- [`tree`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

### 文档结构角色

- [`application`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### 地标角色

- [`banner`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/search_role)

### 实时区域角色

- [`alert`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/timer_role)

### 窗口角色

- [`alertdialog`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## 状态和属性

### 微件属性

- [`aria-autocomplete`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-level`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### 实时区域属性

- [`aria-live`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

### 拖放属性

- [`aria-dropeffect`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### 关系属性

- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/zh-CN/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

### Microsoft Edge 特定的属性

- [`x-ms-aria-flowfrom`](/zh-CN/docs/Web/Accessibility/ARIA) {{Non-standard_Inline}}
