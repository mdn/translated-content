---
title: window.dump
slug: Web/API/Window/dump
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/dump
---
{{ ApiRef() }}

### Podsumowanie

Wypisuje wiadomość w konsoli.

### Składnia

    dump(wiadomość);

- `wiadomość` to ciąg znaków do wypisania.

### Uwagi

`dump` jest często używany do debugowania JavaScriptu. W uprzywilejowanym kodzie można użyć także [Components.utils.reportError](pl/Components.utils.reportError) oraz [nsIConsoleService](pl/NsIConsoleService) do zapisu w [konsoli błędów](pl/Konsola_b%c5%82%c4%99d%c3%b3w).

W [Gecko](pl/Gecko) `dump` jest domyślnie zablokowane - jego użycie nic nie powoduje, nie wywołuje też żadnego błędu. Aby zobaczyć wyjście metody `dump`, musisz włączyć ją, zmieniając preferencję `browser.dom.window.dump.enabled` na `true`. Możesz to zrobić za pomocą [about:config](http://kb.mozillazine.org/About:config) lub [pliku user.js](http://kb.mozillazine.org/User.js_file)

Żeby cokolwiek zobaczyć, będziesz potrzebował konsoli. Jeśli jeszcze jej nie masz, zamknięcie programu i wywołanie z parametrem \<tt>-console\</tt> w linii poleceń powinno otworzyć konsolę.

`dump` jest też dostępny dla komponentów XPCOM implementowanych w JavaScript, mimo że w ich kontekście [window](pl/DOM/window) nie jest obiektem globalnym.

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.dump", "fr": "fr/DOM/window\.dump", "ja": "ja/DOM/window\.dump" } ) }}
