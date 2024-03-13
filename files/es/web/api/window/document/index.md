---
title: Window.document
slug: Web/API/Window/document
---

{{APIRef}}

## Resumen

Retorna una referencia al documento contenido en la ventana.

> **Nota:** Firefox 3 altera la seguridad para los documentos entre ventanas, de modo que sólo el dominio desde el cual ha sido cargada una ventana puede acceder al documento. A pesar de que esto rompe el funcionamiento de algunos sitios existentes, es una modificación adoptada por Firefox 3 e Internet Explorer 7, que resulta en una mejora de seguridad.

## Sintaxis

```js
doc = window.document;
```

### Parámetros

- `doc` es una referencia al objeto del [document](/es/docs/DOM/document).

## Example

```html
<!doctype html>
<html>
  <head>
    <title>Hola, Mundo!</title>
  </head>
  <body>
    <script type="text/javascript">
      var doc = window.document;
      console.log(doc.title); // Hola, Mundo!
    </script>
  </body>
</html>
```

## Especificación

- [HTML](http://www.whatwg.org/html/#the-window-object)
