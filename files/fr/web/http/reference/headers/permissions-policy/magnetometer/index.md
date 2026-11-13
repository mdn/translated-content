---
title: "Permissions-Policy : directive magnetometer"
short-title: magnetometer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/magnetometer
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`magnetometer`** contrôle si le document actuel est autorisé à collecter des informations sur l'orientation de l'appareil avec l'interface {{DOMxRef("Magnetometer")}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels au constructeur {{DOMxRef("Magnetometer.Magnetometer", "Magnetometer()")}} lèvent une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: magnetometer=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `magnetometer` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
