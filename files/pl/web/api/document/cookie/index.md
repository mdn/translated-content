---
title: document.cookie
slug: Web/API/Document/cookie
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/cookie
---
{{ ApiRef() }}

### Podsumowanie

Pobiera/ustawia listę ciasteczek powiązanych z dokumentem.

### Składnia

    listaCiasteczek = document.cookie
    document.cookie = listaCiasteczek

### Parametry

- `listaCiasteczek` jest ciągiem zawierającym rozdzieloną średnikami listę ciasteczek.

### Przykład

    // ta funkcja ustawia dwa ciasteczka
    // a następnie wyświetla je w ostrzeżeniu
    function sgCookie() {
      document.cookie = "name=oeschger";
      document.cookie = "favorite_food=tripe";
      alert(document.cookie);
    }
    // wyświetli: name=oeschger;favorite_food=tripe

### Uwagi

Jeżeli nie ma ciasteczek powiązanych z tym dokumentem, funkcja zwraca pusty ciąg. Zauważ również, że nie możesz użyć tej własności, bu ustawić więcej niż jedno ciasteczko za jednym razem.

### Specyfikacja

[cookie](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-8747038)

{{ languages( { "en": "en/DOM/document.cookie", "es": "es/DOM/document.cookie" } ) }}
