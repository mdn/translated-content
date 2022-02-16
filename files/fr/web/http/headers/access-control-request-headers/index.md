---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
tags:
  - CORS
  - HTTP
  - entête
  - pré-vérification
translation_of: Web/HTTP/Headers/Access-Control-Request-Headers
---
{{HTTPSidebar}}

L'entête **`Access-Control-Request-Headers`** est utilisé quand une requête de pré-vérification ({{glossary("preflight request")}}) et faite vers le serveur pour savoir les entêtes qui seront utilisés après la pré-vérification.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Access-Control-Request-Headers: <header-name>, <header-name>, ...

## Directives

- \<header-name>
  - : Une liste [d'entête HTTP](/en-US/docs/Web/HTTP/Headers) séparé par des virgules qui sont inclus dans la requête.

## Exemples

    Access-Control-Request-Headers: X-PINGOTHER, Content-Type

Dans cet exemple le serveur en réponse à la demande de pré-vérification indiquer au demandeur de la pré-vérification que la requête suivante sera accepté si elle contient _X-PINGOTHER_ ou _Content-type_.

## Spécifications

| Spécification                                                                                                                | Status                   | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName('Fetch','#http-access-control-request-headers', 'Access-Control-Request-Headers')}} | {{Spec2("Fetch")}} | Initial definition. |

## Compatibilité navigateur

{{Compat("http/headers/access-control-request-headers")}}

## Voir également

- {{HTTPHeader("Access-Control-Request-Method")}}
