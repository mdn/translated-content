---
title: document.location
slug: Web/API/Document/location
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/location
---
{{ ApiRef() }}

### Podsumowanie

Pobiera URL bieżącego dokumentu.

### Składnia

    ciąg = document.location

### Przykład

    dump(document.location);
    // zwraca ciąg taki jak np.:
    // http://www.peoplemagazine.com/juicybits.html

### Uwagi

**document.location** działa tak samo jak [document.URL](/pl/DOM/document.URL). Obydwie te własności są tylko do odczytu, w przeciwieństwie do [window.location](/pl/docs/web/api/Window/location), które można ustawiać. Ponieważ `document` reprezentuje jeden dokument lub URL, nie można zmieniać jego lokalizacji.

### Specyfikacja

DOM Level 0 - brak w specyfikacji.

{{ languages( { "en": "/en/DOM/document.location" } ) }}
