---
title: Diseño de caja flexible CSS
slug: Web/CSS/CSS_Flexible_Box_Layout
tags:
  - CSS
  - CSS Flexible
  - flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout
---
<p>{{CSSRef}}</p>

<p>El diseño<strong> CSS Flexbox</strong> es un módulo de CSS que define un modelo de caja, optimizado para el diseño de interfaces de usuario. En el diseño flex, los nodos hijo se pueden distribuir en dirección vertical u horizontal y se pueden "flexibilizar" sus tamaños, bien sea rellenando el espacio disponible o encogiéndose para evitar salirse del contorno del nodo padre. Se puede manipular fácilmente tanto la alineación horizontal como la vertical, de los nodos hijo. La anidación de estas cajas (horizontal dentro de vertical o vertical dentro de horizontal) se puede usar para construir diseños en dos dimensiones.</p>

<h2 id="Ejemplo_Básico">Ejemplo Básico</h2>

<p>En el siguiente ejemplo, se ha definido un contenedor como <code>display: flex</code>, lo que significa que los tres elementos hijo se convierten en elementos flexibles. <span>El valor de <code>justify-content</code> se ha establecido en <code>space-between</code> para espaciar los elementos de manera uniforme en el eje principal.</span> <span>Se ha colocado una cantidad igual de espacio entre cada elemento, con los elementos izquierdo y derecho alineados con los bordes del contenedor flexible.</span> <span>También puede ver que los elementos se estiran en el eje transversal, debido a que el valor predeterminado de </span><code>align-items</code><span> es <code>stretch</code>.</span> <span>Los elementos se extienden hasta la altura del contenedor flexible, por lo que cada uno de ellos tiene tanta altura como el elemento más alto.</span></p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}</p>

<h2 id="Referencia">Referencia</h2>

<h3 id="Propiedades_CSS">Propiedades CSS</h3>

<div class="index">
<ul>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("flex")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex-flow")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-wrap")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("order")}}</li>
</ul>
</div>

<h3 id="Propiedades_de_alineación">Propiedades de alineación</h3>

<p>Las propiedades <code>align-content</code>, <code>align-self</code>, <code>align-items</code> y <code>justify-content</code> aparecieron inicialmente en la especificación de Flexbox, pero ahora están definidas en Alineación de cuadro y la especificación de Flexbox las refiere a la Especificación de alineación de cuadro para definiciones actualizadas. Las propiedades de alineación adicionales también se definen en Alineación de cuadro.</p>

<div class="index">
<ul>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("place-content")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>
</div>

<h3 id="Entradas_del_glosario">Entradas del glosario</h3>

<div class="index">
<ul>
 <li><a href="/en-US/docs/Glossary/Flexbox">Flexbox</a></li>
 <li><a href="/en-US/docs/Glossary/Flex_Container">Flex Container</a></li>
 <li><a href="/en-US/docs/Glossary/Flex_Item">Flex Item</a></li>
 <li><a href="/en-US/docs/Glossary/Main_Axis">Main Axis</a></li>
 <li><a href="/en-US/docs/Glossary/Cross_Axis">Cross Axis</a></li>
 <li><a href="/en-US/docs/Glossary/Flex">Flex</a></li>
</ul>
</div>

<h2 id="Guías">Guías</h2>

<dl>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Conceptos básicos de Flexbox</a></dt>
 <dd>Una visión general de las características de flexbox</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods">Relación de flexbox con otros métodos de diseño.</a></dt>
 <dd>Cómo flexbox se relaciona con otros métodos de diseño y otras especificaciones de CSS</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container">Alinear elementos en un contenedor flexible</a></dt>
 <dd>Cómo funcionan las propiedades de Alineación de cuadro con flexbox.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items">Ordenando elementos flex</a></dt>
 <dd>Explicando las diferentes formas de cambiar el orden y la dirección de los elementos, y cubriendo los problemas potenciales al hacerlo.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax">Control de proporción de elementos flex a lo largo del eje principal</a></dt>
 <dd>Este artículo explica las propiedades de flex-grow, flex-shrink y flex-basis.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items">Dominar el envoltorio de elementos flex</a></dt>
 <dd>Cómo crear contenedores flex con múltiples líneas y controlar la visualización de los elementos en esas líneas.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox">Casos de uso típicos de flexbox</a></dt>
 <dd>Patrones de diseño comunes que son los típicos casos de uso de flexbox.</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox">Compatibilidad con versiones anteriores de Flexbox</a></dt>
 <dd>Estado del navegador de flexbox, problemas de interoperabilidad y compatibilidad con navegadores antiguos y versiones de la especificación</dd>
</dl>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS3 Flexbox') }}</td>
   <td>{{ Spec2('CSS3 Flexbox') }}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Ver_también">Ver también</h2>

<dl>
 <dt><a href="https://github.com/philipwalton/flexbugs">Flexbugs</a></dt>
 <dd>una lista comisariada por la comunidad de errores y soluciones del navegador Flexbox</dd>
 <dt><a href="/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins">Combinaciones (Mixins) Flexbox para varios navegadores</a></dt>
 <dd>Este artículo proporciona un conjunto de combinaciones(mixins)para aquellos que desean crear experiencias de flexbox en varios navegadores que incluso funcionan en navegadores antiguos que no admiten la sintaxis moderna de flexbox.</dd>
</dl>
