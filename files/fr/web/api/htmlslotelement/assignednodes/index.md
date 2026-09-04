---
title: "HTMLSlotElement : méthode assignedNodes()"
short-title: assignedNodes()
slug: Web/API/HTMLSlotElement/assignedNodes
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Shadow DOM API")}}

La méthode **`assignedNodes()`** de l'interface {{DOMxRef("HTMLSlotElement")}} retourne une séquence des nœuds assignés à cet emplacement.

Si l'option `flatten` est définie à `true`, elle retourne une séquence des nœuds assignés à cet emplacement, ainsi que des nœuds assignés à tout autre emplacement qui serait un descendant de celui-ci. Si aucun nœud assigné n'est trouvé, elle retourne le contenu de secours de l'emplacement.

## Syntaxe

```js-nolint
assignedNodes()
assignedNodes(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet qui définit les options pour les nœuds à retourner. Les options disponibles sont&nbsp;:
    - `flatten`
      - : Un booléen indiquant s'il faut retourner les nœuds assignés à tout emplacement enfant `<slot>` disponible (`true`) ou non (`false`). La valeur par défaut est `false`.

### Valeur de retour

Un tableau de nœuds.

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
