---
title: String.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/indexOf
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`indexOf()`** devuelve el índice, dentro del objeto `String` que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde `indiceDesde`; o -1 si no se encuentra dicho valor.

## Sintaxis

```
cadena.indexOf(valorBusqueda[, indiceDesde])
```

### Parámetros

- `valorBusqueda`

  - : Una cadena que representa el valor de búsqueda.

- `indiceDesde`
  - : La localización dentro de la cadena llamada desde la que empezará la búsqueda. Puede ser un entero entre 0 y la longitud de la cadena. El valor predeterminado es 0.

## Descripción

Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0, y el índice del último carácter de una cadena llamada `nombreCadena` es `nombreCadena.length - 1`.

```js
"Blue Whale".indexOf("Blue"); // returns 0
"Blue Whale".indexOf("Blute"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns 5
"Blue Whale".indexOf("Whale", 5); // returns 5
"Blue Whale".indexOf("", 9); // returns 9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
```

El método `indexOf` es sensible a mayúsculas. Por ejemplo, la siguiente expresión devuelve -1:

```js
"Ballena Azul".indexOf("azul");
```

## Ejemplos

### Ejemplo: Usando `indexOf` y `lastIndexOf`

El siguiente ejemplo utiliza `indexOf` y `lastIndexOf` para localizar valores dentro de la cadena "`Brave new world`".

```js
var cualquierCadena = "Brave new world";

document.write(
  "<P>The index of the first w from the beginning is " +
    cualquierCadena.indexOf("w"),
); // Muestra 8

document.write(
  "<P>The index of the first w from the end is " +
    cualquierCadena.lastIndexOf("w"),
); // Muestra 10

document.write(
  "<P>The index of 'new' from the beginning is " +
    cualquierCadena.indexOf("new"),
); // Muestra 6

document.write(
  "<P>The index of 'new' from the end is " + cualquierCadena.lastIndexOf("new"),
); // Muestra 6
```

### Ejemplo: `indexOf` y sensibilidad a mayúsculas

El siguiente ejemplo define dos variables de tipo cadena. Las variables contienen la misma cadena excepto que la segunda cadena contienen letras en mayúscula. El primer método `writeln` muestra 19. Pero a que el método `indexOf` es sensible a mayúsculas, no se encuentra la cadena "`cheddar`" en `miCadenaMayusculas`, así que el segundo método `writeln` muestra -1.

```js
miCadena = "brie, pepper jack, cheddar";
miCadenaMayusculas = "Brie, Pepper Jack, Cheddar";
document.writeln(
  'miCadena.indexOf("cheddar") is ' + miCadena.indexOf("cheddar"),
);
document.writeln(
  '<P>miCadenaMayusculas.indexOf("cheddar") is ' +
    miCadenaMayusculas.indexOf("cheddar"),
);
```

### Ejemplo: Usando `indexOf` para contar ocurrencias de una letra en una cadena

El siguiente ejemplo establece `cuenta` como el número de ocurrencias de la letra `x` dentro de la cadena `miCadena`:

```js
cuenta = 0;
posicion = miCadena.indexOf("x");
while (posicion != -1) {
  cuenta++;
  posicion = miCadena.indexOf("x", posicion + 1);
}
```

## Vea También

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
