---
title: Operador new
slug: Web/JavaScript/Reference/Operators/new
---

{{jsSidebar("Operators", "Operadores")}}

El **operador `new`** permite a los desarrolladores crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.

{{InteractiveExample("JavaScript Demo: Expressions - new operator")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Eagle", "Talon TSi", 1993);

console.log(car1.make);
// Expected output: "Eagle"
```

## Sintaxis

```
new constructor[([arguments])]
```

### Parámetros

- `constructor`
  - : Una clase o función que especifica el tipo de instancia del objeto.

- `arguments`
  - : Una lista de valores con los que se llamará al `constructor`.

## Descripción

La palabra clave **`new`** hace lo siguiente:

1. Crea un objeto JavaScript simple y en blanco;
2. Vincula (establece el constructor de) este objeto a otro objeto;
3. Pasa el objeto recién creado del _Paso 1_ como el contexto `this`;
4. Devuelve `this` si la función no devuelve un objeto.

La creación de un objeto definido por el usuario requiere dos pasos:

1. Defina el tipo de objeto escribiendo una función.
2. Crea una instancia del objeto con `new`.

Para definir un tipo de objeto, crea una función para el tipo de objeto que especifique su nombre y propiedades. Un objeto puede tener una propiedad que en sí misma es otro objeto. Ve los siguientes ejemplos.

Cuando se ejecuta el código `new Foo(...)`, sucede lo siguiente:

1. Se crea un nuevo objeto, heredado de `Foo.prototype`.
2. La función constructora `Foo` se llama con los argumentos especificados y con {{JSxRef("Operators/this", "this")}} vinculado al objeto recién creado. `new Foo` es equivalente a `new Foo()`, es decir, si no se especifica una lista de argumentos, `Foo` se llama sin argumentos.
3. El objeto (no nulo, `false`, 3.1415 u otros tipos primitivos) devuelto por la función constructora se convierte en el resultado de toda la expresión `new`. Si la función constructora no devuelve explícitamente un objeto, en su lugar se utiliza el objeto creado en el paso 1. (Normalmente, los constructores no devuelven un valor, pero pueden elegir hacerlo si quieren redefinir el proceso normal de creación de objetos).

Siempre puedes agregar una propiedad a un objeto definido previamente. Por ejemplo, la instrucción `car1.color = "black"` agrega una propiedad `color` a `car1` y le asigna un valor de "`black`". Sin embargo, esto no afecta a ningún otro objeto. Para agregar la nueva propiedad a todos los objetos del mismo tipo, debes agregar la propiedad a la definición del tipo de objeto `Car`.

Puedes agregar una propiedad compartida a un tipo de objeto definido previamente mediante la propiedad {{JSxRef("Function")}}. Esto define una propiedad que comparten todos los objetos creados con esa función, en lugar de solo una instancia del tipo de objeto. El siguiente código agrega una propiedad de color con el valor `"color original"` a todos los objetos de tipo `Car`, y luego redefine ese valor con la cadena "`black`" solo en la instancia `car1` del objeto. Para obtener más información, consulta {{JSxRef("Function", "prototype")}}.

```js
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color); // undefined

Car.prototype.color = "color original";
console.log(car1.color); // 'color original'

car1.color = "black";
console.log(car1.color); // 'black'

console.log(Object.getPrototypeOf(car1).color); // 'color original'
console.log(Object.getPrototypeOf(car2).color); // 'color original'
console.log(car1.color); // 'black'
console.log(car2.color); // 'color original'
```

> [!NOTE]
> Si no escribiste el operador `new`, **la función `constructor` se invocará como cualquier función normal**, _sin crear un objeto._ En este caso, el valor de `this` también es diferente.

## Ejemplos

### Tipo de objeto e instancia de objeto

Supongamos que deseas crear un tipo de objeto para `cars`. Quieres que este tipo de objeto se llame `Car`, y quieres que tenga propiedades para marca, modelo y año (`make`, `model` y `year` en inglés respectivamente). Para ello, podrías escribir la siguiente función:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Ahora puedes crear un objeto llamado `myCar` de la siguiente manera:

```js
var myCar = new Car("Eagle", "Talon TSi", 1993);
```

Esta declaración crea `myCar` y le asigna los valores especificados para sus propiedades. Entonces el valor de `myCar.make` es la cadena "Eagle", `myCar.year` es el entero 1993, y así sucesivamente.

Puedes crear cualquier número de objetos `car` mediante llamadas a `new`. Por ejemplo:

```js
var kensCar = new Car("Nissan", "300ZX", 1992);
```

### Propiedad del objeto que en sí mismo es otro objeto

Supongamos que defines un objeto llamado `Person` de la siguiente manera:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

Y luego creas una instancia de dos nuevos objetos `Person` de la siguiente manera:

```js
var rand = new Person("Rand McNally", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

Luego, puedes reescribir la definición de `Car` para incluir una propiedad para `owner` (propietario en español) que tome un objeto `Person`, de la siguiente manera:

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

Para crear instancias de los nuevos objetos, utiliza lo siguiente:

```js
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
```

En lugar de pasar una cadena literal o un valor entero al crear los nuevos objetos, las declaraciones anteriores pasan los objetos `rand` y `ken` como parámetros para los propietarios. Para conocer el nombre del propietario de `car2`, puedes acceder a la siguiente propiedad:

```js
car2.owner.name;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- {{JSxRef("Function", "Funciones")}}
- {{jsxref("Reflect.construct()")}}
- {{jsxref("Object")}}
