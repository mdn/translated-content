---
title: En-tête Max-Forwards
short-title: Max-Forwards
slug: Web/HTTP/Reference/Headers/Max-Forwards
l10n:
  sourceCommit: 77b4195dec3174497169d2e2de35e1eae29139f0
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Max-Forwards`** est utilisé avec les méthodes {{HTTPMethod("TRACE")}} et {{HTTPMethod("OPTIONS")}} pour limiter le nombre de nœuds (généralement des {{Glossary("Proxy_server", "serveurs mandataires")}}) que la requête traverse.

Sa valeur est un entier indiquant le _nombre maximal_ de nœuds qu'elle doit visiter.
À chaque nœud, la valeur est décrémentée et la requête est transmise au nœud suivant jusqu'à ce que la destination soit atteinte ou que la valeur reçue de `Max-Forwards` soit zéro.
La requête est alors renvoyée (en excluant les en-têtes sensibles si nécessaire) comme corps d'une réponse {{HTTPStatus("200")}}.
Cela permet au·à la client·e de voir ce qui est reçu à l'autre extrémité de la chaîne de requête (l'en-tête {{HTTPHeader("Via")}} est particulièrement intéressant) à des fins de test ou de diagnostic.

Si l'en-tête `Max-Forwards` n'est pas présent dans une requête `TRACE` ou `OPTIONS`, un nœud supposera qu'il n'y a pas de nombre maximal de transmissions.

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
Max-Forwards: <integer>
```

## Exemples

```http
Max-Forwards: 0
Max-Forwards: 10
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cette fonctionnalité n'est ni destinée ni implémentée dans les navigateurs.

## Voir aussi

- La méthode {{HTTPMethod("TRACE")}}
- La méthode {{HTTPMethod("OPTIONS")}}
- Le code de statut {{HTTPStatus("405", "405 Method Not Allowed")}}
