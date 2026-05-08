---
title: "Permissions-Policy : directive accelerometer"
short-title: accelerometer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader('Permissions-Policy')}} avec la directive **`accelerometer`** contrôle si le document courant est autorisé à recueillir des informations sur l'accélération de l'appareil avec l'interface {{DOMxRef('Accelerometer')}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels au constructeur {{DOMxRef("Accelerometer.Accelerometer", "Accelerometer()")}} lèvent une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: accelerometer=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `accelerometer` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader('Permissions-Policy')}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
