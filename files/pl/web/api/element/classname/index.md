---
title: element.className
slug: Web/API/Element/className
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/className
---
{{APIRef}} Podsumowanie

**className** pobiera/ustawia wartość atrybutu `class` bieżącego elementu.

## Składnia i wartości

    var nazwaKlasy = referencjaDoWęzłaElementu.className;
    referencjaDoWęzłaElementu.className = nazwaKlasy;

- _nazwaKlasy_ to łańcuch znaków reprezentujący klasę lub rozdzieloną spacjami listę klas bieżącego elementu.

## Przykład

```js
var elementNodeReference = document.getElementById("div1");

if (elementNodeReference.className == "fixed") {
  // pomiń elementy określonej klasy
  goNextElement();
};
```

## Uwagi

Dla tej właściwości użyto nazwy `className`, a nie `class`, ponieważ "class" jest w wielu językach korzystających z DOM słowem kluczowym.

## Specyfikacja

- [DOM Level 2 HTML: className](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95362176)
