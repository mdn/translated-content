---
title: Constructor Error()
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
tags:
  - Constructor
  - JavaScript
  - Referencia
translation_of: Web/JavaScript/Reference/Global_Objects/Error/Error
original_slug: Web/JavaScript/Referencia/Objetos_globales/Error/constructor_Error
---
<div>{{JSRef}}</div>

<p><span class="seoSummary">El constructor <strong><code>Error</code></strong> crea un objeto <code>Error</code>.</span></p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate">new Error([<var>message</var>[, <var>fileName</var>[, <var>lineNumber</var>]]])</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code><var>message</var></code>{{Optional_Inline}}</dt>
 <dd>Una descripción del error legible para los humanos.</dd>
 <dt><code><var>fileName</var></code> {{Optional_Inline}}{{Non-standard_inline}}</dt>
 <dd>El valor de la propiedad <code><var>fileName</var></code> en el objeto <code>Error</code> creado. De manera predeterminada, el nombre del archivo que contiene el código que llamó al constructor <code>Error()</code>.</dd>
 <dt><code><var>lineNumber</var></code> {{Optional_Inline}}{{Non-standard_inline}}</dt>
 <dd>El valor de la propiedad <code><var>lineNumber</var></code> en el objeto <code>Error</code> creado. De manera predeterminada, el número de línea que contiene la invocación del constructor <code>Error()</code>.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Llamada_a_función_o_construcción_new">Llamada a función o construcción <code>new</code></h3>

<p>Cuando se usa <code>Error</code> como una función, sin {{JSxRef("Operators/new", "new")}}, devolverá un objeto <code>Error</code>. Por lo tanto, una simple llamada a <code>Error</code> producirá el mismo resultado que la construcción de un objeto <code>Error</code> mediante la palabra clave <code>new</code>.</p>

<pre class="brush: js; notranslate">// esto...
const x = Error('¡Fui creado usando una llamada a función!')

    // ...tiene la misma funcionalidad que esta.
const y = new Error('¡Fui construido con la palabra clave "new"!') </pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-error-constructor', 'Error constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_del_navegador">Compatibilidad del navegador</h2>

<div>


<p>{{Compat("javascript.builtins.Error.Error")}}</p>
</div>

<h2 id="Ve_también">Ve también</h2>

<ul>
 <li>{{JSxRef("Sentencias/throw", "throw")}}</li>
 <li>{{JSxRef("Sentencias/try...catch", "try...catch")}}</li>
</ul>
