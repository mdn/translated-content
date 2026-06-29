---
title: "Permissions-Policy : directive usb"
short-title: usb
slug: Web/HTTP/Reference/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`usb`** contrôle si le document actuel est autorisé à utiliser {{DOMxRef("WebUSB API", "l'API WebUSB", "", "nocode")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de l'API WebUSB, toute tentative d'accès à la propriété {{DOMxRef("Navigator.usb")}} échoue.

## Syntaxe

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `usb` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader('Permissions-Policy')}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
