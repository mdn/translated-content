---
title: <ul>
slug: Web/HTML/Element/ul
tags:
  - Elemento
  - Guía
  - HTML
  - Indentação
  - Intermediário
  - Lista
  - Listagem <ul>
  - Referencia
  - menu+HTML
translation_of: Web/HTML/Element/ul
---
<p>O <strong>elemento HTML<code> &lt;ul&gt; </code></strong>(ou <em>elemento</em> <em>HTML de Lista desordenada</em><code>)</code> representa uma lista de itens sem ordem rígida, isto é, uma coleção de itens que não trazem uma ordenação numérica e as suas posições, nessa lista, são irrelevantes. Caracteristicamente, os itens em uma lista desordenada são exibidos com um marcador que pode ter várias formas, como um ponto, um círculo, ou um quadrado. O tipo de marcador não é definido na descrição HTML da página, mas na CSS associada, utilizando a propriedade<code> </code>{{ cssxref("list-style-type") }}.</p>

<p><span id="result_box" lang="pt"><span>Não há nenhuma limitação</span> <span>para</span> <span>a profundidade e a</span> <span>imbricação</span> <span>das</span> <span>listas definidas</span> <span>com</span> <span>o</span></span>s elementos<code> </code>{{ HTMLElement("ol") }}<code> </code>e<code> </code>{{ HTMLElement("ul") }}.</p>

<div class="note"><strong>Nota sobre a utilização: </strong>Ambos os elementos<code> </code>{{ HTMLElement("ol") }}<code> </code>e<code> </code>{{ HTMLElement("ul") }}<code> </code>representam uma lista de itens. São diferentes porque, com o elemento<code> </code>{{ HTMLElement("ol") }},<code> </code>a ordenação tem significado. Como regra de ouro para determinar qual dos dois usar, tente mudar a posição dos itens na lista; caso a significação seja alterada, o elemento<code> </code>{{ HTMLElement("ol") }}<code> </code>deve ser utilizado mas, se não houver mudança, você pode aplicar<code> </code>{{ HTMLElement("ul") }}.</div>

<h2 id="Contexto_de_utilização">Contexto de utilização</h2>

