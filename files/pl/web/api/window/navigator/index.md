---
title: window.navigator
slug: Web/API/Window/navigator
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/Window/navigator
---
{{ ApiRef() }}

### Podsumowanie

Zwraca odwołanie do obiektu navigator, który może być zapytany o informację na temat aplikacji uruchamiającej skrypt.

### Przykład

    alert("Używasz " + navigator.appName);

### Własności

- [navigator.appCodeName](pl/DOM/window.navigator.appCodeName)
  - : Zwraca wewnętrzną nazwę "kodową" aktualnej przeglądarki.
- [navigator.appName](pl/DOM/window.navigator.appName)
  - : Zwraca oficjalną nazwę przeglądarki.
- [navigator.appVersion](pl/DOM/window.navigator.appVersion)
  - : Zwraca wersję przeglądarki jako łańcuch znaków.
- [navigator.buildID](pl/DOM/window.navigator.buildID)
  - : Zwraca identyfikator kompilacji przeglądarki (np. "2006090803").
- [navigator.cookieEnabled](pl/DOM/window.navigator.cookieEnabled)
  - : Zwraca wartość logiczną wskazującą czy obsługa ciasteczek jest włączona, czy nie.
- [navigator.language](pl/DOM/window.navigator.language)
  - : Zwraca łańcuch znaków reprezentujący wersję językową przeglądarki.
- [navigator.mimeTypes](pl/DOM/window.navigator.mimeTypes)
  - : Zwraca listę typów MIME obsługiwanych przez przeglądarkę.
- [navigator.onLine](pl/DOM/window.navigator.onLine)
  - : Zwraca wartość logiczną wskazującą czy przeglądarka jest w trybie online.
- [navigator.oscpu](pl/DOM/window.navigator.oscpu)
  - : Zwraca łańcuch znaków reprezentujący bieżący system operacyjny.
- [navigator.platform](pl/DOM/window.navigator.platform)
  - : Zwraca łańcuch znaków reprezentujący platformę przeglądarki.
- [navigator.plugins](pl/DOM/window.navigator.plugins)
  - : Zwraca tablicę z zainstalowanymi wtyczkami przeglądarki.
- [navigator.product](pl/DOM/window.navigator.product)
  - : Zwraca nazwę produktu bieżącej przeglądarki (np. "Gecko")
- [navigator.productSub](pl/DOM/window.navigator.productSub)
  - : Zwraca numer kompilacji bieżącej przeglądarki (np. "20060909").
- [navigator.securityPolicy](pl/DOM/window.navigator.securityPolicy)
  - : Returns an empty string. In Netscape 4.7x, returns "US & CA domestic policy" or "Export policy".
- [navigator.userAgent](pl/DOM/window.navigator.userAgent)
  - : Returns the user agent string for the current browser.
- [navigator.vendor](pl/DOM/window.navigator.vendor)
  - : Returns the vendor name of the current browser (e.g. "Netscape6")
- [navigator.vendorSub](pl/DOM/window.navigator.vendorSub)
  - : Returns the vendor version number (e.g. "6.1")

### Metody

- [navigator.javaEnabled](pl/DOM/window.navigator.javaEnabled)
  - : Określa czy w przeglądarce jest włączona obsługa Javy.
- [navigator.taintEnabled](pl/DOM/window.navigator.taintEnabled) {{ Obsolete_inline() }}
  - : Returns false. JavaScript taint/untaint functions removed in JavaScript 1.2[](http://devedge-temp.mozilla.org/library/manuals/2000/javascript/1.3/reference/nav.html#1194117)
- [navigator.preference](pl/DOM/window.navigator.preference)
  - : Sets a user preference. This method is [only available to privileged code](http://www.faqts.com/knowledge_base/view.phtml/aid/1608/fid/125/lang/en), and you should use XPCOM [API preferencji](pl/API_preferencji) instead.
- [navigator.registerContentHandler](pl/DOM/window.navigator.registerContentHandler)
  - : Pozwala stronom na zarejestrowanie się jako możliwe serwisy obsługujące dla zawartości konkretnego typu MIME.
- [navigator.registerProtocolHandler](pl/DOM/window.navigator.registerProtocolHandler)
  - : Pozwala stronom na zarejestrowanie się jako możliwe serwisy obsługujące dany protokół.

### Zobacz także

[DOM Client Object Cross-Reference:navigator](pl/DOM_Client_Object_Cross-Reference/navigator)

### Specyfikacja
