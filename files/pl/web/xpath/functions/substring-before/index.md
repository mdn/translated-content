---
title: substring-before
slug: Web/XPath/Functions/substring-before
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/substring-before
original_slug: Web/XPath/Funkcje/substring-before
---
{{ XsltRef() }}

Funkcja `substring-before` zwraca łańcuch znaków będący resztą podanego łańcucha znaków przed danym podciągiem.

### Składnia

    substring-before( stóg siana , igła )

### Argumenty

- _`stóg siana`_
  - : Oceniany łańcuch znaków. Zostanie zwrócona część tego łańcucha.

<!---->

- _`igła`_
  - : Szukany podciąg. Zostanie zwrócone wszystko przed pierwszym wystąpieniem _`igła`_ w łańcuchu _`stóg siana`_.

### Zwraca

Łańcuch znaków.

### Przykłady

| Przykład XPath                  | Wyświetli              |
| ------------------------------- | ---------------------- |
| `substring-before('aa-bb','-')` | `aa`                   |
| `substring-before('aa-bb','a')` | `(empty string)`       |
| `substring-before('aa-bb','b')` | `aa-`                  |
| `substring-before('aa-bb','q')` | (pusty łańcuch znaków) |

### Definicja

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring-before)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/substring-before", "fr": "fr/XPath/Fonctions/substring-before", "ja": "ja/XPath/Functions/substring-before" } ) }}
