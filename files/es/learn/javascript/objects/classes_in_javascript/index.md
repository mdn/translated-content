---
title: Clases en JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
l10n:
  sourceCommit: 8b799e40ec01fede4e6cd95c2447ae45b6bc74d5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

En el último artículo, se introdujeron algunos de los conceptos básicos de la [programación orientada a objetos](/es/docs/Learn/JavaScript/Objects/Object-oriented_programming) (POO), y discutimos un ejemplo donde usamos principios de la POO para modelar los profesores y alumnos de una escuela.

También hablamos acerca de cómo podemos usar [prototipos](/es/docs/Learn/JavaScript/Objects/Object_prototypes) y [constructores](/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors) para implementar un modelo como éste, además, vimos que Javascript también proporciona características que se asemejan más a los conceptos de la POO clásica.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisitos:</th>
      <td>
        Conocimientos básicos de informática, comprensión básica de HTML y CSS, familiaridad con conceptos básicos de Javascript (mira <a href="/es/docs/Learn/JavaScript/First_steps">Primeros pasos</a> y <a href="/es/docs/Learn/JavaScript/Building_blocks">Construyendo con bloques</a>) y lo esencial de JSOO (Javascript orientado a objetos)(mira <a href="/es/docs/Learn/JavaScript/Objects/Basics">Introducción a los objetos</a> y <a href="/es/docs/Learn/JavaScript/Objects/Object-oriented_programming">Programación orientada a objetos</a>)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Comprender como utilizar las características que Javascript proporciona para implementar aplicaciones usando programación orientada a objetos "clásica".
      </td>
    </tr>
  </tbody>
<table>

## Clases y constructores

Puedes utilizar la palabra clave {{jsxref("Statements/class", "class")}} para declarar una clase. A continuación se muestra la declaración de la clase `Persona` de nuestro artículo anterior.

```js
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`¡Hola!, soy ${this.name}`);
  }
}
```

Esto declara una clase llamada `Person` con:

- una propiedad `name`.
- un constructor que recibe un parámetro `name` que se usa para inicializar la propiedad `name` del nuevo objeto.
- un método `introduceSelf()` que puede hacer referencia a las propiedades del objeto usando `this`.

La declaración `name;` es opcional y puedes omitirla, ya que la línea `this.name = name;` en el constructor crea la propiedad `name` antes de inicializarla. En cualquier caso, enlistar las propiedades de manera explícita en la declaración de la clase hará que sea más fácil para las personas leyendo tu código saber cuáles son las propiedades que conforman a dicha clase.

Cuando declaras una propiedad, también puedes inicializarla con un valor por defecto con una línea como `name = '';`.

El constructor se define utilizando la palabra clave {{jsxref("Classes/constructor", "constructor")}}. Al igual que un [constructor fuera de una clase](/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors), se encargará de:

- crear un nuevo objeto
- asociar `this` al nuevo objeto, para que puedas hacer referencia a `this` dentro de tu código en el constructor
- ejecutar el código en el constructor
- retornar el objeto recién creado.

Dada la declaración de clase anterior, puedes crear y utilizar una nueva instancia de `Person` de la siguiente manera:

```js
const gil = new Person("Gil");

gil.introduceSelf(); // ¡Hola!, soy Gil
```

Observa que para llamar al constructor usamos el nombre de la clase, `Person` en este ejemplo.

### Omitiendo el constructor

En caso de que no necesites algún tipo de inicialización, puedes omitir al constructor, en este caso un constructor por defecto es generado.

```js
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
```

## Herencia

A partir de la clase `Person`, vamos a definir la subclase `Professor`.

```js
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `Mi nombre es ${this.name}, yo seré tu profesor de ${this.teaches}`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
```

Para expresar que una clase hereda de otra clase, utilizamos la palabra clave {{jsxref("Classes/extends", "extends")}}.

Debido a que la clase `Professor` agrega una nueva propiedad `teaches`, ésta se declara en el cuerpo de la clase.

Cuando creamos un nuevo `Professor`, queremos establecer el nombre de `teaches` que enseña, para esto definimos un constructor que recibe `name` y `teaches` como argumentos. Lo primero que hace el constructor es utilizar {{jsxref("Operators/super", "super()")}} para llamar al constructor de la superclase, mientras le pasa el parámetro `name`. El constructor de la superclase se encarga de establecer el valor de la propiedad `name`. Enseguida, el constructor de la clase `Professor` establece el valor de la propiedad `teaches`.

> **Nota:** Si una subclase debe realizar algún tipo de inialización, es **obligatorio** que esta llame al constructor de la superclase utilizando `super()` con los paramétros que el constructor de la superclase espera.

Podemos observar que hemos sobreescrito el método `introduceSelf()` de la superclase y a su vez agregamos un nuevo método `grade()` para calificar las tareas de los alumnos (Nuestro profesor no es muy bueno que digamos, solo asigna calificaciones aleatorias a los ensayos).

Con esta declaración ahora podemos crear y usar profesores:

```js
const walsh = new Professor("Walsh", "Psicología");
walsh.introduceSelf(); // 'Mi nombre es Walsh, yo seré tu profesor de Psicología'

walsh.grade("mi tarea"); // una calificación aleatoria
```

## Encapsulamiento

Finalmente, veamos cómo implementar el encapsulamiento en JavaScript. En el anterior artículo hablamos de cómo nos gustaría que la propiedad `year` de `Student` fuera privada, de esta forma podríamos cambiar las reglas sobre la clase de tiro con arco sin estropear el código que depende de la clase `Student`.

Aquí podemos ver la declaración de la clase `Student` que se encarga precisamente de ello:

```js
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(
      `¡Hola! me llamo ${this.name} y estoy en el año ${this.#year}.`,
    );
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
```

En la clase anterior, `year` es una [propiedad de dato privada](/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields). Podemos crear un objeto `Student` que puede acceder a la propiedad `#year` internamente, sin embargo, si algún código que se encuentre afuera de la clase intenta acceder a la propiedad `#year`, el navegador lanzará un error:

```js
const summers = new Student("Summers", 2);

summers.introduceSelf(); // ¡Hola! me llamo Summers y estoy en el año 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError (Error de sintaxis)
```

Las propiedades de datos privadas deben ser declaradas en la propia declaración de la clase y sus nombres deben empezar con `#`.

### Métodos privados

En un clase puedes incluir tanto propiedades de dato privadas como métodos privados. Al igual que las propiedades de dato privadas, su nombre debe empezar con `#` y solo pueden ser llamados por los propios métodos del objeto:

```js
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("¿Me llamaste?");
  }
}

const myExample = new Eaxmple();

myExample.somePublicMethod(); // '¿Me llamaste?'

myExample.#somePrivateMethod(); // SyntaxError (Error de Sintaxis)
```

## ¡Pon a prueba tus habilidades!

Haz llegado al final de este artículo pero, ¿Aún recuerdas la información más importante? Puedes encontrar retos para asegurarte de retener esta información antes de continuar - véase [Pon aprueba tus habilidades: Javascript orientado a objetos](/es/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Resumen

En este artículo repasamos las herramientas principales que existen en JavaScript para crear programas orientados a objetos. A pesar de que no abarcamos este tema completamente, lo que vimos debería ser suficiente para iniciar. Nuestro [artículo sobre clases](/es/docs/Web/JavaScript/Reference/Classes) es un buen lugar para aprender más.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
