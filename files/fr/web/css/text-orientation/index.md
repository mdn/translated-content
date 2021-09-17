---
title: text-orientation
slug: Web/CSS/text-orientation
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/text-orientation
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>text-orientation</code></strong> définit l'orientation du texte sur une ligne. Cette propriété n'a d'effet qu'en mode vertical (autrement dit, quand {{cssxref("writing-mode")}} n'est pas <code>horizontal-tb</code>). Elle est utile pour contrôler l'affichage de l'écriture pour les langues dont le script est vertical. Elle permet aussi de gérer les en-têtes de tableaux verticaux.</p>

<div>{{EmbedInteractiveExample("pages/css/text-orientation.html")}}</div

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
text-orientation: mixed;
text-orientation: upright;
text-orientation: sideways-right;
text-orientation: sideways-left;
text-orientation: sideways;
text-orientation: use-glyph-orientation;

/* Valeurs globales */
text-orientation: inherit;
text-orientation: initial;
text-orientation: unset;
</pre>

<p>La propriété <code>text-orientation</code> peut valoir l'un des mots-clés suivants.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>mixed</code></dt>
 <dd>Ce mot-clé permet de tourner les caractères de 90° dans le sens des aiguilles d'une montre pour les scripts horizontaux, les glyphes des scripts verticaux sont affichés normalement. C'est la valeur par défaut.</dd>
 <dt><code>upright</code></dt>
 <dd>Ce mot-clé permet d'afficher les caractères des scripts horizontaux normalement et d'afficher les glyphes des scripts verticaux « debout ». Ce mot-clé implique que tous les caractères soient considérés comme <em>ltr</em> (<em>left-to-right</em> ou gauche à droite). La valeur utilisée pour {{cssxref("direction")}} sera <code>ltr</code>, quelle que soit celle définie par l'utilisateur.</dd>
 <dt><code>sideways</code></dt>
 <dd>Ce mot-clé permet d'afficher les caractères comme s'ils étaient disposés horizontalement et que la ligne de base était tournée de 90° dans le sens des aiguilles d'une montre.</dd>
 <dt><code>sideways-right</code></dt>
 <dd>Un alias pour <code>sideways</code> conservé pour des raisons de compatibilité.</dd>
 <dt><code>use-glyph-orientation</code></dt>
 <dd>Pour les éléments SVG, ce mot-clé permet d'utiliser la valeur des propriétés SVG dépréciées <code>glyph-orientation-vertical</code> et <code>glyph-orientation-horizontal</code>.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="monTexte"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.monTexte {
  writing-mode: vertical-rl;
  text-orientation: sideways;
}
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%",200)}}</p>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS3 Writing Modes', '#text-orientation', 'text-orientation')}}</td>
   <td>{{Spec2('CSS3 Writing Modes')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.text-orientation")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("writing-mode")}}</li>
 <li>{{cssxref("text-combine-upright")}}</li>
 <li>{{cssxref("unicode-bidi")}}</li>
</ul>
