---
title: Modo Estricto
slug: Web/JavaScript/Reference/Strict_mode
tags:
  - ECMAScript5
  - Guía
  - JavaScript
  - Modo estricto
translation_of: Web/JavaScript/Reference/Strict_mode
original_slug: Web/JavaScript/Referencia/Modo_estricto
---
<div>{{JsSidebar("More", "Más")}}</div>

<div class="callout-box">A veces, verás que llaman {{Glossary("Sloppy_mode", "sloppy mode — modo poco riguroso")}} al modo no estricto predeterminado. Este no es un término oficial, pero tenlo en cuenta, por si acaso.</div>

<p>El modo estricto de <a class="external" href="http://www.ecma-international.org/publications/standards/Ecma-262.htm">ECMAScript 5</a> es una forma de elegir una variante <em>restringida</em> de <em>JavaScript</em>, así implícitamente se deja de lado el modo poco riguroso. El modo estricto no es sólo un subconjunto: <em>intencionalmente</em> tiene diferencia semántica del código normal. Los navegadores que no admiten el modo estricto ejecutarán el código con un comportamiento diferente a los que sí lo soportan, por lo tanto no confíes en el modo estricto sin antes hacer pruebas de sus características más relevantes. Los modos estricto y no estricto pueden coexistir, por lo tanto el código se puede transformar a modo estricto incrementalmente.</p>

<p>El modo estricto tiene varios cambios en la semántica normal de JavaScript:</p>

<ol>
 <li>Elimina algunos errores silenciosos de JavaScript cambiándolos para que lancen errores.</li>
 <li>Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.</li>
 <li>Prohíbe cierta sintaxis que probablemente sea definida en futuras versiones de ECMAScript.</li>
</ol>

<p>Ve <a href="/es/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode">transición a modo estricto</a>, si deseas cambiar tu código para trabajar en la variante estricta de JavaScript.</p>

<h2 id="Invocar_el_modo_estricto">Invocar el modo estricto</h2>

<p>El modo estricto se aplica a un <em>script completo</em> o a <em>funciones individuales</em>. No se aplica a bloques entre corchetes <code>{}</code>; intentar aplicarlo en tales contextos no hace nada. Código <code>eval</code>, código <code>Function</code>, atributos de controladores de eventos, cadenas pasadas a <a href="/es/docs/Web/API/WindowTimers.setTimeout" title="es/DOM/window.setTimeout"><code>setTimeout</code></a>, y similares son scripts enteros, de modo que invocar modo estricto en tales contextos funciona como se espera.</p>

<h3 id="Modo_estricto_para_scripts">Modo estricto para scripts</h3>

<p>Para invocar el modo estricto en todo un script, escribe <em>exactamente</em> <code>"use strict";</code> (o <code>'use strict';</code>) antes de cualquier otra expresión.</p>

<pre class="brush: js notranslate">// Sintaxis del modo estricto para todo el script
'use strict';
var v = "¡Hola! ¡Estoy en modo estricto para script!";
</pre>

<p>Esta sintaxis tiene un problema que <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=579119">ya ha afectado</a> a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=627531">cierta página bien conocida</a>: no es posible concatenar ciegamente scripts conflictivos entre sí. Si concatena un script en modo estricto con otro que no es, la concatenación de ambos producirá código en modo estricto. Lo contrario también es cierto: código en modo no estricto mas código estricto produce código que no es estricto. Concatenar scripts no produce problemas si todos están en modo estricto (o si todos están en modo no estricto). El problema es mezclar scripts en modo estricto con scripts en modo no estricto. Por eso se recomienda habilitar el modo estricto a nivel de función solamente (al menos durante el periodo de transición de un programa).</p>

<p>Otra opción es envolver el contenido completo del script en una función y tener esa función externa en modo estricto. Así se elimina el problema de la concatenación, pero entonces tienes que hacerte cargo de exportar explícitamente las variables globales fuera del ámbito de la función.</p>

<h3 id="Modo_estricto_para_funciones">Modo estricto para funciones</h3>

