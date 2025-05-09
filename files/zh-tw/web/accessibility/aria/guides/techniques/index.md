---
title: 使用 ARIA：角色、狀態和屬性
slug: Web/Accessibility/ARIA/Guides/Techniques
---

## 角色

### 組件角色

- [`button`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`gridcell`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`progressbar`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`radio`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`scrollbar`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)（可聚焦時）
- [`slider`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`textbox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

### 複合角色

下面的技術，描述了每個複合角色，以及它們的必要和可選的子角色。

- [`combobox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role)（包含 [`row`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)、[`gridcell`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)、[`rowheader`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)、[`columnheader`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) 角色）
- [`listbox`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)（包含 [`option`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) 角色）
- [`menu`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role)（參見 [`radio role`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)）
- [`tablist`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)（包含 [`tab`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) 和 [`tabpanel`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) 角色）
- [`tree`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

### Document structure 角色

- [`application`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`cell`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`definition`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- [`directory`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`feed`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`figure`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [`group`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`img`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [`list`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [`listitem`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`math`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`none`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)
- [`presentation`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [`row`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`rowheader`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`separator`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`table`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`term`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`toolbar`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)

### Landmark 角色

- [`banner`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [`complementary`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [`contentinfo`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [`form`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [`main`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [`navigation`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [`region`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [`search`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)

### Live Region 角色

- [`alert`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### Window 角色

- [`alertdialog`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## 狀態和屬性

### Widget 屬性

- [`aria-autocomplete`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-current`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-disabled`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Live region 屬性

- [`aria-live`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

### Drag &amp; drop 屬性

- [`aria-dropeffect`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed) {{deprecated_inline}}

### Relationship 屬性

- [`aria-activedescendant`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/zh-TW/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

### MicrosoftEdge 專有屬性

- [`x-ms-aria-flowfrom`](/zh-TW/docs/Web/Accessibility/ARIA) {{Non-standard_Inline}}
