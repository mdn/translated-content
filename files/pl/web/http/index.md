---
title: HTTP
slug: Web/HTTP
tags:
  - HTTP
  - Hipertekst
  - Reference
  - Referencja
  - TCP/IP
  - TopicStub
  - Web
  - l10n:priority
translation_of: Web/HTTP
---
{{HTTPSidebar}}

**_Protokół Przesyłania Danych Hipertekstowych (Hypertext Transfer Protocol, HTTP)_** to protokół [warstwy aplikacji](https://en.wikipedia.org/wiki/Application_Layer), odpowiedzialny za transmisję dokumentów hipermedialnych, jak np. HTML. Został stworzony do komunikacji pomiędzy przeglądarkami, a serwerami webowymi, ale może być używany również w innych celach. HTTP opiera się na klasycznym [modelu klient-serwer](https://en.wikipedia.org/wiki/Client%E2%80%93server_model), gdzie klient inicjuje połączenie poprzez wysłanie żądania, następnie czeka na odpowiedź. HTTP jest [protokołem bezstanowym](https://en.wikipedia.org/wiki/Stateless_protocol), co oznacza, że serwer nie przechowuje żadnych danych (stanów) pomiędzy oboma żądaniami. Mimo, że często opiera się na warstwie TCP/IP, może być używany także na godnej zaufania [warstwie transportowej](http://en.wikipedia.org/wiki/Transport_Layer), tj. protokół, który nie traci po cichu komunikatów, jak ma to miejsce w przypadku UDP. [RUDP](https://en.wikipedia.org/wiki/Reliable_User_Datagram_Protocol), wiarygodna aktualizacja UDP, może stanowić odpowiednią alternatywę.

## Samouczki

Poprzez samouczki i instrukcje ucz się, jak używać HTTP.

- [HTTP - wiadomości ogólne](/pl/docs/Web/HTTP/Overview)
  - : Podstawowe cechy protokołu klient-serwer: co robi i do czego w założeniu służy.
- [Cache HTTP](/pl/docs/Web/HTTP/Caching)
  - : Buforowanie (caching) jest bardzo ważne z punktu widzenia szybkości działania stron WWW. Ten artykuł opisuje różne metody buforowania i jak używać nagłówków HTTP, by ten proces kontrolować.
- [Ciasteczka HTTP](/pl/docs/Web/HTTP/Cookies)
  - : Jak działają ciasteczka (cookies) jest określone w [RFC 6265](http://tools.ietf.org/html/rfc6265). Podczas obsługi żądania HTTP, serwer może wysłać nagłówek HTTP `Set-Cookie` z odpowiedzią. Następnie klient zwraca wartość ciasteczka z każdym żądaniem do tego samego serwera w formie nagłówka żądania `Cookie`. Ciasteczko może być również ustawione na wygasające wraz z nadejściem ustalonej daty lub ograniczone do konkretnej domeny i ścieżki.
- [Cross-Origin Resource Sharing (CORS)](/pl/docs/Web/HTTP/CORS)
  - : **Żądania HTTP między stronami (cross-site)** to żądania HTTP z zasobów pochodzących **z innej domeny**, niż domena zasobu zgłaszającego żądanie. Przykładowo strona HTML z Domeny A (`http://domaina.example/`) żąda otrzymania obrazka z Domeny B (`http://domainb.foo/image.jpg`) poprzez element `img`. Współcześnie strony WWW powszechnie ładują zasoby między stronami, m. in. arkusze stylów CSS, obrazki, skrypty i inne zasoby. CORS pozwala twórcom stron na kontrolowanie jak ich strona WWW zachowuje się w obliczu żądań typu cross-site.

- [Rozwój HTTP](/pl/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : Zwięzły opis zmian pomiędzy wczesnymi wersjami HTTP, a współczesnym HTTP/2.
- [Wskazówki dot. bezpieczeństwa WWW od Mozilli](https://wiki.mozilla.org/Security/Guidelines/Web_Security)
  - : Zbiór wskazówek mających na celu pomoc zespołom operacyjnym w tworzeniu bezpiecznych aplikacji WWW.

- [Komunikaty HTTP](/pl/docs/Web/HTTP/Messages)
  - : Opisuje typy i struktury różnych rodzajów komunikatów HTTP/1.x oraz HTTP/2.
- [Typowa sesja HTTP](/pl/docs/Web/HTTP/Session)
  - : Pokazuje i wyjaśnia przebieg typowej sesji HTTP.
- [Zarządzanie połączeniami w HTTP/1.x](/pl/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : Opisuje trzy modele zarządzania połączeniami, które są dostępne w HTTP/1.x, ich mocne i słabe strony.

## Referencje

Przeszukaj szczegółową dokumentację referencyjną HTTP.

- [Nagłówki HTTP](/pl/docs/Web/HTTP/Headers)
  - : Nagłówki wiadomości HTTP są używane do opisu lub zachowania serweru lub klienta. Customowe, własne nagłówki mogą być dodawane przy zastosowaniu prefiksu `X-`; pozostałe w [rejestrze IANA](http://www.iana.org/assignments/message-headers/perm-headers.html), których oryginalna treść została zdefiniowana w [RFC 4229](http://tools.ietf.org/html/rfc4229). IANA również utrzymuje [rejestr zaproponowanych, nowych nagłówków wiadomości HTTP](http://www.iana.org/assignments/message-headers/prov-headers.html).
- [Metody żądań HTTP](/pl/docs/Web/HTTP/Methods)
  - : Różne operacje, które mogą zostać wykonane z HTTP: {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, i również mniej znane żądania, jak {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("DELETE")}} czy {{HTTPMethod("TRACE")}}.
- [Kody Odpowiedzi Statusu HTTP](/pl/docs/Web/HTTP/Response_codes)
  - : Kody odpowiedzi HTTP wskazują, czy określone żądanie HTTP zakończyło się powodzeniem. Odpowiedzi są grupowane w pięciu klasach: odpowiedzi informacyjne, odpowiedzi powodzenia, przekierowania, błędy po stronie klienta i błędy po stronie serwera.

- [Dyrektywy CSP](/pl/docs/Web/HTTP/Headers/Content-Security-Policy)
  - : Nagłówki odpowiedzi {{HTTPHeader("Content-Security-Policy")}} pozwalają administratorom stron WWW kontrolować jakie zasoby agent użytkownika może ładować na podanej stronie. Poza paroma wyjątkami, wytyczne przeważnie zawierają specyfikację originów serwera i zakończenia skryptów.

## Narzędzia i zasoby

Pomocne narzędzia i zasoby dla lepszego zrozumienia i debugowania HTTP.

- [Firefox Developer Tools](/pl/docs/Tools)
  - : [Monitor sieci](/pl/docs/Tools/Network_Monitor)
- [Mozilla Observatory](https://observatory.mozilla.org/)
  - : Projekt stworzony po to, by pomagać deweloperom, administratorom systemów i specjalistom ds. bezpieczeństwa w bezpiecznej i solidnej konfiguracji ich stron.
- [RedBot](https://redbot.org/)
  - : Narzędzia do sprawdzania Twoich nagłówków związanych z cache'ami.
- [Jak działają przeglądarki](http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/)
  - : Bardzo kompleksowy artykuł dot. wnętrza przeglądarek i przepływu żądań poprzez zastosowanie protokołu HTTP. Każdy tworca stron MUSI to przeczytać.
