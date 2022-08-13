---
title: clear
slug: Web/CSS/clear
tags:
  - CSS
  - CSS:Dokumentacje
  - Dokumentacje
  - Wszystkie_kategorie
translation_of: Web/CSS/clear
---
{{ CSSRef() }}

### Podsumowanie

Właściwość clear określa, czy dany element pojawi się obok [pływających](pl/CSS/float) elementów, które go poprzedzają, czy też ma zostać przesunięty poniżej tychże.

- {{ Xref_cssinitial() }}: {{ Cssxref("none") }}
- Stosowana do: elementy blokowe (włączając pływające)
- {{ Xref_cssinherited() }}: nie
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Składnia

    clear: none | left | right | both | inherit

### Wartości

- **none** : Element*nie* jest przesuwany poniżej elementów pływających.
- **left** : Element jest przesuwany poniżej elementów pływających po lewej.
- **right** : Element jest przesuwany poniżej elementów pływających po prawej.
- **both** : Element jest przesuwany poniżej elementów pływających po obu stronach.

### Przykłady

[Zobacz przykład](/samples/cssref/clear.html)

    h1 { clear: none }
    h2 { clear: right }

### Notatki

Własność `clear` stosuje się zarówno do pływających, jak i niepływających elementów.

Kiedy odnosi się do niepływających elementów blokowych, przesuwa ona krawędź obramowania elementu w dół, dopóki nie znajdzie się pod krawędzią marginesu wszystkich danych elementów pływających. To przemieszczenie (kiedy ma miejsce) nie powoduje [załamania marginesu](pl/CSS/Za%c5%82amanie_marginesu).

Kiedy odnosi się do elementów pływających, przesuwa [krawędź marginesu](pl/CSS/Kraw%c4%99dzie_elementu_blokowego) tego elementu poniżej [krawędzi marginesu](pl/CSS/Kraw%c4%99dzie_elementu_blokowego) wszystkich danych elementów pływających. Wpływa to na pozycję późniejszych elementów pływających, ponieważ te nie mogą być pozycjonowane wyżej niż poprzednie.

Elementy pływające, na które wpływa własność `clear` są wcześniejszymi elementami pływającymi w tym samym [bloku formatowania kontekstu](pl/CSS/Blok_formatowania_kontekstu).

### Specyfikacje

- [CSS 1](http://www.w3.org/TR/REC-CSS1#clear)
- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#propdef-clear)

### Zgodność z przeglądarką

| Przeglądarka      | Najniższa wersja |
| ----------------- | ---------------- |
| Internet Explorer | 4                |
| Firefox           | 1                |
| Netscape          | 4                |
| Mozilla           | 1                |



### Zobacz także

{{ Cssxref("float") }}



{{ languages( { "en": "en/CSS/clear", "fr": "fr/CSS/clear" } ) }}
