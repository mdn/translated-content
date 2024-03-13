---
title: window.getSelection
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

### Resumen

Devuelve un objeto de selección representando el rango del texto seleccionado por el usuario. NB. this is nothing to do with the DOM selection list object! What the heck is 'selection list object'? -Nickolay

### Sintaxis

```js
selection = window.getSelection();
```

- `selection` es un objeto de [selección](/es/docs/Web/API/Selection).

### Ejemplo

```js
function foo() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // ... Hacer las cosas con el rango ...
}
```

### Notas

En JavaScript, cuando un objeto de selección es pasado a una función que espera una cadena de caracteres como parámetro (como {{ Domxref("window.alert") }} o {{ Domxref("document.write") }}), una representación de texto, del objeto de selección (e.j. el texto seleccionado) es pasado en vez del objeto en sí. Esto hace al objeto de selección parecer una cadena de caracteres (texto), cuando realmente es un objeto con sus propios métodos y propiedades. Específicamente, el valor de retorno de llamar al método [`toString()`](/es/DOM/Selection/toString) del objeto de selección es lo que realmente se pasa como parámetro a la función.

En el ejemplo de arriba, `selObj` es automaticamente "convertido" cuando pasó a [window.alert](/es/DOM/window.alert). Sin embargo, para usar una propiedad [String](/es/JS/String) de JavaScript o un método como [`length`](/es/JS/String.prototype.length) o [`substr`](/es/JS/String.prototype.substr), debe llamar manualmente al método `toString`. I'm treading carefully with the word "convert" here because it could be misinterpreted as a permanent convert - Maian

### Especificación

DOM Nivel 0. No es parte de ninguna especificación.

### Ver también

[Selection](/es/docs/Web/API/Selection), [Range](/es/docs/Web/API/Range)
