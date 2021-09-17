---
title: align-self
slug: Web/CSS/align-self
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/align-self
---
<div>{{CSSRef}}</div>

<p>La propriété CSS <strong><code>align-self</code></strong> permet d'aligner les objets flexibles d'une ligne flexible ou d'une grille en surchargeant la valeur donnée par {{cssxref("align-items")}}.</p>

<p>Si l'un des objet a une marge automatique (<code>auto</code>) pour l'axe perpendiculaire à l'axe principal, <code>align-self</code> sera ignoré. Lorsque le conteneur est une grille, <code>align-self</code> permet d'aligner l'élément au sein de <a href="/fr/docs/Glossaire/Zones_de_grille">la zone de grille</a>. Si le conteneur est une boîte flexible, l'alignement se fait selon <a href="/fr/docs/Glossaire/Axe_transversal">l'axe secondaire</a>.</p>

<div>{{EmbedInteractiveExample("pages/css/align-self.html")}}</div>

<p>Cette propriété ne s'applique pas aux boîtes qui sont des blocs ou aux cellules d'un tableau.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: css no-line-numbers">/* Valeurs avec un mot-clé */
align-self: auto;
align-self: normal;

/* Alignement géométrique */
/* align-self ne gère pas les valeurs left et right */
align-self: center; /* Les éléments sont alignés sur le centre */
align-self: start; /* Les éléments sont alignés au début de l'axe */
align-self: end; /* Les éléments sont alignés à la fin de l'axe */
align-self: self-start; /* Les éléments sont alignés par rapport à leur début */
align-self: self-end; /* Les éléments sont alignés par rapport à leur fin */
align-self: flex-start; /* Les éléments flexibles sont alignés au début */
align-self: flex-end; /* Les éléments flexibles sont alignés à la fin */

/* Alignement selon la ligne de base */
align-self: baseline;
align-self: first baseline;
align-self: last baseline;
align-self: stretch; /* Les objets dimensionnés avec 'auto' sont */
                     /* étirés pour remplir le conteneur */

/* Alignement avec gestion du dépassement */
align-self: safe center;
align-self: unsafe center;

/* Valeurs globales */
align-self: inherit;
align-self: initial;
align-self: unset;</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><code>auto</code></dt>
 <dd>La valeur est calculée par rapport à celle de {{cssxref("align-items")}}.</dd>
 <dt><code>normal</code></dt>
 <dd>L'effet de ce mot-clé dépend du mode de disposition utilisé :
 <ul>
  <li>Pour une disposition absolue, ce mot-clé est synonyme de <code>start</code> pour les boîtes remplacées positionnées de façon absolue, il est synonyme de <em>stretch</em> pour les autres boîtes positionnées de façon absolue.</li>
  <li>Pour une disposition absolue et des positions statiques, ce mot-clé est synonyme de <code>stretch</code>.</li>
  <li>Pour les éléments flexibles, ce mot-clé est synonyme de <code>stretch</code>.</li>
  <li>Pour les éléments positionnés sur une grille, ce mot-clé est synonyme de <code>stretch</code>, sauf pour les boîtes qui ont un ratio d'aspec ou des dimensions intrinsèques, dans ce cas, cette valeur se comporte comme <code>start</code>.</li>
  <li>Cette propriété ne s'applique pas aux boîtes qui sont des blocs ou aux cellules d'un tableau.</li>
 </ul>
 </dd>
 <dt><code>self-start</code></dt>
 <dd>Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur au début de l'axe.</dd>
 <dt><code>self-end</code></dt>
 <dd>Les éléments sont alignés dans l'axe perpendiculaire à l'axe principal pour que le bord correspondant soit aligné avec le bord du conteneur à la fin de l'axe.</dd>
 <dt><code>flex-start</code></dt>
 <dd>Le bord de l'élément flexible, au début de l'axe perpendiculaire à l'axe principal, est aligné avec le bord au début de l'axe perpendiculaire pour la ligne flexible.</dd>
 <dt><code>flex-end</code></dt>
 <dd>Le bord de l'élément flexible, à la fin de l'axe perpendiculaire à l'axe principal, est aligné avec le bord à la fin de l'axe perpendiculaire pour la ligne flexible.</dd>
 <dt><code>center</code></dt>
 <dd>La boîte définies par les marges est centrée sur la ligne de l'axe perpendiculaire à l'axe principal de la ligne. Si l'élément est plus grand que le conteneur dans ce sens, il dépassera également de chaque côté.</dd>
 <dt><code>baseline<br>
 first baseline</code><br>
 <code>last baseline</code></dt>
 <dd>Indique l'alignement par rapport à la ligne de base.<br>
 Si besoin, la valeur <code>first baseline</code> est remplacée par <code>start</code> et <code>last baseline</code> est remplacée par <code>end</code>.</dd>
 <dt><code>stretch</code></dt>
 <dd>Si la somme des dimensions des éléments sur l'axe perpendiculaire à l'axe principal est inférieure à la dimension du conteneur et que l'élément est dimensionné automatiquement, celui-ci est agrandi (tout en respectant les éventuelles contraintes dictées par {{cssxref("max-height")}}/{{cssxref("max-width")}} ou autres) afin que l'ensemble des éléments remplissent le conteneur sur cet axe.</dd>
 <dt><code>safe</code></dt>
 <dd>Si la taille d'un élément dépasse du conteneur avec l'alignement fourni par la valeur, l'élément sera en réalité aligné comme si la valeur <code>start</code> avait été utilisée.</dd>
 <dt><code>unsafe</code></dt>
 <dd>Quelle que soit les tailles relatives des objets par rapport au conteneur, la valeur indiquant l'alignement sera respectée.</dd>
