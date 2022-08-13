---
title: Bezpieczeństwo w Firefoksie 2
slug: Mozilla/Firefox/Releases/2/Security_changes
tags:
  - Bezpieczeństwo
translation_of: Mozilla/Firefox/Releases/2/Security_changes
original_slug: Bezpieczeństwo_w_Firefoksie_2
---
{{FirefoxSidebar}}



Ten artykuł omawia zmiany dotyczące bezpieczeństwa w Firefoksie 2.

## Słabe algorytmy szyfrowania domyślnie wyłączone

W [Firefoksie 2](pl/Firefox_2) SSLv2 i słabe zestawy szyfrów (takie, których długość klucza jest mniejsza niż 64 bitów) są domyślnie wyłączone, na korzyść SSLv3. Podnosi to poziom bezpieczeństwa przeglądarki.

Zalecanymi metodami szyfrowania są `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` i `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Cześć serwerów odwołuje się do nich jako `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` i `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Jeżeli obsługa SSLv2 musi zostać włączona, można to uzyskać za pomocą ustawienia odpowiednich opcji użytkownika (`security.ssl2.*`) na `true`.

## Nowe cechy

- Firefox 2 obsługuje [Kryptografię krzywych eliptycznych](http://pl.wikipedia.org/wiki/ECC) w TLS. Wsparcie jest obecnie ograniczone jedynie do krzywych długości 256, 384, i 521 (tak, to nie jest pomyłka, 521) bitów.
- Firefox 2 obsługuje rozszerzenie serwera TLS wskazujące nazwy dla ułatwienia bezpiecznych połączeń z serwerami hostującymi wiele wirtualnych serwerów na jednym adresie sieciowym, jak w [RFC 3546](http://tools.ietf.org/html/rfc3546).
- Kiedy Firefox 2 wysyła żądanie [OCSP](http://en.wikipedia.org/wiki/Ocsp) aby sprawdzić certyfikat serwera, używa teraz proxy, które zostało skonfigurowane dla normalnego ruchu HTTP.

## Sprawdzanie, które algorytmy szyfrowania są dostępne

Jak zwykle, możesz dowiedzieć się, które algorytmy szyfrowania są dostępne -- i które zostały włączone lub wyłączone -- otwierając about:config i filtrując ciąg "ssl" lub "tls".



{{ languages( { "en": "en/Security_in_Firefox\_2", "fr": "fr/La_s\u00e9curit\u00e9\_dans_Firefox\_2", "zh-tw": "zh_tw/Firefox\_2\_\u7684\u5b89\u5168\u529f\u80fd" } ) }}
