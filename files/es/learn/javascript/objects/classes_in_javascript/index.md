---
title: Herencia en JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
translation_of: Learn/JavaScript/Objects/Inheritance
original_slug: Learn/JavaScript/Objects/Inheritance
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

Con la mayoría de los detalles internos de OOJS (_JavaScript Orientado a Objetos)_ explicados, este artículo muestra cómo crear clases "hijo" (constructores) que heredan características de sus clases "padre". Además, presentamos algunos consejos sobre cuándo y dónde puedes usar OOJS y cómo se crean las clases con la sintaxis moderna de ECMAScript.

| Pre-requisitos: | Conocimientos básicos de informática, una comprensión básica de HTML y CSS, familiaridad con los principios básicos de JavaScript (ver [Primeros pasos](/es/docs/Learn/JavaScript/First_steps) y [Construyendo bloques](/es/docs/Learn/JavaScript/Building_blocks)) y conceptos básicos de OOJS (ver [Introduccion a objetos](/es/docs/Learn/JavaScript/Object-oriented/Introduction)). |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Entender cómo es posible implementar la herencia en JavaScript.                                                                                                                                                                                                                                                                                                                         |

## Herencia prototípica

Hasta ahora hemos visto algo de herencia en acción — hemos visto cómo funcionan las cadenas de prototipos, y cómo los miembros son heredados subiendo una cadena. Pero principalmente esto ha involucrado funciones integradas del navegador. ¿Cómo creamos un objeto en JavaScript que hereda de otro objeto?

Exploremos cómo hacer esto con un ejemplo concreto.

## Primeros pasos

Primero que nada, hazte una copia local de nuestro archivo [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html) (míralo [corriendo en vivo](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html) también). Dentro de aquí encontrarás el mismo ejemplo de constructor de `Persona()` que hemos estado usando a través del módulo, con una ligera diferencia — hemos definido solo las propiedades dentro del constructor:

```js
function Persona(nombrePila, apellido, edad, genero, intereses) {
  this.nombre = {
    nombrePila,
    apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
};
```

_Todos_ los métodos están definidos en el prototipo del constructor. Por ejemplo:

```js
Persona.prototype.saludo = function() {
  alert('¡Hola! soy ' + this.nombre.nombrePila + '.');
};
```

> **Nota:** En el código fuente, también verá los métodos `bio()` y `despedida()` definidos. Más tarde verá cómo estos pueden ser heredados por otros constructores.

Digamos que quisieramos crear una clase de `Profesor`, como la que describimos en nuestra definición inicial orientada a objetos, que hereda todos los miembros de `Persona`, pero también incluye:

1. Una nueva propiedad, materia — esto contendrá la materia que el profesor enseña.
2. Un método actualizado de `saludo()`, que suena un poco más formal que el método estándar de `saludo()` — más adecuado para un profesor que se dirige a algunos estudiantes en la escuela.

## Definiendo un constructor Profesor()

Lo primero que tenemos que hacer es crear el constructor Profesor`()` — añadimos lo siguiente tras el código existente:

```js
function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
  Person.call(this, nombrePila, apellido, edad, genero, intereses);

  this.materia = materia;
}
```

Esto es similar al constructor de Persona en muchos aspectos, pero hay algo extraño aquí que no hemos visto antes: la función call (). Esta función básicamente le permite llamar a una función definida en otro lugar, pero en el contexto actual.
El primer parámetro especifica el valor de this que desea utilizar al ejecutar la función, y los otros parámetros son aquellos que deben pasarse a la función cuando se invoca.

Queremos que el constructor Profesor() tome los mismos parámetros que el constructor Persona() del que está heredando, por lo que los especificamos todos como parámetros en la invocación call().

La última línea dentro del constructor simplemente define la nueva propiedad subject que los profesores tendrán y que las personas genéricas no tienen.

Como nota, podríamos haber simplemente hecho esto:

```js
function Profesor(nombrePila, apellido, edad, genero, intereses, materia) {
  this.nombre = {
    nombrePila,
    apellido
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
  this.materia = materia;
}
```

Pero esto es solo definir las propiedades de nuevo, no heredarlas de Persona(), por lo que anula el punto de lo que estamos tratando de hacer. También lleva más líneas de código.

### Heredando de un constructor sin parámetros

Nótese que si el constructor del cual se está heredando no toma los valores de sus propiedades de parámetros, no se necesita especificarlos como argumentos adicionales en `call()`. Por ejemplo, si se tuviera algo muy simple como esto:

