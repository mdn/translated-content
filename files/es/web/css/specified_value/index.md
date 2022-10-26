---
title: Valor especificado
slug: Web/CSS/specified_value
tags:
  - CSS
  - Referencia CSS
translation_of: Web/CSS/specified_value
---
<p>{{CSSRef}}</p>

<p>El <strong>valor especificado</strong> (<strong>specified value</strong>) de una propiedad CSS es establecido de una de las siguientes maneras:</p>

<ol>
 <li>Si la hoja de estilos del documento tiene un valor especificado para la propiedad, éste será usado. Por ejemplo, si la propiedad {{cssxref("color")}} es establecida con valor <code>green</code>, el color del texto del elemento que corresponda será verde.</li>
 <li>Si la hoja de estilos del documento no tiene un valor especificado para la propiedad, se heredará del elemento padre (si es posible). Por ejemplo, si tenemos un párrafo ({{HTMLElement("p")}}) dentro de un {{HTMLElement("div")}}, y el {{HTMLElement("div")}} tiene el valor de su propiedad <code>font</code> como "Arial", y el {{HTMLElement("p")}} no tiene definida la propiedad <code>font</code>, se heredará la fuente Arial.</li>
 <li>Si ninguna de las anteriores está disponible, se aplica el valor inicial del elemento segun la especificación CSS.</li>
</ol>

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
   <td>{{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="/es/docs/Web/CSS/Referencia_CSS">Referencia CSS</a></li>
 <li>{{CSS_key_concepts}}</li>
</ul>
