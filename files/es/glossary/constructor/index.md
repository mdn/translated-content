---
title: Constructor
slug: Glossary/Constructor
tags:
  - Glosario
translation_of: Glossary/Constructor
---
<p>Un <strong>constructor</strong> pertenece a una clase objeto ({{glossary("object")}}) particular la cual es instanciada. El constructor inicializa este objeto y puede otorgar acceso a su información privada. El concepto de objeto puede ser aplicado a la mayoría de los lenguajes orientados a objetos ({{glossary("OOP","object-oriented programming")}}). En esencia, un constructor en {{glossary("JavaScript")}} suele ser declarado al comienzo de una instancia de una clase ({{glossary("class")}}).</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="brush: js">// This is a generic default constructor class Default
function Default() {
}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, ...,argN){
}
</pre>

<p>Para llamar al constructor de una clase en Javascript, use el operador <code>new</code> para asignar un objeto de referencia ({{glossary("object reference")}}) a una {{glossary("variable")}}.</p>

<pre class="brush: js">function Default() {
}

// A new reference of a Default object assigned to a
// local variable defaultReference
var defaultReference = new Default();
</pre>

<p> </p>

<h2 id="Saber_más">Saber más</h2>

<h3 id="Conocimiento_general">Conocimiento general</h3>

<ul>
 <li>{{Interwiki("wikipedia", "Constructor_%28object-oriented_programming%29", "Constructor")}} en Wikipedia</li>
</ul>

<h3 id="Referencia_técnica">Referencia técnica</h3>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_Constructor">The constructor in object oriented programming for JavaScript</a> en MDN</li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/new">New operator in JavaScript</a> en MDN</li>
</ul>
