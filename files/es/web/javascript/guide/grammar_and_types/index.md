---
title: Gramática y Tipos
slug: Web/JavaScript/Guide/Grammar_and_types
tags:
  - Guia(2)
  - Guía
  - JavaScript
  - Variables
  - literales
translation_of: Web/JavaScript/Guide/Grammar_and_types
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</div>

<p class="summary">Este capítulo analiza la gramática básica de JavaScript, la declaración de variables, los tipos de datos y literales.</p>

<h2 id="Conceptos_básicos">Conceptos básicos</h2>

<p>JavaScript está influenciado sobre todo por la sintaxis de Java, C y C++, pero también ha sido influenciado por Awk, Perl y Python.</p>

<p>JavaScript distingue entre mayúsculas y minúsculas (es <strong>case-sensitive</strong>) y utiliza el conjunto de caracteres <strong>Unicode</strong>. Por ejemplo, la palabra «Früh» (que significa "temprano" en Alemán) se podría usar como el nombre de una variable.</p>

<pre class="brush: js notranslate">let Früh = "foobar"</pre>

<p>Pero, la variable <code>früh</code> no es la misma que <code>Früh</code> porque JavaScript distingue entre mayúsculas y minúsculas.</p>

<p>En JavaScript, las instrucciones se denominan {{Glossary("Statement", "declaraciones")}} y están separadas por punto y coma (;).</p>

<p>No es necesario un punto y coma después de una declaración si está escrita en su propia línea. Pero si se deseas más de una declaración en una línea, entonces <em>debes</em> separarlas con punto y coma.</p>

<div class="blockIndicator note">
<p>ECMAScript también tiene reglas para la inserción automática del punto y coma —{{JSxRef("Gramatica_lexica", "IAPC", "#Insercion_automatica_de_punto_y_coma")}}— (<em>ASI</em> en inglés, por sus siglas «<em>Automatic Semicolon Insertion</em>») al final de las declaraciones. (Para obtener más información, consulta la referencia detallada sobre la {{JSxRef("Gramatica_lexica", "gramática léxica")}} de JavaScript).</p>
</div>

<p>Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.</p>

<p>El texto fuente del script JavaScript se escanea de izquierda a derecha y se convierte en una secuencia de elementos de entrada que son <em>fragmentos</em>, <em>caracteres de control</em>, <em>terminadores de línea</em>, <em>comentarios</em> o {{Glossary("Espacio en blanco", "espacios en blanco")}}. (Los espacios, tabulaciones y caracteres de nueva línea se consideran espacios en blanco).</p>

<h2 id="Comentarios">Comentarios</h2>

<p>La sintaxis de los <strong>comentarios</strong> es la misma que en C++ y en muchos otros lenguajes:</p>

<pre class="brush: js notranslate">// un comentario de una línea

/* este es un comentario
 * más largo, de varias líneas
 */

/* Sin embargo, no puedes /* anidar comentarios */ SyntaxError */
</pre>

<p>Los comentarios se comportan como espacios en blanco y se descartan durante la ejecución del script.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: También puedes ver un tercer tipo de sintaxis de comentario al comienzo de algunos archivos JavaScript, que se parece a esto: <code>#!/usr/bin/env node</code>.</p>

<p>Esto se denomina sintaxis de <strong>comentario hashbang</strong> y es un comentario especial que se utiliza para especificar la ruta a un motor JavaScript en particular que debe ejecutar el script. Consulta {{JSxRef("Gramatica_lexica", "Comentarios Hashbang", "#Comentarios_hashbang")}} para obtener más detalles.</p>
</div>

<h2 id="Declaraciones">Declaraciones</h2>

<p>JavaScript tiene tres tipos de declaraciones de variables.</p>

<dl>
 <dt>{{JSxRef("Sentencias/var", "var")}}</dt>
 <dd>Declara una variable, opcionalmente la inicia a un valor.</dd>
 <dt>{{JSxRef("Sentencias/let", "let")}}</dt>
 <dd>Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.</dd>
 <dt>{{JSxRef("Sentencias/const", "const")}}</dt>
 <dd>Declara un nombre de constante de solo lectura y ámbito de bloque.</dd>
</dl>

<h3 id="Variables">Variables</h3>

<p>Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados {{Glossary("Identifier", "identificadores")}}, se ajustan a ciertas reglas.</p>

<p>Un identificador de JavaScript debe comenzar con una letra, un guión bajo (<code>_</code>) o un signo de dólar (<code>$</code>). Los siguientes caracteres también pueden ser dígitos (<code>0</code>-<code>9</code>).</p>

<p>Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "<code>A</code>" a "<code>Z</code>" (mayúsculas), así como "<code>a</code>" a "z" (minúsculas).</p>

