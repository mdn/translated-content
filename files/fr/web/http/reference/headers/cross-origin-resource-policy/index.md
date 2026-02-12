---
title: En-tête Cross-Origin-Resource-Policy (CORP)
short-title: Cross-Origin-Resource-Policy
slug: Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Cross-Origin-Resource-Policy`** (CORP) indique que le navigateur doit bloquer les requêtes inter-origines ou inter-sites [`no-cors`](/fr/docs/Web/API/RequestInit#no-cors) vers la ressource donnée.

Il définit la politique du propriétaire de la ressource concernant les sites/origines autorisés à charger cette ressource.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

### Directives

- `same-site`
  - : Les ressources ne peuvent être chargées que depuis le même site.

- `same-origin`
  - : Les ressources ne peuvent être chargées que depuis la même origine.

- `cross-origin`
  - : Les ressources peuvent être chargées par n'importe quelle autre origine/site web.

## Exemples

Pour plus d'exemples, voir https://resourcepolicy.fyi/.

### Interdire les requêtes `no-cors` inter-origines

L'en-tête `Cross-Origin-Resource-Policy` ci-dessous fera en sorte que les agents utilisateurs compatibles refusent les requêtes `no-cors` inter-origines&nbsp;:

```http
Cross-Origin-Resource-Policy: same-origin
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Explication de la Cross-Origin Resource Policy (CORP)](/fr/docs/Web/HTTP/Guides/Cross-Origin_Resource_Policy)
- [Envisager de déployer Cross-Origin Resource Policy <sup>(angl.)</sup>](https://resourcepolicy.fyi/)
- L'en-tête {{HTTPHeader("Cross-Origin-Embedder-Policy")}}
- L'en-tête {{HTTPHeader("Access-Control-Allow-Origin")}}
