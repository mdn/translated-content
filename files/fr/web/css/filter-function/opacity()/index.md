---
title: opacity()
slug: Web/CSS/filter-function/opacity()
tags:
  - CSS
  - Filtre
  - Fonction
  - Reference
translation_of: Web/CSS/filter-function/opacity()
---
<div>{{CSSRef}}</div>

<p>La fonction CSS <strong><code>opacity()</code></strong> permet de modifier la transparence de l'image. Le résultat obtenu par cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.</p>

<div>{ {EmbedInteractiveExample("pages/css/function-opacity.html")}}</div>

<div class="note">
<p><strong>Note :</strong> Cette fonction est proche de la propriété {{cssxref("opacity")}} mais, selon le navigateur, les filtres CSS peuvent bénéficier de l'accélération matérielle pour de meilleures performances.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">opacity(<em>multiplicateur</em>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>multiplicateur</code></dt>
 <dd>L'intensité de l'opacité, indiquée comme un nombre ({{cssxref("&lt;number&gt;")}}) ou comme un pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une  valeur de <code>0%</code> entraînera une image complètement transparente. Une valeur de <code>100%</code> laissera l'image inchangée. Les valeurs intermédiaires auront un effet proportionnel. Lors d'une interpolation, la valeur par défaut utilisée sera <code>1</code>.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">opacity(0%);   /* Complètement transparente */
opacity(50%);  /* 50% transparent */
opacity(1);    /* Aucun effet */</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("&lt;filter-function&gt;")}}</li>
 <li>La propriété CSS {{cssxref("opacity")}}</li>
</ul>
