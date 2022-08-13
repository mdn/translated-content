---
title: Entendiendo la propiedad CSS z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index
tags:
  - Avanzado
  - CSS
  - Entendiendo_CSS_Z_Index
  - Guía
  - Referencia
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index
original_slug: Web/CSS/CSS_Positioning/entendiendo_z_index
---
<p>Usualmente se puede considerar que las páginas HTML tienen dos dimensiones, porque el texto, las imágenes y otros elementos son organizados en la página sin superponerse. Hay un solo flujo de renderizado, y todos los elementos son concientes del espacio ocupado por otros. El atributo <span class="seoSummary">{{cssxref("z-index")}}</span> te permite ajustar el orden de las capas de los objetos cuando el contenido está siendo renderizado.</p>

<blockquote>
<p style="">En CSS 2.1, cada caja tiene una posición en tres dimensiones. Adicionalmente a sus posiciones horizontales y verticales, las cajas caen a lo largo de un "eje-z" y son formadas una encima de la otra. Las posiciones eje-Z son particularmente relevantes cuando las cajas se superponen visualmente.</p>
</blockquote>

<p>(de <a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#z-index">CSS 2.1 Section 9.9.1 - Layered presentation</a>)</p>

<p>Eso significa que las reglas de estilo CSS te permiten posicionar cajas en capas adicionales a la capa normal de renderizado (capa 0). La posición Z de cada capa es expresada como un entero que representa el orden de apilamiento durante el proceso de renderizado. Números más grandes significan mayor cercanía al observador. La posición Z puede ser controlada con la propiedad CSS {{ cssxref("z-index") }}.</p>

<p>Usar z-index parece extremadamente fácil: una sola propiedad, asigna un número entero, con un comportamiento fácil de entender. Sin embargo, cuando z-index es aplicada a jerarquías complejas de elementos HTML, su comportamiento puede ser difícil de entender o incluso impredecible. Esto es debido a reglas complejas de apilamiento. De hecho una sección dedicada ha sido reservada en la especificación CSS <a class="external" href="http://www.w3.org/TR/CSS21/zindex.html">CSS-2.1 Appendix E</a> para explicar mejor estas reglas.</p>

<p>Este artículo va a intentar explicar esas reglas, de una forma más simple y con varios ejemplos.</p>

<ol>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index" title="  javichito Apilando sin z-index">Apilando sin z-index</a> : Reglas de apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float" title="Apilamiento y float">Apilamiento y float</a> : Cómo son manejados los elementos flotantes</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index" title="Agregando z-index">Agregando z-index</a> : Usando z-index para cambiar el apilamiento por defecto</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento" title="El contexto de apilamiento">El contexto de apilamiento</a> : Notas sobre el contexto de apilamiento</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento" title="Ejemplo 1 del contexto de apilamiento">Ejemplo 1 del contexto de apilamiento</a> : Jerarquía HTML de 2 niveles, z-index en el último nivel</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento" title="Ejemplo 2 del contexto de apilamiento">Ejemplo 2 del contexto de apilamiento</a> : Jerarquía HTML de 2 niveles, z-index en todos los niveles</li>
 <li><a href="/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento" title="Ejemplo 3 del contexto de apilamiento">Ejemplo 3 del contexto de apilamiento</a> : Jerarquía HTML de 3 niveles, z-index en el segundo nivel</li>
</ol>

<p><small><em>Nota del autor: Gracias a Wladimir Palant y Rod Whiteley por la revisión.</em></small></p>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">Información del documento original</h3>

<ul>
 <li>Autor(es): Paolo Lombardi</li>
 <li>Este artículo es una traducción al inglés de un artículo que escribí en italiano para <a class="external" href="http://www.yappy.it">YappY</a>. He dado el derecho de compartir el contenido bajo <a class="external" href="http://creativecommons.org/licenses/by-sa/2.0/">Creative Commons: Attribution-Sharealike license</a></li>
 <li>Fecha de última actualización: 9 de Julio del 2005</li>
</ul>
</div>
