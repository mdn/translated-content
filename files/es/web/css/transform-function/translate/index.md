---
title: translate()
slug: Web/CSS/transform-function/translate
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Función CSS
  - Referencia
translation_of: Web/CSS/transform-function/translate()
original_slug: Web/CSS/transform-function/translate()
---
<div>{{CSSRef}}</div>

<p>La function de <a href="/en-US/docs/Web/CSS">CSS</a> <strong><code>translate()</code></strong> recoloca un elemento en el eje horizontal y/o vertical. Su resultado es de tipo {{cssxref("&lt;transform-function&gt;")}}.</p>

<p><img src="https://mdn.mozillademos.org/files/12121/translate.png" style="height: 195px; width: 249px;"></p>

<p>Esta transformacion esta compuesta por un vector bidimensional cuyas coordenadas definen cuanto se movera el elemente en cada dirección.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<p>La function <code>translate()</code> esta especificada con uno o dos valores.</p>

<pre class="syntaxbox notranslate">translate(tx)

translate(tx, ty)
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>tx</code></dt>
 <dd>Es un {{cssxref("&lt;length&gt;")}} que representa la absisa (coordenada x) del vector de translación.</dd>
 <dt><code>ty</code></dt>
 <dd>Es un {{cssxref("&lt;length&gt;")}} que representa las ordenadas (coordenada y) del vector de translación. Si no se especifica, su valor es 0. Por ejemplo, <code>translate(2)</code> es equivalente a <code>translate(2, 0)</code>.</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Coordenadas cartesianas en ℝ<sup>2</sup></th>
   <th scope="col">Coordenadas homogeneas en ℝℙ<sup>2</sup></th>
   <th scope="col">
    <p>Coordenadas cartesianas en ℝ<sup>3</sup></p>
   </th>
   <th scope="col">Coordenadas homogeneas en ℝℙ<sup>3</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="1" rowspan="2">
    <p>Una translación no es una transformación lineal en ℝ<sup>2</sup> y no puede ser representada usando una matriz de coordenadas cartesianas.</p>
   </td>
   <td><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 0 0 1 tx ty]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Translación_en_un_solo_eje">Translación en un solo eje</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Estático&lt;/div&gt;
&lt;div class="moved"&gt;Movido&lt;/div&gt;
&lt;div&gt;Estático&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px); /* Equivalente a translateX(10px) */
  background-color: pink;
}
</pre>

<h4 id="Resultado">Resultado</h4>

<p>{{EmbedLiveSample("Using_a_single-axis_translation", 250, 250)}}</p>

<h3 id="Translación_combinada_en_los_ejes_X_e_Y">Translación combinada en los ejes X e Y</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Estático&lt;/div&gt;
&lt;div class="moved"&gt;Movido&lt;/div&gt;
&lt;div&gt;Estático&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
</pre>

<h4 id="Resultado_2">Resultado</h4>

<p>{{EmbedLiveSample("Combining_y-axis_and_x-axis_translation", 250, 250)}}</p>

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
   <td>{{SpecName('CSS3 Transforms', '#funcdef-transform-translate', 'translate()')}}</td>
   <td>{{Spec2('CSS3 Transforms')}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<p>Ver el tipo de datos <code><a href="/en-US/docs/Web/CSS/transform-function#Browser_compatibility">&lt;transform-function&gt;</a></code> para la información de compatibilidad.</p>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
</ul>
