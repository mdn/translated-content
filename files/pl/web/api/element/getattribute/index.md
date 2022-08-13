---
title: element.getAttribute
slug: Web/API/Element/getAttribute
translation_of: Web/API/Element/getAttribute
---
{{ ApiRef() }}

### Podsumowanie

getAttribute zwraca wartość atrybutu o podanej nazwie.

### Składnia

    atrybut = element.getAttribute(nazwaAtrybutu)

- `atrybut` to ciąg zawierający wartość atrybutu o nazwie `nazwaAtrybutu`
- `nazwaAtrybutu` jest nazwą atrybutu, który chcesz pobrać

### Przykład

    var div1 = document.getElementById("div1");
    var a = div1.getAttribute("align");
    alert(a); // pokaże wartość atrybutu "align" dla elementu o id="div1"

### Uwagi

W zasadzie wszystkie przeglądarki (Firefox, Internet Explorer, nowsze wersje Opery, Safari, Konqueror oraz iCab) zwracają `null`, jeśli bieżący element nie posiada atrybutu o podanej nazwie. Specyfikacja DOM mówi, że w takiej sytuacji powinien być zwracany pusty ciąg znaków i niektórze implementacje DOM tak się zachowują. Zatem jeśli jest możliwe, że element nie posiada żądanego atrybutu, powinieneś użyć metody [hasAttribute](/DOM/element.hasAttribute) aby sprawdzić istnienie atrybutu zanim wywołasz `getAttribute`.

`nazwaAtrybutu` jest zazwyczaj zależna od wielkości liter, jednak nie w przypadku elementów HTML - wtedy wielkość liter nie ma znaczenia.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: getAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (wprowadzono w [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))



{{ languages( { "en": "en/DOM/element.getAttribute", "fr": "fr/DOM/element.getAttribute", "ja": "ja/DOM/element.getAttribute" } ) }}
