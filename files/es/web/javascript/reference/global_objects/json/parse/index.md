---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
---

{{JSRef("Global_Objects", "JSON")}}

## Resumen

El método **`JSON.parse()`** analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.

## Sintaxis

```
JSON.parse(text[, reviver])
```

### Parámetros

- `text`
  - : El texto que se convertirá a JSON. Vea el objeto {{jsxref("JSON")}} para una descripción de la sintaxis JSON.
- `reviver` {{optional_inline()}}
  - : Si una función, prescribe cómo se transforma el valor producido originalmente por el parsing, antes de retornar.

### Returns

Retorna el objeto que se corresponde con el texto JSON entregado.

### Exceptions

Lanza una excepción {{jsxref("SyntaxError")}} si la cadena a transformar no es un JSON válido.

## Ejemplos

### Ejemplo: Usando `JSON.parse()`

```js
JSON.parse("{}"); // {}
JSON.parse("true"); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse("null"); // null
```

### Ejemplo: `Usando el parámetro reviver`

Si se especifica un reviver, el valor computado por el parsing _es transformado_ antes de retornar. Específicamente, el valor computado, y todas sus propiedades (comenzando con las propiedades más anidadas y siguiendo al propio valor original), son individualmente ejecutados a través del `reviver`, el cual es llamado con el objeto que contiene la propiedad que está siendo procesada como `this` y con el nombre de la propiedad como cadena y el valor de la propiedad como argumentos. Si la función `reviver` retorna `undefined` (o no retorna algún valor, por ejemplo: si la ejecución cae el final de la función), la propiedad es eliminada del objeto. De otra manera, la propiedad es redefinidad para ser el valor de retorno.

El `reviver` es llamada último con la cadena vacía y el valor más alto para permitir la transformación del valor más alto. Asegúrese de manejar este caso adecuadamente, por lo general mediante la devolución del valor proporcionado, o `JSON.parse` will retorna `undefined`.

```js
JSON.parse('{"p": 5}', function (k, v) {
  if (k === "") return v; // if topmost value, return it,
  return v * 2; // else return v * 2.
}); // { p: 10 }

JSON.parse('{"1": 1, "2": 2,"3": {"4": 4, "5": {"6": 6}}}', function (k, v) {
  console.log(k); // log the current property name, the last is "".
  return v; // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `JSON.parse()` no admite comas finales

```js example-bad example-bad
// ambos lanzarán un SyntaxError
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Utilizando](/es/docs/Web/JavaScript/Guide/Using_native_JSON) [JSON nativo](/es/docs/Web/JavaScript/Guide/Using_native_JSON)
