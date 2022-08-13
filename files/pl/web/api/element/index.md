---
title: Element
slug: Web/API/Element
tags:
  - DOM
  - Gecko
translation_of: Web/API/Element
---
{{ ApiRef}}

Ten rozdział dostarcza zwięzłych informacji dla wszystkich metod, własności i zdarzeń dostępnych dla większości elementów HTML i XML w Gecko DOM.

Różne specyfikacje W3C mają zastosowanie do elementów:

- [DOM Core Specification](http://www.w3.org/TR/DOM-Level-2-Core/)—opisuje główne interfejsy współdzielone przez większość obiektów DOM w dokumentach HTML i XML
- [DOM HTML Specification](http://www.w3.org/TR/DOM-Level-2-HTML/)—opisuje interfejsy dla obiektów w dokumentach HTML i XHTML tworzonych na głównej specyfikacji
- [DOM Events Specification](http://www.w3.org/TR/DOM-Level-2-Events/)—opisuje zdarzenia współdzielone przez większość obiektów DOM, tworzone na głównej specyfikacji DOM i specyfikacji [Views](http://www.w3.org/TR/DOM-Level-2-Views/)

Niniejsze interfejsy DOM łączą różne specyfikacje, jednak staramy się skoncentrować na rekomendacji DOM Level 2 HTML. Każda podstrona zawiera odnośnik do odpowiedniego fragmentu specyfikacji W3C DOM.

W tym miejscu "elementy" oznaczają ten interfejs, jaki mają wszystkie elementy HTML i XML. Istnieją również bardziej specjalizowane interfejsy dla poszczególnych elementów - np. `BODY` posiada dodatkowe funkcje i własności, podobnie tabele. W tym rozdziale omówiony jest tylko ten interfejs, jak współdzielą wszystkie elementy.

### Własności

| Nazwa                                                                                 | Opis                                                                                                        | Typ                                                                                                                           | Dostępność                                          |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`attributes`](/pl/DOM/element.attributes "pl/DOM/element.attributes")                | Zwraca tablicę atrybutów elementu.                                                                          | [`NamedNodeMap`](/pl/DOM/NamedNodeMap "pl/DOM/NamedNodeMap")                                                                  | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`childNodes`](/pl/DOM/element.childNodes "pl/DOM/element.childNodes")                | Zwraca tablicę węzłów potomnych elementu.                                                                   | [`NodeList`](/pl/DOM/NodeList "pl/DOM/NodeList")                                                                              | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`className`](/pl/DOM/element.className "pl/DOM/element.className")                   | Pobiera/ustawia klasę elementu.                                                                             | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML"), [XUL](/pl/XUL "pl/XUL") |
| [`clientHeight`](/pl/DOM/element.clientHeight "pl/DOM/element.clientHeight")          | Zwraca wewnętrzną wysokość elementu.                                                                        | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`clientWidth`](/pl/DOM/element.clientWidth "pl/DOM/element.clientWidth")             | Zwraca wewnętrzną szerokość elementu.                                                                       | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`dir`](/pl/DOM/element.dir "pl/DOM/element.dir")                                     | Ustawia lub pobiera kierunek elementu.                                                                      | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML"), [XUL](/pl/XUL "pl/XUL") |
| [`firstChild`](/pl/DOM/element.firstChild "pl/DOM/element.firstChild")                | Zwraca pierwsze dziecko bieżącego węzła lub `null`, jeśli ten element nie posiada węzła potomnego.          | [`Node`](/pl/DOM/Node "pl/DOM/Node")                                                                                          | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`id`](/pl/DOM/element.id "pl/DOM/element.id")                                        | Pobiera/ustawia id elementu.                                                                                | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML"), [XUL](/pl/XUL "pl/XUL") |
| [`innerHTML`](/pl/DOM/element.innerHTML "pl/DOM/element.innerHTML")                   | Pobiera/ustawia znacznik zawartości elementu.                                                               | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML")                          |
| [`lang`](/pl/DOM/element.lang "pl/DOM/element.lang")                                  | Określa język bazowy dla wartość atrybutów i tekstowej zawartości elementu.                                 | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML")                          |
| [`lastChild`](/pl/DOM/element.lastChild "pl/DOM/element.lastChild")                   | Zwraca ostatnie dziecko bieżącego węzła elementu lub `null` jeśli ten element nie posiada węzłów potomnych. | [`Node`](/pl/DOM/Node "pl/DOM/Node")                                                                                          | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`localName`](/pl/DOM/element.localName "pl/DOM/element.localName")                   | Zwraca lokalną część uściślonej nazwy węzła.                                                                | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| Nazwa                                                                                 | Opis                                                                                                        | Typ                                                                                                                           | Dostępność                                          |
| [`name`](/pl/DOM/element.name "pl/DOM/element.name")                                  | Pobiera lub ustawia atrybut `name` - dostępne nie dla wszystkich elementów.                                 | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [HTML](/pl/HTML "pl/HTML")                          |
| [`namespaceURI`](/pl/DOM/element.namespaceURI "pl/DOM/element.namespaceURI")          | URI przestrzeni nazw węzła lub `null`, jeśli jest bliżej nieokreślony.                                      | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`nextSibling`](/pl/DOM/element.nextSibling "pl/DOM/element.nextSibling")             | Węzeł bezpośrednio następny w drzewie dokumentu lub `null` jeżeli takiego nie ma.                           | [`Node`](/pl/DOM/Node "pl/DOM/Node")                                                                                          | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`nodeName`](/pl/DOM/element.nodeName "pl/DOM/element.nodeName")                      | Nazwa węzła.                                                                                                | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`nodeType`](/pl/DOM/element.nodeType "pl/DOM/element.nodeType")                      | Cyfra reprezentująca typ węzła. `1` oznacza element DOM.                                                    | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`nodeValue`](/pl/DOM/element.nodeValue "pl/DOM/element.nodeValue")                   | Wartość węzła atrybutu, zawartość węzła tekstowego lub `null` dla elementu DOM.                             | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`offsetHeight`](/pl/DOM/element.offsetHeight "pl/DOM/element.offsetHeight")          | Wysokość elementu, odnosząca się do układu strony.                                                          | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`offsetLeft`](/pl/DOM/element.offsetLeft "pl/DOM/element.offsetLeft")                | Odległość pomiędzy lewą krawędzią elementu, a jego `offsetParent` lewej krawędzi.                           | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`offsetParent`](/pl/DOM/element.offsetParent "pl/DOM/element.offsetParent")          | Element, od którego obliczane są wszystkie przesunięcia.                                                    | [`Element`](/pl/DOM/element "pl/DOM/element")                                                                                 | [HTML](/pl/HTML "pl/HTML")                          |
| [`offsetTop`](/pl/DOM/element.offsetTop "pl/DOM/element.offsetTop")                   | Odległość pomiędzy górną krawędzią elementu, a jego `offsetParent` górnej krawędzi.                         | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`offsetWidth`](/pl/DOM/element.offsetWidth "pl/DOM/element.offsetWidth")             | Szerokość elementu, odnosząca się do układu strony.                                                         | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`ownerDocument`](/pl/DOM/element.ownerDocument "pl/DOM/element.ownerDocument")       | Dokument, którego węzeł jest w lub `null` jeśli węzeł nie znajduje się wewnątrz.                            | [`Document`](/pl/DOM/document "pl/DOM/document")                                                                              | [Wszystkie](/pl/DOM "pl/DOM")                       |
| Nazwa                                                                                 | Opis                                                                                                        | Typ                                                                                                                           | Dostępność                                          |
| [`parentNode`](/pl/DOM/element.parentNode "pl/DOM/element.parentNode")                | Element nadrzędny bieżącego węzła lub `null` jeżeli węzeł nie znajduje się wewnątrz dokumentu DOM.          | [`Node`](/pl/DOM/Node "pl/DOM/Node")                                                                                          | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`prefix`](/pl/DOM/element.prefix "pl/DOM/element.prefix")                            | Prefiks przestrzeni nazw węzła lub `null` jeżeli nie określono prefiksa.                                    | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`previousSibling`](/pl/DOM/element.previousSibling "pl/DOM/element.previousSibling") | Węzeł bezpośrednio poprzedni w drzewie dokumentu lub `null` jeżeli takiego nie ma.                          | [`Node`](/pl/DOM/Node "pl/DOM/Node")                                                                                          | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`scrollHeight`](/pl/DOM/element.scrollHeight "pl/DOM/element.scrollHeight")          | The scroll view height of an element.                                                                       | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`scrollLeft`](/pl/DOM/element.scrollLeft "pl/DOM/element.scrollLeft")                | Pobiera/Ustawia liczbę pikseli, o którą zostanie przewinięta zawartość dokumentu.                           | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`scrollTop`](/pl/DOM/element.scrollTop "pl/DOM/element.scrollTop")                   | Pobiera/Ustawia liczbę pikseli, o którą ma zostać przewinięta w górę zawartość elementu.                    | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`scrollWidth`](/pl/DOM/element.scrollWidth "pl/DOM/element.scrollWidth")             | Zwraca szerokość zawartości elementu w pikselach lub szerokość samego elementu.                             | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`style`](/pl/DOM/element.style "pl/DOM/element.style")                               | Obiekt reprezentujący deklaracje stylów elementu.                                                           | [`CSSStyle`](/pl/DOM/CSSStyleDeclaration "pl/DOM/CSSStyleDeclaration")                                                        | [HTML](/pl/HTML "pl/HTML"), [XUL](/pl/XUL "pl/XUL") |
| [`tabIndex`](/pl/DOM/element.tabIndex "pl/DOM/element.tabIndex")                      | Pobiera lub ustawia pozycję elementu w kolejności przechodzenia tabulatorem.                                | [`Number`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/Number "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/Number") | [HTML](/pl/HTML "pl/HTML")                          |
| [`tagName`](/pl/DOM/element.tagName "pl/DOM/element.tagName")                         | Nazwa znacznika HTML danego elementu.                                                                       | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |
| [`textContent`](/pl/DOM/element.textContent "pl/DOM/element.textContent")             | Pobiera bądź ustawia tekstową treść elementu i jego potomków.                                               | [`String`](/pl/Dokumentacja_j%C4%99zyka_JavaScript_1.5/Obiekty/String "pl/Dokumentacja_języka_JavaScript_1.5/Obiekty/String") | [Wszystkie](/pl/DOM "pl/DOM")                       |



