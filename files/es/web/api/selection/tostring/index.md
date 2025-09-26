---
title: toString
slug: Web/API/Selection/toString
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve una cadena de caracteres (texto), la cual es representada por el objeto de selección, es decir, el texto seleccionado.

### Sintaxis

```
string = sel.toString()
```

- `string` es la representación del texto de selección.

### Parámetros

Ninguno.

### Descripción

Este método devuelve el texto seleccionado.

En [JavaScript](/es/docs/Web/JavaScript), este método es llamado automáticamente cuando una función, a la cual es pasado como parámetro el objeto de selección, requiere una cadena de caracteres (texto):

```
alert(window.getSelection()) // Lo que se llama.
alert(window.getSelection().toString())  // Lo que está siendo efectivamente llamado.
```

### Ver también

- [Object.toString](/es/Core_JavaScript_1.5_Reference/Objects/Object/toString)
