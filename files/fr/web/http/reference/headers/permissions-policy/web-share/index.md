---
title: "Permissions-Policy : directive web-share"
short-title: web-share
slug: Web/HTTP/Reference/Headers/Permissions-Policy/web-share
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader('Permissions-Policy')}} avec la directive **`web-share`** contrôle si le document actuel est autorisé à utiliser la méthode {{DOMxRef("Navigator.share","Navigator.share()")}} de l'API Web Share pour partager du texte, des liens, des images et d'autres contenus vers des destinations arbitraires au choix de l'utilisateur·ice.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("Navigator.share()")}} retournent une promesse ({{JSxRef("Promise")}}) qui est rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `web-share` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader('Permissions-Policy')}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
