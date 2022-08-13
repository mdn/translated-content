---
title: event.isChar
slug: Web/API/UIEvent/isChar
tags:
  - DOM
  - Wszystkie_kategorie
translation_of: Web/API/UIEvent/isChar
original_slug: Web/API/Event/isChar
---
{{ ApiRef() }}

### Podsumowanie

Zwraca wartość logiczną oznaczającą, czy w zdarzeniu pojawił się klawisz znaku czy nie.

### Składnia

    bool = event.isChar

### Example

     if e.isChar
       echoInput(e.type);
     }

### Notes

Niektórze kombinacje klawiszy mogą wywyoływać zdarzenia bez wystąpienia znaku (np. ctrl + alt). Wtedy **isChar** zwraca fałsz. **isChar** może być użyty, kiedy funkcje obsługujące zdarzenie potrzebują np. wyświetlić wprowadzony znak na ekranie.

### Specyfikacja

Nie należy do specyfikacji.

{{ languages( { "en": "en/DOM/event.isChar" } ) }}