```js
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

Se podrían heredar las propiedades `width` y `height` haciendo esto (así como los otros pasos descritos a continuación, por supuesto):

```js
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = 'blue';
}
```

Nótese que solo especificamos `this` dentro de `call()` — no se requieren otros parámetros ya que no estamos heredando ninguna propiedad del padre que sea establecida por parámetros.

## Estableciendo el prototipo de Profesor() y su referencia al constructor

Todo va bien hasta ahora, pero tenemos un problema. Definimos un nuevo constructor, y tiene una propiedad `prototype`, la cual por defecto solo contiene una referencia a la función constructor en sí misma. No contiene los métodos de la propiedad `prototype` del constructor `Persona`. Para ver esto, introduzca `Object.getOwnPropertyNames(Profesor.prototype)` ya sea en el campo de texto o en la consola de Javascript . Introdúzcalo nuevamente, reemplazando `Profesor` con `Persona`. El nuevo constructor tampoco hereda esos métodos. Para ver esto, compare los resultados de `Persona.prototype.saludo` and `Profesor.prototype.saludo`. Necesitamos obtener `Profesor()` para obtener los métodos definidos en el prototipo de `Persona()`. ¿Cómo lo hacemos?

1. Añade la siguiente línea debajo de tu adición anterior:

    ```js
    Profesor.prototype = Object.create(Persona.prototype);
    ```

    Aquí es cuando nuestro amigo [`create()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) sale al rescate de nuevo. En este caso lo estamos usando para crear un nuevo objeto y hacerlo el valor de `Profesor.prototype.` El nuevo objeto tiene `Persona.prototype` como su prototipo y por lo tanto heredará, si y cuando lo necesite, todos los métodos disponibles en `Persona.prototype`.

2. Necesitamos hacer una cosa más antes de proseguir. Después de agregar la última línea, la propiedad `constructor`de `Profesor.prototype` es ahora igual a `Persona()`, debido a que acabamos de asignar `Profesor.prototype` para que haga referencia a un objeto que hereda sus propiedades de `Persona.prototype`! Ahora prueba guardando tu código, carga la página en un explorador e intenta verificar en la consola el valor de `Profesor.prototype.constructor`.
3. Esto puede volverse un problema, así que necesitamos corregirlo. Puedes hacerlo regresando a tu código y agregando la siguiente línea al final:

    ```js
    Profesor.prototype.constructor = Profesor;
    ```

4. Ahora, si guardas y actualizas, el valor de `Profesor.prototype.constructor` debe regresar `Profesor()`, como se espera, además de que ahora estamos heredando de `Persona()`!

## Dándole a Profesor() un nuevo método saludo()

Para finalizar nuestro código, necesitamos definir un nuevo método `saludo()` en el constructor de `Profesor()`.

La manera más fácil es definirlo en el prototipo de `Profesor()` — agrega lo siguiente al final de tu código:

```js
Profesor.prototype.saludo = function() {
  var prefijo;

  if (this.genero === 'masculino' || this.genero === 'Masculino' || this.genero === 'm' || this.genero === 'M') {
    prefijo = 'Sr.';
  } else if (this.genero === 'female' || this.genero === 'Femenino' || this.genero === 'f' || this.genero === 'F') {
    prefijo = 'Sra.';
  } else {
    prefijo = 'Sx.';
  }

  alert('Hola. Mi nombre es ' + prefijo + ' ' + this.nombre.apellido + ', y enseño ' + this.materia + '.');
};
```

Esto muestra el saludo del profesor, el cual además utiliza un prefijo apropiado para su género, resuelto utilizando un bloque else-if.

## Probando el ejemplo

Ahora que ha ingresado todo el código, intente creando una instancia de objeto desde `Profesor()` poniendo lo que sigue al final de su archivo (o algo similar a su elección):

```js
var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
```

Ahora guarde y actualice, e intente accediendo a las propiedades y metodos de su nuevo`teacher1` objecto, por ejemplo:

```js
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```

Esto deberia trabajar bien. Las consultas de las líneas 1, 2, 3, y 6 acceden a miembros heredados del genérico`Person()` constructor (clase). La consulta de la línea 4 accede un miembro que es disponible solamente en el mas especializado`Teacher()` constructor (clase). La consulta de la línea 5 accedería a un miembro desde`Person()`, excepto por el hecho que `Teacher()` tiene sus propios miembros con el mismo nombre, entonces la consulta accede a ese miembro.

> **Nota:** Si tiene problemas con el funcionamiento, compare su código con nuestra [versión final](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html) (vea [corriendo en vivo](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html) también).

La técnica que mostramos aquí no es la única para crear herencia de clases en JavaScript, pero funciona OK, y le dá una buena idea acerca de cómo implementar herencia en JavaScript.

