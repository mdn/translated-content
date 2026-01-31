---
title: "HTMLSlotElement : propriété name"
short-title: name
slug: Web/API/HTMLSlotElement/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLSlotElement")}} retourne ou définit le nom de l'emplacement. Un emplacement est un espace réservé à l'intérieur d'un composant web que les utilisateur·ice·s peuvent remplir avec leur propre balisage.

## Valeur

Une chaîne de caractères.

## Exemples

L'extrait suivant est tiré de notre [exemple de slotchange <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([voir en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `L'élément dans l'emplacement "${slots[1].name}" a changé pour "${nodes[0].outerHTML}".`,
  );
});
```

Ici, nous récupérons les références de tous les emplacements, puis nous ajoutons un gestionnaire d'évènement `slotchange` au deuxième emplacement du modèle — c'est celui dont le contenu change dans l'exemple.

Chaque fois que l'élément inséré dans l'emplacement change, nous enregistrons un rapport dans la console indiquant quel emplacement a changé et quel est le nouveau nœud à l'intérieur de l'emplacement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
