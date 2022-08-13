---
title: Stylesheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
translation_of: Web/API/StyleSheet/parentStyleSheet
---
<p>{{ ApiRef() }}</p>
<h3 id="Summary" name="Summary">Resumen</h3>
<p>Devuelve la hoja de estilo que incluye a la que está en curso, si existe.</p>
<h3 id="Syntax" name="Syntax">Sintaxis</h3>
<pre class="eval"><em>objRef</em> = stylesheet.parentStyleSheet
</pre>
<h3 id="Example" name="Example">Ejemplo</h3>
<pre class="eval">// encuentra la hoja de estilo de alto nivel
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
}
else
{ sheet = stylesheet; }
</pre>
<h3 id="Notes" name="Notes">Notas</h3>
<p>Esta propiedad devuelve NULL si la hoja de estilo actual es una hoja de estilo de alto nivel o si la inclusión de hojas de estilo no está implementada.</p>
<h3 id="Specification" name="Specification">Specification</h3>
<p><a class="external" href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet">parentStyleSheet </a></p>
<p>{{ languages( { "pl": "pl/DOM/stylesheet.parentStyleSheet" } ) }}</p>
