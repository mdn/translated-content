---
title: IIFE
slug: Glossary/IIFE
tags:
  - DesignPattern
  - Glossário
  - JavaScript
translation_of: Glossary/IIFE
original_slug: Glossario/IIFE
---
<p><strong>IIFE</strong> (Immediately Invoked Function Expression) é uma função em {{glossary("JavaScript")}} que é executada assim que definida.</p>

<p>É um {{glossary("Design Pattern")}} também conhecido como {{glossary("Self-Executing Anonymous Function")}} e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.</p>

<p>A segunda parte corresponde à criação da expressão <code>()</code>, por meio da qual o interpretador JavaScript avaliará e executará a função.</p>

<h2 id="Exemplos">Exemplos</h2>

<p>A função se torna uma expressão que é imediatamente executada. A variável definida dentro da expressão não pode ser acessada fora de seu escopo.</p>

<pre class="brush: js"><code class="language-js"><span class="punctuation token">(</span><span class="keyword token">function</span> <span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">var</span> nome <span class="operator token">=</span> <span class="string token">"Felipe"</span><span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// A variável nome não é acessível fora do escopo da expressão </span>
nome <span class="comment token">// gerará o erro "Uncaught ReferenceError: nome is not defined"</span></code></pre>

<p>Atribuir uma IIFE a uma variável não armazenará a função em si, mas o <strong>resultado da função.</strong></p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> result <span class="operator token">=</span> <span class="punctuation token">(</span><span class="keyword token">function</span> <span class="punctuation token">(</span><span class="punctuation token">)</span> <span class="punctuation token">{</span>
    <span class="keyword token">var</span> nome <span class="operator token">=</span> <span class="string token">"Felipe"</span><span class="punctuation token">;</span>
    <span class="keyword token">return</span> nome<span class="punctuation token">;</span>
<span class="punctuation token">}</span><span class="punctuation token">)</span><span class="punctuation token">(</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="comment token">// Imediatamente gera a saída: </span>
result<span class="punctuation token">;</span> <span class="comment token">// "Felipe"</span></code></pre>

<h2 id="Aprenda_Mais">Aprenda Mais</h2>

<h3 id="Aprenda_mais_sobre_IFFE">Aprenda mais sobre IFFE</h3>

<ul>
 <li><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/">Ben Alman's blog post defining IIFEs</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Functions">Quick example</a> (at the end of the "Functions" section, right before "Custom objects")</li>
</ul>

<h3 id="Conhecimentos_Gerais">Conhecimentos Gerais</h3>

<ul>
 <li>{{interwiki("wikipedia", "Immediately-invoked function expression", "IIFE")}} on Wikipedia</li>
</ul>
