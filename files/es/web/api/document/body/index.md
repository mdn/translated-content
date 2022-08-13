---
title: document.body
slug: Web/API/Document/body
translation_of: Web/API/Document/body
---
<div>{{APIRef("DOM")}}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve el nodo del <code>&lt;body&gt;</code> o el nodo del <code>&lt;frameset&gt;</code> del documento.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>objRef</i> = document.body
document.body =
<i>objRef</i>
</pre>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<pre class="eval">// en HTML: &lt;body id="oldBodyElement"&gt;&lt;/body&gt;
alert(document.body.id); // "oldBodyElement"
var aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";
document.body = aNewBodyElement;
alert(document.body.id); // "newBodyElement"
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p><code>document.body</code> es el elemento que contiene el contenido para el documento. En documentos con contenidos <code>&lt;body&gt;</code>, devuelven el elemento <code>&lt;body&gt;</code>, y en documentos de marco de sistema, esto devuelve el elemento extremo <code>&lt;frameset&gt;</code>.</p>

<p>Aunque <code>body</code> es programable, colocando un nuevo cuerpo en un documento efectivamente quitará a todos los hijos actuales del elemento existente <code>&lt;body&gt;</code>.</p>

<h3 id="Especificaci.C3.B3n" name="Especificaci.C3.B3n">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-56360201">DOM Level 2 HTML: HTMLDocument.body</a></p>

<p>{{ languages( { "en": "en/DOM/document.body", "pl": "pl/DOM/document.body" } ) }}</p>
