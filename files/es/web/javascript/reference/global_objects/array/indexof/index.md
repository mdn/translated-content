---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

El método **indexOf()** retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

> **Nota:** Para el método String, ver {{jsxref("String.prototype.indexOf()")}}.

## Sintaxis

```
array.indexOf(searchElement[, fromIndex])
```

### Parámetros

- `searchElement`
  - : Elemento a encontrar en el array.
- `fromIndex` {{optional_inline}}
  - : Indica el índice por el que se comienza la búsqueda. Por defecto es 0, por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, la búsqueda se realizará por todo el array.

### Valor de retorno

El primer índice del elemento en la matriz; -1 si no se encuentra.

## Descripción

`indexOf()` compara `searchElement` con los elementos del array usando [igualdad estricta](/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators#Using_the_Equality_Operators) (el mismo método que cuando se usa ===, o el operador igualdad-triple).

## Ejemplos

### Usando `indexOf()`

El siguiente ejemplo usa `indexof()` para localizar valores en un array

```js
var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Encontrar todas las apariciones de un elemento

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var element = "a";
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Encontrar si un elemento existe en la matriz o no y actualizar la matriz

```js
function updateVegetablesCollection(veggies, veggie) {
  if (veggies.indexOf(veggie) === -1) {
    veggies.push(veggie);
    console.log("La nueva colección de vegetales es: " + veggies);
  } else if (veggies.indexOf(veggie) > -1) {
    console.log(veggie + " ya existe en la colección de verduras.");
  }
}

var veggies = ["patata", "tomate", "chiles", "pimientoverde"];

updateVegetablesCollection(veggies, "espinaca");
// La nueva colección de verduras es : patata, tomate, chiles, pimientoverde, espinaca
updateVegetablesCollection(veggies, "espinaca");
// La espinaca ya existe en la colección de verduras.
```

## Polyfill

`indexOf()` se agregó al estándar ECMA-262 en la 5a edición; por tanto no está implementado en todos los navegadores. Puedes hacerlo funcionar insertando el siguiente código al comienzo de tus scripts, permitiendo usar `indexOf()` en implementaciones que no lo soporten de forma nativa. Este algoritmo es exáctamente el especificado en ECMA-262, 5ª edición, suponiendo que {{jsxref("Global_Objects/TypeError", "TypeError")}} y {{jsxref("Math.abs()")}} tienen sus valores originales.

```js
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function indexOf(member, startFrom) {
    /*
    En el modo no estricto, si la variable `this` es null o indefinida, entonces se establece
    en el objeto ventana. De lo contrario, `this` se convierte automáticamente en un objeto.
    En modo estricto, si la variable `this` es nula o indefinida, se lanza `TypeError`.
    */
    if (this == null) {
      throw new TypeError(
        "Array.prototype.indexOf() - no se puede convertir `" +
          this +
          "` en objeto",
      );
    }

    var index = isFinite(startFrom) ? Math.floor(startFrom) : 0,
      that = this instanceof Object ? this : new Object(this),
      length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if (index >= length) {
      return -1;
    }

    if (index < 0) {
      index = Math.max(length + index, 0);
    }

    if (member === undefined) {
      /*
        Dado que `member` no está definido, las claves que no existan tendrán el valor de `same`
        como `member` y, por lo tanto, es necesario verificarlas.
      */
      do {
        if (index in that && that[index] === undefined) {
          return index;
        }
      } while (++index < length);
    } else {
      do {
        if (that[index] === member) {
          return index;
        }
      } while (++index < length);
    }

    return -1;
  };
}
```

Sin embargo, si está más interesado en todos los pequeños trozos técnicos definidos por el estándar ECMA, y está menos preocupado por el rendimiento o la concisión, entonces usted puede encontrar esta polyfill más descriptivo que sea más útil.

```js
// Pasos de producción de ECMA-262, Edición 5, 15.4.4.14
// Referencia: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Dejar que `o` sea el resultado de llamar a ToObject
    //    pasando este valor como argumento.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Dejar que `lenValue` sea el resultado de llamar al método interno
    //    de `o` con el argumento "length".
    // 3. Dejar que len sea ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. Si `len` es 0, devolver -1.
    if (len === 0) {
      return -1;
    }

    // 5. Si se pasó el argumento `fromIndex`, deje que `n` sea
    //    ToInteger(fromIndex); si no, que `n` sea 0.
    var n = fromIndex | 0;

    // 6. Si n >= len, devolver -1.
    if (n >= len) {
      return -1;
    }

    // 7. Si n >= 0, entonces deja que `k` sea `n`.
    // 8. Si no, n<0, deja que `k` sea `len - abs(n)`.
    //    Si `k` es menor que 0, entonces deja que `k` sea 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repite, mientras k < len
    while (k < len) {
      // a. Dejar que `Pk` sea ToString(k).
      //   Esto está implícito para los operandos LHS del operador in
      // b. Dejar que kPresent sea el resultado de llamar al método
      //    interno `HasProperty` de `o` con el argumento `Pk`.
      //   Este paso se puede combinar con `c`
      // c. Si kPresent es verdadero, entonces
      //    i.  Dejar que `elementK` sea el resultado de llamar al método
      //        interno de `o` con el argumento ToString(k).
      //   ii.  Deje que `same` sea el resultado de aplicar el
      //        Algoritmo de comparación de igualdad estricta a
      //        searchElement y elementK.
      //  iii.  Si `same` es true, devuelve `k`.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("String.prototype.indexOf()")}}
