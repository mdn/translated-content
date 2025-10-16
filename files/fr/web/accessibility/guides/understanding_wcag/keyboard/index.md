---
title: Accessibilité au clavier
slug: Web/Accessibility/Guides/Understanding_WCAG/Keyboard
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Pour être pleinement accessible, une page web doit pouvoir être utilisée par une personne qui n'utilise que le clavier pour y accéder et la contrôler. Cela inclut les utilisateur·ice·s de lecteurs d'écran, mais aussi celles et ceux qui ont des difficultés à utiliser un dispositif de pointage comme une souris ou un <i lang="en">trackball</i>, dont la souris ne fonctionne pas, ou qui préfèrent utiliser le clavier dès que possible.

## Les éléments focalisables doivent avoir une sémantique interactive

Si un élément peut recevoir le focus au clavier, il doit être interactif&nbsp;: l'utilisateur·ice doit pouvoir agir dessus et provoquer un changement (par exemple, activer un lien ou modifier une option).

> [!NOTE]
> Une exception importante à cette règle concerne les éléments ayant `role="document"` appliqué **à l'intérieur** d'un contexte interactif (comme `role="application"`). Dans ce cas, donner le focus au document imbriqué est le seul moyen de ramener la technologie d'assistance à un état non interactif (souvent appelé «&nbsp;mode navigation&nbsp;»).

La plupart des éléments interactifs peuvent recevoir le focus par défaut&nbsp;; vous pouvez rendre un élément accessible au focus en lui ajoutant l'attribut `tabindex=0`. Cependant, il ne faut ajouter `tabindex` que si l'élément est aussi interactif, par exemple en définissant des gestionnaires d'événements clavier appropriés.

### Voir aussi

- [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) (attribut HTML global)
- Élément&nbsp;: [événement keydown](/fr/docs/Web/API/Element/keydown_event)
- Élément&nbsp;: [événement keyup](/fr/docs/Web/API/Element/keyup_event)

## Évitez d'utiliser un attribut `tabindex` supérieur à zéro

L'attribut `tabindex` indique qu'un élément peut recevoir le focus au clavier. Une valeur de zéro signifie que l'élément fait partie de l'ordre de tabulation par défaut, basé sur l'ordre des éléments dans le document HTML. Une valeur positive place l'élément avant ceux de l'ordre par défaut&nbsp;: les éléments avec une valeur positive reçoivent le focus dans l'ordre de leur `tabindex` (1, puis 2, puis 3, etc.).

Cela crée de la confusion pour les utilisateur·ice·s qui n'utilisent que le clavier lorsque l'ordre de tabulation diffère de l'ordre logique de la page. Il est préférable de structurer le document HTML pour que les éléments pouvant recevoir le focus soient dans un ordre logique, sans avoir besoin de les réordonner avec des valeurs positives de `tabindex`.

### Voir aussi

- [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) (attribut HTML global)
- [Comprendre l'ordre de tabulation <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Ne pas utiliser `tabindex` supérieur à 0 <sup>(angl.)</sup>](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Les éléments cliquables doivent pouvoir recevoir le focus et avoir une sémantique interactive

Si un élément peut être cliqué avec un dispositif de pointage, comme une souris, il doit aussi pouvoir recevoir le focus au clavier, et l'utilisateur·ice doit pouvoir agir dessus.

Un élément est cliquable s'il possède un gestionnaire d'événement `onclick`. Vous pouvez le rendre accessible au focus en lui ajoutant l'attribut `tabindex=0`. Vous pouvez le rendre utilisable au clavier en définissant un gestionnaire d'événement `onkeydown`&nbsp;; dans la plupart des cas, l'action déclenchée doit être la même pour les deux types d'événements.

### Voir aussi

- [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) (attribut HTML global)
- Élément&nbsp;: [événement keydown](/fr/docs/Web/API/Element/keydown_event)
- Élément&nbsp;: [événement keyup](/fr/docs/Web/API/Element/keyup_event)

## Les éléments interactifs doivent pouvoir être activés au clavier

Si l'utilisateur·ice peut interagir avec un élément via le tactile ou un dispositif de pointage, alors l'élément doit aussi permettre l'interaction au clavier. Autrement dit, si vous avez défini des gestionnaires d'événements pour le tactile ou le clic, il faut aussi en définir pour le clavier. Les gestionnaires clavier doivent permettre la même interaction que ceux du tactile ou du clic.

### Voir aussi

- Élément&nbsp;: [événement keydown](/fr/docs/Web/API/Element/keydown_event)
- Élément&nbsp;: [événement keyup](/fr/docs/Web/API/Element/keyup_event)

## Les éléments interactifs doivent pouvoir recevoir le focus

Si l'utilisateur·ice peut interagir avec un élément (par exemple, via le tactile ou un dispositif de pointage), alors il doit être possible de lui donner le focus au clavier. Vous pouvez le rendre accessible au focus en lui ajoutant l'attribut `tabindex=0`. Cela ajoutera l'élément à la liste de ceux qui peuvent être atteints avec la touche <kbd>Tab</kbd>, dans l'ordre défini par le document HTML.

### Voir aussi

- [tabindex](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) (attribut HTML global)

## Un élément pouvant recevoir le focus doit avoir un style de focus visible

Tout élément pouvant recevoir le focus au clavier doit avoir un style visible qui indique quand il a le focus. Vous pouvez faire cela avec les pseudo-classes CSS {{CSSXRef(":focus")}} et {{CSSXRef(":focus-visible")}}.

Les éléments standards pouvant recevoir le focus, comme les liens et les champs de saisie, reçoivent un style particulier par défaut dans le navigateur, donc il n'est pas toujours nécessaire de définir un style de focus pour eux, sauf si vous souhaitez un style plus distinctif.

Si vous créez vos propres composants pouvant recevoir le focus, veillez à définir aussi un style de focus pour eux.

### Voir aussi

- [Utiliser CSS pour modifier la présentation d'un composant d'interface lorsqu'il reçoit le focus <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
