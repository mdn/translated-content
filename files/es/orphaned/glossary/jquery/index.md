---
title: jQuery
slug: orphaned/Glossary/jQuery
tags:
  - Glosario
  - JQuery
  - JavaScript
translation_of: Glossary/jQuery
original_slug: Glossary/jQuery
---
jQuery es una {{Glossary("JavaScript")}} {{Glossary("Library")}} que se enfoca en simplificar la manipulación del {{Glossary("DOM")}}, llamadas {{Glossary("AJAX")}} y manejo de {{Glossary("Event")}}. Es utilizado por desarrolladores JavaScript de manera frecuente.

jQUery usa un formato, `$(selector).action()` para asignar elementos a un evento. Para explicarlo con mayor detalle, `$(selector)` hara que jQuery seleccione los elementos `selector` y los asigne a un evento {{Glossary("API")}} llamado `.action()`.

```js
$(document).ready(function(){
  alert("¡Hola Mundo!");
  $("#blackBox").hide();
});
```

El código anterior es equivalente al siguiente:

```js
window.onload = function() {
  alert( "¡Hola Mundo!" );
  document.getElementById("blackBox").style.display = "none";
};
```

## Descargar jQuery

| **npm** | bower (solo file) | Google CDN |
| --- | --- | --- |
| `npm install jquery` | `bower install https://code.jquery.com/jquery-3.2.1.min.js` | `https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js` |

## Aprende más

### Conocimiento general

- {{Interwiki("wikipedia", "jQuery")}} en Wikipedia
- [Sitio oficial de jQuery](http://jquery.com/)

### Aprende jQuery

- [Curso web en codeacademy.com](https://www.codecademy.com/learn/jquery)

### Información técnica

- [Documentación de referencia de la API](https://api.jquery.com/)[](https://api.jquery.com/)
