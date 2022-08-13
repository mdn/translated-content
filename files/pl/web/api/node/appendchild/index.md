---
title: element.appendChild
slug: Web/API/Node/appendChild
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/appendChild
original_slug: Web/API/Element/appendChild
---
{{ ApiRef() }}

### Podsumowanie

Metoda `Node.appendChild()` wstawia określony węzeł na koniec listy dzieci określonego rodzica. Jeśli węzeł ma już rodzica, jest on najpierw od niego oddzielany.

### Składnia

    var dziecko = element.appendChild(dziecko)

- `element` jest rodzicem elementu.
- `dziecko` jest węzłem.

### Opis

Metoda `appendChild` zwraca referencję do dodanego węzła.

### Przykład

    // Tworzy nowy element paragrafu
    var p = document.createElement("p");

    // Wstawia go na koniec ciała dokumentu
    document.body.appendChild(p);



### Uwagi

`appendChild` jest jedną z fundamentalnych metod w programowaniu z użyciem DOM. Metoda ta wstawia nowy węzeł do struktury DOM dokumentu HTML. Jest to druga część procesu _stwórz-i-wstaw_, podstawowego przy programowym budowaniu strony. Inne związane z tym metody to [insertBefore](/pl/DOM/element.insertBefore "pl/DOM/element.insertBefore"), [replaceChild](/pl/DOM/element.replaceChild "pl/DOM/element.replaceChild") i [removeChild](/pl/DOM/element.removeChild "pl/DOM/element.removeChild").

Jeśli `dziecko` jest referencją do węzła, który istnieje już w dokumencie, `appendChild` przenosi go z dotychczasowej pozycji w nowe miejsce (tj. nie ma potrzeby odzielać węzeł od jego rodzica przed wstawieniem go do innego węzła).

### Specyfikacja

[DOM Level 2 Core: appendChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-184E7107)

{{ languages( { "en": "en/DOM/element.appendChild", "fr": "fr/DOM/element.appendChild", "ja": "ja/DOM/element.appendChild" } ) }}
