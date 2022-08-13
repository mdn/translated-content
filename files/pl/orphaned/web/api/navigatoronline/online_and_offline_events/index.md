---
title: Zdarzenia online i offline
slug: orphaned/Web/API/NavigatorOnLine/Online_and_offline_events
tags:
  - AJAX
  - DOM
  - Programowanie_WWW
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorOnLine/Online_and_offline_events
original_slug: Web/API/NavigatorOnLine/Online_and_offline_events
---
W programie [Firefox 3](pl/Firefox_3_dla_programist%c3%b3w) zaimplementowano obsługę [zdarzeń online i offline](http://www.whatwg.org/specs/web-apps/current-work/#offline) zdefiniowanych w [specyfikacji WHATWG Web Applications 1.0](http://www.whatwg.org/specs/web-apps/current-work/).

### Omówienie

Do stworzenia dobrej aplikacji internetowej działającej w trybie offline konieczne jest istnienie sposobu na sprawdzenie, kiedy aplikacja faktycznie znajduje się w trybie offline. W niektórych przypadkach potrzebna jest także możliwość stwierdzenia, czy aplikacja powróciła do stanu „online”. W praktyce sprowadza się to do dwóch wymagań:

1.  Konieczne jest stwierdzenie, kiedy użytkownik przełącza przeglądarkę w tryb online, aby można było przeprowadzić ponowną synchronizację z serwerem.
2.  Konieczne jest stwierdzenie, kiedy użytkownik przełącza przeglądarkę w tryb offline, aby można było odłożyć wysłanie żądania do serwera na później.

Zdarzenia online i offline pozwalają na uproszczenie powyższych procedur.

W aplikacji internetowej może także być konieczne wymuszenie przechowywania określonych dokumentów w pamięci podręcznej zasobów offline. W tym celu w kodzie sekcji `HEAD` należy wstawić znacznik `LINK` przedstawiony poniżej:

    <link rel="offline-resource" href="mój_zasób">

Przy przetwarzaniu kodu HTML przez program Firefox w wersji 3 lub nowszej dokumenty wymienione w znaczniku zostaną zapisane w specjalnej pamięci podręcznej zasobów offline.

### Interfejs API

#### `navigator.onLine`

[`navigator.onLine`](pl/DOM/window.navigator.onLine) to własność, która zwraca wartość `true` lub `false` (`true` dla trybu online, `false` dla trybu offline). Własność ta jest aktualizowana za każdym razem, gdy użytkownik przełącza przeglądarkę w tryb offline, wybierając odpowiednie polecenie menu (w programie Firefox: Plik -> Pracuj w trybie offline).

Ponadto ta własność powinna być aktualizowana zawsze, gdy w przeglądarce nie można nawiązać połączenia z siecią. Zgodnie ze specyfikacją:

> Atrybut `navigator.onLine` musi zwracać wartość false, jeżeli w programie po kliknięciu odsyłacza przez użytkownika lub po wysłaniu przez skrypt żądania do zdalnej witryny nie można połączyć się z siecią (lub wiadomo, że taka próba nie powiedzie się)...

W programie Firefox 2 ta własność jest aktualizowana przy przełączaniu przeglądarki między trybami online i offline oraz przy utracie lub ponownym nawiązaniu połączenia z siecią (dotyczy systemów Windows i Linux).

Własność istnieje w starszych wersjach przeglądarek Firefox i Internet Explorer (obecna specyfikacja została oparta na tych właśnie wcześniejszych implementacjach), można zatem korzystać z niej już teraz. Automatyczne wykrywanie stanu połączenia sieciowego zostało wprowadzone w programie Firefox 2.

#### Zdarzenia "`online`" i "`offline`"

W programie [Firefox 3](pl/Firefox_3) wprowadzono dwa nowe zdarzenia: "`online`" i "`offline`". Są one wywoływane w elemencie `<body>` każdej otwartej strony, gdy przeglądarka jest przełączana między trybem online i offline. Ponadto zdarzenie bąbelkuje od elementu `document.body`, poprzez element `document`, aż do elementu `window`. Żadnego ze zdarzeń nie można anulować (niemożliwe jest zablokowanie możliwości przełączania przeglądarki między trybami online i offline).

Obserwatory (ang. _event listeners_) tych zdarzeń można zarejestrować na kilka sposobów:

- przy użyciu metody [`addEventListener`](pl/DOM/element.addEventListener) dla elementu `window`, `document` lub `document.body`;
- za pomocą własności `.ononline` lub `.onoffline` dla elementu `document` lub `document.body` przez przypisanie do niej obiektu `Function` języka JavaScript. (**Uwaga:** własności `window.ononline` i `window.onoffline` nie działają ze względu na zgodność z poprzednimi wersjami);
- przez ustawienie atrybutów `ononline="..."` lub `onoffline="..."` znacznika `<body>` w kodzie HTML.

### Przykład

Dostępny jest [prosty przykład zastosowania](https://bugzilla.mozilla.org/attachment.cgi?id=220609), który pozwala na sprawdzenie działania zdarzeń.
XXX When mochitests for this are created, point to those instead and update this example -nickolay

     <!doctype html>
     <html>
     <head>
       <script>
         function updateOnlineStatus(msg) {
           var status = document.getElementById("status");
           var condition = navigator.onLine ? "ONLINE" : "OFFLINE";
           status.setAttribute("class", condition);
           var state = document.getElementById("state");
           state.innerHTML = condition;
           var log = document.getElementById("log");
           log.appendChild(document.createTextNode("Zdarzenie: " + msg + "; stan=" + condition + "\n"));
         }
         function loaded() {
           updateOnlineStatus("load");
           document.body.addEventListener("offline", function () {
             updateOnlineStatus("offline")
           }, false);
           document.body.addEventListener("online", function () {
             updateOnlineStatus("online")
           }, false);
         }
       </script>
       <style>...</style>
     </head>
     <body onload="loaded()">
       <div id="status"><p id="state"></p></div>
       <div id="log"></div>
     </body>
     </html>

### Odsyłacze

- [Sekcja „Zdarzenia online i offline” w specyfikacji WHATWG Web Applications 1.0](http://www.whatwg.org/specs/web-apps/current-work/#offline)
- [Opis błędu dotyczącego implementacji zdarzeń online i offline w programie Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=336359) oraz [kontynuacja dyskusji](https://bugzilla.mozilla.org/show_bug.cgi?id=336682)
- [Prosty przykład zastosowania](https://bugzilla.mozilla.org/attachment.cgi?id=220609)
- [Objaśnienie zdarzeń online i offline](http://ejohn.org/blog/offline-events/)

{{ languages( { "en": "en/Online_and_offline_events", "es": "es/Eventos_online_y_offline", "fr": "fr/\u00c9v\u00e8nements_online_et_offline", "ja": "ja/Online_and_offline_events", "pt": "pt/Eventos_online_e_offline" } ) }}
