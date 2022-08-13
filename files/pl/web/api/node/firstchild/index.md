---
title: element.firstChild
slug: Web/API/Node/firstChild
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/firstChild
original_slug: Web/API/Element/firstChild
---
{{ ApiRef() }}

### Podsumowanie

**firstChild** jest właściwością tylko do odczytu, która zwraca pierwszego potomka węzła lub wartość null, jeżeli węzeł nie ma potomków. Jeżeli węzeł jest elementem Document, wtedy zwraca pierwszy węzeł z listy swoich bezpośrednich dzieci.

### Składnia i wartości

    var elt = element.firstChild;

_elt_ to referencja do pierwszego dziecka elementu, jeśli jest takie - w przeciwnym razie jest to null.

### Przykład

Przeglądarki oparte o Gecko wstawiają do dokumentu węzły tekstowe reprezentujące białe znaki w kodzie. Dlatego pierwsze dziecko elementu może odnosić się do wstawionego węzła tekstowego, a nie elementu określonego przez następny znacznik w źródle strony.

    <p id="para-01">
      <span>Pierwszy span</span>
    </p>

    <script type="text/javascript">
      var p01 = document.getElementById('para-01');
      alert(p01.firstChild.nodeName)
    </script>

W powyższym przykładzie alert wyświetli '#text', ponieważ wstawiony jest węzeł tekstowy oznaczający przerwę między otwierającymi znacznikami \<p> i \<span> . Dowolny biały znak spowoduje wstawienie węzła tekstowego - zarówno pojedyncza spacja, jak i dowolna ilość spacji, nowych linii, znaków tabulacji itd.

Kolejny węzeł #text jest wstawiany między zamykającymi znacznikami \</span> i \</p>

Jeśli usunie się białe znaki ze źródła, nie zostaną wstawione węzły tekstowe, a element `span` stanie się pierwszym dzieckiem paragrafu.

    <p id="para-01"><span>Pierwszy span</span></p>

    <script type="text/javascript">
      var p01 = document.getElementById('para-01');
      alert(p01.firstChild.nodeName)
    </script>

Teraz alert wyświetli 'SPAN'.

### Uwagi

Więcej o problemach z węzłami-zjawami znajdziesz w {{ Bug(26179) }} (nie komentuj tego błędu!). Oto jeden ze sposobów na ominięcie problemu:

    <!-- konwencjonalne formatowanie prowadzi do
         zaśmiecenia drzewa dokumentu w Gecko
     -->
    <div>
     <ul>
      <li>Pozycja 1</li>
      <li>Pozycja 2</li>
      <li>Pozycja 3</li>
     </ul>
    </div>

    <!-- Formatowanie ustawione, by ominąć
         problem węzłów-zjaw
     -->
    <div
     ><ul
      ><li>Pozycja 1</li
      ><li>Pozycja 2</li
      ><li>Pozycja 3</li
     ></ul
    ></div>

#### Węzły bezdzietne

Własność zwraca `null`, jeśli bieżący węzeł jest bezdzietny.

#### Białe znaki i węzły dzieci

Węzły #text mogą być wstawione jako dzieci elementów takich jak TR pomimo że specyfikacja HTML pozwala tylko na TD jako ich dzieci. Z uwagi na XML białe znaki muszą zostać zachowane i gdzieś wstawione.

Ponieważ węzły #text nie są elementami HTML, białe znaki są tam wstawiane.

[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)

### Specyfikacja

[DOM Level 1 Core: firstChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-firstChild)

[DOM Level 2 Core: firstChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-169727388)

{{ languages( { "en": "en/DOM/element.firstChild", "fr": "fr/DOM/element.firstChild", "ja": "ja/DOM/element.firstChild", "zh-cn": "cn/DOM/element.firstChild" } ) }}
