---
title: Navigator.buildID
slug: Web/API/Navigator/buildID
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Navigator/buildID
---
{{ ApiRef() }}

### Podsumowanie

Zwraca identyfikator kompilacji przeglądarki.

### Składnia

    buildID =
    navigator.buildID;

`buildID` jest identyfikatorem kompilacji aplikacji, zwracanym jako łańcuch znakówi. ID kompilacji jest w formie \<tt>YYYYMMDDHH\</tt> (gdzie: Y - rok, M - miesiąc, D - dzień, H - godzina).

### Przykład

    dump(window.navigator.buildID);
    // wyświetla w konsoli "2006090803"

### Uwaga

Dostępne w [Firefoksie 2](pl/Firefox_2) ([Gecko](pl/Gecko) 1.8.1) i późniejszych. Zaimplementowane w {{ Bug(345993) }}.

### Specyfikacja

Nie jest częścią żadnego publicznego standardu.



{{ languages( { "en": "en/DOM/window\.navigator.buildID", "ja": "ja/DOM/window\.navigator.buildID" } ) }}
