---
title: CredentialsContainer.store()
slug: Web/API/CredentialsContainer/store
---

{{APIRef("")}}{{SeeCompatTable}}

La méthode **`store()`**, rattachée à l'interface {{domxref("CredentialsContainer")}}, enregistre un ensemble d'informations d'authentification pour l'utilisateur dans une instance {{domxref("Credential")}} et renvoie cette instance au travers d'une promesse ({{domxref("Promise")}}).

> **Note :** Cette méthode ne peut être utilisé que pour les contextes de navigation les plus hauts. Les appels lancés depuis une {{HTMLElement("iframe")}} résoudront la promesse sans aucun effet.

## Syntaxe

```js
CredentialsContainer.store(cred).then(function(credRes) { ... } )
```

### Paramètres

- `cred`
  - : Une instance valide de {{domxref("Credential")}}.

### Valeur de retour

Une promesse ({{domxref("Promise")}}) qui sera résolue avec l'instance de {{domxref("Credential")}} passée en argument.

## Exemples

```js
// TBD
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
