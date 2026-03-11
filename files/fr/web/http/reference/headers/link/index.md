---
title: En-tête Link
short-title: Link
slug: Web/HTTP/Reference/Headers/Link
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'en-tête HTTP **`Link`** permet de sérialiser un ou plusieurs liens dans les en-têtes HTTP.
Ceci permet au serveur d'indiquer au client une autre ressource contenant des métadonnées sur la ressource demandée.
Cet en-tête a la même sémantique que l'élément HTML {{HTMLElement("link")}}.
Un avantage de l'utilisation de l'en-tête `Link` est que le navigateur peut commencer à préconnecter ou précharger des ressources avant même que le HTML ne soit récupéré et traité.

En pratique, la plupart des [types de liens `rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) n'ont pas d'effet lorsqu'ils sont utilisés avec l'en-tête HTTP.
Par exemple, la relation `icon` ne fonctionne qu'en HTML, et `stylesheet` ne fonctionne pas de manière fiable sur tous les navigateurs (seulement dans Firefox).
Les seules relations qui fonctionnent de manière fiable sont [`preconnect`](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect) et [`preload`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload), qui peuvent être combinées avec {{HTTPStatus(103, "103 Early Hints")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}}, {{Glossary("Request header", "en-tête de requête")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Link: <uri-reference>; param1=value1; param2="value2"
```

- `<uri-reference>`
  - : La référence URI doit être encadrée par `<` et `>` et {{Glossary("Percent-encoding", "encodée en pourcentage")}}.

### Paramètres

L'en-tête de liaison contient des paramètres, qui sont séparés avec des `;` et sont équivalents aux attributs de l'élément HTML {{HTMLElement("link")}}.
Les valeurs peuvent être entre guillemets ou non, selon les [règles des composants de valeur de champ <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.6), donc `x=y` est équivalent à `x="y"`.

## Exemples

L'URI (absolue ou relative) doit être déclarée entre `<` et `>`&nbsp;:

```http example-good
Link: <https://exemple.com>; rel="preconnect"
```

```http example-bad
Link: https://mauvais.exemple; rel="preconnect"
```

### Encodage des URL

L'URI (absolue ou relative) doit {{Glossary("Percent-encoding", "être encodée en pourcentage")}} pour les codes de caractères supérieurs à 255&nbsp;:

```http example-good
Link: <https://exemple.com/%E8%8B%97%E6%9D%A1>; rel="preconnect"
```

```http example-bad
Link: <https://exemple.com/苗条>; rel="preconnect"
```

### Déclarer plusieurs liens

Il est possible de définir plusieurs liens, en les séparant par des virgules&nbsp;:

```http
Link: <https://un.exemple.com>; rel="preconnect", <https://deux.exemple.com>; rel="preconnect", <https://trois.exemple.com>; rel="preconnect"
```

### Pagination avec des liens

L'en-tête `Link` peut fournir des informations de pagination à un client, ce qui est couramment utilisé pour accéder à des ressources de manière programmatique&nbsp;:

```http
Link: <https://api.exemple.com/issues?page=2>; rel="prev", <https://api.exemple.com/issues?page=4>; rel="next", <https://api.exemple.com/issues?page=10>; rel="last", <https://api.exemple.com/issues?page=1>; rel="first"
```

Dans ce cas, `rel="prev"` et `rel="next"` indiquent les relations de lien pour les pages précédente et suivante, et il y a les paramètres `rel="last"` et `rel="first"` qui fournissent les premières et dernières pages des résultats de recherche.

### Contrôler la priorité de récupération

Même en utilisant [`preload`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) pour récupérer une ressource le plus tôt possible, différents types de contenu seront récupérés plus tôt ou plus tard selon la priorisation interne du navigateur.
L'attribut [`fetchpriority`](/fr/docs/Web/HTML/Reference/Elements/link#fetchpriority) peut être utilisé pour indiquer au navigateur qu'une ressource particulière aura un impact relatif plus ou moins important sur l'expérience utilisateur que d'autres ressources du même type.

Par exemple, l'en-tête ci-dessous peut être utilisé pour précharger `style.css` avec une priorité plus élevée que d'autres feuilles de style&nbsp;:

```http
Link: </style.css>; rel=preload; as=style; fetchpriority="high"
```

Notez que la priorisation interne pour la récupération des ressources et l'effet de la directive `fetchpriority` dépendent du navigateur.
La directive `fetchpriority` doit être utilisée avec parcimonie, et uniquement dans les cas où le navigateur ne peut pas déduire qu'une ressource particulière doit être traitée avec une priorité différente.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le code de statut {{HTTPStatus("103", "103 Early Hints")}}
- L'élément HTML {{HTMLElement("link")}}
- [Les relations de lien <sup>(angl.)</sup>](https://www.iana.org/assignments/link-relations/link-relations.xhtml) registre IANA
- [Optimiser le chargement des ressources avec l'API Fetch Priority <sup>(angl.)</sup>](https://web.dev/articles/fetch-priority?hl=fr#browser_priority_and_fetchpriority) pour des informations sur la façon dont cette API affecte les priorités sur Chrome.
