---
title: Conceptos básicos de los objetos JavaScript
slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

En éste artículo, veremos fundamentos de sintaxis de los objetos de JavaScript y revisaremos algunas características de JavaScript que ya hemos analizado anteriormente en el curso, reiterando el hecho de que muchas de las funciones con las que ya has tratado de hecho son objetos.

| Prerrequisitos: | Conocimientos básicos de informática, conocimientos básicos de HTML y CSS, familiaridad con los principios básicos de JavaScript (consulta [Primeros pasos](/es/docs/Learn/JavaScript/First_steps) y [Bloques de construcción](/es/docs/Learn/JavaScript/Building_blocks)). |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objetivo:       | Para comprender la teoría básica detrás de la programación orientada a objetos, cómo esto se relaciona con JavaScript ("la mayoría de las cosas son objetos") y cómo empezar a trabajar con objetos de JavaScript.                                                          |

## Conceptos básicos de objeto

Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente consta de algunas variables y funciones, que se denominan propiedades y métodos cuando están dentro de objetos). Vamos a trabajar a través de un ejemplo para mostrate cómo son.

Para empezar, haz una copia local de nuestro archivo [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) . Esto contiene muy poco: un elemento {{HTMLElement ("script")}} para que escribas tu código fuente en él. Lo usaremos como base para explorar la sintaxis básica de los objetos.

Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e iniciación de una variable. Intenta ingresar lo siguiente debajo del código JavaScript que ya está en tu archivo, luego guarda y actualiza:

```js
var persona = {};
```

Si ingresas `persona` en tu entrada de texto y presionas el botón, debes obtener el siguiente resultado:

```js
[objeto Objeto]
```

¡Felicidades!, acabas de crear tu primer objeto. ¡Trabajo realizado! Pero este es un objeto vacío, por lo que realmente no podemos hacer mucho con él. Actualicemos nuestro objeto para que se vea así:

```js
var persona = {
  nombre: ["Bob", "Smith"],
  edad: 32,
  genero: "masculino",
  intereses: ["música", "esquí"],
  bio: function () {
    alert(
      `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y this.intereses[1].`,
    );
  },
  saludo: function () {
    alert("Hola, Soy " + this.nombre[0] + ". ");
  },
};
```

Después de guardar y actualizar, intenta ingresar algunos de los siguientes en tu entrada de texto:

```js
persona.nombre;
persona.nombre[0];
persona.edad;
persona.intereses[1];
persona.bio();
persona.saludo();
```

¡Ahora tienes algunos datos y funcionalidades dentro de tu objeto, y ahora puedes acceder a ellos con una sintaxis simple y agradable!

