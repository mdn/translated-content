---
title: "Document : évènement pointerlockchange"
short-title: pointerlockchange
slug: Web/API/Document/pointerlockchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Pointer Lock API")}}

L'évènement **`pointerlockchange`** de l'interface {{DOMxRef("Document")}} est déclenché lorsque le pointeur est verrouillé ou déverrouillé.

Le gestionnaire d'évènements peut utiliser {{DOMxRef("Document.pointerLockElement")}} pour déterminer si le pointeur est verrouillé, et si oui, sur quel élément il l'est.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utiliser le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définir une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pointerlockchange", (event) => { })

onpointerlockchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

Utilisation de `addEventListener()`&nbsp;:

```js
addEventListener("pointerlockchange", (event) => {
  if (document.pointerLockElement)
    console.log(
      "Le pointeur est verrouillé sur :",
      document.pointerLockElement,
    );
  else {
    console.log("Le pointeur n'est pas verrouillé");
  }
});
```

Utilisation de la propriété de gestionnaire d'évènement `onpointerlockchange`&nbsp;:

```js
document.onpointerlockchange = (event) => {
  if (document.pointerLockElement)
    console.log(
      "Le pointeur est verrouillé sur :",
      document.pointerLockElement,
    );
  else {
    console.log("Le pointeur n'est pas verrouillé");
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
