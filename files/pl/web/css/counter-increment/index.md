---
title: counter-increment
slug: Web/CSS/counter-increment
tags:
  - CSS
  - CSS List
  - CSS Property
translation_of: Web/CSS/counter-increment
---
{{ CSSRef() }}

## Podsumowanie

`counter-increment` zwiększa wartość [liczników CSS](pl/Liczniki_CSS) o podaną wielkość.

- {{ Xref_cssinitial() }}:
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

## Składnia

    counter-increment: [<identyfikator> <liczba całkowita>?]+ | inherit | none

## Wartości

- identyfikator
  - : Nazwa licznika, którego wartość jest zwiększana.
- integer
  - : Wartość, która ma być dodana do licznika. Domyślnie 1.

Można zwiększyć wartość dowolnej liczby liczników oddzielając wszystkie spacją.

## Powiązane własności

- [counter-reset](pl/CSS/counter-reset) ustawia wartość danego [licznika CSS](pl/Liczniki_CSS) na podaną

## Przykłady

    h1 {
      counter-increment: rozdzial sekcja 2 strona; /* Zwiększa wartość liczników
                                                          rozdział i strona o 1,
                                                oraz wartość licznika sekcja o 2 */
    }

Powyższy zapis jest równoważny z:

    h1 {
      counter-increment: rozdzial 1 sekcja 2 strona 1;
    }

## Zobacz także

- [Liczniki CSS](pl/Liczniki_CSS)
