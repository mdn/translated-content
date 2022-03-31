---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
tags:
  - HTTP
  - en-tête
  - header
translation_of: Web/HTTP/Headers/Content-Length
---
{{HTTPSidebar}}

L'en-tête (_header_) **`Content-Length`** indique la taille en octets (exprimée en base 10) du corps de la réponse envoyée au client.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Content-Length: <longueur>

## Directives

- \<longueur>
  - : La longueur en octet (en base 10).

## Spécifications

| Spécification                                            | Titre                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Content-Length", "3.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## Compatibilité des navigateurs

{{Compat("http/headers/content-length")}}

## Voir aussi

- {{HTTPHeader("Transfer-Encoding")}}
