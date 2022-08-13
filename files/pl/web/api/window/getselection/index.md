---
title: window.getSelection
slug: Web/API/Window/getSelection
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/getSelection
---
{{ ApiRef() }}

### Podsumowanie

Zwraca obiekt zaznaczenia reprezentujący zakres tekstu zaznaczonego przez użytkownika. Zauważ, że nie ma to żadnego powiązania z obiektem listy selekcji DOM!

### Składnia

    selection =window.getSelection();

### Parametry

- `selection` jest obiektem [selekcji](pl/DOM/Selection).

### Przykład

    function foo() {
       var selObj = window.getSelection();
       alert(selObj);
       var selRange = selObj.getRangeAt(0);
       // teraz możemy operować na zakresie
    }

### Uwagi

W JavaScript, kiedy przesyłany jest obiekt selekcji do funkcji, zamiast jej, przesyłana jest jej reprezentacja w postaci ciągu znaków (tj. zaznaczony tekst). Może to złudnie przypominać, że obiekt selekcji wygląda jak ciąg znaków (obiekt `string`), kiedy tak naprawdę ma swoje własne właściwości i metody. Dokładniej, zwracana jest wartość wywołania metody [`toString()`](pl/DOM/Selection/toString). I'm treading carefully with the word "convert" here because it could be misinterpreted as a permanent convert - Maian

### Specyfikacja

DOM poziomu 0. Nie jest częścią specyfikacji.

### Zobacz również

`Selection, Range`







{{ languages( { "en": "en/DOM/window\.getSelection", "es": "es/DOM/window\.getSelection", "fr": "fr/DOM/window\.getSelection", "it": "it/DOM/window\.getSelection", "ja": "ja/DOM/window\.getSelection" } ) }}
