---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-outline-radius
---
<div>{{Non-standard_header}}{{CSSRef}}</div>

<p>Dans les applications Mozilla (ex. Firefox), la propriété <strong><code>-moz-outline-radius</code></strong> peut être utilisée afin que le contour dessiné autour d'un élément ait des angles arrondis. Le contour ({{cssxref("outline")}}) est dessiné autour des éléments pour les faire ressortir.</p>

<pre class="brush:css no-line-numbers">/* Une seule valeur */
-moz-outline-radius: 25px;

/* Deux valeurs */
-moz-outline-radius: 25px 1em;

/* Trois valeurs */
-moz-outline-radius: 25px 1em 12%;

/* Quatre valeurs */
-moz-outline-radius: 25px 1em 12% 4mm;

/* Valeurs globales */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
</pre>

<p>La propriété <code>-moz-outline-radius</code> est une propriété raccourcie qui permet de définir les quatre propriétés destinées à chacun des angles {{cssxref("-moz-outline-radius-topleft")}}, {{cssxref("-moz-outline-radius-topright")}}, {{cssxref("-moz-outline-radius-bottomright")}} et {{cssxref("-moz-outline-radius-bottomleft")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<h3 id="Valeurs">Valeurs</h3>

<div class="note">
  <p><strong>Note :</strong> Les valeurs pour les coefficients elliptiques et les valeurs de type <code>&lt;percentage&gt;</code> respectent la même syntaxe que pour {{cssxref("border-radius")}}.</p>
</div>

<p>Une, deux, trois ou quatre valeurs <code>&lt;outline-radius&gt;</code> dont chacune peut être de type :</p>

<dl>
 <dt><code>&lt;length&gt;</code></dt>
 <dd>Voir {{cssxref("&lt;length&gt;")}} pour les valeurs possibles.</dd>
 <dt><code>&lt;percentage&gt;</code></dt>
 <dd>Voir {{cssxref("&lt;percentage&gt;")}}, voir {{cssxref("border-radius")}} pour plus de détails sur la proportionnalité des pourcentages.</dd>
</dl>

<h3 id="Gestion_des_valeurs_multiples">Gestion des valeurs multiples :</h3>

<ul>
 <li>Si une seule valeur est définie, celle-ci s'applique pour les 4 angles.</li>
 <li>Si deux valeurs sont fournies, la première s'applique aux angles en haut à gauche et en bas à droite et la seconde s'applique aux angles en haut à droite et en bas à gauche.</li>
 <li>Si trois valeurs sont fournies, la première s'applique à l'angle en haut à gauche, la deuxième aux angles en haut à droite et en bas à gauche et la troisième s'applique à l'angle en bas à droite.</li>
 <li>Si quatre valeurs sont fournies, la première s'applique à l'angle en haut à gauche, la deuxième en haut à droite, la troisième en bas à droite et la quatrième en bas à gauche.</li>
</ul>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.exemple1 {
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius: 12% 1em 25px;
}

.exemple2 {
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius-topleft: 12%;
  -moz-outline-radius-topright: 1em;
  -moz-outline-radius-bottomright: 35px;
  -moz-outline-radius-bottomleft: 1em;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p class="exemple1"&gt;
  La propriété outline-style en utilisant -moz-outline-radius
&lt;/p&gt;
&lt;p class="exemple2"&gt;
  Un exemple légèrement plus compliqué avec -moz-outline-radius-xxx
&lt;/p&gt;
</pre>

<h3 id="Résultat"><strong>Résultat</strong></h3>

<p>{{EmbedLiveSample('Exemples', '200', '200')}}</p>

<div class="note">
<p><strong>Note :</strong> Cette propriété étant spécifique à Firefox, l'exemple ci-avant ne fonctionnera pas dans un autre navigateur.</p>
</div>

<h2 id="Notes">Notes</h2>

<ul>
 <li>Les coins pour lesquels on utilise la valeur <code>dotted</code> ou <code>dashed</code> sont affichés avec des lignes pleines (cf. {{bug("382721")}}) jusqu'à Firefox 50.</li>
 <li>Cette propriété sera vraisemblablement abandonnée dans les prochaines versions de Gecko (cf. {{bug("593717")}}).</li>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété est une propriété propriétaire liée à Mozilla/Gecko et ne fait partie d'aucune spécification.</p>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.-moz-outline-radius")}}</p>
