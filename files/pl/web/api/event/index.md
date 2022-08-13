---
title: Event
slug: Web/API/Event
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Event
---
{{ ApiRef() }}

### Wprowadzenie

W tym rozdziale opiszemy model zdarzeń DOM Level 2 jaki implementuje Gecko. Opisany zostanie obiekt `event`, a także interfejsy do rejestrowania zdarzeń dla węzłów DOM, uchwyty i obserwatorzy zdarzeń; przedstawione zostanie też kilka dłuższych przykładów pokazujących relacje między różnymi interfejsami.

Dostępny jest też doskonały [diagram](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow), który jasno przedstawia trzy fazy przepływu zdarzeń w DOM.

#### Interfejs DOM event

Interfejs DOM `event` reprezentowany jest przez obiekty `event` przekazywane do uchwytów zdarzeń różnych elementów DOM. Poniższy, prosty przykład pokazuje, jak przekazać i manipulować obiektem `event` w funkcji obsługi zdarzenia.

    function foo(e) {
      //funkcje obsługi zdarzeń - takie jak ta
      //otrzymują referencję do zdarzenia, jakie
      //obsługują (w tym przypadku "e")
      alert(e);
    }
    table_el.onclick = foo;

Powyższy przykład jest skrajnie prosty, przedstawia jednak ważną cechę obsługi zdarzeń w Gecko DOM - obiekty `event` wykorzystywane są zwykle w funkcjach obsługi zdarzeń. Kiedy masz już referencję do obiektu `event`, możesz korzystać z wszystkich metod i własności opisanych w tym rozdziale.

Zob. także [Przykład 5: Propagowanie zdarzeń](pl/Dokumentacja_Gecko_DOM/Przyk%c5%82ady_u%c5%bcycia_DOM) w rozdziale [Przykłady użycia DOM](pl/Dokumentacja_Gecko_DOM/Przyk%c5%82ady_u%c5%bcycia_DOM), by zobaczyć bardziej szczegółowo, jak zdarzenia przechodzą przez DOM.

#### Uchwyty zdarzeń