<table class="properties">
 <tbody>
  <tr>
   <td><a href="/en/HTML/Content_categories" title="en/HTML/Content categories">Categorias de conteúdo</a></td>
   <td><a href="/en/HTML/Content_categories#flow_content" title="en/HTML/Content categories#Flow content">Flutuantes</a></td>
  </tr>
  <tr>
   <td>Conteúdo permitido</td>
   <td>zero ou mais<code> </code>{{ HTMLElement("li") }}<code> </code>elementos, eventualmente combinados com<code> </code>{{ HTMLElement("ol") }}<code> </code>e elementos<code> </code>{{ HTMLElement("ul") }}.</td>
  </tr>
  <tr>
   <td>Omissão de etiqueta (<em>Tag</em>)</td>
   <td>nenhuma, ambas as etiquetas - de início e de fim - são obrigatórias</td>
  </tr>
  <tr>
   <td>Elementos pai permitidos</td>
   <td>qualquer elemento que receba conteúdo flutuante</td>
  </tr>
  <tr>
   <td>Interface DOM</td>
   <td>{{domxref("HTMLUListElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Atributos">Atributos</h2>

<dl>
</dl>

<p><span style="line-height: 21px;">Este elemento inclui os </span><a href="https://developer.mozilla.org/en-US/docs/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Global attributes">atributos globais</a><span style="line-height: 21px;">.</span></p>

<dl>
 <dt>{{ htmlattrdef("compact") }}{{ Deprecated_inline() }}</dt>
 <dd>Este atributo booleano sugere que a lista será processada em um modelo compacto. A interpretação deste atributo depende do perfil de navegação (<em>user agent</em>)  e não funciona em todos os navegadores.
 <div class="note"><strong>Nota de utilização: </strong>Não aplique este atributo, que foi preterido - o elemento<code> </code>{{ HTMLElement("ul") }}<code> </code>deve ser definido utilizando-se a folha de estilos <a href="/en/CSS" title="en/CSS">CSS</a>. Para dar um efeito similar ao atributo compacto, a propriedade  <a href="/en/CSS/line-height" title="en/CSS/line-height">line-height </a>(espaçamento), da <a href="/en/CSS" title="en/CSS">CSS</a>, pode ser utilizada com um valor de <span style="font-family: courier new;">80%</span>.</div>
 </dd>
</dl>

<dl>
 <dt>{{ htmlattrdef("type") }}{{ Deprecated_inline() }}</dt>
 <dd>Usados para estabelecer o tipo de marcador da lista. Os valores definidos durante a <a href="/en/HTML3.2" title="en/HTML3.2">HTML3.2</a> <span class="short_text" id="result_box" lang="pt"><span>e a versão</span> <span>de transição de</span></span> <a href="/en/HTML4.01" title="en/HTML4.01">HTML 4.0/4.01</a>, são<span style="font-family: monospace;">:</span>
 <ul>
  <li><code>círculo</code>,</li>
  <li><code>disco</code>,</li>
  <li>e <code>quadrado</code>.</li>
 </ul>

 <p>Um quarto tipo de marcação está definido na interface <em>WebTV</em>, mas nem todos os navegadores o acolhem: <code>triângulo.</code></p>

 <p><span class="short_text" id="result_box" lang="pt"><span>Se não estiver presente</span> <span>e se nenhuma propriedade</span></span> <a href="/en/CSS" title="en/CSS">CSS</a><code> </code>{{ cssxref("list-style-type") }}<code> </code><span class="short_text" id="result_box" lang="pt"><span>se aplicar</span> <span>ao elemento</span></span>, o perfil de navegação decidirá qual tipo de marcador utilizar, dependendo d<span class="short_text" id="result_box" lang="pt"><span>o nível de aninhamento</span> <span>da lista.</span></span></p>

 <div class="note"><strong>Nota de utilização:</strong> Não use este atributo, pois está ultrapassado; em seu lugar, utilize a propriedade <a href="/en/CSS" title="en/CSS">CSS</a><code> </code>{{ cssxref("list-style-type") }}.</div>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Exemplo_simples">Exemplo simples</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;primeiro item&lt;/li&gt;
  &lt;li&gt;segundo item&lt;/li&gt;
  &lt;li&gt;terceiro item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>A HTML acima resulta em:</p>

<ul>
 <li>primeiro item</li>
 <li>segundo item</li>
 <li>terceiro item</li>
</ul>

<h3 id="Lista_aninhada">Lista aninhada</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;primeiro item&lt;/li&gt;
  &lt;li&gt;segundo item      &lt;!-- Observe que a <em>tag</em> de fechamento &lt;/li&gt; não é colocada aqui! --&gt;
    &lt;ul&gt;
      &lt;li&gt;segundo item primeiro subitem&lt;/li&gt;
      &lt;li&gt;segundo item segundo subitem      &lt;!-- O mesmo para a segunda lista não ordenada aninhada (Same for the second nested unordered list)! --&gt;
        &lt;ul&gt;
          &lt;li&gt;segundo item segundo subitem primeiro sub-subitem&lt;/li&gt;
          &lt;li&gt;segundo item segundo subitem segundo sub-subitem&lt;/li&gt;
          &lt;li&gt;segundo item segundo subitem terceiro sub-subitem&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/li&gt;           &lt;!-- A <em>tag</em> de fechamento &lt;/li&gt;, que contém a terceira lista não ordenada (Closing &lt;/li&gt; tag for the li that contains the third unordered list) --&gt;
      &lt;li&gt;segundo item terceiro subitem&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;               &lt;!-- Aqui entra a <em>tag</em> de fechamento &lt;/li&gt; (Here is the closing &lt;/li&gt; tag) --&gt;
  &lt;li&gt;terceiro item&lt;/li&gt;
&lt;/ul&gt;</pre>

<p>A saída HTML acima, é:</p>

<ul>
 <li>primeiro item</li>
 <li>segundo item
  <ul>
   <li>segundo item primeiro subitem</li>
   <li>segundo item segundo subitem
    <ul style="">
     <li>segundo item segundo subitem primeiro sub-subitem</li>
     <li>segundo item segundo subitem segundo sub-subitem</li>
     <li>segundo item segundo subitem terceiro sub-subitem</li>
    </ul>
   </li>

   <li>segundo item terceiro subitem</li>
  </ul>
 </li>

 <li>terceiro item</li>
</ul>

<h3 id="&lt;ul>_e_&lt;ol>_aninhados"> &lt;ul&gt;<code> </code>e<code> </code>&lt;ol&gt;<code> </code>aninhados</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;primeiro item&lt;/li&gt;
  &lt;li&gt;segundo item      &lt;!-- Observe, a <em>tag</em> de fechamento &lt;/li&gt; não é colocada aqui! (Look, the closing &lt;/li&gt; tag is not placed here!) --&gt;
    &lt;ol&gt;
      &lt;li&gt;segundo item primeiro subitem&lt;/li&gt;
      &lt;li&gt;segundo item segundo subitem&lt;/li&gt;
      &lt;li&gt;segundo item terceiro subitem&lt;/li&gt;
    &lt;/ol&gt;
  &lt;/li&gt;                &lt;!-- Aqui está a <em>tag</em> de fechamento &lt;/li&gt; (Here is the closing &lt;/li&gt; tag) --&gt;
  &lt;li&gt;terceiro item&lt;/li&gt;
&lt;/ul&gt;
</pre>

<p>A saída HTML acima será:</p>

<ul>
 <li>primeiro item</li>
 <li>segundo item
  <ol>
   <li>segundo item primeiro subitem</li>
   <li>segundo item segundo subitem</li>
   <li>segundo item terceiro subitem</li>
  </ol>
 </li>
 <li>terceiro item</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>Outros elementos HTML relacionados à lista: {{ HTMLElement("ol") }},<code> </code>{{ HTMLElement("li") }},<code> </code>{{ HTMLElement("menu") }}<code> </code>e o obsoleto<code> </code>{{ HTMLElement("dir") }};</li>
 <li>Propriedades CSS que podem ser especialmente úteis para determinar o modelo do elemento <span style="font-family: courier new;">&lt;ul&gt;</span>:
  <ul>
   <li>a propriedade <a href="/en/CSS/list-style" title="en/CSS/list-style">list-style</a>, conveniente para escolher a maneira como os ordinais serão mostrados,</li>
   <li><a href="/en/CSS_Counters" title="en/CSS_Counters">CSS counters</a>, eficientes para guiar listas complexas aninhadas,</li>
   <li>a propriedade <a href="/en/CSS/line-height" title="en/CSS/line-height">line-height</a>, válida para simular o atributo ultrapassado<code> </code>{{ htmlattrxref("compact", "ul") }},</li>
   <li>a propriedade <a href="/en/CSS/margin" title="en/CSS/margin">margin</a>, proveitosa para controlar a indentação da lista.</li>
  </ul>
 </li>
</ul>

<p>{{ languages({ "en":"en/HTML/Element/ul", "de":"de/HTML/Element/ul", "ja":"ja/HTML/Element/ul", "pl":"pl/HTML/Element/ul"}) }}</p>

<p>{{ HTMLRef }}</p>
