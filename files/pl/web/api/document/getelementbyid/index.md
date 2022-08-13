---
title: document.getElementById
slug: Web/API/Document/getElementById
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/getElementById
---
{{ ApiRef() }}

### Podsumowanie

Zwraca element o określonym ID.

### Składnia

    var element = document.getElementById(id);

### Parametry

- `element` jest obiektem [element](pl/DOM/element)
- `id` jest ciągiem zawierającym unikalny ID szukanego elementu

### Przykład

    <html>
    <head>
    <title>Przykład getElementById</title>

    <script type="text/javascript">

    function changeColor(newColor)
    {
     var elem = document.getElementById("para1");
     elem.style.color = newColor;
    }
    </script>
    </head>

    <body>
    <p id="para1">Jakiś tekst</p>
    <button onclick="changeColor('blue');">niebieski</button>
    <button onclick="changeColor('red');">czerwony</button>
    </body>
    </html>

### Uwagi

**getElementById** jest absolutną podstawą DOM. Jedną z najważniejszych zasad w programowaniu DOM jest unikalne identyfikowanie elementów, dzięki czemu można je przechwycić i manipulować nimi.

Jeżeli nie ma elementu o podanym ID, funkcja zwraca NULL. Zauważ też, że implementacja DOM musi wiedzieć, które atrybuty mają typ ID. Atrybuty o nazwie "ID" nie mają typu ID, o ile nie zostanie to tak zdefiniowane. Implementacje, które nie wiedzą, czy atrybuty mają typ ID czy nie, powinny zwracać NULL.

**getElementById** wprowadzono w DOM Level 2.

### Specyfikacja

- DOM Level 2 Core Specification: [getElementById](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBId)

{{ languages( { "en": "en/DOM/document.getElementById", "fr": "fr/DOM/document.getElementById", "ja": "ja/DOM/document.getElementById" } ) }}
