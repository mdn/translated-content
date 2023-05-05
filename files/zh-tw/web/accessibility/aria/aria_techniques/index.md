---
title: Using ARIA
slug: Web/Accessibility/ARIA/ARIA_Techniques
---

## Roles（角色）

### [Widget roles （局部組件）](/zh-TW/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_switch_role)

- [Button （按鈕）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
- [Checkbox （複選核取方塊）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_checkbox_role)
- [Dialog （對話）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role)
- Gridcell （網格欄）
- [Link （超連結）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role)
- [Log （紀錄）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_log_role)
- Marquee
- Menuitem
- Menuitemcheckbox
- Menuitemradio
- Option
- [Progressbar （進度條）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_progressbar_role)
- [Radio （單選選項鈕）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role)
- Scrollbar
- [Slider （滑軌控制鈕）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_slider_role)
- Spinbutton
- [status （狀態）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_status_role)
- Tab （頁籤）
- Tabpanel （頁籤面板）
- [textbox （頁籤容器）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_textbox_role)
- Timer （計時器）
- Tooltip （提示）
- Treeitem
- [switch （開關）](/zh-TW/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_switch_role)

### Composite roles

下面的技術，描述了每個複合角色，以及他們的必要和可選的子角色。

- Combobox （組合框）
- Grid （網格）(包含 row （橫列）, gridcell （網格欄）, rowheader （橫列表頭）, columnheader （欄表頭） roles)
- [Listbox （列表框）](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role) (包含 option role)
- Menu （選單）
- Menubar （選單條）
- [Radiogroup （單選選項群組） (see radio role)](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_radio_role)
- Tablist （頁籤列表） (包含 tab 和 tabpanel roles)
- Tree
- Treegrid

### [Document structure roles](https://www.w3.org/TR/wai-aria/roles#document_structure_roles)

- [Article](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_article_role)
- Definition
- Directory
- Document
- [Group](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_group_role)
- Heading
- Img
- List
- Listitem
- Math
- Note
- [Presentation](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_presentation_role)
- Region
- Separator
- [Toolbar](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_toolbar_role)

### [Landmark roles](https://www.w3.org/TR/wai-aria/roles#landmark_roles)

- Application
- [Banner](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_banner_role)
- Complementary
- Contentinfo
- Form
- Main
- Navigation
- Search

## States and properties

### Widget attributes

- aria-autocomplete
- aria-checked
- aria-current
- aria-disabled
- aria-expanded
- aria-haspopup
- aria-hidden
- [aria-invalid](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_attribute)
- [aria-label](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)
- aria-level
- aria-multiline
- aria-multiselectable
- [aria-orientation](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute)
- aria-pressed
- aria-readonly
- [aria-required](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute)
- aria-selected
- aria-sort
- [aria-valuemax](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute)
- [aria-valuemin](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute)
- [aria-valuenow](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute)
- [aria-valuetext](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute)

### Live region attributes

- aria-live
- [aria-relevant](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute)
- aria-atomic
- aria-busy

### Drag & drop attributes

- aria-dropeffect
- aria-dragged

### Relationship attributes

- [aria-activedescendant](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-activedescendant_attribute)
- aria-controls
- [aria-describedby](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute)
- aria-flowto
- [aria-labelledby](/zh-TW/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)
- aria-owns
- aria-posinset
- aria-setsize
