---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`slice()`** extrae una sección de una cadena y devuelve una cadena nueva.

## Sintaxis

```html
cadena.slice(inicioTrozo[, finTrozo])
```

### Parameters

- `inicioTrozo`

  - : El índice basado en cero en el cual empieza la extracción. Si es negativo, se trata como `longCadena + inicioTrozo` donde `longCadena` es la longitud de la cadena (por ejemplo, si `inicioTrozo` es `-3` se trata como `longCadena - 3`)

- `finTrozo`
  - : Opcional. El índice basado en cero en el que termina la extracción. Si se omite, `slice` extrae hasta el final de la cadena. Si es negativo, se trata como `longCadena + finTrozo` donde `longCadena` es la longitud de la cadena (por ejemplo, si `finTrozo` es `-3` se trata como `longCadena - 3`).

### Valor retornado

Una nueva cadena que contiene la sección de la cadena.

## Descripción

`slice` extrae el texto de una cadena y devuelve una nueva cadena. Los cambios en el texto de una cadena no afectan a la otra cadena.

`slice` extrae hasta, pero sin incluir `finalTrozo`. `string.slice(1,4)` extrae del segundo carácter hasta el cuarto carácter (caracteres con índice 1, 2 y 3).

Si se usa un índice negativo, finalTrozo indica el punto desde el final de la cadena.string.slice(2, -1) extrae desde tercer carácter hasta el último carácter de la cadena.

## Ejemplos

### Ejemplo: Uso de `slice()` para crear una nueva cadena

El siguiente ejemplo usa `slice()` para crear una nueva cadena.

```js
var cadena1 = "La mañana se nos echa encima.";
var cadena2 = cadena1.slice(3, -2);
console.log(cadena2);
```

Esto escribe:

```
mañana se nos echa encim
```

### Uso de `slice()` con índices negativos

El siguiente ejemplo usa `slice()` con índices negativos.

```js
var cad = "La mañana se nos echa encima.";
cad.slice(-3); // retorna 'ma.'
cad.slice(-3, -1); // retorna 'ma'
cad.slice(0, -1); // retorna 'La mañana se nos echa encima'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- {{jsxref("String.prototype.substr()")}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
