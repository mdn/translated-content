---
title: If-None-Match
slug: Web/HTTP/Headers/If-None-Match
---

L'en-tête de requête HTTP **`If-None-Match`** permet de conditionner la requête. Pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, le serveur renvoie la ressource demandée, avec un statut {{HTTPStatus("200")}}, seulement si elle n'a pas un {{HTTPHeader("ETag")}} correspondant à ceux fournis. Pour les autres méthodes, la requête ne sera traitée que si l'{{HTTPHeader("ETag")}} de l'éventuelle ressource existante ne correspond à aucune des valeurs listées.

Quand la condition échoue pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, le serveur doit retourner un code statut HTTP 304 (Not Modified). Pour les méthodes appliquant des changements côté serveur, le code statut 412 (Precondition Failed) est utilisé. Notez que le serveur générant une réponse 304 DOIT générer toutes les en-têtes qui auraient été envoyées avec une réponse 200 (OK) à la même requête : Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

La comparaison avec l'{{HTTPHeader("ETag")}} stocké utilise l'_algorithme de comparaison faible_, c'est-à-dire que 2 fichiers sont considérés identiques pas seulement s'ils sont identiques octet à octet mais si leurs contenus sont équivalents. Par exemple, 2 pages dont seule la date de génération dans le pied de page diffère seraient considérées identiques.

Quand utilisé avec {{HTTPHeader("If-Modified-Since")}}, il a la priorité (si le serveur le supporte).

Il y a 2 cas d'utilisation communs:

- Pour les méthodes {{HTTPMethod("GET")}} and {{HTTPMethod("HEAD")}}, pour mettre à jour une entité en cache qui a un {{HTTPHeader("ETag")}} associé.
- Pour les autres méthodes, et en particulier pour {{HTTPMethod("PUT")}}, `If-None-Match` avec pour valeur `*` peut être utilisé pour sauver un fichier dont on ne sait pas s'il existe, garantissant qu'un autre téléversement n'a pas été fait avant, perdant les données du précédent chargement ; ce problème est une variation du [problème de la mise à jour perdue](https://www.w3.org/1999/04/Editing/#3.1).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Nom d'en-tête interdit")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
If-None-Match: "<valeur_etag>"
If-None-Match: "<valeur_etag>", "<valeur_etag>", …
If-None-Match: *
```

## Directives

- \<etag_value>
  - : Des tags d'entité représentant de façon unique les ressources demandées. Ce sont des chaînes de caractères ASCII entre guillemets doubles (comme `"675af34563dc-tr34"`) et peuvent être préfixés par `W/` pour indiquer que l'algorithme de comparaison faible doit être utilisé (inutile avec `If-None-Match` car il n'utilise que cet algorithme).
- `*`
  - : L'astérisque est une valeur spéciale représentant toute ressource. Ils ne sont utilies que quand on téléverse une ressource, habituellement avec {{HTTPMethod("PUT")}}, pour vérifier si une autre ressource avec cette identité a déjà été téléversée avant.

## Exemples

```
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("ETag")}}
- {{HTTPHeader("If-Unmodified-Since")}}
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
