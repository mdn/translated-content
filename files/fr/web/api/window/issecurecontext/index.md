---
title: Window.isSecureContext
slug: Web/API/Window/isSecureContext
tags:
  - API
  - Propriété
  - Reference
  - Sécurité
  - Window
translation_of: Web/API/Window/isSecureContext
---
{{APIRef}}{{SeeCompatTable}}

La propriété en lecteur seule **`window.isSecureContext`** indique si un contexte est capable d'utiliser des fonctionnalités qui nécessitent des [contextes sécurisés](/en-US/docs/Web/Security/Secure_Contexts).

## Syntaxe

    var isSecure = window.isSecureContext

## Exemples

### Détection des fonctionnalités

Vous pouvez utiliser la détection des fonctionnalités pour vérifier si elles sont dans un contexte sécurisé ou non à l'aide du booléen `isSecureContext` qui est exposé sur la portée globale.

```js
if (window.isSecureContext) {
  // La page est un contexte sécurisé afin que les techniciens de service soient désormais disponibles
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}
```

## Spécifications

| Spécification                            | Statut                                                                                                   | Commentaire             |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| {{SpecName('Secure Contexts')}} | {{Spec2('Secure Contexts','#monkey-patching-global-object','isSecureContext')}} | Spécification initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.isSecureContext")}}

## Voir également

- [Contextes sécurisés](/en-US/docs/Web/Security/Secure_Contexts)
