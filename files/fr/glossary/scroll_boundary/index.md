---
title: Limite de défilement
slug: Glossary/Scroll_boundary
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Une **limite de défilement** (<i lang="en">scroll boundary</i> en anglais) est le point auquel un élément défilable ne peut plus être défilé dans une direction particulière, soit en haut ou en bas (ou à gauche/droite pour le défilement horizontal). Il s'agit généralement du bord du [port de défilement](/fr/docs/Glossary/Scroll_container#port_de_défilement).

Lorsque le contenu d'un {{Glossary("Scroll_container", "conteneur de défilement")}} ne dépasse pas la taille du conteneur dans la direction du défilement, le conteneur est considéré comme étant en permanence à sa limite de défilement. Cela s'explique par l'absence de contenu supplémentaire à faire défiler. Si le contenu est empêché de défiler, par exemple lorsque {{CSSxRef("overflow", "overflow: hidden")}} est appliqué, l'élément n'est pas un conteneur de défilement, et donc il n'y a pas de limite de défilement.

Lorsque la limite de défilement du port de défilement est atteinte par un·e utilisateur·ice faisant défiler le contenu, un effet visuel comme un rebond ou une action fonctionnelle comme le «&nbsp;tirer pour actualiser&nbsp;» (<i lang="en">pull-to-refresh</i> en anglais) sur les appareils mobiles peut se produire. Ce comportement par défaut du navigateur est appelé **action par défaut à la limite**.

Par exemple, sur les appareils mobiles, faire glisser une page vers le bas alors qu'on est déjà en haut provoque un effet de rebond et déclenche parfois un rafraîchissement de la page. Ce rebond ou ce rafraîchissement correspond à l'action par défaut à la limite.

Les actions par défaut à la limite peuvent être locales ou non locales.

- Une **action par défaut locale à la limite** est l'action qui se produit à la limite d'une zone défilable spécifique, confinée à cet élément. Cette action est dite _locale_ car elle n'affecte aucun conteneur ancêtre ni le reste de la page web.

- Une **action par défaut non locale à la limite** se produit lorsque l'atteinte de la limite de défilement d'un conteneur de défilement a des effets au-delà de l'élément défilé. Un exemple de cela est la {{Glossary("Scroll_chaining", "chaîne de défilement")}}, où l'atteinte de la limite de défilement d'un élément déclenche le défilement dans un élément parent ou ancêtre, et peut même initier une action à l'échelle de la page, comme une navigation.

## Voir aussi

- La propriété CSS {{CSSxRef("overscroll-behavior")}}
- [Le module de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Le module de gestion du surdéfilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- [Le module d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Le module d'ancrage du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
