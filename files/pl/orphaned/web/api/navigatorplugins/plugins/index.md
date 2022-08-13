---
title: NavigatorPlugins.plugins
slug: orphaned/Web/API/NavigatorPlugins/plugins
tags:
  - DOM
  - DOM_0
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/NavigatorPlugins/plugins
original_slug: Web/API/NavigatorPlugins/plugins
---
{{ ApiRef() }}

### Podsumowanie

Zwraca obiekt [`PluginArray`](https://developer.mozilla.org/pl/docs/Web/API/PluginArray) będący listą wszystkich wtyczek zainstalowanych w aplikacji.

### Składnia

    plugins = navigator.plugins;

`plugins` jest tabelą `PluginArray` zawierającą obiekty [`Plugin`](https://developer.mozilla.org/pl/docs/Web/API/Plugin) reprezentujące zainstalowane wtyczki.

Zwrócona wartość nie jest jest tablicą JavaScript, ale posiada własność `length` i obsługuje dostęp do poszczególnych elementów za pomocą notacji nawiasowej (`plugins{{ mediawiki.external(2) }}`) jak również poprzez metody `item(index )` i `namedItem("name" )`.

### Przykład

Poniższy przykład wyświetla wewnątrz zaawansowanego dokumentu informacje o zainstalowanych wtyczkach. Zauważ własności dostępne w obiekcie Plugin: name, filename i description.

    <script type="text/javascript">
       var L = navigator.plugins.length;
       document.write(L.toString().bold() + " Plugin(s)".bold());
       document.write("<br>");
       document.write("Nazwa wtyczki | Nazwa pliku | Opis".bold());
       document.write("<br>");
       for(var i=0; i<L; i++) {
         document.write(navigator.plugins[i].name);
         document.write(" | ");
         document.write(navigator.plugins[i].filename);
         document.write(" | ");
         document.write(navigator.plugins[i].description);
         document.write("<br>");
       }
    </script>

### Uwagi

Obiekt [`Plugin`](https://developer.mozilla.org/pl/docs/Web/API/Plugin) wyświetla skromny interfejs w celu uzyskania informacji o różnych wtyczkach zainstalowanych w przeglądarce. Lista wtyczek jest również dostępna poprzez wprowadzenie <kbd>about:plugins</kbd> w pasku adresu.

### Specyfikacja

{{ DOM0() }}



{{ languages( { "en": "en/DOM/window\.navigator.plugins", "ja": "ja/DOM/window\.navigator.plugins" } ) }}
