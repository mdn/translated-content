---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef("Global_Objects", "Function")}}

## Resumen

El método **`bind()`** crea una nueva función, que cuando es llamada, asigna a su operador _this_ el valor entregado, con una secuencia de argumentos dados precediendo a cualquiera entregados cuando la función es llamada.

El valor de _this_ es ignorado cuando la función es llamada con el operador _new_.

## Sintaxis

```
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

### Parametros

- `thisArg`
  - : Es un valor que será enviado a la función destino cuando se llame a la función de enlace. Este valor será ignorado si la función de enlace es construida usando el operador {{jsxref("Operators/new", "new")}}.
- `arg1, arg2, ...`
  - : Son los argumentos que se enviarán además de los provistos a la función de enlace cuando se invoque la función destino.

### Valor de retorno

Una copia de la función entregada con el valor especificado `this` y los argumentos iniciales.

## Descripción

La función `bind()` crea una nueva función (**función ligada**) con el mismo cuerpo (propiedad interna {{jsxref("Function.prototype.call", "call")}} en términos de ECMAScript 5) como la función que será llamada (la **función objetivo** de la función ligada) con la referencia `this` asociada al primer argumento de `bind()`, el cual no podrá ser sobreescrito. `bind()` también acepta parámetros predeterminados que antecederán al resto de los parámetros específicos cuando la función objetivo sea llamada. Una función ligada también puede ser construída utilizando el operador {{jsxref("Operators/new", "new")}}: al hacerlo, actuará como si en su lugar hubiera sido construída la función objetivo.

En este último caso, el parámetro correspondiente para `this` será ignorado, aunque los parámetros predeterminados que antecederán al resto sí serán provistos para la función emulada.

## Ejemplos

### Ejemplo: Crear una función ligada

El uso más simple de `bind()` es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con la referencia `this`. Un error común para nuevos programadores de JavaScript es que obtienen una referencia a un método de un objeto, posteriormente ejecutan ese método desde la referencia externa y esperan que la referencia de `this` siga apuntando al objeto original de donde se obtuvo el método (v.g. cuando se usa ese método en un callback). Sin el debido cuidado, el objeto original es comúnmente perdido. Creando una función ligada desde la función empleando el objeto original, resuelve limpiamente este problema:

```js
this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81
```

### Ejemplo: Funciones Parciales

El siguiente uso simple de `bind()` es definir una función con argumentos predeterminados que precederán a los argumentos finales de la función ligada. Estos argumentos iniciales (en caso de haberlos) se definen a continuación de lo que será la referencia de `this` y son entonces enviados como argumentos de la función objetivo, seguidos por los argumentos enviados a la función ligada cada vez que dicha función sea llamada.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Crear funcion (sin referencia this) con argumento inicial predeterminado
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
```

### Ejemplo: Con setTimeout

De manera predeterminada, dentro de {{ domxref("window.setTimeout()") }}, la palabra reservada `this` será setteada al objeto {{ domxref("window") }} (o a global). Cuando se esté trabajando con métodos de clase que requieran que `this` se refiera a instancias de clase, usted puede explícitamente ligar `this` a la función callback para mantener la referencia de la instancia.

```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};
```

### Ejemplo: Funciones ligadas usadas como constructores

> **Advertencia:** **Advetencia:** Esta sección demuestra las capacidades de JavaScript y documenta algunos usos extremos del método `bind()`. Los métodos mostrados a continuación no son la mejor forma de hacer las cosas y probablemente no deberían ser utilizados en ningún ambiente productivo.

