---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
---

{{HTTPSidebar}}

L'en-tête de requête **`Access-Control-Request-Headers`** est utilisé lors de l'émission d'[une requête de pré-vérification](/fr/docs/Glossary/Preflight_request) pour indiquer au serveur quels sont les [en-têtes HTTP](/fr/docs/Web/HTTP/Headers) que le client pourrait envoyer lors de la requête effective (comme avec [`setRequestHeader()`](/fr/docs/Web/API/XMLHttpRequest/setRequestHeader)). L'en-tête correspondant côté serveur, indiquant en retour au client les en-têtes pouvant être utilisés pour la requête effective, est [`Access-Control-Allow-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Headers).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Request_header">En-tête de requête</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Access-Control-Request-Headers: <nom_en-tete>, <nom_en-tete>, …
```

## Directives

- `<nom_en-tete>`
  - : Une liste [d'en-têtes HTTP](/fr/docs/Web/HTTP/Headers) séparés par des virgules qui sont inclus dans la requête.

## Exemples

```
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Access-Control-Request-Method`](/fr/docs/Web/HTTP/Headers/Access-Control-Request-Method)
