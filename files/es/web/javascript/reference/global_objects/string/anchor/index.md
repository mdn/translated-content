---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
tags:
  - HTML wrapper methods
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/anchor
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/anchor
---
<div>{{JSRef("Objetos_globales", "String")}}</div>

<h2 id="Resumen" name="Resumen">Resumen</h2>

<p>El método <strong><code>anchor()</code></strong> crea un ancla HTML, {{HTMLElement("a")}}, que se usa como un enlace a hipertexto.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox"><em>cadena</em>.anchor(<em>nombreAtributo</em>)</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt><code>nombreAtributo</code></dt>
 <dd>Una cadena.</dd>
</dl>

<h2 id="Descripci.C3.B3n" name="Descripci.C3.B3n">Descripción</h2>

<p>Usa el método <code>anchor</code> con los métodos <code>document.write</code> o <code>document.writeln</code> para crear y mostrar programando un ancla en un documento. Crea el ancla con el método <code>anchor</code>, y entonces llama a <code>write</code> o <code>writeln</code> para mostrar el ancla en el documento. En JavaScript en el lado Servidor, usa la función <code>write</code> para mostrar el ancla.</p>

<p>En la sintaxis, la cadena de texto representa el texto literal que usted quiere que el usuario vea. La cadena <code>nombreAtributo</code> representa el atributo <code>NAME</code> de la etiqueta A.</p>

<p>Los anclas creados con el método <code>anchor</code> serán elementos del arreglo {{domxref("document.anchors")}}</p>

<h2 id="Ejemplos" name="Ejemplos">Ejemplos</h2>

<h3 id="Ejemplo:_Usando_anchor" name="Ejemplo:_Usando_anchor">Ejemplo: Usando <code>anchor</code></h3>

<p>El siguiente código de ejemplo dentro de un elemento HTML <code>script</code>:</p>

<pre class="brush: js">var miCadena = "Tabla de Contenidos";
document.body.innerHTML = miCadena.anchor("ancla_contenidos");
</pre>

<p>obtendrá el siguiente HTML:</p>

<pre class="brush: html">&lt;a name="ancla_contenidos"&gt;Tabla de Contenidos&lt;/A&gt;
</pre>

<h3 id="Vea_Tambi.C3.A9n" name="Vea_Tambi.C3.A9n">Vea También</h3>

<ul>
 <li>{{jsxref("String.prototype.link()")}}</li>
</ul>
