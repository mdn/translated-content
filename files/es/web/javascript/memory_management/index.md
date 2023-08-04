---
title: Gestión de Memoria
slug: Web/JavaScript/Memory_management
---

{{JsSidebar("Advanced")}}

## Introducción

Los lenguajes de bajo nivel, como C, tienen primitivos de bajo nivel como `malloc()` y `free()` para la gestión de memoria. Por otro lado, para los valores en JavaScript se reserva memoria cuando"cosas" (objetos, strings, etc.) son creados y "automáticamente" liberados cuando ya no son utilizados. El proceso anterior es conocido como _Recolección de basura (garbage collection)._ Su forma "automática" es fuente de confusión, y da la impresión a los desarrolladores de JavaScript (y de otros lenguajes de alto nivel) de poder ignorar el proceso de gestión de memoria. Esto es erróneo.

## Ciclo de vida de memoria

Sin importar el lenguaje de programación, el ciclo de memoria es casi siempre parecido al siguiente:

1. Reservar la memoria necesaria
2. Utilizarla (lectura, escritura)
3. Liberar la memoria una vez ya no es necesaria.

El primer y el segundo paso son explícitos en todos los lenguajes. El último paso es explícito en lenguajes de bajo nivel, pero es mayormente implícito en lenguajes de alto nivel como JavaScript

### Reserva de memoria en JavaScript

#### Inicialización de valores

Para no agobiar al programador con reservas de memoria, JavaScript las realiza al mismo tiempo que la declaración de los valores.

```js
var n = 123; // reserva memoria para un número
var s = "azerty"; // reserva memoria para un string

var o = {
  a: 1,
  b: null,
}; // reserva memoria para un objeto y los valores que
// contiene

// (similar a objeto) reserva memoria para el arreglo y
// los valores que contiene
var a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // reserva memoria para una funcion (la cual es un objeto)

// las expresiones de función tambien reservan memoria para un objeto
someElement.addEventListener(
  "click",
  function () {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### Reserva de memoria al llamar una función

En ocasiones al llamar a una función se reserva memoria para un objeto.

```js
var d = new Date();
// reserva memoria para un elemento del DOM
var e = document.createElement("div");
```

Algunos métodos reservan memoria para nuevos valores u objetos:

```js
var s = "azerty";
var s2 = s.substr(0, 3); // s2 es un nuevo string
// Como los strings son valores inmutables,
// JavaScript puede NO reservar memoria para este,
// y solo almacenar el rango [0, 3].

var a = ["ouais ouais", "nan nan"];
var a2 = ["generation", "nan nan"];
var a3 = a.concat(a2);
// nuevo arreglo con 4 elementos resultado de
// concatenar los elementos de a y a2
```

### Usando valores

Usar un valor es simplemente leerlo o escribirlo en memoria reservada. Esto puede ocurrir al leer o escribir el valor de una variable o de una propiedad de un objeto, inclusive pasando un argumento a una función.

### Liberar la memoria cuando ya no es necesaria

En este punto ocurren la mayoria de los inconvenientes con la gestión de memoria. Lo más díficil es encontrar el cuándo la "memoria ya no es necesaria". En algunas ocasiones, es necesario que el desarrollador determine en qué parte de un programa esa parte de memoria ya no es necesaria y la libere.

Los lenguajes de alto nivel incluyen una herramienta de software conocida como "recolector de basura" _(garbage collector),_ cuya función es rastrear las reservas de memoria y su utilización, para así encontrar cuándo cierta parte de la memoria ya no es necesaria, y en su momento liberarla automáticamente. Este proceso es sólo una aproximación al problema general de saber cuándo una parte de la memoria ya no es necesaria, ya que éste es [indecidible](http://es.wikipedia.org/wiki/Problema_indecidible) (no puede ser resuelto por un algoritmo).

## Recolección de basura (Garbage collection)

Como antes se mencionaba el problema general de encontrar automáticamente cuando la memoria "ya no es necesaria" es indecidible. Como consecuencia, las recolecciones de basura implementan sólo una restricción a la solución del problema general. En esta sección se explicarán las nociones necesarias para entender los principales algoritmos de recolección de basura y sus limitaciones.

### Referencias

La noción principal de los algoritmos de recolección se basan en la noción de _referencia_. Dentro del contexto de gestión de memoria, se dice que un objeto hace referencia a otro si el primero tiene acceso al segundo (ya sea de forma implícita o explícita). Por ejemplo, un objeto de JavaScript guarda una referencia a su [prototipo](http://es.wikipedia.org/wiki/JavaScript#Protot.C3.ADpico) (referencia implícita) y a cualquiera de los valores de sus propiedades (referencia explícita)

Hay que mencionar que en este contexto la noción de "objeto" se refiere a algo más amplio que los objetos normales de JavaScript y que también incluye al ámbito de la función (o ámbito de léxico global).

### Recolección de basura a través de conteo de referencias

Éste es el algoritmo de recolección más simple. Este algoritmo reduce la definición de "un objejo ya no es necesario" a "un objeto ya no tiene ningún otro objeto que lo referencíe". Un objeto es considerado recolectable si existen cero referencias hacia él.

#### Ejemplo

```js
var o = {
  a: {
    b: 2,
  },
};
// Se crean dos objetos. Uno es referenciado por el otro como
// una de sus propiedades.
// El otro es referenciado al ser asignado a la variable "o"
// Ninguno puede ser recolectado.

