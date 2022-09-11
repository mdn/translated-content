---
title: Descendant combinator
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Reference
  - Selectors
translation_of: Web/CSS/Descendant_combinator
---
<div>{{CSSRef("Selectors")}}</div>

<p>O <strong>combinador descendente</strong> - normalmente representado por um caractere de espaço simples (<code> </code>) - combina dois seletores para que os elementos correspondidos pelo segundo seletor sejam selecionados se eles tiverem um elemento ancestral (pai, pai ou mãe, pai ou mãe, etc.) correspondente ao primeiro seletor. Os seletores que utilizam um combinador descendente são chamados de seletores descendentes.</p>

<pre class="brush: css no-line-numbers">/* Listar itens descendentes da lista "my-things" */
ul.my-things li {
  margin: 2em;
}</pre>

<p>O combinador descendente é tecnicamente um ou mais caracteres de espaço em branco do {{Glossary ("CSS")}} - o caractere de espaço e/ou um dos quatro caracteres de controle:  retorno de carro (carriage return),  Quebra de página ( form feed), nova linha e caracteres de tabulação — entre dois seletores na ausência de outro combinador.  Além disso, os caracteres de espaço em branco dos quais o combinador é composto podem conter qualquer número de comentários CSS.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"><var>selector1</var> <var>selector2</var> {
  <var>/* </var> declarações de propriedade <var> */</var>
}</pre>

<h2 id="Exemplo">Exemplo</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul&gt;
  &lt;li&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p>{{EmbedLiveSample("Example", "100%", 160)}}</p>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS4 Selectors", "#descendant-combinators", "descendant combinator")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#descendant-combinators", "descendant combinator")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "selector.html#descendant-selectors", "descendant selectors")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#contextual-selectors", "contextual selectors")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("css.selectors.descendant")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Child_combinator">Child combinator</a></li>
</ul>
