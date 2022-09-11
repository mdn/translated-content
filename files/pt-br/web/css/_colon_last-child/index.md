---
title: ':last-child'
slug: 'Web/CSS/:last-child'
tags:
  - CSS
  - CSS Pseudo-classe
  - Layout
  - Reference
  - Referencia
  - Web
translation_of: 'Web/CSS/:last-child'
---
<div>{{ CSSRef() }}</div>

<h2 id="Summary" name="Summary">Resumo</h2>

<p>A CSS <a href="/en-US/docs/CSS/Pseudo-classes">pseudo-classe</a> <code>:last-child</code> representa qualquer elemento que é o último filho de seu elemento pai.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox">elemento:last-child { <em>propriedades de estilo</em> }</pre>

<h2 id="Example" name="Example">Exemplo</h2>

<h3 id="Conteúdo_HTML">Conteúdo HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;Esse item não é afetado pelo estilo.&lt;/li&gt;
  &lt;li&gt;Esse também não.&lt;/li&gt;
  &lt;li&gt;Esse item é! :)&lt;/li&gt;
&lt;/ul&gt;</pre>

<h3 id="Conteúdo_CSS">Conteúdo CSS</h3>

<pre class="brush: css">li:last-child {
    background-color: lime;
}</pre>

<p>{{EmbedLiveSample('Example', '100%', 100)}}</p>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSS4 Selectors', '#last-child', ':last-child') }}</td>
   <td>{{ Spec2('CSS4 Selectors') }}</td>
   <td>Sem mudança.</td>
  </tr>
  <tr>
   <td>{{ SpecName('CSS3 Selectors', '#last-child', ':last-child') }}</td>
   <td>{{ Spec2('CSS3 Selectors') }}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Compatibilidade de navegadores</h2>

{{Compat("css.selectors.last-child")}}

<h2 id="See_also" name="See_also">Veja também</h2>

<ul>
 <li>{{cssxref(":first-child")}}</li>
 <li>{{cssxref(":nth-child")}}</li>
 <li>{{cssxref(":last-of-type")}}</li>
</ul>
