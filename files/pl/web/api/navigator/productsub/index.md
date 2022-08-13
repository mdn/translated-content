---
title: Navigator.productSub
slug: Web/API/Navigator/productSub
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Navigator/productSub
---
{{ ApiRef() }}

### Podsumowanie

**productSub** zwraca numer kompilacji bieżącej przeglądarki.

### Składnia

    prodSub = window.navigator.productSub

### Parameters

- `prodSub` jest łańcuchem znaków.

### Przykład

    <script>
    function prodsub() {
      dt = document.getElementById("d").childNodes[0];
      dt.data = window.navigator.productSub;
    }
    </script>
    <button onclick="prodsub();">productSub</button>
    // zwraca: 20010725

### Uwagi

W IE własność ta zwraca wartość nieokreśloną.

W Apple Safari własność zawsze zwraca `20030107`.

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.navigator.productSub", "ja": "ja/DOM/window\.navigator.productSub" } ) }}
