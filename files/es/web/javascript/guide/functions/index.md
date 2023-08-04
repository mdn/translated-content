---
title: Funciones
slug: Web/JavaScript/Guide/Functions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Consulta también el {{JSxRef("Funciones", "capítulo de referencia exhaustivo sobre funciones de JavaScript")}} para conocer los detalles.

## Definir funciones

### Declaración de función

Una **definición de función** (también denominada **declaración de función** o **expresión de función**) consta de la palabra clave {{JSxRef("Sentencias/function", "function")}}, seguida de:

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas.
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, `{ ... }`.

Por ejemplo, el siguiente código define una función simple llamada `square` ("cuadrado"):

```js
function square(number) {
  return number * number;
}
```

La función `square` toma un parámetro, llamado `number`. La función consta de una declaración que dice devuelva el parámetro de la función (es decir, `number`) multiplicado por sí mismo. La instrucción {{JSxRef("Sentencias/return", "return")}} especifica el valor devuelto por la función:

```js
return number * number;
```

Los parámetros primitivos (como un `number`) se pasan a las funciones **por valor**; el valor se pasa a la función, pero si la función cambia el valor del parámetro, **este cambio no se refleja globalmente ni en la función que llama**.

Si pasas un objeto (es decir, un valor no primitivo, como {{JSxRef("Array")}} o un objeto definido por el usuario) como parámetro y la función cambia las propiedades del objeto, ese cambio es visible fuera de la función, como se muestra en el siguiente ejemplo:

```js
function myFunc(theObject) {
  theObject.make = 'Toyota';
}

[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x obtiene el valor "Honda"

myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)
```

### Expresiones `function`

Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una {{JSxRef("Operadores/function", "expresión function")}}.

Esta función puede ser **anónima**; no tiene por qué tener un nombre. Por ejemplo, la función `square` se podría haber definido como:

```js
const square = function (number) {
  return number * number;
};
var x = square(4); // x obtiene el valor 16
```

Sin embargo, _puedes_ proporcionar un nombre con una expresión `function`. Proporcionar un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador:

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

Las expresiones `function` son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función `map` que debería recibir una función como primer argumento y un arreglo como segundo argumento.

```js
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
```

En el siguiente código, la función recibe una función definida por una expresión de función y la ejecuta por cada elemento del arreglo recibido como segundo argumento.

```js
function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
```

La función devuelve: `[0, 1, 8, 125, 1000]`.

En JavaScript, una función se puede definir en función de una condición. Por ejemplo, la siguiente definición de función define `myFunc` solo si `num` es igual a `0`:

```js
var myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

Además de definir funciones como se describe aquí, también puedes usar el constructor {{JSxRef("Function")}} para crear funciones a partir de una cadena en tiempo de ejecución, muy al estilo de {{JSxRef("eval", "eval()")}}.

Un **método** es una función que es propiedad de un objeto. Obten más información sobre objetos y métodos en {{JSxRef("Guide/Working_with_Objects", "Trabajar con objetos")}}.

## Llamar funciones

_Definir_ una función no la _ejecuta_. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.

**Llamar** a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función `square`, podrías llamarla de la siguiente manera:

```js
square(5);
```

La declaración anterior llama a la función con un argumento de `5`. La función ejecuta sus declaraciones y devuelve el valor `25`.

Las funciones deben estar _dentro del ámbito_ cuando se llaman, pero la declaración de la función se puede elevar (cuando aparece debajo de la llamada en el código), como en este ejemplo:

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

El ámbito de una función es la función en la que se declara (o el programa completo, si se declara en el nivel superior).

> **Nota:** Esto solo trabaja cuando se define la función usando la sintaxis anterior (es decir, `function funcName() {}`). El siguiente código no trabajará.Esto significa que la elevación de función solo trabaja con _declaraciones_ de función, no con _expresiones_ de función.
>
> ```js example-bad
> console.log(square) // square se eleva con un valor inicial undefined.
> console.log(square(5)) // Error de tipo no detectado: square no es una función
> const square = function(n) {
> return n \* n;
> }
> ```

Los argumentos de una función no se limitan a cadenas y números. Puedes pasar objetos completos a una función. La función `show_props()` (definida en {{JSxRef("Guide/Working_with_Objects", "Trabajar con objetos", "#Objetos_y_propiedades")}} es un ejemplo de una función que toma un objeto como argumento.

Una función se puede llamar a sí misma. Por ejemplo, aquí hay una función que calcula factoriales de forma recursiva:

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
```

