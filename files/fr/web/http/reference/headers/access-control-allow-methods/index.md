---
title: En-tête Access-Control-Allow-Methods
short-title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Allow-Methods`** indique une ou plusieurs [méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods) autorisées lors de l'accès à une ressource en réponse à une {{Glossary("preflight request", "requête préliminaire")}}.

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Directives

- `<method>`
  - : Liste, séparée par des virgules, des méthodes de requête autorisées. `GET`, `HEAD` et `POST` sont toujours autorisées, qu'elles soient spécifiées ou non dans cet en-tête, car elles sont définies comme [méthodes sûres pour le CORS <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#cors-safelisted-method).
- `*` (joker)
  - : Toutes les méthodes HTTP.
    Cette signification n'est valable que pour les requêtes sans justificatifs (requêtes sans [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) ou information d'authentification HTTP). Pour les requêtes avec justificatifs, elle est traitée comme le nom littéral de méthode `*` sans sémantique particulière.

## Exemples

```http
Access-Control-Allow-Methods: PUT, DELETE
Access-Control-Allow-Methods: *
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Origin")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Expose-Headers")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Headers")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Request-Method")}}
- [Méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
