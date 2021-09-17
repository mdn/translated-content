---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/overflow-anchor
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>overflow-anchor</code></strong> permet d'éviter, lors du défilement, que le navigateur ajuste la position afin de minimiser le déplacement du contenu.</p>

<p>Ce comportement est activé par défaut pour les navigateurs qui le prenne en charge. Aussi, cette propriété est uniquement nécessaire lorsque vous rencontrez des problèmes de défilement dans un document et que vous souhaitez désactiver ce comportement.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
overflow-anchor: auto;
overflow-anchor: none;

/* Valeurs globales */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: unset;
</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>L'élément peut devenir une ancre lorsque la position de défilement est ajustée.</dd>
 <dt><code>none</code></dt>
 <dd>L'élément ne sera pas sélectionné comme ancre.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<p>Pour désactiver l'ancrage du défilement, on pourra utiliser cette propriété :</p>

<pre class="brush: css">body {
  overflow-anchor: none;
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
   <td>{{SpecName('CSS Scroll Anchoring', '#propdef-overflow-anchor', 'overflow-anchor')}}</td>
   <td>{{Spec2('CSS Scroll Anchoring')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.overflow-anchor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring">Guide sur l'ancrage du défilement (<em>scroll anchoring</em>)</a></li>
</ul>
