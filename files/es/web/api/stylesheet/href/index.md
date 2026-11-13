---
title: stylesheet.href
slug: Web/API/StyleSheet/href
---

{{ ApiRef() }}

### Resumen

Devuelve la localización de la hoja de estilo.

### Sintaxis

```
uri = stylesheet.href
```

### Parámetros

- `uri` es una cadena que contiene la URI de la hoja de estilo.

### Ejemplo

```
 // en una máquina local:
 <html>
  <head>
   <link rel="StyleSheet" href="example.css" type="text/css" />
   <script>
    function sref() {
     alert(document.styleSheets[0].href);
    }
   </script>
  </head>
  <body>
   <div class="thunder">Thunder</div>
   <button onclick="sref()">ss</button>
  </body>
 </html>
// returns "file:////C:/Windows/Desktop/example.css
```

### Notas

Si la hoja de estilo es un enlace, el valor de este atributo es su localización. Para las hojas de estilo in-line, el valor del atributo es NULL.

### Specification

[href](https://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-href)
