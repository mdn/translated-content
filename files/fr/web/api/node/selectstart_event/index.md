---
title: "Node : évènement selectstart"
short-title: selectstart
slug: Web/API/Node/selectstart_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

L'évènement **`selectstart`** de [l'API Selection](/fr/docs/Web/API/Selection) est déclenché lorsqu'un·e utilisateur·ice commence une nouvelle sélection.

Si l'évènement est annulé, la sélection n'est pas modifiée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("selectstart", (event) => { })

onselectstart = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
// version avec addEventListener
document.addEventListener("selectstart", () => {
  console.log("Sélection débutée.");
});

// version avec onselectstart
document.onselectstart = () => {
  console.log("Sélection débutée.");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
