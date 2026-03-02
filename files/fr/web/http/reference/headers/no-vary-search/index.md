---
title: En-tête No-Vary-Search
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`No-Vary-Search`** définit un ensemble de règles qui déterminent comment les paramètres de requête d'une URL affectent la correspondance du cache.
Ces règles déterminent si la même URL avec des paramètres différents doit être enregistrée comme des entrées de cache distinctes dans le navigateur.

Cela permet au navigateur de réutiliser les ressources existantes malgré des paramètres URL incompatibles afin d'éviter le coût lié à la récupération de la ressource, lorsque le même contenu sera retournée.

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
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2")
No-Vary-Search: params, except=("param1" "param2")
No-Vary-Search: key-order, params, except=("param1")
```

## Directives

- `key-order` {{Optional_Inline}}
  - : Indique que les URL ne seront pas mises en cache comme des entrées distinctes si _l'ordre_ dans lequel les paramètres apparaissent dans l'URL est la seule différence.
    La présence d'autres paramètres _entraînera_ la mise en cache distincte des URL.
- `params` {{Optional_Inline}}
  - : Soit un booléen, soit une liste de chaînes de caractères&nbsp;:
    - En tant que booléen (`params`), cela indique que les URL qui ne diffèrent que par leurs paramètres ne seront pas mises en cache comme des entrées distinctes.
    - Une liste interne de chaînes séparées par des espaces (`params=("param1" "param2")`).
      Indique que les URL qui ne diffèrent que par les paramètres listés ne seront pas mises en cache comme des entrées distinctes.
      La présence d'autres paramètres _entraînera_ leur mise en cache séparément.
- `except` {{Optional_Inline}}
  - : Une liste interne de chaînes séparées par des espaces (`except=("param1" "param2")`).
    Indique que les URL qui ne diffèrent que par les paramètres listés _seront_ mises en cache comme des entrées distinctes.
    Une directive booléenne `params` doit être incluse pour que cela prenne effet (`params, except=("param1" "param2")`).
    La présence d'autres paramètres qui ne sont pas dans la liste `except=` _n'entraînera pas_ la mise en cache des URL comme des entrées distinctes.

## Description

### Relation avec l'API Speculation Rules

[L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) prend en charge l'utilisation de l'en-tête `No-Vary-Search` pour réutiliser une page préchargée ou pré-rendue existante pour différents paramètres d'URL — s'ils sont inclus dans l'en-tête `No-Vary-Search`.

> [!WARNING]
> Il faut faire particulièrement attention lors de l'utilisation du pré-rendu avec `No-Vary-Search` car la page peut être initialement pré-rendue avec des paramètres d'URL différents. `No-Vary-Search` concerne des paramètres d'URL qui fournissent la même ressource depuis le serveur, mais qui sont utilisés par le client pour diverses raisons (rendu côté client, paramètres UTM pour la mesure d'audience, etc.). Comme le pré-rendu initial peut concerner des paramètres d'URL différents, tout code dépendant de ceux-ci ne doit s'exécuter qu'après l'activation du pré-rendu.

L'API Speculation Rules peut également inclure un champ `expects_no_vary_search`, qui indique au navigateur quelle sera la valeur attendue de `No-Vary-Search` (le cas échéant) pour les documents pour lesquels il reçoit des requêtes de préchargement/pré-rendu via les règles de spéculation. Le navigateur peut utiliser cela pour déterminer à l'avance s'il est plus utile d'attendre la fin d'un préchargement/pré-rendu existant, ou de lancer une nouvelle requête lorsque la règle de spéculation est satisfaite. Voir [l'exemple "expects_no_vary_search"](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules#exemple_de_expects_no_vary_search) pour une explication de son utilisation.

## Exemples

### Autoriser les réponses d'URL avec des paramètres dans un ordre différent à correspondre à la même entrée de cache

Si, par exemple, vous avez une page de recherche qui stocke ses critères dans les paramètres d'URL, et que vous ne pouvez pas garantir que les paramètres seront ajoutés dans le même ordre à chaque fois, vous pouvez autoriser les réponses d'URL identiques à l'exception de l'ordre des paramètres à correspondre à la même entrée de cache en utilisant `key-order`&nbsp;:

```http
No-Vary-Search: key-order
```

Lorsque cet en-tête est ajouté aux réponses associées, les URL suivantes seront considérées comme équivalentes lors de la recherche dans le cache&nbsp;:

```plain
https://search.exemple.com?a=1&b=2&c=3
https://search.exemple.com?b=2&a=1&c=3
```

La présence de paramètres d'URL différents entraînera toutefois la mise en cache séparée de ces URL. Par exemple&nbsp;:

```plain
https://search.exemple.com?a=1&b=2&c=3
https://search.exemple.com?b=2&a=1&c=3&d=4
```

Les exemples ci-dessous illustrent comment contrôler quels paramètres sont ignorés pour la correspondance du cache.

### Autoriser les réponses d'URL avec un paramètre différent à correspondre à la même entrée de cache

Considérez le cas d'une page d'annuaire d'utilisateur·ice·s `/users` déjà mise en cache. Un paramètre `id` peut servir à afficher les informations d'un·e utilisateur·ice spécifique, par exemple `/users?id=345`. Le fait que cette URL doive être considérée identique pour la correspondance du cache dépend du comportement de l'application&nbsp;:

- Si ce paramètre a pour effet de charger une page entièrement nouvelle contenant les informations relatives à l'utilisateur·ice défini·e, la réponse provenant de cette URL doit être mise en cache séparément.
- Si ce paramètre a pour effet de mettre en évidence l'utilisateur·ice défini·e sur la même page, et peut-être de révéler un panneau déroulant affichant ses données, il serait préférable que le navigateur utilise la réponse mise en cache pour `/users`. Cela pourrait entraîner des améliorations de performance lors du chargement des pages utilisateur.

Si votre application se comporte comme dans le second exemple, vous pouvez faire en sorte que `/users` et `/users?id=345` soient traitées comme identiques pour la mise en cache à l'aide d'un en-tête `No-Vary-Search` ainsi&nbsp;:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Si un paramètre est exclu de la clé de cache via `params`, s'il est présent dans l'URL il sera ignoré pour la correspondance du cache, peu importe où il apparaît dans la liste des paramètres.

### Autoriser les réponses d'URL avec plusieurs paramètres différents à correspondre à la même entrée de cache

Supposons que vous disposiez également de paramètres URL permettant de trier la liste des utilisateur·ice·s sur la page par ordre alphabétique croissant ou décroissant, et de définir la langue d'affichage des chaînes de l'interface utilisateur, par exemple `/users?id=345&order=asc&lang=fr`.

Vous pouvez demander au navigateur d'ignorer tous ces paramètres pour la correspondance du cache comme suit&nbsp;:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> En tant que [champ structuré <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc8941), les paramètres doivent être des chaînes de caractères entre guillemets séparées par des espaces — comme indiqué ci-dessus — et non séparées par des virgules, ce à quoi les développeurs peuvent être plus habitués.

Si vous souhaitez que le navigateur les ignore tous _et_ tout autre paramètre éventuellement présent, vous pouvez utiliser la forme booléenne de `params`&nbsp;:

```http
No-Vary-Search: params
```

### Définir les paramètres qui _provoquent_ des échecs de correspondance du cache

Supposons que l'application se comporte différemment, avec `/users` pointant vers la page principale de l'annuaire et `/users?id=345` pointant vers une page de détail distincte. Dans ce cas, vous voudriez que le navigateur ignore les paramètres mentionnés ci-dessus pour la correspondance du cache, _sauf_ `id`, dont la présence empêcherait la correspondance et obligerait le navigateur à demander `/users?id=345` au serveur.

Ceci peut être réalisé ainsi&nbsp;:

```http
No-Vary-Search: params, except=("id")
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
