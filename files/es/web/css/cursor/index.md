---
title: cursor
slug: Web/CSS/cursor
tags:
  - Referencia_CSS
translation_of: Web/CSS/cursor
---
<p>{{ CSSRef() }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>La propiedad <a href="es/CSS/cursor">CSS:cursor</a> especifica el tipo de cursor que se mostrara cuando este se encuentre sobre un elemento.</p>

<ul>
 <li><a href="es/CSS/Valor_inicial">CSS:Valor_inicial</a>:<code> <a href="es/CSS/auto">CSS:auto</a></code></li>
 <li>Se aplica a: todos los elementos</li>
 <li><a href="es/CSS/inheritance">CSS:inheritance</a>: Si</li>
 <li>Porcentaje: N/A</li>
 <li>Media: <a href="es/CSS/Media/Visual">CSS:Media:Visual</a>, <a href="es/CSS/Media/Interactivo">CSS:Media:Interactivo</a></li>
 <li><a href="es/CSS/Valor_calculado">CSS:Valor_calculado</a>:como sea especificado con URLs relativos convertidos a URLs absolutos.</li>
</ul>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">cursor: &lt;std-cursor-name&gt; | &lt;url&gt; [&lt;x&gt; &lt;y&gt;]? [, &lt;url&gt; [&lt;x&gt; &lt;y&gt;]?]* | <a href="es/CSS/inherit">CSS:inherit</a> ;
</pre>

<pre class="eval">cursor: [&lt;url&gt; [&lt;x&gt; &lt;y&gt;]?,]*  &lt;std-cursor-name&gt; ;
</pre>

<h3 id="Values" name="Values">Values</h3>

<dl>
 <dt>&lt;url&gt; {{ mediawiki.external(' ') }}? </dt>
 <dd>URL del cursor seleccionado mas posición opcional. Mas de un URL puede provocar problemas, in caso de que algunos tipode de imágenes de cursor no puedan ser usados.vea <a href="es/Uso_de_URL_como_valor_de_la_propiedad_cursor">Uso_de_URL_como_valor_de_la_propiedad_cursor</a> para mas detalles.</dd>
 <dt>&lt;std-cursor-name&gt;</dt>
 <dd>Algunos nombres de cursores se encuentra en la siguiente tabla.</dd>
</dl>

<h4 id="Supported_CSS_standard_values" name="Supported_CSS_standard_values">Supported CSS standard values</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Categoría</th>
   <th>nombre de CSS</th>
   <th>Descripción</th>
  </tr>
  <tr>
   <td rowspan="3">General</td>
   <td style="cursor: auto;"><code>auto</code></td>
   <td>El browser (user agent) determina el cursor que mostrara basado en el contenido presente.<br>
    E.g. equivalent to <code>text</code> when hovering text</td>
  </tr>
  <tr>
   <td style="cursor: default;"><code>default</code></td>
   <td>default cursor (typically an arrow)</td>
  </tr>
  <tr>
   <td style="cursor: none;"><code>none</code></td>
   <td>no cursor is rendered</td>
  </tr>
  <tr>
   <td rowspan="5">Links &amp; status</td>
   <td style="cursor: context-menu;"><code>context-menu</code></td>
   <td>cursor indicating that a context menu is available under the cursor</td>
  </tr>
  <tr>
   <td style="cursor: help;"><code>help</code></td>
   <td>cursor indicating help is available</td>
  </tr>
  <tr>
   <td style="cursor: pointer;"><code>pointer</code></td>
   <td>cursor used when over links (typically a hand)</td>
  </tr>
  <tr>
   <td style="cursor: progress;"><code>progress</code></td>
   <td>cursor indicating that the program is busy in the background but the user can still interact with the interface (unlike for <code>wait</code>)</td>
  </tr>
  <tr>
   <td style="cursor: wait;"><code>wait</code></td>
   <td>cursor indicating the program is busy (sometimes an hourglass or a watch)</td>
  </tr>
  <tr>
   <td rowspan="4">Selection</td>
   <td style="cursor: cell;"><code>cell</code></td>
   <td>cursor indicating that cells can be selected</td>
  </tr>
  <tr>
   <td style="cursor: crosshair;"><code>crosshair</code></td>
   <td>cross cursor, often used to indicate selection in a bitmap</td>
  </tr>
  <tr>
   <td style="cursor: text;"><code>text</code></td>
   <td>cursor indicating text can be selected (typically an I-beam)</td>
  </tr>
  <tr>
   <td style="cursor: vertical-text;"><code>vertical-text</code></td>
   <td>cursor indicating that vertical text can be selected (typically a sideways I-beam)</td>
  </tr>
  <tr>
   <td rowspan="5">Drag and drop</td>
   <td style="cursor: alias;"><code>alias</code></td>
   <td>cursor indicating an alias or shortcut is to be created</td>
  </tr>
  <tr>
   <td style="cursor: copy;"><code>copy</code></td>
   <td>cursor indicating that something can be copied</td>
  </tr>
  <tr>
   <td style="cursor: move;"><code>move</code></td>
   <td>the hovered object may be moved</td>
  </tr>
  <tr>
   <td style="cursor: no-drop;"><code>no-drop</code></td>
   <td>cursor showing that a drop is not allowed at the current location</td>
  </tr>
  <tr>
   <td style="cursor: not-allowed;"><code>not-allowed</code></td>
   <td>cursor showing that something cannot be done</td>
  </tr>
  <tr>
   <td rowspan="15">Resize &amp; scrolling</td>
   <td style="cursor: all-scroll;"><code>all-scroll</code></td>
   <td>cursor showing that something can be scrolled in any direction (panned)</td>
  </tr>
  <tr>
   <td style="cursor: col-resize;"><code>col-resize</code></td>
   <td>cursor for resizing columns horizontally</td>
  </tr>
  <tr>
   <td style="cursor: e-resize;"><code>e-resize</code></td>
   <td>cursor for resizing the right edge of a box</td>
  </tr>
  <tr>
   <td style="cursor: ew-resize;"><code>ew-resize</code></td>
   <td>cursor for resizing left or right</td>
  </tr>
  <tr>
   <td style="cursor: n-resize;"><code>n-resize</code></td>
   <td>cursor for resizing the top edge of a box</td>
  </tr>
  <tr>
   <td style="cursor: ne-resize;"><code>ne-resize</code></td>
   <td>cursor for resizing the top right corner of a box</td>
  </tr>
  <tr>
   <td style="cursor: nesw-resize;"><code>nesw-resize</code></td>
   <td>cursor for resizing in the top-right or bottom-left directions</td>
  </tr>
  <tr>
   <td style="cursor: ns-resize;"><code>ns-resize</code></td>
   <td>cursor for resizing up or down</td>
  </tr>
  <tr>
   <td style="cursor: nw-resize;"><code>nw-resize</code></td>
   <td>cursor for resizing the top left corner of a box</td>
  </tr>
  <tr>
   <td style="cursor: nwse-resize;"><code>nwse-resize</code></td>
   <td>cursor for resizing in the top-left or bottom-right directions</td>
  </tr>
  <tr>
   <td style="cursor: row-resize;"><code>row-resize</code></td>
   <td>cursor for resizing rows vertically</td>
  </tr>
  <tr>
   <td style="cursor: s-resize;"><code>s-resize</code></td>
   <td>cursor for resizing the bottom edge of a box</td>
  </tr>
  <tr>
   <td style="cursor: se-resize;"><code>se-resize</code></td>
   <td>cursor for resizing the bottom right corner of a box</td>
  </tr>
  <tr>
   <td style="cursor: sw-resize;"><code>sw-resize</code></td>
   <td>cursor for resizing the bottom left corner of a box</td>
  </tr>
  <tr>
   <td style="cursor: w-resize;"><code>w-resize</code></td>
   <td>cursor for resizing the left edge of a box</td>
  </tr>
 </tbody>
</table>

<h4 id="Extended_Gecko_CSS_values" name="Extended_Gecko_CSS_values">Extended Gecko CSS values</h4>

<table class="standard-table">
 <tbody>
  <tr>
   <th>CSS name</th>
   <th>Description</th>
   <th>Deprecation</th>
  </tr>
  <tr>
   <td style="cursor: -moz-alias;"><code><a href="es/CSS/-moz-alias">-moz-alias</a></code></td>
   <td>replaced by standard value <code>alias</code> as described in the previous table</td>
   <td>Gecko 1.8a6</td>
  </tr>
  <tr>
   <td style="cursor: -moz-cell;"><code><a href="es/CSS/-moz-cell">-moz-cell</a></code></td>
   <td>replaced by standard value <code>cell</code> as described in the previous table</td>
   <td>Gecko 1.8a6</td>
  </tr>
  <tr>
   <td style="cursor: -moz-context-menu;"><code><a href="es/CSS/-moz-context-menu">-moz-context-menu</a></code></td>
   <td>replaced by standard value <code>context-menu</code> as described in the previous table</td>
   <td>Gecko 1.8a6</td>
  </tr>
  <tr>
   <td style="cursor: -moz-copy;"><code><a href="es/CSS/-moz-copy">-moz-copy</a></code></td>
   <td>replaced by standard value <code>copy</code> as described in the previous table</td>
   <td>Gecko 1.8a6</td>
  </tr>
  <tr>
   <td style="cursor: -moz-grab;"><code><a href="es/CSS/-moz-grab">-moz-grab</a></code></td>
   <td>a cursor value that should indicate that an element or an object in a webpage can be grabbed</td>
   <td> </td>
  </tr>
  <tr>
   <td style="cursor: -moz-grabbing;"><code><a href="es/CSS/-moz-grabbing">-moz-grabbing</a></code></td>
   <td>a cursor value that should indicate that an element or an object is currently being grabbed</td>
   <td> </td>
  </tr>
  <tr>
   <td style="cursor: -moz-spinning;"><code><a href="es/CSS/-moz-spinning">-moz-spinning</a></code></td>
   <td>replaced by standard value <code>progress</code> as described in the previous table</td>
   <td>Gecko 1.7.1</td>
  </tr>
  <tr>
   <td style="cursor: -moz-zoom-in;"><code><a href="es/CSS/-moz-zoom-in">-moz-zoom-in</a></code></td>
   <td>used to indicate that an element or an object in a webpage is actually being resized, enlarged or is actually being magnified</td>
   <td> </td>
  </tr>
  <tr>
   <td style="cursor: -moz-zoom-out;"><code><a href="es/CSS/-moz-zoom-out">-moz-zoom-out</a></code></td>
   <td>used to indicate that an element or an object in a webpage is actually being resized, reduced or is actually being zoomed out</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h3 id="Examples" name="Examples">Examples</h3>

<p><a href="/samples/cssref/cursor.html">Ver El Ejemplo Vivo</a></p>

<pre>Inline:

&lt;span style="cursor: crosshair"&gt;Some Text&lt;/span&gt;

External:

.pointer {
	cursor: pointer;
}
.move {
	cursor: move;
}

</pre>

<h3 id="Notes" name="Notes">Notes</h3>

<p>While this property works on older browsers, not all values are fully supported.</p>

<h3 id="Specifications" name="Specifications">Specifications</h3>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/ui.html#propdef-cursor">CSS 2.1</a></li>
 <li><a class="external" href="http://www.w3.org/TR/css3-ui/#cursor">css3-ui</a></li>
</ul>

<h3 id="Browser_compatibility" name="Browser_compatibility">Browser compatibility</h3>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Browser</th>
   <th>Lowest Version (<code>&lt;std-cursor-name&gt;</code>)</th>
   <th>Lowest Version (<code>&lt;url&gt;</code>)</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td>4</td>
   <td>6 (only <code>.cur</code> files)</td>
  </tr>
  <tr>
   <td>Firefox</td>
   <td>1.0</td>
   <td>1.5</td>
  </tr>
  <tr>
   <td>Netscape</td>
   <td>6</td>
   <td>8</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>7</td>
   <td>-</td>
  </tr>
  <tr>
   <td>Konqueror</td>
   <td>3.1</td>
   <td>3.1</td>
  </tr>
  <tr>
   <td>Safari</td>
   <td>1.2</td>
   <td>1.2</td>
  </tr>
  <tr>
   <td>Safari (Win)</td>
   <td>3.0</td>
   <td>3.0</td>
  </tr>
 </tbody>
</table>

<h3 id="See_also" name="See_also">See also</h3>

<p>{{ languages( { "fr": "fr/CSS/cursor", "pl": "pl/CSS/cursor", "en": "en/CSS/cursor" } ) }}</p>
