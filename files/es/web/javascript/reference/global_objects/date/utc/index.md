---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
---

{{JSRef("Objetos_globales", "Date")}}

## Resumen

Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a `Date` object since January 1, 1970, 00:00:00, universal time.

## Sintaxis

```
Date.UTC(año,mes[, dia[, hora[, minutos[, segundos, milisegundos]]]])
```

### Parámetros

- `año`

  - : Un año mayor de 1900.

- `mes`

  - : Un entero entre 0 y 11 que representa al mes.

- `dia`

  - : Un entero entre 1 y 31 que representa al día del mes.

- `hora`

  - : Un entero entre 0 y 23 que representa la hora.

- `minutos`

  - : Un entero entre 0 y 59 que representa los minutos.

- `segundos`

  - : Un entero entre 0 y 59 que representa los segundos.

- `milisegundos`
  - : Un entero entre 0 y 999 que representa los milisegundos.

## Descripción

`UTC` toma los parámetros de la fecha delimitados por punto y comay devuelve el número de milisegundos entre las 00:00:00 del 1 de enero de 1970 (hora universal) y la hora que especifique.

Debería especificar los dígitos del año completo; por ejemplo, 1998. Si se especifica un año entre 0 y 99, el método convierte dicho año en uno del siglo XX (1900 + año); por ejemplo, si especifica 95, se usará el año 1995.

El método `UTC` difiere del constructor de `Date` de dos modos.

- `Date.UTC` utiliza la fecha y hora universal en vez de la local.
- `Date.UTC` devuelve la fecha y hora como un número en vez de crear un objeto `Date`.

Si especifica un parámetro fuera del rango esperado, el método `UTC` modifica los otros parámetros para tener en cuenta su número. Por ejemplo, si usa 15 para el mes, el año será incrementado en 1 (año + 1), y 3 se usará para el mes.

Debido a que `UTC` es un método estático de `Date`, utilícelo siempre como `Date.UTC()`, en vez de como un método del objeto `Date` que usted cree.

## Ejemplos

### Ejemplo: Usando `Date.UTC`

La sentencia siguiente crea un objeto `Date` usando GMT en vez de la hora local:

```js
fechaGmt = new Date(Date.UTC(96, 11, 1, 0, 0, 0));
```

## Vea También

- {{jsxref("Date.parse()")}}
