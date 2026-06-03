---
title: En-tête If-Match
short-title: If-Match
slug: Web/HTTP/Reference/Headers/If-Match
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`If-Match`** rend une requête [conditionnelle](/fr/docs/Web/HTTP/Guides/Conditional_requests).
Un serveur retournera les ressources pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, ou acceptera l'envoi d'une ressource pour {{HTTPMethod("PUT")}} et d'autres méthodes non sûres, uniquement si la ressource correspond à l'une des valeurs {{HTTPHeader("ETag")}} dans l'en-tête de requête `If-Match`.
Si la condition n'est pas remplie, la réponse {{HTTPStatus("412", "412 Precondition Failed")}} est renvoyée.

La comparaison avec l'{{HTTPHeader("ETag")}} stockée utilise l'algorithme de comparaison forte, ce qui signifie que deux fichiers sont considérés comme identiques octet par octet.
Si une `ETag` listée possède le préfixe `W/` indiquant une entité faible (<i lang="en">Weak</i> en anglais), cet algorithme de comparaison ne la fera jamais correspondre.

Il existe deux cas d'utilisation courants&nbsp;:

- Pour les méthodes {{HTTPMethod("GET")}} et {{HTTPMethod("HEAD")}}, utilisé avec l'en-tête {{HTTPHeader("Range")}}, cela garantit que les nouvelles plages demandées proviennent de la même ressource que la précédente.
- Pour les autres méthodes, et en particulier pour {{HTTPMethod("PUT")}}, `If-Match` peut être utilisé pour éviter le [problème de mise à jour perdue <sup>(angl.)</sup>](https://www.w3.org/1999/04/Editing/#3.1).
  Il permet de vérifier que la modification d'une ressource que l'utilisateur·ice souhaite envoyer n'écrasera pas une autre modification effectuée depuis la récupération de la ressource d'origine.

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
If-Match: <etag_value>
If-Match: <etag_value>, <etag_value>, …
```

## Directives

- `<etag_value>`
  - : Balises d'entité représentant de façon unique les ressources demandées.
    Ce sont des chaînes de caractères {{Glossary("ASCII")}} placées entre guillemets doubles (comme `"675af34563dc-tr34"`).
    Elles peuvent être préfixées par `W/` pour indiquer qu'elles sont «&nbsp;faibles&nbsp;», c'est-à-dire qu'elles représentent la ressource sémantiquement mais pas octet par octet.
    Cependant, dans un en-tête `If-Match`, les balises d'entité faibles ne correspondront jamais.
- `*`
  - : L'astérisque est une valeur spéciale représentant n'importe quelle ressource.
    Notez que cela doit correspondre à `false` si le serveur d'origine n'a pas de représentation actuelle pour la ressource cible.

## Exemples

```http
If-Match: "bfc13a64729c4290ef5b2c2730249c88ca92d82d"

If-Match: "67ab43", "54ed21", "7892dd"

If-Match: *
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("ETag")}}
- Les en-têtes de requête conditionnelle {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}
- Le code de statut {{HTTPStatus("412", "412 Precondition Failed")}}
