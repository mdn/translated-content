---
title: animateTransform
slug: Web/SVG/Element/animateTransform
tags:
  - Animação
  - Elemento
  - SVG
translation_of: Web/SVG/Element/animateTransform
---
<div>{{SVGRef}}</div>

<p>O elemento <code>animateTransform</code> anima a transformação de um atributo em um elemento alvo, permitindo assim as animações controlarem a movimentação, escala, rotação e/ou inclinação.</p>

<h2 id="Contexto_de_uso">Contexto de uso</h2>

<p>{{svginfo}}</p>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush: html">&lt;?xml version="1.0"?&gt;
&lt;svg width="120" height="120"  viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg" version="1.1"
     xmlns:xlink="http://www.w3.org/1999/xlink" &gt;

    &lt;polygon points="60,30 90,90 30,90"&gt;
        &lt;animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/&gt;
    &lt;/polygon&gt;
&lt;/svg&gt;</pre>

<p><strong>Resultado</strong></p>

<p>{{ EmbedLiveSample('Exemplo','120','120') }}</p>

<h2 id="Atributos">Atributos</h2>

<h3 id="Atributos_globais">Atributos globais</h3>

<ul>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de processamento condicional" title="en-US/docs/Web/SVG/Attribute#Atributos de processamento condicional">Atributos de processamento condicional</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos principais" title="en-US/docs/Web/SVG/Attribute#Atributos principais">Atributos principais</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de eventos da animação" title="en-US/docs/Web/SVG/Attribute#Atributos de eventos da animação">Atributos de eventos da animação</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos XLink" title="en-US/docs/Web/SVG/Attribute#Atributos XLink">Atributos XLink</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de destino do atributo da animação" title="en-US/docs/Web/SVG/Attribute#Atributos de destino do atributo da animação">Atributos de destino do atributo da animação</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de cronometragem da animação" title="en-US/docs/Web/SVG/Attribute#Atributos de cronometragem da animação">Atributos de cronometragem da animação</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de valor de animação" title="en-US/docs/Web/SVG/Attribute#Atributos de valor de animação">Atributos de valor de animação</a> »</li>
 <li><a href="/pt-BR/docs/Web/SVG/Attribute#Atributos de animação adicionais" title="en-US/docs/Web/SVG/Attribute#Atributos de animação adicionais">Atributos de animação adicionais</a> »</li>
 <li>{{ SVGAttr("externalResourcesRequired") }}</li>
</ul>

<h3 id="Atributos_específicos">Atributos específicos</h3>

<ul>
 <li>{{ SVGAttr("by") }}</li>
 <li>{{ SVGAttr("from") }}</li>
 <li>{{ SVGAttr("to") }}</li>
 <li>{{ SVGAttr("type") }}</li>
</ul>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Este elemento implementa a interface do <code><a href="/pt-BR/docs/DOM/SVGAnimateTransformElement" title="en/DOM/SVGAnimateTransformElement">SVGAnimateTransformElement</a></code>.</p>
