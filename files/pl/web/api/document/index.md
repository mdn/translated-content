---
title: document
slug: Web/API/Document
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document
---
{{ ApiRef() }}

### Wprowadzenie

Obiekt `document` stanowi w [DOM](pl/DOM) ogólny sposób reprezentowania dokumentów [HTML](pl/HTML), [XHTML](pl/XHTML) i [XML](pl/XML). Poza ogólnym interfejsem dokumentu, w ponizszej liscie uwzgledniono takze [DOM HTMLDocument](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268), bedacy bardziej wyspecjalizowanym interfejsem, przeznaczonym do pracy z dokumentami HTML (np. wlasnosci takie jak [document.cookie](pl/DOM/document.cookie), [document.alinkColor](pl/DOM/document.alinkColor)). Czesci tego bardziej wyspecjalizowanego interfejsu zostaly oznaczone gwiazdka (\*).

`document` zawarty jest w obiekcie [window](pl/DOM/window) i moze zawierac dowolna liczbe [elementów](pl/DOM/element).

Tak jak widac na ponizszej liscie, interfejsy `document` odpowiadaja za rzeczy takie jak typ dokumentu, jego cechy, jak kolory czy formatowanie, wtyczki i aplety przedstawiane uzytkownikowi, ale sa tu tez metody do tworzenia węzłów potomnych dokumentu, a takze elementy znajdujace sie zwykle w reprezentacji dokumentu, jak \<BODY>.

### Wlasnosci

- [document.alinkColor](pl/DOM/document.alinkColor)\* {{ Deprecated_inline() }}
  - : Zwraca lub ustawia kolor aktywnych odnośników w dokumencie.

- [document.anchors](pl/DOM/document.anchors)\*
  - : Zwraca listę wszystkich kotwic w dokumencie.

- [document.applets](pl/DOM/document.applets)\*
  - : Zwraca uporządkowaną listę apletów w dokumencie.

- [document.bgColor](pl/DOM/document.bgColor)\* {{ Deprecated_inline() }}
  - : Pobiera/ustawia kolor tła dokumentu.

- [document.body](pl/DOM/document.body)\*
  - : Zwraca węzeł elementu BODY w dokumencie.

- [document.characterSet](pl/DOM/document.characterSet)
  - : Zwraca nazwę zestawu znaków uzytego w dokumencie.

- [document.compatMode](pl/DOM/document.compatMode)\*
  - : Wskazuje, czy dokument jest renderowany w trybie zgodności wstecznej czy w trybie standardów.

- [document.contentType](pl/DOM/document.contentType)
  - : Zwraca Content-Type z nagłówka MIME bieżącego dokumentu.

- [document.cookie](pl/DOM/document.cookie)\*
  - : Zwraca rozdzielona średnikami listę ciasteczek dokumentu bądź zapisuje pojedyncze ciasteczko.

- [document.defaultView](pl/DOM/document.defaultView)
  - : Zwraca referencje do obiektu `window`.

- [document.designMode](pl/DOM/document.designMode)\*
  - : Pobiera/ustawia możliwość edytowania w trybie WYSIWYG za pomocą edytora [Midas](pl/Midas). Może zostać użyty wyłącznie w dokumentach HTML.

- [document.doctype](pl/DOM/document.doctype)
  - : Zwraca definicje typu dokumentu (DTD).

- [document.documentElement](pl/DOM/document.documentElement)
  - : Zwraca element będący bezpośrednim dzieckiem dokumentu.W dokumentach \<HTML> jest to zazwyczaj element.

- [document.documentURIObject](pl/DOM/document.documentURIObject)
  - : Zwraca obiekt nsIURI reprezentujący URI dokumentu. Własność ta jest wspomagana wyłącznie z kodu JavaScriptu.

- [document.domain](pl/DOM/document.domain)\*
  - : Zwraca domenę bieżącego dokumentu.

- [document.embeds](pl/DOM/document.embeds)\*
  - : Zwraca listę obiektów (OBJECT) zagnieżdżonych w dokumencie.

