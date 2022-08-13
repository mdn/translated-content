---
title: element.getAttributeNS
slug: Web/API/Element/getAttributeNS
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Element/getAttributeNS
---
{{ ApiRef() }}

### Podsumowanie

`getAttributeNS` zwraca ciąg z wartością atrybutu o podanej nazwie i przestrzeni nazw. Jeśli nie ma atrybutu o takiego atrybutu, zwrócone zostanie `null` bądź `""` (pust ciąg) - zob. [Uwagi](#uwagi).

### Składnia

    wartośćAtr =element.getAttributeNS(przestrzeńNazw,nazwa)

### Parametry

- `wartośćAtr`to ciąg z wartością podanego atrybutu
- `przestrzeńNazw`to przestrzeń nazw atrybutu
- `nazwa`to nazwa atrybutu.

### Przykład

    var div1 = document.getElementById("div1");
    var a = div1.getAttributeNS("www.mozilla.org/ns/specialspace/",
                                "special-align");
    alert(a); // wyświetli zawartość special-align elementu div

### Uwagi

`getAttributeNS` różni się od [getAttribute](pl/DOM/element.getAttribute) tym, że pozwala Ci określić do jakiej przestrzeni nazw należy atrybut, tak jak w powyższym przykładzie, gdzie atrybut należał do fikcyjnej przestrzeni "specialspace".

W zasadzie wszystkie przeglądarki (Firefox, Internet Explorer, nowsze wersje Opery, Safari, Konqueror oraz iCab) zwracają `null`, jeśli bieżący element nie posiada atrybutu o podanej nazwie. Specyfikacja DOM mówi, że w takiej sytuacji powinien być zwracany pusty ciąg znaków i niektórze implementacje DOM tak się zachowują. Zatem jeśli jest możliwe, że element nie posiada żądanego atrybutu, powinieneś użyć metody [hasAttributeNS](pl/DOM/element.hasAttributeNS) aby sprawdzić istnienie atrybutu zanim wywołasz `getAttributeNS`.

{{ DOMAttributeMethods() }}

### Specyfikacja

[DOM Level 2 Core: getAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)





{{ languages( { "en": "en/DOM/element.getAttributeNS", "fr": "fr/DOM/element.getAttributeNS", "ja": "ja/DOM/element.getAttributeNS" } ) }}
