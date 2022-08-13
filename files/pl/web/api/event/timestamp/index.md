---
title: event.timeStamp
slug: Web/API/Event/timeStamp
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Event/timeStamp
---
{{ ApiRef() }}

### Podsumowanie

Zwraca czas (w milisekundach od momentu Epoch), kiedy zdarzenie zostało utworzone.

### Składnia

    number = event.timeStamp

### Przykład

    <html>
    <head>

    <title>Przykład timeStamp</title>

    <script type="text/javascript">
    var curr_time = null;

    function getTime(evt) {
      curr_time = evt.timeStamp;
      document.getElementById("time").firstChild.nodeValue = curr_time;
    }
    </script>
    </head>

    <body onkeypress="getTime(event)">

    <p>Naciśnij jakikolwiek klawisz, aby pobrać aktualny timestamp
    dla zdarzenia onkeypress.</p>
    <p>timeStamp: <span id="time">-</span></p>

    </body>
    </html>



### Uwagi

Ta własność działa tylko wtedy, gdy system obsługuje ją dla danego zdarzenia.

### Specyfikacja

[timestamp](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-timeStamp)

{{ languages( { "en": "en/DOM/event.timeStamp" } ) }}