Luego, podrías calcular los factoriales de `1` a `5` de la siguiente manera:

```js
var a, b, c, d, e;
a = factorial(1); // a obtiene el valor 1
b = factorial(2); // b obtiene el valor 2
c = factorial(3); // c obtiene el valor 6
d = factorial(4); // d obtiene el valor 24
e = factorial(5); // e obtiene el valor 120
```

Hay otras formas de llamar funciones. A menudo hay casos en los que una función se tiene que llamar dinámicamente, o el número de argumentos de una función varía, o en los que el contexto de la llamada a la función se tiene que establecer en un determinado objeto específico en tiempo de ejecución.

Resulta que las _funciones en sí mismas son objetos_ y, a su vez, estos objetos tienen métodos. (Consulta el objeto {{JSxRef("Function")}}. Uno de estos, el método {{JSxRef("Function.apply", "apply()")}}, se puede utilizar para lograr este objetivo.

## Ámbito de `function`

No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida.

En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función principal y a cualquier otra variable a la que tenga acceso la función principal.

```js
// Las siguientes variables se definen en el ámbito global
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// Esta función está definida en el ámbito global
function multiply() {
  return num1 * num2;
}

multiply(); // Devuelve 60

// Un ejemplo de función anidada
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " anotó " + (num1 + num2);
  }

  return add();
}

getScore(); // Devuelve "Chamahk anotó 5"
```

## Ámbito y la pila de funciones

### Recursión

Una función se puede referir y llamarse a sí misma. Hay tres formas de que una función se refiera a sí misma:

1. El nombre de la función
2. {{JSxRef("Funciones/arguments/callee", "arguments.callee")}}
3. Una variable dentro del ámbito que se refiere a la función

Por ejemplo, considera la siguiente definición de función:

```js
var foo = function bar() {
  // las instrucciones van aquí
};
```

Dentro del cuerpo de la función, todos los siguientes son equivalentes:

1. `bar()`
2. `arguments.callee()`
3. `foo()`

Una función que se llama a sí misma se conoce como una _función recursiva_. En cierto modo, la recursividad es análoga a un bucle. Ambas ejecutan el mismo código varias veces y ambas requieren una condición (para evitar un bucle infinito, o más bien, una recursividad infinita en este caso).

Por ejemplo, el siguiente bucle...

```js
var x = 0;
while (x < 10) {
  // "x < 10" es la condición del bucle
  // hacer cosas
  x++;
}
```

...se puede convertir en una declaración de función recursiva, seguida de una llamada a esa función:

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")
    return;
  // hacer cosas
  loop(x + 1); // la llamada recursiva
}
loop(0);
```

Sin embargo, algunos algoritmos no pueden ser simples bucles iterativos. Por ejemplo, obtener todos los nodos de una estructura de árbol (como [DOM](/es/docs/DOM)) es más fácil a través de la recursividad:

```js
function walkTree(node) {
  if (node == null)
    //
    return;
  // hacer algo con el nodo
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

En comparación con la función `loop`, cada llamada recursiva en sí misma hace muchas llamadas recursivas aquí.

Es posible convertir cualquier algoritmo recursivo en uno no recursivo, pero la lógica suele ser mucho más compleja, y hacerlo requiere el uso de una pila.

De hecho, la recursividad en sí misma usa una pila: la pila de funciones. El comportamiento similar a una pila se puede ver en el siguiente ejemplo:

```js
function foo(i) {
  if (i < 0) return;
  console.log("inicio: " + i);
  foo(i - 1);
  console.log("fin: " + i);
}
foo(3);

// Produce:

// inicio: 3
// inicio: 2
// inicio: 1
// inicio: 0
// fin: 0
// fin: 1
// fin: 2
// fin: 3
```

### Funciones anidadas y cierres

Puedes anidar una función dentro de otra función. La función anidada (interna) es privada de su función contenedora (externa).

También forma un _cierre_. Un cierre es una expresión (comúnmente, una función) que puede tener variables libres junto con un entorno que une esas variables (que "cierra" la expresión).

Dado que una función anidada es un cierre, significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.

Para resumir:

- Solo se puede acceder a la función interna desde declaraciones en la función externa.

- La función interna forma un cierre: la función interna puede usar los argumentos y variables de la función externa, mientras que la función externa no puede usar los argumentos y variables de la función interna.

El siguiente ejemplo muestra funciones anidadas:

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // devuelve 13
b = addSquares(3, 4); // devuelve 25
c = addSquares(4, 5); // devuelve 41
```

Dado que la función interna forma un cierre, puedes llamar a la función externa y especificar argumentos tanto para la función externa como para la interna:

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Piensa en ello como: dame una función que agregue 3 a lo que sea que le des
// eso
result = fn_inside(5); // devuelve 8

result1 = outside(3)(5); // devuelve 8
```

### Preservación de variables

Observa cómo se conserva `x` cuando se devuelve `inside`. Un cierre debe conservar los argumentos y variables en todos los ámbitos a los que hace referencia. Dado que cada llamada proporciona argumentos potencialmente diferentes, se crea un nuevo cierre para cada llamada a `outside`. La memoria se puede liberar solo cuando el `inside` devuelto ya no es accesible.

Esto no es diferente de almacenar referencias en otros objetos, pero a menudo es menos obvio porque uno no establece las referencias directamente y no las puede inspeccionar.

### Funciones multianidadas

Las funciones se pueden anidar de forma múltiple. Por ejemplo:

- Una función (`A`) contiene una función (`B`), que a su vez contiene una función (`C`).
- Ambas funciones `B` y `C` forman cierres aquí. Por tanto, `B` puede acceder a `A` y `C` puede acceder a `B`.
- Además, dado que `C` puede acceder a `B` que puede acceder a `A`, `C` también puede acceder a `A`.

Por tanto, los cierres pueden contener múltiples ámbitos; contienen de forma recursiva el ámbito de las funciones que la contienen. Esto se llama _encadenamiento de alcance_. (La razón por la que se llama "encadenamiento" se explica más adelante).

Considera el siguiente ejemplo:

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // registra 6 (1 + 2 + 3)
```

En este ejemplo, `C` accede a `y` de `B` y a `x` de `A`.

Esto se puede hacer porque:

1. `B` forma un cierre que incluye a `A` (es decir, `B` puede acceder a los argumentos y variables de `A`).
2. `C` forma un cierre que incluye a `B`.
3. Debido a que el cierre de `B` incluye a `A`, el cierre de `C` incluye a `A`, `C` puede acceder a los argumentos _y variables_ de `B` _y_ de `A`. En otras palabras, `C` _encadena_ los ámbitos de `B` y `A`, _en ese orden_.

Sin embargo, lo contrario no es cierto. `A` no puede acceder a `C`, porque `A` no puede acceder a ningún argumento o variable de `B`, del que `C` es una variable. Por lo tanto, `C` permanece privado solo para `B`.

### Conflictos de nombres

Cuando dos argumentos o variables en el ámbito de un cierre tienen el mismo nombre, hay un _conflicto de nombres_. Tiene más prioridad el ámbito anidado. Entonces, el ámbito más interno tiene la mayor prioridad, mientras que el ámbito más externo tiene la más baja. Esta es la cadena de ámbito. El primero de la cadena es el ámbito más interno y el último es el ámbito más externo. Considera lo siguiente:

```js
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // devuelve 20 en lugar de 10
```

El conflicto de nombre ocurre en la declaración `return x` y está entre el parámetro `x` de `inside` y la variable `x` de `outside`. La cadena de ámbito aquí es {`inside`, `outside`, objeto global}. Por lo tanto, `x` de `inside` tiene precedencia sobre `x` de `outside` y `20` (`x`) de `inside` se devuelve en lugar de `10` (`x` de `outside`).

## Cierres

Los cierres son una de las características más poderosas de JavaScript. JavaScript permite el anidamiento de funciones y otorga a la función interna acceso completo a todas las variables y funciones definidas dentro de la función externa (y todas las demás variables y funciones a las que la función externa tiene acceso).

Sin embargo, la función externa _no_ tiene acceso a las variables y funciones definidas dentro de la función interna. Esto proporciona una especie de encapsulación para las variables de la función interna.

Además, dado que la función interna tiene acceso a el ámbito de la función externa, las variables y funciones definidas en la función externa vivirán más que la duración de la ejecución de la función externa, si la función interna logra sobrevivir más allá de la vida de la función externa. Se crea un cierre cuando la función interna de alguna manera se pone a disposición de cualquier ámbito fuera de la función externa.

```js
var pet = function (name) {
  // La función externa define una variable llamada "name"
  var getName = function () {
    return name; // La función interna tiene acceso a la variable
    // "name" de la función externa
  };
  return getName; // Devuelve la función interna, exponiéndola así a ámbitos externos
};
myPet = pet("Vivie");

myPet(); // Devuelve "Vivie"
```

Puede ser mucho más complejo que el código anterior. Se puede devolver un objeto que contiene métodos para manipular las variables internas de la función externa.

```js
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

En el código anterior, la variable `name` de la función externa es accesible para las funciones internas, y no hay otra forma de acceder a las variables internas excepto a través de las funciones internas. Las variables internas de las funciones internas actúan como almacenes seguros para los argumentos y variables externos. Contienen datos "persistentes" y "encapsulados" para que trabajen las funciones internas. Las funciones ni siquiera tienen que estar asignadas a una variable o tener un nombre.

```js
var getCode = (function () {
  var apiCode = "0]Eal(eh&2"; // Un código que no queremos que los externos puedan modificar...

  return function () {
    return apiCode;
  };
})();

getCode(); // Devuelve el apiCode
```

> **Nota:** ¡Hay una serie de trampas a tener en cuenta al usar cierres!
>
> Si una función encerrada define una variable con el mismo nombre que una variable en el ámbito externo, entonces no hay forma de hacer referencia a la variable en el ámbito externo nuevamente. (La variable de ámbito interno "anula" la externa, hasta que el programa sale de el ámbito interno).
>
> ```js example-bad
> var createPet = function (name) {
>   // La función externa define una variable llamada "name".
>   return {
>     setName: function (name) {
>       // La función envolvente también define una variable llamada "name".
>       name = name; // ¿Cómo accedemos al "name" definido por la función externa?
>     },
>   };
> };
> ```

## Usar el objeto `arguments`

El `arguments` de una función se mantiene en un objeto similar a un arreglo. Dentro de una función, puedes abordar los argumentos que se le pasan de la siguiente manera:

```js
arguments[i];
```

donde `i` es el número ordinal del argumento, comenzando en `0`. Entonces, el primer argumento que se pasa a una función sería `arguments[0]`. El número total de argumentos se indica mediante `arguments.length`.

Usando el objeto `arguments`, puedes llamar a una función con más argumentos de los que formalmente declara aceptar. Esto suele ser útil si no sabes de antemano cuántos argumentos se pasarán a la función. Puedes usar `arguments.length` para determinar el número de argumentos que realmente se pasan a la función, y luego acceder a cada argumento usando el objeto `arguments`.

Por ejemplo, considera una función que concatena varias cadenas. El único argumento formal para la función es una cadena que especifica los caracteres que separan los elementos a concatenar. La función se define de la siguiente manera:

```js
function myConcat(separator) {
  var result = ""; // inicia list
  var i;
  // itera a través de arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

Puedes pasar cualquier número de argumentos a esta función, y concatena cada argumento en una "lista" de cadenas:

```js
// devuelve "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// devuelve "elephant; giraffe; lion; cheetah"
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// devuelve "sage. basil. oregano. pepper. perejil. "
myConcat(". ", "salvia", "albahaca", "orégano", "pimienta", "perejil");
```

> **Nota:** La variable `arguments` es "similar a un arreglo", pero no es un arreglo. Es similar a un arreglo en el sentido de que tiene un índice numerado y una propiedad `length`. Sin embargo, _no_ posee todos los métodos de manipulación de arreglos.

Consulta el objeto {{JSxRef("Function")}} en la referencia de JavaScript para obtener más información.

## Parámetros de función

A partir de ECMAScript 2015, hay dos nuevos tipos de parámetros: _parámetros predeterminados_ y _parámetros resto_.

### Parámetros predeterminados

En JavaScript, los parámetros de las funciones están predeterminados en `undefined`. Sin embargo, en algunas situaciones puede resultar útil establecer un valor predeterminado diferente. Esto es exactamente lo que hacen los parámetros predeterminados.

#### Sin parámetros predeterminados (preECMAScript 2015)

En el pasado, la estrategia general para establecer valores predeterminados era probar los valores de los parámetros en el cuerpo de la función y asignar un valor si eran `undefined`.

En el siguiente ejemplo, si no se proporciona ningún valor para `b`, su valor sería `undefined` al evaluar `a * b`, y una llamada a `multiply` normalmente habría devuelto `NaN`. Sin embargo, esto se evita con la segunda línea de este ejemplo:

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiply(5); // 5
```

#### Con parámetros predeterminados (posECMAScript 2015)

Con _parámetros predeterminados_, ya no es necesaria una verificación manual en el cuerpo de la función. Simplemente puedes poner `1` como valor predeterminado para `b` en el encabezado de la función:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

Para obtener más detalles, consulta {{JSxRef("Funciones/Parametros_predeterminados", "parámetros predeterminados")}} en la referencia.

### Parámetros `rest`

La sintaxis del {{JSxRef("Funciones/Parametros_rest", "parámetro rest")}} nos permite representar un número indefinido de argumentos como un arreglo.

En el siguiente ejemplo, la función `multiply` usa _parámetros `rest`_ para recopilar argumentos desde el segundo hasta el final. Luego, la función los multiplica por el primer argumento.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Funciones Flecha

Una {{JSxRef("Funciones/Funciones_flecha", "expresión de función flecha")}} (anteriormente, y ahora conocida incorrectamente como **función de flecha gruesa**) tiene una sintaxis más corta en comparación con las expresiones de función y no tiene su propio {{JSxRef("Operadores/this", "this")}}, {{JSxRef("Funciones/arguments", "arguments")}}, {{JSxRef("Operadores/super", "super")}} o {{JSxRef("Operadores/new.target", "new.target")}}. Las funciones flecha siempre son anónimas. Consulta también esta publicación del blog hacks.mozilla.org: "[ES6 en profundidad: funciones flecha](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".

Dos factores influyeron en la introducción de las funciones flecha: _funciones más cortas_ y _no vinculantes_ de `this`.

### Funciones más cortas

En algunos patrones funcionales, las funciones más cortas son bienvenidas. Compara:

```js
var a = ["Hidrógeno", "Helio", "Litio", "Berilio"];

var a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map((s) => s.length);

console.log(a3); // logs [8, 6, 7, 9]
```

### Sin `this` separado

Hasta las funciones flecha, cada nueva función definía su propio valor {{JSxRef("Operadores/this", "this")}} (un nuevo objeto en el caso de un constructor, indefinido en llamadas a funciones en {{JSxRef("Strict_mode", "modo estricto")}}, el objeto base si la función se llama como un "método de objeto", etc.). Esto resultó ser poco menos que ideal con un estilo de programación orientado a objetos.

```js
function Person() {
  // El constructor Person() define `this` como él mismo.
  this.age = 0;

  setInterval(function growUp() {
    // En modo no estricto, la función growUp() define `this`
    // como el objeto global, que es diferente del `this`
    // definido por el constructor Person().
    this.age++;
  }, 1000);
}

var p = new Person();
```

En ECMAScript 3/5, este problema se solucionó asignando el valor en `this` a una variable que se podría cerrar.

```js
function Person() {
  var self = this; // Algunos eligen `that` en lugar de` self`.
  // Elige uno y se congruente.
  self.age = 0;

  setInterval(function growUp() {
    // La retrollamada se refiere a la variable `self` de la cual
    // el valor es el objeto esperado.
    self.age++;
  }, 1000);
}
```

Alternativamente, podrías crear una {{JSxRef("Objetos_globales/Function/bind", "función vinculada")}} para que el valor `this` adecuado se pasara a la función `growUp()`.

Una función flecha no tiene su propio `this` se utiliza el valor de `this` del contexto de ejecución adjunto. Por lo tanto, en el siguiente código, `this` dentro de la función que se pasa a `setInterval` tiene el mismo valor que `this` en la función adjunta:

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| propiamente se refiere al objeto person
  }, 1000);
}

