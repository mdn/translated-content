---
title: "Permissions-Policy : directive captured-surface-control"
short-title: captured-surface-control
slug: Web/HTTP/Reference/Headers/Permissions-Policy/captured-surface-control
l10n:
  sourceCommit: b67c2be9feee1463ea5a27e5c7b3e0062162354f
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`captured-surface-control`** contrôle si le document courant est autorisé à utiliser [l'API Captured Surface Control](/fr/docs/Web/API/Screen_Capture_API/Captured_Surface_Control). Plus précisément, les méthodes {{DOMxRef("CaptureController.forwardWheel", "forwardWheel()")}}, {{DOMxRef("CaptureController.increaseZoomLevel", "increaseZoomLevel()")}}, {{DOMxRef("CaptureController.decreaseZoomLevel", "decreaseZoomLevel()")}} et {{DOMxRef("CaptureController.resetZoomLevel", "resetZoomLevel()")}} sont contrôlées par cette directive.

La promesse retournée par les principales méthodes de l'API sera rejetée avec une `NotAllowedError` de l'objet {{DOMxRef("DOMException")}} si la permission n'est pas accordée.

## Syntaxe

```http
Permissions-Policy: captured-surface-control=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `captured-surface-control` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Screen Capture](/fr/docs/Web/API/Screen_Capture_API)
- [Utiliser l'API Captured Surface Control](/fr/docs/Web/API/Screen_Capture_API/Captured_Surface_Control)
