---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

## Mensage

```
TypeError: argument is not an Object and is not null (Edge)
TypeError: Object.create necesita al menos 1 argumento, pero solo only 0 fueron aprovadas.
TypeError: Object.setPrototypeOf necesita al menos 2 argumentos, pero solo 0 fueron aprovados
TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué fué mal?

Hay un error con que una funcion es llamada. Más argumentos necesitan ser dados.

## Ejemplos

El método {{jsxref("Object.create()")}} necesita al menos un argumento y el método {{jsxref("Object.setPrototypeOf()")}} necesita al menos 2 argumentos.

```js example-bad
var obj = Object.create();
// TypeError: Object.create necesita al menos 1 argumento, pero ninguno fue aprovad

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

Puedes arreglar esto configurando {{jsxref("null")}} como el prototipo, por ejemplo:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Guide/Functions)
