---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef("Global_Objects", "Object")}}

## Resumen

El método estático **`Object.defineProperty()`** define una nueva propiedad sobre un objeto, o modifica una ya existente, y devuelve el objeto modificado.

> **Nota:** Ud. puede llamar a este método directamente mediante el constructor {{jsxref("Object")}} en vez de crear una instancia del tipo `Object`.

## Sintaxis

```
Object.defineProperty(obj, prop, descriptor)
```

### Parámetros

- `obj`
  - : El objeto sobre el cual se define la propiedad.
- `prop`
  - : El nombre de la propiedad a ser definida o modificada.
- `descriptor`
  - : El descriptor de la propiedad que está siendo definida o modificada.

## Descripción

Este método permite añadir o modificar una propiedad en un objeto.

La adición normal de una propiedad a través de la asignación crea propiedades que aparecen durante la enumeración de propiedades en el bucle ({{jsxref("Sentencias/for...in", "for...in")}} o el método {{jsxref("Object.keys")}}), cuyos valores pueden modificarse y pudiendo incluso eliminar la propiedad del objeto mediante el método {{jsxref("Operadores/delete", "delete")}}.

Este método nos permite modificar el comportamiento por defecto de las propiedades. Es decir, nos permite definir una propiedad como no enumerable, no modificable o incluso evitar que pueda ser eliminada del objeto.

Existen dos tipos de descriptores: De datos y de acceso. Un **descriptor de datos** define una propiedad que tiene un valor, el cual puede ser o no modificado. Un descriptor de acceso define una propiedad mediante un par de funciones getter-setter que describe como se obtiene o se modifica el contenido de dicha propiedad. Un descriptor debe de ser de uno de estos dos tipos; no puede ser ambos.

Ambos tipos de descriptores son objetos y comparten las siguientes claves opcionales:

- `configurable`
  - : `true` si y solo si el tipo de descriptor de propiedad puede modificarse y si la propiedad puede ser eliminada del correspondiente objeto.
    **Por defecto es `false`.**
- `enumerable`
  - : `true` si y solo si dicha propiedad se muestra durante la enumeración de las propiedades del objeto correspondiente.
    **Por defecto es `false`.**

Un descriptor de datos tiene además las siguientes claves opcionales:

- `value`
  - : El valor asociado a la propiedad. Puede ser cualquier tipo valido de JavaScript (number, object, function, etc).
    **Por defecto es {{jsxref("Objetos_Globales/undefined", "undefined")}}.**
- `writable`
  - : `true` Indica si el valor de la propiedad puede modificarse con el {{jsxref("Operators/Assignment_Operators", "operador de asignación", "", 1)}}.
    **Defaults to `false`.**

Un descriptor de acceso además tiene las siguientes claves opcionales:

- `get`
  - : Una función cuyo valor retornado será el que se use como valor de la propiedad.
    **Defaults to {{jsxref("Objetos_Globales/undefined", "undefined")}}.**
- `set`
  - : Una función que recibe como único argumento el nuevo valor que se desea asignar a la propiedad y que devuelve el valor que se almacenará finalmente en el objeto.
    **Defaults to {{jsxref("Objetos_Globales/undefined", "undefined")}}.**

