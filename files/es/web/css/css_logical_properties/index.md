---
title: Propiedades y Valores Lógicos de CSS
slug: Web/CSS/CSS_Logical_Properties
tags:
  - CSS
  - Propiedades lógicas
  - Referencia
  - Valores lógicos
  - Visión general
translation_of: Web/CSS/CSS_Logical_Properties
---
<div>{{CSSRef}}</div>

<p><strong>CSS Logical Properties</strong> (las propiedades lógicas en CSS) son un módulo de <a href="/en-US/docs/Web/CSS"><abbr title="Cascading Stylesheets">CSS</abbr></a> que introduce propiedades y valores lógicos, proporcionando la capacidad de controlar el diseño de forma lógica en vez de la asignación de dimensiones físicas de dirección y dimensión.</p>

<p>Este módulo también define propiedades y valores lógicos para propiedades previamente definidas en <abbr title="Cascading Stylesheets">CSS</abbr> 2.1. Las propiedades lógicas definen una equivalencia a sus propiedades físicas correspondientes.  </p>

<h3 id="Dimensiones_de_bloque_y_en_línea">Dimensiones de bloque y en línea</h3>

<p>Las propiedades y valores lógicos usan los términos abstractos de bloque (<em>block)</em> y en línea (<em>inline)</em> para describir la dirección en la que fluyen. El sentido físico de estos términos depende del <a href="/en-US/docs/Web/CSS/CSS_Writing_Modes">modo de escritura</a>.</p>

<dl>
 <dt><a id="block-dimension" name="block-dimension">Dimensión de bloque</a></dt>
 <dd>Es la dimensión perpendicular al flujo del texto en línea, es decir, la dimensión vertical en un modo de escritura horizontal, y la dimensión horizontal en un modo de escritura vertical. Para el texto estándar en inglés, es la dimensión vertical.</dd>
 <dt><a name="inline-dimension">Dimensión en línea</a></dt>
 <dd>Es la dimensión paralela al flujo del texto en línea, es decir, la dimensión horizontal en un modo de escritura horizontal, y la dimensión vertical en un modo de escritura vertical. Para el texto estándar en inglés, es la dimensión horizontal.</dd>
</dl>

<h2 id="Referencia">Referencia</h2>

<h3 id="Propiedades_para_dimensionamiento">Propiedades para dimensionamiento</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("block-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inline-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("max-block-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("max-inline-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("min-block-size")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("min-inline-size")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h3 id="Propiedades_para_márgenes_bordes_y_relleno">Propiedades para márgenes, bordes y relleno</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("border-block")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-end-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-end-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-end-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-start-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-start-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-start-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-block-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-color")}} <span style="white-space: nowrap;">(<code>logical</code> {{Experimental_Inline}} palabra clave)</span></li>
 <li>{{CSSxRef("border-inline")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-end-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-end-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-end-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-start-color")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-start-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-start-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-style")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-inline-width")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-start-start-radius")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-start-end-radius")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-end-start-radius")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-end-end-radius")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("border-style")}} <span style="white-space: nowrap;">(<code>logical</code> {{Experimental_Inline}} palabra clave)</span></li>
 <li>{{CSSxRef("border-width")}} <span style="white-space: nowrap;">(<code>logical</code> {{Experimental_Inline}} palabra clave)</span></li>
 <li>{{CSSxRef("margin")}} <span style="white-space: nowrap;">(<code>logical</code> {{Experimental_Inline}} palabra clave)</span></li>
 <li>{{CSSxRef("margin-block")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("margin-block-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("margin-block-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("margin-inline")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("margin-inline-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("margin-inline-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding")}} <span style="white-space: nowrap;">(<code>logical</code> {{Experimental_Inline}} palabra clave)</span></li>
 <li>{{CSSxRef("padding-block")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding-block-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding-block-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding-inline")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding-inline-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("padding-inline-start")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h3 id="Propiedades_para_flotantes_y_posicionamiento">Propiedades para flotantes y posicionamiento</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("clear")}} (<code style="white-space: nowrap;">inline-end</code> {{Experimental_Inline}} y <span style="white-space: nowrap;"><code>inline-start</code> {{Experimental_Inline}} palabras claves)</span></li>
 <li>{{CSSxRef("float")}} (<code style="white-space: nowrap;">inline-end</code> {{Experimental_Inline}} y <span style="white-space: nowrap;"><code>inline-start</code> {{Experimental_Inline}} palabras claves)</span></li>
 <li>{{CSSxRef("inset")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-block")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-block-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-block-start")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-inline")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-inline-end")}} {{Experimental_Inline}}</li>
 <li>{{CSSxRef("inset-inline-start")}} {{Experimental_Inline}}</li>
</ul>
</div>

<h3 id="Otras_propiedades">Otras propiedades</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("caption-side")}} (<code style="white-space: nowrap;">inline-end</code> {{Experimental_Inline}} y <span style="white-space: nowrap;"><code>inline-start</code> {{Experimental_Inline}} palabras claves)</span></li>
 <li>{{CSSxRef("resize")}} {{Experimental_Inline}} (<code>block</code> {{Experimental_Inline}} y <span style="white-space: nowrap;"><code>inline</code> {{Experimental_Inline}} palabras claves)</span></li>
 <li>{{CSSxRef("text-align")}} (<code>end</code> {{Experimental_Inline}} y <span style="white-space: nowrap;"><code>start</code> {{Experimental_Inline}} palabras claves)</span></li>
</ul>
</div>

<h3 id="Propiedades_obsoletas">Propiedades obsoletas</h3>

<div class="index">
<ul>
 <li>{{CSSxRef("offset-block-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} <span style="white-space: nowrap;">(ahora {{CSSxRef("inset-block-end")}} {{Experimental_Inline}})</span></li>
 <li>{{CSSxRef("offset-block-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} <span style="white-space: nowrap;">(ahora {{CSSxRef("inset-block-start")}} {{Experimental_Inline}})</span></li>
 <li>{{CSSxRef("offset-inline-end")}} {{Non-standard_Inline}} {{Deprecated_Inline}} <span style="white-space: nowrap;">(ahora {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}})</span></li>
 <li>{{CSSxRef("offset-inline-start")}} {{Non-standard_Inline}} {{Deprecated_Inline}} <span style="white-space: nowrap;">(ahora {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}})</span></li>
</ul>
</div>

<h2 id="Guías">Guías</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts">Conceptos básicos de propiedades y valores lógicos</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing">Propiedades Lógicas para dimensionamiento</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing">Propiedades Lógicas para márgenes, bordes y relleno</a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Logical_Properties/Sizing">Propiedades Lógicas para flotantes y posicionamiento</a></li>
</ul>

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
   <td>{{SpecName("CSS Logical Properties")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>Definición inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_en_los_Navegadores">Compatibilidad en los Navegadores</h2>

<p>En general:</p>

<ul>
 <li>Firefox tiene soporte para las propiedades asignadas — donde hay una directa asignación desde la versión física a la versión lógica.</li>
 <li>Chrome, desde la versión 69, tiene soporte para las propiedades asignadas.</li>
 <li>Edge actualmente no tiene soporte.</li>
 <li>Firefox 66 introduce soporte para dos valores abreviados.</li>
</ul>

<p>Mira la página de la propiedad en específico para tener una información más completa sobre su compatibilidad.</p>
