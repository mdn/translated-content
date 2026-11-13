---
title: "Permissions-Policy : directive local-fonts"
short-title: local-fonts
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-fonts
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`local-fonts`** contrôle si le document actuel est autorisé à collecter des données sur les polices installées localement par l'utilisateur·ice avec la méthode {{DOMxRef("Window.queryLocalFonts()")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les promesses ({{JSxRef("Promise")}}) retournées par {{DOMxRef("Window.queryLocalFonts()")}} seront rejetées avec une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: local-fonts=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `local-fonts` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Local Font Access API", "L'API Local Font Access", "", "nocode")}}
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
