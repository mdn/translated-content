---
title: document.createTextNode
slug: Web/API/Document/createTextNode
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/createTextNode
---
{{ ApiRef() }}

### Podsumowanie

Tworzy nowy węzeł tekstowy.

### Składnia

    var tekst = document.createTextNode(tresc)

### Parametry

- `tekst` jest węzłem tekstowym
- `treść` jest ciągiem zawierającym dane do umieszczenia w węźle tekstowym.

### Przykład

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <title>createTextNode - przyklad</title>
    <script>
    function dodajWezelTekstowy(tekst) {
      var nowytekst = document.createTextNode(tekst),
          p1 = document.getElementById("p1");

      p1.appendChild(nowytekst);
    }
    </script>
    </head>

    <body>
      <button onclick="dodajWezelTekstowy('TAK! ');">TAK!</button>
      <button onclick="dodajWezelTekstowy('NIE! ');">NIE!</button>
      <button onclick="dodajWezelTekstowy('JASNE! ');">JASNE!</button>

      <hr />

      <p id="p1">Pierwsza linia paragrafu.</p>
    </body>
    </html>

### Specyfikacja

[createTextNode](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1975348127)



{{ languages( { "en": "en/DOM/document.createTextNode", "fr": "fr/DOM/document.createTextNode", "ko": "ko/DOM/document.createTextNode" } ) }}
