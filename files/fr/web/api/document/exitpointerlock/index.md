---
title: Document.exitPointerLock()
slug: Web/API/Document/exitPointerLock
tags:
  - API
  - DOM
  - Experimental
  - Méthode
  - Reference
translation_of: Web/API/Document/exitPointerLock
---
{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`exitPointerLock()`** permet de relâcher un pointeur de façon asynchrone lorsque le pointeur était auparavant mobilisé par la méthode {{domxref("Element.requestPointerLock()")}}.

Pour connaître le succès ou l'échec de cette requête, il faut surveiller les évènements {{event("pointerlockchange")}} et {{event("pointerlockerror")}}.

## Syntaxe

    document.exitPointerLock();

## Spécifications

| Spécification                                                                                                | État                             | Commentaires                        |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------- |
| {{SpecName('Pointer Lock','l#extensions-to-the-document-interface','Document')}} | {{Spec2('Pointer Lock')}} | Extension de l'interface `Document` |

## Compatibilité des navigateurs

{{Compat("api.Document.exitPointerLock")}}

## Voir aussi

- {{domxref("Document.pointerLockElement")}}
- {{domxref("Element.requestPointerLock()")}}
- [L'API _Pointer Lock_](/fr/docs/WebAPI/Pointer_Lock)
