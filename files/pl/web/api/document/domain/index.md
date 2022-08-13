---
title: document.domain
slug: Web/API/Document/domain
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/domain
---
{{ ApiRef() }}

### Podsumowanie

**domain** pobiera/ustawia domenę bieżącego dokumentu.

### Składnia

    ciąg = document.domain
    document.domain =ciąg

### Przykład

    bad_domain = "www.love.com";
    if ( document.domain == bad_domain ) {
       window.close();
    }
    // jeśli dokument to www.love.com/good.html,
    // to skrypt zamknie okno

### Uwagi

Właściwość zwraca NULL jezeli nie można zidentyfikować serwera. W specyfikacji DOM własność tą oznaczono jako tylko do oczytu, jednak Mozilla pozwala na jej modyfikację.

### Specyfikacja

[domain](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-2250147)

{{ languages( { "en": "en/DOM/document.domain" } ) }}
