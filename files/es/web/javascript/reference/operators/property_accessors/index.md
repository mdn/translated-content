---
title: Miembros
slug: Web/JavaScript/Reference/Operators/Property_Accessors
tags:
  - JavaScript
  - Operator
translation_of: Web/JavaScript/Reference/Operators/Property_Accessors
original_slug: Web/JavaScript/Referencia/Operadores/Miembros
---
<div>{{jsSidebar("Operators")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>Los operadores de miembros proporcionan acceso a las propiedades y métodos de un objeto.</p>

<p>Un objeto es en realidad un<em> arreglo asociativo</em> (por ejemplo<em> map</em> ,<em>dictionary</em> ,<em>hash</em> ,<em>lookup table</em> ). Las <em>claves</em> en este arreglo son los nombres de las propiedades y los métodos (propiedades que hacen referencia a funciones). Hay dos modos de acceder a estas propiedades: notación por punto y notación por corchete (es decir, operador de subscripción).</p>

<p>Nota: La especificación <a href="/es/docs/Glossary/ECMAScript">ECMAScript</a> etiqueta estos operadores como "property accessors" en vez de "operadores de miembro" (member operators).</p>

<h3 id="Notaci.C3.B3n_por_punto" name="Notaci.C3.B3n_por_punto">Notación por punto</h3>

<pre class="brush: js">get = objeto.propiedad;
objeto.propiedad = set;
</pre>

<p><code>propiedad</code> debe ser un identificador válido de JavaScript, esto es, una secuencia alfanumérica de caracteres, incluyendo también el guión bajo ("<code>_</code>") y el signo dolar ("<code>$</code>"), que no puede comenzar por un número. Por ejemplo, <code>objeto.$1</code> es válido, mientras que <code>objeto.1</code> no lo es.</p>

<p>Ejemplo:</p>

<pre class="brush: js">document.createElement('pre');
</pre>

<p>Aquí, el método llamado "createElement" se recupera de <code>document</code> y se le llama.</p>

<h3 id="Notaci.C3.B3n_por_corchetes" name="Notaci.C3.B3n_por_corchetes">Notación por corchetes</h3>

<pre class="brush: js">get = objeto[nombre_propiedad];
objeto[nombre_propiedad] = set;
</pre>

<p><code>nombre_propiedad</code> es una cadena. La cadena no tiene que ser un identificador válido; puede tener cualquier valor, por ejemplo "1foo", "!bar!", o incluso " " (un espacio).</p>

<p>Ejemplo:</p>

<pre class="brush: js">document['createElement']('pre');
</pre>

<p>Esto hace exactamente lo mismo que el ejemplo anterior.</p>

<h3 id="Nombres_de_propiedades" name="Nombres_de_propiedades">Nombres de propiedades</h3>

<p>Los nombres de propiedades deben ser cadenas. Esto significa que no pueden usarse objetos distintos a cadenas como claves en un objeto. Cualquier objeto que no sea una cadena, incluyendo números, se convierte al tipo cadena a través de su método {{jsxref("Object.toString")}}.</p>

<p>Ejemplos:</p>

<pre class="brush: js">var objeto = {};
objeto['1'] = 'valor';
alert(objeto[1]);
</pre>

<p>Ésto tendrá como resultado "valor", ya que 1 se convertirá por tipo a '1'.</p>

<pre class="brush: js">var foo = {propiedad_unica: 1}, bar = {propiedad_unica: 2}, objeto = {};
objeto[foo] = 'valor';
alert(objeto[bar]);
</pre>

<p>Ésto también tiene como resultado "valor", ya que tanto foo como bar se convierten a la misma cadena. En el motor de JavaScript <a href="/es/docs/Mozilla/SpiderMonkey">SpiderMonkey</a>, esta cadena sería "{{ mediawiki.external('objeto Object') }}".</p>

<h3 id="Enlace_a_m.C3.A9todos" name="Enlace_a_m.C3.A9todos">Enlace a métodos</h3>

<p>Un método no está enlazado al objeto del que es método. Específicamente, <code>this</code> no está establecido en un método, es decir, <code>this</code> no se refiere necesariamente a un objeto conteniendo el método. <code>this</code>, en cambio, se "pasa" mediante la llamada de función.</p>

<p>Vea <a href="/es/docs/Web/JavaScript/Referencia/Operadores/this#Funciones_enlazadas">enlace a métodos</a>.</p>

<h3 id="Nota_sobre_eval" name="Nota_sobre_eval">Nota sobre <code>eval</code></h3>

<p>Los principiantes en JavaScript a menudo tienen el error de usar {{jsxref("eval")}} cuando la notación por corchetes puede usarse a cambio. Por ejemplo, la siguiente sintaxis se ve a menudo en muchos scripts.</p>

<pre class="brush: js">x = eval('document.nombre_formulario.' + cadenaControlFormulario + '.value');
</pre>

<p><code>eval</code> es lenta y se debería evitar en la medida de lo posible. Es mejor usar la notación por corchetes a cambio:</p>

<pre class="brush: js">x = document.nombre_formulario[cadenaControlFormulario].value;
</pre>
