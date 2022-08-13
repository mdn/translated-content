---
title: Introducción al Modelo de Caja de CSS
slug: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
tags:
  - CSS
  - Guía
  - Modelo de Caja
  - Referencia
translation_of: Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model
original_slug: Web/CSS/CSS_Modelo_Caja/Introducción_al_modelo_de_caja_de_CSS
---
<div>{{CSSRef}}</div>

<p><span id="result_box" lang="es">Al diseñar un documento, el motor de representación del navegador representa cada elemento como un cuadro rectangular según el estándar</span><span lang="es"><span> <strong>modelo de caja de CSS</strong>.</span> <span>CSS determina el tamaño, la posición y las propiedades (color, fondo, tamaño del borde, etc.) de estos cuadros.</span></span></p>

<p><span id="result_box" lang="es"><span>Cada caja se compone de cuatro partes (o áreas), definidas por sus respectivos límites: el <em>límite del contenido</em>, el <em>límite del relleno (padding)</em>, el <em>límite del borde</em> y el <em>límite del margen</em>.</span></span></p>

<p><img alt="CSS Box model" src="https://mdn.mozillademos.org/files/8685/boxmodel-(3).png" style="height: 384px; width: 548px;"></p>

<p><a name="content-area"></a><span id="result_box" lang="es"><span>El <strong>área de contenido</strong>, delimitada por el límite del contenido, contiene el contenido "real" del elemento, como lo puede ser texto, imagen o un reproductor de video.</span> <span>Sus dimensiones son el <em>ancho del contenido</em> (o el <em>ancho de la caja de contenido</em>) y la <em>altura del contenido</em> (o la <em>altura de la caja de contenido</em>).</span> <span>A menudo tiene un color de fondo o una imagen de fondo.</span></span></p>

<p><span id="result_box" lang="es"><span>Si la propiedad </span></span>{{cssxref("box-sizing")}}<span lang="es"><span> está configurada en </span></span><code>content-box</code><span lang="es"><span> (default), el tamaño del área de contenido se puede definir explícitamente con las propiedades de </span></span>{{cssxref("width")}}<span lang="es"><span>, </span></span>{{cssxref("min-width")}}<span lang="es"><span>, </span></span>{{cssxref("max-width")}}<span lang="es"><span>, </span></span>{{ cssxref("height")}}<span lang="es"><span>, </span></span>{{cssxref("min-height")}}<span lang="es"><span> y </span></span>{{cssxref("max-height")}}<span lang="es"><span>.</span></span></p>

<p><a name="padding-area"></a><span id="result_box" lang="es"><span>El <strong>área de relleno</strong> (padding), delimitada por el límite del relleno, extiende el área de contenido para incluir el relleno del elemento.</span> <span>Sus dimensiones son el <em>ancho de la caja de relleno</em> y la <em>altura de la caja de relleno</em>.</span> <span>Cuando el área de contenido tiene un fondo, se extiende dentro del relleno.</span></span></p>

<p><span id="result_box" lang="es"><span>El espesor del relleno está determinado por </span></span><span lang="es"><span>las propiedades </span></span>{{cssxref("padding-top")}}<span lang="es"><span>, </span></span>{{cssxref("padding-right")}}<span lang="es"><span>, </span></span>{{cssxref("padding-bottom")}}<span lang="es"><span>, </span></span>{{cssxref("padding-left")}}<span lang="es"><span>, y la propiedad abreviada </span></span>{{cssxref("padding")}}<span lang="es"><span>.</span></span></p>

<p><a name="border-area"></a><span id="result_box" lang="es"><span>El <strong>área del borde</strong>, delimitada por el límite del borde, extiende el área de relleno para incluir los bordes del elemento.</span> <span>Sus dimensiones son el <em>ancho de la caja del borde</em> y la <em>altura de la caja del borde</em>.</span></span></p>

<p><span id="result_box" lang="es"><span>El espesor de los bordes está determinado por las propiedades {{cssxref("border-width")}} y la propiedad abreviada {{cssxref("border")}}.</span> <span>Si la propiedad {{cssxref("box-sizing")}} se establece en </span></span><code>border-box</code><span lang="es"><span>, el tamaño del área del borde se puede definir explícitamente con las propiedades {{cssxref("width")}}, {{cssxref("min-</span> <span>width")}}, {{cssxref("max-width")}}, {{cssxref("height")}}, {{cssxref("min-height")}}, y {{cssxref("max</span><span>-height")}}.</span></span></p>

<p><a name="margin-area"></a><span id="result_box" lang="es"><span>El <strong>área del margen</strong>, delimitada por el límite del margen, extiende el área del borde para incluir un área vacía utilizada para separar el elemento de sus vecinos.</span> <span>Sus dimensiones son el <em>ancho de la caja del margen</em> y la <em>altura de la caja del margen</em>.</span></span></p>

<p><span id="result_box" lang="es"><span>El tamaño del área del margen está determinado por las propiedades </span></span>{{cssxref("margin-top")}}<span lang="es"><span>, {{cssxref("margin-right")}}, {{cssxref ("margin-bottom")}}, {</span> <span>{cssxref("margin-left")}}, y la propiedad abreviada {{cssxref ("margin")}}.</span> <span>Cuando se produce el</span></span> <a href="/en/CSS/margin_collapsing" title="en/CSS/margin_collapsing">colapso del margen</a><span lang="es"><span>, el área del margen no está claramente definida ya que los márgenes se comparten entre las cajas.</span></span></p>

<p><span id="result_box" lang="es"><span>Finalmente, ten en cuenta que para elementos en línea no reemplazados, la cantidad de espacio ocupado (la contribución a la altura de la línea) está determinada por la propiedad {{cssxref ('line-height')}}, aunque los bordes y</span> <span>el relleno todavía se muestran alrededor del contenido.</span></span></p>

<h2 id="Especificación">Especificación</h2>

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
   <td>{{ SpecName("CSS2.1","box.html#box-dimensions")}}</td>
   <td>{{ Spec2('CSS2.1') }}</td>
   <td><span id="result_box" lang="es"><span>Aunque está redactado con más precisión, no hay cambio práctico.</span></span></td>
  </tr>
  <tr>
   <td>{{ SpecName("CSS1","#formatting-model")}}</td>
   <td>{{ Spec2('CSS1') }}</td>
   <td><span class="short_text" id="result_box" lang="es"><span>Definición inicial</span></span></td>
  </tr>
 </tbody>
</table>

<h2 id="Vea_también">Vea también</h2>

<ul>
 <li>{{css_key_concepts}}</li>
 <li>Propiedades CSS relacionadas: {{ cssxref("box-sizing") }}, {{ cssxref("background-clip") }}, {{ cssxref("height") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("width") }}, {{ cssxref("max-height") }}, {{ cssxref("min-height") }}, {{ cssxref("padding") }}, {{ cssxref("padding-top") }}, {{ cssxref("padding-right") }}, {{ cssxref("padding-bottom") }}, {{ cssxref("padding-left") }}, {{ cssxref("border") }}, {{ cssxref("border-top") }}, {{ cssxref("border-right") }}, {{ cssxref("border-bottom") }}, {{ cssxref("border-left") }}, {{ cssxref("border-width") }}, {{ cssxref("border-top-width") }}, {{ cssxref("border-right-width") }}, {{ cssxref("border-bottom-width") }}, {{ cssxref("border-left-width") }}, {{ cssxref("margin") }}, {{ cssxref("margin-top") }}, {{ cssxref("margin-right") }}, {{ cssxref("margin-bottom") }}, {{ cssxref("margin-left") }}</li>
</ul>