var o2 = o; // la variable "o2" es lo segundo en tener una
// referencia al objeto.
o = 1; // ahora el objeto solo tiene una referencia mediante
// la variable "o2"

var oa = o2.a; // referencia a la propiedad "a" del objeto.
// ahora el objeto posee dos referencias, una como propiedad
// la otra como la variable "oa"

o2 = "yo"; // el objeto original "o" ahora ya no tiene
// referencias a él. Podría ser recolectado.
// Sin embargo lo que había en la propiedad "a" aún
// esta refernciado en la variable "oa";
// no puede ser recolectado aún

oa = null; // lo que estaba en la propiedad "a" del objeto original "o"
// ahora ya no tiene ninguna referencia.Puede ser recolectado.
```

#### Limitación : ciclos

Existe una limitación cuando se trata de ciclos. En el siguiente ejemplo dos objetos son creados y se referencían entre ellos -por lo que se crea un ciclo. Ellos no saldrán del ámbito de la función después del llamado de la función, con lo que serían efectivamente "ya no son necesarios" y por lo cual ser liberados. Sin embargo, el algoritmo de conteo de referencias considera que ya que cada uno de los dos objetos está referenciado por lo menos una vez, ninguno podra ser recolectado. Este simple algoritmo tiene la limitación de que si un grupo de objetos se referencian a sí mismos (y forman un ciclo), nunca pasarán a "ya no ser necesitados" y no podrán ser recolectados nunca.

```js
function f() {
  var o = {};
  var o2 = {};
  o.a = o2; // o referencía o2
  o2.a = o; // o2 referencía o

  return "azerty";
}

f();
// Dos objetos son creados y se referencían uno al otro creando un ciclo
// Estan atrapados en el scope de la funcion después de la llamada
// por lo que son inútiles fuera de la función y podrían ser recolectados.
// Sin embargo, el algoritmo de conteo de referencias considera que como
// ambos objetos estan referenciados (aunque sean a si mismos) ambos
// siguen en uso y por lo tanto no pueden ser recolectados.
```

#### Ejemplo real aplicado

Internet Explorer 6 y 7 son conocidos por tener recolectores de basura por conteo de referencias para los objetos del DOM. Los Ciclos son un error común que pueden generar _fugas de memoria_ (_[memory leaks) (art. en inglés)](http://es.wikipedia.org/wiki/Fuga_de_memoria):_

```js
var div;
window.onload = function () {
  div = document.getElementById("miDiv");
  div.referenciaCircular = div;
  div.muchosDatos = new Array(10000).join("*");
};
```

En el ejemplo anterior, el elemento del DOM "miDiv" posée una referencia circular a sí mismo en la propiedad "referenciaCircular". Si la propiedad no es explícitamente removida o asignada con el valor _null_, un algoritmo de conteo de referencias siempre va a dejar por lo menos una referencia intacta y va a mantener el elemento del DOM activo en memoria incluso cuando es removido del DOM. Si el objeto del DOM contiene una gran cantidad de datos (ejemplificado en la propiedad "muchosDatos"), la memoria consumida por estos datos nunca será liberada.

### Algoritmo Mark-and-sweep (Marcado y barrido)

Este algoritmo reduce la definición de "un objeto ya no es necesitado" a "un objeto es inalcanzable"

Este algoritmo asume la noción de un grupo de objetos llamados _objetos raíz_ (en JavaScript la raíz es el objeto global). Periódicamente el recolector empieza por estas raíces, encuentra todos los objetos que están referenciados por estas raíces, y luego todos los objetos referenciados de estos, etc. Empezando por las raíces, el recolector de esta forma encontrará todos los objetos que son _alcanzables_ y recolectará los objetos inalcanzables.

Este algoritmo es mejor que el anterior ya que "un objeto tiene cero referencias" equivale al "objeto es inalcanzable". Esto no sucedía asi en el algoritmo anterior cuando se trataba de un ciclo.

Desde el 2012, todos los navegadores incluyen un recolector de basura basado en mark-and-sweep. Todas las mejoras realizadas en el campo de Recolección de basura en JavaScript (recolección generacional/incremental/concurrida/paralela) en los ultimos años son mejoras a la implementación del algoritmo, pero no mejoras sobre el algoritmo de recolección ni a la reducción de la definicion de cuando"un objeto ya no es necesario".

#### Los ciclos son problema del pasado

En el primer ejemplo, después de que la llamada a una función termina, los dos objetos ya no son referenciados por nada alcanzable desde el objeto global. De esta forma serán identificados como inalcanzables por el recolector de basura.

Lo mismo ocurre en el segundo ejemplo. Una vez que el elemento div y sus métodos se hacen inalcanzable desde los objetos raíz, ambos pueden ser recolectados a pesar de que estén referenciados los unos de los otros.

#### Limitación: los objetos necesarios se hacen inalcanzables de forma explícita

Aunque esto está marcado como una limitación, se puede encontrar muy poco en la práctica. Ésta es la razón por la cuál la recolección de basura es poco tomada en cuenta.

## Véase también

- [IBM article on "Memory leak patterns in JavaScript" (2007) (art. en inglés)](http://www.ibm.com/developerworks/web/library/wa-memleak/)
- [Kangax article on how to register event handler and avoid memory leaks (2010) (art. en inglés)](http://msdn.microsoft.com/en-us/magazine/ff728624.aspx)
- [Performance (art. en inglés)](/es/docs/Mozilla/Performance)
