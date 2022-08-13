---
title: document.documentURIObject
slug: Web/API/Document/documentURIObject
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Document/documentURIObject
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p><strong>Read-only</strong></p>

<p>Devuelve un objeto <code>nsIURI</code> que representa la URI de <a href="es/DOM/document">document</a>.</p>

<p>Esto sólo funciona para programas con privilegios (UniversalXPConnect) incluidas las extensiones. Para páginas web, esta propiedad no tiene significado especial y puede usarse de igual forma que cualquier otra propiedad del usuario.</p>

<p>El código con privilegios, debe tener cuidado de no leer o escribir esta propiedad en un objeto no controlado (e.g. on a <code>wrappedJSObject</code> of an <code><a href="es/XPCNativeWrapper">XPCNativeWrapper</a></code>). Ver {{ Bug(324464) }}para más detalles.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">var<em>uri</em> =<em>doc</em>.documentURIObject;
</pre>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre class="eval">// Comprueba que el esquema URI de la pestaña de Firefox es 'http',
// asumiendo que este código se ejecuta dentro de browser.xul
var uriObj = content.document.documentURIObject;
var uriPort = uriObj.port;

if (uriObj.schemeIs('http')) {
  ...
}
</pre>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p>No forma parte de ninguna especificación W3C.</p>