- [document.fgColor](pl/DOM/document.fgColor)\* {{ Deprecated_inline() }}
  - : Pobiera/ustawia kolor pierwszoplanowy (kolor tekstu) w dokumencie.

- [document.firstChild](pl/DOM/document.firstChild)
  - : Zwraca pierwszy węzeł spośród bezpośrednich dzieci dokumentu (zob. własność elementów [firstChild](pl/DOM/element.firstChild)).

- [document.forms](pl/DOM/document.forms)\*
  - : Zwraca listę elementów FORM w dokumencie.

- [document.height](pl/DOM/document.height)\*
  - : Pobiera/ustawia wysokość dokumentu.

- [document.images](pl/DOM/document.images)\*
  - : Zwraca listę obrazków w dokumencie.

- [document.implementation](pl/DOM/document.implementation)\*
  - : Zwraca obiekt implementacji DOM powiązany z bieżącym dokumentem.

- [document.lastModified](pl/DOM/document.lastModified)\*
  - : Zwraca datę ostatniej modyfikacji dokumentu.

- [document.linkColor](pl/DOM/document.linkColor)\* {{ Deprecated_inline() }}
  - : Pobiera/ustawia kolor odnośników w dokumencie.

- [document.links](pl/DOM/document.links)\*
  - : Zwraca listę wszystkich odnośników w dokumencie.

- [document.location](pl/DOM/document.location)\*
  - : Zwraca URI bieżącego dokumentu.

- [document.namespaceURI](pl/DOM/document.namespaceURI)
  - : Zwraca przestrzeń nazw XML dokumentu.

- [document.plugins](pl/DOM/document.plugins)\*
  - : Zwraca listę dostępnych wtyczek.

- [document.popupNode](pl/DOM/document.popupNode)
  - : Zwraca węzeł, do którego odwoływał sie {{ XULElem("popup") }} (wyłącznie dokumenty XUL).

- [document.referrer](pl/DOM/document.referrer)\*
  - : Zwraca URI strony, która przekierowała do bieżącej strony.

- [document.styleSheets](pl/DOM/document.styleSheets)\*
  - : Zwraca listę obiektów typu [stylesheet](pl/DOM/stylesheet) w bieżącym dokumencie.

- [document.title](pl/DOM/document.title)\*
  - : Zwraca tytuł bieżącego dokumentu.

- [document.tooltipNode](pl/DOM/document.tooltipNode)
  - : Zwraca węzeł, który jest bieżącym celem {{ XULElem("tooltip") }}.

- [document.URL](pl/DOM/document.URL)
  - : Zwraca ciąg znaków zawierający adres URL bieżącego dokumentu.

- [document.vlinkColor](pl/DOM/document.vlinkColor)\* {{ Deprecated_inline() }}
  - : Pobiera/ustawia kolor odwiedzonych odnośników.

- [document.width](pl/DOM/document.width)\*
  - : Zwraca szerokość bieżącego dokumentu.

### Metody

- [document.clear](/pl/DOM/document.clear "pl/DOM/document.clear")\* {{ Deprecated_inline() }}
  - : W wiekszosci nowoczesnych przegladarek wlacznie z Firefoksem oraz Internet Explorerem metoda ta nie robi nic.

- [document.close](/pl/DOM/document.close "pl/DOM/document.close")\*
  - : Konczy dopisywanie do strumienia dokumentu.

- [document.createAttribute](/pl/DOM/document.createAttribute "pl/DOM/document.createAttribute")
  - : Tworzy i zwraca nowy wezel atrybutu.

- [document.createDocumentFragment](/pl/DOM/document.createDocumentFragment "pl/DOM/document.createDocumentFragment")
  - : Tworzy nowy fragment dokumentu.

- [document.createElement](/pl/DOM/document.createElement "pl/DOM/document.createElement")
  - : Tworzy nowy element o podanej nazwie.

- [document.createElementNS](/pl/DOM/document.createElementNS "pl/DOM/document.createElementNS")
  - : Tworzy nowy element o podanej nazwie i URI przestrzeni nazw.

