---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
translation_of: Web/API/Element/scrollLeft
---
<p>{{ APIRef("DOM") }}</p>

<p>A propriedade <strong>Element.scrollLeft</strong> obtem, ou define o número de pixels do contéudo de um elemento que é rolado para a esquerda.</p>

<p>Note que se os {{cssxref("direction")}} do elemento do elemento é rtl (direita-para-esquerda) então <code>scrollLeft</code> é <code>0</code> quando a barra de rolagem está na posição mais à direita (o início do conteúdo rolado) e então, fica cada vez mais negativa à medida que se desloca em direção ao fim do conteúdo.</p>

<h2 id="Syntax_and_values" name="Syntax_and_values">Sintaxe</h2>

<pre class="eval">// Obtem o número de pixels rolado
var <var>sLeft</var> = <var>element</var>.scrollLeft;
</pre>

<p><var>sLeft</var> é um inteiro representando o número de pixels do <em>elemento</em> que foi movido para a esquerda.</p>

<pre class="eval">// Define o número de pixels rolado
<var>element</var>.scrollLeft = 10;
</pre>

<p><code>scrollLeft</code> pode ser definido para qualquer valor inteiro, entretanto:</p>

<ul>
 <li>Se o elemento não pode ser rolado (ex.: ele é no overflow), <code>scrollLeft</code> é definido para 0.</li>
 <li>Se definido um valor menor que 0 (maior que 0 para elementos direita-para-esquerda), <code>scrollLeft</code> é definido para 0.</li>
 <li>Se o definido um valor maior que o máximo, que o conteúdo pode ser rolado, é<code>scrollLeft</code> é definido para o valor máximo.</li>
</ul>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;style&gt;
        #container {
            border: 1px solid #ccc; height: 100px; overflow: scroll; width: 100px;
        }
        #content {
            background-color: #ccc; width: 250px;
        }
    &lt;/style&gt;
    &lt;script&gt;
        document.addEventListener('DOMContentLoaded', function () {
            var button = document.getElementById('slide');
            button.onclick = function () {
                document.getElementById('container').scrollLeft += 20;
            };
        }, false);
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="container"&gt;
        &lt;div id="content"&gt;Lorem ipsum dolor sit amet.&lt;/div&gt;
    &lt;/div&gt;
    &lt;button id="slide" type="button"&gt;Slide&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('CSSOM View', '#dom-element-scrollleft', 'scrollLeft')}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="References" name="References">Referências</h2>

<p>{{Compat("api.Element.scrollLeft")}}</p>
