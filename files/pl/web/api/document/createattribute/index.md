---
title: document.createAttribute
slug: Web/API/Document/createAttribute
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/Document/createAttribute
---
{{ ApiRef() }}

### Podsumowanie

**createAttribute** tworzy nowy atrybut w bieżącym elemencie.

### Składnia

    atrybut = element.createAttribute(nazwa)

### Parametry

- `atrybut` jest węzłem atrybutu
- `nazwa` jest ciągiem znaków zawierającym nazwę atrybutu

### Przykład

    d = document.getElementById("div1");
    p = d.createAttribute("proportion");
    p.value = "100";

### Uwagi

Zwracany jest węzeł typu `Attribute`. Kiedy masz już ten węzeł, tak jak w powyzszym przykładzie, możesz ustawić jego wartość za pomocą własności `value`. DOM nie wymusza typu atrybutów, jakie mogą zostać dodane w ten sposób do konkretnych elementów.

### Specyfikacja

[createAttribute](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1084891198)

{{ languages( { "en": "en/DOM/document.createAttribute", "fr": "fr/DOM/document.createAttribute" } ) }}
