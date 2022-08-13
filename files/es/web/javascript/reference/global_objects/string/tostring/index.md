---
title: String.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toString
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/toString
---
<p>{{JSRef("Objetos_globales", "String")}}</p>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>El <strong><code>toString()</code></strong> método devuelve una cadena que representa al objeto especificado.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre><code><em>cadena</em>.toString() </code></pre>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>El objeto <code>String</code> sobreescribe el método <code>toString</code> del objeto {{jsxref("Object")}} object; no hereda {{jsxref("Object.toString()")}}. Para objetos <code>String</code>, el método <code>toString</code> devuelve una cadena que representa al objeto.</p>
<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_toString" name="Ejemplo:_Usando_toString">Ejemplo: Usando <code>toString</code></h3>
<p>El siguiente ejemplo muestra el valor cadena de un objeto String:</p>
<pre class="brush: js">cadena = new String("Hello world");
alert(cadena.toString())      // Displays "Hello world"
</pre>
<h2 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h2>
<ul>
 <li>{{jsxref("Object.prototype.toSource()")}}</li>
 <li>{{jsxref("String.prototype.valueOf()")}}</li>
</ul>