<p>Puedes utilizar la mayoría de las letras ISO 8859-1 o Unicode como <code>å</code> y <code>ü</code> en los identificadores. (Para obtener más detalles, consulta <a href="https://mathiasbynens.be/notes/javascript-identifiers-es6">esta publicación del blog</a>). También puedes usar {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}} como caracteres en identificadores.</p>

<p>Algunos ejemplos de nombres legales son <code>Number_hits</code>, <code>temp99</code>, <code>$credit</code> y <code>_name</code>.</p>

<h3 id="Declaración_de_variables">Declaración de variables</h3>

<p>Puedes declarar una variable de dos formas:</p>

<ul>
 <li>Con la palabra clave {{JSxRef("Sentencias/var", "var")}}. Por ejemplo, <code>var x = 42</code>. Esta sintaxis se puede utilizar para declarar variables <strong>locales</strong> y <strong>globales</strong>, dependiendo del <em>contexto de ejecución</em>.</li>
 <li>Con la palabra clave {{JSxRef("Sentencias/const", "const")}} o {{JSxRef("Sentencias/let", "let")}}. Por ejemplo, <code>let y = 13</code>. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque. (Ve el <a href="#ambito_de_variables">Ámbito de variables</a> abajo.)</li>
</ul>

<p>También puedes simplemente asignar un valor a una variable. Por ejemplo, <code>x = 42</code>. Este formulario crea una variable {{JSxRef("Sentencias/var", "global no declarada", "#Descripción")}}. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.</p>

<h3 id="Evaluar_variables">Evaluar variables</h3>

<p>Una variable declarada usando la instrucción <code>var</code> o <code>let</code> sin un valor asignado especificado tiene el valor de {{JSxRef("undefined")}}.</p>

<p>Un intento de acceder a una variable no declarada da como resultado el disparo de una excepción {{JSxRef("ReferenceError")}}:</p>

<pre class="brush: js notranslate">var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
let y;</pre>

<p>Puedes usar <code>undefined</code> para determinar si una variable tiene un valor. En el siguiente código, a la variable <code>input</code> no se le asigna un valor y la declaración {{JSxRef("Sentencias/if...else", "if")}} evalúa a <code>true</code>.</p>

<pre class="brush: js notranslate">var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
</pre>

<p>El valor <code>undefined</code> se comporta como <code>false</code> cuando se usa en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función <code>myFunction</code> porque el elemento <code>myArray</code> es <code>undefined</code>:</p>

<pre class="brush: js notranslate">var myArray = [];
if (!myArray[0]) myFunction();
</pre>

<p>El valor <code>undefined</code> se convierte en <code>NaN</code> cuando se usa en contexto numérico.</p>

<pre class="brush: js notranslate">var a;
a + 2;  // Evalúa a NaN</pre>

<p>Cuando evalúas una variable {{JSxRef("null")}}, el valor nulo se comporta como <code>0</code> en contextos numéricos y como <code>false</code> en contextos booleanos. Por ejemplo:</p>

<pre class="brush: js notranslate">var n = null;
console.log(n * 32); // Registrará 0 en la consola
</pre>

<h3 id="Ámbito_de_variables">Ámbito de variables</h3>

<p>Cuando declaras una variable fuera de cualquier función, se denomina variable <em>global</em>, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable <em>local</em>, porque solo está disponible dentro de esa función.</p>

<p>JavaScript anterior a ECMAScript 2015 no tiene el ámbito de la {{JSxRef("../Guide/Control_de_flujo_y_manejo_de_errores", "declaración de bloque", "#Block_statement", "Checar")}}. Más bien, una variable declarada dentro de un bloque es local a la <em>función (o ámbito global)</em> en el que reside el bloque.</p>

<p>Por ejemplo, el siguiente código registrará <code>5</code>, porque el ámbito de <code>x</code> es el contexto global (o el contexto de la función si el código es parte de una función). El ámbito de <code>x</code> no se limita al bloque de instrucciones <code>if</code> inmediato.</p>

<pre class="brush: js notranslate">if (true) {
  var x = 5;
}
console.log(x);  // x es 5
</pre>

<p>Este comportamiento cambia cuando se usa la declaración <code>let</code> (introducida en ECMAScript 2015).</p>

<pre class="brush: js notranslate">if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y no está definida
</pre>

<h3 id="Elevación_de_variables_hoisting">Elevación de variables (<code>hoisting</code>)</h3>

<p>Otra cosa inusual acerca de las variables en JavaScript es que puedes hacer referencia a una variable declarada más tarde, sin obtener una excepción.</p>

