---
title: "Permissions-Policy : directive compute-pressure"
short-title: compute-pressure
slug: Web/HTTP/Reference/Headers/Permissions-Policy/compute-pressure
l10n:
  sourceCommit: e1ba93217506c754efb52ff8e84cd7314e091211
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`compute-pressure`** contrôle l'accès à [l'API Compute Pressure](/fr/docs/Web/API/Compute_Pressure_API).

## Syntaxe

```http
Permissions-Policy: compute-pressure=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `compute-pressure` est `self`, ce qui permet l'utilisation dans des cadres imbriqués de la même origine tout en empêchant le contenu tiers d'utiliser la fonctionnalité. Les workers (dédiés et partagés) respectent la politique de permissions définie par leur document propriétaire.

## Exemples

### Activer la pression de calcul sur du contenu tiers

L'utilisation par des tiers peut être activée de manière sélective en utilisant l'attribut `allow` sur les éléments HTML {{HTMLElement("iframe")}}&nbsp;:

```html
<iframe src="https://exemple.com" allow="compute-pressure"></iframe>
```

### Désactiver complètement l'API Compute Pressure

Cet en-tête de réponse HTTP désactive complètement la pression de calcul&nbsp;:

```http
Permissions-Policy: compute-pressure=()
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Compute Pressure](/fr/docs/Web/API/Compute_Pressure_API)
