---
title: blur()
slug: Web/CSS/filter-function/blur
tags:
  - CSS
  - Efectos de Filtro
  - Función CSS
  - Referencia
translation_of: Web/CSS/filter-function/blur()
original_slug: Web/CSS/filter-function/blur()
---
<div>{{cssref}}</div>

<p>La función CSS <strong><code>blur()</code></strong> aplica un <a href="https://en.wikipedia.org/wiki/Gaussian_blur">desenfoque Gaussiano</a> a la imagen de entrada. El resultado es un {{cssxref("&lt;filter-function&gt;")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/function-blur.html")}}</div>



<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox notranslate">blur(<em>radio</em>)</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>radio</code></dt>
 <dd>El radio del desenfoque, especificado como {{cssxref("&lt;length&gt;")}}. Define el valor de la desviación estándar a la función gaussiana, es decir, cuántos píxeles en la pantalla se combinan entre sí; por lo tanto, un valor mayor creará más desenfoque. Un valor de <code>0</code> deja la entrada sin cambios. El valor de laguna para la interpolación es <code>0</code>.</dd>
</dl>

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: css notranslate">blur(0)        /* Sin efecto */
blur(8px)      /* Desenfoque con 8px de radio */
blur(1.17rem)  /* Desenfoque con 1.17rem de radio */</pre>

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
</ul>
