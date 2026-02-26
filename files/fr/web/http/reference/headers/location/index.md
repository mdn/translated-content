---
title: En-tête Location
short-title: Location
slug: Web/HTTP/Reference/Headers/Location
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Location`** indique l'URL vers laquelle rediriger une page.
Il n'a de signification que lorsqu'il est envoyé avec une [réponse de redirection](/fr/docs/Web/HTTP/Reference/Status#redirection_messages) `3XX` ou une réponse de statut {{HTTPStatus("201", "201 Created")}}.

Lors des redirections, la méthode HTTP utilisée pour effectuer la requête redirigée afin d'obtenir la page pointée par `Location` dépend de la méthode d'origine et du type de redirection&nbsp;:

- Les réponses {{HTTPStatus("303", "303 See Other")}} entraînent toujours une requête {{HTTPMethod("GET")}} lors de la redirection.
- {{HTTPStatus("307", "307 Temporary Redirect")}} et {{HTTPStatus("308", "308 Permanent Redirect")}} utilisent la même méthode que la requête initiale.
- {{HTTPStatus("301", "301 Moved Permanently")}} et {{HTTPStatus("302", "302 Found")}} devraient utiliser la même méthode de requête que la requête initiale, bien que cela ne soit pas garanti pour les anciens agents utilisateur.

Toutes les réponses avec l'un des codes de statut ci-dessus incluent un en-tête `Location`.

En cas de création de ressource, il indique l'URL de la ressource nouvellement créée afin qu'un·e client·e puisse la demander immédiatement.

`Location` et {{HTTPHeader("Content-Location")}} sont différents.
`Content-Location` indique l'URL à utiliser pour accéder directement à la ressource à l'avenir lorsque [la négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) a eu lieu.
`Location` est associé à la réponse, tandis que {{HTTPHeader("Content-Location")}} est associé à la représentation qui a été retournée.

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
Location: <url>
```

## Directives

- `<url>`
  - : Peut être relative à l'URL de la requête ou une URL absolue.

## Exemples

```http
Location: /index.html
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Location")}}
- État des réponses, y compris un en-tête `Location`&nbsp;: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
