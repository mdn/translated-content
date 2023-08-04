---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`exitPointerLock()`** permet de relâcher un pointeur de façon asynchrone lorsque le pointeur était auparavant mobilisé par la méthode {{domxref("Element.requestPointerLock()")}}.

Pour connaître le succès ou l'échec de cette requête, il faut surveiller les évènements [`pointerlockchange`](/fr/docs/Web/API/Document/pointerlockchange_event) et [`pointerlockerror`](/fr/docs/Web/API/Document/pointerlockerror_event).

## Syntaxe

```js
document.exitPointerLock();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Document.pointerLockElement")}}
- {{domxref("Element.requestPointerLock()")}}
- [L'API _Pointer Lock_](/fr/docs/WebAPI/Pointer_Lock)
