---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
tags:
  - Desaprovado
  - Expresion Regular
  - JavaScript
  - Obsoleto
  - Prototype
  - Referencia
  - RegExp
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/compile
original_slug: Web/JavaScript/Referencia/Objetos_globales/RegExp/compile
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>El método obsoleto <code><strong>compile</strong></code><strong><code>()</code></strong> es usado para (re-)compilar una expresión regular durante la ejecución del script. Es básicamente lo mismo que el constructor <code>RegExp</code>.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><code><var>regexObj</var>.compile(<var>patrón, flags</var>)</code></pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>patrón</code></dt>
 <dd>El texto de la expresión regular.</dd>
 <dt><code>flags</code></dt>
 <dd>
 <p>Si es especificado, las flags pueden tener cualquier combinación de los siguientes valores:</p>

 <dl>
  <dt><code>g</code></dt>
  <dd>búsqueda global (global match)</dd>
  <dt><code>i</code></dt>
  <dd>ignorar mayúsculas o minúsculas</dd>
  <dt><code>m</code></dt>
  <dd>Tratar caracteres de inicio y fin (^ y $) como multiples líneas de texto(por ejemplo: encontrar el inicio o fin de cada línea delimitada por \n o \r, no sólo al inicio o fin de toda la entrada de texto)</dd>
  <dt><code>y</code></dt>
  <dd>sticky; busca solamente desde el índice indicado por la propiedad <code>lastIndex</code> de esta expresión regular en la cadena objetivo (y no intenta buscar desde ningún índice posterior).</dd>
 </dl>
 </dd>
</dl>

<h2 id="Descripción">Descripción</h2>

<p> El método <code>compile</code> es obsoleto. Puedes simplemente utilizar el constructor <code>RegExp</code> para lograr el mismo efecto.</p>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Usando_compile">Usando <code>compile()</code></h3>

<p>El siguiente ejemplo muestra como recompilar una expresión regultar con un nuevo patrón y nuevas flags.</p>

<pre class="brush: js">var regexObj = new RegExp('foo', 'gi');
regexObj.compile('new foo', 'g');
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Commentario</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Definición inicial. Definido en la (norma) Annex B ECMAScript para Características Adicionales para Navegadores Web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Definido en la (norma) Annex B ECMAScript para Características Adicionales para Navegadores Web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatiblidad_con_navegadores">Compatiblidad con navegadores</h2>

<div>


<p>{{Compat("javascript.builtins.RegExp.compile")}}</p>
</div>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{jsxref("RegExp")}}</li>
</ul>
