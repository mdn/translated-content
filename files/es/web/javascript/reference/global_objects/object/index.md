---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object
browser-compat: javascript.builtins.Object
---

{{JSRef}}

La clase **`Object`** representa uno de los [tipos de datos en Javascript](/es/docs/Web/JavaScript/Data_structures). Es usado para guardar una colección de datos definidos y entidades más complejas. Los objetos pueden ser creados utilzando el constructor {{jsxref("Object/Object", "Object()")}} o [la sintaxis literal / inicializador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Descripción

Casi todos los objetos en JavaScript son instancias de {{jsxref("Object")}}; un objeto típico hereda propiedades (incluyendo los métodos) de `Object.prototype`, a pesar de que esas propiedas puedan ser sobreescritas. Aun así, un `Object` puede ser deliberadamente creado para que esto no se cumpla (por ejemplo con {{jsxref("Object.create", "Object.create(null)")}}) o puede alterarse para que esto no sea más verdad (por ejemplo con {{jsxref("Object.setPrototypeOf")}}).

Los cambios realizados en el `Object` prototipo son vistos por todos los objetos de la cadena prototipal, a no ser que las propiedas y métodos sujetos a esos cambios hayan sido sobreecritos más abajo en la cadena. Sobreescribir o extender el comportamiento de un objeto es un mecanismo muy poderoso, aunque potencialmente peligroso.

El constructor `Objeto` crea un envoltorio de objeto para el valor dado.

- Si el valor es {{jsxref("null")}} or {{jsxref("undefined")}}, se creará un objeto y se devolverá un objeto vacío.
- Si el valor ya es un objeto, entonces se retornará el valor.
- En cualquier otro caso, se retornará un objeto del Tipo que corresponda al valor dado

Cuando lo llamamos en un contexto no-constructivo, `Object` se comporta igual que `new Object()`.

Véase también la [la sintaxis literal / inicializador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Borrando una propiedad de un objeto

No hay ningún método en un Objeto que sirva para borrar sus propiedades (como {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). Para hacerlo, es necesario el uso del [operador delete](/es/docs/Web/JavaScript/Reference/Operators/delete).

## Constructor

- {{jsxref("Object/Object", "Object()")}}
  - : Crea un nuevo objeto `Object`. Este es un envoltorio para el valor dado.

## Métodos estáticos

- {{jsxref("Object.assign","Object.assign()")}}
  - : Copia los valores de todas las propiedades de uno o más objetos fuente al objeto asignado.
- {{jsxref("Object.create","Object.create()")}}
  - : Crea un nuevo objeto con el objeto prototipal especificado y sus propiedades.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : Añade la propiedad nombrada a un objeto.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : Añade las propiedades nombradas a un objeto.
- {{jsxref("Object.entries","Object.entries()")}}
  - : Devuelve un array que contiene todos los pares `[key, value]` de las propiedades enumerables en formato cadena de texto que le **pertenecen** a un objeto dado.
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : Congela un objeto. Otro código no puede borrar ni cambiar sus propiedades.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : Devuevle un nuevo objeto de los pares iterables `[key, value]`. (Este método hace lo contario a {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : Devuevle un descriptor de propiedad para una propiedad nombrada en un objeto.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : Devuelve un objeto con todos los descriptores de propiedad pertenecientes a un objeto.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : Devuelve un arreglo que contiene todos los nombres de las propiedades enumerables y no enumerables que le **pertetecen** a un objeto dado.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : Devuelve un objeto que contiene todas las propiedades símbolo encontradas directamente en un objeto dado.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : Devuelve el prototipo (la propiedad interna `[[Prototype]]`) del objeto especificado.
- {{jsxref("Object.is","Object.is()")}}
  - : Compara si dos valores son el mismo valor. Iguala todos los valores `NaN` (lo que difiere de la Comparación Abstracta de Igualdad y de la Comparación Estricta de Igualdad).
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : Determina si está permitido extender un objeto.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : Determina si un objeto está congelado.
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : Determines si un objeto está sellado.
- {{jsxref("Object.keys","Object.keys()")}}
  - : Devuelve un arreglo que contiene todos los nombres de las propiedades enumerables de tipo cadena de texto **pertenecientes** al objeto dado.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : Previene que un objeto pueda extenderse.
- {{jsxref("Object.seal","Object.seal()")}}
  - : Previene que otro código pueda borrar propiedades de un objeto.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : Estipula el prototipo de un objeto (su propiedad interna `[[Prototype]]`).
- {{jsxref("Object.values","Object.values()")}}
  - : Devuelve un arreglo que contiene todos los valores correspondientes a las propiedades enumerables de tipo cadena de texto **pertenecientes** a un objeto dado.

## Propiedades de instancia

- {{jsxref("Object.prototype.constructor")}}
  - : Especifica la función que crea el prototipo de un objeto.
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
  - : Apunta al objeto que fue usado como prototipo cuando el objeto fue instanciado.

## Métodos de instancia

- {{jsxref("Object.prototype.__defineGetter__()")}}
  - : Asocia una función a una propiedad que, cuando es accedida, ejecuta la función y retorna su valor de retorno.
- {{jsxref("Object.prototype.__defineSetter__()")}}
  - : Asocia una función a una propiedad que, cuando es estipulada, ejecuta la función que modificará dicha propiedad.
- {{jsxref("Object.prototype.__lookupGetter__()")}}
  - : Devuelve la función asociada a la propiedad establecida por el método {{jsxref("Object.prototype.__defineGetter__()", "__defineGetter__()")}}.
- {{jsxref("Object.prototype.__lookupSetter__()")}}
  - : Devuevle la función asociada a la propiedad establecida por el método {{jsxref("Object.prototype.__defineSetter__()", "__defineSetter__()")}}.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Devuelve un booleano que indica si el objeto contiene una propiedad determinada como una propiedad directa del objeto y que no haya sido heredada a través de la cadena prototipal.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Devuelve un booleano que indica si el objeto por el cual este método está siendo llamado está en la cadena prototipal del objeto específicado.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Devuelve un booleano indicando si el [atributo ECMAScript \[\[Enumerable\]\]](/es/docs/Web/JavaScript/Data_structures#propiedades) interno está establecido.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Llama a {{jsxref("Object.toString", "toString()")}}.
- {{jsxref("Object.prototype.toString()")}}
  - : Devuelve una representación del objeto en formato cadena de texto.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Devuelve el valor primitivo del objeto especificado.

## Ejemplos

### Usando `Object` dándole tipos `undefined` y `null`

Los siguientes ejemplos almacenan un objeto vacío `Object`en `o`:

```js
let o = new Object();
```

```js
let o = new Object(undefined);
```

```js
let o = new Object(null);
```

### Usando `Object`para crear objetos `Boolean``

Los siguientes ejemplos almacenan objetos {{jsxref("Boolean")}} en `o`:

```js
// equivalente a o = new Boolean(true)
let o = new Object(true);
```

```js
// equivalente a o = new Boolean(false)
let o = new Object(Boolean());
```

### Prototipos del objeto

Cuando altere el comportamiento de los métodos existentes en `Object.prototype`, considere inyectar el código envolviendo la extensión antes o después de la lógica existente. Por ejemplo, este código (no testeado) ejecutará precondicionalmente la lógica modificada antes que la lógica predefinida o la ejecución de cualquier otra extensión.

Cuando una función es llamada, los argumentos de la llamada son tenidos por la "variable" pseudo-arreglo [arguments] (/es/docs/Web/JavaScript/Reference/Functions/arguments). Por ejemplo en la llamada `myFn(a, b, c)`, los argumentos dentro del cuerpo de `myFn` contendrán tres elementos pseudo-arreglo correspondientes a `(a, b, c)`.

Cuando modificamos prototipos con hooks, pase `this`y sus argumentos (el estado durante el llamado) al actual comportamiento llamando a `apply()`en la función. Esta patrón puede ser usado por cualquier prototypo, como `Node.prototype`, `Function.prototype`, etc.

```js
var current = Object.prototype.valueOf;

// Ya que mi propiedad "-prop-value" es transversal y no siempre está
// en la misma cadena protipal, yo quiero cambiar el Object.prototype:
Object.prototype.valueOf = function () {
  if (this.hasOwnProperty("-prop-value")) {
    return this["-prop-value"];
  } else {
    // Si no parece uno de mis objetos, debo caer en
    // el comportamiento predeterminado reproduciendo el comportamiento actual lo mejor que podamos.
    // Apply se comporta como lo hace "super" en otros lenguajes.
    // A pesar de que valueOf() no tome ningún argumento, puede hacerlo.
    return current.apply(this, arguments);
  }
};
```

Ya que JavaScript no tiene exactamente objetos subclasse, el prototipo sirve para crear objetos que actúen como "clase base" para ciertas funciones que actúan como objetos y así mitigar esta limitación. Por ejemplo:

```js
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name);
  }
};

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
//Si no aplicas Object.prototype.constructor a Employee,
//tomará  prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Employee(hijo).

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hi, I am " + this.name + ", the " + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
//Si no aplicas Object.prototype.constructor a Customer,
//tomará  prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Customer (hijo)

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;
//Si no aplicas Object.prototype.constructor a Mime,
//tomará  prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Mime (hijo).

var bob = new Employee("Bob", "Builder");
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Handyman");
var mike = new Customer("Mike");
var mime = new Mime("Mime");

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Inicializador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).
