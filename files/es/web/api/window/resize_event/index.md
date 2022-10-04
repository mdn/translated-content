---
title: GlobalEventHandlers.onresize
slug: Web/API/Window/resize_event
tags:
  - API
  - DOM
  - Propiedad
translation_of: Web/API/GlobalEventHandlers/onresize
original_slug: Web/API/GlobalEventHandlers/onresize
---
{{ ApiRef() }}

La propiedad **GlobalEventHandlers.onresize** contiene un {{event("Event_handlers", "event handler")}} desencadenado cuando un evento {{event("resize")}} es recibido.

## Sintaxis

```js
window.onresize = funcRef;
```

### Parametros

- `funcRef` es una referencia a una función.

## Ejemplo

```js
window.onresize = doFunc;
```

```html
<html>
<head>

<title>onresize test</title>

<script type="text/javascript">

window.onresize = resize;

function resize()
{
 alert("resize event detected!");
}
</script>
</head>

<body>
<p>Resize the browser window to fire the resize event.</p>
</body>
</html>
```

## Notas

El evento **resize** es activado después de que la ventana ha sido redimensionada.

## Especificación

| Especificación                                                                                   | Status                           | Comentario |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG','webappapis.html#handler-onresize','onresize')}} | {{Spec2('HTML WHATWG')}} |            |
