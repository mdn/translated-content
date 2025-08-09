---
title: Stylesheet.ownerNode
slug: Web/API/StyleSheet/ownerNode
---

{{ ApiRef() }}

### Resumen

**ownerNode** devuelve el nodo que asocia la hoja de estilo con el documento.

### Sintaxis

```
objRef = stylesheet.ownerNode
```

### Ejemplo

```
<html>
 <head>
  <link rel="StyleSheet" href="example.css" type="text/css" />
  <script>
   function stilo() {
    alert(document.styleSheets[0].ownerNode);
   }
  </script>
 </head>
 <body>
```

Thunder

```
  <button onclick="stilo()">ss</button>
 </body>
</html>
// displays "object HTMLLinkElement"
```

### Notas

Para el HTML, **ownerNode** correspondería a un elemento [LINK](/es/LINK) o [STYLE](/es/docs/Web/API/HTMLElement/style). Para XML, serían las instrucciones del proceso de enlace. Para las hojas de estilo que están incluidas en otras hojas de estilo, este valor es NULL.

### Especificación

DOM Level 2 Styles - STYLESHEET
