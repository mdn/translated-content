---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
tags:
  - API
  - CSSOM View
  - NeedsCompatTable
  - NeedsMarkupWork
  - NeedsSpecTable
  - Referencia
  - metodo
translation_of: Web/API/Window/scrollTo
---
<div>{{ APIRef }}</div>

<h2 id="Summary" name="Summary">Resumo</h2>

<p>Realiza a rolagem para um conjunto de coordenadas em particular em um documento.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox"><code>window.scrollTo(<em>x-coord</em>, <em>y-coord</em>)</code></pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<ul>
 <li><code>x-coord</code> é o pixel do eixo horizontal do documento que você quer exibir no canto superior esquerdo.</li>
 <li><code>y-coord</code> é o pixel do eixo vertical do documento que você quer exibir no canto superior esquerdo.</li>
</ul>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush:js">window.scrollTo( 0, 1000 );</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Essa função é efetivamente a mesma que <a href="/en-US/docs/DOM/Window.scroll">window.scroll</a>. Para rolagem relativa, veja <a href="/en-US/docs/DOM/Window.scrollBy">window.scrollBy</a>, <a href="/en-US/docs/DOM/Window.scrollByLines">window.scrollByLines</a> e <a href="/en-US/docs/DOM/Window.scrollByPages">window.scrollByPages</a>.</p>

<h2 id="Specification" name="Specification">Especificações</h2>

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
   <td>{{ SpecName('CSSOM View', '#dom-window-scroll', 'window.scroll()') }}</td>
   <td>{{ Spec2('CSSOM View') }}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>
