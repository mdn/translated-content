---
title: Prototipos de objetos
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Los prototipos son el mecanismo mediante el cual los objetos de JavaScript heredan características entre sí. En este artículo, explicamos qué es un prototipo, cómo funcionan las cadenas de prototipos y cómo se puede establecer el prototipo de un objeto.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con los conceptos básicos de JavaScript
        (especialmente
        <a href="/es/docs/Learn_web_development/Core/Scripting/Object_basics">Fundamentos de objetos</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>La cadena de prototipos de JavaScript.</li>
          <li>El concepto de propiedades sombreadas (shadowing).</li>
          <li>Establecer prototipos.</li>
          <li>Los conceptos de prototipos y herencia.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## La cadena de prototipos

En la consola del navegador, intenta crear un objeto literal:

```js
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Saludos desde ${this.city}`);
  },
};

myObject.greet(); // Saludos desde Madrid
```

Este es un objeto con una propiedad de datos, `city`, y un método, `greet()`. Si escribes el nombre del objeto _seguido de un punto_ en la consola, como `myObject.`, la consola mostrará una lista de todas las propiedades disponibles para este objeto. Verás que, además de `city` y `greet`, ¡hay muchas otras propiedades!

```plain
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
```

Prueba acceder a una de ellas:

```js
myObject.toString(); // "[object Object]"
```

Funciona (aunque no sea obvio qué hace `toString()`).

¿Qué son estas propiedades adicionales y de dónde vienen?

Todo objeto en JavaScript tiene una propiedad incorporada, llamada su **prototipo**. El prototipo es en sí mismo un objeto, por lo que el prototipo tendrá su propio prototipo, formando lo que se conoce como una **cadena de prototipos**. La cadena termina cuando llegamos a un prototipo que tiene `null` como su propio prototipo.

> [!NOTE]
> La propiedad de un objeto que apunta a su prototipo **no** se llama `prototype`. Su nombre no está estandarizado, pero en la práctica todos los navegadores usan [`__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto). La forma estándar de acceder al prototipo de un objeto es el método {{jsxref("Object/getPrototypeOf", "Object.getPrototypeOf()")}}.

Cuando intentas acceder a una propiedad de un objeto: si la propiedad no se encuentra en el objeto mismo, se busca en el prototipo. Si aún no se encuentra, se busca en el prototipo del prototipo, y así sucesivamente hasta que se encuentre la propiedad o se llegue al final de la cadena, en cuyo caso se devuelve `undefined`.

Entonces, cuando llamamos a `myObject.toString()`, el navegador:

- busca `toString` en `myObject`
- no lo encuentra ahí, así que busca `toString` en el objeto prototipo de `myObject`
- lo encuentra ahí, y lo llama.

¿Cuál es el prototipo de `myObject`? Para averiguarlo, podemos usar la función `Object.getPrototypeOf()`:

```js
Object.getPrototypeOf(myObject); // Object { }
```

Este es un objeto llamado `Object.prototype`, y es el prototipo más básico, que todos los objetos tienen por defecto. El prototipo de `Object.prototype` es `null`, por lo que se encuentra al final de la cadena de prototipos:

![Cadena de prototipos para myObject](myobject-prototype-chain.svg)

El prototipo de un objeto no siempre es `Object.prototype`. Prueba esto:

```js
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
```

Este código crea un objeto `Date`, y luego recorre la cadena de prototipos, mostrando cada uno en la consola. Esto nos muestra que el prototipo de `myDate` es un objeto `Date.prototype`, y el prototipo de _ese_ es `Object.prototype`.

![Cadena de prototipos para myDate](mydate-prototype-chain.svg)

De hecho, cuando llamas a métodos conocidos, como `myDate2.getTime()`,
estás llamando a un método que está definido en `Date.prototype`.

## Propiedades sombreadas (shadowing)

¿Qué sucede si defines una propiedad en un objeto, cuando ya existe una propiedad con el mismo nombre en el prototipo del objeto? Veamos:

```js
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("¡algo distinto!");
};

myDate.getTime(); // '¡algo distinto!'
```

Esto debería ser predecible, dada la descripción de la cadena de prototipos. Cuando llamamos a `getTime()`, el navegador primero busca en `myDate` una propiedad con ese nombre, y solo revisa el prototipo si `myDate` no la define. Entonces, al agregar `getTime()` a `myDate`, se llama a la versión definida en `myDate`.

