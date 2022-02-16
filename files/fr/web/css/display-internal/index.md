---
title: <display-internal>
slug: Web/CSS/display-internal
tags:
  - CSS
  - Reference
  - Type de donnée
translation_of: Web/CSS/display-internal
---
{{CSSRef}}

Certains modes de disposition tels que `table` et `ruby` possèdent une structure interne complexe avec différents roles pour les éléments enfants et descendants. Cette page décrit ces valeurs « internes » pour `display` et qui s'appliquent dans un mode donné.

## Syntaxe

Sauf mention contraire, le type d'affichage intérieur et extérieur sont définis simultanément par le mot-clé indiqué.

- `table-row-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tbody")}}.
- `table-header-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("thead")}}.
- `table-footer-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tfoot")}}.
- `table-row`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("tr")}}.
- `table-cell`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("td")}}.
- `table-column-group`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("colgroup")}}.
- `table-column`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("col")}}.
- `table-caption`
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("caption")}}.
- `ruby-base` {{Experimental_Inline}}
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rb")}}.
- `ruby-text` {{Experimental_Inline}}
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rt")}}.
- `ruby-base-container` {{Experimental_Inline}}
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rbc")}} générés comme des boîtes anonymes.
- `ruby-text-container` {{Experimental_Inline}}
  - : Ces éléments se comportent comme des éléments HTML {{HTMLElement("rtc")}}.

## Compatibilité des navigateurs

### Prise en charge pour les valeurs liées à `table`

`table`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row` et `table-row-group`

{{Compat("css.properties.display.table_values", 10)}}

### Prise en charge pour les valeurs `ruby`

`ruby`, `ruby-base`, `ruby-base-container`, `ruby-text` et `ruby-text-container`

{{Compat("css.properties.display.ruby_values", 10)}}

## Voir aussi

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}
