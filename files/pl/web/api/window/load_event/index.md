---
title: window.onload
slug: Web/API/Window/load_event
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Strony_wymagające_dopracowania
  - Wszystkie_kategorie
translation_of: Web/API/GlobalEventHandlers/onload
original_slug: Web/API/GlobalEventHandlers/onload
---
{{ ApiRef() }}

### Podsumowanie

Uchwyt zdarzenia dla zdarzenia wczytywania okna ([window](/pl/DOM/window "pl/DOM/window")).

### Składnia

    window.onload = funcRef;

- `funcRef` jest funkcją uchwytu.

### Przykład

    window.onload = function() {
      init();
      doSomethingElse();
    };

    <html>
    <head>

    <title>Test onload</title>

    <script type="text/javascript">

    window.onload = load;

    function load()
    {
     alert("Wykryto zdarzenie load!");
    }
    </script>
    </head>

    <body>
    <p>Zdarzenie load występuje w momencie zakończenia ładowania dokumentu!</p>
    </body>
    </html>

### Uwagi

Zdarzenie load wywoływane jest na końcu procesu ładowania dokumentu. W momencie wystąpienia zdarzenia, DOM zawiera już wszystkie obiekty zawarte w dokumencie oraz zakończone zostało wczytywanie obrazków oraz ramek.

Istnieje także zdarzenie `DOMContentLoaded` (które można zarejestrować za pomocą `addEventListener`) występujące w momencie gdy DOM dla danej strony został zbudowany ale bez czekania na zakończenie ładowania pozostałych zasobów.
