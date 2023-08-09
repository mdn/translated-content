---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`lastIndexOf()`** `devuelve` la posicion (indice) en la que se encuentra el **valorBusqueda**, dentro del objeto `String` que realiza la llamada, de la última ocurrencia del valor especificado; o -1 si no se halla. La búsqueda se realiza empezando por el final de la cadena que realiza la llamada, empezando en **`indiceDesde`**.

## Sintaxis

```
cadena.lastIndexOf(valorBusqueda[, indiceDesde])
```

### Parámetros

- `valorBusqueda`

  - : Una cadena que representa el valor que se desea buscar.

- `indiceDesde`
  - : La localización dentro de la cadena que realiza la llamada desde donde comenzará la búsqueda. Puede ser cualquier entero entre 0 y la longitud de la cadena. El valor predeterminado es la longitud de la cadena.

## Descripción

Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter es `nombreCadena.length - 1`.

```js
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
```

El método `lastIndexOf` es sensible a mayúsculas. Por ejemplo, la siguiente expresión devuelve -1:

```js
"Ballena Azul, Ballena Asesina".lastIndexOf("azul");
```

## Ejemplos

### Ejemplo: Usando `indexOf` y `lastIndexOf`

El siguiente ejemplo utiliza `indexOf` y `lastIndexOf` para localizar valores en la cadena "`Brave new world`".

```js
var anyString = "Brave new world";

// Displays 8
document.write(
  "<P>The index of the first w from the beginning is " + anyString.indexOf("w"),
);
// Displays 10
document.write(
  "<P>The index of the first w from the end is " + anyString.lastIndexOf("w"),
);
// Displays 6
document.write(
  "<P>The index of 'new' from the beginning is " + anyString.indexOf("new"),
);
// Displays 6
document.write(
  "<P>The index of 'new' from the end is " + anyString.lastIndexOf("new"),
);
```

## Vea También

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
