---
title: window.document
slug: Web/API/Window/document
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/document
---
{{ ApiRef() }}

### Podsumowanie

Zwraca referencję do dokumentu zawartego w oknie.

### Składnia

    doc = window.document

### Parametry

- `doc` jest referencją do obiektu [`document`](pl/DOM/document).

### Przykład

    <html>
    <head>
       <title>Witaj, Świecie!</title>
    </head>
    <body>

    <script type="text/javascript">
       var doc = window.document;
       alert( doc.title);    // wyświetli: Witaj, Świecie!
    </script>

    </body>
    </html>

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.document", "fr": "fr/DOM/window\.document", "ja": "ja/DOM/window\.document" } ) }}
