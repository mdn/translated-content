---
title: document.getElementsByTagName
slug: Web/API/Document/getElementsByTagName
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Document/getElementsByTagName
---
{{ ApiRef("DOM") }}

### Podsumowanie

Zwraca listę elementów o podanej nazwie znacznika. Przeszukiwany jest cały dokument, łącznie z głównym węzłem.

### Składnia

    elements = document.getElementsByTagName(name)

- `elements` is a live `NodeList` of found elements in the order they appear in the tree.
- `name` jest łańcuchem znaków reprezentującym nazwę elementów. Łańcuch znaków "\*" reprezentuje wszystkie elementy.

### Przykład

W poniższym przykładzie `getElementsByTagName` starts from a particular parent element, and searches topdown recursively through the DOM from that parent element, looking for child elements matching the tag `name` parameter.

Zauważ, że gdy węzeł, w którym przywołano `getElementsByTagName`, nie jest węzłem `document`, to w rzeczywistości użyta jest metoda [element.getElementsByTagName](pl/DOM/element.getElementsByTagName).

    <html>

    <head>
    <title>Przykład getElementsByTagName</title>

    <script type="text/javascript">

    function getAllParaElems()
    {
      var allParas = document.getElementsByTagName("p");

      var num = allParas.length;

      alert("W tym dokumencie jest " + num + " elementów <p>");
    }


    function div1ParaElems()
    {
      var div1 = document.getElementById("div1")
      var div1Paras = div1.getElementsByTagName("p");

      var num = div1Paras.length;

      alert("W elemencie div1 znajduje się " + num + " elementów <p>");
    }


    function div2ParaElems()
    {
      var div2 = document.getElementById("div2")
      var div2Paras = div2.getElementsByTagName("p");

      var num = div2Paras.length;

      alert("W elemencie div2 znajduje się " + num + " elementów <p>");
    }

    </script>
    </head>

    <body style="border: solid green 3px">
    <p>Trochę zewnętrznego tekstu</p>
    <p>Trochę zewnętrznego tekstu</p>

      <div id="div1" style="border: solid blue 3px">
        <p>Trochę tekstu w div1</p>
        <p>Trochę tekstu w div1</p>
        <p>Trochę tekstu w div1</p>

        <div id="div2" style="border: solid red 3px">
        <p>Trochę tekstu w div2</p>
        <p>Trochę tekstu w div2</p>
        </div>
      </div>

    <p>Trochę zewnętrznego tekstu</p>
    <p>Trochę zewnętrznego tekstu</p>

    <button onclick="getAllParaElems();">
     pokaż wszystkie elementy p w dokumencie</button><br />

    <button onclick="div1ParaElems();">
     pokaż wszystkie elementy p w elemencie div1</button><br />

    <button onclick="div2ParaElems();">
     pokaż wszystkie elementy p w elemencie div2</button>

    </body>
    </html>

### Specyfikacja

[DOM Level 2 Core: Document.getElementsByTagName](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C9094)
