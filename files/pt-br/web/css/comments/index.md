---
title: Comentário
slug: Web/CSS/Comments
tags:
  - CSS
  - CSS Reference
  - Iniciante
translation_of: Web/CSS/Comments
original_slug: Web/CSS/Comentário
---
<div>ios{{CSSRef}}</div>

<h2 id="Sumário">Sumário</h2>

<p>Comments are used to add explanatory notes or prevent the browser from interpreting parts of the style sheet.</p>

<p>Comments can be placed where ever white space is allowed within a style sheet.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">/* Comment */</pre>

<h2 id="Exemplos">Exemplos</h2>

<pre class="brush:css">/* A single line comment */

/*
A comment
which stretches
over several
lines
*/
</pre>

<h2 id="Notas">Notas</h2>

<p>The <code>/* */</code> comment syntax is used for both single and multi line comments. There is no other way to specify comments in external style sheets. However, when using the <code>&lt;style&gt;</code> element, you may use <code>&lt;!-- --&gt;</code> to hide CSS from older browsers, although this is not recommended. As in most programming languages that use the <code>/* */</code> comment syntax, comments cannot be nested. In other words, the first instance of <code>*/</code> that follows an instance of <code>/*</code> closes the comment.</p>

<h2 id="Especificações">Especificações</h2>

<ul>
 <li><a href="http://www.w3.org/TR/CSS21/syndata.html#comments">CSS 2.1 Syntax and basic data types #comments</a></li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/Reference">CSS Reference</a></li>
 <li>{{CSS_key_concepts}}</li>
</ul>