<p>Este concepto se conoce como <strong>elevación.</strong> Las variables en JavaScript son, en cierto sentido, "elevadas" (o "izadas") a la parte superior de la función o declaración. Sin embargo, las variables que se elevan devuelven un valor de <code>undefined</code>. Entonces, incluso si la declaras e inicias después de usarla o hacer referencia a esta variable, todavía devuelve <code>undefined</code>.</p>

<pre class="brush: js notranslate">/**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor de undefined
var myvar = 'my value';

(function() {
  console.log(myVar); // undefined
  var myvar = 'valor local';
})();
</pre>

<p>Los ejemplos anteriores se interpretarán de la misma manera que:</p>

<pre class="brush: js notranslate">/**
 * Ejemplo 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Ejemplo 2
 */
var myvar = 'my value';

(function() {
  var myVar;
  console.log(myVar); // undefined
  myvar = 'valor local';
})();
</pre>

<p>Debido a la elevación, todas las declaraciones <code>var</code> en una función se deben colocar lo más cerca posible de la parte superior de la función. Esta buena práctica aumenta la claridad del código.</p>

<p>En ECMAScript 2015, <code>let</code> y <code>const</code> <strong>se elevan pero no se inician</strong>. Hacer referencia a la variable en el bloque antes de la declaración de la variable da como resultado un {{JSxRef("ReferenceError")}}, porque la variable está en una "zona muerta temporal" desde el inicio del bloque hasta que se procesa la declaración.</p>

<pre class="brush: js notranslate">console.log(x); // ReferenceError
let x = 3;</pre>

<h3 id="Elevación_de_función">Elevación de función</h3>

<p>En el caso de las funciones, solo se incluyen <em>declaraciones</em> de función, pero <em>no</em> las <em>expresiones</em> de la función.</p>

<pre class="brush: js notranslate">/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function() {
  console.log('bar2');
};
</pre>

<h3 id="Variables_globales">Variables globales</h3>

<p>Las variables globales, de hecho, son propiedades del <em>objeto global</em>.</p>

<p>En las páginas web, el objeto global es {{domxref("window")}}, por lo que puedes establecer y acceder a variables globales utilizando la sintaxis <code>window.<var>variable</var></code>.</p>

<p>En consecuencia, puedes acceder a las variables globales declaradas en una «ventana» o «marco» desde otra «ventana» o «marco» especificando el nombre de la <code>window</code> o el <code>frame</code>. Por ejemplo, si declaras una variable llamada <code>phoneNumber</code> en un documento, puedes hacer referencia a esta variable desde un <code>iframe</code> como <code>parent.phoneNumber</code>.</p>

<h3 id="Constantes">Constantes</h3>

<p>Puedes crear una constante de solo lectura con nombre con la palabra clave {{JSxRef("Sentencias/const", "const")}}.</p>

<p>La sintaxis de un identificador de constante es la misma que la de cualquier identificador de variable: debe comenzar con una letra, un subrayado o un signo de dólar (<code>$</code>) y puede contener caracteres alfabéticos, numéricos o de subrayado.</p>

<pre class="brush: js notranslate">const PI = 3.14;
</pre>

<p>Una constante no puede cambiar el valor a través de la asignación o volver a declararla mientras se ejecuta el script. Se debe iniciar a un valor.</p>

<p>Las reglas de ámbito para las constantes son las mismas que las de ámbito de bloque de las variables <code>let</code>. Si se omite la palabra clave <code>const</code>, se asume que el identificador representa una variable.</p>

<p>No puedes declarar una constante con el mismo nombre que una función o una variable en el mismo ámbito. Por ejemplo:</p>

<pre class="brush: js notranslate">// ESTO CAUSARÁ UN ERROR
function f() {};
const f = 5;

// ESTO TAMBIÉN CAUSARÁ UN ERROR
function f() {
  const g = 5;
  var g;

  // expresiones
}
</pre>

<p>Sin embargo, las propiedades de los objetos asignados a constantes no son protegidas, es por esto que la siguiente declaración se ejecuta sin problemas.</p>

<pre class="brush: js notranslate">const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';</pre>

<p>Además, el contenido de los arreglos tampoco está protegido cuando es asignado a una constante, es por esto que la siguiente declaración se ejecuta sin problemas.</p>

<pre class="brush: js notranslate">const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];
</pre>

<h2 id="Estructuras_y_tipos_de_datos">Estructuras y tipos de datos</h2>

<h3 id="Tipos_de_datos">Tipos de datos</h3>

<p>El último estándar ECMAScript define ocho tipos de datos:</p>

