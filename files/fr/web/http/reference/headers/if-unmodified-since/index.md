---
title: En-tête If-Unmodified-Since
short-title: If-Unmodified-Since
slug: Web/HTTP/Reference/Headers/If-Unmodified-Since
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`If-Unmodified-Since`** rend la requête pour la ressource [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).
Le serveur enverra la ressource demandée (ou l'acceptera dans le cas d'une méthode {{HTTPMethod("POST")}} ou d'une autre méthode qui n'est pas {{Glossary("Safe/HTTP", "sûre")}}) uniquement si la ressource sur le serveur n'a pas été modifiée après la date dans l'en-tête de requête.
Si la ressource a été modifiée après la date définie, la réponse sera une erreur {{HTTPStatus("412", "412 Precondition Failed")}}.

L'en-tête `If-Unmodified-Since` est couramment utilisé dans les situations suivantes&nbsp;:

- En conjonction avec des méthodes non {{Glossary("Safe/HTTP", "sûres")}} comme {{HTTPMethod("POST")}}, cet en-tête peut être utilisé pour mettre en œuvre un [contrôle d'accès optimiste <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Optimistic_concurrency_control), comme le font certains wikis&nbsp;: les révisions sont rejetées si le document stocké a été modifié depuis la récupération de l'original, évitant ainsi les conflits.
- En conjonction avec une requête de plage utilisant l'en-tête {{HTTPHeader("Range")}}, cet en-tête peut être utilisé pour garantir que le nouveau fragment demandé provient d'un document non modifié.

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

## Syntaxe

```http
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

- `<day-name>`
  - : L'un des mots `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` ou `Sun` (sensible à la casse).
- `<day>`
  - : Numéro de jour à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;23&nbsp;».
- `<month>`
  - : L'un des mots `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec` (sensible à la casse).
- `<year>`
  - : Numéro d'année à 4 chiffres, par exemple «&nbsp;1990&nbsp;» ou «&nbsp;2018&nbsp;».
- `<hour>`
  - : Numéro d'heure à 2 chiffres, par exemple «&nbsp;09&nbsp;» ou «&nbsp;23&nbsp;».
- `<minute>`
  - : Numéro de minute à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- `<second>`
  - : Numéro de seconde à 2 chiffres, par exemple «&nbsp;04&nbsp;» ou «&nbsp;59&nbsp;».
- GMT
  - : Temps sur le Méridien de Greenwich. Les dates HTTP sont toujours exprimées en GMT, jamais en heure locale.

## Exemples

```http
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- L'en-tête {{HTTPHeader("Last-Modified")}}
- Les en-têtes de requête de plage {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}}
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-None-Match")}}
- Les codes de statut de réponse {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
