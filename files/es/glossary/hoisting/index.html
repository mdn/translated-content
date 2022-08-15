---
title: Hoisting
slug: Glossary/Hoisting
tags:
  - JavaScript
  - hoisting
translation_of: Glossary/Hoisting
---
<p>Hoisting es un término que <em>no</em> encontrará utilizado en ninguna especificación previa a <a href="http://www.ecma-international.org/ecma-262/6.0/index.html">ECMAScript® 2015 Language Specification</a>. El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.</p>

<p>Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son <strong>asignadas en memoria</strong> durante la fase de <u>compilación,</u> pero quedan exactamente en dónde las has escrito en el código.</p>

<h2 id="Aprenda_más">Aprenda más</h2>

<h3 id="Ejemplo_técnico">Ejemplo técnico</h3>

<p>Una de las ventajas en JavaScript de colocar (<strong>ponerlas en memoria</strong>) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código. Por ejemplo: </p>

<pre class="brush: js">function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}

nombreDelGato("Maurizzio");
/*
El resultado del código es: "El nombre de mi gato es Maurizzio"
*/
</pre>

<p>El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:</p>

<pre class="brush: js">nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/
</pre>

<p>Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript. </p>

<p>Hoisting se lleva también bien con otros tipos de datos y variables. Observemos el siguiente ejemplo:</p>

<h3 id="Ejemplo_técnico_2">Ejemplo técnico</h3>

<pre class="brush: js">var x = 5;

(function () {
    console.log("x:", x); // no obtenemos '5' sino 'undefined'
    var x = 10;
    console.log("x:", x); // 10
}());
</pre>

<p>¿No hemos obtenido lo esperado?, como la declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es igual a declararla al inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se <strong>eleva</strong> y pasa a declararse <strong>al comienzo de su contexto</strong>, en este caso la función que la contiene.</p>

<p>El ejemplo anterior se entiende implícitamente como:</p>

<pre class="brush: js">var x = 5;

(function () {
    var x; // Se elevo la declaración
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());
</pre>

<p>JavaScript sólo utiliza el hoisting en <strong>declaraciones</strong>, no inicializaciones. Si está utilizando una variable que <strong>es declarada e inicializada después  </strong>(está después en el código) <strong>de usarla</strong>, el valor será <code>undefined</code>. El siguiente ejemplo demuestra ese comportamiento:</p>

<pre class="brush: js">var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y
</pre>

<p>Como se puede apreciar <strong>la elevación afecta la declaración</strong> de variables, pero <strong>no su inicialización</strong>. El valor será asignado exactamente cuando la sentencia de asignación sea alcanzada.</p>

<p>El ejemplo anterior se entiende implícitamente como:</p>

<pre class="brush: js">var x = 1; // Inicializa x
var y;// Se elevo la declaración
console.log(x + " " + y); // '1 undefined'
y = 2; // Inicializa y
</pre>

<h3 id="Referencia_técnica">Referencia técnica</h3>

<ul>
 <li><a href="https://www.udemy.com/understand-javascript/">JavaScript: Understanding the Weird Parts</a> - Udemy.com Course</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/var">var statement</a> - MDN</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function">function statement</a> - MDN</li>
</ul>
