---
title: En-tête Retry-After
short-title: Retry-After
slug: Web/HTTP/Reference/Headers/Retry-After
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Retry-After`** indique pendant combien de temps l'agent utilisateur doit attendre avant d'effectuer une requête de suivi.
Il existe trois cas principaux d'utilisation de cet en-tête&nbsp;:

- Dans une réponse {{HTTPStatus("503", "503 Service Unavailable")}}, il indique pendant combien de temps le service est censé être indisponible.
- Dans une réponse {{HTTPStatus("429", "429 Too Many Requests")}}, il indique pendant combien de temps attendre avant d'effectuer une nouvelle requête.
- Dans une réponse de redirection, comme {{HTTPStatus("301", "301 Moved Permanently")}}, il indique le temps minimum que l'agent utilisateur doit attendre avant d'émettre la requête redirigée.

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
Retry-After: <http-date>
Retry-After: <delay-seconds>
```

## Directives

- `<http-date>`
  - : Une date après laquelle réessayer. Voir l'en-tête {{HTTPHeader("Date")}} pour plus de détails sur le format de date HTTP.
- `<delay-seconds>`
  - : Un entier décimal non négatif indiquant le nombre de secondes à attendre après la réception de la réponse.

## Exemples

### Gérer les interruptions planifiées

La prise en charge de l'en-tête `Retry-After` côté clients et serveurs reste inégale. Cependant, certains robots d'exploration, comme Googlebot, respectent l'en-tête `Retry-After`. Il est utile de l'envoyer avec une réponse `503`, afin que les moteurs de recherche continuent d'indexer votre site lorsque la panne est terminée.

```http
Retry-After: Wed, 21 Oct 2015 07:28:00 GMT
Retry-After: 120
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("503", "503 Service Unavailable")}}
- Le code de statut {{HTTPStatus("301", "301 Moved Permanently")}}
- [Gérer les interruptions planifiées <sup>(angl.)</sup>](https://developers.google.com/search/blog/2011/01/how-to-deal-with-planned-site-downtime) sur developers.google.com (2011)