var p = new Person();
```

## Funciones predefinidas

JavaScript tiene integradas varias funciones de nivel superior:

- {{JSxRef("Objetos_globales/eval", "eval()")}}
  - : El método **`eval()`** evalúa el código JavaScript representado como una cadena.
- {{JSxRef("Objetos_globales/uneval", "uneval()")}}
  - : El método **`uneval()`** crea una representación de cadena del código fuente de un {{JSxRef("Object")}}.
- {{JSxRef("Objetos_globales/isFinite", "isFinite()")}}
  - : La función global **`isFinite()`** determina si el valor pasado es un número finito. Si es necesario, el parámetro, primero se convierte en un número.
- {{JSxRef("Objetos_globales/isNaN", "isNaN()")}}
  - : La función **`isNaN()`** determina si un valor es {{JSxRef("Objetos_globales/NaN", "NaN")}} o no. **Nota**: La coerción dentro de la función `isNaN` tiene {{JSxRef("Objetos_globales/isNaN", "interesantes", "#Descripcion")}} reglas; también puedes querer usar {{JSxRef("Number.isNaN()")}}, como se define en ECMAScript 2015, o puedes usar {{JSxRef("Operadores/typeof", "typeof")}} para determinar si el valor no es un número (`NaN`).
- {{JSxRef("Objetos_globales/parseFloat", "parseFloat()")}}
  - : La función **`parseFloat()`** procesa un argumento de cadena y devuelve un número de punto flotante.
- {{JSxRef("Objetos_globales/parseInt", "parseInt()")}}
  - : La función **`parseInt()`** procesa un argumento de cadena y devuelve un número entero de la base especificada (la base en los sistemas numéricos matemáticos).
- {{JSxRef("Objetos_globales/decodeURI", "decodeURI()")}}
  - : La función **`decodeURI()`** decodifica un identificador uniforme de recursos (URI) creado previamente por {{JSxRef("Objetos_globales/encodeURI", "encodeURI")}} o por una rutina similar.
- {{JSxRef("Objetos_globales/decodeURIComponent", "decodeURIComponent()")}}
  - : El método **`decodeURIComponent()`** decodifica un componente Identificador uniforme de recursos (URI) creado previamente por {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent")}} o por un rutina similar.
- {{JSxRef("Objetos_globales/encodeURI", "encodeURI()")}}
  - : El método **`encodeURI()`** codifica un identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").
- {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent()")}}
  - : El método **`encodeURIComponent()`** codifica un componente Identificador uniforme de recursos (URI) reemplazando cada instancia de ciertos caracteres por una, dos, tres o cuatro secuencias de escape que representan la codificación UTF-8 del caracter (solo habrá cuatro secuencias de escape para caracteres compuestos por dos caracteres "sustitutos").
- {{JSxRef("Objetos_globales/escape", "escape()")}}
  - : El método obsoleto **`escape()`** calcula una nueva cadena en la que ciertos caracteres han sido reemplazados por una secuencia de escape hexadecimal. En su lugar usa {{JSxRef("Objetos_globales/encodeURI", "encodeURI")}} o {{JSxRef("Objetos_globales/encodeURIComponent", "encodeURIComponent")}}.
- {{JSxRef("Objetos_globales/unescape", "unescape()")}}
  - : El método obsoleto **`unescape()`** calcula una nueva cadena en la que las secuencias de escape hexadecimales se reemplazan con el caracter que representan. Las secuencias de escape se pueden introducir por medio de una función como {{JSxRef("Objetos_globales/escape", "escape")}}. Debido a que `unescape()` está en desuso, usa {{JSxRef("Objetos_globales/decodeURI", "decodeURI()")}} o {{JSxRef("Objetos_globales/decodeURIComponent", "decodeURIComponent")}} en su lugar.

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}