- [document.createNSResolver](/pl/DOM/document.createNSResolver "pl/DOM/document.createNSResolver")
  - : Tworzy XPathNSResolver.

- [document.createTextNode](/pl/DOM/document.createTextNode "pl/DOM/document.createTextNode")
  - : Tworzy nowy wezel tekstowy.

- [document.createTreeWalker](/pl/DOM/document.createTreeWalker "pl/DOM/document.createTreeWalker")
  - : Tworzy obiekt [`TreeWalker`](/pl/DOM/treeWalker "pl/DOM/treeWalker").

- [document.createEvent](/pl/DOM/document.createEvent "pl/DOM/document.createEvent")
  - : Tworzy obiekt zdarzenia.

- [document.createRange](/pl/DOM/document.createRange "pl/DOM/document.createRange")
  - : Tworzy obiekt Range.

- [document.execCommand](/pl/DOM/document.execCommand "pl/DOM/document.execCommand")
  - : Wykonuje komende dla edytora [Midas](/pl/Midas "pl/Midas").

- [document.evaluate](/pl/DOM/document.evaluate "pl/DOM/document.evaluate")
  - : Wykonuje wyrazenie XPath.

- [document.getElementById](/pl/DOM/document.getElementById "pl/DOM/document.getElementById")
  - : Zwraca referencje do elementu o podanym ID.

- [document.getElementsByName](/pl/DOM/document.getElementsByName "pl/DOM/document.getElementsByName")
  - : Zwraca liste elementów o podanej nazwie.

- [document.getElementsByTagName](/pl/DOM/document.getElementsByTagName "pl/DOM/document.getElementsByTagName")
  - : Zwraca liste elementów o danej nazwie znacznika.

- [document.importNode](/pl/DOM/document.importNode "pl/DOM/document.importNode")
  - : Zwraca kopie wezla z zewnetrznego dokumentu.

- [document.loadOverlay](/pl/DOM/document.loadOverlay "pl/DOM/document.loadOverlay")
  - : Laduje [nakladke XUL](/pl/Nakladki_XUL "pl/Nakladki_XUL"). Dziala to tylko w dokumentach XUL.

- [document.open](/pl/DOM/document.open "pl/DOM/document.open")\*
  - : Otwiera strumien dokumentu do zapisu.

- [document.queryCommandEnabled](/pl/DOM/document.queryCommandEnabled "pl/DOM/document.queryCommandEnabled")\*
  - : Zwraca prawde, jesli komenda edytora [Midas](/pl/Midas "pl/Midas") moze byc wykonana na biezacym zakresie.

- [document.queryCommandIndeterm](/pl/DOM/document.queryCommandIndeterm "pl/DOM/document.queryCommandIndeterm")\*
  - : Zwraca prawde, jesli komenda edytora [Midas](/pl/Midas "pl/Midas") jest w stanie nieokreslonym dla biezacego zakresu.

- [document.queryCommandState](/pl/DOM/document.queryCommandState "pl/DOM/document.queryCommandState")\*
  - : Zwraca prawde, jesli komenda edytora [Midas](/pl/Midas "pl/Midas") zostala wykonana na biezacym zakresie.

- [document.queryCommandValue](/pl/DOM/document.queryCommandValue "pl/DOM/document.queryCommandValue")\*
  - : Zwraca wartosc biezacego zakresu dla komendy edytora [Midas](/pl/Midas "pl/Midas").Wraz z Firefoksem 2.0.0.2 queryCommandValue zwróci pusty ciag jesli wartosc nie zostala ustawiona.

- [document.write](/pl/DOM/document.write "pl/DOM/document.write")\*
  - : Zapisuje tekst w dokumencie.

- [document.writeln](/pl/DOM/document.writeln "pl/DOM/document.writeln")\*
  - : Zapisuje linie tekstu w dokumencie.



{{ languages( { "en": "en/DOM/document", "es": "es/DOM/document", "fr": "fr/DOM/document", "ja": "ja/DOM/document", "zh-cn": "cn/DOM/document", "de" : "de/DOM/document" } ) }}
