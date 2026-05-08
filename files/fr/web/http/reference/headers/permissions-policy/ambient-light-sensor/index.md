---
title: "Permissions-Policy : directive ambient-light-sensor"
short-title: ambient-light-sensor
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ambient-light-sensor
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader('Permissions-Policy')}} avec la directive **`ambient-light-sensor`** contrôle si le document courant est autorisé à recueillir des informations sur la quantité de lumière dans l'environnement autour de l'appareil avec l'interface {{DOMxRef('AmbientLightSensor')}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels au constructeur {{DOMxRef("AmbientLightSensor.AmbientLightSensor", "AmbientLightSensor()")}} lèvent une {{DOMxRef("DOMException")}} de type `SecurityError`.

## Syntaxe

```http
Permissions-Policy: ambient-light-sensor=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `ambient-light-sensor` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader('Permissions-Policy')}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
