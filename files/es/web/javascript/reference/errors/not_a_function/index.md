---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
---

{{jsSidebar("Errors")}}

## Mensaje

```
TypeError: "x" is not a function
```

## Tipo de error

{{jsxref("TypeError")}}.

## ¿Qué salió mal?

Se ha intentado llamar a un elemento o valor como si fuera una función, pero no lo era. El código esperaba que hubiera una función implementada, pero no la ha encontrado.

¿Está bien escrito el nombre de la función?¿El objeto sobre el que estás haciendo la llamada tiene ese método implementado realmente? Por ejemplo, los objetos tipo Array tienen implementada la función map, pero el resto de tipos no la tienen.

Hay muchas funciones propias de Javascript (built-in) que necesitan una función de callback, por lo que tienes que pasar esa función como parámetro para que estos métodos funcionen correctamente.

- Cuando se usen objetos {{jsxref("Array")}} o {{jsxref("TypedArray")}}:

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}}, {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Cuando se usen objetos {{jsxref("Map")}} y {{jsxref("Set")}}:

  - {{jsxref("Map.prototype.forEach()")}} y {{jsxref("Set.prototype.forEach()")}}

## Ejemplos

### Nombre de la función mal escrito

En este caso, que ocurre con mucha frecuencia, el nombre de la función está mal escrito:

```js example-bad
var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
```

El nombre correcto de la función es `getElementById`:

```js example-good
var x = document.getElementById("foo");
```

### Función llamada en el objeto equivocado

Puede que el método que queramos usar no esté implementado en el tipo de objeto que estemos usado. En este ejemplo, queremos usar el método map, que recibe una función de callback como argumento, pero solo lo tienen los objetos {{jsxref("Array")}}.

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function (num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Como obj es un diccionario (parejas clave/valor), no tiene método map y se produce el error. Para evitarlo, hay que usar un {{jsxref("Array")}}:

```js example-good
var numeros = [1, 4, 9];

numeros.map(function (num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

### La función comparte un nombre con una propiedad preexistente

A veces, al hacer una clase, puede tener una propiedad y una función con el mismo nombre. Al llamar a la función, el compilador piensa que la función deja de existir.

```js example-bad
var Perro = function () {
  this.edad = 11;
  this.color = "negro";
  this.nombre = "Rafael";
  return this;
};

Perro.prototype.nombre = function (nombre) {
  this.nombre = nombre;
  return this;
};

var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Uncaught TypeError: myNewDog.name is not a function
```

Utilice un nombre de propiedad diferente en su lugar:

```js example-good
var Perro = function () {
  this.edad = 11;
  this.color = "negro";
  this.nombrePerro = "Rafael"; //Usando this.nombrePerro en vez de .nombre
  return this;
};

Perro.prototype.nombre = function (nombre) {
  this.nombrePerro = nombre;
  return this;
};

var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Perro { edad: 11, color: 'negro', nombrePerro: 'Lilly' }
```

## Ve también

- [Functions](/es/docs/Web/JavaScript/Reference/Functions)