- [attributes](/pl/DOM/element.attributes "pl/DOM/element.attributes")
  - : Zwraca tablicę atrybutów elementu.

<!---->

- [childNodes](/pl/DOM/element.childNodes "pl/DOM/element.childNodes")
  - : Zwraca tablicę węzłów potomnych elementu

<!---->

- [className](/pl/DOM/element.className "pl/DOM/element.className")
  - : Pobiera/ustawia klasę elementu.

<!---->

- [clientHeight](/pl/DOM/element.clientHeight "pl/DOM/element.clientHeight")
  - : Własność DHTML-a, reprezentuje wewnętrzną wysokość elementu.

<!---->

- [clientLeft](/pl/DOM/element.clientLeft "pl/DOM/element.clientLeft")
  - : Długość od lewego obramowania elementu wyrażona w pikselach. _Aktualnie nie obsługiwana._

<!---->

- [clientTop](/pl/DOM/element.clientTop "pl/DOM/element.clientTop")
  - : Długość od górnego obramowania elementu wyrażona w pikselach. _Aktualnie nie obsługiwana._

<!---->

- [clientWidth](/pl/DOM/element.clientWidth "pl/DOM/element.clientWidth")
  - : Własność DHTML-a, reprezentuje wewnętrzną szerokość elementu.

