---
title: String.prototype.blink()
slug: Web/JavaScript/Reference/Global_Objects/String/blink
tags:
  - Deprecated
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/blink
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/blink
---
<p>{{JSRef("Objetos_globales", "String")}}</p>
<p>{{deprecated_header}}</p>
<h2 id="Resumen" name="Resumen">Resumen</h2>
<p>Causa que una cadena parpadee como si estuviese en una etiqueta {{HTMLElement("blink")}}.</p>
<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>
<pre class="syntaxbox"><em>cadena</em>.blink()</pre>
<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>
<p>Usa el método <code>blink</code> para formatear y mostrar una cadena en un documento.</p>
<h2 id="Ejemplos">Ejemplos</h2>
<h3 id="Ejemplo:_Usando_m.C3.A9todos_de_string_para_cambiar_el_formateado_de_una_cadena" name="Ejemplo:_Usando_m.C3.A9todos_de_string_para_cambiar_el_formateado_de_una_cadena">Ejemplo: Usando métodos de <code>string</code> para cambiar el formateado de una cadena</h3>
<p>El siguiente ejemplo usa métodos de <code>string</code> para cambiar el formateado de una cadena:</p>
<pre class="brush: js">var cadenaMundo="¡Hola mundo!"

console.log(cadenaMundo.blink())
console.log(cadenaMundo.bold())
console.log(cadenaMundo.italics())
console.log(cadenaMundo.strike())
</pre>
<p>Este ejemplo produce el mismo resultado que el siguiente código HTML:</p>
<pre class="brush: html">&lt;blink&gt;¡Hola mundo!&lt;/blink&gt;
&lt;b&gt;¡Hola mundo!&lt;/b&gt;
&lt;i&gt;¡Hola mundo!&lt;/b&gt;
&lt;strike&gt;¡Hola mundo!&lt;/strike&gt;
</pre>
<h2 id="Vea_tambi.C3.A9n" name="Vea_tambi.C3.A9n">Vea también</h2>
<ul>
 <li>{{jsxref("String.prototype.bold()")}}</li>
 <li>{{jsxref("String.prototype.italics()")}}</li>
 <li>{{jsxref("String.prototype.strike()")}}</li>
</ul>
