---
title: Iteradores y generadores
slug: Web/JavaScript/Guide/Iterators_and_Generators
tags:
  - Guía
  - Intermedio
  - JavaScript
translation_of: Web/JavaScript/Guide/Iterators_and_Generators
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}</div>

<p class="summary">Procesar cada uno de los elementos en una colección es una operación muy común. JavaScript proporciona diversas formas de iterar sobre una colección, desde simples bucles {{jsxref("Sentencias/for","for")}}<a href="/en-US/docs/Web/JavaScript/Reference/Statements/for" title="en/Core_JavaScript_1.5_Reference/Statements/for"> </a>hasta métodos como<a href="/en-US/docs/Web/JavaScript/Reference/Statements/for" title="en/Core_JavaScript_1.5_Reference/Statements/for"> </a>{{jsxref("Objetos_globales/Array/map","map()")}} y {{jsxref("Objetos_globales/Array/filter","filter()")}}.<a href="/en-US/docs/Web/JavaScript/Reference/Statements/for" title="en/Core_JavaScript_1.5_Reference/Statements/for"> </a>Los iteradores y los generadores traen el concepto de iteración al centro del lenguaje y proporcionan un mecanismo para personalizar el comportamiento de los bucles {{jsxref("Sentencias/for...of","for...of")}}.</p>

<p>Para más información, véase:</p>

<ul>
 <li>{{jsxref("Iteration_protocols", "Protocolos de iteración")}}</li>
 <li>{{jsxref("Sentencias/for...of","for...of")}}</li>
 <li>{{jsxref("Sentencias/function*","function*")}} y {{jsxref("Objetos_globales/Generador","Generador")}}</li>
 <li>{{jsxref("Operadores/yield","yield")}} y {{jsxref("Operadores/yield*","yield*")}}</li>
</ul>

<h2 id="Iteradores">Iteradores</h2>

<p>En JavaScript, un <strong>iterador</strong> es un objeto que permite recorrer una colección y devolver un valor al terminar. </p>

<p>Específicamente, un iterador es un objeto que implementa el <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol">protocolo de iteración</a> a través del método <code>next()</code>, el cual devuelve un objeto con dos propiedades:</p>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>El siguiente valor en la secuencia de iteración.</dd>
 <dt><code><var>done</var></code></dt>
 <dd>Es <code>true</code> si el último valor en la secuencia ya ha sido consumido. Si <code><var>value</var></code> está presente junto con <code><var>done</var></code>, es el valor de retorno del iterador.</dd>
</dl>

<p>Un iterador se considera ya terminado/finalizado cuando la invocación de <code>next()</code> regresa un objeto donde la propiedad <code>done</code> es <code>verdadero</code>.</p>

<p>Una vez creado, un objeto iterador puede utilizarse explícitamente llamando repetidamente al método  <code>next()</code>.</p>

<pre class="brush: js">function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
       next: function(){
           return siguienteIndice &lt; arreglo.length ?
               {value: arreglo[siguienteIndice++], done: false} :
               {done: true};
       }
    }
}</pre>

<p>Una vez inicializado, se puede invocar al método <code>next()</code> para acceder a las parejas llave-valor del objeto en cuestión:</p>

