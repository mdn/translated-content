---
title: stylesheet.href
slug: Web/API/Stylesheet/href
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/StyleSheet/href
---
{{ ApiRef() }}

### Podsumowanie

Zwraca położenie zewnetrznego arkusza stylów.

### Składnia

    uri = stylesheet.href

### Parametry

- `uri` jest łańcuchem zawierającym URI arkusza stylów.

### Przykład

     // W lokalnej maszynie:
     <html>
      <head>
       <link rel="StyleSheet" href="example.css" type="text/css" />
       <script>
        function sref() {
         alert(document.styleSheets[0].href);
        }
       </script>
      </head>
      <body>
       <div class="thunder">Thunder</div>
       <button onclick="sref()">ss</button>
      </body>
     </html>
    // Zwraca "file:////C:/Windows/Desktop/example.css

### Notatki

Jeżeli arkusz stylów jest zewnętrznym arkuszem stylów, wartością tego atrybutu jest jego lokalizacja. Dla wewnętrznego arkusza stylów, wartość tego atrybutu wynosi null.

### Specyfikacja

[href](http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