<p>De igual forma, para invocar el modo estricto para una función, escribe <em>exactamente</em> <code>"use strict";</code> (o <code>'use strict';</code>) en el cuerpo de la función antes de cualquier otra expresión.</p>

<pre class="brush: js notranslate">function strict() {
  // Sintaxis del modo estricto a nivel de función
  'use strict';
  function nested() { return "¡Y yo también!"; }
  return "¡Hola!  ¡Soy una función en modo estricto!  " + nested();
}
function notStrict() { return "Yo no soy estricto."; }
</pre>

<h3 id="Modo_estricto_para_módulos">Modo estricto para módulos</h3>

<p>ECMAScript 2015 introdujo módulos y por tanto una tercera manera de entrar en el modo estricto. Todo el contenido de los módulos de JavaScript se encuentra automáticamente en modo estricto, sin necesidad de una declaración para iniciarlo.</p>

<pre class="brush: js notranslate">function strict() {
    // debido a que este es un módulo, soy estricto por omisión
}
export default strict;
</pre>

<h2 id="Cambios_en_modo_estricto">Cambios en modo estricto</h2>

<p>El modo estricto cambia la sintaxis y el comportamiento en tiempo de ejecución. Los cambios generalmente caen dentro de estas categorías: cambios que convierten equivocaciones en errores (como errores de sintaxis o en tiempo de ejecución), cambios que simplifican cómo se calcula el nombre de una variable particular, cambios que simplifican el uso de <code>eval</code> y <code>arguments</code>, cambios que hacen más fácil escribir JavaScript "seguro", y cambios que anticipan la evolución futura de ECMAScript.</p>

<h3 id="Convertir_equivocaciones_en_errores">Convertir equivocaciones en errores</h3>

<p>El modo estricto cambia algunos errores de sintaxis tolerados en modo no estricto y los convierte en errores. JavaScript fue diseñado de modo que fuera fácil para programadores novatos, y puede haber operaciones semánticas que deberían ser errores pero son tratadas como libres de error. A veces esto sirve para solucionar el problema en el momento, pero puede crear problemas más graves en el futuro. El modo estricto trata las equivocaciones como errores, para que se puedan descubrir y subsanar inmediatamente.</p>

<p>En primer lugar, el modo estricto hace imposible crear variables globales por accidente. En JavaScript no estricto, si se escribe mal una variable en una asignación, se creará una nueva propiedad en el objeto global y el código continuará "trabajando" como si nada (aunque es posible que el código así escrito falle en el futuro, en concreto, en JavaScript moderno). En modo estricto, cualquier asignación que produzca variables globales por accidente lanzará un error:</p>

<pre class="brush: js notranslate">'use strict';
                       // Asumiendo que exista una variable global llamada mistypedVariable
mistypeVariable = 17;  // esta línea lanza un ReferenceError debido a
                       // una errata en el nombre de la variable
</pre>

<p>En segundo lugar, el modo estricto lanza una excepción en asignaciones que de otro modo fallarían silenciosamente. Por ejemplo, <code>NaN</code> es una variable global que no puede ser asignada. En un código normal, asignar a <code>NaN</code> no tiene efecto; el programador no recibe ningún mensaje de error. En cambio, en modo estricto, si se intenta asignar un valor a <code>NaN</code>, el programador recibirá una excepción. Cualquier asignación que falle silenciosamente en código normal (asignaciones a una propiedad de no escritura, asignaciones a una propiedad captadora, asignaciones a una nueva propiedad o a un objecto {{jsxref("Global_Objects/Object/preventExtensions", "no extensible")}}) lanzará una excepción en modo estricto:</p>

<pre class="brush: js notranslate">'use strict';

// Asignación a una no-escritura global
var undefined = 5; // lanza un TypeError
var Infinity = 5; // lanza un TypeError

// Asignación a una propiedad de no-escritura
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // lanza un TypeError

// Asignación a una propiedad de tipo getter
var obj2 = { get x() { return 17; } };
obj2.x = 5; // lanza un TypeError

// Asignación a una nueva propiedad en un objeto no extensible
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // lanza un TypeError
</pre>

