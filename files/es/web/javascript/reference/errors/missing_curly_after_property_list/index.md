---
title: "SyntaxError: missing } after property list"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing } after property list
```

## Tipo de error

{{jsxref("SyntaxError")}}

## ¿Que estuvo mal?

Es un error de sinaxis en algún lugar en el [object initializer](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). Prodría provocarse debido a la falta de una llave, pero, por ejemplo tambien por falta de alguna coma. Tambien verifique si alguna llave o parentesis se encuentra en el orden correcto. Indentar o darle un buen formato al codido puede ayudarlo a observar mejor el error.

## Ejemplos

### Olvido de coma

Algunas veces, hace faltan las comas en codigo inicial del proyecto, he aquí un ejemplo:

```js example-bad
var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
```

La correción podría ser:

```js example-good
var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3,
};
```

## Observe Tambien

- [Object initializer](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer)
