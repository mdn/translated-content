---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/grid-auto-flow
---
<div>{{CSSRef}}</div>

<p>La propriété <strong><code>grid-auto-flow</code></strong> permet de contrôler la façon dont fonctionne l'algorithme de placement automatique. Celui-ci définit exactement comme les objets placés automatiquement s'inscrivent dans la grille.</p>

<div>{{EmbedInteractiveExample("pages/css/grid-auto-flow.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Valeurs globales */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: unset;
</pre>

<p>Cette propriété peut prendre deux formes :</p>

<ul>
 <li>la première avec un seul mot-clé parmi : <code>row</code>, <code>column</code> ou <code>dense</code></li>
 <li>la seconde avec deux mots-clés : <code>row dense</code> ou <code>column dense</code>.</li>
</ul>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>row</code></dt>
 <dd>Les éléments sont organisés en remplissant chacune des lignes au fur et à mesure, quitte à en ajouter si besoin. Si aucune valeur entre <code>row</code> ou <code>column</code> n'est fournie, <code>row</code> sera la valeur par défaut.</dd>
 <dt><code>column</code></dt>
 <dd>Les éléments sont organisés en remplissant chacune des colonnes au fur et à mesure, quitte à en ajouter si besoin.</dd>
 <dt><code>dense</code></dt>
 <dd>L'algorithme de placement automatique utilisera une méthode de « regroupement dense » où il essaie de remplir les trous dans la grille si des éléments plus petits arrivent ensuite. De fait, on peut obtenir une impression de désordre alors qu'il s'agit simplement du comblement des espaces libres.
 <p>Si cette valeur est absente, le moteur utilisera un algorithme simple qui ne fait que se déplacer vers l'avant, sans revenir vers les espaces vides. De cette façon, les éléments apparaitront nécessairement dans l'ordre mais pourront laisser des trous.</p>
 </dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h2 id="Exemples">Exemples</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">#grid {
  height: 200px;
  width: 200px;
  display: grid;
  grid-gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column;  /* ou 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div id="grid"&gt;
  &lt;div id="item1"&gt;&lt;/div&gt;
  &lt;div id="item2"&gt;&lt;/div&gt;
  &lt;div id="item3"&gt;&lt;/div&gt;
  &lt;div id="item4"&gt;&lt;/div&gt;
  &lt;div id="item5"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;select id="direction" onchange="changeGridAutoFlow()"&gt;
  &lt;option value="column"&gt;column&lt;/option&gt;
  &lt;option value="row"&gt;row&lt;/option&gt;
&lt;/select&gt;
&lt;input id="dense" type="checkbox" onchange="changeGridAutoFlow()"&gt;
&lt;label for="dense"&gt;dense&lt;/label&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js;">function changeGridAutoFlow() {
  var grid = document.getElementById("grid");
  var direction = document.getElementById("direction");
  var dense = document.getElementById("dense");
  var gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", "200px", "230px")}}</p>

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
   <td>{{SpecName("CSS3 Grid", "#propdef-grid-auto-flow", "grid-auto-flow")}}</td>
   <td>{{Spec2("CSS3 Grid")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("css.properties.grid-auto-flow")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{cssxref("grid-auto-rows")}}</li>
 <li>{{cssxref("grid-auto-columns")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS">Guide : le placement automatique sur la grille</a></li>
 <li>Tutoriel vidéo : <a href="http://gridbyexample.com/video/series-auto-placement-order/">Introduction au placement automatique sur la grille et à l'ordre des éléments (en anglais)</a></li>
</ul>