<pre class="brush: js">var it = crearIterador(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true</pre>

<h2 id="Generadores">Generadores</h2>

<p>Aunque los iteradores personalizados son una herramienta útil, su creación require una programación meticulosa ya que necesitan mantener su estado interno explícitamente. Los <strong>{{jsxref("Objetos_globales/Generador","generadores","","true")}}</strong> son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.</p>

<p>Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis {{jsxref("Sentencias/function*","function*")}}.</p>

<pre class="brush: js">function* hacedorIds() {
  var indice = 0;
  while(true)
    yield indice++;
}

var gen = hacedorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...</pre>

<h2 id="Iterables">Iterables</h2>

<p>Un objeto es <strong>iterable</strong> si define cómo se itera. Un ejemplo son los valores que se iteran en un bucle {{jsxref("Sentencias/for...of", "for...of")}}. Algunos tipos integrados de datos, como {{jsxref("Array")}} o {{jsxref("Map")}}, tienen una forma de iteración ya definida, mientras que otras no (como {{jsxref("Object")}}).</p>

<p><span id="result_box" lang="es"><span class="hps">Con el fin de</span> <span class="hps">ser</span> <strong><span class="hps">iterable</span></strong><span>,</span> <span class="hps">un objeto</span> <span class="hps">debe implementar</span></span> el método <strong>@@iterator</strong>. Esto quiere decir que dicho objeto (o alguno en su <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos">cadena de prototipos</a>) debe tener una propiedad definida usando la llave {{jsxref("Symbol.iterator")}}. Esta función debería regresar un nuevo iterador en cada invocación, pero no es obligatorio.</p>

<h3 id="Iterables_definidos_por_el_usuario">Iterables definidos por el usuario</h3>

<p>Podemos hacer nuestros propios objetos iterables de este modo:</p>

<pre class="brush: js">var miIterable = {}
miIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

for (let valor of miIterable) {
    console.log(valor)
}
// 1
// 2
// 3

// ó

[...miIterable] // [1, 2, 3]
</pre>

<h3 id="Iterables_integrados">Iterables integrados</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Objetos_globales/TypedArray")}}, {{jsxref("Map")}} y {{jsxref("Set")}} son iterables ya integrados, porque todos sus objetos prototipo tienen un método definido con la llave {{jsxref("Symbol.iterator")}}.</p>

<h3 id="Sintaxis_que_esperan_objetos_iterables">Sintaxis que esperan objetos iterables</h3>

<p>Algunas sentencias y expresiones esperan objetos iterables, por ejemplo los bucles {{jsxref("Sentencias/for...of","for-of")}}, {{jsxref("Operadores/Spread_operator","el operador de propagación")}}, {{jsxref("Operadores/yield*","yield*")}}, y {{jsxref("Operadores/Destructuring_assignment","la asignación por desestructuración","","true")}}.</p>

<pre class="brush: js">for(let valor of ["a", "b", "c"]){
    console.log(valor)
}
// "a"
// "b"
// "c"

[..."abc"] // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"]
}

gen().next() // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"])
a // "a"

</pre>

<h2 id="Generadores_avanzados">Generadores avanzados</h2>

<p>Los generadores calculan los valores devueltos bajo demanda, lo que les permite representar eficientemente secuencias que son costosas de calcular, o incluso secuencias infinitas como se explicó anteriormente.</p>

<p>El método {{jsxref("Objetos_globales/Generador/next","next()")}} también acepta un valor que puede ser utilizado para modificar el estado interno del generador. El valor recibido por <code>next()</code> es utilizado como si fuera el resultado de la iteración anterior (último valor entregado por <code>yield</code>) el cual detuvo al generador.</p>

<p>A continuación se muestra un generador de Fibonacci usando <code>next(x)</code> para reiniciar la secuencia:</p>

<pre class="brush: js">function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3</pre>

<p>Es posible forzar a un generador a lanzar una excepción cuando se invoca al método {{jsxref("Objetos_globales/Generador/throw","throw()")}} y se pasa el valor de excepción a lanzar. Esta excepción será lanzada desde el contexto actual suspendido del generador, como si en vez del estado suspendido actualmente de <code>yield</code> se tuviera una sentencia <code>throw valor</code>.</p>

<p>Si la excepción no es atrapada dentro del generador, se propagará a la invocación de <code>throw()</code>, y las siguientes llamadas a <code>next()</code> tendrán a la propiedad <code>done</code> en <code>verdadero</code>.</p>

<p>Los generadores tienen un método {{jsxref("Objetos_globales/Generador/return","return(valor)")}} que regresa el valor enviado y finalizan al generador.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}</p>
