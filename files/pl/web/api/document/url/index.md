---
title: document.URL
slug: Web/API/Document/URL
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/URL
---
{{ ApiRef() }}

### Podsumowanie

Zwraca URL bieżącego dokumentu.

### Składnia

    ciąg = document.URL

### Przykład

    var currentURL = document.URL;
    alert(currentURL);

### Uwagi

URL ma zastąpić używaną w DOM Level 0 własność `document.location.href`. Jednakże, w przeciwieństwie do niej, `document.URL` nie można ustawiać.

### Specyfikacja

[DOM Level 2 HTML: URL](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-46183437)

{{ languages( { "en": "en/DOM/document.URL", "es": "es/DOM/document.URL", "ja": "ja/DOM/document.URL" } ) }}
