---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef("Objetos_globales", "Function")}}

## Resumen

El método **apply()** invoca una determinada función asignando explícitamente el objeto **this** y un array o similar ([array like object](/es/docs/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects)) como parámetros (**argumentos)** para dicha función.

> **Nota:** Aunque la sintaxis de esta función es casi idéntica a {{jsxref("Function.call", "call()")}}, la diferencia fundamental es que `call()` acepta una lista de argumentos, mientras que `apply()` acepta un simple array con los argumentos.

## Sintaxis

```
fun.apply(thisArg[, argsArray])
```

### Parámetros

- `thisArg`
  - : El valor del objeto **this** a utilizar dentro de la llamada a _fun_. Cabe mencionar que éste puede no ser el valor visto por el método: si el método es una función del tipo {{jsxref("Functions_and_function_scope/Strict_mode", "non-strict mode", "", 1)}}, {{jsxref("Global_Objects/null", "null")}} o {{jsxref("Global_Objects/undefined", "undefined")}} será reemplazado por el objeto global, y los valores primitivos serán encapsulados.
- `argsArray`
  - : Un objeto similar a un array ([array like object](/es/docs/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects)), que contiene los parámetros con los que será llamada _`fun`_, o `null` o {{jsxref("undefined")}} si ningún argumento es estipulado. Desde la versión 5 de ECMAScript estos parámetros pueden estar en un objeto similar a un array en lugar de un array. Véase [browser compatibility](#browser_compatibility) para mayor información.

### Valor de retorno

El resultado de llamar a la función con el valor dado **`this`** y argumentos.

## Descripción

Puede estipularse un objeto `this` diferente al llamar una función. `this` se refiere al objeto actual, el objeto haciendo la llamada. Con `apply`, puede escribirse un método una vez y heredarlo a otro objeto, sin necesidad de reescribir el método para adecuarlo al nuevo objeto.

`apply` es muy similar a {{jsxref("Function.call", "call()")}}, excepto por el tipo de argumentos que soporta. Puede utilizarse un arreglo de parámetros en lugar de un conjunto de pares nombre-valor. Con `apply`, puede utilizarse un arreglo literal, por ejemplo, `fun.apply(this, ['eat', 'bananas'])`, o un objeto `Array`, por ejemplo, `fun.apply(this, new Array('eat', 'bananas'))`.

Puede también utilizarse {{jsxref("Functions/arguments", "arguments")}} como parámetro `argsArray`. `arguments` es una variable local a la función. Puede utilizarse para acceder a todos los argumentos no específicados en la llamada al objeto. Por lo tanto, no se requiere conocer todos los argumentos del objeto invocado cuando se utiliza el método `apply`. Puede utilizarse `arguments` para pasar los argumentos al objeto invocado. El objeto invocado es entonces responsable por el manejo de los argumentos.

Desde la 5ta edición de ECMAScript se puede utilizar también cualquier tipo de objeto similar a un arreglo, que en términos prácticos significa que tendrá una propiedad `length` y propiedades integer en el rango (`0...length)`. Por ejemplo, ahora puede utilizarse un {{domxref("NodeList")}} o un objeto personalizado como: `{'length': 2, '0': 'eat', '1': 'bananas'}`.

> **Nota:** La mayoría de los navegadores, incluidos Chrome 14 e Internet Explorer 9, aún no soportan el uso de objetos similares a un array y arrojarán una excepción.

## Ejemplos

### Utilizando `apply` para encadenar constructores

Puedes utilizar `apply` para encadenar {{jsxref("Operators/new", "constructors")}} para un objeto, similar a Java. En el ejemplo siguiente se crea un método global a {{jsxref("Function")}} llamado `construct`, en cual posibilita el uso de un objeto similar a un arreglo en un constructor en lugar de una lista de argumentos.

```js
Function.prototype.construct = function (aArgs) {
  var fConstructor = this,
    fNewConstr = function () {
      fConstructor.apply(this, aArgs);
    };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};
```

Ejemplo de uso:

```js
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

alert(myInstance.property1); // alerts "Hello world!"
alert(myInstance instanceof MyConstructor); // alerts "true"
alert(myInstance.constructor); // alerts "MyConstructor"
```

> **Nota:** El método `Function.construct` no nativo no funcionará con algunos constructores nativos (como {{jsxref("Date")}}, por ejemplo). En estos casos se deberá utilizar el método {{jsxref("Function.bind")}} (por ejemplo, supóngase un arreglo como el siguiente para utilizar con el constructor `Date`: `[2012, 11, 4]`; en este caso se tendría que escribir algo como: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` – de cualquier manera, ésta no es la mejor manera de hacerlo y probablemente no debería utilizarse en ningún entorno en producción).

### `apply` y funciones built-in

El uso inteligente de **`apply`** permite utilizar funciones built-in para algunas tareas que, de otra manera, habrían sido escritas recorriendo los valores del arreglo dentro de un bucle. Como ejemplo, vamos a utilizar `Math.max`/`Math.min` para encontrar el máximo/mínimo valor en un arreglo.

```js
/* min/max number in an array */
var numbers = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
var max = Math.max.apply(
  null,
  numbers,
); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* vs. simple loop based algorithm */
(max = -Infinity), (min = +Infinity);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
  if (numbers[i] < min) min = numbers[i];
}
```

Pero cuidado: utilizando `apply` de esta manera estás corriendo el riesgo de exceder el límite de argumentos permitido por el motor de JavaScript. Las consecuencias de aplicar una función con demasiados argumentos (imagínate más de decenas de miles de argumentos) varían entre los distintos motores (JavaScriptCore tiene un [límite de argumentos fijo de 65536](https://bugs.webkit.org/show_bug.cgi?id=80797)), porque el límite (de hecho, incluso el comportamiento de cualquier pila excesivamente larga) no está especificado. Algunos motores lanzarán una excepción. Más perniciosamente, otros limitarán de manera arbitraria el número de argumentos que se están pasando en realidad a la función. (Para ilustrar este último caso: si un motor tuviera un límite de cuatro argumentos \[por supuesto, los límites reales son significamente mayores], sería como si los argumentos 5, 6, 2 y 3 hubieran sido pasados a `apply` en los ejemplos anteriores, en lugar del arreglo completo). Si el valor de tu arreglo pudiera crecer en decenas de miles, utiliza una estrategia híbrida: aplica a tu función trozos del array a la vez:

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### Utilizando apply en "monkey-patching"

(Reemplazando de manera dinámica los argumentos en tiempo de ejecución)

`apply` puede ser la mejor manera de reemplazar dinámicamente una función 'built-in' de Firefox, o de una librería de JavaScript. Dada una función `someobject.foo`, puedes modificar la función de una forma 'hacker', como ésta:

```js
var originalfoo = someobject.foo;
someobject.foo = function () {
  // Haz algo antes de llamar a la función
  console.log(arguments);
  // Llama a la función como la hubieras llamado normalmente
  originalfoo.apply(this, arguments);
  // Aquí, ejecuta algo después
};
```

Este método es especialmente útil cuando quieres depurar eventos, o interfaces con algún elemento que no tiene API, al igual que los diversos `.on` (eventos`[event]...,`como los que se usan en el [Devtools Inspector](/es/docs/Tools/Page_Inspector#Developer_API))

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Functions/arguments", "arguments")}} objetos
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