Hay que tener en cuenta que estas opciones también pueden heredarse; es decir, las opciones de la propiedad se han podido establecer en el prototipo de una clase de la que hereda el objeto. De modo que si queremos asegurarnos unos valores por defecto tenemos tres opciones: fijar el {{jsxref("Object.prototype")}} con {{jsxref("Object.freeze")}}, definir todas las opciones explicitamente, o establecer a {{jsxref("Objetos_Globales/null", "null")}} la propiedad [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

```js
// Usando __proto__
Object.defineProperty(obj, "key", {
  __proto__: null, // no aceptar propiedades heredadas
  value: "static", // no enumerable
  // no configurable
  // no modificable
  // como opciones por defecto
});

// Definiendo todo explicitamente
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// Reciclando el mismo objeto
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });
  d.value = value;
  return d;
}
// ... y ...
Object.defineProperty(obj, "key", withValue("static"));

// Si está disponible freeze, previene añadir o eliminar
//del prototipo del objeto las propiedades
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

## Ejemplos

Si quiere ver algunos ejemplos de utilización del método `Object.defineProperty` con una sintaxis tipo _binary-flags_, vea [ejemplos adicionales](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples).

### Ejemplo: Creando una propiedad

Cuando la propiedad especificada no existe en el objeto, `Object.defineProperty()` crea una nueva. En el descriptor pueden omitirse campos, a los cuales se les asignará el valor por defecto. A todos los que sean de tipo Booleano se les asignará el valor falso. Los campos `value`, `get` y `set` se establecerán por defecto a {{jsxref("Objetos_Globales/undefined", "undefined")}}. Una propiedad definida sin indicar `get`/`set`/`value`/`writable` es denominada "genérica" y "tipificada" como un descriptor de datos.

```js
var o = {}; // Creates a new object

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue, unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

### Ejemplo: Modificando una propiedad

Cuando la propiedad realmente existe, `Object.defineProperty()` intenta modificar la propiedad de acuerdo a los valores en la descripción y la configuración actual del objeto. Si la descripción antigüa tenía su atributo de configuración establecido en `false` (la propiedad se dice "sin capacidad de configuración"), entonces ningún atributo además de los que tienen capacidad de escritura pueden ser cambiados. En ese caso, no es posible cambiar hacía atras o hacía delante entre datos y métodos de acceso de tipos de propiedades.

Si una propiedad no tiene capacidad de configuración, su atributo `writabble` solo puede ser cambiada to `false`.

Un {{jsxref("Global_Objects/TypeError", "TypeError")}} es arrojado cuando se intenta cambiar las propiedades de atributos sin capacidad de configuración (adeḿas del atributo `writable`) a menos que el valor actual y el valor nuevo sean los mismos.

#### Atributo writable

Cuando la propiedad de un atributo `writable` es establecido to `false`, la propiedad se dice esta "sin capacidad de escritura". No puede ser reasignada.

```js
var o = {}; // Crea un objeto nuevo

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // logs 37
o.a = 25; // Ningún error arrojado (lo tiraría en modo estricto, aún si el valor fuera el mismo)
console.log(o.a); // muestra 37. La asignación no funcionó
```

Como es visto en el ejemplo anterior, intentar escribir en una propiedad "sin capacidad de escritura" no la cambia pero sí arroja un error.

#### Atributo enumerable

El atributo de la propiedad `enumerable` se define si la propiedad aparece en un ciclo {{jsxref("Statements/for...in", "for...in")}} y {{jsxref("Object.keys()")}} o no.

```js
var o = {};
Object.defineProperty(o, "a", { value: 1, enumerable: true });
Object.defineProperty(o, "b", { value: 2, enumerable: false });
Object.defineProperty(o, "c", { value: 3 }); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
```

#### Atributo configurable

El atributo `configurable` define si la propiedad puede ser eliminada del objeto, y si sus atributos (excepto `writable`) pueden ser modificados

```js
var o = {};
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", { configurable: true }); // arroja TypeError
Object.defineProperty(o, "a", { enumerable: true }); //  arroja  TypeError
Object.defineProperty(o, "a", { set: function () {} }); //  arroja  TypeError (set estaba definido como undefined)
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
}); // arroja TypeError (incluso aunque los get hacen lo mismo)
Object.defineProperty(o, "a", { value: 12 }); // arroja TypeError

console.log(o.a); // logs 1
delete o.a; // No hace nada
console.log(o.a); // logs 1
```

Si `o.a` tuviese `configurable` a `true`, no se habrían arrojado errores y la propiedad habría sido eliminada.

### Ejemplo: Añadiendo propiedades y valores por defecto

Es importante tener en cuenta la forma en la se aplican los valores por defecto de los atributos. Suele haber diferencias entre simplemente usar la notación con '.' y usar `Object.defineProperty()`, como se muestra en el siguiente ejemplo:

```js
var o = {};

o.a = 1;
// es equivalente a :
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// Sin embargo,
Object.defineProperty(o, "a", { value: 1 });
// es equivalente a :
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Ejemplo: Setters y Getters a medida

Example below shows how to implement a self-archiving object. When `temperature` property is set, the `archive` array gets a log entry.

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

or

```js
var pattern = {
  get: function () {
    return "I always return this string, whatever you have assigned";
  },
  set: function () {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty); // I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Enumerability and ownership of properties](/es/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Operators/get", "get")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.create()")}}
- [Additional `Object.defineProperty` examples](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)
