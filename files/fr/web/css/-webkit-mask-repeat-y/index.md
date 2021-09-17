---
title: '-webkit-mask-repeat-y'
slug: Web/CSS/-webkit-mask-repeat-y
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-repeat-y
---
<div>{{CSSRef}}{{Non-standard_header}}</div>

<p>La propriété <strong><code>-webkit-mask-repeat-y</code></strong> définit la façon dont une image de masque est répétée verticalement.</p>

<pre class="brush:css  no-line-numbers">/* Valeurs avec un mot-clé */
-webkit-mask-repeat-y: repeat;
-webkit-mask-repeat-y: no-repeat;
-webkit-mask-repeat-y: space;
-webkit-mask-repeat-y: round;

/* Valeurs multiples */
-webkit-mask-repeat-y: repeat, no-repeat, space;

/* Valeurs globales */
-webkit-mask-repeat-y: inherit;
-webkit-mask-repeat-y: initial;
-webkit-mask-repeat-y: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>repeat</code></dt>
 <dd>L'image de masque est répétée verticalement.</dd>
 <dt><code>no-repeat</code></dt>
 <dd>L'image de masque n'est pas répétée verticalement, seul un exemplaire est dessiné selon l'axe vertical. Le contenu restant sur l'axe vertical pour les éléments masqués n'est pas affiché.</dd>
 <dt><code>space</code></dt>
 <dd>L'image est répétée tant que possible sans être rognée. La première et la dernière images sont accolées aux bords bas et haut de l'élément et l'espace restant est réparti entre les copies de l'image. La propriété {{cssxref("mask-position")}} est ignorée sauf si une seule image peut être affichée sans qu'il n'y ait de rognage. On aura uniquement du rognage s'il n'y a pas suffisamment d'espace pour afficher une seule image.</dd>
 <dt><code>round</code></dt>
 <dd>L'image est repétée et les différents exemplaires sont tous étirés de la même façon afin qu'il n'y ait pas d'espace entre chaque. Ainsi, une image qui mesure originellement 260px et qui est répétée trois fois pourra être étirée jusqu'à ce que chaque répétition soit haute de 300px, ensuite une autre image sera ajoutée et toutes seront compressées à 225px.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<pre class="brush: css">.exempleun {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: repeat;
}

.exempledeux {
  -webkit-mask-image: url('mask.png');
  -webkit-mask-repeat-y: no-repeat;
}
</pre>

<h3 id="Gestion_de_plusieurs_images">Gestion de plusieurs images</h3>

<p>On peut définir un style de répétition (<code>&lt;repeat-style&gt;</code>) différent pour chacune des images de masque en séparant les valeurs par des virgules :</p>

<pre class="brush: css">.exempletrois {
  -webkit-mask-image: url('mask1.png'), url('mask2.png');
  -webkit-mask-repeat-y: repeat, space;
}
</pre>

<p>Chaque image aura la valeur associée, dans le même ordre.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-webkit-mask-repeat-y")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("-webkit-mask-repeat")}},</li>
 <li>{{cssxref("-webkit-mask-repeat-x")}}</li>
</ul>
