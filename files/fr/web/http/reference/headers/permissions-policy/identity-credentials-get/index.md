---
title: "Permissions-Policy : directive identity-credentials-get"
short-title: identity-credentials-get
slug: Web/HTTP/Reference/Headers/Permissions-Policy/identity-credentials-get
l10n:
  sourceCommit: 8cd7f0fdcb2ea8d53ec7dae071eb2eb76bf5bfaf
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`identity-credentials-get`** contrôle si le document actuel est autorisé à utiliser [l'API de gestion des informations d'identité fédérées (FedCM)](/fr/docs/Web/API/FedCM_API), et plus précisément l'utilisation des méthodes suivantes&nbsp;:

- {{DOMxRef("CredentialsContainer.get", "navigator.credentials.get()")}} (lorsqu'utilisé avec l'option `identity`)
- {{DOMxRef("IdentityCredential.disconnect_static", "IdentityCredential.disconnect()")}}
- {{DOMxRef("IdentityProvider.getUserInfo_static", "IdentityProvider.getUserInfo()")}}

Lorsque cette politique interdit l'utilisation de l'API, les promesses ({{JSxRef("Promise")}}) retournées par ces méthodes seront rejetées avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `identity-credentials-get` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API de gestion des informations d'identité fédérées (FedCM)](/fr/docs/Web/API/FedCM_API)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
