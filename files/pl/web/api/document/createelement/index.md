---
title: document.createElement
slug: Web/API/Document/createElement
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/createElement
---
{{ ApiRef() }}

### Podsumowanie

Tworzy element podanego typu. Zauważ, że zwracana instancja implementuje interfejs Element, zatem można manipulować atrybutami bezpośrednio na zwróconym obiekcie.

### Składnia

    ''element'' = document.createElement(''typ'')

### Parametry

- \_element_jest obiektem
- \_typ_jest ciągiem znaków oznaczającym typ tworzonego elementu

### Przykład

    <html>
    <head>
    <title>||Praca z elementami||</title>
    </head>

    <script type="text/javascript">
    var my_div = null;
    var newDiv = null;

    function addElement()
    {
      // tworzy nowy element div
      // i daje jego zawartość
      newDiv = document.createElement("div");
      newDiv.innerHTML = "<h1>Hi there and greetings!</h1>";

      // add the newly created element and it's content into the DOM
      my_div = document.getElementById("org_div1");
      document.body.insertBefore(newDiv, my_div);
    }

    </script>

    <body onload="addElement()">
        <div id='org_div1'> The text above has been created dynamically.</div>
    </body>
    </html>

### Uwagi

Jeżeli znane są atrybuty o domyślnych wartościach, zostaną automatycznie utworzone i przypisane do elementu węzły tychże atrybutów.

Aby utworzyć element o uściślonej nazwie i URI przestrzeni nazw, użyj metody **createElementNS**.

### Specyfikacja

[createElement](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-2141741547)

{{ languages( { "en": "en/DOM/document.createElement", "fr": "fr/DOM/document.createElement", "it": "it/DOM/document.createElement", "ja": "ja/DOM/document.createElement", "ko": "ko/DOM/document.createElement" } ) }}
