---
title: window.defaultStatus
slug: Web/API/Window/defaultStatus
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Window/defaultStatus
---
{{ ApiRef() }}

### Podsumowanie

Pobiera/ustawia tekst paska stanu dla danego okna.

### Składnia

    sMsg = window.defaultStatus
    window.defaultStatus =sMsg

### Parametry

- `sMsg` jest łańcuchem znaków zawierającym tekst, który ma zostać wyświetlony domyślnie na pasku stanu.

### Przykład

    <html>
     <body onload="window.defaultStatus='hello!';"/>
      <button onclick="window.confirm('Czy jesteś pewien, że chcesz wyjść?');">confirm</button>
     </body>
    </htm>

### Uwagi

Aby ustawić zawartość paska stanu, gdy okno zostało już otwarte, możemy użyć [`window.status`](pl/Dokumentacja_Gecko_DOM/window/status).

### Specyfikacja

DOM Level 0. Nie jest częścią specyfikacji.



{{ languages( { "en": "en/DOM/window\.defaultStatus", "ja": "ja/DOM/window\.defaultStatus" } ) }}
