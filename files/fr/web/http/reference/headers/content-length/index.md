---
title: En-tête Content-Length
short-title: Content-Length
slug: Web/HTTP/Reference/Headers/Content-Length
l10n:
  sourceCommit: 89835e4310224a4b87d97ed2214556aa5d5ccb1e
---

L'en-tête HTTP **`Content-Length`** indique la taille, en octets, du corps du message envoyé au destinataire.

`Content-Length` est limité dans le sens où la taille du message doit être connue à l'avance, avant d'envoyer les en-têtes, ce qui pose problème lorsque le contenu est généré dynamiquement ou diffusé en flux.

- En HTTP/1.0, il est requis.
- En HTTP/1.1, il peut être remplacé par {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} pour les réponses envoyées en plusieurs parties, car leur taille est calculée.
- En HTTP/2, `Content-Length` est redondant, car la longueur du contenu peut être déduite des trames DATA. Il peut néanmoins être inclus pour la rétrocompatibilité.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}},
        {{Glossary("Content header", "En-tête de contenu")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Length: <length>
```

## Directives

- `<length>`
  - : La longueur en octet (en base 10).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Transfer-Encoding")}}
