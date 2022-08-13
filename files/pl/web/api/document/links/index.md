---
title: document.links
slug: Web/API/Document/links
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/links
---
{{ ApiRef() }}

### Podsumowanie

Własność **links** zwraca zestaw wszystkich elementów AREA i A z ustawioną wartością atrybutu `href`.

### Składnia

    listaWęzłów = document.links

### Przykład

    var links = document.links;
    for(var i = 0; i < links.length; i++) {
      var linkHref = document.createTextNode(links[i].href);
      var lineBreak = document.createElement("br");
      document.body.appendChild(linkHref);
      document.body.appendChild(lineBreak);
    }

### Specyfikacja

[links](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-7068919)



{{ languages( { "en": "en/DOM/document.links", "it": "it/DOM/document.links", "ja": "ja/DOM/document.links" } ) }}
