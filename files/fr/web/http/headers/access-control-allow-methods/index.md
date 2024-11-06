---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

L'entête de réponse **`Access-Control-Allow-Methods`** spécifie les méthodes autorisées quand on accède à la ressource en réponse à une requête de pré-vérification ({{glossary("preflight request")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Access-Control-Allow-Methods: <methode>, <methode>, ...
```

## Directives

- \<methode>
  - : Liste délimitée par des virgules des [méthodes de requêtes HTTP](/fr/docs/Web/HTTP/Methods) autorisées.

## Exemples

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
