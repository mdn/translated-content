---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
original_slug: Web/JavaScript/Referencia/Objetos_globales/parseFloat
browser-compat: javascript.builtins.parseFloat
---
{{jsSidebar("Objects")}}

La función **`parseFloat()`** analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.

{{EmbedInteractiveExample("pages/js/globalprops-parsefloat.html")}}

## Sintaxis

```js
parseFloat(string);
```

### Parámetros

- `string`
  - : La cadena que representa al valor que se desea convertir.
    Si este argumento no es una cadena, entonces, será convertida en una usando
    la operación abstracta [`ToString`](https://tc39.es/ecma262/#sec-tostring).
    Se ignora el {{glossary("whitespace", "espacio en blanco")}} inicial en este argumento.

### Valor de retorno

Un número de coma flotante analizado a partir de la `cadena` dada.

O {{jsxref("NaN")}} cuando el primer carácter que no es un espacio en blanco
no se puede convertir en un número.

## Descripción

`parseFloat` es una propiedad de función del objeto global.

- Si `parseFloat` encuentra un carácter que no sea un signo más (`+`),
  signo menos (`-` U+002D HYPHEN-MINUS), numeral (`0` - `9`), punto decimal (`.`)
  o exponente (`e` o `E`), devuelve el valor hasta ese carácter,
  ignorando el carácter inválido y los caracteres que le siguen.
- Un _segundo_ decimal también detiene el análisis (caracteres hasta ese punto se seguirá analizando).
- Se ignoran los espacios iniciales y finales en el argumento.
- Si el primer carácter del argumento no se puede convertir en un número (no es
  ninguno de los caracteres anteriores), `parseFloat` devuelve {{jsxref("NaN")}}
- `parseFloat` también puede analizar y devolver {{jsxref("Infinity")}}.
- `parseFloat` convierte la sintasis {{jsxref("BigInt")}} a {{jsxref("Number", "Numbers")}},
  perdiendo precisión. Esto sucede por que se descarta el carácter `n` final.

Considera {{jsxref("Number", "Number(value)")}} para un análisis más estricto,
que se convierte en {{jsxref("NaN")}} para argumentos con caracteres no válidos
en cualquier lugar.

## Ejemplos

### `parseFloat` devolviendo un número

Todos los siguientes ejemplos devuelven `3.14`:

```js
parseFloat(3.14);
parseFloat('3.14');
parseFloat('  3.14  ');
parseFloat('314e-2');
parseFloat('0.0314E+2');
parseFloat('3.14some non-digit characters');
parseFloat({ toString: function() { return "3.14" } });
```

### `parseFloat` devolviendo `NaN`

El siguiente ejemplo devuelve `NaN`:

```js
parseFloat("FF2");
```

### `parseFloat` y `BigInt`

Los siguientes ejemplos devuelven `900719925474099300`, perdiendo precisión como
el entero es demasiado grande para ser representado como un decimal:

```js
parseFloat(900719925474099267n);
parseFloat("900719925474099267n");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Number.toFixed()")}}
- {{jsxref("isNaN", "isNaN()")}}
