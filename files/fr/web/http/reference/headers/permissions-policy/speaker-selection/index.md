---
title: "Permissions-Policy : directive speaker-selection"
short-title: speaker-selection
slug: Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`speaker-selection`** contrôle si le document actuel est autorisé à énumérer et sélectionner des périphériques de sortie audio (haut-parleurs, écouteurs, etc.).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité&nbsp;:

- {{DOMxRef("MediaDevices.enumerateDevices()")}} ne retourne pas les périphériques de type _sortie audio_.
- {{DOMxRef("MediaDevices.selectAudioOutput()")}} n'affiche pas la fenêtre intrusive (<i lang="en">popup</i> en anglais) pour sélectionner une sortie audio, et la promesse ({{JSxRef("Promise")}}) retournée est rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.
- {{DOMxRef("HTMLMediaElement.setSinkId()")}} et {{DOMxRef("AudioContext.setSinkId()")}} lèvent une erreur `NotAllowedError` si appelés pour une sortie audio.

## Syntaxe

```http
Permissions-Policy: speaker-selection=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `speaker-selection` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