<p>En tercer lugar, el modo estricto lanza una excepción al intentar eliminar propiedades no eliminables (mientra que en código normal el intento no tendría ningún efecto):</p>

<pre class="brush: js notranslate">'use strict';
delete Object.prototype; // lanza un TypeError
</pre>

<p>En cuarto lugar, la versión de modo estricto anterior a Gecko 34 requiere que todas las propiedades nombradas en un objeto sean únicas. En código normal se pueden duplicar nombres, siendo el último el que determina el valor de la propiedad. Pero como el último es el único que hace algo, la duplicidad da origen a errores si el código se modifica para cambiar el valor de la propiedad. Duplicar nombres de propiedades es un error de sintaxis en modo estricto.</p>

<div class="note">
<p>Este ya no es el caso en ECMAScript 2015 (<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1041128">error 1041128</a>).</p>
</div>

<pre class="brush: js notranslate">'use strict';
var o = { p: 1, p: 2 }; // !!! error de sintaxis
</pre>

<p>En quinto lugar, el modo estricto requiere que los nombres de los parámetros de una función sean únicos. En código normal, el último argumento repetido oculta argumentos anteriores con el mismo nombre. Estos argumentos permanecen disponibles a través de <code>arguments[i]</code>, de modo que no son completamente inaccesibles. Aun así, esta ocultación tiene poco sentido y es probablemente indeseable (pues puede ocultar, por ejemplo, un error al teclear una letra). Por lo tanto, en modo estricto, duplicar nombres de argumentos es un error de sintaxis:</p>

<pre class="brush: js notranslate">function sum(a, a, c) { // !!! error de sintaxis
  'use strict';
  return a + a + c; // incorrecto si este código se ejecutó
}
</pre>

<p>En sexto lugar, en modo estricto ECMAScript 5 se prohíbe la notación octal. La notación octal no es parte de ECMAScript 5, pero está soportada en todos los navegadores al poner como prefijo un cero al número: <code>0644 == 420</code> y <code>"\045" === "%"</code>. En ECMAScript 2015, el número octal es compatible con el prefijo de un número con "<code>0o</code>". Es decir:</p>

<pre class="brush: js notranslate">var a = 0o10; // ES2015: Octal</pre>

<p>Los programadores novatos a veces creen que un prefijo cero inicial no tiene un significado semántico, por lo que lo usan como dispositivo de alineación, ¡pero esto cambia el significado del número! Una sintaxis de cero a la izquierda para los octales rara vez es útil y se puede usar por error, por lo que el modo estricto lo convierte en un error de sintaxis:</p>

<pre class="brush: js notranslate">'use strict';
var sum = 015 + // !!! error de sintaxis
          197 +
          142;

var sumWithOctal = 0o10 + 8;
console.log(sumWithOctal); // 16
</pre>

<p>Séptimo, el modo estricto en ECMAScript 2015 prohíbe establecer propiedades en valores {{Glossary("Primitive", "primitivos")}}. La sintaxis octal rara vez es útil y se puede usar equivocadamente, de modo que en modo estricto, utilizar notación octal lanza un {{jsxref("TypeError")}}:</p>

<pre class="brush: js notranslate">(function() {
'use strict';

false.true = '';         // TypeError
(14).sailing = 'home';   // TypeError
'with'.you = 'far away'; // TypeError

})();</pre>

<h3 id="Simplificación_en_el_uso_de_variables">Simplificación en el uso de variables</h3>

<p>El modo estricto simplifica el modo en que el nombre de una variable es asignado a un variable particular en el código. Muchas optimizaciones del compilador se basan en la habilidad para decir el lugar específico en que una variable está almacenada, lo cual es crítico para una optimización completa del código JavaScript. Algunas veces JavaScript hace que esta asignación básica del nombre de una variable y su valor no suceda hasta que no se está en tiempo de ejecución. El modo estricto elimina muchos de los casos en los que esto pasa, de modo que el compilador puede optimizar mejor el código que es estricto.</p>

<p>Primero, el modo estricto prohíbe el uso de <code>with</code>. El problema con <code>with</code> es que cualquier nombre dentro del bloque pude ser asignado a una propiedad del objecto pasado como argumento, o a una variable en su ámbito circundante (o incluso global), en tiempo de ejecución: es imposible saber de antemano cuál será. El modo estricto hace que el uso de <code>with</code> sea un error de sintaxis, de modo que no hay oportunidad de que una variable dentro de un <code>with</code> se refiera a una dirección desconocida en tiempo de ejecución:</p>

<pre class="brush: js notranslate">'use strict';
var x = 17;
with (obj) { // !!! error de sintaxis
  // Si este no estuviera un modo estricto, ¿sería var x?, o
  // ¿sería obj.x en su lugar?  Es imposible en general
  // decirlo sin ejecutar el código, por lo que el nombre no
  // se puede optimizar.
  x;
}
</pre>

<p>En vez de usar <code>with</code>, existe la simple alternativa de asignar el objecto a una variable de nombre más corto, y después acceder a la propiedad correspondiente de esa variable.</p>

<p>Segundo, el uso de <code>eval</code> en modo estricto no introduce nuevas variables en el ámbito circundante. En código normal, <code>eval("var x;")</code> introduce una variable <code>x</code> dentro de la función circundante o el ámbito global. Esto significa que, en general, en una función que contiene una llamada a <code>eval</code> en cada nombre que no se refiera a un argumento o a una variable local, se debe asignar a una definición en particular en tiempo de ejecución (debido a que <code>eval</code> puedo haber introducido una nueva variable que podría ocultar una variable externa). En modo estricto, <code>eval</code> crea variables solo para el código que se está evaluando, por lo que <code>eval</code> no puede afectar si un nombre se refiere a una variable externa o a alguna variable local:</p>

<pre class="brush: js notranslate">var x = 17;
var evalX = eval("'use strict'; var x = 42; x");
console.assert(x === 17);
console.assert(evalX === 42);
</pre>

<p>En el ejemplo anterior, si la función <code>eval</code> es invocada por una expresión de la forma <code>eval(...)</code> en código de modo estricto, el código será evaluado en modo estricto. El código puede explícitamente invocar el modo estricto, pero no es necesario.</p>

<pre class="brush: js notranslate">function strict1(str) {
  'use strict';
  return eval(str); // str será tratado como código de modo estricto
}
function strict2(f, str) {
  'use strict';
  return f(str); // no eval(...): str es estricto si y solo
                 // si invoca el modo estricto
}
function nonstrict(str) {
  return eval(str); // str es estricto si y solo
                    // si invoca el modo estricto
}

strict1("'¡Código en modo estricto!'");
strict1("'use strict'; '¡Código en modo estricto!'");
estricto2(eval, "'Código no estricto'");
strict2(eval, "'use strict'; '¡Código en modo estricto!'");
nonstrict("'Código no estricto'");
nonstrict("'use strict'; '¡Código en modo estricto!'");
</pre>

<p>Así los nombres en modo estricto usando <code>eval</code> se comportan idénticamente a los nombres en modo estricto no siendo evaluados como resultado de <code>eval</code>.</p>

<p>Tercero, el modo estricto prohíbe eliminar nombres planos. De este modo, <code>delete name</code> produce un error de sintaxis.</p>

<pre class="brush: js notranslate">'use strict';

var x;
delete x; // !!! error de sintaxis

eval("var y; delete y;"); // !!! error de sintaxis</pre>

<h3 id="Haciendo_eval_y_arguments_más_simples">Haciendo <code>eval</code> y <code>arguments</code> más simples</h3>

<p>El modo estricto hace que el uso de <code>arguments</code> y <code>eval</code> sea más intuitivo. Ambos envuelven un considerable misticismo en código normal: <code>eval</code> al añadir o remover los enlaces y cambiar los valores de dichos enlaces, y <code>arguments</code> al poder sustituir los nombres de los argumentos por propiedades indexadas. El modo estricto ofrece un gran paso al tratar a <code>eval</code> y a <code>arguments</code> como palabras clave, aunque soluciones finales no estarán disponibles hasta futuras ediciones de ECMAScript.</p>

<p>Primero, las palabras <code>eval</code> y <code>arguments</code> no se pueden ligar o asignar en la sintaxis del lenguaje. Cualquier intento producirá un error de sintaxis:</p>

<pre class="brush: js notranslate">'use strict';
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function("arguments", "'use strict'; return 17;");
</pre>

<p>Segundo, el modo estricto no permite usar alias en elementos del objecto <code>arguments</code> creados dentro de la función. En una función en código normal cuyo primer parámetro sea <code>args</code>, si se cambia el valor de <code>args</code> también se cambiará de <code>arguments[0]</code>, y viceversa (a menos que no se proporcionen parámetros o se elimine <code>arguments[0]</code>). El objecto <code>arguments</code> para el modo estricto almacena los parámetros originales cuando la función es invocada. <code>arguments[i]</code> no guarda el valor del correspondiente nombre del parámetro, ni tampoco un parámetro con nombre guarda el valor correspondiente de <code>arguments[i]</code>.</p>

<pre class="brush: js notranslate">function f(a) {
  'use strict';
  a = 42;
  return [a, arguments[0]];
}
var pair = f(17);
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);
</pre>

