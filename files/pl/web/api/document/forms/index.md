---
title: document.forms
slug: Web/API/Document/forms
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/forms
---
{{ ApiRef() }}

### Podsumowanie

**forms** zwraca listę elementów FORM z bieżącego dokumentu.

### Składnia

    listaWęzłów = document.forms

### Przykład

    <html>

    <head>
    <title> document.forms example</title>
    </head>

    <body>
    <form id="robby">
     <input type="button" onclick="alert(document.forms[0].id);"
     value="robby's form" />
    </form>

    <form id="dave">
     <input type="button" onclick="alert(document.forms[1].id);"
     value="dave's form" />
    </form>

    <form id="paul">
     <input type="button" onclick="alert(document.forms[2].id);"
     value="paul's form" />
    </form>

    </body>
    </html>

### Specyfikacja

[forms](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-1689064)

{{ languages( { "en": "en/DOM/document.forms", "ja": "ja/DOM/document.forms" } ) }}
