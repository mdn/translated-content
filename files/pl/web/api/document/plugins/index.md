---
title: document.plugins
slug: Web/API/Document/plugins
tags:
  - DOM
  - Dokumentacja_Gecko_DOM
  - Gecko
  - Wszystkie_kategorie
translation_of: Web/API/Document/plugins
---
{{ ApiRef() }}

### Podsumowanie

Zwraca listę aktualnie zainstalowanych wtyczek.

### Składnia

    obiektPluginArray = document.plugins

### Przykład

Poniższy przykład wyświetla informację o zainstalowanych wtyczkach dla dokumentu wysokiego poziomu. Zwróć uwagę na właściwości obiektu Plugin: **length** (dla tablicy wtyczek), **name**, **filename** i **description**.

     <script TYPE="text/javascript">
      <!--
       var L = navigator.plugins.length
       document.write( L );
       document.write("Plugins".bold());
       document.write("<BR>");
       document.write("Name | Filename | description".bold());
       document.write("<BR>");
       for(i=0; i<L; i++){
         document.write(navigator.plugins[i].name);
         document.write(" | ".bold());
         document.write(navigator.plugins[i].filename);
         document.write(" | ".bold());
         document.write(navigator.plugins[i].description);
         document.write("<BR>");
       }
      //-->
     </script>

### Specyfikacja

DOM Level 0 - brak w specyfikacji.

{{ languages( { "en": "en/DOM/document.plugins" } ) }}
