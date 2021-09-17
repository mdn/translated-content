---
title: 304 Not Modified
slug: Web/HTTP/Status/304
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/304
---
{{HTTPSidebar}}

Le code de réponse de redirection **`304`\*\***` Not Modified`\*_ indique qu'il n'y a pas besoin de retransmettre les ressources demandées. C'est une redirection implicite vers une ressource mise en cache. Cela survient lorsque la méthode de requête est _{{glossary("safe")}}\* (par exemple une requête {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}), ou lorsque la requête est conditionnelle et utilise l'en-tête {{HTTPHeader("If-None-Match")}} ou {{HTTPHeader("If-Modified-Since")}}.

La réponse {{HTTPStatus("200")}} `OK` équivalente aurait inclus les en-têtes {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, et {{HTTPHeader("Vary")}}.

> **Note :** Dans les navigateurs, [les outils de développement réseau](/fr/docs/Outils/Moniteur_réseau) créent des requêtes supplémentaires qui conduisent à des réponses `304`. Ainsi l'accès au cache local est visible par les développeurs .

## Statut

    304 Not Modified

## Spécifications

| Spécification                                            | Titre                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "304 Not Modified" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Compatibilité des navigateurs

{{Compat("http/status", "304")}}

## Voir aussi

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
