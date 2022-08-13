---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Objeto
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isSealed
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/isSealed
---
<div>{{JSRef}}</div>

<p>El método <code><strong>Object.isSealed()</strong></code> si el objeto está sellado.</p>

<div>{{EmbedInteractiveExample("pages/js/object-issealed.html")}}</div>



<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><code>Object.isSealed(<var>obj</var>)</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>El objeto que debe ser verificado.</dd>
</dl>

<h3 id="Valor_devuelto">Valor devuelto</h3>

<p>Un {{jsxref("Boolean")}} indicando si el objeto dado está sellado.</p>

<h2 id="Descripción">Descripción</h2>

<p>Devuelve <code>true</code> si el objeto está sellado, de lo contrario devuelve <code>false</code>. Un objeto está sellado si no es {{jsxref("Object.isExtensible", "extensible", "", 1)}} y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).</p>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: js">// Los objetos no están sellados por defecto
var empty = {};
Object.isSealed(empty); // === false

// Si haces un objeto vacío no extendible,
// está vacíamente sellado
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// Lo mismo no es vedad sobre un objeto no vacío,
// a menos que sus propiedades son todas no configurables.
var hasProp = { fee: 'fie foe fum' };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// Pero hazlas todas no configurables
// y el objeto se vuelve sellado.
Object.defineProperty(hasProp, 'fee', {
  configurable: false
});
Object.isSealed(hasProp); // === true

// La manerá más facil de sellar un objeto, por supuesto,
// es Object.seal
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// Un objeto sellado es, por definición, no extendible.
Object.isExtensible(sealed); // === false

// Un objeto sellado puodría estar congelado,
// pero no tiene que ser.
Object.isFrozen(sealed); // === true
// (Todas las propiedades también no modificables)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// ('p' todavía es modificable)

var s3 = Object.seal({ get p() { return 0; } });
Object.isFrozen(s3); // === true
// (solo la configurabilidad es importante para las propiedades de acceso)
</pre>

<h2 id="Notes">Notes</h2>

<p><code><font face="Open Sans, arial, x-locale-body, sans-serif"><span style="background-color: #ffffff;">En ES5, si el argumento de este método no es un objeto (primitivo), entonces causará un </span></font></code>{{jsxref("TypeError")}}. En ES2015, un argumento que no sea un objeto será tratado como si fuera un objeto sellado ordinario, simplemente devuelve <code>true</code>.</p>

<pre class="brush: js">Object.isSealed(1);
// TypeError: 1 no es un objeto (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.3.11', 'Object.isSealed')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Definición inicial. Implementada en JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.issealed', 'Object.isSealed')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.issealed', 'Object.isSealed')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<div>


<p>{{Compat("javascript.builtins.Object.isSealed")}}</p>
</div>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Object.seal()")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Object.isExtensible()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
 <li>{{jsxref("Object.isFrozen()")}}</li>
</ul>
