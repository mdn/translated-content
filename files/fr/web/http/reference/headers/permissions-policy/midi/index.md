---
title: "Permissions-Policy : directive midi"
short-title: midi
slug: Web/HTTP/Reference/Headers/Permissions-Policy/midi
l10n:
  sourceCommit: 76159b9e242063203699dd5e07e5eebfd65def3d
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`midi`** contrôle si le document actuel est autorisé à utiliser [l'API Web MIDI](/fr/docs/Web/API/Web_MIDI_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("Navigator.requestMIDIAccess()")}} retournent une promesse ({{JSxRef("Promise")}}) qui sera rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: midi=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `midi` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
