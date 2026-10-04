---
title: En-tête Service-Worker
short-title: Service-Worker
slug: Web/HTTP/Reference/Headers/Service-Worker
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Service-Worker`** est inclus dans les requêtes pour la ressource de script d'un <i lang="en">service worker</i>.
Cet en-tête aide les administrateurs à consigner les requêtes de script de <i lang="en">service worker</i> à des fins de surveillance.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker: script
```

## Directives

- `script`
  - : Une valeur indiquant qu'il s'agit d'un script.
    C'est la seule directive autorisée pour cet en-tête.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Service-Worker-Allowed")}}
- [L'API Service worker](/fr/docs/Web/API/Service_Worker_API)
