---
title: Una reintroducción a JavaScript (Tutorial de JS)
slug: Web/JavaScript/Language_overview
---

{{jsSidebar}}

¿Por qué una reintroducción? Porque {{Glossary("JavaScript")}} es conocido por ser [el lenguaje de programación más incomprendido](http://crockford.com/javascript/javascript.html). A menudo se le ridiculiza como un juguete, pero debajo de esa capa de engañosa simplicidad, aguardan poderosas características del lenguaje. Ahora un increíble número de aplicaciones de alto perfil utilizan JavaScript, lo cual demuestra que un conocimiento más profundo de esta tecnología es una habilidad importante para cualquier desarrollador web o móvil.

Es útil comenzar con una descripción general de la historia del lenguaje. JavaScript fue creado en 1995 por Brendan Eich mientras era ingeniero en Netscape. JavaScript se lanzó por primera vez con Netscape 2 a principios de 1996. Originalmente se iba a llamar LiveScript, pero se le cambió el nombre en una desafortunada decisión de marketing que intentó capitalizar la popularidad del lenguaje Java de Sun Microsystem, a pesar de que los dos tienen muy poco en común. Esto ha sido una fuente de confusión desde entonces.

Varios meses después, Microsoft lanzó JScript con Internet Explorer 3. Era un JavaScript prácticamente compatible. Varios meses después de eso, Netscape envió JavaScript a [Ecma International](http://www.ecma-international.org/), una organización europea de estándares, que resultó en la primera edición del estándar {{Glossary("ECMAScript")}} ese año. El estándar recibió una actualización significativa como [ECMAScript edición 3](http://www.ecma-international.org/publications/standards/Ecma-262.htm) en 1999, y se ha mantenido bastante estable desde entonces. La cuarta edición fue abandonada debido a diferencias políticas sobre la complejidad del lenguaje. Muchas partes de la cuarta edición formaron la base para la edición 5 de ECMAScript, publicada en diciembre de 2009, y para la sexta edición principal del estándar, publicada en junio de 2015.

> **Nota:** Debido a que es más familiar, nos referiremos a ECMAScript como "JavaScript" de ahora en adelante.

A diferencia de la mayoría de los lenguajes de programación, el lenguaje JavaScript no tiene un concepto de entrada o salida. Está diseñado para ejecutarse como un lenguaje de `scripting` en un entorno hospedado, y depende del entorno para proporcionar los mecanismos para comunicarse con el mundo exterior. El entorno de alojamiento más común es el navegador, pero también se pueden encontrar intérpretes de JavaScript en una gran lista de otros lugares, incluidos Adobe Acrobat, Adobe Photoshop, imágenes SVG, el motor de widgets de Yahoo, entornos de lado del servidor como [Node.js](http://nodejs.org/), bases de datos NoSQL como [Apache CouchDB](http://couchdb.apache.org/) de código abierto, computadoras integradas, entornos de escritorio completos como [GNOME](http://www.gnome.org/) (una de las IGU —_Interfaz Gráfica de Usuario_— más populares para sistemas operativos GNU/Linux), y otros.

## Información general

JavaScript es un lenguaje dinámico múltiparadigma con tipos y operadores, objetos estándar integrados y métodos. Su sintaxis se basa en los lenguajes Java y C — muchas estructuras de esos lenguajes también se aplican a JavaScript. JavaScript admite la programación orientada a objetos con prototipos de objetos, en lugar de clases (consulta más información sobre {{jsxref("Inheritance_and_the_prototype_chain", "herencia prototípica")}} y ES2015 {{jsxref("Reference/Classes", "clases")}}. JavaScript también admite la programación funcional — debido a que son objetos, las funciones se pueden almacenar en variables y pasarse como cualquier otro objeto.

Comencemos observando los componentes básicos de cualquier lenguaje: los tipos. Los programas JavaScript manipulan valores, y todos esos valores pertenecen a un tipo. Los tipos de JavaScript son:

- {{jsxref("Number", "Números")}}
- {{jsxref("String", "Cadenas de texto (Strings)")}}
- {{jsxref("Boolean", "Booleanos")}}
- {{jsxref("Function", "Funciones")}}
- {{jsxref("Object", "Objetos")}}
- {{jsxref("Symbol", "Símbolos")}} (nuevo en ES2015)

... oh, y {{jsxref("undefined")}} y {{jsxref("null")}}, que son ... ligeramente extraños. Y {{jsxref("Array")}}, que es un tipo de objeto especial. Y {{jsxref("Date", "Fechas (Date)")}} y {{jsxref("RegExp", "Expresiones regulares (RegExp)")}}, que son objetos que obtienes de forma gratuita. Y para ser técnicamente precisos, las funciones son solo un tipo especial de objeto. Por lo tanto, el diagrama de tipos se parece más a este:

- {{jsxref("Number", "Números")}}
- {{jsxref("String", "Cadenas de texto (Strings)")}}
- {{jsxref("Boolean", "Booleanos")}}
- {{jsxref("Symbol", "Símbolos")}} (nuevo en ES2015)
- {{jsxref("Object", "Objetos")}}

  - {{jsxref("Function", "Funciones")}}
  - {{jsxref("Array")}}
  - {{jsxref("Date")}}
  - {{jsxref("RegExp")}}

- {{jsxref("null")}}
- {{jsxref("undefined")}}

Y también hay algunos tipos {{jsxref("Error")}} integrados. Sin embargo, las cosas son mucho más fáciles si nos atenemos al primer diagrama, por lo que discutiremos los tipos enumerados allí por ahora.

## Números

Los números en JavaScript son "valores IEEE 754 de formato de 64 bits de doble precisión", de acuerdo con las especificaciones. **_No existen números enteros_** en JavaScript (excepto {{jsxref("BigInt")}}), por lo que debes tener un poco de cuidado. Ve este ejemplo:

```
console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1
```

Entonces, un _entero aparente_ de hecho _implícitamente es un `float`_.

Además, ten cuidado con cosas como:

```js
0.1 + 0.2 == 0.30000000000000004;
```

En la práctica, los valores enteros se tratan como enteros de 32 bits, y algunas implementaciones incluso los almacenan de esa manera hasta que se les pide que realicen una instrucción que sea válida en un Número pero no en un entero de 32 bits. Esto puede ser importante para operaciones bit a bit.

Se admiten los {{jsxref("Operators", "operadores", "#Operadores_aritméticos")}} estándar, incluidas la aritmética de suma, resta, módulo (o resto), etc. También hay un objeto incorporado que no mencionamos anteriormente llamado {{jsxref("Math")}} que proporciona funciones matemáticas avanzadas y constantes:

```js
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```

Puedes convertir una cadena en un número entero usando la función {{jsxref("Objetos_Globales/parseInt", "parseInt()")}} incorporada. Esta toma la base para la conversión como un segundo argumento opcional, que siempre debes proporcionar:

```js
parseInt("123", 10); // 123
parseInt("010", 10); // 10
```

En los navegadores más antiguos, se supone que las cadenas que comienzan con un "0" están en octal (raíz 8), pero este no ha sido el caso desde 2013 más o menos. A menos que estés seguro de tu formato de cadena, puedes obtener resultados sorprendentes en esos navegadores más antiguos:

```js
parseInt("010"); //  8
parseInt("0x10"); // 16
```

Aquí, vemos que la función {{jsxref("Objetos_Globales/parseInt", "parseInt()")}} trata la primera cadena como octal debido al 0 inicial, y la segunda cadena como hexadecimal debido al "0x" inicial. La _notación hexadecimal todavía está en su lugar_; solo se ha eliminado el octal.

Si deseas convertir un número binario en un entero, simplemente cambia la base:

```js
parseInt("11", 2); // 3
```

De manera similar, puedes analizar números de coma flotante utilizando la función incorporada {{jsxref("Objetos_Globales/parseFloat", "parseFloat()")}}. A diferencia de su primo {{jsxref("Objetos_Globales/parseInt", "parseInt()")}}, `parseFloat()` siempre usa base 10.

También puedes utilizar el operador `+` unario para convertir valores en números:

```js
+"42"; // 42
+"010"; // 10
+"0x10"; // 16
```

Se devuelve un valor especial llamado {{jsxref("NaN")}} (abreviatura de "Not a Number" o "No es un número") si la cadena no es numérica:

```js
parseInt("hello", 10); // NaN
```

`NaN` es tóxico: si lo proporcionas como operando para cualquier operación matemática, el resultado también será `NaN`:

```js
NaN + 5; // NaN
```

Puedes probar si un valor es `NaN` utilizando la función incorporada {{jsxref("Objetos_Globales/isNaN", "isNaN()")}}:

```js
isNaN(NaN); // true
```

JavaScript también tiene los valores especiales {{jsxref("Infinity")}} e `-Infinity`:

```js
1 / 0; //  Infinity
-1 / 0; // -Infinity
```

Puedes probar los valores `Infinity`, `-Infinity` y `NaN` utilizando la función integrada {{jsxref("Objetos_Globales/isFinite", "isFinite()")}}:

```js
isFinite(1 / 0); // false
isFinite(-Infinity); // false
isFinite(NaN); // false
```

> **Nota:** Las funciones {{jsxref("Objetos_Globales/parseInt", "parseInt()")}} y {{jsxref("Objetos_Globales/parseFloat", "parseFloat()")}} analizan una cadena hasta que alcancen un caracter que no es válido para el formato de número especificado, luego devuelve el número analizado hasta ese punto. Sin embargo, el operador "+" simplemente convierte la cadena a `NaN` si contiene un caracter no válido. Intenta analizar la cadena "10.2abc" con cada método tú mismo en la consola y comprenderás mejor las diferencias.

## Strings

Las cadenas en JavaScript son secuencias de [caracteres Unicode](/es/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Unicode). Esta debería ser una buena noticia para cualquiera que haya tenido que lidiar con la internacionalización. Exactamente, son secuencias de unidades de código UTF-16; cada unidad de código está representada por un número de 16 bits. Cada caracter Unicode está representado por 1 o 2 unidades de código.

Si deseas representar un solo caracter, simplemente usa una cadena que consta de ese único caracter.

Para encontrar la longitud de una cadena (en unidades de código), accede a su propiedad {{jsxref("Objetos_Globales/String/length", "lenght")}}:

```js
"hello".length; // 5
```

¡Aquí está nuestra primer pincelada con objetos JavaScript! ¿Mencionamos que también puedes usar cadenas como {{jsxref("Object", "objetos", "", 1)}}? También tienen {{jsxref("String", "métodos", "#Métodos", 1)}} que te permiten manipular la cadena y acceder a información sobre la cadena:

```js
"hello".charAt(0); // "h"
"hello, world".replace("world", "mars"); // "hello, mars"
"hello".toUpperCase(); // "HELLO"
```

## Otros tipos

JavaScript distingue entre {{jsxref("null")}}, que es un valor que indica un no valor deliberado (y solo se puede acceder a él mediante la palabra clave `null`), y {{jsxref("undefined")}}, que es un valor de tipo `undefined` que indica una variable no iniciada es decir, que aún no se le ha asignado un valor. Hablaremos de variables más adelante, pero en JavaScript es posible declarar una variable sin asignarle un valor. Si hace esto, el tipo de la variable es `undefined`. `undefined` en realidad es una constante.

JavaScript tiene un tipo booleano, con valores posibles `true` y `false` (ambos son palabras clave). Cualquier valor se puede convertir a booleano de acuerdo con las siguientes reglas:

1. `false`, `0`, cadenas vacías (`""`), `NaN`, `null`, y `undefined` todos se vuelven `false.`
2. Todos los demás valores se vuelven `true.`

Puedes realizar esta conversión explícitamente utilizando la función `Boolean()`:

```js
Boolean(""); // false
Boolean(234); // true
```

Sin embargo, esto rara vez es necesario, ya que JavaScript realizará silenciosamente esta conversión cuando espera un booleano, como en una declaración `if` (ve más adelante). Por esta razón, a veces hablamos simplemente de "valores verdaderos" y "valores falsos", es decir, valores que se convierten en `true` y `false`, respectivamente, cuando se convierten en booleanos. Alternativamente, estos valores se pueden llamar "veracidad" y "falsedad", respectivamente.

Operaciones booleanas como `&&` (_and_ lógico), `||` (_or_ lógico) y `!` (_not_ lógico) son compatibles; ve más adelante.

## Variables

Las nuevas variables en JavaScript se declaran utilizando una de tres palabras clave: {{jsxref("Sentencias/let", "let")}}, {{jsxref("Sentencias/const", "const")}} o {{jsxref("Sentencias/var", "var")}}.

**`let`** te permite declarar variables a nivel de bloque. La variable declarada está disponible en el _bloque_ en el que está incluida.

```js
let a;
let name = "Simon";
```

El siguiente es un ejemplo de alcance con una variable declarada con **`let`**:

```js
// myLetVariable *no* es visible aquí

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable solo es visible aquí
}

// myLetVariable *no* es visible aquí
```

**`const`** te permite declarar variables cuyos valores pretendes nunca cambiar. La variable está disponible en el _bloque_ en el que se declara.

```js
const Pi = 3.14; // establece la variable Pi
Pi = 1; // arrojará un error porque no puede cambiar una variable constante.
```

**`var`** es la palabra clave declarativa más común. No tiene las restricciones que tienen las otras dos palabras clave. Esto se debe a que tradicionalmente era la única forma de declarar una variable en JavaScript. Una variable declarada con la palabra clave **`var`** está disponible en la _función_ en la que se declara.

```js
var a;
var name = "Simon";
```

Un ejemplo de ámbito con una variable declarada con **`var`:**

```js
// myVarVariable *es* visible aquí

for (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {
  // myVarVariable es visible para toda la función
}

// myVarVariable *es* visible aquí
```

Si declaras una variable sin asignarle ningún valor, su tipo es `undefined`.

Una diferencia importante entre JavaScript y otros lenguajes como Java es que en JavaScript, los bloques no tienen alcance; solo las funciones tienen alcance. Entonces, si una variable se define usando `var` en una declaración compuesta (por ejemplo, dentro de una estructura de control `if`), será visible para toda la función. Sin embargo, a partir de ECMAScript 2015, las declaraciones {{jsxref("Sentencias/let", "let")}} y {{jsxref("Sentencias/const", "const")}} te permiten crear variables con alcance de bloque.

## Operadores

Los operadores numéricos de JavaScript son `+`, `-`, `*`, `/` y `%` que es el operador de residuo o resto ([que es lo mismo que módulo](/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_%28%29)). Los valores se asignan usando `=`, y también hay declaraciones de asignación compuestas como `+=` y `-=`. Estas se extienden hasta `x = x operador y`.

```js
x += 5;
x = x + 5;
```

Puedes usar `++` y `--` para incrementar y disminuir respectivamente. Estos se pueden utilizar como operadores prefijos o sufijos.

El [operador `+`](/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition) también hace concatenación de cadenas:

```js
"hello" + " world"; // "hello world"
```

Si agregas una cadena a un número (u otro valor), todo se convierte primero en cadena. Esto podría hacerte tropezar:

```js
"3" + 4 + 5; // "345"
3 + 4 + "5"; // "75"
```

Agregar una cadena vacía a algo es una forma útil de convertirla en cadena.

[Se pueden realizar comparaciones](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) en JavaScript utilizando `<`, `>`, `<=` y `>=`. Estas funcionan tanto para cadenas como para números. La igualdad es un poco menos sencilla. El operador doble-igual realiza la coerción de tipos si le das diferentes tipos, con resultados a veces interesantes:

```js
123 == "123"; // true
1 == true; // true
```

Para evitar la coerción de tipos, usa el operador triple-igual:

```js
123 === "123"; // false
1 === true; // false
```

También hay operadores `!=` y `!==`.

JavaScript también tiene [operaciones bit a bit](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators). Si quieres usarlas, ahí están.

## Estructuras de control

JavaScript tiene un conjunto de estructuras de control similar a otros lenguajes de la familia C. Las declaraciones condicionales son compatibles con `if` y `else`; las puedes encadenarlas si lo deseas:

```js
var name = "kittens";
if (name == "puppies") {
  name += " woof";
} else if (name == "kittens") {
  name += " meow";
} else {
  name += "!";
}
name == "kittens meow";
```

JavaScript tiene bucles `while` y bucles `do-while`. El primero es bueno para bucles básicos; el segundo bucle para donde deseas asegurarte de que el cuerpo del bucle se ejecute por lo menos una vez:

```js
while (true) {
  // ¡un bucle infinito!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));
```

El [bucle `for`](/es/docs/Web/JavaScript/Reference/Statements/for) de JavaScript es igual que el de C y Java: te permite proporcione la información de control para tu bucle en una sola línea.

```js
for (var i = 0; i < 5; i++) {
  // Se ejecutará 5 veces
}
```

JavaScript también contiene otros dos bucles `for` destacados: [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of)

```js
for (let value of array) {
  // haz algo con valor
}
```

y [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in):

```js
for (let property in object) {
  // hacer algo con la propiedad del objeto
}
```

Los operadores `&&` y `||` utilizan evaluación de cortocircuito, lo cual significa que la evaluación del segundo operando depende del valor del primero. Esto es útil para verificar objetos nulos antes de acceder a sus atributos:

```js
var name = o && o.getName();
```

O para almacenar en caché los valores (cuando los valores falsos no son válidos):

```js
var name = cachedName || (cachedName = getName());
```

JavaScript tiene un operador ternario para expresiones condicionales:

```js
var allowed = age > 18 ? "yes" : "no";
```

La instrucción `switch` se puede usar para múltiples ramas según un número o cadena:

```js
switch (action) {
  case "draw":
    drawIt();
    break;
  case "eat":
    eatIt();
    break;
  default:
    doNothing();
}
```

Si no agregas una instrucción `break`, la ejecución "caerá" al siguiente nivel. Esto muy rara vez es lo que deseas; de hecho, vale la pena etiquetar específicamente la caída deliberada con un comentario si realmente lo pretendías para ayudar a la depuración:

```js
switch (a) {
  case 1: // caída deliberada
  case 2:
    eatIt();
    break;
  default:
    doNothing();
}
```

La cláusula `default` es opcional. Puedes tener expresiones tanto en la parte del switch como en los casos si lo deseas; las comparaciones tienen lugar entre los dos utilizando el operador `===`:

```js
switch (1 + 3) {
  case 2 + 2:
    yay();
    break;
  default:
    neverhappens();
}
```

## Objetos

Los objetos de JavaScript se pueden considerar como simples colecciones de pares nombre-valor. Como tal, son similares a:

- Diccionarios en Python.
- Hashes en Perl y Ruby.
- Tablas hash en C y C++.
- HashMaps en Java.
- Arreglos asociativas en PHP.

El hecho de que esta estructura de datos se utilice tan ampliamente es un testimonio de su versatilidad. Dado que todo (el núcleo, tipos bar) en JavaScript es un objeto, cualquier programa de JavaScript implica naturalmente una gran cantidad de búsquedas en tablas hash. ¡Qué bueno que sean tan rápidas!

La parte "name" es una cadena JavaScript, mientras que el valor puede ser cualquier valor de JavaScript, incluidos más objetos. Esto te permite construir estructuras de datos de complejidad arbitraria.

Hay dos formas básicas de crear un objeto vacío:

```js
var obj = new Object();
```

Y:

```js
var obj = {};
```

Estas son semánticamente equivalentes; la segunda se llama sintaxis literal de objeto y es más conveniente. Esta sintaxis también es el núcleo del formato JSON y se debe preferir en todo momento.

La sintaxis de objeto literal se puede utilizar para iniciar un objeto en su totalidad:

```js
var obj = {
  name: "Carrot",
  for: "Max", // 'for' es una palabra reservada, use '_for' en su lugar.
  details: {
    color: "orange",
    size: 12,
  },
};
```

El acceso a los atributos se puede encadenar:

```js
obj.details.color; // orange
obj["details"]["size"]; // 12
```

El siguiente ejemplo crea un prototipo de objeto (`Person`) y una instancia de ese prototipo (`you`).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Define un objeto
var you = new Person("You", 24);
// Estamos creando una nueva persona llamada "You" de 24 años.
```

**Una vez creado**, se puede volver a acceder a las propiedades de un objeto de dos formas:

```js
// notación de puntos
obj.name = "Simon";
var name = obj.name;
```

Y...

```js
// notación de corchetes
obj["name"] = "Simon";
var name = obj["name"];
// puedes usar una variable para definir una clave
var user = prompt("¿cuál es su clave?");
obj[user] = prompt("¿cuál es su valor?");
```

Estas también son semánticamente equivalentes. El segundo método tiene la ventaja de que el nombre de la propiedad se proporciona como una cadena, lo cual significa que se puede calcular en tiempo de ejecución. Sin embargo, el uso de este método evita que se apliquen algunas optimizaciones de minificación y del motor de JavaScript. También se puede utilizar para establecer y obtener propiedades con nombres [palabras reservadas](/es/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords):

```js
obj.for = "Simon"; // Error de sintaxis, porque 'for' es una palabra reservada
obj["for"] = "Simon"; // trabaja bien
```

> **Nota:** A partir de ECMAScript 5, las palabras reservadas se pueden utilizar como nombres de propiedad de objeto "en bruto". Esto significa que no necesitan "vestirse" entre comillas al definir objeto literales. Consulta la [especificación](http://es5.github.io/#x7.6.1) de ES5.

Para obtener más información sobre objetos y prototipos, consulta {{jsxref("Objetos_Globales/Object/prototype", "Object.prototype")}}. Para obtener una explicación de los prototipos de objetos y las cadenas de prototipos de objetos, consulta [Herencia y la cadena de prototipos](/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

> **Nota:** A partir de ECMAScript 2015, las claves de objeto se pueden definir mediante la variable en notación de corchetes al crearlas. `{[phoneType]: 12345}` es posible en lugar de solo `var userPhone = {}; userPhone[phoneType] = 12345`.

## Arreglos

Los arreglos en JavaScript en son realidad un tipo especial de objeto. Funcionan de manera muy parecida a los objetos normales (las propiedades numéricas se pueden acceder naturalmente solo usando la sintaxis `[]`) pero tienen una propiedad mágica llamada '`length`'. Este siempre es uno más que el índice más alto de el arreglo.

Una forma de crear arreglos es la siguiente:

```js
var a = new Array();
a[0] = "dog";
a[1] = "cat";
a[2] = "hen";
a.length; // 3
```

Una notación más conveniente es usar un arreglo literal:

```js
var a = ["dog", "cat", "hen"];
a.length; // 3
```

Ten en cuenta que `array.length` no necesariamente es el número de elementos del arreglo. Considera lo siguiente:

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
a.length; // 101
```

Recuerda — la longitud de el arreglo es uno más que el índice más alto.

Si consultas un índice de arreglo que no existe, obtendrás un valor de `undefined`:

```js
typeof a[90]; // undefined
```

Si tienes en cuenta lo anterior sobre `[]` y `length`, puedes iterar sobre un arreglo utilizando el siguiente bucle `for`:

```js
for (var i = 0; i < a.length; i++) {
  // Haz algo con a[i]
}
```

ES2015 introdujo el bucle más conciso [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of) para objetos iterables como arreglos:

```js
for (const currentValue of a) {
  // Haz algo con currentValue
}
```

También puedes iterar sobre un arreglo utilizando el bucle [`for...in`](/es/docs/Web/JavaScript/Reference/Statements/for...in), sin embargo, este no itera sobre los elementos del arreglo, sino los índices del arreglo. Además, si alguien agrega nuevas propiedades a `Array.prototype`, también serán iteradas por dicho bucle. Por lo tanto, este tipo de bucle no se recomienda para arreglos.

Otra forma de iterar sobre un arreglo que se agregó con ECMAScript 5 es {{jsxref("Objetos_Globales/Array/forEach", "arr.forEach()")}}:

```js
["dog", "cat", "hen"].forEach(function (currentValue, index, array) {
  // Hacer algo con currentValue o array[index]
});
```

Si deseas agregar un elemento a un arreglo, simplemente hazlo así:

```js
a.push(item);
```

Los arreglos vienen con varios métodos. Consulta también la {{jsxref("Objetos_Globales/Array", "documentación completa para métodos de arreglo")}}.

| Nombre del método                                    | Descripción                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `a.toString()`                                       | Devuelve una cadena con el `toString()` de cada elemento separado por comas.               |
| `a.toLocaleString()`                                 | Devuelve una cadena con el `toLocaleString()` de cada elemento separado por comas.         |
| `a.concat(item1[, item2[, ...[, itemN]]])`           | Devuelve un nuevo arreglo con los elementos agregados.                                     |
| `a.join(sep)`                                        | Convierte el arreglo en una cadena, con valores delimitados por el parámetro `sep`         |
| `a.pop()`                                            | Elimina y devuelve el último elemento.                                                     |
| `a.push(item1, ..., itemN)`                          | Agrega elementos al final del arreglo.                                                     |
| `a.shift()`                                          | Elimina y devuelve el primer elemento.                                                     |
| `a.unshift(item1[, item2[, ...[, itemN]]])`          | Añade elementos al inicio del arreglo.                                                     |
| `a.slice(start[, end])`                              | Devuelve un subarreglo.                                                                    |
| `a.sort([cmpfn])`                                    | Toma una función de comparación opcional.                                                  |
| `a.splice(start, delcount[, item1[, ...[, itemN]]])` | Te permite modificar un arreglo eliminando una sección y reemplazándola con más elementos. |
| `a.reverse()`                                        | Invierte el arreglo.                                                                       |

## Funciones

Junto con los objetos, las funciones son el componente principal para comprender JavaScript. La función más básica no podría ser mucho más sencilla:

```js
function add(x, y) {
  var total = x + y;
  return total;
}
```

Esto demuestra una función básica. Una función de JavaScript puede tomar 0 o más parámetros con nombre. El cuerpo de la función puede contener tantas declaraciones como desees y puedes declarar tus propias variables que son locales para esa función. La declaración `return` se puede usar para devolver un valor en cualquier momento, terminando la función. Si no se utiliza una declaración `return` (o `return` vacía sin valor), JavaScript devuelve `undefined`.

Los parámetros nombrados resultan ser más intuitivos que cualquier otra cosa. Puedes llamar a una función sin pasar los parámetros que espera, en cuyo caso se establecerán en `undefined`.

```js
add(); // NaN
// No puedes realizar sumas en undefined
```

También puedes pasar más argumentos de los que espera la función:

```js
add(2, 3, 4); // 5
// sumó los dos primeros; el 4 fue ignorado
```

Eso puede parecer un poco tonto, pero las funciones tienen acceso a una variable adicional dentro de su cuerpo llamada [`argumentos`](/es/docs/Web/JavaScript/Reference/Functions/argument), que es un objeto tipo arreglo que contiene todos los valores pasados a la función. Reescribamos la función de suma para tomar tantos valores como queramos:

```js
function add() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

add(2, 3, 4, 5); // 14
```

Sin embargo, eso no es más útil que escribir `2 + 3 + 4 + 5`. Creemos una función de promedio:

```js
function avg() {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

Esta es bastante útil, pero parece un poco detallada. Para reducir un poco más este código, podemos considerar la sustitución del uso del arreglo de argumentos a través de la [sintaxis del parámetro `Rest`](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters). De esta manera, podemos pasar cualquier número de argumentos a la función manteniendo nuestro código mínimo. El **operador de parámetro `rest`** se usa en listas de parámetros de función con el formato: **...variable** e incluirá dentro de esa variable la lista completa de argumentos no capturados a los que se llamó la función. `with`. También reemplazaremos el bucle **for** con un bucle **for...of** para devolver los valores dentro de nuestra variable.

```js
function avg(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}

avg(2, 3, 4, 5); // 3.5
```

> **Nota:** En el código anterior, la variable **args** contiene todos los valores que se pasaron a la función.
>
> Es importante tener en cuenta que dondequiera que se coloque el operador de parámetro `rest` en una declaración de función, almacenará todos los argumentos _después_ de su declaración, pero no antes. _es decir, function_ _avg(_**firstValue,** _...args)_ almacenará el primer valor pasado a la función en la variable **firstValue** y los argumentos restantes en **args**. Esa es otra característica útil del lenguaje, pero nos lleva a un nuevo problema. La función `avg()` toma una lista de argumentos separados por comas, pero ¿qué sucede si deseas encontrar el promedio de un arreglo? Simplemente, podrías reescribir la función de la siguiente manera:

```js
function avgArray(arr) {
  var sum = 0;
  for (var i = 0, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

avgArray([2, 3, 4, 5]); // 3.5
```

Pero sería bueno poder reutilizar la función que ya hemos creado. Afortunadamente, JavaScript te permite llamar a una función con un arreglo arbitrario de argumentos, usando el método {{jsxref("Function.apply", "apply()")}} de cualquier objeto función.

```js
avg.apply(null, [2, 3, 4, 5]); // 3.5
```

El segundo argumento de `apply()` es el arreglo que se utilizará como `arguments`; el primero se explicará más adelante. Esto enfatiza el hecho de que las funciones también son objetos.

> **Nota:** Puedes lograr el mismo resultado utilizando el [operador de propagación](/es/docs/Web/JavaScript/Reference/Operators/Spread_operator) en la llamada de función.
>
> Por ejemplo: `avg(...numbers)`

JavaScript te permite crear funciones anónimas.

```js
var avg = function () {
  var sum = 0;
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
};
```

Esto semánticamente es equivalente a la forma `function avg()`. Es extremadamente poderosa, ya que te permite colocar una definición de función completa en cualquier lugar donde normalmente colocarías una expresión. Esto permite todo tipo de ingeniosos trucos. Aquí hay una forma de "ocultar" algunas variables locales — como alcance de bloque en C:

```js
var a = 1;
var b = 2;

(function () {
  var b = 3;
  a += b;
})();

a; // 4
b; // 2
```

JavaScript te permite llamar a funciones de forma recursiva. Esto es particularmente útil para tratar con estructuras de árbol, como las que se encuentran en el DOM del navegador.

```js
function countChars(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += countChars(child);
  }
  return count;
}
```

Esto resalta un problema potencial con las funciones anónimas: ¿cómo las llama de forma recursiva si no tienen un nombre? JavaScript te permite nombrar expresiones de función para esto. Puedes utilizar {{Glossary("IIFE", "IIFE (expresiones de función invocadas inmediatamente)")}} con nombre como se muestra a continuación:

```js
var charsInBody = (function counter(elm) {
  if (elm.nodeType == 3) {
    // TEXT_NODE
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; (child = elm.childNodes[i]); i++) {
    count += counter(child);
  }
  return count;
})(document.body);
```

El nombre proporcionado a una expresión de función como arriba solo está disponible para el alcance de la función. Esto permite que el motor realice más optimizaciones y da como resultado un código más legible. El nombre también aparece en el depurador y en algunos seguimientos de la pila, lo cual puede ahorrarte tiempo al depurar.

Ten en cuenta que las funciones de JavaScript en sí mismas son objetos, como todo lo demás en JavaScript, y puedes agregar o cambiar propiedades en ellas tal como hemos visto anteriormente en la sección Objetos.

## Objetos personalizados

> **Nota:** Para obtener una descripción más detallada de la programación orientada a objetos en JavaScript, consulta [Introducción a JavaScript orientado a objetos](/es/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript).

En la programación clásica orientada a objetos, los objetos son colecciones de datos y métodos que operan sobre esos datos. JavaScript es un lenguaje basado en prototipos que no contiene una declaración de clase, como la encontrarías en C++ o Java (esto, a veces es confuso para los programadores acostumbrados a lenguajes con una declaración de clase). En cambio, JavaScript usa funciones como clases. Consideremos un objeto `person` con campos `first` y `last name`. Hay dos formas de mostrar el nombre: como "primero último" o como "último, primero". Usando las funciones y objetos que hemos explicado anteriormente, podríamos mostrar los datos de esta manera:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
  };
}
function personFullName(person) {
  return person.first + " " + person.last;
}
function personFullNameReversed(person) {
  return person.last + ", " + person.first;
}

var s = makePerson("Simon", "Willison");
personFullName(s); // "Simon Willison"
personFullNameReversed(s); // "Willison, Simon"
```

Esto funciona, pero es bastante feo. Terminas con docenas de funciones en tu espacio de nombres global. Lo que realmente necesitamos es una forma de enlazar una función a un objeto. Dado que las funciones son objetos, esto es fácil:

```js
function makePerson(first, last) {
  return {
    first: first,
    last: last,
    fullName: function () {
      return this.first + " " + this.last;
    },
    fullNameReversed: function () {
      return this.last + ", " + this.first;
    },
  };
}

var s = makePerson("Simon", "Willison");
s.fullName(); // "Simon Willison"
s.fullNameReversed(); // "Willison, Simon"
```

Nota sobre la palabra clave [`this`](/es/docs/Web/JavaScript/Reference/Operators/this). Usada dentro de una función, `this` se refiere al objeto actual. Lo que realmente significa está especificado por la forma en que llamaste a esa función. Si lo llamaste usando [notación de puntos o notación de corchetes](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer#Accessing_properties) en un objeto, ese objeto se convierte en `this`. Si la notación de puntos no se usó para la llamada, `this` se refiere al objeto global.

Ten en cuenta que `this` es una frecuente causa de errores. Por ejemplo:

```js
var s = makePerson("Simon", "Willison");
var fullName = s.fullName;
fullName(); // undefined undefined
```

Cuando llamamos a `fullName()` solo, sin usar `s.fullName()`, `this` está vinculado al objeto global. Debido a que no hay variables globales llamadas `first` o `last` obtenemos `undefined` para cada una.

Podemos aprovechar la palabra clave `this` para mejorar nuestra función `makePerson`:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = function () {
    return this.first + " " + this.last;
  };
  this.fullNameReversed = function () {
    return this.last + ", " + this.first;
  };
}
var s = new Person("Simon", "Willison");
```

Hemos introducido otra palabra clave: [`new`](/es/docs/Web/JavaScript/Reference/Operators/new). `new` está fuertemente relacionado con `this`. Crea un nuevo objeto vacío y luego llama a la función especificada, con `this` configurado para ese nuevo objeto. Sin embargo, ten en cuenta que la función especificada con `this` no devuelve un valor, sino que simplemente modifica el objeto `this`. Es `new` que devuelve el objeto `this` al sitio que realiza la llamada. Las funciones que están diseñadas para ser llamadas por `new` se denominan funciones constructoras. La práctica común es poner en mayúscula estas funciones como recordatorio para llamarlas con `new`.

La función mejorada todavía tiene el mismo error al llamar a `fullName()` sola.

Nuestros objetos `person` están mejorando, pero todavía tienen algunos bordes desagradables. Cada vez que creamos un objeto `person`, estamos creando dos nuevos objetos de función dentro de él, ¿no sería mejor si este código fuera compartido?

```js
function personFullName() {
  return this.first + " " + this.last;
}
function personFullNameReversed() {
  return this.last + ", " + this.first;
}
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.fullName = personFullName;
  this.fullNameReversed = personFullNameReversed;
}
```

Eso es mejor: estamos creando las funciones como métodos solo una vez y asignándoles referencias dentro del constructor. ¿Podemos hacer algo mejor que eso? La respuesta es sí:

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function () {
  return this.first + " " + this.last;
};
Person.prototype.fullNameReversed = function () {
  return this.last + ", " + this.first;
};
```

`Person.prototype` es un objeto compartido por todas las instancias de `Person`. Forma parte de una cadena de búsqueda (que tiene un nombre especial, "cadena de prototipos"): cada vez que intentes acceder a una propiedad de `Person` que no esté configurada, JavaScript revisará `Person.prototype` para ver si esa propiedad existe allí. Como resultado, todo lo asignado a `Person.prototype` pasa a estar disponible para todas las instancias de ese constructor a través del objeto `this`.

Esta es una herramienta increíblemente poderosa. JavaScript te permite modificar el prototipo de algo en cualquier momento en tu programa, lo cual significa que —en tiempo de ejecución— puedes agregar métodos adicionales a los objetos existentes:

```js
var s = new Person("Simon", "Willison");
s.firstNameCaps(); // TypeError en la línea 1: s.firstNameCaps no es una función

Person.prototype.firstNameCaps = function () {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

Curiosamente, también puedes agregar cosas al prototipo de objetos JavaScript integrados. Agreguemos un método a `String` que devuelva esa cadena a la inversa:

```js
var s = "Simon";
s.reversed(); // TypeError en la línea 1: s.reversed no es una función

String.prototype.reversed = function () {
  var r = "";
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS
```

¡Nuestro método `new` funciona incluso con cadenas literales!

```js
"Esto ahora se puede revertir".reversed(); // ritrever edeup es aroha otsE
```

Como se mencionó anteriormente, el prototipo forma parte de una cadena. La raíz de esa cadena es `Object.prototype`, cuyos métodos incluyen `toString()`; es este método el que se llama cuando intentas representar un objeto como una cadena. Esto es útil para depurar nuestros objetos `Person`:

```js
var s = new Person("Simon", "Willison");
s.toString(); // [object Object]

Person.prototype.toString = function () {
  return "<Person: " + this.fullName() + ">";
};

s.toString(); // "<Person: Simon Willison>"
```

¿Recuerda cómo `avg.apply()` tenía un primer argumento `null`? Ahora lo podemos revisar. El primer argumento de `apply()` es el objeto que se debe tratar como '`this`'. Por ejemplo, aquí hay una implementación trivial de `new`:

```js
function trivialNew(constructor, ...args) {
  var o = {}; // Crea un objeto
  constructor.apply(o, args);
  return o;
}
```

Esta no es una réplica exacta de `new` ya que no configura la cadena de prototipos (sería difícil de ilustrar). Esto no es algo que use con mucha frecuencia, pero es útil conocerlo. En este fragmento, `...args` (incluidos los puntos suspensivos) se denomina "[argumentos rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)" — como su nombre indica, contiene el resto de los argumentos.

Llamar a...

```js
var bill = trivialNew(Person, "William", "Orange");
```

...por tanto, casi es equivalente a

```js
var bill = new Person("William", "Orange");
```

`apply()` tiene una función hermana llamada {{jsxref("Objetos_Globales/Function/call", "call()")}}, que nuevamente te permite establecer `this` pero toma una lista de argumentos expandida en lugar de un arreglo.

```js
function lastNameCaps() {
  return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// Es lo mismo que:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps(); // WILLISON
```

### Funciones internas

Las declaraciones de función de JavaScript están permitidas dentro de otras funciones. Hemos visto esto una vez antes, con la función `makePerson()` anterior. Un detalle importante de las funciones anidadas en JavaScript es que pueden acceder a las variables en el alcance de su función padre:

```js
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc no puede usar esto
    return a + b;
  }
  return nestedFunc(); // 5
}
```

Esto proporciona una gran utilidad para escribir un código más fácil de mantener. Si una función llamada se basa en una o dos funciones que no son útiles para ninguna otra parte de tu código, puedes anidar esas funciones de utilidad dentro de ella. Esto mantiene baja la cantidad de funciones que están en el alcance global, lo cual siempre es bueno.

Esto también contrarresta el atractivo de las variables globales. Al escribir código complejo, a menudo es tentador utilizar variables globales para compartir valores entre múltiples funciones, lo que conduce a un código difícil de mantener. Las funciones anidadas pueden compartir variables en su padre, por lo que puedes usar ese mecanismo para unir funciones cuando tenga sentido sin contaminar tu espacio de nombres global — "globales locales" si lo deseas. Esta técnica se debe usar con precaución, pero es una útil habilidad.

## Cierres

Esto nos lleva a una de las abstracciones más poderosas que JavaScript tiene para ofrecer — pero potencialmente, también la más confusa. ¿Qué hace esta?

```js
function makeAdder(a) {
  return function (b) {
    return a + b;
  };
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
add5(6); // ?
add20(7); // ?
```

El nombre de la función `makeAdder()` lo debería revelar: crea nuevas funciones '`adder`', cada una de las cuales, cuando se llama con un argumento, lo suma al argumento con el que fue creada.

Lo que está sucediendo aquí es más o menos lo mismo que sucedía anteriormente con las funciones internas: una función definida dentro de otra función tiene acceso a las variables de la función externa. La única diferencia aquí es que la función externa ha regresado y, por lo tanto, el sentido común parece dictar que sus variables locales ya no existen. Pero _sí_ existen todavía — de lo contrario, las funciones de suma no podrían funcionar. Además, hay dos diferentes "copias" de las variables locales de `makeAdder()`: una en la que `a` es 5 y la otra en la que `a` es 20. Entonces, el resultado de las llamadas a esa función es el siguiente:

```js
add5(6); // returns 11
add20(7); // devuelve 27
```

Esto es lo que está sucediendo realmente. Siempre que JavaScript ejecuta una función, se crea un objeto '`scope`' para contener las variables locales creadas dentro de esa función. Se inicia con cualquier variable pasada como parámetros de función. Esto es similar al objeto global en el que viven todas las variables y funciones globales, pero con un par de importantes diferencias: en primer lugar, se crea un objeto de alcance completamente nuevo cada vez que una función se comienza a ejecutar y, en segundo lugar, a diferencia del objeto global (que es accesible como `this` y en los navegadores como `window`) no se puede acceder directamente a estos objetos `scope` desde tu código JavaScript. No hay ningún mecanismo para iterar sobre las propiedades del objeto `scope` actual, por ejemplo.

Entonces, cuando se llama a `makeAdder()`, se crea un objeto `scope` con una propiedad: `a`, que es el argumento que se pasa a la función `makeAdder()`. `makeAdder()` luego devuelve una función recién creada. Normalmente, el recolector de basura de JavaScript limpiaría el objeto `scope` creado para `makeAdder()` en este punto, pero la función devuelta mantiene una referencia a ese objeto de ámbito. Como resultado, el objeto `scope` no será recolectado como basura hasta que no haya más referencias al objeto función que `makeAdder()` devolvió.

Los objetos `scope` forman una cadena llamada cadena de ámbito, similar a la cadena de prototipos utilizada por el sistema de objetos de JavaScript.

Un **cierre** es la combinación de una función y el objeto `scope` en el que se creó. Los cierres te permiten guardar el estado — como tal, a menudo se pueden usar en lugar de objetos. Puedes encontrar [varias presentaciones excelentes de los cierres](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work).
