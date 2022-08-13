---
title: element.tagName
slug: Web/API/Element/tagName
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/tagName
---
{{ ApiRef() }}

### Podsumowanie

**tagName** zwraca nazwę elementu.

### Składnia

    nazwaElementu = element.tagName

- `nazwaElementu` to ciąg zawierający nazwę bieżącego elementu.

### Przykład

Dane są takie znaczniki:

    <span id="born">Kiedy przyszedłem na świat...</span>

i taki skrypt:

    var span = document.getElementById("born");
    alert(span.tagName);

W XHTML-u (lub innym formacie XML) wyświetlone zostanie "span", a w HTML - "SPAN".

### Uwagi

W XML-u `tagName` zachowuje wielkość liter. W HTML-u `tagName` zwraca nazwę elementu w formie kanonicznej - wielkimi literami. Wartość `tagName` jest taka sama jak wartość [nodeName](pl/DOM/element.nodeName).

### Specyfikacja

[tagName](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815)







{{ languages( { "en": "en/DOM/element.tagName", "es": "es/DOM/element.tagName", "fr": "fr/DOM/element.tagName", "ja": "ja/DOM/element.tagName" } ) }}
