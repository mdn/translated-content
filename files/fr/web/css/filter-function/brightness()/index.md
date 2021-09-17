---
title: brightness()
slug: Web/CSS/filter-function/brightness()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/brightness()
---
<div>{{cssref}}</div>

<p>La fonction CSS <strong><code>brightness()</code></strong> applique un multiplicateur linéaire sur une image afin de la rendre plus claire ou plus sombre. Le résultat obtenu est une valeur de type {{cssxref("&lt;filter-function&gt;")}}.</p>

<div>{{EmbedInteractiveExample("pages/css/function-brightness.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">brightness(<em>multiplicateur</em>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>multiplicateur</code></dt>
 <dd>L'amplification de la clarté de l'image, indiquée sous la forme d'un nombre ({{cssxref("&lt;number&gt;")}}) ou d'un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur inférieure à <code>100%</code> assombrira l'image alors qu'une valeur supérieure à <code>100%</code> la rendra plus claire. Une valeur de <code>0%</code> permettra d'obtenir une image complètement noire et une valeur de <code>100%</code> laissera l'image inchangée. La valeur par défaut utilisée lors de l'interpolation est <code>1</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">brightness(0%)   /* Complètement noir */
brightness(0.4)  /* 40% de la clarté */
brightness(1)    /* Aucun effet */
brightness(200%) /* Double la clarté */</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
</ul>