> **Nota:** Si tienes problemas para hacer que esto funcione, intenta comparar tu código con nuestra versión - ve [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) (también [ve que se ejecuta en vivo](http://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)). La versión en vivo te dará una pantalla en blanco, pero eso está bien. De nuevo, abre tu devtools e intenta escribir los comandos anteriores para ver la estructura del objeto.

Entonces, ¿qué está pasando aquí? Bien, un objeto se compone de varios miembros, cada uno de los cuales tiene un nombre (por ejemplo, `nombre` y `edad`) y un valor (por ejemplo, `['Bob', 'Smith']` y `32`). Cada par nombre/valor debe estar separado por una coma, y el nombre y el valor en cada caso están separados por dos puntos. La sintaxis siempre sigue este patrón:

```js
var nombreObjeto = {
  miembro1Nombre: miembro1Valor,
  miembro2Nombre: miembro2Valor,
  miembro3Nombre: miembro3Valor,
};
```

El valor de un miembro de un objeto puede ser prácticamente cualquier cosa: en nuestro objeto `persona` tenemos una cadena de texto, un número, dos arreglos y dos funciones. Los primeros cuatro elementos son elementos de datos y se denominan **propiedades** del objeto. Los dos últimos elementos son funciones que le permiten al objeto hacer algo con esos datos, y se les denomina **métodos** del objeto.

Un objeto como este se conoce como un **objeto literal** — literalmente hemos escrito el contenido del objeto tal como lo fuimos creando. Esto está en contraste con los objetos instanciados de las clases, que veremos más adelante.

Es muy común crear un objeto utilizando un objeto literal cuando deseas transferir una serie de elementos de datos relacionados y estructurados de alguna manera, por ejemplo, enviando una solicitud al servidor para ponerla en una base de datos. Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente, y es más fácil de procesar que con un arreglo, cuando deseas identificar elementos individuales por nombre.

## Notación de punto

Arriba, accediste a las propiedades y métodos del objeto usando **notación de punto (dot notation)**. El nombre del objeto (`persona`) actúa como el **espacio de nombre (namespace)**; al cual se debe ingresar primero para acceder a cualquier elemento **encapsulado** dentro del objeto. A continuación, escribe un punto y luego el elemento al que deseas acceder: puede ser el nombre de una simple propiedad, un elemento de una propiedad de arreglo o una llamada a uno de los métodos del objeto, por ejemplo:

```js
persona.edad;
persona.intereses[1];
persona.bio();
```

### Espacios de nombres secundarios

Incluso es posible hacer que el valor de un miembro del objeto sea otro objeto. Por ejemplo, intenta cambiar el miembro nombre de

```js
nombre: ['Bob', 'Smith'],
```

a

```js
nombre : {
  pila: 'Bob',
  apellido: 'Smith'
},
```

Aquí estamos creando efectivamente un **espacio de nombre secundario (sub-namespace)**. Esto suena complejo, pero en realidad no es así: para acceder a estos elementos solo necesitas un paso adicional que es encadenar con otro punto al final. Prueba estos:

```js
persona.nombre.pila;
persona.nombre.apellido;
```

**Importante**: en este punto, también deberás revisar tu código y cambiar cualquier instancia de

```js
nombre[0];
nombre[1];
```

a

```js
nombre.pila;
nombre.apellido;
```

De lo contrario, sus métodos ya no funcionarán.

## Notación de corchetes

Hay otra manera de acceder a las propiedades del objeto, usando la notación de corchetes. En lugar de usar estos:

```js
persona.edad;
persona.nombre.pila;
```

Puedes usar

```js
persona["edad"];
persona["nombre"]["pila"];
```

Esto se ve muy similar a cómo se accede a los elementos en un arreglo, y básicamente es lo mismo: en lugar de usar un número de índice para seleccionar un elemento, se esta utilizando el nombre asociado con el valor de cada miembro. No es de extrañar que los objetos a veces se denominen **arreglos asociativos**: asocian cadenas de texto a valores de la misma manera que las arreglos asocian números a valores.

## Establecer miembros de objetos

Hasta ahora solo hemos buscado recuperar (u **obtener**) miembros del objeto: también puede **establecer** (actualizar) el valor de los miembros del objeto simplemente declarando el miembro que deseas establecer (usando la notación de puntos o corchetes), de esta manera:

```js
persona.edad = 45;
persona["nombre"]["apellido"] = "Cratchit";
```

Intenta ingresar estas líneas y luego vuelve a ver a los miembros para ver cómo han cambiado:

```js
persona.edad;
persona["nombre"]["apellido"];
```

Establecer miembros no solo es actualizar los valores de las propiedades y métodos existentes; también puedes crear miembros completamente nuevos. Prueba estos:

```js
persona["ojos"] = "avellana";
persona.despedida = function () {
  alert("¡Adiós a todos!");
};
```

Ahora puedes probar a los nuevos miembros:

```js
persona["ojos"];
person.despedida();
```

Un aspecto útil de la notación de corchetes es que se puede usar para establecer dinámicamente no solo los valores de los miembros, sino también los nombres de los miembros. Digamos que queremos que los usuarios puedan almacenar tipos de valores personalizados en sus datos personales, escribiendo el nombre y el valor del miembro en dos entradas de texto. Podríamos obtener esos valores de esta manera:

```js
var nombrePerzonalizado = entradaNombre.value;
var valorPerzonalizado = entradaValor.value;
```

entonces podríamos agregar este nuevo miembro nombre y valor al objeto `persona` de esta manera:

```js
persona[nombrePerzonalizado] = valorPerzonalizado;
```

Para probar esto, intenta agregar las siguientes líneas en tu código, justo debajo de la llave de cierre del objeto `persona`:

```js
var nombrePerzonalizado = "altura";
var valorPerzonalizado = "1.75m";
persona[nombrePerzonalizado] = valorPerzonalizado;
```

Ahora intenta guardar y actualizar, e ingresa lo siguiente en tu entrada de texto:

```js
persona.altura;
```

Agregar una propiedad a un objeto no es posible con la notación de puntos, que solo puede aceptar un nombre de miembro literal, no un valor variable que apunte a un nombre.

## ¿Qué es "this" (este)?

Es posible que hayas notado algo un poco extraño en nuestros métodos. Mira esto, por ejemplo:

```js
saludo: function() {
  alert('¡Hola!, Soy '+ this.nombre.pila + '.');
}
```

Probablemente te estés preguntando qué es `"this"`. La palabra clave `this` se refiere al objeto actual en el que se está escribiendo el código, por lo que en este caso `this` es equivalente a la `persona`. Entonces, ¿por qué no escribir `persona` en su lugar? Como verás en el artículo [JavaScript orientado a objetos para principiantes](/es/docs/Learn/JavaScript/Objects/Object-oriented_JS) cuando comenzaremos a crear constructores, etc., `this` es muy útil: siempre asegurará que se usen los valores correctos cuando cambie el contexto de un miembro (por ejemplo, dos diferentes instancias de objetos `persona`) pueden tener diferentes nombres, pero querráx usar su propio nombre al decir su saludo).

Vamos a ilustrar lo que queremos decir con un par de objetos persona simplificados:

```js
var persona1 = {
  nombre: "Chris",
  saludo: function () {
    alert("¡Hola!, Soy " + this.nombre + ".");
  },
};

var persona2 = {
  nombre: "Brian",
  saludo: function () {
    alert("¡Hola!, Soy " + this.nombre + ".");
  },
};
```

En este caso, `persona1.saludo()` mostrará "¡Hola!, Soy Chris"; `persona2.saludo()` por otro lado mostrará "¡Hola!, Soy Brian", aunque el código del método es exactamente el mismo en cada caso. Como dijimos antes, `this` es igual al objeto en el que está el código; esto no es muy útil cuando se escriben objetos literales a mano, pero realmente se vuelve útil cuando se generan objetos dinámicamente (por ejemplo, usando constructores) Todo se aclarará más adelante.

## Has estado usando objetos todo el tiempo

A medida que has estado repasando estos ejemplos, probablemente hayas pensando que la notación de puntos que has usando es muy familiar. ¡Eso es porque la has estado usando a lo largo del curso! Cada vez que hemos estado trabajando en un ejemplo que utiliza una API de navegador incorporada o un objeto JavaScript, hemos estado usando objetos, porque tales características se crean usando exactamente el mismo tipo de estructuras de objetos que hemos estado viendo aquí, aunque más complejos que nuestros propios ejemplos personalizados.

Entonces cuando usaste métodos de cadenas de texto como:

```js
myCadena.split(",");
```

Estabas usando un método disponible en una instancia de la clase [`String`](/es/docs/Web/JavaScript/Reference/Global_Objects/String). Cada vez que creas una cadena en tu código, esa cadena se crea automáticamente como una instancia de String, y por lo tanto tiene varios métodos/propiedades comunes disponibles en ella.

Cuando accediste al modelo de objetos del documento (document object model) usando líneas como esta:

```js
var miDiv = document.createElement("div");
var miVideo = document.querySelector("video");
```

Estaba usando métodos disponibles en una instancia de la clase [`Document`](/es/docs/Web/API/Document). Para cada página web cargada, se crea una instancia de `Document`, llamada `document`, que representa la estructura, el contenido y otras características de la página entera, como su URL. De nuevo, esto significa que tiene varios métodos/propiedades comunes disponibles en él.

Lo mismo puede decirse de prácticamente cualquier otro Objeto/API incorporado que hayad estado utilizando: [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math), etc.

Ten en cuenta que los Objetos/API incorporados no siempre crean instancias de objetos automáticamente. Como ejemplo, la [API de Notificaciones](/es/docs/Web/API/Notifications_API), que permite que los navegadores modernos activen las notificaciones del sistema, requiere que crees una instancia de un nuevo objeto para cada notificación que desees disparar. Intenta ingresar lo siguiente en tu consola de JavaScript:

```js
var miNotificacion = new Notification("¡Hola!");
```

De nuevo, veremos qué son los constructores en un artículo posterior.

> **Nota:** Es útil pensar en la forma en que los objetos se comunican como **paso de mensajes** — cuando un objeto necesita otro objeto para realizar algún tipo de acción a menudo enviará un mensaje a otro objeto a través de uno de sus métodos, y esperará una respuesta, que conocemos como un valor de retorno.

## Resumen

Enhorabuena, has llegado al final de nuestro primer artículo sobre objetos JS: ahora debes tener una buena idea de cómo trabajar con objetos en JavaScript, incluida la creación de tus propios objetos simples. También debes apreciar que los objetos son muy útiles como estructuras para almacenar datos y funcionalidades relacionadas; si trataras de hacer un seguimiento de todas las propiedades y métodos en nuestro objeto `persona` como variables y funciones separadas, sería ineficiente y frustrante, y tendríamos el riesgo de chocar con otras variables y funciones que tienen los mismos nombres. Los objetos nos permiten mantener la información segura y protegida en su propio paquete, fuera del peligro.

En el próximo artículo comenzaremos a ver la teoría de programación orientada a objetos (OOP) y cómo se pueden usar dichas técnicas en JavaScript.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
