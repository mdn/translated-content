---
title: "Uso de ARIA: roles, estados y propiedades"
slug: Web/Accessibility/ARIA/ARIA_Techniques
l10n:
  sourceCommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

<section id="Quick_links">
  <ol>
    <li><a href="/es/docs/Web/Accessibility/ARIA/Annotations">Anotaciones ARIA</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/ARIA_Guides">Guías ARIA</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/ARIA_Live_Regions">Regiones en vivo de ARIA</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/ARIA_Screen_Reader_Implementors_Guide">Guía de implementadores del lector de pantalla ARIA</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/ARIA_Techniques">Uso de ARIA: roles, estados y propiedades</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/Multipart_labels">Etiquetas de varias partes</a></li>
    <li><a href="/es/docs/Web/Accessibility/ARIA/How_to_file_ARIA-related_bugs">Cómo registrar errores relacionados con ARIA</a></li>
    <li class="toggle">
      <details><summary>Estados y propiedades de ARIA</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Attributes", 1)}}
      </details>
    </li>
    <li class="toggle">
      <details><summary>Roles WAI-ARIA</summary>
        {{ListSubpagesForSidebar("Web/Accessibility/ARIA/Roles", 1)}}
      </details>
    </li>
  </ol>
</section>

ARIA define la semántica que se puede aplicar a los elementos, que se dividen en **roles** (que definen un tipo de elemento de interfaz de usuario) y **estados** y **propiedades** que son compatibles con un rol. Los autores deben asignar una función ARIA y los estados y propiedades apropiados a un elemento durante su ciclo de vida, a menos que el elemento ya tenga la semántica ARIA adecuada (mediante el uso de un elemento HTML apropiado). La adición de la semántica ARIA solo expone información adicional a la API de accesibilidad de un navegador y no afecta el DOM de una página.

## Roles

### Roles de widgets

