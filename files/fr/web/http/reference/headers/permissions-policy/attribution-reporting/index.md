---
title: "Permissions-Policy : directive attribution-reporting"
short-title: attribution-reporting
slug: Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Deprecated_Header}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`attribution-reporting`** contrôle si le document courant est autorisé à utiliser [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité&nbsp;:

- Les requêtes d'arrière-plan `attributionsrc` ne seront pas effectuées.
- La méthode {{DOMxRef("XMLHttpRequest.setAttributionReporting()")}} lèvera une exception lorsqu'elle sera appelée.
- L'option [`attributionReporting`](/fr/docs/Web/API/RequestInit#attributionreporting), lorsqu'elle est incluse dans un appel à {{DOMxRef("Window/fetch", "fetch()")}}, provoquera également une exception.
- Les en-têtes d'enregistrement ({{HTTPHeader("Attribution-Reporting-Register-Source")}} et {{HTTPHeader("Attribution-Reporting-Register-Trigger")}}) dans les réponses HTTP des documents associés seront ignorés.

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
