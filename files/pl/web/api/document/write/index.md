---
title: document.write
slug: Web/API/Document/write
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/write
---
{{ ApiRef() }}

### Podsumowanie

Zapisuje ciąg tekstu w strumieniu dokumentu otwartym przez [document.open](pl/DOM/document.open).

### Składnia

    document.write(tekst)

### Parametry

- `tekst` jest ciągiem znaków preznaczonym do zapisania w dokumencie.

### Przykład

    document.open();
    document.write("<h1>witam!</h1>");
    document.close();

### Uwagi

Zapis do dokumentu, który już się załadował, bez wywoływania `document.open` spowoduje automatyczne przeprowadzenie `document.open`. Zaleca się wywołanie [document.close](pl/DOM/document.close) po skończeniu zapisu, aby poinformować przeglądarkę, by zakończyła ładowanie strony. Tekst, który zapisujesz, jest parsowany i trafia do modelu struktury dokumentu. W poniższym przykładzie element H1 staje się węzłem. Jeżeli wywołanie `document.write()` zostało zagnieżdżone bezpośrednio w kodzie HTML, nie spowoduje ono uruchomienia `document.open`. Np.:

     <div>
      <script type="text/javascript">
        document.write("<h1>Main title</h1>")
      </script>
     </div>

### Specyfikacja

[write](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-75233634)



{{ languages( { "en": "en/DOM/document.write", "fr": "fr/DOM/document.write", "ja": "ja/DOM/document.write" } ) }}
