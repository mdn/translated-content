---
title: L'alignement des boîtes avec Flexbox
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
tags:
  - CSS
  - Guide
  - flexbox
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
original_slug: Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_Flexbox
---
<div>{{CSSRef}}</div>

<p>Le module de spécification <em><a href="/fr/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a></em> détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes avec les boîtes flexibles (<em>flexbox</em>). Cette page détaille les aspects spécifiques relatifs à l'alignement et aux boîtes flexibles. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir <a href="/fr/docs/Web/CSS/CSS_Box_Alignment">la page principale sur cette spécification</a>.</p>

<h2 id="Exemple_simple">Exemple simple</h2>

<p>Dans cet exemple, trois objets flexibles sont alignés sur l'axe principal avec {{cssxref("justify-content")}} et sur l'axe secondaire grâce à {{cssxref("align-items")}}. Le premier objet surcharge l'alignement fourni par <code>align-items</code>en utilisant <code>center</code> comme valeur pour la propriété {{cssxref("align-self")}}.</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 500)}}</p>

<h2 id="Liens_entre_les_axes_et_flex-direction">Liens entre les axes et <code>flex-direction</code></h2>

<p>Les boîtes flexibles respectent le mode d'écriture du document. Aussi, si on travaille sur un document en français et qu'on utilise {{cssxref("justify-content")}} avec <code>flex-end</code>, les éléments seront alignés à la fin du conteneur flexible. Si on utilise {{cssxref("flex-direction")}} avec la valeur <code>row</code>, cet alignement suivra la direction en ligne (celle selon laquelle le texte est écrit).</p>

<p>Toutefois, <em>Flexbox</em> permet de modifier l'axe principal en utilisant <code>flex-direction</code> avec la valeur <code>column</code>. Dans ce cas, <code>justify-content</code> alignera les objets selon la direction de bloc. Aussi, mieux vaut penser en termes d'axes principal (<em>main axis</em>) et d'axe secondaire (<em>cross axis</em>) lorsqu'on travaille sur des boîtes flexibles :</p>

<ul>
 <li>L'axe principal correspond à la direction fournie par <code>flex-direction</code> et l'alignement sur cet axe s'effectue avec <code>justify-content</code></li>
 <li>L'axe secondaire est orthogonal à l'axe principal et l'alignement s'effectue avec <code>align-content</code>, <code>align-self</code>/<code>align-items</code></li>
</ul>

<h3 id="Alignement_sur_l'axe_principal">Alignement sur l'axe principal</h3>

<ul>
 <li>{{cssxref("justify-content")}}</li>
</ul>

<h3 id="Alignement_sur_l'axe_secondaire">Alignement sur l'axe secondaire</h3>

<ul>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-content")}}</li>
</ul>

<h3 id="Absence_de_justify-self_pour_Flexbox">Absence de <code>justify-self</code> pour <em>Flexbox</em></h3>

<p>Sur l'axe principal et avec les boîtes flexibles, le contenu est considéré comme un seul groupe. La quantité d'espace nécessaire est calculée pour disposer les différents éléments et l'espace restant peut être réparti. La propriété <code>justify-content</code> contrôle la répartition de cet espace. Avec <code>justify-content: flex-end</code>, l'espace supplémentaire sera ajouté avant les éléments et avec <code>justify-content: space-around</code>, il sera placé de chaque côté.</p>

<p>Autrement dit, <code>justify-self</code> n'a pas de sens pour les boîtes flexibles car le contenu est considéré comme un seul « tenant » qui est déplacé.</p>

<p>Pour l'axe secondaire, <code>align-self</code> peut être pertinent car il peut y avoir un espace supplémentaire sur cet axe et selon lequel on peut déplacer un seul des éléments.</p>

<h2 id="Alignement_et_marges_automatiques">Alignement et marges automatiques</h2>

<p><code>justify-self</code> pourrait être utile lorsqu'on souhaite séparer un ensemble d'éléments flexibles pour créer un menu de navigation. Dans ce cas, on peut utiliser des marges automatiques avec <code>auto</code>. En effet, une marge avec cette valeur consommera tout l'espace disponible sur cette dimension. En définissant les marges gauche et droite avec <code>auto</code>, les deux côtés du bloc occuperont tout l'espace disponible et la boîte sera alors placée au centre.</p>

<p>En utilisant {{cssxref("margin")}} avec <code>auto</code> sur un élément d'un ensemble d'éléments flexibles alignés vers le début, on peut créer un tel effet. Dès qu'il n'y a plus d'espace disponible pour les marges automatiques, l'objet se comporte comme les autres objets flexibles et se réduit pour s'inscrire dans l'espace disponible.</p>

<p>{{EmbedGHLiveSample("css-examples/box-alignment/flexbox/auto-margins.html", '100%', 500)}}</p>

<h2 id="Les_propriétés_gap">Les propriétés <code>gap</code></h2>

<ul>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<h3 id="Créer_des_gouttières_fixes_entre_chaque_objet">Créer des gouttières fixes entre chaque objet</h3>

<p>Sur l'axe principal, la propriété <code>column-gap</code> permettra de créer des gouttières de taille fixe de chaque côté de l'objet.</p>

<p>Sur l'axe secondaire, <code>row-gap</code> permettra d'espace les lignes adjacentes. Aussi, il faut que <code>flex-wrap</code> vaille <code>wrap</code> afin que <code>row-gap</code> ait un effet.</p>

<div class="note">
<p><strong>Note :</strong> À l'heure où ces lignes sont écrites, seul Firefox 63 prend en charge les propriétés <code>gap</code> pour les boîtes flexibles. En effet, le comportement de ces propriétés pour les dispositions flexibles est un ajout récent à la spécification.</p>
</div>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("place-content")}}t</li>
 <li>{{cssxref("justify-items")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("place-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<h3 id="Termes_du_glossaire">Termes du glossaire</h3>

<ul>
 <li><a href="/fr/docs/Glossaire/Axe_transversal">Axe secondaire</a></li>
 <li><a href="/fr/docs/Glossaire/Axe_principal">Axe principal</a></li>
</ul>

<h2 id="Guides">Guides</h2>

<ul>
 <li><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible">L'alignement avec <em>Flexbox</em></a></li>
</ul>

<h2 id="Ressources_externes">Ressources externes</h2>

<ul>
 <li><a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Anti-sèche pour l'alignement des boîtes (en anglais)</a></li>
 <li><a href="https://www.smashingmagazine.com/2016/11/css-grids-flexbox-box-alignment-new-layout-standard/">Alignement pour les grilles, les boîtes flexibles et les boîtes (en anglais)</a></li>
 <li><a href="https://blogs.igalia.com/jfernandez/2017/05/03/can-i-use-css-box-alignment/">Quelques pensées sur les implémentations partielles de <em>Box Alignment</em> (en anglais)</a></li>
</ul>
