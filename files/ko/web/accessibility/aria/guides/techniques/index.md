---
title: "ARIA 사용하기: 역할, 상태, 속성"
slug: Web/Accessibility/ARIA/Guides/Techniques
original_slug: Web/Accessibility/ARIA/Guides/Techniques
l10n:
  sourceCommit: 5ea9b7a35cf3a540b52b88eae986b4e593ee726f
---

{{AccessibilitySidebar}}

ARIA는 요소에 적용할 수 있는 의미(semantics)를 정의하며, 이는 **역할**(role, 사용자 인터페이스 요소의 유형을 정의)과 해당 역할이 지원하는 **상태**(state) 및 **속성**(property)으로 나뉩니다. 작성자는 요소의 수명 주기 동안 요소에 ARIA 역할과 적절한 상태 및 속성을 할당해야 합니다. 단, 요소가 이미 적절한 ARIA 의미를 가지고 있는 경우(적절한 HTML 요소를 사용하는 경우)는 예외입니다. ARIA 의미를 추가하는 것은 브라우저의 접근성 API에 추가적인 정보를 노출할 뿐이며, 페이지의 DOM에는 영향을 주지 않습니다.

## 역할 (Roles)

### 위젯 역할 (Widget roles)

- [`button`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`gridcell`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`progressbar`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`radio`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`scrollbar`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (포커스 가능한 경우)
- [`slider`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`textbox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

### 복합 역할 (Composite roles)

아래 기법들은 각 복합 역할(composite role)과 그에 필요한 또는 선택적인 자식 역할들을 설명합니다.

- [`combobox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) ([`row`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`gridcell`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`rowheader`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role), [`columnheader`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role) 역할 포함)
- [`listbox`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) ([`option`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/option_role) 역할 포함)
- [`menu`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) ([`radio` 역할](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role) 참고)
- [`tablist`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) ([`tab`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) 및 [`tabpanel`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) 역할 포함)
- [`tree`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

### 문서 구조 역할 (Document structure roles)

- [`application`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`cell`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`definition`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- [`directory`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`feed`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`figure`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [`group`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`img`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [`list`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [`listitem`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`math`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`none`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)
- [`presentation`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [`row`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`rowheader`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`separator`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`table`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`term`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`toolbar`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)

### 랜드마크 역할 (Landmark roles)

- [`banner`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [`complementary`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [`contentinfo`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [`form`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [`main`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [`navigation`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [`region`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [`search`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)

### 라이브 리전 역할 (Live Region Roles)

- [`alert`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### 윈도우 역할 (Window Roles)

- [`alertdialog`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## 상태 및 속성 (States and properties)

### 위젯 속성 (Widget attributes)

- [`aria-autocomplete`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-current`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-disabled`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### 라이브 리전 속성 (Live region attributes)

- [`aria-live`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

### 드래그 &amp; 드롭 속성 (Drag &amp; drop attributes)

- [`aria-dropeffect`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed) {{deprecated_inline}}

### 관계 속성 (Relationship attributes)

- [`aria-activedescendant`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

### MicrosoftEdge 전용 속성 (MicrosoftEdge-specific properties)

- `x-ms-aria-flowfrom` {{Non-standard_Inline}}