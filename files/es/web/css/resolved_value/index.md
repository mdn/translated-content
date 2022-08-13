---
title: Valor resuelto
slug: Web/CSS/resolved_value
tags:
  - CSS
  - Referencia CSS
translation_of: Web/CSS/resolved_value
---
<div>{{cssref}}</div>

<p>El <strong>valor resuelto</strong> (<strong>resolved value</strong>) de una propiedad CSS es el valor devuelto por {{domxref("Window.getComputedStyle", "getComputedStyle()")}}. Para la mayoría de las propiedades, esto es el {{cssxref("computed_value", "valor calculado") }}, pero para algunas propiedades antiguas (incluyendo {{cssxref("width")}} y {{cssxref("height")}}), éste es el {{cssxref("used_value", "valor usado")}}. Véase el enlace a la especificación a continuación para más detalles por propiedad.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estatus</th>
   <th scope="col">Comentarios</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSSOM", "#resolved-values", "resolved value")}}</td>
   <td>{{Spec2("CSSOM")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="/es/docs/Web/CSS/Referencia_CSS">Referencia CSS</a></li>
 <li>{{CSS_key_concepts}}</li>
 <li>{{domxref("window.getComputedStyle")}}</li>
</ul>
