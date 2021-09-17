---
title: 'L''alignement des boîtes pour les dispositions : en bloc, absolue, en tableau'
slug: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
tags:
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
original_slug: Web/CSS/CSS_Box_Alignment/Alignement_boîtes_disposition_bloc_absolue_tableau
---
<div>{{CSSRef}}</div>

<p>Le module de spécification <em><a href="/fr/docs/Web/CSS/CSS_Box_Alignment">Box Alignment</a></em> détaille le fonctionnement de l'alignement selon les différentes méthodes de disposition. Dans cet article, nous verrons comment fonctionne l'alignement des boîtes dans une disposition en bloc, y compris pour les éléments flottants, les éléments positionnés et les tableaux. Cette page détaille les aspects spécifiques relatifs à l'alignement et à la disposition en bloc. Pour une description générale des fonctionnalités communes pour les différentes dispositions, voir <a href="/fr/docs/Web/CSS/CSS_Box_Alignment">la page principale sur cette spécification</a>.</p>

<div class="note">
<p><strong>Note :</strong> À l'heure où cet article est écrit (juin 2018), il n'y a pas de réelle prise en charge des propriétés d'alignement pour la disposition en bloc. Ce document détaille les intentions de la spécification dans un souci d'exhaustivité mais il est probable que des modifications soient apportées au fur et à mesure de l'évolution de la spécification et de l'implémentation par les navigateurs.</p>
</div>

<h2 id="align-content_et_justify-content"><code>align-content</code> et <code>justify-content</code></h2>

<p>La propriété {{cssxref("justify-content")}} ne s'applique pas aux conteneurs en bloc ou aux cellules de tableau.</p>

<p>La propriété {{cssxref("align-content")}} s'applique sur l'axe de bloc afin d'aligne les contenus de la boîte dans le conteneur. Si une méthode de distribution telle que <code>space-between</code>, <code>space-around</code> ou <code>space-evenly</code> est utilisée, c'est la méthode de recours qui sera utilisée car tout le contenu est considéré comme <a href="/fr/docs/Web/CSS/CSS_Box_Alignment#Le_sujet_de_l'alignement_(alignment_subject)">un seul sujet d'alignement</a>.</p>

<h2 id="justify-self"><code>justify-self</code></h2>

<p>La propriété {{cssxref("justify-self")}} est utilisée afin d'aligner un objet au sein de son bloc englobant selon l'axe en ligne.</p>

<p>Cette propriété ne s'applique pas aux éléments flottants ou aux cellules de tableau.</p>

<h3 id="Éléments_positionnés_de_façon_absolue">Éléments positionnés de façon absolue</h3>

<p>Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage <code>top</code>, <code>left</code>, <code>bottom</code> et <code>right</code>. Le mot-clé <code>normal</code> est considéré équivalent à <code>stretch</code> sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à <code>start</code>.</p>

<h2 id="align-self"><code>align-self</code></h2>

<p>La propriété {{cssxref("align-self")}} ne s'applique pas aux boîtes de bloc (y compris pour les éléments flottants) car il y a plus d'un objet sur l'axe de bloc. Elle ne s'applique pas non plus aux cellules des tableaux.</p>

<h3 id="Éléments_positionnés_de_façon_absolue_2">Éléments positionnés de façon absolue</h3>

<p>Le conteneur d'alignement correspond au bloc positionné en prenant en compte les valeurs de décalage <code>top</code>, <code>left</code>, <code>bottom</code> et <code>right</code>. Le mot-clé <code>normal</code> est considéré équivalent à <code>stretch</code> sauf si l'élément positionné est un élément remplacé, auquel cas il est équivalent à <code>start</code>.</p>

<h2 id="Utilisation_actuelle_de_l'alignement_pour_ces_dispositions">Utilisation actuelle de l'alignement pour ces dispositions</h2>

<p>À l'heure actuelle, les navigateurs n'implémentent pas l'alignement des boîtes pour la disposition en bloc. Il faut donc, pour le moment, utiliser les méthodes existantes ou placer un élément dans un conteneur flexible afin de tirer parti des fonctionnalités d'alignement des boîtes flexibles.</p>

<p>Avant l'apparition des boîtes flexibles (<em>flexbox</em>), l'alignement horizontal était généralement obtenu avec des marges automatiques. En effet, {{cssxref("margin")}} avec <code>auto</code> absorbera tout l'espace disponible sur la dimension souhaité et avec une marge droite et une marge gauche automatiques, le bloc sera placé au centre :</p>

<pre class="brush: css">.container {
  width: 20em;
  margin-left: auto;
  margin-right: auto;
}
</pre>

<p>Dans une disposition en tableau, il faut accéder à la propriété {{cssxref("vertical-align")}} afin d'aligner le contenu d'une cellule dans celle-ci.</p>

<p>Pour de nombreux scénarios, transformer le conteneur de bloc en élément flexible fournira les options d'alignement souhaitées. Dans l'exemple qui suit, on dispose d'un conteneur avec un seul élément et ce conteneur a été transformé en élément flexible afin d'utiliser les propriétés d'alignement.</p>

<p>{{EmbedGHLiveSample("css-examples/flexbox/alignment/intro.html", '100%', 700)}}</p>

<h2 id="Référence">Référence</h2>

<h3 id="Propriétés_CSS">Propriétés CSS</h3>

<ul>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("align-content")}}</li>
 <li>{{cssxref("justify-self")}}</li>
 <li>{{cssxref("align-self")}}</li>
</ul>

<h3 id="Termes_du_glossaire">Termes du glossaire</h3>

<ul>
 <li><a href="/fr/docs/Glossary/Alignment_Subject">Sujet d'alignement</a></li>
 <li><a href="/fr/docs/Glossary/Alignment_Container">Conteneur d'alignement</a></li>
 <li><a href="/fr/docs/Glossary/Fallback_Alignment">Alignement de recours</a></li>
</ul>
