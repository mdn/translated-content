---
title: element.insertBefore
slug: Web/API/Node/insertBefore
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Node/insertBefore
original_slug: Web/API/Element/insertBefore
---
{{ ApiRef() }}

### Podsumowanie

Wstawia określony węzeł przed danym elementem jako dziecko aktualnego węzła.

### Składnia

    var wstawionyElement =elementRodzic.insertBefore(nowyElement,danyElement)

Jeżeli _danyElement_ ma wartość `null`, _nowyElement_ jest wstawiany na końcu listy węzłów potomnych.

- `nowyElement` Węzeł do wstawienia.
- `danyElement` Węzeł przed którym `nowyElement` ma zostać wstawiony.
- `elementRodzic` Rodzic nowo wstawianego elementu.
- `wstawionyElement` Węzeł, który jest wstawiany, czyli `nowyElement`.

### Przykład

     <html>

     <head>
     <title>Gecko DOM insertBefore test</title>
     </head>

     <body>
     <div>
       <span id="childSpan">foo bar</span>
     </div>

     <script type="text/javascript">
     // tworzy pusty węzeł elementu
     // bez ID, jakichkolwiek atrybutów lub jakiejkolwiek zawartości
     var sp1 = document.createElement("span");

     // daje to atrybut id nazwany 'newSpan'
     sp1.setAttribute("id", "newSpan");

     // tworzy jakąś zawartość dla nowo powstałego elementu.
     var sp1_content = document.createTextNode("Jest to nowy element span. ");

     // zwraca się, która treść ma być do nowego elementu.
     sp1.appendChild(sp1_content);

     var sp2 = document.getElementById("childSpan");
     var parentDiv = sp2.parentNode;

     // wstawia nowy element do DOM przed sp2
     parentDiv.insertBefore(sp1, sp2);
     </script>

     </body>
     </html>

Nie istnieje metoda `insertAfter`, jednak można ją emulować poprzez kombinację `insertBefore` oraz [`nextSibling`](pl/DOM/element.nextSibling).

W powyższym przykładzie, `sp1` może zostać wstawiona za `sp2` przy użyciu:

    parentDiv.insertBefore(sp1, sp2.nextSibling);

Jeżeli `sp2` nie posiada następnego rodzeństwa i musi być ostatnim potomnym —`sp2.nextSibling` to zwróci `null` więc `sp1` będzie wstawione na końcu listy węzłów potomnych (np. natychmiast po `sp2`).

### Specyfikacja

[insertBefore](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-952280727)





{{ languages( { "en": "en/DOM/element.insertBefore", "fr": "fr/DOM/element.insertBefore", "ja": "ja/DOM/element.insertBefore", "pt": "pt/DOM/element.insertBefore" } ) }}
