---
title: Prototipos de objetos
slug: Learn/JavaScript/Objects/Object_prototypes
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}

Los prototipos son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. En este artículo, explicaremos como funcionan los prototipos y también cómo se pueden usar las propiedades de estos para añadir métodos a los contructores existentes.

| Prerrequisitios: | Conocer las funciones en Javascript, conocimientos básicos de Javascript (ver [Primeros Pasos](/es/docs/Learn/JavaScript/First_steps) y [Building blocks](/es/docs/Learn/JavaScript/Building_blocks)) y Javascript orientado a Objetos (ver [Introducción a Objetos](/es/docs/Learn/JavaScript/Object-oriented/Introduction)). |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Objetivo:        | Comprender los prototipos de objectos de Javascript, cómo funciona la cadena de prototype, y cómo añadir nuevos métodos a la propiedad prototype.                                                                                                                                                                              |

## ¿Un lenguaje basado en prototipos?

JavaScript es a menudo descrito como un **lenguaje basado en prototipos -** para proporcionar mecanismos de herencia, los objetos pueden tener un **objeto prototipo**, el cual actúa como un objeto plantilla que hereda métodos y propiedades.

Un objeto prototipo del objeto puede tener a su vez otro objeto prototipo, el cual hereda métodos y propiedades, y así sucesivamente. Esto es conocido con frecuencia como la **cadena de prototipos**, y explica por qué objetos diferentes pueden tener disponibles propiedades y métodos definidos en otros objetos.

Bien, para ser exactos, los métodos y propiedades son definidos en la propiedad `prototype`, que reside en la función constructora del objeto, no en la instancia misma del objeto.

En JavaScript, se establece un enlace entre la instancia del objeto y su prototipo (su propiedad `__proto__`, la cual es derivada de la propiedad `prototype` sobre el constructor), y las propiedades y metodos son encontrados recorriendo la cadena de prototipos.

