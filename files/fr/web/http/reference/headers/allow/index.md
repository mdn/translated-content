---
title: En-tête Allow
short-title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Allow`** liste l'ensemble des [méthodes de requête](/fr/docs/Web/HTTP/Reference/Methods) prises en charge par une ressource.
Cet en-tête doit être envoyé si le serveur répond avec le code d'état {{HTTPStatus("405", "405 Method Not Allowed")}} pour indiquer quelles méthodes de requête peuvent être utilisées à la place.
Une valeur `Allow` vide indique que la ressource n'autorise aucune méthode de requête, ce qui peut se produire temporairement pour une ressource donnée.

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
Allow: <http-methods>
```

## Directives

- `<http-methods>`
  - : La liste des méthodes de requête autorisées, séparées par des virgules.

## Exemples

```http
Allow: GET, POST, HEAD
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("405", "405 Method Not Allowed")}}
- L'en-tête HTTP {{HTTPHeader("Server")}}
- La méthode HTTP {{HTTPMethod("OPTIONS")}}