Oprócz opisanego tutaj obiektu `event`, Gecko DOM dostarcza również metod do rejestrowania obserwatorów zdarzeń (ang._event listener_ ) na węzłach DOM, usuwania zdarzeń z obserwatorów oraz wywoływania zdarzeń z poziomu DOM. Te trzy metody opisano w rozdziale [Elementy w DOM](pl/DOM/element). Razem z [uchwytami zdarzeń](pl/DOM/element#Uchwyty_zdarze.C5.84) elementów HTML i XML stanowią one główny punkt wyjścia dla zdarzeń w DOM.

Możesz także przekazać do funkcji obsługi zdarzenia referencję do obiektu `event` poprzez predefiniowany parametr o nazwie `event`. Jest to bardzo podobne do sposobu, w jaki działa `this`, ale tyczy się obiektów zdarzeń, a nie elementów.

    <html>
    <head>
    <title>Przykład użycia parametru z obiektem event</title>

    <script type="text/javascript">

    function showCoords(evt){
      alert(
        "clientX value: " + evt.clientX + "\n"
        + "clientY value: " + evt.clientY + "\n"
      );
    }

    </script>
    </head>

    <body onmousedown="showCoords(event)">
    <p>Kliknij gdziekolwiek na tej stronie, aby wyświetlić współrzędne położenia myszy.</p>
    </body>
    </html>

Używanie predefiniowanego parametru `event` pozostawia dalej możliwość przekazywania innych parametrów do funkcji obsługującej zdarzenie, jeśli jest taka potrzeba.

    <html>
    <head>
    <title>Przykład użycia parametru z obiektem event wraz z dodatkowymi parametrami</title>

    <script type="text/javascript">

    var par2 = 'hello';
    var par3 = 'world!';

    function showCoords(evt, p2, p3){
      alert(
        "clientX value: " + evt.clientX + "\n"
        + "clientY value: " + evt.clientY + "\n"
        + "p2: " + p2 + "\n"
        + "p3: " + p3 + "\n"
      );
    }

    </script>
    </head>

    <body onmousedown="showCoords(event, par2, par3)">
    <p>Kliknij gdziekolwiek na tej stronie, aby wyświetlić współrzędne położenia myszy.</p>
    </body>
    </html>

### Własności

- [event.altKey](pl/DOM/event.altKey)
  - : Zwraca wartość logiczną wskazującą, czy klawisz `<alt>` był wciśnięty podczas zdarzenia.
- [event.bubbles](pl/DOM/event.bubbles)
  - : Zwraca wartość logiczną wskazującą, czy zdarzenie bąbelkuje przez model dokumentu czy nie.
- [event.button](pl/DOM/event.button)
  - : Zwraca przycisk myszy.
- [event.cancelBubble](pl/DOM/event.cancelBubble)
  - : {{ Deprecated_inline() }} Zwraca wartość logiczną wskazującą, czy bąbelkowanie zdarzenia zostało anulowane czy nie.
- [event.cancelable](pl/DOM/event.cancelable)
  - : Zwraca wartość logiczną wskazującą, czy zdarzenie można anulować.
- [event.charCode](pl/DOM/event.charCode)
  - : Zwraca kod Unicode klawisza znaku, który został wciśnięty podczas zdarzenia [keypress](pl/DOM/element.onkeypress).
- [event.clientX](pl/DOM/event.clientX)
  - : Zwraca poziomą pozycję zdarzenia w obszarze klienta.
- [event.clientY](pl/DOM/event.clientY)
  - : Zwraca pionową pozycję zdarzenia w obszarze klienta.
- [event.ctrlKey](pl/DOM/event.ctrlKey)
  - : Zwraca wartość logiczną wskazującą, czy klawisz `<ctrl>` był wciśnięty podczas zdarzenia.
- [event.currentTarget](pl/DOM/event.currentTarget)
  - : Zwraca referencję do obecnie zarejestrowanego celu zdarzenia.
- [event.detail](pl/DOM/event.detail)
  - : Zwraca szczegółową informację o zdarzeniu zależnie od jego typu.
- [event.eventPhase](pl/DOM/event.eventPhase)
  - : Wskazuje która faza przepływu zdarzenia jest aktualnie przetwarzana.
- [event.isChar](pl/DOM/event.isChar)
  - : Zwraca wartość logiczną oznaczającą, czy w zdarzeniu pojawił się klawisz znaku czy nie.
- [event.keyCode](pl/DOM/event.keyCode)
  - : Zwraca kod Unicode dla klawisza nie będącego znakiem w zdarzeniu keypress lub dowolnego klawisza w każdym innym zdarzeniu związanym z klawiaturą.
- [event.layerX](pl/DOM/event.layerX)
  - : Zwraca poziomą współrzędną miejsca, gdzie wystąpiło zdarzenie, względem bieżącej warstwy.
- [event.layerY](pl/DOM/event.layerY)
  - : Zwraca pionową współrzędną miejsca, gdzie wystąpiło zdarzenie, względem bieżącej warstwy.
- [event.metaKey](pl/DOM/event.metaKey)
  - : Zwraca wartość logiczną wskazującą, czy klawisz `meta` był wciśnięty podczas zdarzenia.
- [event.pageX](pl/DOM/event.pageX)
  - : Zwraca poziomą współrzędną miejsca, gdzie wystąpiło zdarzenie, względem całej strony.
- [event.pageY](pl/DOM/event.pageY)
  - : Zwraca pionową współrzędną miejsca, gdzie wystąpiło zdarzenie, względem całej strony.
- [event.relatedTarget](pl/DOM/event.relatedTarget)
  - : Wskazuje na drugi cel zdarzenia.
- [event.screenX](pl/DOM/event.screenX)
  - : Zwraca poziomą współrzędną miejsca, gdzie wystąpiło zdarzenie, względem ekranu.
- [event.screenY](pl/DOM/event.screenY)
  - : Zwraca pionową współrzędną miejsca, gdzie wystąpiło zdarzenie, względem całego ekranu.
- [event.shiftKey](pl/DOM/event.shiftKey)
  - : Zwraca wartość logiczną wskazującą, czy klawisz `<shift>` był wciśnięty podczas zdarzenia.
- [event.target](pl/DOM/event.target)
  - : Zwraca referencję do elementu, do którego zdarzenie zostało pierwotnie wysłane.
- [event.timeStamp](pl/DOM/event.timeStamp)
  - : Zwraca czas, kiedy o którym zdarzenie zostało utworzone.
- [event.type](pl/DOM/event.type)
  - : Zwraca nazwę zdarzenia.
- [event.view](pl/DOM/event.view)
  - : Wskazuje widok (`AbstractView`), w którym wygenerowane zostało zdarzenie.
- [event.which](pl/DOM/event.which)
  - : Zwraca kod Unicode klawisza w zdarzeniu związanym z klawiaturą, niezależnie od tego, czy klawisz jest znakiem.

### Metody

- [event.initEvent](pl/DOM/event.initEvent)
  - : Metoda używana do zainicjalizowania wartości dla zdarzenia utworzonego przez interfejs `DocumentEvent`.
- [event.initKeyEvent](pl/DOM/event.initKeyEvent)
  - : Inicjalizuje zdarzenie klawiatury. Gecko-specific.
- [event.initMouseEvent](pl/DOM/event.initMouseEvent)
  - : Inicjalizuje zdarzenie myszy po jego utworzeniu.
- [event.initUIEvent](pl/DOM/event.initUIEvent)
  - : Inicjalizuje zdarzenie interfejsu użytkownika po jego utworzeniu.
- [event.preventBubble](pl/DOM/event.preventBubble)
  - : {{ Obsolete_inline() }} Zabezpiecza zdarzenie przed bąbelkowaniem. Ta metoda jest przestarzała ze względu na standard [stopPropagation](pl/DOM/event.stopPropagation) i jest [usunięta w Gecko 1.9](pl/Zmiany_w_Gecko_1.9_wp%c5%82ywaj%c4%85ce_na_wy%c5%9bwietlanie_stron).
- [event.preventCapture](pl/DOM/event.preventCapture)
  - : {{ Obsolete_inline() }} Ta metoda jest przestarzała ze względu na standard [stopPropagation](pl/DOM/event.stopPropagation) i jest [usunięta w Gecko 1.9](pl/Zmiany_w_Gecko_1.9_wp%c5%82ywaj%c4%85ce_na_wy%c5%9bwietlanie_stron).
- [event.preventDefault](pl/DOM/event.preventDefault)
  - : Anuluje zdarzenie (jeśli można je anulować).
- [event.stopPropagation](pl/DOM/event.stopPropagation)
  - : Zatrzymuje dalsze propagowanie bieżącego zdarzenia w DOM.

{{ languages( { "en": "en/DOM/event", "es": "es/DOM/event", "fr": "fr/DOM/event", "ja": "ja/DOM/event" } ) }}