<!---->

- [dir](/pl/DOM/element.dir "pl/DOM/element.dir")
  - : Pobiera/ustawia kierunkowość (ang. _directionality_) elementu.

<!---->

- [firstChild](/pl/DOM/element.firstChild "pl/DOM/element.firstChild")
  - : Zwraca pierwsze dziecko bieżącego węzła.

<!---->

- [id](/pl/DOM/element.id "pl/DOM/element.id")
  - : Pobiera/ustawia id elementu.

<!---->

- [innerHTML](/pl/DOM/element.innerHTML "pl/DOM/element.innerHTML")
  - : innerHTML zwraca całą zawartość elementu wraz ze znacznikami.

<!---->

- [lang](/pl/DOM/element.lang "pl/DOM/element.lang")
  - : Określa język bazowy dla wartość atrybutów i tekstowej zawartości elementu.

<!---->

- [lastChild](/pl/DOM/element.lastChild "pl/DOM/element.lastChild")
  - : Zwraca ostatnie dziecko bieżącego węzła.

<!---->

- [length](/pl/DOM/element.length "pl/DOM/element.length")
  - : Zwraca ilość elementów listy (np. childNodes).

<!---->

- [localName](/pl/DOM/element.localName "pl/DOM/element.localName")
  - : Zwraca lokalną część uściślonej nazwy węzła.

<!---->

- [name](/pl/DOM/element.name "pl/DOM/element.name")
  - : Pobiera lub ustawia atrybut `name` - dostępne nie dla wszystkich elementów.

