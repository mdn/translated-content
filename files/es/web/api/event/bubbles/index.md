---
title: event.bubbles
slug: Web/API/Event/bubbles
---

{{ ApiRef("DOM") }}

Indica si el evento determinado _se propaga_ (burbujea) a través del DOM o no. Esta propagación se refiere a si el evento viaja desde el elemento donde se originó hasta los elementos padres en orden de anidamiento.

## Sintaxis

```
event.bubbles
```

Retorna un valor Booleano que es `true` si el evento se propaga en el DOM.

## Ejemplo

```
var bool = event.bubbles;
```

`bool` tiene el valor `true` o `false`, dependiendo de si el evento puede ser burbuja o no.

## Notas

Sólo ciertos eventos pueden ser burbuja. Los eventos que pueden ser burbuja tienen esta propiedad con el valor `true`. Podemos usar esta propiedad para comprobar si un elemento puede ser burbuja o no.

### Ejemplo

```
 function goInput(e) {
  // comprueba si es burbuja y
  if (!e.bubbles) {
     // entrega el evento si no lo es
     passItOn(e);
  }
  // está siendo propagado
  doOutput(e)
}
```
