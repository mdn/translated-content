---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Error
  - ErrorDeTipo
  - JavaScript
  - errores
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensaje">Mensaje</h2>

<pre class="syntaxbox">TypeError: "x" is not a function
</pre>

<h2 id="Tipo_de_error">Tipo de error</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="¿Qué_salió_mal">¿Qué salió mal?</h2>

<p>Se ha intentado llamar a un elemento o valor como si fuera una función, pero no lo era. El código esperaba que hubiera una función implementada, pero no la ha encontrado.</p>

<p>¿Está bien escrito el nombre de la función?¿El objeto sobre el que estás haciendo la llamada tiene ese método implementado realmente? Por ejemplo, los objetos tipo Array tienen implementada la función map, pero el resto de tipos no la tienen.</p>

<p>Hay muchas funciones propias de Javascript (built-in) que necesitan una función de callback, por lo que tienes que pasar esa función como parámetro para que estos métodos funcionen correctamente.</p>

<ul>
 <li>Cuando se usen objetos {{jsxref("Array")}} o {{jsxref("TypedArray")}}:
  <ul>
   <li>{{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}</li>
  </ul>
 </li>
 <li>Cuando se usen objetos {{jsxref("Map")}} y {{jsxref("Set")}}:
  <ul>
   <li>{{jsxref("Map.prototype.forEach()")}} y {{jsxref("Set.prototype.forEach()")}}</li>
  </ul>
 </li>
</ul>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Nombre_de_la_función_mal_escrito">Nombre de la función mal escrito</h3>

<p>En este caso, que ocurre con mucha frecuencia, el nombre de la función está mal escrito:</p>

<pre class="brush: js example-bad">var x = document.getElementByID("foo");
// TypeError: document.getElementByID is not a function
</pre>

<p>El nombre correcto de la función es <code>getElementByI<strong>d</strong></code>:</p>

<pre class="brush: js example-good">var x = document.getElementById("foo");
</pre>

<h3 id="Función_llamada_en_el_objeto_equivocado">Función llamada en el objeto equivocado</h3>

<p>Puede que el método que queramos usar no esté implementado en el tipo de objeto que estemos usado. En este ejemplo, queremos usar el método map, que recibe una función de callback como argumento, pero solo lo tienen los objetos {{jsxref("Array")}}.</p>

<pre class="brush: js example-bad">var obj = { a: 13, b: 37, c: 42 };

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function</pre>

<p>Como obj es un diccionario (parejas clave/valor), no tiene método map y se produce el error. Para evitarlo, hay que usar un {{jsxref("Array")}}:</p>

<pre class="brush: js example-good">var numeros = [1, 4, 9];

numeros.map(function(num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
</pre>

<h3 id="La_función_comparte_un_nombre_con_una_propiedad_preexistente">La función comparte un nombre con una propiedad preexistente</h3>

<p>A veces, al hacer una clase, puede tener una propiedad y una función con el mismo nombre. Al llamar a la función, el compilador piensa que la función deja de existir.</p>

<pre class="brush: js example-bad">var Perro = function () {
 this.edad = 11;
 this.color = "negro";
 this.nombre = "Rafael";
 return this;
}

Perro.prototype.nombre = function(nombre) {
 this.nombre = nombre;
 return this;
}


var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Uncaught TypeError: myNewDog.name is not a function
</pre>

<p>Utilice un nombre de propiedad diferente en su lugar:</p>

<pre class="brush: js example-good">var Perro = function () {
 this.edad = 11;
 this.color = "negro";
 this.nombrePerro = "Rafael"; //Usando this.nombrePerro en vez de .nombre
 return this;
}

Perro.prototype.nombre = function(nombre) {
 this.nombrePerro = nombre;
 return this;
}


var miNuevoPerro = new Perro();
miNuevoPerro.nombre("Lilly"); //Perro { edad: 11, color: 'negro', nombrePerro: 'Lilly' }</pre>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions">Functions</a></li>
</ul>
