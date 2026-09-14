---
title: "Document : méthode hasRedemptionRecord()"
short-title: hasRedemptionRecord()
slug: Web/API/Document/hasRedemptionRecord
l10n:
  sourceCommit: ee03b8deb5423c80e1cb8f6930a6f52e3f49e678
---

{{APIRef("Storage Access API")}}{{SeeCompatTable}}

La méthode **`hasRedemptionRecord()`** de l'interface {{DOMxRef("Document")}} retourne une promesse qui se résout avec une valeur booléenne indiquant si le navigateur possède un [enregistrement de récupération](/fr/docs/Web/API/Private_State_Token_API/Using#jetons_de_récupération) provenant d'un émetteur particulier.

## Syntaxe

```js-nolint
hasRedemptionRecord(issuer)
```

### Paramètres

- `issuer`
  - : Une chaîne de caractères représentant l'URL d'un serveur émetteur.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui se résout avec une valeur booléenne indiquant si le navigateur possède un enregistrement de récupération stocké provenant du serveur émetteur spécifié.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas encore actif.
- `NotAllowedError` {{DOMxRef("DOMException")}}
  - : Levée si le {{DOMxRef("Document")}} actuel n'est pas chargé dans un {{Glossary("Secure_Context", "contexte sécurisé")}}.
- `TypeError` {{DOMxRef("DOMException")}}
  - : Levée si `issuer` n'est pas une URL valide.

## Exemples

```js
const hasRR = await Document.hasRedemptionRecord(`issuer.example`);
if (hasRR) {
  await fetch("some-resource.example", {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "send-redemption-record",
      issuers: ["https://issuer.example"],
    },
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Private State Token](/fr/docs/Web/API/Private_State_Token_API)
