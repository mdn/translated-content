---
title: window.navigator.platform
slug: orphaned/Web/API/NavigatorID/platform
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorID/platform
original_slug: Web/API/NavigatorID/platform
---
{{ ApiRef() }}

### Podsumowanie

Zwraca łańcuch znaków reprezentujący platformę przeglądarki.

### Składnia

    platform =navigator.platform

`platform` jest łańcuchem znaków z jedną z następujących wartości: "Win32", "Linux i686", "MacPPC", "MacIntel" lub inną.

### Przykład

    alert(navigator.platform);

### Uwagi

Jeśli Twój kod nie jest uprzywilejowany (chrome lub przynajmniej kod z uprawnieniem UniversalBrowserRead), może on otrzymać wartość opcji \<tt>general.platform.override\</tt> zamiast prawdziwej platformy.

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.navigator.platform", "ja": "ja/DOM/window\.navigator.platform" } ) }}
