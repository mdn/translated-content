---
title: Courbe de Bézier
slug: Glossary/Bezier_curve
l10n:
  sourceCommit: edd12a268c7b2cbd1a5be394d9e89e9d8f285ad5
---

{{GlossarySidebar}}

Une **courbe de Bézier** est une courbe décrite mathématiquement utilisée en infographie et en animation. Pour les images vectorielles, elles sont utilisées afin de modéliser des courbes lisses qui peuvent être redimensionnées indéfiniment.

La courbe est définie par un ensemble de points de contrôle avec un minimum de deux. Les graphiques et animations web utilisent généralement des courbes de Bézier cubiques, qui possèdent quatre points de contrôle P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, et P<sub>3</sub>.

Pour tracer une courbe de Bézier quadratique, deux lignes imaginaires sont tracées l'une de P<sub>0</sub> à P<sub>1</sub> et l'autre de P<sub>1</sub> à P<sub>2</sub>. Une troisième ligne imaginaire est dessinée avec son point de départ se déplaçant régulièrement sur la première ligne et le point final sur la deuxième ligne. En suivant la courbe formée par le déplacement d'un point, du début à la fin, sur cette troisième ligne imaginaire, on obtient la courbe de Bézier. Voici une illustration animée démontrant la création d'une courbe de Bézier quadratique&nbsp;:

![Tracé d'une courbe de Bézier quadratique](bézier_2_big.gif)

## Voir aussi

- [Courbe de Bézier sur Wikipédia](https://fr.wikipedia.org/wiki/Courbe_de_Bézier)
- [La fonction d'évolution `cubic-bezier()` en CSS](/fr/docs/Web/CSS/easing-function#exemples_avec_cubic-bezier)
- [L'attribut SVG `keySplines`](/fr/docs/Web/SVG/Attribute/keySplines)
- [Un site de visualisation et de génération de courbe cubique de Bézier (en anglais)](https://cubic-bezier.com/)
