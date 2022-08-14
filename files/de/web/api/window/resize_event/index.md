---
title: GlobalEventHandlers.onresize
slug: Web/API/Window/resize_event
tags:
  - API
  - DOM
  - Property
translation_of: Web/API/GlobalEventHandlers/onresize
original_slug: Web/API/GlobalEventHandlers/onresize
---
{{ ApiRef() }}

Die **GlobalEventHandlers.onresize** Property enthält einen {{event("Event_handlers", "event handler")}}, der ausgelöst wird, sobald ein {{event("resize")}}-Event empfangen wird.

## Syntax

    window.onresize = funcRef;

### Parameter

- `funcRef` ist eine Referenz auf eine Funktion.

## Beispiel

    window.onresize = doFunc;

<!---->

    <html>
    <head>

    <title>onresize Test</title>

    </head>

    <body>
    <p>Verändere die Größe des Browser Fensters, um den resize-Event auszulösen.</p>

    <p>Window height: <span id="height"></span></p>
    <p>Window width: <span id="width"></span></p>

    <script type="text/javascript">
      var heightOutput = document.querySelector('#height');
      var widthOutput = document.querySelector('#width');

      function resize() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
      }

      window.onresize = resize;
    </script>
    </body>
    </html>

## Anmerkung

Das resize-Event wird ausgelöst nachdem die Größe des Fensters verändert wurde.

## Spezifikation

{{Specifications}}
