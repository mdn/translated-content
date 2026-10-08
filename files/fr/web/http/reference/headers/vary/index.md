---
title: En-tête Vary
short-title: Vary
slug: Web/HTTP/Reference/Headers/Vary
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Vary`** décrit les parties du message de requête (à l'exception de la méthode et de l'URL) qui ont influencé le contenu de la réponse dans laquelle il apparaît.
Inclure un en-tête `Vary` garantit que les réponses sont mises en cache séparément en fonction des en-têtes répertoriés dans le champ `Vary`.
Le plus souvent, cela est utilisé pour créer une clé de cache lorsque la [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) est utilisée.

La même valeur d'en-tête `Vary` doit être utilisée sur toutes les réponses pour une URL donnée, y compris les réponses {{HTTPStatus("304")}} `Not Modified` et la réponse «&nbsp;par défaut&nbsp;».

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
Vary: *
Vary: <header-name>, …, <header-nameN>
```

## Directives

- `*` (joker)
  - : Des facteurs autres que les en-têtes de requête ont influencé la génération de cette réponse. Cela implique que la réponse ne peut pas être mise en cache.
- `<header-name>`
  - : Le nom d'un en-tête de requête qui peut avoir influencé la génération de cette réponse.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation)
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary)
- [Comprendre l'en-tête Vary <sup>(angl.)</sup>](https://www.smashingmagazine.com/2017/11/understanding-vary-header/) sur smashingmagazine.com (2017)
- [Les bonnes pratiques pour utiliser l'en-tête Vary <sup>(angl.)</sup>](https://www.fastly.com/blog/best-practices-using-vary-header) sur fastly.com
