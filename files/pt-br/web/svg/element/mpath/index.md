---
title: mpath
slug: Web/SVG/Element/mpath
tags:
  - Animação
  - Caminho
  - Contorno
  - Elemento
  - Movimento
  - Referencia
  - SVG
translation_of: Web/SVG/Element/mpath
---
<div>{{SVGRef}}</div>

<p>O sub elemento <code>mpath</code> do elemento {{ SVGElement("animateMotion") }} fornece a habilidade de referenciar um elemento externo {{ SVGElement("path") }} como uma definição de um caminho de movimento.</p>

<h2 id="Contexto_de_uso">Contexto de uso</h2>

<p>{{svginfo}}</p>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush: html">&lt;svg width="100%" height="100%"  viewBox="0 0 500 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink" &gt;

  &lt;rect x="1" y="1" width="498" height="298"
        fill="none" stroke="blue" stroke-width="2" /&gt;

  &lt;!-- Desenha o contorno da trajetória de movimento em azul, ao longo, com três pequenos círculos: inicio, meio e fim. --&gt;
  &lt;path id="path1" d="M100,250 C 100,50 400,50 400,250"
        fill="none" stroke="blue" stroke-width="7.06"  /&gt;
  &lt;circle cx="100" cy="250" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="250" cy="100" r="17.64" fill="blue"  /&gt;
  &lt;circle cx="400" cy="250" r="17.64" fill="blue"  /&gt;

  &lt;!-- Aqui temos um triângulo que andará sobre o caminho do movimento.
       Define-se com uma orientação vertical com base no triângulo horizontalmente centralizado logo acima da origem. --&gt;
  &lt;path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
        fill="yellow" stroke="red" stroke-width="7.06"  &gt;
    &lt;!-- Define o caminho de movimento da animação --&gt;
    &lt;animateMotion dur="6s" repeatCount="indefinite" rotate="auto" &gt;
       &lt;mpath xlink:href="#path1"/&gt;
    &lt;/animateMotion&gt;
  &lt;/path&gt;
&lt;/svg&gt;
</pre>

<p>Resultado:</p>

<p>{{EmbedLiveSample("Example",250,165)}}</p>

<h2 id="Atributos">Atributos</h2>

<h3 id="Atributos_globais">Atributos globais</h3>

<ul>
 <li><a href="/pt-BR/SVG/Attribute#Core" title="en/SVG/Attribute#Core">Atributos principais</a> »</li>
 <li><a href="/pt-BR/SVG/Attribute#XLink" title="en/SVG/Attribute#XLink">Atributos XLink</a> »</li>
 <li>{{ SVGAttr("externalResourcesRequired") }}</li>
</ul>

<h3 id="Atributos_específicos">Atributos específicos</h3>

<ul>
 <li>{{ SVGAttr("xlink:href") }}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Este elemento implementa a interface do <code><a href="/pt-BR/DOM/SVGMPathElement" title="en/DOM/SVGMPathElement">SVGMPathElement</a></code>.</p>

<h2 id="Relacionado">Relacionado</h2>

<ul>
 <li>{{ SVGElement("animateMotion") }}</li>
</ul>
