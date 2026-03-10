---
title: En-tête If-None-Match
short-title: If-None-Match
slug: Web/HTTP/Reference/Headers/If-None-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`If-None-Match`** rend la requête [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).
Le serveur renvoie la ressource demandée pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}} avec un statut {{HTTPStatus("200")}}, uniquement s'il ne possède pas d'{{HTTPHeader("ETag")}} correspondant à ceux présents dans l'en-tête `If-None-Match`.
Pour les autres méthodes, la requête ne sera traitée que si l'{{HTTPHeader("ETag")}} de la ressource éventuellement existante ne correspond à aucune des valeurs listées.

Quand la condition échoue pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, le serveur doit retourner un code statut {{HTTPStatus("304", "304 Not Modified")}} et toutes les en-têtes suivantes qui auraient été envoyées avec une réponse 200 à la même requête&nbsp;: `Cache-Control`, `Content-Location`, `Date`, `ETag`, `Expires`, et `Vary`.
Pour les méthodes qui appliquent des changements côté serveur, le code {{HTTPStatus("412", "412 Precondition Failed")}} est utilisé si la condition échoue.

La comparaison avec l'ETag stocké utilise _l'algorithme de comparaison faible_, ce qui signifie que deux fichiers sont considérés comme identiques si leur contenu est équivalent — ils n'ont pas besoin d'être identiques octet par octet.
Par exemple, deux pages qui diffèrent uniquement par leur date de création dans le pied de page seraient tout de même considérées comme identiques.

Lorsqu'il est utilisé en combinaison avec {{HTTPHeader("If-Modified-Since")}}, `If-None-Match` a la priorité si le serveur le prend en charge.

Il existe deux cas courants d'utilisation de `If-None-Match` dans les requêtes&nbsp;:

- Pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, pour mettre à jour une entité en cache qui a un ETag associé.
- Pour les autres méthodes, et en particulier pour {{HTTPMethod("PUT")}}, `If-None-Match` utilisé avec la valeur `*` peut servir à enregistrer un fichier uniquement s'il n'existe pas déjà, garantissant que le téléversement n'écrasera pas accidentellement un autre envoi et ne perdra pas les données du précédent `PUT`&nbsp;; ce problème est une variante du [problème de la mise à jour perdue <sup>(angl.)</sup>](https://www.w3.org/1999/04/Editing/#3.1).

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
If-None-Match: "<etag_value>"
If-None-Match: "<etag_value>", "<etag_value>", …
If-None-Match: *
```

## Directives

- `<etag_value>`
  - : Des tags d'entité représentant de façon unique les ressources demandées. Ce sont des chaînes de caractères {{Glossary("ASCII")}} entre guillemets doubles (comme `"675af34563dc-tr34"`) et peuvent être préfixés par `W/` pour indiquer que l'algorithme de comparaison faible doit être utilisé (inutile avec `If-None-Match` car il n'utilise que cet algorithme).
- `*`
  - : L'astérisque est une valeur spéciale représentant toute ressource. Ils ne sont utilies que quand on téléverse une ressource, habituellement avec {{HTTPMethod("PUT")}}, pour vérifier si une autre ressource avec cette identité a déjà été téléversée avant.

## Exemples

```http
If-None-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-None-Match: W/"67ab43", "54ed21", "7892dd"

If-None-Match: *
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("ETag")}}
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}
- Les codes de statut de réponse {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
