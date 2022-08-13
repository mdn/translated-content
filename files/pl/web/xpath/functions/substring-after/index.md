---
title: substring-after
slug: Web/XPath/Functions/substring-after
tags:
  - Dokumentacje
  - Wszystkie_kategorie
  - XSLT
  - XSLT:Dokumentacje
translation_of: Web/XPath/Functions/substring-after
original_slug: Web/XPath/Funkcje/substring-after
---
{{ XsltRef() }}

Funkcja `substring-after` zwraca łańcuch znaków będący resztą podanego łańcucha znaków po danym podciągu.

### Składnia

    substring-after( stóg siana , igła )

### Argumenty

- _`stóg siana`_
  - : Oceniany łańcuch znaków. Zostanie zwrócona część tego łańcucha.

- _`igła`_
  - : Szukany podciąg. Zostanie zwrócone wszystko po pierwszym wystąpieniu _`igła`_ w łańcuchu _`stóg siana`_.

### Zwraca

Łańcuch znaków.

### Przykłady

| Przykład XPath                 | Wyświetli              |
| ------------------------------ | ---------------------- |
| `substring-after('aa-bb','-')` | `bb`                   |
| `substring-after('aa-bb','a')` | `a-bb`                 |
| `substring-after('aa-bb','b')` | `b`                    |
| `substring-after('aa-bb','q')` | (pusty łańcuch znaków) |

### Definicja

[XPath 1.0 4.2](http://www.w3.org/TR/xpath#function-substring-after)

### Gecko

Obsługuje.

{{ languages( { "en": "en/XPath/Functions/substring-after", "fr": "fr/XPath/Fonctions/substring-after", "ja": "ja/XPath/Functions/substring-after" } ) }}
