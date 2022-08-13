---
title: document.defaultView
slug: Web/API/Document/defaultView
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/defaultView
---
{{ ApiRef() }}



### Podsumowanie

**document.defaultView** zwraca odnośnik do domyślnego [AbstractView](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-AbstractView) dokumentu, lub `null` jeśli żadny nie jest dostępne

### Składnia

    var docDView = document.defaultView;

Własność tylko do odczytu.

### Uwagi

`document.defaultView` jest częścią interfejsu DOM poziomu 2 [DocumentView](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-DocumentView).

`document.defaultView` jest głównie odnośnikiem do [okna](pl/DOM/window) obiektu dla dokumentu, jednakże nie jest to zdefiniowane w specyfikacji i nie można się na tym opierać we wszystkich środowiskach zwłaszcza, że nie wszystkie przeglądarki to implementują. it would probably be useful to provide concrete examples here

### Specyfikacja

[DOM Level 2 Views: defaultView](http://www.w3.org/TR/DOM-Level-2-Views/views.html#Views-DocumentView-defaultView)

{{ languages( { "en": "en/DOM/document.defaultView" } ) }}
