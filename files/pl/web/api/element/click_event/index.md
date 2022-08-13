---
title: element.onclick
slug: Web/API/Element/click_event
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/GlobalEventHandlers/onclick
original_slug: Web/API/GlobalEventHandlers/onclick
---
{{ ApiRef() }}

### Podsumowanie

Właściwość **onclick** zwraca kod obsługi zdarzenia _onClick_ w bieżącym elemencie.

### Składnia

    element.onclick = refDoFunkcji;

gdzie _refDoFunkcji_ to nazwa funkcji zadeklarowanej gdzie indziej bądź _wyrażenie funkcyjne_. Zob. [Funkcje](/pl/Dokumentacja_języka_JavaScript_1.5/Funkcje). - tego rodzialu jeszcze nie ma, a pod nazwa Funkcje jest cos innego

### Przykład

    <html>

    <head>
    <title>przykład zdarzenia onclick</title>

    <script type="text/javascript">

    function initElement()
     {
     var p = document.getElementById("foo");

     // Uwaga: ani showAlert();, ani showAlert(param); tu NIE zadziałają
     // potrzebna jest referencja do funkcji, a nie wywołanie funkcji
     p.onclick = showAlert;
     };

    function showAlert()
     {
     alert("wykryto zdarzenie onclick!")
     }
    </script>

    <style type="text/css">
    <!--
    #foo {
    border: solid blue 2px;
    }
    -->
    </style>
    </head>

    <body onload="initElement()";>
    <span id="foo">Mój Element</span>
    <p>Kliknij na powyższy element.</p>
    </body>
    </html>

Można również użyć funkcji bezimiennej jak poniżej:

    p.onclick = function() { alert("moot!"); };

Not going to confuse poor readers with this. You could also use a the Function constructor: \<pre> p.onclick = Function( "alert('moot!')" ); \</pre>

### Uwagi

Zdarzenie _click_ jest wywoływane, kiedy użytkownik kliknie na element. Zdarzenie to występuje po _mousedown_ i _mouseup_.

Tylko jedna funkcja obsługi zdarzenia może zostać przypisana za jednym razem za pomocą tej właściwości. Możesz zamiast niej użyć metody [addEventListener](/pl/DOM/element.addEventListener "pl/DOM/element.addEventListener") - jest bardziej elastyczna i stanowi część specyfikacji DOM Events.

### Specyfikacja

{{ DOM0() }}

{{ languages( { "en": "en/DOM/element.onclick", "fr": "fr/DOM/element.onclick" } ) }}
