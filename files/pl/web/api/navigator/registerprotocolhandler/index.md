---
title: Navigator.registerProtocolHandler
slug: Web/API/Navigator/registerProtocolHandler
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Firefox 3
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Navigator/registerProtocolHandler
---
{{ ApiRef() }}

### Podsumowanie

Umożliwia zarejestrowanie witryny internetowej jako mechanizmu obsługi danego protokołu.

### Składnia

    window.navigator.registerProtocolHandler(protokół,
    uri,
    nazwa);

- `protokół` to protokół, który dana witryna ma obsługiwać, określony jako łańcuch znaków.
- `uri` to identyfikator URI witryny, określony jako łańcuch znaków. Możliwe jest użycie zmiennej "%s" w celu określenia, w którym miejscu powinien zostać wstawiony identyfikator URI obsługiwanego dokumentu (znaki specjalne w ciągu identyfikatora muszą być zamienione na sekwencje sterujące —
  _escape sequences_
  ).
- `nazwa` to nazwa funkcji obsługi wyświetlana użytkownikowi, określona jako łańcuch znaków.

### Przykład

Poniżej podano sposób rejestracji mechanizmu obsługi protokołu
_mailto_
przez przykładową aplikację internetową znajdującą się pod adresem http\://www\.example.com:

    navigator.registerProtocolHandler("mailto",
                                     "https://www.example.com/?uri=%s",
                                     "Poczta internetowa");

W powyższym kodzie tworzona jest funkcja obsługi odnośników
_mailto_
, która powoduje przejście do przykładowej strony. Adres e-mail określony w odnośniku jest wstawiany do adresu URL.

### Specyfikacja

Określone w specyfikacji WHATWG [Web Applications 1.0, wersja robocza](http://whatwg.org/specs/web-apps/current-work/#custom-handlers).

### Zobacz także

- [Obsługi protokołów przez aplikacje WWW](pl/Obs%c5%82ugi_protoko%c5%82%c3%b3w_przez_aplikacje_WWW)









{{ languages( { "en": "en/DOM/window\.navigator.registerProtocolHandler", "es": "es/DOM/window\.navigator.registerProtocolHandler", "fr": "fr/DOM/window\.navigator.registerProtocolHandler", "ja": "ja/DOM/window\.navigator.registerProtocolHandler", "ko": "ko/DOM/window\.navigator.registerProtocolHandler" } ) }}
