---
title: element.addEventListener
slug: Web/API/EventTarget/addEventListener
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/EventTarget/addEventListener
original_slug: Web/API/Element/addEventListener
---
{{ ApiRef() }}

### Podsumowanie

Metoda `addEventListener` pozwala zarejestrować obserwatora zdarzeń dla określonego typu zdarzenia na elemencie.

### Składnia

    target.addEventListener(type, listener, useCapture);

- type
  - : Łańcuch przedstawiający typ zdarzenia do nasłuchu.Need a link here
- listener
  - : Obiekt, który otrzymuje zawiadomienie, gdy nastąpi zdarzenie określonego typu. Musi być zaimplementowanym obiektem interfejsu [`EventListener`](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener) lub pojedynczą [funkcją](/pl/Przewodnik_po_języku_JavaScript_1.5#Funkcje "pl/Przewodnik_po_języku_JavaScript_1.5#Funkcje") JavaScript.
- useCapture
  - : Jeśli zostanie ustawione na `true`, `useCapture` wskazuje, że użytkownik chce przechwytywać zdarzenia. Po rozpoczęciu przechwytywania, wszystkie zdarzenia typu `type` będą przekazywane do naszego `listener`'a zanim zostaną wysłane do innych obiektów nasłuchujących (`EventTarget`) znajdujących się poniżej w drzewie DOM. Zdarzenia, które propagują w górę drzewa nie uruchamiają systemu nasłuchującego (`listener`) ustawionego na przechwytywanie.

Dla uzyskania szczegółowego objaśnienia zobacz [DOM Level 3 Events](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow).

### Przykład

     <html>
     <head>
       <title>Przykład zdarzenia DOM</title>
       <style type="text/css">
         #t { border: 1px solid red }
         #t1 { background-color: pink; }
       </style>
       <script type="text/javascript">

       // Funkcja zmieniająca zawartość komórki tabeli t2
       function modifyText() {
         var t2 = document.getElementById("t2");
         t2.firstChild.nodeValue = "Trzy";
       }

       // Funkcja dodająca obserwatora zdarzeń dla tabeli t
       function load() {
         var el = document.getElementById("t");
         el.addEventListener("click", modifyText, false);
       }

       </script>
     </head>
     <body onload="load();">
     <table id="t">
       <tr><td id="t1">Jeden</td></tr>
       <tr><td id="t2">Dwa</td></tr>
     </table>
     </body>
     </html>

W powyższym przykładzie, funkcja `modifyText()` została zarejestrowana za pomocą `addEventListener()` do obsługi zdarzenia typu `click` na tabeli `t`. Kliknięcie w dowolnym miejscu tej tabeli rozpocznie propagowanie zdarzenia i wywoła funkcję `modifyText()`.

### Uwagi

#### Po co używać `addEventListener`?

`addEventListener` daje możliwość zarejestrowania obsługi zdarzenia według specyfikacji W3C DOM. Korzyści są następujące:

- Pozwala na dodanie więcej niż jednego obiektu obsługującego zdarzenie. Jest to szczególnie użyteczne przy bibliotekach [DHTML](/pl/DHTML "pl/DHTML") czy [rozszerzeniach Mozilli](/pl/Rozszerzenia "pl/Rozszerzenia"), które pracują, gdy uruchomione są inne biblioteki i rozszerzenia,
- Daje większą kontrolę nad etapem aktywacji obiektu nasłuchującego `listener` (przechwytywanie vs. propagowanie),
- Działa dla każdego elementu z DOM, a nie tylko dla elementów HTML.

Alternatywne, starsze sposoby rejestracji zdarzeń są [opisane poniżej](#Starsze_sposoby_do.C5.82.C4.85czania_zdarze.C5.84).

#### Dodawanie nasłuchu podczas obsługi zdarzenia

Jeśli podczas obsługi zdarzenia zostanie dodany nowy obiekt nasłuchujący to zdarzenie, nie zostanie on uruchomiony dla tego zdarzenia. Może zostać wywołany podczas dalszego etapu przepływu zdarzeń(`Event flow`), np. w fazie propagowania zdarzenia w górę drzewa DOM.

#### Identyczne obiekty nasłuchujące

Jeśli kilka identycznych obiektów nasłuchujących zostanie zarejestrowanych dla tego samego zdarzenia (`EventTarget`) z tymi samymi parametrami to duplikaty są ignorowane. Obiekt nasłuchujący nie będzie wywołany więcej niż jeden raz. Powielone powiązania nie muszą być usuwane ręcznie za pomocą funkcji [`removeEventListener`](/pl/DOM/element.removeEventListener "pl/DOM/element.removeEventListener"), ponieważ są one usuwane automatycznie.

#### Wartość `this`

Doczepianie akcji używając `addEventListener()` zmienia wartość `this`—zauważ, że wartość `this` ijest przekazywana funkcji przez zdarzenie.

W powyższym przykładzie, wartość `this` wewnątrz `modifyText()` gdy zostanie wywołana ze zdarzenia onclick event jest odwołaniem do tabeli 't'. Jeśli obsługa zdarzenia onclick jest dodana w źródle HTML:

    <table id="t" onclick="modifyText();">
      ...
    </table>

to wartość `this` wewnątrz funkcji `modifyText()` wywołanej z poziomu zdarzenia onclick będzie odwołaniem od obiektu globalnego(window).

#### Internet Explorer

W IE 8 i niższych należy użyć `attachEvent` zamiast standardowego `addEventListener`. By wspierać IE, powyższy przykład może zostać zmodyfikowany do:

    if (el.addEventListener){
      el.addEventListener('click', modifyText, false);
    } else if (el.attachEvent){
      el.attachEvent('onclick', modifyText);
    }

#### Starsze sposoby dołączania zdarzeń

`addEventListener()` zostało wprowadzone wraz ze specyfikacją DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events). Wcześniej, zdarzenia były dołączone jak pokazano poniżej:

    // Using a function reference—note lack of '()'
    el.onclick = modifyText;

    // Używając deklaracji funkcji
    element.onclick = function(){
                        // ... logika funkcji ...
                      };

Ta metoda zastępuje istniejącą obsługę zdarzenia `onclick` na elemencie jeśli jest jakakolwiek. Podobnie do innych zdarzeń 'on' takich jak `onblur`, `onkeypress`, i tak dalej.

Ponieważ była to istotna część DOM 0, ta metoda jest bardzo szeroko wspierana i nie wymaga specjalnych kodów do różnych przeglądarek; stąd też jest to normalnie używana do dynamicznego zaczepienia obsługi zdarzenia jeśli nie potrzeba dodatkowych możliwości  `addEventListener()`.

### Specyfikacja

[DOM Level 2 Events: addEventListener](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget-addEventListener)

{{ languages( { "en": "en/DOM/element.addEventListener", "fr": "fr/DOM/element.addEventListener", "ja": "ja/DOM/element.addEventListener" } ) }}