<!---->

- [namespaceURI](/pl/DOM/element.namespaceURI "pl/DOM/element.namespaceURI")
  - : URI przestrzeni nazw węzła lub NULL, jeśli nie określono przestrzeni nazw.

<!---->

- [nextSibling](/pl/DOM/element.nextSibling "pl/DOM/element.nextSibling")
  - : Zwraca węzeł bezpośrednio następny w drzewie dokumentu.

<!---->

- [nodeName](/pl/DOM/element.nodeName "pl/DOM/element.nodeName")
  - : Zwraca nazwę biężącego węzła.

<!---->

- [nodeType](/pl/DOM/element.nodeType "pl/DOM/element.nodeType")
  - : Zwraca typ bieżącego węzła.

<!---->

- [nodeValue](/pl/DOM/element.nodeValue "pl/DOM/element.nodeValue")
  - : Zwraca wartość bieżącego węzła.

<!---->

- [offsetHeight](/pl/DOM/element.offsetHeight "pl/DOM/element.offsetHeight")
  - : offsetHeight jest własnością DHTML-a, zwracającą wysokość elementu względem układu.

<!---->

- [offsetLeft](/pl/DOM/element.offsetLeft "pl/DOM/element.offsetLeft")
  - : offsetLeft pobiera/ustawia ilość pikseli, jaka dzieli element od lewej strony wewnątrz węzła offsetParent.

<!---->

- [offsetParent](/pl/DOM/element.offsetParent "pl/DOM/element.offsetParent")
  - : offsetParent zwraca referencję do obiektu, w którym obecny element się znajduje (tj. rodzica).

<!---->

- [offsetTop](/pl/DOM/element.offsetTop "pl/DOM/element.offsetTop")
  - : offsetTop zwraca pozycję obecnego elementu względem góry węzła offsetParent.

<!---->

- [offsetWidth](/pl/DOM/element.offsetWidth "pl/DOM/element.offsetWidth")
  - : offsetWidth jest własnością DHTML-a, zwracającą szerokość elementu względem układu.

<!---->

- [ownerDocument](/pl/DOM/element.ownerDocument "pl/DOM/element.ownerDocument")
  - : Zwraca dokument, w którym znajduje się bieżący węzeł.

<!---->

- [parentNode](/pl/DOM/element.parentNode "pl/DOM/element.parentNode")
  - : Zwraca rodzica bieżącego węzła.

<!---->

- [prefix](/pl/DOM/element.prefix "pl/DOM/element.prefix")
  - : Zwraca prefiks przestrzeni nazw obecnego węzła bądź NULL, jeśli nie określono przestrzeni nazw.

<!---->

- [previousSibling](/pl/DOM/element.previousSibling "pl/DOM/element.previousSibling")
  - : Zwraca węzeł bezpośrednio poprzedni w drzewie dokumentu.

<!---->

- [scrollHeight](/pl/DOM/element.scrollHeight "pl/DOM/element.scrollHeight")
  - : Własność DHTML-a, zwraca wysokość zawartości elementu z paskiem przewijania.

<!---->

- [scrollLeft](/pl/DOM/element.scrollLeft "pl/DOM/element.scrollLeft")
  - : pobiera bądź ustawia liczbę pikseli, o którą zostanie przewinięta zawartość dokumentu. Kierunek przewijania odbywa się w lewo.

<!---->

- [scrollTop](/pl/DOM/element.scrollTop "pl/DOM/element.scrollTop")
  - : Własność DHTML-a, która ustawia bądź pobiera odległość między górą elementu a najwyższym punktem zawartości elementu z paskiem przewijania.

<!---->

- [scrollWidth](/pl/DOM/element.scrollWidth "pl/DOM/element.scrollWidth")
  - : Zwraca the width of the scroll view of an element.

<!---->

- [style](/pl/DOM/element.style "pl/DOM/element.style")
  - : Zwraca blok reguł stylów dla elementu.

<!---->

- [tabIndex](/pl/DOM/element.tabIndex "pl/DOM/element.tabIndex")
  - : Pobiera/ustawia pozycję elementu w porządku tabulacji.

<!---->

- [tagName](/pl/DOM/element.tagName "pl/DOM/element.tagName")
  - : Zwraca nazwę elementu.

<!---->

- [textContent](/pl/DOM/element.textContent "pl/DOM/element.textContent")
  - : Pobiera/ustawia zawartość tekstu elementu włączając jego potomków.

### Metody

