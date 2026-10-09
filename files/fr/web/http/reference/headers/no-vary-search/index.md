---
title: En-tête No-Vary-Search
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: d260e0bf3f2ba3091e71ba1a7d0427c7d396e6ac
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`No-Vary-Search`** définit un ensemble de règles qui déterminent comment les paramètres de requête d'une URL affectent la correspondance du cache.
Ces règles déterminent si la même URL avec des paramètres différents doit être enregistrée comme des entrées de cache distinctes dans le navigateur.

Cela permet au navigateur de réutiliser les ressources existantes malgré des paramètres URL incompatibles afin d'éviter le coût lié à la récupération de la ressource, lorsque le même contenu est retourné.

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
No-Vary-Search: key-order, params, except=("param1" "param2")
```

## Directives

- `key-order` {{Optional_Inline}}
  - : Indique que le navigateur ne doit pas créer d'entrée de cache distincte pour une réponse si l'ordre dans lequel les paramètres apparaissent dans l'URL est la seule différence.
- `params` {{Optional_Inline}}
  - : Soit un booléen, soit une liste de chaînes de caractères&nbsp;:
    - En tant que booléen (`params`), cela indique que le navigateur ne doit pas créer d'entrées de cache distinctes pour les réponses qui ne diffèrent que par la présence, l'ordre ou la valeur de n'importe quel paramètre.
    - En tant que liste interne de chaînes de caractères séparées par des espaces (`params=("param1" "param2")`), cela indique que le navigateur ne doit pas créer d'entrées de cache distinctes pour les réponses qui ne diffèrent que par la présence, l'ordre ou la valeur des paramètres listés.
      D'autres paramètres peuvent encore entraîner la mise en cache distincte de la réponse.
- `except` {{Optional_Inline}}
  - : Une liste interne de chaînes de caractères séparées par des espaces (`except=("param1" "param2")`) qui indique les paramètres pour lesquels une valeur différente doit amener le navigateur à créer une entrée de cache distincte.
    Une directive booléenne `params` doit être incluse pour que cela prenne effet (`params, except=("param1" "param2")`).
    La présence d'autres paramètres qui ne sont pas dans la liste `except=` ne doit pas amener le navigateur à créer une entrée de cache distincte.

## Description

Par défaut, une réponse stockée pour une URL n'est réutilisée que pour une requête vers cette même URL exacte.
Toute différence dans la chaîne de caractères de requête en fait une URL différente&nbsp;: une valeur de paramètre différente, un paramètre supplémentaire, ou même les mêmes paramètres écrits dans un ordre différent.

Ceci est souvent plus strict que nécessaire.
Les paramètres de requête sont fréquemment utilisés pour des éléments qui ne changent pas la réponse envoyée par le serveur, tels que les balises d'analyse et les valeurs sur lesquelles seul le JavaScript côté client agit.
Une page peut également construire sa chaîne de caractères de requête dans un ordre de paramètres incohérent.
Le navigateur n'a aucun moyen de savoir ce qui est pertinent, il récupère donc depuis le réseau et met en cache le résultat chaque fois qu'il voit une chaîne de caractères de requête qu'il n'a pas encore demandée.

`No-Vary-Search` donne au serveur un moyen d'indiquer au navigateur si l'ordre des paramètres a de l'importance, et quels paramètres (le cas échéant) affectent la réponse retournée.
Lorsque les règles le permettent, le navigateur peut alors fournir une réponse stockée pour une URL qu'il n'a pas encore récupérée.

### Relation avec l'API Speculation Rules

[L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) prend en charge l'utilisation de l'en-tête `No-Vary-Search` pour réutiliser une page préchargée ou pré-rendue existante pour différents paramètres d'URL — s'ils sont inclus dans l'en-tête `No-Vary-Search`.

> [!WARNING]
> Il faut faire particulièrement attention lors de l'utilisation du pré-rendu avec `No-Vary-Search`, car la page peut être initialement pré-rendue avec des paramètres d'URL différents. `No-Vary-Search` concerne des paramètres d'URL qui fournissent la même ressource depuis le serveur, mais qui sont utilisés par le client pour diverses raisons (rendu côté client, paramètres UTM pour la mesure d'audience, etc.). Comme le pré-rendu initial peut concerner des paramètres d'URL différents, tout code dépendant de ceux-ci ne doit s'exécuter qu'après l'activation du pré-rendu.

L'API Speculation Rules peut également inclure un champ `expects_no_vary_search`, qui indique au navigateur quelle est la valeur attendue de `No-Vary-Search` (le cas échéant) pour les documents pour lesquels il reçoit des requêtes de préchargement/pré-rendu par les règles de spéculation. Le navigateur peut utiliser cela pour déterminer à l'avance s'il est plus utile d'attendre la fin d'un préchargement/pré-rendu existant, ou de lancer une nouvelle requête lorsque la règle de spéculation est satisfaite. Voir [l'exemple "expects_no_vary_search"](/fr/docs/Web/HTML/Reference/Elements/script/type/speculationrules#exemple_de_expects_no_vary_search) pour une explication de son utilisation.

## Exemples

### Autoriser les réponses d'URL avec des paramètres dans un ordre différent à correspondre à la même entrée de cache

Si, par exemple, vous avez une page de recherche qui stocke ses critères dans les paramètres d'URL, et que vous ne pouvez pas garantir que les paramètres sont ajoutés dans le même ordre à chaque fois, vous pouvez autoriser les réponses d'URL identiques à l'exception de l'ordre des paramètres à correspondre à la même entrée de cache en utilisant `key-order`&nbsp;:

```http
No-Vary-Search: key-order
```

Lorsque cet en-tête est ajouté aux réponses associées, les URL suivantes sont considérées comme équivalentes lors de la recherche dans le cache&nbsp;:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

La présence de paramètres d'URL différents entraîne toutefois la mise en cache séparée de ces URL. Par exemple&nbsp;:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Les exemples ci-dessous illustrent comment contrôler quels paramètres sont ignorés pour la correspondance du cache.

### Autoriser les réponses d'URL avec un paramètre différent à correspondre à la même entrée de cache

Considérez le cas d'une page d'annuaire d'utilisateur·ice·s `/users` déjà mise en cache. Un paramètre `id` peut servir à afficher les informations d'un·e utilisateur·ice spécifique, par exemple `/users?id=345`. Le fait que cette URL doive être considérée identique pour la correspondance du cache dépend du comportement de l'application&nbsp;:

- Si ce paramètre a pour effet de charger une page entièrement nouvelle contenant les informations relatives à l'utilisateur·ice défini·e, la réponse provenant de cette URL doit être mise en cache séparément.
- Si ce paramètre a pour effet de mettre en évidence l'utilisateur·ice défini·e sur la même page, et peut-être de révéler un panneau déroulant affichant ses données, il est préférable que le navigateur utilise la réponse mise en cache pour `/users`. Cela peut entraîner des améliorations de performance lors du chargement des pages utilisateur.

Si votre application se comporte comme dans le second exemple, vous pouvez faire en sorte que `/users` et `/users?id=345` soient traitées comme identiques pour la mise en cache à l'aide d'un en-tête `No-Vary-Search` ainsi&nbsp;:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Si un paramètre est exclu de la clé de cache avec `params`, s'il est présent dans l'URL il est ignoré pour la correspondance du cache, peu importe où il apparaît dans la liste des paramètres.

### Autoriser les réponses d'URL avec plusieurs paramètres différents à correspondre à la même entrée de cache

Supposons que vous disposiez également de paramètres URL permettant de trier la liste des utilisateur·ice·s sur la page par ordre alphabétique croissant ou décroissant, et de définir la langue d'affichage des chaînes de caractères de l'interface utilisateur, par exemple `/users?id=345&order=asc&lang=fr`.

Vous pouvez demander au navigateur d'ignorer tous ces paramètres pour la correspondance du cache comme suit&nbsp;:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> En tant que [champ structuré <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc8941/), les paramètres doivent être des chaînes de caractères entre guillemets séparées par des espaces — comme indiqué ci-dessus — et non séparées par des virgules, ce à quoi les développeur·euse·s peuvent être plus habitués.

Si vous souhaitez que le navigateur les ignore tous _et_ tout autre paramètre éventuellement présent, vous pouvez utiliser la forme booléenne de `params`&nbsp;:

```http
No-Vary-Search: params
```

### Définir les paramètres qui _provoquent_ des échecs de correspondance du cache

Supposons que l'application se comporte différemment, avec `/users` pointant vers la page principale de l'annuaire et `/users?id=345` pointant vers une page de détail distincte. Dans ce cas, vous voulez que le navigateur ignore les paramètres mentionnés ci-dessus pour la correspondance du cache, _sauf_ `id`, dont la présence empêche la correspondance et oblige le navigateur à demander `/users?id=345` au serveur.

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
