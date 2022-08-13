---
title: Boolean.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Non-standard
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
original_slug: Web/JavaScript/Reference/Global_Objects/Boolean/toSource
---
<div>
 {{JSRef("Objetos_globales", "Boolean")}} {{ Non-standard_header() }}</div>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Devuelve una cadena que representa el código fuente del objeto.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<p><code>toSource() </code></p>
<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>
<p>Ninguno.</p>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>El método <code>toSource</code> devuelve los siguientes valores:</p>
<ul>
 <li>Para objetos built-in <code>Boolean</code>, <code>toSource</code> devuelve la siguiente cadena indicando que el código fuente no está disponible:</li>
</ul>
<pre class="brush: js">function Boolean() {
   [código nativo]
}
</pre>
<ul>
 <li>Para instancias de <code>Boolean</code>, <code>toSource</code> devuelve una cadena representando el código fuente.</li>
</ul>
<p>Este método se utiliza habitualmente en llamadas internas por JavaScript y no en código explícito.</p>
<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>
<ul>
 <li>{{jsxref("Object.prototype.toSource()")}} {{Non-standard_inline()}}</li>
</ul>
