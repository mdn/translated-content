---
title: Chaîne de défilement
slug: Glossary/Scroll_chaining
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La **chaîne de défilement** (<i lang="en">scroll chaining</i> en anglais) désigne le comportement observé lorsqu'un·e utilisateur·ice fait défiler au-delà de la {{Glossary("Scroll_boundary", "limite de défilement")}} d'un élément défilable, ce qui provoque le défilement d'un élément ancêtre.

Lorsqu'un·e utilisateur·ice fait défiler à l'intérieur d'un élément défilable comme un `<div>` ou un `<textarea>` et que la limite du [port de défilement](/fr/docs/Glossary/Scroll_container#port_de_défilement) (haut, bas, gauche ou droite) de l'élément défilable est atteinte, il peut y avoir un «&nbsp;effet de chaîne&nbsp;» où l'action de défilement est propagée sans interruption à l'élément parent. Ce comportement crée une expérience de défilement continue, à la fois verticalement et horizontalement.

Une **chaîne de défilement** est l'ordre des éléments défilables où l'action de défilement passe d'un élément à un autre. Cela se produit lorsqu'un élément interne est défilé jusqu'à sa limite, puis le défilement continue sur son élément parent, créant ainsi une «&nbsp;chaîne&nbsp;» d'actions de défilement. La chaîne remonte généralement le bloc conteneur.

## Voir aussi

- La propriété CSS {{CSSxRef("overscroll-behavior")}}
- [Le module de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Le module de gestion du surdéfilement CSS](/fr/docs/Web/CSS/Guides/Overscroll_behavior)
- [Le module d'accrochage au défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_snap)
- [Le module d'ancrage du défilement CSS](/fr/docs/Web/CSS/Guides/Scroll_anchoring)
