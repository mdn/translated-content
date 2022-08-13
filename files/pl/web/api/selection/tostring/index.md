---
title: toString
slug: Web/API/Selection/toString
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Selection/toString
---
{{ ApiRef() }}

### Podsumowanie

Zwraca ciąg znakowy, który jest obecnie reprezentowany przez obiekt selekcji, tj. aktualnie zaznaczony tekst.

### Składnia

    string =sel.toString()

- `string` jest ciągiem znakowym reprezentującym selekcję.

### Własności

Brak.

### Opis

Ta metoda zwraca obecnie zaznaczony tekst.

W [JavaScript](pl/JavaScript), ta metoda jest wywoływana automatycznie, kiedy funkcja, do której przesyłany jest obiekt, oczekuje ciągu znakowego:

    alert(window.getSelection()) // Co jest wywoływane
    alert(window.getSelection().toString())  // Co jest w wywoływane w rzeczywistości

### Zobacz również

- [Object.toString](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Object/toString)





{{ languages( { "en": "en/DOM/Selection/toString", "es": "es/DOM/Selection/toString", "fr": "fr/DOM/Selection/toString", "it": "it/DOM/Selection/toString" } ) }}
