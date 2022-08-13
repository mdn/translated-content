---
title: document.body
slug: Web/API/Document/body
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/body
---
{{ ApiRef() }}

### Podsumowanie

**body** zwraca węzeł `<body>` lub `<frameset>` z bieżącego dokumentu.

### Składnia

    objRef = document.body
    document.body =objRef

### Przykład

    // HTML: <body id="oldBodyElement"></body>
    alert(document.body.id); // "oldBodyElement"
    var aNewBodyElement = document.createElement("body");
    aNewBodyElement.id = "newBodyElement";
    document.body = aNewBodyElement;
    alert(document.body.id); // "newBodyElement"

### Uwagi

`document.body` to element zawierający treść dokumentu. W dokumentach z elementem `<body>` własność zwraca tenże element, w dokumentach z definicją ramek zwracany jest najbardziej zewnętrzny element `<frameset>`.

Mimo, że `body` można samemu ustawić, jego zmiana spowoduje skuteczne usunięcie wszystkich potomków istniejącego elementu `<body>`.

### Specyfikacja

[body](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-56360201)

{{ languages( { "en": "en/DOM/document.body", "es": "es/DOM/document.body" } ) }}