</dl>

<h3 id="Syntaxe_formelle">Syntaxe formelle</h3>

{{csssyntax}}

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.flex-container {
  height: 250px;
  display: flex;
}

.element-flex {
  background: palegreen;
  width: 100px;
  padding: 5px;
  margin: 5px;
  line-height: 50px;
  font-size: 2em;
}

.center {
  -webkit-align-self: center;
  align-self: center;
}

.baseline {
  -webkit-align-self: baseline;
  align-self: baseline;
}

.stretch {
  -webkit-align-self: stretch;
  align-self: stretch;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="flex-container"&gt;
  &lt;p class="element-flex center"&gt;Milieu&lt;/p&gt;
  &lt;p class="element-flex baseline"&gt;Base&lt;/p&gt;
  &lt;p class="element-flex stretch"&gt;Étiré&lt;/p&gt;
&lt;/div&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","300","300")}}</p>

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
   <td>{{SpecName("CSS3 Box Alignment", "#propdef-align-self", "align-self")}}</td>
   <td>{{Spec2("CSS3 Box Alignment")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Flexbox", "#propdef-align-self", "align-self")}}</td>
   <td>{{Spec2("CSS3 Flexbox")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<p>{{cssinfo}}</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<h3 id="Prise_en_charge_pour_les_dispositions_avec_les_boîtes_flexibles_(Flexbox)">Prise en charge pour les dispositions avec les boîtes flexibles (<em>Flexbox</em>)</h3>

<p>{{Compat("css.properties.align-self.flex_context")}}</p>

<h3 id="Prise_en_charge_pour_les_dispositions_avec_les_grilles_CSS">Prise en charge pour les dispositions avec les grilles CSS</h3>

<p>{{Compat("css.properties.align-self.grid_context")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Disposition_des_boîtes_flexibles_CSS/Utilisation_des_flexbox_en_CSS">Utiliser les boîtes flexibles CSS</a></li>
 <li>Guide sur les boîtes flexibles : <em><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox">Les concepts de bases</a></em></li>
 <li>Guide sur les boîtes flexibles : <em><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible">Aligner des objets dans un conteneur flexible</a></em></li>
 <li>Guide sur les grilles : <em><a href="/fr/docs/Web/CSS/CSS_Grid_Layout/Alignement_des_boîtes_avec_les_grilles_CSS">Aligner des objets dans une grille</a></em></li>
 <li><a href="/fr/docs/Web/CSS/CSS_Box_Alignment">Le module de spécification CSS Box Alignment</a></li>
 <li>La propriété {{cssxref("align-items")}}</li>
</ul>
