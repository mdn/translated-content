---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
---

{{jsSidebar("Objects")}}

## Resumen

Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

## Sintaxis

```
parseInt(string, base);
```

### Parámetros

- `cadena`

  - : Una cadena que representa el valor que se desea convertir.

- `base`
  - : Un entero que representa la base de la mencionada cadena.

## Descripción

`parseInt` es una función de alto nivel y no está asociada a ningún objeto.

La función `parseInt` comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada. Por ejemplo, una base de 10 indica una conversión a número decimal, 8 octal, 16 hexadecimal, y así sucesivamente. Para bases superiores a 10, las letras del alfabeto indican numerales mayores que 9. Por ejemplo, para números hexadecimales (base 16), se utiliza de la A hasta la F.

Si `parseInt` encuentra un carácter que no es un numeral de la base especificada, lo ignora a él y a todos los caracteres correctos siguientes, devolviendo el valor entero obtenido hasta ese punto. `parseInt` trunca los números en valores enteros. Se permiten espacios anteriores y posteriores.

Si no se especifica la base o se especifica como 0, JavaScript asume lo siguiente:

- Si el parámetro `cadena` comienza por "0x", la base es 16 (hexadecimal).
- Si el parámetro `cadena` comienza por "0", la base es de 8 (octal). Esta característica está desaconsejada.
- Si el parámetro `cadena` comienza por cualquier otro valor, la base es 10 (decimal).

Si el primer carácter no se puede convertir en número, `parseInt` devuelve `NaN`.

Para fines aritméticos, el valor `NaN` no es un número en ninguna base. Puede llamar a la función {{jsxref("Objetos_globales/isNaN", "isNaN")}} para determinar se el resultado de `parseInt` es `NaN`. Si se pasa `NaN` en operaciones aritméticas, la operación resultante también será `NaN`.

Para convertir números a su literal cadena en una base en particular, utilice `intValue.toString(base)`.

## Ejemplos

### Ejemplo: Usando `parseInt`

Todos los siguientes ejemplos devuelven 15:

```js
parseInt("F", 16);
parseInt("17", 8);
parseInt("15", 10);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("12", 13);
```

Todos los siguientes ejemplos devuelven `NaN`:

```js
parseInt("Hello", 8); // No es un número en absoluto
parseInt("0x7", 10); // No es de base 10
parseInt("546", 2); // Los dígitos no son válidos para representaciones binarias.
```

Incluso aunque la base especificada es diferente, todos los siguientes ejemplos devuelven 17 ya que el argumento `cadena` comienza por "`0x`".

```js
parseInt("0x11", 16);
parseInt("0x11", 0);
parseInt("0x11");
```

### Véase También

- {{jsxref("Objetos_globales/parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("Objetos_globales/isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
