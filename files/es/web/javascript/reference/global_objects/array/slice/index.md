---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

`El método slice()` devuelve una copia de una parte del array dentro de un nuevo array empezando por _inicio_ hasta _fin_ (_fin_ no incluido). El array original no se modificará.

El código fuente de esta demostración interactiva está alojado en un repositorio Github. Si desea contribuir con ella, por favor clone <https://github.com/mdn/interactive-examples> y envíenos un _"pull request"_.

## Sintaxis

```
arr.slice([inicio [, fin]])
```

## Parámetros

- `inicio`

  - : Índice donde empieza la extracción. El primer elemento corresponde con el índice 0.

    Si el índice especificado es negativo, indica un desplazamiento desde el final del array.`slice(-2)` extrae los dos últimos elementos del array

    Si `inicio` es omitido el valor por defecto es `0`.

    Si `inicio` es mayor a la longitud del array, se devuelve un array vacío.

- `fin`

  - : Índice que marca el final de la extracción. `slice` extrae hasta, pero sin incluir el final.

    `slice(1,4)` extrae desde el segundo elemento hasta el cuarto (los elementos con índices 1, 2, y 3).

    Con un índice negativo, `fin` indica un desplazamiento desde el final de la secuencia. `slice(2,-1)` extrae desde el tercer hasta el penúltimo elemento en la secuencia.

    Si `fin` es omitido, slice extrae hasta el final de la secuencia (`arr.length`)`.`

    Si `fin` es mayor a la longitud del array, `slice` extrae hasta el final de la secuencia (`arr.length`)`.`

### `Valor de retorno`

Un nuevo array con los valores extraídos.

## Descripción

`slice` **no modifica** el array original. Devuelve una copia plana (_shallow copy_) de los elementos especificados del array original. Los elementos del array original son copiados en el array devuelto de la siguiente manera:

- Para referencias de objeto ( **no** el objeto en sí ), `slice copia la referencia dentro del nuevo array`. Ambos, el array original y el nuevo, referencian al mismo objeto. Si un objeto referenciado cambia, los cambios son visibles para ambos arrays.
- Para strings, numbers y boolean (**no** objetos {{jsxref("Global_Objects/String", "String")}} y {{jsxref("Global_Objects/Number", "Number")}}), `slice` copia los valores en el nuevo array. Los cambios a los string, numbers y boolean en un array no afectan a los del otro array.

Si un nuevo elemento es agregado a cualquiera de los arrays, el otro array no es afectado.

## Ejemplos

### Ejemplo: Devolver una porción de un array existente

```js
var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
```

### Ejemplo: Utilizando slice

Presta especial atención a:

- Valores de tipos básicos, como string o number, son copiados al nuevo array. Cambiar estos valores en la copia no afecta al array original.
- Las referencias también se copian. Mismas referencias acceden al mismo objeto destino. Cambios en el objeto destino son compartidos por todos sus accesos.

En el siguiente ejemplo, `slice` crea un nuevo array, `nuevoCoche`, de `myCoche`. Los dos incluyen una referncia al objecto `miHonda` se cambia a púrpura, ambas matrices reflejan el cambio.

```js
var miHonda = {
  color: "red",
  ruedas: 4,
  motor: { cilindros: 4, cantidad: 2.2 },
};
var miCoche = [miHonda, 2, "Buen estado", "comprado 1997"];
var nuevoCoche = miCoche.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log("miCoche = " + JSON.stringify(miCoche));
console.log("nuevoCoche = " + JSON.stringify(nuevoCoche));
console.log("miCoche[0].color = " + miCoche[0].color);
console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);

// Cambia el color de miHonda.
miHonda.color = "azul";
console.log("El nuevo color de mi Honda es " + miHonda.color);

// Muestra el color de myHonda referenciado desde ambos arrays.
console.log("miCoche[0].color = " + miCoche[0].color);

console.log("nuevoCoche[0].color = " + nuevoCoche[0].color);
```

Este script escribe:

```js
miCoche = [{color: 'rojo', ruedas: 4, motor: {cilindros: 4, cantidad: 2.2}}, 2,
         'buen estado', 'comprado 1997']
nuevoCoche = [{color: 'rojo', ruedas: 4, motor: {cilindros: 4, cantidad: 2.2}}, 2]
miCoche[0].color = rojo
nuevoCoche[0].color = rojo
El nuevo color de miHonda es azul
miCoche[0].color = azul
nuevoCoche[0].color = azul
```

