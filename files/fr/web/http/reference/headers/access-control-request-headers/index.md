---
title: En-tête Access-Control-Request-Headers
short-title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Access-Control-Request-Headers`** est utilisé par les navigateurs lors de l'émission d'une {{Glossary("preflight request", "requête préliminaire")}} pour indiquer au serveur quels [en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) le client pourrait envoyer lors de la requête réelle (par exemple avec {{DOMxRef("Window/fetch", "fetch()")}} ou {{DOMxRef("XMLHttpRequest.setRequestHeader()")}}). L'en-tête côté serveur complémentaire {{HTTPHeader("Access-Control-Allow-Headers")}} répondra à cet en-tête côté navigateur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## Directives

- `<header-name>`
  - : Une liste [d'en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) séparés par des virgules qui sont inclus dans la requête.

## Exemples

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Request-Method")}}
