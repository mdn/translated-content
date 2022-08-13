---
title: NavigatorPlugins.mimeTypes
slug: orphaned/Web/API/NavigatorPlugins/mimeTypes
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorPlugins/mimeTypes
original_slug: Web/API/NavigatorPlugins/mimeTypes
---
{{ ApiRef() }}

### Podsumowanie

Zwraca obiekt [`MimeTypeArray`](http://www.xulplanet.com/references/objref/MimeTypeArray.html), który zawiera listę obiektów [`MimeType`](http://www.xulplanet.com/references/objref/MimeType.html) reprezentujących typy MIME rozpoznawane przez przeglądarkę.

### Składnia

    mimeTypes = navigator.mimeTypes;

`mimeTypes` jest obiektem [`MimeTypeArray`](http://www.xulplanet.com/references/objref/MimeTypeArray.html), który posiada zarówno własność `length` jak i metody `item(index)` oraz `namedItem(name)`.

### Przykład

      alert(window.navigator.mimeTypes.item(0).description); // wyświetli ostrzeżenie "Mozilla Default Plug-in"

### Uwagi

Wartością własności `type` w zerowym elemencie (obiekt `MimeType` "Mozilla Default Plug-in") jest `*` zamiast typowego formatu MIME jak np. `"image/x-macpaint"`

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.navigator.mimeTypes", "ja": "ja/DOM/window\.navigator.mimeTypes" } ) }}
