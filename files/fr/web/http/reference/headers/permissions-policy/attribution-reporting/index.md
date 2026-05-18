---
title: "Permissions-Policy : directive attribution-reporting"
short-title: attribution-reporting
slug: Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{Deprecated_Header}}{{Non-standard_Header}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`attribution-reporting`** contrôle si le document courant est autorisé à utiliser [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité&nbsp;:

- Les requêtes d'arrière-plan `attributionsrc` ne sont pas effectuées.
- La méthode {{DOMxRef("XMLHttpRequest.setAttributionReporting()")}} lève une exception lorsqu'elle est appelée.
- L'option [`attributionReporting`](/fr/docs/Web/API/RequestInit#attributionreporting), lorsqu'elle est incluse dans un appel à {{DOMxRef("Window/fetch", "fetch()")}}, provoque également une exception.
- Les en-têtes d'enregistrement ({{HTTPHeader("Attribution-Reporting-Register-Source")}} et {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}) dans les réponses HTTP des documents associés sont ignorés.

## Syntaxe

```http
Permissions-Policy: attribution-reporting=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `attribution-reporting` est `*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [L'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API)