Las funciones ligadas son automáticamente adecuadas para usarse con el operador {{jsxref("Operators/new", "new")}} para construir nuevas instancias creadas por la función objetivo. Cuando una función ligada es utilizada para construir un valor, el parámetro enviado para reemplazar la referencia `this` es ignorado. De cualquier forma, los argumentos iniciales sí son tomados en consideración y antecederán a los parámetros que se envíen al constructor:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);
// not supported in the polyfill below,
// works fine with native bind:
var YAxisPoint = Point.bind(null, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

Note que no necesita hacer nada especial para crear una función ligada para usarse con {{jsxref("Operators/new", "new")}}. El razonamiento es que usted no necesita hacer nada especial para crear una función ligada para ser llamada planamente, aún si usted prefiriera requerir que la función ligada sea llamada únicamente utilizando {{jsxref("Operators/new", "new")}}.

```js
// Ejemplo que puede ser ejecutado directamente en tu consola JavaScript
// ...continúa de arriba

// Aún puede ser invocada como una función normal
// (aunque es usualmente indeseable)
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y;
// >  '0,13'
```

Si desea utilizar una función ligada únicamente usando {{jsxref("Operators/new", "new")}}, o únicamente mediante una llamada directa, la función objetivo debe forzar esa restricción.

### Ejemplo: Crear atajos

`bind()` también es útil en casos en los que desea crear un atajo para una función que requiere una referencia específica para `this`.

Tomando {{jsxref("Array.prototype.slice")}}, por ejemplo, el cual se desearía utilizar para convertir un objeto tipo array a un arreglo real. Podría crear un atajo como el siguiente:

```js
var slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Con `bind()`, esto puede ser simplificado. En el siguiente fragmento de código, `slice` es una función ligada a la función {{jsxref("Function.prototype.call()", "call()")}} de {{jsxref("Function.prototype")}}, con la referencia `this` setteada a la función {{jsxref("Array.prototype.slice()", "slice()")}} de {{jsxref("Array.prototype")}}. Esto significa que llamadas adicionales a `call()` pueden omitirse:

```js
// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

// ...

slice(arguments);
```

## Polyfill

La función `bind()` fue añadida a la especificación ECMA-262, 5a edición; por lo tanto podría no estar presente en todos los navegadores. Usted puede parcialmente simularla al insertar el siguiente código al inicio de sus scripts, permitiendo emplear muchas de las funcionalidades de `bind()` en implementaciones que no la soportan nativamente.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(
        "Function.prototype.bind - what is trying to be bound is not callable",
      );
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          this instanceof fNOP && oThis ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)),
        );
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

Algunas de las muchas diferencias (bien podría haber otras, en tanto la siguiente lista no intenta ser exhaustiva) entre este algoritmo y el algoritmo de la especificación son:

- La implementación parcial se basa en {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}} y {{jsxref("Function.prototype.apply()")}}, métodos incorporados para tener sus valores originales.
- La implementación parcial crea funciones que no tienen "poison pills" inmutables {{jsxref("Function.caller", "caller")}} y las propiedades de los `argumentos` que lanzan una {{jsxref("Global_Objects/TypeError", "TypeError")}} sobre get, set, o deletion. (Esto podría ser añadido si la implementación soportara {{jsxref("Object.defineProperty")}}, o parcialmente implementada [sin el comportamiento throw-on-delete] si la implementación soportara las extensiones [`Object.prototype.__defineGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) y [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) ).
- La implementación parcial crea funciones que tienen una propiedad `prototype`. (Las funciones ligadas no tienen ninguna).
- La implementación parcial crea funciones ligadas cuya propiedad {{jsxref("Function.length", "length")}} no coincide con la indicada por ECMA-262: ésta crea funciones con longitud 0, mientras que la implementación completa, dependiendo de la longitud de la función objetivo y del número de argumentos pre-especificados, podría regresar una longitud mayor a zero.

Si elige usar esta implementación parcial, **no debe de utilizarla en los casos en los que el comportamiento es distinto al de la especificación ECMA-262, 5th edition!** Con un poco de cuidado, de cualquier manera (y tal vez con algunas modificaciones adicionales para adecuarse a sus necesidades específicas), esta implementación parcial podría ser un puente razonable al momento en que `bind()` sea ampliamente implementada acorde a a la especificación.

Por favor checa <https://github.com/Raynos/function-bind> para ver una solución más profunda.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
