---
title: Compatibilité des navigateurs et CSS Scroll Snap
slug: conflicting/Web/CSS/CSS_Scroll_Snap
tags:
  - CSS
  - CSS Scroll Snap
  - Compatibilité
  - Guide
translation_of: Web/CSS/CSS_Scroll_Snap/Browser_compat
original_slug: Web/CSS/CSS_Scroll_Snap/Browser_compat
---
{{CSSRef}}

Firefox implémentait initialement une première version de la spécification _Scroll Snap_ appelée alors _Scroll Snap Points_. Avec Firefox 68, c'est la nouvelle version de la spécification qui est implémentée et les anciennes propriétés sont retirées.

## Que faire si mon style utilisait l'ancienne implémentation (Firefox < 68) ?

Si vous avez uniquement ciblé l'ancienne implémentation de Firefox avec les propriétés définies par _Scroll Snap Points_, vous devriez mettre à jour votre code afin d'utiliser la nouvelle spécification. Ainsi, votre code fonctionnera dans l'ensemble des navigateurs qui implémente la spécification à jour, y compris Firefox. Si vous n'effectuez pas ces changements, les accroches de défilement ne fonctionneront plus à partir de Firefox 68.

Voici les principaux points d'attention :

- Les propriétés {{CSSxRef("scroll-snap-type-x")}} et {{CSSxRef("scroll-snap-type-y")}} ont été abandonnées
- La propriété {{CSSxRef("scroll-snap-type")}} n'est plus une propriété raccourcie et l'ancienne syntaxe courte (ex. `scroll-snap-type: mandatory`) cessera de fonctionner

## Comment utiliser l'ancienne implémentation comme méthode de recours ?

Si vous utilisez déjà l'ancienne implémentation pour cibler les navigateurs plus anciens, vous pouvez continuer à l'utiliser de la façon décrite ci-après.

Dans ce premier exemple, on utilise l'ancienne version de la spécification et la nouvelle afin de pouvoir utiliser les positions d'accroche quel que soit le navigateur tant que celui-ci prend en charge les accroches au défilement.

L'exemple contient les propriétés {{CSSxRef("scroll-snap-points-y")}} et {{CSSxRef("scroll-snap-destination")}}, dépréciées, afin que les accroches fonctionnent dans Firefox. On ajoute également la propriété {{CSSxRef("scroll-snap-type")}} à deux reprises, une fois avec la valeur `y` (nouvelle version de la spécification) et une seconde fois pour Firefox qui prend en charge cette propriété mais pas la valeur `y`.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y-old-spec.html", '100%', 700)}}

Si vous testez cet exemple attentivement, vous pourrez voir qu'il fonctionne dans plus de navigateurs, y compris ceux qui couvrent cette période intermédiaire. Les anciennes propriétés de la spécification sont documentées sur MDN sous la section _[Scroll Snap Points](/fr/docs/Web/CSS/CSS_Scroll_Snap_Points)_.

## Faut-il utiliser les deux spécifications ?

Les points d'accroche au défilement font partie de ces fonctionnalités CSS sympathiques où l'absence de prise en charge signifie uniquement qu'on ne récupère la fonctionnalité avancée mais que le reste du site ou de l'application continue de fonctionner. Aussi, vous pouvez tout à fait choisir de traiter Firefox comme un navigateur qui ne prend pas en charge cette fonctionnalité et éviter la complexité associée à la gestion des deux configurations. Une fois que la nouvelle spécification sera implémentée, les utilisateurs en bénificieront au fur et à mesure.

Si vous souhaitez tester la prise en charge grâce [aux requêtes de fonctionnalité](/en-US/docs/Web/CSS/@supports), nous vous recommandons de tester {{CSSxRef("scroll-snap-align")}} car cette propriété n'existait pas dans la première spécification. Toutefois, ces propriétés ne devraient causer aucun problème aux navigateurs qui ne les prennent pas en charge car ils les ignoreront simplement.

## Pourquoi existent deux versions ?

Enfin, on peut se demander pourquoi une telle situation existe aujourd'hui. Ce n'est que la réalité du développement de CSS : les nouvelles fonctionnalités ne peuvent pas exister en pure théorie et en absence d'implémentation de la part des navigateurs. Lors de la phase d'implémentation, les navigateurs peuvent découvrir des problèmes qui n'apparaissent que dans des situations bien concrètes. Dans de tels cas, il faut alors mettre à jour la spécification et on peut alors avoir différentes versions de la spécification et différents navigateurs qui se mettent à jour au fur et à mesure.
