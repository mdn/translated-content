---
title: window.navigator.appVersion
slug: orphaned/Web/API/NavigatorID/appVersion
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorID/appVersion
original_slug: Web/API/NavigatorID/appVersion
---
{{ ApiRef() }}

### Podsumowanie

Zwraca wersję przeglądarki jako łańcuch znaków.

### Składnia

    ver = window.navigator.appVersion

### Parametry

- `ver` jest numerem wersji przeglądarki, zwracanym jako łańcuch znaków.

### Przykład

    if ( navigator.appVersion.charAt(0) == "5" ) {
        // prawdopodobnie jest to piąta wersja przeglądarki
     }

### Uwagi

Własność window\.navigator.userAgent również zawiera numer wersji przeglądarki (przykładowo: "Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1"), lecz powinniśmy mieć świadomość jak łatwo jest zmienić ciąg user-agent i "naśladować" inne przeglądarki, platformy lub pośredników użytkownika oraz jak bezmyślni są sami producenci przeglądarek w ustawianiu tej wartości. Własności window\.navigator.appVersion i window\.navigator.userAgent są dość często stosowane w kodzie "szpiegującym przeglądarki": skryptach, które próbują dowiedzieć się jakiej używasz przeglądarki i wyświetlić stosowną do niej stronę.

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.navigator.appVersion", "ja": "ja/DOM/window\.navigator.appVersion" } ) }}
