---
title: font-size-adjust
slug: Web/CSS/font-size-adjust
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-size-adjust
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>font-size-adjust</code></strong> permet de choisir une taille de police selon la taille des caractères en minuscules plutôt que selon la taille des majuscules.</p>

<pre class="brush:css  no-line-numbers">/* On utilise la taille de fonte définie */
font-size-adjust: none;

/* On utilise une fonte pour laquelle
   les minuscules font la moitié de la
   taille définie */
/* Type &lt;number&gt; */
font-size-adjust: 0.5;

/* Valeurs globales */
font-size-adjust: inherit;
font-size-adjust: initial;
font-size-adjust: unset;
</pre>

<p>Cela est particulièrement utile lorsque la lisibilité des fontes, notamment celles de petite taille, est déterminée par la taille des minuscules plutôt que par celle des majuscules.</p>

<p>La lisibilité peut devenir un problème lorsque la première police indiquée par {{cssxref("font-family")}} n'est pas disponible et que la police de remplacement possède un facteur de forme très différent (ce facteur correspond au ratio de la taille des minuscules sur la taille de la fonte).</p>

<p>Pour utiliser cette propriété d'une façon compatible avec les navigateurs qui ne prennent pas en charge <code>font-size-adjust</code>, on définira le facteur par lequel on multiplie la valeur de la propriété {{Cssxref("font-size")}}. Cela signifie généralement que la propriété doit correspondre au facteur de forme de la première fonte. Ainsi, lorsqu'une feuille de style définit :</p>

<pre class="brush: css">font-size: 14px;
font-size-adjust: 0.5;
</pre>

<p>On indique en fait que les minuscules de la fonte utilisée doivent mesurer <code>7px</code> de haut (0.5 × 14px).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>none</code></dt>
 <dd>La taille de la fonte est uniquement choisie grâce à la propriété {{cssxref("font-size")}}.</dd>
 <dt><code>&lt;number&gt;</code></dt>
 <dd>
 <p>La taille de la fonte est choisie afin que les minuscules (selon la taille horizontale de la fonte) mesurent X fois {{cssxref("font-size")}}.</p>

 <p>Le nombre indiqué (cf. le type {{cssxref("&lt;number&gt;")}}) devrait la plupart du temps correspondre au facteur de forme de la première fonte listée avec {{cssxref("font-family")}}. Cela permet d'obtenir le même résultat dans les différents navigateurs, qu'ils supportent <code>font-size-adjust</code> ou non.</p>

 <p><code>0</code> entraînera une haute nulle pour le texte (qui sera donc caché). Pour d'anciens navigateurs, comme Firefox avant la version 40, <code>0</code> était géré comme <code>none</code>.</p>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Exemples pour &lt;code&gt;font-size-adjust&lt;/code&gt;&lt;/p&gt;

&lt;p class="times"&gt;
  Voici la fonte Times sur 10 px,
  difficile à lire en petit.
&lt;/p&gt;

&lt;p class="verdana"&gt;
  Voici la fonte Verdana sur 10px,
  plus lisible car sans empattement
  (serif).
&lt;/p&gt;

&lt;p class="adjtimes"&gt;
  et voilà le texte ajusté pour
  avoir le même facteur de forme
  qu'avec Verdana.
&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.times {
  font-family: Times, serif;
  font-size: 10 px;
}

.verdana {
  font-family: Verdana, sans-serif;
  font-size: 10 px;
}

.adjtimes {
  font-family: Times, serif;
  font-size-adjust: 0.58;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample('Exemples', '500', '300')}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Fonts', '#propdef-font-size-adjust', 'font-size-adjust')}}</td>
   <td>{{Spec2('CSS3 Fonts')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>La propriété CSS <code>font-size-adjust</code> fut initialement définie avec CSS 2 mais a été abandonnée dans CSS 2.1. Elle a de nouveau été définie avec CSS 3.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.font-size-adjust")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1144885">Un billet de David Baron sur <code>font-size-adjust</code> (en anglais)</a></li>
</ul>
