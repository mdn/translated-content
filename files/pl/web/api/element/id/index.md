---
title: element.id
slug: Web/API/Element/id
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/id
---
{{ ApiRef() }}

### Podsumowanie

Własność **id** jednoznacznie identyfikuje bieżący element.

### Składnia i wartości

    id_str = element.id
    element.id =id_str

- `id_str` to ciąg znaków reprezentujący `id` bieżącego elementu.

### Przykład

    if (element.id != "main_loop")
         goBack();

### Uwagi

Nie ma ważniejszej własności w dziedzinie konstruowania stron niż
_id_
. ID elementu jest tym, czego najczęściej używa się by go wydobyć (np. za pomocą **[getElementById](pl/DOM/document.getElementById)**) i pozwala ono manipulować węzłami niezależnie od innych węzłów. W HTML-u i w XUL-u **id** definiowane jest jako atrybut tak:

    <td id="table-cell2" />

Jeśli zamierzasz używać DOM na swoich stronach dobrze jest przypisać tyle atrybutów **id** ile tylko będzie potrzebne. Zauważ też, że
_id_
używa się również by powiązać reguły stylów CSS z poszczególnymi elementami.

### Specyfikacja

[id](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-63534901)

{{ languages( { "en": "en/DOM/element.id", "fr": "fr/DOM/element.id", "ja": "ja/DOM/element.id", "zh-cn": "cn/DOM/element.id" } ) }}
