---
title: counter-reset
slug: Web/CSS/counter-reset
tags:
  - CSS
  - CSS List
  - CSS Property
  - Reference
translation_of: Web/CSS/counter-reset
---
{{ CSSRef() }}

## Podsumowanie

`counter-reset` ustawia wartość [liczników CSS](pl/Liczniki_CSS).

- {{ Xref_cssinitial() }}:
- Stosowana do: wszystkich elementów
- {{ Xref_cssinherited() }}: nie
- Procenty: niedostępne
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

## Składnia

    counter-reset: [ <identyfikator> <liczba całkowita>? ]+ | inherit | none

### Wartości

- identyfikator
  - : Nazwa licznika, którego wartość jest ustawiana.
- liczba całkowita
  - : Wartość, którą ma przyjąć dany licznik przy każdym pojawieniu się danego elementu. Domyślnie 0.

Można ustawić dowolną liczbę liczników oddzielając wszystkie spacją.

## Powiązane własności

- [counter-increment](pl/CSS/counter-increment) zwiększa wartość danego [licznika CSS](pl/Liczniki_CSS) o podaną wielkość.

## Przykłady

    h1 {
      counter-reset: rozdzial sekcja 1 strona; /* Ustawia wartość liczników
                                                    rozdział i strona na 0,
                                          oraz wartość licznika sekcja na 1 */
    }

Powyższy zapis jest równoważny z:

    h1 {
      counter-reset: rozdzial 0 sekcja 1 strona 0;
    }

## Zobacz także

[Liczniki CSS](pl/Liczniki_CSS), {{ Cssxref("counter-increment") }}
