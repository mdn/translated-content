---
title: element.prefix
slug: Web/API/Element/prefix
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/prefix
original_slug: Web/API/Node/prefix
---
{{ ApiRef() }}

### Podsumowanie

`prefix` zwraca prefiks przestrzeni nazw węzła lub `null`, jeśli nie określono prefiksu.

### Składnia

    string = element.prefix
    element.prefix =string

### Przykłady

    <x:div onclick="alert(this.prefix)"/>

Wyświetlone zostanie "x".

### Uwagi

Własność ta działa tylko wtedy, gdy używany jest parser przetwarzający przestrzenie nazw, tj. gdy dokument serwowany jest z typem MIME XML. Własność nie działa dla dokumentów HTML.

### Specyfikacja

[Node.prefix](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeNSPrefix) (wprowadzona w DOM2)



{{ languages( { "en": "en/DOM/element.prefix", "fr": "fr/DOM/element.prefix", "it": "it/DOM/element.prefix", "ja": "ja/DOM/element.prefix" } ) }}