<p>Tercero, <code>arguments.callee</code> no está soportado. En código normal, <code> arguments.callee</code> se refiere a la función envolvente. Este caso de uso es débil: ¡simplemente nombra la función envolvente!. Además <code>arguments.callee</code> merma el desempeño de funciones en línea pues debe ser posible proveer la referencia de la función que llamó a la función original cada vez que se usa <code>arguments.callee</code>. <code>arguments.callee</code> en modo estricto es una propiedad no eliminable y lanza una excepción cuando se le asigna un valor o se intenta regresar su valor.</p>

<pre class="brush: js notranslate">'use strict';
var f = function() { return arguments.callee; };
f(); // lanza un TypeError
</pre>

<h3 id="sect1"></h3>

<p>El modo estricto hace más fácil el escribir código "seguro" en JavaScript. Algunos sitios web ofrecen ahora medios para que los usuarios codifiquen en JavaScript para que el código corra en el sitio en <em>beneficio de otros usuarios</em>. JavaScript en los navegadores puede acceder a la información privada del usuario, por lo que dicho JavaScript se debe transformar parcialmente antes de ejecutarse, para censurar el acceso a funciones prohibidas. La flexibilidad de JavaScript hace que efectivamente sea imposible hacer esto sin muchas comprobaciones en tiempo de ejecución. La flexibilidad de JavaScript hace casi imposible hacer esto sin hacer revisiones en tiempo de ejecución. Unos pocos ajustes del modo estricto, además de requerir que el JavaScript enviado por el usuario sea código de modo estricto y que se invoque de cierta manera, reducen sustancialmente la necesidad de esas comprobaciones en tiempo de ejecución.</p>

