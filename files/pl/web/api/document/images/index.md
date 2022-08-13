---
title: document.images
slug: Web/API/Document/images
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/images
---
{{ ApiRef() }}

### Podsumowanie

`document.images` zwraca listę obrazków w dokumencie.

### Składnia

    listaWęzłów = document.images

### Przykład

    var ilist = document.images;
    for(var i = 0; i < ilist.length; i++) {
        if(ilist[i] == "banner.gif") {
             // found the banner
        }
    }



### Uwagi

`document.images.length` – własność, zwraca liczbę obrazków na stronie.

`document.images` jest częścią DOM HTML i działa tylko dla dokumentów HTML.

### Specyfikacja

[DOM Level 2 HTML: HTMLDocument.images](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-90379117)

{{ languages( { "ru": "ru/DOM/document.images", "en": "en/DOM/document.images", "fr": "fr/DOM/document.images" } ) }}
