---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
tags:
  - API
  - CSSOM View
  - Método(2)
  - Referência(2)
translation_of: Web/API/Element/getBoundingClientRect
---
<div>{{APIRef("DOM")}}</div>

<p>O método <code><strong>Element.getBoundingClientRect() </strong>retorna o tamanho de um elemento e sua posição relativa ao <em>viewport</em>.</code></p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"><var>rectObject</var> = <var>object</var>.getBoundingClientRect();
</pre>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>O valor de retorno é o objeto <a href="/en-US/docs/XPCOM_Interface_Reference/nsIDOMClientRect">DOMRect</a> que é a uniāo dos retângulos retornados por <a href="/en-US/docs/DOM/element.getClientRects"><code>getClientRects()</code></a> para o elemento, ou seja, os atributos border-boxes do CSS associados ao elemento.</p>

<p>O valor retornado é um objeto <code>DOMRect</code>, que contém as propriedades apenas-leitura <code>left</code>, <code>top</code>, <code>right</code> e <code>bottom</code> que descrevem o border-box em pixels. <code>top</code> e <code>left</code> são relativos às propriedades top-left do <em>viewport</em>.</p>

<div class="note">
<p><strong>Nota:</strong> {{Gecko("1.9.1")}} adiciona as propriedades <code>width</code> e <code>height</code> ao objeto <code>DOMRect</code>.</p>
</div>

<p>Border-boxes vazias são completamente ignoradas. Se todos os border-boxes do elemento são vazias, então é retornado o retângulo com width e height como zero, e no lugar de <code>top</code> e <code>left</code> determina-se o top-left do border-box relacionado ao primeiro box CSS (determinado pela ordem do conteúdo) em relaçāo ao elemento.</p>

<p>A quantidade de scrolling que foi feita na área do viewport (ou qualquer outra área de qualquer outro elemento <em>scrollable</em>) é tomada com medida ao computar o delimitador do retângulo. Isso significa que as propriedades <code>top</code> e <code>left</code> mudam seus valores tão logo a posiçāo do scroll for alterada (assim seus valores sāo relativos ao viewport e não são absolutos). Se esse não for o comportamento esperado basta adicionar a posição atual do scroll para as propriedades <code>top</code> e <code>left</code> (via <code>window.scrollX</code> e <code>window.scrollY</code>) para pegar os valores constantes independentemente da posiçāo atual do scroll.</p>

<p>Scripts que requerem uma alta compatibilidade cross-browser podem usar <code>window.pageXOffset</code> e <code>window.pageYOffset</code> ao invés de <code>window.scrollX</code> e <code>window.scrollY.</code> Scripts sem acesso ao <code>window.pageXOffset</code>, <code>window.pageYOffset</code>, <code>window.scrollX</code> e <code>window.scrollY</code> podem usar:</p>

<pre class="brush:js">// Para o scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.ScrollLeft == 'number' ? t : document.body).ScrollLeft
// Para o scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  &amp;&amp; typeof t.ScrollTop == 'number' ? t : document.body).ScrollTop
</pre>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush:js">// rect é um objeto DOMRect com seis propriedades: left, top, right, bottom, width, height
var rect = obj.getBoundingClientRect();
</pre>

<h2 id="Especificaçōes">Especificaçōes</h2>

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
   <td>{{SpecName("CSSOM View", "#dom-element-getboundingclientrect", "Element.getBoundingClientRect()")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td>Definiçāo Inicial</td>
  </tr>
 </tbody>
</table>

<h3 id="Notas">Notas</h3>

<p><code>getBoundingClientRect()</code> foi primeiramente introduzida no modelo de objeto MS IE DHTML.</p>

<p>O valor de retorno de <code>getBoundingClientRect()</code> é <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze">frozen</a>.</p>

<h2 id="Compatibilidade">Compatibilidade</h2>

<div>{{Compat("api.Element.getBoundingClientRect")}}</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx">MSDN: <code>getBoundingClientRect</code></a></li>
 <li><a href="/en-US/docs/DOM/element.getClientRects"><code>getClientRects()</code></a></li>
</ul>
