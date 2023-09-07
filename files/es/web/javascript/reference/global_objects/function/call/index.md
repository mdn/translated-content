---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
---

{{JSRef("Objetos_globales", "Function")}}

## Resumen

El método **`call()`** llama a una función con un valor dado `this` y con argumentos provistos individualmente.

## Sintaxis

```
function.call(thisArg[, arg1[, arg2[, ...]]])
```

### Parametros

- `thisArg` {{optional_inline}}

  - : El valor a usar como `this` cuando se llama a _`function`_.

    > **Advertencia:** En ciertos casos, `thisArg` puede no ser el valor actual visto por el método.
    >
    > Si el método es una función en {{jsxref("Strict_mode", "non-strict mode", "", 1)}}, {{jsxref("Global_Objects/null", "null")}} y {{jsxref("Global_Objects/undefined", "undefined")}} serán reemplazados con el objeto global, y valores primitivos serán convertidos a objetos.

- `arg1, arg2, ...`
  - : Argumentos para el objeto.

### Valor de retorno

El resultado de llamar a la función con el `this` especificado y los argumentos.

## Descripción

`call()` permite que una función/método que pertenece a un objeto, ser asignada y llamada para un objeto diferente.

`call()` provee un nuevo valor de `this` a la función/método. Con `call()`, puedes escribir un método ona vez y heredarlo a otro objeto, sin tener que reescribir el método en el nuevo objeto.

> **Nota:** Mientras la sintaxis de esta función es casi identica a la función {{jsxref("Function.apply", "apply()")}}, la diferencia fundamental es que `call()` acepta una **lista de argumentos**, mientras `apply()` accepta un **arreglo sencillo de argumentos**.

## Ejemplos

### Usando `call` para encadenar constructores para un objeto

Puede usar `call` para encadenar constructores para un objeto (similar a Java).

En el siguiente ejemplo, el constructor para el objeto `Producto` es definido con dos parametros, `nombre` y `precio`.

Otras dos funciones `Comida` y `Juguete` invocan a `Producto`, pasándo `this`, `nombre` y `precio`. `Producto` inicializa las propiedades `nombre` y `precio`, ambas funciones especializadas definen la `categoria`.

```js
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;

  if (precio < 0)
    throw RangeError(
      'No se puede crear el producto "' + nombre + '" con un precio negativo',
    );
  return this;
}

function Comida(nombre, precio) {
  Producto.call(this, nombre, precio);
  this.categoria = "comida";
}
Comida.prototype = new Producto();

function Juguete(nombre, precio) {
  Producto.call(this, nombre, precio);
  this.categoria = "juguete";
}
Juguete.prototype = new Producto();

var queso = new Comida("feta", 5);
var diversion = new Juguete("robot", 40);
```

### Usando `call` para invocar una función anónima

En este ejemplo, creamos una función anónima y usamos `call` para invocarla en cada objeto en un arreglo.

El propósito principal de la función anónima aquí es agregar una función `print` a cada objeto, el cual puede imprimir el índice correcto en el arreglo.

> **Nota:** Pasar el objeto como valor `this` no es estrictamente necesario, pero se hace con propósito explicativo.

```js
var animales = [
  { especie: "Leon", nombre: "Rey" },
  { especie: "Whale", nombre: "Fail" },
];

for (var i = 0; i < animales.length; i++) {
  (function (i) {
    this.imprimir = function () {
      console.log("#" + i + " " + this.especie + ": " + this.nombre);
    };
    this.imprimir();
  }).call(animales[i], i);
}
```

## See also

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