<ul>
 <li>Siete tipos de datos que son {{Glossary("Primitive", "primitivos")}}:
  <ol>
   <li>{{Glossary("Boolean", "Booleano")}}. <code>true</code> y <code>false</code>.</li>
   <li>{{Glossary("null")}}. Una palabra clave especial que denota un valor nulo. (Dado que JavaScript distingue entre mayúsculas y minúsculas, <code>null</code> no es lo mismo que <code>Null</code>, <code>NULL</code> o cualquier otra variante).</li>
   <li>{{Glossary("undefined")}}. Una propiedad de alto nivel cuyo valor no está definido.</li>
   <li>{{Glossary("Number")}}. Un número entero o un número con coma flotante. Por ejemplo: <code>42</code> o <code>3.14159</code>.</li>
   <li>{{Glossary("BigInt")}}. Un número entero con precisión arbitraria. Por ejemplo: <code>9007199254740992n</code>.</li>
   <li>{{Glossary("String")}}. Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Hola"</li>
   <li>{{Glossary("Symbol")}} (nuevo en ECMAScript 2015). Un tipo de dato cuyas instancias son únicas e inmutables</li>
  </ol>
 </li>
 <li>y {{Glossary("Object")}}</li>
</ul>

<p>Aunque estos tipos de datos son una cantidad relativamente pequeña, permiten realizar funciones útiles con tus aplicaciones. Los otros elementos fundamentales en el lenguaje son los {{JSxRef("Object", "Objetos", "", 1)}} y las {{JSxRef("Function", "funciones", "", 1)}}. Puedes pensar en objetos como contenedores con nombre para los valores, y las funciones como procedimientos que puedes programar en tu aplicación.</p>

<h3 id="Conversión_de_tipos_de_datos">Conversión de tipos de datos</h3>

<p>JavaScript es un lenguaje <em>tipado dinámicamente</em>. Esto significa que no tienes que especificar el tipo de dato de una variable cuando la declaras. También significa que los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script.</p>

<p>Así, por ejemplo, puedes definir una variable de la siguiente manera:</p>

<pre class="brush: js notranslate">var answer = 42;
</pre>

<p>Y luego, puedes asignarle una cadena a esa misma variable, por ejemplo:</p>

<pre class="brush: js notranslate">answer = 'Gracias por todo el pescado...';
</pre>

<p>Debido a que JavaScript se tipifica dinámicamente, esta asignación no genera un mensaje de error.</p>

<h3 id="Números_y_el_operador">Números y el operador '+'</h3>

<p>En expresiones que involucran valores numéricos y de cadena con el operador <code>+</code>, JavaScript convierte los valores numéricos en cadenas. Por ejemplo, considera las siguientes declaraciones:</p>

<pre class="brush: js notranslate">x = 'La respuesta es ' + 42 // "La respuesta es 42"
y = 42 + ' es la respuesta' // "42 es la respuesta"
</pre>

<p>Con todos los demás operadores, JavaScript <em>no</em> convierte valores numéricos en cadenas. Por ejemplo:</p>

<pre class="brush: js notranslate">'37' - 7 // 30
'37' + 7 // "377"
</pre>

<h3 id="Convertir_texto_a_números">Convertir texto a números</h3>

<p>En el caso que un valor representando un número está en memoria como texto, hay métodos para la conversión.</p>

<ul>
 <li id="parseInt()_and_parseFloat()">{{JSxRef("parseInt", "parseInt()")}}</li>
 <li>{{JSxRef("parseFloat", "parseFloat()")}}</li>
</ul>

<p><code>parseInt</code> solo devuelve números enteros, por lo que su uso se reduce para decimales.</p>

<div class="blockIndicator note">
<p>Además, una práctica recomendada para <code>parseInt</code> es incluir siempre el parámetro <em>radix</em>. El parámetro <code>radix</code> se utiliza para especificar qué sistema numérico se utilizará.</p>
</div>

<pre class="brush: js notranslate">parseInt('101', 2) // 5</pre>

<p>Un método alternativo para recuperar un número de una cadena es con el operador <code>+</code> (más unario):</p>

<pre class="brush: js notranslate">'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// Nota: los paréntesis se agregan para mayor claridad, no son necesarios.</pre>

<h2 id="Literales">Literales</h2>

<p>Los <em>literales</em> representan valores en JavaScript. Estos son valores fijos, no variables, que <em>literalmente</em> proporcionas en tu script. Esta sección describe los siguientes tipos de literales:</p>

<ul>
 <li><a href="#arreglos_literales">Arreglos literales</a></li>
 <li><a href="#booleanos_literales">Booleanos literales</a></li>
 <li><a href="#literales_de_coma_flotante">Literales de coma flotante</a></li>
 <li><a href="#literales_numericos">Literales numéricos</a></li>
 <li><a href="#objetos_literales">Objetos literales</a></li>
 <li><a href="#regexp_literales">RegExp literales</a></li>
 <li><a href="#cadenas_literales">Cadenas literales</a></li>
