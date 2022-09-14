---
title: Promise.all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
tags:
  - ECMAScript6
  - JavaScript
  - Método(2)
  - Promesa
  - Promise
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/all
original_slug: Web/JavaScript/Referencia/Objetos_globales/Promise/all
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Promise.all(iterable)</strong></code> devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><var>Promise.all(iterable)</var>;</pre>

<dl>
 <dt>iterable</dt>
 <dd>Un objeto iterable, por ejemplo un {{jsxref("Array")}}. Vea <a href="/en-US/docs/Web/JavaScript/Guide/iterable">iterable</a>.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Una {{jsxref("Promise")}}  que se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas, o bien se rechazará cuando alguna de ellas se rechace.</p>

<h2 id="Descripción">Descripción</h2>

<p><strong><code>Promise.all</code> </strong> se cumple cuando todas las promesas del iterable dado se han cumplido, o es rechazada si alguna promesa no se cumple. {{jsxref("Promise.resolve")}}.</p>

<p>Si alguna de las promesas pasadas en el argumento iterable falla, la promesa <code>all</code> es rechazada inmediatamente con el valor de la promesa que fué rechazada, descartando todas las demás promesas hayan sido o no cumplidas. Si se pasa un array vacío a <code>all</code> , la promesa se cumple inmediatamente.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Uso_de_Promise.all">Uso de <code>Promise.all</code></h3>

<p><code>Promise.all</code> espera a que todo se cumpla (o bien al primer rechazo).</p>

<pre class="brush: js">var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values =&gt; {
  console.log(values); // [3, 1337, "foo"]
});</pre>

<h3 id="Promise.all_comportamiento_de_fallo-rápido"><code>Promise.all</code> comportamiento de fallo-rápido</h3>

<p><code>Promise.all</code> se rechaza si uno de los elementos ha sido rechazado y <code>Promise.all</code> falla rápido: Si tienes cuatro promesas que se resuelven después de un timeout y una de ellas falla inmediatamente, entonces <code>Promise.all</code> se rechaza inmediatamente.</p>

<pre class="brush: js">var p1 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 1000, "one");
});
var p2 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 2000, "two");
});
var p3 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 3000, "three");
});
var p4 = new Promise((resolve, reject) =&gt; {
  setTimeout(resolve, 4000, "four");
});
var p5 = new Promise((resolve, reject) =&gt; {
  reject("reject");
});

Promise.all([p1, p2, p3, p4, p5]).then(values =&gt; {
  console.log(values);
}, reason =&gt; {
  console.log(reason)
});

//From console:
//"reject"

// Evenly, it's possible to use .catch
Promise.all([p1, p2, p3, p4, p5]).then(values =&gt; {
  console.log(values);
}).catch(reason =&gt; {
  console.log(reason)
});

//From console:
//"reject"

</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Status</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-promise.all', 'Promise.all')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Initial definition in an ECMA standard.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.all', 'Promise.all')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_entre_navegadores">Compatibilidad entre navegadores</h2>

<p>{{Compat("javascript/promise","Promise.all")}}</p>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.race()")}}</li>
</ul>
