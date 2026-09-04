---
title: "Document : méthode exitPointerLock()"
short-title: exitPointerLock()
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Pointer Lock API")}}

La méthode **`exitPointerLock()`** de l'interface {{DOMxRef("Document")}} libère de manière asynchrone un verrouillage du pointeur précédemment demandé avec {{DOMxRef("Element.requestPointerLock")}}.

> [!NOTE]
> Tandis que la méthode **`exitPointerLock()`** est appelée sur le document, la méthode **`requestPointerLock()`** est appelée sur un élément.

Pour suivre le succès ou l'échec de la requête, il est nécessaire d'écouter les évènements {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}} et {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}.

## Syntaxe

```js-nolint
exitPointerLock()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Document.pointerLockElement")}}
- La méthode {{DOMxRef("Element.requestPointerLock()")}}
- [L'API Pointer Lock](/fr/docs/Web/API/Pointer_Lock_API)
