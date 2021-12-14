---
title: jQuery
slug: Glossary/jQuery
tags:
  - API
  - Bibliothèque
  - Glossaire
  - JavaScript
translation_of: Glossary/jQuery
original_slug: Glossaire/jQuery
---
**jQuery** est une  {{Glossary("Library","bibliothèque")}} {{Glossary("JavaScript")}} qui se concentre sur la simplification de la manipulation de {{Glossary("DOM")}}, les appels d'{{Glossary ("AJAX")}} et la gestion des {{Glossary ("Event","évènements")}}. Elle est fréquemment utilisée par les développeurs JavaScript.

jQuery utilise un format, `$(selector).action()` pour assigner un (ou plusieurs) élément à un évènement. Pour expliquer cela en détail, `$(selector)` appelle jQuery pour sélectionner un élément `selector` et l'affecte à un évènement d'{{Glossary("API")}} appelé `.action()`.

```js
$(document).ready(function(){
  alert("Hello World!");
  $("#blackBox").hide();
});
```

Le code ci-dessus remplit la même fonction que le code suivant :

```js
window.onload = function() {
  alert( "Hello World!" );
  document.getElementById("blackBox").style.display = "none";
};
```

## Télécharger jQuery

| **npm**              | bower (solo file)                                           | Google CDN                                                         |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `npm install jquery` | `bower install https://code.jquery.com/jquery-3.2.1.min.js` | `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js` |

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia", "jQuery")}} sur Wikipedia
- [jQuery Official Website](https://jquery.com/)

### Apprentissage de jQuery

- [Le cours en ligne sur codecademy.com](https://www.codecademy.com/learn/jquery) (en)

### Information technique

- [Documentation de référence de l'API](https://api.jquery.com/) (en)
