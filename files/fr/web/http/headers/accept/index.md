---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - Entête HTTP
  - Entête de Requête
  - HTTP
  - Reference
translation_of: Web/HTTP/Headers/Accept
---
{{HTTPSidebar}}

Le paramètre d'entête de requête HTTP **`Accept`** indique quels sont les types de contenu, exprimés sous la forme de types MIME, que le client sera capable d'interpréter. Par le biais de la résolution de contenu -([content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)), le serveur sélectionne ensuite une proposition parmi toutes, l'utilise et informe le client de son choix avec l'entête de réponse {{HTTPHeader("Content-Type")}}. Les navigateurs fixent des valeurs adéquates pour cet entête selon le contexte où la requête a été exécutée : selon que l'utilisateur souhaite récupérer une feuille de style css,  ou qu'il souhaite récupérer une image, une vidéo ou un script, la valeur fixée pour la requête ne sera pas la même.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Accept: <MIME_type>/<MIME_subtype>
    Accept: <MIME_type>/*
    Accept: */*

    // Types multiples, pondérés {{glossary("quality values", "quality value")}} par la syntaxe :
    Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8

## Directives

- `<MIME_type>/<MIME_subtype>`
  - : Un type MIME unique et déterminé [MIME type](/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), comme par exemple `text/html`.
- `<MIME_type>/*`
  - : un type MIME type ne comprenant pas de sous-type. `image/*` prendra en charge `image/png`, `image/svg`, `image/gif` et tous autres types d'image.
- `*/*`
  - : Tout type MIME
- `;q=` (facteur de pondération q)
  - : N'importe quelle valeur utilisée est placée selon un ordre de préférence exprimé par une valeur de qualité ([quality value](/en-US/docs/Glossary/Quality_values)) relative appelée le _poids_.

## Exemples

    Accept: text/html

    Accept: image/*

    Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8

## Specifications

| Specification                                | Titre                                                              |
| -------------------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7231", "Accept", "5.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Vocabulaire et cas d'usage |

## Compatibilité des navigateurs

{{Compat("http.headers.Accept")}}

## Voir aussi

- HTTP [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation)
- Entête avec le résultat de la résolution de contenu : {{HTTPHeader("Content-Type")}}
- Autres entêtes similaires : {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
