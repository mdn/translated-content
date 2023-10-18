---
title: String.prototype.matchAll()
slug: Web/JavaScript/Reference/Global_Objects/String/matchAll
---

{{JSRef}}

El método **`matchAll()`** retorna un iterador de todos los resultados de ocurrencia en una _cadena de texto_ contra una expresión regular, incluyendo grupos de captura.

{{EmbedInteractiveExample("pages/js/string-matchall.html")}}

## Sintaxis

```
cadena.matchAll(expresionRegular)
```

### Parámetros

- _expresionRegular_
  - : Un objeto expresión regular. Si se pasa un objeto no-RegExp `obj`, este es implícitamente convertido a {{jsxref("RegExp")}} vía `new RegExp(obj)`.

### Valor devuelto

Un [iterador](/es/docs/Web/JavaScript/Guide/Iterators_and_Generators) (el cual no es reiniciable).

## Ejemplo

### Regexp.exec() y matchAll()

Antes de la adición de `matchAll` a JavaScript, fue posible hacer llamados a [regexp.exec](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) (y usar expresiones regulares con la bandera `/g`) en un ciclo para obtener las ocurrencias:

```js
const regexp = RegExp("foo[a-z]*", "g");
const cadena = "mesa football, foosball";
let ocurrencia;

while ((ocurrencia = regexp.exec(cadena)) !== null) {
  console.log(
    `Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${regexp.lastIndex}.`,
  );
  // salida esperada: "Encontrado football inicio=5 final=13."
  // salida esperada: "Encontrado foosball inicio=15 final=23."
}
```

Con `matchAll` disponible, puedes evitar el ciclo [`while`](/es/docs/Web/JavaScript/Reference/Statements/while) y `exec` con `/g`. Por el contrario, usando `matchAll`, obtienes un iterador con el cual puedes usar con constructores más convenientes [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of), [array spread](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax), o {{jsxref("Array.from()")}}:

```js
const regexp = RegExp("foo[a-z]*", "g");
const cadena = "mesa football, foosball";
const ocurrencias = cadena.matchAll(regexp);

for (const ocurrencia of ocurrencias) {
  console.log(
    `Encontrado ${ocurrencia[0]} inicio=${ocurrencia.index} final=${
      ocurrencia.index + ocurrencia[0].length
    }.`,
  );
}
// salida esperada: "Encontrado football start=5 end=13."
// salida esperada: "Encontrado foosball start=15 end=23."

// el iterador ocurrencias es agotado después de la iteración for..of
// Llama matchAll de nuevo para crear un nuevo iterador
Array.from(cadena.matchAll(regexp), (m) => m[0]);
// Array [ "football", "foosball" ]
```

`matchAll` solo devuelve la primer ocurrencia si la bandera `/g` está ausente.

```js
const regexp = RegExp("[a-c]", "");
const cadena = "abc";
Array.from(cadena.matchAll(regexp), (m) => m[0]);
// Array [ "a" ]
```

`matchAll` internamente hace un clon de la expresión regular, entonces a diferencia de [regexp.exec](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec), `lastIndex` no cambia a medida que la cadena es escaneada.

```js
const regexp = RegExp("[a-c]", "g");
regexp.lastIndex = 1;
const cadena = "abc";
Array.from(cadena.matchAll(regexp), (m) => `${regexp.lastIndex} ${m[0]}`);
// Array [ "1 b", "1 c" ]
```

### Mejor acceso para capturar grupos

Otra buena razón para `matchAll` es el mejorado acceso a los grupos de captura. Los grupos de captura son ignorados cuando se usa [`match()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/match) con la bandera global `/g`:

```js
var regexp = /t(e)(st(\d?))/g;
var cadena = "test1test2";

cadena.match(regexp);
// Array ['test1', 'test2']
```

Con `matchAll` puedes acceder a ellos:

```js
let array = [...str.matchAll(regexp)];

array[0];
// ['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', length: 4]
array[1];
// ['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', length: 4]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