<p>Primero, el valor <code>this</code> pasado a una función en modo estricto no forzosamente debe ser un objeto (es decir, "empaquetado"). Para una función normal, <code>this</code> siempre es un objeto: o el objeto proporcionado si se llama con un <code>this</code> con valor de objeto; el valor, empaquetado, si se llama con un booleano, una cadena o un número <code>this</code>; o el objeto global si se llama con un <code>undefined</code> o <code>null</code> <code>this</code>. (Usar {{jsxref("Global_Objects/Function/call", "call")}}, {{jsxref("Global_Objects/Function/apply", "apply")}}, o {{jsxref("Global_Objects/Function/bind", "bind")}} para especificar un valor del <code>this</code> particular). Este empaquetado automático al pasar valores a una función tiene un costo en el rendimiento; no solo eso, si no que al exponer el objeto global en los navegadores es un riesgo de seguridad, debido a que el objeto global provee acceso a una funcionalidad que el código de JavaScript "seguro" debe restringir. Así, en una función en modo estricto , el valor de <code>this</code> no está empaquetado dentro de un objecto, y si no se especifica, <code>this</code> toma el valor de <code>undefined</code>.</p>

<pre class="brush: js notranslate">'use strict';
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);
</pre>

<p>Esto significa, entre otras cosas, que en los navegadores no es posible hacer referencia al objeto <code>window</code> a través de <code>this</code> dentro de una función en modo estricto.</p>