- [addEventListener](/pl/DOM/element.addEventListener "pl/DOM/element.addEventListener")
  - : Pozwala zarejestrować obserwatora zdarzeń dla celu zdarzenia.

<!---->

- [appendChild](/pl/DOM/element.appendChild "pl/DOM/element.appendChild")
  - : Wstawia określony węzeł do listy węzłów dokumentu.

<!---->

- [blur](/pl/DOM/element.blur "pl/DOM/element.blur")
  - : Dezaktywuje bieżący element.

<!---->

- [click](/pl/DOM/element.click "pl/DOM/element.click")
  - : Wywołuje kliknięcie na elemencie.

<!---->

- [cloneNode](/pl/DOM/element.cloneNode "pl/DOM/element.cloneNode")
  - : Zwraca kopię bieżącego węzła.

<!---->

- [dispatchEvent](/pl/DOM/element.dispatchEvent "pl/DOM/element.dispatchEvent")
  - : Pozwala przekazać wywołania zdarzeń do modelu zdarzeń w implementacji DOM.

<!---->

- [focus](/pl/DOM/element.focus "pl/DOM/element.focus")
  - : Aktywuje bieżący element.

<!---->

- [getAttribute](/pl/DOM/element.getAttribute "pl/DOM/element.getAttribute")
  - : Zwraca wartość atrybutu o podanej nazwie.

<!---->

- [getAttributeNS](/pl/DOM/element.getAttributeNS "pl/DOM/element.getAttributeNS")
  - : Zwraca wartość atrybutu o podanej nazwie i przestrzeni nazw.

<!---->

- [getAttributeNode](/pl/DOM/element.getAttributeNode "pl/DOM/element.getAttributeNode")
  - : Zwraca atrybut elementu jako osobny węzeł.

<!---->

- [getElementsByTagName](/pl/DOM/element.getElementsByTagName "pl/DOM/element.getElementsByTagName")
  - : Zwraca elementy o podanej nazwie będące potomkami bieżącego elementu.

<!---->

- [hasAttribute](/pl/DOM/element.hasAttribute "pl/DOM/element.hasAttribute")
  - : Zwraca wartość logiczną zależnie od tego, czy element posiada atrybut o podanej nazwie.

<!---->

- [hasAttributeNS](/pl/DOM/element.hasAttributeNS "pl/DOM/element.hasAttributeNS")
  - : Zwraca wartość logiczną zależnie od tego, czy element posiada atrybut o podanej nazwie i przestrzeni nazw.

<!---->

- [hasAttributes](/pl/DOM/element.hasAttributes "pl/DOM/element.hasAttributes")
  - : Zwraca wartość logiczną zależnie od tego, czy element posiada jakiekolwiek atrybuty.

<!---->

- [hasChildNodes](/pl/DOM/element.hasChildNodes "pl/DOM/element.hasChildNodes")
  - : Zwraca wartość logiczną zależnie od tego, czy element posiada dzieci.

<!---->

- [insertBefore](/pl/DOM/element.insertBefore "pl/DOM/element.insertBefore")
  - : Metoda pozwala wstawić węzeł przed bieżącym elementem w DOM.

<!---->

- [item](/pl/DOM/element.item "pl/DOM/element.item")
  - : Zwraca węzeł z drzewa wg podanego indeksu.

<!---->

- [normalize](/pl/DOM/element.normalize "pl/DOM/element.normalize")
  - : Metoda zapisuje bieżący węzeł i całe drzewo znajdujące się wewnątrz w "znormalizowanej" formie.

<!---->

- [removeAttribute](/pl/DOM/element.removeAttribute "pl/DOM/element.removeAttribute")
  - : Usuwa atrybut elementu.

<!---->

- [removeAttributeNode](/pl/DOM/element.removeAttributeNode "pl/DOM/element.removeAttributeNode")
  - : Usuwa określony atrybut elementu.

<!---->

- [removeChild](/pl/DOM/element.removeChild "pl/DOM/element.removeChild")
  - : Usuwa węzeł potomny bieżącego elementu.

<!---->

- [removeEventListener](/pl/DOM/element.removeEventListener "pl/DOM/element.removeEventListener")
  - : Pozwala usunąć obserwatora zdarzeń z celu zdarzenia.

<!---->

- [replaceChild](/pl/DOM/element.replaceChild "pl/DOM/element.replaceChild")
  - : Metoda replaceChild() zastępuje węzeł potomny bieżącego elementu innym węzłem.

<!---->

