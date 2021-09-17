---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/overscroll-behavior-x
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>overscroll-behavior-x</code></strong> définit le comportement de l'agent utilisateur lorsqu'on atteint la limite de la zone de défilement sur l'axe horizontal.</p>

<div class="note">
<p><strong>Note :</strong> Voir {{cssxref("overscroll-behavior")}} pour plus de détails.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
overscroll-behavior-x: auto;
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Valeurs globales */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: unset;
</pre>

<p>La propriété <code>overscroll-behavior-x</code> est définie avec un des mots-clés définis ci-après.</p>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>Le dépassement de la zone de défilement se déroule normalement.</dd>
 <dt><code>contain</code></dt>
 <dd>Le comportement normal est utilisé à l'intérieur de l'élément pour lequel s'applique cette valeur (on a donc un effet de rebondissement) mais aucun effet associé n'a lieu sur les zones de défilement environnantes. Autrement dit, les éléments sous-jacents ne défilent pas.</dd>
 <dt><code>none</code></dt>
 <dd>Il n'y a pas d'effet associé sur les zones de défilement environnantes et on empêche le comportement normal de se produire sur l'élément lorsqu'on dépasse de la zone de défilement.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple <a href="https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x"><code>overscroll-behavior-x</code> </a> (cf. <a href="https://github.com/mdn/css-examples/blob/master/overscroll-behavior/overscroll-behavior-x.html">le code source</a> associé), on dispose de deux boîtes de bloc, l'une contenue à l'intérieure de l'autre. La boîte englobante possède une grande largeur avec {{cssxref("width")}} afin que la page puisse défiler horizontalement. La boîte intérieure a une petite largeur (et une petite hauteur, définie avec {{cssxref("height")}}) afin de pouvoir être facilement contenue dans la zone d'affichage mais son contenu possède une grande largeur afin de défiler horizontalement.</p>

<p>Par défaut, lorsqu'on fait défiler la boîte intérieure et qu'on atteint une limite de défilement, c'est toute la page qui commence à défiler. Si ce n'est pas le comportement souhaité, on peut empêcher ça en utilisant <code>overscroll-behavior-x: contain</code> sur la boîte intérieure :</p>

<pre class="brush: css">main &gt; div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}</pre>

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
   <td>{{SpecName('Overscroll Behavior', '#propdef-overscroll-behavior-x', 'overscroll-behavior-x')}}</td>
   <td>{{Spec2('Overscroll Behavior')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.overscroll-behavior-x")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo">Take control of your scroll: customizing pull-to-refresh and overflow effects (en anglais)</a></li>
</ul>
