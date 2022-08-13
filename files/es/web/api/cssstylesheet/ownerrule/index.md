---
title: Stylesheet.ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
---
<p>{{ ApiRef() }}</p>
<h3 id="Summary" name="Summary">Resumen</h3>
<p>Si esta hoja de estilos viene de una regla <code>@import</code>, la propiedad <strong>ownerRule </strong>contendrá la CSSImportRule.</p>
<h3 id="Syntax" name="Syntax">Sintaxis</h3>
<pre class="eval"><em>rule</em> = stylesheet.ownerRule
</pre>
<h3 id="Parameters" name="Parameters">Parámetros</h3>
<ul>
 <li><code>rule</code> es una cadena que contiene la regla de importación en el documento HTML o XML.</li>
</ul>
<h3 id="Notes" name="Notes">Notas</h3>
<p>Ten en cuenta que si el valor de la propiedad ownerNode en el elemento <a href="/es/DOM/element.style" title="es/DOM/element.style">STYLE</a> actual es NULL, el valor <strong>ownerRule </strong>devolverá !!TODO!! y viceversa.</p>
<h3 id="Specification" name="Specification">Specification</h3>
<p><a class="external" href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/css.html#CSS-CSSStyleSheet-ownerRule">ownerRule </a></p>
<p>{{ languages( { "pl": "pl/DOM/stylesheet.ownerRule" } ) }}</p>