- [`button`](/es/docs/Web/Accessibility/ARIA/Roles/button_role)
- [`checkbox`](/es/docs/Web/Accessibility/ARIA/Roles/checkbox_role)
- [`gridcell`](/es/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [`link`](/es/docs/Web/Accessibility/ARIA/Roles/link_role)
- [`menuitem`](/es/docs/Web/Accessibility/ARIA/Roles/menuitem_role)
- [`menuitemcheckbox`](/es/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role)
- [`menuitemradio`](/es/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role)
- [`option`](/es/docs/Web/Accessibility/ARIA/Roles/option_role)
- [`progressbar`](/es/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`radio`](/es/docs/Web/Accessibility/ARIA/Roles/radio_role)
- [`scrollbar`](/es/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`searchbox`](/es/docs/Web/Accessibility/ARIA/Roles/searchbox_role)
- [`separator`](/es/docs/Web/Accessibility/ARIA/Roles/separator_role) (cuando es enfocable)
- [`slider`](/es/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/es/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [`switch`](/es/docs/Web/Accessibility/ARIA/Roles/switch_role)
- [`tab`](/es/docs/Web/Accessibility/ARIA/Roles/tab_role)
- [`tabpanel`](/es/docs/Web/Accessibility/ARIA/Roles/tabpanel_role)
- [`textbox`](/es/docs/Web/Accessibility/ARIA/Roles/textbox_role)
- [`treeitem`](/es/docs/Web/Accessibility/ARIA/Roles/treeitem_role)

### Roles compuestos

Las técnicas a continuación describen cada rol compuesto, así como sus roles secundarios requeridos y opcionales.

- [`combobox`](/es/docs/Web/Accessibility/ARIA/Roles/combobox_role)
- [`grid`](/es/docs/Web/Accessibility/ARIA/Roles/grid_role) (incluyendo los roles [`row`](/es/docs/Web/Accessibility/ARIA/Roles/row_role), [`gridcell`](/es/docs/Web/Accessibility/ARIA/Roles/gridcell_role), [`rowheader`](/es/docs/Web/Accessibility/ARIA/Roles/rowheader_role), [`columnheader`](/es/docs/Web/Accessibility/ARIA/Roles/columnheader_role) )
- [`listbox`](/es/docs/Web/Accessibility/ARIA/Roles/listbox_role) (incluyendo el rol [`option`](/es/docs/Web/Accessibility/ARIA/Roles/option_role))
- [`menu`](/es/docs/Web/Accessibility/ARIA/Roles/menu_role)
- [`menubar`](/es/docs/Web/Accessibility/ARIA/Roles/menubar_role)
- [`radiogroup`](/es/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) (vea [`radio role`](/es/docs/Web/Accessibility/ARIA/Roles/radio_role))
- [`tablist`](/es/docs/Web/Accessibility/ARIA/Roles/tablist_role) (incluyendo los roles [`tab`](/es/docs/Web/Accessibility/ARIA/Roles/tab_role) y [`tabpanel`](/es/docs/Web/Accessibility/ARIA/Roles/tabpanel_role))
- [`tree`](/es/docs/Web/Accessibility/ARIA/Roles/tree_role)
- [`treegrid`](/es/docs/Web/Accessibility/ARIA/Roles/treegrid_role)

### Funciones de la estructura del documento

- [`application`](/es/docs/Web/Accessibility/ARIA/Roles/application_role)
- [`article`](/es/docs/Web/Accessibility/ARIA/Roles/article_role)
- [`cell`](/es/docs/Web/Accessibility/ARIA/Roles/cell_role)
- [`columnheader`](/es/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- [`definition`](/es/docs/Web/Accessibility/ARIA/Roles/definition_role)
- [`directory`](/es/docs/Web/Accessibility/ARIA/Roles/directory_role)
- [`document`](/es/docs/Web/Accessibility/ARIA/Roles/document_role)
- [`feed`](/es/docs/Web/Accessibility/ARIA/Roles/feed_role)
- [`figure`](/es/docs/Web/Accessibility/ARIA/Roles/figure_role)
- [`group`](/es/docs/Web/Accessibility/ARIA/Roles/group_role)
- [`heading`](/es/docs/Web/Accessibility/ARIA/Roles/heading_role)
- [`img`](/es/docs/Web/Accessibility/ARIA/Roles/img_role)
- [`list`](/es/docs/Web/Accessibility/ARIA/Roles/list_role)
- [`listitem`](/es/docs/Web/Accessibility/ARIA/Roles/listitem_role)
- [`math`](/es/docs/Web/Accessibility/ARIA/Roles/math_role)
- [`none`](/es/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`note`](/es/docs/Web/Accessibility/ARIA/Roles/note_role)
- [`presentation`](/es/docs/Web/Accessibility/ARIA/Roles/presentation_role)
- [`row`](/es/docs/Web/Accessibility/ARIA/Roles/row_role)
- [`rowgroup`](/es/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [`rowheader`](/es/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [`separator`](/es/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`table`](/es/docs/Web/Accessibility/ARIA/Roles/table_role)
- [`term`](/es/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`toolbar`](/es/docs/Web/Accessibility/ARIA/Roles/toolbar_role)
- [`tooltip`](/es/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### Roles destacados

- [`banner`](/es/docs/Web/Accessibility/ARIA/Roles/banner_role)
- [`complementary`](/es/docs/Web/Accessibility/ARIA/Roles/complementary_role)
- [`contentinfo`](/es/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
- [`form`](/es/docs/Web/Accessibility/ARIA/Roles/form_role)
- [`main`](/es/docs/Web/Accessibility/ARIA/Roles/main_role)
- [`navigation`](/es/docs/Web/Accessibility/ARIA/Roles/navigation_role)
- [`region`](/es/docs/Web/Accessibility/ARIA/Roles/region_role)
- [`search`](/es/docs/Web/Accessibility/ARIA/Roles/search_role)

### Roles de región en vivo

- [`alert`](/es/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [`log`](/es/docs/Web/Accessibility/ARIA/Roles/log_role)
- [`marquee`](/es/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [`status`](/es/docs/Web/Accessibility/ARIA/Roles/status_role)
- [`timer`](/es/docs/Web/Accessibility/ARIA/Roles/timer_role)

### Roles de ventana

- [`alertdialog`](/es/docs/Web/Accessibility/ARIA/Roles/alertdialog_role)
- [`dialog`](/es/docs/Web/Accessibility/ARIA/Roles/dialog_role)

## Estados y propiedades

### Atributos de widgets

- [`aria-autocomplete`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)
- [`aria-checked`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-checked)
- [`aria-current`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-current)
- [`aria-disabled`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-disabled)
- [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-expanded`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
- [`aria-haspopup`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup)
- [`aria-hidden`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [`aria-invalid`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-invalid)
- [`aria-label`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-level`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-modal`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-modal)
- [`aria-multiline`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-multiline)
- [`aria-multiselectable`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-orientation`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
- [`aria-placeholder`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder)
- [`aria-pressed`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-pressed)
- [`aria-readonly`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
- [`aria-required`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-required)
- [`aria-selected`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
- [`aria-sort`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-sort)
- [`aria-valuemax`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
- [`aria-valuenow`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
- [`aria-valuetext`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

### Atributos de región en vivo

- [`aria-live`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
- [`aria-busy`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-busy)

### Atributos de arrastrar y soltar

- [`aria-dropeffect`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-dropeffect) {{deprecated_inline}}
- [`aria-grabbed`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-grabbed) {{deprecated_inline}}

### Atributos de relación

- [`aria-activedescendant`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant)
- [`aria-colcount`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colcount)
- [`aria-colindex`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colindex)
- [`aria-colspan`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-colspan)
- [`aria-controls`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
- [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-details`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [`aria-errormessage`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage)
- [`aria-flowto`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-flowto)
- [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-owns`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-owns)
- [`aria-posinset`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-posinset)
- [`aria-rowcount`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount)
- [`aria-rowindex`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex)
- [`aria-rowspan`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan)
- [`aria-setsize`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-setsize)

### Propiedades específicas de MicrosoftEdge

- [`x-ms-aria-flowfrom`](/es/docs/Web/Accessibility/ARIA) {{Non-standard_Inline}}
