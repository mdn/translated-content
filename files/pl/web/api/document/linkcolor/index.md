---
title: document.linkColor
slug: Web/API/Document/linkColor
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/linkColor
---
{{ ApiRef() }}

### Podsumowanie

{{ Deprecated_header() }} `linkColor` pobiera/ustawia kolor odnośników w dokumencie.

### Składnia

    kolor = document.linkColor
    document.linkColor =kolor

### Parametry

- `kolor` jest ciągiem zawierającym nazwę koloru (np. "blue", "darkblue", itp.) lub wartość szesnastkową, jak w HTML (np. "#fefdf8").

### Uwagi

`document.linkColor` jest [przestarzałe w DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268).

Rekomendowaną alternatywą jest pobranie/ustawienie własności CSS {{ Cssxref("color") }} na elemencie [HTML anchor (\<a>) links](pl/HTML/Element/a) (np: `a {color:red;}`).

Kolejną alternatywą `document.body.link` mimo, że jest [przestarzałe w HTML 4.01](http://www.w3.org/TR/html401/struct/global.html#adef-link) szczególnie przy użyciu alternatywnego CSS.

### Przykład

    document.linkColor = "blue";

### Specyfikacja

{{ DOM0() }}

[MSDN: Własność linkColor](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/linkcolor.asp)

{{ languages( { "en": "en/DOM/document.linkColor" } ) }}
