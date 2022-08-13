---
title: substring
slug: Web/XPath/Functions/substring
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/substring
original_slug: Web/XPath/Funkcje/substring
---
{{ XsltRef() }}

Funkcja `substring` zwraca część podanego łańcucha znaków.

### Składnia

    substring( łańcuch , start [, długość] )

### Argumenty

- _`ciąg`_
  - : Łańcuch znaków do oceny.

<!---->

- _`start`_
  - : Pozycja wewnątrz _`łańcuch`_, gdzie rozpoczyna się podciąg

<!---->

- _`długość`_ (opcjonalny)
  - : Długość podciągu. Jeśli pominięty, zwrócony łańcuch znaków będzie zawierał każdy znak z zakresu od pozycji startowej do końca łańcucha.

### Zwraca

Łańcuch znaków.

### Uwagi

Podobnie jak w innych funkcjach XPath, pozycja nie jest liczona od zera. Pierwszy znak w tym ciągu ma pozycję 1, nie 0.

### Definicja

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/substring", "es": "es/XPath/Funciones/substring", "fr": "fr/XPath/Fonctions/substring", "ja": "ja/XPath/Functions/substring" } ) }}