</ul>

<h3 id="Arreglos_literales">Arreglos literales</h3>

<p>Un arreglo literal es una lista de cero o más expresiones, cada una de las cuales representa un elemento del arreglo, encerrada entre corchetes (<code>[]</code>). Cuando creas un arreglo utilizando un arreglo literal, se inicia con los valores especificados como sus elementos, y su <code>length</code> se establece en el número de argumentos especificado.</p>

<p>El siguiente ejemplo crea el arreglo <code>coffees</code> con tres elementos y <code>length</code> de tres:</p>

<pre class="brush: js notranslate">let coffees = ['French Roast', 'Colombian', 'Kona'];
</pre>

<div class="note">
<p><strong>Nota</strong>: Un arreglo literal es un tipo de <em>iniciador de objeto</em>. Consulta {{JSxRef("../Guide/Trabajando_con_objectos", "Uso de iniciadores de objetos", "#Uso_de_iniciadores_de_objeto")}}.</p>
</div>

<p>Si creas un arreglo utilizando un literal en un script de nivel superior, JavaScript interpreta el arreglo cada vez que evalúa la expresión que contiene el arreglo literal. Además, cada vez que llamas a una función se crea un literal usado en ella.</p>

<div class="blockIndicator note">
<p><strong>Nota</strong>: Los arreglos literales también son objetos <code>Array</code>. Consulta {{JSxRef("Array")}} y {{JSxRef("../Guide/colecciones_indexadas", "Colecciones indexadas")}} para obtener detalles sobre los objetos <code>Array</code>.</p>
</div>

<h4 id="Comas_adicionales_en_arreglos_literales">Comas adicionales en arreglos literales</h4>

<p>No tienes que especificar todos los elementos en un arreglo literal. Si colocas dos comas en una fila, el arreglo completa el valor <code>undefined</code> para los elementos no especificados. El siguiente ejemplo crea el arreglo <code>fish</code>:</p>

<pre class="brush: js notranslate">let fish = ['Lion', , 'Angel'];
</pre>

<p>Este arreglo tiene dos elementos con valores y un elemento vacío:</p>

<ul>
 <li><code>fish[0]</code> es "Lion"</li>
 <li><code>fish[1]</code> es <code>undefined</code></li>
 <li><code>fish[2]</code> es "Angel"</li>
</ul>

<p>Si incluyes una coma al final de la lista de los elementos, la coma es ignorada.</p>

<p>En el siguiente ejemplo, el <code>length</code> del arreglo es tres. No hay <code>myList[3]</code>. Todas las demás comas de la lista indican un nuevo elemento.</p>

<div class="note">
<p><strong>Nota</strong>: Las comas finales pueden crear errores en versiones anteriores del navegador y se recomienda eliminarlas.</p>
</div>

<pre class="brush: js notranslate">let myList = ['home', , 'school', ];
</pre>

<p>En el siguiente ejemplo, el <code>length</code> del arreglo es cuatro, y faltan <code>myList[0]</code> y <code>myList[2]</code>.</p>

<pre class="brush: js notranslate">let myList = [ ,'home', , 'school'];
</pre>

<p>En el siguiente ejemplo, el <code>length</code> del arreglo es cuatro, y faltan <code>myList[1]</code> y <code>myList[3]</code>. <strong>Solo se ignora la última coma.</strong></p>

<pre class="brush: js notranslate">let myList = ['home', , 'school', , ];
</pre>

<p>Entender el comportamiento de las comas adicionales es importante para comprender JavaScript como lenguaje.</p>

<p>Sin embargo, al escribir tu propio código, debes declarar explícitamente los elementos que faltan como <code>undefined</code>. Hacerlo así aumenta la claridad y la facilidad de mantenimiento de tu código.</p>

<h3 id="Booleanos_literales">Booleanos literales</h3>

<p>El tipo booleano tiene dos valores literales: <code>true</code> y <code>false</code>.</p>

<div class="blockIndicator note">
<p><strong>Ten cuidado</strong>: No confundas los valores booleanos primitivos <code>true</code> y <code>false</code> con los valores <code>true</code> y <code>false</code> del objeto {{JSxRef("Boolean")}}.</p>

<p>El objeto <code>Boolean</code> es un contenedor alrededor del tipo de dato primitivo <code>Boolean</code>. Consulta {{JSxRef("Boolean")}} para obtener más información.</p>
</div>

<h3 id="Literales_numéricos">Literales numéricos</h3>

<p>Los tipos {{JSxRef("Number")}} y {{JSxRef("BigInt")}} se pueden escribir en decimal (base 10), hexadecimal (base 16), octal (base 8) y binario (base 2).</p>

