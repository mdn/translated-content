---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sub
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/sub
---
<p>{{JSRef("Objetos_globales", "String")}}</p>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Causa que una cadena se muestre como subíndice, como si estuviese dentro de una etiqueta {{HTMLElement("sub")}}.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox"><em>cadena</em>.sub()</pre>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>Usa el método <code>sub</code> junto para formatear y mostrar una cadena en un documento.</p>
<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_los_m.C3.A9todos_sub_y_sup_para_formatear_una_cadena" name="Ejemplo:_Usando_los_m.C3.A9todos_sub_y_sup_para_formatear_una_cadena">Ejemplo: Usando los métodos <code>sub</code> y <code>sup</code> para formatear una cadena</h3>
<p>El siguiente ejemplo usa los métodos <code>sub</code> y <code>sup</code> para formatear una cadena:</p>
<pre class="brush: js">var superText="superscript"
var subText="subscript"

console.log("Esto es lo que un " + superText.sup() + " parece.")
console.log("Esto es lo que un " + subText.sub() + " parece.")
</pre>
<p>Este ejemplo produce el mismo resultado que el siguiente código HTML:</p>
<pre class="brush: html">Esto es lo que &lt;sup&gt;superscript&lt;/sup&gt; parece.
Esto es lo que &lt;sub&gt;subscript&lt;/sub&gt; parece.
</pre>
<h3 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h3>
<ul>
 <li>{{jsxref("String.prototype.sup()")}}</li>
</ul>
