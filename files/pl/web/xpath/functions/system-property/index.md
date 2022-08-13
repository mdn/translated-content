---
title: system-property
slug: Web/XPath/Functions/system-property
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/system-property
original_slug: Web/XPath/Funkcje/system-property
---
{{ XsltRef() }}

Funkcja `system-property` zwraca obiekt reprezentujący daną własność systemową.

### Składnia

    system-property( name )

### Argumenty

- _`name`_ (opcjonalny)
  - : Nazwa własności systemowej. Argument musi być łańcuchem znaków będącym poprawną wartością QName. QName jest rozwijany do nazwy za pomocą deklaracji przestrzeni nazw w zasięgu wyrażenia. Funkcja własności systemowej zwraca obiekt reprezentujący wartość własności systemowej identyfikowanej za pomocą nazwy. Jeśli podana własność systemowa nie istnieje, powinien zostać zwrócony pusty łańcuch znaków.

### Zwraca

Obiekt reprezentujący daną własność systemową.

### Uwagi

- xsl:version, liczba podająca wersję XSLT zaimplementowaną przez procesor; dla procesorów XSLT implementujących wersję XSLT określoną przez ten dokument zwracana jest wartość 1.0
- xsl:vendor, łańcuch znaków identyfikujący dystrybutora procesora XSLT
- xsl:vendor-url, łańcuch znaków zawierający adres URL identyfikujący dystrybutora procesora XSLT; zazwyczaj jest to strona główna (domowa) dystrybutora.

### Definicja

[XSLT 1.0 12.4](http://www.w3.org/TR/xslt#function-system-property)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/system-property", "fr": "fr/XPath/Fonctions/system-property" } ) }}
