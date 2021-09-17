---
title: <time>
slug: Web/CSS/time
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/time
---
<div>{{CSSRef}}</div>

<p>Le type de donnée <strong><code>&lt;time&gt;</code></strong> indique des durées exprimées en secondes ou en millisecondes. Il est par exemple utilisé dans les propriétés {{cssxref("animation")}}, {{cssxref("transition")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<p>Une valeur temporelle consiste en une valeur de type {{cssxref("&lt;number&gt;")}} immédiatement suivie d'une unité. Comme avec les autres unités CSS, il n'y a pas d'espace entre l'unité et le nombre. La valeur peut éventuellement être précédée d'un signe <code>+</code> ou <code>-</code>.</p>

<p>Même si toutes les unités représentent le même temps pour la valeur <code>0</code>, l'unité ne doit pas être omises, car il ne s'agit pas d'une {{cssxref("&lt;length&gt;")}} : <code>0</code> n'est pas valide et ne représente pas <code>0s</code>, <code>0ms</code>.</p>

<h3 id="Unités">Unités</h3>

<dl>
 <dt><code>s</code></dt>
 <dd>Cette unité permet d'exprimer le temps en secondes. Par exemple : <code>0s</code>, <code>1.5s</code>, <code>-60s</code>.</dd>
 <dt><code>ms</code></dt>
 <dd>Cette unité permet d'exprimer le temps en millisecondes. Par exemple : <code>0ms</code>, <code>1500ms</code>, <code>-6000ms</code>.</dd>
</dl>

<p>La conversion entre <code>s</code> et <code>ms</code> suit la logique suivante : <code>1s = 1000ms</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Valeurs_valides">Valeurs valides</h3>

<pre class="brush: css example-good">12s         Nombre entier positif
-456ms      Nombre entier négatif
4.3ms       Nombre décimal
14mS        L'unité n'est pas sensible à la casse, cependant les majuscules sont déconseillées pour s et ms.
+0s         Zero, précédé d'un + et suivi de son unité.
-0ms        Zero, précédé d'un - et suivi de son unité (bien qu'étrange, ceci est autorisé).
</pre>

<h3 id="Valeurs_invalides">Valeurs invalides</h3>

<pre class="brush: css example-bad">0           Bien qu'un zéro sans unité soit autorisé pour les longueurs, ceci n'est pas valide avec les autres dimensions.
12.0        Il s'agit d'un nombre, pas d'un temps, l'unité est obligatoire.
7 ms        Aucun espace n'est autorisé entre le nombre et l'unité.
</pre>

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
   <td>{{SpecName('CSS4 Values','#time','&lt;time&gt;')}}</td>
   <td>{{Spec2('CSS4 Values')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Values','#time','&lt;time&gt;')}}</td>
   <td>{{Spec2('CSS3 Values')}}</td>
   <td>Définition normative de <code>s</code> et <code>ms</code></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1','aural.html#times','&lt;time&gt;')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Définition informelle de <code>s</code> et <code>ms</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.types.time")}}</p>
