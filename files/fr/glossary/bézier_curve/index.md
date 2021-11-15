---
title: Courbe de Bézier
slug: Glossary/Bézier_curve
tags:
  - Courbe de Bézier
  - Glossaire
  - Reference
  - graphique
translation_of: Glossary/Bézier_curve
original_slug: Glossaire/Bézier_curve
---
<p>Une <strong>courbe de Bézier</strong> est une courbe décrite mathématiquement utilisée en infographie et en animation. Dans {{Glossary("vector image", "vector images")}}, elles sont utilisées pour modéliser des courbes lisses qui peuvent être redimensionnées indéfiniment.</p>

<p>La courbe est définie par un ensemble de points de contrôle avec un minimum de deux. Les graphiques et animations Web utilisent Cubic Béziers, qui sont des courbes avec quatre points de contrôle P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, et P<sub>3</sub>.</p>

<p>Pour tracer la courbe, deux lignes imaginaires sont tracées l'une de P<sub>0</sub> à P<sub>1</sub> et l'autre de P<sub>1</sub> à P<sub>2</sub>. Les extrémités des lignes sont ensuite régulièrement déplacées vers le point suivant. Une troisième ligne imaginaire est dessinée avec son point de départ se déplaçant régulièrement sur la première ligne d'assistance et le point final sur la deuxième ligne d'assistance. Sur cette ligne imaginaire, un point est dessiné à partir de son point de départ en se déplaçant régulièrement vers son point final. La courbe décrite par ce point est la courbe de Bézier. Voici une illustration animée démontrant la création de la courbe :</p>

<p><img alt="Drawing a Bézier curve" src="bézier_3_big.gif"></p>

<h2 id="Apprendre_plus">Apprendre plus</h2>

<h3 id="Culture_générale">Culture générale</h3>

<ul>
 <li><a href="https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier">courbe de Bézier sur Wikipedia</a></li>
</ul>

<h3 id="En_savoir_plus">En savoir plus</h3>

<ul>
 <li><a href="/fr/docs/Web/CSS/timing-function#The_cubic-bezier()_class_of_timing_functions">Fonctions de synchronisation Cubic Bézier en CSS</a></li>
 <li>{{SVGAttr("keySplines")}} Attribut SVG</li>
 <li><a href="/fr/docs/Web/CSS/Tools/Cubic_Bezier_Generator">Générateur Cubic Bézier</a></li>
</ul>