## Objetos array-like

> **Nota:** Se dice que un objeto es **array-like** ( similar o que se asemeja a un array) cuando entre sus propiedades existen algunas cuyos nombres son **números** y en particular tiene una propiedad llamada **length**. Este hecho hace suponer que el objeto es algún tipo de colección de elementos indexados por números. Es conveniente, a veces, convertir estos objetos a arrays para otorgarles la funcionalidad que de serie se incorpora en todos los arrays a través de su prototipo.

El método `slice` puede ser usado para convertir objetos parecidos a arrays o colecciones a un nuevo Array. Simplemente debe enlazar el método al objeto. El {{jsxref("Functions_and_function_scope/arguments", "arguments")}} dentro de una función es un ejemplo de un objeto parecido a arrays.

```js
function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

El enlazado puede realizarse con la función `.call` de {{jsxref("Function.prototype")}} y puede ser abreviado también usando `[].slice.call(arguments)` en lugar de `Array.prototype.slice.call`. En cualquier caso, puede ser simplificado usando {{jsxref("Function.prototype.bind", "bind")}}.

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Coordinación del comportamiento entre navegadores

La especificación permite a los objetos del host ( entre ellos los objetos del DOM ) ser dependientes de la implementación. Esta **NO** obligatoriedad, origina diferencias en el comportamiento entre aquellos comprometidos con los estándares, como Mozilla, y los que no. En lo que concierne a `Array.prototype.slice` , por lo tanto, existen importantes incompatibilidades en IE < 9 . Versiones de IE a partir de la 9 permiten un comportamiento compatible más fiable. Se puede recurrir al "_shimming_" para alcanzar la compatibilidad en otros casos. Mientras otros navegadores modernos continúan mejorando para soportar esta habilidad, en la forma en que actualmente lo hacen Mozilla, Chrome, Safari, Opera e IE, los desarrolladores de código preocupados por el soporte DOM que confíen en este _shim_ no deben dejarse engañar por la semántica, deben confiar de forma segura en ella para proporcionar el comportamiento estándar que aparentemente ahora es la norma.

El _shim_ también soluciona que IE pueda tratar con el caso de que el segundo argumento de `slice()` pueda ser un valor {{jsxref("Global_Objects/null", "null")}}/{{jsxref("Global_Objects/undefined", "undefined")}} explícito. Esto era un problema en versiones anteriores de IE, pero todos los navegadores modernos, incluído IE >= 9, lo hacen actualmente.

```js
/**
 * Shim para "solucionar" la falta de soporte de IE (IE < 9) para aplicar slice
 * sobre objetos del host, tal como NamedNodeMap, NodeList, y HTMLCollection
 * (técnicamente, al ser los objetos del host dependientes de la implementación,
 * al menos anteriormente a ES2015, IE no tenía la necesidad de trabajar de este modo).
 * También funciona sobre strings, solucionando que IE < 9 admita un undefined explícito
 * como segundo argumento (igual que en Firefox), y previniendo errores cuando se llama
 * sobre otros objetos del DOM.
 */
(function () {
  "use strict";
  var _slice = Array.prototype.slice;

  try {
    // Fallará al usarse con elementos DOM en IE < 9
    _slice.call(document.documentElement);
  } catch (e) {
    // Fails in IE < 9
    // Funcionará con arrays genuinos, objetos array-like,
    // NamedNodeMap (attributes, entities, notations),
    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
    Array.prototype.slice = function (begin, end) {
      // A IE < 9 no le gustan los undefined como argumento end.
      end = typeof end !== "undefined" ? end : this.length;

      // Con objetos Array nativos, podemos usar la función slice
      if (Object.prototype.toString.call(this) === "[object Array]") {
        return _slice.call(this, begin, end);
      }

      // Con objetos array-like debemos manejarlo por nuestra cuenta.
      var i,
        cloned = [],
        size,
        len = this.length;

      // Maneja valores negativos para el argumento "inicio"
      var start = begin || 0;
      start = start >= 0 ? start : Math.max(0, len + start);

      // Maneja valores negativos para el argumento "fin"
      var upTo = typeof end == "number" ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Tamaño esperado para el slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
})();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
