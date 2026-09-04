---
title: "Document : évènement pointerlockerror"
short-title: pointerlockerror
slug: Web/API/Document/pointerlockerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Pointer Lock API")}}

L'évènement **`pointerlockerror`** de l'interface {{DOMxRef("Document")}} est déclenché lorsque le verrouillage du pointeur a échoué (pour des raisons techniques ou parce que la permission a été refusée).

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utiliser le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définir une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pointerlockerror", (event) => { })

onpointerlockerror = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
const para = document.querySelector("p");

document.addEventListener("pointerlockerror", (event) => {
  console.log("Erreur lors du verrouillage du pointeur");
});
```

Utilisation de la propriété de gestionnaire d'évènement `onpointerlockerror`&nbsp;:

```js
document.onpointerlockerror = (event) => {
  console.log("Erreur lors du verrouillage du pointeur");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
