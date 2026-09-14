---
title: "Utiliser ARIA : rôles, états et propriétés"
slug: Web/Accessibility/ARIA/Guides/Techniques
original_slug: Web/Accessibility/ARIA/ARIA_Techniques
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

ARIA définit des sémantiques applicables aux éléments, réparties en **rôles** (définissant un type de composant d'interface utilisateur) et en **états** et **propriétés** pris en charge par un rôle. Les auteur·ice·s doivent attribuer un rôle ARIA ainsi que les états et propriétés appropriés à un élément pendant son cycle de vie, sauf si l'élément possède déjà une sémantique ARIA adaptée (par l'utilisation d'un élément HTML approprié). L'ajout de sémantique ARIA expose uniquement des informations supplémentaires à l'API d'accessibilité du navigateur, sans modifier le DOM de la page.

### Rôles

### Rôles de composant d'interface

- [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role)
- [`checkbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role)
- [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role)
- [`link`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/link_role)
- [`menuitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [`menuitemcheckbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
- [`progressbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`searchbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/searchbox_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (quand sélectionnable)
- [`slider`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- [`switch`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role)
- [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
- [`treeitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role)

### Rôles composés

Les techniques ci-dessous décrivent chaque rôle composé ainsi que leurs rôles enfants obligatoires ou facultatifs.

- [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role)
- [`grid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/grid_role) (incluant les rôles [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role), [`gridcell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/gridcell_role), [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role), [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role))
- [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) (incluant le rôle [`option`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role))
- [`menu`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)
- [`menubar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)
- [`radiogroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) (voir [le rôle `radio`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role))
- [`tablist`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role) (incluant les rôles [`tab`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role) et [`tabpanel`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role))
- [`tree`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role)
- [`treegrid`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treegrid_role)

### Rôles de structure de document

- [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [`cell`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`definition`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/definition_role)
- [`directory`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role)
- [`document`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)
- [`feed`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role)
- [`figure`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/figure_role)
- [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role)
- [`heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
- [`img`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)
- [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
- [`listitem`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role)
- [`math`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/math_role)
- [`none`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`note`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/note_role)
- [`presentation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
- [`row`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/row_role)
- [`rowgroup`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowgroup_role)
- [`rowheader`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/rowheader_role)
- [`separator`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`table`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/table_role)
- [`term`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`toolbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)
- [`tooltip`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tooltip_role)

### Rôles de points de repère

- [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role)
- [`complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
- [`contentinfo`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role)
- [`form`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/form_role)
- [`main`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role)
- [`navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
- [`region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [`search`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)

### Rôles de région dynamique

- [`alert`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [`log`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [`marquee`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [`status`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [`timer`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/timer_role)

### Rôles de fenêtre

- [`alertdialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- [`dialog`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role)

## États et propriétés

### Attributs de composants d'interface

- [`aria-autocomplete`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)
- [`aria-checked`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
- [`aria-current`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)
- [`aria-disabled`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
- [`aria-haspopup`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
- [`aria-hidden`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)
- [`aria-invalid`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)
- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [`aria-modal`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)
- [`aria-multiline`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)
- [`aria-multiselectable`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)
- [`aria-orientation`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
- [`aria-placeholder`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)
- [`aria-pressed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)
- [`aria-readonly`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)
- [`aria-required`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)
- [`aria-selected`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)
- [`aria-sort`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)
- [`aria-valuemax`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
- [`aria-valuenow`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
- [`aria-valuetext`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

### Attributs de zones « en direct »

- [`aria-live`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)

### Attributs de glisser-déposer

- [`aria-dropeffect`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-grabbed) {{deprecated_inline}}

### Attributs de relation

- [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- [`aria-colcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`aria-colindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-colspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)
- [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- [`aria-errormessage`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
- [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)
- [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)
- [`aria-rowcount`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)
- [`aria-rowindex`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)
- [`aria-rowspan`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)
- [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)

### Propriétés spécifiques à Microsoft Edge

- `x-ms-aria-flowfrom` {{Non-standard_Inline}}
