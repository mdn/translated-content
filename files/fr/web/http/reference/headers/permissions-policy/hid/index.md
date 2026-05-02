---
title: "Permissions-Policy : directive hid"
short-title: hid
slug: Web/HTTP/Reference/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`hid`** contrôle si le document actuel est autorisé à utiliser l'interface {{DOMxRef("WebHID API", "API WebHID", "", "nocode")}} pour se connecter à des dispositifs d'interface humaine peu courants ou exotiques, tels que des claviers alternatifs ou des manettes de jeu.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, la propriété {{DOMxRef("Navigator.hid")}} ne sera pas disponible.

## Syntaxe

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `hid` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
