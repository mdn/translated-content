---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
translation_of: Web/API/Window/scrollBy
---
<p>{{ APIRef() }}</p>

<h2 id="Summary" name="Summary">Resumo</h2>

<p>Desloca o documento dentro da janela pelo valor fornecido.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="eval">window.scrollBy(<em>X</em>, <em>Y</em>);
</pre>

<h3 id="Parameters" name="Parameters">Parâmetros</h3>

<ul>
 <li><code>X</code> é o deslocamento em pixels (px) para a rolagem horizontalmente.</li>
 <li><code>Y</code> é o deslocamento em pixels (px) para a rolagem verticalmente.</li>
</ul>

<p>Coordenadas positivas deslocarão para a direita e para baixo. Coordenadas negativas deslocarão para a esquerda e para cima.</p>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="eval">// Desloca a altura interna da janela
window.scrollBy(0, window.innerHeight);
</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p><a href="/en-US/docs/DOM/Window.scrollBy">window.scrollBy</a> desloca uma quantidade específical enquanto <a href="/en-US/docs/DOM/Window.scroll">window.scroll</a> desloca para uma posição absoluta no documento. Veja Também <a href="/en-US/docs/DOM/Window.scrollByLines">window.scrollByLines</a>, <a href="/en-US/docs/DOM/Window.scrollByPages">window.scrollByPages</a></p>

<h2 id="Specification" name="Specification">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{ SpecName('CSSOM View', '#dom-window-scrollby', 'window.scrollBy()') }}</td>
   <td>{{ Spec2('CSSOM View') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>
