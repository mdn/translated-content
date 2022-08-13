---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/small
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/small
---
<p>{{JSRef("Objetos_globales", "String")}}</p>
<p>{{deprecated_header}}</p>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Causa que una cadena se muestra con una fuente pequeña, como si estuviese dentro de una etiqueta {{HTMLElement("small")}}.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox"><em>cadena</em>.small()</pre>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>Usa el método <code>small</code> para formatear y mostrar una cadena en un documento.</p>
<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_m.C3.A9todos_de_string_para_cambiar_el_tama.C3.B1o_de_una_cadena" name="Ejemplo:_Usando_m.C3.A9todos_de_string_para_cambiar_el_tama.C3.B1o_de_una_cadena">Ejemplo: Usando métodos de <code>string</code> para cambiar el tamaño de una cadena</h3>
<pre class="brush: js">var cadenaMundo="¡Hola mundo!"

console.log(cadenaMundo.small())
console.log(cadenaMundo.big())
console.log(cadenaMundo.fontsize(7))
</pre>
<p>Este ejemplo produce el mismo resultado que el siguiente código HTML:</p>
<pre class="brush: html">&lt;small&gt;¡Hola mundo!&lt;/small&gt;
&lt;big&gt;¡Hola mundo!&lt;/big&gt;
&lt;fontsize=7&gt;¡Hola mundo!&lt;/fontsize&gt;
</pre>
<h3 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h3>
<ul>
 <li>{{jsxref("String.prototype.fontsize()")}}</li>
 <li>{{jsxref("String.prototype.big()")}}</li>
</ul>
