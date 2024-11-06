---
title: "SyntaxError: missing ) after argument list"
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list
---

{{jsSidebar("Errors")}}

## Mensaje

```
SyntaxError: missing ) after argument list
```

## Tipo de error

{{jsxref("SyntaxError")}}.

## ¿Cuál es el problema?

Hay un error en cómo la función es llamada. Esto puede ser un typo, la falta de un operador, o un string no escapado, por ejemplo.

## Ejemplo

Debido a que no se encuentra el operador "`+`" para concatenar el string, JavaScript espera que el argumento de la función `log` sea solo `"PI: "`. En tal caso, debería terminar con el paréntesis de cierre.

```js example-bad
console.log('PI: ' Math.PI);
// SyntaxError: missing ) after argument list
```

Puedes corregir la llamada del `log`, agregando el operador "`+`":

```js example-good
console.log("PI: " + Math.PI);
// "PI: 3.141592653589793"
```

### Strings sin cierre

```js-nolint example-bad
console.log('"Java" + "Script" = "' + 'Java' + 'Script");
// SyntaxError: missing ) after argument list
```

Aquí JavaScript piensa que tienes `);` dentro del string y lo ignora, y termina no sabiendo que quisiste utilizar `);` para cerrar la función `console.log`. Para solucionar esto, podemos poner un `'` después del string "Script":

```js example-good
console.log('"Java" + "Script" = "' + "Java" + 'Script"');
// '"Java" + "Script" = "JavaScript"'
```

## Véase también

- [Funciones](/es/docs/Web/JavaScript/Guide/Funciones)
