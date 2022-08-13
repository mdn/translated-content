---
title: document.characterSet
slug: Web/API/Document/characterSet
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/characterSet
---
{{ ApiRef() }}

### Podsumowanie

Zwraca kodowanie znaków dokumentu.

### Składnia

    ciąg = document.characterSet

### Przykład

    <button onclick="alert(document.characterSet);">Pokaż kodowanie znaków</button>
    // zwraca kodowanie znaków dokumentu, takie jak "ISO-8859-1 lub UTF-8"

### Uwagi

Jest to zestaw znaków użyty przy renderowaniu strony, niekoniecznie taki, jak zadeklarowany w kodzie strony (użytkownik może narzucić własne kodowanie).

Kompletną listę dostępnych zestawów znaków znajdziesz tu: <http://www.iana.org/assignments/character-sets>.

### Specyfikacja

DOM Level 0 - brak w specyfikacji.

{{ languages( { "en": "en/DOM/document.characterSet", "es": "es/DOM/document.characterSet" } ) }}
