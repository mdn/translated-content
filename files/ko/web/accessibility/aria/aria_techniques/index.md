---
title: 'ARIA 사용하기: 규칙, 상태, 속성'
slug: Web/Accessibility/ARIA/ARIA_Techniques
---

ARIA defines semantics that can be applied to elements, with these divided into **roles** (defining a type of user interface element) and **states** and **properties** that are supported by a role. Authors must assign an ARIA role and the appropriate states and properties to an element during its life-cycle, unless the element already has appropriate ARIA semantics (via use of an appropriate HTML element). Addition of ARIA semantics only exposes extra information to a browser's accessibility API, and does not affect a page's DOM.

## Roles

### Widget roles

- [`button`](/ko/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/ko/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/ko/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/ko/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/ko/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/ko/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ko/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/ko/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/ko/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/ko/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/ko/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/ko/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/ko/docs/Web/Accessibility/ARIA/Roles/separator_role) (when focusable)
- [`slider`](/ko/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/ko/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/ko/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/ko/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/ko/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/ko/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/ko/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

### Composite roles

The techniques below describe each composite role as well as their required and optional child roles.

- [`combobox`](/ko/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/ko/docs/Web/Accessibility/ARIA/Roles/grid_role) (including [`row`](/ko/docs/Web/Accessibility/ARIA/Roles/row_role), [`gridcell`](/ko/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`rowheader`](/ko/docs/Web/Accessibility/ARIA/Roles/rowheader_role), [`columnheader`](/ko/docs/Web/Accessibility/ARIA/Roles/columnheader_role) roles)
- [`listbox`](/ko/docs/Web/Accessibility/ARIA/Roles/listbox_role) (including [`option`](/ko/docs/Web/Accessibility/ARIA/Roles/option_role) role)
- [`menu`](/ko/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/ko/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/ko/docs/web/accessibility/aria/roles/radiogroup_role) (see [`radio role`](/ko/docs/Web/Accessibility/ARIA/Roles/radio_role))
- [`tablist`](/ko/docs/Web/Accessibility/ARIA/Roles/tablist_role) (including [`tab`](/ko/docs/Web/Accessibility/ARIA/Roles/tab_role) and [`tabpanel`](/ko/docs/Web/Accessibility/ARIA/Roles/tabpanel_role) roles)
- [`tree`](/ko/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/ko/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

### Document structure roles

- [`application`](/ko/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/ko/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/ko/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/ko/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/ko/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/ko/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/ko/docs/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/ko/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/ko/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/ko/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/ko/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/ko/docs/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/ko/docs/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/ko/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/ko/docs/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/ko/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/ko/docs/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/ko/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/ko/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/ko/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/ko/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/ko/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/ko/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/ko/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/ko/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### Landmark roles

- [`banner`](/ko/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/ko/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/ko/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/ko/docs/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/ko/docs/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/ko/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/ko/docs/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/ko/docs/Web/Accessibility/ARIA/Roles/search_role)

### Live Region Roles

- [`alert`](/ko/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/ko/docs/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/ko/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/ko/docs/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/ko/docs/Web/Accessibility/ARIA/Roles/timer_role)

### Window Roles

- [`alertdialog`](/ko/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/ko/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## States and properties

### Widget attributes

- [`aria-autocomplete`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-disabled`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-level`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### Live region attributes

- [`aria-live`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

### Drag & drop attributes

- [`aria-dropeffect`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### Relationship attributes

- [`aria-activedescendant`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

### MicrosoftEdge-specific properties

- [`x-ms-aria-flowfrom`](/ko/docs/Web/Accessibility/ARIA/ARIA_Techniques/x-ms-aria-flowfrom) {{Non-standard_Inline}}
