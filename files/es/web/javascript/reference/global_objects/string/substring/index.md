---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El **`substring()`** método devuelve un subconjunto de un objeto `String`.

## Sintaxis

```
cadena.substring(indiceA[, indiceB'])
```

### Parámetros

- `indiceA`
  - : Un entero entre 0 y la longitud de la cadena menos 1.
- `indiceB`
  - : (opcional) Un entero entre 0 y la longitud de la cadena.

## Descripción

`substring` extrae caracteres desde `indiceA` hasta `indiceB` sin incluirlo. En particular:

- Si `indiceA` es igual a `indiceB`, `substring` devuelve una cadena vacía.
- Si se omite el `indiceB`, `substring` extrae caracteres hasta el final de la cadena.
- Si el argumento es menor que 0 o es `NaN`, se trata como si fuese 0.
- Si el argumento es mayor que `nombreCadena.length`, se trata como si fuese `nombreCadena.length`.

Si `indiceA` es mayor que `indiceB`, entonces el efecto de `substring` es como si los dos argumentos se intercambiasen; por ejemplo, `cadena.substring(1, 0) == cadena.substring(0, 1)`.

## Ejemplos

### Ejemplo: Usando `substring`

El siguiente ejemplo usa `substring` para mostrar caracteres de la cadena "`Mozilla`":

```js
// asume una función print ya definida
var cualquierCadena = "Mozilla";

// Muestra "Moz"
print(cualquierCadena.substring(0, 3));
print(cualquierCadena.substring(3, 0));

// Muestra "lla"
print(cualquierCadena.substring(4, 7));
print(cualquierCadena.substring(7, 4));

// Muestra "Mozill"
print(cualquierCadena.substring(0, 6));
print(cualquierCadena.substring(6, 0));

// Muestra "Mozilla"
print(cualquierCadena.substring(0, 7));
print(cualquierCadena.substring(0, 10));
```

### Ejemplo: Reemplazar una subcadena dentro de una cadena

El siguiente ejemplo reemplaza una subcadena dentro de una cadena. Reemplazará tanto caracteres individuales como subcadenas. La llamada de la función al final del ejemplo cambia la cadena "`Bravo Nuevo Mundo`" por "`Bravo Nueva Web`".

```js
function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
  // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta

  for (var i = 0; i < cadenaCompleta.length; i++) {
    if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
      cadenaCompleta =
        cadenaCompleta.substring(0, i) +
        cadenaNueva +
        cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
    }
  }
  return cadenaCompleta;
}

reemplazarCadena("Mundo", "Web", "Bravo Nuevo Mundo");
```

## Vea También

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.slice()")}}
