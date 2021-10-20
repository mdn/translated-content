---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
  - Code de statut
  - HTTP
  - Reference
  - redirections
translation_of: Web/HTTP/Status/302
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`302`\*\***` Found`\*\* indique que la ressource est temporairement déplacée vers l'URL contenue dans l'en-tête {{HTTPHeader("Location")}}. Un navigateur redirige vers cette page, mais les moteurs de recherche ne mettent pas à jour leurs liens vers la ressource (en termes de référencement, cela indique que le flux de référencement n'est pas envoyé vers la nouvelle URL).

Même si la spécification impose que la méthode et le corps ne soient pas altérés lors d'une redirection, tous les agents utilisateurs ne s'y conforment pas et il est toujours possible de trouver des logiciels bogués sur ce point. Il est donc recommandé d'utiliser le code `302` uniquement comme réponse à une méthode {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} et d'utiliser le code  {{HTTPStatus("307")}} `Temporary Redirect` à la place puisque le changement de méthode est explicitement interdit dans ce cas.

Si vous souhaitez que la méthode utilisée soit changée en {{HTTPMethod("GET")}}, vous pouvez utiliser {{HTTPStatus("303")}} `See Also` à la place. Ceci s'avère utile lorsqu'on souhaite donner une réponse à une méthode {{HTTPMethod("PUT")}} qui n'est pas la ressource téléversée, mais plutôt un message de confirmation (par exemple "Vous avez téléversé avec succès XYZ").

## Statut

    302 Found

## Spécifications

| Spécification                                        | Titre                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "302 Found" , "6.4.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "302")}}

## Voir aussi

- {{HTTPStatus("307")}} `Temporary Redirect`, l'équivalent de ce code de statut, mais qui ne change jamais la méthode utilisée.
- {{HTTPStatus("303")}} `See Also`, une redirection temporaire qui change la méthode utilisée par {{HTTPMethod("GET")}}.
- {{HTTPStatus("301")}} `Moved Permanently`, la redirection permanente.