<p>Segundo, en modo estricto ya no es posible "recorrer" la pila de JavaScript a través de extensiones de ECMAScript. En código normal con estas extensiones, cuando una función llamada <code>fun</code> está en medio de su ejecución, <code>fun.caller</code> es la función que más recientemente llamó a <code>fun</code>, y <code>fun.arguments</code> son los parámetros para esa invocación de <code>fun</code>. Ambas extensiones son problemáticas para JavaScript "seguro", debido a que permiten acceder a funciones "privilegiadas" y sus (potencialmente inseguros) argumentos. Si <code>fun</code> está en modo estricto, tanto <code>fun.caller</code> como <code>fun.arguments</code> son propiedades no eliminables que lanzan una excepción cuando se establecen o recuperan:</p>

<pre class="brush: js notranslate">function restricted() {
  'use strict';
  restricted.caller;    // lanza un TypeError
  restricted.arguments; // lanza un TypeError
}
function privilegedInvoker() {
  return restricted();
}
privilegedInvoker();
</pre>

<p>Tercero, en funciones de modo estricto, el objeto <code>arguments</code> no provee acceso a las variables usadas al llamar a la función. En algunas implementaciones antiguas de ECMAScript, <code>arguments.caller</code> era un objeto cuyas propiedades apuntaban a las variables en la función. Esto es una <a href="http://stuff.mit.edu/iap/2008/facebook/">amenaza de seguridad</a> por que rompe la habilidad de ocultar valores privilegiados a través de la abstracción de la función; además, frena algunas optimizaciones. Por estas razones los navegadores modernos no la implementan. Por su funcionalidad a lo largo de los años, <code>arguments.caller</code> en una función de modo estricto es una propiedad que lanza una excepción cuando se usa.</p>

<pre class="brush: js notranslate">'use strict';
function fun(a, b) {
  'use strict';
  var v = 12;
  return arguments.caller; // lanza un TypeError
}
fun(1, 2); // no expone v (o a o b)
</pre>

<h3 id="Preparando_el_camino_para_futuras_versiones_de_ECMAScript">Preparando el camino para futuras versiones de ECMAScript</h3>

<p>Las futuras versiones de ECMAScript introducirán nuevos cambios, y el modo estricto en ECMAScript 5 aplica algunos de esos cambios para hacer una transición más suave. Será más fácil hacer cambios si las bases de esos cambios son prohibidas en modo estricto.</p>

<p>Primero, en modo estricto una lista de identificadores se convierte en palabras reservadas. Estas palabras son <code>implements</code>, <code>interface</code>, <code>let</code>, <code>package</code>, <code>private</code>, <code>protected</code>, <code>public</code>, <code>static</code>, y <code>yield</code>. De modo que en modo estricto, no se pueden usar estas palabras para nombrar variables o argumentos.</p>

<pre class="brush: js notranslate">function package(protected) { // !!!
  'use strict';
  var implements; // !!!

  interface: // !!!
  while (true) {
    break interface; // !!!
  }

  function private() { } // !!!
}
function fun(static) { 'use strict'; } // !!!

</pre>

<p><em>Dos advertencias específicas de Mozilla</em>: Primero, si tu código esta escrito en JavaScript 1.7 o mayor (por ejemplo en código chrome o cuando se usa bien <code>&lt;script type=""&gt;</code>) y el código esta en modo estricto, <code>let</code> y <code>yield</code> tienen la funcionalidad <span id="result_box" lang="es">que han tenido desde que esas palabras clave se introdujeron por primera vez</span>. Pero el código en modo estricto en la web, cargado con <code>&lt;script src=""&gt;</code> o <code>&lt;script&gt;...&lt;/script&gt;</code>, no podrá usar <code>let</code>/<code>yield</code> como identificadores. <em>Segundo, mientras que ES5 incondicionalmente reserva las palabras <code>class</code>, <code>enum</code>, <code>export</code>, <code>extends</code>, <code>import</code> y <code>super</code>, Mozilla Firefox 5 solo las reserva en modo estricto</em>.</p>