<ul>
 <li>Un literal numérico <em>decimal</em> es una secuencia de dígitos sin un <code>0</code> (cero) inicial.</li>
 <li>Un <code>0</code> (cero) inicial en un literal numérico, o un <code>0o</code> inicial (o <code>0O</code>) indica que está en <em>octal</em>. Los números octales pueden incluir solo los dígitos <code>0</code>-<code>7</code>.</li>
 <li>Un <code>0x</code> inicial (o <code>0X</code>) indica un tipo numérico <em>hexadecimal</em>. Los números hexadecimales pueden incluir los dígitos (<code>0</code>-<code>9</code>) y las letras <code>a</code>-<code>f</code> y <code>A</code>-<code>F</code>. (Si un caracter está en mayúscula o minúscula no cambia su valor. Por lo tanto: <code>0xa</code> = <code>0xA</code> = <code>10</code> y <code>0xf</code> = <code>0xF</code> = <code>15</code>).</li>
 <li>
  <p>Un <code>0b</code> inicial (o <code>0B</code>) indica un literal numérico <em>binario</em>. Los números binarios solo pueden incluir los dígitos <code>0</code> y <code>1</code>.</p>
 </li>
</ul>

<p>Aquí tienes algunos ejemplos de literales numéricos:</p>

<pre class="eval notranslate">0, 117, -345, 123456789123456789n             (decimal, base 10)
015, 0001, -0o77, 0o777777777777n             (octal, base 8)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" o base 16)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (binario, base 2)
</pre>

<p>Para obtener más información, consulta {{JSxRef("Gramatica_lexica", "Literales numéricos en la referencia gramatical léxica", "#Literales_numericos")}}.</p>

<h3 id="Literales_de_coma_flotante">Literales de coma flotante</h3>

<p>Un literal de coma flotante puede tener las siguientes partes:</p>

<ul>
 <li>Un entero decimal que puede tener un signo (precedido por "<code>+</code>" o "<code>-</code>"),</li>
 <li>Un punto decimal ("<code>.</code>"),</li>
 <li>Una fracción (otro número decimal),</li>
 <li>Un exponente.</li>
</ul>

<p>La parte del exponente es una "<code>e</code>" o "<code>E</code>" seguida de un número entero, que puede tener signo (precedido por "<code>+</code>" o "<code>-</code>"). Un literal de coma flotante debe tener al menos un dígito y un punto decimal o "<code>e</code>" (o "<code>E</code>").</p>

<p>Específicamente, la sintaxis es:</p>

<pre class="eval notranslate">[(+|-)][dígitos].[dígitos][(E|e)[(+|-)]dígitos]
</pre>

<p>Por ejemplo:</p>

<pre class="eval notranslate">3.1415926
-.123456789
-3.1E+12
.1e-23
</pre>

<h3 id="Objetos_literales">Objetos literales</h3>

<p>Un objeto literal es una lista de cero o más pares de nombres de propiedad y valores asociados de un objeto, entre llaves (<code>{}</code>).</p>

