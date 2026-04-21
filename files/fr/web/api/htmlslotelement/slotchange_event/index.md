---
title: "HTMLSlotElement : événement slotchange"
short-title: slotchange
slug: Web/API/HTMLSlotElement/slotchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Components")}}

L'évènement **`slotchange`** est déclenché sur une instance de {{DOMxRef("HTMLSlotElement")}} (élément HTML {{HTMLElement("slot")}}) lorsque le ou les nœuds contenus dans cet emplacement changent.

> [!NOTE]
> L'évènement `slotchange` n'est pas déclenché si les enfants d'un nœud assigné changent — seulement si vous modifiez (par exemple, ajoutez ou supprimez) les nœuds eux-mêmes.

Pour déclencher un évènement **slotchange**, il faut définir ou supprimer l'attribut `slot`.

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("slotchange", (event) => { })

onslotchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
element.setAttribute("slot", slotName);
// element.assignedSlot = $slot
element.removeAttribute("slot");
// element.assignedSlot = null
```

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

Ici, nous récupérons les références de tous les emplacements `<slot>`, puis nous ajoutons un gestionnaire d'évènement `slotchange` au deuxième emplacement du modèle — c'est celui dont le contenu change dans l'exemple.

Chaque fois que l'élément inséré dans l'emplacement change, nous enregistrons un rapport dans la console indiquant quel emplacement a changé et quel est le nouveau nœud à l'intérieur de l'emplacement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLSlotElement")}}
