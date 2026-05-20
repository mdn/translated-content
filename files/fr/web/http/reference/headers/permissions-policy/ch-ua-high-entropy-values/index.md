---
title: "Permissions-Policy : directive ch-ua-high-entropy-values"
short-title: ch-ua-high-entropy-values
slug: Web/HTTP/Reference/Headers/Permissions-Policy/ch-ua-high-entropy-values
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`ch-ua-high-entropy-values`** contrôle si le document courant est autorisé à utiliser la méthode {{DOMxRef("NavigatorUAData.getHighEntropyValues()")}} pour récupérer des données utilisateur·ice à haute entropie.

Si la permission n'est pas accordée, la méthode ne retourne que les données à faible entropie `brands`, `mobile` et `platform`.

## Syntaxe

```http
Permissions-Policy: ch-ua-high-entropy-values=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `ch-ua-high-entropy-values` est `*`.

## Exemples

### Restreindre les données à haute entropie à des origines spécifiques

La politique suivante ne permettrait qu'à l'origine actuelle et à deux autres origines spécifiques de récupérer des données à haute entropie.

```http
Permissions-Policy: ch-ua-high-entropy-values=("self https://a.exemple.com" "https://b.exemple.com")
```

Vous pourriez ensuite intégrer l'une des deux autres origines&nbsp;:

```html
<iframe src="https://a.exemple.com" allow="ch-ua-high-entropy-values"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API d'indices client de l'agent utilisateur](/fr/docs/Web/API/User-Agent_Client_Hints_API)
