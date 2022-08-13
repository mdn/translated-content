---
title: element.scrollWidth
slug: Web/API/Element/scrollWidth
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/scrollWidth
---
{{ ApiRef() }}

### Podsumowanie

**scrollWidth** jest własnością tylko do odczytu, która zwraca szerokość zawartości elementu w pikselach lub szerokość samego elementu - w zależności od tego, która z tych wartości jest większa.

### Składnia i wartości

    var xScrollWidth = element.scrollWidth;

_xScrollWidth_ jest szerokością zawartości elementu _element_ w pikselach.

### Przykład

    <div id="aDiv"
         style="width: 100px; height: 200px; overflow: auto;"
    >-FooBar-FooBar-FooBar</div>
    <br>
    <input type="button" value="Show scrollWidth"
           onclick="alert(document.getElementById('aDiv').scrollWidth);">

### Specyfikacja

Nie ma specyfikacji W3C dla **scrollWidth**.

### Dokumentacja

[MSDN scrollWidth reference](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/scrollwidth.asp)



{{ languages( { "en": "en/DOM/element.scrollWidth", "fr": "fr/DOM/element.scrollWidth" } ) }}
