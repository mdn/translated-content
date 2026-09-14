---
title: En-tête Access-Control-Allow-Headers
short-title: Access-Control-Allow-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Headers
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Allow-Headers`** est utilisé en réponse à une {{Glossary("preflight request", "requête préliminaire")}} pour indiquer les en-têtes HTTP qui peuvent être utilisés lors de la requête réelle.
Cet en-tête est requis si la requête préliminaire contient {{HTTPHeader("Access-Control-Request-Headers")}}.

> [!NOTE]
> Les {{Glossary("CORS-safelisted_request_header", "en-têtes de requête sûrs pour le CORS")}} sont toujours autorisés et ne sont généralement pas listés dans `Access-Control-Allow-Headers` sauf s'il est nécessaire de contourner les [restrictions supplémentaires de la liste sûre](/fr/docs/Glossary/CORS-safelisted_request_header#restrictions_supplémentaires).

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
Access-Control-Allow-Headers: <header-name>
Access-Control-Allow-Headers: <header-name>, <header-name>
Access-Control-Allow-Headers: *
```

## Directives

- `<header-name>`
  - : Le nom d'un en-tête de requête pris en charge. L'en-tête peut lister n'importe quel nombre d'en-têtes, séparés par des virgules.
- `*` (joker)
  - : Tout en-tête.
    La valeur `*` n'est considérée comme une valeur joker spéciale que pour les requêtes sans justificatifs (requêtes sans [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) ou information d'authentification HTTP).
    Pour les requêtes avec justificatifs, elle est traitée comme le nom d'en-tête littéral `*` sans sémantique particulière.
    L'en-tête {{HTTPHeader("Authorization")}} n'accepte pas le joker et doit toujours être listé explicitement.

## Exemples

### Implémentation d'un en-tête personnalisé

Voici un exemple d'en-tête `Access-Control-Allow-Headers`.
Il indique qu'un en-tête personnalisé nommé `X-Custom-Header` est pris en charge par les requêtes CORS vers le serveur, en plus des {{Glossary("CORS-safelisted_request_header", "en-têtes de requête sûrs pour le CORS")}}.

```http
Access-Control-Allow-Headers: X-Custom-Header
```

### Prise en charge de plusieurs en-têtes

Cet exemple montre `Access-Control-Allow-Headers` lorsqu'il indique la prise en charge de plusieurs en-têtes.

```http
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Contournement des restrictions supplémentaires sur les en-têtes sûrs pour le CORS

Bien que les {{Glossary("CORS-safelisted_request_header", "en-têtes de requête sûrs pour le CORS")}} soient toujours autorisés et n'aient généralement pas besoin d'être listés dans `Access-Control-Allow-Headers`, les lister permet de contourner les [restrictions supplémentaires](/fr/docs/Glossary/CORS-safelisted_request_header#restrictions_supplémentaires) qui s'appliquent.

```http
Access-Control-Allow-Headers: Accept
```

### Gestion des requêtes préliminaires

Voici un exemple de {{Glossary("preflight request", "requête préliminaire")}} impliquant `Access-Control-Allow-Headers`.

#### Requête

Tout d'abord, la requête préliminaire est une requête {{HTTPMethod("OPTIONS")}} qui inclut une combinaison des trois en-têtes de requête préliminaire&nbsp;: {{HTTPHeader("Access-Control-Request-Method")}}, {{HTTPHeader("Access-Control-Request-Headers")}} et {{HTTPHeader("Origin")}}.

La requête préliminaire ci-dessous indique au serveur que nous souhaitons envoyer une requête CORS `GET` avec les en-têtes listés dans {{HTTPHeader("Access-Control-Request-Headers")}} ({{HTTPHeader("Content-Type")}} et `X-Requested-With`).

```http
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: content-type,x-requested-with
Origin: https://www.example.com
```

#### Réponse

Si la requête CORS indiquée par la requête préliminaire est autorisée, le serveur répondra à la requête préliminaire avec un message indiquant l'origine, les méthodes et les en-têtes autorisés. Ci-dessous, on voit que `Access-Control-Allow-Headers` inclut les en-têtes demandés.

```http
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://www.example.com
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

Si la méthode demandée n'est pas prise en charge, le serveur répondra avec une erreur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Origin")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Expose-Headers")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Methods")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Request-Headers")}}
