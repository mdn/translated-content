---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLTableElement/tHead
---
{{ ApiRef() }}

### Podsumowanie

**tHead** zwraca THEAD (nagłówek) tabeli.

### Składnia

    th_el = table.tHead

### Parametry

- `th_el` jest [HTMLTableSectionElement](pl/HTMLTableSectionElement).

### Przykład

    if (table.tHead == my_head_el) {
       ...
    }

### Uwagi

Ta własność zwraca VOID, jeśli nie istnieje element THEAD.

### Specyfikacje

[thead](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-9530944)

[Interface HTMLTableSectionElement](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-67417573)

{{ languages( { "en": "en/DOM/table.tHead" } ) }}
