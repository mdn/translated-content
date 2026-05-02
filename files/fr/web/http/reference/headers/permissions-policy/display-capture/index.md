---
title: "Permissions-Policy : directive display-capture"
short-title: display-capture
slug: Web/HTTP/Reference/Headers/Permissions-Policy/display-capture
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`display-capture`** contrôle si le document est autorisé ou non à utiliser [l'API Screen Capture](/fr/docs/Web/API/Screen_Capture_API), c'est-à-dire la méthode {{DOMxRef("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} pour capturer le contenu de l'écran.

Si `display-capture` est désactivé dans un document, celui-ci ne pourra pas initier la capture d'écran avec {{DOMxRef("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} et lèvera une exception `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: display-capture=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `display-capture` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Screen Capture](/fr/docs/Web/API/Screen_Capture_API)
- [Utiliser l'API Screen Capture](/fr/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
