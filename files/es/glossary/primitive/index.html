---
title: Primitivo
slug: Glossary/Primitive
tags:
  - CodingScripting
  - Glosario
  - JavaScript
translation_of: Glossary/Primitive
original_slug: Glossary/Primitivo
---
<p><span class="seoSummary">En {{Glossary("JavaScript")}}, un <strong>primitive</strong> (valor primitivo, tipo de dato primitivo) son datos que no son un {{Glossary("object", "objeto")}} y no tienen {{Glossary("method", "métodos")}}. Hay 6 tipos de datos primitivos: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("bigint")}}, {{Glossary("boolean")}} , {{Glossary("undefined")}} y {{Glossary("symbol")}}. También hay {{Glossary("null")}}, que aparentemente es primitivo, pero de hecho es un caso especial para cada {{JSxRef("Object")}}: y cualquier tipo estructurado se deriva de <code>null</code> por la {{web.link("/es/docs/Learn/JavaScript/Objects/Inheritance", "Cadena de prototipos")}}.</span></p>

<p>La mayoría de las veces, un valor primitivo se representa directamente en el nivel más bajo de la implementación del lenguaje.</p>

<p>Todos los primitivos son <strong>inmutables</strong>, es decir, no se pueden modificar. Es importante no confundir un primitivo en sí mismo con un valor primitivo asignado a una variable. Se puede reasignar un nuevo valor a la variable, pero el valor existente no se puede cambiar de la misma forma en que se pueden modificar los objetos, los arreglos y las funciones.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<p>Este ejemplo te ayudará a comprender que los valores primitivos son <strong>inmutables</strong>.</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">// El uso de un método de cadena no modifica la cadena
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// El uso de un método de arreglo muta el arreglo
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// La asignación le da al primitivo un nuevo valor (no lo muta)
bar = bar.toUpperCase();       // BAZ
</pre>

<p>Un primitivo se puede reemplazar, pero no se puede modificar directamente.</p>

<h2 id="Otro_ejemplo_paso_a_paso">Otro ejemplo [paso a paso]</h2>

<p>El siguiente ejemplo te ayudará a analizar cómo se ocupa JavaScript de los primitivos.</p>

<h3 class="highlight-spanned" id="JavaScript_2"><span class="highlight-span">JavaScript</span></h3>

<pre class="brush: js line-numbers  language-js notranslate">// El primitivo
let foo = 5;

// Define una función que debería cambiar el valor primitivo
function addTwo(num) {
   num += 2;
}
// Otra función que intenta hacer lo mismo
function addTwo_v2(foo) {
   foo += 2;
}

// Llama a tu primera función mientras pasas el primitivo como argumento
addTwo(foo);
// Obtiene el valor primitivo actual
console.log(foo);   // 5

// Intenta de nuevo con tu segunda función...
addTwo_v2(foo);
console.log(foo);   // 5
</pre>

<p>¿Esperaba que fuera <code>7</code> en lugar de <code>5</code>?, si es así, lee cómo se ejecuta este código:</p>

<ul>
 <li>Para las llamadas a las funciones <code>addTwo</code> y <code>addTwo_v2</code>, JavaScript busca el valor del identificador <code>foo</code>. Encuentra correctamente tu variable instanciada con la primera declaración</li>
 <li>Después de encontrarla, evalúa la expresión, <code>foo</code> se reemplaza por 5 y el motor de JavaScript pasa ese valor a las funciones como argumento</li>
 <li>Antes de ejecutar las declaraciones dentro del cuerpo de las funciones, <strong>JavaScript toma una copia del argumento originalmente pasado</strong> (que es un primitivo) y crea una copia local. Estas copias, que existen solo dentro del ámbito de las funciones, son accesibles a través de los identificadores que especificaste en las definiciones de las funciones (<code>num</code> para <code>addTwo</code>, <code>foo</code> para <code>addTwo_v2</code>)</li>
 <li>Luego, se ejecutan las instrucciones de las funciones:
  <ul>
   <li>En la primera función, se creó una variable <code>num</code> local. ¡Estas aumentando su valor en 2, no el valor original de <code>foo</code>!</li>
   <li>En la segunda función, se creó una variable <code>foo</code> local. ¡Esto incrementa su valor en 2, no el valor original (externo) de <code>foo</code>!, además, en esta situación, no se puede acceder directamente a la variable <code>foo</code> externa. Esto se debe al alcance léxico de JavaScript y al ensombrecimiento de variables resultante. El <code>foo</code> local oculta al <code>foo</code> externo. Para obtener más información, consulta {{JSxRef("../Closures", "Cierres")}}. (Ten en cuenta que <code>window.foo</code> aún se podría usar para acceder a la variable <code>foo</code> externa).</li>
  </ul>
 </li>
 <li>En conclusión, cualquier cambio dentro de tus funciones <strong>no</strong> afectará a la <code>foo</code> original en absoluto, ya que estas modificando <strong>copias</strong> de la misma.</li>
</ul>

<p>Es por eso que los primitivos son inmutables: en lugar de cambiarlos directamente, modificas una <em>copia, sin afectar el original</em>.</p>

<h2 id="Envolturas_de_objetos_primitivos_en_JavaScript">Envolturas de objetos primitivos en JavaScript</h2>

<p>A excepción de <code>null</code> y <code>undefined</code>, todos los valores primitivos tienen objetos equivalentes que envuelven los valores primitivos:</p>

<ul>
 <li>{{JSxRef("String")}} para el <code>string</code> primitivo.</li>
 <li>{{JSxRef("Number")}} para el <code>number</code> primitivo.</li>
 <li>{{JSxRef("BigInt")}} para el <code>bigint</code> primitivo.</li>
 <li>{{JSxRef("Boolean")}} para el <code>boolean</code> primitivo.</li>
 <li>{{JSxRef("Symbol")}} para el <code>symbol</code> primitivo.</li>
</ul>

<p>El método {{JSxRef("Objetos_globales/Object/valueOf"," valueOf()")}} del contenedor devuelve el valor primitivo.</p>

<h2 id="Aprende_más">Aprende más</h2>

<h3 id="Conocimientos_generales">Conocimientos generales</h3>

<ul>
 <li>{{JSxRef("../Data_structures", "Introducción a los tipos de datos de JavaScript")}}</li>
 <li>{{Interwiki("wikipedia", "Tipo de dato primitivo")}} en Wikipedia</li>
</ul>

<section id="Quick_links">
<ol>
 <li>{{Link("/es/docs/Glossary")}}

  <ol>
   <li>{{Glossary("JavaScript")}}</li>
   <li>{{Glossary("string")}}</li>
   <li>{{Glossary("number")}}</li>
   <li>{{Glossary("bigint")}}</li>
   <li>{{Glossary("boolean")}}</li>
   <li>{{Glossary("null")}}</li>
   <li>{{Glossary("undefined")}}</li>
   <li>{{Glossary("symbol")}}</li>
  </ol>
 </li>
 <li>{{JSxRef("../Data_structures", "Tipos de datos JavaScript")}}</li>
</ol>
</section>
