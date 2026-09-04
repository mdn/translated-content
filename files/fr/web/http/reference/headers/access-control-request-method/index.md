---
title: En-tête Access-Control-Request-Method
short-title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Access-Control-Request-Method`** est utilisé par les navigateurs lors de l'émission d'une {{Glossary("preflight request", "requête préliminaire")}} pour indiquer au serveur quelle [méthode HTTP](/fr/docs/Web/HTTP/Reference/Methods) sera utilisée lors de la requête réelle.
Cet en-tête est nécessaire car la requête préliminaire est toujours une {{HTTPMethod("OPTIONS")}} et n'utilise pas la même méthode que la requête réelle.

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
Access-Control-Request-Method: <method>
```

## Directives

- `<method>`
  - : Une [méthode de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)&nbsp;; par exemple, {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}} ou {{HTTPMethod("DELETE")}}.

## Exemples

```http
Access-Control-Request-Method: POST
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Access-Control-Request-Headers")}}
