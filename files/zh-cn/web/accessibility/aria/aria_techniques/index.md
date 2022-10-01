---
title: 使用 ARIA：角色、状态和属性
slug: Web/Accessibility/ARIA/ARIA_Techniques
---

ARIA 定义了可以应用于元素的语义，这些语义分为 **roles**（定义一种用户界面元素）、**states** 和 **properties**，这些都是角色所支持的。作者必须在元素的生命周期中为其分配一个 ARIA 角色和适当的状态和属性，除非该元素已经具有适当的 ARIA 语义（通过使用适当的 HTML 元素）。添加 ARIA 语义只会向浏览器的无障碍 API 公开额外信息，而不会影响页面的 DOM。

## 角色

### 组件角色

- [button](/zh-CN/docs/Web/Accessibility/ARIA/Roles/button_role)
- [checkbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [gridcell](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Gridcell_role)
- [link](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role)
- menuitem
- menuitemcheckbox
- menuitemradio
- option
- [progressbar](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- [radio](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role)
- scrollbar
- searchbox
- separator (when focusable)
- [slider](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)
- spinbutton
- [switch](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Switch_role)
- [tab](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Tab_Role)
- [tabpanel](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role)
- [textbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- treeitem

### 复合角色

下面的技术描述了每个复合角色及其必需和可选的子角色。

- combobox
- [grid](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Grid_Role) (包含 [row](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Row_Role), [gridcell](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Gridcell_role), rowheader, columnheader)
- [listbox](/zh-CN/docs/Web/Accessibility/ARIA/Roles/listbox_role) (包含 option)
- menu
- menubar
- [radiogroup](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role) (参考 radio)
- tablist (包含 [tab](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Tab_Role) 和 [tabpanel](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Tabpanel_Role))
- tree
- treegrid

### 文档结构角色

- [application](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Application_Role)
- [article](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Article_Role)
- [cell](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Cell_Role)
- columnheader
- definition
- directory
- [document](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Document_Role)
- feed
- [figure](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Figure_Role)
- [group](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)
- [heading](/zh-CN/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [img](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Role_Img)
- [list](/zh-CN/docs/Web/Accessibility/ARIA/Roles/List_role)
- [listitem](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Listitem_role)
- math
- none
- note
- [presentation](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role)
- [row](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Row_Role)
- [rowgroup](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Rowgroup_Role)
- rowheader
- separator
- [table](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Table_Role)
- term
- [toolbar](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_toolbar_role)
- tooltip

### 具有里程碑意义的角色

- [banner](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Banner_role)
- [complementary](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Complementary_role)
- [contentinfo](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)
- [form](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [main](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Main_role)
- [navigation](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)
- [region](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Region_role)
- [search](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Search_role)

### 实时区域角色

- [alert](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Alert_Role)
- [log](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role)
- marquee
- [status](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role)
- [timer](/zh-CN/docs/Web/Accessibility/ARIA/Roles/ARIA_timer_role)

### 窗口角色

- [alertdialog](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
- [dialog](/zh-CN/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## 状态和属性

### 组件属性

- aria-autocomplete
- aria-checked
- aria-current
- aria-disabled
- aria-errormessage
- aria-expanded
- aria-haspopup
- aria-hidden
- [aria-invalid](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)
- [aria-label](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- aria-level
- aria-modal
- aria-multiline
- aria-multiselectable
- [aria-orientation](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute)
- aria-placeholder
- aria-pressed
- aria-readonly
- [aria-required](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute)
- aria-selected
- aria-sort
- [aria-valuemax](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute)
- [aria-valuemin](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute)
- [aria-valuenow](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute)
- [aria-valuetext](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute)

### 实时区域属性

- aria-live
- [aria-relevant](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)
- aria-atomic
- aria-busy

### 拖放属性

- aria-dropeffect
- aria-dragged

### 关系属性

- [aria-activedescendant](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute)
- aria-colcount
- aria-colindex
- aria-colspan
- aria-controls
- [aria-describedby](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
- [aria-details](/zh-CN/docs/Web/Accessibility/ARIA/Annotations#associating_annotated_elements_with_their_details)
- aria-errormessage
- aria-flowto
- [aria-labelledby](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- aria-owns
- aria-posinset
- aria-rowcount
- aria-rowindex
- aria-rowspan
- aria-setsize

### MicrosoftEdge 特定的属性

- [x-ms-aria-flowfrom](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques/x-ms-aria-flowfrom) {{Non-standard_Inline}}
