---
title: "Permissions-Policy : directive encrypted-media"
short-title: encrypted-media
slug: Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`encrypted-media`** contrôle si le document actuel est autorisé à utiliser l'API [Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API) (EME).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la promesse ({{JSxRef("Promise")}}) retournée par {{DOMxRef("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} sera rejetée avec une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `encrypted-media` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