**Nota:** Es importante entender que, tanto el prototipo de la instancia de un objeto (al cual se accede mediante [`Object.getPrototypeOf(obj)`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf), o a través de la propiedad [`__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)) como el prototipo que contiene el constructor (que se encuentra en la propiedad `prototype` del constructor) hacen referencia al mismo objeto.

Vamos a echar un vistazo a algunos ejemplos para intentar aclarar estos conceptos.

## Entendiendo objectos prototipos

Volvamos al ejemplo anterior en el que acabamos definiendo nuestro constructor `Person()` — cargue el ejemplo en su navegador. Si aún no lo tienes luego de haber trabajado el último artículo, usa nuestro ejemplo oojs-class-further-exercises.html (vea también el [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html)).

En este ejemplo, hemos definido una función constructor, así:

```js
function Persona(nombre, apellido, edad, genero, intereses) {
  // definiendo de propiedades y métodos
  this.first = first;
  this.last = last;
  //...
}
```

Entonces hemos creado una instancia de un objeto como este:

```js
var person1 = new Persona("Bob", "Smith", 32, "hombre", ["music", "skiing"]);
```

Si escribe "person1." en su consola JavaScript, debería ver que el navegador intenta completarlo automáticamente con los nombres de miembro disponibles en este objeto:

![](object-available-members.png)

En esta lista, podra ver los miembros definidos en el objeto prototipo de person1, que es la Persona() (Persona() es el constructor) - nombre, edad, género, intereses, biografía y saludos. Sin embargo, también verá algunos otros miembros - watch, valueOf, etc - que están definidos en el objeto prototipo de Persona() 's, que es un Objeto (Object). Esto demuestra que el prototipo cadena funciona.

![](mdn-graphics-person-person-object-2.png)

Entonces, ¿qué sucede si llama a un método en `person1`, que está definido en `Object`? Por ejemplo:

```js
person1.valueOf();
```

Este método [valueOf()](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) simplemente retornará el valor del objeto sobre el que se llama - ¡pruébalo y verás! En este caso, lo que pasa es que:

- El navegador comprueba inicialmente si el objeto person1 tiene un método valueOf() disponible en él.
- Si no lo hace, entonces el navegador comprueba si el objeto prototipo del objeto person1 (el prototipo del constructor de Persona()) tiene un método valueOf() disponible en él.
- Si tampoco lo hace, entonces el navegador comprueba si el objeto prototipo del objeto prototipo del constructor Persona() (Objeto() prototipo del objeto prototipo del constructor) tiene un método valueOf() disponible en él. Lo hace, así que es llamado, y todo funciona!

> **Nota:** Queremos reiterar que los métodos y propiedades no se copian de un objeto a otro en la cadena del prototipo. Ellos son accedidos subiendo por la cadena como se ha descrito anteriormente.

> **Nota:** No existe oficialmente una forma de acceder directamente al objeto prototipo de un objeto - los "enlaces" entre los elementos de la cadena están definidos en una propiedad interna, denominada \[\[prototipo]] en la especificación del lenguaje JavaScript (ver {{glossary("ECMAScript")}}).
>
> La mayoría de los navegadores modernos, sin embargo, ofrecen una propiedad disponible llamada \_\_proto\_\_ (es decir, 2 subrayados en cada lado), que contiene el objeto prototipo del constructor del objeto. Por ejemplo, pruebe person1.\_\_proto\_\_ y person1.\_\_proto\_\_.\_\_proto\_\_ para ver cómo se ve la cadena en código!
>
> Desde ECMAScript 2015 se puede acceder indirectamente al objeto prototipo de un objeto mediante Object.getPrototypeOf(obj).

## La propiedad prototype: Donde se definen los miembros hereditarios

Entonces, ¿dónde se definen las propiedades y métodos heredados? Si miras la página de referencia de `Object`, verás en la parte izquierda un gran número de propiedades y métodos - muchos más que el número de miembros heredados que vimos disponibles en el objeto `person1`. Algunos son heredados y otros no, ¿por qué?

La respuesta es que los heredados son los que están definidos en la propiedad `prototype` (podría llamarse subespacio de nombres), es decir, los que empiezan con `Object.prototype`, y no los que empiezan sólo con `Object`. El valor de la propiedad del prototipo es un objeto, que es básicamente un repositorio(bucket) para almacenar propiedades y métodos que queremos que sean heredados por los objetos más abajo en la cadena del prototipo.

Así que `Object.prototype.watch()`, `Object.prototype.valueOf()`, etc., están disponibles para cualquier tipo de objeto que herede de `Object.prototype`, incluyendo nuevas instancias de objeto creadas desde el constructor.

[`Object.is()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/is), [`Object.keys()`](/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys), y otros miembros no definidos dentro del prototipo del repositorio(bucket) no son heredados por instancias de objeto o tipos de objeto que heredan de Object.prototype. Sino que son métodos/propiedades disponibles sólo en el propio constructor Object().

> **Nota:** Esto parece extraño - ¿cómo se puede tener un método definido en un constructor, que en sí mismo es una función? Bueno, una función es también un tipo de objeto - vea la referencia del constructor de Function() si no nos cree.

1. Puede comprobar las propiedades de los prototipos existentes - vuelva a nuestro ejemplo anterior e intente introducir lo siguiente en la consola JavaScript:

   ```js
   Person.prototype;
   ```

2. El resultado no le mostrará mucho - después de todo, no hemos definido nada en el prototipo de nuestro constructor personalizado! Por defecto, el prototipo de un constructor siempre comienza vacío. Ahora intente lo siguiente:

   ```js
   Object.prototype;
   ```

Verá un gran número de métodos definidos en la propiedad Prototype de Object, que están disponibles en los objetos que heredan de Object, como se ha mostrado anteriormente.

Verá otros ejemplos de herencia de cadena de prototipos en todo JavaScript - intente buscar los métodos y propiedades definidas en el prototipo de los objetos globales String, Date, Number y Array, por ejemplo. Todos ellos tienen un número de miembros definidos en su prototipo, por lo que, por ejemplo, cuando se crea una cadena, como ésta:

```js
var myString = "Esto es mi String.";
```

`myString` inmediatamente tiene una serie de métodos útiles disponibles en él, como [`split()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/split), [`indexOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf), [`replace()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace), etc.

> **Advertencia:** **Importante**: La propiedad `prototype` es una de las partes más confusamente nombradas de JavaScript - podría pensarse que `this` apunta al objeto prototipo del objeto actual, pero no lo hace (es un objeto interno al que puede accederse mediante `__proto__`, ¿recuerda?). en su lugar, `prototype` es una propiedad que contiene un objeto en el que se definen los miembros que se desea que se hereden.

## Revisando create()

Anteriormente mostramos cómo [`Object.create()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/create) crea una nueva instancia de objeto.

1. Por ejemplo, pruebe esto en la consola JavaScript de su ejemplo anterior:

   ```js
   var person2 = Object.create(person1);
   ```

2. Lo que hace create() es crear un nuevo objeto a partir de un objeto prototipo específico. Aquí, la person2 se crea utilizando la person1 como objeto prototipo. Puede comprobarlo introduciendo lo siguiente en la consola:

   ```js
   person2.__proto__;
   ```

Esto devolverá el objeto Persona.

## La propiedad constructor

Cada función de constructor tiene una propiedad `prototype` cuyo valor es un objeto que contiene una propiedad `constructor`. Esta propiedad `constructor` apunta a la función constructor original.

Como verá en la siguiente sección, las propiedades definidas en la propiedad Person.prototype (o en general en la propiedad `prototype` de una función de constructor, que es un objeto, como se mencionó en la sección anterior) se hacen disponibles a todas las instancias de objetos creadas utilizando el constructor `Person()`. Por lo tanto, la propiedad del constructor también está disponible tanto para los objetos `person1` como para los objetos `person2`.

1. Por ejemplo, pruebe estos comandos en la consola:

   ```js
   person1.constructor;
   person2.constructor;
   ```

   Ambos deberían devolver el constructor `Person()`, ya que contienen la definición original de esas instancias.

   Un truco interesante es que se puede añadir paréntesis al final de la propiedad `constructor` (añadiendo todos los parámetros requeridos) para crear otra instancia desde ese constructor. Después de todo, el constructor es una función, por lo que puede ser invocada usando paréntesis; solamente se necesita incluir la palabra clave `new` para especificar que se quiere usar la función como un constructor.

2. Inténtese esto en la consola:

   ```js
   let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", [
     "playing drums",
     "mountain climbing",
   ]);
   ```

3. Ahora intente acceder a las características del nuevo objeto, como:

   ```js
   person3.name.first;
   person3.age;
   person3.bio();
   ```

Esto funciona. No se necesita usarlo con frecuencia, pero puede ser realmente útil cuando se quiera crear una instancia nueva y por alguna razón no se tenga disponible fácilmente una referencia al constructor original.

La propiedad [`constructor`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) tiene otros usos. Por ejemplo, si se tiene una instancia y se quiere devolver el nombre del que el constructor es una instancia, se puede usar lo siguiente:

```js
instanceName.constructor.name;
```

Intente esto, por ejemplo:

```js
person1.constructor.name;
```

> **Nota:** El valor de `constructor.name` puede cambiar (debido a herencia de prototipos, binding, preprocesores, transpiladores, etc.), por lo que para ejemplos más complejos es preferible usar el operador [`instanceof`](/es/docs/Web/JavaScript/Reference/Operators/instanceof) en su lugar.

## Modificando prototipos

Vamos a echar un vistazo a un ejemplo para modificar la propiedad `prototype` de una función constructor (los métodos añadidos a la propiedad prototipo están disponibles en todas las instancias de los objetos creados a partir del constructor).

1. Regresemos a nuestro ejemplo [oojs-class-further-exercises.html](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-class-further-exercises.html) y creemos una copia local del [código fuente](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-class-further-exercises.html). Debajo del código JavaScript existente, agrega el siguiente código, el cuál añade un nuevo método a la propiedad `prototype` del constructor:

   ```js
   Person.prototype.farewell = function () {
     alert(this.name.first + " has left the building. Bye for now!");
   };
   ```

2. Guarda el código y abre la página en el navegador, e ingresa lo siguiente en la entrada de texto.

   ```js
   person1.farewell();
   ```

Deberías obtener un mensaje de alerta mostrando el nombre de la persona como se define dentro del constructor. Esto es realmente útil, pero lo que es más útil es que toda la cadena de herencia se ha actualizado dinámicamente; automáticamente hace que este nuevo método esté disponible en todas las instancias del objeto creadas desde el constructor

Piensa sobre esto por un momento. En nuestro código definimos el constructor, luego creamos una insancia del objeto desde el constructor, después agregamos un nuevo método a el prototipo del constructor.

```js
function Person(first, last, age, gender, interests) {

  // property and method definitions

}

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

Person.prototype.farewell = function() {
  alert(this.name.first + ' has left the building. Bye for now!');
};.
```

Pero el método `farewell()` aún se encuentra disponible en la instancia `person1`, su funcionalidad disponible ha sido automáticamente actualizada incluído en método recién definido `farewell()`.

> **Nota:** Si estás teniendo problemas haciendo funcionar este ejemplo, echa un vistazo en nuestro ejemplo [oojs-class-prototype.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-prototype.html) ([míralo ejecutarse en tiempo real](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-prototype.html)).

Raramente verás propiedades definidas en la propiedad `prototype`, ya no son muy flexibles cuando son definidas de esta forma. Por ejemplo, puedes añadir una propiedad como esta:

```js
Person.prototype.fullName = "Bob Smith";
```

Esto no es muy flexible, ya que la persona podría no llamarse así. Sería mucho mejor construir `fullname` desde `name.first` y `name.last`.

```js
Person.prototype.fullName = this.name.first + " " + this.name.last;
```

Sin embargo esto no funciona, ya que `this` estará referenciando al scope global en este caso, no al scope de la función. Llamar esta propiedad retornaría `undefined undefined`. Esto funcionó bien en el método que declaramos anteriormente dentro del prototipo, porque se encuentra dentro del scope de la función, que se transferirá con éxito al scope de la instancia del objeto.Así que deberías definir propiedades constantes en el prototipo (p.e. una que nunca necesite cambiar), pero generalmente funciona mejor definir propiedades dentro del constructor.

De hecho, un patrón bastante común para la mayoría de definiciones de objetos es declarar las propiedades dentro del constructor, y los métodos en el prototipo. Esto hace el código más fácil de leer, ya que el constructor sólo contiene las definiciones de propiedades, y los métodos están en bloques separados. Por ejemplo:

```js
// Constructor with property definitions

function Test(a, b, c, d) {
  // property definitions
}

// First method definition

Test.prototype.x = function() { ... };

// Second method definition

Test.prototype.y = function() { ... };

// etc.
```

Este patrón puede verse en acción en el ejemplo de la [aplicación de planificador escolar](https://github.com/zalun/school-plan-app/blob/master/stage9/js/index.js) de Piotr Zalewa.

## Resumen

Este articulo ha cubierto prototipos de objeto JavaScript, incluyendo como las cadenas de objeto prototipo permiten a los objetos heredar caracteristicas de una a otra, la propiedad prototipo y como puede ser usado para agregar metodos a los constructores, y otros temas relacionados.

En el proximos articulo vamos a ver como puedes implementar la herencia de funcionalidades entre dos de tus propios objetos personalizados.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object-oriented_JS", "Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects")}}
