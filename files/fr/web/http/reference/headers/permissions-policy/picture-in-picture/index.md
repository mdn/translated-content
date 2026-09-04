---
title: "Permissions-Policy : directive picture-in-picture"
short-title: picture-in-picture
slug: Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`picture-in-picture`** contrôle si le document actuel est autorisé à lire une vidéo en mode {{DOMxRef("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} lèvent une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `picture-in-picture` est `*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
