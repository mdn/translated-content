---
title: element.namespaceURI
slug: Web/API/Element/namespaceURI
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/namespaceURI
original_slug: Web/API/Node/namespaceURI
---
{{ ApiRef() }}

### Podsumowanie

Zwraca URI przestrzeni nazw tego węzła lub NULL, jeśli jej nie określono.

### Składnia

    przestrzeńNazw = element.namespaceURI

### Parametry

- `przestrzeńNazw` to ciąg znaków reprezentujący URI przestrzeni nazw bieżącego węzła.

### Przykład

W poniższym wycinku kodu sprawdzane są `localName` i `namespaceURI` węzła. Jeśli `namespaceURI` jest zgodny ze zmienną zawierającą przestrzeń nazw dla XUL, węzeł jest uznawany za widget \<browser /> w języku XUL.

    if (node.localName == "browser"
        && node.namespaceURI == kXULNSURI) {
    // xul browser
    this.viewee = node.webNavigation.document;
    //...
    }

### Uwagi

Nie jest to wyznaczona wartość, będąca rezultatem przeszukiwania w oparciu o deklaracje przestrzeni nazw w zakresie, w jakim znajduje się element. Jest to jedynie URI takiej przestrzeni nazw, jaką nadano w momencie tworzenia elementu.

Dla węzłow typów innych niż `ELEMENT_NODE` i `ATTRIBUTE_NODE` oraz węzłów utworzonych metodami DOM Level 1, jak [document.createElement](pl/DOM/document.createElement), wartość tej właściwości to zawsze NULL.

Zgodnie ze specyfikacją [Namespaces in XML](http://www.w3.org/TR/REC-xml-names) atrybut nie dziedziczy przestrzeni nazw po elemencie, do którego jest przypisany. Jeśli atrybut nie ma bezpośrednio nadanej przestrzeni nazw, po prostu nie należy do żadnej przestrzeni.

### Specyfikacja

[namespaceURI](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-NodeNSname)

[Przestrzenie nazw XML](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#Namespaces-Considerations)



{{ languages( { "en": "en/DOM/element.namespaceURI", "fr": "fr/DOM/element.namespaceURI", "ja": "ja/DOM/element.namespaceURI" } ) }}
