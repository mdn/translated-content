---
title: window.frames
slug: Web/API/Window/frames
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/frames
---
{{ ApiRef() }}

### Podsumowanie

Zwraca obiekt tablico-podobny, zawierający listę ramek podrzędnych bieżącego okna.

### Składnia

    frameList = window.frames;

- `frameList` jest listą obiektów ramki.

### Przykład

    var frames = window.frames; // lub // var frames = window.parent.frames;
    for (var i = 0; i < frames.length; i++) {
      // zrób coś z każdą ramką podrzędną jako frames[i]
      frames[i].document.body.style.background = "red";
    }

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.frames", "ja": "ja/DOM/window\.frames" } ) }}
