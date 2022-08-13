---
title: document.anchors
slug: Web/API/Document/anchors
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/anchors
---
{{ ApiRef() }}

### Podsumowanie

`anchors` zwraca listę wszystkich kotwic w dokumencie.

### Składnia

    listaWęzłów = document.anchors

### Przykład

    if ( document.anchors.length >= 5 ) {
        dump("dump found too many anchors");
        window.location = "http://www.google.com";
    }

### Uwagi

Ze względu na zgodność wsteczną, zwracany zestaw kotwic zawiera tylko kotwice posiadające atrybut `name`, bez tych które posiadają jedynie atrybut `id`.

### Specyfikacja

[DOM Level 2 HTML: anchors](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7577272)

{{ languages( { "en": "en/DOM/document.anchors", "es": "es/DOM/document.anchors", "ja": "ja/DOM/document.anchors" } ) }}
