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
Une **courbe de Bézier** est une courbe décrite mathématiquement utilisée en infographie et en animation. Dans {{Glossary("vector image", "vector images")}}, elles sont utilisées pour modéliser des courbes lisses qui peuvent être redimensionnées indéfiniment.

La courbe est définie par un ensemble de points de contrôle avec un minimum de deux. Les graphiques et animations Web utilisent Cubic Béziers, qui sont des courbes avec quatre points de contrôle P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, et P<sub>3</sub>.

Pour tracer la courbe, deux lignes imaginaires sont tracées l'une de P<sub>0</sub> à P<sub>1</sub> et l'autre de P<sub>1</sub> à P<sub>2</sub>. Les extrémités des lignes sont ensuite régulièrement déplacées vers le point suivant. Une troisième ligne imaginaire est dessinée avec son point de départ se déplaçant régulièrement sur la première ligne d'assistance et le point final sur la deuxième ligne d'assistance. Sur cette ligne imaginaire, un point est dessiné à partir de son point de départ en se déplaçant régulièrement vers son point final. La courbe décrite par ce point est la courbe de Bézier. Voici une illustration animée démontrant la création de la courbe :

![Drawing a Bézier curve](bézier_3_big.gif)

## Apprendre plus

### Culture générale

- [courbe de Bézier sur Wikipedia](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier)

### En savoir plus

- [Fonctions de synchronisation Cubic Bézier en CSS](</fr/docs/Web/CSS/timing-function#The_cubic-bezier()_class_of_timing_functions>)
- {{SVGAttr("keySplines")}} Attribut SVG
- [Générateur Cubic Bézier](/fr/docs/Web/CSS/Tools/Cubic_Bezier_Generator)
