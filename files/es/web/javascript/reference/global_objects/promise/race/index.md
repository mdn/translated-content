---
title: Promise.race()
slug: Web/JavaScript/Reference/Global_Objects/Promise/race
tags:
  - ECMAScript2015
  - ECMAScript6
  - JavaScript
  - Promesa
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/race
original_slug: Web/JavaScript/Referencia/Objetos_globales/Promise/race
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Promise.race(iterable)</strong></code> retorna una promesa que se cumplirá o no tan pronto como una de las promesas del argumento iterable se cumpla o se rechace, con el valor o razón de rechazo de ésta.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>Promise.race(iterable)</var>;</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt>iterable</dt>
 <dd>Un objeto iterable , como por ejemplo un {{jsxref("Array")}}. Vea <a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable</a>.</dd>
</dl>

<h3 id="Retorna">Retorna</h3>

<p>Una {{jsxref("Promise")}} que se cumple o se rechaza tan pronto como una de las promesas dadas en el argumento iterable se cumple o se rechaza.</p>

<h2 id="Descripción">Descripción</h2>

<p>La función <code>race</code> retorna una <code>Promise</code> que se comporta como tal. Se cumple o se rechaza, lo que suceda antes en alguno de sus argumentos (iterable).</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_Promise.race_–_ejemplos_con_setTimeout">Usando <code>Promise.race</code> – ejemplos con <code>setTimeout</code></h3>

<pre class="brush: js">var p1 = new Promise( (resolve, reject) =&gt; {
    setTimeout(resolve, 500, "uno");
});
var p2 = new Promise( (resolve, reject) =&gt; {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p1, p2]).then( value =&gt; {
  console.log(value); // "dos"
  // Ambas se resuelven, pero la p2 antes.
});

  // Ejemplo con un resolve y un reject en el mismo método race.
var p3 = new Promise( (resolve, reject) =&gt; {
    setTimeout(resolve, 100, "tres");
});
var p4 = new Promise( (resolve, reject) =&gt; {
    setTimeout(reject, 500, "cuatro");
});

Promise.race([p3, p4]).then( value =&gt; {
  console.log(value); // "tres"
  // p3 es mas rápida, así que se resuelve el race
}, reason =&gt; {
  // No es llamado
});

var p5 = new Promise( (resolve, reject) =&gt; {
    setTimeout(resolve, 500, "cinco");
});
var p6 = new Promise( (resolve, reject) =&gt; {
    setTimeout(reject, 100, "seis");
});

Promise.race([p5, p6]).then( value =&gt; {
  // No es llamado
}, reason =&gt; {
  console.log(reason); // "seis"
  // p6 es mas rápida, así que se rechaza
});
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Status</th>
   <th scope="col">Comentar</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-promise.race', 'Promise.race')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.race', 'Promise.race')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h2>

<p>{{Compat}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.all()")}}</li>
</ul>
