---
title: element.childNodes
slug: Web/API/Node/childNodes
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/childNodes
original_slug: Web/API/Element/childNodes
---
{{ ApiRef() }}

### Podsumowanie

**childNodes** zwraca kolekcję węzłów-dzieci elementu.

### Składnia i wartości

    var listaWęzłów = referencjaDoWęzłaElementu.childNodes;

_listaWęzłów_ to uporządkowana kolekcja obiektów węzłów, będącymi dziećmi bieżącego elementu. Jeśli element nie ma dzieci, _listaWęzłów_ jest pusta.

_listaWęzłów_ to zmienna przechowująca listę węzłów. Lista taka ma typ [NodeList](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177). Właściwość `childNodes` jest tylko do odczytu.

### Przykład

    // parg to referencja do obiektu elementu <p>
    if (parg.hasChildNodes())
    // sprawdzamy czy obiekt nie jest pusty - czy ma dzieci
     {
       var children = parg.childNodes;
       for (var i = 0; i < children.length; i++)
       {
       // zrob cos z kazdym dzieckiem jako children[i]
       // uwaga: lista "żyje", dodawanie bądź usuwanie dzieci ją zmieni
       };
     };

<!---->

    // sposób na usunięcie wszystkich dzieci węzła
    // box to referencja do obiektu elementu, który ma dzieci
    while (box.firstChild)
     {
        //lista jest "żywa", więc będzie przeindeksowana po każdym wywołaniu
        box.removeChild(box.firstChild);
     };

### Uwagi

Elementy kolekcji węzłów są obiektami, a nie łańcuchami. By pobrać dane z tych obiektów, musisz użyć ich atrybutów (np. `referencjaDoWęzłaElementu.childNodes{{ mediawiki.external(1) }}.nodeName` by pobrać nazwę).

Obiekt `document` ma dwoje dzieci: deklarację DOCTYPE i element `HTML`.

### Specyfikacja

- [W3C DOM 2 Core: childNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1451460987)
- [W3C DOM 3 Core: childNodes](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987)
- [W3C DOM 3 NodeList interface](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177)

{{ languages( { "en": "en/DOM/element.childNodes", "fr": "fr/DOM/element.childNodes", "ja": "ja/DOM/element.childNodes", "zh-cn": "cn/DOM/element.childNodes" } ) }}
