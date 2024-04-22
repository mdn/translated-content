---
title: Credential
slug: Web/API/Credential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

L'interface **`Credential`**, rattachée à l'[API Credential Management](/fr/docs/Web/API/Credential_Management_API), fournit des informations relatives à une entité qui seront utilisées comme prérequis à l'établissement d'une relation de confiance.

## Propriétés

- {{domxref("Credential.id")}} {{readonlyInline}}
  - : Une chaîne de caractères qui est l'identifiant des informations d'authentification. Cela peut être un GUID, un nom d'utilisateur ou une adresse électronique.
- {{domxref("Credential.type")}} {{readonlyInline}}

  - : Une chaîne de caractères qui décrit le type d'information d'authentification utilisée. Les valeurs valides sont

    - `password` (pour {{domxref("PasswordCredential")}})
    - `federated` (pour {{domxref("FederatedCredential")}})
    - `public-key` (pour {{domxref("PublicKeyCredential")}})

### Gestionnaires d'évènements

Aucun.

## Méthodes

Aucune.

## Exemples

```js
// TBD
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
