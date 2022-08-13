---
title: document.createDocumentFragment
slug: Web/API/Document/createDocumentFragment
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/createDocumentFragment
---
{{ ApiRef() }}

### Podsumowanie

Tworzy pusty fragment dokumentu.

### Składnia

    var fragmentDokumentu = document.createDocumentFragment();

`fragmentDokumentu` jest odniesieniem do pustego obiektu `DocumentFragment`.

### Przykład

    var frag = document.createDocumentFragment();
    frag.appendChild(document.createTextNode('Ipsum Lorem'));
    document.body.appendChild(frag);

### Uwagi

[`DocumentFragment`](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-B63ED1A3) jest minimalnym obiektem dokumentu, który nie posiada rodzica. Obsługuje on następujące metody DOM 2: [`appendChild`](pl/DOM/element.appendChild), [`cloneNode`](pl/DOM/element.cloneNode), [`hasAttributes`](pl/DOM/element.hasAttributes), [`hasChildNodes`](pl/DOM/element.hasChildNodes), [`insertBefore`](pl/DOM/element.insertBefore), [`normalize`](pl/DOM/element.normalize), [`removeChild`](pl/DOM/element.removeChild), [`replaceChild`](pl/DOM/element.replaceChild).

Obsługuje on również następujące własności DOM 2: [`attributes`](pl/DOM/element.attributes), [`childNodes`](pl/DOM/element.childNodes), [`firstChild`](pl/DOM/element.firstChild), [`lastChild`](pl/DOM/element.lastChild), [`localName`](pl/DOM/element.localName), [`namespaceURI`](pl/DOM/element.namespaceURI), [`nextSibling`](pl/DOM/element.nextSibling), [`nodeName`](pl/DOM/element.nodeName), [`nodeType`](pl/DOM/element.nodeType), [`nodeValue`](pl/DOM/element.nodeValue), [`ownerDocument`](pl/DOM/element.ownerDocument), [`parentNode`](pl/DOM/element.parentNode), [`prefix`](pl/DOM/element.prefix), [`previousSibling`](pl/DOM/element.previousSibling), [`textContent`](pl/DOM/element.textContent).

Różne inne metody potrafią pobrać fragment dokumentu jako argument (na przykład metody interfejsu [`Node`](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247) takie jak [`appendChild`](pl/DOM/element.appendChild) i [`insertBefore`](pl/DOM/element.insertBefore)), w przypadku których dodawane lub wstawiane są dzieci fragmentu, nie zaś same fragmenty.

### Specyfikacja

[createDocumentFragment](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-35CB04B5)

{{ languages( { "en": "en/DOM/document.createDocumentFragment" } ) }}
