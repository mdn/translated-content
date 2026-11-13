---
title: "Permissions-Policy : directive xr-spatial-tracking"
short-title: xr-spatial-tracking
slug: Web/HTTP/Reference/Headers/Permissions-Policy/xr-spatial-tracking
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`xr-spatial-tracking`** contrôle si le document actuel est autorisé à utiliser [l'API WebXR Device](/fr/docs/Web/API/WebXR_Device_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité&nbsp;:

- Les appels à {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}} et {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} retournent une promesse ({{JSxRef("Promise")}}) qui est rejetée avec une {{DOMxRef("DOMException")}} de type `SecurityError`.

- Les évènements {{DOMxRef("XRSystem/devicechange_event", "devicechange")}} ne sont pas déclenchés sur l'objet {{DOMxRef("Navigator.xr","navigator.xr")}}.

## Syntaxe

```http
Permissions-Policy: xr-spatial-tracking=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `xr-spatial-tracking` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API WebXR Device](/fr/docs/Web/API/WebXR_Device_API)
- Les méthodes API {{DOMxRef("XRSystem/requestSession","navigator.xr.requestSession()")}} et {{DOMxRef("XRSystem/isSessionSupported","navigator.xr.isSessionSupported()")}}, et l'évènement {{DOMxRef("XRSystem/devicechange_event", "devicechange")}} de {{DOMxRef("Navigator.xr", "navigator.xr")}}
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