<p>En segundo lugar, <a class="external" href="http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/">el modo estricto prohíbe las declaraciones de función, no en el nivel superior de un script o función</a>. En el modo normal de los navegadores, las declaraciones de función se permiten "en todas partes". <em>¡Esto no es parte de ES5 (ni siquiera de ES3)!</em> Es una extensión con semántica incompatible en diferentes navegadores. Ten en cuenta que en ES2015 se permiten declaraciones de función fuera del nivel superior.</p>

<pre class="brush: js notranslate">'use strict';
if (true) {
  function f() { } // !!! error de sintaxis
  f();
}

for (var i = 0; i &lt; 5; i++) {
  function f2() { } // !!! error de sintaxis
  f2();
}

function baz() {   // legal
  function eit() { } // también legal
}
</pre>

<p>Esta prohibición no es el modo estricto propiamente dicho porque tales declaraciones de función son una extensión de ES5 básico. Pero es la recomendación del comité ECMAScript y los navegadores la implementarán.</p>

<h2 id="Modo_estricto_en_navegadores">Modo estricto en navegadores</h2>

<p>La mayoría de los navegadores ya implementan el modo estricto. Sin embargo, no dependas ciegamente de él, ya que todavía hay numerosas <a class="external" href="http://caniuse.com/use-strict" rel="external" title="caniuse.com disponibilidad de modo estricto">Versiones del navegador utilizadas en la naturaleza que solo tienen soporte parcial para el modo estricto</a> o no lo admiten en absoluto (por ejemplo, Internet Explorer por debajo de la versión 10). <em>El modo estricto cambia la semántica</em>. Depender de esos cambios provocará equivocaciones y errores en los navegadores que no implementan el modo estricto. Ten cuidado al usar el modo estricto y respalda la dependencia del modo estricto con pruebas de funciones que comprueben si se implementan las partes relevantes del modo estricto. Finalmente, asegúrate de <em>probar tu código en navegadores que admitan y no admitan el modo estricto</em>. Si realizas tus pruebas solo en navegadores que no admiten el modo estricto, es muy probable que tengas problemas en los navegadores que sí lo hacen, y viceversa.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-strict-mode-code', 'Código en modo estricto')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li><a class="external" href="http://whereswalden.com/2010/09/08/new-es5-strict-mode-support-now-with-poison-pills/">¿Dónde está Walden? » Nuevo soporte de modo estricto ES5: ¡ahora con píldoras venenosas!</a></li>
 <li><a class="external" href="http://whereswalden.com/2011/01/24/new-es5-strict-mode-requirement-function-statements-not-at-top-level-of-a-program-or-function-are-prohibited/">¿Dónde está Walden? » Nuevo requisito del modo estricto de ES5: se prohíben las declaraciones de función que no estén en el nivel superior de un programa o función</a></li>
 <li><a class="external" href="http://whereswalden.com/2011/01/10/new-es5-strict-mode-support-new-vars-created-by-strict-mode-eval-code-are-local-to-that-code-only/">¿Dónde está Walden? » Nueva compatibilidad con el modo estricto de ES5: las nuevas variables creadas por el código de evaluación del modo estricto son locales solo para ese código</a></li>
 <li><a href="http://qnimate.com/javascript-strict-mode-in-nutshell/">Tutorial de "uso estricto" de JavaScript para principiantes.</a></li>
 <li><a class="external" href="http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/">John Resig — Modo estricto ECMAScript 5, JSON y más</a></li>
 <li><a class="external" href="http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/">ECMA-262-5 en detalle. Capitulo 2. Modo estricto.</a></li>
 <li><a class="external" href="http://kangax.github.io/compat-table/es5/#Strict_mode">Tabla de compatibilidad del modo estricto</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode">Transición al modo estricto</a></li>
</ul>
