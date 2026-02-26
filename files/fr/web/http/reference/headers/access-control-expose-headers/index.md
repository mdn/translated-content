---
title: En-tête Access-Control-Expose-Headers
short-title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Expose-Headers`** permet à un serveur d'indiquer quels en-têtes de réponse doivent être rendus accessibles aux scripts exécutés dans le navigateur en réponse à une requête inter-origines.

Seuls les {{Glossary("CORS-safelisted response header", "en-têtes de réponse sûrs pour le CORS")}} sont exposés par défaut. Pour que les clients puissent accéder à d'autres en-têtes, le serveur doit les lister à l'aide de l'en-tête `Access-Control-Expose-Headers`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Directives

- `<header-name>`
  - : Une liste de zéro ou plusieurs [noms d'en-tête](/fr/docs/Web/HTTP/Reference/Headers) séparés par des virgules auxquels les clients sont autorisés à accéder depuis une réponse.
    Ceux-ci s'ajoutent aux {{Glossary("CORS-safelisted response header", "en-têtes de réponse sûrs pour le CORS")}}.
- `*` (joker)
  - : Tout en-tête.
    La valeur `*` n'est considérée comme une valeur joker spéciale que pour les requêtes sans justificatifs (requêtes sans [cookies HTTP](/fr/docs/Web/HTTP/Guides/Cookies) ou information d'authentification HTTP).
    Pour les requêtes avec justificatifs, elle est traitée comme le nom d'en-tête littéral `*`.

## Exemples

Les {{Glossary("CORS-safelisted response header", "en-têtes de réponse sûrs pour le CORS")}} sont&nbsp;: {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}}. Pour exposer un en-tête de réponse qui n'est pas sûr pour le CORS, vous pouvez définir&nbsp;:

```http
Access-Control-Expose-Headers: Content-Encoding
```

Pour exposer également un en-tête personnalisé, comme `Kuma-Revision`, vous pouvez définir plusieurs en-têtes séparés par une virgule&nbsp;:

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

Pour les requêtes sans justificatifs, un serveur peut aussi répondre avec une valeur joker&nbsp;:

```http
Access-Control-Expose-Headers: *
```

Un serveur peut aussi répondre avec la valeur `*` pour les requêtes avec justificatifs, mais dans ce cas cela désigne un en-tête nommé `*`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Headers")}}
- L'en-tête HTTP {{HTTPHeader("Access-Control-Allow-Origin")}}
