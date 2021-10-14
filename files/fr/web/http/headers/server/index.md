---
title: Serveur
slug: Web/HTTP/Headers/Server
tags:
  - HTTP
  - Reference
  - header
translation_of: Web/HTTP/Headers/Server
original_slug: Web/HTTP/Headers/Serveur
---
{{ HTTPSidebar }}

Le paramètre d'entête **`Server`** contient des informations à propos du système (ou sous-système) en place sur le serveur qui s'occupe de la requête.

Il est préférable d'éviter les valeurs excessivement longues et/ou détaillées : elles peuvent révéler des détails internes qui pourraient rendre (un peu) plus facile une attaque et l'exploitation d'une éventuelle faille de sécurité.

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

    Server: <valeur>

## Directives

- \<valeur>
  - : Le nom du système (ou sous-système) qui gère les requêtes.

## Exemples

    Server: Apache/2.4.1 (Unix)

## Spécifications

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Server", "7.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Navigateurs compatibles

{{Compat("http.headers.Server")}}

## Voir également

- {{HTTPHeader("Allow")}}
