---
title: "Permissions-Policy : directive screen-wake-lock"
short-title: screen-wake-lock
slug: Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`screen-wake-lock`** contrôle si le document actuel est autorisé à utiliser [l'API Screen Wake Lock](/fr/docs/Web/API/Screen_Wake_Lock_API) pour indiquer que l'appareil ne doit pas réduire la luminosité ou éteindre l'écran.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef("WakeLock.request()")}} retournent une promesse ({{JSxRef("Promise")}}) qui est rejetée avec une {{DOMxRef("DOMException")}} de type `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: screen-wake-lock=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `screen-wake-lock` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Screen Wake Lock](/fr/docs/Web/API/Screen_Wake_Lock_API)
- L'en-tête {{HTTPHeader('Permissions-Policy')}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
