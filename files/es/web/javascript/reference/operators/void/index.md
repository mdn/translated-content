---
title: void
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

## Resumen

El operador `void` se usa en cualquiera de los siguientes modos:

1. `void (expresion )`
2. `void expresion`

El operador `void` especifica una expresión que se evalúa sin devolver un valor. `expresion` es una expresión JavaScript para evaluar. El paréntesis rodeando la expresión es opcional, pero usarlos es una buena práctica al programar.

Puede usar el operador `void` para especificar una expresión como un enlace de hipertexto. La expresión se evalúa pero no se carga en lugar del documento actual.

El siguiente código crea un enlace de hipertexto que no hace nada cuando el usuario hace click en él. Cuando el usuario hace click en el enlace, void(0) se evalúa como 0, pero eso no tiene ningún efecto en JavaScript.

```html
<a href="javascript:void(0)">Haga click aquí para no hacer nada</a>
```

El siguiente código crea un enlace de hipertexto que envía un formulario cuando el usuario hace click en él.

```html
<a href="javascript:void(document.forms["miFormulario"].submit())">
Haga click aquí para enviar</a>
```
