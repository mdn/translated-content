---
title: Comentarios
slug: Web/CSS/Comments
tags:
  - CSS
  - Principiante
  - Referencia CSS
translation_of: Web/CSS/Comments
original_slug: Web/CSS/Comentarios
---
<div>{{CSSRef}}</div>

<h2 id="Resumen">Resumen</h2>

<p>Los comentarios son usados para añadir notas explicatorias o prevenir que el navegador interprete partes de la hoja de estilos.</p>

<p>Los comentarios se pueden colocar en cualquier espacio en blanco que se permita en la hoja de estilos.</p>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">/* Comentario */</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush:css">/* Comentario de una sola línea */

/*
Un comentario
que se extiende
en varias
líneas
*/
</pre>

<h2 id="Notas">Notas</h2>

<p>La sintaxis de comentarios <code>/* */</code> es usada para comentarios de una o múltiples líneas. No hay otra forma de especificar comentarios en hojas de estilos externas. Sin embargo, cuando se usa el elemento <code>&lt;style&gt;</code>, se puede usar <code>&lt;!-- --&gt;</code> para ocultar CSS para navegadores antiguos, aunque no es recomendable. Como en la mayoría de los lenguajes de programación que usan la sintaxis de comentarios <code>/* */</code> estos no pueden ser anidados. En otras palabras, la primera instancia de <code>*/</code> que siga a una instancia de <code>/*</code> cerrará el comentario.</p>

<h2 id="Especificaciones">Especificaciones</h2>

<ul>
 <li><a href="http://www.w3.org/TR/CSS21/syndata.html#comments">CSS 2.1 Syntax and basic data types #comments</a></li>
</ul>

<h2 id="Véase_también">Véase también</h2>

<ul>
 <li><a href="/es/docs/Web/CSS/Referencia_CSS">Referencia CSS</a></li>
 <li>{{CSS_key_concepts}}</li>
</ul>
