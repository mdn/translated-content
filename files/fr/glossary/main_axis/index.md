---
title: Axe principal
slug: Glossary/Main_Axis
tags:
  - CSS
  - Glossaire
  - axes
  - flexbox
translation_of: Glossary/Main_Axis
original_slug: Glossaire/Axe_principal
---
<p>L'axe principal d'une {{glossary("flexbox")}} est déterminé par la direction définie dans la propriété {{cssxref("flex-direction")}}. Il y a 4 valeurs possibles pour <code>flex-direction</code>. Ce sont :</p>

<ul>
 <li><code>row</code> (<em>ligne</em>)</li>
 <li><code>row-reverse</code></li>
 <li><code>column</code> (<em>colonne</em>)</li>
 <li><code>column-reverse</code></li>
</ul>

<p>Si vous choisissez <code>row</code> ou <code>row-reverse</code> votre axe principal passera alors le long de la ligne dans le sens de la direction définie.</p>

<p><img alt="In this image the flex-direction is row which forms the main axis" src="basics1.png"></p>

<p>Choisissez <code>column</code> ou <code>column-reverse</code> et votre axe principal parcourt du début au pied de la page dans la direction du bloc.</p>

<p><img alt="" src="basics2.png"></p>

<p>Sur l'axe principal, vous pouvez contrôler le dimensionnement des éléments flexibles en ajoutant tout espace disponible aux éléments eux-mêmes, par le biais des propriétés <code>flex</code> sur les éléments. Ou, vous pouvez contrôler l'espace entre et autour des éléments en utilisant la propriété <code>justify-content</code>.</p>

<h2 id="En_apprendre_plus">En apprendre plus</h2>

<h3 id="Références_de_la_propriété">Références de la propriété</h3>

<ul>
 <li>{{cssxref("flex-basis")}}</li>
 <li>{{cssxref("flex-direction")}}</li>
 <li>{{cssxref("flex-grow")}}</li>
 <li>{{cssxref("flex-shrink")}}</li>
 <li>{{cssxref("justify-content")}}</li>
 <li>{{cssxref("flex")}}</li>
</ul>

<h3 id="En_lire_plus">En lire plus</h3>

<ul>
 <li>Guide Flexbox CSS : <em><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox">Les concepts de base pour flexbox</a></em></li>
 <li>Guide Flexbox CSS : <em><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_%C3%A9l%C3%A9ments_dans_un_conteneur_flexible">Aligner des éléments dans un conteneur flexible</a></em></li>
 <li>Guide Flexbox CSS : <em><a href="/fr/docs/Web/CSS/Disposition_flexbox_CSS/Contr%C3%B4ler_les_proportions_des_bo%C3%AEtes_flexibles_le_long_de_l_axe_principal">Contrôler les proportions des boîtes flexibles le long de l'axe principal</a></em></li>
</ul>
