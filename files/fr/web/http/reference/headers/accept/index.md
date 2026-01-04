---
title: En-tête Accept
short-title: Accept
slug: Web/HTTP/Reference/Headers/Accept
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} et {{Glossary("response header", "de réponse")}} HTTP **`Accept`** indique quels types de contenu, exprimés sous forme de [types MIME](/fr/docs/Web/HTTP/Guides/MIME_types), l'émetteur·rice est capable de comprendre.
Dans les requêtes, le serveur utilise la [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) pour sélectionner l'une des propositions et informe le client du choix avec l'en-tête de réponse {{HTTPHeader("Content-Type")}}.
Dans les réponses, il fournit des informations sur les types de contenu que le serveur peut comprendre dans les messages vers la ressource demandée, afin que le type de contenu puisse être utilisé dans les requêtes ultérieures vers la ressource.

Les navigateurs définissent les valeurs requises pour cet en-tête en fonction du contexte de la requête.
Par exemple, un navigateur utilise des valeurs différentes dans une requête lors de la récupération d'une feuille de style CSS, d'une image, d'une vidéo ou d'un script.

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

\* Les valeurs ne peuvent pas contenir de [octets d'en-tête de requête non sûrs pour CORS <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte), y compris `"():<>?@[\]{},`, supprimer `0x7F`, et les caractères de contrôle de `0x00` à `0x19`, sauf la tabulation `0x09`.

## Syntaxe

```http
Accept: <media-type>/<MIME_subtype>
Accept: <media-type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Directives

- `<media-type>/<subtype>`
  - : Un type MIME unique et déterminé [MIME type](/fr/docs/Web/HTTP/Guides/MIME_types), comme par exemple `text/html`.
- `<media-type>/*`
  - : un type MIME type ne comprenant pas de sous-type. `image/*` prendra en charge `image/png`, `image/svg`, `image/gif` et tous autres types d'image.
- `*/*`
  - : Tout type MIME
- `;q=` (facteur de pondération q)
  - : N'importe quelle valeur utilisée est placée selon un ordre de préférence exprimé par une {{Glossary("quality values", "valeur de qualité")}} relative appelée le _poids_.

## Exemples

### Utilisation des en-têtes `Accept` par défaut

Les requêtes HTTP effectuées avec des outils en ligne de commande comme [curl <sup>(angl.)</sup>](https://curl.se/) et [wget <sup>(angl.)</sup>](https://www.gnu.org/software/wget/) utilisent `*/*` comme valeur par défaut pour `Accept`&nbsp;:

```http
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

La navigation dans un navigateur utilise généralement la valeur d'en-tête de requête `Accept` suivante&nbsp;:

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
…
```

Après réception du document, les valeurs `Accept` par défaut dans les requêtes pour les images sur l'exemple `developer.mozilla.org` ressemblent à ceci&nbsp;:

```http
Accept: image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5
```

### Configuration des en-têtes `Accept` pour les réponses JSON

Les systèmes qui impliquent une interaction avec une API demandent couramment des réponses `application/json`.
Voici un exemple de requête {{HTTPMethod("GET")}} où le client demande spécifiquement une réponse JSON&nbsp;:

```http
GET /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
Accept: application/json
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation) HTTP
- [Liste des valeurs Accept par défaut](/fr/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)
- [Restrictions sur les en-têtes de requête autorisés CORS](/fr/docs/Glossary/CORS-safelisted_request_header#restrictions_supplémentaires)
- En-tête avec le résultat de la négociation de contenu&nbsp;: {{HTTPHeader("Content-Type")}}
- Autres en-têtes similaires&nbsp;: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}