<div class="blockIndicator warning">
<p><strong>¡No uses un objeto literal al comienzo de una declaración! </strong>Esto dará lugar a un error (o no se comportará como esperabas), porque la <code>{</code> se interpretará como el comienzo de un bloque.</p>
</div>

<p>El siguiente es un ejemplo de un objeto literal. El primer elemento del objeto <code>car</code> define una propiedad, <code>myCar</code>, y le asigna una nueva cadena, "<code>Saturn</code>"; al segundo elemento, la propiedad <code>getCar</code>, se le asigna inmediatamente el resultado de invocar a la función <code>(carTypes("Honda"));</code> el tercer elemento, la propiedad <code>special</code>, utiliza una variable (<code>sales</code>) existente.</p>

<pre class="brush: js notranslate">var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
</pre>

<p>Además, puedes utilizar un literal numérico o de cadena para el nombre de una propiedad o anidar un objeto dentro de otro. El siguiente ejemplo usa estas opciones.</p>

<pre class="brush: js notranslate">var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
</pre>

<p>Los nombres de propiedad de los objetos pueden ser cualquier cadena, incluida la cadena vacía. Si el nombre de la propiedad no fuera un {{Glossary("Identifier", "identificador")}} o un número JavaScript válido, debe ir entre comillas.</p>

<p>No se puede acceder a los nombres de propiedad que no sean identificadores válidos como un punto (<code>.</code>), propiedad, pero <em>se pueden</em> acceder y configurar con la notación tipo arreglo ("<code>[]</code>").</p>

<pre class="brush: js notranslate">var unusualPropertyNames = {
  '': 'Una cadena vacía',
  '!': '¡Bang!'
}
console.log(inusualPropertyNames.'');   // SyntaxError: Cadena inesperada
console.log(inusualPropertyNames['']);  // Una cadena vacía
console.log(unusualPropertyNames.!);    // SyntaxError: símbolo inesperado !
console.log(unusualPropertyNames['!']); // ¡Bang!</pre>

<h4 id="Objetos_literales_mejorados">Objetos literales mejorados</h4>

<p>En ES2015, los objeto literales se amplían para admitir la configuración del prototipo en la construcción, la abreviatura para asignaciones <code>foo: foo</code>, la definición de métodos, la realización de llamadas a <code>super</code> y el cálculo de nombres de propiedades con expresiones.</p>

<p>Juntos, estos también acercan los objetos literales y las declaraciones de clase, y permiten que el diseño basado en objetos se beneficie de algunas de las mismas conveniencias.</p>

<pre class="brush: js notranslate">var obj = {
    // __proto__
    __proto__: theProtoObj,
    // Abreviatura de "handler: handler"
    handler,
    // Métodos
    toString() {
     // Llamadas a super
     return 'd ' + super.toString();
    },
    // Nombres de propiedad calculados (dinámicos)
    [ 'prop_' + (() =&gt; 42)() ]: 42
};
</pre>

<h3 id="Expresiones_regulares_«RegExp»_literales">Expresiones regulares («RegExp») literales</h3>

<p>Un expresión regular literal (que se define en detalle {{JSxRef("../Guide/Regular_Expressions", "más adelante")}}) es un patrón incluido entre barras. El siguiente es un ejemplo de una expresión regular literal.</p>

<pre class="brush: js notranslate">var re = /ab+c/;</pre>

<h3 id="Cadenas_literales">Cadenas literales</h3>

<p>Una cadena literal consta de cero o más caracteres encerrados entre comillas dobles (<code>"</code>) o simples (<code>'</code>). Una cadena debe estar delimitada por comillas del mismo tipo (es decir, ambas comillas simples o, ambas comillas dobles).</p>

<p>Los siguientes son ejemplos de cadenas literales:</p>

<pre class="brush: js notranslate">'foo'
"bar"
'1234'
"una linea \n otra linea"
"John's cat"
</pre>

<p>Puedes llamar a cualquiera de los métodos del objeto {{JSxRef("String")}} en un valor de cadena literal. JavaScript automáticamente convierte la cadena literal en un objeto <code>String</code> temporal, llama al método y luego descarta el objeto <code>String</code> temporal. También puedes usar la propiedad <code>String.length</code> con una cadena literal:</p>

<pre class="brush: js notranslate">// Imprimirá el número de símbolos en la cadena, incluidos los espacios en blanco.
console.log("John's cat".length)  // En este caso, 10.
</pre>

<p>En ES2015, también están disponibles las <em>plantillas literales</em>. Las plantillas literales están encerradas por la comilla invertida (<code>`</code>) ({{Interwiki("wikipedia", "Acento_grave")}}) en lugar de comillas simples o dobles.</p>

<p>Las cadenas de las plantillas literales proporcionan azúcar sintáctica para construir cadenas. (Esto es similar a las funciones de interpolación de cadenas en Perl, Python y más).</p>

<p>Opcionalmente, puedes agregar una etiqueta para permitirte personalizar la construcción de la cadena, evitando ataques de inyección o construyendo estructuras de datos de nivel superior a partir del contenido de la cadena.</p>

<pre class="brush: js notranslate">// Creación de cadenas literales básicas
`en JavaScript '\n' es un avance de línea.`

// Cadenas multilínea
`En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`

// Interpolación de cadenas
var name = 'Bob', time = 'today';
`Hola ${name}, ¿cómo estás ${time}?`

// Construye un prefijo de petición HTTP utilizado para interpretar los reemplazos y la construcción
POST`http://foo.org/bar?a=${a}&amp;b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);</pre>

<p>Debes usar cadenas literales a menos que específicamente necesites usar un objeto <code>String</code>. Consulta {{JSxRef("String")}} para obtener detalles sobre los objetos <code>String</code>.</p>

<h4 id="Uso_de_caracteres_especiales_en_cadenas">Uso de caracteres especiales en cadenas</h4>

<p>Adicionalmente a los caracteres normales, también puedes incluir caracteres especiales en las cadenas, como muestra el siguiente ejemplo:</p>

<pre class="brush: js notranslate">"una linea \n otra linea"
</pre>

<p>La siguiente tabla enumera los caracteres especiales que se pueden usar en una cadena JavaScript.</p>

<table class="standard-table">
 <caption>Tabla 2.1 caracteres especiales JavaScript</caption>
 <thead>
  <tr>
   <th scope="col">Caracter</th>
   <th scope="col">Significado</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>Byte nulo</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>Retroceso</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>Avance de Página</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>Nueva Línea</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>Retorno de carro</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>Tabulación</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>Tabulación vertical</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>Apóstrofo o comilla simple</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>Comilla doble</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>Caracter de barra invertida</td>
  </tr>
  <tr>
   <td><code>\<em>XXX</em></code></td>
   <td>El caracter con la codificación Latin-1 especificada por hasta tres dígitos octales <em>XXX</em> entre <code>0</code> y <code>377</code>.<br>
    Por ejemplo, <code>\251</code> es la secuencia octal del símbolo de copyright.</td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\x<em>XX</em></code></td>
   <td>
    <p>El caracter con la codificación Latin-1 especificada por los dos dígitos hexadecimales <em>XX</em> entre <code>00</code> y <code>FF</code>.<br>
     Por ejemplo, <code>\xA9</code> es la secuencia hexadecimal del símbolo de copyright.</p>
   </td>
  </tr>
  <tr>
  </tr>
  <tr>
   <td><code>\u<em>XXXX</em></code></td>
   <td>El caracter Unicode especificado por los cuatro dígitos hexadecimales <em>XXXX</em>.<br>
    Por ejemplo, <code>\u00A9</code> es la secuencia Unicode para el símbolo de copyright. Consulta {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}}.</td>
  </tr>
  <tr>
   <td><code>\u<em>{XXXXX}</em></code></td>
   <td>El punto de código escape Unicode.<br>
    Por ejemplo, <code>\u{2F804}</code> es el mismo que el escape Unicode simple <code>\uD87E\uDC04</code>.</td>
  </tr>
 </tbody>
</table>

<h4 id="Escapar_caracteres">Escapar caracteres</h4>

<p>Para caracteres no enumerados en la tabla, la precedencia de la barra inversa es ignorada, pero su uso esta desaconsejado y se debe evitar.</p>

<p>Puedes insertar comillas dobles dentro de una cadena anteponiendo un caracter de barra inversa. Esto se conoce como <em>escapar</em> las comillas. Por ejemplo:</p>

<pre class="brush: js notranslate">var quote = "Él leyó \"La cremación de Sam McGee\" de R.W. Service.";
console.log(quote);
</pre>

<p>El resultado de esto sería:</p>

<pre class="eval notranslate">El leyó "La cremación de Sam McGee" de R.W. Service.
</pre>

<p>Para incluir una barra invertida literal dentro de una cadena, debes escapar el caracter de barra invertida. Por ejemplo, para asignar la ruta del archivo <code>c:\temp</code> a una cadena, usa lo siguiente:</p>

<pre class="brush: js notranslate">var home = 'c:\\temp';
</pre>

<p>También puedes escapar los saltos de línea precediéndolos con una barra invertida. La barra invertida y el salto de línea se eliminan del valor de la cadena.</p>

<pre class="brush: js notranslate">var str = 'esta cadena \
se divide \
en múltiples \
líneas.'
console.log(str);   // esta cadena se divide en múltiples líneas.
</pre>

<p>Aunque JavaScript no tiene sintaxis "«heredoc»" se puede acercar insertando una barra inversa y un salto de linea al final de cada linea:</p>

<pre class="brush: js notranslate">var poem =
'Las rosas son rojas,\n\
Las violetas son azules.\n\
El azúcar es dulce,\n\
y foo también.'
</pre>

<p>ECMAScript 2015 introduce un nuevo tipo de literal, a saber, {{JSxRef("template_strings", "plantillas literales")}}. Esto permite muchas nuevas funciones, ¡incluidas cadenas multilínea!</p>

<pre class="brush: js notranslate" dir="rtl">var poem =
`Las rosas son rojas,
Las violetas son azules.
El azúcar es dulce,
y foo también.`</pre>

<h2 id="Mas_información">Mas información</h2>

<p>Este capítulo se enfoca en la sintaxis básica para los tipos y las declaraciones. Para aprender mas acerca de las construcciones en el lenguaje JavaScript, ve también los siguientes capítulos en esta guía:</p>

<ul>
 <li>{{JSxRef("../Guide/Control_de_flujo_y_manejo_de_errores", "Control de flujo y manejo de errores")}}</li>
 <li>{{JSxRef("../Guide/Bucles_e_iteracion", "Bucles e iteración")}}</li>
 <li>{{JSxRef("../Guide/Funciones", "Funciones")}}</li>
 <li>{{JSxRef("../Guide/Expressions_and_Operators", "Expresiones y operadores")}}</li>
</ul>

<p>En el próximo capítulo, veremos las construcciones de control de flujo y el manejo de errores.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}</p>