- [setAttribute](/pl/DOM/element.setAttribute "pl/DOM/element.setAttribute")
  - : Dodaje nowy atrybut bądź zmienia wartość atrybutu bieżącego elementu.

<!---->

- [setAttributeNS](/pl/DOM/element.setAttributeNS "pl/DOM/element.setAttributeNS")
  - : Dodaje nowy atrybut bądź zmienia wartość atrybutu bieżącego elementu, wg podanej nazwy i przestrzeni nazw.

<!---->

- [setAttributeNode](/pl/DOM/element.setAttributeNode "pl/DOM/element.setAttributeNode")
  - : Dodaje nowy węzeł atrybutu do bieżącego elementu.

<!---->

- [setAttributeNodeNS](/pl/DOM/element.setAttributeNodeNS "pl/DOM/element.setAttributeNodeNS")
  - : Dodaje nowy węzeł atrybutu do bieżącego elementu wg podanej nazwy i przestrzeni nazw.

<!---->

- [supports](/pl/DOM/element.supports "pl/DOM/element.supports")
  - : Sprawdza, czy implementacja DOM pozwala na wykorzystanie konkretnej możliwości.

### Uchwyty zdarzeń

Poniższe właściwości nie mogą być przypisane, tak jak uchwyty zdarzeń obiektów document czy window. Wszystkie poniższe własności służą tylko do odczytu - zwracają kod obsługi zdarzeń, jeżeli został on nadany elementowi w samym HTML-u bądź XML-u.

**Są to właściwości odnoszące się do HTML dla atrybutów zdarzeń 'on'.**

**W przeciwieństwie do odpowiadających atrybutów, wartości tych właściwość są funkcjami lub jakimkolwiek innym obiektem implementowanym przez [EventListener](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener) interfejs. Przypisanie atrybutu zdarzenia w HTML powoduje utworzenie funkcji opakowującej funkcji dla określonego kodu. Np. podając następujący HTML:**

    <div onclick="foo();">click me!</div>

**Jeżeli `element` jest referencją do `<div>`, wartość `element.onclick` wynosi faktycznie:**

    function onclick(event) {
       foo();
    }

**Note how the [event](/pl/DOM/event "pl/DOM/event") object is passed as parameter `event` to this wrapper function.**

- [onblur](/pl/DOM/element.onblur "pl/DOM/element.onblur")
  - : Zwraca kod obsługi zdarzenia blur.

<!---->

- [onclick](/pl/DOM/element.onclick "pl/DOM/element.onclick")
  - : Zwraca kod obsługi zdarzenia onclick.

<!---->

- [ondblclick](/pl/DOM/element.ondblclick "pl/DOM/element.ondblclick")
  - : Zwraca kod obsługi zdarzenia dblclick.

<!---->

- [onfocus](/pl/DOM/element.onfocus "pl/DOM/element.onfocus")
  - : Zwraca kod obsługi zdarzenia focus.

<!---->

- [onkeydown](/pl/DOM/element.onkeydown "pl/DOM/element.onkeydown")
  - : Zwraca kod obsługi zdarzenia keydown.

<!---->

- [onkeypress](/pl/DOM/element.onkeypress "pl/DOM/element.onkeypress")
  - : Zwraca kod obsługi zdarzenia keypress.

<!---->

- [onkeyup](/pl/DOM/element.onkeyup "pl/DOM/element.onkeyup")
  - : Zwraca kod obsługi zdarzenia keyup.

<!---->

- [onmousedown](/pl/DOM/element.onmousedown "pl/DOM/element.onmousedown")
  - : Zwraca kod obsługi zdarzenia mousedown.

<!---->

- [onmousemove](/pl/DOM/element.onmousemove "pl/DOM/element.onmousemove")
  - : Zwraca kod obsługi zdarzenia mousemove.

<!---->

- [onmouseout](/pl/DOM/element.onmouseout "pl/DOM/element.onmouseout")
  - : Zwraca kod obsługi zdarzenia mouseout.

<!---->

- [onmouseover](/pl/DOM/element.onmouseover "pl/DOM/element.onmouseover")
  - : Zwraca kod obsługi zdarzenia mouseover.

<!---->

- [onmouseup](/pl/DOM/element.onmouseup "pl/DOM/element.onmouseup")
  - : Zwraca kod obsługi zdarzenia mouseup.

<!---->

- [onresize](/pl/DOM/element.onresize "pl/DOM/element.onresize")
  - : Zwraca kod obsługi zdarzenia resize.
