---
title: En-tête Accept-Language
short-title: Accept-Language
slug: Web/HTTP/Reference/Headers/Accept-Language
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Accept-Language`** indique quelles sont les langues que le client est capable de comprendre, et quelle variante locale est préférée.
En utilisant la [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation), le serveur choisit alors l'une des propositions, l'utilise et informe le client de son choix par l'entête de réponse {{HTTPHeader("Content-Language")}}.
Les navigateurs définissent les valeurs requises pour cet en-tête en fonction de la langue active de leur interface utilisateur.
Les utilisateur·ice·s peuvent aussi définir des langues préférées supplémentaires dans les paramètres du navigateur.

L'en-tête `Accept-Language` liste généralement les mêmes locales que la propriété {{DOMxRef("navigator.languages")}}, avec des valeurs `q` ([valeurs de qualité](/fr/docs/Glossary/Quality_values)) décroissantes. Certains navigateurs, comme Chrome et Safari, ajoutent des balises de repli ne contenant que la langue dans `Accept-Language`. Par exemple, `en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7` lorsque `navigator.languages` vaut `["en-US", "zh-CN"]`. Pour des raisons de confidentialité (réduction de la {{Glossary("fingerprinting", "prise d'empreinte")}}), `Accept-Language` et `navigator.languages` peuvent ne pas inclure la liste complète des préférences utilisateur·ice·s. Par exemple, dans Safari (toujours) et le mode navigation privée de Chrome, une seule langue est listée.

Cet en-tête sert d'indication lorsque le serveur ne peut pas déterminer la langue du contenu cible autrement (par exemple, utiliser une URL spécifique qui dépend d'une décision explicite de l'utilisateur·ice).
Le serveur ne doit jamais passer outre un choix explicite de langue de l'utilisateur·ice. Le contenu d'`Accept-Language` est souvent hors du contrôle de l'utilisateur·ice (par exemple lors d'un voyage).
Un·e utilisateur·ice peut aussi vouloir visiter une page dans une langue différente de celle de l'interface utilisateur.

Le serveur peut retourner un code d'erreur {{HTTPStatus("406", "406 Not Acceptable")}} lorsqu'il ne peut pas servir de contenu dans une langue correspondante, mais cela est rarement mis en œuvre.
Les serveurs ignorent souvent l'en-tête `Accept-Language` dans ces cas et retournent une réponse réussie avec la ressource la plus appropriée pour une meilleure expérience utilisateur·ice.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "En-tête de requête sûr pour le CORS")}}
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

\* Les valeurs ne peuvent contenir que `0-9`, `A-Z`, `a-z`, l'espace ou les caractères `*,-.;=`.

## Syntaxe

```http
Accept-Language: <language>
Accept-Language: *

// Type multiples, pondérés par la syntaxe de valeur de qualité :
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Directives

- `<language>`
  - : Une balise de langue (parfois appelée «&nbsp;identifiant de locale&nbsp;»).
    Elle se compose d'une balise de langue de base de 2 à 3 lettres qui indique une langue, éventuellement suivie de sous-balises supplémentaires séparées par `-`.
    L'information supplémentaire la plus courante est la variante de pays ou de région (comme `en-US` ou `fr-CA`) ou le type d'alphabet à utiliser (comme `sr-Latn`).
    D'autres variantes, comme le type d'orthographe (`de-DE-1996`), ne sont généralement pas utilisées dans le contexte de cet en-tête.
- `*` (joker)
  - : Toute langue qui ne correspond à aucune autre langue présente dans le champ `Accept-Language`.
- `;q=` (pondération q)
  - : Toute valeur placée selon un ordre de préférence exprimé à l'aide d'une {{Glossary("Quality values", "valeur de qualité")}} relative appelée _poids_.
    La valeur de qualité par défaut est `1`.

## Exemples

### Utilisation des en-têtes `Accept-Language`

La requête suivante indique une préférence pour l'allemand en utilisant la langue de base `de`&nbsp;:

```http
Accept-Language: de
```

### Utilisation des valeurs de qualité dans `Accept-Language`

La requête suivante indique une préférence plus forte pour le danois, mais accepte l'anglais britannique et d'autres types d'anglais avec une priorité inférieure&nbsp;:

```http
Accept-Language: da, en-gb;q=0.8, en;q=0.7
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) HTTP
- En-tête avec le résultat de la négociation de contenu&nbsp;: {{HTTPHeader("Content-Language")}}
- Autres en-têtes similaires&nbsp;: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept")}}
