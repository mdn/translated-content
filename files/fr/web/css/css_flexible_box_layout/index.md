---
title: Disposition des boîtes flexibles CSS
slug: Web/CSS/CSS_Flexible_Box_Layout
tags:
  - Aperçu
  - CSS
  - CSS Flexible Box Layout
  - CSS Flexible Boxes
  - Reference
translation_of: Web/CSS/CSS_Flexible_Box_Layout
---
<div>{{CSSRef}}</div>

<p><strong>Le module de disposition des boîtes flexibles CSS</strong> (<em>CSS Flexible Box Layout</em>) est un module de CSS qui définit un modèle de boîtes optimisé pour la conception des interfaces utilisateurs. En utilisant le modèle des boîtes flexibles, les éléments d'une conteneur flexible peuvent être disposés dans n'importe quelle direction et étendre leurs dimensions (pour remplir un espace vide) ou se réduire pour éviter de dépasser en dehors de l'élément parent. On peut facilement manipuler les alignements horizontal et vertical des éléments fils. On peut aussi imbriquer plusieurs niveaux de boîtes flexibles afin de construire des dispositions en deux dimensions..</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple qui suit, on utilise <code>display: flex</code> pour un conteneur. Cela signifie que les trois éléments fils deviennent des éléments flexibles. La propriété <code>justify-content</code> a été paramétrée avec la valeur <code>space-between</code> afin d'espacer les éléments de façon égale le long de l'axe principal. Ainsi, on a le même espace à droite et à gauche de chaque élément et, aux extrêmités du conteneur, les bords des éléments fils qui sont alignés avec les bords du conteneur. On peut également voir que les éléments sont étirés le long de l'axe orthogonal (<em>cross axis</em>) car la valeur par défaut de la propriété <code>align-items </code>est <code>stretch</code>. Ainsi, les éléments flexibles s'étirent pour occuper toute la hauteur du conteneur flexible, ils sont donc aussi grands que le plus grand des éléments.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}</p>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("flex")}}</li>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex-flow")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("flex-wrap")}}</li>
 <li>{{cssxref("order")}}</li>
</ul>

<h3 id="Propriétés_relatives_à_l'alignement">Propriétés relatives à l'alignement</h3>

<p>Les propriétés <code>align-content</code>, <code>align-self</code>, <code>align-items</code> et <code>justify-content</code> étaient initialement définies dans la spécification Flexbox mais sont désormais définies dans la spécification sur l'alignement des boîtes et la spécification Flexbox fait référence à cette nouvelle spécification pour les définitions à jour. Des propriétés d'alignement additionnelles ont également été définies dans le module de spécification <em>Box Alignment</em>.</p>

<ul>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("align-items")}}</li>
 <li>{{cssxref("align-self")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("place-items")}}</li>
 <li>{{cssxref("place-content")}}</li>
 <li>{{cssxref("row-gap")}}</li>
 <li>{{cssxref("column-gap")}}</li>
 <li>{{cssxref("gap")}}</li>
</ul>

<h3 id="Termes_du_glossaire">Termes du glossaire</h3>

<ul>
 <li><a href="/fr/docs/Glossary/Flexbox">Flexbox / boîte flexible</a></li>
 <li><a href="/fr/docs/Glossary/Flex_Container">Conteneur flexible</a></li>
 <li><a href="/fr/docs/Glossary/Flex_Item">Objet flexible</a></li>
 <li><a href="/fr/docs/Glossary/Main_Axis">Axe principal</a></li>
 <li><a href="/fr/docs/Glossary/Cross_Axis">Axe secondaire</a></li>
</ul>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox">Les concepts de base des boîtes flexibles</a></dt>
 <dd>Un aperçu des différentes fonctionnalités offertes par les boîtes flexibles.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Liens_entre_flexbox_et_les_autres_dispositions">Les liens entre <em>flexbox</em> et les autres méthodes de disposition</a></dt>
 <dd>Comment <em>flexbox</em> s'articule avec les autres méthodes de disposition et les différents modules de spécification CSS.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible">L'alignement des éléments au sein d'un conteneur flexible</a></dt>
 <dd>Le fonctionnement des propriétés d'alignement des boîtes dans le contexte des boîtes flexibles.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Ordonner_éléments_flexibles">Ordonner les éléments flexibles</a></dt>
 <dd>Ce guide explique les différentes méthodes qui permettent de modifier l'ordre et la direction des éléments dans le conteneur flexible et aborde également les problèmes que cela peut causer.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal">Contrôler les proportions des éléments flexibles le long de l'axe principal</a></dt>
 <dd>Cet article explique le fonctionnement des propriétés <code>flex-grow</code>, <code>flex-shrink</code> et <code>flex-basis</code>.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Ma%C3%AEtriser_passage_%C3%A0_la_ligne_des_%C3%A9l%C3%A9ments_flexibles">Maîtriser le passage à la ligne des éléments flexibles</a></dt>
 <dd>Comment créer des conteneur flexibles qui s'étendent sur plusieurs lignes et contrôler l'affichage des éléments sur ces lignes.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Cas_utilisation_flexbox">Les cas d'utilisation classiques des boîtes flexibles</a></dt>
 <dd>Des <em>design patterns</em> pouvant être résolus avec les boîtes flexibles.</dd>
 <dt><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/R%C3%A9trocompatibilite_de_flexbox">La rétrocompatibilité de <em>flexbox</em></a></dt>
 <dd>L'état de la compatibilité des navigateurs pour les boîtes flexibles, les différents problème d'interopérabilité, la gestion des anciens navigateurs et l'évolution de la spécification.</dd>
</dl>

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
   <td>{{SpecName('CSS3 Flexbox')}}</td>
   <td>{{ Spec2('CSS3 Flexbox') }}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://github.com/philipwalton/flexbugs">Flexbugs : une liste, maintenue par la communauté, des différents bugs des navigateurs relatifs aux boîtes flexibles et les éventuelles méthodes de contournements associées</a></li>
 <li><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Mixins">Mixins multi-navigateurs pour flexbox</a> : cet article fournit un ensemble de mixins pour obtenir l'effet des flexbox de façon homogène sur les différents navigateurs qui ne supportent pas la syntaxe moderne pour les boîtes flexibles</li>
</ul>
