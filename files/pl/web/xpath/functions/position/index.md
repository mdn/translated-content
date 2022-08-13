---
title: position
slug: Web/XPath/Functions/position
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/position
original_slug: Web/XPath/Funkcje/position
---
{{ XsltRef() }}

Funkcja `position` zwraca liczbę równą pozycji kontekstu z kontekstu oceny wyrażenia.

### Składnia

    position()

### Zwraca

Liczbę całkowitą równą pozycji kontekstu z kontekstu oceny wyrażenia.

### Uwagi

- Należy zauważyć, że pozycja węzła w kontekście nie zaczyna się od zera. Pierwszy węzeł ma pozycję 1.
- Kontekst jest określony przez resztę ścieżki.

<!---->

    <xsl:template match="//a[position() = 5]">
     <!-- ten szablon odpowiada piątemu elementowi 'a' gdziekolwiek
          w dokumencie. -->
    </xsl:template>

<!---->

    <xsl:template match="//div[@class='foo']/bar[position() = 1]">
     <!-- ten szablon odpowiada pierwszemu elementowi 'bar' będącemu
          potomkiem elementu 'div' z atrybutem class równym 'foo' -->
    </xsl:template>

### Definicja

[XPath 1.0 4.1](http://www.w3.org/TR/xpath#function-position)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/position", "fr": "fr/XPath/Fonctions/position", "ja": "ja/XPath/Functions/position" } ) }}
