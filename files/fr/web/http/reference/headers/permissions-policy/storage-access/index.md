---
title: "Permissions-Policy: storage-access directive"
short-title: storage-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/storage-access
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`storage-access`** contrôle si un document chargé dans un contexte tiers (c'est-à-dire intégré dans un {{HTMLElement("iframe")}}) est autorisé à utiliser {{DOMxRef("Storage Access API", "l'API Storage Access", "", "nocode")}} pour demander l'accès aux cookies non partitionnés.

C'est pertinent pour les agents utilisateurs qui bloquent par défaut l'accès aux cookies non partitionnés par les sites chargés dans un contexte tiers afin d'améliorer la confidentialité (par exemple, pour empêcher le suivi).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("Document.requestStorageAccess()")}} retournent une promesse ({{JSxRef("Promise")}}) qui est rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: storage-access=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `storage-access` est `*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Storage Access](/fr/docs/Web/API/Storage_Access_API)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
