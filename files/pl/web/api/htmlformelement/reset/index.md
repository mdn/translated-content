---
title: HTMLFormElement.reset
slug: Web/API/HTMLFormElement/reset
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/HTMLFormElement/reset
---
{{ APIRef }}

### Podsumowanie

`reset` przywraca formularz do jego stanu początkowego.

### Składnia

    HTMLFormElement.reset()

### Przykład

    document.forms["myform"].reset();

### Uwagi

Metoda ta robi to samo, co kliknięcie przycisku Wyczyść w formularzu.

Jeśli kontrolka formularza (jak np. przycisk Wyczyść) posiada nazwę lub id to przycisk _Wyczyść_ będzie krył czyszczenie formularza.

### Specyfikacja

[DOM Level 2 HTML: reset](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-76767677)

{{ languages( { "en": "en/DOM/form.reset" } ) }}
