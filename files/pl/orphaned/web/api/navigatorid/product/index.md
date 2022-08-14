---
title: window.navigator.product
slug: orphaned/Web/API/NavigatorID/product
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorID/product
original_slug: Web/API/NavigatorID/product
---
{{ ApiRef() }}

### Podsumowanie

Własność ta zwraca nazwę produktu bieżącej przeglądarki.

### Składnia

    productName = window.navigator.product

### Parametry

- `productName` jest łańcuchem znaków.

### Przykład

    <script>
    function prod() {
      dt = document.getElementById("d");
      dt.innerHTML = window.navigator.product;
    }
    </script>
    <button onclick="prod();">produkt</button>
    <div id="d"> </div>
    // zwraca "Gecko"

### Uwagi

Produkt jest tą częścią pełnego łańcucha identyfikatora przeglądarki, która następuje bezpośrednio po platformie. Na przykład, w identyfikatorze przeglądarki dla Netscape 6.1 produktem jest "Gecko", a pełny ciąg identyfikatora przeglądarki jest następujący: Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape6/6.1

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.navigator.product", "ja": "ja/DOM/window\.navigator.product" } ) }}
