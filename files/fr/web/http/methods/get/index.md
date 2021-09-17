---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - Reference
  - Request method
translation_of: Web/HTTP/Methods/GET
original_slug: Web/HTTP/Méthode/GET
---
{{HTTPSidebar}}

La **méthode HTTP GET** demande une représentation de la ressource spécifiée. Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">La requête a un corps</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">Une réponse de succès a un corps</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe","Sûre")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","Idempotente")}}</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable","Peut être mise en cache")}}
      </th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Autorisée dans les formulaires HTML</th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    GET /index.html

## Spécifications

| Spécification                            | Titre                                                         |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/methods", "GET")}}

## Voir aussi

- {{HTTPHeader("Range")}}