A esto se le llama "sombrear" (shadowing) la propiedad.

## Establecer un prototipo

Existen varias formas de establecer el prototipo de un objeto en JavaScript, y aquí describiremos dos: `Object.create()` y los constructores.

### Usando Object.create

El método `Object.create()` crea un nuevo objeto y te permite especificar un objeto que se usará como el prototipo del nuevo objeto.

Aquí hay un ejemplo:

```js
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

Aquí creamos un objeto `personPrototype`, que tiene un método `greet()`. Luego usamos `Object.create()` para crear un nuevo objeto con `personPrototype` como su prototipo. Ahora podemos llamar a `greet()` en el nuevo objeto, y el prototipo proporciona su implementación.

### Usando un constructor

En JavaScript, todas las funciones tienen una propiedad llamada `prototype`. Cuando llamas a una función como constructor, esta propiedad se establece como el prototipo del objeto recién creado (por convención, en la propiedad llamada `__proto__`).

Entonces, si establecemos el `prototype` de un constructor, podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo:

```js
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```

Aquí creamos:

- un objeto `personPrototype`, que tiene un método `greet()`
- una función constructora `Person()` que inicializa el nombre de la persona que se va a crear.

Luego colocamos los métodos definidos en `personPrototype` en la propiedad `prototype` de la función `Person` usando [`Object.assign`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

Después de este código, los objetos creados usando `Person()` tendrán `Person.prototype` como su prototipo, el cual contiene automáticamente el método `greet`.

```js
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
```

Esto también explica por qué dijimos antes que el prototipo de `myDate` se llama `Date.prototype`: es la propiedad `prototype` del constructor `Date`.

### Propiedades propias

Los objetos que creamos usando el constructor `Person` de arriba tienen dos propiedades:

- una propiedad `name`, que se establece en el constructor, por lo que aparece directamente en los objetos `Person`
- un método `greet()`, que se establece en el prototipo.

Es común ver este patrón, en el que los métodos se definen en el prototipo, pero las propiedades de datos se definen en el constructor. Esto se debe a que los métodos suelen ser los mismos para cada objeto que creamos, mientras que normalmente queremos que cada objeto tenga su propio valor para sus propiedades de datos (tal como aquí, donde cada persona tiene un nombre diferente).

Las propiedades que se definen directamente en el objeto, como `name` aquí, se llaman **propiedades propias**, y puedes verificar si una propiedad es una propiedad propia usando el método estático {{jsxref("Object/hasOwn", "Object.hasOwn()")}}:

```js
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
```

> [!NOTE]
> También puedes usar el método no estático {{jsxref("Object/hasOwnProperty", "Object.hasOwnProperty()")}} aquí, pero te recomendamos usar `Object.hasOwn()` si puedes.

## Prototipos y herencia

Los prototipos son una característica poderosa y muy flexible de JavaScript, que hace posible reutilizar código y combinar objetos.

En particular, permiten una forma de **herencia**. La herencia es una característica de los lenguajes de programación orientados a objetos que permite a los programadores expresar la idea de que algunos objetos en un sistema son versiones más especializadas de otros objetos.

Por ejemplo, si estamos modelando una escuela, podríamos tener _profesores_ y _estudiantes_: ambos son _personas_, por lo que tienen algunas características en común (por ejemplo, ambos tienen nombres), pero cada uno podría agregar características adicionales (por ejemplo, los profesores tienen una materia que enseñan), o podría implementar la misma característica de forma diferente. En un sistema OOP podríamos decir que tanto los profesores como los estudiantes **heredan de** personas.

Puedes ver cómo en JavaScript, si los objetos `Professor` y `Student` pueden tener prototipos `Person`, entonces pueden heredar las propiedades comunes, mientras agregan y redefinen aquellas propiedades que necesitan ser diferentes.

En el próximo artículo hablaremos sobre la herencia junto con las otras características principales de los lenguajes de programación orientados a objetos, y veremos cómo JavaScript las soporta.

## Resumen

Este artículo ha cubierto los prototipos de objetos en JavaScript, incluyendo cómo las cadenas de objetos prototipo permiten que los objetos hereden características entre sí, la propiedad `prototype` y cómo se puede usar para agregar métodos a los constructores, y otros temas relacionados.

En el próximo artículo veremos los conceptos que sustentan la programación orientada a objetos.

{{NextMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
