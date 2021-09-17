---
title: Grilles CSS (CSS Grid)
slug: Web/CSS/CSS_Grid_Layout
tags:
  - CSS
  - CSS Grids
  - Grilles CSS
  - Reference
translation_of: Web/CSS/CSS_Grid_Layout
---
<div>{{CSSRef}}</div>

<p>Le module <em><strong>CSS Grid layout</strong></em> (modèle de disposition en grille) est un module de la spécification CSS qui permet de créer des mises en page en divisant l'espace d'affichage en régions utilisables par une application ou en définissant des relations de taille, position et d'empilement entre les éléments HTML.</p>

<p>Comme les tableaux, la grille permet d'aligner des éléments sous forme de colonnes et de lignes mais à la différence des tableaux, la grille n'a pas de structure de contenu. Ainsi, on peut créer de nombreuses mises en page qui n'auraient pas été possibles avec les tableaux. Ainsi, les éléments fils d'un conteneur en grille peuvent être positionnés afin qu'ils se chevauchent ou qu'ils se comportent comme des éléments positionnés.</p>

<h2 id="Un_exemple_simple">Un exemple simple</h2>

<p>Dans l'exemple qui suit, on montre comment utiliser une grille avec trois pistes en colonnes pour laquelle les nouvelles lignes créées mesureront au moins 100 pixels et auront au plus la taille automatique (définie par leur contenu). Les éléments sont placés sur la grille grâce aux numéros des lignes horizontales et verticales.</p>

<pre class="brush: css hidden">* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper &gt; div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="wrapper"&gt;
  &lt;div class="one"&gt;Un&lt;/div&gt;
  &lt;div class="two"&gt;Deux&lt;/div&gt;
  &lt;div class="three"&gt;Trois&lt;/div&gt;
  &lt;div class="four"&gt;Quatre&lt;/div&gt;
  &lt;div class="five"&gt;Cinq&lt;/div&gt;
  &lt;div class="six"&gt;Six&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
</pre>

<p>{{EmbedLiveSample("Un_exemple_simple", "100%", "440")}}</p>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("grid-template-columns")}}</li>
 <li>{{cssxref("grid-template-rows")}}</li>
 <li>{{cssxref("grid-template-areas")}}</li>
 <li>{{cssxref("grid-template")}}</li>
 <li>{{cssxref("grid-auto-columns")}}</li>
 <li>{{cssxref("grid-auto-rows")}}</li>
 <li>{{cssxref("grid-auto-flow")}}</li>
 <li>{{cssxref("grid")}}</li>
 <li>{{cssxref("grid-row-start")}}</li>
 <li>{{cssxref("grid-column-start")}}</li>
 <li>{{cssxref("grid-row-end")}}</li>
 <li>{{cssxref("grid-column-end")}}</li>
 <li>{{cssxref("grid-row")}}</li>
 <li>{{cssxref("grid-column")}}</li>
 <li>{{cssxref("grid-area")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<h3 id="Fonctions_CSS">Fonctions CSS</h3>

<ul>
 <li>{{cssxref("repeat", "repeat()")}}</li>
 <li>{{cssxref("minmax", "minmax()")}}</li>
 <li>{{cssxref("fit-content", "fit-content()")}}</li>
</ul>

<h3 id="Types_de_donnée_CSS">Types de donnée CSS</h3>

<p>{{cssxref("&lt;flex&gt;")}}</p>

<h3 id="Termes_définis_dans_le_glossaire">Termes définis dans le glossaire</h3>

<ul>
 <li><a href="/fr/docs/Glossaire/Grid">Grille</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Lines">Lignes</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Tracks">Pistes</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Cell">Cellules</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Areas">Zones</a></li>
 <li><a href="/fr/docs/Glossaire/Gutters">Gouttières</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Axis">Axe</a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Rows">Ligne horizontale </a></li>
 <li><a href="/fr/docs/Glossaire/Grid_Column">Colonnes</a></li>
</ul>

<h2 id="Guides">Guides</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base">Les concepts de base</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Placer_les_éléments_sur_les_lignes_d_une_grille_CSS">Placer les éléments sur les lignes d'une grille CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition">Le modèle de grille et les autres modèles de disposition</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Utiliser_des_lignes_nommées_sur_une_grille">Utiliser des lignes nommées sur une grille</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Définir_des_zones_sur_une_grille">Définir des zones sur une grille</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Placement_automatique_sur_une_grille_CSS">Le placement automatique sur une grille</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS">L'alignement des boîtes avec les grilles CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_les_valeurs_logiques_les_modes_d_écriture">Les grilles CSS, les valeurs logiques et les modes d'écriture</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilité">Les grilles CSS et l'accessibilité</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_amélioration_progressive">Les grilles CSS et l'amélioration progressive</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Construire_des_dispositions_courantes_avec_des_grilles_CSS">Construire des dispositions courantes avec des grilles CSS</a></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Subgrid">Les sous-grilles (<em>subgrid</em>)</a></li>
</ul>

<h2 id="Ressources_externes">Ressources externes</h2>

<ul>
 <li><a href="http://labs.jensimmons.com/">Des exemples créés par Jen Simmons (en anglais)</a></li>
 <li><a href="http://gridbyexample.com/">Les grilles CSS par l'exemple - un ensemble d'exemples et de tutoriels (en anglais)</a></li>
 <li><a href="https://tympanus.net/codrops/css_reference/grid/">La référence Codrops sur les grilles CSS (en anglais)</a></li>
 <li><a href="/fr/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">L'inspecteur de grille dans les outils de développement Firefox</a></li>
 <li><a href="https://mozilladevelopers.github.io/playground/">Le bac à sable CSS Grid (en anglais)</a></li>
 <li><a href="http://tomrothe.de/posts/css_grid_and_ie11.html">Les grilles CSS et Internet Explorer 11</a> (<a href="https://github.com/motine/css_grid_annotator">prothèse - <em>polyfill</em></a>)</li>
</ul>

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
   <td>{{SpecName('CSS Grid 2')}}</td>
   <td>{{Spec2("CSS Grid 2")}}</td>
   <td>Ajout des <a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base#Sous-grille">« sous-grilles » (<em>subgrids</em>)</a>.</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Grid')}}</td>
   <td>{{Spec2('CSS3 Grid')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>
