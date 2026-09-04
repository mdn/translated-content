---
title: "Permissions-Policy : directive microphone"
short-title: microphone
slug: Web/HTTP/Reference/Headers/Permissions-Policy/microphone
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`microphone`** contrôle si le document actuel est autorisé à utiliser des périphériques d'entrée audio.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("MediaDevices.getUserMedia()")}} retournent une {{JSxRef("Promise")}}
qui sera rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `microphone` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
