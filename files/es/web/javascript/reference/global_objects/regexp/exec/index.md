---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
---

{{JSRef}}

El método **`exec()`** ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o {{jsxref("null")}}.

Si está ejecutando una expresión regular solo para buscar si algo se cumple o no, usa el método {{jsxref("RegExp.prototype.test()")}} o el método {{jsxref("String.prototype.search()")}}.

## Sintaxis

```
regexObj.exec(cadena)
```

### Parametros

- `cadena`
  - : Cadena sobre la cual se quiere aplicar la expresión regular

### Valor devuelto

Si se encuentran coincidencial, el método `exec()` devuelve un array y actualiza las propiedades del objeto de la expresión regular. El array devuelto contiene los elementos encontrados en su primer elemento, y un elemento por cada parte de la expresión regular que se encuentra entre parentesis y se encuentra dentro del texto que fué capturado.

Si la busqueda falla, el método `exec()` devuelve {{jsxref("null")}}.

## Descripción

Considerando el siguiente ejemplo:

```js
// Busca "quick brown" seguido de "jumps", ignorando los caracteres que se
// encuentren entre medias.
// Recuerda "brown" y "jumps"
// Ignora mayusculas y minusculas
var re = /quick\s(brown).+?(jumps)/gi;
var result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

La siguiente tabla muestra el resultado de este script:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header">Objeto</td>
      <td class="header">Propiedad/Índice</td>
      <td class="header">Descripción</td>
      <td class="header">Ejemplo</td>
    </tr>
    <tr>
      <td rowspan="4"><code>result</code></td>
      <td><code>[0]</code></td>
      <td>Todas las partes de la cadena que cumplen la expresión regular</td>
      <td><code>Quick Brown Fox Jumps</code></td>
    </tr>
    <tr>
      <td><code>[1],...[<em>n</em>]</code></td>
      <td>
        <p>
          Las subcadenas entre parentesis que han sido encontradas, si hay
          alguna. El número de subcadenas encontradas es ilimitado
        </p>
      </td>
      <td>
        <code>[1] = Brown<br />[2] = Jumps</code>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>El índice de base-0 del elemento encontrado en la cadena.</td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>La cadena original.</td>
      <td><code>The Quick Brown Fox Jumps Over The Lazy Dog</code></td>
    </tr>
    <tr>
      <td rowspan="5"><code>re</code></td>
      <td><code>lastIndex</code></td>
      <td>
        El índice sobre el cual empieza la siguiente busqueda. Cuando no se usa
        g (busqueda global), esto va a ser siempre 0.
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>
        Indica si la bandera "<code>i</code>" ha sido usada para ignorar
        mayusculas y minusculas.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>
        Indica si la bandera "<code>g</code>" fue usada para hacer una busqueda
        global.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>
        Indica si la bandera "<code>m"</code> fue usada para buscar en cadenas
        sobre multiples lineas
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>El texto del patrón de busqueda</td>
      <td><code>quick\s(brown).+?(jumps)</code></td>
    </tr>
  </tbody>
</table>

## Ejemplos

### Encontrando coincidencias sucesivas

Si tu expresión regular contiene la bandera "`g`", puedes usar el método `exec()` varias veces para encontrar coincidencias sucesivas en la misma cadena. Cuando lo haces, la busqueda empieza en la subcadena `str` especificada por la propiedad {{jsxref("RegExp.lastIndex", "lastIndex")}} de la expresión regular ({{jsxref("RegExp.prototype.test()", "test()")}} también movera hacia adelante el indice de la propiedad {{jsxref("RegExp.lastIndex", "lastIndex")}}). Por ejemplo, asumiendo que tienes este script:

```js
var myRe = /ab*/g;
var str = "abbcdefabh";
var myArray;
while ((myArray = myRe.exec(str)) !== null) {
  var msg = "Se ha encontrado " + myArray[0] + ". ";
  msg += "La siguiente coincidencia empieza en el indice " + myRe.lastIndex;
  console.log(msg);
}
```

Este script muestra el siguiente texto:

```
Se ha encontrado abb. La siguiente coincidencia empieza en el indice 3
Se ha encontrado ab. La siguiente coincidencia empieza en el indice 9
```

Nota: No uses la expresión regular literalmente (o el constructor {{jsxref("RegExp")}}) dentro de la condición del bucle while o se creará un bucle infinito si hay una coincidencia, por culpa de que la propiedad {{jsxref("RegExp.lastIndex", "lastIndex")}} va a ser reiniciada por cada iteración del bucle. Además asegurate de que has usado la bandera de busqueda global "g" o se creará un bucle también.

### Usando `exec()` con `RegExp` literales

También se puede usar `exec()` sin crear un objeto de {{jsxref("RegExp")}}:

```js
var matches = /(hola \S+)/.exec("Esto es un hola mundo!");
console.log(matches[1]);
```

Esto logueará un mensaje que contiene 'hola mundo!'.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Capítulo de [Expresiones Regulares](/es/docs/Web/JavaScript/Guide/Regular_Expressions) en la [Guía de Javascript](/es/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
