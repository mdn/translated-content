---
title: window.closed
slug: Web/API/Window/closed
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/closed
---
{{ ApiRef() }}

### Podsumowanie

Ta własność oznacza czy dane okno jest zamknięte lub nie.

### Składnia

    var isClosed = windowRef.closed;

Ta własność jest tylko do odczytu.

### Zwracane wartości

- `isClosed`
  - : Wartość logiczna. Możliwe wartości:

- `true`: Okno zostało zamknięte.
- `false`: Okno jest otwarte.

### Przykłady

#### Zmiana adresu URL okna pierwotnego z okna otworzonego

Ten przykład demonstruje w jaki sposób okno otworzone może zmienić adres URL okna, które je otwarło. Przed próbą zmiany adresu URL, sprawdza czy obecne okno posiada okno-rodzica stosując własność [`window.opener`](pl/DOM/window.opener) oraz czy nie zostało ono zamknięte.

    // Sprawdza czy okno otwierające istnieje i nie zostało zamknięte
    if (window.opener && !window.opener.closed) {
      window.opener.location.href = "http://www.mozilla.org";
    }

Zauważ, że okno otwierane ma dostęp tylko do okna, które je otworzyło.

#### Odświeżanie uprzednio otwartego okna

W tym przykładzie funkcja `refreshPopupWindow()` wywołuje metodę `reload` obiektu `location` otwartego okna, by odświeżyć jego dane. Jeżeli okno nie zostało jeszcze otwarte, bądź użytkownik zamknął je, zostaje utworzone nowe okno.

    var popupWindow = null;

    function refreshPopupWindow() {
      if (popupWindow && !popupWindow.closed) {
        // popupWindow jest otwarte, przeładujmy je
        popupWindow.location.reload(true);
      } else {
        // Otwieramy nowe okno
        popupWindow = window.open("popup.html","dataWindow");
      }
    }

### Specyfikacja

DOM Level 0. `window.closed` nie jest częścią żadnej specyfikacji W3C, ani technicznej rekomendacji.

### Dodatkowe źródła

[MSDN window.closed](http://msdn.microsoft.com/library/default.asp?url=/workshop/author/dhtml/reference/properties/closed.asp)



{{ languages( { "en": "en/DOM/window\.closed", "fr": "fr/DOM/window\.closed", "ja": "ja/DOM/window\.closed" } ) }}
