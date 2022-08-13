---
title: Generator.prototype.throw()
slug: Web/JavaScript/Reference/Global_Objects/Generator/throw
translation_of: Web/JavaScript/Reference/Global_Objects/Generator/throw
original_slug: Web/JavaScript/Referencia/Objetos_globales/Generador/throw
---
<div>{{JSRef}}</div>

<p>El método <code><strong>throw()</strong></code> reanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades <code>done</code> y <code>value</code>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code><var>gen</var>.throw(excepción)</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>excepción</code></dt>
 <dd>La excepción a lanzar. Al hacer depuración, es útil que la excepción cumpla con <code>instanceof</code> {{jsxref("Error")}}.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Un {{jsxref("Object")}} con dos propiedades:</p>

<ul>
 <li><code>done</code> (booleano)

  <ul>
   <li>Es <code>verdadero</code> si el iterador ya llegó al final de la secuencia. En este caso <code>valor</code> define opcionalmente el <em>valor de retorno</em> del iterador.</li>
   <li>Es <code>falso</code> si el iterador puede dar un siguiente valor en la secuencia. Es equivalente a no definir la propiedad <code>done</code>.</li>
  </ul>
 </li>
 <li><code>value</code> - cualquier valor Javascript regresado por el iterador. Éste puede ser omitido si <code>done</code> is <code>verdadero</code>.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_throw()">Using <code>throw()</code></h3>

<p>The following example shows a simple generator and an error that is thrown using the <code>throw</code> method. An error can be caught by a <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">try...catch</a></code> block as usual.</p>

<pre class="brush: js">function* gen() {
  while(true) {
    try {
       yield 42;
    } catch(e) {
      console.log('Error caught!');
    }
  }
}

var g = gen();
g.next();
// { value: 42, done: false }
g.throw(new Error('Something went wrong'));
// "Error caught!"
// { value: 42, done: false }
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generator.prototype.throw', 'Generator.prototype.throw')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("javascript.builtins.Generator.throw")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/function*">function*</a></code></li>
</ul>