También estará interesado en verificar algo de las nuevas características de {{glossary("ECMAScript")}} que nos permiten hacer herencia mas claramente en JavaScript (véase [Classes](/es/docs/Web/JavaScript/Reference/Classes)). No se cubrió todo aquí, como tampoco es soportado aún por todos los navegadores. Todo el otro código de constructores que se discutió aquí en estos artículos son soportados por IE9 o superior, y hay caminos para lograr superiores soportes que estos.

Un simple camino es usar una librería de JavaScript — la mayoría de las opciones mas populares tienen un facil ajuste de funcionalidad disponible para hacer herencia mas facil y rápido. [CoffeeScript](http://coffeescript.org/#classes) por ejemplo provee`class`, `extends`, etc.

## Un ejercicio mas allá

En nuestra [Sección teórica de POO](/es/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters), también incluimos una clase `Student` como un concepto, el cual hereda todas las características de `Person`, y también tiene un método diferende de `greeting()` que `Person` que es mas informal que el saludo de los profesores `Teacher`. Dele una mirada al saludo de los estudiantes, y trate de implementar su propio constructor de saludo `Student()` que herede todas las características de `Person()`, e implemente las diferentes funciones de saludo `greeting()`.

> **Nota:** Si tiene problemas resolviendo esto, dele una mirada a nuestra[versión final](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html) (véala tambien [funcionando](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html) ).

## Resúmen de miembros objeto

To summarize, you've basically got three types of property/method to worry about:

1. Those defined inside a constructor function that are given to object instances. These are fairly easy to spot — in your own custom code, they are the members defined inside a constructor using the `this.x = x` type lines; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the `new` keyword, e.g. `var myInstance = new myConstructor()`).
2. Those defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, _not_ an instance. For example, [`Object.keys()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).
3. Those defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's prototype property, e.g. `myConstructor.prototype.x()`.

If you are not sure which is which, don't worry about it just yet — you are still learning, and familiarity will come with practice.

## ECMAScript 2015 Classes

ECMAScript 2015 introduces [class syntax](/es/docs/Web/JavaScript/Reference/Classes) to JavaScript as a way to write reusable classes using easier, cleaner syntax, which is more similar to classes in C++ or Java. In this section we'll convert the Person and Teacher examples from prototypal inheritance to classes, to show you how it's done.

> **Nota:** This modern way of writing classes is supported in all modern browsers, but it is still worth knowing about how the underlying prototypal inheritance in case you work on a project that requires supporting a browser that doesn't support this syntax (most notably Internet Explorer).

Let's look at a rewritten version of the Person example, class-style:

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

The [class](/es/docs/Web/JavaScript/Reference/Statements/class) statement indicates that we are creating a new class. Inside this block, we define all the features of the class:

- The [`constructor()`](/en-US/docs/Web/JavaScript/Reference/Classes/constructor) method defines the constructor function that represents our `Person` class.
- `greeting()` and `farewell()` are class methods. Any methods you want associated with the class are defined inside it, after the contructor. In this example, we've used [template literals](/es/docs/Web/JavaScript/Reference/Template_literals) rather than string concatenation to make the code easier to read.

We can now instantiate object instances using the [`new` operator](/es/docs/Web/JavaScript/Reference/Operators/new), in just the same way as we did before:

```js
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']]);
leia.farewell();
// Leia has left the building. Bye for now
```

> **Nota:** Under the hood, your classes are being converted into prototypal Inheritance models — this is just syntactic sugar. But I'm sure you'll agree that it's easier to write.

### Inheritance with class syntax

Above we created a class to represent a person. They have a series of attributes that are common to all people; in this section we'll create our specialized `Teacher` class, making it inherit from `Person` using modern class syntax. This is called creating a subclass or subclassing.

To create a subclass we use the [extends keyword](/es/docs/Web/JavaScript/Reference/Classes/extends) to tell JavaScript the class we want to base our class on.

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    this.name = {
      first,
      last
    };

  this.age = age;
  this.gender = gender;
  this.interests = interests;
  // subject and grade are specific to Teacher
  this.subject = subject;
  this.grade = grade;
  }
}
```

We can make the code more readable by defining the [`super()` operator](/es/docs/Web/JavaScript/Reference/Operators/super) as the first item inside the `constructor()`. This will call the parent class' constructor, and inherit the members we specify as parameters of `super()`, as long as they are defined there:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

When we instantiate `Teacher` object instances, we can now call methods and properties defined on both `Teacher` and `Person`, as we'd expect:

```js
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
```

Like we did with Teachers, we could create other subclasses of `Person` to make them more specialized without modifying the base class.

> **Nota:** You can find this example on GitHub as [es2015-class-inheritance.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html) ([see it live also](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html)).

## Getters and Setters

There may be times when we want to change the values of an attribute in the classes we create or we don't know what the final value of an attribute will be. Using the `Teacher` example, we may not know what subject the teacher will teach before we create them, or their subject may change between terms.

We can handle such situations with getters and setters.

Let's enhance the Teacher class with getters and setters. The class starts the same as it was the last time we looked at it.

Getters and setters work in pairs. A getter returns the current value of the variable and its corresponding setter changes the value of the variable to the one it defines.

The modified `Teacher` class looks like this:

```js
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

In our class above we have a getter and setter for the `subject` property. We use **`_` **to create a separate value in which to store our name property. Without using this convention, we would get errors every time we called get or set. At this point:

- To show the current value of the `_subject` property of the `snape` object we can use the `snape.subject` getter method.
- To assign a new value to the `_subject` property we can use the `snape.subject="new value"` setter method.

The example below shows the two features in action:

```js
// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject="Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"
```

> **Nota:** You can find this example on GitHub as [es2015-getters-setters.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-getters-setters.html) ([see it live also](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-getters-setters.html)).

## When would you use inheritance in JavaScript?

Particularly after this last article, you might be thinking "woo, this is complicated". Well, you are right. Prototypes and inheritance represent some of the most complex aspects of JavaScript, but a lot of JavaScript's power and flexibility comes from its object structure and inheritance, and it is worth understanding how it works.

In a way, you use inheritance all the time. Whenever you use various features of a Web API , or methods/properties defined on a built-in browser object that you call on your strings, arrays, etc., you are implicitly using inheritance.

In terms of using inheritance in your own code, you probably won't use it often, especially to begin with, and in small projects. It is a waste of time to use objects and inheritance just for the sake of it when you don't need them. But as your code bases get larger, you are more likely to find a need for it. If you find yourself starting to create a number of objects that have similar features, then creating a generic object type to contain all the shared functionality and inheriting those features in more specialized object types can be convenient and useful.

> **Nota:** Because of the way JavaScript works, with the prototype chain, etc., the sharing of functionality between objects is often called **delegation**. Specialized objects delegate functionality to a generic object type.

When using inheritance, you are advised to not have too many levels of inheritance, and to keep careful track of where you define your methods and properties. It is possible to start writing code that temporarily modifies the prototypes of built-in browser objects, but you should not do this unless you have a really good reason. Too much inheritance can lead to endless confusion, and endless pain when you try to debug such code.

Ultimately, objects are just another form of code reuse, like functions or loops, with their own specific roles and advantages. If you find yourself creating a bunch of related variables and functions and want to track them all together and package them neatly, an object is a good idea. Objects are also very useful when you want to pass a collection of data from one place to another. Both of these things can be achieved without use of constructors or inheritance. If you only need a single instance of an object, then you are probably better off just using an object literal, and you certainly don't need inheritance.

## Alternativas para extender la cadena del prototipos

En JavaScript, hay varias maneras diferentes de extender el prototipo de un objeto aparte de lo que hemos mostrado anteriormente. Para saber más sobre las otras formas, visite nuestro artículo [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos).

## Resumen

Este artículo ha cubierto el resto de la teoría y sintaxis central de OOJS que creemos que debería conocer ahora. En este punto debe entender los conceptos básicos de objetos JavaScript y POO, prototipos y herencia de prototipos, cómo crear clases (constructores) e instancias de objetos, añadir características a las clases y crear subclases que heredan de otras clases.

En el siguiente artículo veremos cómo trabajar con JavaScript Object Notation (JSON), un formato común de intercambio de datos escrito con objetos JavaScript.

## Véase también

- [ObjectPlayground.com](http://www.objectplayground.com/) — A really useful interactive learning site for learning about objects.
- [Secrets of the JavaScript Ninja](https://www.amazon.com/gp/product/193398869X/), Chapter 6 — A good book on advanced JavaScript concepts and techniques, by John Resig and Bear Bibeault. Chapter 6 covers aspects of prototypes and inheritance really well; you can probably track down a print or online copy fairly easily.
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) — Part of Kyle Simpson's excellent series of JavaScript manuals, Chapter 5 in particular looks at prototypes in much more detail than we do here. We've presented a simplified view in this series of articles aimed at beginners, whereas Kyle goes into great depth and provides a more complex but more accurate picture.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

## En éste módulo

- [Object basics](/es/docs/Learn/JavaScript/Objects/Basics)
- [Object-oriented JavaScript for beginners](/es/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object prototypes](/es/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Inheritance in JavaScript](/es/docs/Learn/JavaScript/Objects/Inheritance)
- [Working with JSON data](/es/docs/Learn/JavaScript/Objects/JSON)
- [Object building practice](/es/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adding features to our bouncing balls demo](/es/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
