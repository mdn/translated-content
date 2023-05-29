---
title: 'Feature-Policy: accelerometer'
slug: Web/HTTP/Headers/Permissions-Policy/accelerometer
translation_of: Web/HTTP/Headers/Feature-Policy/accelerometer
original_slug: Web/HTTP/Headers/Feature-Policy/accelerometer
browser-compat: http.headers.Feature-Policy.accelerometer
---

{{HTTPSidebar}}{{SeeCompatTable}}

La directive `accelerometer` de l'en-tête HTTP [`Feature-Policy`](/fr/docs/Web/HTTP/Headers/Feature-Policy) contrôle la possibilité pour le document courant de recueillir des informations à propos de l'accélération de l'appareil au moyen de l'interface [`Accelerometer`](/fr/docs/Web/API/Accelerometer).

## Syntaxe

```http
Feature-Policy: accelerometer <allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la fonctionnalité est autorisée. Voir [`Feature-Policy`](/fr/docs/Web/HTTP/Headers/Feature-Policy#syntaxe).

## Règle par défaut

Pour cette fonctionnalité, la valeur par défaut pour `allowlist` est `'self'`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête [`Feature-Policy`](/fr/docs/Web/HTTP/Headers/Feature-Policy)
- [Règles de gestion pour les fonctionnalités (<i lang="en">Feature Policy</i>)](/fr/docs/Web/HTTP/Feature_Policy)
- [Utiliser `Feature-Policy`](/fr/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
