---
title: HTMLFormElement.elements
slug: Web/API/HTMLFormElement/elements
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLFormElement/elements
---
{{ ApiRef() }}

### Podsumowanie

**elements** zwraca kolekcję [`HTMLCollection`](http://www.w3.org/TR/2001/WD-DOM-Level-2-HTML-20011025/html.html#ID-75708506) wszystkich kontrolek zawartych w elemencie FORM.

Do konkretnego elementu możesz odnosić się poprzez indeks lub za pomocą nazwy ([name](pl/DOM/element.name)) bądź [id](pl/DOM/element.id) tego elementu.

### Składnia

    listaWęzłów =
    HTMLFormElement.elements

### Przykłady

    var inputs = document.getElementById("form1").elements;
    var inputByIndex = inputs[2];
    var inputByName = inputs["login"];

### Specyfikacja

Specyfikacja W3C DOM 2 HTML: [elements](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76728479)

{{ languages( { "en": "en/DOM/form.elements", "ja": "ja/DOM/form.elements" } ) }}
