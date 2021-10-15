---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/301
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`301`\*\***` Moved Permanently`\*\* indique que la ressource a définitivement été déplacée à l'URL contenue dans l'en-tête  {{HTTPHeader("Location")}}. Un navigateur redirigera vers cette page et les moteurs de recherche mettront à jour leurs liens vers la ressource (en termes de référencement, cela implique que le flux de référencement est envoyé vers la nouvelle URL).

Même si la spécification impose que la méthode et le corps ne soient pas altérés lors d'une redirection, tous les agents utilisateurs ne s'y conforment pas et il est possible de trouver des logiciels bogués sur ce point. Il est donc recommandé d'utiliser le code `301` uniquement pour répondre à une requête {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, et de privilégier le code {{HTTPStatus("308")}} `Permanent Redirect` pour répondre à {{HTTPMethod("POST")}} puisque le changement de méthode est explicitement interdit avec ce statut.

## Statut

    301 Moved Permanently

## Spécifications

| Spécification                                                            | Titre                                                         |
| ------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "301 Redirect Permanently" , "6.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "301")}}

## Voir aussi

- {{HTTPStatus("308")}} `Permanent Redirect`
- {{HTTPStatus("302")}} `Found`, la redirection temporaire.
