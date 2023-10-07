---
title: document.body
slug: Web/API/Document/body
---

{{APIRef("DOM")}}

### Resumen

Devuelve el nodo del `<body>` o el nodo del `<frameset>` del documento.

### Sintaxis

```js
objRef = document.body;
document.body = objRef;
```

### Ejemplo

```js
// en HTML: <body id="oldBodyElement"></body>
alert(document.body.id); // "oldBodyElement"
var aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
```

### Notas

`document.body` es el elemento que contiene el contenido para el documento. En documentos con contenidos `<body>`, devuelven el elemento `<body>`, y en documentos de marco de sistema, esto devuelve el elemento extremo `<frameset>`.

Aunque `body` es programable, colocando un nuevo cuerpo en un documento efectivamente quitará a todos los hijos actuales del elemento existente `<body>`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
