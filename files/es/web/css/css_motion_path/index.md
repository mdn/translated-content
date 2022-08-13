---
title: CSS Motion Path
slug: Web/CSS/CSS_Motion_Path
translation_of: Web/CSS/CSS_Motion_Path
---
<div>{{CSSRef}}{{seecompattable}}</div>

<p><strong>Motion Path</strong> es un módulo CSS que permite animar cualquier objeto gráfico a lo largo de una ruta personalizada.</p>

<p>La idea es que cuando se deseaba animar un elemento que se movía a lo largo de un “path”, anteriormente solo teniamos las propiedades de animación, posición, etc. a nuestra disposición, lo que no era ideal y solo permitía movimientos simples. Con {{cssxref("offset-path")}} puedes definir un "path" específico  de cualquier forma que se quiera. Luego se animará a lo largo de ese "path" animando {{cssxref("offset-distance")}}, y variar la rotación en algún punto usando {{cssxref("offset-rotate")}}.</p>

<h2 id="Ejemplo_básico">Ejemplo básico</h2>

<pre class="brush: html">&lt;div id="motion-demo"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css">#motion-demo {
  offset-path: path('M20,20 C20,100 200,0 200,100');
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}</pre>

<p>{{EmbedLiveSample('Basic_example', '100%', 150)}}</p>

<h2 id="Referéncia">Referéncia</h2>

<h3 id="Propiedades">Propiedades</h3>

<div class="index">
<ul>
 <li>{{cssxref("offset")}}</li>
 <li>{{cssxref("offset-anchor")}}</li>
 <li>{{cssxref("offset-distance")}}</li>
 <li>{{cssxref("offset-path")}}</li>
 <li>{{cssxref("offset-position")}}</li>
 <li>{{cssxref("offset-rotate")}}</li>
</ul>
</div>

<h2 id="Espedificaciones">Espedificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th>Specification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Motion Path Level 1')}}</td>
   <td>{{Spec2('Motion Path Level 1')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_de_Browsers">Compatibilidad de Browsers</h2>

<h3 id="offset_property"><code>offset</code> property</h3>

<div>


<p>{{Compat("css.properties.offset-path")}}</p>
</div>
