---
title: "Permissions-Policy : directive camera"
short-title: camera
slug: Web/HTTP/Reference/Headers/Permissions-Policy/camera
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`camera`** contrôle si le document courant est autorisé à utiliser des dispositifs d'entrée vidéo.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("MediaDevices.getUserMedia()")}} retournent une promesse ({{JSxRef("Promise")}}) rejetée avec une `NotAllowedError` de l'objet {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: camera=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `camera` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
