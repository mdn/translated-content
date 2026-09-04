---
title: HTMLSlotElement
slug: Web/API/HTMLSlotElement
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Components")}}

L'interface **`HTMLSlotElement`** de l'[API du DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) permet d'accéder au nom et aux nœuds assignés d'un élément HTML {{HTMLElement("slot")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef('HTMLSlotElement.name')}}
  - : Une chaîne de caractères utilisée pour obtenir et définir le nom de l'emplacement.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef('HTMLSlotElement.assign()')}}
  - : Définit les nœuds assignés manuellement à cet emplacement sur les nœuds donnés.
- {{DOMxRef('HTMLSlotElement.assignedNodes()')}}
  - : Retourne une séquence des nœuds assignés à cet emplacement. Si l'option `flatten` est définie à `true`, elle retourne une séquence des nœuds assignés à cet emplacement ainsi qu'à tous les autres emplacements descendants de celui-ci. Si aucun nœud assigné n'est trouvé, elle retourne le contenu de secours de l'emplacement.
- {{DOMxRef('HTMLSlotElement.assignedElements()')}}
  - : Retourne une séquence des éléments assignés à cet emplacement (et aucun autre nœud). Si l'option `flatten` est définie à `true`, elle retourne une séquence des éléments assignés à cet emplacement ainsi qu'à tous les autres emplacements descendants de celui-ci. Si aucun élément assigné n'est trouvé, elle retourne le contenu de secours de l'emplacement.

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

Écoutez ces évènements à l'aide de {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un gestionnaire d'évènements à la propriété `oneventname` de cette interface.

- {{DOMxRef('HTMLSlotElement.slotchange_event', 'slotchange')}}
  - : Déclenché sur une instance de `HTMLSlotElement` (élément {{HTMLElement("slot")}}) lorsque le ou les nœuds contenus dans cet emplacement changent.

## Exemples

L'extrait suivant est tiré de notre [exemple de slotchange <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([voir aussi en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `L'élément dans l'emplacement "${slots[1].name}" a changé pour "${nodes[0].outerHTML}".`,
  );
});
```

Ici, nous récupérons les références de tous les emplacements, puis nous ajoutons un gestionnaire d'évènement slotchange au deuxième emplacement du modèle — c'est celui dont le contenu change dans l'exemple.

Chaque fois que l'élément inséré dans l'emplacement change, nous enregistrons un rapport dans la console indiquant quel emplacement a changé et quel est le nouvel élément à l'intérieur de l'emplacement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
