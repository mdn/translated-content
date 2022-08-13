---
title: element.textContent
slug: Web/API/Node/textContent
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/textContent
original_slug: Web/API/Element/textContent
---
{{ ApiRef() }}

### Podsumowanie

Pobiera lub ustawia zawartość tekstową węzła i jego potomków.

### Składnia

    tekst = element.textContent
    element.textContent = "przykładowy tekst"

### Przykład

    // Dany jest taki fragment w HTML:
    //   <div id="divA">To jest <span>jakiś</span> tekst</div>

    // Pobierz zawartość tekstową:
    var tekst = document.getElementById("divA").textContent;
    // |tekst| zawiera: "To jest jakiś tekst".

    // Ustaw zawartość:
    document.getElementById("divA").textContent = "To jest jakiś tekst";
    // teraz HTML elementu divA to <div id="divA">To jest jakiś tekst</div>

### Uwagi

- `textContent` zwraca `null` jeśli węzeł to dokument, węzeł `DocumentType` lub `Notation`
- Jeśli węzeł to sekcja CDATA, komentarz, instrukcja przetwarzania lub węzeł tekstowy, `textContent` zwraca tekst wewnątrz tego węzła ([nodeValue](pl/DOM/element.nodeValue)).
- Dla innych typów węzłow `textContent` zwraca połączenie wartości `textContent` każdego dziecka, wyłączając węzły komentarzy i instrukcji przetwarzania. Jeśli element nie ma dzieci, jest to pusty ciąg.
- Ustawianie tej właściwości dla węzła usuwa wszystkie jego dzieci i zastępuje je jednym węzłem tekstowym o zadanej wartości.

### Specyfikacja

[textContent](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-textContent)



{{ languages( { "en": "en/DOM/element.textContent", "fr": "fr/DOM/element.textContent", "it": "it/DOM/element.textContent" } ) }}
