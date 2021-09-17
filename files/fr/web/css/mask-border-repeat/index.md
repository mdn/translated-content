---
title: mask-border-repeat
slug: Web/CSS/mask-border-repeat
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-border-repeat
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>La propriété CSS <strong><code>mask-border-repeat</code></strong> indique la façon dont les régions du bord du <a href="/fr/docs/Web/CSS/mask-border">masque</a> sont ajustées pour correspondre aux dimensions de la bordure de l'élément.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush:css no-line-numbers">/* Valeurs avec un mot-clé */
mask-border-repeat: stretch;
mask-border-repeat: repeat;
mask-border-repeat: round;
mask-border-repeat: space;

/* vertical | horizontal */
mask-border-repeat: round stretch;

/* Valeurs globales */
mask-border-repeat: inherit;
mask-border-repeat: initial;
mask-border-repeat: unset;
</pre>

<p>La propriété <code>mask-border-repeat</code> peut être utilisée avec une ou deux valeurs parmi celles de la liste ci-après.</p>

<ul>
 <li>Lorsqu'une seule valeur est fournie, le même comportement est utilisé pour les quatre côtés.</li>
 <li>Lorsque deux valeurs sont indiquées, la première valeur s'applique aux côtés haut et bas et la deuxième aux côtés gauche et droit.</li>
</ul>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>stretch</code></dt>
 <dd>Les bords de l'image source sont étirés afin de remplir l'espace entre chaque bordure.</dd>
 <dt><code>repeat</code></dt>
 <dd>Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments répétés peuvent être rognés afin que le remplissage soit exact.</dd>
 <dt><code>round</code></dt>
 <dd>Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. Les fragments peuvent être étirés afin que le remplissage soit exact.</dd>
 <dt><code>space</code></dt>
 <dd>Les bords de l'image source sont répétés afin de remplir l'espace entre chaque bordure. L'espace supplémentaire est réparti entre les fragments répétés pour que le remplissage soit exact.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Specifications">Spécifications</h2>

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
   <td>{{SpecName("CSS Masks", "#propdef-mask-border-repeat", "mask-border-repeat")}}</td>
   <td>{{Spec2("CSS Masks")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<div>{{cssinfo}}</div>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>TBD</p>
