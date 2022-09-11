---
title: rotate()
slug: Web/CSS/transform-function/rotate
translation_of: Web/CSS/transform-function/rotate()
original_slug: Web/CSS/transform-function/rotate()
---
<p>{{CSSRef}}</p>

<p>A função <a href="/en-US/docs/Web/CSS">CSS</a> <strong><code>rotate()</code></strong> define uma transformação que gira um elemento em torno de um ponto fixo no plano 2D, sem deformá-lo. O resultado é um tipo de dados {{cssxref("&lt;transform-function&gt;")}}.</p>

<p><img src="https://mdn.mozillademos.org/files/12113/rotate.png" style="height: 175px; width: 258px;"></p>

<p>O eixo de rotação passa por uma origem, definido pela propriedade CSS {{ cssxref("transform-origin") }}.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<p>A quantidade de rotação criada por <code>rotate()</code> é especificado por um {{cssxref("&lt;angle&gt;")}}. Se positivo, o movimento será no sentido horário; Se negativo, ela será no sentido anti-horário.  Uma rotação de 180° é chamada de <em>point reflection (</em>reflexão do ponto).</p>

<pre class="syntaxbox">rotate(<em>a</em>)
</pre>

<h3 id="Valores">Valores</h3>

<dl>
 <dt><code>a</code></dt>
 <dd>É um {{ cssxref("&lt;angle&gt;") }} representando o ângulo da rotação. Um ângulo positivo indica uma rotação no sentido horário, um ângulo negativo no sentido anti-horário.</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Coordenadas cartesianas em ℝ<sup>2</sup></th>
   <th scope="col">Coordenadas homogêneas em ℝℙ<sup>2</sup></th>
   <th scope="col">Coordenadas cartesianas em ℝ<sup>3</sup></th>
   <th scope="col">Coordenadas homogêneas em ℝℙ<sup>3</sup></th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtr> <mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtr></mtable></mfenced></math></td>
   <td><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="rotated"&gt;Rotated&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Examples", "auto", 180)}}</p>

<h2 id="Compatibilidade_do_navegador">Compatibilidade do navegador</h2>

<p>Por favor, veja o tipo de dados <code><a href="/en-US/docs/Web/CSS/transform-function#Browser_compatibility">&lt;transform-function&gt;</a></code> para informações de compatibilidade.</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li><code><a href="/en-US/docs/Web/CSS/transform-function/rotate3d">rotate3d()</a></code></li>
</ul>
