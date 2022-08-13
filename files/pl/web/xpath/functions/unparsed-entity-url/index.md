---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/unparsed-entity-url
original_slug: Web/XPath/Funkcje/unparsed-entity-url
---
{{ XsltRef() }}

Funkcja `unparsed-entity-url()` zwraca adres URI nieprzetworzonej encji o podanej nazwie. Są to nie XML-owe dane odwołujące się z DTD dokumentu źródłowego.

### Składnia

    string unparsed-entity-url(łańcuch)

### Argumenty

Nazwa nieprzetworzonej encji. Jeśli argument nie jest łańcuchem znaków, to jest on konwertowany zgodnie z zasadami funkcji string(). Nazwa powinna być nazwą XML.

### Zwraca

URI encji nieprzetworzonej encji pobranej z DTD, jeśli istnieje. W przeciwnym wypadku zwracany jest pusty łańcuch znaków.

### Definicja

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-unparsed-entity-uri)

### Gecko

Nie obsługuje.

{{ languages( { "en": "en/XPath/Functions/unparsed-entity-url", "fr": "fr/XPath/Fonctions/unparsed-entity-url" } ) }}
