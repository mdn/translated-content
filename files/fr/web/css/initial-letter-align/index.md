---
title: initial-letter-align
slug: Web/CSS/initial-letter-align
tags:
  - Alignement
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/initial-letter-align
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>initial-letter-align</code></strong> définit l'alignement des premières lettres d'un paragraphe lorsque celles-ci sont mises en avant grâce à {{cssxref("initial-letter")}} pour former une lettrine.</p>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
initial-letter-align: auto;
initial-letter-align: alphabetic;
initial-letter-align: border-box;
initial-letter-align: hanging;
initial-letter-align: hebrew;
initial-letter-align: ideographic;

/* Valeurs globales */
initial-letter-align: inherit;
initial-letter-align: initial;
initial-letter-align: unset;
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<p>La valeur de cette propriété peut être l'un des mots-clés parmi ceux définis ci-après.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>L'agent utilisateur choisit la meilleure valeur par rapport à la langue du texte. Pour les langues occidentales, cela sera <code>alphabetic</code>, pour les langues hébraïques <code>hebrew</code>, pour les langues CJK <code>ideographic</code> et pour certaines langues indo-aryennes, cela correspondra à <code>hanging</code>.</dd>
 <dt><code>alphabetic</code></dt>
 <dd>La ligne de majuscule est alignée avec la ligne de majuscule de la première ligne de texte. La ligne de pied de la première lettre s'aligne avec la ligne de pied de la N-ième ligne.</dd>
 <dt><code>border-box</code></dt>
 <dd>C'est la boîte formée par la première lettre qui s'aligne avec la ligne de jambage de la première ligne de texte.</dd>
 <dt><code>hanging</code></dt>
 <dd>La ligne de jambage de la première lettre est alignée avec la ligne de jambage de la première ligne de texte.</dd>
 <dt><code>hebrew</code></dt>
 <dd>La ligne de jambage et la ligne de base alphabétique hébreuses du texte qui suit qui sont utilisées pour aligner la première lettre.</dd>
 <dt><code>ideographic</code></dt>
 <dd>La première lettre est centrée par rapport à la N-ième ligne utilisée pour la lettrine.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple {
  initial-letter: 3 1;
  initial-letter-align: hanging;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple"&gt;
  Tombe, tombe, tombe ! « Cette chute n’en finira
  donc pas ! Je suis curieuse de savoir combien de
  milles j’ai déjà faits, » dit-elle tout haut. « Je
  dois être bien près du centre de la terre. Voyons
  donc, cela serait à quatre mille milles de profondeur,
  il me semble. » &lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100%")}}</p>

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
   <td>{{SpecName('CSS3 Inline', '#aligning-initial-letter', 'initial-letter-align')}}</td>
   <td>{{Spec2('CSS3 Inline')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.initial-letter-align")}}</p>
