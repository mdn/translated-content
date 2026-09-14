---
title: "Document : méthode hasPrivateToken()"
short-title: hasPrivateToken()
slug: Web/API/Document/hasPrivateToken
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

La méthode **`hasPrivateToken()`** de l'interface {{DOMxRef("Document")}} retourne une promesse qui se résout avec une valeur booléenne indiquant si le navigateur possède un [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API) stocké à partir d'un serveur émetteur particulier.

## Syntaxe

```js-nolint
hasPrivateToken(issuer)
```

### Paramètres

- `issuer`
  - : Une chaîne de caractères représentant l'URL d'un serveur émetteur.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le navigateur possède un jeton d'état privé stocké à partir du serveur émetteur défini.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas encore actif.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si&nbsp;:
    - Le {{DOMxRef("Document")}} actuel n'est pas chargé dans un {{Glossary("Secure_Context", "contexte sécurisé")}}.
    - Le nombre maximum d'émetteurs par {{Glossary("Origin", "origine")}} de niveau supérieur (deux) a été dépassé.
- `TypeError` {{DOMxRef("DOMException")}}
  - : Levée si `issuer` n'est pas une URL valide.

## Exemples

```js
const aUnJeton = await Document.hasPrivateToken(`issuer.example`);
if (!aUnJeton) {
  await fetch(
    "https://issuer.example/.well-known/private-state-token/issuance",
    {
      method: "POST",
      privateToken: {
        version: 1,
        operation: "token-request",
      },
    },
  );
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
