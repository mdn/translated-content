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
class Persona {

  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }

  presentarse() {
    console.log(`¡Hola!, soy ${this.nombre}`);
  }

}
```

Esto declara una clase llamada `Persona` con:

- una propiedad `nombre`.
- un constructor que recibe un parámetro `nombre` que se usa para inicializar la propiedad `nombre` del nuevo objeto.
- un método `presentarse()` que puede hacer referencia a las propiedades del objeto usando `this`.

La declaración `nombre;` es opcional y puedes omitirla, ya que la línea `this.nombre = nombre` en el constructor crea la propiedad `nombre` antes de inicializarla. En cualquier caso, enlistar las propiedades de manera explícita en la declaración de la clase hará que sea más fácil para las personas leyendo tu código saber cuáles son las propiedades que conforman a dicha clase.

Cuando declaras una propiedad, también puedes inicializarla con un valor por defecto con una línea como `nombre = '';`.

El constructor se define utilizando la palabra clave {{jsxref("Classes/constructor", "constructor")}}. Al igual que un [constructor fuera de una clase](/es/docs/Learn/JavaScript/Objects/Basics#introducing_constructors), se encargará de:

- crear un nuevo objeto
- asociar `this` al nuevo objeto, para que puedas hacer referencia a `this` dentro de tu código en el constructor
- ejecutar el código en el constructor
- retornar el objeto recién creado.

Dada la declaración de clase anterior, puedes crear y utilizar una nueva instancia de `Persona` de la siguiente manera:

```js
const canela = new Persona('Canela');

canela.presentarse(); // ¡Hola!, soy Canela
```

Observa que para llamar al constructor usamos el nombre de la clase, `Persona` en este ejemplo.

### Omitiendo el constructor

En caso de que no necesites algún tipo de inicialización, puedes omitir al constructor, en este caso un constructor por defecto es generado.

```js
class Animal {

  dormir() {
    console.log('zzzzzzz');
  }

}

const firu = new Animal();

firu.dormir(); // 'zzzzzzz'
```

## Herencia

A partir de la clase `Persona`, vamos a definir la subclase `Profesor`.

```js
class Profesor extends Persona {

  materia;

  constructor(nombre, materia) {
    super(nombre);
    this.materia = materia;
  }

  presentarse() {
    console.log(`Mi nombre es ${this.nombre}, yo seré tu profesor de ${this.materia}`);
  }

  calificar(tarea) {
    const calificacion = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(calificacion);
  }
}
```

Para expresar que una clase hereda de otra clase, utilizamos la palabra clave {{jsxref("Classes/extends", "extends")}}.

Debido a que la clase `Profesor` agrega una nueva propiedad `materia`, ésta se declara en el cuerpo de la clase.

Cuando creamos un nuevo `Profesor`, queremos establecer el nombre de la `materia` que enseña, para esto definimos un constructor que recibe el `nombre` y la `materia` como argumentos. Lo primero que hace el constructor es utilizar {{jsxref("Operators/super", "super()")}} para llamar al constructor de la superclase, mientras le pasa el parámetro `nombre`. El constructor de la superclase se encarga de establecer el valor de la propiedad `nombre`. Enseguida, el constructor de la clase `Profesor` establece el valor de la propiedad `materia`.

> **Nota:** Si una subclase debe realizar algún tipo de inialización, es **obligatorio** que esta llame al constructor de la superclase utilizando `super()` con los paramétros que el constructor de la superclase espera.

Podemos observar que hemos sobreescrito el método `presentarse()` de la superclase y a su vez agregamos un nuevo método `calificar()` para calificar las tareas de los alumnos (Nuestro profesor no es muy bueno que digamos, solo asigna calificaciones aleatorias a los ensayos).

```js
const carlos = new Profesor('Carlos', 'Matematicas');
carlos.presentarse();  // 'Mi nombre es Carlos, yo seré tu profesor de Matematicas'

carlos.calificar('mi tarea'); // una calificación aleatoria
```

## Encapsulamiento

Finalmente, veámos cómo implementar el encapsulamiento en JavaScript. En el anterior artículo hablamos de cómo nos gustaría que la propiedad `año` de `Estudiante` fuera privada, de esta forma podríamos cambiar las reglas sobre la clase de tiro con arco sin estropear el código que depende de la clase `Estudiante`.

Aquí podemos ver la declaración de la clase `Estudiante` que se encarga precisamente de ello:

```js
class Estudiante extends Persona {

  #año;

  constructor(nombre, año) {
    super(nombre);
    this.#año = año;
  }


  presentarse() {
    console.log(`¡Hola! me llamo ${this.nombre} y estoy en el año ${this.#año}.`);
  }

  puedeEstudiarArqueria() {
    return this.#año > 1;
  }

}
```

En la clase anterior, `año` es una [propiedad de dato privada](/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields). Podemos crear un objeto `Estudiante` que puede acceder a la propiedad `#año` internamente, sin embargo, si algún código que se encuentre afuera de la clase intenta acceder a la propiedad `#año`, el navegador lanzará un error:

```js
const arturo = new Estudiante("Arturo", 2)

arturo.presentarse(); // ¡Hola! me llamo Arturo y estoy en el año 2.
arturo.puedeEstudiarArqueria(); // true

arturo.#año; // Error de sintaxis
```

Las propiedades de datos privadas deben ser declaradas en la propia declaración de la clase y sus nombres deben empezar con `#`.

### Métodos privados

En un clase puedes incluir tanto propiedades de dato privadas como métodos privados. Al igual que las propiedades de dato privadas, su nombre debe empezar con `#` y solo pueden ser llamados por los propios métodos del objeto:

```js
class Ejemplo {
  metodoPublico() {
    this.#metodoPrivado();
  }

  #metodoPrivado() {
    console.log('¿Me llamaste?');
  }
}

const miEjemplo = new Ejemplo();

miEjemplo.metodoPublico(); // '¿Me llamaste?'

miEjemplo.#metodoPrivado(); // Error de Sintaxis
```

## ¡Pon a prueba tus habilidades!

Haz llegado al final de este artículo pero, ¿Aún recuerdas la información más importante? Puedes encontrar retos para asegurarte de retener esta información antes de continuar - véase [Pon aprueba tus habilidades: Javascript orientado a objetos](/es/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript).

## Resumen

En este artículo repasamos las herramientas principales que existen en JavaScript para crear programas orientados a objetos. A pesar de que no abarcamos este tema completamente, lo que vimos debería ser suficiente para iniciar. Nuestro [artículo sobre clases](/en-US/docs/Web/JavaScript/Reference/Classes) es un buen lugar para aprender más.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_programming", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

## En este módulo

- [Conceptos básicos de los objetos en JavaScript](/es/docs/Learn/JavaScript/Objects/Basics)
- [Prototipos de objetos](/es/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Programación orientada a objetos](/es/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- **Clases en JavaScript**
- [Trabajando con JSON](/es/docs/Learn/JavaScript/Objects/JSON)
- [Ejercicio práctico de construcción de objetos](/es/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Añadiendo características a nuestro ejercicio de bouncing balls](/es/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
